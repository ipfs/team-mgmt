# 🚀 IPFS Core Implementations Weekly Sync 🛰 September 28, 2020

- **Lead:** @achingbrain
- **Notetaker:** @vasco-santos
- **Attendees:**
  - @vasco-santos
  - @petar
  - @lidel
  - @gozala
  - @daviddias
  - @aphelionz
  - @ajg
- **Recording:**
  - https://youtu.be/EM56OK-UH3o

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

- No update

#### Pinning Services
@jacobheun / @aschmahmann / @lidel
 
 - @lidel: shipped API spec [v0.1.1](https://github.com/ipfs/pinning-services-api-spec/releases/tag/v0.1.1)
   - Improved dev experience
 - @petar: remote pinning cli fully implemented, blocked on CI integration

#### ed25519 default keys
@jacobheun / @aschmahmann / @lidel

- [updated gateway docs landed](https://github.com/ipfs/ipfs-docs/pull/431)

#### Secio Removal
@jacobheun / @aschmahmann

- js-ipfs should merge PR to drop PR this week
- go-ipfs@0.7 shipped last week

#### Rust IPFS Initiative
@aphelionz

- crate is out, try it! https://crates.io/crates/ipfs
- big ups to https://github.com/koivunej and https://github.com/ljedrz

#### [js improves discoverability and connectivity](https://github.com/libp2p/js-libp2p/issues/703)
@vasco-santos

- Auto relay in progress [libp2p/js-libp2p#723](https://github.com/libp2p/js-libp2p/pull/723)
  - Self Signed Peer Record update + Network update on new address merged
  - This week: Create a proposal for announcing addresses
    - Only announce local addresses if explicitly configured
  
- Connection Manager Overhaul Epic
  - [libp2p/js-libp2p#744](https://github.com/libp2p/js-libp2p/issues/744)
  - No update

- Rendezvous
  - Refactored WIP PR to use signed peer records and uint8arrays
    - [libp2p/js-libp2p-rendezvous#6](https://github.com/libp2p/js-libp2p-rendezvous/pull/6)
  - This week: Get PR ready for review and start integration creating libp2p.discovery API

### Other Initiatives
> This is the backlog of initiatives that are either on-hold or low-priority.

#### Subdomain Gateway (Base32, Origin isolation)
@lidel @riba

- [updated docs landed](https://github.com/ipfs/ipfs-docs/pull/431)

#### UnixFS v1.5 (go-ipfs)
@achingbrain / @ribasushi

- No update

#### [Improving webui file add](https://github.com/ipfs/js-ipfs/issues/3029)
@gozala

- Putting final UI touches hope to be done soon.

#### [Typescript integration for IPFS](https://github.com/ipfs/js-ipfs/issues/2945)

- No updates this week

#### Decompose CLI and Core and HTTP IPFS so they are separate libs

Merged!


#### Bring npm on IPFS up to date

- ipfs-npm-registry-mirror updated to latest js-ipfs
- npm-on-ipfs in progress

### Design Review Proposals
> You want to propose something for design reviews

### Blockers/Asks

@aphelionz
- OrbitDB will be a focus over the next few weeks, reach out if you need

### Questions

@ajg
- Moving pins over the datastore. Do we have any design or solution already on the line?
  - js has a design document that can be seen with previous discussions between js and go teams

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

- https://github.com/ipfs-shipyard/ipld-explorer-components/issues/280 

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

@lidel

- Done:
  - pinning services: shipped API spec [v0.1.1](https://github.com/ipfs/pinning-services-api-spec/releases/tag/v0.1.1)
  - ipfs-companion: [async refactor 99% done](https://github.com/ipfs-shipyard/ipfs-companion/issues/843)
  - subdomain gateways:  [updated docs landed](https://github.com/ipfs/ipfs-docs/pull/431)
  - go-ipfs: [fix links on dir listing on DNSLink websites](https://github.com/ipfs/go-ipfs/pull/7699)
- Next:
  - desktop/companion releases

@vasco-santos
- Done:
  - Auto relay
    - MERGED: network update + self signed peer record update on multiaddr update is ready for review
      - [libp2p/js-libp2p#748](https://github.com/libp2p/js-libp2p/pull/748)
    - network query for relays with hop capabilities is ready for review
      - [libp2p/js-libp2p#749](https://github.com/libp2p/js-libp2p/pull/749)
  - Store self protocols in protobook
    - [libp2p/js-libp2p#760](https://github.com/libp2p/js-libp2p/pull/760)
  - Refactored rendezvous PR to use signed peer records and uint8arrays
    - [libp2p/js-libp2p-rendezvous#6](https://github.com/libp2p/js-libp2p-rendezvous/pull/6)
  - Fix proposed for event handlers throwing erros silently
    - [libp2p/js-libp2p#761](https://github.com/libp2p/js-libp2p/pull/761)
- Blocked: N/A
- Next:
  - Get Rendezvous PR ready for review
    - As a discovery service
  - Start libp2p.discovery API