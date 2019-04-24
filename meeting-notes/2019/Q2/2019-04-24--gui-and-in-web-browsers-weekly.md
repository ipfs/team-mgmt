# GUI & In Web Browsers Weekly Sync 2019-04-24
-   Recording:[/ipfs/bafybeicudukeuo3adhf5rdbj65n3gutnuus5q5ekkfgocmyhupq5zgmkm4](https://ipfs.io/ipfs/bafybeicudukeuo3adhf5rdbj65n3gutnuus5q5ekkfgocmyhupq5zgmkm4)  or <https://youtu.be/MIRk6yYeG0U>
-   Moderator: @olizilla
-   Notetaker: @autonome
-   Attendees:
    -   @fsdiogo
    -   @dietrich
    -   @jimpick
    -   @alanshaw
    -   @terichadbourne
    -   @olizilla
    -   @ericronne
    -   @cwaring
    -   @hugomrdias
    -   @lidel
    -   attendee names...
  
**Preflight checklist**
-   Call for additional **agenda** items!
-   Ensure that there is a **notetaker**!
-   Start **recording**! :^)
  
**Agenda**
_General discussions, decisions, etc._
-   Start with Team Updates and Demos
-   **_**_{ add your items below}_**_**
-   (&lt;your_name>, topic)
  
**Team Updates**
  
@lidel
-   Done:
    -   PR reviews/comments
    -   [ipfs-desktop/pull/913:](https://github.com/ipfs-shipyard/ipfs-desktop/pull/913)  add .tar.xz package target
    -   [ipfs-companion/issues/716](https://github.com/ipfs-shipyard/ipfs-companion/issues/716): Bird's-eye view of Embedded JS-IPFS in Brave
    -   [in-web-browsers/issues/146](https://github.com/ipfs/in-web-browsers/issues/146): Wrote some thoughts about WebDAV interop
    -   WIP: adding Range requests to js-ipfs
        -   got sidetracked by ad-hoc fixing other HTTP header discrepancies while reading[go-ipfs/../gateway_handler.go](https://github.com/ipfs/go-ipfs/blob/v0.4.20/core/corehttp/gateway_handler.go)  :-)
-   Blocked:
    -   [PR #1989: fix(gateway): streaming compressed payload](https://github.com/ipfs/js-ipfs/pull/1989) needs a review (CI is green)
        -   Q: or should I extend this PR into “general gateway improvements” and include Range requests etc?
    -   [HTTP Gateway fails to load sharded website #1963](https://github.com/ipfs/js-ipfs/issues/1963) / PR[ feat: load files/dirs from hamt shards #19](https://github.com/ipfs/js-ipfs-http-response/pull/19)
    -   [Resolving DNSLink Paths: /ipns/&lt;fqdn> #1918](https://github.com/ipfs/js-ipfs/issues/1918)
-   Next:
    -   js-ipfs
        -   PR js-ipfs with Gateway improvements  
            (including Range request support)
    -   ipfs-companion
        -   Brave+chrome.sockets: switch to updated js-ipfs
        -   Apply fix for[js-ipfs-http-client/issues/967](https://github.com/ipfs/js-ipfs-http-client/issues/967)  (most likely along with new webui release)
        -   Ship new Beta with above fixes
  
@hacdias (not present, always copying @lidel’s updates styles)
-   Done:
    -   [ipfs-desktop/pull/908](https://github.com/ipfs-shipyard/ipfs-desktop/pull/908): go-ipfs 0.4.20
    -   [ipfs-desktop/pull/909](https://github.com/ipfs-shipyard/ipfs-desktop/pull/909): add snap hooks to addipfs toPATH
    -   [js-multicodec/releases/tag/v0.5.1](https://github.com/multiformats/js-multicodec/releases/tag/v0.5.1)
-   Blocked:
    -   {?}
-   Next:
    -   [ipfs-desktop/pull/906](https://github.com/ipfs-shipyard/ipfs-desktop/pull/906): addipfs toPATH on runtime (Windows, macOS and Linux)
    -   Release IPFS Desktop v0.8.0
  
  
@fsdiogo
-   Done:
    -   Shipped custom error validation and UI logs
        -   <https://github.com/ProtoSchool/protoschool.github.io/pull/111>
        -   <https://github.com/ProtoSchool/protoschool.github.io/pull/198>
    -   Fixed travis config
        -   <https://github.com/ProtoSchool/protoschool.github.io/pull/199>
    -   Added UI logs to Blog tutorial
        -   <https://github.com/ProtoSchool/protoschool.github.io/pull/201>
    -   Added \`View Solution\` to lessons
        -   <https://github.com/ProtoSchool/protoschool.github.io/pull/202>
    -   \[WIP] Fixed Blog lesson 7 validation and solution
        -   <https://github.com/ProtoSchool/protoschool.github.io/pull/204>
    -   Fixed code highlighting not updating
        -   <https://github.com/ProtoSchool/protoschool.github.io/pull/206>
  
  
@olizilla
-   Done:
    -   Multiple easter egg hunts.
    -   Proposed IPFS “office hours”
        -   <https://github.com/ipfs/community/issues/407> 
    -   Chased down theP0 js-ipfs-http-client pull-stream file upload error
        -   <https://github.com/hugomrdias/pull-to-stream/pull/1> 
    -   Fixed up file drop on empty dir in webui
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/1020>
    -   Fixed up contrast on buttons in webui (thanks to[@ericronne’s design review](https://github.com/ipfs-shipyard/ipfs-webui/issues/1004))
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/1021> 
    -   Fixed up https&#x3A;//docs.ipfs.io site dev build process, and previews on PRs and cleared PR backlog
        -     \-<https://github.com/ipfs/docs/pull/163> 
        -     \-<https://github.com/ipfs/docs/pull/161> 
        -     \-<https://github.com/ipfs/docs/pull/160> 
        -     \-<https://github.com/ipfs/docs/pull/159> 
        -     \-<https://github.com/ipfs/docs/pull/158> 
        -     \-<https://github.com/ipfs/docs/pull/150> 
        -     \-<https://github.com/ipfs/docs/pull/149>
    -   Review “prompt to add ipfs to path” ipfs-desktop PR
        -   "prompt for path" https&#x3A;//github.com/ipfs-shipyard/ipfs-desktop/pull/906
-   Blocked:
    -   Minor - cid.ipfs.io CI/CD process PR can’t progress without infra
        -   <https://github.com/multiformats/cid-utils-website/pull/13/files>
    -   https&#x3A;//research.filecoin.io site waiting on DNS PR merge ([see preview](https://filecoin-project.github.io/research-website/))
        -   <https://github.com/protocol/infra/pull/466> 
        -   <https://github.com/filecoin-project/research-website/> 
  
-   Next:
    -   End-to-end tests for file upload in webui and desktop.
    -   Cut releases of IPFS Web UI and IPFS Desktop
        -   UI tweaks, File upload fixes, reduced bundle size and...
        -   **add \`ipfs\`to PATH** 
    -   First draft of “The lifecycle of data in Dweb” course for IPFS camp
  
  
@ericronne
-   Done:
    -   Further fleshed out desktop ui[design review](https://docs.google.com/document/d/1jQn14u8CJm8fOjLPbo2lug4RG3Eb8ulHX1LVlu9jMck/edit#heading=h.nvl6wd19122n) suggestions by adding some mockups
-   In progress:
    -   Brainstorming Raspberry Pi-based wizardry with cluster, for camp
    -   Educating myself on[decentralized data structures](https://proto.school/#/data-structures/) whilst making some editorial suggestions of dubious value
    -   Setting up structures to bring process to our design workflow across PL
-   Blocked:
    -   Issues with running daemon
    -   Attempting to establish a github projects board to automatically aggregate all design tasks onto a single canvas, then realizing that only repo owners are authorized to link repos to a board, then getting sad, then bugging @olizilla (et al) …
-   Next:
    -   ****OOO this coming monday****
    -   [Component library](https://github.com/ipfs/ipfs-gui/issues/76) design
    -   Smattering of additional changes to ipfs desktop
    -   Taking another protoschool tute, now that i can cheat!
    -   IPFS user-focused survey summary
  
@terichadbourne
-   Done
    -   Shipped file upload lesson type
        -    <https://github.com/ProtoSchool/protoschool.github.io/pull/111>
    -   Improved instructions for building tutorials (various PRs)
    -   Offline Camp launch!
        -   <http://offlinefirst.org/camp> 
        -   <https://medium.com/offline-camp/announcing-offline-camp-v5-eb9111fdcc94>
    -   Launched the ProtoSchool Weekly Call, which replaces the old IPFS Community WG Call. Join us!
        -   <https://github.com/ProtoSchool/organizing/issues/47>
    -   Added a Nairobi chapter repo
    -   Proofed / promoted lovely ProtoSchool UX updates made by @fsdiogo
-   In Progress
    -   MFS Tutorial now utilizing new UX features (moved to new PR<https://github.com/ProtoSchool/protoschool.github.io/pull/200> )
-   Next
    -   MFS Tutorial cont.
    -   Offline Camp promotion
    -   Brainstorming typing-free projects for 15 minutes of every hour
  
@dietrich
-   Previous
    -   [Drafted slide for libp2p/IPFS business proposition for large network service and content providers](https://docs.google.com/presentation/d/1-H5pHGQp3VEOXOsvgzUKwiUa3Sav4nCgzLT_TS)
    -   Juanboarding meeting (props to Eric for the portmanteau)
    -   [Visualization of go-filecoin dependency graph](https://twitter.com/dietrich/status/1118677461682647040)
    -   Compiled report on which parts of IPFS are used by Filecoin for auditing purposes
    -   Attempted a CPU usage test of libp2p
-   Next
    -   Browser collaborations wrangling work - system for reporting, prioritization, launch planning, etc
    -   Visualize the languagizing exercise
  
@alanshaw
-   Done:
    -   Async/await changes ~50%<https://github.com/ipfs/js-ipfs/issues/1670> 📈
    -   \`go-ipfs-dep\` @ 0.4.20 released 🎉
    -   JS libp2p MDNS is compatible with Go libp2p MDNS<https://github.com/libp2p/js-libp2p-mdns/pull/80> 🔎
    -   JS IPFS OKRs almost ready<https://github.com/ipfs/team-mgmt/pull/927#issuecomment-483726699> 🏆
-   Next
    -   Working on async iterators for \`libp2p-mplex\`
    -   Finalize JS IPFS Q2 OKRs
  
@hugomrdias
-   done:
    -   add support to /ipns/&lt;fqdn> to ipfs name resolve
        -   <https://github.com/ipfs/js-ipfs/pull/2002>
    -   meeting with ipns tiger time
    -   make ipfs name resolve recursive
        -   <https://github.com/ipfs/js-ipfs/issues/2001>
    -   feat: add support to resolve dns to ipns
        -   <https://github.com/ipfs/interface-js-ipfs-core/pull/458>
    -   fix: adds tests for \`ipfs name\`
        -   <https://github.com/ipfs/js-ipfs-http-client/pull/974>
    -   fix: dont drain source while drain in progress
        -   [https://github.com/hugomrdias/pull-to-stream/pull/1](https://github.com/hugomrdias/pull-to-stream/pull/1](https://github.com/hugomrdias/pull-to-stream/pull/1))
        -   Fixes<https://github.com/ipfs/js-ipfs-http-client/issues/967>
    -   Add support for File DOM api to http-client
-   Blocked
    -   make ipfs name resolve recursive
        -   <https://github.com/ipfs/js-ipfs/issues/2001>
-   Next
    -   Finish tests for Add support for File DOM api to http-client
    -   Ipns over dns
  
  
**Discussion Highlights**
_Discussion highlights and additional notes._
  
**Action Items**
_Announce issues that need help, get people to help_
-   {?}
