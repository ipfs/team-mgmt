# 📦 Package Managers Weekly Sync - Dec 03, 2019

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

### Initiatives
> Update or add info on initiatives that are happening

#### P3: IPNS (js-ipfs / go-ipfs)
@aschmahmann
- [go-libp2p-pubsub-router#37](https://github.com/libp2p/go-libp2p-pubsub-router/pull/37) ready for another review round
- Need to bubble into go-ipfs when merged
- Testground testplan
   - Could really benefit from the network shaping work underway

#### P1: Bitswap Updates
@dirkmc

- aiming to get this merged this week
- starting draft blog post for collab communication

#### P0: UnixFS v1.5
@achingbrain

PRs open:
  - https://github.com/ipfs/js-ipfs-http-client/pull/1186
  - https://github.com/ipfs/js-ipfs-multipart/pull/34
  - https://github.com/ipfs/js-ipfs/pull/2621
  - https://github.com/ipfs/js-ipfs-utils/pull/14
  - https://github.com/ipfs/js-ipfs-mfs/pull/63

#### P0: Mount
@djdv
- deferred until after 0.5.0?

#### P2: IPFS Add Performance
@aschmahmann

PRs to make datastores support asynchronous writes
  - https://github.com/ipfs/go-datastore/pull/140
     - [go-ds-measure](https://github.com/ipfs/go-ds-measure/pull/23)
     - [go-ds-s3](https://github.com/ipfs/go-ds-s3/pull/46)
     - [go-ds-redis](https://github.com/ipfs/go-ds-redis/pull/6)
     - [go-ds-leveldb](https://github.com/ipfs/go-ds-leveldb/pull/36)
     - [go-ds-badger](https://github.com/ipfs/go-ds-badger/pull/77)
     - [go-ds-flatfs](https://github.com/ipfs/go-ds-flatfs/pull/60)
  - They're all done and are either merged or will be today
  
Integrate changes into go-ipfs and modify a few underlying libraries to use them

@achingbrain

Parallelized adding files in js-ipfs in 2 places
  - file and chunking (file import and block write)
  - https://github.com/ipfs/js-ipfs-unixfs-importer/pull/41
  
PRs open:
  - https://github.com/ipfs/js-ipfs-http-client/pull/1187
  - https://github.com/ipfs/js-ipfs/pull/2637

#### P1: IPFS Datastore Performance
@stebalien

- Updated https://github.com/ipfs/go-ipfs/issues/4279
- Waiting on async writes
- Still need a converter tool to be feature complete (but not to enable by default)
- Need to upgrade to badger v2

#### P2: Stream Content-Based-Chunking Research/Improvements
@ribasushi
- First week, identifying subject-matter-experts within "customer groups", setting up meetings and work-environments


### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

### Questions
> You have questions and need them answered. List them here.

What's blocking 0.5.0 in terms of testground: https://github.com/ipfs/testground/issues/196

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

## Weekly Updates (for async review)

@achingbrain
- Done:
  - parallel file imports/block writing in ipfs-unixfs-importer bubbled up to js-ipfs
    - https://github.com/ipfs/js-ipfs/pull/2637
    - https://github.com/ipfs/js-ipfs-http-client/pull/1187
  - UnixFSv1.5 metadata support
    - https://github.com/ipfs/js-ipfs-http-client/pull/1186
    - https://github.com/ipfs/js-ipfs-multipart/pull/34
- Blocked:
  - n/a
- Next:
  - Land UnixFSv1.5 metadata
  - Improve pinning performance by storing pins in datastore (makes add faster)

@Steven
- Done: 
- Blocked:
- Next:

@ribasushi
- Done: N/A
- Blocked: N/A
- Next:
  - Identify more stakeholders interested in CDC
  - Flesh out first draft of research RFC

@name
- Done:
- Blocked:
- Next:
