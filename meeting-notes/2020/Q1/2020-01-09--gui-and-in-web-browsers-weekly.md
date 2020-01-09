# GUI and In Web Browsers 2020-01-09

A weekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790

## Participants

- @autonome
- @hacdias
- @lidel

## Recording

- https://ipfs.io/ipfs/bafybeigm3jso2ysl2kvuedqi3fegzqfvg6ffyel5lfjkdxb6gfxttrorpm/
- https://youtu.be/VsagFP8LaA0 

## Agenda

- Add this meeting's weekly check-in on issues to each of the related repos (desktop, webui, companion)
    - AI: add notes to  README of GUI* repos about this call (as an opportunity for highlighting issues, setting expectations)
        - repos: desktop, webui, companion, awesome
        - test run for 2 weeks
- Subdomain gateways update
    - [agreed on new config options](https://github.com/ipfs/go-ipfs/pull/6096#issuecomment-569712890)
    - next steps: implement in go-ipfs and js-ipfs, add support to ipfs-companion
- [E2E tests for webui landed](https://github.com/ipfs-shipyard/ipfs-webui/pull/1353)
    - Next: [run all unit and e2e tests by default](https://github.com/ipfs-shipyard/ipfs-webui/pull/1373) and [add to CI of js-ipfs](https://github.com/ipfs/js-ipfs/pull/2706) and go-ipfs
- Review browser design guidelines
    - progressing nicely, expect presentation during the All Hands call in next few weeks
- What is libp2p-stardust?
    - websocket-based transport and signaling for js-ipfs in web browser contexts that solves some pain points of ws-star
    - [open PR to replace websocket-star with stardust](https://github.com/ipfs/js-ipfs/pull/2600)
    - [plan to sunset the *-star protocols](https://github.com/libp2p/js-libp2p/issues/385)
      - open question: should we sunset, or should we switch to stardust before that happens?  [js-libp2p-stardust/issues/8](https://github.com/libp2p/js-libp2p-stardust/issues/8)
- Maybe Companion message about missing daemon [is too serious?](https://twitter.com/dietrich/status/1215039540588503040)
  - yes, we should [improve onboarding on Firefox for Android](https://github.com/ipfs-shipyard/ipfs-companion/issues/690), but "Fennec" is deprecated and ["Fenix" does not support WebExtensions yet](https://github.com/mozilla-mobile/fenix/issues/574)
- 3 seconds of silence in memory of [Suborigins](https://github.com/ipfs/in-web-browsers/issues/66#issuecomment-572499918)
    
## Highlights

> Details of past week's work are published in notes of [IPFS Core Implementations Weekly Sync](https://github.com/ipfs/team-mgmt/issues/992)   
> This section includes a subset of past week's work 

- Released
    - [ipfs-companion v2.10](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.10.0) landed in Chrome Web Store
