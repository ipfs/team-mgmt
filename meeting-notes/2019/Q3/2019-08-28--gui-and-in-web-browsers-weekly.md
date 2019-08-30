# GUI and In Web Browsers 2019-08-28

A weekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790
* Recording: [ipfs://bafybeiabyc7ob6qgjb3wxems3cbovrpy7y2n7x2oufxplbvvsvkps2p3wu](https://ipfs.io/ipfs/bafybeiabyc7ob6qgjb3wxems3cbovrpy7y2n7x2oufxplbvvsvkps2p3wu) ||  https://youtu.be/RNaM2VT44bw

## Participants

- dietrich
- lidel
- hacdias
- olizilla

## Agenda

- meta (about this call)
    - regular folks are not able to attend, making this bi-weekly?
    - personal async updates are shifteh half-week and duplicated in notes of [IPFS Core Implementations Weekly Sync](https://github.com/ipfs/team-mgmt/issues/992). Should we just post them there?
- first draft of cohosting spec https://github.com/ipfs-shipyard/cohosting/pull/2
- ipfs-provider v2: [how to customize the fallback order of IPFS providers](https://github.com/ipfs-shipyard/ipfs-provider/issues/3#issuecomment-525719359)
- (missing) [docs on setting up own bootstrapp node with WebSockets over TLS](https://github.com/ipfs/js-ipfs/issues/2401)
- unit test approach feedback - https://github.com/ipfs-shipyard/ipfs-desktop/pull/1038
- should ipfs content be indexed? - https://github.com/ipfs/website/pull/330
- IPFS Desktop Build - https://github.com/ipfs-shipyard/ipfs-desktop/issues/1055#issue-485151371

## Notes

- meta
    - let's try shortening to 45min
    - @lidel and @hacdias should post async updates in core implementations call (https://github.com/ipfs/team-mgmt/issues/992), posting here is optional
- cohosting spec
  - tricky to balance between multiple use cases and simplicity
  - lets try with minimal scope of cohosting full websites
  - removes the complexity of page subresources
  - no path rewriting, keeps data deduplicated
  - AI: update readme / spec to include Design Decisions that impacted the scope
  - low priority, but good to experiment
  - lack of ACL may produce insights into the future of MFS (eg. need for multiple "mfs drives", each with different permissions)
- ipfs-provider
  - handy lib for people who want to opportunistically get the best API instance  with configurable fallback
  - both order and the list of falback providers should be tweakable
  - looking for feedback on the new API
  - join discussion in https://github.com/ipfs-shipyard/ipfs-provider/issues/3
- using own bootstrapper in js-ipfs
  - not trivial due to HTTPS requiring websockets over TLS
  - go-ipfs supports `/ws/`, but does not support `/wss` (ws over TLS)
  - requires nginx with certs as reverse proxy
  - need good docs on setting it up end-to-end
  - if something like this already exists, please link in https://github.com/ipfs/js-ipfs/issues/2401
- ipfs-desktop CI and tests
  - TravisCI fails to download webui from gateway
    - potential solution: force fetching from specific gateway instance (ignoring anycast routing)
  - open problem: Electron Builder and Travis Failures (https://github.com/ipfs-shipyard/ipfs-desktop/issues/1055)
    - considering move to circleci if no fix lands soon
- should ipfs content at `ipfs.io/ipfs/*` be indexable
  - unclear, there are pros and cons
  - made content searchable, but these days google removed it from results
  - still may be beneficial as a signal to keep linked content alive
  - discussion continues https://github.com/ipfs/website/pull/330
  
## Async Updates

> Note: below is a copy of selected updates published in [IPFS Core Implementations Weekly Sync](https://github.com/ipfs/team-mgmt/issues/992)

### @lidel

- Done:
  - ipfs-provider: [feat: support window.ipfs.enable()](https://github.com/ipfs-shipyard/ipfs-provider/pull/5)
  - ipfs-shipyard/cohosting: [draft of a simple spec for MFS-based website cohosting scheme](https://github.com/ipfs-shipyard/cohosting/pull/2)
  - js-ipfs: [fix: tests of addFromURL in browsers](https://github.com/ipfs/interface-js-ipfs-core/pull/514)
  - ipfs.io: [fix: add robots.txt to exclude gateway paths](https://github.com/ipfs/website/pull/330)
  - js-ipfs: ready for review: [fix: limit concurrent HTTP requests in browser](https://github.com/ipfs/js-ipfs/pull/2304)
  - reviews & QA
- Blocked:
   - libp2p/specs PR need review: [RFC 0001: Text Peer Ids as CIDs](https://github.com/libp2p/specs/pull/209)
- Next:
   - wrap up any remaining  js-ipfs fixes and move to p2p transport in Brave 🤞

### @hacdias

- Done:
    - (webui) [feat: improve files navigation bar by making links/buttons more distinguishable from other non-interactive information](https://github.com/ipfs-shipyard/ipfs-webui/pull/1128)
    - (webui) [feat: add inspect button near browse](https://github.com/ipfs-shipyard/ipfs-webui/pull/1114)
    - (desktop) [feat: add first unit tests](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1038)
    - (desktop) [investigate a better alternative for Travis](https://github.com/ipfs-shipyard/ipfs-desktop/issues/1055)
    - (desktop) [track usage of some features to know if they're used](https://github.com/ipfs-shipyard/ipfs-desktop/issues/1056)
- Next:
    - Release [Web UI 2.5.1](https://github.com/ipfs-shipyard/ipfs-webui/issues/1111)
    - [Fix IPFS Desktop Build process](https://github.com/ipfs-shipyard/ipfs-desktop/issues/1055)
   
