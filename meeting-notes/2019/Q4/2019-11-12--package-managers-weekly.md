# 📦 Package Managers Weekly Sync - Nov 12, 2019

- **Lead:** @stebalien
- **Notetaker:**
- **Attendees:**
  - @adinshmahmann
  - @dirkmc
  - @mikeal
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

## Notes

### Initiatives
> Update or add info on initiatives that are happening

#### IPNS (js-ipfs / go-ipfs)
@aschmahmann

IPNS-over-PubSub
  - [go-libp2p-pubsub-router#37](https://github.com/libp2p/go-libp2p-pubsub-router/pull/37) ready for review
    - Removes internal bootstrapping in favor of pubsub discovery
    - Breaking API changes (shouldn't effect anything other than IPNS, API breakage has been advertised on discuss.libp2p.io for months)
  - [go-ipfs#6758](https://github.com/ipfs/go-ipfs/pull/6758) on going
    - Uses the new router and updated pubsub in IPFS
    - Having issues figuring out sharness tests

Testground
  - Getting started with IPNS tests, need backup from the testground team

#### Bitswap Updates
@dirkmc
- Implemented [testground test plan](https://github.com/ipfs/testground/pull/82) for multiple seed / leech scenario

#### UnixFS v1.5
@achingbrain

- Still discussing the spec.

#### Mount
@djdv

(No update - Prioritising home repairs)
(Will likely be discussing the mount implementation and 9P protocol at the package manager knowledge sharing meeting this Thursday)

#### IPFS Add Performance
@aschmahmann

Seems like there's consensus on supporting asynchronous datastores [go-datastore#137](https://github.com/ipfs/go-datastore/issues/137)

Plan is people will change their config files to use async writes in Badger if they really need performace.

Assembling list of places we use the datastore so we know where we actually need to call the `Sync` function we're proposing.
  - https://github.com/ipfs/go-datastore/issues/139


#### IPFS Datastore Performance
@stebalien

- Plan is to switch to badger.

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

### Questions
> You have questions and need them answered. List them here.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

## Weekly Updates (for async review)

@name
- Done:
- Blocked:
- Next:
