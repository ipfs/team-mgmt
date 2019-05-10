# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 March 11, 2019

- **Lead:** @alanshaw
- **Notetaker:** @vmx
- **Attendees:**
  - @vasco-santos
  - @vmx
  - @alanshaw
  - @zcstarr
  - @momack2
  - @lidel
  
- **Recording:** https://youtu.be/U6tOMEKQlSo

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

@alanshaw
- Done:
   - Helped out debugging DHT 100% CPU usage [#1914](https://github.com/ipfs/js-ipfs/pull/1914)
   - Reviewed `go-ipfs-dep` PR to remove hard coded version and arch and platform support [#30](https://github.com/ipfs/npm-go-ipfs-dep/pull/30)
       - Released `go-ipfs-dep` @ `0.4.19-0`
   - PRs for exporting types and utils statically [#951](https://github.com/ipfs/js-ipfs-http-client/pull/951) and [#1908](https://github.com/ipfs/js-ipfs/pull/1908)
   - Added `--enabled-preload` CLI flag for daemon command [#1909](https://github.com/ipfs/js-ipfs/pull/1909)
   - Opened PR for displaying version info when starting JS IPFS daemon [#1915](https://github.com/ipfs/js-ipfs/pull/1915)
   - Reviewed and merged listen on multi API and Gateways addresses PR [#1916](https://github.com/ipfs/js-ipfs/pull/1916)
   - Normalised debug prefix "jsipfs:" => "ipfs:" [#1911](https://github.com/ipfs/js-ipfs/pull/1911)
   - Added example for running multiple JS IPFS nodes on the same computer [#1916](https://github.com/ipfs/js-ipfs/pull/1916)
   - Many interviews
- Blocked:
    - 0.35 still blocked on DHT (but getting closer!)
- Next:
    - Debugging for 100% CPU
    - Testing the DHT
    - Work towards async iterators endeavour [#1670](https://github.com/ipfs/js-ipfs/issues/1670)
    - Work towards CIDv1 & base32 encoded by default [#1440](https://github.com/ipfs/js-ipfs/issues/1440)

@vasco-santos

- Done:
 - libp2p interop
    - `dht` interop tests
      - [libp2p/interop#7](https://github.com/libp2p/interop/pull/7)
      - [libp2p/js-libp2p-daemon#11](https://github.com/libp2p/js-libp2p-daemon/pull/11)
    - pubsub support for `daemon` and `daemon-client`
      - [libp2p/js-libp2p-daemon#12](https://github.com/libp2p/js-libp2p-daemon/pull/12)
      - [libp2p/js-libp2p-daemon-client#7](https://github.com/libp2p/js-libp2p-daemon-client/pull/7)
    - stream support for `daemon-client`
     - [libp2p/js-libp2p-daemon-client#8](https://github.com/libp2p/js-libp2p-daemon-client/pull/8) 
 - Reviewed migration to async PRs from @dirkmc
   - [libp2p/js-libp2p-record#13](https://github.com/libp2p/js-libp2p-record/pull/13)
   - [ipfs/js-ipns#19](https://github.com/ipfs/js-ipns/pull/19)
   - [libp2p/js-libp2p-kad-dht#82](https://github.com/libp2p/js-libp2p-kad-dht/pull/82) (WIP)
  - Debugged pubsub issue reported by @achingbrain
    - [libp2p/js-libp2p-pubsub#7](https://github.com/libp2p/js-libp2p-pubsub/issues/7)
- Blocked: 
  - `dht` interop tests (PR with blockers list)
- Next:
  - DHT tests / debugging
  - Reviews:
    - new review to gossipsub implementation
    - finish kad-dht migration PR review
  - libp2p interop tests
    - get dht interop PR merged
    - get pubsub daemon PRs merged and released
    - review pubsub interop PR
      - [libp2p/interop#8](https://github.com/libp2p/interop/pull/8)

@achingbrain

- Done:
  - Addressed npm-on-ipfs blog post comments: https://github.com/ipfs/blog/pull/215
  - Improved npm-on-ipfs reliability: https://github.com/ipfs-shipyard/npm-on-ipfs/issues/90
  - Fixed problem with extra nodes appearing in hamt shards
  - Bikeshedding IPLD API: https://github.com/ipld/js-ipld/pull/191
  - Interviews
- Blocked:
- Next:
  - Submit PR for extra nodes appearing in hamt shards
  - Expand interop tests for hamt shards
  - OKRs, add missing features to js-ipfs

@vmx
 - Done:
   - Rebased "new JS-IPLD API" changes
   - Discussed [new JS-IPLD API](https://github.com/ipld/js-ipld/pull/191) (@gozala had a few good thoughts: https://gozala.hashbase.io/posts/Constraints%20of%20an%20API%20design/)
 - Blocked: Nope
 - Next:
   - Thinking about JS-IPLD API
   - Attending the [FOSSGIS conference](https://www.fossgis-konferenz.de/2019/)

@hugomrdias
 - Done:
   - fix vue webpack issue 
     - [#168](https://github.com/ProtoSchool/protoschool.github.io/pull/168)
     - [#1875](https://github.com/ipfs/js-ipfs/issues/1875)
   - fix proper-lockfile issue 
     - [#74](https://github.com/moxystudio/node-proper-lockfile/pull/74)
   - add windows testing to js-libp2p 
 - Blocked:
 - Next:
   - make stream-http into its own package
   - async iterators endeavour
   - finish protoschool PR
 
@zcstarr
 - Done:
   - js-datastore-fs PR https://github.com/ipfs/js-datastore-fs/pull/22
   - js-ipfs-repo fixing PR https://github.com/ipfs/js-ipfs-repo/pull/189
   - js-datastore-core PR https://github.com/ipfs/js-datastore-core/pull/17
 - Blocked:
 - Next:
   - js-datastore-fs add travis CI support
   - js-ipfs-repo address PR comments and testing with datastore-fs + core 
   - js-datastore-core PR fix broken CI browser build/ browser build passes locally
   
### Questions

None

### Cross team updates

- @lidel (GUI / Browsers)
  - (cidv1b32)
    - CID-in-subdomain Gateway (`https://<cidv1b32.ipfs.dweb.link`) [Works Today™](https://bafkreigh2akiscaildcqabsyg3dfr6chu3fgpregiymsck7e7aqa4s52zy.ipfs.dweb.link/)
    - Added “Bird's-eye view"  to the [Meta issue about the move to CIDv1 Base32](https://github.com/ipfs/ipfs/issues/337#issue-340637664) (work in progress, ping me if something is inaccurate/missing)

- @terichadbourne (ProtoSchool / Community WG)
  - Working on ProtoSchool roadmap and need suggestions from IPFS teams about how ProtoSchool can best serve their educational goals in 2019 & 2020. Please add your ideas here: https://github.com/ipfs/roadmap/issues/25
  - WIP: New Files API tutorial in ProtoSchool lets you upload files to use in exercises. Still working on lesson content but feedback is welcome.
    - WIP PR: https://github.com/ProtoSchool/protoschool.github.io/pull/111
    - Issue incl planned lessons: https://github.com/ProtoSchool/protoschool.github.io/issues/91
  
- @momack2 (go-ipfs)
  - go-ipfs team has started using circle CI for go-ipfs repo and really liking it so far. Tentatively plan to slowly roll this out opportunistically to other go-ipfs ecosystem repos 


### Other notes

- @vasco-santos partially unavailable next week (libp2p visualization tool design meetings)
- @vmx not available from Tue-Sat: 2019-03-12/16 ([FOSSGIS conference](https://www.fossgis-konferenz.de/2019/))

<!-- After each call, the notetaker submits a PR to ipfs/team-mgmt to store the notes on the meeting-notes folder -->
