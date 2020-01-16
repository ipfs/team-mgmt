# 📦 Package Managers Weekly Sync - Dec 17, 2019

- **Lead:** @stebalien
- **Notetaker:**
- **Attendees:**
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

### Annoucements

* /ipfs -> /p2p multiaddr change has landed
* base 32 peer IDs are now supported (technically)

### Initiatives
> Update or add info on initiatives that are happening

#### IPNS (js-ipfs / go-ipfs)
@aschmahmann

- Merged!

#### Bitswap Updates
@dirkmc
- Working on porting the [go-bitswap PoC](https://github.com/ipfs/go-bitswap/pull/189) to js-bitswap

#### UnixFS v1.5
@achingbrain

- PR for js-ipfs
- TODO: high precision mtime

#### Go-IPFS Add Performance W/ Async Datastores
@aschmahmann

Issue: https://github.com/ipfs/go-ipfs/issues/6775

Waiting to be merged 🙏

#### Js-IPFS Add Performance ???
@achingbrain

Issue: ???

#### Badger By Default
@stebalien

Issue: https://github.com/ipfs/go-ipfs/issues/4279

Stalled until we're more confident with Badger 2.0

(or we may just go with badger 1.0 and ship 2.0 later... but probably not.)

#### P2: Stream Content-Based-Chunking Research/Improvements
@ribasushi

- Continuing on pushing multiple fronts towards a "v0.1" of the design-document for January. Setbacks mainly due to needing a few preliminary results, without whch the prose makes little to no sense. Update of progress at https://github.com/ipfs/specs/issues/227#issue-532891529

#### DHT Related improvements
@aschmahmann

Provider records using multihashes instead of CIDs [PR](https://github.com/libp2p/go-libp2p-kad-dht/pull/422)
  - Nearly done hopefully mergable today
  

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

- Grade OKRs

### Questions
> You have questions and need them answered. List them here.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

## Weekly Updates (for async review)

@achingbrain
- Done:
  - UnixFSv1.5 interface tests https://github.com/ipfs/interface-js-ipfs-core/pull/572
  - Detecting unfilled optional fields in protons https://github.com/ipfs/protons/pull/9
- Next:
  - Get UnixFSv1.5 merged
  - Review async/await PRs

@name
- Done:
- Blocked:
- Next:
