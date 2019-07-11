# 💫Golang Core Dev Team Weekly Sync 🙌🏽 2019-07-01

**Meeting Lead:** @eingenito

**Attendees:**
  - @momack2
  - @michaelavila
  - @yusefnapora
  - @hannahhoward
  
**Recording:** [Recordings are private to the PL org](https://drive.google.com/drive/u/2/folders/1ofC30zL4xSn4l5yhWWJ9JUmqDoUm3KIb)

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
@eingenito
There are significant team changes being made. @kubuxu, @magick6k, @eingenito and @hannahhoward  are rolling onto some Filecoin related work

## Current IPFS Initiatives
#### Datastore
Summary: We are investigating various IPFS datastore options with the goal of replacing the current default datastore with a faster, more scalable one: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4279)

@momack2 - there have been challenges 

#### Bitswap
Summary: We are improving the performance of transferring data between IPFS instances: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5723)

@hannahhoward
- WIP: Benchmarks Integration into CI -- https://github.com/ipfs/go-bitswap/pull/147
- Checkout replication deep dive results -- great summary of thinking on fast replication state of the art (still in a PR for now) https://github.com/ipfs/camp/blob/a00131bbfa239a6fa00d23e749d1efa77b7ed215/DEEP_DIVES/24-replication-protocol.md
- Meeting w/ Camp participant Matilda on Thursday to talk about documentation!

#### Provider Records
Summary: We are improving the scalability of the providing subsystem (the system for advertising, via the DHT, the content that a given IPFS node can provide). [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5870)

@michaelavila
- Did some related work during the tiger team firefighting:
  - rough version of provide roots (merged somewhere?)
  - bucket size configurations (libp2p-kad-dht)
  - time to first provide metric (libp2p-kad-dht)
  - provide timeout for getclosestpeers (libp2p-kad-dht)
  - currently, primarily working on the "Could not build" bug that I introduced :-X (https://github.com/ipfs/go-ipfs/issues/6467)

#### Base32/CIDv1
Summary: We are converting the default format of content identifiers in IPFS from Base58 to Base32 and encoding additional metadata about the identifer. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5358)
 
@momack2 - the immediate term work here is done for now (to support IPFS camp). Longer term work to move to CIDv1 by default is not an immediate priority.  
 
#### IPFS over FUSE
Summary: We are improving the use of IPFS via FUSE to provide simple way to consume IPFS content from existing applications. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5003)

@momack2 - there was discussion during IPFS camp around FUSE. Should expect move information next week.

#### Gateway Performance
Summary: We are analyzing and troubleshooting the performance of the PL IPFS gateway nodes to make then faster.

@michaelavila - many improvements made in the past week and a half to libp2p and IPFS to improve gateway performance. 

#### GraphSync
Summary: Sync Graphs Quickly (without lots of requesGenerts) - https://github.com/ipld/specs/pull/75

@hannahhoward
- Met with Eric Meyhre - got clarity on next steps w/ IPLD selectors
- Taking over IPLD selector work & Graphsync integration into Filecoin steps

#### Process Improvements
Summary: We're trying to get better working as a team.

@momack2 - one thing that came up during IPFS hack week was a desire to speed up the IPFS release cadence, so there were discussions related to that and we should anticipate a plan in the next few weeks for how that will work. 


## Notes
We're going to have at least one more of these weekly Go IPFS meetings next week and after that we may 
