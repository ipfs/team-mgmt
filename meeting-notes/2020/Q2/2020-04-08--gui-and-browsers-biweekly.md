 # GUI and In Web Browsers 2020-03-25

A biweekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790

## Participants

- @autonome
- @jacobheun
- @jessicaschilling 
- @vasco-santos
- @lidel

## Recording

- https://youtu.be/b4BBbpl-BnQ 
- https://ipfs.io/ipfs/bafybeidop5y6yu7j64vnzopi3xqij7nz3ptdqszyxi6z3n4j5si5bldqzq/

## Agenda

- Quick update about ipfs-companion [v2.11.0](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.11.0) (details in release ntoes)
- go-ipfs 0.5 release preparation: 
    - https://github.com/ipfs/go-ipfs/issues/7109
    - POST-only HTTP API in go-ipfs 0.5
        - If you use custom HTTP Client, make sure it sends POST requests
        - JS land: https://github.com/ipfs/js-ipfs/issues/2971
- proposal: more breathing room, switch this call to bi-weekly?
    - I heard rumors about no meetings on Wednesdays, do we need to pay attention to this?
    - We will switch to bi-weekly and move the meeting day if that becomes needed.
- Cliqz is interested in IPFS integration, talking soon
- Web-RTC, ideas for grants?
    - Flushing out [distributed signaling spec](https://github.com/libp2p/specs/pull/159)
        - Create a POC of distributed signaling
    - Distributed ICE
    - Determine reasonable connection manager constraints for webrtc
    - An "audit" of the things we have planned for webrtc, ie: What is reasonable and what are features/experiments we should have on our roadmap.
    - using https://github.com/ipfs-shipyard/ipfs-share-files/issues/58 as a playground?
- dweb.link traffic around Opera launch
- Igalia proposal will be moving forward soon, just contract details at this point
- [13-repo ZenHub board](https://app.zenhub.com/workspaces/-ipfs-app-family-ux-5e7a3123e969e659cdebb5e6/board?repos=111841602,32695583,36580101,24483721,142161410,119716282,116711586,38799513,142181521,147528357,148369983,40225364,104770273) for consolidating/tracking UX-related stuff
- Looking at more Brave work re embedded/bundled node

## Highlights

> Details of past week's work are published in notes of [IPFS Core Implementations Weekly Sync](https://github.com/ipfs/team-mgmt/issues/992). This section includes a subset of past week's work.

- Releases
    - ipfs-companion beta: [v2.10.0.902](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.10.0.902)
    - ipfs-companion beta: [v2.11.0.904](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.11.0.904)
    - ipfs-companion stable: [v2.11.0](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.11.0)
    - ipfs-webui [v2.7.3](https://github.com/ipfs-shipyard/ipfs-webui/releases/tag/v2.7.3)
    
