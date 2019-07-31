# 🚀 IPFS Core Implementations Weekly Sync 🛰 July 15, 2019

- **Lead:** @alanshaw
- **Notetaker:** @momack2
- **Attendees:**
  - @momack2
  - @andrew
  - @lidel
  - @mburns
  - @djdv
  - @vasco-santos
  - @vmx
  - @dirkmc
  - @achingbrain
  - @hsanjuan
  - @hannahhoward
  - @yusefnapora
  - @jimpick
  - @stebalien
  
- **Recording:** https://youtu.be/LklIcOZvzsM

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

## Notes

### Initiatives
> Update or add info on initiatives that are happening

#### Upgrade Release Process (go-ipfs)

- Merged: https://github.com/ipfs/go-ipfs/blob/master/docs/releases.md
- Test Run: https://github.com/ipfs/go-ipfs/issues/6506
- working on 0.4.22-RC1 release
- draft blog post: https://github.com/ipfs/blog/pull/266 (steb will take a pass)

#### Upgrade Testing Process (go-ipfs)

Draft Plan: https://docs.google.com/spreadsheets/d/1xyqyGUF-oe3x9ln88YonVeOMWWdknik74lVgL_3dBY8/edit#gid=0

- won't be releasing a new minor release until we have the launch-blocking testing infra to guarantee we aren't introducing regressions
- we need to upgrade our testing, blocking releases is the forcing function

Next step: Reach out to the DRIs.

#### Garbage Collection and Pinning (JS)

Many PRs! A first pass implementation is nearly ready to add garbage collection to js-ipfs https://github.com/ipfs/js-ipfs/pull/2022.

It has uncovered problems with pinning - internal blocks are provided to DHT, pin type filtering not work.

Perf is being investigated https://github.com/ipfs/js-ipfs/pull/2198.

- previously there were issues with indexdb - does this work test for different browsers and their respect for different flags?
- david will shoot over any prior knowledge he can find (https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria)
- go-ipfs just rewalks the datastore when reproviding, not sure how this actually works under the hood (ping steb for details)
  - We literally just walk the datastore, and provide everything by default. We _also_ have reprovider "strategies" (e.g., only reprovide pinned blocks).
  - We _do_ avoid providing on initial add.

Next step: fixing up PRs, reviewing PRs.

❤️ @dirkmc

#### Delegated Routing (JS)

i.e. Get someone else to find your peers and retrieve your content

Important for IPFS in the browser because same origin policy.

Open HTTP API endpoints that allow another IPFS node to find peers/retrieve content on your Node's behalf.

2 Modules:
- https://github.com/libp2p/js-libp2p-delegated-peer-routing
- https://github.com/libp2p/js-libp2p-delegated-content-routing

🛑 Blocked: 
 - we need people to be able to expose commands on Gateway port via `Gateway.APICommands` which is not wired to anything in go-ipfs right now:
  - Context: https://github.com/ipfs/js-ipfs/issues/2155
  - Problem: https://github.com/libp2p/js-libp2p/pull/371#pullrequestreview-255991314
 - mitigate request flood producing pending requests in web browser context  https://github.com/libp2p/js-libp2p-delegated-content-routing/issues/12

- supports some brave usage with browser node in ipfs-companion
- both nodes swarm connect - ideally can also minimize DHT connections
- work required here is pretty small - would be a good place to onboard on go-ipfs as a js-ipfs integrator
  - actually, dropped because complex: https://github.com/ipfs/go-ipfs/pull/5565#issuecomment-455899527 - alan will take a look
- blocker is that people who would be interested in running delegated routing need to use our infra (and want them to be able to use their own!)
- there is also a neat hack to support "provide" by prefetching it to remote node https://github.com/libp2p/js-libp2p-delegated-content-routing/blob/master/src/index.js#L85

#### Gossipsub (JS)

JS implementation of gossipsub landing in the next release of `js-libp2p`
- https://github.com/libp2p/js-libp2p/pull/365
- https://github.com/libp2p/js-libp2p-daemon/pull/19
- https://github.com/libp2p/interop/pull/17

Will start working on getting `js-ipfs` ready to receive it
- want to make a RC next week to release js-ipfs, so you can choose which implementation you want to use 
- gossipsub is technically experimental, as is pubsub - floodsub is the default once you enable pubsub - but you can swap that
- if one person picks floodsub and another picks gossipsub, then you speak floodsub
- we should switch the default in go-ipfs (AI: stebalien)
- floodsub connects entirely to be connected to everyone - gossipsub does message propogation (want peer exchange)
  - confirmed: gossipsub does not do peer exchange. IMO, it should. - @stebalien

#### Subdomain Gateway (Base32, Origin isolation)

Making it easier for [Base32-encoded CIDv1](https://github.com/ipfs/ipfs/issues/337) to be used in DNS as a  subdomain label:

```
https://<cidv1b32>.ipfs.example.com
https://<cidv1b32>.ipns.example.com
```

Shipped in userland:
 - https://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq.ipfs.cf-ipfs.com/wiki/
 - https://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq.ipfs.dweb.link/wiki/

🛑 Blocked:
- **tl;dr** we use Nginx for now, but want go-ipfs to support `Host` header with `{cidv1b32}.ip(f|n)s.*`
https://github.com/ipfs/go-ipfs/issues/6498
  - enables people to run subdomain gateways,
  removes dependency on Nginx hacks like [this one](https://github.com/ipfs/infra/issues/81#issuecomment-461045160)
  - unlocks unique Origins for localhost node and also [HTTP proxy](https://github.com/ipfs/js-ipfs/pull/2246)
- [Base32 in IPNS](https://github.com/ipfs/go-ipfs/issues/5287) 
  - (we added `libp2p-key` multicodec to support CIDv1)
  - remaining steps:
   - IPNS paths: [wire up cid support instead of multihash](https://github.com/ipfs/go-ipfs/issues/5287#issuecomment-498349216)
   - [how to handle CIDv1 with  `dag-pb` multicodec in `/ipns/`?](https://github.com/ipfs/go-ipfs/issues/5287#issuecomment-492163929)
- cloudflare and others do this (at ngnix level)
- if we have support for subdomain gateway, and we run go-ipfs on local host, it would in theory provide origin isolation on local gateway (don't want to support both on same origin)


### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

- **PLEASE** help out on the forums, IRC, etc.
  - https://discuss.ipfs.io/
  - https://github.com/ipfs/ipfs
  - https://github.com/ipfs/specs
    - Specs maintainer protocol: https://github.com/ipfs/specs/pull/214
  - https://github.com/ipfs/notes
  - #ipfs, #ipfs-dev
- Comms on gateway and ongoing testing / leveling up
  - post about release process
  - still going to take time to make large changes to the gateway
  - testing infra is currently estimated to be the biggest blocker on this
  - there was a nearform effort that did something - needs some fixing up, alan can take a pass and demo
  - not large-scale testing, but is doing specific actions and tracking time across various actions
    - seems like it'd hit the first performance work: https://docs.google.com/spreadsheets/d/1xyqyGUF-oe3x9ln88YonVeOMWWdknik74lVgL_3dBY8/edit#gid=0
    - hooked up to grafana - want to also make public ideally

### Questions

- 


### Parking Lot
- https://github.com/ipfs/go-ipfs/issues/6502


### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟

@name
 - Done:
   - What have you accomplished since the last Weekly?
 - Blocked:
   - Were there any blockers? If so, which ones? Is it still blocked? Why?
 - Next:
   - What is the next important thing you should focus on?
   
@stebalien
 - Done:
   - Merged streaming pin ls command.
   - Officially started release process for 0.4.22. Infra testing is done.
   - Started testing go-ipfs-api + interface-go-ipfs-core in CI.
   - Fixed two panics
   - Rewrote go-multiaddr-dns resolution logic (https://github.com/multiformats/go-multiaddr-dns/pull/17)
   - Misc libp2p stuff.
 - Next:
   - Write as many tests as I can from the list.
   - Try to push forward the CIDs in subdomain stuff.
   - Prepare for/attend DWeb Camp.
   
@alanshaw
 - Done:
   - Work towards enabling delegated routing in JS IPFS (mostly updating dependencies)
   - Released `ipfs-http-client` @ `33.1.0`
       - Support for IPLD raw format
       - Fix for Content-Disposition header in multipart request body
       - Fixes for `findprovs` and `findpeer` responses (needed for delegated routing)
   - Reviews and merges for JS IPFS:
      - Reviewed fix for `NodeError: Cannot call write after a stream was destroyed` https://github.com/ipfs/js-ipfs/pull/2245
      - Reviewed Garbage Collection, still work to complete
      - Fixed repo clean (in tests) on windows that was causing much failures https://github.com/ipfs/js-ipfs/pull/2243
      - Refactor for easier and faster CLI tests https://github.com/ipfs/js-ipfs/pull/2232
      - Reviewed repo migration tool https://github.com/ipfs/js-ipfs/pull/2044
   - Have been looking into libp2p-crypto in insecure contexts
       - https://github.com/libp2p/js-libp2p-crypto/pull/149
       - https://github.com/libp2p/js-libp2p-crypto/pull/150
       - Best we can do right now is provide a good error message - PR incoming
 - Blocked:
   - `null`
 - Next:
   - Release flow review+engage
   - 0.37 release?
   - OKRs
   - PRs I need to look at/complete:
       - GC: https://github.com/ipfs/js-ipfs/pull/2022
       - Locking for pin operations: https://github.com/ipfs/js-ipfs/pull/2174
       - Offline blockstore for pins: https://github.com/ipfs/js-ipfs/pull/2196
       - Improve pin perf: https://github.com/ipfs/js-ipfs/pull/2198
       - Fix for pin type filering in pin.ls: https://github.com/ipfs/js-ipfs/pull/2228
       - Configurable delegates for delegated routing: https://github.com/ipfs/js-ipfs/pull/2253

@vasco-santos
  - Done:
    - js-libp2p OKRs thoughts with Jacob
    - Gossipsub 
      - fallback to Floodsub merged and new release of gossipsub happened
        - [ChainSafe/gossipsub-js#34](https://github.com/ChainSafe/gossipsub-js/pull/34)
     - Remaining PRs for gossipsub already reviewed by Jacob and reviews addressed
        - [libp2p/js-libp2p#365](https://github.com/libp2p/js-libp2p/pull/365)
        - [libp2p/js-libp2p-daemon#19](https://github.com/libp2p/js-libp2p-daemon/pull/19)
        - [libp2p/interop#17](https://github.com/libp2p/interop/pull/17)
    - Add err-code module to `multistream-select`
      - [multiformats/js-multistream-select#49](https://github.com/multiformats/js-multistream-select/pull/49)
    - Add config docs to `js-ipfs`
      - [ipfs/js-ipfs#2256](https://github.com/ipfs/js-ipfs/pull/2256)
    - Fix problematic tests on `js-libp2p`
      - [libp2p/js-libp2p#377](https://github.com/libp2p/js-libp2p/pull/377)
    - Lot's of async await migration reviews
  - Blocked:
    - N/A
  - Next:
    - Prepare PR for new `js-libp2p` release with Gossipsub
    - Get back to async iterators
      - `interface-connection`
      - `js-libp2p-webrtc-direct`
      - `js-libp2p-webrtc-star`
      - `js-libp2p-pnet`
      
@djdv
 - Done:
   - Progress towards:
     - config init + seperating config values https://github.com/ipfs/go-ipfs/issues/6262
     - content resolution over DNS https://github.com/ipfs/go-libp2p-dns-router
 - Blocked (but low priority):
   - config cli flags and behaviour need to be agreed upon for go-ipfs and js-ipfs
   - DNS resolution needs cross team spec
 - Next:
   - working on creating repos around this https://github.com/ipfs/package-managers/issues/71

@daviddias
  - Done:
    - go-ipfs release flow got merged https://github.com/ipfs/go-ipfs/pull/6482
    - proposal to refresh IPFS Specs https://github.com/ipfs/specs/pull/214
  - Blocked:
    - n/a
  - Next:
    - ?

@lidel
- Done:
    - Mostly things related to [embedded js-ipfs in Brave](https://github.com/ipfs-shipyard/ipfs-companion/issues/716)
    - Opened discussion for improving UX of IPFS in Brave's Address Bar: https://github.com/brave/brave-browser/issues/5218
    - js-ipfs fix(gateway): disable compression https://github.com/ipfs/js-ipfs/pull/2245
    - Looked into Delegated Routing for embedded JS IPFS in Brave
      - fix: allow setting Addresses.Delegates https://github.com/ipfs/js-ipfs/pull/2253
      - debugged request flood due to delegated routing https://github.com/libp2p/js-libp2p-delegated-content-routing/issues/12
    - debugged some shutdown race conditions
      - proposal to make `.stop()` calls idempotent https://github.com/ipfs/js-ipfs/issues/2257
- Next:
   - Continue Brave work
   - Release New Companion (Beta)
   - Clarify path for shipping Subdomain Gateways in go-ipfs

@dirkmc
  - Done:
    - Onboarding to package managers team
  - Next:
    - Understanding what happens when you do `ipfs add`
    - Improve performance of ipfs add for large numbers of files in a directory (package manager use case)
    - Apply updates from review comments on several PRs

@hannahhoward:
  - Done:
    - Spin up on IPLD selectors
  - Next:
    - Push Bitswap PRs over finish line
    - IPLD selector work & integration to graphsync

@jimpick: (testing infra)
  - Done:
    - Local testlab across multiple VirtualBox vms ... 500 clients!
    - Raul and Steb are deciding first testlab requirements
  - Next:
    - Terraform and try to run testlab on AWS
    - modify scenario to use IPFS daemon instead of p2pd
    - participate in planning process for testlab

@achingbrain
- Done
  - async/await [js-libp2p-crypto-secp256k1](https://github.com/libp2p/js-libp2p-crypto-secp256k1/pull/18)
  - async/await [js-libp2p-crypto](https://github.com/libp2p/js-libp2p-crypto/pull/131)
  - async/await [peer-id](https://github.com/libp2p/js-peer-id/pull/87)
  - async/await [peer-info](https://github.com/libp2p/js-peer-info/pull/67)
  - async/await [js-libp2p-delegated-peer-routing](https://github.com/libp2p/js-libp2p-delegated-peer-routing/pull/8)
  - async/await [js-libp2p-delegated-content-routing](https://github.com/libp2p/js-libp2p-delegated-content-routing/pull/7)
- Blocked
  - n/a
- Next
  - async/await js-libp2p-pubsub
  - async/await js-libp2p-floodsub
  - async/await js-libp2p-websocket-star-rendezvous
  - async/await js-libp2p-websocket-star
  - etc
