# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 December 10, 2018

- **Lead:** @jacobheun
- **Notetaker:** @achingbrain
- **Attendees:**
  - @vasco-santos
  - @achingbrain
  - @mcollina
  - @daviddias
  - @terichadbourne
  - @pkafei
  - @vmx
- **Recording:** https://youtu.be/b5_g3rQJbAQ

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

@alanshaw (not attending)
- Done:
    - Created [benchmark tests matrix](https://gist.github.com/alanshaw/e8f49ff1875f0e256e7c45ddeef31498)
    - PR for [stricter CID v1 to v0 conversion](https://github.com/multiformats/js-cid/pull/71)
    - Fixed [streaming cat over HTTP API](https://github.com/ipfs/js-ipfs/pull/1760)
    - PR for [CID version agnostic blockstore .get and .has](https://github.com/ipfs/js-ipfs-repo/pull/184)
    - PR for [modularise files](https://github.com/ipfs/js-ipfs/pull/1772)
    - PR for [addFromURL](https://github.com/ipfs/js-ipfs/pull/1773)
- Blocked:
    - Need reviews 🙏:
        - [tests and fixes for CID version agnostic read and write](https://github.com/ipfs/js-ipfs/pull/1757)
        - [streaming cat over http api](https://github.com/ipfs/js-ipfs/pull/1760)
        - [modularise files](https://github.com/ipfs/js-ipfs/pull/1772)
        - [add from url](https://github.com/ipfs/js-ipfs/pull/1773)
- Next:
    - Implement `addFromFs` and `addFromStream`
    - Merge [DHT PR](https://github.com/ipfs/js-ipfs/pull/856) \o/
    - Fix up and hopeful merge [`--cid-base` PR](https://github.com/ipfs/js-ipfs/pull/1552)
    - Release an RC for [js-ipfs 0.34](https://github.com/ipfs/js-ipfs/issues/1721)

@jacobheun
 - Done:
   - Add maxProviders to bitswap [ipfs-bitswap#183](https://github.com/ipfs/js-ipfs-bitswap/pull/183)
   - Fix libp2p browser build [libp2p#292](https://github.com/libp2p/js-libp2p/pull/292)
   - Fix floodsub build [libp2p-floodsub#64](https://github.com/libp2p/js-libp2p-floodsub/pull/64)
	 - Fix spdy error emitting [libp2p-spdy#84](https://github.com/libp2p/js-libp2p-spdy/pull/84)
   - Started DHT support in the [daemon](https://github.com/libp2p/js-libp2p-daemon/tree/d93da5b47f9acf79ae2cdbf7c6c129479491c3ec)
   - Kicked off [libp2p Q1 OKR Planning](https://github.com/libp2p/js-libp2p/pull/293)
 - Blocked:
   - JS Teams need to be added to Nat Manager [libp2p-nat-mngr#2](https://github.com/libp2p/js-libp2p-nat-mngr/issues/2)
   - Release of p2p multiaddr support [multiaddr#76](https://github.com/multiformats/js-multiaddr/pull/76)
     - This is blocking everything from moving over to using p2p instead of ipfs as our default proto
 - Next:
   - Finish dht implementation in the daemon
   - Update libp2p-crypto to add export support for other keys.

@vmx
 - Done:
   - JS IPLD APs
     - Learned a lot about object properties and porting from callback style to Promises/async-await
 - Blocked:
   - Get new IPLD Formats API approved by @daviddias https://github.com/ipld/interface-ipld-format/pull/50
 - Next:
   - Setting up/Using my new laptop that arrived today
   - JS IPLD APs

@vasco-santos

- Done:
  - IPNS:
    - IPNS over Pubsub merged
    - IPNS over DHT merged
  - DHT:
    - Fixed initial reviews from Alan and Jacob
      - [ipfs/interface-ipfs-core#414](https://github.com/ipfs/interface-ipfs-core/pull/414)
      - [ipfs/js-ipfs-http-client#890](https://github.com/ipfs/js-ipfs-http-client/pull/890)
      - [ipfs/js-ipfs/pull/856](https://github.com/ipfs/js-ipfs/pull/856)
  - libp2p-daemon-client
    - Base commands implemented
    - [libp2p/js-libp2p-daemon/compare/feat/client](https://github.com/libp2p/js-libp2p-daemon/compare/feat/client)
  - other stuff:
    - Fixed tests for files with new API [ipfs/interop/pull/48](https://github.com/ipfs/interop/pull/48)
    - Review and merge of parallel lookups on disjoint sets of nodes from @jhiesey [libp2p/js-libp2p-kad-dht#39](https://github.com/libp2p/js-libp2p-kad-dht/pull/39)
  - js-libp2p OKRs initial proposal
    - [libp2p/js-libp2p#293#issuecomment-445562781](https://github.com/libp2p/js-libp2p/pull/293#issuecomment-445562781)
    
- Blocked: N/A

- Next:
  - DHT stuff all merged 🚀
  - js-libp2p OKRs
  - implement DHT commands for `libp2p-daemon-client`
  - finish PR with `IPNS` spec
    - [ipfs/specs#184](https://github.com/ipfs/specs/pull/184)
    
   
@Elexy (not attending)
- done:
  - off since Wed
  - More documentation on Env [#33](https://github.com/ipfs/benchmarks/pull/33)
  - Connected multi-peer test [#37](https://github.com/ipfs/benchmarks/pull/37)
  - Cleanup benchmark host [#42](https://github.com/ipfs/benchmarks/pull/42)
  - Added generateFile script to remote runner [52](https://github.com/ipfs/benchmarks/pull/52)
- blocking:
  - none
next:
  - store things in ipfs
  - go benchmarks


@mcollina
- done:
  - analysis https://docs.google.com/document/d/1KYzAeB2fhELPydr9gQclY1OGkqKFcM4J-f9No14w9R0/edit?usp=sharing
  - filled in https://github.com/ipfs/js-ipfs/issues/1774
  - discussed https://github.com/ipfs/benchmarks/issues/50
- blocking:
  - nothing
- next:
  - open issues related to analysis done
  - clinic presentation
  	- Wednesdsay 2:30pm UTC - 
  - possibly more analysis
  - if time, createKey fix.

@litzenberger
- done:  
    - Converted get to use CatReadableStream in tests
    - Added Initialize node (local) test [49](https://github.com/ipfs/benchmarks/pull/49)
    - Changed tag to FileSet instead of FileClass [40](https://github.com/ipfs/benchmarks/pull/40)
    - Added IPFS version to results [](https://github.com/ipfs/benchmarks/pull/39)
    - Added support to run individual tests based on subtest and fileset [30](https://github.com/ipfs/benchmarks/pull/30)
    - Updated readme for running local tests. Can now run them on a branch. [31](https://github.com/ipfs/benchmarks/pull/31)
    - Link fix in js-ipfs core files readme [411](https://github.com/ipfs/interface-ipfs-core/pull/411)
- blocking:
    - none
- next:

	- Finish verify files and pre-generating them based on config [33](https://github.com/ipfs/benchmarks/pull/53)
    - Fix multi-peer transfer bug
    - Cat files (websocket, mplex) - Node.js
    - Cat files (websocket, mplex, secio) js01234->js5 - Node.js
    - Node initialization - Browser
    - Add files - Browser
    - Cat files (websocket, mplex, secio) js0 -> js1 - Browser


@hugomrdias
- Done:
    - feat: add package.json linter [#ipfs/aegir/304](https://github.com/ipfs/aegir/pull/304)
    - fix: make babel and webpack safer and faster [#ipfs/aegir/305](https://github.com/ipfs/aegir/pull/305)
    - fix: fix repo lock and buffer api [#ipfs/js-ipfs-repo/185](https://github.com/ipfs/js-ipfs-repo/pull/185)
    - feat: make experimental default and improve test cmd [#ipfs/aegir/306](https://github.com/ipfs/aegir/pull/306)
    - bundle size
        - fix: clean up, bundle size reduction [https://github.com/libp2p/js-libp2p-crypto/pull/134](https://github.com/libp2p/js-libp2p-crypto/pull/134)
        - fix: clean repo and bundle size reduction [https://github.com/libp2p/js-peer-id/pull/90](https://github.com/libp2p/js-peer-id/pull/90)
        - Feat/bundle size [https://github.com/multiformats/js-multiaddr/pull/75](https://github.com/multiformats/js-multiaddr/pull/75)
        - chore: update bl [https://github.com/mafintosh/tar-stream/pull/98](https://github.com/mafintosh/tar-stream/pull/98)
        - feat: clean repo and bundle size reduction [https://github.com/libp2p/js-peer-info/pull/71](https://github.com/libp2p/js-peer-info/pull/71)
        - use jsbi instead of bignumber [https://github.com/dignifiedquire/borc/issues/37](https://github.com/dignifiedquire/borc/issues/37)
        - Successfully published iso-url@0.1.0
        - forked stream-http [https://github.com/hugomrdias/stream-http](https://github.com/hugomrdias/stream-http)

- Blocked
    - Fix non disposable daemon init/start and attach to running daemons #308 [https://github.com/ipfs/js-ipfsd-ctl/pull/308](https://github.com/ipfs/js-ipfsd-ctl/pull/308)
    - fix: pass config to init #303 [https://github.com/ipfs/js-ipfsd-ctl/pull/303](https://github.com/ipfs/js-ipfsd-ctl/pull/303)
    - [WIP] feat: Try out CircleCI's new infrastructure for test & release flow #1669
    - CI for js-ipfs #442 [https://github.com/ipfs/infrastructure/issues/442](https://github.com/ipfs/infrastructure/issues/442)
- Next
    - finish bundle size work on ipfs and ipfs-api
    - rework the error proposal with support for wrapping
    - multihashing, libp2p-mplex async iterators
    - make the stream-http fork a package to fix the streams in sw issue
    - more reviews :)

@achingbrain
 - Done:
   - Did a talk at opo.js
   - Added streaming `ls` for mfs: https://github.com/ipfs/js-ipfs-http-client/pull/903
   - Tests for streaming `ls` for mfs: https://github.com/ipfs/interface-ipfs-core/pull/401
   - HAMT sharding no longer traverses the whole tree: https://github.com/ipfs/js-ipfs-unixfs-exporter/pull/10
   - npm-on-ipfs is much faster
 - Blocked:
   - N/a
 - Next:
   - Update nex-gen HTTP interface to work with 0.34.0: https://github.com/ipfs-shipyard/ipfs-http
   - Get ipfs-http in front of people somehow
   - Start repo migrator: https://github.com/ipfs/js-ipfs/issues/1115
   - Queue up a blog post about npm-on-ipfs to go out with 0.34.0
 
@pkafei

- Done:
	- js-ipfs Merged in the silent feature in ipfs daemon [](https://github.com/ipfs/js-ipfs/commit/593334bcf3e58a694597fd3397372128b17e5a74)

#### proto.school

- Adding CID objects to proto.school has gone down really well
- Many nice things being said about the streamlined API
- Please open issues on proto.school if you notice topics that are covered by js-ipfs/examples that aren't in proto.school

#### v0.34.0

- A quick rundown of the [outstnding issues](https://github.com/ipfs/js-ipfs/issues/1721)
- We should pull together to get v0.34.0 out of the door before the holidays

<!-- After each call, the notetaker submits a PR to ipfs/team-mgmt to store the notes on the meeting-notes folder -->
