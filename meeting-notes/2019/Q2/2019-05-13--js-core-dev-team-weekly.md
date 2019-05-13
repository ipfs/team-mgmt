# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 May 13, 2019

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @jimpick
  - @vasco-santos
  - @lidel
  - @dirkmc
  - @hugomrdias
  - @terichadbourne
  - @achingbrain
- **Recording:** https://youtu.be/3rdJMS4chcY

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

@alanshaw
- Done:
    - Working on IPFS Camp content, sneak peek:
        - <img style="max-width:100%" src="https://user-images.githubusercontent.com/152863/57448181-aacca800-7250-11e9-8c88-77f9297c90b1.png">
        - <img style="max-width:100%" src="https://user-images.githubusercontent.com/152863/57448184-abfdd500-7250-11e9-8ada-d598d3091ce7.png">
    - Released `ipfs-http-client` `v31.0.0`, adds:
        - `.refs`
        - `.refsPullStream`
        - `.refsReadableStream`
        - `.refs.local`
        - `.refs.localPullStream`
        - `.refs.localReadableStream`
        - 👏 @dirkmc
    - Started release process for [`js-ipfs` `v0.36`](https://github.com/ipfs/js-ipfs/issues/2024)
    - Propagate `datastore-level` update for Node.js 12 support
    - Enabled greenkeeper on `js-ipfs`, `js-ipfs-http-api` and `interface-js-ipfs-core`
    - Many dependency updates for base32 encoding for v1 CIDs
        - See [#1995](https://github.com/ipfs/js-ipfs/issues/1995) for details
        - Main PR is [#2050](https://github.com/ipfs/js-ipfs/pull/2050)
- Blocked:
    - `null`
- Next:
    - Release JS IPFS 0.36
    - More work on IPFS Camp courses

@dirkmc (Finally attending this week - from Managua 🌴)
- Done:
  - Implemented mark and sweep algorithm for Garbage Collection [js-ipfs#2022](https://github.com/ipfs/js-ipfs/pull/2022)
- Blocked:
- Next:
  - Implement locking for Garbage Collection / Pinning [Issue js-ipfs#2012](https://github.com/ipfs/js-ipfs/issues/2012)

@jacobheun
- Done:
  - Started work on IPFS Camp course for libp2p
  - js-libp2p [release 0.25.3](https://github.com/libp2p/js-libp2p/releases/tag/v0.25.3) for pubsub message signing
  - DHT configuration performance testing for js-ipfs
  - Released [libp2p-mdns update](https://github.com/libp2p/js-libp2p-mdns/releases/tag/v0.12.3) to include compat layer for go
    - _Note_: A draft of the new [mdns spec](https://github.com/libp2p/specs/blob/master/discovery/mdns.md) was merged
  - Libp2p Nat Traversal work
    - Started work on adding identify push protocol to js
- Blocked:
- Next:
  - More IPFS Camp course work
  - PR for updated DHT configuraiton to js-ipfs
  - Finish Identify Push protocol and add it to Switch
  - Start work on AutoNat in js-libp2p

@vasco-santos
- Done:
  - New proposal for `interface-connection` and `interface-stream` taking into account uniformization and introspection
    - [libp2p/interface-connection#29#issuecomment-491262150](https://github.com/libp2p/interface-connection/pull/29#issuecomment-491262150)
  - Updated hapi in `js-libp2p-webrtc-star`
    - [libp2p/js-libp2p-webrtc-star#173](https://github.com/libp2p/js-libp2p-webrtc-star/pull/173)
  - interop tests for IPNS over Pubsub green again
    - [ipfs/interop#39](https://github.com/ipfs/interop/pull/39)
- Blocked: N/A
- Next:
 - get initial version of `js-gossipsub` PR merged 
 - update `interface-connection` PR with the new proposal and tests for it
 - create `interface-stream`
 - Data Terra Nemo

@jimpick
- Done:
   - peer-base-pinner - removed IPNS, use metadata from ipfs-cluster instead
   - "mini projects" brainstorming with Andrew Nesbitt
   - Sync up with @alanshaw
   - IPFS Camp prep - Course "C" - Apps with Hugo / Lidel
   - Portland trip
     - csv,conf https://csvconf.com/
       - Ilya Kreymer
       - Peter van Hardenberg
       - Simon Willison
       - Dat Project
     - also, Gozala, Michael Burns, Jeffrey Yaskin (Google), Kyle Drake
- Blocked:
- Next:
   - More IPFS Camp prep
   - More work on PeerPad / peer-base-pinner

@hugomrdias
- Done:
  - ipns resolve fqdn PRs
  - ipns over dns resolver
  - IPFS Camp Course C 
- Blocked:
- Next:
  - Merge File DOM Api PRs
  - More IPFS Camp 
  - Attend DTN Berlin

@lidel
- Done:
  - Releases
    - ipfs-companion [v2.8.2](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.2)  (Stable)
      - includes Prototype of Embedded HTTP Gateway in Brave
        - opening `/ipns/tr.wikipedia-on-ipfs.org/wiki/Mars.html` works – details in [#719](https://github.com/ipfs-shipyard/ipfs-companion/pull/719) 
    - is-ipfs  [v0.6.1](https://github.com/ipfs/is-ipfs/releases/tag/v0.6.1)
    - chrome-net [v3.2.2](https://github.com/feross/chrome-net/pull/38)
    - IPFS Camp Course C
- Blocked:
  - js-ipfs gateway needs to load files/dirs from hamt shards  [js-ipfs-http-response/pull/19](https://github.com/ipfs/js-ipfs-http-response/pull/19)
      - depends on [js-ipfs-mfs/pull/48](https://github.com/ipfs/js-ipfs-mfs/pull/48)
  - Rebased [js-ipfs/pull/2020](https://github.com/ipfs/js-ipfs/pull/2020) parked until remaining  IPNS PRs land
- Next:
    - IPFS Camp
    - Companion/Brave

@achingbrain
- Done:
  - async/await for unixfs & mfs
  - IPFS Camp prep - libp2p planning
- Blocked:
  - async/await for unixfs & mfs
- Next:
  - async/await for unixfs & mfs
  - DTN Conf

### Questions

- should we do an iterative non-breaking approach for the async iterators in modules such as the DHT?
  - See the recording for a longer version of the discussion. The short answer is, we'll leave it up to maintainer discression. Some modules, especially those in heavy active development will be difficult to do full async/await changes. Ideally we want to minimize duplication of work where possible, but in some places this may be unavoidable. 

### Cross team updates

@terichadbourne (GUI/ProtoSchool)
- Making good progress on the MFS tutorial for ProtoSchool: https://github.com/ProtoSchool/protoschool.github.io/pull/200
- Available to chat with those building IPFS Camp workshops about whether any part of them makes sense to live on ProtoSchool. Instructions for building tutorials are here: https://github.com/ProtoSchool/protoschool.github.io#developing-tutorials


### Other notes

- Alan OOO on Friday
- Vasco partially OOO on Wednesday (flying to Berlin)
- Vasco partially OOO on Friday (DTN)
