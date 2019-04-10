# GUI & In Web Browsers Weekly Sync 2019-04-10

-   Recording: <https://youtu.be/JG0no-7BRRI> \|\| [/ipfs/bafybeigbfg5zqfhowpxqmoanpkzrx7vdy5v6dsbe4ha36cdryovjacxeya/](https://ipfs.io/ipfs/bafybeigbfg5zqfhowpxqmoanpkzrx7vdy5v6dsbe4ha36cdryovjacxeya/) 
-   Moderator: @olizilla
-   Notetaker: Dietrich
-   Attendees:
    -   Dietrich
    -   @jimpick
    -   @pkafei
    -   @ericronne
    -   @jessicaschilling
    -   @jessicaschilling’s cat
    -   @fsdiogo
    -   @lidel
    -   @terichadbourne
    -   @olizilla

**Agenda**

_General discussions, decisions, etc._

-   Start with Team Updates and Demos
-   @lidel, what if we switch default representation of CIDv1  
    from Base58 to Base32 before making CIDV1 the default?  
    (tiny change, big UX improvement)
-   @dietrich,language re pinning/sharing/saving/etc
-   [Npm on ipfs app](https://github.com/ipfs-shipyard/npm-on-ipfs/issues/94)
-   @hugomrdias, super secret demo

  


(NOTES AT END)

**Team Updates**

  


@lidel

-   Done:
    -   blog.ipfs.io
        -   i18n: [support optional translations of selected posts](https://github.com/ipfs/blog/pull/180) 
    -   ipfs-companion:
        -   [i18n: added pt_BR locale](https://github.com/ipfs-shipyard/ipfs-companion/pull/708)
        -   [Release planning around changes in incognito mode](https://github.com/ipfs-shipyard/ipfs-companion/pull/705)
        -   [Fix: “invalid signature: 0x80014” in the tool we use for updating manifest of self-hosted Firefox Beta channel](https://github.com/mi-g/firefox-addons-add-update-version/pull/1)
        -   [Fix: connecting to API over HTTPS after upgrading to 2.8.0](https://github.com/ipfs-shipyard/ipfs-companion/issues/706)
            -   Bugfix releases:[v2.8.0.770](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.0.770) (Beta) &[v2.8.1](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.1) (Stable)
            -   Fixing API over HTTPS in: ipfs-webui / js-ipfs-http-client / ipfs-redux-bundle
                -   [Web UI: Can't connect to API over HTTPS](https://github.com/ipfs-shipyard/ipfs-webui/issues/989)
                -   [Fix support for /https multiaddrs passed to constructor](https://github.com/ipfs/js-ipfs-http-client/pull/965) 
                -   [Fix support for /https multiaddrs passed via localStorage](https://github.com/ipfs-shipyard/ipfs-redux-bundle/pull/25) 
    -   ipfs-companion for Brave:
        -   Detailed update on Embedded Gateway in [ipfs-companion/issues/664](https://github.com/ipfs-shipyard/ipfs-companion/issues/664#issuecomment-481697875), tl;dr is:
            -   Companion UI is now aware of embedded Gateway
            -   Feature-detection of chrome.sockets works at runtime
            -   Web UI works!
            -   Identified some blockers, fixes for most of them are already wip
-   Blocked:
    -   ipfs-companion for Brave:
        -   _Content discovery_ with bootstrap nodes alone is pretty bad, especially when preload nodes are under load and slow to respond
        -   _DNSLink websites_(e.g. /ipns/docs.ipfs.io/) are not supported by js-ipfs yet (tracked in[ ipfs/js-ipfs#1918](https://github.com/ipfs/js-ipfs/issues/1918))
        -   _HAMT-sharded directories_(e.g. /ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/) do not work with js-ipfs (tracked in[ ipfs/js-ipfs#1963](https://github.com/ipfs/js-ipfs/issues/1963))
-   Next:
    -   ipfs-companion for Brave:
        -   Investigate ways we can improve content discovery (relays, webrtc/stardust signaling, or maybe p2p transport will “just work” with existing polyfills)
        -   Cleanup and PR remaining upstream patches (js-ipfs, hapi, chrome-net)
        -   Sync with Brave on next steps, discuss UX
        -   [Office Hours with Extensions Developer Advocate at Chrome](https://github.com/ipfs-shipyard/ipfs-companion/issues/666#issuecomment-478155156)



@hacdias

-   Done:
    -   Exams!
    -   IPFS Desktop
        -   [Add ‘ipfs’ to PATH on Windows](https://github.com/ipfs-shipyard/ipfs-desktop/pull/897)
        -   [Add ‘ipfs’ to PATH on macOS and Linux (deb and rpm)](https://github.com/ipfs-shipyard/ipfs-desktop/pull/896)
        -   [Bug fixing: avoid crashing if couldn’t run `ipfs repo fsck`](https://github.com/ipfs-shipyard/ipfs-desktop/pull/899)
        -   [Avoid logging expected auto-launch error](https://github.com/ipfs-shipyard/ipfs-desktop/pull/903)
        -   [Found out why 'System Events' is required: auto launch](https://github.com/ipfs-shipyard/ipfs-desktop/issues/753)
-   Blocked:
    -   {?}
-   Next:
    -   Add ‘ipfs’ to PATH on Linux (snap)
    -   [Finalize what’s left for 0.8.0](https://github.com/ipfs-shipyard/ipfs-desktop/issues/880)

  


@alanshaw (not attending)

-   Done:
    -   PR open for MDNS compatibility with Go IPFS 🥳 <https://github.com/libp2p/js-libp2p-mdns/pull/80> 
    -   PR for fixing JS peer dialing itself <https://github.com/libp2p/js-libp2p-switch/pull/329> this was actually causing 2 JS IPFS nodes to not be able to connect to each other over MDNS, even though they discovered each other!
    -   Decision made to back DHT out of 0.35 release due to ongoing performance problems 😢 (hopefully it’ll make it into 0.36 🤞)
-   Blocked:
    -   n/a
-   Next:
    -   Finalise OKRs
    -   Release JS IPFS 0.35

  


@olizilla

-   Done:
    -   [GUI OKRs](https://github.com/ipfs/team-mgmt/pull/926)
    -   Shipped preserve provided CID base <https://github.com/ipfs-shipyard/ipfs-webui/pull/1005/files> All the way to webui
    -   improve the js-cid documentation - <https://github.com/multiformats/js-cid/pull/80>  - <https://github.com/multiformats/js-cid#usage> 
    -   review the ipfs-desktop PR: [feat: add 'ipfs' to PATH on macOS and Linux #896](https://github.com/ipfs-shipyard/ipfs-desktop/pull/896)
    -   Verdaccio research <https://github.com/ipfs/package-managers/issues/38> 
-   Blocked:
    -   {?}
-   Next:
    -   {?}

  


@fsdiogo

-   Done:
    -   New project structure and tutorials landing pages
        -   <https://github.com/ProtoSchool/protoschool.github.io/pull/180>
    -   Add navbar link to landing
        -  <https://github.com/ProtoSchool/protoschool.github.io/pull/189>
    -   File Upload lessons
        -   <https://github.com/ProtoSchool/protoschool.github.io/pull/111>
    -   Misc. fixes and improvements
    -   \[WIP] Improve code validation
-   Blocked:
    -   Added guided tours to `ipld-explorer-components` to plug them to Web UI
        -   <https://github.com/ipfs-shipyard/ipld-explorer-components/pull/17>
    -   Web UI guided tours
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/983>
-   Next:
    -   Improve code validation

  


@hugomrdias

-   Done:
    -   js-ipfs bundle size ipld PR
        -   <https://github.com/ipfs/js-ipfs/pull/1980>
    -   fix: move mfs cmds and safer exit #1981
        -   <https://github.com/ipfs/js-ipfs/pull/1981>
    -   review Provide non-generic constructor methods #83
        -   <https://github.com/multiformats/js-cid/issues/83>
    -   \[ipfs/js-ipfs-http-client] [fix: fix missing buffer bundling with browserify](https://github.com/ipfs/js-ipfs-http-client/pull/966)
    -   Fast ipns POC
-   Blocked:
    -   Js-ipfs pull-mplex
-   Next:
    -   Add support for File and FileList to js-ipfs files api
    -   Fast ipns-over-\* continues
    -   Make js-ipfs resolve /ipns/&lt;fqdn> (to make Lidel happy)

  


@dietrich

  
-   Review work plan, roadmap, metrics presentation, collabs metrics, kpis 2019
-   comms repo read-through, and issue
-   Core use-cases for end users
-   Debugging a basic publish flow from IPFS desktop to gateway
-   More learning about basic file flows (eg CID mismatch between desktop and companion)
-   Troubleshooting my gateway issues, NATurally.
-   Read about circuit relays
-   Get video recording set up, watch/read the doctor robinson stuff
-   Recorded IPFS IWB Q2 OKRs summary video and uploaded to drive
-   Filed issue about improving delete language and flow in webui
-   Arkadiy re collab strategy and prioritization
-   Opera planning
-   Met with ENS collaborators
-   MS and Sidetree
-   Set up test to harvest StackOverflow posts tagged IPFS
-   Set up test to harvest Tweets matching "with IPFS" (because I keep seeing this pattern)
-   Got a Countly account from Oli, started poking around

  


@jimpick

-   `jim <AT> protocol.ai` finally!
-   <https://experiments.peerpad.net/> (WIP: PeerChess + Magic Wormhole)
-   Soon: IPFS Camp course planning (lidel and hugo?)


@ericronne

-   Done
    -   Brief[design review](https://docs.google.com/document/d/1jQn14u8CJm8fOjLPbo2lug4RG3Eb8ulHX1LVlu9jMck/edit#heading=h.nvl6wd19122n) of IPFS Desktop
    -   IPFS Desktop survey sent (have you[chimed in](https://docs.google.com/forms/d/e/1FAIpQLSdEHpIdXYYLAoecc2rl2cSBGRI1SfzdhasM_rPjSKJRV7QxKQ/viewform)?)
    -   Re-concepted IPFS Desktop as a “[thought experiment](https://github.com/ipfs-shipyard/ipfs-webui/issues/1003)”
-   Blocked
-   Next
    -   Distill survey and design-review data into Actionable Recos (ie issues)
    -   (Non-IPFStuffs)

  


@terichadbourne

-   Done
    -   Added metatags to make social cards work for ProtoSchool:<https://github.com/ProtoSchool/protoschool.github.io/pull/192> 
    -   Lots of Offline Camp web updates and budgeting. Save the date is here, with actual location announcement, site launch, and applications opening soon:<https://twitter.com/OfflineCamp/status/1115707817816674304> 
    -   Paired up with @fsdiogo on more ProtoSchool UX improvements and merge conflict resolution (see his section above)
    -   Learned how to build React components (for my class)
-   In Progress
    -   Files tutorial in ProtoSchool is progressing!
        -   Rescoped to focus exclusively on MFS for two reasons:
            -   feedback that MFS should be considered the beginner content and non-MFS commands (and DAG) should be considered advanced
            -   blobs (incl browser file objects) aren't supported by the non-MFS methods (@hugomrdias has an OKR to change that)
        -   Lessons on files.write, files.ls, files.mkdir drafted, more to come
        -   Validation challenges because of built-in IPFS errors that are less than helpful (@fsdiogo is exploring how we can hack around that)
        -   See WIP PR at:<https://github.com/ProtoSchool/protoschool.github.io/pull/111> 
-   Next
    -   Offline Camp launch
    -   More MFS lessons
    -   Better instructions for tutorial authors

  


@jessicaschilling

-   Hello!

  


**Discussion Highlights**

_Discussion highlights and additional notes._



Switching CIDv1 from Base58 to Base32

* like js cid problem described by Oli
* but step further
* rn: when adding content, get cidv1 in b58
* everywhere where we say b32 is future, but not in our software
* can we just change it everywhere? removing b58?
* i already opted in! why????
* lidel is wrangler, gets to rattle sabres
* alan maybe have input?
* but he's focused on not letting things catch fire
* this is prep for IPFS camp
* we can say use v1 today
* lidel will create the issues
* this is a documentation and education effort
* stop using b58!
* let's do it and see what happens


Language re pinning:

* next week!


OKRs:

* schedule another meetingggg!!!


Hugo sekret demo:

* echo "will it be fast"
* ipns publish
* ipns resolve...
* less than 10 minutes!
* maybe 100ms...
* ipns over workers
* WAT
* workers is the API
* perfect for browser
* all http requests fast because near end user
* worker saves records on kv store that they have access to
* next: dns
* this is way to do without user running daemon
* self-certifying
* not much trust on cloudflare workers
* next need to convince everyone
* solution in near term
* hard dep on CF will be tough proposition
* not ideal, but works for everyone
* easy to deploy
* no dep on infra team
* easy to maintain
* daemon will try all methods available
* eg over dht, dns, over whatever
* first one wins
* users can opt out or in
* libp2p designed to be configurable
* so can do what makes sense for your app
* ipns not very pluggable now
* but should be
