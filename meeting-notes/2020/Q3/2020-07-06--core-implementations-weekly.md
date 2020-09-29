# 🚀 IPFS Core Implementations Weekly Sync 🛰 July 6, 2020

- **Lead:** @achingbrain
- **Notetaker:** @jacobheun
- **Attendees:**
  - @jacobheun
  - @gozala
  - @lidel
  - @vasco-santos
- **Recording:** https://youtu.be/v5S5uz5qE0M

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

- js-ipfs 0.48 to add storing blocks by multihash. There is an RC now, please test.
- go-ipfs 0.6.1?, TBD on releaseing this, may wait till 0.7

#### Pinning Services
@jacobheun / @aschmahmann / @lidel

- https://github.com/ipfs/pinning-services-api-spec/
  - invited remote pinning services to provide feedback on [spec draft](https://github.com/ipfs/pinning-services-api-spec)
  - started identifying what is [MVP for WebUI integration](https://github.com/ipfs/pinning-services-api-spec/milestone/1)
  - need feedback/help from go/js-ipfs (who will implement client for this API)
  
#### ed25519 default keys
@jacobheun / @aschmahmann / @lidel

- Working on fixing import/export support for js-ipfs. This is needed for interop with Go IPNS.
- Need to finish the subdomain support PR [go-ipfs#7441](https://github.com/ipfs/go-ipfs/pull/7441)
- Trying to get go-ipfs sharness tests to pass with Ed25519 by default PR. Currently hung up on IPTB upgrade issues
- Key rotate PR, [go-ipfs#7515](https://github.com/ipfs/go-ipfs/pull/7515), is blocked by ed25519 support

#### Subdomain Gateway (Base32, Origin isolation)
@lidel @riba

- https://github.com/ipfs/go-ipfs/pull/7441 I believe all comments addressed – ready for final review

#### Rust IPFS Initiative
@aphelionz

- No update

#### js-libp2p-rendezvous
@vasco-santos
  
- Started second iteration based on initial feedback
- Needs before new review:
  - document with planned integration with js-libp2p
  - gc
  - cookies
  - signed peer records
- move to `js-libp2p` and integration
  
#### js-libp2p Signed Peer Records & Gossipsubv1.1
@vasco-santos

- Signed peer records work is ready for review
- Gossipsub1.1
  - SPAM protection PRs got merged
  - Needs:
    - direct peer connections
    - peer exchange
    - testing and refactor for libp2p-pubsub

### Other Initiatives

This is the backlog of initiatives that are either on-hold or low-priority.

#### UnixFS v1.5 (go-ipfs)
@achingbrain / @ribasushi

- No update

#### Migration to multihash keys in blockstore (js-ipfs / go-ipfs)
@achingbrain

- PR merged, will be in the next release (0.48)

#### Pinning system revamp
@achingbrain

- PRs updated
  - https://github.com/ipfs/js-ipfs-repo-migrations/pull/15
  - https://github.com/ipfs/js-ipfs-repo/pull/221
  - https://github.com/ipfs/js-ipfs/pull/2771

#### Shared IPFS node
@gozala

- Got some review feedback, will work to address those.

#### [Improving web File Add](https://github.com/ipfs/js-ipfs/issues/3029)
@gozala

- Have pull request for webui that proves the concept (but depends on using HTTP API without IPFS http client)
  https://github.com/ipfs-shipyard/ipfs-webui/pull/1534
- Patch in progress for js-ipfs-(http-client)
- Will schedule a design review call this week.
  - Just hugo added himself to the attendee list

### Design Review Proposals
> You want to propose something for design reviews

- https://github.com/ipfs/pinning-services-api-spec/
  - need help finalizing this spec, soft ETA is next Monday, and go/js-ipfs are key consumers of this spec
  - let's review async and meet this week (thursday/friday?) 
  - (Add yourself to be on the call)
    - @lidel
    - @jacobheun  
    - @aschmahmann
    - @achingbrain


- [Improving web File Add](https://github.com/ipfs/js-ipfs/issues/3029)

  Multiple options were discussed in the [js-ipfs#3029](https://github.com/ipfs/js-ipfs/issues/3029) some decisions need to be made on which way to go.

 (Add yourself to be on the call)
 - @gozala
 - @hugomrdias
 - @jacobheun 
 - @lidel
 - @achingbrain
 - ...


### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

### Questions
> You have questions and need them answered. List them here.

- Is there really a usecase for depth 2 or 3? I mean, what's the purpose? 
  - To be able to specify replication for a certain portion of the DAG, instead of pinning the root.

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
  - Fixed bug in it-to-stream [alanshaw/it-to-stream#4](https://github.com/alanshaw/it-to-stream/pull/4)
  - Moved all optional API params to options arg [ipfs/js-ipfs#3118](https://github.com/ipfs/js-ipfs/pull/3118)
  - Added ipfs-http-client and interface-ipfs-core to version command [ipfs/js-ipfs#3125](https://github.com/ipfs/js-ipfs/pull/3125)
  - Store blocks by multihash [ipfs/js-ipfs#3124](https://github.com/ipfs/js-ipfs/pull/3124)
  - Fix loading custom IPLD codecs [ipfs/js-ipfs#3132](https://github.com/ipfs/js-ipfs/pull/3132)
- Blocked:
  - N/a
- Next:
  - Release js-IPFS with blocks stored by multihash
  - Land shared IPFS node PR
  - Finish pinning refactor

@vasco-santos
- Done:
  - Reviews and Support for Gossipsub1.1
  - Maintenance of pending PRs for some IPFS repos
    - [ipfs/js-ipfs-http-response](https://github.com/ipfs/js-ipfs-http-response)
    - [ipfs/js-datastore-pubsub](https://github.com/ipfs/js-datastore-pubsub)
    - [ipfs/js-ipns](https://github.com/ipfs/js-ipns)
  - Signed Peer Records second iteration
    - Certified AddressBook
      - [libp2p/js-libp2p/pull/683](https://github.com/libp2p/js-libp2p/pull/683)
  - Pubsub fix on reconnect
      - [libp2p/js-libp2p-interfaces#/54](https://github.com/libp2p/js-libp2p-interfaces/pull/54)
      - [libp2p/js-libp2p#691](https://github.com/libp2p/js-libp2p/pull/691)
  - RFC js pubsub-interface
    - [libp2p/js-libp2p-interfaces#53](https://github.com/libp2p/js-libp2p-interfaces/issues/53)
  - Started second iteration on Rendezvous
    - [libp2p/js-libp2p-rendezvous#6](https://github.com/libp2p/js-libp2p-rendezvous/pull/6)
- Blocked: N/A
- Next:
  - Finish Signed Peer Records PRs
  - Continue supporting gossipsub 1.1
  - Continue Rendezvous

@lidel

- Done:
  - admin related to Pinning Services (remote services / webui / [API SPEC](https://github.com/ipfs/pinning-services-api-spec/))
  - go-ipfs
    - subdomain gateways: [feat: support ED25519 at subdomain gw with TLS](https://github.com/ipfs/go-ipfs/pull/7441)
    - [discussing text encoding after the switch to ed25519 keys](https://github.com/ipfs/go-ipfs/issues/6916#issuecomment-652099251)
  - js-ipfs: reviewing [feat: share IPFS node between browser tabs](https://github.com/ipfs/js-ipfs/pull/3081#pullrequestreview-441689168)
  - various other reviews (webui/companion/desktop)
- Next:
  - new companion
  - finalize pinning services api
  
@jacobheun
- Next:
  - fix some issues with js pubsub caused by node reconnects
  - ed25519 import/export support for js-libp2p crypto/keychain
  
