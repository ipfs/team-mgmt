# 🚀 IPFS Core Implementations Weekly Sync 🛰 November 9 2020

- **Lead:** @achingbrain
- **Notetaker:** @vasco-santos
- **Attendees:**
  - @vasco-santos
  - @gozala
  - @jacobheun
  - @petar
  - @gammazero
  - @lidel
  - @aschmahmann
  - @hugomrdias
  
- **Recording:**
  - https://youtu.be/ZvWjAbnzOO8

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

- js-libp2p 0.29.3
  - Shipped `dnsaddr` resolution
- go-libp2p 0.12
  - upcoming release
- js-ipfs 0.52
  - released with newest js-libp2p
  - removed not common IPLD codecs from the `ipfs-core`
    - can be added via config
- go-ipfs 0.8 RC  
  - on track, tests/CI last efforts
  - Pinning much faster!

#### Pinning Services
@jacobheun / @aschmahmann / @lidel

- Testing is wrapping up, prepping for the RC
- Repo migration to support local pinning in datastore for speed improvements
- Big PR for webui update, probably will land in next RC
- Want to do an initial RC sooner to get large pinning users to verify things are looking good
- maybe test with our cluster

#### Secio Removal
@jacobheun / @aschmahmann

- Still need to flash the bootstrap servers

#### [js improves discoverability and connectivity](https://github.com/libp2p/js-libp2p/issues/703)
@vasco-santos

- Auto relay example ready for review
  - Also with Node.js setup for testing examples
- Custom announce/sort addresses
  - Started [custom transport filter addresses in websockets](https://github.com/libp2p/js-libp2p-websockets/pull/116)
    - By default: Only dial dns+wss addresses in the browser, dns+wss/ws in Node
- This week:
  - improve our ability to advertise ourselves
    - [find and connect to closest peers](https://github.com/libp2p/js-libp2p/issues/704) over time
  - production guides for relay + rendezvous

#### Bi-directional streaming and streaming errors in the browser
@achingbrain

- WIP: https://github.com/ipfs/js-ipfs/pull/3371
  - Base prototype running
    - Performance tuning to do

### Other Initiatives
> This is the backlog of initiatives that are either on-hold or low-priority.

#### [Improving webui file add](https://github.com/ipfs/js-ipfs/issues/3029)
@gozala

- Blocked on reviews
  - needs ipfs-utils PR review

#### [Typescript integration for IPFS](https://github.com/ipfs/js-ipfs/issues/2945)

- Some [changes are in the review](https://github.com/ipfs/js-ipfs/pull/3365) that add more types and reduce some type magic.
- Had been looking into TS bug which causes [type parameters to be omitted](https://github.com/microsoft/TypeScript/issues/41258)

#### [Use of shared node from ServiceWorker]

- https://github.com/ipfs/js-ipfs/pull/3374
  - communitity interested

#### Badger 2 support
@gammazero

- Blocked on the Badger team, just checked today, no movement yet


#### dnsaddr resolving in JS
@vasco-santos

Done
- Merged and released support in libp2p
- bootstrap dnaddrs integrated in `js-ipfs`


#### NAT Traversal
@aarshkshah1992 / @jacobheun

- Main issue created at https://github.com/libp2p/go-libp2p/issues/1013
- You can see the list of issues associated with this at https://github.com/libp2p/go-libp2p/issues?q=is%3Aissue+is%3Aopen+label%3Anat-traversal
- Focus is currently on gathering metrics on our current connectivity rates on the network
- One we have baseline metrics we will start on QUIC hole punching first


#### UnixFSv1.5 in go-IPFS
> https://github.com/ipfs/go-ipfs/issues/6920


#### go-ipfs GC Improvements
@gammazero

https://github.com/ipfs/go-ipfs/issues/7752
- WIP proposal

### Design Review Proposals
> You want to propose something for design reviews

- Routing hints
  - which subsystem to look for?
  - Probably for next week

### Blockers/Asks

### Questions

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

@vasco-santos
- Done:
  - dnsaddr resolve in libp2p merged and released
     - [libp2p/js-libp2p#782](https://github.com/libp2p/js-libp2p/pull/782)
     - updated `js-ipfs` to use the new dnsaddr bootstrappers
       - [ipfs/js-ipfs#3370](https://github.com/ipfs/js-ipfs/pull/3370)
     - [vasco-santos/dns-over-http-resolver#4](https://github.com/vasco-santos/dns-over-http-resolver/pull/4)
  - Auto relay example ready
    - Included testing setup for Node.js examples
    - [libp2p/js-libp2p#795](https://github.com/libp2p/js-libp2p/pull/795)
  - Started working on custom transport filter addresses for websockets
    - [libp2p/js-libp2p-websockets#116](https://github.com/libp2p/js-libp2p-websockets/pull/116)
- Blocked: N/A
- Next:
  - Custom Transport filter addresses for websockets integration
  - libp2p - find closest peers over time
  - libp2p Production guides
  - Continue Rendezvous + Discovery API
  - Create Rendezvous example

@hugomrdias
- Next:
  - API docs from types
  - Pinning services in JS

@achingbrain
- Done:
  - Streaming errors/RPC: https://github.com/ipfs/js-ipfs/pull/3371
  - Pass file name to onProgress handler: https://github.com/ipfs/js-ipfs/pull/3372
  - Consolidate API docs https://github.com/ipfs/js-ipfs/pull/3364
  - Release js-ipfs@0.52.0
- Blocked:
  - N/a
- Next:
  - More streaming errors/RPC
  - Unblock HTTP progress handlers
