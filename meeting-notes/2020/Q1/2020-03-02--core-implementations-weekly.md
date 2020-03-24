# 🚀 IPFS Core Implementations Weekly Sync 🛰 March 02, 2020

- **Lead:** @stebalien
- **Notetaker:** @jacobheun
- **Attendees:**
  - @alanshaw
  - @ribasushi
  - @vasco-santos
  - @johnnymatthews
  - @aschmahmann
  - @stebalien
  - @lidel
  - @achingbrain
- **Recording:** https://youtu.be/mSUqOGOmkJ4

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
@stebalien / @achingbrain

- go-ipfs 0.5.0 on the way
  - Missing components
    - Peerstore changes
    - Noise
  - Final stages
    - QUIC
    - Bootstrapper migration
    - Gateway Subdomain Proxy
  - https://github.com/ipfs/go-ipfs/issues/6776
  
- js-ipfs 0.42 is upcoming
  - https://github.com/ipfs/js-ipfs/issues/2808

#### Upgrade Testing Infra/Process
@nonsense / @raulk

- 0.2.0 launched today.
    - https://github.com/ipfs/testground/releases/tag/v0.2.0


#### Content Routing
@stebalien / @raulk / @dirkmc / @aschmahmann / @jacobheun / @alanshaw / @willscott / @aschmahmann

- Two weeks left until the 1st RC of 0.5!
- Added an issue to include support for running both [Public and Private DHTs](https://github.com/libp2p/go-libp2p/issues/803)
  - We are looking to land this in 0.5 to avoid breaking private networks
- Discovered an issue with Signed Peer Records around needing to support dialing unsigned addresses, such as locally provided addresses. Need support for address origin, see the [proposal issue](https://github.com/libp2p/go-libp2p/issues/804) for more details
- Reliable AutoNat work is progressing well, there are a few issues that need review
- Routing Table improvements as part of [go-libp2p#779](https://github.com/libp2p/go-libp2p/issues/779) are on track
- Backwards compat support for older dht nodes, ["Multiple DHTs"](https://github.com/libp2p/go-libp2p/issues/780) should be finishing up this week

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- go-ipfs: [got proxy tunneling (HTTP Proxy mode starting with `CONNECT`) working in subdomain gateway feature PR](https://github.com/ipfs/go-ipfs/pull/6096#discussion_r385307684)
  - next: address review notes + land remaining DNSLink tests

#### Bitswap Updates
@dirkmc

- [Path to 0.5](https://github.com/ipfs/go-ipfs/issues/6782)
- Fixed [bug](https://github.com/ipfs/go-bitswap/pull/272) with determining if any peers have blocks on peer disconnect
- Implemented optimization to [prune peers](https://github.com/ipfs/go-bitswap/commit/4d2bdc274b4862e835d058646d8d828d3631150c) that send to many DONT_HAVE reponses in a row
- js-ipfs-bitswap server side implementation of HAVE / DONT_HAVE messages [close to being merged](https://github.com/ipfs/js-ipfs-bitswap/pull/211)


#### Stream Content-Based-Chunking Research/Improvements (go-ipfs / js-ipfs)
@ribasushi
- Continue getting to dagger 0.1. Remaining pieces for this week
  - More tests around stacked chunkers ( corner cases do not work as expected )
  - Implement simpler recursion-less trickle linker ( has implication for stat-keeping)
  - .car output
    - Potentially take .car import/export in go-ipfs

#### Stardust transport/discovery
@vasco-santos

- Will improve browser connectivity for `js-ipfs`. Replacing deprecated `websocket-star`.
- @mkg20001 libp2p-stardust implementation rewritten with async and using the new connection, transport and discovery interfaces
  - [libp2p/js-libp2p-stardust#14](https://github.com/libp2p/js-libp2p-stardust/pull/14)
  - Initial review addressed


### Other Initiatives

This is the backlog of initiatives that are either on-hold or low-priority.

#### UnixFS v1.5 (go-ipfs / js-ipfs)
@achingbrain / @ribasushi


#### Add Performance (js-ipfs)
@achingbrain


#### Distributed Signaling (js-libp2p)
@jacobheun

- Spec development will resume in Q2


#### Migration to multihash keys in blockstore (js-ipfs / go-ipfs)
@hsanjuan

### Design Review Proposals
> You want to propose something for design review.

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

- The PeerStore updates will result in a cascade of updates needing to happen, will this be finished soon?
  - We're not sure. @Stebalien is going to review this week to see what we can reasonably get implemented before 0.5 and what we need to punt. We may need to bump the protocol version again for the DHT if we need to punt, but this shouldn't be a huge issue.

### Questions
> You have questions and need them answered. List them here.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟 

@vasco-santos:
- Done:
  - addressed stardust review
    - [libp2p/js-libp2p-stardust#14](https://github.com/libp2p/js-libp2p-stardust/pull/14)
  - updated docs website `js-libp2p` tutorial with new release content
    - [libp2p/docs#78](https://github.com/libp2p/docs/pull/78)
  - miscellaneous small PRs and reviews
    - [libp2p/js-libp2p-websockets#107](https://github.com/libp2p/js-libp2p-websockets/pull/107)
    - [libp2p/js-libp2p-websockets#106](https://github.com/libp2p/js-libp2p-websockets/pull/106)
    - [libp2p/js-libp2p#572](https://github.com/libp2p/js-libp2p/pull/572)
  - started creating epic issues for `js-libp2p` on the way to start using zenhub
    - [libp2p/js-libp2p#571](https://github.com/libp2p/js-libp2p/issues/571)
    - [libp2p/js-libp2p#576](https://github.com/libp2p/js-libp2p/issues/576)
- Blocked: N/A
- Next:
  - Get stardust refactor merged
    - [libp2p/js-libp2p-stardust#14](https://github.com/libp2p/js-libp2p-stardust/pull/14/)
  - Continue dsystems cohort
  - Create remaining epic issues

@jacobheun
- Done:
  - Finished up some reviews I was blocking on
  - Fixed a [flakey disco test](https://github.com/libp2p/js-libp2p/pull/574) in js-libp2p
  - Support for noise go/js interop work
- Blocked: N/A
- Next:
  - Create Docker Hub builds for webrtc-star to unblock infra on getting a new server deployed
  - Improved interop tests focused on XX handshake for libp2p noise
  - Finish adding remaining Epics for go-ipfs 0.6

@dirkmc
- Done:
  - Fixed [bug](https://github.com/ipfs/go-bitswap/pull/272) with determining if any peers have blocks on peer disconnect
  - Implemented optimization to [prune peers](https://github.com/ipfs/go-bitswap/commit/4d2bdc274b4862e835d058646d8d828d3631150c) that send to many DONT_HAVE reponses in a row
- Next:
  - [Remove unresponsive peers from sessions](https://github.com/ipfs/go-bitswap/issues/258)

@lidel
Done:
- subdomain gateways 
    - go-ipfs: got proxy tunneling working in [subdomain gateway feature](https://github.com/ipfs/go-ipfs/pull/6096)
  - in-web-browsers 
    - Published a draft of Targeted Grant:
      [Native Protocol Handler API for Browser Extensions](https://github.com/ipfs/devgrants/pull/30)
  - ipfs-companion
    - [AMO review](https://github.com/ipfs-shipyard/ipfs-companion/issues/851) (wip)
    - [Chrome Web Store review](https://github.com/ipfs-shipyard/ipfs-companion/pull/849) 
      - released [v2.10.0.889](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.10.0.889) (passed)
  - distributed-wikipedia-mirror
    - reviewing / guiding [PR with new build scripts](https://github.com/ipfs/distributed-wikipedia-mirror/pull/70#issuecomment-591987481)
  - other
    - ipfs team week backlog 
    - collab calls: prep/admin
- Next:
  - address subdomain PR review + land dnslink tests
  - ipfs-companion fixes related to AMO review

@aschmahmann
- Done:
  - LAN/VPN DHT discussions with @stebalien. Have an action plan that is underway (https://github.com/libp2p/go-libp2p/issues/803)
  - Went over short-term DHT improvements with @daviddias, more this week
- Ongoing:
  - Move relevant DHT changes from stabilize go-libp2p-kad-dht branches (and the efficient query branch) into new branches based off of master
    - While doing this have been tackling https://github.com/libp2p/go-libp2p/issues/803
- Next:
  - DHT upgrade path (https://github.com/libp2p/go-libp2p/issues/780)
  - Rework testground tests to take into account new DHT changes

@alanshaw
- Done:
  - Mostly been training to be a golang developer
- Next:
  - Continue training
  - Designs for some DHT testground tests

@achingbrain
- Done:
  - Most of DistEng day 0
  - Merging repos
- Blocked:
  - N/a
- Next:
  - Finish merging repos
  - Update existing PRs
  - Start making API calls cancellable

@Stebalien
- Done:
  - Reviews, design and otherwise.
  - Debugging DHT deadlock issues.
- Next:
  - Make sure nothing is stuck as we get down to the wire for the 0.5.0 release
    - Peerstore
    - QUIC
    - NOISE
    - Bootstrapper migration
    - CIDv1 Gateway
    - Comms
