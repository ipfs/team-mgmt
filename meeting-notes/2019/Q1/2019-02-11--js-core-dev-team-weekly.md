# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 February 11, 2019

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @jimpick
  - @vasco-santos
  - @vmx
  - @zcstarr
  - @lidel
  - @achingbrain
- **Recording:** https://youtu.be/T1BHUbv5_xQ

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

@alanshaw
- Done:
    - Added `iim ls` command [#4](https://github.com/alanshaw/iim/issues/4#issuecomment-460587508)
        - <img width="216" alt="screenshot 2019-02-05 at 10 17 37" src="https://user-images.githubusercontent.com/152863/52267509-1ab95280-2931-11e9-94a7-c72c327a53fb.png">
    - CIDv1 base32 default
        - MFS [#38](https://github.com/ipfs/js-ipfs-mfs/pull/38)
        - dag-pb [#115](https://github.com/ipld/js-ipld-dag-pb/pull/115)
        - unixfs engine [#235](https://github.com/ipfs/js-ipfs-unixfs-engine/pull/235)
        - unixfs importer [#21](https://github.com/ipfs/js-ipfs-unixfs-importer/pull/21)
        - js-ipfs [#1868](https://github.com/ipfs/js-ipfs/pull/1868)
    - Merged DHT PR 🔥 [#856](https://github.com/ipfs/js-ipfs/pull/856)
    - Released `js-ipfs 0.35.0-pre.0` [CHANGELOG](https://github.com/ipfs/js-ipfs/blob/master/CHANGELOG.md#0350-pre0-2019-02-11)
        - WARNING there be 🐉:
            - "Unable to update lock within the stale threshold"
            - CPU pegged at 100%
    - Speed up `js-ipfs-http-client` tests 14m to 5m [#942](https://github.com/ipfs/js-ipfs-http-client/pull/942)
- Blocked:
    - `null`
- Next:
    - Let users know of `ipfs-api` => `ipfs-http-client` rename [#929](https://github.com/ipfs/js-ipfs-http-client/issues/929)
        - <img width="500" alt="image" src="https://user-images.githubusercontent.com/1211152/52558871-045d3c00-2df4-11e9-890a-c14cf88949ac.png">
    - DHT testing with `0.35.0-pre.0`
    - Continue CID v1 base32 endeavour - [track it here #1440](https://github.com/ipfs/js-ipfs/issues/1440#issuecomment-461049347)

@vasco-santos
- Done:
  - DHT Awesome Endeavor got ready and merged
    - [ipfs/js-ipfs#/856](https://github.com/ipfs/js-ipfs/pull/856)
  - Number of open connections under control and configurable
    - [libp2p/js-libp2p-kad-dht#66](https://github.com/libp2p/js-libp2p-kad-dht/pull/66)
    - [libp2p/js-libp2p#303](https://github.com/libp2p/js-libp2p/pull/303)
    - [ipfs/js-ipfs#1800](https://github.com/ipfs/js-ipfs/pull/1800) (needs review)
  - libp2p interop tests setup and first set of test for connect
    - [libp2p/interop#4](https://github.com/libp2p/interop/pull/4)
- Blocked: 
- Next:
  - libp2p interop tests
    - have [libp2p/npm-go-libp2p-dep#1](https://github.com/libp2p/npm-go-libp2p-dep/pull/1) ready to be shipped
    - have [libp2p/interop#4](https://github.com/libp2p/interop/pull/4) ready to be shipped
    - add dht interop tests
  - enable gossipsub implementation
    - improve documentation for [libp2p/js-libp2p-pubsub](https://github.com/libp2p/js-libp2p-pubsub)
    - review initial implementation of gossipsub by @Mikerah [ChainSafeSystems/gossipsub-js#15](https://github.com/ChainSafeSystems/gossipsub-js/pull/15)
    - add pubsub support on [libp2p/js-libp2p-daemon-client](https://github.com/libp2p/js-libp2p-daemon-client)
    
@jacobheun
- Done:
  - Released [js-datastore-s3@0.2.1](https://github.com/ipfs/js-datastore-s3/blob/master/CHANGELOG.md#021-2019-02-07)
    - New sample lock file and fixes for aws calling back multiple times
  - Fix [aegir prerelease](https://github.com/ipfs/aegir/pull/322/files) docs  
  - Added support for interface-stream-muxer to pull-mplex
  - Added [basic benchmarks](https://github.com/libp2p/pull-mplex/tree/feat/interface/benchmarks) for pull-mplex and libp2p-mplex
- Blocked:
- Next:   
  - Work on resolving the latest [ipfs/interop](https://github.com/ipfs/interop/pull/51#issuecomment-457632477) relay error on linux browsers
  - Work with @achingbrain on a blog post for npm on ipfs and s3 datastore
  - Finish [pull-mplex](https://github.com/libp2p/pull-mplex/pull/6) work and start the roll out to js-ipfs.
    - Will do lots of testing before rolling this out

@achingbrain
- Done:
  - Reviewed JS-IPLD API
  - Trying to make npm-on-ipfs more stable
  - Tracking down potential memory leak
  - Merged & released unixfs-exporter https://github.com/ipfs/js-ipfs-unixfs-exporter/pull/16
  - 
- Blocked:
 - N/a
- Next:
  - Inaugural Package Managers Weekly Sync
  - Update Package Managers roadmap doc
  - If IPLD changes merged, merge & release unixfs/mfs to use it


@vmx
- Done:
  - Applied review comments on new JS-IPLD API
  - ES async functions in async/waterfall can't be transpiled (some information for people working on the  Awesome Endeavour: Async Iterators #1670): https://github.com/ipfs/js-ipfs/issues/1670#issuecomment-461640515
  - Some interface-ipfs-core tests fail: https://github.com/ipfs/aegir/pull/326
- Blocked:
  - Nope
- Next:
  - Apply @alanshaw's review comments on new JS-IPLD API and hopefully get it merged soon
  
  
@zcstarr
- Done:
	- PR for async await ipfs-repo https://github.com/ipfs/js-ipfs-repo/pull/189
- Blocked:
- Next:
	- Address any PR comments

@name
- Done:
- Blocked:
- Next:

### Other notes
 
<!-- After each call, the notetaker submits a PR to ipfs/team-mgmt to store the notes on the meeting-notes folder -->
