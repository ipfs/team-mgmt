# 💫Golang Core Dev Team Weekly Sync 🙌🏽 2019-04-29

Please note. There has been a  [meeting format change](https://github.com/ipfs/team-mgmt/issues/827#issuecomment-452157617) intended to make our brief sync time more valuable and more easily understood by new/occasional attendees.

**Meeting Lead:** @eingenito

**Attendees:**
  - _attendee names..._
  - @hannahhoward
  - @jimpick
  - @aschmahmann
  - @alanshaw
  - @stebalien
  - @momack2
  - @magik6k
  - @michaelavila
  - @raulk
  - @alanshaw

**Recording:** [This recording is private to the PL organization](https://drive.google.com/drive/u/2/folders/1D1_o85tnN8Mva87CNGHBuQpILAIWsiri)

## Agenda
- Review Announcements for the whole team
- Review blockers and needs from other team members (not general updates)
  - Are you blocked waiting for input?
  - PRs for review? Remember the [project board](https://github.com/orgs/ipfs/projects/1)
- Review progress on major initiatives
  - Find or create the section for the IPFS initiative(s) you worked on.
  - Summarize the initiative briefly in notes to give a little context.
  - Summarize your progress
  - Summarize your next steps.
- Review other Questions/Announcements/Notes

## Announcements

## Blockers or Needs 

We have an important issue to address:
https://github.com/ipfs/go-ipfs/issues/6252
  - Trivially could just stop caching the root node
  - Previous attempt at reworking add logic: https://github.com/ipfs/go-ipfs/pull/6121
  - Correct solution is probably to stop using MFS for this.

Too many open files: https://github.com/ipfs/go-ipfs/issues/6237

@eingenito to take a look at both and enlist help as needed.

## Current IPFS Initiatives
#### Datastore
Summary: We are investigating various IPFS datastore options with the goal of replacing the current default datastore with a faster, more scalable one: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4279)

@Magik6k
  - Fixes to badger around deleting stuff are happening - https://github.com/dgraph-io/badger/pull/778

#### Bitswap
Summary: We are improving the performance of transferring data between IPFS instances: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5723)

@hannahhoward
- nothin

@stebalien
- review please: https://github.com/ipfs/go-bitswap/pull/111
- review please: https://github.com/ipfs/go-bitswap/pull/78
- https://github.com/ipfs/go-bitswap/issues/112
- https://github.com/ipfs/go-bitswap/issues/114

#### CoreAPI
Summary: We are improving the API used to drive IPFS functionality and extracting it to a separate project without a dependency on go-ipfs itself. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4498)

@magik6k
  - Started working on CoreAPI equivalent of `fallback-ipfs-shell` - https://github.com/ipfs/go-ipfs/pull/6274
  - Worked on changing config handling in constructor, PR today
  - Do we want to rewrite `go-ipfs-api` on top of `go-ipfs-http-client` so we don't have to maintain 2 separate clients? Should be <1 day of work.

#### Provider Records
Summary: We are improving the scalability of the providing subsystem (the system for advertising, via the DHT, the content that a given IPFS node can provide). [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5870)

@michaelavila
- I have plan for small experimental releases, starting with a provider that does nothing. I got a few PRs up for that, still working on some tests. Next up is roots only or none provider strategies. Then some work on small maintenance conveniences (commands?), a priority queue, provide all (add + pin), provide ALL blocks. Then, finally, data migrations and replacing the old system.

#### Base32/CIDv1

Summary: We are converting the default format of content identifiers in IPFS from Base58 to Base32 and encoding additional metadata about the identifer. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5358)

@eingenito - There are two changes requested for IPFS camp - one is to default to base32 when specifying the use of CIDv1 rather than base 58, and the other is to allow the use of base32 peer IDs. There are no updates, but there was a discussion of the possible implications of the first request (default to base32). The challenge is that it's hard to know who might be relying/expecting the current behavior when we make this change. So it's easy to do, but hard to measure the risk of.
  
#### IPFS over FUSE
Summary: We are improving the use of IPFS via FUSE to provide simple way to consume IPFS content from existing applications. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5003)

@djdv
- Considerations around interfaces.
Have compostable roots, expose it to Go which exposes it to the OS
https://github.com/ipfs/go-ipfs/issues/5003#issuecomment-486006313

#### Gateway Performance
Summary: We are analyzing and troubleshooting the performance of the PL IPFS gateway nodes to make then faster.

#### GraphSync
Summary: Sync Graphs Quickly (without lots of requests) - https://github.com/ipld/specs/pull/75

@hannahhoward
- Done: Docs!!! https://github.com/ipfs/go-graphsync/pull/27
  - 

#### Process Improvements
Summary: We're trying to get better working as a team.

@eingenito - Interrupt issues to be discussed every week.

#### IPNS
Summary: Make IPNS faster and support more use cases

@aschmahmann
- LWW pubsub plugged into go-ipfs (still experimental branches)
- Working on making LWW pubsub initial resolution faster (now ~1 second + finding peer, going for a couple hundred ms + finding peer)
- Plug rendezvous into go-ipfs pubsub branch
  - There are a number of issues around semi-centralization that seem the same including: federated rendezvous, https://github.com/ipld/ipld/issues/57, https://github.com/libp2p/notes/issues/10, etc.
  - I'd like to spend time looking into the basics of what IPNS needs after I have rendezvous plugged in

## Cross-team updates

#### Testbed
Summary: https://github.com/libp2p/testlab

Cole is out this week (?) but intends to do a presentation to the org about the testbed next week. We think. 

