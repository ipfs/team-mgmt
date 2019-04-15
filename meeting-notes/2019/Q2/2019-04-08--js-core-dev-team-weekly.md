# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 April 8, 2019

- **Lead:** @alanshaw
- **Notetaker:** @vmx
- **Attendees:**
  - @vmx
  - @jimpick
  - @lidel
  - @vasco-santos
  - @stebalien
  - @hugomrdias
  - @jacobheun
  - @pkafei
  
- **Recording:** https://youtu.be/MH6uzUotDXM

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

@jacobheun
 - Done:
   - Fixed an issue with js-libp2p-switch not tracking connections properly. [libp2p-switch#318](https://github.com/libp2p/js-libp2p-switch/pull/318) This should help Connection Mananger do its job.
   - Improved how blacklisting is handled in switch [libp2p-switch#319](https://github.com/libp2p/js-libp2p-switch/pull/319)
   - Fixed issues with switch not stopping properly [libp2p-switch#324](https://github.com/libp2p/js-libp2p-switch/pull/324)
   - Fixed a potential crash issue with ipns validators [ipns#21](https://github.com/ipfs/js-ipns/pull/21)
   - Fixed debug logging of the js-ipfs api so it only logs when actually turned on [js-ipfs#1977](https://github.com/ipfs/js-ipfs/pull/1977)
   - PeerBook puts are happening too much. Removed some of the unneeded ones in js-libp2p. [libp2p#348](https://github.com/libp2p/js-libp2p/pull/348)
   - Created PR to improve some tests in ipfs interop, namely exchange files. [ipfs/interop#59](https://github.com/ipfs/interop/pull/59)
   - RFC and POC for libp2p auto dial support for discovered peers [js-libp2p#349](https://github.com/libp2p/js-libp2p/pull/349)
   - js-libp2p Q2 OKR planning
 - Blocked:
 - Next:
   - Work on finishing up the libp2p auto dial support
   - Work on network performance of js-ipfs with dht enabled

@vasco-santos
- Done:
  - libp2p visualization tool MVP support
  - initial implementation of the `libp2p-introspection` with `switch` data
    - [vasco-santos/js-libp2p-introspection#2](https://github.com/vasco-santos/js-libp2p-introspection/pull/2)
  - Q2 OKR planning
  - Several reviews in the context of enabling the new release of `js-libp2p` and `js-ipfs`
- Blocked: N/A
- Next:
  - add streams data to `libp2p-introspection`
  - libp2p interop tests
    - streams interop tests review
  - async iterators migration
    - `interface-transport` and `interface-connection`
  - new iteration on `js-gossipsub`

@vmx
 - Done:
   - Moving js-ipld-dag-pb to new IPLD Formats API (part of the async/await endevour): https://github.com/ipld/interface-ipld-format/pull/51 
 - Blocked: Nope
 - Next:
   - More work on the IPLD Formats API

@alanshaw
 - Done:
     - Merged IPNS republisher shutdown PR [#1976](https://github.com/ipfs/js-ipfs/pull/1976)
     - Merged recursive DNS link lookups [#1935](https://github.com/ipfs/js-ipfs/pull/1935)
     - DHT testing not good 😭
        - Possible issue: bitswap cold calls back of queue
     - Opened PR for 0.35 interop [#60](https://github.com/ipfs/interop/pull/60)
     - Opened PR for MDNS discovery interop [#80](https://github.com/libp2p/js-libp2p-mdns/pull/80)
 - Blocked:
     - 0.35 release blocked on DHT and perf
 - Next:
     - Finalize Q1 OKRs
     - Figure out what to do with 0.35
         1. Wait for DHT fixes?
         2. Release 0.35 with DHT disabled
         3. Backport non breaking changes to 0.34 and release

@achingbrain
- Done:
  - https://github.com/zkat/pacote/pull/173
  - https://github.com/ipfs/js-ipfs-http-response/pull/19
- Blocked:
  - async/await for unixfs/mfs blocked by ipld/js-ipld-dag-pb#105
- Next:
  - https://github.com/ipfs-shipyard/npm-on-ipfs/issues/93
  - Fix up https://github.com/ipfs/js-ipfs-http-response/pull/19
  - https://github.com/zkat/pacote/pull/173

@hugomrdias
 - Done:
   - dht debug session
   - ipfsd-ctl release
   - ipns research
   - js-ipfs bundle size ipld PR [#1980](https://github.com/ipfs/js-ipfs/pull/1980)
   - fix: move mfs cmds and safer exit [#1981](https://github.com/ipfs/js-ipfs/pull/1981)
 - Blocked:
   - use pull-mplex #1884
 - Next:
   - ipns research
   - add support for File and FileList object to js-ipfs files cmds

@lidel
 - Done:
   - [Embedded (js-ipfs+hapi) Gateway works in Brave](https://github.com/ipfs-shipyard/ipfs-companion/issues/664#issuecomment-479535264)
 - Blocked:
 - Next:
   - Submit upstream PRs

- @dirkmc:
  - Done:
    - Some fixes to DHT [js-libp2p-kad-dht#95]
    - Async / await endeavour
      - PR for js-libp2p-tcp [js-libp2p-tcp#102]
      - Thinking about how to model a nice interface to be able to cancel dials
    - DHT Visualization tool:
      - https://github.com/dirkmc/js-libp2p-kad-dht-viz
  - Blocked:
    - Async/await:
      - multihashing-async PR is ready for release [js-multihashing-async#37]
  - Next:
    - Visualization tool:
      - Fix bugs with recording
      - New visualization: see how DHT path zooms in on a key and then out again
    - interface-transport
      - Incorporate dial cancel


### Questions

### Cross team updates

- Dynamic Data and Capabilities (@jimpick)
    - Last week:
      - Finalize OKRs
      - Start organizing IPNS Tiger Team (Adin + Hugo)
      - "Magic Wormhole" HTTP service
    - This week:
      - "PeerChess" + Magic Wormhole experiment
      - Dig into Testlab
      - peer-base update to newer js-ipfs
    - Upcoming:
      - IPFS Camp prep
      - Molly asked me to look at IPFS API (from an application builder point-of-view)
      
- ProtoSchool (@terichadbourne)
  - Files tutorial in ProtoSchool is progressing!
    - Rescoped to focus exclusively on MFS for two reasons: 
      - feedback that MFS should be considered the beginner content and non-MFS commands (and DAG) should be considered advanced
      - blobs (incl browser file objects) aren't supported by the non-MFS methods (@hugomrdias has an OKR to change that)
    - Lessons on files.write and files.ls drafted, more to come
    - See WIP PR at: https://github.com/ProtoSchool/protoschool.github.io/pull/111
### Other notes

(@alanshaw) What should we do with the 0.35 release?
 - @achingbrain: release it with DHT disabled
 - Consensus on doing the 0.35 release with DHT disabled!
