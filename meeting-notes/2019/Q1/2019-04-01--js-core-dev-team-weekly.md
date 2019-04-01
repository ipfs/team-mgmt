
# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 April 1, 2019

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @vmx
  - @vasco-santos
  - @jimpick
  - @dirkmc
  - @achingbrain
  - @terichadbourne
- **Recording:** _add link to recording once it's online_

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

@vasco-santos

- Done:
  - libp2p visualization tool
    - work with @raulk in the introspection data model [libp2p/notes#9](https://github.com/libp2p/notes/pull/9)
    - started implementing the `js-libp2p-introspection` [vasco-santos/js-libp2p-introspection](https://github.com/vasco-santos/js-libp2p-introspection/tree/feat/instrumentation) (heavily WIP)
    - instrument `js-libp2p` with `js-libp2p-introspection` and collected data from a `js-ipfs` node to provide to Nearform
  - libp2p-interop
    - pubsub daemon PRs merged and released
      - [libp2p/js-libp2p-daemon-client#6](https://github.com/libp2p/js-libp2p-daemon-client/pull/6)
      - [libp2p/interop#8](https://github.com/libp2p/interop/pull/8)
    - dht interop PR with `peer-routing` and `content-routing` merged
     - [libp2p/interop#13](https://github.com/libp2p/interop/pull/13)
     - [libp2p/interop#7](https://github.com/libp2p/interop/pull/7)
   - use multiaddrs for the daemon insted of the unix socket path
     - [libp2p/interop#12](https://github.com/libp2p/interop/pull/12)
   - Q1 libp2p team retrospective
- Blocked: 
  - `dht` content fetching interop tests
      - [libp2p/interop#15](https://github.com/libp2p/interop/issues/15)
- Next:
  - libp2p interop tests
    - streams interop tests review
  - continue `js-libp2p-introspection` for visualization tool
  - Q2 planning

@alanshaw
 - Done:
     - Helped debug and opened PR for duplicate variable declaration in `stream-to-pull-stream` [#16](https://github.com/pull-stream/stream-to-pull-stream/pull/16)
         - Thanks babel!
         > Duplicate bindings will throw according to spec
         https://github.com/babel/babel/pull/9493
     - Bundle size PRs merged (26% smaller than v0.33.1)
         - https://bundlephobia.com/result?p=ipfs@0.35.0-rc.4
         - 👌 @hugomrdias
     - Review for per-peer dial queue in `libp2p-switch` [#310](https://github.com/libp2p/js-libp2p-switch/pull/310)
     - Retrospective and defining OKRs @ Lisbon Hack & Plan event
        - [Event write up here](https://github.com/protocol/event-management/issues/197#issuecomment-478537267) thanks to @olizilla
     - Defining what it means to stream with async iterables
         - https://gist.github.com/alanshaw/591dc7dd54e4f99338a347ef568d6ee9
         - ^^^ 👀 👀 👀 👀 👀 please look & review!
     - WIP PR for switch `libp2p-websockets` to async iterables [#82](https://github.com/libp2p/js-libp2p-websockets/pull/82)
         - Created `it-ws` https://github.com/alanshaw/it-ws
         - Added sink and duplex support to [`async-iterator-to-pull-stream`](https://github.com/alanshaw/async-iterator-to-pull-stream)
 - Blocked:
     - 0.35 blocked again temporarily! Too few peers now! Maybe fixed by [#316](https://github.com/libp2p/js-libp2p-switch/pull/316)
 - Next:
     - Finalise OKRs
     - Review fix for slow cold calls [#316](https://github.com/libp2p/js-libp2p-switch/pull/316)
     - Review many JS IPFS and JS IPFS HTTP Client PRs!
     - JS IPFS 0.35 release

@vmx
 - Done:
   - JS IPLD API discussions (thanks @Gozala for the valuable feedback)
 - Blocked: Nope
 - Next:
   - Implementing IPLD Formats cleanup: https://github.com/ipld/interface-ipld-format/pull/51
   - Hopefully getting the new js-ipld API changes merged into UnixFS and IPFS

@jacobheun
 - Done:
   - Working on performance improvements in js-libp2p-switch for the upcoming js-ipfs release
     - Global queue in switch [libp2p-switch#314](https://github.com/libp2p/js-libp2p-switch/pull/314)
     - Improved dial queue and parallel dials [libp2p-switch#315](https://github.com/libp2p/js-libp2p-switch/pull/315)
     - WIP for managing "cold call" dials [libp2p-switch#316](https://github.com/libp2p/js-libp2p-switch/pull/316)
   - Tested pull-length-prefixed updates (empty streams and large sync streams) against libp2p and js-ipfs [pull-length-prefixed#22](https://github.com/dignifiedquire/pull-length-prefixed/pull/22)
 - Blocked: N/A
 - Next:
   - Get libp2p 0.25 released
     - Finish limiting on "cold calls" [libp2p-switch#316](https://github.com/libp2p/js-libp2p-switch/pull/316)
   - Work to get [pull-length-prefixed#22](https://github.com/dignifiedquire/pull-length-prefixed/pull/22) released
   - Get [libp2p-webrtc-star#148](https://github.com/libp2p/js-libp2p-webrtc-star/pull/148) reviewed
   - Finish PeerStore libp2p-daemon spec
     - Add interop tests for GET_PROTOCOL to support gossipsub work
   
@hugomrdias
 - Done:
   - js-ipfs bundle size PRs merged 
   - vue support debugging (setImmeditate and readable-stream)
   - Helped debugging stream-to-pull-stream double declaration issues
   - Lisbon team week retro and planning 
 - Blocked:
 - Next:
   - finish vue support
   - finish the ipld formats bundle size PR 
   - research ipns over dns/pubsub

@dirkmc
 - Done:
   - Onboarded (went to Lisbon)
   - Some DHT fixes
   - Testing / trying out examples for release
   - Awesome endeavor
 - Blocked:
 - Next:
   - Implement async/await version of libp2p-tcp

@achingbrain
 - Done:
   - Handle subshards of subshards created in one hamt operation: ipfs/js-ipfs-mfs#47
   - Q2 Planning for js-ipfs & package-managers
   - Started trying to call out to go-badger from js
 - Blocked:
   - async/await for unixfs/mfs blocked by ipld/js-ipld-dag-pb#105
 - Next:
   - PR for ipfs/js-ipfs#1963
   - Triage npm-on-ipfs issues
   - Add missing http endpoints

@zcstarr (not attending)
 - Done:
   - js-ipfs-repo PR thx @dirkmc for patching up remaining issues   https://github.com/ipfs/js-ipfs-repo/pull/189
   - js-datastore-fs PR https://github.com/ipfs/js-datastore-fs/pull/22  
   - js-datastore-core PR https://github.com/ipfs/js-datastore-core/pull/17
 - Blocked: 
 - Next:
   - clean any lingering things(ci) and ask for a PTAL on repo
   - ditto for remaining stack (core,fs PRs)


### Questions

- Per the babel issue, worth revisiting https://github.com/ipfs/aegir/issues/330 for shrinkwrap / package locks.


### Cross team updates

- @lidel
    - IPFS Companion [v2.8.0](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.0) landed in Stable Channel (on 1st of April, but its real)
- @terichadbourne
    - ProtoSchool has a [roadmap](https://github.com/ProtoSchool/roadmap) and [Q2 OKRs](https://github.com/ProtoSchool/roadmap/blob/master/okrs/2019-q2.md)!

### Other notes

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
