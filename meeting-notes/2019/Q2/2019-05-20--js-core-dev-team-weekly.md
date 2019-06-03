# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 May 20, 2019

- **Lead:** @jacobheun
- **Notetaker:** @jacobheun
- **Attendees:**
  - @jimpick
  - @auhau
  - @achingbrain
  - @vmx
  - @prabhakar-poudel
- **Recording:** https://youtu.be/MXEx74Kyy60

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
   - Identify Push support in libp2p:
     - Draft PR to Add identify push protocol in js-libp2p-identify [libp2p-identify#53](https://github.com/libp2p/js-libp2p-identify/pull/53)
     - Integration of new identify API into Switch [libp2p-switch#338](https://github.com/libp2p/js-libp2p-switch/pull/338)
       - Push support will be added later, once AutoNat is supported in js.
   - Worked on the demo nodejs and browser apps for IPFS Camp Course
 - Blocked:
 - Next:
   - IPFS Camp Course presentation and finish demo apps in js
   - Finish Identify Push integration
   - Start on AutoNat
     - Will produce a Spec for it as a part of this effort.
   - Go through infrastructure inventory of libp2p with Ops

@vasco-santos (not attending)
 - Done:
   - Initial implementation of `js-gossipsub` PR got merged 🚀
     - [ChainSafe/gossipsub-js#15](https://github.com/ChainSafe/gossipsub-js/pull/15)
   - new implementation for the `interface-connection` proposal almost ready for review
     - [libp2p/interface-connection#29#issuecomment-491262150](https://github.com/libp2p/interface-connection/pull/29#issuecomment-491262150)
   - Data Terra Nemo
 - Blocked: N/A
 - Next:
   - get `interface-connection` PR with the new proposal ready for review
   - enable gossipsub interop tests and integration in `js-libp2p`
   - more async iterators work

@dirkmc
 - Done:
   - refs & refs-local endpoints released
   - Garbage Collector locking first impl [js-ipfs#2022](https://github.com/ipfs/js-ipfs/pull/2022)
 - Blocked:
 - Next:
   - Tests for GC locking

@auhau (Adam)
 - Done:
   - PR for migration tool ready to review [AuHau/js-ipfs-repo-migrations#1](https://github.com/AuHau/js-ipfs-repo-migrations/pull/1)
   - Initial integration to js-ipfs [js-ipfs#2044](https://github.com/ipfs/js-ipfs/pull/2044)
 - Blocked:
   - Guidance on how to continue with `js-ipfs-repo-migrations` (move under ipfs org?) 
 - Next:
   - Tests & documentation for the integration to `js-ipfs`
   
@jimpick
 - Done:
   - IPFS Camp Course "C" - Apps
   - a bit more work on a demo for "SXG republisher service" https://github.com/ipfs/integration-mini-projects/issues/3
     - wildcard SSL cert for offline publishing
     - experimental Chrome web extension
 - Blocked:
 - Next:
   - more IPFS Camp
   - talk to Arkadiy about collaborations
   - further work on SXG demo
   - more "package manager" experimentation

@achingbrain
 - Done:
   - mfs/unixfs-importer/unixfs-exporter async/await PRs
   - DTN conf
 - Blocked:
   - n/a
 - Next:
   - interop tests
   - performance analysis of async/await PRs
   - npm-on-ipfs deployment - upgrade js-ipfs
   - npm-on-ipfs deployment - deploy on EC2 if infra grant permissions

@vmx
 - Done:
   - IPLD Team week
     - Watch https://github.com/ipld/specs/ if you are interested in the newest/hottest stuff
   - DTN conf
 - Blocked:
   - Nope
 - Next:
   - js-ipld-dag-pb:
     - Making the API as small as possible as the only user is UnixFSv1 anyway
     - Causing @achingbrain more headaches
   - multiformats: Cleaning up the specs a bit

@alanshaw (not attending)
- Done:
    - Finished off work on [`ipfs-dag-builder-vis`](https://github.com/ipfs-shipyard/ipfs-dag-builder-vis)
    - Working on IPFS Camp course content
- Blocked:
    - `null`
- Next:
    - Release [JS IPFS 0.36](https://github.com/ipfs/js-ipfs/issues/2024)
 
### Questions
- What is the relation of AutoNat to Identify?
  - AutoNat is a protocol for connected peers to help each other determine their NAT status, along with their addresses. This allows nodes to leverage their peers to automatically discover their NAT addresses. If a node is able to learn a new address for itself it can use the Identify Push protocol to let all peers connected to it, that it has a new/updated set of addresses.
- Is AutoNat run as a centralized service?
  - No. Any node can run the AutoNat protocol, so as long as a node has peers that know the protocol, it can leverage them.

### Cross team updates

@lidel (In Web Browsers WG)
- [WebRTC WG at W3C looking for DHT/P2P use cases](https://github.com/libp2p/js-libp2p-webrtc-star/issues/177)
- [multicodec: add IPLD codec for libp2p public keys](https://github.com/multiformats/multicodec/pull/131)
  - Context: [IPNS: should work with case-insensitive identifiers (Base32)](https://github.com/ipfs/go-ipfs/issues/5287)
  
### Other notes

- @jacobheun out Monday (May 27)
