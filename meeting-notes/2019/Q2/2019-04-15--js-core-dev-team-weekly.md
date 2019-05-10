# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 April 15, 2019

- **Lead:** @alanshaw
- **Notetaker:** @olizilla
- **Attendees:**
  - @vasco-santos
  - @jimpick
  - @vmx
  - @achingbrain
  - @lidel
- **Recording:** https://youtu.be/f4L2EsAY9VQ

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

@AuHau (not attending)
- Done: First version of PR with the JS Repo Migration tool is up [here](https://github.com/AuHau/js-ipfs-repo-migrations/pull/1), feedback is welcomed!
- Blocked:
- Next: Test coverages of the Migration tool; Integration PR into js-ipfs

@dirkmc
- Done:
  - Limit scope of find peers query
  - async/await version of js-libp2p-tcp and interface-transport
- Blocked:
  - If we  js-multihashing-async#37
- Next:

@jacobheun
- Done:
  - [js-libp2p 0.25 released](https://github.com/libp2p/js-libp2p/releases/tag/v0.25.0)
    - Added auto dial to discovered peers [js-libp2p#349](https://github.com/libp2p/js-libp2p/pull/349)
    - Switch emits separate events for connection tracking instead of just using the muxed events [libp2p-switch#328](https://github.com/libp2p/js-libp2p-switch/pull/328)
      - Connection Manager uses the new events [connection-manager#19](https://github.com/libp2p/js-libp2p-connection-manager/pull/19)
    - Fix issue with switch not being configurable [libp2p#354](https://github.com/libp2p/js-libp2p/pull/354)
    - Added basic support for switch priority queues
  - js-ipfs now uses libp2p auto dial for connecting to peers [js-ipfs#1983](https://github.com/ipfs/js-ipfs/pull/1983)
- Blocked:
- Next:
  - Continue working on network performance of js-ipfs with DHT enabled
  - Start work on getting [js-libp2p-rendezvous](https://github.com/libp2p/js-libp2p-rendezvous) up to date with the latest spec.

@hugomrdias (not attending i'm sick can't really talk)
- Done:
  - fix: move mfs cmds and safer exit [#1981](https://github.com/ipfs/js-ipfs/pull/1981)
  - review Provide non-generic constructor methods [#83](https://github.com/multiformats/js-cid/issues/83)
  - [ipfs/js-ipfs-http-client] fix: fix missing buffer bundling with browserify (#966)
  - ipns over workers POC
  - fix: fix missing buffer bundling with browserify  [https://github.com/ipfs/js-ipfs-http-client/pull/966](https://github.com/ipfs/js-ipfs-http-client/pull/966)
  - ipns-over-dns deep dive with lidel
    - check the demo on last weeks gui+web-browsers call
  - WB wg OKRs review session
  - finalize js-ipfs remove ipld formats PR
  - review blog posts for libp2p and ipfs releases
  - released last callbacks version of multihashing-async 0.6.0  
  - Review and merge chore: update semver usage for babel packages [#348](https://github.com/ipfs/aegir/pull/348)
- Blocked:
- Next:
  - released first async/await version of multihashing-async 0.7.0
  - add support for file and filelist to js-ipfs
  - ipns over dns 

@alanshaw
- Done:
    - Opened PR to fix dial ourself problem [#329](https://github.com/libp2p/js-libp2p-switch/pull/329)
    - Wrote up story so far on DHT [#1984](https://github.com/ipfs/js-ipfs/issues/1984)
    - **Released JS IPFS 0.35** https://blog.ipfs.io/80-js-ipfs-0-35/
    - Added tests to `go-libp2p-mdns` compatibility PR [#80](https://github.com/libp2p/js-libp2p-mdns/pull/80)
- Blocked:
    - `null`
- Next:
    - Finalize OKRs!
    - Review PRs from @dirkmc
    - DHT debugging for 0.36
    
@lidel
- Done:
 - [Embedded js-ipfs with working Gateway](https://github.com/ipfs-shipyard/ipfs-companion/issues/664#issuecomment-481697875) ([demo from GUI call](https://youtu.be/JG0no-7BRRI?list=PLuhRWgmPaHtRIXVTy_ngBwvsXvWw10mR8&t=236)) runs fine in official [Brave Nightly](https://github.com/brave/brave-browser/releases/tag/v0.65.54) build \o/
 - [PR #1950: Decouple HTTP Servers from cli/commands/daemon](https://github.com/ipfs/js-ipfs/pull/1950) 
 - Created proposal to switch CIDv1 from Base58 to Base32: https://github.com/ipfs/js-ipfs/issues/1995
- Blocked:
 - [PR #1989:  fix(gateway): streaming compressed payload ](https://github.com/ipfs/js-ipfs/pull/1989) needs a review  (CI fails due to unrelated libp2p  error)
 - [ HTTP Gateway fails to load sharded website #1963 ](https://github.com/ipfs/js-ipfs/issues/1963) / PR [feat: load files/dirs from hamt shards #19](https://github.com/ipfs/js-ipfs-http-response/pull/19)
 - [Resolving DNSLink Paths: `/ipns/<fqdn>` #1918](https://github.com/ipfs/js-ipfs/issues/1918)
- Next:
  - Release Companion with "Embedded + chrome.sockets" to Beta channel
  - Investigate/add support for [`Range` requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests) to js-ipfs Gateway

@vasco-santos
- Done:
  - refactor of the `libp2p-introspection` current code and some new data added for streams
    - [vasco-santos/js-libp2p-introspection#2](https://github.com/vasco-santos/js-libp2p-introspection/pull/2)
  - new review on `js-gossipsub` PR
    - [ChainSafe/gossipsub-js#15](https://github.com/ChainSafe/gossipsub-js/pull/15)
  - looked at @dirkmc PR for async/await interface-transport
    - [libp2p/interface-transport#44](https://github.com/libp2p/interface-transport/pull/44)
  - a lot of maintenance work
    - debugging for `js-ipfs` release
      - [ipfs/js-ipfs#1988](https://github.com/ipfs/js-ipfs/pull/1988)
      - [ipfs/interop#61](https://github.com/ipfs/interop/pull/61)
      - [ipfs/interop#62](https://github.com/ipfs/interop/pull/62)
    - adding https://discuss.libp2p.io badges and updating dependencies of all js libp2p modules (22/~50)
      - [libp2p/libp2p#74](https://github.com/libp2p/libp2p/issues/74)
- Blocked: N/A
- Next:
  - async iterators migration
    - proposal for `interface-connection`
 - debug publish issue on `js-gossipsub`
 - finish updating all JS libp2p modules
 - interop issue with Firefox (circuit relay)
 - libp2p interop tests
    - streams interop tests review

@achingbrain
- Done:
  - Looked at performance of npm-on-ipfs registry clone: https://github.com/ipfs-shipyard/npm-on-ipfs/issues/93
  - Tried to get async/await into interface-datastore: https://github.com/ipfs/interface-datastore/pull/26
- Blocked:
  - N/a?  Sort of.
- Next:
  - async/await in unixfs importer/exporter
  - async/await in mfs

@vmx
 - Done:
   - Moving js-ipld-dag-cbor, js-ipld-raw, js-ipld-ethereum to new IPLD Formats API (part of the async/await endevour): https://github.com/ipld/interface-ipld-format/pull/51 
 - Blocked: Nope
 - Next:
   - More work on the IPLD Formats API


### Questions

### Cross team updates

- @jimpick (DDC WG)
  - IPNS Zoom Chat on Wednesday 4pm UTC - https://calendar.google.com/event?action=TEMPLATE&tmeid=MzkzcjVvMXQzcHY1bDlpdGVjNjJqa2RyZmkgcHJvdG9jb2wuYWlfN241N29zZzIyN3JvNW00MmM5N2E2OTViMDBAZw&tmsrc=protocol.ai_7n57osg227ro5m42c97a695b00%40group.calendar.google.com

### Other notes

<!-- After each call, the notetaker submits a PR to ipfs/team-mgmt to store the notes on the meeting-notes folder -->

- @vasco-santos out on 19th (friday) - Public holiday in Portugal
- @vmx out Wed or Thu (17/18th) and on Fri (19th) and Mon (22nd)
- @alanshaw (+ other UK workers) out Friday and Monday - UK public holidays
- https://discuss.libp2p.io - libp2p got a forum
- perf improvements to IPLD going on in js-ipld-stack - https://github.com/ipld/js-ipld-stack/tree/master


