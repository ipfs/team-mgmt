# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 December 3, 2018

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @vmx
  - @hugomrdias
  - @vasco-santos
  - @Elexy
  - @mcolina	
  - @litzenberger
  - @achingbrain
- **Recording:** https://youtu.be/zvJljf0sYf8

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

@vasco-santos

- Done:
  - IPNS over Pubsub
    - Fixed reviews across all open PRs [js-ipfs#1559](https://github.com/ipfs/js-ipfs/pull/1559)
  - IPNS over DHT
    - Ready to review [ipfs/js-ipfs#1725](https://github.com/ipfs/js-ipfs/pull/1725)
    - Interop tests [ipfs/interop/pull/47](https://github.com/ipfs/interop/pull/47)
  - IPFS Interop files fix
    - [ipfs/interop#48](https://github.com/ipfs/interop/pull/48)
  - DHT Stress tests
    - Intensive lookup and churn configurable [iptb-dht-test](https://github.com/vasco-santos/iptb-dht-test)
- Blocked: N/A
- Next:
  - `IPNS over Pubsub` and `IPNS over DHT` merged
  - libp2p daemon client for testbed and interop
  - get [libp2p/js-libp2p-kad-dht#39](https://github.com/libp2p/js-libp2p-kad-dht/pull/39) mergeable
  - update IPNS spec PR

@vmx
 - Done:
   - [js-cid](https://github.com/multiformats/js-cid) is now part of the multiformats org (instead of IPLD)
   - [multibase](https://github.com/multiformats/multibase) wording improved. Thanks @stebalien for rewording things properly
   - Started to implement new JS IPLD API specs (https://github.com/ipld/js-ipld/pull/185, https://github.com/ipld/interface-ipld-format/pull/50)
 - Blocked: Nope
 - Next:
  - Keep implementing new specs to uncover flaws
  - Keep improving multiformat specs as I encounter issues

@alanshaw
- Done:
     - Added CID version agnostic-ness interop tests
         - <img width="377" alt="screenshot 2018-11-27 at 15 49 23" src="https://user-images.githubusercontent.com/152863/49093555-43034180-f25c-11e8-885c-4633ab2c55ed.png">
         - https://github.com/ipfs/interop/pull/46
     - `ipfs-api` moved to `ipfs-http-client`
     - Object API refactor complete and merged
         - js-ipfs [#1730](https://github.com/ipfs/js-ipfs/pull/1730)
         - js-ipfs-http-client [#896](https://github.com/ipfs/js-ipfs-http-client/pull/896)
     - `ipfs-http-client@27` released TLDR:
         - swarm.peers QUIC fix 😂
         - Object API returns CIDs
         - Files API refactor
     - Opened `interface-datastore` PR for async iterators [#25](https://github.com/ipfs/interface-datastore/pull/25)
     - Opened `datastore-level` PR for async iterators [#12](https://github.com/ipfs/js-datastore-level/pull/12)
     - Reviews and misc:
        - Add travis PR [#1731](https://github.com/ipfs/js-ipfs/pull/1731)
        - Unixfs exporter async iterators proposal [#7](https://github.com/ipfs/js-ipfs-unixfs-exporter/issues/7)
        - Only descend into HAMT subshard that has the target entry [#10](https://github.com/ipfs/js-ipfs-unixfs-exporter/pull/10)
        - IPNS over pubsub [#1559](https://github.com/ipfs/js-ipfs/pull/1559)
        - IPNS over DHT [#1725](https://github.com/ipfs/js-ipfs/pull/1725)
- Blocked:
    - `null`
- Next:
    - Implement CID version agnostic get
    - Implement `addFrom*` methods in js-ipfs

@jacobheun
 - Done:
   - js-libp2p-daemon is [in progress](https://github.com/libp2p/js-libp2p-daemon/tree/feat/initial)
     - Supports conneting to other nodes and stream opening/handling
     - Experimenting with async/await options for [libp2p there](https://github.com/libp2p/js-libp2p-daemon/blob/feat/initial/src/libp2p.js)
     - [Forked length-prefixed-stream](https://github.com/jacobheun/length-prefixed-stream/tree/feat/readable3) to add async iterator support. Will likely release that on npm soon.
   - libp2p-websocket-star-rendezvous@0.3.0 server was deployed
     - ss-join response will now return existing peers in the response, so faster peer discovery
 - Blocked:
   - [Add js team to libp2p nat manager](https://github.com/libp2p/js-libp2p-nat-mngr/issues/2) to finish package list update for libp2p
 - Next:
   - Update floodsub dependencies and fix issues that arise there
   - Continue daemon work to get needed support for interop/testbed work
   - libp2p-crypto needs support for exporting non rsa private keys to support libp2p-keychain usage
     - Needed to finish ed25519 key support
   - Look into possible socket.io-pull-stream memory leak https://github.com/mkg20001/socket.io-pull-stream/issues/4

@hugomrdias
- Done:
    - Feat/add travis [#js-ipfs/1731](https://github.com/ipfs/js-ipfs/pull/1731)
    - started working on circle ci setup                           
    - reviewed refactor: rename library to ipfs-http-client #897
    - reviewed feat: ipns over pubsub [js-ipfs/1559](https://github.com/ipfs/js-ipfs/pull/1559)
    - reviewed API review [js-ipfs-unixfs-exporter/issues/7](https://github.com/ipfs/js-ipfs-unixfs-exporter/issues/7)
    - reviewed refactor: async iterators [interface-datastore/pull/25](https://github.com/ipfs/interface-datastore/pull/25)
    - chore: update ipfs-repo #1737
    - feat: change to ipfs-http-client [js-ipfsd-ctl/pull/311](https://github.com/ipfs/js-ipfsd-ctl/pull/311) and new ctl release
    - [WIP] feat: add errors with codes and utils [js-ipfs/pull/1746](https://github.com/ipfs/js-ipfs/pull/1746)
    - [WIP] PR's to reduce bundle size on ipfs and ipfs-api (need experimental build to be default first)
    - merged couple PR's on aegir and publish a new release
- Blocked
    - Fix non disposable daemon init/start and attach to running daemons [js-ipfsd-ctl/pull/308](https://github.com/ipfs/js-ipfsd-ctl/pull/308)
    - fix: pass config to init [js-ipfsd-ctl/pull/303](https://github.com/ipfs/js-ipfsd-ctl/pull/303)
    - [WIP] feat: Try out CircleCI's new infrastructure for test & release flow #1669
    - CI for js-ipfs [infrastructure/issues/442](https://github.com/ipfs/infrastructure/issues/442)
    - enable experimental build [aegir/issues/279](https://github.com/ipfs/aegir/issues/279)
- Next
    - finish bundle size work on ipfs and ipfs-api
    - continue error codes for ipfs
    - continue libp2p-mplex async iterators
    - more reviews :)
    
@Elexy
- done:
  - Production Contanerized setup for InfluxDB, Grafana
  https://github.com/ipfs/benchmarks/pull/20
  - Frontend Nginx proxy
  - CircleCI configuration
  https://github.com/ipfs/benchmarks/pull/24
  - add an endpoint https://github.com/ipfs/benchmarks/pull/23
- blocked:
	- none
- next:
	- run on specific commit
	- return meaningful url on API

@mcollina
- done:
	- code reviews
- blocked:
	- https://github.com/ipfs/benchmarks/issues/28
- next:
	- use node core for key generation https://github.com/ipfs/js-ipfs/issues/1727
	- code reviews
	- further analysis on benchmarks data

@litzenberger
- done 
	-	Test refactor https://github.com/ipfs/benchmarks/pull/26
	- Multi-peer test
	- Updated readme with how to add new tests using a template
  - Added status format https://github.com/ipfs/benchmarks/pull/25
- blocking
	- none
- next
	- run benchmarks on branch
  - run subtest individually
	- Option to run tests without using pre-generated keys 


@achingbrain
- done:
  - fix: disable mfs preload from config: https://github.com/ipfs/js-ipfs/pull/1733
  - perf: do not list directory contents when statting files: https://github.com/ipfs/js-ipfs-mfs/pull/30
  - perf: do not descend into subtrees (maxDepth in hamt): https://github.com/ipfs/js-ipfs-unixfs-exporter/pull/6
  - perf: do not load node when we only want the the hash or size: https://github.com/ipfs/js-ipfs-mfs/pull/31
  - fix: make sure hashes are the same after shard changes: https://github.com/ipfs/js-ipfs-mfs/pull/32
  - perf: only descend into hamt subshards that have the target entry: https://github.com/ipfs/js-ipfs-unixfs-exporter/pull/10
  - perf: deep requiring pull stream modules: https://github.com/ipfs/js-ipfs-unixfs-exporter/pull/8
  - perf: deep requiring pull stream modules: https://github.com/ipfs/js-ipfs-unixfs-importer/pull/3
  - feat: add ls streaming methods: https://github.com/ipfs/js-ipfs-mfs/pull/29
- blocked:
  - do not sort all the time https://github.com/pgte/js-sparse-array/pull/3
- next:
  - perf perf perf
  - write a talk
  - speak at opo.js
  - tests for https://github.com/ipfs/interface-ipfs-core/pull/401
  - ensure interop for https://github.com/ipfs/js-ipfs/pull/1734

@name
 - Done:
 - Blocked:
 - Next:


### Questions

### Other notes

* Use npm-on-ipfs (`npm i ipfs-npm -g`) or at the very least `npm config set registry https://registry.js.ipfs.io`

<!-- After each call, the notetaker submits a PR to ipfs/team-mgmt to store the notes on the meeting-notes folder -->
