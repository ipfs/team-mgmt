# 🚀 IPFS Core Implementations Weekly Sync 🛰 Sep 16, 2019

- **Lead:** @momack2
- **Notetaker:** @jacobheun
- **Attendees:**
    - @jacobheun
    - @jimpick
    - @aschmahmann
    - @vasco-santos
    - @pedromiguelss
    - @hacdias 
    - @hugomrdias
    - @stebalien
- **Recording:** https://youtu.be/BnyBn-9L0Zk

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

- @stebalien is going to run a go-ipfs release for 0.4.23 to fix build issues on go 1.13
- @achingbrain
  - ran RC tests on third party repos, found a bug
  - fixed it, found another bug
  - opened issues on third party repos inviting them to join the early-release programme
  - automation, automation, automation
    - Added interop tests to the build to run on every PR
    - Next: run against internal repos, and automate opening PRs to 3rd party repos

#### Upgrade Testing Infra/Process
@jimpick / @stebalien / @alanshaw

- Jim - I did a "mapping" exercise to try to identify 10 starter tests to concentrate on in the next month. More feedback greatly appreciated! https://github.com/ipfs/testground/pull/33#issuecomment-531520092
- Raul is doing lots of work on the "testground" engine https://github.com/ipfs/testground/pull/37
  - will be used for things like testing the DHT
  - Jim will be doing some traffic shaping work on this
  - Aiming to land tests in the next 30 days so that we can start leveraging those ASAP

#### Garbage Collection and Pinning (js-ipfs)
@achingbrain
 - no update, will be released in v0.38.0

#### Gossipsub (js-libp2p)
@vasco-santos

- Initiative finished, `js-ipfs` PR was merged as well as interop tests. will be released in v0.38.0

- We can now configure in the config what router to use. Gossipsub is enabled by default.

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- No update

#### Distributed Signaling (js-libp2p)
@jacobheun

- Still on hold while js-libp2p async/refactor work gets finished

#### IPNS (js-ipfs / go-ipfs)
@aschmahmann

- IPNS over PubSub
  - [libp2p/go-libp2p-discovery#184](https://github.com/libp2p/go-libp2p-pubsub/pull/184) reworked pubsub interfaces to handle topic registration separately from publish/subscribe
  - pubsub tests seem to have issues with leaked goroutines, trying to track them down when I run into them (e.g. https://github.com/libp2p/go-libp2p-swarm/pull/138)
  
Adin out next week for ICN conference

#### Migration to multihash keys in blockstore (js-ipfs)
@alanshaw/@auhau

- No update

#### Package Managers Updates
@dirkmc / @adin / @djdv

- @dirkmc has been putting a lot of effort on the Bitswap side of things, it's been going well
- Working on allowing people to be able to sync these via mounts

#### Bitswap Updates
@dirkmc / @stebalien

- No updates

#### js-ipfs/js-libp2p/js-ipld async await refactor
@alanshaw

- libp2p-tcp refactor released [v0.14.0](https://github.com/libp2p/js-libp2p-tcp/releases/tag/v0.14.0)
- interface-stream-muxer refactor released [v0.7.0](https://github.com/libp2p/interface-stream-muxer/releases/tag/v0.7.0)

- Next Steps:
  - libp2p-mplex should get merged today/tomorrow [libp2p-mplex#94](https://github.com/libp2p/js-libp2p-mplex/pull/94)
  - interface-connection should be completed this week [interface-connection#29](https://github.com/libp2p/interface-connection/pull/29)
  - The new libp2p Switch dial flow should be finished up this week.
    - We will be created some contributor guides to enable contibutors to be able to help with migrations of other modules to async iterator streams
  - Get remaining transports finished
    
*Note*: js-libp2p has a [Trello Board](https://trello.com/b/ibz3Ub0a/js-libp2p-async-refactor) for the refactor effort if you are interested in a more organized breakdown of the remaining tasks. We'll be adding to/ updating it as we unblock / finish items.

### Design Review Proposals
> You want to propose something for design review.

- UnixFSv1.5 - @stebalien
  - https://github.com/ipfs/specs/issues/217
  - https://github.com/ipfs/specs/pull/220
  - If you are interested add you name!
    - @djdv
    - @aschmahmann
    - @achingbrain

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

- None

### Questions
> You have questions and need them answered. List them here.

- Is there documentation on the containerization of images we test?
  - Hasn't been really discussed yet.
  - It would be nice to be able to bake some images to mimic our gateways and eventually pull the images from the testbed so we have a known, well tested, working build/image.

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


@jacobheun
- Done:
  - Libp2p Async/Await
    - js multistream-select in progress migration has new ls support [it-multistream-select#5](https://github.com/alanshaw/it-multistream-select/pull/5)
    - js mafmt now properly supports `p2p` address validation [js-mafmt#43](https://github.com/multiformats/js-mafmt/pull/43)
    - fixed an issue with flakey transport tests [interface-transport#54](https://github.com/libp2p/interface-transport/pull/54)
    - The [Upgrader](https://github.com/libp2p/interface-transport#upgrader) dial logic is almost done, just working through a couple bugs with handshakes. 
  - js multiaddr now has `decapsulateCode` so users can decapsulate based on protocol code instead of strings [js-multiaddr#98](https://github.com/multiformats/js-multiaddr/pull/98)
- Blocked: none
- Next:
  - Libp2p Async/Await
    - Get libp2p-mplex merged [js-libp2p-mplex#94](https://github.com/libp2p/js-libp2p-mplex/pull/94)
    - Get multistream-select merged from it-multistream-select
    - Finish the dial flow and start guides to make it easier for contributors to help with module and internal refactor

@hacdias
- Done _(**wr** for waiting review)_:
  - IPFS Web UI
    - UX: show message when some option toggling fails [#1146](https://github.com/ipfs-shipyard/ipfs-webui/pull/1146)
    - Released [v2.5.3](https://github.com/ipfs-shipyard/ipfs-webui/releases/tag/v2.5.3) with the bugfixes.
    - (**wr**) Show full protocol on hover on peers table [#1169](https://github.com/ipfs-shipyard/ipfs-webui/pull/1167)
    - (**wr**) Correct the highlight on `/p2p-circuit` addresses [#1168](https://github.com/ipfs-shipyard/ipfs-webui/pull/1168)
    - (**wr**) Show more info about the connectivity [#1167](https://github.com/ipfs-shipyard/ipfs-webui/pull/1167) or [#1168](https://github.com/ipfs-shipyard/ipfs-webui/pull/1166)
  - IPFS Desktop
    - Added some analytics for some features so we have an idea of how much Desktop-specific feature are actually being used such as screenshots. [ipfs-desktop#1068](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1068) [ipfs-webui#1136](https://github.com/ipfs-shipyard/ipfs-webui/pull/1136)
    - Fixed opening external URLs on default browser [#1117](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1117)
    - Fixed IPFS on PATH enabling procedure [#1114](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1114)
    - Refactored logging with more detailed information such as timings [#1110](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1110)
    - Released [v0.9.2](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.9.2) with more bugfixes
  - (**wr**) Wrote 'IPFS Desktop 0.9' blog post for IPFS Blog [ipfs/blog#299](https://github.com/ipfs/blog/pull/299)
- Next:
  - Cleanup Web UI's issues
  - Keep working on Desktop testing 
  - Dedicate a bit of time to IPFS Deploy


@pedromiguelss
- Done:
  - Started changing interop tests code to use async/await. [Issue here](https://github.com/ipfs/interop/issues/84)
- Next:
  - Keep this task for the whole week
  
  
@vasco-santos
- Done:
  - libp2p interop updated
    - [libp2p/npm-go-libp2p-dep#7](https://github.com/libp2p/npm-go-libp2p-dep/pull/7)
    - [libp2p/interop#25](https://github.com/libp2p/interop/pull/25)
  - async migration reviews
  - addressed `interface-connection` PR Review
    - [libp2p/interface-connection#29](https://github.com/libp2p/interface-connection/pull/29)
- Blocked:
  - N/A
- Next:
  - Get `interface-connection` async PR ready to be released
    - [libp2p/interface-connection#29](https://github.com/libp2p/interface-connection/pull/29)
  - Update transports async PRs
  
@djdv
- Done:
  - Lots of changes and fixes to the experimental IPFS mount PR (https://github.com/ipfs/go-ipfs/pull/6612/)
  - [requested] PR that starts the daemon when launching `ipfs` from a GUI environment (Windows only for now). (https://github.com/ipfs/go-ipfs/pull/6646)
    - needs opinions/review and if someone wants to add support for detecting other UI's on other platforms, that'd be cool ;^)
- Blocked:
  - N/A
- Next:
  - Fixing IPNS support in the mount PR (it mostly works but key's don't update properly)
  - Going to look at the CoreAPI implementation
    - we may want to change how key path's are returned (returning their most up to date value rather than their initial one)
  - Likely helping with the DNS router implementation (when the specs are done)

@achingbrain
- Done:
  - Created release branch: https://github.com/ipfs/js-ipfs/tree/v0.38.x
  - Running interop tests in CI
  - Ran tests of internal libraries
  - Found bug in orbit-db tests caused by our upgrades
  - Opened issues on many third party js-IPFS consumer repos asking them to join early-tester programme
- Blocked:
- Next:
  - Fix orbit-db problem
  - Pick up ipfs-repo upgrade branch

@stebalien
- Done:
- Next:
  - Cut a 0.4.23 release to fix build issues on go 1.13
  - Cut an ipget release.
  
@hugomrdias
- Done:
  - [https://github.com/ipfs/interop/pull/82](https://github.com/ipfs/interop/pull/82) chore: use connect-deps to link custom ipfs version #82
  - release multihashing-async 0.8.0
  - [https://github.com/sindresorhus/ky-universal/issues/9](https://github.com/sindresorhus/ky-universal/issues/9) fetch and electron renderer fail #9
  - [https://github.com/ipfs/js-ipfs-http-client/pull/1105](https://github.com/ipfs/js-ipfs-http-client/pull/1105) fix electron renderer tests and a couple more bugs #1105
  - [https://github.com/ipfs/js-ipfsd-ctl/pull/377](https://github.com/ipfs/js-ipfsd-ctl/pull/377) chore: use new http client #377
  - [https://github.com/ipfs/js-ipfsd-ctl/pull/375](https://github.com/ipfs/js-ipfsd-ctl/pull/375) fix: fix electron #375
  - [https://github.com/ipfs/interface-js-ipfs-core](https://github.com/ipfs/interface-js-ipfs-core) release 0.114.0
  - [https://github.com/ipfs/js-ipfs/pull/2428](https://github.com/ipfs/js-ipfs/pull/2428) feat: allow daemon to init and start in a single cmd #2428
- Next:
  - Finish IPNS over DNS spec
  
@jimpick
- Done:
  - 10 starter tests "mapping" https://github.com/ipfs/testground/pull/33#issuecomment-531520092
- Next:
  - Our Networks Toronto
