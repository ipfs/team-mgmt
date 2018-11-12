# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 November 12, 2018

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @achingbrain
  - @vasco-santos
  - @hugomrdias
  - @vmx
  - @E_lexy
  - @mikeal
- **Recording:** https://youtu.be/zGRQAU1JKzw

## Agenda

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


@jacobheun
- Done:
  - libp2p-spdy stability fixes https://github.com/libp2p/js-libp2p-spdy/pull/83
    - node-spdy and spdy-transport now support node LTS versions
  - get peer info error improvements https://github.com/libp2p/js-libp2p/pull/281 
  - improved handling of uncaught errors for libp2p 0.24 https://github.com/libp2p/js-libp2p/pull/282
  - dont dial to our own addresses [libp2p-switch#284](https://github.com/libp2p/js-libp2p-switch/pull/284)
- Blocked:
  - PeerId for different crypto keys has been sitting for a while https://github.com/libp2p/js-peer-id/pull/85
  - Maintainer perms for interface-stream-muxer https://github.com/libp2p/interface-stream-muxer/pull/51
- Next:
  - Finishing up some error handling improvements for libp2p 0.24 before it goes live and testing stability before release.
  - Starting the libp2p-daemon work needed for the testbed updates

@achingbrain
- Done:
  - Removed `.cid` and `.multihash` properties from DAGNode (js-ipld-dag-pb & js-ipld)
  - Published updates for `js-ipfs-unixfs-engine` and `js-ipfs-mfs`
  - Opened PRs on other repos - see https://github.com/ipld/js-ipld-dag-pb/pull/99#issuecomment-437374772
- Blocked:
  - Remove .cid and .multihash from DAGNode https://github.com/ipfs/js-ipfs-api/pull/889
  - Do not serialize nodes twice (depends on ipld/interface-ipld-format#32) https://github.com/ipld/js-ipld/pull/180
  - Increase test timeout for slow tests https://github.com/ipfs/interface-ipfs-core/pull/392
  - Maybe bring back DAGLink.multihash property temporaily? https://github.com/ipld/js-ipld-dag-pb/pull/102
  - Allow us to do interop tests on `ipfs.key` https://github.com/ipfs/js-ipfs/pull/1548
- Next:
  - Removed `.cid` and `.multihash` properties from DAGNode (ipld-dag-pb)
  - Decompose unixfs-engine into importer & exporter modules

@vmx
- Done:
  - Graphsync (C) spec: https://github.com/ipld/specs/pull/7
  - Setup IPLD bi-weekly call: https://github.com/ipfs/team-mgmt/issues/720#issuecomment-436988504
  - js-ipld has getMany() now (needed for DHT Awesome Endevour): https://github.com/ipld/js-ipld/pull/177
  - Fixed js-ipld-ethereum
  - Started discussion about IPLD and compression: https://github.com/ipld/specs/issues/76
- Blocked: Nope
- Next:
  - Graphsync
  - Some IPLD Formats works

@alanshaw
- Done:
    - [IPFS roadmapping](https://docs.google.com/document/d/1APWUM9_r2eB4EGyG0Mepys22xa4ubPUstXEQMq-226M)
    - Fixed over eager preloading issue [#1693](https://github.com/ipfs/js-ipfs/pull/1693)
    - IPLD `loadFormat` [#178](https://github.com/ipld/js-ipld/pull/178)
    - Released JS IPFS v0.33.1
- Blocked:
- Next:
    - Review & merge files API changes from @diasdavid [#1671](https://github.com/ipfs/js-ipfs/pull/1671)
    - Review & merge object API changes from @achingbrain [#1702](https://github.com/ipfs/js-ipfs/pull/1702)
    - Review & merge IPNS routing logic from @vasco-santos [#1701](https://github.com/ipfs/js-ipfs/pull/1701)
    - Complete work on `--cid-base` option (now rebased and TODOs identified)
    
@vasco-santos
- Done:
  - `js-ipfs` roadmap discussions
  - DHT
    - CLI / HTTP routes for `js-ipfs`
      - [ipfs/js-ipfs#856](https://github.com/ipfs/js-ipfs/pull/856)
      - [ipfs/interface-ipfs-core#389](https://github.com/ipfs/interface-ipfs-core/pull/389)
      - [ipfs/js-ipfs-api#890](https://github.com/ipfs/js-ipfs-api/pull/890)
    - Multiple fixes / improvements
      - [libp2p/js-libp2p-kad-dht#51](https://github.com/libp2p/js-libp2p-kad-dht/pull/51)
      - [libp2p/js-libp2p-record#10](https://github.com/libp2p/js-libp2p-record/pull/10)
      - [libp2p/js-libp2p-kad-dht#55](https://github.com/libp2p/js-libp2p-kad-dht/pull/55)
      - [libp2p/js-libp2p#283](https://github.com/libp2p/js-libp2p/pull/283)
      - [libp2p/js-libp2p-kad-dht#53](https://github.com/libp2p/js-libp2p-kad-dht/pull/53)
  - IPNS
    - routing logic extracted from pubsub PR to unblock IPNS over DHT
      - [ipfs/js-ipfs#1701](https://github.com/ipfs/js-ipfs/pull/1701)

- Blocked:
  - IPNS
    - Needs review and release of [ipfs/js-ipfs#1701](https://github.com/ipfs/js-ipfs/pull/1701)
  - IPNS over Pubsub interop
    -  decision between `base64url` vs `base32` for topic + `go-ipfs` fix and release
    -  [ipfs/interop#39](https://github.com/ipfs/interop/pull/39)

- Next:
  - Stress tests / testbed DHT
  - Start IPNS over DHT PR

@hugomrdias
- Done:
    - IPFS Roadmap
    - Bundle size research
    - reduce bundle size on ctl
    - [#308](https://github.com/ipfs/js-ipfsd-ctl/pull/308) Fix non disposable daemon init/start and attach to running daemons
- Blocked
- Next
    - fix karma experimental
    - continue bundle size work
    - fix ctl options and normalize behavior between the client, daemon and in-proc


@name
- Done:
- Blocked:
- Next:

### Questions

### Other notes

- Alan OOO Thursday
- vmx OOO Friday

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
