# 🚀 IPFS Core Implementations Weekly Sync 🛰 May 18, 2020

- **Lead:** @achingbrain
- **Notetaker:** @vasco-santos
- **Attendees:**
  - @rafaelramalho
  - @mburns
  - @vasco-santos
  - @dirkmc
  - @alanshaw
  - @gozala
  - @lidel
  - @stebalien
  - @aschmahmann
- **Recording:** https://youtu.be/7AYtWJrDKR4

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

- new release of js-ipfs with faster and smaller datastore for browsers and prepared for new webpack version
- DNS label limit of 63 is a problem for subdomain support with ed2559 keys

### High Priority Initiatives

These are the high priority initiatives the team is currently working on.

#### Upcoming/Shipped Releases

- js-IPFS 0.44.0
  - cancellable requests
  - datastore-idb
  - removal of node globals & built-ins
  - blogpost on the way

- go-ipfs 0.5.1 (+[ipfs-desktop v0.11.3](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.11.3))
  - IPNS timeout bug fix
  - QUIC leaks
  - CPU issue when canceling DHT queries.
  

#### Content Routing
@stebalien / @raulk / @dirkmc / @aschmahmann / @jacobheun / @alanshaw / @willscott / @aschmahmann

* 🐲 Hydra update
    * Suspected SQL datastore memory leak wasn't a memory leak 🤦‍♂️. PostgreSQL server was running at 100% CPU and queries were executing very slowly.
        * Fixed by adding a `text_pattern_ops` index on the `key` field of the table the datastore uses
    * QUIC had a memory leak (was fixed) & QUIC still has a memory leak
        * QUIC is now disabled temporarily
          * @stebalien -- tracking bug?
    * Hydras are sharing ~**20 million** provider records right now in the shared Postgres datastore 😲
        * <media-tag src="https://files.cryptpad.fr/blob/21/21ae682c6816ba0ae8714e5b40f5a8a111da1c348161c7a4" data-crypto-key="cryptpad:X6vl26/qgjJakIor3NFDithL2fLTx8V7guVBQkYQ6ug="></media-tag>
    * Currently scaled to 5 Hydras each with 100 heads
    * Switched to using leveldb [`pstoreds`](https://github.com/libp2p/go-libp2p-peerstore/tree/master/pstoreds) (from `pstoremem`) **with GC turned off**!
        * Hydras are using around **5-10GB less RAM** overall and it won't eventually cause OOM
        * There is a memory explosion problem with GC in `pstoreds` [libp2p/go-libp2p-peerstore#151](https://github.com/libp2p/go-libp2p-peerstore/issues/151)
    * Next:
        * Add 5 more Hydras & decommission the dht-boosters
        * Complete remaining tasks doc and post mortem doc

* DHT
  * Preparing for go-ipfs 0.6.0
  * Reduced allocations & improved performance.
* NAT research retreat
  * Results:
    * Dialback protocol: https://github.com/libp2p/go-libp2p/issues/925
    * Prioritize WebRTC
    * Shared understanding of NATs
    * Consider using TURN (and friends) as "out of the box" protocols.

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- dweb.link: ipns paths work now! 
  demo:  https://dweb.link/ipns/QmPRB9SNEfYaTaZ88VLCpddTYD45B53sC8yH8xYZXGPLJp 
- wip: **figuring out [Subdomain support for CIDs longer than 63](https://github.com/ipfs/go-ipfs/issues/7318)**
- fysa: [IPNS subdomain support in MetaMask](https://github.com/MetaMask/metamask-extension/pull/8502)
- wip: [wildcard PR from Infura](https://github.com/ipfs/go-ipfs/pull/7319)


#### Bitswap Updates
@dirkmc
Currently working on
- [Some performance improvements](https://github.com/ipfs/go-bitswap/issues/392)
- [Tighter synchronization of sessions with blockstore](https://github.com/ipfs/go-bitswap/issues/391)

#### Stream Content-Based-Chunking Research/Improvements (go-ipfs / js-ipfs / 🗡️ )
@ribasushi

- After [another 5kloc changes](https://github.com/ipfs-shipyard/DAGger/compare/1e43bc650cf...95e236a5fdd) everything finally converges with everything
- Working in parallel on:
  - Extensive documentation for other teams (internal and external)
  - .deb repo import benchmarks based on https://github.com/ipfs-inactive/package-managers/issues/18#issue-418828188, to determine the scope of "what to migrate into go-ipfs at stage 1"
  
#### Rust IPFS Initiative
@aphelionz

No updates

#### PeerStore improvements in js land
@vasco-santos

- [libp2p/js-libp2p#582](https://github.com/libp2p/js-libp2p/issues/582)
- Milestone 4 (KeyBook + keychain integration) is Done
  - Keybook merged
      - [libp2p/js-libp2p#626](https://github.com/libp2p/js-libp2p/pull/626)
  - keychain merged
    - [libp2p/js-libp2p#633](https://github.com/libp2p/js-libp2p/pull/633)
    - [libp2p/js-libp2p#634](https://github.com/libp2p/js-libp2p/pull/634)
- Bonus milestone (MetadataBook) is done
  - Proposal [libp2p/js-libp2p#627](https://github.com/libp2p/js-libp2p/issues/627)
  - Implementation merged [libp2p/js-libp2p#638](https://github.com/libp2p/js-libp2p/pull/638)
- Next steps:
  - RC for `js-libp2p@0.28`
  - Integration on `js-ipfs` (WIP)

#### Cancellable requests in js-IPFS
@achingbrain

- First pass shipped!
  - Wraps all API methods in a timeout
  - Passes AbortSignal to libp2p/bitswap/ipld

### Other Initiatives

This is the backlog of initiatives that are either on-hold or low-priority.

#### UnixFS v1.5 (go-ipfs)
@achingbrain / @ribasushi

No updates

#### Migration to multihash keys in blockstore (js-ipfs / go-ipfs)
@hsanjuan

- A meeting was had
  - https://github.com/ipfs/specs/issues/242#issuecomment-627533056
  - Resolution: store blocks by multihash.
    - Additionally, look into storing additional metadata.

#### Pinning system revamp
@achingbrain

### Design Review Proposals
> You want to propose something for design review.

- Meet to agree how to handle [Subdomain support for CIDs longer than 63](https://github.com/ipfs/go-ipfs/issues/7318) 
  Add yourself if you want to be on the call:
  - @Stebalien
  - @lidel
  - @ribasushi
  - @aschmahmann
  - ...

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

### Questions
> You have questions and need them answered. List them here.

- (@gozala) Sharing nodes across browser tabs implies sharing / agreeing configuration. That is also challenge facing (or maybe will face) native IPFS support in browsers. Also a thing came up in the past with Textile Desktop / Radicle / IPFS Desktop. **Can we bake right configration for in- browser nodes?**
  - Did some preliminary analyses / notes here & can use feedback https://gozala.io/pl-notes/Analysis%20of%20shared%20IPFS%20config
  - It seems some configurations could be moved into API call options
  - Some configuration it seems should be a users decision and not an embedders.


### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

### Week Update (for async review)
> Only post updates that are relevant 
to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟 

@achingbrain
- Done:
 - Only prompt user to upgrade non-rc versions https://github.com/ipfs/js-ipfs/pull/3040
 - Fix browser script tag example https://github.com/ipfs/js-ipfs/pull/3034
 - Fix bug with passing timeout to dag.get https://github.com/ipfs/js-ipfs/pull/3035
 - Use streaming blockstore api in repo https://github.com/ipfs/js-ipfs-repo/pull/232
 - Cancellable API calls https://github.com/ipfs/js-ipfs/pull/2993
 - Fix referencing IPFS module in interop tests https://github.com/ipfs/interop/pull/111
 - Remove onBlocked callback from deleting IDB DBs https://github.com/ipfs/js-ipfsd-ctl/pull/509
 - Add streaming/cancellable API to:
   - interface-datastore https://github.com/ipfs/interface-datastore/pull/36
   - datastore-pubsub https://github.com/ipfs/js-datastore-pubsub/pull/26
   - datastore-s3 https://github.com/ipfs/js-datastore-s3/pull/24
   - datastore-idb https://github.com/ipfs/js-datastore-idb/pull/4
   - datastore-fs https://github.com/ipfs/js-datastore-fs/pull/39
   - datastore-level https://github.com/ipfs/js-datastore-level/pull/34
   - datastore-core https://github.com/ipfs/js-datastore-core/pull/23
 - Make bitswap survive network operations where the other side goes away https://github.com/ipfs/js-ipfs-bitswap/pull/222
 - Resort bitswap queue to make sure request is processed https://github.com/ipfs/js-ipfs-bitswap/pull/221
 - Disable sourcemaps in production builds https://github.com/ipfs/aegir/pull/549
 - Update aegir to version that doesn't publish your env https://github.com/ipfs/js-ipfsd-ctl/pull/506
 - Don't publish the user's env https://github.com/ipfs/aegir/pull/557
 - Allow passing headers to http requests https://github.com/ipfs/js-ipfs/pull/3018
 - Add streaming delete method to block service https://github.com/ipfs/js-ipfs-block-service/pull/92
 - Use ipld/block in block service https://github.com/ipfs/js-ipfs-block-service/pull/91
 - Update architecture diagram in ipfs-repo https://github.com/ipfs/js-ipfs-repo/pull/231
 - Add streaming delete method to ipfs-repo https://github.com/ipfs/js-ipfs-repo/pull/230
- Blocked:
  - n/a
- Next:
  - Use streaming API in bitswap
  - Publish js-ipfs with new bitswap protocol
  - Merge blockservice into core
  - Split core/cli/http api out of ipfs module and publish separately

@vasco-santos
- Done:
  - `js-libp2p` peerStore improvements
    -  [libp2p/js-libp2p#582](https://github.com/libp2p/js-libp2p/issues/582)
    - milestone 4 (integrate keybook and libp2p-keychain)
      - Keybook merged
        - [libp2p/js-libp2p#626](https://github.com/libp2p/js-libp2p/pull/626)
      - keychain merged
        - [libp2p/js-libp2p#633](https://github.com/libp2p/js-libp2p/pull/633)
        - [libp2p/js-libp2p#634](https://github.com/libp2p/js-libp2p/pull/634)
    - bonus milestone (MetadataBook)
      - Written proposal [libp2p/js-libp2p#627](https://github.com/libp2p/js-libp2p/issues/627)
      - Implementation merged [libp2p/js-libp2p#638](https://github.com/libp2p/js-libp2p/pull/638)
  - Interop
    -  tests for noise added [libp2p/interop#40](https://github.com/libp2p/interop/pull/40)
    - update to go-libp2p@0.8.1
      - [libp2p/npm-go-libp2p-dep#10](https://github.com/libp2p/npm-go-libp2p-dep/pull/10)
      - [libp2p/interop#39](https://github.com/libp2p/interop/pull/39)
  - Started preparing libp2p@0.28 release and `js-ipfs` integration
    - [ipfs/js-ipfs-bitswap#217](https://github.com/ipfs/js-ipfs-bitswap/pull/217) WIP
    - [ipfs/js-ipfs#3019](https://github.com/ipfs/js-ipfs/pull/3019) WIP
    - libp2p examples [libp2p/js-libp2p#625](https://github.com/libp2p/js-libp2p/pull/625) merged
    - migration guide 0.27.x to 0.28 [libp2p/js-libp2p#637](https://github.com/libp2p/js-libp2p/pull/637) merged
- Blocked: N/A
- Next:
  - Fix [libp2p/js-libp2p#575](https://github.com/libp2p/js-libp2p/issues/575) by adding a configuration option for addresses listen error tolerance
  - Prepare libp2p@0.28 release
    - update [ipfs/js-ipfs-bitswap#217](https://github.com/ipfs/js-ipfs-bitswap/pull/217) and [ipfs/js-ipfs#3019](https://github.com/ipfs/js-ipfs/pull/3019) with the latest changes
  - Start working on the rendezvous protocol

@alanshaw
- Done:
  - Hydras finally all using shared PostgreSQL datastore
  - Disabled QUIC (too leaky)
  - Scaled to 5 Hydras each with 100 heads
  - Switched Hydras to using datastore backed peerstore i.e. not in memory
- Next:
  - Add 5 more Hydras & decommission the dht-boosters
  - Complete remaining tasks doc and post mortem doc

@hugomrdias
- Done:
    - remove node globals from bitswap again [https://github.com/ipfs/js-ipfs-bitswap/pull/220](https://github.com/ipfs/js-ipfs-bitswap/pull/220)
    - [https://github.com/ipfs/aegir/pull/559](https://github.com/ipfs/aegir/pull/559) fix process.env in karma tests #559
    - update deps in [https://github.com/mikeal/dag-cbor-links/pull/59](https://github.com/mikeal/dag-cbor-links/pull/59)
    - [https://github.com/multiformats/js-cid-tool/pull/9](https://github.com/multiformats/js-cid-tool/pull/9)  updated deps and bug fixes
    - js-ipfs PRs
        - [https://github.com/ipfs/js-ipfs/pull/3026](https://github.com/ipfs/js-ipfs/pull/3026) update ipld-raw
        - [https://github.com/ipfs/js-ipfs/pull/3025](https://github.com/ipfs/js-ipfs/pull/3025) remove ipld all formats config and fix example
        - review Cancellable api [https://github.com/ipfs/js-ipfs/pull/2993/files](https://github.com/ipfs/js-ipfs/pull/2993/files)
    - go-ipfs 0.5.x sync [https://github.com/ipfs/js-ipfs/issues/3030](https://github.com/ipfs/js-ipfs/issues/3030)
    - rs-ipfs grant phase 2
    - typescript support setup improvements
    - ipfs org issue triage
- Next:
    - ipfs docs migration


@lidel 
- Done:
  - protocol handlers
    - supporting Igalia, discussing next steps
      - first win: [we got URIs registered at IANA](https://github.com/ipfs/in-web-browsers/issues/29#issuecomment-629016191)
  - subdomains
    - dweb.link: [debugging ipns paths, supporting @mburns](https://github.com/protocol/bifrost-infra/issues/740)
    - reviewing [IPNS subdomain support in MetaMask](https://github.com/MetaMask/metamask-extension/pull/8502)
    - figuring out [Subdomain support for CIDs longer than 63](https://github.com/ipfs/go-ipfs/issues/7318)
    - [reviewing wildcard PR from Infura](https://github.com/ipfs/go-ipfs/pull/7319)
  - ipfs-desktop: 
    - researching how other apps deal with electron-updater issues 
    - [skipping notarization when signing is not present](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1503)
  - go-ipfs: admin related to ownership transfer of the [outdated snap package](https://github.com/ipfs/go-ipfs/issues/7250)
  - ipfs-companion: 
    - [backend refactor to open Preferences in a new tab](https://github.com/ipfs-shipyard/ipfs-companion/pull/879)
    - [feedback on ways we can approach UnstoppableDomains integration](https://github.com/ipfs-shipyard/ipfs-companion/pull/875#issuecomment-626905241)
    - [the usual chrome web store chores](https://github.com/ipfs-shipyard/ipfs-companion/issues/808#issuecomment-628254838)
    - released [v2.11.0.918](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.11.0.918) (Beta)
  - js.ipfs.io: bulk [updates](https://github.com/ipfs/js.ipfs.io/pull/280) 
  - go-is-domain:
    - [review OpenNIC TLDs](https://github.com/jbenet/go-is-domain/pull/15)
    - [update ICANN/IANA TLDs](https://github.com/jbenet/go-is-domain/pull/18)
    - [add .zil and .crypto from UnstoppableDomains](https://github.com/jbenet/go-is-domain/pull/17)
    - [move to ipfs org?](https://github.com/jbenet/go-is-domain/issues/16)
- Next:
  - new companion stable, subdomains blogpost

@gozala

- Done
  - Created first draft of the plan for discussing with community
    https://hackmd.io/QYzm5P3bRQ6f85MJ4qsGWg
- Next
  - Gather feedback from community
    - Talk to 3box, textile

@Stebalien
- Done:
  - 2 days off
    - crumpets w/ molly
    - other tasty food
    - book get
  - Lots of reviews.
  - Merged an `ipfs stat dht` command for getting routing table stats from go-ipfs.
  - Mini NAT traversal retreat.
- Next:
  - go-ipfs 0.6 RC1
  - DHT routing table improvements.
