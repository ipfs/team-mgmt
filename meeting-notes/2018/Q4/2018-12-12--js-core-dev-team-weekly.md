# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 December 17, 2018

- **Lead:** @alanshaw
- **Notetaker:** @achingbrain
- **Attendees:**
  - @hugomrdias
  - @terichadbourne
  - @vmx
  - @alanshaw
  - @daviddias
  - @litzenberger
  - @achingbrain
  - @vasco-santos
  - @pkafei
- **Recording:** https://youtu.be/yrqAPv3FltE

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

@jacobheun (not attending)
 - Done:
   - Fixed [libp2p not started yet](https://github.com/libp2p/js-libp2p/pull/297) Instead of throwing an error, it is now passed to the methods callback.
     - Also fixes an issue with transport.filter erroring on shutdown
   - Improve Switch [connection tracking](https://github.com/libp2p/js-libp2p-switch/pull/291)
     - Fixes an issue where multiple connections per peer were not being tracked
     - The base connection is now properly closed on close. Previously half open Duplex streams wouldn't end properly.
     - Stats will now stop when switch stops.
   - OKR planning, scoring and retrospectives.
 - Blocked: None
 - Next:
   - Finish libp2p daemon work
   - libp2p-crypto exporting support for libp2p-keychain

@vmx
 - Done:
   - Implemented new js-ipld API (https://github.com/ipld/js-ipld/pull/185, https://github.com/ipld/interface-ipld-format/pull/50)
 - Blocked:
   - Nope
 - Next:
   - Bubble up js-ipld changes into unixfs and js-ipfs

@vasco-santos
- Done:
  - IPNS Spec PR updated
    - [ipfs/specs#184](https://github.com/ipfs/specs/pull/184)
  - DHT Awesome Endeavour
    - Fixed reviews
    - Fixing flaky all over the codebase tests that appeared from enabling the DHT by default in all the test suite
    - [ipfs/js-ipfs#856](https://github.com/ipfs/js-ipfs/pull/856)
  - js-libp2p-daemon client
    - Finished tests for basic commands
    - Started DHT commands
    - [libp2p/js-libp2p-daemon/tree/feat/client](https://github.com/libp2p/js-libp2p-daemon/tree/feat/client)
  - js-libp2p Q1 OKRs closed
    - [libp2p/js-libp2p#293](https://github.com/libp2p/js-libp2p/pull/293)
  - Presented `iptb-dht-test` simulator in All hands
- Blocked: N/A
- Next:
  - Finish Retrospective and OKR scoring
  - Finish fixing tests for DHT Awesome Endeavour
  - Fix [libp2p/js-libp2p-kad-dht#61](https://github.com/libp2p/js-libp2p-kad-dht/issues/61)
  - js-libp2p-daemon client
    - Finish DHT commands and tests
  - Help @satazor with a workshop in Univeristy of Aveiro
    - [ipfs/dynamic-data-and-capabilities#59](https://github.com/ipfs/dynamic-data-and-capabilities/issues/59)
  - Start basic interop tests after finishing the first version of the daemon client.

@alanshaw
- Done:
    - Added and merged PR for `addFromStream` [#1773](https://github.com/ipfs/js-ipfs/pull/1773)
    - Added and merged PR for `addFromFs` [#1777](https://github.com/ipfs/js-ipfs/pull/1777)
    - Merged CID Base PR [#1552](https://github.com/ipfs/js-ipfs/pull/1552)
    - Added and merged fixes for CID version agnostic get [#1757](https://github.com/ipfs/js-ipfs/pull/1757) and [#413](https://github.com/ipfs/interface-ipfs-core/pull/413) and [#906](https://github.com/ipfs/js-ipfs-http-client/pull/906)
    - Other PRs added & merged:
        - Updated dependencies [#1758](https://github.com/ipfs/js-ipfs/pull/1758)
        - Updated prerelease instructions [#1759](https://github.com/ipfs/js-ipfs/pull/1759)
        - Add code example for create own peer ID [#1770](https://github.com/ipfs/js-ipfs/pull/1770)
        - Clean up node from `--silent` test [#1775](https://github.com/ipfs/js-ipfs/pull/1775)
        - Linting cleanup [#1779](https://github.com/ipfs/js-ipfs/pull/1779)
        - Fixed `addFromURL` case (sometimes `addFromUrl`) [#415](https://github.com/ipfs/interface-ipfs-core/pull/415) and [#907](https://github.com/ipfs/js-ipfs-http-client/pull/907)
        - Fix naming for `findprovs` and `findpeer` [#417](https://github.com/ipfs/interface-ipfs-core/pull/417)
        - Fix `ls` by IPFS path [#914](https://github.com/ipfs/js-ipfs-http-client/pull/914) and [#420](https://github.com/ipfs/interface-ipfs-core/pull/420)
    - Reviewed:
        - [IPFS project roadmap](https://github.com/ipfs/roadmap/pull/1)
        - DHT PR [#856](https://github.com/ipfs/js-ipfs/pull/856)
- Blocked:
    - JS IPFS 0.34 release is now blocked on DHT PR [#856](https://github.com/ipfs/js-ipfs/pull/856)
- Next:
    - Q1 OKR planning

@achingbrain
 - Done:
   - Converted unixfs-importer tests to use in-memory IPLD
   - Updating ipfs-http project
   - OKR scoring & retro
   - Out sick
 - Blocked:
   - N/a
 - Next:
   - Q1 OKR planning


@hugomrdias
- Done:
    - feat: make experimental default and improve test cmd [https://github.com/ipfs/aegir/pull/306](https://github.com/ipfs/aegir/pull/306)
    - azure devops setup
    - rework errors proposal with wrapping
    - bundle-size
        - fix: remove url dependency in the browser #38 [https://github.com/dignifiedquire/borc/pull/38](https://github.com/dignifiedquire/borc/pull/38)
        - fix: reduce bundle size #87 [https://github.com/ipld/js-ipld-dag-cbor/pull/87](https://github.com/ipld/js-ipld-dag-cbor/pull/87)
        - [https://github.com/ipfs/interface-ipfs-core/pull/419/files](https://github.com/ipfs/interface-ipfs-core/pull/419/files) WIP change from big to bignumber
        - [https://github.com/multiformats/js-mafmt/pull/34](https://github.com/multiformats/js-mafmt/pull/34)
        - [https://github.com/libp2p/js-libp2p-identify/pull/47](https://github.com/libp2p/js-libp2p-identify/pull/47)
        - [https://github.com/libp2p/js-libp2p-circuit/pull/40](https://github.com/libp2p/js-libp2p-circuit/pull/40)
        - [https://github.com/multiformats/js-multistream-select/pull/46](https://github.com/multiformats/js-multistream-select/pull/46)
        - [https://github.com/libp2p/js-libp2p-switch/pull/292](https://github.com/libp2p/js-libp2p-switch/pull/292)
        - [https://github.com/libp2p/js-peer-book/pull/39](https://github.com/libp2p/js-peer-book/pull/39)
        - [https://github.com/libp2p/js-libp2p-websockets/pull/78](https://github.com/libp2p/js-libp2p-websockets/pull/78)
        - [https://github.com/hugomrdias/pull-ws/tree/fix/bundle-size](https://github.com/hugomrdias/pull-ws/tree/fix/bundle-size)
        - [https://github.com/libp2p/js-libp2p-floodsub/pull/67](https://github.com/libp2p/js-libp2p-floodsub/pull/67)
        - [https://github.com/libp2p/js-libp2p-ping/pull/73](https://github.com/libp2p/js-libp2p-ping/pull/73)
        - [https://github.com/libp2p/js-libp2p-crypto-secp256k1/pull/12](https://github.com/libp2p/js-libp2p-crypto-secp256k1/pull/12)
- Blocked
    - bundle size
        - make exp build and test default #307 [https://github.com/ipfs/aegir/pull/307](https://github.com/ipfs/aegir/pull/307)
        - fix: clean up, bundle size reduction [https://github.com/libp2p/js-libp2p-crypto/pull/134](https://github.com/libp2p/js-libp2p-crypto/pull/134)
        - fix: clean repo and bundle size reduction [https://github.com/libp2p/js-peer-id/pull/90](https://github.com/libp2p/js-peer-id/pull/90)
        - Feat/bundle size [https://github.com/multiformats/js-multiaddr/pull/75](https://github.com/multiformats/js-multiaddr/pull/75)
        - feat: clean repo and bundle size reduction [https://github.com/libp2p/js-peer-info/pull/71](https://github.com/libp2p/js-peer-info/pull/71)
        - use jsbi instead of bignumber [https://github.com/dignifiedquire/borc/issues/37](https://github.com/dignifiedquire/borc/issues/37)
        - chore: update bl [https://github.com/mafintosh/tar-stream/pull/98](https://github.com/mafintosh/tar-stream/pull/98)
        - forked stream-http [https://github.com/hugomrdias/stream-http](https://github.com/hugomrdias/stream-http)
    - feat: add package.json linter [https://github.com/ipfs/aegir/pull/304](https://github.com/ipfs/aegir/pull/304)
    - Fix non disposable daemon init/start and attach to running daemons #308 [https://github.com/ipfs/js-ipfsd-ctl/pull/308](https://github.com/ipfs/js-ipfsd-ctl/pull/308)
    - fix: pass config to init #303 [https://github.com/ipfs/js-ipfsd-ctl/pull/303](https://github.com/ipfs/js-ipfsd-ctl/pull/303)
    - [WIP] feat: Try out CircleCI's new infrastructure for test & release flow #1669
    - CI for js-ipfs #442 [https://github.com/ipfs/infrastructure/issues/442](https://github.com/ipfs/infrastructure/issues/442)
- Next
    - finish bundle size okr
    - finish the error okr
    - retro and okr work

@mcollina (not attending)
- done:
 - https://github.com/libp2p/js-libp2p-switch/pull/289
 - https://github.com/ipld/js-ipld-dag-pb/issues/104
 - https://github.com/ipld/js-ipld-dag-pb/pull/110
- blocked:
 - https://github.com/libp2p/js-libp2p-switch/issues/290
 - https://github.com/ipfs/benchmarks/issues/79
 -  https://github.com/ipfs/benchmarks/issues/82
 - https://github.com/ipfs/benchmarks/issues/83
- next:
 - more analysis
 - PR for improving async management and reduce pressure on the event loop and GC
 - crypto if time
 - compact bl if time

@elexy (not attending)
- done:
 - First Go benchmark https://github.com/ipfs/benchmarks/pull/86 Ron will integrate.
 - Run Clinic https://github.com/ipfs/benchmarks/pull/74
 - Fixed scripts https://github.com/ipfs/benchmarks/pull/65
- blocked:
 - Store on IPFS https://github.com/ipfs/benchmarks/issues/21
- next:
 - stepping to the background, working on other projects

@litzenberegr
- done :
 - Fix for subTest.warmup.toLowerCase is not a function [85](https://github.com/ipfs/benchmarks/pull/85)
 - Add branch, commit, guid to dashboard [84](https://github.com/ipfs/benchmarks/pull/84)
 - Fix Fileset in results table [80](https://github.com/ipfs/benchmarks/pull/80)
 - Fix: Wait for node to stop before deleting.  Caused some test to hang.  [78](https://github.com/ipfs/benchmarks/pull/78)
 - Added branch name to results and InfluxDb [76](https://github.com/ipfs/benchmarks/pull/76)
 - Added ipfs version and repo to InfluxDB tags [72](https://github.com/ipfs/benchmarks/pull/72)
 - Dashboard fix.  Mapped to latest results output [60](https://github.com/ipfs/benchmarks/pull/60)
 - Fix out directory in config [59](https://github.com/ipfs/benchmarks/pull/59)
 - Verify each test file exists [53](https://github.com/ipfs/benchmarks/pull/53)
- blocked:
     -
- next:
 - Finish integrating Go benchmarks [86](https://github.com/ipfs/benchmarks/pull/86)
 - Browser benchmarks
 - Bug Fix:
 - no results for FILESET=One512MBFile [83](https://github.com/ipfs/benchmarks/issues/83)
 - Verify warmup is working as expected
 [79](https://github.com/ipfs/benchmarks/issues/79)


@name
 - Done:
 - Blocked:
 - Next:

### Questions

### Other notes
- @jacobheun traveling Dec 18, mostly unavailable. On holiday next week, back on the 2nd.
- @vasco-santos partially unavailable in the 24th and 31st of December and unavailable in the public holidays (25th December and 1st January).
- @alanshaw on holiday 20th Dec (Thursday) back 2nd Jan, then on holiday 7th - 11th Jan
- @vmx on holiday 2018-12-20/2019-01-02


No call on 24 Dec or 31 Dec

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
