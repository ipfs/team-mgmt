# 📦 Package Managers Weekly Sync - Oct 8, 2019

- **Lead:** @stebalien
- **Notetaker:**
   - @djdv
- **Attendees:**
  - @dirkmc
  - @aschmahmann
  - @djdv
  - @achingbrain

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

Adin intends to work on misc thing quarter, until he can work on DHT (blocked on testground)
- IPFS add perf
- config: controlable defaults; sane "set to true"
- make it easier to spin up ipfs instances
- go-ipfs pinning fix

### Initiatives
> Update or add info on initiatives that are happening

#### IPNS (js-ipfs / go-ipfs)
@aschmahmann

- A few pubsub things getting resolved (mostly implementing efficient caching of peers we've recently tried discovery)

Needs considerations around which and when to drop peers from the cache.
Some kind of state to manage concurrent requests

#### Bitswap Updates
@dirkmc
In testing with collaborators, things seem to be improving well. Some fixes and cleanup left.
Need to consider next steps during this week.

Adin: Does it make sense to share data/metrics between bitswap and other libp2p components? Such as get/wantlists, etc.

-- seems like it would take effort/work to coordinate formats. But do-able

#### UnixFS v1.5
@achingbrain

Waiting on Steb's spec.
(storing the metadata in directories is the likely approach, but there are multiple possible proposals)

What are we storing?
Likely the full mode bits
And some timestamp, likely mtime (not ctime)

#### Mount
@djdv

Generalized traversal logic. Improved reference construction/derivatives.
Write is being worked on still.

#### IPFS Add Performance
We may be able to make better use of parallelizing work.

This is a long term effort but has potential to be incremental, and may be required to be incremental.
Fundemental changes to ordering or operations, etc. would make larger impacts but are higher friction changes.

Smaller changes are still possible over time though.

@dirkmc to send add performance PoC branch to @aschmahmann

#### IPFS Datastore Performance


#### Communication
> Blog posts, collaborations, etc.

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

