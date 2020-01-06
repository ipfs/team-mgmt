# 📦 Package Managers Weekly Sync - Oct 29, 2019

- **Lead:** @stebalien
- **Notetaker:**
- **Attendees:**
  - 
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

- Need to go through reviews with @stebalien for [go-pubsub#184](https://github.com/libp2p/go-libp2p-pubsub/pull/184) and [go-discovery#26](https://github.com/libp2p/go-libp2p-discovery/pull/26)

- Finally progress on implementing the parts of [go-pubsub#171](https://github.com/libp2p/go-libp2p-pubsub/pull/171) that were initially deemed unimportant by libp2p.
   - [go-pubsub#218](https://github.com/libp2p/go-libp2p-pubsub/pull/218)
   - Some movement hopefully happening related to [go-pubsub#199](https://github.com/libp2p/go-libp2p-pubsub/pull/199)

#### Bitswap Updates
@dirkmc
- Created a [testplan on testground](https://github.com/ipfs/testground/issues/79)
- Attending testground meeting today to see how I can contribute
- merged server changes to go-ipfs master, now plan to deploy master on ipfs cluster

#### UnixFS v1.5
@achingbrain
- Comments on https://github.com/ipfs/specs/pull/223
  - ask @stebalien -- look at the latest comments

#### Mount
@djdv

- Demo of basic write support: https://www.youtube.com/watch?v=OX0vM0Ay9Z0

#### IPFS Add Performance
@aschmahmann

- Lots of testing on ipfs add performance https://github.com/ipfs/go-ipfs/issues/6523
  - Potential Badger issue (is linux too slow or windows too fast with sync writes?) https://github.com/dgraph-io/badger/issues/1084
    - If you turn off sync writes in your IPFS config you'll be fast on Linux+ext4. Either way you're fast on Windows+NTFS
  - Need to decide next plan of action

#### IPFS Datastore Performance
@stebalien

- @adin - badger is faster on NTFS than EXT4 ??
- @steb - badger-ds now periodically GCs (may have been in a previous update)
  - GC still doesn't clean up much disk space :(.

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

### Questions
> You have questions and need them answered. List them here.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.
- Reaching out to package manager groups
  - Planning to send guix the metadata spec for unixfsv1.5 and ask if they'll have bandwidth to work with us on utilizing it once we have it implemented
  - Planning to send OpenSuse the mount write demo video and see if that's interesting to them

## Weekly Updates (for async review)

@achingbrain
- Done:
  - js-IPFS@0.39.0 release
- Blocked:
- Next:
  - UnixFS v1.5
  - HTTP API error handling

@name
- Done:
- Blocked:
- Next:
