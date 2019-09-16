# 🚀 IPFS Core Implementations Weekly Sync 🛰 Sep 9, 2019

- **Lead:** @stebalien
- **Notetaker:** @jacobheun
- **Attendees:**
    - @hacdias
    - @stebalien
    - @jacobheun
    - @olizilla
    - @lidel
    - @dirkmc
    - @molly
    - @achingbrain
    - @aschmahmann
    - @djdv
- **Recording:** ??

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

- @alanshaw - js-ipfs release process has been merged.
  - dogfooding this right now! feature freeze is in place! Alex is trying to automate the first few steps now
- @alanshaw - some tweeks to the go-ipfs release process have landed
  - open a new release issue when closing the previous one.
  - give an estimated release date.

#### Upgrade Testing Infra/Process
@jimpick / @stebalien / @alanshaw

- Alan has reviewed the benchmarks PR

#### Garbage Collection and Pinning (js-ipfs)
@alanshaw

- Merged & tagged for release in js-ipfs@0.38.0

#### Gossipsub (js-libp2p)
@vasco-santos

- Decisions:
  - No longer experimental (defacto).
  - Enable by default (better UX, minimal impact)
  - Configured with Pubsub.Enabled (config value)
  - Flag will be deprecated and ignored.
- Merged & enabled by default in js-ipfs@0.38.0

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- applied suggested changes, PR ready for final review: [RFC 0001: Text Peer Ids as CIDs](https://github.com/libp2p/specs/pull/209)

Please take a look if you are interested in peerIDs as CIDv1 and the new RFC process!

#### Distributed Signaling (js-libp2p)
@jacobheun

- Hit a roadblock with needing to update libp2p-switch dialing logic, related to [js-libp2p#451](https://github.com/libp2p/js-libp2p/issues/451)
- Pausing on this to focus on js-libp2p async refactor work to get everything else unblocked.

#### IPNS (js-ipfs / go-ipfs)
@aschmahmann

- IPNS over PubSub
  - libp2p Discovery utilities needed to make things usable [go-libp2p#707](https://github.com/libp2p/go-libp2p/issues/707)
  - 2 PRs out [libp2p/go-libp2p-discovery#26](https://github.com/libp2p/go-libp2p-discovery/pull/26), [libp2p/go-libp2p-discovery#27](https://github.com/libp2p/go-libp2p-discovery/pull/27)
  - Updated [libp2p/go-libp2p-discovery#184](https://github.com/libp2p/go-libp2p-pubsub/pull/184) to utilize latest changes, still needs a bit of work

- IPNS over DNS
  - Hammered out some details, @hugomrdias will be working on spec

#### Migration to multihash keys in blockstore (js-ipfs)
@alanshaw/@auhau

#### Package Managers Updates
@dirkmc / @adin / @djdv

#### Bitswap Updates
@dirkmc / @stebalien

* @stebalien - better connection tagging/management logic. It "does it's job" but I'll need help testing this in production.

#### js-ipfs/js-libp2p/js-ipld async await refactor
@alanshaw

* @alex - files added through async iterators
  - removed code!
  - faster than go! (sometimes)
  - ipfs.add(string)

Tracking issue: [js-ipfs#1670](https://github.com/ipfs/js-ipfs/issues/1670)

### Design Review Proposals
> You want to propose something for design review.

- None

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

- Bifrost/infra help on testing bitswap connmanager logic improvements
- Pinning issue: https://github.com/ipfs/go-ipfs/issues/6534
  - we aren't returning some pins we should - recent issue only in master
  - Adin will get a braindump on this later today!
  - Dirk volunteers to review

### Questions
> You have questions and need them answered. List them here.

- do we have any IPC things for windows?
  - you can add a plugin on windows and make, but can't do dynamically on runtime
  - or use the http-api

### Parking Lot

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
  - Working on [Bitswap PoC](https://github.com/ipfs/go-bitswap/pull/189)
  - Created [Bitswap presentation](https://docs.google.com/presentation/d/1mbFFGIIKNvboHyLn-k26egOSWkt9nXjlNbxpmCEQfqQ/edit?usp=sharing) (how it works, changes we're making)
- Next:
  - Continue with Bitswap PoC

@hacdias
- Done:
  - (IPFS Desktop) released [v0.9.0](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.9.0)
  - (IPFS Web UI) released [v2.5.2](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1098)
    - [fix: browse is now the default button](https://github.com/ipfs-shipyard/ipfs-webui/pull/1145)
  - (IPFS Desktop) released [v0.9.1](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.9.1)
    - [fix: fail silently 'IPFS' on path auto action](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1095)
    - [fix: allow multiple gateway and api ports](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1092)
- Next:
  - (IPFS Desktop & Web UI) get analytics for IPFS Desktop working. These PRs are working, although I will try a simpler solution where we won't need to have Countly on IPFS Desktop.
    - https://github.com/ipfs-shipyard/ipfs-desktop/pull/1068
    - https://github.com/ipfs-shipyard/ipfs-webui/pull/1136
  - Web UI: notify users when toggling Desktop options fails
  - Write more thorough tests for IPFS Desktop
  - Tackle some IPFS Deploy issues

@lidel
- Done:
  - ipfs/js-ipfs: [fix: limit concurrent HTTP requests in browser](https://github.com/ipfs/js-ipfs/pull/2304)
  - Embedded js-ipfs in Brave:
    - fixed build under regular Chrome and Firefox: [chrome-dgram/pull/16](https://github.com/feross/chrome-dgram/pull/16)
    - wip: [TCP client in Brave](https://github.com/ipfs-shipyard/ipfs-companion/pull/754)
      - got working TCP transport (as a client)
      - got working DNS discovery and confirmed interop with go-ipfs (as a client)
  - Discussion on [Content Type set by HTTP Gateway](https://github.com/ipfs/in-web-browsers/issues/152)
  - onboarding myself to ipfs/distributed-wikipedia-mirror project, [issue grooming](https://github.com/ipfs/distributed-wikipedia-mirror/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) + plan to update snapshots ([researching automation](https://github.com/ipfs/distributed-wikipedia-mirror/issues/58) +  [prioritizing English one](https://github.com/ipfs/distributed-wikipedia-mirror/issues/61))
- Blocked:
  - https://github.com/libp2p/specs/pull/209
- Next:
  - Review, merge PRs, release new ipfs-companion to beta
  - Understand DHT situation and impact on preload/delegate node infrastructure
  - Announce own multiaddr + accept incoming TCP connections in Brave
  - distributed-wikipedia-mirror: take a stab at [snapshot creation process](https://github.com/ipfs/distributed-wikipedia-mirror/issues/61)   using a small subset of pages (eg. https://ftp.fau.de/kiwix/wp1/enwiki_2019-08/projects/Cats)

@jacobheun
- Done:
  - js-multiaddr will now use `/p2p` instead of `/ipfs` by default [js-multiaddr#97](https://github.com/multiformats/js-multiaddr/pull/97)
  - Started work on js libp2p Switch update for the async await refactor. Working on an Upgrader for transports to use, similar to go-libp2p, which should improve dialing logic
- Blocked:
- Next:
  - libp2p async iterators
    - get `interface-connection` done and merged
    - get `libp2p-mplex` done and merged
    - get `libp2p-tcp` done and merged
    - get `interface-stream-muxer` done and merged

@djdv:
 - no change / updates
