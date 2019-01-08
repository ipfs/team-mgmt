
# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 January 07, 2019

- **Lead:** @jacobheun
- **Notetaker:** @jacobheun
- **Attendees:**
  - @vasco-santos
  - @zcstarr
  - @litzenberger
  - @vmx
  
- **Recording:** https://youtu.be/q8evwA86OnI

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

@alanshaw (not attending)
- Done:
    - PR review for [DHT interop tests](https://github.com/ipfs/interop/pull/36)
    - PR review for [IPNS pubsub interop tests](https://github.com/ipfs/interop/pull/39)
    - PR review for [IPNS over DHT interop tests](https://github.com/ipfs/interop/pull/47)
    - Looked into [slow `cat` issue](https://github.com/ipfs/js-ipfs/issues/1706)
        - We need an streaming `ipld.getMany` - see [conversation here](https://github.com/ipfs/js-ipfs-unixfs-exporter/pull/13)
        - [Opened PR to fix initial 10s delay of boostrap node discovery](https://github.com/libp2p/js-libp2p-bootstrap/pull/86)
    - Spent time familiarising myself with `libp2p-switch`, `libp2p-mplex` and `multistream-select` - I've started putting together a proposal for `libp2p-mplex` with async iterators
    - Reviewed perf PR for `datastore-fs` to replace `write-file-atomic` instead of `fast-write-atomic`
        - Reviewed `fast-write-atomic` code, opened 2 issues [#3](https://github.com/mcollina/fast-write-atomic/issues/3) and [#4](https://github.com/mcollina/fast-write-atomic/issues/3) which were resolved quickly by @mcollina
    - Helped with reviews and releases necessary for resolution of [stack overflow issue](https://github.com/libp2p/js-libp2p-switch/issues/287)
    - Volunteered to [start a ProtoSchool chapter in London](https://github.com/ProtoSchool/organizing/issues/3)
- Blocked:
    - 0.34 release now blocked on an [issue handling control signals](https://ci.ipfs.team/blue/organizations/jenkins/IPFS%2Fjs-ipfs/detail/PR-1803/3/pipeline/257) (also in master 😱)
        - I am on holiday this week - would appreciate someone looking into this!
- Next:
    - n/a - on holiday

@vasco-santos
- Done:
  - IPNS spec ready, reviewed and merged [ipfs/specs#184](https://github.com/ipfs/specs/pull/184)
  - IPNS / DHT interop reviews by Alan were resolved [ipfs/interop#36](https://github.com/ipfs/interop/pull/36), [ipfs/interop#39](https://github.com/ipfs/interop/pull/39) and [ipfs/interop#47](https://github.com/ipfs/interop/pull/47)
  - JS libp2p-daemon-client with basic commands and dht almost ready [libp2p/js-libp2p-daemon-client#1](https://github.com/libp2p/js-libp2p-daemon-client/pull/1)
  - Helped with a lot of PRs and reviews for updating dependencies (in the context of the [stack overflow issue](https://github.com/libp2p/js-libp2p-switch/issues/287) and `js-ipfs` new release)
- Blocked: n/a
- Next:
  - Preparation for libp2p team week (in Porto 🚀)
  - Add discovery limits when using dht discovery [libp2p/js-libp2p-kad-dht#61](https://github.com/libp2p/js-libp2p-kad-dht/issues/61)
  - PR with the first set of interop tests for libp2p using `js-libp2p-daemon-client` with `js-libp2p-daemon` and `go-libp2p-daemon`

@jacobheun
- Done:
  - Resolved stack overflow issue in js-ipfs tests [libp2p-switch#287](https://github.com/libp2p/js-libp2p-switch/issues/287)
    - Reviewed PRs needed for dep updates
  - bitswap sync in async code PR [js-ipfs-bitswap#184](https://github.com/ipfs/js-ipfs-bitswap/pull/184)
  - Caught up on open PRs from over the holiday
  - Met with @alanshaw, @mcollina, @vasco-santos and @hugormdias to discuss switch/multistream/mplex. Discussed need to overhaul mplex.
  	- May warrant finishing/revisiting the open pull-stream WIP PR\ [libp2p-mplex#76](https://github.com/libp2p/js-libp2p-mplex/pull/76)
- Blocked:
- Next:
  - Prep for libp2p team week (all next week)
  - Fix libp2p-crypto interface for [libp2p-crypto#129](https://github.com/libp2p/js-libp2p-crypto/issues/129)
  - Finish initial daemon work PR [libp2p-daemon#1](https://github.com/libp2p/js-libp2p-daemon/pull/1)

@hugomrdias
- Done:
  - Holidays and catching up
  - Bubbling up bundle size PRs
  - Met with @alanshaw, @mcollina, @vasco-santos and @jacobheun to discuss switch/multistream/mplex. 
- Blocked:
- Next:
  - Merge remaining bundle size PRs
  - Add bundle size cmd to aegir
  - Finish Error codes proposal [js-ipfs#1746](https://github.com/ipfs/js-ipfs/pull/1746)

@mcollina
- done:
	- https://github.com/mcollina/fast-write-atomic
	- https://github.com/ipfs/js-datastore-fs/pull/21
	- streams and mplex call
	- code reviews
- blocked:
- next:
	- mplex issues

@elexy
- done: 
 - [Dashboard update](https://github.com/ipfs/benchmarks/pull/138)
 - https://github.com/ipfs/benchmarks/pull/156
- blocked:
- next: 
  - Video
  - Rendezvous server for ipfs-browser tests

@vmx
- Done:
  - Holidays
  - Fully encrypted system + Secure Boot (on Debian)
- Blocked: Nope
- Next:
  - Catching up
  - Finetune new laptop
  - Get js-ipfs work with new IPLD API (inludes async/await stuff)


@litzenberegr
- done:
  - [Added mulit small file browser test](https://github.com/ipfs/benchmarks/pull/153)
  - [Write result upload files human readable](https://github.com/ipfs/benchmarks/pull/146)
  - [Added local file add browser test](https://github.com/ipfs/benchmarks/pull/152)
  - [Fix: Fileset param for runner](https://github.com/ipfs/benchmarks/pull/136)
  - [Removed WARMUP flag due to not working correctly.  Will revist if time](https://github.com/ipfs/benchmarks/pull/133)
  - [Integration: Remote runner fix](https://github.com/ipfs/benchmarks/pull/132)
  - [Integration: Fix for Go Test](https://github.com/ipfs/benchmarks/pull/131)
  - [Fix around storing files in IPFS](https://github.com/ipfs/benchmarks/pull/120)
- blocked:
- next:
  - Browser test with multiple peers
  - Update readme
  - Add two more go tests
  - Continue adding tests from the test matrix

@zcstarr
- Done:
	- time freed up again
- Blocked:
  - None
- Next:
  - jump back into ipld or js-ipfs things

@name
- Done:
- Blocked:
- Next:

### Questions
- If anyone is using [IPFS Companion](https://github.com/ipfs-shipyard/ipfs-companion), you can use the latest Beta! [v2.6.3.12520](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.6.3.12520)
  - feedback on newly added `window.ipfs.enable()` is welcome at [ipfs-companion/issues/589](https://github.com/ipfs-shipyard/ipfs-companion/issues/589)
  - **Note:**  `window.ipfs.<cmd>()` is being deprecated and will be removed by the end of Q1 2019
- https://proto.school/#/ is live! Check it out!
- Erin, of the infra team, is looking to attend more weekly syncs to get infra more plugged in.

### Other notes

- @alanshaw on holiday 7th - 11th Jan
- libp2p team week is next week, libp2p team may miss next weeks sync

<!-- After each call, the notetaker submits a PR to ipfs/team-mgmt to store the notes on the meeting-notes folder -->
