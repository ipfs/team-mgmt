# 🚀 IPFS Core Implementations Weekly Sync 🛰 Dec 16, 2019

- **Lead:** @stebalien
- **Notetaker:** @jacobheun
- **Attendees:**
  - @jimpick
  - @hugomdia
  - @jacobheun
  - @aschmahmann
  - @dirkmc
  - @pedromiguelss
  - @vasco-santos
  - @momack2
  - @ribasushi
  - @lidel
- **Recording:** https://youtu.be/fUWkQIQ9kqQ

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
@stebalien / @achingbrain / @alanshaw

- Pre release of js-ipfs async before Christmas (fingers crossed)
- There are some fixed DHT bugs but don't believe there is an RC pending
- go-ipfs release at some point soon

#### Upgrade Testing Infra/Process
@jimpick / @stebalien / @daviddias

- much of the team is together for the last part of last week, first part of this week
  - testground hacking
  - DHT tests for go-ipfs
  - onboarding Anton
  - Anton is investigating alternate "runners" (eg. Kubernetes)
  - Jim is working on connectivity tests
- Looking to launch a usable version by Wednesday
- Switching away from Docker Swarm to Kubernetes
  - Docker Swarm can't handle the larger number of nodes

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- Waiting for review of [config options proposal in subdomain GW PR /go-ipfs/pull/6096](https://github.com/ipfs/go-ipfs/pull/6096#issuecomment-564939993)
  - All opinions welcome!

#### Distributed Signaling (js-libp2p)
@jacobheun

- On hold awaiting js-libp2p refactor, should kick back off shortly after the new year.

#### IPNS (go-ipfs / js-ipfs)
@aschmahmann / @hugomrdias

IPNS over PubSub
   - IPFS integration https://github.com/ipfs/go-ipfs/pull/6758 🚢🚀
   - Don't worry still plenty of work to be done, but for now other things are higher priority

#### Add Performance (go-ipfs / js-ipfs)
@aschmahmann / @achingbrain

Asynchronous Datastores
   - Blocked awaiting review https://github.com/ipfs/go-ipfs/pull/6785
     - @dirkmc to take a look

#### Migration to multihash keys in blockstore (js-ipfs)
@alanshaw / @auhau

- Blocked on not having time.

#### Bitswap Updates
@dirkmc
- Started work on porting the [bitswap PoC changes](https://github.com/ipfs/go-bitswap/pull/189) to js-bitswap https://github.com/ipfs/js-ipfs-bitswap/pull/203

#### js-ipfs/js-libp2p/js-ipld async await refactor
@achingbrain / @jacobheun / @vasco-santos / @alanshaw

- js-libp2p
  - Got a pre release out the door, libp2p@0.27.0-pre.0
  - Integrated the libp2p pre release into js bitswap [js-ipfs-bitswap/pull/206](https://github.com/ipfs/js-ipfs-bitswap/pull/206)
    - Found a few issues that needed to be fixed, but otherwise the migration was fairly straight forward.
    - Released libp2p@0.27.0-pre.1 with these fixes
  - Several PRs for updating all the [libp2p examples](https://github.com/libp2p/js-libp2p/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aopen+examples)
  - Improved the API and Configuration [docs](https://github.com/libp2p/js-libp2p/tree/refactor/async-await/doc)
  - Getting started guide is in progress [js-libp2p#514](https://github.com/libp2p/js-libp2p/pull/514)
  - Starting integration into js-ipfs [js-ipfs#2680](https://github.com/ipfs/js-ipfs/pull/2680)
  - This week we'll be working on js-ipfs integration, bug fixes and cleaning up docs
  - Looking to get a Release Candidate out this week
  
- js-ipfs
  - Many PRs open https://github.com/ipfs/js-ipfs/pulls?utf8=%E2%9C%93&q=is%3Apr+async%2Fawait+
  - Merging all into master PR https://github.com/ipfs/js-ipfs/pull/2547
  - Aiming for pre-release before EOY
  - Migration guide
      - https://gist.github.com/alanshaw/04b2ddc35a6fff25c040c011ac6acf26
  - Blog post in draft (not ready for review)
      - https://github.com/ipfs/blog/pull/340
  

### Design Review Proposals
> You want to propose something for design review.

@aschmahmann: Provider records using multihashes instead of CIDs (https://github.com/libp2p/go-libp2p-kad-dht/pull/422). It seems like the only thing blocking this is a sense of consensus, let's pick an answer and merge some code!

DHT Provider record is blocked from being merged awaiting consensus on what types of keys the DHT should allow (multihashes, multihashes + CIDs, anything, anything less than 80 bytes, etc.)

@stebalien will put this to the libp2p team with a deadline of when IPFS needs a decision by.

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!
- Please grade Q4 OKRs! 

### Questions
> You have questions and need them answered. List them here.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

* go-ipfs has switched from /ipfs to /p2p multiaddrs
  * js-ipfs will switch to using /p2p by default in the upcoming async release
* shipped:
  * [js-ipfsd-ctl v1.0.0](https://github.com/ipfs/js-ipfsd-ctl/releases/tag/v1.0.0) 
  * [ipfs-companion v2.10.0](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.10.0) (only Firefox for now, Chromium soon)

### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟

@jacobheun
- Done:
  - libp2p async refactor
    - Released a pre release
    - Added coalescing dial support [js-libp2p#518](https://github.com/libp2p/js-libp2p/pull/518)
    - Integrated pre release into js-ipfs-bitswap [js-ipfs-bitswap#206](https://github.com/ipfs/js-ipfs-bitswap/pull/206)
    - Misc fixes and documentation updates as part of downstream migration
- Next:
  - Integrate libp2p pre release into js-ipfs
  - Finish reviewing all the libp2p examples
  - Create a migration guide from libp2p@0.26.x to libp2p@0.27.x
  - Do a final pass through the API and Configuration docs
  - Get an RC of libp2p out.


@dirkmc
- Done:
  - Started work on porting the [bitswap PoC changes](https://github.com/ipfs/go-bitswap/pull/189) to js-bitswap https://github.com/ipfs/js-ipfs-bitswap/pull/203
- Next:
  - [Fix bootstrapping](https://github.com/ipfs/go-ipfs/issues/6797)

@aschmahmann
- Done:
  - [IPNS over PubSub as an independent transport](https://github.com/ipfs/go-ipfs/pull/6758) shipped
  - [DHT Provider records using multihashes instead of CIDs PR](https://github.com/libp2p/go-libp2p-kad-dht/pull/422)
  - Reviewed [DHT PR for persisting routing table](https://github.com/libp2p/go-libp2p-kad-dht/pull/383)
  - Dealt with a few pubsub things
     - [separating meshsub from gossipsub](https://github.com/libp2p/go-libp2p-pubsub/issues/249)
        - potentially useful for IPNS and other protocols with small messages
     - libp2p decided to add some functionality to unblock Eth2 that potentially causes problems for running pubsub as a service. [issue](https://github.com/libp2p/go-libp2p-pubsub/issues/247)
- Blocked:
  - DHT Provider record is blocked from being merged awaiting consensus on what types of keys the DHT should allow (multihashes, multihashes + CIDs, anything, anything less than 80 bytes, etc.)
  - Async Datastores PR https://github.com/ipfs/go-ipfs/pull/6785
- Next:
  - Work on improving DHT queries (both [don't query all the peers in the DHT](https://github.com/libp2p/go-libp2p-kad-dht/pull/291), and [query many disjoint paths](https://github.com/libp2p/go-libp2p-kad-dht/pull/204) - these PRs are not new I'm synthesizing them into a new PR based off the stabilize branch)

@vasco-santos
- Done:
  - API and CONFIG docs merged
  - getting started first iteration
    - [libp2p/js-libp2p#514](https://github.com/libp2p/js-libp2p/pull/514)
  - async refactor for ping
    - [libp2p/js-libp2p#505](https://github.com/libp2p/js-libp2p/pull/505)
  - js-libp2p release fixes
    - [libp2p/js-libp2p#510](https://github.com/libp2p/js-libp2p/pull/510)
    - [libp2p/js-libp2p#513](https://github.com/libp2p/js-libp2p/pull/513)
    - [libp2p/js-libp2p#517](https://github.com/libp2p/js-libp2p/pull/517)
  - more examples refactored
    - [libp2p/js-libp2p#507](https://github.com/libp2p/js-libp2p/pull/507)
    - [libp2p/js-libp2p#508](https://github.com/libp2p/js-libp2p/pull/508)
- Blocked: N/A
- Next:
  - New iteration on some `js-libp2p` examples
  - Finish getting started guide and blogpost

@pedromiguelss
- Done:
    - Analyze and unskip skipped tests on `interface-ipfs-core`
        - https://github.com/ipfs/js-ipfs/pull/2673
        - https://github.com/ipfs/js-ipfs/pull/2677
- Blocked: N/A
- Next:
    - Keep verifying skipped `interface-ipfs-core` tests on `js-ipfs` and/or `js-ipfs-http-client`

@lidel
- Done:
  - ipfs-companion
    - [Chrome Web Store Removal notification for IPFS Companion Beta](https://github.com/ipfs-shipyard/ipfs-companion/issues/832)
    - [feat: copy shareable link during file import](https://github.com/ipfs-shipyard/ipfs-companion/issues/833)
    - [fix: ipfs:// in Firefox incognito window](https://github.com/ipfs-shipyard/ipfs-companion/pull/835)
    - [fix: remove normalizeLinksContentScript](https://github.com/ipfs-shipyard/ipfs-companion/pull/836)
    - beta release: [v2.9.0.881](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.9.0.881)
    - debugging iframe issue with custom protocol handler, reported [upstream bug in Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=1603737)
    - stable release: [v2.10.0](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.10.0)
  - go-libp2p-core: [feat: support encoding/decoding peer IDs as CIDs _in text_](https://github.com/libp2p/go-libp2p-core/pull/41)
  - cidv1b32:
    - go-ipfs: [discussing new config for gateway functionality](https://github.com/ipfs/go-ipfs/pull/6096#issuecomment-564939993)
    - in-web-browsers: [docs: add test for ipfs:// origin isolation](https://github.com/ipfs/in-web-browsers/pull/156)
    - ipfs/public-gateway-checker: [feat: add public subdomain gateways and Origin check](https://github.com/ipfs/public-gateway-checker/pull/78)
  - Other
    - [Design Review for ipfs/docs/405](https://github.com/ipfs/docs/issues/405#issuecomment-564310469)
    - [Unspooling current MetaMask use of our gateways](https://github.com/ipfs/infra/issues/493#issuecomment-563406087)
    - Feedback for https://www.transifex.com/ipfs/public/
    - Review: [js-ipfs-http-client async iterables refactor](https://github.com/ipfs/js-ipfs-http-client/pull/1183#pullrequestreview-331883544)
- Next:
  - handle the security thing
  - finish webui test matrix PR

@hugomrdias
- Done:
  - ipfsd-ctl 1.0.0 released
  - Reduce bundle size in bitswap ipfs/js-ipfs-bitswap#203 https://github.com/ipfs/js-ipfs-bitswap/pull/203
  - Release ipfs-utils 0.5.0 and backport unixfs 1.5 changes to 0.4.1
  - Released aegir 20.5.0 https://github.com/ipfs/aegir/releases/tag/v20.5.0
  - dedupe tests
    - https://github.com/ipfs/interface-js-ipfs-core/pull/573
    - https://github.com/ipfs/js-ipfs-http-client/pull/1200
    - https://github.com/ipfs/js-ipfs/pull/2669
- Blocked:
  - dedupe PRs need to be merged
- Next:
  - Improve js-ipfs cli tests
  - Review async/await PRs

@Stebalien
- Done:
  - Testground work
  - Reviews
  - Finished the switch from /ipfs to /p2p mutliadd
  - Fixed a bunch of bugs
- Next:
  - Finish shipping testground work.
  - Review bitswap patches
  - Plan out path for improving content routing
  - Review gateway subdomain proposal
  
@alanshaw
- Done:
  - Many many js-ipfs and js-ipfs-http-client async/await PRs https://github.com/ipfs/js-ipfs/pulls?utf8=%E2%9C%93&q=is%3Apr+async%2Fawait+
- Next:
  - Get async/await merged
  - Get UnixFSv1.5 merged
  - Pre-release js-ipfs 0.41
  
