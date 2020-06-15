# 🚀 IPFS Core Implementations Weekly Sync 🛰 June 15, 2020

- **Lead:** @achingbrain
- **Notetaker:** @jacobheun
- **Attendees:**
  - @gozala
  - @vasco-santos
  - @dirkmc
  - @hugomrdias
  - @aphelionz
  - @aschmahmann
- **Recording:** https://youtu.be/Q24nXi7KyZ0

## Agenda

- Ensure a notetaker exists!
  - The notetaker should:
    - Add bullet points of what is said to each section of this file
    - Wait a day or two for people to add their async updates
    - PR this file into https://github.com/ipfs/team-mgmt
- Ask everyone to put their name into the list of attendees
- Initiatives
- Blockers (from the async status update)
- General questions. Could be things like:
  - I'm stuck with something, I don't know who to ask. Who knows who to ask?
  - Who can help me with xyz?
- Plan for this week
  - Select issues to work on
- Review remaining parking lot topics if there is time left

### High Priority Initiatives

These are the high priority initiatives the team is currently working on.

#### Upcoming/Shipped Releases

- go-ipfs 0.6 RC 6 [go-ipfs#7347](https://github.com/ipfs/go-ipfs/issues/7347)
  - 0.6 should ship this week

#### Content Routing
@stebalien / @raulk / @dirkmc / @aschmahmann / @jacobheun / @alanshaw / @willscott / @aschmahmann

- go-ipfs 0.6 release
- misc DHT improvements/fixes for go-ipfs 0.7

#### Subdomain Gateway (Base32, Origin isolation)
@lidel @riba

- Base36
  - JS: [`cids@0.8.2`](https://github.com/multiformats/js-cid/releases/tag/v0.8.2) library shipped with support for Base36, which solves the problem of representing ED25519 keys on subdomain gateways. 
  - GO: go-ipfs 0.6.0 supports conversion to DNS-safe CIDv1 in Base36: `ipfs cid format -v 1 --codec libp2p-key -b base36 z5AanNVJCxnNXk3KysfhKVHaJecKEY2RxgsrNaGb89fuzXVqjaEndN1` → `k51qzi5uqu5dj16qyiq0tajolkojyl9qdkr254920wxv7ghtuwcz593tp69z9m`
  - updated https://cid.ipfs.io to support ED25519 represented as CIDv1 in Base36
- in review: PRs arelated to subdomain gateway  (X-Forwarded-host, redirect to different hostname, wildcards from infura, etc)
- no progress on https://github.com/ipfs/go-ipfs/pull/7441 yet
  - but pretty sure we want error page + opt-in by the user
  - idea: we may disable JS and load from path instead

#### Bitswap Updates
@dirkmc
- [Fix PeerManager signalAvailabiity() race](https://github.com/ipfs/go-bitswap/pull/417)
- [Refactor Bitswap message receiving](https://github.com/ipfs/go-bitswap/pull/398)

#### Stream Content-Based-Chunking Research/Improvements (go-ipfs / js-ipfs / 🗡️ )
@ribasushi
  - Virtually no update this week: selectors/lotus work
  - Still looking to finish this sometime this week, do not take off board yet
 

#### Rust IPFS Initiative
@aphelionz

- Phase 2 wrapping up this week with /get support (including tar)
- Phase 3 still open question: https://github.com/rs-ipfs/rust-ipfs/issues/181

#### js-libp2p-rendezvous
@vasco-santos

- Initial implementation
  - [libp2p/js-libp2p-rendezvous#6](https://github.com/libp2p/js-libp2p-rendezvous/pull/6)
- Working on libp2p signed peer records
  - dependency for secure rendezvous record exchange

### Other Initiatives

This is the backlog of initiatives that are either on-hold or low-priority.

#### UnixFS v1.5 (go-ipfs)
@achingbrain / @ribasushi

- no update

#### Migration to multihash keys in blockstore (js-ipfs / go-ipfs)
@achingbrain

- Finishing js-ipfs repo migration tool to unblock this

#### Pinning system revamp
@achingbrain

- Finishing js-ipfs repo migration tool to unblock this

#### Shared IPFS node
@gozala

- All the `ipfs.dag` test are passing now on my device
  - Except few that I have disabled (Tests that take CID as string or CID + path combo).
  - On CI it's hard to tell due to intermitient failures
- Need [concensus on switch to new IPLD stack + simpler API](https://github.com/ipfs/js-ipfs/issues/3022#issuecomment-641542193)
- Changes across libraries that this depends on
  - [ ] `Uint8Array` support in dag-pb [ipld/js-ipld-dag-pb#184](https://github.com/ipld/js-ipld-dag-pb/pull/184)
    - [ ] `Uint8Array` support in protons [ipfs/protons#13]( https://github.com/ipfs/protons/pull/13)
      - [x] Exposing `TextEncoder` from ipfs-utils [ipfs/js-ipfs-utils#44](https://github.com/ipfs/js-ipfs-utils/pull/44)
  - [x] `Uint8Array` support in dag-cbor [ipld/js-ipld-dag-cbor#129](https://github.com/ipld/js-ipld-dag-cbor/pull/129)
  - [ ] `Uint8Array` support in ipld-block [ipld/js-ipld-block#53](https://github.com/ipld/js-ipld-block/pull/53)


### Design Review Proposals
> You want to propose something for design reviews

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

- Almost blocked: Need [concensus on switch to new IPLD stack + simpler API](https://github.com/ipfs/js-ipfs/issues/3022#issuecomment-641542193)

### Questions
> You have questions and need them answered. List them here.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

- @stebalien is stepping down as the go-ipfs maintainer, @aschmahmann is stepping up as the new maintainer.
  - I'll be working on the Filecoin actors, one step closer to IPLD!

### Week Update (for async review)
> Only post updates that are relevant 
to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟 

@name
- Done:
  - What have you accomplished since the last Weekly?
- Blocked:
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
- Next:
  - What is the next important thing you should focus on.

@achingbrain
- Done:
  - Update node-forge for smaller bundles: https://github.com/jfromaniello/selfsigned/pull/39
  - Fix up circuit relay example, sort of: https://github.com/ipfs/js-ipfs/pull/3083
  - Wrap datastore-idb operations in a transaction: https://github.com/ipfs/js-datastore-idb/pull/7
  - Add tests to expose problems with query concurrency: https://github.com/ipfs/interface-datastore/pull/40
- Blocked:
  - Allow getting path from `go-ipfs` npm module (needs go-IPFS release) [ipfs-shipyard/npm-go-ipfs#26](https://github.com/ipfs-shipyard/npm-go-ipfs/pull/26)
- Next:
  - ipfs-repo migration tool
  - storing blocks as multihashes
  - storing pins in the datastore

@vasco-santos
- Done:
  - Fixed conn encryption module was not properly required
    - [libp2p/js-libp2p#665](https://github.com/libp2p/js-libp2p/pull/665)
  - throw error no swarm on multiaddrs using websocket-star
    - [ipfs/js-ipfs#3051](https://github.com/ipfs/js-ipfs/pull/3051)
  - Add noise as fallback for secio in js-ipfs
    - [ipfs/js-ipfs#3074](https://github.com/ipfs/js-ipfs/pull/3074)
  - Created issue to track libp2p typescript support via js docs
    - [libp2p/js-libp2p#659](https://github.com/libp2p/js-libp2p/issues/659)
  - Initial implementation of Signed Peer Records almost ready for review
    - [multiformats/js-multicodec#60](https://github.com/multiformats/js-multicodec/pull/60)
    - [libp2p/js-libp2p-interfaces/tree/feat/record-interface](https://github.com/libp2p/js-libp2p-interfaces/tree/feat/record-interface)
    - [libp2p/js-libp2p/tree/feat/signed-peer-records](https://github.com/libp2p/js-libp2p/tree/feat/signed-peer-records)
  - Review js gossipsub1.1 peer scoring implementation
- Blocked: N/A
- Next:
  - Finish Signed Peer Records PRs
  - Continue supporting gossipsub 1.1
  - Iterate on rendezvous initial implementation feedback
  
@stebalien
- Done:
  - go-ipfs 0.6.0 RC2
- Next:
  - RC3 today, shipping 0.6 on Wednesday.
  - Stepping down from go-ipfs maintainership, handing it off to @aschmahmann.
  - Will be working on filecoin going forward.
  
@hugomrdias
- Done:
  - aegir new github actions and new bundle size check
    - [https://github.com/ipfs/aegir/pull/532](https://github.com/ipfs/aegir/pull/532)
    - [https://github.com/ipfs/js-ipfs/pull/3075](https://github.com/ipfs/js-ipfs/pull/3075)
  - published [multibase@1.0.0](https://github.com/multiformats/js-multibase/blob/master/CHANGELOG.md#100-2020-06-09)
  - add types to ipfs-utils WIP [https://github.com/ipfs/js-ipfs-utils/pull/45](https://github.com/ipfs/js-ipfs-utils/pull/45)
  - released ipfs-utils v2.3.0 with text-encoder and text-decoder
  - released aegir v22.1.0 with new bundle size check and github actions
  - finish new `config.getAll` PR [https://github.com/ipfs/js-ipfs/pull/3071](https://github.com/ipfs/js-ipfs/pull/3071)
  - review gozala proposals
  - Final PR for node globals removal [https://github.com/ipfs/aegir/pull/578](https://github.com/ipfs/aegir/pull/578)
  - Remove support for Flow in aegir [https://github.com/ipfs/aegir/pull/579](https://github.com/ipfs/aegir/pull/579)
  - feat: clean up deps, utils, release cmd and docs [https://github.com/ipfs/aegir/pull/581](https://github.com/ipfs/aegir/pull/581)
- Next:
  - Continue TS support
  
@lidel

- Done:
  - go-ipfs: 
    - [wip: support long CIDs in subdomains with TLS](https://github.com/ipfs/go-ipfs/pull/7441)
    - reviews
        - [feat: support X-Forwarded-Host header
](https://github.com/ipfs/go-ipfs/pull/7468)
        - [feat: gateway redirect to another domain](https://github.com/ipfs/go-ipfs/pull/7461)
        - [feat: wildcard support for public gateways](https://github.com/ipfs/go-ipfs/pull/7319#pullrequestreview-430598503)
    - cid.ipfs.io: [looking into adding support for base36 given updated multihash lib](https://github.com/multiformats/cid-utils-website/issues/23)
  - ipfs-desktop:
    - [stop hitting snapcraft on every CI build](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1547)
    - [debugging windows all-users update issues](https://github.com/ipfs-shipyard/ipfs-desktop/issues/1514#issuecomment-644090645)
  - ipfs-webui:
    - [debugging e2e timeouts](https://github.com/ipfs-shipyard/ipfs-webui/pull/1521), [hardening e2e tests](https://github.com/ipfs-shipyard/ipfs-webui/pull/1523)
    - [review a11y PR](https://github.com/ipfs-shipyard/ipfs-webui/pull/1512)
  - ipfs-companion: 
    - [feat: option to opt-in for bleeding edge ipfs-webui](https://github.com/ipfs-shipyard/ipfs-companion/pull/893)
    - shipped [v2.13.0.939](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.13.0.939) (beta)
- Next: 
  - unblock https://github.com/ipfs/go-ipfs/pull/7441
  
- @aschmahmann
  - Helping out with go-ipfs 0.6 RC
     - Included working through a few bugs found during the RC process
  - Learning from @stebalien about RC process and mechanics
  - DHT hardening work + reviews
  - Found cause for pubsub bug https://github.com/libp2p/go-libp2p-pubsub/issues/349
