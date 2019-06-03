# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 June 3, 2019 

- **Lead:** @jacobheun
- **Notetaker:** @vasco-santos
- **Attendees:**
  - @vasco-santos
  - @achingbrain
  - @vmx
  - @jacobheun
  - @jimpick
  - @hugomrdias
  - @dirkmc
  - @lidel
  - @daviddias
- **Recording:** https://youtu.be/ApZuiMgI9Ls

## Agenda

- Ask everyone to put their name into the list of attendees
- Round of updates
  - What have you accomplished since the last Weekly?
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
  - What is the next important thing you should focus on?
- Ask for general questions. Could be things like:
  - I'm stuck with something, I don't know who to ask. Who knows who to ask?
  - Who can help me with xyz?
- Plan this week
  - Select issues to work on
- Review remaining issues if there is time left


## Notes

### Week Update

@jacobheun
 - Done:
   - IPFS Camp preparation for libp2p workshop
   - Started AutoNAT spec
   - Helped with ipfs interop issue for latest go RC, https://github.com/ipfs/interop/pull/70
     - Resulted in creating [libp2p-switch#339](https://github.com/libp2p/js-libp2p-switch/issues/339). We should handle dial backoff (blacklisting) by multiaddr instead of by peer as addresses can change over time.
 - Blocked:
 - Next: 
   - More prep for IPFS Camp
   - Finish Draft of AutoNAT spec and open PR
   - Possibly continue with AutoNAT work in JS (time permitting)

@vasco-santos
- Done:
  - enable browser tests on all pubsub modules
    - [ChainSafe/gossipsub-js#28](https://github.com/ChainSafe/gossipsub-js/pull/28)
    - [libp2p/js-libp2p-pubsub#19](https://github.com/libp2p/js-libp2p-pubsub/pull/19)
    - [libp2p/js-libp2p-floodsub#80](https://github.com/libp2p/js-libp2p-floodsub/pull/80)
  - update floodsub benchmarks
    - [libp2p/js-libp2p-floodsub#82](https://github.com/libp2p/js-libp2p-floodsub/pull/82)
  - update `libp2p` interop with new `go-libp2p`
    - [libp2p/npm-go-libp2p-dep#3](https://github.com/libp2p/npm-go-libp2p-dep/pull/3)
    - [libp2p/npm-go-libp2p-dep#6](https://github.com/libp2p/npm-go-libp2p-dep/pull/6)
    - [libp2p/interop#18](https://github.com/libp2p/interop/pull/18)
- Blocked:
  - IPNS test [ipfs/interop#71](https://github.com/ipfs/interop/issues/71)
- Next:
  - add interop tests for hyprid pubsub network (needs to be implemented in gossipsub)
    - [libp2p/interop#17](https://github.com/libp2p/interop/pull/17)
  - integrate `interface-connection` proposal
    - [libp2p/js-libp2p-tcp#102](https://github.com/libp2p/js-libp2p-tcp/pull/102)
    - [libp2p/js-libp2p-websockets#82](https://github.com/libp2p/js-libp2p-websockets/pull/82)
 - more async iterators work
 
@vmx
 - Done:
   - https://github.com/vmx/ipld-graphviz Supports [Parasol](http://parasol.alexgirard.com/) JSON output now
   - multiformats cleanup:
     - I try to archive multistream: https://github.com/multiformats/multistream/issues/9
     - Try to make multicodec README clearer: https://github.com/multiformats/multicodec/pull/134
 - Blocked: Nope
 - Next:
   - More work on [STAC](https://stacspec.org/) on IPLD
   - Playing a bit with WASM in regards to IPLD

@jimpick
 - Done:
   - More IPFS Camp Course C - "Apps"
   - Got HTTP Signed Exchanges "publisher" demo working (SXG Demo):
     https://github.com/ipfs/integration-mini-projects/issues/3
 - Blocked:
   - Need to figure out ipfs-cluster issues for peer-base-pinner
 - Next:
   - More IPFS Camp
   - Switch over to Testlab - got some ideas for content discovery tests
   - investigate some possible bugs revealed by SXG demo


@hugomrdias
 - Done:
   - https://github.com/ipfs/js-ipfs-unixfs-importer/pull/31 feat: use a rabin chunker in wasm
   - https://github.com/ipfs/js-ipfs/pull/2110 Prepare for new aegir version
   - https://github.com/ipfs/js-ipfs-http-client/pull/1021 Prepare for new aegir version
   - IPFS Camps Sessions
   - Dns resolver for IPNS
 - Blocked:
 - Next:
   - Continue DNS resolver
   - IPFS Camp Sessions

@achingbrain
 - Done:
   - async/await for js-datastore-{fs|level|core}
   - async/await for js-ipfs-repo
   - Moved house
 - Blocked:
   - N/a
 - Next:
   - merge Dirk's mortice PR
   - merge Hugo's unixfs-importer rabin WASM PR
   - libp2p workshop for IPFS Camp
   - npm-in-a-box for IPFS Camp Science Fair
   - Upgrade npm-on-ipfs deps
   - Deploy npm-on-ipfs somewhere faster

@dirkmc
 - Done:
   - Fixed some bugs with DHT, bitswap
     - [DHT: send correct payload in ADD_PROVIDER RPC](https://github.com/libp2p/js-libp2p-kad-dht/pull/127)
     - [DHT: favour providers peerInfo over sender peerInfo in ADD_PROVIDER](https://github.com/libp2p/js-libp2p-kad-dht/pull/129)
     - [Bitswap: ignore unwanted blocks](https://github.com/ipfs/js-ipfs-bitswap/pull/194)
   - Completed [GC implementation](https://github.com/ipfs/js-ipfs/pull/2022) (mark and sweep)
   - Created [RFC Issue](https://github.com/ipfs/js-ipfs/issues/2148) for js-ipfs profiles
   - Reviewing [repo migration tool](https://github.com/AuHau/js-ipfs-repo-migrations/pull/1) being created by a community member
 - Blocked:
   - GC PR depends on a [PR against mortice](https://github.com/achingbrain/mortice/pull/1)
 - Next:
   - Implement profiles

@name
 - Done:
 - Blocked:
 - Next:

### Questions

- When should we target DHT being ready for real-world use? (dirkmc question)

@jacobheun Things missing need to be in an issue (https://github.com/ipfs/js-ipfs/pull/1994) and testing criteriums. Also considering https://github.com/ipfs/js-ipfs/issues/1459

@daviddias It is a really important piece of the puzzle for achieving connectivity magic

- How far are we from getting delegated routing deployable? (daviddias question)

@jacobheun Need to sync with infra, it should be close.

### Cross team updates

@lidel (Web Browsers WG)
- new ipfs-companion with latest [Web UI](https://github.com/ipfs-shipyard/ipfs-webui) shipped to Beta channel: [v2.8.2.78](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.2.788)
- [Brave Dev Channel](https://brave.com/download-nightly/) shipped a prototype of one-click install for IPFS Companion: https://twitter.com/lukemulks/status/1134611962212433920 

@name (team/WG)
- win 0
- win 1
- ...etc.

### Other notes

- @vasco-santos is out on 2019-06-10 (public holiday in Portugal)
- @vmx is out Thu-Mon 2019-06-06/10
- @alanshaw is out this week
- @jimpick is out next week (2019-06-10/14)

<!-- After each call, the notetaker submits a PR to ipfs/team-mgmt to store the notes on the meeting-notes folder -->

- @vasco-santos

Issue with ipns interop tests with the bump of `cids` from `0.5` to `0.7`

- @jimpick

Found some issues while doing a HTTP Signed exchanges demo

- @hugomrdias

Showed measures of speed regarding rabin chunker in wasm (in the PR)

- @achingbrain
@daviddias question to @achinbrain

Is there a plan to release the blog post about S3 before IPFS Camp?

@achingbrain: really want to get it as fast as possible

@daviddias: What about using go-ipfs as backend?

@achingbrain: Will be tested

- @dirkmc

Fixing bugs related to bitswap and dht
gc is almost ready
reviweing repo migration tool

- @lidel

Ask for testing the latest ipfs-companion, in order to get it stable for IPFS Camp

- @teri

Priority to have MFS tutorial ready. Any volunteers to try it out?

- @prabhakar

Looking at minor issues over the past 2 weeks. Finding difficult to contribute to js-ipfs

@dirkmc created [an issue](https://github.com/ipfs/js-ipfs/issues/2061) for ease the process of starting to contribute and pointed there for discussion.
