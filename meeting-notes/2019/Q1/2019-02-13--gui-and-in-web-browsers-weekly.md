# GUI & In Web Browsers Weekly Sync 2019-02-13

-   Recording: <https://youtu.be/S8o3LwTiAes> \|\| [/ipfs/bafybeif57ylbap2tuqrl7nb25y7hxlncm2ebjd74u4ck2hpmljitylmxc4/](https://ipfs.io/ipfs/bafybeif57ylbap2tuqrl7nb25y7hxlncm2ebjd74u4ck2hpmljitylmxc4/) 
-   Moderator: @olizilla
-   Notetaker:  @jimpick & @lidel
-   Attendees:
    -   _@jimpick_
    -   _@andrew_
    -   _@fsdiogo_
    -   _@lidel_
    -   _@olizilla_
    -   _@terichadbourne_
    -   _@fsdiogo_
    -   _@hugomrdias_
    -   _@cwaring_
    -   _@alanshaw_

**Preflight checklist**

-   Call for additional **agenda** items!
-   Ensure that there is a **notetaker**!
-   **Start** recording! :^)

**Agenda**

_Please add your anything you’d like discuss, along with your name._

-   Team Updates and Demos
-   Q1 mid-point scoring - this Friday, Feb 15th
-   (olizilla, 2mins) CI is dead. Long live CI. AKA Jenkins aint gonna deploy our sites no more
-   (olizilla, 5mins) Andrew has a demo!
-   (lidel, 5mins) what to do with webui in ipfs-companion
    -   <https://github.com/ipfs-shipyard/ipfs-webui/issues/959> 
-   (jimpick, 5mins) Lunet / Bafyplex / peer-base in iframe pinning demo
    -   <https://bafybeid7pdb56figg7hv6uxyt4tnovb4zw54vmtqcu2oc6nkzz2mf6r2s4.lunet.v6z.me/>
-   (terichadbourne, 5mins) Where we’re at with the ProtoSchool File API Tutorial

**Team Updates**

@lidel
-   Done:
    -   Released new ipfs-companion to Stable channel:[v2.7.3](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.7.3) 
    -   Research on ways we could support ENS (\*.eth domains) in ipfs-companion –[ipfs-companion/issues/678](https://github.com/ipfs-shipyard/ipfs-companion/issues/678) 
    -   Created proposal for how to safely redirect websites to local gateway without losing Origin-based isolation
        -   tracked in[go-ipfs/issues/5982](https://github.com/ipfs/go-ipfs/issues/5982)  and[js-ipfs/issues/1877](https://github.com/ipfs/js-ipfs/issues/1877) 
        -   already got some positive feedback, but would love more eyes on this
    -   Proposal to inject window.ipfs only when some well-known HTTP headers are present –[ipfs-companion/issues/589#comment](https://github.com/ipfs-shipyard/ipfs-companion/issues/589#issuecomment-462288312)  (would love more eyes on this too)
    -   First stab at per-site redirect opt-out in IPFS Companion (no PR yet)
    -   Regressions in reproducible build and manual review at addons.mozilla.org
        -   AMO status tracked in[ipfs-companion/issues/679](https://github.com/ipfs-shipyard/ipfs-companion/issues/679) 
        -   Tracked down and solved regression in reproducible build due to unstable npm mirror and yarn returning invalid error code on failed downloads - fixed in v2.7.3
        -   Opened discussion how to handle the reproducibility in ipfs-webui:[ipfs-webui/issues/959](https://github.com/ipfs-shipyard/ipfs-webui/issues/959) 
-   Blocked:
    -   Unable to ship bundled ipfs-webui with companion:[ipfs-webui/issues/959](https://github.com/ipfs-shipyard/ipfs-webui/issues/959) 
-   Next:
    -   Resolve AMO
        -   Short term: provide reproducible build steps OR remove bundled webui and use one from IPFS
    -   PR per-site redirect opt-out


@fsdiogo
-   Done:
    -   Add IPFS paths examples to the \`From IPFS\` modal
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/955>
    -   Extract the \`ContextMenu\` component from each \`File\`
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/956>
    -   Fix Firefox SVG rendering issues
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/958>
    -   \[WIP] Refactoring the \`FilesList\` component to use \`react-virtualized\` so we can list a huge amount of entries without lag
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/957>
        -   Fix rendering issues
        -   Fix upper dir
        -   Fix checkboxes
        -   Fix drag and drop UI
        -   Check loading animation
-   Next:
    -   Push to release Web UI v2.4.0


@olizilla
-   Done:
    -   Update ipfs, ipld and create-react-app to fix test and build issues on IPLD Explorer<https://github.com/ipfs-shipyard/ipld-explorer/pull/47>
    -   Negotiated an enterprise Countly instance for countly.ipfs.io
    -   Got Github Actions enabled across all PL orgs
    -   Onboarding Mr Waring to ipfs-gui world
    -   Onboarding Mr Nesbitt into ipfs and package managers world
    -   Pairing with Diogo on webui files fixes
-   Next:
    -   Working with infra to recreate DNSLink deployment of our websites.<https://github.com/protocol/infra/issues/434> 
    -   Press go on our new IPFS Countly analytics instance once Legal team okay it, and merge<https://github.com/ipfs-shipyard/ipfs-webui/pull/930> 
    -   Release webui 2.4 (we’re really close)
    -   Add tests to ipfs-desktop 0.7 so we can release it.
    -   Add analytics to our websites.

  
@terichadbourne
-   Making Progress:
    -   Continuing work on creating a ProtoSchool tutorial on the File API (suggestions welcome)
        -   Issue:<https://github.com/ProtoSchool/protoschool.github.io/issues/91#issuecomment-456457377> 
        -   WIP PR:<https://github.com/ProtoSchool/protoschool.github.io/pull/111> 
    -   Community Team Hack Week 2/11-2/15
        -   Decide whether to continue with Vue for ProtoSchool or migrate to VuePress
            -   Deposit all the feels at:<https://github.com/ProtoSchool/protoschool.github.io/issues/141> 

@alanshaw
-   Done:
    -   Added \`iim ls\` command<https://github.com/alanshaw/iim/issues/4#issuecomment-460587508> 
    -   CIDv1 base32 default
        -   MFS<https://github.com/ipfs/js-ipfs-mfs/pull/38>
        -   dag-pb<https://github.com/ipld/js-ipld-dag-pb/pull/115>
        -   unixfs engine<https://github.com/ipfs/js-ipfs-unixfs-engine/pull/235> 
        -   unixfs importer<https://github.com/ipfs/js-ipfs-unixfs-importer/pull/21> 
        -   js-ipfs<https://github.com/ipfs/js-ipfs/pull/1868> 
    -   Merged DHT PR 🔥<https://github.com/ipfs/js-ipfs/pull/856> 
    -   Released \`js-ipfs 0.35.0-pre.0\`<https://github.com/ipfs/js-ipfs/blob/master/CHANGELOG.md#0350-pre0-2019-02-11> 
        -   WARNING there be 🐉:
            -   "Unable to update lock within the stale threshold"
            -   CPU pegged at 100%
    -   Speed up \`js-ipfs-http-client\` tests 14m to 5m<https://github.com/ipfs/js-ipfs-http-client/pull/942> 
-   Next:
    -   Stable DHT
    -   CIDv1 base32 by default

@hugomrdias
-   Done:
    -   move to travis.com tracking<https://github.com/ipfs/aegir/issues/329>
    -   adding package-lock.json<https://github.com/ipfs/aegir/issues/330>
    -   js-ipfs move to travis.com merged
    -   Chore/move travis[https://github.com/ipfs/interop/pull/53](https://github.com/ipfs/interop/pull/53-)
    -   fix: clean/simplify webpack and make karma run with the optimize config #326<https://github.com/ipfs/aegir/pull/326>
    -   aegir travis ci<https://github.com/ipfs/aegir/pull/324>
    -   ipfsd-ctl travis<https://github.com/ipfs/js-ipfsd-ctl/pull/320>
-   Blocked: null
-   Next:
    -   add benchmarks to travis ci cron job and disable on default one<https://github.com/ipfs/benchmarks/issues/245#issuecomment-461518205>
    -   add benchmarks to CI PRs with filtered tests and no clinic plus dashboard
    -   add bundle size to aegir and as a repo check plus badge

@jimpick
-   Making Progress:
    -   Lunet / Bafyplex
    -   <https://github.com/jimpick/bafyplex>
    -   <https://github.com/jimpick/multiple-tabs-logux-peer-base>
-   Next:
    -   Hang out with Gozala and Kyle in Portland next week! (+ Dat Night)
    -   Travis for PeerPad?

**Discussion Highlights**

_Discussion highlights and additional notes._

-   __lidel:__ found a way to provide Origin-based isolation for local IPFS2HTTP gateway: [go-ipfs/issues/5982](https://github.com/ipfs/go-ipfs/issues/5982)
    -   **tl;dr** this will enable us to support URLs like `http://bafybeif57ylbap2tuqrl7nb25y7hxlncm2ebjd74u4ck2hpmljitylmxc4.ipfs.localhost` and `http://docs.ipfs.io.ipns.localhost`
-   __Diogo:__ making various listings in Web UI much more efficient
-   __Henrique:__ certificate for ipfs-desktop binary on Windows (removes security warning)
-   __Oli:__
    -   Please check OKRs and fill your mid-quarter scoring
        -   GUI:<https://github.com/ipfs/team-mgmt/pull/808> 
        -   In Web Browsers:<https://github.com/ipfs/team-mgmt/pull/804> 
    -   Analytics for ipfs-webui are coming  
        (DNT header + self-hosted instance of[countly](https://count.ly))
    -   FYI there is<https://github.com/ipfs-shipyard/ipfs-css> which includes not only CSS, but also SVG icons :-)
-   __Teri:__ The WIP PR for the ProtoSchool file upload I just showed: [https://github.com/ProtoSchool/protoschool.github.io/pull/111](https://github.com/ProtoSchool/protoschool.github.io/pull/111)
-   __Alan:__
    -   DHT landing in js-ipfs \\o/
        -   CPU hog right now, requires additional work on connection managements, but when ready will make embedded js-ipfs in ipfs-companion truly shine!
    -   Fun fact: using go-ipfs with ‘test’ profile makes tests ~x3 faster
-   __Hugo:__
    -   PSA: CI for our projects is in the process of moving to Travis. Working with infra team to iron the kinks and look into things like daily benchmarks etc.
    -   This is great news, saves a lot of compound time for everyone!
-   __Andrew:__
    -   _npm on IPFS demo_
        -   search for npm package, resolve a CID \\o/
-   __Jim:__
    -   [Bafyplex](https://github.com/jimpick/bafyplex/), [Lunet](https://github.com/Gozala/lunet/) + Logux demo
        - peer-base in iframe pinning demo https://bafybeid7pdb56figg7hv6uxyt4tnovb4zw54vmtqcu2oc6nkzz2mf6r2s4.lunet.v6z.me/
        - logux: useful technique of leader election across all browser tabs for the same Origin
            -   Saves resources, could be useful for vanilla js-ipfs as well
-   We decided to remove Web UI from Companion and load it from IPFS <https://github.com/ipfs-shipyard/ipfs-companion/pull/680> 
