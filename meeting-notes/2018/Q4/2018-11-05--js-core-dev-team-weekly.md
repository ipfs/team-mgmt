# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 November 5, 2018

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @vmx
  - @vasco-santos
  - @diasdavid
- **Recording:** https://youtu.be/n9q1jirGqcM 

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
  - Failure on Browsers on Windows (did you know that on Windows a custom sort function will get items in different order than on Linux?): https://github.com/ipld/js-ipld-ethereum/pull/36
  - CI Windows failure: https://github.com/ipfs/jenkins-libs/pull/40
  - IPLD housekeeping
- Blocked: Nope
- Next:
  - GraphSync (hopefully this week)
  - Working on substential, rather than random stuff

@alanshaw
* Done:
    * Released `js-ipfs 0.33.0` - thanks GUI team for all the Web UI work! 🥰 💖
    * We had a bumper week last week, MANY closed PRs and issues
        * <img src="https://ipfs.io/ipfs/QmQeEyDPA47GqnduyVVWNdnj6UBPXYPVWogAQoqmAcLx6y" width="400"/>
    * Released `js-ipfs 0.33.1` https://github.com/ipfs/js-ipfs/pull/1693
* Blocked:
    * `null`
* Next:
    * Roadmapping 2019 for JS IPFS
    * Work on `--cid-base` option

@jacobheun
- Done:
  - Had a planning meeting with @bigs to discuss the libp2p testbed work and we started a plan of action for that. We're meeting again tomorrow to talk through things some more.
  - Misc bug fixes for the 0.24 libp2p release
	  - Working through ongoing issues with libp2p-spdy
  - Remove unncessary setImmediate in [libp2p-crypto#132](https://github.com/libp2p/js-libp2p-crypto/pull/132) that was aggrevating issues with libp2p-spdy 
  - Removed Bootstrap logic from js-ipfs tests that dont need it [js-ipfs#1695](https://github.com/ipfs/js-ipfs/pull/1695)
  - Updated examples for libp2p 0.24 [js-libp2p#271](https://github.com/libp2p/js-libp2p/pull/271). Need to fix issues with libp2p-spdy for the muxing example.
- Blocked:
  - [spdy-transport](https://github.com/spdy-http2/spdy-transport) needs more maintenance if we're going to continue to use it via libp2p-spdy
- Next:
  - Get libp2p-spdy ready for the js-libp2p release
  - Work on testbed
  - IPFS Roadmapping

@vasco-santos
- Done:
  - aegir linting issue in `js-ipfs`
    - [ipfs/aegir#294](https://github.com/ipfs/aegir/pull/294)
  - IPNS over Pubsub
    - talked with go team about IPNS over Pubsub topic interop problem
      - [ipfs/interop/pull/39](https://github.com/ipfs/interop/pull/39)
  - DHT
    - Add datastore from `js-ipfs` to `js-libp2p-kad-dht`
      - [js-libp2p/pull/270](https://github.com/libp2p/js-libp2p/pull/270)
    - `interface-ipfs-core` tests green for dht get/put
      - [interface-ipfs-core/pull/383](https://github.com/ipfs/interface-ipfs-core/pull/383)
    - fix dht record outdated correction
      - [js-libp2p-kad-dht/pull/49](https://github.com/libp2p/js-libp2p-kad-dht/pull/49)
    - Rebased / updated awesome endeavour PR
      - [js-ipfs#856](https://github.com/ipfs/js-ipfs/pull/856)
    - WIP repo with iptb for stress testing
      - [vasco-santos/iptb-dht-test](https://github.com/vasco-santos/iptb-dht-test)
    - kad-dht tests in a smaller scale than using iptb
      - [js-libp2p-kad-dht/pull/50](https://github.com/libp2p/js-libp2p-kad-dht/pull/50)
- Blocked:
  - finish DHT stress tests using IPTB
    - DHT cli is not implemented
  - IPNS over Pubsub interop
    - decision between `base64url` vs `base32` for topic + `go-ipfs` fix and release
      - [ipfs/interop/pull/39](https://github.com/ipfs/interop/pull/39)
- Next:
  - IPFS Roadmap
  - Address DHT reviews
  - DHT CLI for `js-ipfs`
  - Start IPNS over DHT PR

@diasdavid
- Done:
  - ping tests "fixed" - https://github.com/ipfs/js-ipfs/pull/1685
  - get interop tests to test for exchange files again and add more fun stuff https://github.com/ipfs/interop/pull/44
  - many PRs reviewed, merged and 
  - continue the first milestomne of Files API refactor, got blocked by some MFS stuff but @achingbrain already gave me an hint.
- Blocked:
- Next:
  - Contribute to the Roadmaps (All of them)

@name
- Done:
- Blocked:
- Next:

### Questions
- What are the timeline expectations around the async iterator awesome endeavor?
  - We'd like to start working on the dependencies first, like multiformats, and start working our way to js-ipfs. We don't want to disrupt OKR work, and we should be trying to work this in as a part of the 40% tiemme we should have after commiting to our OKRs (at 60%) time.
  - Should see more planning around APIs this quarter (Q4 2018) and implementations next quarter (Q1 2018).

### Other notes
- Discussion around using major semver versions for js-ipfs dependencies was tabled as we were running short on time.

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
