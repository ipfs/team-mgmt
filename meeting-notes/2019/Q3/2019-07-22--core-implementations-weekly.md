# 🚀 IPFS Core Implementations Weekly Sync 🛰 July 22, 2019

- **Lead:** @stebalien
- **Notetaker:**
- **Attendees:**
  - @yourname
  - @stebalien
  - @momack2
  - @dirkmc
  - @hannahhoward
  - @jimpick
- **Recording:** https://youtu.be/mqnz0Sctb-E

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
@stebalien
- Stage 2 started - https://github.com/ipfs/go-ipfs/issues/6506
  - Early testers are testing in dev deployments
  - aiming to enter stage 3 next week

#### Upgrade Testing Process (go-ipfs)
@stebalien
- The testing team now has regular meetings (Wednesday, 8AM PST)
- Alan is reviving https://github.com/ipfs/benchmarks
- Raul done some architecture design
- Jim has some ux mockups https://github.com/ipfs/canary-testing/issues/1#issuecomment-512631056

#### Garbage Collection and Pinning (js-ipfs)
@dirkmc

A first pass implementation is (even more) nearly ready to add garbage collection to js-ipfs https://github.com/ipfs/js-ipfs/pull/2022.

- In the browser LRU eviction happens on origin basis
    - `ipfs.io/ipfs/Qm...` - lose everything
    - `Qm...ipfs.dweb.link` - more granular (still in origin group)
- There's a browser API for estimating storage remaining
- There's a browser API for your web app to request PERMENANT storage
- Current issue is potential out of memory issues

**Next step**: merge current PR and iterate to stream not buffer :)

#### Delegated Routing (js-ipfs)
@lidel

i.e. Get someone else to find your peers and your content

- Important for JS IPFS because, no DHT, same origin policy.
- nice stopgap for brave integration until we have content routing
- some local changes to PR to improve over swarm connecting constantly

2 Modules:
- https://github.com/libp2p/js-libp2p-delegated-peer-routing
- https://github.com/libp2p/js-libp2p-delegated-content-routing

**Next step**: @alanshaw still needs to look into:

- we need people to be able to expose commands on Gateway port via `Gateway.APICommands` which is not wired to anything in go-ipfs right now:
    - Context: https://github.com/ipfs/js-ipfs/issues/2155
    - Problem: https://github.com/libp2p/js-libp2p/pull/371#pullrequestreview-255991314
- mitigate request flood producing pending requests in web browser context https://github.com/libp2p/js-libp2p-delegated-content-routing/issues/12
  - @lidel will PR some local patches that improve things significantly when running js-ipfs in Brave 

#### Gossipsub (js-ipfs)
@vasco-santos

JS implementation of gossipsub landing in the next release of `js-libp2p`
- https://github.com/libp2p/js-libp2p/pull/365
- https://github.com/libp2p/js-libp2p-daemon/pull/19
- https://github.com/libp2p/interop/pull/17

Finishing up interop tests for go and js

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

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
  - confirmed Origins are separate
- Encoding peer IDs as CIDs https://github.com/libp2p/go-libp2p-core/pull/41
  - would like libp2p folks to look at this. would like to do it lower

#### Repo Consolidation (js-libp2p)
@jacobheun

To help with Contributor Enablement we are merging related repositories together. Per [ipfs/js-ipfs#2222](https://github.com/ipfs/js-ipfs/issues/2222)
- [js libp2p core modules](https://github.com/libp2p/js-libp2p/issues/384)
- [js libp2p interfaces](https://github.com/libp2p/js-libp2p/issues/383)
  - Starting with interfaces as this will be the least disruptive change
  
in go - have *all* interfaces in core - naming around "core" is concerning - will just be named "js-libp2p", separate from js-libp2p-interfaces


#### IPNS
@aschmahmann
  - On-going:
    - Pushing through outstanding PubSub-over-IPNS PRs
      - Progress tracked at: https://github.com/ipfs/go-ipfs/issues/6447 (4 PRs currently)
 - Next:
   - Figure out what Package Manager team wants from IPNS in the near-medium term
   - IPNS features/improvments we neglected while IPNS was slow:
     - e.g. IPNS local pinning (e.g. https://github.com/ipfs/go-ipfs/issues/4435)
     - Splitting IPNS from IPFS is some way so it can be used independently
   - Go-JS feature parity within IPNS

- next - features of IPNS we neglected because it was slow (ex local pinning)

🛑 Blocked:
- Mostly need @Stebalien from IPFS and @vyzo/@raulk from libp2p

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

- I'm filling my Monday with 1:1 syncs. If you want one, please ping me - @stebalien
- Is there a js-bitswap person? I met them at team week. Do they need my assistance and/or time? - @hannahhoward
  - dirk is the repo maintainer, making the connection to hannah =]


### Questions
> You have questions and need them answered. List them here.

### Parking Lot

- I just want to let folks know Graphsync + IPLD Selectors are done-ish and I'm excited about that - @hannahhoward

### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟

@name
 - Done:
   - What have you accomplished since the last Weekly?
 - Blocked:
   - Were there any blockers? If so, which ones? Is it still blocked? Why?
 - Next:
   - What is the next important thing you should focus on?

@alanshaw
 - Done:
   - Released JS IPFS `v0.37.0-rc.0` 🎊
      - Wrote up highlights for [0.37 release](https://github.com/ipfs/js-ipfs/issues/2192)
   - Fixed browser video streaming example [#2267](https://github.com/ipfs/js-ipfs/pull/2267)
   - Reviewed [Spec Maintainer Protocol](https://github.com/ipfs/specs/pull/214)
   - Wrote up notes on 2 hop bitswap [#386](https://github.com/ipfs/notes/issues/386)
   - Merged ready promise PR [#2094](https://github.com/ipfs/js-ipfs/pull/2094)
   - Reviewed and merged PRs to fix setting config values [#2253](https://github.com/ipfs/js-ipfs/pull/2253) and [#2270](https://github.com/ipfs/js-ipfs/pull/2270)
   - Sent PR to throw a better error for missing crypto [#157](https://github.com/libp2p/js-libp2p-crypto/pull/157)
   - Fixed 3 windows envs in CI [#2272](https://github.com/ipfs/js-ipfs/pull/2272)
   - Opened issue to solve peer friends need [#2288](https://github.com/ipfs/js-ipfs/issues/2288)
   - Submitted PR for breaking `err-code` update [#2287](https://github.com/ipfs/js-ipfs/pull/2287)
   - Investigated issue with `async@3` + browserify [#2283](https://github.com/ipfs/js-ipfs/issues/2283)
   - Added `--long` option to Go IPFS `files.ls` https://github.com/ipfs/go-ipfs/pull/6528
 - Next:
   - Fix up `benchmarks.ipfs.team` (https://github.com/ipfs/benchmarks)
   - Get interop tests working with 0.37
   - PRs I need to look at/complete:
       - GC: https://github.com/ipfs/js-ipfs/pull/2022
       - Locking for pin operations: https://github.com/ipfs/js-ipfs/pull/2174
       - Offline blockstore for pins: https://github.com/ipfs/js-ipfs/pull/2196
       - Improve pin perf: https://github.com/ipfs/js-ipfs/pull/2198

@vasco-santos (not attending)
- Done:
  - new iteration on `interface-connection` refactor
    - [libp2p/interface-connection#29](https://github.com/libp2p/interface-connection/pull/29)
    - Usage on:
      - [libp2p/js-libp2p-tcp#109](https://github.com/libp2p/js-libp2p-tcp/pull/109)
      - [libp2p/js-libp2p-websockets#88](https://github.com/libp2p/js-libp2p-websockets/pull/88)
  - IPFS interop fixes
    - [ipfs/interop#77](https://github.com/ipfs/interop/pull/77)
    - [ipfs/interop#81](https://github.com/ipfs/interop/pull/81)
  - WIP: Started integrating gossipsub on `js-ipfs`
    - `feat/gossipsub-as-default-pubsub` (github down and I cannot push it)
  - Other stuff
    - [ipfs/js-ipfs#2277](https://github.com/ipfs/js-ipfs/pull/2277)
  - Reviews on libp2p land
- Blocked:
  - N/A
- Next:
  - Finish PR for integrating Gossipsub into `js-ipfs`
  - Work on feedback from `interface-connection` PR
  - Meeting regarding libp2p introspection
  - Async for:
    - `js-libp2p-webrtc-direct`
    - `js-libp2p-webrtc-star`
    - `js-libp2p-pnet`

@jacobheun
 - Done:
   - Holiday last week
 - Blocked:
   - N/A
 - Next:
   - Work on consolidating js libp2p common repos per [js-ipfs#2222](https://github.com/ipfs/js-ipfs/issues/2222)
   - Write up the spec for AutoNat [libp2p/specs#180](https://github.com/libp2p/specs/issues/180)
   - Figure out direction for distributed signaling [libp2p/specs#159](https://github.com/libp2p/specs/pull/159)

@aschmahmann
 - Done:
   - OOO last couple weeks
 - Blocked:
   - Need review help on all the PRs referenced at https://github.com/ipfs/go-ipfs/issues/6447 (4 PRs currently)
     - Mostly need @Stebalien from IPFS and @vyzo/@raulk from libp2p
 - Next:
   - Figure out what Package Manager team wants from IPNS in the near-medium term
   - Get go-ipfs#6447 pushed further along
   - Get started on IPNS local pinning (e.g. https://github.com/ipfs/go-ipfs/issues/4435)
     - May relate to splitting IPNS from IPFS is some way so it can be used independently
   - Sync latest state on using trie-based DHT nodes in testing and/or infra

@dirkmc
  - Next:
    - Finish up JS [GC PR](https://github.com/ipfs/js-ipfs/pull/2022)
    - Performance testing for `ipfs add` to determine where blockers are: [issues/6523](https://github.com/ipfs/go-ipfs/issues/6523)

<!-- After each call, the notetaker submits a PR to ipfs/team-mgmt to store the notes on the meeting-notes folder -->


@lidel
- Done:
  - Switching IPFS Companion to use Web UI version from IPFS Node
  ([ipfs-companion/issues/736](https://github.com/ipfs-shipyard/ipfs-companion/issues/736))
   - PR: [use Web UI provided by IPFS node](https://github.com/ipfs-shipyard/ipfs-companion/pull/737)
   - PR: [opt-in for loading webui from dnslink](https://github.com/ipfs-shipyard/ipfs-companion/pull/738)
   - Concern: [How to mitigate MITM on unencrypted DNS?](https://github.com/ipfs/go-ipfs/pull/6530#issuecomment-513275280)
  - Brave
    - wip Delegated Routing (quick stopgap until we have real p2p transport)
    - Debugging performance of Delegated Routing in Brave: https://github.com/libp2p/js-libp2p-delegated-content-routing/issues/12
- Next:
 - Publish PRs to libp2p libs and js-ipfs to address throttling of HTTP requests caused by preload/delegated requests
 - Release New Companion Beta with Delegated Routing enabled

@hannahhoward
- Done:
   - IPLD Selectors & Graphsync now have a working roundtrip example! -- IPLD Selectors = mostly done! Graphysync integration w/ IPLD Selectors = working-ish
- Next:
   - Attempt to integrate Graphsync with Filecoin!
