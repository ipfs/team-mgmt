# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 October 01, 2018

- **Lead:** Jacob Heun
- **Notetaker:**
- **Attendees:**
  - @vmx
  - @jimpick
  - @pgte
  - @vasco-santos
  - @hugomrdias
  - @achingbrain
  - @mkg20001
- **Recording:** https://youtu.be/s5L81i8qUDs

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

@vmx
 - Done:
   - GraphSync (sorry, no demo yet)
   - Some IPLD maintainance (Greenkeeper, removing old CI, cleanup dependencies)
 - Blocked: Nope
 - Next:
   - GraphSync
   - Recording FOSS4G talk (yay, I've a nice mic now)
   - Catching up with IPLD things @mikeal is doing
   
@jacobheun
  - Done:
    - Finished functional [libp2p-switch#278](https://github.com/libp2p/js-libp2p-switch/pull/278) state machine implementation and opened it up for feedback.
    - [Delegated routing](https://github.com/libp2p/js-libp2p/pull/242) is done for js-libp2p, it's ready to go in the 0.24 release.
      - Example has been added as well! (The go-ipfs work still needs to be finished and deployed for this to work properly)
    - Finalized OKRs for libp2p Q4, pending any final feedback, they shouldnt change.
    - libp2p test stability improvements
    - libp2p-mplex fix [#84](https://github.com/libp2p/js-libp2p-mplex/pull/84) for Multiplex._send https://github.com/libp2p/js-libp2p-mplex/pull/84
  - Blocked: 
  - Next:
    - Work on feedback for switch state machine
    - Hoping to prep/test libp2p 0.24 later this week

@vasco-santos
  - Done:
    - Finished Q4 OKR Planning discussions
    - DHT Awesome Endeavor continued
      - [js-libp2p#251](https://github.com/libp2p/js-libp2p/pull/251)
      - [js-libp2p-kad-dht#42](https://github.com/libp2p/js-libp2p-kad-dht/pull/42)
      - [js-libp2p-mplex#82](https://github.com/libp2p/js-libp2p-mplex/pull/82)
      - [js-libp2p-kad-dht#45](https://github.com/libp2p/js-libp2p-kad-dht/pull/45)
      - WIP - libp2p-record being interoperability again
    - Delegated Peer and Content Routing review
    - Maintenance work - reviews
      - Add support for CIDv1 and Base32 [js-ipfs-http-response#9](https://github.com/ipfs/js-ipfs-http-response/pull/9)
      - Do parallel lookups on disjoint sets of nodes [js-libp2p-kad-dht#39](https://github.com/libp2p/js-libp2p-kad-dht/pull/39)
  - Blocked:
    - IPNS Interop
      - [interop#26](https://github.com/ipfs/interop/pull/26) - Needs review and merge (files tests are broken)
    - IPNS over Pubsub
      - [interface-ipfs-core#361](https://github.com/ipfs/interface-ipfs-core/pull/361)
      - [js-ipfs-api#846](https://github.com/ipfs/js-ipfs-api/pull/846)
      - [js-ipfs#1559](https://github.com/ipfs/js-ipfs/pull/1559)
      - All need review/release and are dependencies of each other from top to bottom
    - DHT
      - [interface-ipfs-core/pull/368](https://github.com/ipfs/interface-ipfs-core/pull/368)       - Review and release
  - Next:
    - Finish libp2p-record being interop
    - Continue working on Awesome DHT Endeavour / DHT Interop
    - Create PR with IPNS over Pubsub Interop tests
    - Fix feedback available for blocked PRs
   
@hugomrdias
- Done
    - Delete ie8-polyfill.js [https://github.com/jhiesey/stream-http/pull/95](https://github.com/jhiesey/stream-http/pull/95)
    - okr planning
    - help out with examples to embed in js.ipfs.io
    - aegir
        - fix: fix typo in the docs template https://github.com/ipfs/aegir/pull/267
        - fix: fix documentation.js not loading files and change input file https://github.com/ipfs/aegir/pull/272
    - ipfsd-ctl
        - Chore/improve docs https://github.com/ipfs/js-ipfsd-ctl/pull/294
        - fix documentation.js not processing browser ignored files
            - https://github.com/documentationjs/documentation/issues/1143
            - https://github.com/hugomrdias/documentation/tree/fix/module-deps-walk
- Blocked
    - ipfs-api chunked add https://github.com/ipfs/js-ipfs-api/pull/851
    - ipfs chunked add https://github.com/ipfs/js-ipfs/pull/1540
    - stream-http still not release with https://github.com/jhiesey/stream-http/pull/93
    - aegir
        - remove requirement to include @returns in jsdoc https://github.com/ipfs/aegir/pull/265
- Next
    - Doesn't work inside a service-worker on Firefox [848#issuecomment-419887279](https://github.com/ipfs/js-ipfs-api/issues/848#issuecomment-419887279)
    - fix pregen peerid on ipfsd-ctl
    - rework options handling on ipfsd-ctl
    - release ipfsd-ctl with pregen peer-id , docs, updated deps etc.
    - check and fix feedback here  https://github.com/ipfs/js-ipfs/pull/1540

@mkg20001
 - Next:
   - aegir bundling https://github.com/ipfs/aegir/issues/215
   - updating some other aegir PRs which got reviewd

@achingbrain
 - Done:
   - Refactor npm-on-ipfs to fetch with CIDs
   - Report correct size for raw DAG nodes: https://github.com/ipfs/js-ipfs/pull/1591
   - Refactored mfs.write command to work better under load: https://github.com/ipfs/js-ipfs-mfs/pull/15
 - Blocked:
   - IPLD dag.get returns v0 CIDs for nodes `put` with v1 CIDs https://github.com/ipld/js-ipld/issues/157
 - Next:
   - Refactor npm-on-ipfs to fetch with CIDs
   - Configure npm-on-ipfs to use s3-datastore
   - (candidate: get a external hard drive with the full npm on a IPFS repo. Then, challenge the whole IPFS Crowd to transfer ththis dataset really fast during the Hack Time, Friday.)

@name
 - Done:
 - Blocked:
 - Next:

### Questions

### Other notes
* No meeting next week (8 Oct), as it is Lab Week and many team members will be in Glasgow.
* Vasco out
  * 5th October (Portugal public holiday)
  * 10th - 17th October (holiday with limited Internet aka roaming)

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
