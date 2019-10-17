# 🚀 IPFS Core Implementations Weekly Sync 🛰 Sep 23, 2019

- **Lead:** @stebalien
- **Notetaker:** @momack2
- **Attendees:**
  - @vasco-santos
  - @pedromiguelss
- **Recording:** https://youtu.be/zAWcxibUcPI (partial)

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

- ipget release shipped with a new progress bar and a new mode that force-spawns a temporary node
- go-ipfs patch release did not ship.
- RC5 on js-ipfs 0.38
  - community testing slim - but currently in that phase of the release process
  - aim for doing this tomorrow or beginning of next week

#### Upgrade Testing Infra/Process
@jimpick / @stebalien / @alanshaw / @daviddias

- a new challenger has appeared: david!


#### Garbage Collection and Pinning (js-ipfs)
@achingbrain

- no updates

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- lidel at web browsers meetup


#### Distributed Signaling (js-libp2p)
@jacobheun

- Still on hold while the libp2p async refactor finishes up


#### IPNS (js-ipfs / go-ipfs)
@aschmahmann

- Adin out for ACM ICN conference

#### Migration to multihash keys in blockstore (js-ipfs)
@alanshaw/@auhau

- no update

#### Package Managers Updates
@dirkmc / @adin / @djdv

(see below)

#### Bitswap Updates
@dirkmc / @stebalien

- new bitswap proposal for block order: 
  - https://github.com/ipfs/go-bitswap/issues/197

#### js-ipfs/js-libp2p/js-ipld async await refactor
@alanshaw

- js-libp2p
  - Updates to several of the core refactor modules to add some needed items for the dialer flow
  - multistream-select PR from it-multistream-select is open [js-multistream-select#52](https://github.com/multiformats/js-multistream-select/pull/52), working through a bug with the dialer upgrade logic
  - Starting refactors on the other libp2p transports
- js-ipfs
  - fixing interop tests for async await
  - updating js-ipfs itself - in dependency hell

### Design Review Proposals
> You want to propose something for design review.

- We had a design review for unixfsv1.5
  - Settled on putting metadata in the directory itself.
  - @stebalien is the DRI for writing this up.

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

- Dirk - review your js-bitswap PR

### Questions
> You have questions and need them answered. List them here.

(molly) What are the initiatives we should have on this list for next quarter (Q4)? 
- aim to complete async await refactor this quarter
- Alex owning js-ipfs side of unixfsv1.5, and maybe Dominic on the go0-ipfs side
- js-libp2p - putting all time into async await refactor for next few weeks at least

### Parking Lot

- None

### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟

@name
- Done:
  - What have you accomplished since the last Weekly?
- Blocked:
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
- Next:
  - What is the next important thing you should focus on

@vasco-santos
- Done:
    - `interface-connection` reviews iterated
        - should be ready
        - [libp2p/interface-connection#29](https://github.com/libp2p/interface-connection/pull/29)
    - `libp2p-websockets` PR updated to use the multiaddrConn and ready to review
        - [libp2p/js-libp2p-websockets#92](https://github.com/libp2p/js-libp2p-websockets/pull/92)
        - Needed to make a few changes to `it-ws` module
            - [vasco-santos/it-ws/commit/0c7e43b68f1d40c2296804a0ee7ed093da2d261c](https://github.com/vasco-santos/it-ws/commit/0c7e43b68f1d40c2296804a0ee7ed093da2d261c)
  - Created `js-libp2p-utils` for common utils to be added during js refactor
    - [libp2p/js-libp2p-utils](https://github.com/libp2p/js-libp2p-utils)
- Blocked: N/A
- Next:
    - Get `interface-connection` and `js-libp2p-websockets` PRs merged
    - Get `js-libp2p-websockets-star`, `js-libp2p-webrtc-star` , `js-libp2p-webrtc-direct` to use the connection upgrader and the multiaddrConn on their refactor PRs and ready to review

@dirkmc:
- Done:
  - Created [go-bitswap issue](https://github.com/ipfs/go-bitswap/issues/197) about ordering response blocks
- Next:
  - Implement above issue as part of [Bitswap protocol improvements PoC](https://github.com/ipfs/go-bitswap/pull/189)

@djdv
- Done:
  - bugfixes in regard to the experimental mount PR around context inheritance, and stat operations (https://github.com/ipfs/go-ipfs/pull/6612)
  - Helping with multiaddr-net thing (unix sockets on Windows) https://github.com/multiformats/go-multiaddr-net/pull/60
  - talked about UnixFS v1.5 requirments for immediate user usecases in a design discussion call
- Blocked:
  - Still need DNS from Hugo (but he's out right now)
- Next:
  - Still working on refining mount PR
    - currently not following the protocol standard perfectly
    - still needs a better context model
    - intend to have functional IPNS write support this week
    
@pedromiguelss
 - Done:
   - Defined a workplan to tackle [https://github.com/ipfs/interop/issues/84](https://github.com/ipfs/interop/issues/84). The workplan has 4 main phases:
    - Update `ipfsd-ctl` to its latest version - ✅
    - Update tests to use `daemon.js` file and make sure they are still green - [WIP](https://github.com/ipfs/interop/pull/86)
    - Update `daemon.js` file
    - Update all tests to use async/await
  - Updated `ipfsd-ctl` to its latest version
  - Started to update tests to use `daemon.js`
 - Next:
  - Finish tests update to use `daemon.js` file (2 test suites remaining)
  - Update `daemon.js` file
  - Change tests to use `async/await`
  - Tackle next issue [https://github.com/ipfs/js-ipfs-http-response/issues/27](https://github.com/ipfs/js-ipfs-http-response/issues/27)
  

@jacobheun
- Done:
  - interface-transport timeline, close and filter tests added [interface-transport#55](https://github.com/libp2p/interface-transport/pull/55)
    - Fixed bug in libp2p-tcp as a result of this [js-libp2p-tcp#113](https://github.com/libp2p/js-libp2p-tcp/pull/113)
  - Upgraded `bl` module to 4.0.0 across async refactor dependencies. `bl` < 4 can cause issues when there are different versions installed. 
  - interface-stream-muxer testing support for connection tracking [interface-stream-muxer#56](https://github.com/libp2p/interface-stream-muxer/pull/56)
  - Async dial flow is working, just need to resolve a bug with multistream-select during the upgrade process
- Next:
  - Fix issue with the async libp2p connection upgrade flow
  - Create contributor guide for using async iterator connections

