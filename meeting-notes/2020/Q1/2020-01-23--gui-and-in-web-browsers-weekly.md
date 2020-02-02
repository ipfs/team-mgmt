# GUI and In Web Browsers 2020-01-23

A weekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790


## Participants

- @lidel
- @autonome
- @jacobheun
- @andrewnesbitt
- @riba

## Recording

- https://ipfs.io/ipfs/bafybeigegltvzlzdqcc5x3hy6weaxoydv6oogwjbiph2q4ptzyrckt45am
- https://youtu.be/FhhG9ySqqXk 

## Agenda

- Browsers & Connectivity SIG kick-off
    - Unblocking the js-libp2p roadmap
        - **An overview of the current state of js-libp2p in browsers**
            - bootstrap nodes are hit every time node starts, easy to block or fail due to cert/networt misconfiguration
            - no DHT
                - ws-star server remains the only practical discovery option
                - delegated routing works, but 
                    - nobody listens on `/wss`, making DHT peers undialable by browser nodes
                    - difficult to run own delegate node
                      (`Gateway.APICommands` not wired to anything, needs Nginx)
            - WebRTC remains disabled by default (historically unstable)
                - user notes in [js-ipfs/issues/1088: Stable transports in the browser](https://github.com/ipfs/js-ipfs/issues/1088)
                - existing WebRTC transports listed in [in-web-browsers/issues/153](https://github.com/ipfs/in-web-browsers/issues/153)
        - **What are the major issues js-libp2p/js-ipfs users face today?**
            - no DHT
            - requires manual configration (hardcoding specific servers in config)
            - (semi-)centralization (bootstraps, ws-stars, preloads, delegates)
            - data preload (js-ipfs & `/api/v0/refs`)
        - **What improvements can we make this year to improve Connectivity in browsers?**
            - Saving previously seen nodes for later bootstrapping ([issue from go side](https://github.com/ipfs/go-ipfs/issues/3926))
            - [sunset the *-star protocols](https://github.com/libp2p/js-libp2p/issues/385) - initial roadmap from original issue:
                - Verify that [js-libp2p-rendezvous](https://github.com/libp2p/js-libp2p-rendezvous) is complete and well tested
                - Sunset any variation of the websocket-star (star, stardust, multi, and so on)?
                  - Remove any trace of *-star transport from examples, docs, base config?
                  - Make it default with js-ipfs?
                - Sunset webrtc-star?
                  - Create webrtc-circuit-relay-exchange (for lack of better name for now) that uses the Circuit Relay to exchange the SDP offer.
            - Improve UX of running own, federated services ([bootstrap with /wss/](https://github.com/ipfs/js-ipfs/issues/2401), preload, *-star or relay)
            - improve *-star situation before sunsetting
                - (?) [replace websocket-star with stardust](https://github.com/ipfs/js-ipfs/pull/2600)
                - (?) [js-libp2p-webrtc-star](https://github.com/libp2p/js-libp2p-webrtc-star) instead of ws-star (where possible)
- Subdomain gateways corner ;-)
    - WIP in go-ipfs: [preview of browser address bar with *.ipfs.localhost](https://github.com/ipfs/go-ipfs/pull/6096#issuecomment-577727011)
    - proposal: [Clear-Site-Data when loaded via path gateway](https://github.com/ipfs/in-web-browsers/issues/157)
        - easy way to incentivize origin-isolation where it matters
        - please comment on the issue if its not a good idea
- Brave roadmap 2020
    - https://twitter.com/dietrich/status/1219492785469808640
    - one of topics for sync time during IPFS team week
    - pushing blogpost work to next week

## Highlights

> Details of past week's work are published in notes of [IPFS Core Implementations Weekly Sync](https://github.com/ipfs/team-mgmt/issues/992)   
