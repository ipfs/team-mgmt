# 🚀 IPFS Core Implementations Weekly Sync 🛰 Jan 20, 2020

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @dirkmc
  - @lidel
  - @ribasushi
  - @stebalien
  - @achingbrain
  - @olizilla
- **Recording:** https://youtu.be/3_ZVlU8dGwU

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

#### Upcoming/Shipped Releases
@stebalien / @alanshaw

- go-ipfs 0.4.23 RC1 is up!
  - https://github.com/ipfs/go-ipfs/issues/6837
- js-ipfs 0.41 CI is GREEN 💚 (except interop tests) - RC hopefully this week

#### Upgrade Testing Infra/Process
@stebalien / @daviddias / @nonsense / @raulk

- @lidel added regression/smoke tests that run ipfs-webui in real Chromium:
  - go-ipfs
      - [test: E2E tests against ipfs-webui HEAD](https://github.com/ipfs/go-ipfs/pull/6825)
  - js-ipfs
      - [test: E2E tests against ipfs-webui HEAD](https://github.com/ipfs/js-ipfs/pull/2706/)

#### Content Routing
@stebalien / @raulk / @dirkmc / @aschmahmann / @jacobheun ??

- @aschmahmann has been working on this. Has a WIP patch locally to simplify things.
  - Implementing Disjoint Paths, the correct Kademlia query logic, working on making it pluggable so that it's easier to try different query logic.
  - This is the 1st step in improving content routing
  - Hoping to publish a public technical plan sometime next week

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- wip, drafting docs with configuration examples for common use cases 
  - Creating configuration to setup a Gateway, path based or subdomain based

#### Distributed Signaling (js-libp2p)
@jacobheun

- On hold pending the js-libp2p refactor, should be starting in the next couple weeks

#### IPNS (go-ipfs / js-ipfs)
@aschmahmann / @hugomrdias

- No updates

#### Add Performance (go-ipfs / js-ipfs)
@aschmahmann / @achingbrain

- @achingbrain is looking into pinning performance

#### Migration to multihash keys in blockstore (js-ipfs / go-ipfs)
@alanshaw / @auhau

- JS On hold because we're focused on getting async/await out the door
- Go still needs a migration, but everything else should be in place

#### Bitswap Updates
@dirkmc

- Stebalien is still reviewing [proof of concept changes](https://github.com/ipfs/go-bitswap/pull/189)
- Working on testground [test suite](https://github.com/ipfs/testground/pull/345)

#### js-ipfs/js-libp2p/js-ipld async await refactor
@achingbrain / @jacobheun / @vasco-santos / @alanshaw

- js-libp2p
  - Resolving final bugs with the browser example
  - Need to resolve an issue with pubsub in libp2p interop with go
  - Need to finalize the Getting Start Guide
  - Hoping to release this week!
- js-ipfs
  - Working on interop
    - Exchanging files works and **locally** the refactor is much faster than the current version


#### UnixFS v1.5 (go-ipfs / js-ipfs)
@achingbrain / @ribasushi

- Support for -X and recursive operations added to `ipfs.files.chmod` command: https://github.com/ipfs/js-ipfs-mfs/pull/73

#### Stream Content-Based-Chunking Research/Improvements (go-ipfs / js-ipfs)
@ribasushi

- Almost-almost-almost finished with initial version of tool to produce DAG stats from test datasets across a range of options. ETA for this+initial writeup mid-this-week.
- Found a few mismatches between `goipfs add` and `jsipfs add` :( Failing tests coming soon

### Design Review Proposals
> You want to propose something for design review.

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

### Questions
> You have questions and need them answered. List them here.

olizilla: should we review the endevours listed in this meeting? Ruthless focus on content resolution?

consider suspending: 
- Distributed Signaling
- IPNS
- Migration to multihash keys in blockstore 

(we dont have to kill the endevour, but it seems like they are lower priority / not blocking resolution perf...)

- We're finalizing the Technical Plan and from there should be able to make a better plan of how this work will land.
  - Prioritize the work we're actively working on, and move other things to a backlog

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟 

@alanshaw
- Done:
  - Removed default swarm addrs in browser (new libp2p got more strict)
    - https://github.com/ipfs/js-ipfsd-ctl/pull/435
  - Fix setting `--profiles` option when passing `[]` for profiles
    - https://github.com/ipfs/js-ipfsd-ctl/pull/433
  - Fix disconnect event parameter in gossipsub
    - https://github.com/ChainSafe/gossipsub-js/pull/58
  - Fixed history on async/await branch
- Blocked:
  - ipfsd-ctl not force killing daemons
    - https://github.com/ipfs/js-ipfsd-ctl/issues/438
  - String peer ID key mismatch causing interop problems
    - https://github.com/libp2p/js-libp2p/issues/536
- Next:
  - Getting js-ipfs released

@jacobheun
- Done:
  - Fixed issues with libp2p-webrtc-star not working properly [js-libp2p-webrtc-star/pull/193](https://github.com/libp2p/js-libp2p-webrtc-star/pull/193)
    - Just need to sort out some flaky test issues
  - Revamped the js-libp2p browser example [js-libp2p#508](https://github.com/libp2p/js-libp2p/pull/508)
    - Just need to do some final cleanup and get dependencies merged
- Next:
  - Finish the browser example
  - Cleanup the js-libp2p Getting Started Guide
  - Fix an issue with libp2p pubsub interop
  - Hopefully release the refactor

@dirkmc
- Done:
  - Fixed testground bitswap test plan
  - Added traffic shaping to testground bitswap test plan
  - Work on [test suite](https://github.com/ipfs/testground/pull/345)
  - Finalized blog post about new Bitswap changes
- Next:
  - Continue with test suite

@hugomrdias
- Done:
  - Review session with Lidel about [https://github.com/ipfs/js-ipfs/pull/2706](https://github.com/ipfs/js-ipfs/pull/2706)
  - `js-ipfs` CLI tests rewrite
  - React-native research
  - Debug ipfsd-ctl config/profile conflict with alan
  - Release ipfsd-ctl 1.0.3 with couple of fixes and updated dependencies
  - fix aegir test —help examples
  - release ipfsd-ctl 1.0.4 with "remove swarm addrs in browser (#435)"
  - fix ipfsd-ctl find bin logic changed from "bottom/top" to "top/bottom" this should find the correct ipfs bin in more use cases avoiding the user having to manually defining it.
  - fix webui e2e test integration with js-ipfs ci tests [https://github.com/ipfs-shipyard/ipfs-webui/pull/1377](https://github.com/ipfs-shipyard/ipfs-webui/pull/1377)
  - review [https://github.com/ipfs/go-ipfs/pull/6825](https://github.com/ipfs/go-ipfs/pull/6825)
- Next:
  - Continue cli tests rewrite
  - Port http-client examples to the new async iterators API
  
@achingbrain
- Done:
  - Getting js-IPFS examples into shape for async iterators refactor
  - Allow customising unixfs-importer internals: https://github.com/ipfs/js-ipfs-unixfs-importer/pull/48
  - Override raw leaves when only one DAGNode would be created: https://github.com/ipfs/js-ipfs-unixfs-importer/pull/49
  - Support -X in `ipfs.files.chmod` command and recursive chmodding: https://github.com/ipfs/js-ipfs-mfs/pull/73
- Next:
  - Finish js-IPFS examples into shape for async iterators refactor
  - Merge mfs into core
  - Merge ipfs-multipart into core
  - Improve pinning performance

@lidel
- Done:
  - go-ipfs
    - [test: E2E tests against ipfs-webui HEAD](https://github.com/ipfs/go-ipfs/pull/6825)
  - js-ipfs
    - [test: E2E tests against ipfs-webui HEAD](https://github.com/ipfs/js-ipfs/pull/2706/)
  - in-web-browsers
    - Reviewed _IPFS Browser Design Guidelines_
  - other
    - catch up with notes from ResNetLab hack week
- Next:
  - subdomain gateways in go-ipfs

@Stebalien
- Done:
  - 0.4.23-rc1
- Next:
  - 0.4.23
  - content routing work with adin
