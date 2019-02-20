# 💫Golang Core Dev Team Weekly Sync 🙌🏽 2019-02-18

Please note. There has been a  [meeting format change](https://github.com/ipfs/team-mgmt/issues/827#issuecomment-452157617) intended to make our brief sync time more valuable and more easily understood by new/occasional attendees.

**Meeting Lead:** @momack2

**Attendees:**
  - momack2
  - jimpick
  - kubuxu
  - magik6k
  - stebalien
  
**Recording:** https://drive.google.com/drive/u/2/folders/1i3cOcd7G4isN5SI-hkA1ljpyMt0FDi45

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

- Steven will be posting the 0.4.19 change log - mostly complete and need more pep and pizzax that steven doesn't like expressing - please give feedback!!

## Current IPFS Initiatives
#### Datastore
Summary: We are investigating various IPFS datastore options with the goal of replacing the current default datastore with a faster, more scalable one: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4279)

@magik6k
  - Benchmarking tool is ready to run initial batch of benchmarks, waiting on infra
    - https://github.com/protocol/ad-hoc-infra/pull/32
  - Next steps based on performance characteristics at different loads
  - Badger should no longer corrupt data. They fixed a lot of issues recently and have an open bug bounty
  - dgraph.io hired an auditing firm to audit Badger for data loss - finished and implemented!
  - @kuba is doing a big gx update and grabbing latest badger too
  - infra super overloaded these days - be a squeaky wheel!

#### Bitswap
Summary: We are improving the performance of transferring data between IPFS instances: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5723)

@stebalien
- bumped the pinning concurrency to 32 from 8
- can now ls a directory with a million entries in 2 mins (even faster if fully local!) vs the previous 2 hrs
- AI - steven - more scientific benchmarks

#### CoreAPI
Summary: We are improving the API used to drive IPFS functionality and extracting it to a separate project without a dependency on go-ipfs itself. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4498)

- Pushing go-ipfs-api-client towards marge, getting close - https://github.com/ipfs/go-ipfs-http-client/pull/1
- Writing docs on the interface
  - Ran into some inconsistencies like `wrap` option in Add not being really useful

#### Provider Records
Summary: We are improving the scalability of the providing subsystem (the system for advertising, via the DHT, the content that a given IPFS node can provide). [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5774)

- Michael continues to work on provider records served from on-disk queues which will help subsequent iteration on provider strategies. 

#### Base32/CIDv1
Summary: We are converting the default format of content identifiers in IPFS from Base58 to Base32 and encoding additional metadata about the identifer. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5358)

@stebalien
- nothing has changed in base32 land - can no convert to base32 when list cids - will also auto-upgrade
- multihashed-based content routing is our most important next feature
- want to have - make IPNS work with base32
 	
#### IFPS over FUSE
Summary: We are improving the use of IPFS via FUSE to provide simple way to consume IPFS content from existing applications. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5003)

#### Gateway Performance
Summary: We are analyzing and troubleshooting the performance of the PL IPFS gateway nodes to make then faster.
- nothing changed last week - DHT fixes merged, swarm now has a new environment variable for max number of dials
- now have a separate gateway we can run some tests against, but adrian still working on better logging

#### Benchmarking vs Torrent
Summary: Compare performance of go-ipfs versus torrent protocol
- no progress from Kuba yet - been helping infra and no propogating upgrades

#### GraphSync
Summary: Sync Graphs Quickly (without lots of requests) - https://github.com/ipld/specs/pull/75

- Discussion of protocol was resolved (thanks @stebalien) and Hannah is continuing the implementation

#### Process Improvements
Summary: We're trying to get better working as a team.
- Mumble standups have been happening - every day but monday - going to move the regular time to 10 going forward - this is lightweight! about seeing people and getting unblocked. _SUPER_ valuable for the newer team members. Thanks to everyone who has had time to participate.
- OKR mid-q scoring is due

#### Better CI
Summary: Deprecating Jenkins, making the plan for the next solution
- We've ramped down our giant Jenkins deployment saving HUGE $$$!
- Discussion on Travis vs Circle - non-zero work to get nice test results page with travis (but better support for windows)
- question: what will performance of travis look like when all js repos switch to travis? When the full switch happens, will things slow down like they did when we moved everything to jenkins
- Would need to create solution for viewing tests - junitxml is most reusable format for exporting test results (tbd if js can use this) - could convert to text output at build step
- main difference from js - we run thousands of concurrent test cases that don't block on failures - don't want to grep for logs

## Cross-team updates

#### Testlab
Summary: Merged initial implementation and executed on initial automation work. We now have [reproducible builds for VMs for local development](https://github.com/libp2p/testlab/pull/3). Eventually I will have full cluster automation (images, provisioning, configuration) but I will punt on that for now in favor of implementing a [scenario running framework](https://github.com/libp2p/testlab/issues/2).

## Wins / Celebrations

Getting close to 0.4.19!
