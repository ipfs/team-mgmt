# 🚀 IPFS Core Implementations Weekly Sync 🛰 Aug 19, 2019

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
    - @jacobheun
    - @jimpick
    - @terichadbourne
    - @dirkmc
    - @stebalien
    - @djdv
    - @achingbrain
- **Recording:** https://youtu.be/8FDTNfIhaAM

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


### Initiatives

#### Upgrade Release Process
@stebalien/@alanshaw

- Blog post shipped: https://blog.ipfs.io/2019-08-14-ipfs-release-process/

Next step: _This week_ @alanshaw will send a PR to update the JS IPFS release process to be more in line with the new Go IPFS release process.

#### Upgrade Testing Infra/Process
@jimpick/@stebalien/@alanshaw

* [IPFS Test Infrastructure Design document](https://docs.google.com/document/d/1jToUP0E0of0WSnLv7gdIEXXQgfscIaxq_aEbwCMPN28) needs feedbacks
* @bigs looking at nomad integration

Next step: _This week_ @alanshaw will review PR to benchmarks for go-ipfs update [#268](https://github.com/ipfs/benchmarks/pull/268)

#### Garbage Collection and Pinning (js-ipfs)
@dirkmc/@alanshaw

Next step: _This week_ @alanshaw will merge GC PR [#2022](https://github.com/ipfs/js-ipfs/pull/2022)

#### Gossipsub (js-libp2p)
@vasco-santos

- [js-ipfs PR](https://github.com/ipfs/js-ipfs/pull/2298) is ready for review
  - js-ipfs PR depends on [ipfs/interface-js-ipfs-core#503](https://github.com/ipfs/interface-js-ipfs-core/pull/503)

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- libp2p/specs: created [RFC 0001: Text Peer Ids as CIDs](https://github.com/libp2p/specs/pull/209)

#### Repo Consolidation (js-libp2p)
@jacobheun

- [libp2p#400](https://github.com/libp2p/js-libp2p/pull/400) was merged, all core modules are now in js-libp2p. Will do a patch release of this today/tomorrow, it's not a breaking change.

Next Step: archive the old repos and post deprecation notices. Also ensure npm has deprecation notices.

#### Distributed Signaling
@jacobheun

Next step: continue work on webrtc upgrade over relay

#### IPNS
@aschmahmann
- IPNS-over-PubSub spec PRs
  - Main PR [ipfs/specs#218](https://github.com/ipfs/specs/pull/218)
  - New libp2p fetch protocol PR [libp2p/specs#204](https://github.com/libp2p/specs/pull/204)
- [go-libp2p-pubsub-router#33](https://github.com/libp2p/go-libp2p-pubsub-router/pull/33) almost done
  - Pending a release of go-libp2p-pubsub and small "what to call things" issue
- IPNS key revocation spec issue:
  - Adding key revocation [ipfs/specs#219](https://github.com/ipfs/specs/issues/219)

Next step: Work towards features (starting with third-party republishing) as described at [ipfs/package-managers#82](https://github.com/ipfs/package-managers/issues/82). Publish draft IPNS-over-DNS spec (thx @hugomrdias)

#### Migration to multihash keys in datastore (js-ipfs)
@alanshaw/@auhau

Next step: _This week_ @alanshaw will review JS IPFS repo migration tool PR [#1](https://github.com/ipfs/js-ipfs-repo-migrations/pull/1)

#### Package Managers Updates
@dirkmc

Michelle created a roadmap for package managers:
https://github.com/ipfs/package-managers/issues/86

Alex is going to take over work on improving IPFS add for package manager sized directories:
https://github.com/ipfs/package-managers/issues/77

Dominic is making great progress on FUSE integration:
https://github.com/ipfs/package-managers/issues/74

Adin is pushing forward with IPNS use cases for package managers:
https://github.com/ipfs/package-managers/issues/82

Dirk is working on improving Bitswap performance:
https://github.com/ipfs/go-bitswap/issues/165

#### js-ipfs/js-libp2p/js-ipld async await refactor
@alanshaw

Tracking issue: [js-ipfs#1670](https://github.com/ipfs/js-ipfs/issues/1670)

* PR to [`libp2p-mplex`](https://github.com/libp2p/js-libp2p-mplex/pull/94) is open, needs review
* Converting between Node.js streams <-> async iterables is now easier with [`stream-to-it`](https://www.npmjs.com/package/stream-to-it) and [`it-to-stream`](https://www.npmjs.com/package/it-to-stream)
* [`ipfs-multipart` PR](https://github.com/ipfs/js-ipfs-multipart/pull/17) is ready to merge (❤️ @achingbrain)
* [`it-pushable`](https://www.npmjs.com/package/it-pushable) now supports "writev"
* [`libp2p-record` PR](https://github.com/libp2p/js-libp2p-record/pull/13) was merged and released (❤️ @dirkmc)
* [`datastore-s3` PR](https://github.com/ipfs/js-datastore-s3/pull/17) was merged and released (❤️ @dirkmc)
* [`libp2p-keychain` PR](https://github.com/libp2p/js-libp2p-keychain/pull/37) was merged and released

**67%** merged or with open PRs

### Design Review Proposals

Design reviews from last week:
 
- Resolving /http multiaddr spec ([multiaddr/issues/63](https://github.com/multiformats/multiaddr/issues/63))
  - Resolutions:
    - We need to handle paths for this use-case.
    - Punt (@stebalien still needs to post _his_ update on this in [multiaddr/issues/63](https://github.com/multiformats/multiaddr/issues/63) and [post guidance in this PR](https://github.com/ipfs/go-ipfs/pull/6560#issuecomment-520671691))

### Blockers/Asks

None.

### Questions

- What is the current status of the gateways / DHT?
  - No change. Running a special branch on the gateway. Still experiencing issues on the gateway. We've been fixing connection manager bugs to help prevent disconnects. Working on bitswap performance. 

### Parking Lot


### Week Update (for async review)

@vasco-santos (not attending)
  - Done:
    - OOO
  - Blocked:
    - Need review on gossipsub integration for `js-ipfs`
      - [ipfs/js-ipfs#2298](https://github.com/ipfs/js-ipfs/pull/2298)
    - Need feedback on
      - [libp2p/interface-connection#29](https://github.com/libp2p/interface-connection/pull/29)
  - Next:
    - Async for:
      - `js-libp2p-webrtc-direct`
      - `js-libp2p-webrtc-star`
    - ethberlinzwei
    - Continue `interface-connection` PR work

@alanshaw
- Done:
    - PR for preloading on MFS commands that accept IPFS paths [#2355](https://github.com/ipfs/js-ipfs/pull/2355)
    - Completed implementation of `it-multistream-select` TODO: send PR to `js-multistream-select`
    - Submitted PR for fix bundle `globalObject` in web workers [#408](https://github.com/ipfs/aegir/pull/408)
    - Opened PR against [libp2p-mplex](https://github.com/libp2p/js-libp2p-mplex/pull/94) to integrate `it-mplex`
        - Addressed performance issues with existing `pull-mplex` benchmarks
        - Added "writev" support to [`it-pushable`](https://github.com/alanshaw/it-pushable/commit/003b1953dadf8811961b767fdfbdaf793ce0e4a8). TIL - [`writev`](https://nodejs.org/dist/latest/docs/api/stream.html#stream_writable_writev_chunks_callback) is a method you can implement in a Node.js writable stream that allows you to accept writes of multiple chunks at a time. Accepting multiple messages at the mplex level can be faster than accepting them one at a time because there's no async boundary to cross.
    - Created [`stream-to-it`](https://www.npmjs.com/package/stream-to-it) for converting Node.js streams to async iterables
- Next:
    - Review IPFS Test Infrastructure Design document https://docs.google.com/document/d/1jToUP0E0of0WSnLv7gdIEXXQgfscIaxq_aEbwCMPN28
    - Port go-ipfs new release flow to js-ipfs
    - Finish review for benchmarks go-ipfs update [#268](https://github.com/ipfs/benchmarks/pull/268)
    - Merge GC PR [#2022](https://github.com/ipfs/js-ipfs/pull/2022)
    - Review JS IPFS repo migration tool PR [#1](https://github.com/ipfs/js-ipfs-repo-migrations/pull/1)

@jacobheun
- Done:
  - Async conversion of [libp2p-keychain#37](https://github.com/libp2p/js-libp2p-keychain/pull/37)
  - Support for async datastores in [libp2p-kad-dht#140](https://github.com/libp2p/js-libp2p-kad-dht/pull/140)
  - Libp2p core modules are now part of the js-libp2p repo [js-libp2p#400](https://github.com/libp2p/js-libp2p/pull/400)
- Blocked:
- Next:
  - Clear libp2p async migration blockers
    - Finish reviewing the libp2p-mplex async PR
    - Work on getting the websockets and tcp transport async updates completed
    - Review the current state of the interface-connection PR


@lidel
- Done:
    - Reviewed spec draft for [IPNS-over-PubSub as an Independent Transport](https://github.com/ipfs/specs/pull/218)
    - Debugging [webui issues with DAGs that are not unixfs](https://github.com/ipfs-shipyard/ipfs-webui/issues/1095)
    - Released ipfs-companion [v2.8.4](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.4) (with delegated routing enabled for embedded js-ipfs in Brave)
    - libp2p/specs: created [RFC 0001: Text Peer Ids as CIDs](https://github.com/libp2p/specs/pull/209)
- Blocked:
- Next:
 - figure out how to test `addFromURL` in browser to unblock PR to [limit concurrent HTTP requests in browser](https://github.com/ipfs/js-ipfs/pull/2304)
 - Look into creating p2p transport for js-ipfs Brave
  
@aschmahmann
 - Done:
   - IPNS Spec PRs (mentioned above)
   - Moving go-libp2p-pubsub-router PR (mentioned above) closer to the finish line
   - Working on go-libp2p-discovery helper functions to deal with caching and backoff
     - Important to properly utilize [go-libp2p-pubsub#184](https://github.com/libp2p/go-libp2p-pubsub/pull/184)
   - Fixed bug in go-libp2p-core stabilize branch [go-libp2p-core#51](https://github.com/libp2p/go-libp2p-core/pull/51)
 - Blocked:
   - Were there any blockers? If so, which ones? Is it still blocked? Why?
 - Next:
   - Start go-namesys work so we can land feature improvements blocked by how namesys is currently designed
   - Continue work on discovery helpers and pubsub discovery PR
  
@dirkmc
 - Done:
   - Merged [Bitswap refactor](https://github.com/ipfs/go-bitswap/pull/177) to simplify making some bigger changes
   - Merged [Bitswap PR](https://github.com/ipfs/go-bitswap/pull/170) that makes processing groups of incoming blocks more efficient
 - Next:
   - [Bitswap enhancement](https://github.com/ipfs/go-bitswap/pull/174) that allows us to receive blocks that we want but haven't asked for yet
   - Improvements to Bitswap protocol ([Parent PR](https://github.com/ipfs/go-bitswap/issues/165))
   
@djdv
 - Done:
   - Still making progress on exposing IPFS over 9P (for mounting purposes)
     - Set up a Linux debug vm for testing the 9P kernel client
     - There seems to be some issue around the client's request to open the root directory: https://github.com/ipfs/package-managers/issues/74#issuecomment-522606699
 - Next:
   - continue debugging 9P ipfs-server <-> linux-client
   - Fix a test: https://github.com/ipfs/go-ipfs/pull/6489
   - There's a duplicate chocolatey(Windows package manager) package for IPFS. We maintain `ipfs` but `go-ipfs` also exists. I'm discussing this with the people there.
   - Likely talking about IPNS over DNS spec things

@Stebalien
 - Done:
   - Lots of reviews as usual.
   - CI improvements for go-ipfs.
     - Parallelized interop testing.
     - Shared CircelCI orb for go repos. Can test:
       - Benchmarks (comparisons)
       - Lint
       - Cross platform build.
       - Unit tests (in parallel!).
     - Migrated Bitswap + MFS to CircleCI
 - Next:
   - Hopefully push a bitswap patch to ensure it remains connected to useful peers.
   - Lots of work with dirk on bitswap design.
