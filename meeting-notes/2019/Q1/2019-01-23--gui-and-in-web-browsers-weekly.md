# GUI & In Web Browsers Weekly Sync 2019-01-23

-   **Moderator:** @olizilla
-   **Notetaker:** @jimpick
-   **Attendees:**
    -   _@olizilla_
    -   _@fsdiogo_
    -   _@lidel_
    -   _@jimpick_
    -   _@terichadbourne_
    -   _@hugomrdias_
    -   _@alanshaw_
-   **Recording**: https://ipfs.io/ipfs/bafybeihko5yuyt4stygselhbji6yw2y7mqppvlpwafqlhtrjgix5sltypu/

**Moderator checklist**

-   Ensure that there is a notetaker
-   Start recording
-   Call for additional agenda items

**Agenda**

_General discussions, decisions, etc._

-   What to do about Chromium v3 manifest
    -   <https://github.com/ipfs-shipyard/ipfs-companion/issues/666>
    -   <https://groups.google.com/a/chromium.org/forum/#!topic/chromium-extensions/veJy9uAwS00>
-   Talk about Brave
-   Proposal to create a ipfs-utils package @hugomrdias

**Team Updates**

  
@lidel
-   Done:
    -   IPFS Companion [v2.7.0](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.7.0)  shipped to Stable channel
        -   Ask: try **window.ipfs.enable()** and provide feedback via [ipfs-companion/issues/new](https://github.com/ipfs/ipfs-companion/issues/new) 
    -   Plan for bringing IPFS to Brave in 2019 - [brave-browser/issues/819#comment](https://github.com/brave/brave-browser/issues/819#issuecomment-456039555) 
        -   Plan to support `chrome.sockets.*` APIs - [ipfs-companion/issues/664](https://github.com/ipfs-shipyard/ipfs-companion/issues/664) 
    -   Analysis of Chromium manifest V3 (draft) - [ipfs-companion/issues/666](https://github.com/ipfs-shipyard/ipfs-companion/issues/666) 
-   Blocked:
    -   Open question about unifying redirect of CID-in-subdomain and DNSLink websites: [ipfs-companion/issues/667](https://github.com/ipfs-shipyard/ipfs-companion/issues/667)
-   Next:
    -   Publish PR with redirect opt-out UI
    -   (In the background) do a Brave build, confirm [APIs are available](https://github.com/ipfs-shipyard/ipfs-companion/issues/664) to Companion

@fsdiogo
-   Done:
    -    Fixed rendering issues on firefox of the file ops preview
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/936>
    -   Refactor the drag-and-drop logic to extend it to the whole page
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/942>
    -   Pair-programmed with olizilla to make the ipld-explorer-components work with the latest api for js-ipld-dag-cbor
        -   <https://github.com/ipfs-shipyard/ipld-explorer-components/pull/6>
        -   <https://github.com/ipfs-shipyard/ipld-explorer-components/pull/13>
    -   Released new versions of ipld-explorer-components
        -   <https://github.com/ipfs-shipyard/ipld-explorer-components/releases/tag/v1.0.2>
        -   <https://github.com/ipfs-shipyard/ipld-explorer-components/releases/tag/v1.1.0>
    -   \[WIP] New version of Web UI with explorer fixes
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/945>
-   Next:
    -    Make ipld-explorer work with the latest changes of ipld-dag-pb
    -   Continue to push for Web UI v2.4.0
        -   <https://github.com/ipfs-shipyard/ipfs-webui/issues/927>

@olizilla
-   Done:
    -   Signed builds for ipfs-desktop on macOS from CI
        -   This was significantly fiddly, as described in the issue, for posterity and so others might find their way through a little faster.
        -   <https://github.com/ipfs-shipyard/ipfs-desktop/issues/66#issuecomment-456384158> 
    -   Paired with diogo to make the ipld-explorer work with all the api changes from the last few months.
    -   IPFSConf planning.
    -   Interview for visual design lead role.
    -   Talked through next step for self-hosted analytics infra with Erin.
-   Next:
    -   Towards releasing webui 2.4.0
        -   <https://github.com/ipfs-shipyard/ipfs-webui/issues/927> 
    -   CTA for analytics from the status page for first run… we want some people to enable it.
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/930> 
    -   Terraform code PR for setting up a countly instance on IPFS infra
        -   Based on <https://github.com/protocol/ad-hoc-infra> 
    -   Fix mixed content warnings on webui.ipfs.io (bug in uri-to-multiaddr)
        -   <https://github.com/ipfs-shipyard/ipfs-webui/issues/925>
    -   Lazy / virtualized rendering directory listing in files browser
        -   <https://github.com/ipfs-shipyard/ipfs-webui/issues/856>

@hacdias
-   Done:
    -   Last exams
    -   <https://github.com/ipfs-shipyard/ipfs-desktop/pull/798>
        -   ****Please review :)****
-   Blocked:
    -   Waiting for IT team get the Windows certificate.
    -   Need reviews on the PR above.


@terichadbourne
-   Done:
    -   Explored existing file API resources with @alanshaw in preparation for building a ProtoSchool tutorial. Please weigh in on my tutorial proposal at<https://github.com/ProtoSchool/protoschool.github.io/issues/91> before I get started building!
    -   We noticed that the file exchange demo on the main page of js.ipfs.io is broken because it hasn’t been updated for a recent change where you’re now supposed to just type node.whatever instead of node.files.whatever. I don’t know where the right repo is to log this. Error when I drag and drop a file: `TypeError: node.files.add is not a function at readFileContents.then (pen.js:666:20)`
        -   <https://github.com/ipfs/js.ipfs.io/issues/232> 
    -   Note the issue filed proposing a tutorial about hosting static websites on IPFS (may relate to one of the OKRs here) & feel free to add your thoughts:<https://github.com/ProtoSchool/protoschool.github.io/issues/139> 
    -   Started a #speaking channel in Slack to help PL employees collaborate to build speaking skills. Semimonthly call coming soon with an opportunity to rehearse and get feedback on talks. Join us!
-   Next:
    -   Build files tutorial for ProtoSchool

@hugomrdias
-   Done:
    -   <https://github.com/ipfs/js-ipfs/pull/1830> reviewed feat: load IPLD formats lazily from IPFS
    -   <https://github.com/ipfs/js-ipfs/issues/1827>  Bootstrap broken in 0.34.0?
    -   <https://github.com/hugomrdias/iso-url/releases/tag/v0.4.5> released iso-url
    -   <https://github.com/ipfs/js-ipfs/pull/1839> fix: add cors support for preload-mock-server and update aegir
    -   Debugged a Invalid URL error in the preload tests of js-ifps seems to be related to ipv6 url without brackets and not iso-url related
    -   Make pullstream-to-stream return a proper readable-stream
    -   Add cov and custom browsers to karma config in aegir (ci prototypes related)
-   Blocked:
    -   Bundle size PRs mplex and switch
-   Next:
    -   Finish bundle size PRs
    -   Finish pullstream-to-stream
    -   Finish ci prototypes with benchmarks integration



@alanshaw
-   Done:
    -   Released js-ipfs 0.34 🚢💨 🎉 <https://blog.ipfs.io/64-js-ipfs-0-34/> 
    -   Enabled browser builds for `ipld-ethereum <https://github.com/ipld/js-ipld-ethereum/pull/43> and \`ipld-git\`<https://github.com/ipld/js-ipld-git/pull/39>
    -   Created "lazily loaded IPLD formats from IPFS" proof of concept see <https://github.com/alanshaw/ipld-formats> and<https://youtu.be/ADA_HT2whok> 
    -   You can bundle `ipfs-http-client` in Meteor soon <https://github.com/ipfs/js-ipfs-http-client/pull/931> 
-   Blocked:
    -   `null`
-   Next:
    -   CID v1 base32 it begins: <https://github.com/multiformats/js-cid/pull/73> 


**Discussion Highlights**

_Discussion highlights and additional notes._

-   _What to do about Chromium v3 manifest_
    -   Tracking at <https://github.com/ipfs-shipyard/ipfs-companion/issues/666>
    -   For performance … make ad blockers use declarative API in manifest for intercepting
    -   30,000 rule limit
    -   We do a lot of extra things in IPFS Companion
    -   We can do a lot of things, but would lose seamless experience
    -   Currently a bit of a backlash, ongoing
    -   Would require rewriting
-   Brave
    -   Before, plan to ship go-ipfs with Brave
    -   Now, embedded js-ipfs in ipfs-companion + Brave exposing [ChromeOS APIs](https://github.com/ipfs-shipyard/ipfs-companion/issues/664)
    -   @lidel @alanshaw and @olizilla will have a dedicated call on this

  
