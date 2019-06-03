# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 May 27, 2019

- **Lead:** @alanshaw
- **Notetaker:** @dirkmc
- **Attendees:**
  - _attendee names..._
  - @jimpick
  - @vasco-santos
- **Recording:**  https://youtu.be/PrScWS9zZJA

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

- Vasco will be working on async/await stuff next
  - Alan suggests we focus on work that will not be blocked by IPFS Camp preparations
  - Volker can help out with code reviews
- Dirk is having an issue with locking and web workers in the Garbage Collection issue
  - Alan suggests checking out mortice to see if there are tests for web workers
- Volker: turns out multistream-select is a thing we use, but multistream is not (even though it has a spec), so probably we can deprecate multistream
- Vasco to add a description of a particular connection handling scenario that he would like feedback for to the interface-connection PR

### Week Update

@vasco-santos
  - Done:
    - `interface-connection` proposal ready for review
      - [libp2p/interface-connection#29](https://github.com/libp2p/interface-connection/pull/29)
      - started integrating with `js-libp2p-tcp` but would like some feedback first
    - Integration of `gossipsub` in `js-libp2p`
      - [ChainSafe/gossipsub-js#21](https://github.com/ChainSafe/gossipsub-js/pull/21)
      - [libp2p/js-libp2p#365](https://github.com/libp2p/js-libp2p/pull/365)
      - [libp2p/js-libp2p-daemon#19](https://github.com/libp2p/js-libp2p-daemon/pull/19)
      - [libp2p/interop#17](https://github.com/libp2p/interop/pull/17)
  - Blocked:
    - Please review [libp2p/interface-connection#29](https://github.com/libp2p/interface-connection/pull/29)
  - Next:
    - get `interface-connection` to the finish line
    - more async iterators work
    - get gossipsub to the finish line

@dirkmc (Not attending - public holiday in NY 🐀🍻🌴)
 - Done:
   - Finished writing tests for Garbage Collection [js-ipfs#2022](https://github.com/ipfs/js-ipfs/pull/2022)
   - Created issue to add locking for pinning: https://github.com/ipfs/js-ipfs/issues/2103
 - Blocked:
 - Next:
   - Get browser tests for GC working with web workers

@alanshaw
 - Done:
     - Released js-ipfs 0.36.0, 0.36.1, 0.36.2 😁
         - https://blog.ipfs.io/89-js-ipfs-0-36/
     - IPFS Camp core course A outline
 - Blocked:
     - `null`
 - Next:
     - Work on IPFS Camp core course A
     - Work on Deep Dives
         - Ask: what are the open problems in IPFS/libp2p/ipld that we should deep dive on? 🐋
         - https://github.com/protocol/pl-ipfs-team/issues/45

@jimpick
 - Done:
   - work on IPFS Camp Course C (with lidel and Hugo)
   - transferred a few more brainstorming ideas to https://github.com/ipfs/integration-mini-projects/issues
   - debugging problems with peer-base ipfs-cluster
   - discovered issue with mvreg CRDT sync in peer-base
     - https://github.com/peer-base/peer-base/issues/287
     - seems to be related to serialization/deserialization
 - Blocked:
   - peer-base ipfs-cluster is broken
 - Next:
   - more IPFS Camp
   - fix pinner
   - fix peer-base
   - more PeerPad front-end ... get ready for launch
   - learn more about js-ipfs content discovery
     - David Dias pinged me to help with https://github.com/ipfs/js-ipfs/issues/2093

@vmx
 - Done:
   - js-ipld-dag-pb API discussions (trimming the API down a bit)
   - Went over multiformat specs in hope to cleanup things
 - Blocked:
   - Nope
 - Next:
   - Back to work on IPLD things: [STAC](https://stacspec.org/) on IPLD (geo stuff)
 
### Questions

- @dirkmc spent a lot of time increasing timeouts and re-running CI. Would it be very expensive to get CI machines that run the unit tests as fast as a laptop does?
  - Ask Hugo if there is a way to make Travis run tests faster so the timing is comparable to a developer's local machine

### Other notes

- @vmx will be out on Thu 2019-05-30
