# GUI and In Web Browsers 2020-04-21

A biweekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790

## Participants

- @vasco-santos
- @jacobheun
- @hacdias
- @jessicaschilling 
- @rafaelramalho19
- @autonome
- @lidel

## Recording

- https://ipfs.io/ipfs/bafybeigpxhld3lg2jr2juhir7k352r37zvbflsemtxcnjkb3tyr2mfkrn4/
- https://youtu.be/M9o4u-EXsFU 

## Notes

- Welcoming Rafael to the team!
- Native Protocol Handler API for Browser Extensions: [ipfs/devgrants#30](https://github.com/ipfs/devgrants/pull/30) merged, started paperwork
  - [protocol-handler-api-for-browser-extensions.md](https://github.com/ipfs/devgrants/blob/master/targeted-grants/protocol-handler-api-for-browser-extensions.md)
- WICG: [Filling the remaining gap between WebSocket, WebRTC and WebTransport](https://discourse.wicg.io/t/filling-the-remaining-gap-between-websocket-webrtc-and-webtranspor/4366)
  (W3C’s Web Platform Incubator Community Group)
  - feedback from IPFS/libp2p posted [here](https://discourse.wicg.io/t/filling-the-remaining-gap-between-websocket-webrtc-and-webtranspor/4366/5?u=lidel)
  - https://twitter.com/dietrich/status/1252287852341334021
- Q: should IPFS Companion addd support for `.eth` out of the box, or as opt-in? ([test](https://github.com/ipfs-shipyard/ipfs-companion/issues/865#issuecomment-617153849))
  - A: let's make it an opt-in experiment for now
- [PeerStore update](https://github.com/libp2p/js-libp2p/issues/582)
- [ipfs-css](https://github.com/ipfs-shipyard/ipfs-css/pull/40) about ready for new release
- [Peers map hover niftiness](https://github.com/ipfs-shipyard/ipfs-webui/pull/1444) (wip demo by Rafael)
- IPFS Mobile Design Research, at last week's LoCol call - [notes and video](https://github.com/ipfs/local-offline-collab/issues/25#issuecomment-614722799) are available
- Update ws-stardust? What is the next step, and suggestions for connectivity in js-ipfs etc
  - usable, but work towards use of relays by default continues instead:
      - ws-webrtc will be the default public choice for now
      - then we expect to switch to relays at some point (ETA unknown yet)
      - images for easy self-hosting can be found at: [Libp2p Docker Hub](https://hub.docker.com/u/libp2p):
        - https://hub.docker.com/r/libp2p/js-libp2p-stardust
        - https://hub.docker.com/r/libp2p/js-libp2p-webrtc-star
