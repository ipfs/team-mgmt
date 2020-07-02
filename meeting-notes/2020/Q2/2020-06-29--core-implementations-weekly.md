# 🚀 IPFS Core Implementations Weekly Sync 🛰 June 29, 2020

- **Lead:** @achingbrain
- **Notetaker:**
- **Attendees:**
  - @yournamehere
  - @vasco-santos
  - @jacobheun
  - @aschmahmann
  - @hugomrdias
  - @petar
  - @gozala
- **Recording:** https://youtu.be/HdQNGAAqW-U

## Agenda

- Ensure a notetaker exists!
  - The notetaker should:
    - Add bullet points of what is said to each section of this file
    - Wait a day or two for people to add their async updates
    - PR this file into https://github.com/ipfs/team-mgmt
- Ask everyone to put their name into the list of attendees
- Initiatives
- Blockers (from the async status update)
- General questions. Could be things like:
  - I'm stuck with something, I don't know who to ask. Who knows who to ask?
  - Who can help me with xyz?
- Plan for this week
  - Select issues to work on
- Review remaining parking lot topics if there is time left

### High Priority Initiatives

These are the high priority initiatives the team is currently working on.

#### Upcoming/Shipped Releases

- [js-ipfs@0.47.0](https://github.com/ipfs/js-ipfs/releases/tag/ipfs%400.47.0) (was shippped last week that brought)
  - js-libp2p@0.28.0 (which introduced)
    - Noise (protocol as fallback for secio)
    - Persistant peer store (so when you restart the node it will try to reconnect to the same peers again)
  - WebUI v2.9.0
  - Bug fixes
    - ipns pub-sub and other things


  - [go-ipfs@0.6](https://github.com/ipfs/go-ipfs/releases/tag/v0.6.0) came out two weeks ago.
    - Switches to QUIC by default 
    - Got peering support
    - update to gossipsub@1.1
    - It has base36 support

#### Pinning Services
@jacobheun / @aschmahmann / @lidel

- Going to working on finishing up spec for the pinning service API
  - Thiss will allow configuring third party services like pinata, enfura, ... and configure IPFS in web ui (and hopefully in CLI as well) so you'll be able to pin content with third party services.
- Targeting 0.7 for that. 
- Still need to worthrough the scope
  - and what the phasing of this work will be so phased.

> Provide IPFS users the ability to configure and use 3rd party pinning services.

- We are currently working on finalizing a spec for pinning service APIs: [spec repo](https://github.com/ipfs/pinning-services-api-spec)
- We will be working this week to finalize phases and scope for this work
  - IPFS configuration updates
  - Manual pinning / Pinning policy support
- Targeting IPFS 0.7 for this support 


#### Subdomain Gateway (Base32, Origin isolation)
@lidel @riba

- long CID redo done, finishing tests, will ask for review later this week (will be a small PR)
- Hopefully it will with 0.7 as well.


#### Stream Content-Based-Chunking Research/Improvements (go-ipfs / js-ipfs / 🗡️ )
@ribasushi

- no update
- This effort might get tabled for couple of month.

#### Rust IPFS Initiative
@aphelionz

- no update

#### js-libp2p-rendezvous
@vasco-santos

- rendezvous still on hold as it depends on next item Signed Peer Records
  
  
#### js-libp2p Signed Peer Records & Gossipsubv1.1
@vasco-santos

- Signed Peer Records ready for review
  - Record Interface
    - [libp2p/js-libp2p-interfaces#52](https://github.com/libp2p/js-libp2p-interfaces/pull/52)
  - Envelope + Peer Record implementation (@jacobheun already did first pass)
    - [libp2p/js-libp2p#681](https://github.com/libp2p/js-libp2p/pull/681)
  - Identify Integration
    - [libp2p/js-libp2p#682](https://github.com/libp2p/js-libp2p/pull/682)
  - Certified AddressBook
    - [libp2p/js-libp2p#683](https://github.com/libp2p/js-libp2p/pull/683)
  - This week waiting for the reviews / iterating. Hopefully it will land this week or beginning of next one. 
- Gossipsubv1.1
  - Big chunks are merged into [ChainSafe/js-libp2p-gossipsub#82](https://github.com/ChainSafe/js-libp2p-gossipsub/pull/82) temporary branch:
    - Peer score
    - Flood publishing
    - Extended validators
    - Adaptative gossip
    - Pruning backoff
    - Oportunistic grafting
  - 3 bigger items left:
    - direct peer connections
    - spam protection
    - peer exchange (depedency on signed peeer records)

### Other Initiatives

This is the backlog of initiatives that are either on-hold or low-priority.

#### UnixFS v1.5 (go-ipfs)
@achingbrain / @ribasushi

- no update

#### Migration to multihash keys in blockstore (js-ipfs / go-ipfs)
@achingbrain

- PR is open https://github.com/ipfs/js-ipfs/pull/3124
  - `ipfs refs local` now returns a v1 `CID` with the `raw` codec for every block and not the original `CID` by which it was added to the blockstore.
  - `ipfs refs local` was added `--multihash` argument, if passed prints the base32 encoded multihash of each block.
- Need someone from go-ipfs to attempt to move to mulithash keys to have an alignment.
  - @achingbrain will check with @hsanjuan about that.
  - Then sync with @aschmahmann an how this is going.

#### Pinning system revamp
@achingbrain

- Next! Will pick up this week.

#### Shared IPFS node
@gozala

- Waiting on [review](https://github.com/ipfs/js-ipfs/pull/3081) to be able iterate on this.

#### [Improving web File Add](https://github.com/ipfs/js-ipfs/issues/3029)

- Mainstream browsers do not support `ReadableStream` bodies yet.
- This causes `ipfs.add` to buffer everythnig in memory before HTTP request is issued by `js-ipfs-http-client`.
- Working on improvement that would use web `Blob` APIs to avoid buffering.
 


### Design Review Proposals
> You want to propose something for design reviews

- [Improving web File Add](https://github.com/ipfs/js-ipfs/issues/3029)

  Multiple options were discussed in the [js-ipfs#3029](https://github.com/ipfs/js-ipfs/issues/3029) some decisions need to be made on which way to go.

 (Add yourself to be on the call)
 - @gozala
 - @hugomrdias
 - ...

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

- No blockers

### Questions
> You have questions and need them answered. List them here.

- @aschmahmann was wondering if anyone has context on why we still care about peers that do not embed public keys into the IPNS records (it must be an ancient change)
  - We can probably stop caring about such peers.
  - No responses.
  - @aschmahmann will report back with findings on that.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

### Week Update (for async review)
> Only post updates that are relevant 
to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟 

@name
- Done:
  - What have you accomplished since the last Weekly?
- Blocked:
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
- Next:
  - What is the next important thing you should focus on.
  
@achingbrain
- Done:
  - Store blocks by mulithash [ipfs/js-ipfs#3124](https://github.com/ipfs/js-ipfs/pull/3124)
  - Optional arguments go in the options object [ipfs/js-ipfs#3118](https://github.com/ipfs/js-ipfs/pull/3118)
  - Add interface-core/http-client versions to `ipfs version` [ipfs/js-ipfs#3125](https://github.com/ipfs/js-ipfs/pull/3125)
  - Fix up allowing user-specified ipld formats [ipfs/js-ipfs#3132](https://github.com/ipfs/js-ipfs/pull/3132)
- Blocked:
  - N/a
- Next:
  - Pick up pinning refactor

@vasco-santos
- Done:
  - Reviews and Support for Gossipsub1.1
  - Signed Peer Records second iteration
    - Record Interface
      - [libp2p/js-libp2p-interfaces#52](https://github.com/libp2p/js-libp2p-interfaces/pull/52)
    - Envelope + Peer Record implementation
      - [libp2p/js-libp2p#681](https://github.com/libp2p/js-libp2p/pull/681)
    - Identify Integration
      - [libp2p/js-libp2p#682](https://github.com/libp2p/js-libp2p/pull/682)
    - Certified AddressBook
      - [libp2p/js-libp2p#683](https://github.com/libp2p/js-libp2p/pull/683)
  - Add new webrtct servers information
    - [libp2p/js-libp2p-webrtc-star#232](https://github.com/libp2p/js-libp2p-webrtc-star/pull/232)
    - [libp2p/js-libp2p#684](https://github.com/libp2p/js-libp2p/pull/684)
    - [ipfs/js-ipfs#3126](https://github.com/ipfs/js-ipfs/pull/3126)
- Blocked: N/A
- Next:
  - Finish Signed Peer Records PRs
  - Continue supporting gossipsub 1.1
  - Second iteration on Rendezvous

@lidel

- Done: 
  - retro and Q3 priorities for WB/GUI
  - ipfs-companion
    - shipped [v2.13.1](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.13.1)
    - [analysis of DNS leak when browser is set to use DoH or a proxy](https://github.com/ipfs-shipyard/ipfs-companion/issues/900#issuecomment-647026352)
    - [looking into newly added WebExtension support in Safari](https://github.com/ipfs-shipyard/ipfs-companion/issues/840#issuecomment-649855052)
  - subdomain gateways
    - rebasing and simplifying PR to try Base36 and return error when not enough
  - pinning services
    - [technical analysis of ipfs-webui needs](https://docs.google.com/document/d/1f0R7woLtW_YTv9P9IOrUNK6QafgctJ7qTggEUdepD_c/edit#) and kick-off meetings
    - created [ipfs/pinning-services-api-spec](https://github.com/ipfs/pinning-services-api-spec) as a place to finalize API 
- Next:
  - land PR with redo for long CIDs
  - pinning services: planning / scope refinement
  - review PR with sharing IPFS node
