# GUI & In Web Browsers Weekly Sync 2019-02-27

-   Moderator: @olizilla
-   Notetaker: @lidel
-   Attendees:
    -   _@jimpick_
    -   _@terichadbourne_
    -   _@andrew_
    -   _@olizilla_
    -   _@hugomrdias_
    -   _@fsdiogo_
    -   _@cwaring_
-   Recording: <https://youtu.be/hGkVST8H-Q8> || [/ipfs/bafybeieiddxcwyve3pfxz4su2trokzr3kw6e3ojbwj32iu2g5pksk6camy](https://ipfs.io/ipfs/bafybeieiddxcwyve3pfxz4su2trokzr3kw6e3ojbwj32iu2g5pksk6camy) 

 


**Preflight checklist**

-   Call for additional agenda items!
-   Ensure that there is a notetaker!
-   Start recording! :^)

  


**Agenda**

_General discussions, decisions, etc._

-   Start with Team Updates and Demos
-   Web UI help system
-   Analytics

**Team Updates**

  


@hacdias

-   Done:
    -   dnslink-cloudflare: a package to update the dnslink DNS record on Cloudflare enabled websites ([Code](https://github.com/ipfs-shipyard/dnslink-cloudflare))
    -   (ipfs-desktop) Released 0.7.0 rc2 ([release](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.7.0-rc.2))
        -   2 friends and I updated successfully on Windows without any issues.
    -   (ipfs-desktop) Check for updates every hour and add option to manually check for updates in the context menu ([PR](https://github.com/ipfs-shipyard/ipfs-desktop/pull/841))
    -   (ipfs-desktop) Update Menubar’s language according to Web UI’s ([PR](https://github.com/ipfs-shipyard/ipfs-desktop/pull/847))
    -   (ipfs-webui) **NEEDS REVIEW** Add Connection ([PR](https://github.com/ipfs-shipyard/ipfs-webui/pull/969))
    -   (ipfs-webui) Random fixes ([PR 972](https://github.com/ipfs-shipyard/ipfs-webui/pull/972))

  


@lidel

-   Done:
    -   (is-ipfs) PR to add multiaddr checks: <https://github.com/ipfs/is-ipfs/pull/27> 
    -   (ipfs-companion)
        -   Per site redirect opt-out ready for review: (<https://github.com/ipfs-shipyard/ipfs-companion/pull/687>)
        -   (small win) hapi v18 (HTTP server used by js-ipfs) works in Brave over chrome.sockets: <https://github.com/ipfs-shipyard/ipfs-companion/issues/664#issuecomment-467854030> 
    -   (i18n) deep dive into [Hugo's Multilingual Mode](https://gohugo.io/content-management/multilingual/) 
    -   (js-mafmt) fix support Buffer input: <https://github.com/multiformats/js-mafmt/pull/39> 
-   Blocked:
    -   <https://github.com/ipfs/is-ipfs/pull/27> by:
        -   <https://github.com/ipfs/aegir/issues/336> 
        -   <https://github.com/multiformats/js-mafmt/pull/39> 
-   Next:
    -   Merge unblocked/reviewed PRs & release new Beta of ipfs-companion

  


@olizilla

-   Done:
    -   Released ipfs-dns-deploy for deploying websites to IPFS via circle
        -   https&#x3A;//github.com/ipfs-shipyard/ipfs-dns-deploy
    -   Released webui 2.4
    -   CI for ipfs website <https://github.com/ipfs/website/pull/294> 
    -   CI fo for filecoin.io <https://github.com/filecoin-project/website/pull/94>
    -   CI for IPFS camp site.
    -   CI for ipld website <https://github.com/ipld/website> 
    -   fix: show interactive output from install.sh https://github.com/ipfs/go-ipfs/pull/6024
    -   Merged the analytics PR!
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/930> 
        -   Much work to do on defining what events are ok to record
        -   <https://github.com/ipfs-shipyard/ipfs-webui/issues/980#issuecomment-467806732> 
    -   Read-only api fools webui.ipfs.io fix <https://github.com/ipfs-shipyard/ipfs-webui/pull/974> 
    -     
-   Blocked:
    -   Need credentials for so many orgs to get CI working.
-   Next:
    -   Plans for Web UI 2.5.0 <https://github.com/ipfs-shipyard/ipfs-webui/issues/978>
    -   Figuring out what analytics are ok [https://github.com/ipfs-shipyard/ipfs-webui/issues/980](https://github.com/ipfs-shipyard/ipfs-webui/issues/980#issuecomment-467806732)

  


@fsdiogo

-   Done:
    -   Refactored the \`FilesList\` component to use \`react-virtualized\`
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/957>
    -   Released Web UI v2.4.0
        -   <https://github.com/ipfs-shipyard/ipfs-webui/releases/tag/v2.4.0>
    -   Use natural sort for files
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/977>
    -   Make analytics opt-in
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/981>
    -   \[WIP] Drop refs for selecting files
        -   <https://github.com/ipfs-shipyard/ipfs-webui/tree/chore/drop-refs-for-files>
-   Next:
    -   Web UI help system
        -   <https://github.com/ipfs-shipyard/ipfs-webui/issues/979>

@hugomrdias

-   Done:
    -   bundle size support aegir
    -   bundle size check in ipfsd-ctl
    -   ipld-dag-pb ci fixing
    -   finish libp2p bundle size PR
    -   travis debugging on windows
    -   reviewed travis support feedback
    -   lots of travis PR reviews
    -   create a new module pull-to-stream <https://github.com/hugomrdias/pull-to-stream>
    -   finished js-ipfs-http-client bundle size PR <https://github.com/ipfs/js-ipfs-http-client/pull/915>
    -   reviewed Per-site Redirect Opt-out #687 PR <https://github.com/ipfs-shipyard/ipfs-companion/pull/687#issuecomment-467542577> and made a prototype <https://codesandbox.io/s/14y8r7qjo3>
    -   feat: upgrade to stream 3 #66 <https://github.com/rvagg/bl/pull/66>
    -   Revisited js-ipfs bundle size PR
-   Blocked:
    -   Libp2p release
    -   Js-ipfs release
-   Next:
    -   find the all ipfs, libp2p, ipld packages that dont deps on anything like multihashing
    -   add benchmarks to travis ci cron job and disable on default one <https://github.com/ipfs/benchmarks/issues/245#issuecomment-461518205>
    -   add benchmarks to CI PRs with filtered tests and no clinic plus dashboard
    -   Finish js-ipfs bundle size PR


@jimpick

-   Done:
    -   Portland trip: Gozala + Kyle
    -   dev.peerpad.net deployed via CircleCI! (thanks @olizilla)
-   Next:
    -   PeerPad to production (needs backup to IPLD/IPNS)
    -   Search for collaboration opportunities… PeerPad + ?
    -   Lunet experimenting? WebPackage / Signed HTTP Exchanges?

@terichadbourne

-   Done:
    -   🏥
-   Still:
    -   Continuing work on creating a ProtoSchool tutorial on the File API (suggestions welcome)
        -   Issue: <https://github.com/ProtoSchool/protoschool.github.io/issues/91#issuecomment-456457377> 
        -   WIP PR: <https://github.com/ProtoSchool/protoschool.github.io/pull/111> 
-   Help wanted:
    -   Need to chat with @olizilla about whether the bug people keep reporting when trying to use IPLD Explorer from ProtoSchool is ProtoSchool’s fault or IPLD Explorer’s fault and how to fix:
        -   <https://github.com/ProtoSchool/protoschool.github.io/issues/164>
        -   <https://github.com/ProtoSchool/protoschool.github.io/issues/125>
-   Next:
    -   Post issues for various projects to highlight their needs as I create the ProtoSchool roadmap.

  
  


**Discussion Highlights**

_Discussion highlights and additional notes._

-   (Brave) We got hapi v18 inside of WebExtension
    -   Yes, we run HTTP Server inside of HTTP Browser :’^)
    -   Why its cool? Hapi is the HTTP server used by js-ipfs to expose HTTP Gateway
        -   Embedded js-ipfs does not start when chrome.sockets APIs are enabled yet, but we are getting there
    -   More: <https://github.com/ipfs-shipyard/ipfs-companion/issues/664#issuecomment-467854030>
-   (CI for websites) with pinning sites to cluster, notifying github, and updating dns
    -   For DNSimple API (most of our sites will use this): <https://github.com/ipfs-shipyard/ipfs-dns-deploy> 
    -   Version for Cloudflare API: <https://github.com/ipfs-shipyard/dnslink-cloudflare>
    -   “Website added to IPFS” shown as one of checks under a PR on GitHub, with a link to a preview at the public gateway!
    -   PSA: Some websites may have some issues with finding content until we migrate to new CI setup (old version was not pinned to cluster and we shut down the node on Jenkins that acted as the only seed)
-   (ipfs-desktop) auto-update confirmed to work flawlessly on windows, small UX improvement required on OSX (we want to polish this before going public)
-   (ipfs-webui)
    -   Files screen in v2.4.0 will be able to render thousands of items (such as [XKCD archive](https://ipfs.io/ipfs/Qmb8wsGZNXt5VXZh1pEmYynjB6Euqpq3HYyeAdw2vScTkQ))
    -   Improved Add to IPFS menu
    -   Improved drag & drop (you can drop anywhere on Web UI now, and it will do the right thing!)
-   (ipfs js in browser)
    -   bundle size improvements continue to land!
    -   PSA: [pull-to-stream](https://github.com/hugomrdias/pull-to-stream) - pull-stream to stream module for code paths that require a safe implementation
-   (peer-base) we may see much more cross-team pollination and experimentation around peer-base-based (ha!) collaborations
-   (demo by @andrew) PoC ipfs support in homebrew \\o/
-   (analytics) discussion around self-hosted analytics that landed in v2.4.0
    -   Set up self-hosted service, so users don’t need to trust a third party, just us
    -   First iteration tried to respect opt-out via DNT header, but it seems to be [dead](https://gizmodo.com/apple-is-removing-do-not-track-from-safari-1832400768) and go-ipfs strongly prefers opt-in approach.
    -   This produced an open question: in what form it is ok to track user activity?  
        Discussion happens at: <https://github.com/ipfs-shipyard/ipfs-webui/issues/980>
-   (help/onboarding) discussed where to look for good examples of unobtrusive help system to onboard new users, continued in <https://github.com/ipfs-shipyard/ipfs-webui/issues/979> 

  


**Action Items**

_Announce issues that need help, get people to help_

-   **@anyone** (optional)
    -   Looking for UX reviews:
        -   UX of proposed redirect opt-out toggles in ipfs-companion browser extension, provide thoughts and feelings at <https://github.com/ipfs-shipyard/ipfs-companion/pull/687>
            -   While we are at it, more general thoughts on how we could improve entire UI of our browser extension are encouraged to be posted in: <https://github.com/ipfs-shipyard/ipfs-companion/issues/689> 
        -   Adding peer via Peers screen in WebUI: <https://github.com/ipfs-shipyard/ipfs-webui/pull/969> 
    -   Got suggestions on teaching Files API?  
        There is still time to contribute to proto.school lesson about it:
    -   <https://github.com/ProtoSchool/protoschool.github.io/issues/91> 
        -   <https://github.com/ProtoSchool/protoschool.github.io/pull/111>
    -   Join discussion about tracking web ui usage and what we mean by “opt-in analytics”: <https://github.com/ipfs-shipyard/ipfs-webui/issues/980>
    -   Thoughts on unobtrusive help system to onboard new users? <https://github.com/ipfs-shipyard/ipfs-webui/issues/979> 
