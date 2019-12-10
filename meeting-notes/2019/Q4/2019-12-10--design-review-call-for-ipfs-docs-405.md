# Design Review Call for [ipfs/docs/#405](https://github.com/ipfs/docs/issues/405) (2019-12-10)

AKA _“Hosting Web Apps on IPFS”_ + _“IPFS Companion to stop breaking Origin isolation of DNSLink websites”_

## Attendees

- @momack2
- @autonome
- @cwaring
- @hugomrdias
- @daviddias
- @olizilla
- @lidel


## References

- [ipfs/docs/issues/405](https://github.com/ipfs/docs/issues/405)


# Decisions to make

There are two questions. Loosely coupled. 
Mind that below is a highly distilled gist for the purpose of sync discussion during the call.

### (1) On shipping docs.ipfs.io built on vuepress

TL;DR is that **vuepress does not support relative paths**, and loading website from [path-based gateway](https://docs.ipfs.io/guides/guides/addressing/#path-gateway) (`http://localhost:8080/ipns/docs.ipfs.io`) is broken (assets do not load, links return error 404 etc).


#### This is not only about vuepress. It is about swimming against the flow of the basic security primitive of the web: Origin isolation.

In past we had the same issue with [Hugo](gohugo.io) (it requires configuration change) and [Gatsby](https://www.gatsbyjs.org) (we created a [plugin](https://github.com/moxystudio/gatsby-plugin-ipfs)). This is the same story over and over again: loading website from IPFS's path gateway breaks websites which expect to be loaded from root of unique Origin.


Chris provided good evaluation of all available options in [here](https://github.com/ipfs/docs/issues/405#issue-533894290), but I (@lidel) believe we can't afford all of those choices.

Our realistic options are:

  - **(1A)** **Fix vuepress**: add support for relative paths.
      - 😇 maintains existing status quo of redirecting to `http://localhost:8080/ipns/docs.ipfs.io/`
      - we really don't want to maintain custom plugin to rewrite VuePress compiled output, but it may be the only way to get it work on time
      - if we do this, ideally, it should be by closing upstream issue for everyone: https://github.com/vuejs/vuepress/issues/796
  - **(1B)** Do not fix vuepress. **Fix IPFS.**
    - Other project can use GitHub Pages, Netlify or similar, but we need to make this work for IPFS.
    - Short term (hacky stopgap): make vuepress on docs.ipfs.io "work" when loaded from path-based gateways
        - detect its loaded from `/ipfs/` path and redirect itself to `{cid}.ipfs.dweb.link` or `docs.ipfs.io`
            - caveat: redirect back to `https://docs.ipfs.io` is tricky, as it requires **(2A)** to ship before docs.ipfs.io does (otherwise we get infinite loop). always redirecting to `{cid}.ipfs.dweb.link` is not idea, but would remove dependency on (2A).   
    - Long term: focus on making IPFS gateways work better with Origin isolation provided by browsers thanks to subdomain gateways
      - go-ipfs should support them out of the box
          - requires shipping: https://github.com/ipfs/go-ipfs/issues/6498
      - `*.ipfs.localhost` should be marked as secure context
          - right now only in Chrome: https://github.com/ipfs/in-web-browsers/issues/109#issuecomment-537061478
      - IPFS Companion should detect and redirect path-based requests to local subdomain gateway

          


### (2) On IPFS Companion breaking Origin isolation of DNSLink websites

TL;DR right now our browser extension is redirecting `https://docs.ipfs.io` to `http://localhost:8080/ipns/docs.ipfs.io/` which is not only bad due to issues mentioned in (1), but decreases security isolation (everything under `/ipfs/` paths shares same cookies and web storage etc).
Analysis of possible mitigations can be found in [ipfs-companion/issues/667](https://github.com/ipfs-shipyard/ipfs-companion/issues/667).

Our options at the moment are:

- **(2A)** **continue breaking Origins** until we have subdomain gateway for localhost
  - 😇 maintains existing status quo of redirecting to `http://localhost:8080/ipns/docs.ipfs.io/`
      - requires either **(1A)** or "short term fix" from **(1B)**
  - easy to implement on top of [ipfs-companion/pull/826](https://github.com/ipfs-shipyard/ipfs-companion/pull/826)
    (just change default config to  `dnslinkRedirect: true`)

- **(2B)** **stop breaking Origins**
    - stop redirecting by default until we have local subdomain gateway at `*.ipfs.localhost`
        - still, if someone manually opens `docs.ipfs.io` via path gateway it requires **(1A)** or "short term fix" from **(1B)**
     - in the meantime, we would preload data to local IPFS node in the background to provide same offline/recovery guarantees ([ipfs-companion/pull/827](https://github.com/ipfs-shipyard/ipfs-companion/pull/827))

## Questions

- (@momack2) - 2B depends on 1A or 1B.a for path-based gateway, which requires 2A, which is the opposite of 2B - that doesn't seem possible
    - (@lidel) - i did not lay down all combinations to keep doc short, but redirecting to `{cid}.ipfs.dweb.link` would remove dependency on (2A) and avoid cyclic dependency. 
      - key insight here is to make decision on (1) and (2) separately, then look into what needs to happen in the small overlap between them to make choices work.

- (@olizilla) - we have to move to "cid in subdomains" (security via same-origin sandbox, root relative pathing)... how do we do so and bring existing ipfs users with us? we have not got a good track record of teaching the community about major changes... e.g we are still talking about "hashes" not "cids". We have a lot of writing about /ipfs/QmHash and a desire to unite the local file system with the internet under a unix-like /xyz universe... so as we have to move from /ipfs/QmHash to bafy.ipfs.foo.bar we will need to re-educate everyone. like... we should be talking about the canonical written form of ipfs addresses being bafy.ipfs not /ipfs/QmHash 
    - (@lidel) I've been thinking about this for some time and the only insight i have is that its easier to reason about  if you talk about "content roots" instead of "addresses".
      Start by explaining that CID  === "the content root"
      Then show it can be represented as:
      ```
      /ipfs/bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq
      http://ipfs.io/ipfs/bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq
      ipfs://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq
      https://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq.ipfs.dweb.link
      https://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq.ipfs.localhost
      ```
      Then explain that in browser context, **if you want to use WebAPIs in secure way, the content root needs to be the same as Origin**.

# Meeting Notes

- molly: we want the web to work "relatively". We dont want to encourage folks to use the gateway in the long term. in the short term, using ipfs with companion redirecting to gateway is what provides usage of ipfs.
- chris: breaking the origin model will harm adoption. relative path issue will harm adoption.
- molly: we need to solve the origin model. the relative path issue is somewhat separate. we want all our web frameworks to work relatively.
- dietrich: using companion to redirect to the gateway gives a false sense that it works... the origin model is critical. "we got it to load, therefore we are using ipfs"... seeing a localhost site that was not supposed to be loaded that way is a high risk (exposed to lots of CVEs)... we've created a false sense of adoption, and created a risk. can we seperate out static content? not really the web has moved on.
- hugo: for web content the only medium is the browser. either we lower the security or we cannot work around it. either we're changing the browsers or we're not gonna work.
- teri: we can say "webapps are not a good fit for ipfs". we can pick what we say its for
- oli: what else needs to happen to make the subdomain model to be front and center
- molly: people want to make changes to how default set up (companion + desktop) before we have full subdomain support. it's been discussed to not use local gateways in the meantime while we're working on support. that's a step back. triggered by the docs question. we've had these issue for a while. we have set  expectations with companion + desktop users... what happens if we change the behaviour in the meantime. they are our super users.
- lidel: removing hard q's from the table. making the change before we have local subdomain gateway. we have poc, stop redirect by default, and option to open it manually. it's just a flag. but why now? before we have subdomain gateways? i can see it may not make sense. if folks are publishing to ipfs they probably know they shouldnt rely on origin. (olizilla: do they!?) we can revert the change to remove it from the table. 
- dietrich: cid in subdomain is the minimum bar for safety. after that, most sites make assumptions about origin (cookies, whats in my shopping cart). how can you trust it. taking content from a, and showing it in b, and asking the user to trust that they are not being tricked and the browser is looking after them.
- molly: if its hash-linked you remove the trust issue
- dietrich: only if you trust the source of the hash
- chris: if we declare that ipfs is for hosting the dweb... all sites are apps in the current web... they will be using multiple apis. the origin model is the only way we can have that base benchmark. if we want ipfs to be for hosting web content then the cid subdomain should be a headline priority. fixing the frameworks one by one is not the way to achieve it. We are not able to tackle that. and agreeing on that trickles down to everything, the docs we're writing. we break assumptions right now... fetching files by ipfs, great, its not in the browser, its fine. it's confusing when we say ipfs for hosting the future of the web, given current constraints. glad this has come up.
- molly: we dont have to say ipfs is the right thing for everything. we've talked about upgrade paths for many things. going from static content to webapps, we can define the upgrade path there. we've done experiments, peerpad etc. gatsby & hugo focus more on the static end of things. For the docs of ipfs, it should be available over ipfs. you get the webui, you should get the docs to.
- dietrich: yes: leave the existing defaults. give new users safer defaults.
- hugo: not all our sites are ipfs. and some are broken.
- (we've run out of time, but commited to decisions that unblock us to move forward)

# Decision

In a spirit of [disagree and commit](https://en.wikipedia.org/wiki/Disagree_and_commit), our path to move forward is:

- **(1)** Docs team: do what is necessary for `docs.ipfs.io` to work when loaded from local gateway (http://127.0.0.1:8080/ipns/docs.ipfs.io/)
  - solve relative path problem with a plugin
    or fix upstream vuepress and use a fork for now
- **(2)** Browsers/GUI: do not change current behavior of ipfs-companion
    - continue redirecting DNSLink websites to local gateway by default ([ipfs-companion/pull/831](https://github.com/ipfs-shipyard/ipfs-companion/pull/831))
    - fix origin problem when subdomain gateway for local gateway lands ([go-ipfs/issues/6498](https://github.com/ipfs/go-ipfs/issues/6498))
