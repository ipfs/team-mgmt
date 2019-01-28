# 💫Golang Core Dev Team Weekly Sync 🙌🏽 2019-01-21

Please note. There has been a  [meeting format change](https://github.com/ipfs/team-mgmt/issues/827#issuecomment-452157617) intended to make our brief sync time more valuable and more easily understood by new/occasional attendees. Please add thoughts and feedback to that issue!

**Meeting Lead:** @eingenito

**Attendees:**
  - @alanshaw
  - @stebalien
  - @momack2
  - @eingenito
  - @magik6k
  - @warpfork
  
**Recording:** https://drive.google.com/drive/u/2/folders/1zQiUy1JV6aUCgr3HJzLDpePyEQKdLu8y


## Agenda
- Review Announcements for the whole team
- Review blockers and needs from other team members (not general updates)
  - Are you blocked waiting for input?
  - PRs for review? Remember the [project board](https://github.com/orgs/ipfs/projects/1)
- Review progress on major initiatives
  - Find or create the section for the IPFS initiative(s) you worked on.
  - Summarize the initiative (or improve the summary) briefly in notes to give a little context.
  - Summarize your progress
  - Summarize your next steps.
- Review other Questions/Notes

## Announcements

- @stebalien/@bigs - Libp2p Team Week recap / notable updates
  - discussed gx - still some split about moving on. wrote a proxy for go mod that should give us most of what we care about with gx - uncovered some bugs with go mod
  - Lars was there and has some ideas for making resolving mutable names quickly by using DNS - using the decentralized system only as a fallback if the central system fails (demo coming together quickly) - still using keys, 
  - plan to pursue a combined security audit instead of separately. 
  - also went over asks for 2019 roadmap in libp2p, they'll get back to us on what's working
  - plan to pin the current stable QUIC version
- @momack2/@eingenito - Finalized Q1 OKRs due ASAP! See comments on [roadmap](https://github.com/ipfs/roadmap/pull/4) re quarterly allocation of initiatives. Please provide your input and ensure our Q1 OKRs make sense re roadmap. 
  - goal: reconcile long term goals with Q1 okr list
- @eingenito - 20% Filecoin time. Details to follow. 
- @eingenito - format refinement for this meeting - Cross-team updates and Wins/Celebrations.
- @eingenito - Holiday for C5 (@eingenito, @michaelavila and @hannahhoward)
- @magik6k - Mumble server is up (!)
  - 35.177.253.208 / self-signed cert - fb:21:bc:64:52:01:d9 / currently needs password (how to distribute?)
  - Password can be distributed via mailing list - go-ipfs-wg@ipfs.io

## Blockers or Needs 

- @momack2 - inlining ed25519 keys issue affecting multiple downstream users - plan/timeline to deploy fix? What's the right place to track this effort?
	- @stebalien - I need to file an issue. We're going to need to fix libp2p/specs#111 faster than I thought and introduce a migration to fix private/public keys.

## Current Go-IPFS Initiatives
#### Datastore
Background: We are investigating various IPFS datastore options with the goal of replacing the current default datastore with a faster, more scalable one.

@magik6k - unblocked on infra! need more time =] Need to finish implementing remote working in the tool used for benchmarking

#### Bitswap
Background: We are improving the performance of transferring data between IPFS instances: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5723)

@hannahhoward - continuing with work on second round of bitswap improvements relating to rating peers according to quality (currently simple metric of #blocks received in session). 

#### CoreAPI
Background: We are improving the API used to drive IPFS functionality and extracting it to a separate project without a dependency on go-ipfs itself. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4498)

@magik6k - go-ipfs-http-api is passing almost all (106 out of 110) interface tests:
  - DAG API not included, blocked on https://github.com/ipfs/go-ipfs/pull/5922
  - File seeking not implemented yet, tests in https://github.com/ipfs/go-ipfs/pull/5934
    - Turns out there is a bug in go-unixfs Seek
    

#### Provider Records
Background: We are improving the scalability of the providing subsystem (the system for advertising, via the DHT, the content that a given IPFS node can provide). [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5774)

@michaelavila - Sick, and yet initial RFC PR up and got great feedback from @stebalien. Refactoring to make providing strategies more flexible. Durable queue of to provide blocks nearing completion and then on to merging reproviding with providing. 

@eingenito - might be useful to figure out how to stage PRs.

#### Base32/CIDv1
Background: We are converting the default format of content identifiers in IPFS from Base58 to Base32 and encoding additional metadata about the identifer. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5358)

* The --cid-base flag was merged! - this means ipfs:// will work in the browser!! (but not ipns://)
  
#### IPFS over FUSE
Background: We are improving the use of IPFS via FUSE to provide simple way to consume IPFS content from existing applications. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5003)

@djdv - Pneumonia!


#### Gateway Performance
Background: We are analyzing and troubleshooting the performance of the PL IPFS gateway nodes to make then faster.

@eefahy, @lanzafame, @mburns, @eingenito, @hannahhoward - Erin and Michael have dev server up and recieving production traffic via sniffer/cloner. Hannah introduced more logging/tracing in bitswap. Adrian made a branch available with opencensus tracing. @eingenito is working on getting new bitswap logs/traces to datadog. Close to initial visibility of logs/traces but then we need to add more logs/tracing. Also have to squash a LOT of libp2p logging which appears totally legit and indicates just how busy these nodes and the DHT actually is. At first approximation it seems like it can approach 1000 DHT operations (or attempts at operations) per second.

Logging all debug output to DataDog for even a single node would be cost-prohibitive so @eefahy and @mburns are continuing on initiative to make ELK based log searching available for IPFS gateway logging.

#### Process Improvements
Background: We're trying to improve our protocols for working as a team.

@magik6k - Mumble server available!

#### GraphSync
Background: Blockchains and large trees with similar characteristics need ways to quickly sync graphs of data in a single request

- GraphSync meeting last week unified on MVP version of [Proposal B](https://github.com/ipld/specs/pull/75) 
- IPLD will be owning selectors implementation in js/go
- IPFS team (starting with go) will need to support wire protocol
- Aiming for solid MVP by EOQ - need to fit this into Q1 roadmap
- See meeting notes here: https://github.com/ipld/team-mgmt/pull/7

## Cross-team updates

#### IPLD <3 Schemas
Background: Our goal is to make IPLD the obvious choice for data serialization and storage in the distributed web.  Now, we want to make it the obvious choice for basic (cross-language!) schemas and types, too.

@warpfork - Summary: there's a fully-worked draft of a Schema system available now!  It's self describing -- a Schema schema! -- and available to read in either JSON or a terse DSL form (which are isomorphic).  If you're interested in reviewing this, drop into the IPLD meeting (right after this one) or ping me...

## Wins / Celebrations

- @alanshaw - JS IPFS 0.34 was released \o/. It has the `--cid-base` options! It blogs here https://blog.ipfs.io/64-js-ipfs-0-34/ - plz re-tweet ;D

* The --cid-base flag was merged!

## Questions

