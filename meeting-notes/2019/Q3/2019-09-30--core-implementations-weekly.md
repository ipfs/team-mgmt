# 🚀 IPFS Core Implementations Weekly Sync 🛰 Sep 30, 2019

- **Lead:** @stebalien
- **Notetaker:** 
- **Attendees:**
  - @jimpick
  - @pedromiguelss
  - @jacobheun
  - @vasco-santos
  - @achingbrain
- **Recording:**

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

#### Upgrade Release Process
@stebalien / @alanshaw

- go-ipfs patch release did not ship, again.
- js-ipfs shipped! 🚢 🎉
  - Additions to release process for this version:
    - Automated go/js interop testing
    - Automated testing of 3rd party repos
    - Release done from branch to allow development to continue on master
    - Includes shrinkwrap & yarn lockfiles to ensure users only get deps that have passed our CI

#### Upgrade Testing Infra/Process
@jimpick / @stebalien / @alanshaw / @daviddias

- Demo by raul.
- Repo: https://github.com/ipfs/testground
- 10 initial tests: https://github.com/ipfs/testground/pull/33

#### Garbage Collection and Pinning (js-ipfs)
@achingbrain

- Shipped!

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- handling paths on subdomain gateways (like `dweb.link`) requires conversion at Nginx level until [go-ipfs/pull/6096](https://github.com/ipfs/go-ipfs/pull/6096#issuecomment-511994883) lands
- RFC for Base32 in IPNS waiting for final :+1: [libp2p/specs/pull/209](https://github.com/libp2p/specs/pull/209#issuecomment-536565826)
- docs.ipfs.io: first draft of an addressing guide: https://github.com/ipfs/docs/pull/298

#### Distributed Signaling (js-libp2p)
@jacobheun

- Still on hold pending the js-libp2p async refactor

#### IPNS (js-ipfs / go-ipfs)
@aschmahmann

- @stebalien: Waiting on review from @stebalien
- @stebalien: IPNS over DNS
  - Needs a spec! @hugo?
  - @hugo - not done yet, aim to finish this week.

#### Migration to multihash keys in blockstore (js-ipfs)
@alanshaw/@auhau

- No progress (assumed)

#### IPFS Mount
@djdv

- Read only IPFS support is coming along (https://github.com/ipfs/go-ipfs/pull/6612)
   - still some bugfixes needed (https://github.com/ipfs/go-ipfs/pull/6612#pullrequestreview-294370552)
- IPNS Write support is in progress (PR not up yet)
  - doesn't handle offset properly
  - republishing to the key doesn't work as expected


#### Bitswap Updates
@dirkmc / @stebalien

- No big updates
- Lots of time debugging connection management.
- Ask for libp2p: fix https://github.com/libp2p/go-libp2p-swarm/issues/79


#### js-ipfs/js-libp2p/js-ipld async await refactor
@alanshaw / @jacobheun / @vasco-santos

- Libp2p: 18/30 Complete! (60%)
  - We've [started a guide](https://github.com/libp2p/js-libp2p/blob/refactor/async-await/doc/STREAMING_ITERABLES.md) for iterable streams, it's a work in progress. We will be adding to this as we work through the refactor so that contributors and future users will have a resource for using them instead of pull streams.
  - Libp2p core refactor now [has a guide on our approach](https://github.com/libp2p/js-libp2p/issues/266#issue-374385232) for iterating on the refactor to avoid a single, giant PR, and allowing multiple people to potential contribute more easily.
  - Modules finished:
    - libp2p-websockets [v0.13.0](https://github.com/libp2p/js-libp2p-websockets/releases/tag/v0.13.0)
    - libp2p-mdns [v0.13.0](https://github.com/libp2p/js-libp2p-mdns/releases/tag/v0.13.0)
    - interface-peer-discovery [v0.1.1](https://github.com/libp2p/interface-peer-discovery/releases/tag/v0.1.1)
    - interface-connection [v0.4.0](https://github.com/libp2p/interface-connection/releases/tag/v0.4.0)

- IPFS:
  - Merged [async await refactor of js-ipfs](https://github.com/ipfs/js-ipfs/pull/2390)
    - Upgrades libp2p to latest version
    - Upgrades ipld to latest version
    - Upgrades unixfs/mfs to latest version

- Multiformats: 100% Complete!
  - multistream-select [v0.15.0](https://github.com/multiformats/js-multistream-select/releases/tag/v0.15.0)

### Design Review Proposals
> You want to propose something for design review.

- New:

- Old:
  - unixfsv1.5: @stebalien is still the DRI for writing this up.

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

### Questions
> You have questions and need them answered. List them here.


### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.
 
 - @hugomrdias 
   - new browser datastore with a around 50% performance improvement
   - unixfs batching for around 50% performance improvement
   - still running the numbers to validate improvement

### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟

@name
- Done:
  - What have you accomplished since the last Weekly?
- Blocked:
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
- Next:
  - What is the next important thing you should focus on
  
@dirkmc
- Done:
  - Fixed [an issue](https://github.com/Netflix/p2plab/pull/32) with connection management in p2plab
- Next:
  - More benchmarking
  

@pedromiguelss
- Done:
  - Updated `ipfsd-ctl` version on `ipfs interop` repo to support promises and make the necessary changes to make sure the tests can run successfully - PR [here](https://github.com/ipfs/interop/pull/86)
  -  Changed all the tests to use the same util file (`daemon.js`) to spawn the daemons - Same PR, check it [here](https://github.com/ipfs/interop/pull/86)
  - Changed `interop` tests to use async/await - PR [here](https://github.com/ipfs/interop/pull/87)
  - Started to change the `daemon.js` file to make it consistent with what's being done on `interface-js-ipfs-core`
- Next:
  - Convert `js-ipfs-http-response` to use async/await - Issue [here](https://github.com/ipfs/js-ipfs-http-response/issues/27)
  
@jacobheun
- Done:
  - Fixed multiaddr 7 support in transports
    - [libp2p-tcp](https://github.com/libp2p/js-libp2p-tcp/pull/115)
    - [libp2p-websockets](https://github.com/libp2p/js-libp2p-websockets/pull/94)
  - Finished up the mdns async refactor [js-libp2p-mdns#78](https://github.com/libp2p/js-libp2p-mdns/pull/78)
  - The new multistream-select will consolidate headers on selects [multistream-select#53](https://github.com/multiformats/js-multistream-select/pull/53)
  - Started a guide for [iterable streams](https://github.com/libp2p/js-libp2p/blob/refactor/async-await/doc/STREAMING_ITERABLES.md), will add more usage guides to this soon
- Blocked:
- Next:
  - Refactor async transport usage in libp2p core, with the latest transport modules
  - Finish the new dial logic after the transport usage has been updated
  - Add more usage scenarios to the iterable streams guide.
  - OOO Thursday and Friday (Oct 3-4)

@vasco-santos
- Done:
  - Async refactor
  - `interface-connection` merged and released
    - [libp2p/interface-connection#29](https://github.com/libp2p/interface-connection/pull/29)
  - `libp2p-websockets` merged and released
    - [libp2p/js-libp2p-websockets#92]( https://github.com/libp2p/js-libp2p-websockets/pull/92)
  - `libp2p-webrtc-star` PR reviewed and almost ready
    - [libp2p/js-libp2p-webrtc-star#183](https://github.com/libp2p/js-libp2p-webrtc-star/pull/183)
  - `libp2p-webrtc-direct` PR reviewed and almost ready
    - [libp2p/js-libp2p-webrtc-direct#30](https://github.com/libp2p/js-libp2p-webrtc-direct/pull/30)
  - Revamped `interface-peer-discovery` with a basic test suite (there were no tests before)
    - [libp2p/interface-peer-discovery#10](https://github.com/libp2p/interface-peer-discovery/pull/10)
  - Started `js-libp2p-websockets-star` async migration
- Blocked: N/A
- Next:
    - Get `js-libp2p-webrtc-star` , `js-libp2p-webrtc-direct` and `js-libp2p-websockets-star`  PRs merged
    - Pubsub subsystem refactor
      - Refactor `gossipsub`
      - Get [libp2p/js-libp2p-pubsub#26](https://github.com/libp2p/js-libp2p-pubsub/pull/26) finished
      - Get [libp2p/js-libp2p-floodsub#88](https://github.com/libp2p/js-libp2p-floodsub/pull/88) finished
      - PR `js-libp2p` async branch with refactored Pubsub
    - Tag npm releases of the existing async modules as beta, and move the latest tag to the callback style. This will fix issues with users installing new, unsupported modules versions.

@lidel

- Done:
  - debugging issues with [mozilla/addons and Android](https://github.com/mozilla/addons/issues/1100)
  - round of antibiotics 🙃
  - web browsers team week
  - docs.ipfs.io: [integrate browser-addressing content](https://github.com/ipfs/docs/pull/298)
- Blocked:
  - libp2p RFC 0001: https://github.com/libp2p/specs/pull/209#issuecomment-536565826
- Next:
  - restore ipfs-companion on android
  - brave
    - switch brave to new datastore (idb + batching)
    - figure out local B2B (browser to browser) discovery without centralized signaling (ws-star)
    
@hacdias

- Done:
  - Development version of Web UI published to [dev.webui.ipfs.io](dev.webui.ipfs.io) and latest on [webui.ipfs.io](webui.ipfs.io)
  - IPFS Desktop
    - Fix logging function [#1155](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1155)
    - Publish to Snap Store [#1156](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1156)
    - Cleaned up backlog of Desktop issues
- Next:
  - Work on Web UI's Peer page performance
  - Clean up Web UI's backlog

@hugomrdias
  - Done:
    - Web Browsers week
    - js-ipfs huge async/await PR review
    - created a new browser datastore
    - unixfs batching support
  - Next:
    - Change tests to async/await
    - IPNS over DNS Spec !!

@achingbrain
  - Done:
    - js-ipfs async/await refactor: https://github.com/ipfs/js-ipfs/pull/2390
    - shipped js-ipfs@0.38.0
  - Next:
    - integrate distributed core into core: https://github.com/ipfs/js-ipfs/issues/2282
    - convert files.* api to use async-iterators internally similar to how files.add now works
    - Implement unixfsv1.5
