# 🚀 IPFS Core Implementations Weekly Sync 🛰 Jan 06, 2020

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @vasco-santos
  - @olizilla
  - @momack2
  - @johnnymatthews
  - @dirkmc
  - @ribasushi
  - @lidel
  - @Stebalien
- **Recording:** https://youtu.be/7RUE2paQHbM

## Agenda

- Ensure a notetaker exists!
- Ask everyone to put their name into the list of attendees
- Initiatives
- Blockers (from the async status update)
- General questions. Could be things like:
  - I'm stuck with something, I don't know who to ask. Who knows who to ask?
  - Who can help me with xyz?
- Plan for this week
  - Select issues to work on
- Review remaining parking lot topics if there is time left

## PSA/Annoucement

The Go DHT will now:

1. Announces provider records using raw multihashes instead of CIDs. For CIDv0, this changes nothing. For CIDv1, we'll now use raw multihashes (effectively CIDV1).
2. Accept arbitrary bytes for provider record keys (<= 80 bytes). This gives us better forward compatibility with future changes/additions.

## Notes

#### Upcoming/Shipped Releases
@stebalien / @alanshaw

Proposal: Ship a patch release for go-ipfs.
* We aimed to ship 0.5.0 by the new year but didn't.
* We have some outstanding issues that are causeing user headaches.
  * Panics (ocationally) due to websocket issues.
  * Doesn't build on go 1.13
  * Other issues...
* Why not? Takes time and doesn't ship features.

* js-ipfs - release a prerelease asap (hopefully this week)

#### Upgrade Testing Infra/Process
@jimpick / @stebalien / @daviddias

* Holidays.
* It works well enough for local testing, try it out!
  * When you do, bug the testground team if you can't find documentation/examples.
* Missing features
  * Scaling (1k-10k nodes)
  * Blocking inbound connections
    * For now, you can simply _not listen_ for inbound connections and set an "address factory" to announce non-working external addresses.
  * Per-subnet network controls (latency, bandwidth, etc.). Global controls work fine.
  * Running multiple versions of ipfs/libp2p/dht, etc.

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- we are finalizing new config options for subdomain (and other) gateways: [go-ipfs/pull/6096#thiscomment](https://github.com/ipfs/go-ipfs/pull/6096#issuecomment-569712890)
  - next: get more eyeballs on it, then do go and js implementation

#### Distributed Signaling (js-libp2p)
@jacobheun

- Oh hold pending the async refactor (will be starting up again soon)

#### IPNS (go-ipfs / js-ipfs)
@aschmahmann / @hugomrdias

- Nothing new for now until planned DHT improvements are done

#### Add Performance (go-ipfs / js-ipfs)
@aschmahmann / @achingbrain

- Go: Asynchronous Datastores PRs merged and BadgerDS defaults to asynchronous writes

#### Migration to multihash keys in blockstore (js-ipfs)
@alanshaw / @auhau

- On hold

#### Bitswap Updates
@dirkmc

- Currently working on porting server side of [Proof of Concept Bitswap changes](https://github.com/ipfs/go-bitswap/pull/189) to js-bitswap

#### js-ipfs/js-libp2p/js-ipld async await refactor
@achingbrain / @jacobheun / @vasco-santos / @alanshaw

- js-libp2p
  - Working towards an RC this week
  - Finalizing examples and interop testing with go
  - Integrating with js-ipfs
  
- js-ipfs
  - Core interface test passing
  - CLI tests passing
  - HTTP API tests passing
  - TODO: remaining core tests and swarm api (part of libp2p integration)

#### UnixFS v1.5 (go-ipfs / js-ipfs)
@achingbrain / @ribasushi
- spec ( https://github.com/ipfs/specs/pull/236 )
  - The placement of metadata has been finalized
  - The content of the "POSIX meta" portion is still being refined, at about 95%
- jsipfs implementation
  - @achingbrain is working on a pilot at https://github.com/ipfs/js-ipfs-unixfs/pull/36 and others
- goipfs implementation
  - not yet started
  
  
### Design Review Proposals
> You want to propose something for design review.

- @lidel: anyone interested in proposed config options for http gateways in go-ipfs (and js-ipfs) can comment in [go-ipfs/pull/6096#thiscomment](https://github.com/ipfs/go-ipfs/pull/6096#issuecomment-569712890) before we start implementations
  - @stebalien
  - @alanshaw

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

### Questions
> You have questions and need them answered. List them here.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟

@alanshaw
- Done:
  - js-ipfs async/await
    - Core interface test passing
    - CLI tests passing
    - HTTP API tests passing
    - TODO: remaining core tests
- Next:
  - Complete async/await refactor
  - Help @achingbrain get UnixFSv1.5 merged

@vasco-santos
- Done:
  - getting started new iteration based on feedback
    - [libp2p/js-libp2p#514](https://github.com/libp2p/js-libp2p/pull/514)
  - `js-libp2p-keychain` moved to `js-libp2p` codebase
    - [libp2p/js-libp2p#525](https://github.com/libp2p/js-libp2p/pull/525)
  - `libp2p` interop
    - added latest `go-libp2p` releases
      - [libp2p/npm-go-libp2p-dep#8](https://github.com/libp2p/npm-go-libp2p-dep/pull/8)
      - [libp2p/npm-go-libp2p-dep#9](https://github.com/libp2p/npm-go-libp2p-dep/pull/9)
      - [libp2p/interop#27](https://github.com/libp2p/interop/pull/27)
      - [libp2p/interop#28](https://github.com/libp2p/interop/pull/28)
    - run interop tests in a `js-libp2p` CI job
      - [libp2p/interop#30](https://github.com/libp2p/interop/pull/30)
      - [libp2p/js-libp2p#526](https://github.com/libp2p/js-libp2p/pull/526)
      - [libp2p/js-libp2p-daemon#30](https://github.com/libp2p/js-libp2p-daemon/pull/30)
  - fix handle upgradeInbound errors properly on error
    - [libp2p/js-interfaces#16](https://github.com/libp2p/js-interfaces/pull/16)
    - [libp2p/js-libp2p-webrtc-star#191](https://github.com/libp2p/js-libp2p-webrtc-star/pull/191)
    - [libp2p/js-libp2p-websockets#98](https://github.com/libp2p/js-libp2p-websockets/pull/98)
    - [libp2p/js-libp2p-tcp#119](https://github.com/libp2p/js-libp2p-tcp/pull/119)
    - [libp2p/js-libp2p-webrtc-direct#32](https://github.com/libp2p/js-libp2p-webrtc-direct/pull/32)
  - `js-datastore-pubsub` refactored to use new pubsub api and tests refactored to not depend on `js-ipfs`
    - [ipfs/js-datastore-pubsub#19](https://github.com/ipfs/js-datastore-pubsub/pull/19)
  - pnet example migrated and removed `ipfs` dependency
    - [libp2p/js-libp2p#523](https://github.com/libp2p/js-libp2p/pull/523)
  - awesome libp2p base structure first iteratrion
    - [libp2p/awesome-libp2p#1](https://github.com/libp2p/awesome-libp2p/pull/1)
- Blocked: N/A
- Next:
  - Get open PRs landed
  - "peerstore v1.5"
    - get rid of `peer-info` from every js module
  - tests for `js-libp2p` examples to run them on CI

@dirkmc
- Next:
  - Working through [go-bitswap PoC](https://github.com/ipfs/go-bitswap/pull/189) reviews
  - Porting [go-bitswap PoC changes](https://github.com/ipfs/go-bitswap/pull/189) to js-bitswap

@jacobheun
- Next:
  - Get an RC of js-libp2p async/await out
  - Catch up on code reviews

@lidel
- Done (before the holiday break):
  - ipfs-companion
    - [debugging `navigator.registerProtocolHandler` in Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=1603737#c5)
  - ipfs-webui: 
    - [feat: e2e test suite against real go-ipfs](https://github.com/ipfs-shipyard/ipfs-webui/pull/1353)
  - http gateways
    - fix: clean up SW registration ([go-ipfs](https://github.com/ipfs/go-ipfs/pull/6801), [js-ipfs](https://github.com/ipfs/js-ipfs/pull/2682))
    - go-ipfs: [proposal for simplified per-host public gateway config](https://github.com/ipfs/go-ipfs/pull/6096#issuecomment-569712890)
    - public-gateway-checker: [PR with ux improvements](https://github.com/ipfs/public-gateway-checker/pull/85)
  - ipfs-provider: 
    - review / fixes for [feat: better api](https://github.com/ipfs-shipyard/ipfs-provider/pull/10)
    - PR [docs: README](https://github.com/ipfs-shipyard/ipfs-provider/pull/12)
    - PR [Add code examples and fix fallback](https://github.com/ipfs-shipyard/ipfs-provider/pull/17)
  - ipfs/docs: 
    - [\[CONTENT MIGRATION\] Cool links don't break](https://github.com/ipfs/docs/issues/414)
    - [fix: add canonical link](https://github.com/ipfs/ipfs-docs-v2/pull/50)
    - js-ipfsd-ctl: [improve usage docs](https://github.com/ipfs/js-ipfsd-ctl/pull/421)
  - Reviews and other
    - reviewed API changes for async iterables in [js-ipfs-http-client](https://github.com/ipfs/js-ipfs-http-client/pull/1183) & [interface-js-ipfs-core](https://github.com/ipfs/interface-js-ipfs-core/pull/567)
- Next:
  - catch up, finalize PRs from Q4
