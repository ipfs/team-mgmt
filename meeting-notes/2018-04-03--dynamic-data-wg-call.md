# Dynamic Data and Capabilities WG — April 03, 2018

- **Lead:** Pedro Teixeira (@pgte)
- **Notetaker:** David Dias (@diasdavid)
- **Attendees:**
  - Pedro Teixeira (@pgte)
  - @vyzo
  - Brendan O'Brien (@b5)
  - David Dias (@diasdavid)
  - Sri Harsha Seethalam (@harrshasri)
- [**Zoom.us meeting URL**](https://protocol.zoom.us/j/586782711)
- **Recording:** _add link to recording once it's online_

## Agenda

- Ask everyone to put their name into the list of attendees
- Ask for a volunteer to take notes
- Everyone can add items to this agenda for things they would like to discuss
- Innauguration
  - [Goals of the Working Group](https://github.com/ipfs/dynamic-data-and-capabilities#dynamic-data-and-capabilities-in-ipfs-working-group)
  - [Repo](https://github.com/ipfs/dynamic-data-and-capabilities)
  - [Issues](https://github.com/ipfs/dynamic-data-and-capabilities/issues)
  - [IRC Channel](https://webchat.freenode.net/?channels=ipfs-dynamic-data)
  - [Biweekly meeting](https://github.com/ipfs/dynamic-data-and-capabilities/issues/16)
  - [Current endeavours](https://github.com/ipfs/dynamic-data-and-capabilities#current-endeavours)
  - More resources: [CRDT research](https://github.com/ipfs/research-CRDT)
- Questions or suggestions?
- Round of intros and updates
  - Introduce yourself and your interest in this subject
  - What have you accomplished since the last meeting?
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
  - What is the next important thing you should focus on?
- peer-dapps (@diasdavid)


## Notes

The main focus of the Dynamic Data WG is to create the necessary building blocks to create fully Distributed Apps, from Security, Authentication, Synchronization and more.

Pedro has created a ton of resources for newcomers to the working group to get started on Dynamic Data on IPFS space (e.g learn about CRDTs). Check out https://github.com/ipfs/dynamic-data-and-capabilities

In addition, we have now a list of open problems in the CRDT space. You can learn about those at https://github.com/ipfs/dynamic-data-and-capabilities/issues

**Round of Intros**

@pgte
  - DD WG lead
  - Created all the modules that enabled apps like PeerPad to happen
  - 20 years of experience in Software Engineering and lots of experience in Distributed Systems too

@lidel
  - very cool person that paused his Web Browsers sync up to check out the Dynamic Data WG first call. Nicely done @lidel 👌🏽
  - has been in the IPFS community since 2015
  - develops the IPFS Browser extension
  
@b5
  - Founder of QRI, big users of IPFS
  - Has a lot of questions when it comes to Access Control
  
@vyzo
  - libp2p PubSub and IPNS dev
  - Interested in understanding how CAPS will work on multi-user setting
  
@olizilla
  - Web Dev. Developed the first iteration of PeerPad (Thanks!<3)
  - Focused on building GUI and Browser integrations on the Web Browsers WG

@diasdavid
  - It's meeee!
  
@alanshaw
  - Part of the Web Browsers Working Group
  - Part of the PeerPad original team (Thank you too! <3)
  
@sriha
  - Building Github for Shopping as a Chrome extension for shopping cart

### 2 Week Updates:

#### @pgte
 - Done:
   - Working on peer-crdt and peer-crdt-ipfs to solve [issue 1](https://github.com/ipfs/dynamic-data-and-capabilities/issues/1)
 - In progress:
   - CRDT over IPLD performance ([issue](https://github.com/ipfs/dynamic-data-and-capabilities/issues/3))
     - finished [ipfs-bitswap per peer stats](https://github.com/ipfs/js-ipfs-bitswap/issues/165), [PR here](https://github.com/ipfs/js-ipfs-bitswap/pull/166)
     - working on [libp2p-connection-manager](https://github.com/libp2p/js-libp2p-connection-manager)
 - Blocked:
   - Setting up the WG waffleboard (permission issue, I guess)
 - Next:
   - finish first version of [libp2p-connection-manager](https://github.com/libp2p/js-libp2p-connection-manager)


### Questions

- Q: Some folks had issues with using some of the modules, can we get updates?
A: Yes, a new release happened today (@pgte was out for a week, sorry about the delay!)

- Q: Who is responsible for making releases in the dapps building blocks lands?
A: It is @pgte for now

- Q: How to autenticate peers that enter the PubSub broadcast tree?
A: We use a side chanel (the url #) to exchange a write/read key to other peers. Every peer uses those keys to make sure they only connect to the peers that belong to that topic/room

- Q: Where should we track research around CRDTs
A: Two main places right now:
- https://github.com/ipfs/dynamic-data-and-capabilities/issues
- https://github.com/ipfs/research-crdt/issues

Nevertheless, Authentication and Privacy is something that is not tackled by CRDTs by themselves, it requires to mix some more ingredients. 

- Q: What primitives do we need to build awesome Browser apps (from @diasdavid to the Web Browsers folks)
A: Authentication & Number f Peers in PUBSUB Room


### Other notes

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->

