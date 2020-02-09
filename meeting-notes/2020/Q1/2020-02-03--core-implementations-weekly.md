# 🚀 IPFS Core Implementations Weekly Sync 🛰 Feb 03, 2020

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @vasco-santos
  - @dirkmc
  - @aschmahmann
  - @hugomrdias
  - @ribasushi
  - @stebalien
  - @nonsense
  - @lidel
  - @fabiomartins91
  - @hsanjuan
- **Recording:** https://youtu.be/fYP1NPQOUts

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

### High Priority Initiatives

These are the high priority initiatives the team is currently working on.

#### Upcoming/Shipped Releases
@stebalien / @alanshaw

- js-ipfs `0.41` RC COMING SOON! 🛫
  - Highlights: async/await & UnixFS v1.5
  - Explainer blog post RELEASED!
    - https://blog.ipfs.io/2020-02-01-async-await-refactor/
  - Check out the API changes in the release issue:
    - https://github.com/ipfs/js-ipfs/issues/2656
  - Migration guide:
    - https://gist.github.com/alanshaw/04b2ddc35a6fff25c040c011ac6acf26

- js-libp2p `0.27` RELEASED! 🚢
  - https://github.com/libp2p/js-libp2p/issues/487
  - Blog post COMING SOON!

- go-ipfs `0.4.23` RELEASED! 🚢
  - https://blog.ipfs.io/2020-01-30-go-ipfs-0-4-23/

#### Upgrade Testing Infra/Process
@stebalien / @daviddias / @nonsense / @raulk

- Merged compositions
  - Allows you run various groups of different images
  - The images allow you to specify different versions of libp2p
- You can store assets/artifacts in an S3 bucket
- Should be ready tomorrow with v0.1 release

#### Content Routing
@stebalien / @raulk / @dirkmc / @aschmahmann / @jacobheun

- Work is kicking off for [Network Forming](https://github.com/libp2p/go-libp2p/issues/783), which we need for all DHT testground testing going forward.
  - Terminating queries and Disjoint paths are blocked by this
- Signed Peer Records is working on feedback, hoping to finish this in the next week or two
- Need someone to work on
  - AutoNAT improvements
  - Simultaneous dial bug (https://github.com/libp2p/go-libp2p-swarm/issues/79) (lower priority)
  - Tests!

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

-  still wip (needs sharness tests and [a flag for controlling Clear-Site-Data](https://github.com/ipfs/in-web-browsers/issues/157)), but  [PR](https://github.com/ipfs/go-ipfs/pull/6096) is finalizing on subdomain config ([preview](https://github.com/ipfs/go-ipfs/blob/feat/gateway-subdomains/docs/config.md#gateway)) 

#### Bitswap Updates
@dirkmc
  - Merged [bitswap PoC](https://github.com/ipfs/go-bitswap/pull/189)
    - Big thanks to @Stebalien for reviewing 9,000 line PR ❤️
  - Writing Testground plans
  - See [go-ipfs#6782](https://github.com/ipfs/go-ipfs/issues/6782) for some graphs of PoC performance and outstanding tasks to get to 0.5.0
  - [Presentation](https://docs.google.com/presentation/d/1mbFFGIIKNvboHyLn-k26egOSWkt9nXjlNbxpmCEQfqQ) about the differences between the old Bitswap and new Bitswap

#### Stream Content-Based-Chunking Research/Improvements (go-ipfs / js-ipfs)
@ribasushi
  - Continuing to work on the standalone dagger tool, incorporating performance feedback from @warpfork. Things are really coming together, but no demo yet today :/

### Other Initiatives

This is the backlog of initiatives that are either on-hold or low-priority.

#### UnixFS v1.5 (go-ipfs / js-ipfs)
@achingbrain / @ribasushi

- from @stebalien to @achingbrain: given that js-ipfs now has this... could we get this in go-ipfs?

#### Add Performance (go-ipfs / js-ipfs)
@aschmahmann / @achingbrain

- from @momack2 to @aschmahmann - could we get "old" versus "new" versus "copy" numbers for ubuntu (all on the same machine?)

#### Distributed Signaling (js-libp2p)
@jacobheun

- Should kick back off later this quarter

#### Migration to multihash keys in blockstore (js-ipfs / go-ipfs)
@alanshaw / @auhau

@hsanjuan go-ipfs: migrations and necessary changes to datastore, go-blockstore, go-filestore, go-ipfs are coming into place.

### Design Review Proposals
> You want to propose something for design review.

- Discussion on ignoring Tsize property in links, Tuesday 4th Feb 3pm GMT
  - Add your name below if you're not on the invite but would like to be
    - @you?
    - Fábio Martins (@fabiomartins91)

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
  - Published new version of `go-ipfs-dep` to npm
    - https://github.com/ipfs/npm-go-ipfs-dep
  - Published blog post for async/await
    - https://blog.ipfs.io/2020-02-01-async-await-refactor/
  - Built a tool to help infra check preload nodes are working correctly
    - https://github.com/alanshaw/js-ipfs-preload-tester
  - Removed floodsub from gossipsub dependencies
    - https://github.com/ChainSafe/gossipsub-js/pull/63
  - Found a small bundle size perf win in libp2p
    - https://github.com/libp2p/js-libp2p-crypto/pull/162
  - Fixed interop for new js-ipfs release
    - https://github.com/ipfs/interop/pull/96
- Next:
  - Release candidate for js-ipfs 0.41
  - Finish release notes for js-ipfs 0.41
    - Compile list of perf wins, stats, factoids etc.
  - Move on to team content routing
  
@jacobheun
- Done:
  - Released the js-libp2p async refactor [js-libp2p@0.27.0](https://github.com/libp2p/js-libp2p/releases/tag/v0.27.0)
    - Need to finish and release the blog post this week
  - Fixed some issues with webrtc-star signalling and listening addresses [js-libp2p-webrtc-star#198](https://github.com/libp2p/js-libp2p-webrtc-star/pull/198)
  - Started profiling work on js-libp2p release, will finish this week
- Next:
  - Finish up profiling of the libp2p refactor
  - Start work on integrating [js-libp2p-noise](https://github.com/NodeFactoryIo/js-libp2p-noise) into js-libp2p.
  - js-libp2p 2020 high level roadmap/objectives

@dirkmc
- Done:
  - Merged [bitswap PoC](https://github.com/ipfs/go-bitswap/pull/189)
- Next:
  - Writing [Testground plans](https://github.com/ipfs/go-ipfs/issues/6782)

@aschmahmann
- Done:
  - DHT testing including:
     - Using predictable peerIDs in tests
     - Mesh based network forming
     - Staging tests to avoid issues with TCP simultaneous connect
     - Hooked up autonat to DHT tests (hacky for testing purposes) to test client-server mode switching behavior
     - Output query events
     - Found a DHT bug where we sent extra information anytime we called FindPeer
     - Updated scripts to extract results from tests and get stats on them, including connection + routing table graphs
- Blocked:
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
- Next:
  - More DHT testing and debugging of https://github.com/libp2p/go-libp2p-kad-dht/pull/436
     - FindPeer tests seems to perform well
     - Working on Provider record tests
     - More work on scripts + stats

@vasco-santos
- Done:
  - holidays
- Blocked: N/A
- Next:
  - Get libp2p-keychain into libp2p PR rebased and merged
    - [libp2p/js-libp2p#525](https://github.com/libp2p/js-libp2p/pull/525)
  - Get interop tests running with `js-libp2p` PR rebased and merged
    - [js-libp2p#526](https://github.com/libp2p/js-libp2p/pull/526)
  - Continue stardust refactor work
    - [libp2p/js-libp2p-stardust#14/](https://github.com/libp2p/js-libp2p-stardust/pull/14/)
    
    
@lidel
- Done:
  - subdomain gateways 
    - go-ipfs: working on [subdomain gateway feature](https://github.com/ipfs/go-ipfs/pull/6096)
        - finishing config and docs cleanup
        - writing sharness tests
  - ipfs-desktop
    - [chore: go-ipfs v0.4.23](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1329)
    - [QA around adding folders via drag&drop](https://github.com/ipfs-shipyard/ipfs-desktop/issues/1287#issuecomment-580368657)
    - wip: [Release 0.10.3](https://github.com/ipfs-shipyard/ipfs-desktop/issues/1338)
  - brave
    - preload/delegate regression in Brave
    - formalizing a devgrant for local discovery in embedded js-ipfs in Brave
- community
    - admin related to taking over IPFS Weekly Call for the next month
    - ipfs/devgrants: [RFP 001: Active local discovery in Brave](https://github.com/ipfs/devgrants/pull/14)

- Next:
  - P0 ship bugfix ipfs-desktop [v0.10.3](https://github.com/ipfs-shipyard/ipfs-desktop/issues/1338)
  - P1 subdomains

@achingbrain
- Done:
  - Converted js-IPFS examples to async/await
  - Peer IDs returned as Strings instead of CIDs
  - Multiaddrs returned as Multiaddrs instesad of Strings
  - Reduced ipfsd-ctl from 940kb to 30kb
- Blocked:
  - N/a
- Next:
  - Support Alan in async/interator release
  - Look at dependant repos to get build passing
  - Merge mfs into core
  - Propose pinning performance improvements

@hugomrdias
- Done:
  - react-native review sessions
  - review and merge a couples of `ipfsd-ctl` and `aegir` PRs
  - release ipfsd-ctl 2.0.0
  - review rust-ipfs grant proposal
  - [https://github.com/ipfs/js-ipfsd-ctl/pull/449](https://github.com/ipfs/js-ipfsd-ctl/pull/449) fix: protect possible empty ipfsModule option #449
  - Review and merge multiple ctl PRs and release 2.1.0
  - rebased cli tests PRs waiting for "cids as strings fixes" to finish the PRs
  - started reducing aegir size
- Next
  - Finish cli tests PRs
  - Continue reducing aegir size

@hsanjuan

- Done (go-ipfs):
  - Preparing migrations and changes needed for raw multihashes
- Next:
  - Consolidate changes, get them merged
  - Migration testing
    - Next release likely to have 3 migrations - two of them need testing, the other need to be consolidated/merged
    
@stebalien
- Done:
  - go-ipfs 0.4.23
  - Finished revewing the Bitswap PR
- Blocked:
- Next:
  - Continue reviewing new bitswap PRs.
