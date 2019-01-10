# GUI & In Web Browsers Weekly Sync 2019-01-09

- **Recording:** https://ipfs.io/ipfs/bafybeialvp3az23urfzwpfmaiopkd42t3gvpai6t2ozl3lf2l5ghgsvtby
-   **Moderator:** @olizilla
-   **Notetaker:** @jimpick & @lidel
-   **Attendees:**
    -   _@jimpick_
    -   _@lidel_
    -   _@gozala_
    -   _@hugomrdias_
    -   _@fsdiogo_
    -   _@olizilla_
    

**Moderator checklist**

-   Ensure that there is a notetaker
-   Start recording
-   Call for additional agenda items

**Agenda**

_General discussions, decisions, etc._

-   Start with Team Updates and Demos
-   @gozala, Experiments with progressive peer-to-peer web applications (PPWA)
-   @lidel, PSA: finalize OKRs (assign owners etc)

**Team Updates**

@lidel
-   Done:
    -   Fixed some bugs and released IPFS Companion Beta:[v2.6.3.12520](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.6.3.12520) 
        -   Ships with window.ipfs.enable – feedback welcome in[#619](https://github.com/ipfs-shipyard/ipfs-companion/pull/619) 
    -   Proposal to enable Gateway on localhost IPv6 –[go-ipfs/issues/5905](https://github.com/ipfs/go-ipfs/issues/5905) 
    -   Created shared Glossary for all IPFS project on Transifex (<https://docs.transifex.com/setup/glossary>), the goal is to reuse the same translation for key terms across all projects (compliments shared translation memory).
    -   Some meetings related to team growth
-   Blocked:
    -   “Add files” regression in latest[ipfs-webui/issues/928](https://github.com/ipfs-shipyard/ipfs-webui/issues/928#issuecomment-452507734) 
-   Next:
    -   Release Companion
    -   PR to enable gateway on ipv6 in go-ipfs by default
-   Notes:
    -   Will IPv6 be the default? A: Not all systems support IPv6 - need to check first   

@hacdias
-   Done:
    -   Copy/paste shortcuts fixed on macOS: https&#x3A;//github.com/ipfs-shipyard/ipfs-desktop/pull/770
    -   Researched about binary signing for Windows. Sent an email to IT team. Soon, we’ll have signed Windows binaries.
    -   Released v0.6.1 of Desktop (<https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.6.1>)
        -   Auto-update worked for me! Yey! Although it didn’t work for everyone (<https://github.com/ipfs-shipyard/ipfs-desktop/issues/783>) 🤯
    -   Research Windows Context Menu extensions (<https://github.com/ipfs-shipyard/ipfs-desktop/issues/678#issuecomment-451994682>) and we decided to add it as a top-level menu.
-   Blocked:
    -   {?}
-   Next:
    -   {?}


@fsdiogo
-   Done:
    -   Web UI “Add by path” and “Add folder” fixes
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/923>
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/924>
    -   Released v2.3.2
        -   <https://github.com/ipfs-shipyard/ipfs-webui/releases/tag/v2.3.2>
    -   \[WIP] Open ContextMenu with right-click
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/929>
    -   \[WIP] Add folders and files
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/931>
-   Blocked:
    -   N/A
-   Next:
    -   Finish pending PRs
    -   Refactor Files List

@olizilla
-   Done:
    -   Fixed peers geolocation issue:<https://github.com/ipfs/ipfs-geoip/pull/66>
    -   WIP on analytics for webui:<https://github.com/ipfs-shipyard/ipfs-webui/pull/930>
    -   Release plan for desktop:<https://github.com/ipfs-shipyard/ipfs-desktop/issues/788>
    -   Release plan for webui:<https://github.com/ipfs-shipyard/ipfs-webui/issues/927>
    -   Got macos certs for desktop!
    -   Interviews
    -   Travel arrangements for libp2p team week (i’m going!)
-   Next:
    -   Ship analytics for webui
    -   Wire up additional analytics for desktop
    -   Get signed builds of IPFS Desktop working
    -   Organise a GUI team gathering in Proto next Wednesday.

@hugomrdias
-   Done:
    -   Working on bundle size PRs
    -   Multihashing-async async iterators PR
    -   Near-form syncs
-   Blocked:
-   Next:
    -   Handover benchmarks setup from Nearform
    -   Finish multihashing-async async iterators PR
    -   Finish bundle size PRs
-   Notes:
    -   mplex module needs attention (only for browser)
    -   @lidel: ipfs is one of several users of libp2p in browser
    -   <https://github.com/ipfs/benchmarks>
    -   Look at libp2p browser tests

**Discussion Highlights**

_Discussion highlights and additional notes._

- @lidel: Does ipv6 [look](https://user-images.githubusercontent.com/157609/50833266-eb72ee00-1350-11e9-9c24-33399eda7c83.png) better, or is it just shorter? :)
- @olizilla: Preview of self-hosted opt-in analytics, emphasis on respecting user privacy 
- @fsdiogo: Web UI: interesting problem: how to tell if dragged&dropped item is a file or a folder? - [ipfs-webui/pull/931](https://github.com/ipfs-shipyard/ipfs-webui/pull/931) 
- @hugomrdias
  - Status update about reducing bundle size across multiple projects
  - Default transport of go-ipfs and js-ipfs will move towards QUIC, and mplex module will be basicallty only for the browser. 
    - Q: We should think about the future: who will be responsible for maintenance?
    - A: It remains a key part of libp2p stack, IPFS is only one of many libp2p clients that run in the browser (eg. MetaMask), but we should spend some time to help with dev if needed. 
  - We should take a look at browser-related tests in https://github.com/ipfs/benchmarks

**Guest Demo: PPWA with APSW**

@gozala talked about his experiments with Progressive Peer-to-peer Web Applications (PPWA)

It starts [00:30:21](https://ipfs.io/ipfs/bafybeialvp3az23urfzwpfmaiopkd42t3gvpai6t2ozl3lf2l5ghgsvtby/2019-01-09%2017.05.42%20GUI%20and%20In%20Web%20Browsers%20Weekly%20833247793/zoom_0.mp4#t=00:30:21)

Context about PPWA: <https://via.hypothes.is/https://gozala.hashbase.io/posts/Native%20talk.html>   
Repository with PPWA PoC: <https://github.com/Gozala/lunet/> 

-   Idea behind PPWA: static sites use Service Workers and Iframes to enable IPFS experience and improve offline mode
    -   How to pick the best IPFS backend at hand in a way that works in vanilla browser?
    -   How to reach ipfs-desktop node from browser without installing ipfs-companion and setting up new CORS rules?
    -   Service worker-based access points!
        - Access Point Service Worker (APSW)
        - Companion Service Worker (CSW)
        - CSW talks to APSW iframe over `MessagePort`
        - Details: [lunet/#overview](https://github.com/Gozala/lunet/#overview)
- <https://lunet.link>  is a static site published to Github Pages, it installs service worker and also serves as iframe API endpoint
    - Maximizing ease of use: a single `importScripts` to set up APSW orchestration and `<meta>` + `<script>`  tags to define "dapp mount point"
-   Demo: IPFS Web UI loaded via APSW
-   Demo: Peerdium via APSW - publishing encrypted payload to IPFS
-   Challenge: HTTPS on localhost (Firefox has own keystore etc)
-   Challenge: how to keep service worker alive?
    -   Firefox terminates service worker (workaround possible with web page cooperation)
    -   Issues in Safari and Firefox (Service Worker)
-   Demo works on Safari on iPhone
-   Future: more endpoints, more “sinks”, better performance, ensure it works by default
-   Textile threads are interesting way of delivering “Follow”/“Sync” primitives
-   Longer vision: sites can access social data without downloading it all
