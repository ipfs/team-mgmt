# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 January 14, 2019

- **Lead:** @alanshaw
- **Notetaker:** @vmx
- **Attendees:**
  - @vmx
  - @hugomrdias
  - @litzenberger
  - @zcstarr
  - @lidel
  - @eefahy
  - @daviddias
  - @alanshaw
  - @achingbrain
  - @pkafei
- **Recording:** TBC

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
    - Opened PR to remove IPLD `inMemory` utility https://github.com/ipld/js-ipld/pull/188
    - Built a module [`ipfs-only-hash`](https://www.npmjs.com/package/ipfs-only-hash)
    - Dependency wrangling again to ensure multiple different versions of `libp2p-crypto` are not released with 0.34
        - [#75](https://github.com/libp2p/js-libp2p-kad-dht/pull/75) [#925](https://github.com/ipfs/js-ipfs-http-client/pull/925) and [#428](https://github.com/ipfs/interface-ipfs-core/pull/428)
    - Fixed issue handling control signals that was identified last week and blocking the release
        - Thanks @jacobheun for [helping](https://github.com/ipfs/js-ipfs/pull/1803#issuecomment-453292712)
        - [Fixed here](https://github.com/ipfs/js-ipfs/pull/1803#issuecomment-454056624)
- Blocked:
    - 0.34 release now blocked on [`stats.bw` tests failing](https://ci.ipfs.team/blue/organizations/jenkins/IPFS%2Fjs-ipfs/detail/PR-1803/4/pipeline/259)
        - Initial guess is that some of @hugomrdias's PRs to reduce bundle size have been merged and released as patch versions with big.js -> bignumber.js change
- Next:
    - Timeline for JS IPFS roadmap
    - Review benchmark handover emails
    - Release 0.34
    - Start CID v1 base32 default work ([step 2 here](https://github.com/ipfs/js-ipfs/issues/1440#issuecomment-407343797))

@vasco-santos (not attending)
- Done:
  - [libp2p-daemon-client#1](https://github.com/libp2p/js-libp2p-daemon-client/pull/1) is ready for an initial review
  - WIP [npm-go-libp2p-dep#1](https://github.com/libp2p/npm-go-libp2p-dep/pull/1) for interop tests (still needs to differentiate platforms as in `ipfs`)
  - Initial setup for `libp2p` interop tests
  - Reviews and releases for the `bundle-size` PRs
- Blocked:
  - N/A
- Next:
  - Continue `libp2p` interop work
  - Get [libp2p-daemon-client#1](https://github.com/libp2p/js-libp2p-daemon-client/pull/1) merged
  - Get [ipfs/js-ipfs#856](https://github.com/ipfs/js-ipfs/pull/856) ready to be merged

@hugomrdias
- Done:
  - multihashing-async Promise PR 
  - Nearform CI handover (call with elexy)
  - Research and brainstorming arraybuffer/typedarray support
  - bundle-size PRs
- Blocked:
- Next:
  - Finish bundle PRs
  - integrate benchmarks trigger in the CI PRs

@vmx
- Done:
   - Catching up after holidays
   - Gettings the [new IPLD API](https://github.com/ipld/js-ipld/pull/185) work on IPFS
   - Found out that we have modules with a single maintainer only (ipfs-unixfs-importer)
- Blocked:
   - Nope
- Next:
   - Implementing `tree()` for new js-ipld (I originally thought it wouldn't be needed, but it should be there)
   - Working on getting all IPFS tests pass on the new IPLD API
   - Get agreement on using constants (numbers) instead of strings for multiformat codecs: https://github.com/multiformats/js-multicodec/pull/35
   - Propose that also js-cid should use constants instead of a string for the codecs

@achingbrain
- Done:
  - Catching up on emails
  - Merged fix for progress option not being a function
- Blocked:
  - Nothing
- Next:
  - Merge Alan's PRs for ipld-in-memory
  - Prep for Package Managers kick off
  - Review IPFS benchmark suite

@zcstarr
- Done:
  - Catching up with project
- Blocked:
- Next:
	- Diving into some other awesome endeavor async/await
  - looking at js-libp2p-circuit async/await

@elexy (Out on January 15&16)
- done: 
  - Debug browser test deployment with Ron
- blocked:
  - [Need port 9090 open](https://github.com/ipfs/infra/issues/469)
  - [logging question](https://github.com/ipfs/benchmarks/issues/150)
- next: 
  - Work with Hugo on CI integration and runner endpoint feedback
  - make runner self healing: https://github.com/ipfs/benchmarks/issues/169

@litzenberger
- done:
  - First draft of writing benchmarks for this week presentation
  - [Troubleshooting remote runner with multi-peer browser tests](https://github.com/ipfs/benchmarks/pull/182)
  - [Added more logging to browser tests](https://github.com/ipfs/benchmarks/pull/175)
  - [Browser tests fix](https://github.com/ipfs/benchmarks/pull/163)
  - Found we were using the older libp2p which would fail the multi-peer tests
  - Added issue https://github.com/ipfs/benchmarks/issues/179
- blocked:
- next:
  - Refactor browser test adding components
  - More testing and adding tests
  - Adding benchmarks meeting


### Other notes

 - (@vmx) We should make sure that all modules have more than one maintainer
 - (@daviddias) If you do a breaking change, please check for projects depending on it. GitHub can be used for this, example for js-ipld: https://github.com/ipld/js-ipld/network/dependents
 - (@alanshaw) If you want to help out, please hop on #ipfs-dev on freenode
 - (@eefahy) Preload nodes see bit of trolling.
   - Possible mitigating measures:
     - Throttling
     - Proof of work (not the Bitcoin one)
   - Needs more design work
   - @eefahy will give an update once there are measures in place
