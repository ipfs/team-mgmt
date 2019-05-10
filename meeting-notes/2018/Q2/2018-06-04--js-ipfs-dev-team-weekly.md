# ⒿⓈ⚡️ js-ipfs Core Dev Team Weekly June 4, 2018

- **Lead:** David Dias (@diasdavid)
- **Notetaker:**
- **Attendees:**
  - _attendee names...
  - @vasco-santos_
  - @achingbrain
  - @jacobheun
  - @Mr0grog
  - @mkg20001
- **Recording:** https://youtu.be/uus_XabfQO8

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
 
@diasdavid
 - Done:
   - PR Reviews, Merges and Releases
   - Waffle Grooming (js-ipfs, js-libp2p and js-ipld!)
   - Make progress on the Awesome DHT Endeavour part II - https://github.com/ipfs/js-ipfs/pull/856
   - .getMany on ipfs-block-service https://github.com/ipfs/js-ipfs-block-service/pull/81
   - More DHT tests https://github.com/ipfs/interface-ipfs-core/pull/288
   - Integration Testing Exploration - https://github.com/ipfs/notes/issues/294
   - Found hiccup on go-ipfs http-api https://github.com/ipfs/go-ipfs/issues/5047
   - Got back to https://github.com/libp2p/js-libp2p/pull/166
 - Blocked:
   - Need a way to dag.get(<Array of CIDs>) https://github.com/ipld/js-ipld/issues/132
 - Next:
   - https://github.com/libp2p/js-libp2p/pull/166
  
@alanshaw
- Done:
  - js-libp2p-switch
    - Paired with @olizilla on tracking down and solving 'already piped' error ([#262](https://github.com/libp2p/js-libp2p-switch/pull/262))
    - Found and fixed a different issue - missing `return` when selecting muxer ([#261](https://github.com/libp2p/js-libp2p-switch/pull/261))
  - Released js-ipfs 0.29.1 with Node.js 10 support ([#1358](https://github.com/ipfs/js-ipfs/pull/1358))
  - Released js-ipfs 0.29.2 with fix for `ipfs.repo.version` on uninitialized repo ([#1374](https://github.com/ipfs/js-ipfs/pull/1374))
  - Released js-ipfs 0.29.3 with fix for hanging `ipfs.repo.gc` call and update to ipfsd-ctl ([#1377](https://github.com/ipfs/js-ipfs/pull/1377))
  - Started the ball rolling for js-ipfs 0.30 ([#1375](https://github.com/ipfs/js-ipfs/issues/1375))
  - Released js-ipfs-api 22.0.1 with fix for `ipfs.util.addFromURL` ([#764](https://github.com/ipfs/js-ipfs-api/pull/764)) and BIG docs fixes/improvements ([#774](https://github.com/ipfs/js-ipfs-api/pull/774))
  - Updated ipfsd-ctl PR for allowing pass your own IpfsApi constructor ([#261](https://github.com/ipfs/js-ipfsd-ctl/pull/261))
  - ...and many more reviewing and commenting happened
- Blocked:
  - `null`
- Next:
  - Working on improving the interface-ipfs-core test suite ([#290](https://github.com/ipfs/interface-ipfs-core/pull/290))
  - Finally will get round to reviewing pin API this week ([#1045](https://github.com/ipfs/js-ipfs/pull/1045))
  - Want to finish DAG API PR... ([#755](https://github.com/ipfs/js-ipfs-api/pull/755))
  
@zcstarr
- Done: 
- Blocked:
- Next:
 - IPLD pull streams js-ipfs and js-unixfs update PR soon fixing unixfs file related test
   - https://github.com/ipld/js-ipld/pull/122
   - https://github.com/ipld/js-ipld/issues/101

@mkg20001
- Done:
  - nodetrust: better demo, fix race conditions
- Blocked: N/A
- Next:
  - Making the rendezvous module less complicated
  - Improving peer-pad discovery / Using rendezvous module for p2p-circuit discovery

@achingbrain
- Done:
  - MFS integration
  - MFS read/write locking across clusters, web workers and single threads
  - Read config from IPFS repo
- Blocked:
  - https://github.com/ipfs/js-ipfs-unixfs/pull/25 (go interop)
  - https://github.com/ipfs/js-ipfs-unixfs-engine/pull/213 (go interop)
  - https://github.com/ipfs/js-ipfs-unixfs-engine/pull/214 (go interop)
  - https://github.com/ipfs/js-ipfs/pull/1371 (go interop)
  - https://github.com/ipfs/interface-ipfs-core/pull/278 (go interop)
  - https://github.com/ipfs/js-ipfs/pull/1372
  - https://github.com/yargs/yargs/issues/1069
  - https://github.com/Joris-van-der-Wel/karma-mocha-webworker/issues/4
- Next:
  - Merge MFS

@jacobheun
- Done: 
  - Node 10 updates for js-ipfs are released
  - Created js-libp2p-pnet repo, pushed up WIP pnet creation 
  https://github.com/libp2p/js-libp2p-pnet/pull/1
  - Test stability updates for libp2p-switch, released v0.40.3 (includes some bug fixes as well)
- Blocked: N/A
- Next: 
  - Working on an issue with js-libp2p-webrtc-star 0.15.2 breaking libp2p test suite, https://github.com/libp2p/js-libp2p/issues/198#issuecomment-393943643
  - Going to work on updating the implementation of pnet across the needed repos (switch, libp2p, ipfs-repo, js-ipfs)
  - Updates to js-multicodec repos to support psk codec for pnet


@vasco-santos
- Done: 
  - Service worker gateway stats page implemented and released
  - dev.js.ipfs.io live with service worker gateway integrated
  - js-ipfsd-ctl green again
    - Review
    - Merge
    - Release
  - Integrated js-ipfs-http-response in js-ipfs (PR created)
    - https://github.com/ipfs/js-ipfs/pull/1381
- Blocked: N/A
- Next:
  - Have PRs merged in js-ipfsd-ctl
  - Start IPNS implementation
    - IPNS Working locally OKR

@Mr0grog
- Done: N/A
- Blocked: N/A
- Next:
	- Want to understand the situation with js.ipfs.io vs. the docs site
  
  - Issues around documentation of HTTP API and core API (See “the reference section” in https://github.com/ipfs/docs/pull/68)

### Questions

### Other notes

- @diasdavid: My time is specially limited this Week and I'll be out the whole next week. 
- @alanshaw: I'm on holiday next week also :S

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
