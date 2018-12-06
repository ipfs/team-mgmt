
# GUI & In Web Browsers Weekly Sync 2018-11-28

- **Lead:** @olizilla
- **Notetaker:** @lidel
- **Attendees:**
    - @alanshaw
    - @hacdias
    - @olizilla
    - @fsdiogo
    - @terichadbourne
    - @lidel

## Before the Sync

- Write down your updates
    - What have you accomplished since the last Weekly?
    - Were there any blockers? If so, which ones? Is it still blocked? Why?
    - What is the next important thing you should focus on?
- Read updates of others
    - Any questions, requests to communicate?
- Ask everyone to put their name into the list of attendees and add any last minute agenda items
- Go over everyone's updates and ask if there are any questions or things to discuss
- Everyone can demo something!

## Agenda

- IPFS Desktop v1.0 plan
- IPFS Share App copy demo
- ipfs-friends


## Notes

### Team Updates

- @lidel
    -  Done:
        -  Roadmapping, thinking about future of in-web-browsers WG - summary in [ipfs/team-mgmt/issues/752](https://github.com/ipfs/team-mgmt/issues/752#issuecomment-442417974)
        - [IPFS Companion v2.6.2 (Stable)](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.6.2)
        - Added ipfs-desktop to [Transifex](https://www.transifex.com/ipfs/ipfs-desktop/) - [ipfs-desktop/pull/706](https://github.com/ipfs-shipyard/ipfs-desktop/pull/706)
        - Opened [RFC: OBJECT API should accept CIDv1](https://github.com/ipfs/interface-ipfs-core/issues/397)
        - [Discussion about default CORS headers in go-ipfs](https://github.com/ipfs/go-ipfs/issues/5138#issuecomment-441873643)
        - [Found potential preload optimization with `Access-Control-Max-Age`](https://github.com/ipfs/infrastructure/issues/447#issuecomment-442081690)
        - Various experiments with the rabbit hole of `iframe+service-worker+js-ipfs`
    - Blocked:
        - Waiting for SXG Origin Trial headers to be added to our gateway - [ipfs/infrastructure/issues/453](https://github.com/ipfs/infrastructure/issues/453)
    - Next:
        - backlog (finish iframe experiements, get back to window.ipfs unless SXG lands)

- @fsdiogo
    - Done:
        - Enable dir listing and downloading folder structures
            - https://github.com/ipfs-shipyard/ipfs-share-files/pull/47
        - Open files in gateway
            - https://github.com/ipfs-shipyard/ipfs-share-files/pull/53
        - Update copy
            - https://github.com/ipfs-shipyard/ipfs-share-files/pull/57
    - Next:
        - Finish v1 of Share Files copy
        - Integrate Share Files in Web UI & Companion (?)

- @alanshaw
    - Done:
        - Completed `--cid-base` option PR
        - Added CID version agnostic-ness interop tests
            - <img width="377" alt="screenshot 2018-11-27 at 15 49 23" src="https://user-images.githubusercontent.com/152863/49093555-43034180-f25c-11e8-885c-4633ab2c55ed.png">
            - https://github.com/ipfs/interop/pull/46
        - `ipfs-api` moved to `ipfs-http-client`
        - `ipfs-http-client@27` TLDR:
            - swarm.peers QUIC fix 😂
            - Object API returns CIDs
            - Files API refactor
        - IPFS / Nearform perf wrangling
            - https://github.com/ipfs/benchmarks/
        - IPFS CI discussions
            - https://github.com/ipfs/infrastructure/issues/442
    - Next:
        - Implement CID agnostic put/get
        - Implement `addFrom*`
        - Many PR reviews and merges...

- @olizilla
    - Done: 
        - event-stream PRs https://github.com/ipfs/website/pull/279
        - Front end designer job description & visual design lead hiring kick off
        - Share files copy
        - Release multibase 0.6 https://github.com/multiformats/js-multibase/releases/tag/v0.6.0
        - virtuous gui - ddc loop. - https://github.com/ipfs/team-mgmt/issues/752#issuecomment-441117613

    - Next:
        - User tests for Web UI
        - Upgrade peers page to do IP proximity instead of geolocation
        - Upgrade files page to show the infinite plane.

- @terichadbourne
    - Done: 
        - Feedback on copy for the share files app https://github.com/ipfs-shipyard/ipfs-share-files/issues/41
        - WIP: saving code state and lesson completion state in ProtoSchool https://github.com/ipfs-shipyard/proto.school/pull/86
    - Next: 
        - Improve state saving in ProtoSchool 
        - Move ProtoSchool to its own org so chapters can have their own subpages


- @hacdias
  - Done:
    - Fix some random IPFS Desktop errors:
      - https://github.com/ipfs-shipyard/ipfs-desktop/pull/709
      - https://github.com/ipfs-shipyard/ipfs-desktop/pull/708
      - https://github.com/ipfs-shipyard/ipfs-desktop/pull/711
      - https://github.com/ipfs-shipyard/ipfs-desktop/pull/697
    - Add i18n to Desktop: https://github.com/ipfs-shipyard/ipfs-desktop/pull/706
  - Next:
    - Merge this to fix some errors: https://github.com/ipfs-shipyard/ipfs-desktop/pull/722
    - Fix some more issues with Desktop
    - Add a storybook
    - Auto-release binaries on tags (talk about Jenkins VS Travis)

### Discussion Highlights ✨

- [IPFS Companion shipped with Web UI v2.2](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.6.2)
- Initial poc&success with [exposing API of js-ipfs running inside of Service Worker to a third-party website](https://github.com/ipfs-shipyard/service-worker-gateway/issues/30) (different Origin) over iframe proxy.
    - This is part of "window.ipfs 2.0 / fallback-lib" OKR, the goal is to get a better understanding of existing constraints across vendors in available Web APIs for creating alternative "API providers". 
    - Remaining work is to check if multiple websites embedding such iframe will share instance/repository/storage. 
    - If time allows, split @lidel's sandbox into comprehensible examples.
- Origin Trial of [Signed HTTP Exchanges](https://github.com/ipfs/in-web-browsers/issues/121) should land next week.
    - We are just waiting for HTTP headers to land - [ipfs/infrastructure/issues/453](https://github.com/ipfs/infrastructure/issues/453)
- [Share App](https://github.com/ipfs-shipyard/ipfs-share-files) updates
    - New copy for upload and download screen
    - We will add i18n soon
    - Discovery speed without local daemon needs some extra work
        - There should be some UI indication that something is happening behind the scenes
    - When that is resolved, we will swap Share link in Web UI to point at the Share App 
- [Migration to CIDv1](https://github.com/ipfs/ipfs/issues/337): Adding data as CIDv0 and getting it by CIDv1
    - PR with interop tests: [ipfs/interop/pull/46](https://github.com/ipfs/interop/pull/46)
    -  already works with go-ipfs v0.4.18
    -  work in progress to add support in js-ipfs as well   \o/
    -  ["I love it when a plan comes together"](https://www.youtube.com/watch?v=NsUFBm1uENs)
-  `ipfs-api` was renamed to [`ipfs-http-client`](https://github.com/ipfs/js-ipfs-http-client)
-  `ipfs-http-client@27`
    -  `swarm.peers` now support QUIC multiaddrs
    -  Object API returns CIDs now
    -  Files API refactor  - [js-ipfs/pull/1720](https://github.com/ipfs/js-ipfs/pull/1720)
- [IPFS Desktop](https://github.com/ipfs-shipyard/ipfs-desktop) updates:
    - `master` includes Web UI v2.2 
    - we briefly discussed which files are created by running `ipfs daemon` and how to handle cleaning them up - continued in [ipfs-desktop/pull/722](https://github.com/ipfs-shipyard/ipfs-desktop/pull/722)
- [ipfs-friends](https://github.com/tableflip/ipfs-friends) - get by with a little help from your friends 🤗 (to share files)
    - experiment in reciprocal pinning
    - add peers as your friends
    - friends listen on pubsub for content other friends wants to keep alive and pin them 
