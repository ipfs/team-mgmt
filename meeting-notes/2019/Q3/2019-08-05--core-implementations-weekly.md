# 🚀 IPFS Core Implementations Weekly Sync 🛰 Aug 5, 2019

- **Lead:** @alanshaw
- **Notetaker:** @jimpick
- **Attendees:**
    - @jimpick
    - @momack2
    - @achingbrain
    - @stebalien
    - @djdv
    - @vasco-santos
- **Recording:** https://youtu.be/ZP4-rjZy5js

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

- libp2p bounties! https://github.com/libp2p/bountied-projects
- no IPNS design review yet (no spec yet) ... alan suggested a workshop to present proposals

### Initiatives
> Update or add info on initiatives that are happening

#### Upgrade Release Process
@stebalien/@alanshaw

* @stebalien - Blog Post Draft: https://github.com/ipfs/blog/pull/266

#### Upgrade Testing Infra/Process
@jimpick/@stebalien/@alanshaw

* Work continues on test infra. Nothing new to report.

@jimpick has got go-ipfs building from master and being used in tests! \o/

Next steps:

1. Review/merge https://github.com/ipfs/benchmarks/pull/268
1. Get nightly trigger for go-ipfs working
1. Demo at [ipfs/libp2p testing weekly](https://calendar.google.com/calendar/embed?src=ipfs.io_eal36ugu5e75s207gfjcu0ae84%40group.calendar.google.com)

#### Garbage Collection and Pinning (js-ipfs)
@dirkmc/@alanshaw

Next steps:

1. Final review and merge after 0.37 release
1. Switch to streaming API - mitigates possible out of memory for large data sets
    - @vmx working on bringing in new ipfs-repo?
1. Support for GC on schedule
1. Support for GC on `StorageMax` (and browser storage limits API)


#### Delegated Routing (js-ipfs)
@lidel, @alanshaw, @jacobheun

libp2p modules are ready and working and will be available in js-ipfs 0.37.

Next steps:

1. @alanshaw will look at Gateway API commands PR (to allow it to work with a gateway out of the box)
    - https://github.com/ipfs/go-ipfs/pull/5565

#### Gossipsub (js-libp2p)
@vasco-santos

- [libp2p/js-libp2p#365](https://github.com/libp2p/js-libp2p/pull/365) got merged with a release candidate of `js-libp2p`
- need review on [ipfs/js-ipfs#2298](https://github.com/ipfs/js-ipfs/pull/2298)
  - gossipsub and new js-libp2p release integration

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

#### Repo Consolidation (js-libp2p)
@jacobheun

#### Distributed Signaling
@jacobheun

#### IPNS
@aschmahmann

- go-libp2p IPNS [PRs](https://github.com/ipfs/go-ipfs/issues/6447) on-going
  - if you're interested in how the new persistence protocol we're layering over pubsub works check out [go-libp2p-pubsub-router#33](https://github.com/libp2p/go-libp2p-pubsub-router/pull/33)

#### Migration to multihash keys in datastore (js-ipfs)
@alanshaw/@auhau

Next steps: Create issue/proposal for migrating datastore to use multihashes

- Needs solutions/proposals for:
    - `ipfs refs local` which is expected to return CIDs.
    - provider records need to use raw multihashes.
    - bundle keystore migration also

#### Package Managers Updates
@dirkmc

- Bitswap - @dirkmc
  - Lots of work understanding and documenting go-bitswap.
  - Work on improving the algorithms around sessions.

- IPFS add performance
  - Currently on pause (mostly) due to the bitswap work.
  - @achingbrain will look into picking this work up as it looks like it will involve a lot of MFS work.

### Design Review Proposals
> You want to propose something for design review.

Design reviews from last week:
  - .eth in dnslink -> https://github.com/ipfs/go-ipfs/pull/6448#pullrequestreview-270473024
  - ipfs://fqdn -> https://github.com/ipfs/in-web-browsers/pull/150#issuecomment-517953473

New: 
- IPNS over pubsub
 - Attendees:
   - @alanshaw
   - @stebalien
   - @aschmahmann
   - @dirkmc
   - @jimpick

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

@alanshaw - Please take 5 minutes to review (read a funny blog post) for IPFS Camp Deep Dive videos release 🙏
- It's kinda IPFS fan fiction
- AFAIK nothing has been written like this before so not sure if it's appropriate
- ITS A BIT OF FUN: https://github.com/ipfs/blog/pull/277
 
### Questions
> You have questions and need them answered. List them here.

### Parking Lot


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
    - Added ky to pubsub in browsers PR [#1059](https://github.com/ipfs/js-ipfs-http-client/pull/1059)
    - Published 2 modules to help with async/await refactor
        - https://www.npmjs.com/package/p-fifo (Promised FIFO buffer)
        - https://www.npmjs.com/package/it-to-stream (Convert streaming iterables to Node.js streams)
    - Added blog post for IPFS Camp Deep Dive videos [#277](https://github.com/ipfs/blog/pull/277)
    - Opened PR to rename blacklist to denylist [#341](https://github.com/libp2p/js-libp2p-switch/pull/341)
    - Updated all JS IPFS examples [#2319](https://github.com/ipfs/js-ipfs/pull/2319)
    - Fixed rate limit detection in `name-your-contributors`
        - https://github.com/mntnr/name-your-contributors/pull/108
    - Completed running project tests for [JS IPFS 0.37 release](https://github.com/ipfs/js-ipfs/issues/2192)
- Next:
    - Update https://js.ipfs.io with changes for 0.37 release
    - Blog post for 0.37 release
    - JS IPFS 0.37 release
    - Port go-ipfs new release flow to js-ipfs
    - Merge GC PR

@vasco-santos
- Done:
  - Gossipsub integration
    - [libp2p/js-libp2p#365](https://github.com/libp2p/js-libp2p/pull/365) got merged with a release candidate of `js-libp2p`
    - [ipfs/js-ipfs#2298](https://github.com/ipfs/js-ipfs/pull/2298)
  - `js-libp2p` PRs for enabling the release
    - [libp2p/js-libp2p#392](https://github.com/libp2p/js-libp2p/pull/392)
    - [libp2p/js-libp2p#397](https://github.com/libp2p/js-libp2p/pull/397)
  - `interface-connection` refactor
    - (WIP) Tests with `it-mplex`
- Blocked:
  - Need review on gossipsub integration for `js-ipfs`
    - [ipfs/js-ipfs#2298](https://github.com/ipfs/js-ipfs/pull/2298)
    - [libp2p/interface-connection#29](https://github.com/libp2p/interface-connection/pull/29)
  - Interop tests for DHT
    - [ipfs/interop#36](https://github.com/ipfs/interop/pull/36)
- Next:
  - think on libp2p bounties for ethberlinzwei
  - Continue `interface-connection` PR work
  - Async for:
    - `js-libp2p-webrtc-direct`
    - `js-libp2p-webrtc-star`
    - `js-libp2p-pnet`

@achingbrain
- Done:
  - Rode a bike across the Pyrenees (aka on holiday)
  - Merged @vmx's PRs upgrading unixfs-importer/exporter and mfs to the latest ipld/dag-pb
- Blocked:
  - N/a
- Next:
  - See where the outstanding async/await PRs got to
  - Suggest a direction for @auhau's datastore key manipulations [ipfs/interface-datastore#30](https://github.com/ipfs/interface-datastore/issues/30)
  - Look into go-ipfs add performance

@dirkmc
- Next:
  - Working on improving Bitswap performance:
    - https://github.com/ipfs/go-bitswap/issues/165
    - https://github.com/ipfs/go-bitswap/issues/166
    - https://github.com/ipfs/go-bitswap/issues/167
    - https://github.com/ipfs/go-bitswap/issues/168

@stebalien
- Done:
  - Lots of PR and design review.
  - A draft blog post for the release process (https://github.com/ipfs/blog/pull/266)
  - Entered stage 3 of the release process.
- Next:
  - Finish the 0.4.22 release.
  - Ship the release process blog post
  
 @aschmahmann
 - Done:
   - Reviewed dht-visualizer tool
   - Some review on libp2p issues/PRs
   - A couple options for closing up [go-libp2p-pubsub#190](https://github.com/libp2p/go-libp2p-pubsub/pull/190)
   - More work on the other two pubsub PRs preparing for meetings this week
 - Next:
   - Get Design Review feedback on pubsub persistence/IPNS over pubsub
   - Try to get go-libp2p-pubsub#190 closed
   - More work on discovery PRs ([go-libp2p-pubsub#184](https://github.com/libp2p/go-libp2p-pubsub/pull/184) and a WIP one for go-libp2p-discovery) and the persistence PR
