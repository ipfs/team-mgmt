# 🚀 IPFS Core Implementations Weekly Sync 🛰 Oct 21, 2019

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @pedromiguelss
  - @achingbrain
  - @djdv
  - @hacdias
  - @dirkmc
  - @vasco-santos
- **Recording:** https://youtu.be/vXNLq3UbnF0

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

#### Upgraded Release Process
@stebalien / @achingbrain
- Actually testing third party repos
  - Some of these are using ipfsd-ctl instead of js-ipfs directly
    - Hoping to get people to migrate towards using specific versions of js-ipfs

#### Upgrade Testing Infra/Process
@jimpick / @stebalien / @alanshaw / @daviddias
- @jimpick demo - Testground + Docker https://github.com/ipfs/testground/pull/74
- ipfs/benchmarks down - on Alan's list to get this working again (and ensure permissions are shared more broadly)
- @hugomrdias all js-interface-core tests run and pass in the browser https://github.com/ipfs/js-ipfs/pull/2529 
- Testground update (@daviddias)
  - ✅ Refreshed set OKRs based on feedback from Molly https://docs.google.com/spreadsheets/d/1VeyiLvBdX_PrP394kU_lwkQZxfNwqMVX1f7K4ursSPM/edit#gid=96566767
  - ⚙️ ROADMAP in progress https://github.com/ipfs/testground/pull/75
  - ✅ smlbench Plan now works with the TestGround Orchestrator (means that we have a good way to spawn ipfs daemons using IPTB) https://github.com/ipfs/testground/pull/60
  - ✅  go-ipfs as a Library Tutorial complete (means that we have a good template on how to spawn ipfs nodes in process) https://github.com/ipfs/go-ipfs/pull/6695
  - ⚙️ smlbench with 2 separate containers is working and files are being transferred (this is the base for Test Plan 2 which is about testing Bitswap/GraphSync) https://github.com/ipfs/testground/pull/74
  - ✅ Our Starchitect, Raul, is back this week!
  - ℹ️ If you want to follow this and more progress, check out the Kanban https://trello.com/b/O9z3ljaH/testground-ignition-%F0%9F%9A%80


#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- On hold, should start work on [Peer IDs as CIDs](https://github.com/libp2p/specs/issues/216) (in js-libp2p) this week 🤞
  - Want to ship support + tests for CIDs without defaulting PeerID output to CIDv1Base32 for now, so we can start using them without pulling the plug on the old representation (which is effectively just CIDv0)

#### Distributed Signaling (js-libp2p)
@jacobheun

- Still on hold pending async/await

#### IPNS (go-ipfs / js-ipfs)
@aschmahmann / @hugomrdias
- Adin is out for holiday

@hugomrdias
  - Talked a lot about ipns over dns at Diffusion 2019 Berlin this weekend and at least one group from fission.codes wants to help out and be involved to get this done.
  - spec for ipns over DNS blocked behind testing work

#### Migration to multihash keys in blockstore (js-ipfs)
@alanshaw / @auhau

- The PR to implement this has been merged. Some feedback from that is being implemented in a follow up PR.
  - We'll then have the ability to migrate repos across versions which will allow us to do things like changing multihashes.
  - Gets us closer to base32 cids by default

#### IPFS Mount
@djdv

 - Iterating on PR feedback - add experimental daemon plugin for 9P2000.L support (https://github.com/ipfs/go-ipfs/pull/6612)
 - trying to iron out ambiguities with plugins, config, etc. (we can do some things multiple ways, how SHOULD we do them? / what can users expect)
 - working on upstream deps (portability concerns in 9P lib, Golang's syscall/unix pkg)
 - writing and debugging tests
 

#### Bitswap Updates
@dirkmc

- [Proof of concept](https://github.com/ipfs/go-bitswap/pull/189)

#### js-ipfs/js-libp2p/js-ipld async await refactor
@achingbrain / @jacobheun / @vasco-santos / @alanshaw

- js-libp2p [trello board](https://trello.com/b/ibz3Ub0a/js-libp2p-async-refactor)
  - [Initial Dialer/Upgrader](https://github.com/libp2p/js-libp2p/pull/462) is done
  - Crypto now has [an interface](https://github.com/libp2p/js-interfaces/tree/master/src/crypto)! This is in the brand new, consolidated [js-interfaces repo](https://github.com/libp2p/js-interfaces).
  - All pubsub modules have PRs and reviews have started
    - Integration with `js-libp2p` on the way
    - Creation of `PeerStore` to replace `Peerbook` in this context
  - We're pausing on websocket-star for now. As we get closer to finishing the refactor we may spend the time to just get this replaced, instead of burning more time on it, as we want to sunset it anyway.
- js-ipfs
    - A new JS core API is coming https://github.com/ipfs/js-ipfs/pull/2547
    - Interop and interface-core tests are being ported to async/await by Pedro Santos
    - Tests setup with a new super cool ipfsd-ctl is almost done

### Design Review Proposals
> You want to propose something for design review.

- This week:
- Last week:
  - @lidel: [exploring "lazy" website cohosting](https://github.com/ipfs-shipyard/cohosting/issues/6)

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

@dirkmc pls have a look at this https://github.com/ipfs/js-ipfs-bitswap/pull/203 

We would love for you to give a good review and add any notes and/or questions we might be missing, urls to them are:
✅ =merged 🔍=ready for review ⚙️=Draft in Progress (still useful if you can check it out)
- ✅ IPFS Open Problem: Preserve full users' privacy when providing and fetching Content
- 🔍 IPFS Open Problem: Mutable Data (Naming, Real-Time, Guarantees)
- ⚙️ IPFS Open Problem: Human Readable Naming
- ⚙️ IPFS Open Problem: Improved layouts to represent data in hash-linked graphs (using IPLD)
- ⚙️ IPFS Open Problem: Enhanced Bitswap/GraphSync with more Network Smarts
- 🔍 libp2p Open Problem: Routing at Scale (1M, 10M, 100M, 1B.. nodes) 
- 🔍 libp2p Open Problem: PubSub at Scale (1M, 10M, 100M, 1B.. nodes)
- https://github.com/ipfs/research/pulls & https://github.com/libp2p/research/pulls


### Questions
> You have questions and need them answered. List them here.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

@hugomrdias
- One big feedback from talking with people in Diffusion Berlin 2019 was go-ipfs is hard to install in Linux -- this should be easy to fix, by having a PPA or snap or flat(something) or other way of installing.


### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟

@alanshaw
- Done:
  - Initial work on new JS core API (`ipfs.add` and boot procedure) https://github.com/ipfs/js-ipfs/pull/2547
  - Caught up with everything after being away!
- Next:
  - Landing https://github.com/ipfs/js-ipfs-repo-migrations in js-ipfs

@jacobheun
- Done:
  - Finished up the initial [dialer/upgrader](https://github.com/libp2p/js-libp2p/pull/462) work for js-libp2p async refactor
  - Released new, consolidated js-libp2p interfaces repo [js-interfaces](https://github.com/libp2p/js-interfaces)
    - The old repos will get deprecation notices for the refactor
  - There is now a js crypto interface with some tests [js-interfaces/crypto](https://github.com/libp2p/js-interfaces/tree/master/src/crypto)
  - Added an example of [bidrectional stream transformations](https://github.com/libp2p/js-libp2p/pull/466) to the js-libp2p stream iterables docs
  - Fixed [usage docs for pnet](https://github.com/libp2p/js-libp2p/pull/464) in the consolidated js-libp2p repo
- Next:
  - Deprecate the old js libp2p interface repos.
  - Implement plaintext 2.0.0 in async refactor
  - Implement pnet in async refactor

@dirkmc
- Done:
  - Got all tests passing in [proof-of-concept bitswap PR](https://github.com/ipfs/go-bitswap/pull/189)
  - Cleaned up some TODOs (eg rebroadcast wants)
- Next:
  - More tests for bitswap engine
  - More tests for disconnect / error scenarios
  - Write an explanation of each benchmark, what it does and where there is a difference with bitswap master, explain why


@lidel

- Done:
  - ipfs-companion:
    - Debugging [Brave regression in embedded /api/v0/add](https://github.com/ipfs-shipyard/ipfs-companion/issues/757)
        - [fix: restore /api/v0/add in WebUI in Brave](https://github.com/ipfs-shipyard/ipfs-companion/pull/794)
    - [feat: precached webui works in offline mode](https://github.com/ipfs-shipyard/ipfs-companion/pull/782)
    - ci fixes
    - [feat: recover from DNS failures, support DNSLink for .eth](https://github.com/ipfs-shipyard/ipfs-companion/pull/797)
    - [fix: set minimum_chrome_version to 72](https://github.com/ipfs-shipyard/ipfs-companion/pull/798)
    - new Beta: [v2.8.6.847](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.6.847)
        - [Beta release under review on Chrome Web Store](https://github.com/ipfs-shipyard/ipfs-companion/issues/795)
    - [feat: display feedback form on extension uninstall](https://github.com/ipfs-shipyard/ipfs-companion/pull/799)
  - ipfs/aegir: [feat: support lockfiles during text-external](https://github.com/ipfs/aegir/pull/450)
  - Other
    - [2019-10-16 gui-and-in-web-browsers-weekly](https://github.com/ipfs/team-mgmt/pull/1050)
    - Reviewed 
      - ipfs-companion: [feat: recover dead public gateway links](https://github.com/ipfs-shipyard/ipfs-companion/pull/783)
      - js-ipfs: [document for running JS IPFS in the browser](https://github.com/ipfs/js-ipfs/pull/2392)
      - ipfs-desktop: [GPU fix](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1198)
      - ipfs-desktop: [feat: improve auto launch at login](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1200)
- Next:
  - OoO / limited availability for most of tuesday and thursday (personal matters)
  - ipfs-companion stable release
  - webui test matrix
  - peerid encoded as CID in js-libp2p

@vasco-santos
- Done:
  - Pubsub subsystem refactor
    - `js-libp2p-pubsub` first review addressed
      - [libp2p/js-libp2p-pubsub#26](https://github.com/libp2p/js-libp2p-pubsub/pull/26)
    - `js-libp2p-floodsub` is ready for review
      - [libp2p/js-libp2p-floodsub#88](https://github.com/libp2p/js-libp2p-floodsub/pull/88)
    - `gossipsub-js` is ready for review
      - [ChainSafe/gossipsub-js#49](https://github.com/ChainSafe/gossipsub-js/pull/49) 
    - Started integration of pubsub in `js-libp2p` according to the new proposal design with registrar
      - Also creating `PeerStore` initial version ([libp2p/js-libp2p#453](https://github.com/libp2p/js-libp2p/issues/453))
  - IPFS Help desk in Diffusion developers conference in Berlin
    - [diffusion.events](https://diffusion.events/)
- Blocked: N/A
- Next:
  - Finish pubsub integration in `js-libp2p`
  - Iterate on pubsub PRs review
  - Work on DHT subsystem refactor
  - (Will be OOO on 24th and 25th October)

@achingbrain
- Done: 
  - pull-stream-to-stream starts in paused mode [pull-stream/pull-stream-to-stream#7](https://github.com/pull-stream/pull-stream-to-stream/pull/7)
  - pull-ndjson serializes empty streams correctly [daviddias/pull-ndjson#3](https://github.com/daviddias/pull-ndjson/pull/3)
  - updated release process docs with automated tasks [ipfs/js-ipfs#2536](https://github.com/ipfs/js-ipfs/pull/2536)
  - added PM meeting notes to mgmt repo [ipfs/team-mgmt#1047](https://github.com/ipfs/team-mgmt/pull/1047)
  - expose preload argument in http client [ipfs/js-ipfs-http-client#1129](https://github.com/ipfs/js-ipfs-http-client/pull/1129)
  - enabled skipped base64 encoding test [ipfs/js-ipfs#2543](https://github.com/ipfs/js-ipfs/pull/2543)
  - handle trailing slashes on `ipfs ls` [ipfs/js-ipfs#2546](https://github.com/ipfs/js-ipfs/pull/2546)
  - update block.rm interface docs [ipfs/interface-js-ipfs-core#544](https://github.com/ipfs/interface-js-ipfs-core/pull/544)
  - allow specifying timeouts to fetch [ipfs/js-ipfs-http-client#1130](https://github.com/ipfs/js-ipfs-http-client/pull/1130)
  - merge-options can now ignore undefined values [schnittstabil/merge-options#14](https://github.com/schnittstabil/merge-options/pull/14)
- Blocked:
  - N/a
- Next:
  - Help @pedromiguelss get [ipfs/interop#86](https://github.com/ipfs/interop/pull/86) across the line
  - pick up streaming error HTTP API

@pedromiguelss
- Done:
  - Started converting `interface-ipfs-core` tests to use async await
- Blocked: N/A
- Next:
	- Finish `interface-ipfs-core` conversion to async await
	- Add `—human` flag to `bitswap.stat` and `repo.stat`
		- https://github.com/ipfs/js-ipfs/issues/1996
		- https://github.com/ipfs/js-ipfs/issues/2057


@hugomrdias
- Done
  - Debugging session with lidel and Jacob about interop circuit relay browser tests to unblock [https://github.com/ipfs/interop/pull/86](https://github.com/ipfs/interop/pull/86)
  - [https://github.com/ipfs/js-ipfsd-ctl/pull/396](https://github.com/ipfs/js-ipfsd-ctl/pull/396) fix: support more ipfs options #396
  - Release ipfsd-ctl 
  - Rewrite ipfsd-ctl
  - [https://github.com/ipfs/js-ipfs/pull/2544](https://github.com/ipfs/js-ipfs/pull/2544) fix: make init options look like go-ipfs #2544
  - [https://github.com/ipfs/js-ipfs/pull/2545](https://github.com/ipfs/js-ipfs/pull/2545) fix: add profiles docs, support in validation and tests #2545
  - [https://github.com/ipfs/js-ipfs-bitswap/pull/203](https://github.com/ipfs/js-ipfs-bitswap/pull/203) fix: reduce size #203
  - IPFS Help desk in Diffusion developers conference in Berlin
      - [diffusion.events](https://diffusion.events/)
- Next
  - finish tests improvements

@hacdias
  - Done:
    - IPFS Desktop
      - Released 0.9.6 with a few important bug fixes:
          - [feat: improve auto launch on login](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1200)
          - Reduced high CPU/GPU usage from the renderer process by [moving Web UI to a blank page](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1198) when the window's hidden.
      - @alexhenrie published IPFS Desktop to [Arch User Repository](https://aur.archlinux.org/packages/ipfs-desktop/).
  - IPFS Web UI
      - Started working on improving peers' page performance [#1262](https://github.com/ipfs-shipyard/ipfs-webui/pull/1262).
  - Cohosting
      - Updated the [PR to `ipfs-cohost`](https://github.com/olizilla/ipfs-cohost/pull/5) to match the SPEC and @olizilla gladely moved `ipfs-cohost` to `ipfs-shipyard`.
  - Next:
    - Improve Peers page.
    - Add js-ipfs-http-client to Desktop as dep
    - Web UI testing
    - Hopefully update geoip
