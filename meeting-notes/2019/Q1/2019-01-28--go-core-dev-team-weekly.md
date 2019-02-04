# 💫2019-01-28 Golang Core Dev Team Weekly Sync 🙌🏽 

Please note. There has been a  [meeting format change](https://github.com/ipfs/team-mgmt/issues/827#issuecomment-452157617) intended to make our brief sync time more valuable and more easily understood by new/occasional attendees.

**Meeting Lead:** @eingenito

**Attendees:**
  - @eingenito
  - @chriscool
  - @hannahhoward
  - @mgoelzer
  - @aschmahmann
  - @alanshaw
  - @michaelavila
  - @stebalien
  - @momack2
  - @magik6k
  - @daviddias
  - @raulk
  
**Recording:** [Here](https://drive.google.com/drive/u/2/folders/145jNU8NLXlYCNGohvXLU9hwcXmz44-Wg)


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

- (@daviddias) Go Core Dev Week Summary/Recap is up on the IPFS Blog https://blog.ipfs.io/65-london-hack-week-report \o/ Share it with all your DWeb friends 💖 🚀 
  

## Blockers or Needs 

@hannahhoward - Many Bitswap PRs, happy to review with you if you need guidance

Remember to check the project board for needed PR reviews: https://github.com/orgs/ipfs/projects/1

ex.: @gocoredev - Need feedback on PR


## Current IPFS Initiatives
#### Datastore
Summary: We are investigating various IPFS datastore options with the goal of replacing the current default datastore with a faster, more scalable one.


#### Bitswap
Summary: We are improving the performance of transferring data between IPFS instances: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5723)

@hannahhoward
- Improving some test stability & completed a refactor to remove "non-session GetBlocks"
- Maybe getting pulled over to GraphSync needs and/or Gateway needs
- Want to get Bitswap improvements in a release so we can see how things perform in the wild

#### CoreAPI
Summary: We are improving the API used to drive IPFS functionality and extracting it to a separate project without a dependency on go-ipfs itself. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4498)

@magik6k
  - `ipfs get` uses coreapi, a fair bit of code being moved around, mostly done - https://github.com/ipfs/go-ipfs/pull/5943
    - https://github.com/ipfs/go-ipfs-files/pull/4 needs review
  - Trying to move https://github.com/ipfs/go-unixfs/pull/60 - 'decouple the DAG traversal logic from the DAG reader' - forward as it contains sort of relevant fix to Seek behaviour

#### Provider Records
Summary: We are improving the scalability of the providing subsystem (the system for advertising, via the DHT, the content that a given IPFS node can provide). [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5774)

@michaelavila
  - Currently working in: https://github.com/ipfs/go-ipfs/pull/5870
  - Done: Incorporated much of the feedback that's been provided already
  - Next: Re-working reprovider to be built on new provider
  - Blockers: none
 
#### Base32/CIDv1

Summary: We are converting the default format of content identifiers in IPFS from Base58 to Base32 and encoding additional metadata about the identifer. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5358)
 	
  
#### IFPS over FUSE
Summary: We are improving the use of IPFS via FUSE to provide simple way to consume IPFS content from existing applications. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5003)
@djdv
 - ran a bunch of programs on top of the mount for debugging purposes
   - issues related to MFS Truncate
   - some unknown issue causing a deadlock in a third party user program (potentially a problem in a lower level pkg)
     - potentially related to unixfs seek issue mentioned above in CoreAPI section
 - internalized some locks for better/assured consistency between ops
 - laying foundation for IPNS write support
 - same methods used to maintain consistency between IO operations in general
   - i.e. if proc 1 opens $PATH and proc 2 opens the same $PATH, then proc 1 modifies it(write, delete), and proc 2 accesses it(stat, seek, read, etc.), the state change should be represented
 - TODO: add/check *BSD support

#### Gateway Performance
Summary: We are analyzing and troubleshooting the performance of the PL IPFS gateway nodes to make then faster.

@eingenito - There's now a simple script (and appropriate branches) that can be used to build ipfs with basic request tracing and more complete bitswap tracing going to DataDog. There have been some interesting results already. Next steps are:
- Log to ELK stack which @scout and @mburns are working on.
- Just log/trace more in bitswap so we can get a better idea of what is going on. 

@stebalien - we believe this may be related to the DHT filling up the dialer queue (see the Textile issue below). In addition to the DHT fix @raulk is working on, I'm working on basic dialer priorities that should non-DHT dials to bypass DHT related dials in the dialer queue. See: https://github.com/libp2p/go-libp2p-swarm/issues/97

#### Process Improvements
Summary: We're trying to get better working as a team.

@eingenito - @magik6k has mumble up and running. It's quiet in there, because I think nobody wants to interrupt anyone. But I think we'll figure out how to take advantage of it as we go. Please join. 

#### Testbed
@bigs - Summary: Moving forward with nomad & consul, which have proven themselves incredibly easy to work with. Terraform scripts will be available EOW, with support for fetching binaries (i.e. libp2p daemon) from IPFS.

#### Textile issues taskforce

##### DHT Mass Dialing

by @raulk (pairing with @stebalien)

Summary: Textile has been experiencing connectivity issues recently, so we formed a squad to dig in and diagnose the issue. 

Result: we uncovered a pretty nasty bug in the DHT that was spawning hundreds to thousands of concurrent dials per DHT query, tripping up the file descriptor limits in the swarm dialer and bringing the entire system to a standstill.

Status: fix in https://github.com/raulk/go-libp2p-kad-dht/pull/2, currently under test.

##### Peer ID Inlining

Summary: While diagnosing the above textile issue, we (@whyrusleeping) found that we _would have_ broken Textile in the next release due to a change in how we're calculating peer IDs.

Short version:

* In 0.4.16, we changed how we calculate peer IDs for ed25519 keys.
* In 0.4.19, we were going to _revert_ this change as it turns out OpenBazaar was relying on this (on a forked network so this change didn't immediately affect them).
* We now found that Textile is relying on the post 0.4.16 behavior and *is* using the main network.

Current Resolution: revert to 0.4.16-0.4.18 behavior and provide a flag for reverting to 0.4.16 behavior (so OpenBazaar can rebase on the latest go-ipfs, setting this flag).

#### GraphSync
Summary: Sync Graphs Quickly (without lots of requests) - https://github.com/ipld/specs/pull/75

@momack2, @stebalien, @hannahoward - go-ipfs is handling the wire protocol for GraphSync while IPLD is handling Selectors. Meeting later today with the IPLD team to discuss interface etc

#### [Your Initiative Here]
Summary: [Your summary here.]

_@example - I moved this initiative forward by doing ..., and my next steps are ..._


## Cross-team updates

#### JS IPFS

by @alanshaw

Summary: We determined JS IPFS is now only ~2x slower than Go IPFS (down from 4x). WE COMING WATCH YOUR BACK...

https://github.com/ipfs/interop/pull/51#issuecomment-457660673

#### Implementation status dashboard
Summary: There is a prototype script that generates an implementation status (text only for now) based on Sharness test results:

https://github.com/chriscool/go-ipfs/commits/implementation-status1

Other info in the Core Dev Team cryptpad...

by @chriscool

#### [Your Initiative Here]
Summary: [Your summary here.]

_@example - I moved this initiative forward by doing ..., and my next steps are ..._

## Wins / Celebrations

_@example - We merged this feature ..., it's great because ..., thanks to @awesome for helping!_

## Questions


## Notes
