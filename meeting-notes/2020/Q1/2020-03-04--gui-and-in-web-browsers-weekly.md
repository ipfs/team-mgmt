 # GUI and In Web Browsers 2020-03-04

A weekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790

## Participants

- @lidel
- @autonome
- @jacobheun
- @vasco-santos
- @hugomrdias
- @andrew

## Recording

- https://ipfs.io/ipfs/bafybeicx2rf7f6if7feeqt3cf7pnyoywony2cu5g6dcqkoloatvqyzppue
- https://youtu.be/-0HCj7Wmo64 

## Agenda

- Q: Should we disable `window.ipfs` until support for async iterables lands in Q2?
    - Context: https://github.com/ipfs-shipyard/ipfs-companion/issues/852
    - How to mitigate similar problems in the future? Or make it easier for developers?
        - Add interface-js-ipfs-core version to the output of `ipfs.version()`
          - Proposal: https://github.com/ipfs/interface-js-ipfs-core/issues/599
- A proposal on functional configuration of js-libp2p [js-libp2p#576](https://github.com/libp2p/js-libp2p/issues/576#issuecomment-594590865)
- Review [browser and connectivity metrics](https://docs.google.com/spreadsheets/d/1yJGDkrquQg38zdr8N-9zZ-PzfQjNo0EqhMXuvMz0j3I/edit#gid=0)
    - Specifically - can we measure in-browser nodes in any way
        - not easily until DHT
- terminal.co, 3box.io
    - understanding needs and opportunities
    - both pushing on browser node capability
    - Joel's talk at DNSummit in Denver was about things we know are problem once adoption increases
- IETF 10~~7~~8, July in Madrid - [event link](https://www.ietf.org/how/meetings/108/), and [PL events issue](https://github.com/protocol/event-management/issues/312)
- [Cohosting](https://github.com/ipfs-shipyard/cohosting), don't let the dream die
    - China's suppression of covid-19 news
    - Make it easy to publish to IPFS, maybe a covid-19-specific extension? Autocohost?
    - Can we do a grant?
    - Theme-able Companion base?
    - Neat things like [single file extension](https://addons.mozilla.org/en-US/firefox/addon/single-file/) for helpers
- 2020 Roadmap
    - quick brainstorm on EOY goals
        - Partners such as Brave can enable Chromium patches that enable protocol handler registration  from browser extension
        - (🎠) Hardened DNSLink resolution in browser (DoH, or some p2p quorum) that is a) reliable b) hard to censor
        - (P0) Browser nodes can reliably find and directly connect to other browser nodes they care about.
        - (P0) Browser nodes restart with a persisted list of known peers
        - (P1?) Alternative Peer Discovery mechanisms exist (like Pubsub discovery? creative use of DNS? )
        - (P0) Multiple browser tabs are easily backed by a single ipfs node
        - Browser nodes don't carry a big crypto bundle with them
        - Work has begun on a native Chromium implementation that bundles IPFS Rust.
        - (Stretch): We have experimental support for browser transports like WebTransport or Webrtc over QUIC
        - Decision on DHT in the browser
            - We can dial DHT nodes from the browser!
            - DHT query can complete in < 20 dials (could make browser DHT more feasible, this number should be based on math and not jakes brain)
    - walk back from there
