# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 November 19, 2018

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @vmx
  - @vasco-santos
  - @mcollina
  - @elexy
  - @achingbrain
  - @litzenberger
  - @travisperson
- **Recording:** _add link to recording once it's online_

## Agenda

- Ask everyone to put their name into the list of attendees
- Round of updates
  - What have you accomplished since the last Weekly?
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
  - What is the next important thing you should focus on?
- **Mid-quarter OKR scoring please!**
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
    - Released [libp2p@0.24.0](https://github.com/libp2p/js-libp2p/blob/master/CHANGELOG.md#0240-2018-11-16)
      - Custom content/peer routing support. Includes a [Delegated Routing example](https://github.com/libp2p/js-libp2p/tree/master/examples/delegated-routing).
      - Libp2p as a state machine
      - Circuit relay is now on by default
      - DHT interface improvements
      - Improved stability
      - New [dialFSM method](https://github.com/libp2p/js-libp2p#libp2pdialfsmpeer-protocol-callback)
        - Exposes Connection State Machines from switch for improved connection control
    - Released [libp2p-switch@0.41.2](https://github.com/libp2p/js-libp2p-switch/blob/master/CHANGELOG.md#0412-2018-11-15)
      - Fixes and issue with circuit addresses not being created properly (due to listening order)
      - Improves the dial self prevention logic
    - [libp2p-mplex#87](https://github.com/libp2p/js-libp2p-mplex/pull/87): fixed stream overriding logic
    - [libp2p-spdy@0.13.0](https://github.com/libp2p/js-libp2p-spdy/blob/master/CHANGELOG.md) released. Stabilty fixes and updated version of spdy-transport
    - Started the js libp2p daemon
  - Blocked: N/A
  - Next:
    - libp2p daemon

@vmx
 - Done:
   - Filed bug about low local transfer rate: https://github.com/ipfs/js-ipfs/issues/1709
   - IPLD now has https://github.com/ipld/team-mgmt/
   - Started to look into IPLD APIs in context of Graphsync
   -  Filed ticket about Zoom livestream not showing gallery view on Linux
   - Cleaned up IPLD related issues/refined priorities through Waffle
 - Blocked:
   - Nope
 - Next:
   - More IPLD API work

@vasco-santos
- Done:
  - IPNS:
    - Routing refactor review fixes
      - [js-ipfs#1701](https://github.com/ipfs/js-ipfs/pull/1701)
    - Pubsub interop topic fix (needs to be tested with go)
      - [js-datastore-pubsub#9](https://github.com/ipfs/js-datastore-pubsub/pull/9)
    - IPNS over DHT (hope to finish initial implementation PR today)
  - DHT Stress tests / Testbed
    - Read bibliography recommended by @jhiesey
      - http://www.news.cs.nyu.edu/~jinyang/pub/iptps04.pdf
      - http://www.news.cs.nyu.edu/~jinyang/pub/phd.pdf
    - Sync call with @jacobheun and @bigs
  - Lot's of reviews for libp2p@0.24.0
  - Fix issue with pin cli in js-ipfs
    - [js-ipfs#1719](https://github.com/ipfs/js-ipfs/pull/1719)
- Blocked: N/A
- Next:
  - `service-worker-gateway` issues
    - [js.ipfs.io#207](https://github.com/ipfs/js.ipfs.io/issues/207)
  - IPNS over DHT PR
  - IPNS over Pubsub test Interop using go and js fixes
  - Stress tests / Testbed DHT

@alanshaw
- Done:
    - Reviewed and merged files API refactor for [interface-ipfs-core](https://github.com/ipfs/interface-ipfs-core/pull/378) & [js-ipfs-api](https://github.com/ipfs/js-ipfs-api/pull/878)
    - Reviewed and merged ipld-dag-pb changes for [interface-ipfs-core](https://github.com/ipfs/interface-ipfs-core/pull/388) & [js-ipfs-api](https://github.com/ipfs/js-ipfs-api/pull/889)
    - Reviewed and made merge ready [files API refactor and ipld-dag-pb changes](https://github.com/ipfs/js-ipfs/pull/1720) for js-ipfs
    - Added HTTP API tests to [`cid-base` PR](https://github.com/ipfs/js-ipfs/pull/1552) (still core tests TODO)
    - Reviewed [IPNS routing logic refactor PR](https://github.com/ipfs/js-ipfs/pull/1701)
    - Re-enabled ability to [lazy load IPLD formats](https://github.com/ipfs/js-ipfs/pull/1704) in js-ipfs
    - Began planning for [0.34 release](https://github.com/ipfs/js-ipfs/issues/1721)
    - Pair programming with [@pkafei](https://github.com/pkafei)
- Blocked:
    - [Object API breaking change to return CIDs](https://github.com/ipfs/interface-ipfs-core/pull/388#issuecomment-437866965) "soft blocks" a release of js-ipfs-api.
- Next:
    - Implement `addFrom*` methods in js-ipfs
    - Add core interface tests for [`cidBase` option PR](https://github.com/ipfs/js-ipfs/pull/1552)
    - Write interop tests for CIDv0/1 put and get


@hugomrdias
- Done:
    - fix ctl options and normalize behavior between the client, daemon and in-proc
        - Fix non disposable daemon init/start and attach to running daemons [#308](https://github.com/ipfs/js-ipfsd-ctl/pull/308)
    - fix: add missing dependencies [#1663](https://github.com/ipfs/js-ipfs/pull/1663)
    - Fails to init with Node.js 11.x - Lock FcntlFlock failed: EINVAL, Invalid argument [#1700](https://github.com/ipfs/js-ipfs/issues/1700)
        - fix: fix lock for node 11 [#181](https://github.com/ipfs/js-ipfs-repo/pull/181)
    - fix: remove electron-webrtc and wrtc for now [#1718](https://github.com/ipfs/js-ipfs/pull/1718)
    - [WIP] fix: remove dexie and unused deps [#309](https://github.com/ipfs/js-ipfsd-ctl/pull/309)
    - chore: add renovate [#1722](https://github.com/ipfs/js-ipfs/pull/1722)
    - update gitlab ci config and added docs according to the feedback
    - started working on libp2p-mplex async iterators
- Blocked
    - fix: pass config to init [#303](https://github.com/ipfs/js-ipfsd-ctl/pull/303)
    - [WIP] feat: Try out CircleCI's new infrastructure for test & release flow #1669
    - CI for js-ipfs [#442](https://github.com/ipfs/infrastructure/issues/442)
    - Fix non disposable daemon init/start and attach to running daemons [#308](https://github.com/ipfs/js-ipfsd-ctl/pull/308)
    - chore: add renovate [#1722](https://github.com/ipfs/js-ipfs/pull/1722) need renovate service active if we think we should test it.
- Next
    - bubble up [#181](https://github.com/ipfs/js-ipfs-repo/pull/181)
    - continue working on libp2p-mplex async iterators
    - continue bundle size work
    - score okr

@achingbrain
 - Done:
  - Split ipfs-unixfs-engine into importer and exporter modules
    - Removed a few redundant dependencies
    - Added tests for directory sharding to unixfs-exporter
    - Refactored unixfs-exporter tests to use in-memory `ipld`
    - Made the exporter tests run in a browser (!)
  - PR that removes CIDs from DAGNodes was merged to `js-ipfs` supporting modules
  - Compat: support `count` as well as `length` arg https://github.com/ipfs/js-ipfs-mfs/pull/27
  - Allow writing mfs dirs/files with difference CID versions & hashes to the containing directory https://github.com/ipfs/js-ipfs-mfs/pull/26
  - Use `ipld.get(cid, path) in unixfs-exporter` https://github.com/ipfs/js-ipfs-unixfs-engine/issues/177
  - Return last traversed CID from `ipld.get` https://github.com/ipld/js-ipld/pull/181
  - Use `ipld.getMany` in unixfs-exporter https://github.com/ipfs/js-ipfs-unixfs-exporter/pull/2
  - Implement directory sharding for mfs
 - Blocked:
   - Object API changes preventing release of DAGNode CID removal
   - DAGNode CID removal PR: https://github.com/ipfs/js-ipfs/pull/1702
 - Next:
   - Implement directory sharding for mfs

@elexy
 - Done:
  - ramping up
  - repo started for running benchmarks: https://github.com/ipfs/benchmarks
 	- Started work on a document describing the benchmarking architecture: https://docs.google.com/document/d/1VqAStlJ_uV_2e-JPAc1bcl2heudfGl4guHOYnbYdPQ4/edit?usp=sharing
  - built a runner and to run benchmarks locally and on a remote host
 - Blocked:
 	- VM provisioning: https://github.com/ipfs/infrastructure/issues/452	
 - Next: 
  - integrating the benchmarks @litzenberger built
  - adding logic for node clinic runs (https://clinicjs.org/)
  - feedback to CI
  
@mcollina
 - Done:
   - Code reviews for https://github.com/ipfs/benchmarks/pull/6
   - Code reviews for https://github.com/ipfs/benchmarks/pull/5
   - Code reviews for https://github.com/ipfs/benchmarks/pull/4
   - Code reviews for https://github.com/ipfs/benchmarks/pull/3
   - Code reviews for https://github.com/ipfs/benchmarks/pull/2
   - Code reviews for https://github.com/ipfs/benchmarks/pull/1
   - discussions with @elexy on the architecture of benchmark reporting
   - call with team to discuss requirements for scenarios to benchmark
 - Blocked:
 - Next:
   - more code reviews
   - call to discuss/signoff benchmarking architecture
   - initial analyis using node clinic of the "add file using unixFS" scenario

@litzenberger
- Done
	- Added tests around Add file to local repo using unixFS https://github.com/ipfs/benchmarks/pull/1
  - Larg files
  - small files
  - empty repo
  - populated repo  
  - Added tests for get file from local repo 
  - added initial schema for results
  - Refactor PR https://github.com/ipfs/benchmarks/pull/4
  
- Blocked
- Next
	- Harden output schema
 	- write results to output dir
  - Tests with multiple peers
  - Revire Browser tests
  
@travisperson
 - Done:
 	 - First steps towards top level `gx link`
   - Handle linked package during lock install
 - Blocked:
 - Next:
   - Supporting linking for lock file development (recursive)

@name
 - Done:
 - Blocked:
 - Next:

### Questions

### Other notes

- Please try to keep in mind this call is designed to be quick updates. As the team is growing, we'll run out of time if we're not careful with our time. Blocked items are reviewed by @diasdavid and others asynchronously after the call, so if you have issues, listing them there should be adequate.

- Jacob out Thursday and Friday

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
