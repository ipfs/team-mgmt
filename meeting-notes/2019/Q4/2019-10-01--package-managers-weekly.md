# 📦 Package Managers Weekly Sync - Oct 1, 2019

- **Lead:** @stebalien
- **Notetaker:** @momack2
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

#### IPNS (js-ipfs / go-ipfs)
@aschmahmann

- OOO - no update

#### Bitswap Updates
@dirkmc

- Lots of debugging.
  - Issue with the benchmarking tool.
  - https://github.com/libp2p/go-libp2p-swarm/issues/79
  - Lots of lock contention in the engine.

#### UnixFS v1.5
@achingbrain

- @stebalien - needs to write the spec.
- @momack2 - how will this coexist with async work?
  - @achingbrain -> completed an epic quest to rewrite js-ipfs
  - Blocked on spec only.

#### Mount
@djdv

- Read-only implementation is alright.
 - Need to address feedback
- Write implementation functions but needs some fixes.

#### IPFS Add Performance

- TODO: start communicating with the package managers - @momack2

#### IPFS Datastore Performance
@stebalien

- Badger fix PR: https://github.com/ipfs/go-ds-badger/pull/71

#### Communication
> Blog posts, collaborations, etc.

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

- Finalize OKRs
- Steven needs a review on a datastore PR: https://github.com/ipfs/go-ds-badger/pull/71

### Questions
> You have questions and need them answered. List them here.

- This feels redundant with the Core Implementations meeting?
  - Useful to think about things from a package manager's perspective.
  - More discussion in this group.


### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

## Weekly Updates (for async review)

@name
- Done:
- Blocked:
- Next:

@dirkmc
- Done:
  - Worked around libp2p connection management bug in p2plab
- Blocked:
- Next:
  - Fixing lock contention in Engine in proof of concept

@achingbrain
- Done:
  - async/await refactor for js-IPFS
  - released js-IPFS 0.38.0
- Blocked:
  - N/a
- Next:
  - Fix up profiles
  - Merge core module codebases
  - Start UnixFSv1.5



@momack2
- Done:
  - OKRs!
- Blocked:
- Next:
  - Ensure we all have permissions to record the meeting
  - PR the service diagram and explanation to the package managers repo
  - Reach out to Pierre and Bernard re utilizing some of this work


