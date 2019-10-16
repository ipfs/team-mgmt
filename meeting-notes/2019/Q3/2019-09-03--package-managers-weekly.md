# 📦 Package Managers Weekly Sync

## Sept 3, 2019

- **Lead:** @achingbrain
- **Notetaker:** @momack2
- **Attendees:**
  - @dirkmc
  - @achingbrain
  - @alanshaw
- **Recording:** https://youtu.be/XSoaj_02ZSA

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

## Updates

@achingbrain
- Done:
  - Landing `ipfs._addAsyncIterator` in `js-ipfs`
  - Upgraded `ifpsd-ctl` in `js-ipfs-http-client`
- Blocked:
  - N/A
- Next:
  - Land `ipfs._addAsyncIterator` in `js-ipfs`

@dirkmc
- Done:
  - Created PoC for Bitswap protocol extensions: [go-bitswap#189](https://github.com/ipfs/go-bitswap/pull/189)
- Next:
  - Continuing to update PoC to perform better against benchmarks
  - Will update [protocol extensions issue](https://github.com/ipfs/go-bitswap/issues/186) with findings

@aschmahmann
- Done:
   - Discovery helpers PR basically ready
- Blocked:
- Next:
   - Continue PubSub discovery + helpers PRs
   - Misc other tasks
     - e.g. Namesys PR reviews, look into reported PubSub issue, utilizing the DHT visualizer for some tests

@djdv
- Done:
  - Helped with patches related to
    - go-ipfs (plugins, config)
    - The 9P library we use (portability, tests)
- Blocked:
- Next:
  - Continue with items listed in the 9P PR (https://github.com/ipfs/go-ipfs/pull/6612)
    - Tests
    - Documentation
 - (maybe unrelated to pm group) DNS over HTTPS things
 - Expected steps after read-only PR is finalized: https://github.com/ipfs/package-managers/issues/74#issuecomment-526271276

@name
- Done:
- Blocked:
- Next:

### Notes

- Now you are going to be able to add a string, and have it appear as the file contents of the thing you just added!
  - Very cross-reaching changes to http client and interfaces
-  Steven will be reviewing the mount patches, and would like to land a bitswap improvement for better staying connected to peers bitswapping with
- Andrew demo'd a tool that allows people to verify that package releases are correct at the retro last week
- Mikeal has opened a pull request against Unixfsv1 spec to add metadata with time (creation, modification, etc) - https://github.com/ipfs/specs/pull/220/files
  - biasing for action and progress here over perfect spec is the priority
  - access time will change every time viewed - maybe better to drop it?
  - metadata should be optional and off by default
  - flags for each custom attribute?
  - defaults will allow us to have backwards compatibility
  - most tools relying on checksum anyway
    - Let's bring this to a design review next week after core implementations now that we have a PR

Some relevant PRs @achingbrain was referring to:
- https://github.com/ipfs/js-ipfs-http-client/pull/1087
- https://github.com/ipfs/js-ipfs-utils/pull/5
- https://github.com/ipfs/js-ipfs-utils/pull/8
- https://github.com/ipfs/interface-js-ipfs-core/pull/519
- https://github.com/ipfs/js-ipfs-http-client/pull/1088
- https://github.com/ipfs/js-ipfs/pull/2379
