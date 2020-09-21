# 🚀 IPFS Core Implementations Weekly Sync 🛰 September 14, 2020

- **Lead:** @achingbrain
- **Notetaker:**
- **Attendees:**
  - @your name here
  - @gozala
  - @jacobheun
  - @aschmahmann
  - @petar
  - @aphelionz
  - @vasco-santos
- **Recording:**
  - https://youtu.be/kwZmVKAbzzw

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

- go-ipfs 0.7 RC2 went out last week, https://github.com/ipfs/go-ipfs/releases/tag/v0.7.0-rc2
  - Includes few bugfixes
  - on target for 0.7 this week
  - Only things that needs to go into 0.7 are
    - webui update
    - tiny bugfix
    - some perf intvestigation, to ensure everything works as it should
- go-ipfs 0.7 should release this week https://github.com/ipfs/go-ipfs/issues/7560


#### Pinning Services
@jacobheun / @aschmahmann / @lidel

- WebUI integration work has kicked off
- Some service/client integration issues that need to be resolved

- On the way
- We have a server that responds to things
- We have client that sends requests
- We have initial go-ipfs chunk done, enough to enable http-client to play around with
  - Still need to go and backfill things
     - e.g. handling of pinning service API keys, additional options, convenience shortcuts, etc. 

- On the API spec side
  - @lidel will make new spec version with recent clarifications
  - Changes to the spec:
    - Revamped errors
    - Decreasing limit of CIDs that can be passed to the filter (hard limit to 10)
      - @aschmahmann Can we set limit on characters, in case CID size grows with new encodings / hashing (or just uses longer one)
  - Closer to be happy with spec and docs
  - Target to do major release once go-ipfs ships (server ??)
 
#### ed25519 default keys
@jacobheun / @aschmahmann / @lidel


- go-ipfs done pending 0.7 release

#### Secio Removal
@jacobheun / @aschmahmann

- go-ipfs done pending 0.7 release

#### Rust IPFS Initiative
@aphelionz

> Number of small updates and clean-ups after the last big push to get pin and dht shipped

- https://github.com/rs-ipfs/rust-ipfs/pull/370
- https://github.com/rs-ipfs/rust-ipfs/pull/369
- https://github.com/rs-ipfs/rust-ipfs/pull/368
- https://github.com/rs-ipfs/rust-ipfs/pull/367
- https://github.com/rs-ipfs/rust-ipfs/pull/366
- https://github.com/rs-ipfs/rust-ipfs/pull/365
- https://github.com/rs-ipfs/rust-ipfs/pull/364
- https://github.com/rs-ipfs/rust-ipfs/pull/362
- https://github.com/rs-ipfs/rust-ipfs/pull/361

Also, check these out: 
- [Substrate + IPFS tech preview](https://hackmd.io/2pUsb3I4RHGh_TLuKTMVRg)!
- [areweipfsyet.rs](https://areweipfsyet.rs/)
- [autonat PR](https://github.com/libp2p/rust-libp2p/pull/1672)


Also @gozala, let's talk about the shared worker implementation because OrbitDB 0.26 is coming out soon and 0.27 could potentially utilize it

- @aschmahmann: Q about DHT, is there autonat ?
  - Not yet, leveraging rust-libp2p
  - Request: Maybe it's worth leaving DHTs in client mode, so we don't introduce bad nodes.

#### [js improves discoverability and connectivity](https://github.com/libp2p/js-libp2p/issues/703)
@vasco-santos


- Auto relay in progress [libp2p/js-libp2p#723](https://github.com/libp2p/js-libp2p/pull/723)
  - Addressed review from initial implementation
  - [PR](https://github.com/libp2p/js-libp2p/pull/748) for network update on new address
    - Identify Push + Self Signed Peer Record update on new addr
  - [Working on](https://github.com/libp2p/js-libp2p/pull/749) Finding remote relays 
    - Initial approach for a service discovery with namespaces (as go-libp2p-discovery)
    - contentRouting + Rendezvous discovery
    - Decoupling Circuit Transport from Relay service
      - Provide Relay service + Relay lifescycle methods for triggering initial network search
  
- Connection Manager Overhaul Epic
  - [libp2p/js-libp2p#744](https://github.com/libp2p/js-libp2p/issues/744)
  - Aim to start this week

### Other Initiatives
> This is the backlog of initiatives that are either on-hold or low-priority.

#### Subdomain Gateway (Base32, Origin isolation)
@lidel @riba

no news

#### UnixFS v1.5 (go-ipfs)
@achingbrain / @ribasushi

No update

#### [DAGService](https://github.com/ipfs/js-dag-service)
@gozala

- No update

#### [Improving webui file add](https://github.com/ipfs/js-ipfs/issues/3029)
@gozala

- Has shipped

#### [Typescript integration for IPFS](https://github.com/ipfs/js-ipfs/issues/2945)

- @gozala Picked the torch from hugo
- [Have a work in progress PR for typedefs generation](https://github.com/ipfs/js-ipfs/pull/3281)

### Design Review Proposals
> You want to propose something for design reviews

### Blockers/Asks

- @aschmahmann: Number of task we want to do like orbitdb and npm on IPFS. Help would be great
  - @aphelionz might be able to help with some of it.

### Questions

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

### Week Update (for async review)
> Only post updates that are relevant 
to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟 

@achingbrain
- Done:
  - Disable CORS by default https://github.com/ipfs/js-ipfs/pull/3275
  - js-ipfs0.50.x blog post https://github.com/ipfs/blog/pull/474
  - js-ipfs tests on node 14 now https://github.com/ipfs/js-ipfs/pull/3246
- Blocked:
  - N/a
- Next:
  - Split cli and http API out of ipfs core
  - Review & merge https://github.com/ipfs/js-ipfs/pull/3281
  - Update tests to use in go-ipfs@0.7.x

@vasco-santos
- Done:
  - Auto relay
    - Initial implementation review addressed
      - [libp2p/js-libp2p#723](https://github.com/libp2p/js-libp2p/pull/723)
    - network update + self signed peer record update on multiaddr update
      - [libp2p/js-libp2p#748](https://github.com/libp2p/js-libp2p/pull/748)
    - network query for relays with hop capabilities
      - [libp2p/js-libp2p#749](https://github.com/libp2p/js-libp2p/pull/749)
  - Misc
    - [libp2p/js-libp2p#752](https://github.com/libp2p/js-libp2p/pull/752)
    - [libp2p/js-libp2p#747](https://github.com/libp2p/js-libp2p/pull/747)
    - [libp2p/js-libp2p#746](https://github.com/libp2p/js-libp2p/pull/746)
    - [libp2p/js-libp2p#745](https://github.com/libp2p/js-libp2p/pull/745)
    - [js-libp2p-examples#26](https://github.com/libp2p/js-libp2p-examples/pull/26)
    - [js-libp2p-delegated-peer-routing#40](https://github.com/libp2p/js-libp2p-delegated-peer-routing/pull/40)
    - [js-libp2p-delegated-content-routing#44](https://github.com/libp2p/js-libp2p-delegated-content-routing/pull/44)
- Blocked: N/A
- Next:
  - Get AutoRelay PRs merged
  - Start Connection Manager Overhaul work


@lidel
- Done:
  - pinning services: [API: improved error codes](https://github.com/ipfs/pinning-services-api-spec/pull/59)
  - webui: v2.11 reviews, more tests in [improved support for remote API](https://github.com/ipfs-shipyard/ipfs-webui/pull/1613), helping shipping & testing [v2.11.0](https://github.com/ipfs-shipyard/ipfs-webui/releases/tag/v2.11.0)
  - go-ipfs: 
      - plugin testing on linux
      - 0.7.0 RC1/2 testing (companion, webui, desktop)
  - cors reviews/discussions
      - go-ipfs: [lifting Origin check for Electron renderer](https://github.com/ipfs/go-ipfs-cmds/pull/201)
      - js-ipfs: [cors support](https://github.com/ipfs/js-ipfs/pull/3275)
- Next:
  - ipfs-desktop with go-ipfs 0.7 and new webui


@name
- Done:
  - What have you accomplished since the last Weekly?
- Blocked:
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
- Next:
  - What is the next important thing you should focus on.
