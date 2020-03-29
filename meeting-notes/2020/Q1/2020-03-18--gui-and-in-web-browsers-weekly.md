 # GUI and In Web Browsers 2020-03-18

A weekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790

## Participants

- @vasco-santos
- @lidel 
- @autonome
- @chafey

## Recording

- https://ipfs.io/ipfs/bafybeifgwvqtpgchvub4z65nraop6dxcqvyanhsfr77lc435c5f4mxp46e 
- https://youtu.be/rYt8OdvppRI 

## Agenda

- go-ipfs PR merged: feat: gateway subdomains + http proxy mode
    - https://github.com/ipfs/go-ipfs/pull/6096
    - next: ipfs-companion taking advantage of subdomains over http proxy by default
- ipfs-desktop: 
  - [v0.10.4 passed macOS notarization](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1365#issuecomment-598213301)! 
- Unlocking IPNS resolution in browser: https://github.com/ipfs/js-ipfs/issues/2921
  - right now hardcoded to DHT module/implementation, which does not work in web browser
  - should be possible to decouple it from that and leverage delegated routing modules from libp2p
  - probably something SIG could look at in Q2
- Road to PeerStore refactor [libp2p/js-libp2p#582](https://github.com/libp2p/js-libp2p/issues/582)
    - Mildly related: issue about selecting type of datastore persistence via js-ipfs config: [js-ipfs: Support for Persistent Storage in Web Browsers](https://github.com/ipfs/js-ipfs/issues/2937)
- libdweb - help for Sam Macbeth's PR 
    - https://github.com/libdweb/libdweb/pull/2
    - the libdweb project moved from mozilla to a standalone org
    - latest firefox nightly breaks it, hard to maintain
    - anyone familiar with Gecko codebase? check the PR
- Brave, what's next? any updates on local discovery?
    - embedded js-ipfs may not be feasible long term (google deprecating Chrome Apps, APIs may break after 2022)
    - started thinking about adding new node type based on rust-ipfs or embedding go-ipfs
        - will sync with Brave, probably go-ipfs will happen first, as they have experience with emebedding TOR binar already
        - ipfs-companion would be the UI for managing embedded go-ipfs
- Protocol handler devgrant
    - PR draft waiting  for feedback https://github.com/ipfs/devgrants/pull/30
- Opera release coming, drafting blog post asap
- Chrome 81 introduces the mobile web to NFC with an origin trial:
  - https://blog.chromium.org/2020/02/chrome-81-near-field-communications.html
  - https://web.dev/nfc
  - potential use: decentralized, p2p signaling on mobile

## Highlights

> Details of past week's work are published in notes of [IPFS Core Implementations Weekly Sync](https://github.com/ipfs/team-mgmt/issues/992). This section includes a subset of past week's work.

- Released
    - [ipfs-desktop v0.10.4](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.10.4)
