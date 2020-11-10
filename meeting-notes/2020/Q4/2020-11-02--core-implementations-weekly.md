# 🚀 IPFS Core Implementations Weekly Sync 🛰 November 2 2020

- **Lead:** @achingbrain
- **Notetaker:** @lidel
- **Attendees:**
  - @vasco-santos
  - @gozala
  - @jacobheun
- **Recording:**
  - https://youtu.be/nar7HM4vPXM

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

- js-ipfs 51 ([blogpost](https://blog.ipfs.io/2020-10-29-js-ipfs-0-50/))
- Potential 0.8 RC this week
  - QUIC upgrade, should be good to go or almost there
  - go-libp2p-core, should be happening this week unless there are big issues in which case go-ipfs will just update core next time.

#### Pinning Services
@jacobheun / @aschmahmann / @lidel

- Pinning Service API looks pretty good
  - pinning-services-api: [v0.1.2](https://github.com/ipfs/pinning-services-api-spec/releases/tag/v0.1.2) does fast exact name search by default
- Pinning in Datastore looks good, but needs migration + repo bump + some manual testing
  - performance looks great

#### Secio Removal
@jacobheun / @aschmahmann

- Aiming to "flash" support this week on the Bootstrap nodes
  - Plan: 
    - wait 24h and see if anyone notices, if no loud complaints then disable next week
    - after it's disabled we will shutdown the old DHT boosters

#### [js improves discoverability and connectivity](https://github.com/libp2p/js-libp2p/issues/703)
@vasco-santos

- Custom announce filter function ready to review
- Custom Dial addr sorter function
- Rendezvous inital integration (no discovery APU) is ready
  - Needs rendezvous implementation review
- Started Auto relay example
  - First example with tests for libp2p
- TODO: also create example for rendezvous

#### Bi-directional streaming and streaming errors in the browser
@achingbrain

- problems
  - can't start receiving data without sending entire data
  - HTTP Trailers are used for passing errors, sadly browsers do not support them
- fix: rpc over medium where we can stream
  - started looking into solutions (websockets, grpc, jsonrpc, http/2), need to evaluate what works in regular browsers

### Other Initiatives
> This is the backlog of initiatives that are either on-hold or low-priority.

#### [Improving webui file add](https://github.com/ipfs/js-ipfs/issues/3029)
@gozala
- no update

#### [Typescript integration for IPFS](https://github.com/ipfs/js-ipfs/issues/2945)
- added few more pulls that add more annotations

#### Badger 2 support

- no update, waiting for new upstream major release with features we need

#### dnsaddr resolving in JS
@vasco-santos

- multiaddr dnsaddr resolvers are done, merged and released
- PR to integrate on libp2p dial needs final review
  - Bootstrap dnsaddr need to be changed
    - Some unreachable addresses and errors with certificates for non dns multiaddr
    
#### NAT Traversal

- Currently in work plan process

### Design Review Proposals
> You want to propose something for design reviews

### Blockers/Asks

### Questions

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

- @lidel: HTTP gateways: looking for a way to represent DNSLink domain names on public gateways in a way that does not break TLS
  - details in https://github.com/ipfs/in-web-browsers/issues/169
  - would appreciate comments / sanity check / encoding proposal for Option "C" etc

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

@vasco-santos
- Done:
  - dnsaddr resolve
     - merged [multiformats/js-multiaddr#149](https://github.com/multiformats/js-multiaddr/pull/149)
     - merged [multiformats/js-multiaddr#155](https://github.com/multiformats/js-multiaddr/pull/155)
     - updated [libp2p/js-libp2p#782](https://github.com/libp2p/js-libp2p/pull/782)
  - Custom announce filter function ready for review
    - [libp2p/js-libp2p#783](https://github.com/libp2p/js-libp2p/pull/783)
  - Custom Dial addr sorter function ready for review
    - [libp2p/js-libp2p#792](https://github.com/libp2p/js-libp2p/pull/792)
  - Started auto relay example
    - [libp2p/js-libp2p#795](https://github.com/libp2p/js-libp2p/pull/795)
  - Rendezvous integration ready for review
    - [libp2p/js-libp2p#771](https://github.com/libp2p/js-libp2p/pull/771)
  - Reviewed pubsub signing policies work
    - [libp2p/js-libp2p-interfaces#66](https://github.com/libp2p/js-libp2p-interfaces/pull/66)
- Blocked: N/A
- Next:
  - Finish auto relay example
     - Also add tests
  - Get dnsaddr resolution libp2p PR merged
  - Continue Rendezvous + Discovery API
  - Create Rendezvous example
  
  
@achingbrain
- Done:
 - Ship js-ipfs@0.51.0 [blogpost](https://blog.ipfs.io/2020-10-29-js-ipfs-0-50/)
 - Cache CIDs when preloading [ipfs/js-ipfs#3363](https://github.com/ipfs/js-ipfs/pull/3363)
 - Remove non-esoteric IPLD Formats [ipfs/js-ipfs#3360](https://github.com/ipfs/js-ipfs/pull/3360)
 - Support daemon CLI args [ipfs/js-ipfsd-ctl#557](https://github.com/ipfs/js-ipfsd-ctl/pull/557)
 - Consolidate & update docs: [ipfs/js-ipfs#3364](https://github.com/ipfs/js-ipfs/pull/3364)
- Blocked:
 - N/a
- Next:
 - Bidirectional streaming and streaming errors
