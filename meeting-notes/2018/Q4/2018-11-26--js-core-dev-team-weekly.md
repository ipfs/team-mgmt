# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 November 26, 2018

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @vmx
  - @terichadbourne
  - @laveenaz
  - @hugomrdias
  - @vasco-santos
  - @mcollina
  - @rlitzenberger
  - Mike Goelzer
  - @jacobheun
  - @mikeal
  - @daviddias
  - @achingbrain
  - @alanshaw
  - @pkafei
  - @elexy
- **Recording:** https://youtu.be/7vpvA1U5ps8

## Agenda

- Ask everyone to put their name into the list of attendees
- Round of updates (quick fire < 10mins)
  - ~~What have you accomplished since the last Weekly?~~
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
  - What is the next important thing you should focus on?
- Mid quarter OKRs
  - Update on progress
  - How much further will you get in the time left this quarter?
  - Re-prioritise?


## Notes

### Week Update

@jacobheun
 - Done: 
   - Worked on the js-libp2p-daemon, will continue that this week
     - Testing out async iterator usage with varint delimited messages
   - Released a few of the libp2p modules to bump peer-id dependencies
 - Blocked: None
 - Next:
   - libp2p roadmapping this week
   - continue with js-libp2p-daemon and testbed work

@vasco-santos
- Done:
  - IPNS over Pubsub
   - Interop with `go-ipfs`
   - [ipfs/js-ipfs#1559](https://github.com/ipfs/js-ipfs/pull/1559)
   - [ipfs/js-datastore-pubsub#9](https://github.com/ipfs/js-datastore-pubsub/pull/9)
   - [ipfs/js-datastore-pubsub#12](https://github.com/ipfs/js-datastore-pubsub/pull/12)
   - [ipfs/interop#39](https://github.com/ipfs/interop/pull/39)
  - IPNS over DHT
    - Initial implementation [ipfs/js-ipfs#1725](https://github.com/ipfs/js-ipfs/pull/1725)
  - DHT Stress tests (intensive lookup)
    - [iptb-dht-test](https://github.com/vasco-santos/iptb-dht-test)
- Blocked: N/A
- Next:
  - libp2p roadmap v0.0.2 review
  - DHT stress tests / Testbed (churn intensive)
  - Test IPNS over DHT interop
  - Address IPNS over Pubsub reviews

@hugomrdias
- Done:
    - fix: fix staleness check [#182](https://github.com/ipfs/js-ipfs-repo/pull/182)
    - took over aegir, merged couple of PR and released a new version
    - feat: add ci [#1728](https://github.com/ipfs/js-ipfs/pull/1728)
    - fixed aegir experimental browser test cmd
    - reduced ipfs-api bundle size
    - reviewed feat: cid base option #1552
- Blocked
    - Fix non disposable daemon init/start and attach to running daemons [#308](https://github.com/ipfs/js-ipfsd-ctl/pull/308)
    - fix: pass config to init [#303](https://github.com/ipfs/js-ipfsd-ctl/pull/303)
    - [WIP] feat: Try out CircleCI's new infrastructure for test & release flow #1669
    - CI for js-ipfs [#442](https://github.com/ipfs/infrastructure/issues/442)
- Next
    - continue bundle size work on ipfs and ipfs-api
    - error codes for ipfs
    - continue libp2p-mplex async iterators
    
@vmx
 - Done:
   - JS API specs update ready for review:
    - https://github.com/ipld/js-ipld/pull/185
    - https://github.com/ipld/interface-ipld-format/pull/50
   - Got preview build of Zoom to have Gallery View in live stream when running on Linux
 - Blocked:
   - Not really, but CI running out of disk space is a pain
 - Next:
   - Playing around with new proposed IPLD APIs with GraphSync in mind

@alanshaw
- Done:
    - CID base option is ready \o/ [#1552](https://github.com/ipfs/js-ipfs/pull/1552)
    - Done `interface-ipfs-core` changes for Object API refactor [#299](https://github.com/ipfs/interface-ipfs-core/pull/399)
    - Many reviews and merges...
- Blocked:
    - Needs review: interface Object API changes [#299](https://github.com/ipfs/interface-ipfs-core/pull/399)
    - Needs review: `--cid-base` option [#1552](https://github.com/ipfs/js-ipfs/pull/1552)
- Next:
    - Implement object API refactor in js-ipfs and js-ipfs-api
    - Implement `addFrom*` methods in js-ipfs
    - Write interop tests for CIDv0/1 put and get
    
@mcollina
- done:
    - Code reviews and sync about the documentation
    - Sync-up call with the ipfs team
    - Analysis of the slow key generation algorithm https://github.com/ipfs/js-ipfs/issues/1727
- blocked:
- next:
    - More code reviews
    - analysis of the benchmarks data with a pre-generated key

@achingbrain
- Done:
  - Support sharded directories in MFS: https://github.com/ipfs/js-ipfs-mfs/pull/28
- Blocked
- Next:
  - Deploy MFS sharding to ipfs-registry-mirror
  - ipfs-npm issues

@rlitzenberger

- Done:
  - Short week due to US holiday
  - Initial schema for results and validation https://github.com/ipfs/benchmarks/pull/7
  - Worked on Refactor validate schema for output results https://github.com/ipfs/benchmarks/pull/11
  - Prettyp-printing output - https://github.com/ipfs/benchmarks/pull/10
  - Initial readme with how to run benchmarks https://github.com/ipfs/benchmarks/pull/9
  - WIP - Ability to pass in a specific IPFS version to run tests against ( local or remote) https://github.com/ipfs/benchmarks/pull/12 ( using pre-generated key)
- Blocked:
- Next:
  - Continue with the test setup.  Need to refactor a bit to be able to iterate through the list of subtests
 - Add pre-generated key to tests
 - Get/fetch files from multiple peers
 - Check out Browser benchmarks
 
@elexy:

- done:
    - Integrate Ron’s tests https://github.com/ipfs/benchmarks/pull/8 and https://github.com/ipfs/benchmarks/pull/13
    - Implement local test run 
    - Document repo https://github.com/ipfs/benchmarks/pull/14, infrastructure https://github.com/ipfs/benchmarks/pull/15
    - Start work on VM provisioning
- blocked:
- next:
    - working system


@name
 - Done:
 - Blocked:
 - Next:

### Questions

### Other notes

There are 25 working days left, how many working days do YOU have?

* @alanshaw - 16 days
* @hugomrdias - 25 days
* @jacobheun - 19 days
* @vasco-santos - 23 days
* @vmx - 19 days
* @mcollina - 8 days
* @achingbrain - 19 days
* @rlitzenberger - 23 days
* @elexy - 21 days

<!-- After each call, the notetaker submits a PR to ipfs/team-mgmt to store the notes on the meeting-notes folder -->
