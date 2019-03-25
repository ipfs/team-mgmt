# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 March 25, 2019

- **Lead:** @jacobheun
- **Notetaker:** @vasco-santos
- **Attendees:**
  - @jimpick
  - @vmx
  - @mikeal
  - @niinpatel
  - @pkafei
  - @auhau
  - _attendee names..._
- **Recording:** https://youtu.be/87cb8Iv8XaY

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
   - IPLD Selectors spec is a thing: https://github.com/ipld/specs/blob/4fc79023df9e4bd0eb226c24db12701fca6498ee/selectors/selectors.md
   - Merged NEW JS-IPLD API:
     - https://github.com/ipld/js-ipld/pull/190
     - https://github.com/ipld/js-ipld/pull/191
     - And updated PRs for js-ipfs-unixfs and js-ipfs-mfs
   - Ongoing discussion on the new IPLD Formats API:
     - Too many changes in this version in order to find agreement: https://github.com/ipld/interface-ipld-format/pull/50
     - Hence a new version at https://github.com/ipld/interface-ipld-format/pull/51
     - For the interested ones, there's even discussions about an API change after that API change: https://github.com/ipld/interface-ipld-format/issues/52
  - js-ipfs-block is soon js-ipld-block: https://github.com/ipld/js-ipld-block/pull/46 Please be aware that if you upgrade your library it will also be a breaking change for you as comparing js-ipfs-blocks with js-ipld-blocks would fail (thanks @alanshaw for pointing that out)
 - Blocked:
   - Nope
 - Next:
   - More IPLD Formats spec work
   - Update js-ipfs PR for new JS-IPLD API

@jacobheun
 - Done:
   - Switch was not running identify when dialing, only when listening. This has been fixed [libp2p-switch#313](https://github.com/libp2p/js-libp2p-switch/pull/313)
   - Switch dial queue was released [libp2p-switch#310](https://github.com/libp2p/js-libp2p-switch/pull/310)
   - Identify will now provide and retrieve supported protocols for PeerInfo instances [libp2p-switch#311](https://github.com/libp2p/js-libp2p-switch/pull/311). Accessed via `peerInfo.protocols`
     - [libp2p-identify#51](https://github.com/libp2p/js-libp2p-identify/pull/51)
   - Did Q1 retrospective writeup for libp2p
 - Blocked:
 - Next:
   - Finish get protocol libp2p interop testing
     - [libp2p-daemon#14](https://github.com/libp2p/js-libp2p-daemon/pull/14)
   - Finish spec for libp2p-daemon Peerstore/PeerBook access [go-libp2p-daemon#88](https://github.com/libp2p/go-libp2p-daemon/pull/88)
   - Q2 planning
   - libp2p 0.35 release

@vasco-santos
- Done:
  - libp2p visualization tool
    - PRD
    - libp2p data model spreadsheet
    - design workshop
  - libp2p-interop
    - stream support for `daemon-client`
     - [libp2p/js-libp2p-daemon-client#8](https://github.com/libp2p/js-libp2p-daemon-client/pull/8)
    - Use multiaddr instead of socket path with new releases of the daemon/client
      - [libp2p/interop#12](https://github.com/libp2p/interop/pull/12)
  - Several reviews
- Blocked: 
  - `dht` interop tests
      - [libp2p/interop#7](https://github.com/libp2p/interop/pull/7)
- Next:
  - libp2p interop tests
    - get pubsub daemon PRs merged and released
      - [libp2p/js-libp2p-daemon-client#6](https://github.com/libp2p/js-libp2p-daemon-client/pull/6)
      - [libp2p/interop#8](https://github.com/libp2p/interop/pull/8)
    - get dht interop PR merged
    - streams interop tests
  - js-libp2p swarm instrumentation for visualization tool
  - Q1 retro + Q2 planning

@niinpatel
 - Done:
   - PR on ipfs-blob-store to make use of async await and remove callbacks ipfs/ipfs-blob-store#26 
   - Fix #1632
 - Blocked:
 - Next:
   - Will work on async-await on few more repos.  

@zcstarr (not attending)
 - Done:
   - js-datastore-fs PR https://github.com/ipfs/js-datastore-fs/pull/22
   - js-ipfs-repo still fixing PR https://github.com/ipfs/js-ipfs-repo/pull/189
   - js-datastore-core PR https://github.com/ipfs/js-datastore-core/pull/17
 - Blocked:
 - Next:
   - fix async/await fs-repo/fs-datastore address PR comments should be able to do this this week

@auhau
 - Done: first draft of https://github.com/AuHau/js-ipfs-repo-migrations
 - Blocked:
 - Next: continue with migration tools

### Questions

### Other notes

@vmx

- great week, new `js-ipld` api is shiped!
- If any doubts or discussions regarding IPLD selectors, open an issue

@vasco-santos

- updates on libp2p-visualization-tool

@niinpatel

- Issue fix for js-ipfs: screen shared a demo showing exchange files example with room

@jacobheun

- js-libp2p new release is almost ready, expected by this week

@jimpick

- working on peerpad
- may be available to work on js-ipfs in a few weeks

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->