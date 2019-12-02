# 🚀 IPFS Core Implementations Weekly Sync 🛰 Dec 02, 2019 

- **Lead:** @stebalien
- **Notetaker:** @alanshaw
- **Attendees:**
  - @vasco-santos
  - @alanshaw
  - @aschmahmann
  - @riba
  - @momack2
  - @mburns
  - @lidel
  - @jacobheun
  - @jimpick
  - @pedromiguelss
  - @achingbrain
- **Recording:** https://youtu.be/KLbJuAZc32A

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

#### Upcoming/Shipped Releases
@stebalien / @achingbrain / @alanshaw

- 🚢 `js-ipfs` v0.40.0
  - https://blog.ipfs.io/2019-12-02-js-ipfs-0-40/
- 🚢 `js-ipfs` v0.39.1
  - Bug fix. resolves https://github.com/ipfs/js-ipfs/issues/2629

#### Upgrade Testing Infra/Process
@jimpick / @stebalien / @daviddias

* Testground daemon (https://github.com/ipfs/testground/pull/183) is in review
  * Please review.
  * Testground daemon controls test structure, can integrate with aws, github. GH actions can spin up testground for running p2p tests.
* Network controls still in-progress.
* multiple versions of go-ipfs needs an owner! (required for DHT tests)

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- support for Base32 encoded CIDv1 in IPNS paths shipped with `js-ipfs` v0.40
  - https://blog.ipfs.io/2019-12-02-js-ipfs-0-40/#base32-encoded-cids-in-ipns-paths
- Tracking Issue for PeerIDs as CIDs: https://github.com/libp2p/specs/issues/216

#### Distributed Signaling (js-libp2p)
@jacobheun

- Still on hold pending async/await

#### IPNS (go-ipfs / js-ipfs)
@aschmahmann / @hugomrdias

IPNS-over-PubSub
  - [go-libp2p-pubsub-router#37](https://github.com/libp2p/go-libp2p-pubsub-router/pull/37) ready for another review round

IPNS-over-DNS
  - Adin and me started working on the spec in Costa Rica will continue in the next weeks
  - @aschmahmann: Currently assuming this is low priority until next year, but if we'd like to prioritize landing the spec please lmk :) 

#### Add Performance (go-ipfs / js-ipfs)
@aschmahmann / @achingbrain

Working on PRs to make datastores support asynchronous writes
  - https://github.com/ipfs/go-datastore/pull/140
     - [go-ds-measure](https://github.com/ipfs/go-ds-measure/pull/23)
     - [go-ds-s3](https://github.com/ipfs/go-ds-s3/pull/46)
     - [go-ds-redis](https://github.com/ipfs/go-ds-redis/pull/6)
     - [go-ds-leveldb](https://github.com/ipfs/go-ds-leveldb/pull/36)
     - [go-ds-badger](https://github.com/ipfs/go-ds-badger/pull/77)
     - go-ds-flatfs : TODO
     - Updating our tests and removing gx along the way

@achingbrain parallelizes adding files in js-ipfs in 2 places
  - file and chunking (file import and block write)
  - https://github.com/ipfs/js-ipfs-unixfs-importer/pull/41

#### Migration to multihash keys in blockstore (js-ipfs)
@alanshaw / @auhau

- No progress. On hold due to time constraints.

#### Bitswap Updates
@dirkmc
- Currently blocked on testground / reviews
  - Progress expected this week as we'll be meeting to work specifically on Bitswap

#### js-ipfs/js-libp2p/js-ipld async await refactor
@achingbrain / @jacobheun / @vasco-santos / @alanshaw

- js-libp2p
  - libp2p-secio released and added to js-libp2p tests
  - circuit relay refactor completed in core [js-libp2p#477](https://github.com/libp2p/js-libp2p/pull/477)
  - async dht integrated into core [js-libp2p#480](https://github.com/libp2p/js-libp2p/pull/480)
  - peer and content routing async integrated into core [js-libp2p#486](https://github.com/libp2p/js-libp2p/pull/486)
  - Working on a [Token Dialer](https://github.com/libp2p/js-libp2p/pull/490) to support parallel, per peer dials 
  - Working on updating the js-libp2p-daemon to use async so we can run interop tests
  - Looking to do a pre release of the refactor this week. Follow along at [js-libp2p#487](https://github.com/libp2p/js-libp2p/issues/487)
    - Will start integrating the pre release into js-ipfs when it's out
    - There will likely be some changes needed, which is why this is a pre release and not an RC.
  - Working on finalizing initial api and usage docs [js-libp2p#472](https://github.com/libp2p/js-libp2p/pull/472)
  
- js-ipfs-http-client
    - https://github.com/ipfs/js-ipfs-http-client/pull/1183
    * TLDR;
      * Remove Node.js streams and pull streams
      * Remove callbacks
      * Remove peer-info and peer-id
    * now 92.7KB (was 246KB)
    
### Design Review Proposals
> You want to propose something for design review.

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

- js-ipfs is re-licensed MIT+Apache
  - Please add your sign-off https://github.com/ipfs/js-ipfs/issues/2624

- js-ipfs-http-client is re-licensed MIT+Apache
  - Please add your sign-off https://github.com/ipfs/js-ipfs-http-client/issues/1189

### Questions
> You have questions and need them answered. List them here.

Is LevelDB in JS using sync or async writes? The Go one was bugged, is JS?
  - Different libraries.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟

@dirkmc
- Done:
  - Message size [fix](https://github.com/libp2p/js-libp2p-kad-dht/pull/156) to js-libp2p-kad-dht
  - js-libp2p [examples](https://github.com/libp2p/js-libp2p/pull/482)
  - js-libp2p [listen address fix](https://github.com/libp2p/js-libp2p/pull/485)
- Blocked:
  - Bitswap PoC is blocked on reviews and testground

@jacobheun
- Done:
  - Added libp2p-secio to the libp2p test suite [js-libp2p#484](https://github.com/libp2p/js-libp2p/pull/484)
  - Finished the circuit relay refactor [js-libp2p#477](https://github.com/libp2p/js-libp2p/pull/477)
  - Started [Token Dialer](https://github.com/libp2p/js-libp2p/pull/490) PR for js-libp2p
- Next:
  - Finish Token Dialer
  - Prep for the pre release, and release it
  - Start integrating the pre release into js-ipfs

@vasco-santos
  - Done:
    - DHT refactor completed
      - [libp2p/js-libp2p#480](https://github.com/libp2p/js-libp2p/pull/480)
    - Discovery refactor completed
      - [libp2p/js-libp2p-bootstrap#96](https://github.com/libp2p/js-libp2p-bootstrap/pull/96)
      - [libp2p/js-libp2p-bootstrap#97](https://github.com/libp2p/js-libp2p-bootstrap/pull/97)
      - [libp2p/js-libp2p#486](https://github.com/libp2p/js-libp2p/pull/486)
    - Content routing and Peer routing refactor completed
      - [libp2p/js-libp2p-delegated-peer-routing#14](https://github.com/libp2p/js-libp2p-delegated-peer-routing/pull/14)
      - [libp2p/js-libp2p-delegated-content-routing#18](https://github.com/libp2p/js-libp2p-delegated-content-routing/pull/18)
      - [libp2p/js-libp2p-delegated-content-routing#19](https://github.com/libp2p/js-libp2p-delegated-content-routing/pull/19)
      - [libp2p/js-libp2p-kad-dht#157](https://github.com/libp2p/js-libp2p-kad-dht/pull/157)
      - [libp2p/js-libp2p#489](https://github.com/libp2p/js-libp2p/pull/489)
    - New iteration on the docs PR
      - [libp2p/js-libp2p#472](https://github.com/libp2p/js-libp2p/pull/472)
    - Created issue for intention of deprecation for `js-libp2p-spdy`
      - [libp2p/js-libp2p-spdy#90](https://github.com/libp2p/js-libp2p-spdy/issues/90)
     - Started `js-libp2p-daemon` update to new `js-libp2p`
  - Blocked: N/A
  - Next:
    - Finish updating `js-libp2p` in `js-libp2p-daemon`
    - Update interop tests with new version of `js-libp2p`
    - Finish docs PR
    - Create libp2p options and configuration doc with a getting started guide

@aschmahmann
  - Done:
     - Datastore + IPNS PRs mentioned above
     - Another PR round for pin traversal fixes: [go-ipfs#6705](https://github.com/ipfs/go-ipfs/pull/6705)
        - Added tests in [interface-go-ipfs-core#47](https://github.com/ipfs/interface-go-ipfs-core/pull/47)
     - Reviewed a couple pubsub PRs
     - Reviewed the libp2p signed records spec PR
   - Blocked:
     - A couple PRs need review
   - Next:
     - Review more pubsub PRs
        - [go-libp2p-pubsub#232](https://github.com/libp2p/go-libp2p-pubsub/pull/232)
        - [go-libp2p-pubsub#229](https://github.com/libp2p/go-libp2p-pubsub/pull/229)
     - Try to get datastore + IPNS changes merged
     - Get some go-ipfs planning done with @stebalien and @dirkmc

@lidel
- Done:
  - sick days: afk & resting
  - in-web-browsers: [protocol handler support test page](https://github.com/ipfs/in-web-browsers/pull/154)
  - ipfs-companion: [fix: no dnslink lookup when in off state](https://github.com/ipfs-shipyard/ipfs-companion/pull/823)
  - Reviews and other
  - ipfs-companion: [feat: upload to MFS](https://github.com/ipfs-shipyard/ipfs-companion/pull/810#pullrequestreview-322610722)
  - ipfs-desktop: [notes on dogfooding IPFS for binaries and autoupdates](https://github.com/ipfs-shipyard/ipfs-desktop/issues/1263#issuecomment-558416578)
- Next:
  - deal with backlog
  - companion releases & webui testing

@pedromiguelss
- Done
    - Started with “Re-evaluate hidden file handling still has interop with go-ipfs” task
        - Learning iterators, generators, async iterators, etc.
        - Understanding the code
    - Refactored echo-server on `interface-core`
        - https://github.com/ipfs/interface-js-ipfs-core/pull/565
        - https://github.com/ipfs/js-ipfs/pull/2646
        - https://github.com/ipfs/js-ipfs-http-client/pull/1191
- Blocked: N/A
- Next:
    - Continue with “Re-evaluate hidden file handling still has interop with go-ipfs” task

@hacdias
- Done
  - IPFS Desktop 0.10 released with Web UI 2.7 and some fixes. macOS icon was updated to comply with Apple guidelines.
  - Read some docs and started understanding how Test Ground works.
- Next
  - Investigate and hack into Test Ground :)

@achingbrain
- Done:
  - parallel file imports/block writing in ipfs-unixfs-importer bubbled up to js-ipfs
    - https://github.com/ipfs/js-ipfs/pull/2637
    - https://github.com/ipfs/js-ipfs-http-client/pull/1187
  - UnixFSv1.5 metadata support
    - https://github.com/ipfs/js-ipfs-http-client/pull/1186
    - https://github.com/ipfs/js-ipfs-multipart/pull/34
- Blocked:
  - n/a
- Next:
  - Land UnixFSv1.5 metadata
  - Improve pinning performance by storing pins in datastore


@hugomrdias
- Done: 
  - Took some sick days 
- Next:
  - Continue js-ipfs testing OKR
  
@alanshaw
- Done:
  - Added message splitting for `js-libp2p-mplex`
    - https://github.com/libp2p/js-libp2p-mplex/pull/100/
  - Created `it-concat` (concat to `BufferList` - not really concat hahaha!)
    - https://github.com/alanshaw/it-concat
  - Fixed CID tool to allow multiple newline delimited CIDs to be passed
    - https://github.com/multiformats/js-cid-tool/pull/8
  - Fixed new DAG CLI to allow `{ "/": "<CID>" }` style links
    - https://github.com/ipfs/js-ipfs/pull/2631
  - Released js-ipfs 0.40!
    - https://blog.ipfs.io/2019-12-02-js-ipfs-0-40/
- Next:
  - async iterables in `js-ipfs-http-client`
    - https://github.com/ipfs/js-ipfs-http-client/pull/1183
  - get unixfs v1.5 merged
