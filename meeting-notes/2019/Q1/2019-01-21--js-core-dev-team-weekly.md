# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 January 21, 2019

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @jacobheun
  - @vasco-santos
  - @vmx
  - @lidel
  - @chriscool
  - @mcollina
  - @achingbrain
- **Recording:** https://youtu.be/5Ka4b5WG2BM

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
    - Resolved issue with switch to bignumber.js ([#187](https://github.com/ipfs/js-ipfs-repo/pull/187)) to unblock [#1803](https://github.com/ipfs/js-ipfs/pull/1803) for 0.34 release
    - Opened PR for disabling preload in test/CI environments [#1819](https://github.com/ipfs/js-ipfs/pull/1819)
    - Fixed `hlsjs-ipfs-loader` for [`browser-video-streaming` example](https://github.com/moshisushi/hlsjs-ipfs-loader/pull/7)
    - Many fixes for JS IPFS examples
    - Released js-ipfs 0.34 🚢💨 🎉
    - Created "lazily loaded IPLD formats from IPFS" proof of concept see https://github.com/alanshaw/ipld-formats and https://youtu.be/ADA_HT2whok
    - Enabled browser builds for `ipld-ethereum` [#43](https://github.com/ipld/js-ipld-ethereum/pull/43) and `ipld-git` [#39](https://github.com/ipld/js-ipld-git/pull/39)
    - Fixed illusive "Database is not open" error [#1834](https://github.com/ipfs/js-ipfs/pull/1834)
    - Added feature `echo "hello" | jsipfs add` [#1833](https://github.com/ipfs/js-ipfs/pull/1833)
- Blocked:
    - `null`
- Next:
    - Timeline for JS IPFS roadmap
    - Finally get up to speed with IPFS benchmarks and aim to write a benchmark
    - Start CID v1 base32 default work ([step 2 here](https://github.com/ipfs/js-ipfs/issues/1440#issuecomment-407343797))

@jacobheun
- Done:
	- Libp2p Team Week all last week
    - Created a rough roadmap for rolling out [Rendezvous](https://gist.github.com/jacobheun/13247de56e61e717c8a6d682406d01bf)
      - Will work on improving that and will turn that into an Awesome Endeavor issue this week.
    - We finalized a draft of the [rendezvous spec](https://github.com/libp2p/specs/blob/e1083c1f9d8f7afc0d65a43a12b05492f3873385/rendezvous/README.md), which will enable us to finish up the initial work on the rendezvous go and js implementations
- Blocked: N/A
- Next:
  - Create `Awesome Endeavor` issue to track the release of Rendezvous. 
    - Will include decommissioning plan for \*-star servers.
  - Continue looking into js heap issue when exchanging files [libp2p#309](https://github.com/libp2p/js-libp2p/issues/309)
  	- Will create an issue in ipfs/benchmark for this and refernce the slowness with go cat'ing from js
  - Finalize libp2p daemon PR
  - Create plan for completing needed work for multi address listening on transports and graceful listening configuration for Switch. Context at [interface-transport#41](https://github.com/libp2p/interface-transport/issues/41)

@vmx
- Done:
  - Still working on getting the [new js-ipld API](https://github.com/ipld/js-ipld/pull/185) work with js-ipfs
- Blocked:
  - Not yet, but once the js-ipfs tests pass with the new js-ipld API: Using constants for multicodecs: https://github.com/multiformats/js-multicodec/pull/35
- Next:
  - Still working on getting the [new js-ipld API](https://github.com/ipld/js-ipld/pull/185) work with js-ipfs

@hugomrdias (not attending)
- Done:
  - still working on making mplex work
  - make pull-stream-to-stream return a proper readable-stream 3
  - ci prototypes are passing 
- Blocked:
- Next:
  - fix this https://github.com/ipfs/js-ipfs/issues/1827#issuecomment-455501157
  - fix cors related issues in aegir test 
  - hopefully this week Jacob can help me with mplex and im able to finish the bundle size PRs 


@zcstarr(not attending)
- Done:
	- js-ipfs-repo (async/await) changes thx for pointers last week should be able to test changes soon 
- Blocked:
- Next:
  - js-ipfs-repo changes

@vasco-santos
- Done:
  - Libp2p team week
    - Planning for 2019 and protocols discussion
    - Research on local transports/web bluetooth for libp2p
  - DHT PR rebased with newest `js-ipfs` release
- Blocked:
  - DHT tests
    - [ipfs/js-ipfs#1827](https://github.com/ipfs/js-ipfs/issues/1827)
- Next:
  - Get [ipfs/js-ipfs#856](https://github.com/ipfs/js-ipfs/pull/856) ready to be merged
  - Write pubsub benchmark test
  - Meeting with ChainSafe in the context of collaborating for gossipsub in JS land [ChainSafeSystems/gossipsub-js](https://github.com/ChainSafeSystems/gossipsub-js/)
  - Get [libp2p-daemon-client#1](https://github.com/libp2p/js-libp2p-daemon-client/pull/1) merged
  - Continue `libp2p` interop work

@achingbrain
- Done:
	- Adding support for IPFS to npm
  - Package Managers kickoff (working group)
- Blocked:
  - n/a
- Next:
	- Adding support for IPFS to npm
  
@mcollina
- done:
   - nothing, I was in India :D
- blocked:
- next:
    - analysis

@elexy
- done: 
  - Rendezvous setup
  - met with Hugo about the CI integration.
  - Also added tests to the runner.
- blocked:
  - https://github.com/ipfs/benchmarks/issues/150
- next: 
  - https://github.com/ipfs/benchmarks/issues/198
  - https://github.com/ipfs/benchmarks/issues/169
  - https://github.com/ipfs/benchmarks/issues/165
  - https://github.com/ipfs/benchmarks/issues/147
  - https://github.com/ipfs/benchmarks/issues/35

@litzenberegr
- done:
  - Presentation on adding tests
  - Support for the runner ( testing and more troubleshooting )
    - https://github.com/ipfs/benchmarks/pull/194
    - https://github.com/ipfs/benchmarks/pull/189
    - https://github.com/ipfs/benchmarks/pull/187
    - https://github.com/ipfs/benchmarks/pull/184
  - Converted  browser tests to react components
    - https://github.com/ipfs/benchmarks/pull/193
  - Added a couple of tests for that use trickle strategy
    - https://github.com/ipfs/benchmarks/pull/201
    -  https://github.com/ipfs/benchmarks/pull/200
- blocked:
- next:
  - MFS test 
  - the js -> go peer tests


@lidel
- Done:
	- [Notes on js-ipfs as a vessel to bring IPFS to Brave in 2019](https://github.com/brave/brave-browser/issues/819#issuecomment-456039555)
  	- related ipfs-companion issue: [support chrome.sockets.* APIs](https://github.com/ipfs-shipyard/ipfs-companion/issues/664)
- Blocked:
- Next:
	- If time allows, look into making Brave build with chrome.sockets API enabled 

@chriscool
- Done:
  - Call with Alan and Erin to finalize my workplan
- Blocked:
- Next:
  - Work on a dashboard that automatically show how compliant an IPFS implementation is and how complete Sharness test coverage is
  	- https://github.com/ipfs/ipfs-sharness-tests/issues/6

@name
- Done:
- Blocked:
- Next:

### Other notes

<!-- After each call, the notetaker submits a PR to ipfs/team-mgmt to store the notes on the meeting-notes folder -->
