# 🚀 IPFS Core Implementations Weekly Sync 🛰 Nov 4, 2019

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @jacobheun
  - @lidel
  - @aschmahmann
  - @stebalien
  - @vasco-santos
  - @achingbrain
  - @dirkmc
- **Recording:** https://youtu.be/ww4dQWtnRc8

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

- js-ipfs 0.40 release issue created
    - https://github.com/ipfs/js-ipfs/issues/2558
    - Repo migration tool, blocked on a PR for this
- Nothing new from go-ipfs    

#### Upgrade Testing Infra/Process
@jimpick / @stebalien / @alanshaw / @daviddias

- The testground team is having a hack week.
- Working on automatically spinning up nodes, trying to spin up lots of DHT nodes
- Working on simulating latency, etc, to better mimic the network

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- JS land:
    - js-peer-id: addressed review of [feat: support Peer ID represented as CID](https://github.com/libp2p/js-peer-id/pull/105), and it's merged!
    - js-ipfs: redone [feat: js-ipfs support of CIDs in /ipns/ content paths](https://github.com/ipfs/js-ipfs/pull/2566) to make it shippable _today_, ready for review/merge

#### Distributed Signaling (js-libp2p)
@jacobheun

- Still on hold pending async/await

#### IPNS (go-ipfs / js-ipfs)
@aschmahmann / @hugomrdias

IPNS-over-PubSub
  - https://github.com/libp2p/go-libp2p-pubsub/pull/184 landed 🥳
  - go-libp2p-pubsub v0.2.1 released
  - in the process of being integrated into go-libp2p-pubsub-router and then IPFS
  - includes resolving [go-libp2p-pubsub-router#28](https://github.com/libp2p/go-libp2p-pubsub-router/issues/28)

#### Add Performance (go-ipfs)
@aschmahmann

Plan is to figure out how to do asynchronous database writes for IPFS Add
Three options:
  - Extend the datastore interface to allow asynchronous writes/flushes [go-datastore#137](https://github.com/ipfs/go-datastore/issues/137)
  - Write/improve our asynchronous writing layer on top of a synchronous database (e.g. the BufferedDAG)
  - Write an asynchronous datastore on top of a synchronous datastore with periodic flushing
  
Currently going to try and improve the BufferedDAG while pushing on the datastore interface improvements

#### Migration to multihash keys in blockstore (js-ipfs)
@alanshaw / @auhau

- IPFS repo migrator tool integration into ipfs-repo PR in progress
  - https://github.com/ipfs/js-ipfs-repo/pull/202

#### IPFS Mount
@djdv

- No update

#### Bitswap Updates
@dirkmc
  - Working through code reviews for [Bitswap proof-of-concept](https://github.com/ipfs/go-bitswap/pull/189)
    - [Reviews and changes to go-peertaskqueue](https://github.com/ipfs/go-peertaskqueue/pull/8)
  - [Test plans](https://github.com/ipfs/testground/issues/79) for Bitswap in testground
  - Parallel reads PR merged and deployed to cluster.
    - Shows significant (2x?) improvement in throughput for fetching filecoin proof parameters.

#### js-ipfs/js-libp2p/js-ipld async await refactor
@achingbrain / @jacobheun / @vasco-santos / @alanshaw

- js-libp2p
  - plaintext 2, internal crypto upgrading and pnet have been merged [js-libp2p#469](https://github.com/libp2p/js-libp2p/pull/469)
  - PeerStore refactor in progress [js-libp2p#470](https://github.com/libp2p/js-libp2p/pull/470)
  - Connection Management Registrar in progress [js-libp2p#471](https://github.com/libp2p/js-libp2p/pull/471)
  - Pubsub PRs in review. Need the Registrar and PeerStore work to complete.
  - Identify refactor underway [js-libp2p#473](https://github.com/libp2p/js-libp2p/pull/473) 
    - This will also include support for the [Identify Push protocol](https://github.com/libp2p/specs/tree/master/identify#identifypush)
  - Circuit Relay and Discovery refactors are next on the list

### Design Review Proposals
> You want to propose something for design review.

- @alanshaw: (pre-review) Proposal for uniting the files APIs
    - https://github.com/ipfs/interface-js-ipfs-core/blob/feat/unite-the-files-apis/SPEC/FILESv2.md
- @achingbrain: Proposal for improving the HTTP API (streaming, error handling, general conventions)
  - https://github.com/ipfs/specs/pull/224, please get involved!

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!
  
### Questions
> You have questions and need them answered. List them here.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

- Someone brought up an issue about adding large amounts of data and it creating memory leaks (go-ipfs)
  - We might have something that's keeping pointers to things open
  - Creating a nil repo, and it's not getting closed! Might be a 1 line fix

### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟

@alanshaw
- Done:
  - (Almost done) Working on uniting the files APIs proposal
      - https://github.com/ipfs/interface-js-ipfs-core/blob/feat/unite-the-files-apis/SPEC/FILESv2.md
  - Reviewed ProtoSchool Tutorial for root level files API
  - Reviewed adding automatic repo versions https://github.com/ipfs/js-ipfs-repo/pull/202#pullrequestreview-308485909
  - Reached consensus on removing `libp2p-websocket-star` and `libp2p-webrtc-star` from default `js-ipfs` bundle
- Next:
  - Land IPFS repo migrations tool and start release train for 0.40

@lidel
- Done:
  - cidv1b32:
    - js-peer-id: addressing review of [feat: support Peer ID represented as CID](https://github.com/libp2p/js-peer-id/pull/105)
    - js-ipfs: redone [feat: js-ipfs support of CIDs in /ipns/ content paths](https://github.com/ipfs/js-ipfs/pull/2566) to make it shippable _today_, ready for review/merge
  - ipfs-companion:
    - [fix: recovery quirks in Firefox and Chromium](https://github.com/ipfs-shipyard/ipfs-companion/pull/807)
    - [Permanent in-depth review on Chrome Web Store](https://github.com/ipfs-shipyard/ipfs-companion/issues/808)
    - Released [v2.9.0](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.9.0)
    - [Analysis of Manifest V3 preview shipped with Google Chrome Canary](https://github.com/ipfs-shipyard/ipfs-companion/issues/666#issuecomment-548943969)
  - distributed-wikipedia
    - tried to update tr.wikipedia-on-ipfs.org, identified some new pain points
  - ipfs/team-mgmt: [helper for creating PRs with meeting notes](https://github.com/ipfs/team-mgmt/pull/1054)
  - Reviewed
    - Sync on Pinning UX PRD with Michelle
    - ipfs-webui: [feat: allow urls with authentication](https://github.com/ipfs-shipyard/ipfs-redux-bundle/pull/28/files) + [fixed ci failures](https://github.com/ipfs-shipyard/ipfs-redux-bundle/pull/29#discussion_r342050199)
    - js-ipfs: [replacing ws-star with ws-stardust](https://github.com/libp2p/js-libp2p-websocket-star/issues/70#issuecomment-548318235)
    - ProtoSchool: [feat: Non MFS Files API tutorial](https://github.com/ProtoSchool/protoschool.github.io/pull/303#pullrequestreview-309933765)
    - js-ipfs: [extending libp2p.transports/libp2p.discovery instead of overriding it](https://github.com/ipfs/js-ipfs/issues/2579#issuecomment-549399564)
- Next:
  - test matrix for webui that can be run via `aegir text-external`

@dirkmc
- Done:
  - Working through code reviews for [Bitswap proof-of-concept](https://github.com/ipfs/go-bitswap/pull/189)
    - [Reviews and changes to go-peertaskqueue](https://github.com/ipfs/go-peertaskqueue/pull/8)
  - [Test plans](https://github.com/ipfs/testground/issues/79) for Bitswap in testground
- Next:
  - Continue with code reviews for Bitswap proof-of-concept


@jacobheun
- Done:
  - Connection crypto and pnet refactor is [complete](https://github.com/libp2p/js-libp2p/pull/469)
    - Now uses plaintext 2.0, which exchanges public keys
  - Fixed an issue with the async websocket transport and Buffer Lists [libp2p-websockets#97](https://github.com/libp2p/js-libp2p-websockets/pull/97)
  - Started the Identify refactor, which also adds Identify Push [js-libp2p#473](https://github.com/libp2p/js-libp2p/pull/473)
- Next:
  - Finish Identify refactor
  - Peer Discovery and Circuit Relay refactors
  - Support secio refactor

@vasco-santos
- Done:
  - PeerStore v0 to replace PeerBook
    - [libp2p/js-libp2p#470](https://github.com/libp2p/js-libp2p/pull/470)
  - Registrar for libp2p protocols
    - [libp2p/js-libp2p#471](https://github.com/libp2p/js-libp2p/pull/471)
  - Pubsub new iteration
    - [libp2p/js-libp2p#467](https://github.com/libp2p/js-libp2p/pull/467)
  - Draft PR for new `js-libp2p` API documentation
    - [libp2p/js-libp2p#472](https://github.com/libp2p/js-libp2p/pull/472)
  - Started PR for dht refactor
- Blocked: N/A
- Next:
  - Finish pubsub refactor
  - Continue DHT subsystem refactor

Note: OOO 7th afternoon, 8th and 11th November

@Stebalien:
- Done:  
  - Reviews
  - Libp2p work & reviews
- Blocked:
- Next:
  - Testlab hack week.
  
@hacdias:
- Done:
  - IPFS Desktop
    - Re-add the feature of copying a shareable link to the clipboard when adding files to IPFS via drag'n'dropping files to the app icon ([PR](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1221))
  - IPFS Web UI
      - Allow basic authentication to connect to the API just by passing a url of the form http(s)://user:pass@host:port ([PR](https://github.com/ipfs-shipyard/ipfs-redux-bundle/pull/28))
      - Released 2.6.0 with peer's performance improvements and nearby + local network highlights ([release](https://github.com/ipfs-shipyard/ipfs-webui/issues/1085))
  - Cohosting
      - `ipfs-cohost` 2.0 released, matching the SPEC!

@achingbrain:
- Done:
  - HTTP v1 Files spec: https://github.com/ipfs/specs/pull/224
  - Reviewed https://github.com/ipfs/specs/pull/223
- Blocked:
  - N/a
- Next:
  - Help @pedromiguelss get ipfs/interop#86 across the line

@pedromiguelss
- Done:
    - Merged `interface-ipfs-core` docs conversion to async await
        - https://github.com/ipfs/interface-js-ipfs-core/pull/542
    - Finished `interface-ipfs-core` tests conversion to async await
        - https://github.com/ipfs/interface-js-ipfs-core/pull/547
    - Started to implement requested changes on `interface-ipfs-core` PR
        - https://github.com/ipfs/interface-js-ipfs-core/pull/547
- Blocked: N/A
- Next:
    - Finish `interface-ipfs-core` code review changes and merge it
        - https://github.com/ipfs/interface-js-ipfs-core/pull/547
    - Merge second interop PR
        - https://github.com/ipfs/interop/pull/87
    - Add `—human` flag to `bitswap.stat` and `repo.stat`
        - https://github.com/ipfs/js-ipfs/issues/1996
        - https://github.com/ipfs/js-ipfs/issues/2057
