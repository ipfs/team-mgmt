# 🚀 IPFS Core Implementations Weekly Sync 🛰 July 29, 2019

- **Lead:** @stebalien
- **Notetaker:**
- **Attendees:**
  - @jacobheun
  - @auhau
  - @djdv
  - @dirkmc
  - @hugomrdias
  - @hannahhoward
  - @vasco-santos
  - @jimpick
  - @mburns
  - @alanshaw
  
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

#### Upgrade Release Process (go-ipfs)
@stebalien

- Hitting stage 3 today
- No progress yet on a blog post

#### Upgrade Testing Process (go-ipfs)
@stebalien

- Nothing new (well, interop tests are now fixed modulo a bug in go-ipfs master)

#### Benchmarks (js-ipfs/go-ipfs)
@alanshaw

https://benchmarks.ipfs.team was resurrected

https://github.com/ipfs/benchmarks/

Overview: https://www.youtube.com/watch?v=rG3bEH6Ijgo

Next steps: Get it useful for go-ipfs (@alanshaw)

#### Garbage Collection and Pinning (js-ipfs)
@dirkmc/@alanshaw

- PR is still outstanding, call for other humans to help pick this up if they're interested!

#### Delegated Routing (js-ipfs)

- @lidel, @alanshaw, @jacobheun:
  - [HTTP exhaustion solved by throttling concurrent delegate requests](https://github.com/libp2p/js-libp2p-delegated-content-routing/issues/12)
    - fixes were backported to 0.2.x and released, can be used with older js-ipfs/js-libp2p:
        - [js-libp2p-delegated-content-routing/pull/17](https://github.com/libp2p/js-libp2p-delegated-content-routing/pull/17)
        - [js-libp2p-delegated-peer-routing/pull/13](https://github.com/libp2p/js-libp2p-delegated-peer-routing/pull/13)
 - @hugomrdias suggested another optimization: enable http/2 on preload/delegate nodes we provide: [ipfs/infra/issues/489](https://github.com/ipfs/infra/issues/489)


#### Gossipsub (js-libp2p)
@vasco-santos

Blocked on new release of `gossipsub`
- https://github.com/ChainSafe/gossipsub-js


- [libp2p/js-libp2p#365](https://github.com/libp2p/js-libp2p/pull/365)
- [ipfs/js-ipfs#2298](https://github.com/ipfs/js-ipfs/pull/2298)

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- @stebalien - need feedback from the rest of the libp2p team on converting peerids to cids https://github.com/libp2p/go-libp2p-core/pull/41

#### Repo Consolidation (js-libp2p)
@jacobheun

- Started with port of libp2p-switch into the libp2p repo [js-libp2p#388](https://github.com/libp2p/js-libp2p/pull/388)
  - This will pollute the libp2p commit history with switch commits but allows us to maintain contributor history. Left some thoughts there on mitigating this.
- Working on the combined interfaces repo https://github.com/jacobheun/js-interfaces. Trying to avoid antipattern imports for this. The interfaces include source code and test suites, looking to avoid unnecessary dependency bundling.

#### Distributed Signaling
@jacobheun

Currently webrtc signaling is done via a central signaling server, we would like to move to a more distributed approach [libp2p/spec#159](https://github.com/libp2p/specs/pull/159). One such approach being discussed is to leverage a relay connection to perform an SDP exchange to upgrade to a direct webrtc connection.

Next steps:
- Create a proof of concept of the SDP Exchange over a circuit relay
- Flush out the signaling spec

#### IPNS
@aschmahmann

Still working on pubsub PRs (thanks @Stebalien for the helpful reviews ❤️).
  - go-libp2p-pubsub [PRs](https://github.com/ipfs/go-ipfs/issues/6447)
    - will end up with PeerJoin/Leave notifications
    - will end up with Peer Discovery being called internally. Individual routers may/may not need to have built-in discovery parameters (like how many peers they want, or how often to check)
    - is considering both topic-wide configurations as well as publishing options
  - go-libp2p-pubsub-router
     - PR [go-libp2p-pubsub-router#33](https://github.com/libp2p/go-libp2p-pubsub-router/pull/33) basically done (although blocked by the pubsub PRs)
     - Was decided by libp2p team that this should have a custom protocol for asking for the latest state of a chanel (instead of utilizing pubsub)

When do we need this in JS?  
@hugomrdias: after gossipsub and ipns-over-dns lands maybe. (probably only next quarter) 

Moving namesys code into `go-namesys` unless there are any objections [go-ipfs#6537](https://github.com/ipfs/go-ipfs/issues/6537)

@hugomrdias @djdv IPNS over DNS Status
  - (Go) needs some cross-project clarity to move forward. Work is at https://github.com/ipfs/go-libp2p-dns-router
  - (JS) PRs still being cleaned up/finished. Epic issue [js-ipfs#2000](https://github.com/ipfs/js-ipfs/issues/2000)
  - Spec discussion for dealing multiple routers https://github.com/ipfs/specs/issues/198
  
Need cleanup/clarification of IPNS spec (https://github.com/ipfs/specs/issues/205)

#### Migration to multihash keys in datastore (js-ipfs)
@alanshaw/@auhau

https://github.com/ipfs/js-ipfs-repo-migrations/pull/1

Currently CID is used as key in repo's datastore. This is an issue because of different base* encodings, which leads to data duplication.
It is currently hacked around, but better solution would be to use CID's multihash as a keys. 

Needed steps: create a migration to change datastore's keys; bump repo's version; update `js-ipfs-repo` to incorporate this change.

Any potential problems? What is `go-ipfs` stance on this? Should there be similar change there?
 - go-ipfs wants to do this - @stebalien
 - issue 1: `ipfs refs local` which is expected to return CIDs.
 - issue 2: provider records need to use raw multihashes.

### Design Review Proposals
> You want to propose something for design review.

- @lidel: in an effort to remove confusion when native protocol handlers start to land in web browsers, proposed to use  `ipfs://{fqdn-with-dnslink}` as the URL for "ipfs websites" 
   (details/discussion: [ipfs/in-web-browsers/pull/150](https://github.com/ipfs/in-web-browsers/pull/150))
   - Attendees (DRI: @stebalien):
     - @stebalien
     - @lidel
     - @aschmahmann
     - @djdv (maybe)
     - @alanshaw
- @stebalien: final decision on .eth TLD for DNSLINK. https://github.com/ipfs/go-ipfs/pull/6448
   - Attendees (DRI: @stebalien):
     - @stebalien
     - @alanshaw
     - @aschmahmann
     - @lidel

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

### Questions
> You have questions and need them answered. List them here.

### Parking Lot

- hannah - question on multibase
  - weird 0 should be in the ipld-cbor spec
  - please explain WHY this is the case - Hannah make a PR to the cbor spec or bug warpfork to update this to be clearer
- windows testing
  - go-libp2p doesn't
  - js-libp2p now uses azure (for windows only)
  - resolution:
    - CircleCI (or double check - DRI: @stebalien)
    - Enable tests on windows.
    - Switch from travis.

### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟


@alanshaw
- Done:
    - Worked on dream code for [`it-multistream-select`](https://github.com/alanshaw/it-multistream-select/pull/1)
    - Resurrected `benchmarks.ipfs.team`
    - Documented how to add an interface test to `ipfs-http-client` [#1058](https://github.com/ipfs/js-ipfs-http-client/pull/1058)
    - Reviews to fix up backports for too many requests for `libp2p-delegated-*-routing` (no recursive `refs` call, remove `swarm.connect` calls) [#17](https://github.com/libp2p/js-libp2p-delegated-content-routing/pull/17) [#13](https://github.com/libp2p/js-libp2p-delegated-peer-routing/pull/13) thanks @lidel ❤️
    - Fix to disable socket timeout for `pubsub.sub` [#2303](https://github.com/ipfs/js-ipfs/pull/2303)
    - Worked on getting pubsub in browsers working in `ipfs-http-client` [#1059](https://github.com/ipfs/js-ipfs-http-client/pull/1059)
    - WIP converting `ipfs.add` in `ipfs-http-client` to use `fetch`
- Next:
    - Make `benchmarks.ipfs.team` useful for `go-ipfs`
    - Get pubsub in the browser code mergable


@lidel

- Done:
  - feat(brave): delegated peers and content routing ([ipfs-companion/pull/739](https://github.com/ipfs-shipyard/ipfs-companion/pull/739)
    - backported fixes on 0.2.x branch for older js-ipfs/js-libp2p:
        - [js-libp2p-delegated-content-routing/pull/17](https://github.com/libp2p/js-libp2p-delegated-content-routing/pull/17)
        - [js-libp2p-delegated-peer-routing/pull/13](https://github.com/libp2p/js-libp2p-delegated-peer-routing/pull/13)
- Next:
  - Finish [http request optimizations in js-ipfs](https://github.com/ipfs/js-ipfs/pull/2304)
  - Release Companion with above fixes for Brave


@jacobheun
 - Done:
   - Fix pubsub.subscribe not using the correct ipfs interface [js-libp2p#389](https://github.com/libp2p/js-libp2p/pull/389)
   - Opened issue for tracking next release of [libp2p@0.26.0](https://github.com/libp2p/js-libp2p/issues/387)
   - Finished up the libp2p promisify PR @achingbrain created [js-libp2p#381](https://github.com/libp2p/js-libp2p/pull/381)
 - Blocked:
   - N/A
 - Next:
   - Finish pulling in the core js-libp2p modules into js-libp2p
   - Finish pulling the interfaces into 1 repo
   - Create a PR for js-ipfs to start updates for the upcoming libp2p release
   - Work on a POC of signaling over a relay

@stebalien
 - Done:
   - Reviews, misc changes.
   - Fixed multiple issues in the go-ipfs writable gateway to prepare for extraction of the gateway https://github.com/ipfs/go-ipfs/pull/6539.
   - fixed an issue in go-libp2p where the connection manager may cut useful connections https://github.com/libp2p/go-libp2p-connmgr/pull/50
   - updated deps in https://github.com/ipfs/distributions (fixed security warnings, removed yarn dep)
   - fixed net/openbsd builds of go-ipfs.
   - started /ipfs -> /p2p switch.
     - Tracked in https://github.com/libp2p/libp2p/issues/79
 - Blocked:
   - Decision on https://github.com/libp2p/go-libp2p-core/pull/41
 - Next:
   - Release process blog post
   - More reviews. Lots of reviews in libp2p land.

@dirkmc
 - Done:
   - Performance testing for `ipfs add`: [go-ipfs#652](https://github.com/ipfs/go-ipfs/issues/6523)
 - Blocked:
   - Unsure whether to continue with js-ipfs [Garbage Collection work](https://github.com/ipfs/js-ipfs/pull/2022) as there are other higher priority tasks

@vasco-santos
  - Done:
    - Gossipsub integration
      - [ChainSafe/gossipsub-js#39](https://github.com/ChainSafe/gossipsub-js/pull/
      - Add support for self subscribed handler [ChainSafe/gossipsub-js#40](https://github.com/ChainSafe/gossipsub-js/pull/40)
      - [ChainSafe/gossipsub-js#41](https://github.com/ChainSafe/gossipsub-js/pull/41)
      - [libp2p/js-libp2p-floodsub#85](https://github.com/libp2p/js-libp2p-floodsub/pull/85)
      - [libp2p/js-libp2p#365](https://github.com/libp2p/js-libp2p/pull/365)
      - [ipfs/js-ipfs#2298](https://github.com/ipfs/js-ipfs/pull/2298)
    - `interface-connection` refactor
      - [libp2p/interface-connection#29](https://github.com/libp2p/interface-connection/pull/29)
      - (WIP) Tests with `it-mplex`
    - Meeting regarding libp2p introspection
  - Blocked:
    - Need ChainSafe to release new version of gossipsub to get `js-libp2p` and `js-ipfs` PRs ready
  - Next:
    - Get Gossipsub PR's updated with new release version
    - Continue `interface-connection` PR work
    - Async for:
      - `js-libp2p-webrtc-direct`
      - `js-libp2p-webrtc-star`
      - `js-libp2p-pnet`

@aschmahmann
  - On-going:
      PubSub PRs (https://github.com/ipfs/go-ipfs/issues/6447). Nearing the end :)
  - Next:
      Split out namesys from go-ipfs

@djdv
 - Done:
   - Prototyping around go-ipfs daemon 9p resource server plugin
     - Status update will be posted in here later: https://github.com/ipfs/package-managers/issues/74
 - Blocked:
   - N/A
 - Next:
   - push 9P prototype further; create some kind of useful ipfs-mount client program that uses ipfs node's 9P server
   - talk to people about IPNS over DNS (over HTTPS also maybe)

@hannahhoward
 - Done:
   - much progress on filecoin graphsync integration
 - Blocked:
    - n/a
 - Next:
    - get this integration done!

@name
 - Done:
   - What have you accomplished since the last Weekly?
 - Blocked:
   - Were there any blockers? If so, which ones? Is it still blocked? Why?
 - Next:
   - What is the next important thing you should focus on?
