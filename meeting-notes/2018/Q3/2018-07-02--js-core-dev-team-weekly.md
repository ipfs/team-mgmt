# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 July 02, 2018

- **Lead:** David Dias (@diasdavid)
- **Notetaker:** @jacobheun
- **Attendees:**
  - @jacobheun
  - @vmx
  - @vasco-santos
  - @gar
  - @hugomrdias
  - @fsdiogo
  - @achingbrain
  - @mgoelzer
- **Recording:** https://youtu.be/ZvDnKnp6a5M

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

### Few remarks first

- Updates to the this sync
   - (same flavour but now with explicitely a 3 teams meeting, js-ipfs, js-libp2p and js-ipld \o/)
- First day of Q3 \o/


### Week Update

@diasdavid
 - Done:
   - Lot's of focus on the Dev Meetings
   - Q2 OKRs/ Q3 OKRs
   - We now have Lead Maintainers for all the modules \o/
   - js.ipfs.io review, hoping to ship that this month
   - PR's review and merges
 - Blocked:
 - Next:
   - Get Q2 OKRs done and ready to freeze
   - full js.ipfs.io review, get copy done and illustrations reviewed as well

@alanshaw (not attending today)
- Done:
  - Reviewed `js-libp2p` config changes PR [#166](https://github.com/libp2p/js-libp2p/pull/166)
  - Opened PR to `js-libp2p` enabling pre-configured modules (instances) to be passed and enabled without them having to have a tag and an unused config section [#209](https://github.com/libp2p/js-libp2p/pull/209)
  - (Almost) finished updating `js-ipfs` with `js-libp2p` config changes [#1401](https://github.com/ipfs/js-ipfs/pull/1401)
  - Merged and released `interface-ipfs-core` modular tests [#290](https://github.com/ipfs/interface-ipfs-core/pull/290) found many issues in CI stopping sister PRs [#1389](https://github.com/ipfs/js-ipfs/pull/1389) and [#785](https://github.com/ipfs/js-ipfs-api/pull/785) from being merged. Much investigation, PR open here for fix [#319](https://github.com/ipfs/interface-ipfs-core/pull/319)
  - Reviewed [js-ipns](https://github.com/ipfs/js-ipns/pull/1) initial implementation
  - Released js-ipfs-api@22.2 with better request logging (enabled via debug module) [#796](https://github.com/ipfs/js-ipfs-api/pull/796)
  - ...more
    - dag.put without options
    - lodash switch to main lib
- Blocked:
  - [#319](https://github.com/ipfs/interface-ipfs-core/pull/319)
- Next:
  - Release 0.30
    - Merge libp2p config changes PR [#1401](https://github.com/ipfs/js-ipfs/pull/1401)
    - Finish enabling libp2p connection manager options PR [#1410](https://github.com/ipfs/js-ipfs/pull/1410)
  - Review MFS PR [#1360](https://github.com/ipfs/js-ipfs/pull/1360)

@jacobheun
  - Done: 
    - Finished up the libp2p new config updates with all examples updated, [#166](https://github.com/libp2p/js-libp2p/pull/166).
    - Added latest webrtc to libp2p which fixes node issues. Also improved test stability. [#211](https://github.com/libp2p/js-libp2p/pull/211)
    	- It would be ideal to have some load tests against the wrtc module as people had issues with it in the past seg faulting
    - Private networking PRs ready to be reviewed:
      - [libp2p #210](https://github.com/libp2p/js-libp2p/pull/210)
      - [libp2p-switch #266](https://github.com/libp2p/js-libp2p-switch/pull/266)
      - [libp2p-pnet #1](https://github.com/libp2p/js-libp2p-pnet/pull/1)
    - Q2 retrospective and Q3 OKR prep for libp2p
  - Blocked: 
    - Reviews of https://github.com/libp2p/js-libp2p-pnet/pull/1 to finish private networking.
  - Next:
    - Work on finalizing Q3 OKRs for libp2p
    - Get private networking merged through to libp2p and add PRs for js-ipfs and js-ipfs-repo.
    - Look into flaky tests mention in [js-ipfs #1401](https://github.com/ipfs/js-ipfs/pull/1401#issuecomment-401542964)
    	- This is likely due to multiple test runners on the shared system having the same ID. Could be hard to reproduce, ideal to get stronger test isolation there.
    - Continue looking into pull-reader issues with overreading resulting in skip tests in private networking for interop mentioned in [interop #24](https://github.com/ipfs/interop/pull/24)
    - Prepping [libp2p connection flow presentation](https://github.com/libp2p/developer-meetings/issues/12) for next weeks Berlin meetup.

@vmx
 - Done:
   - GraphSync: playing with libp2p
   - Review of IPLD Format implementation changes
 - Blocked:
   - A bit by @kumavis not responding, but working around it
 - Next:
   - GraphSync
   - More IPLD Format implementation changes

@hugomrdias
 - Done:
    - Q2 retro and Q3 planning
    - Learn about the modules i'm lead maintainer
    - Make proper CI tests for large files
    - js.ipfs.io review
 - Blocked:
 - Next:
   - Finish CI tests, publish and deploy
   - Work on PRs/Issues from multihashing and multipart
   - Q3 planning

@vasco-santos
 - Done:
   - Continue IPNS PR
     - https://github.com/ipfs/js-ipfs/pull/1400
     - Added nanoseconds precision on IPNS record validity
     - Added key parameter for publish
     - Added recursive parameter for resolve
   - Released js-ipns initial version
     - https://github.com/ipfs/js-ipns/pull/1
   - Created PR with an initial version of the IPNS specs
     - https://github.com/ipfs/specs/pull/184
     - Some points still need to be written and some diagrams need to be created
   - PRs on libp2p modules for changing lodash imports
     - https://github.com/libp2p/js-libp2p-connection-manager/pull/14
     - https://github.com/libp2p/js-libp2p-floodsub/pull/56
     - https://github.com/libp2p/js-libp2p-keychain/pull/24
     - https://github.com/libp2p/js-libp2p-bootstrap/pull/78
   - Renamed js-libp2p-railing to js-libp2p-bootstrap
   - libp2p / ipfs Q3 OKRs
 - Blocked:
   - N/A
 - Next:
   - Get IPNS working local PR ready for the final reviews
     - Finish remaining optional params
     - Logging / errors refactor
     - Finish tests
     - Add lru cache 
   - Continue writting ipIPNS spec
   - Help freezing libp2p OKRs
   
@fsdiogo
 - Done:
   - Getting up to speed with the WebUI and Companion codebase
   - Did a bunch of PR reviews to check the current work
   - Did some small PRs with some fixes to both WebUI and Companion
 - Blocked:
   - N/A
 - Next:
   - Implement the Peers page on WebUI revamp

@gar
 - Done:
 - Blocked:
   - toPrint change https://github.com/libp2p/js-peer-id/pull/81
 - Next:
   - cli tests sharing ipfs instances
   - ipfs bitswap ledger (cli, core, and API)
     - blocked by libp2p PR above
   - ipfs bitswap reprovide implementation

@achingbrain
 - Done:
   - adding logging to ipfsd-ctll 
   - adding logging to js-api
   - resurrected npm-on-ipfs project
 - Blocked:
   - https://github.com/ipfs/go-ipfs/pull/5139
   - https://github.com/ipfs/js-ipfs/pull/1360
   - https://github.com/ipfs/aegir/pull/245
   - https://github.com/ipfs/npm-go-ipfs-dep/pull/28
   - https://github.com/ipfs/interop/pull/22
 - Next:
   - Fix up tests after Alan's interface test refactor
   - Merge MFS
   - Flesh out interop tests
   - Continue with npm-on-ipfs

@travisperson
  - Next:
    - Working on standardizing test formats https://github.com/ipfs/interface-ipfs-core/issues/313

@mkg20001
 - Done
    - aegir check if deps defined in source code are in package.json or if there are unused deps in package.json: https://github.com/ipfs/aegir/pull/241
    
@mikeal
 - Done:
    - unixfsv2 draft implementation https://github.com/mikeal/js-unixfsv2-draft
    - complex graph builder (for gharchive) https://github.com/mikeal/ipld-complex-graph-builder
    - https://github.com/mikeal/dag-cbor-sync
    - https://github.com/mikeal/dag-cbor-links
 - Next:
    - talking to infra to find a good strategy for hosting gharchive data
    - building a "shadow graph" to hold a stored map/reduce of large graphs for queries
    - sourcing candidate for hiring Community Engineer
    - building static deployment demo :)
  
@name
 - Done:
 - Blocked:
 - Next:

### Questions

- Shall we start using PeerPad for this call?
  - We will start using PeerPad going forward. Maximum testing!

### Other notes

- Several people in Berlin for the meetups all week next week, limited availability.

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
