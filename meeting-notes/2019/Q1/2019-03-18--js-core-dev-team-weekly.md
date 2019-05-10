# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 March 18, 2019

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @terichadbourne
  - @jchris
  - @pkafei
  - @lidel
  - @jimpick
- **Recording:** https://youtu.be/73BQdaLmzpA

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
- Present cross team updates and review remaining issues if there is time left

## Notes

### Week Update

@vasco-santos (not attending)
- Done:
 - libp2p interop
   - stream support for `daemon-client`
     - [libp2p/js-libp2p-daemon-client#8](https://github.com/libp2p/js-libp2p-daemon-client/pull/8) 
 - Continue review migration to async PRs from @dirkmc:
   - [libp2p/js-libp2p-kad-dht#82](https://github.com/libp2p/js-libp2p-kad-dht/pull/82)
  - Help debugging issues related to enabling the DHT by default
    - [libp2p/js-libp2p-kad-dht#88](https://github.com/libp2p/js-libp2p-kad-dht/pull/88)
  - New review to gossipsub implementation
    - [ChainSafeSystems/gossipsub-js#15](https://github.com/ChainSafeSystems/gossipsub-js/pull/15)
  - Work on a PRD for libp2p visualization tool with @raulk
- Blocked: 
  - `dht` interop tests
      - [libp2p/interop#7](https://github.com/libp2p/interop/pull/7)
  - `pubsub` daemon PRs
      -  Needs [libp2p/js-libp2p-daemon-client#6](https://github.com/libp2p/js-libp2p-daemon-client/pull/6)
- Next:
  - Libp2p visualization tool Workshop - partially unavailable the all week
  - libp2p interop tests
    - get dht interop PR merged
    - get pubsub daemon PRs merged and released
    - review pubsub interop PR
      - [libp2p/interop#8](https://github.com/libp2p/interop/pull/8)

@jacobheun
- Done:
  - Switch, add known protocols to PeerInfo on muxed connections [switch#307](https://github.com/libp2p/js-libp2p-switch/pull/307)
  - Worked on dht performance issues with js-ipfs
    - Add basic dialing queue to switch [switch#310](https://github.com/libp2p/js-libp2p-switch/pull/310)
    - fix pull-mplex .end callback issue [pull-mplex#9](https://github.com/libp2p/pull-mplex/pull/9)
    - fix libp2p-spdy .end callback issue [libp2p-spdy](https://github.com/libp2p/js-libp2p-spdy/pull/85)
  - Updated CI for pull-length-prefixed [pull-length-prefixed#21](https://github.com/dignifiedquire/pull-length-prefixed/pull/21)
    - There are a couple open PRs there I need to continue reviewing
  - fixed premature string formatting in [libp2p-circuit](https://github.com/libp2p/js-libp2p-circuit/pull/48), should improve performance when logging is disabled
- Blocked:
- Next:
  - interop testing for [libp2p-switch#307](https://github.com/libp2p/js-libp2p-switch/pull/307) peer protocols
  - finish testing the dialing queue in js-ipfs and js-ipfs performance with dht enabled
  - finish [libp2p-daemon-client#6](https://github.com/libp2p/js-libp2p-daemon-client/pull/6) to unblock interop
  - Review PRs for pull-length-prefixed
  - Q1 retrospective, Q2 planning prep

@alanshaw

- Done:
    - Lowered libp2p default connection manager limits [#1926](https://github.com/ipfs/js-ipfs/pull/1926)
    - Fix for cat deeply nested file [#1920](https://github.com/ipfs/js-ipfs/pull/1920)
    - Released `ipfs-http-client` @ `30.1.0`
        - Is about 33% smaller! Thanks to @hugomrdias
        - https://twitter.com/_alanshaw/status/1106500694452985856
    - Reviewed DAG HTTP API PR [#1930](https://github.com/ipfs/js-ipfs/pull/1930)
    - Fix for `mtime` precision in `proper-lockfile` [#78](https://github.com/moxystudio/node-proper-lockfile/pull/78)
- Blocked:
    - n/a
- Next:
    - Merge DAG HTTP API PR [#1930](https://github.com/ipfs/js-ipfs/pull/1930)
    - Review libp2p-switch dialing queue PR [#310](https://github.com/libp2p/js-libp2p-switch/pull/310)
    - More testing the DHT
    - Release 0.35 [#1826](https://github.com/ipfs/js-ipfs/issues/1826)
    - Work towards async iterators endeavour [#1670](https://github.com/ipfs/js-ipfs/issues/1670)
    - Work towards CIDv1 & base32 encoded by default [#1440](https://github.com/ipfs/js-ipfs/issues/1440)

@hugomrdias
- Done:
  - released proper-lockfile 4.0.0
  - ipfs-repo PR to update fix: update lock file #193
  - js-libp2p windows testing [#335](https://github.com/libp2p/js-libp2p/pull/335)
  - vue support research
  - multihashing-async async/await PRs merged
  - iso-stream-http released
  - http-client bundle size PR merged and released
  - ipfs-repo bundle PR [#186](https://github.com/ipfs/js-ipfs-repo/pull/186) updated 
  - fix js-libp2p-kad-dht bundle size
  - fix libp2p/js-libp2p-websocket-star-multi bundle size [#4](https://github.com/libp2p/js-libp2p-websocket-star-multi/pull/4)
  - fix unixfs-importer bundle size [#23](https://github.com/ipfs/js-ipfs-unixfs-importer/pull/23)
  - review new fix for proper-lockfile in system with low precision mtime
- Blocked:
  -  multihashing-async async/await [#37](https://github.com/multiformats/js-multihashing-async/pull/37)
- Next:
  - vue support
  - async iterators

@zcstarr (not attending)
 - Done:
   - js-datastore-fs PR https://github.com/ipfs/js-datastore-fs/pull/22
   - js-ipfs-repo still fixing PR https://github.com/ipfs/js-ipfs-repo/pull/189
   - js-datastore-core PR https://github.com/ipfs/js-datastore-core/pull/17
 - Blocked:
 - Next:
   - js-datastore-fs address PR comments
   - js-ipfs-repo fix last few remaining broken test and then ask for another round of PR comments
   - js-datastore-core address PR comments

@vmx
- Done: FOSSGIS Conference 
- Blocked:
  - new JS IPLD API:
    - https://github.com/ipld/js-ipld/pull/190
    - https://github.com/ipld/js-ipld/pull/191
- Next:
  - Work on the IPLD Formats API: https://github.com/ipld/interface-ipld-format/pull/50

@achingbrain
- Done:
  - fix: correct hamt structure when modifying deep sub-shards: https://github.com/ipfs/js-ipfs-mfs/pull/46
  - Merged Alan's PRs for getting unixfs-exporter to export CID instances:
    - https://github.com/ipfs/js-ipfs-mfs/pull/44
    - https://github.com/ipfs/js-ipfs-unixfs-exporter/pull/19
  - Adding DAG HTTP API to js-ipfs: https://github.com/ipfs/js-ipfs/pull/1930
  - Fixed up file sizes: https://github.com/ipfs/js-ipfs-unixfs-exporter/pull/20
  - Worked with @andrew on Package Managers asks from various teams
- Blocked:
  - N/a
- Next:
  - Finish writing up the Package Manager requirements
   
### Questions


### Cross team updates

- @terichadbourne (ProtoSchool / IPFS Community WG)
  - Working on ProtoSchool roadmap and need suggestions from IPFS teams about how ProtoSchool can best serve their educational goals in 2019 & 2020. Please add your ideas here: https://github.com/ipfs/roadmap/issues/25
- @olizilla (GUI)
    - IPFS Web UI 2.4 released
    - IPFS Desktop 0.7 released (woo hoo) https://github.com/ipfs-shipyard/ipfs-desktop#ipfs-desktop 
- @lidel (Browsers)
    - Improved main menu of IPFS Companion shipped to Beta and could use some eyes: [v2.7.5.757](https://github.com/ipfs-shipyard/ipfs-companion/releases)
- @jimpick (Dynamic Data and Capabilities WG)
  - new pinner! pins to IPLD/IPNS/ipfs-cluster https://github.com/ipfs-shipyard/peer-base-pinner

### Other notes

- @alanshaw away tomorrow (Tuesday 19th)
- The IPLD bi-weekly meeting moved to 3h later to 21:30–22:00 UTC (https://github.com/ipld/team-mgmt)

<!-- After each call, the notetaker submits a PR to ipfs/team-mgmt to store the notes on the meeting-notes folder -->
