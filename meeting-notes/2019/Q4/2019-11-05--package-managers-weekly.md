# 📦 Package Managers Weekly Sync

## November 5, 2019

- **Lead:** @achingbrain
- **Notetaker:** @momack2
- **Attendees:**
   - @aschmahmann
   - @momack2
   - @dirkmc

- **Recording:**

## Agenda

- Ensure a notetaker exists!
- Ask everyone to put their name into the list of attendees
- Initiatives
- Blockers (from the async status update)
- General questions. Could be things like:
  - I'm stuck with something, I don't know who to ask. Who knows who to ask?
  - Who can help me with xyz?
- Plan for this week
  - Select issues to work on
- Review remaining parking lot topics if there is time left

## Initiatives


#### IPNS (js-ipfs / go-ipfs)
@aschmahmann
- IPNS-over-PubSub
  - https://github.com/libp2p/go-libp2p-pubsub/pull/184 landed 🥳
  - go-libp2p-pubsub v0.2.1 released
  - in the process of being integrated into go-libp2p-pubsub-router and then IPFS
  - includes resolving [go-libp2p-pubsub-router#28](https://github.com/libp2p/go-libp2p-pubsub-router/issues/28)


#### Bitswap Updates
@dirkmc
- Started code reviews
  - Close to merging [go-peertaskqueue PR](https://github.com/ipfs/go-peertaskqueue/pull/8)
- Working on [testground plans](https://github.com/ipfs/testground/issues/79)
- Working with Marcus on testing ipget with new bitswap changes

#### UnixFS v1.5
@achingbrain
- Still discussing v1.5 changes on https://github.com/ipfs/specs/pull/223
- Needs another design review because revisiting concerns from previous review - Steven will schedule a meeting next Monday

#### Mount
@djdv

- With the exception of this week, there's been steady progress on this effort. And I'm going to continue working on it, however I have to do so at a lower priority for now.
- Planning on addressing the condensed list of feedback within the various related PRs
  - Read portion covers bulk of the work (file vs system) - next step is to handle metadata and serialize in right ways
  - Read is working but slightly inefficient
  - Can read data from IPFS and IPNS
  - Writing, if it works in MFS it should work in theory on this system - but the tests don't validate that yet
  - Concurrency with reading and writing (reading while writing, etc) likely won't work well
  - Lots of edge cases - pushing MFS in a new way
  - Plan is to get the read side merged ASAP
  - Need a client that speaks 9P2000.L for Windows -- there is a native one that MSFT maintains but it isn't open right now
  Rel: https://devblogs.microsoft.com/commandline/whats-new-for-wsl-in-windows-10-version-1903/  
  https://github.com/Biswa96/pnconnect
  


#### IPFS Add Performance
@aschmahmann
Figure out how to do asynchronous database writes for IPFS Add
Three options:
  - Extend the datastore interface to allow asynchronous writes/flushes [go-datastore#137](https://github.com/ipfs/go-datastore/issues/137)
  - Write/improve our asynchronous writing layer on top of a synchronous database (e.g. the BufferedDAG)
  - Write an asynchronous datastore on top of a synchronous datastore with periodic flushing

- Async datastore
   - least invasive win - go with the datastore option
   - if you turn on async, there are 0 synchronous gaurantees
   - If we create our own explicit sync points, then we'll be able to manage 
     - specifically a call that doesn't fail, but doesn't work, related to flushing directories
     - go doesn't pass the writethrough flag into windows
   - creating sync touchpoints intentionally will also make windows behave more accurately (since it isn't doing sync writes right now)
   - Have received good feedback on the datastore issue, will investigate how much work that will take
   - @raulk mentioned that we want some of our datastores to be fully synchronous. Need to understand which ones and if it'll be worthwhile to have two databases one sync and one async.
     - we could have literally 2 datastores for things that we sync on a lot, and one for everything else
       - aka one for blocks and one for pins
     - want to eval what we need before deciding what we want to do about it

#### IPFS Datastore Performance
@stebalien
- focused on testground this week
- sync thing in badger needs to be resolved, but after we fix that we can throw the switch
- there will be some complaints about memory but a win

#### 0.5.0
@stebalien
- DHT fix
- bitswap changes
- IPNS changes
- Not switching to TLS by default, found a flaw while we upgrade
- TBD whether we enable quic by default, making a protocol-breaking change and massive upgrade of quic code
- testplan for DHT mode switching - can just assign things private IP addresses for tests

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

### Questions
> You have questions and need them answered. List them here.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

### Notes

