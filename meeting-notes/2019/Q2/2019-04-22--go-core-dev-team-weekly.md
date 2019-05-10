# 💫Golang Core Dev Team Weekly Sync 🙌🏽 2019-04-22

Please note. There has been a  [meeting format change](https://github.com/ipfs/team-mgmt/issues/827#issuecomment-452157617) intended to make our brief sync time more valuable and more easily understood by new/occasional attendees.

**Meeting Lead:** @eingenito

**Attendees:**
  - @jimpick
  - @hannahhoward
  - @aschmahmann
  - @michaelavila
  - @stebalien
  - @momack2
  - @gmas
  
**Recording:** [This recording is private to the PL organization](https://drive.google.com/drive/u/2/folders/1IkTs1j-Jk2nH8TKRSvY5zvb91p6k5M95)


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
@hannahhoward -- out this week Thur + Fri!

## Current IPFS Initiatives
#### Datastore
Summary: We are investigating various IPFS datastore options with the goal of replacing the current default datastore with a faster, more scalable one: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4279)

* This is the GC issue that @magik6k found: https://github.com/dgraph-io/badger/issues/767

#### Bitswap
Summary: We are improving the performance of transferring data between IPFS instances: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5723)

@hannahhoward
No Update... but progress starts next week!

#### CoreAPI
Summary: We are improving the API used to drive IPFS functionality and extracting it to a separate project without a dependency on go-ipfs itself. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4498)

- merged DI constructor patch

#### Provider Records
Summary: We are improving the scalability of the providing subsystem (the system for advertising, via the DHT, the content that a given IPFS node can provide). [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5870)

@michaelavila
- Done:
  - Moved existing provider/reprovider behind a common provider system
  - Created an experimental flag to toggle between the old and new provider systems
  - Came up with plan for small releases of "experimental provider system"
- Now/Next:
  - Get the first experimental provider system merged (this first version simply doesn't provide anything and the hope is that its useful on its own for gateway)
  - Adding an alternative strategy for providing just roots and get it merged
  - Add provider stats command to get some basic information about the provider system (e.g. things being tracked, how much we are able to provide on average, etc.)
  - 
- Blockers:
  - None, BUT participate in this discussion if you wish: https://github.com/ipfs/go-ipfs/issues/6221

@stebalien
 - Done:
   - Fixed perf issues in the provider subsystem inside go-libp2p-kad-dht (too many provider subsystems...)
     1. Actually GC expired provider records.
     2. Avoid loading provider records into memory unecessarily.
     3. Concurrent GC.

#### Base32/CIDv1
Summary: We are converting the default format of content identifiers in IPFS from Base58 to Base32 and encoding additional metadata about the identifer. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5358) 	
  
@eingenito - no progress this week  
  
#### IPFS over FUSE
Summary: We are improving the use of IPFS via FUSE to provide simple way to consume IPFS content from existing applications. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5003)

@eingenito - @djdv was out this morning but we're hoping to see a preliminary PR this week.

#### Gateway Performance
Summary: We are analyzing and troubleshooting the performance of the PL IPFS gateway nodes to make then faster.

@eingenito - @gmas to start on IPFS containerization and metrics collection. 

#### GraphSync
Summary: Sync Graphs Quickly (without lots of requests) - https://github.com/ipld/specs/pull/75

@hannahhoward
   - Core functionatlity -- DONE!
   - Working on docs this week
   
#### Process Improvements
Summary: We're trying to get better working as a team.

@eingenito:
* Interrupt label to be used to indicate issues that are of high priority and worth deferring long term OKR initiatives to fix/implements. Will review each Monday, and broadcast on Riot.

@momack2
* short 5 min OKR video explaining what we're doing and why

#### IPNS
Summary: Make IPNS faster and support more use cases

@aschmahmann
 - Continuing to work with @bigs on using the testlab
 - Collecting (non-testlab) benchmarks on IPNS-over-Pubsub and trying to understand bottlenecks and how to collect accurate information
 - Meeting happened regarding how to make IPNS-over-Pubsub work even faster with a semi-centralized strategy
   - Notes: https://github.com/ipfs/team-mgmt/pull/948
   - Follow-up issue on multiple IPNS resolvers: https://github.com/ipfs/specs/issues/198
   
