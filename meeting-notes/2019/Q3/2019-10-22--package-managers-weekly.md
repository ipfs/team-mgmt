# 📦 Package Managers Weekly Sync - Oct 22, 2019

- **Lead:** @stebalien
- **Notetaker:**
- **Attendees:**
  - @momack2
  - @djdv
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
- OOO

#### Bitswap Updates
@dirkmc

- Can we prioritize exploring a fix for https://github.com/ipfs/go-bitswap/issues/187 (Parallelize Reads) this week?
  - current work *does* parallelize reads
  - Can we try testing the new branch and see whether it can pull down from cluster faster?
  - Would need to deploy it on *cluster* actually - want to identify that this is an issue and that work in progress fixes that issue
  - @dirkmc will prioritize doing this on master in the next couple of days

#### UnixFS v1.5
@achingbrain
 - Waiting on writeup of metadata-in-directory proposal -> @stebalien needs to do this <-

#### Mount
@djdv
(copied from core impl notes)
 - Iterating on PR feedback - add experimental daemon plugin for 9P2000.L support (https://github.com/ipfs/go-ipfs/pull/6612)
 - trying to iron out ambiguities with plugins, config, etc. (we can do some things multiple ways, how SHOULD we do them? / what can users expect)
 - working on upstream deps (portability concerns in 9P lib, Golang's syscall/unix pkg)
 - writing and debugging tests
 - backload upstream changes instead of frontloading it
 - WIP of the writable version of it, some foundation stuff changed, but IPNS core API producing an error (may need Adin's help on that)

#### IPFS Add Performance
@aschmahmann
- OOO

#### IPFS Datastore Performance
@stebalien

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!
- @adin - help @djdv out with the IPNS issues he's experiencing
- @achingbrain --> @steb - write the unixfsv1.5 spec pls

### Questions
> You have questions and need them answered. List them here.
- momack2 - should I reach out to opensuse / guix
  - unixfsv1.5 - mode bits and modification times as metadata
  - once write functions, running a service on it should be the same as doing it on any other file system
  - it's a go! will aim to send tomorrow

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

## Weekly Updates (for async review)

@achingbrain
- Done: 
  - pull-stream-to-stream starts in paused mode [pull-stream/pull-stream-to-stream#7](https://github.com/pull-stream/pull-stream-to-stream/pull/7)
  - pull-ndjson serializes empty streams correctly [daviddias/pull-ndjson#3](https://github.com/daviddias/pull-ndjson/pull/3)
  - updated release process docs with automated tasks [ipfs/js-ipfs#2536](https://github.com/ipfs/js-ipfs/pull/2536)
  - added PM meeting notes to mgmt repo [ipfs/team-mgmt#1047](https://github.com/ipfs/team-mgmt/pull/1047)
  - expose preload argument in http client [ipfs/js-ipfs-http-client#1129](https://github.com/ipfs/js-ipfs-http-client/pull/1129)
  - enabled skipped base64 encoding test [ipfs/js-ipfs#2543](https://github.com/ipfs/js-ipfs/pull/2543)
  - handle trailing slashes on `ipfs ls` [ipfs/js-ipfs#2546](https://github.com/ipfs/js-ipfs/pull/2546)
  - update block.rm interface docs [ipfs/interface-js-ipfs-core#544](https://github.com/ipfs/interface-js-ipfs-core/pull/544)
  - allow specifying timeouts to fetch [ipfs/js-ipfs-http-client#1130](https://github.com/ipfs/js-ipfs-http-client/pull/1130)
  - merge-options can now ignore undefined values [schnittstabil/merge-options#14](https://github.com/schnittstabil/merge-options/pull/14)
- Blocked:
  - N/a
- Next:
  - Help @pedromiguelss get [ipfs/interop#86](https://github.com/ipfs/interop/pull/86) across the line
  - pick up streaming error HTTP API
  - Out Thursday, Friday & Monday

@name
- Done:
- Blocked:
- Next:
