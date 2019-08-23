
# GUI and In Web Browsers 2019-08-21

A weekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790
* Recording: [ipfs://bafybeifaxanbf6salkmygjbvcowd667wxbeunqs66jhg7qrcxcdmgcmw4m](https://ipfs.io/ipfs/bafybeifaxanbf6salkmygjbvcowd667wxbeunqs66jhg7qrcxcdmgcmw4m) || https://youtu.be/zccIBG9fMM4

Participants:

- @terichadbourne
- @lidel
- @autonome

## Agenda

- cohosting, _One More Time with Feeling_:  
  https://github.com/ipfs-shipyard/ipfs-desktop/issues/1034
- HTTP URLs with custom Path and Host. How to represent them with multiaddr?   
  https://github.com/multiformats/multiaddr/issues/63#issuecomment-521694427
- PSA: [multiaddr-to-uri](https://github.com/multiformats/js-multiaddr-to-uri) and [uri-to-multiaddr](https://github.com/multiformats/js-uri-to-multiaddr) are part of Multiformats now
- How to cover more of the test matrix?  
  https://hackmd.io/8N-UeohiTFGO9pLhs62J-g?both

## Notes

- cohosting
  - directory approach
  - other apps can ls /cohosting
  - can refresh
  - if same, bumps timestamp
  - simple - no new configs
  - good for experimenting
  - can also see in Files screen in webui
  - for management
  - specs?
  - where would they live?
  - userland first
  - cohosting repo for now?
  - how can i find out what other node has?
  - can't browse others mfs
  - but announce cids
  - would work implicitly
  - only if interested in same website
  - no extra communication needed
  - how to add to chost list?
  - can  add url bar button in browser from companion
  - desktop - would be in webui
  - embedded node in companion?
  - programmatically the same
  - in extension has storage
  - in browser is limited
  - also need gc
  - firefox bookmarks api, label cohost issues
  - have to assume chromium extensions api as baseeline
  - for cohosting, are the names human readable?
  - yes!
  - so first has to have dns?
  - or can use ipns or something?
  - hugo's ipns work will enable labels/aliases
  - get a dnslink address for free
  - dietrichsstuff.websites.ipfshosting.io or whatnot
- http urls in multiaddr
  - lossy!
  - no way to represent protocol specific parameters
  - enables doh
  - and domain fronting


## Async Updates

### @lidel

- Done:
    - cid.ipfs.io: [add support for libp2p-key multicodec](https://github.com/multiformats/cid-utils-website/pull/14)
    - libp2p/specs: [RFC 0001: Text Peer Ids as CIDs](https://github.com/libp2p/specs/pull/209)  (part of [cidv1b32 effort](https://github.com/ipfs/ipfs/issues/337))
    - ipfs-companion: [feat: support ipfs://{dnslink}](https://github.com/ipfs-shipyard/ipfs-companion/pull/748)
    - ipfs-webui: [fix: stop crashing pin screen on a single ipfs.files.stat error](https://github.com/ipfs-shipyard/ipfs-webui/pull/1121)
    - js-multiaddr-to-uri: [feat: assume HTTP when multiaddr ends with /tcp](https://github.com/multiformats/js-multiaddr-to-uri/pull/7)
    - ipfs/js-ipfs: [feat: resolution of .eth names via .eth.link](https://github.com/ipfs/js-ipfs/pull/2373)
    - ipfs/js-ipfs: [fix: preload addreses with trailing slash (new multiaddr-to-uri)](https://github.com/ipfs/js-ipfs/pull/2377)
- Next:
    - Land [js-ipfs/pull/2304](https://github.com/ipfs/js-ipfs/pull/2304)
    - ipfs-provider [fixup](https://github.com/ipfs-shipyard/ipfs-provider/issues/1)
    - p2p transport in Brave

### @hacdias (not present)

- Done:
    - (webui) [do not crash on non-unixfs nodes](https://github.com/ipfs-shipyard/ipfs-webui/pull/1115)
    - (webui) [add ipfs config help link](https://github.com/ipfs-shipyard/ipfs-webui/pull/1113)
    - (webui) [fix explore bar help text](https://github.com/ipfs-shipyard/ipfs-webui/pull/1112)
    - (webui) [remove unnecessary padding from experiments](https://github.com/ipfs-shipyard/ipfs-webui/pull/1108)
    - (desktop) [fix crash on notifications](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1036)
    - (desktop) [fix snapcraft build on CI](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1032)
    - (desktop) [removed co-host feature for now](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1035)
        - Discuss on [ipfs-desktop#1034](https://github.com/ipfs-shipyard/ipfs-desktop/issues/1034)
    - (desktop) [fix go-ipfs version on about](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1037/files)
    - (desktop) [released v0.9.0-beta.2](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.9.0-beta.2)
    - (desktop) [write some (first) unit tests](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1038)
        - **Awaiting for review**
    - Other small stuff...
- Next:
    - Review desktop and webui issues.
    - Release webui 2.5.1
    - Desktop 0.9.0
