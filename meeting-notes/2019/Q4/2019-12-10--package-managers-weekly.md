# 📦 Package Managers Weekly Sync - Dec 10, 2019

- **Lead:** @stebalien
- **Notetaker:**
- **Attendees:**
  - @dirkmc
  - @achingbrain
  - @aschmahmann
  - @ribasushi
  - @stebalien
- **Recording:** https://www.youtube.com/watch?v=mz4a3VTIXD4

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

- landed https://github.com/libp2p/go-libp2p-pubsub-router/pull/37
- https://github.com/ipfs/go-ipfs/pull/6758/files needs review
   - will rebase on https://github.com/ipfs/go-ipfs/pull/6791/files after merge

#### Bitswap Updates
@dirkmc
- [Proposal for extending the GetBlocks() API](https://github.com/ipfs/go-bitswap/issues/228) to take a channel of CIDs (instead of an array)
- Looking at implementing proof-of-concept changes in js-bitswap
  - Do server side changes first
  - Then look at client side

#### UnixFS v1.5
@achingbrain

- Adding interface tests, then ready for merge!  I mean review.  Then merge!


#### Go-IPFS Add Performance W/ Async Datastores
@aschmahmann

Issue: https://github.com/ipfs/go-ipfs/issues/6775
- Review needed on: https://github.com/ipfs/go-ipfs/pull/6785

#### Js-IPFS Add Performance ???
@achingbrain

Issue: ???

* Being merged right now.

#### Badger By Default
@stebalien

Issue: https://github.com/ipfs/go-ipfs/issues/4279

- Blocked on badger 2.0
  - Don't want two migrations.
  - Don't want to get stuck on an old, unsupported version.
  - Badger 2 has some scary looking open issues.
- Look into supporting both badger 1 and 2.

#### P2: Stream Content-Based-Chunking Research/Improvements
@ribasushi
- Currently in final stages collating a forest of post-its into a coherent writeup
- In parallel downloading the tentative "mid-size corpus" locally for early experiments

#### Fix the DHT
@aschmahmann

- @raulk asked me to help look at https://github.com/libp2p/go-libp2p-kad-dht/pull/383
- looking into grafting some combination of https://github.com/libp2p/go-libp2p-kad-dht/pull/291 and https://github.com/libp2p/go-libp2p-kad-dht/pull/204 onto the stabilize branch 
- if it's not too bad do a multihash fix on the way https://github.com/libp2p/go-libp2p/issues/755#issuecomment-563935788


### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

- ~Could someo~e create a zoom meeting room for this meeting?~
- ~Even better: Is someone interested in _running_ this meeting?~

### Questions
> You have questions and need them answered. List them here.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

## Weekly Updates (for async review)

@achingbrain
- Done:
 - Fixed up interface tests on js-IPFS
 - Fixed bug that broke our example tests https://github.com/jkroso/parse-duration/pull/11
- Blocked:
 - n/a
- Next:
 - Finish interface tests for UnixFSv1.5 metadata
 - Review ipfsd-ctl and async/await refactor PRs
 - Review protoschool PR
 - Pick up pinning improvements
 - Refactor CLI tests to not require a running node
 
@ribasushi
- Continued to look at preexisting body of writing on the subject ( SO MUCH! )
- Spoke to stakeholders from IPLD, UNIXFS1.5, the package-management group, and a few non-PL staff external project leads
 
@name
- Done:
- Blocked:
- Next:
