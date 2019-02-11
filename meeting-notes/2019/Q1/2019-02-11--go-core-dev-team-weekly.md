# 💫Golang Core Dev Team Weekly Sync 🙌🏽 2019-02-11

Please note. There has been a  [meeting format change](https://github.com/ipfs/team-mgmt/issues/827#issuecomment-452157617) intended to make our brief sync time more valuable and more easily understood by new/occasional attendees.

**Meeting Lead:** @eingenito

**Attendees:**
  - _attendee names..._
  - @hannahhoward
  - @jimpick
  - @aschmahmann
  
**Recording:** _add link to recording once it's online_


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

ex.: @gocoredev - Need feedback on PR

## Current IPFS Initiatives
#### Datastore
Summary: We are investigating various IPFS datastore options with the goal of replacing the current default datastore with a faster, more scalable one: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4279)

@eingenito - This issue is blocked (ish?) on benchmarking infrastructure. There may be several other outstanding issues that need to be addressed before we even have a go/no-go on Badger. Epic may need a refresh to clean out closed issues and add new ones. 

@magik6k - Moved go-ds-bench a bit forward, can start running serious benchmarks soon
  - Needs infra: https://github.com/protocol/ad-hoc-infra/pull/24
    - This is dev-only, will need more & more diverse infra soon

#### Bitswap
Summary: We are improving the performance of transferring data between IPFS instances: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5723)

- all refactor tickets are merged. cant remember if that was last week.
- More work on peermanager + optimization of sessions... but
- @hannahhoward mostly on graphsync right now

#### CoreAPI
Summary: We are improving the API used to drive IPFS functionality and extracting it to a separate project without a dependency on go-ipfs itself. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4498)

- Interface has been extracted from go-ipfs! https://github.com/ipfs/interface-go-ipfs-core/
- [go-ipfs-http-client](https://github.com/ipfs/go-ipfs-http-client/pull/1) is ready for reviews

#### Provider Records
Summary: We are improving the scalability of the providing subsystem (the system for advertising, via the DHT, the content that a given IPFS node can provide). [Epic Issue](https://github.com/ipfs/go-ipfs/pull/5870)

- Done:
    - Received and responded to feedback on current work (in Epic Issue above)
- Next:
    - Looking into making the queue not remove entries from the datastore
    - Provider strategies at provider call-sites is perhaps the biggest chunk of feature work I'm still working on
    - Also, there's a rebase upcoming
- Blockers:
    - None, but it would be nice if other folks looked at the PR and also the conversations happening on the PR

#### Base32/CIDv1

Summary: We are converting the default format of content identifiers in IPFS from Base58 to Base32 and encoding additional metadata about the identifer. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5358)

@eingenito - Need to consider next steps and who/when this can be picked up. @stebalien indicates that the next work to be done is converting the blockstore to use raw multihashes ([Issue](https://github.com/libp2p/go-libp2p-routing/issues/32), [WIP](https://github.com/ipfs/go-ipfs/pull/5510)). This is a complicated task that needs some context for whoever picks it up.

@eingenito - What's the relative priority of this task compared to others on this list?
 	
  
#### IPFS over FUSE
Summary: We are improving the use of IPFS via FUSE to provide simple way to consume IPFS content from existing applications. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5003)

@djdv
- DirIO
  - now concurrent
    - implemented methods for background initialization with signals for timeouts/errors
    - Opendir() returns immediately and Readdir() blocks if element is not ready
  - fixed some IPNS listing issues
  - generic abstractions+muxers around a "directory" and a "directory entry" (Core, MFS, UnixFS, and FUSE each have their own definition of these)
- Next
  - With listing being fixed, progress on IPNS write should continue


#### Gateway Performance
Summary: We are analyzing and troubleshooting the performance of the PL IPFS gateway nodes to make then faster.

@eingenito - ELK stack is up? I haven't used it yet but my understanding is that there's logging pipeline for the dev node (and can potentially be used for others).

@eingenito - @scout / @raulk how's the performance of the dialing queue changes holding up?

#### Benchmarking vs Torrent
Summary: Compare performance of go-ipfs versus torrent protocol

Status: Starting out

@Kubuxu:
  - libtorrent (C++) for torrent side of things (custom binary for use in local network)
  - Probably in future can be integrated with other benchmarking infrastructure

#### Textile issues taskforce

##### DHT Mass Dialing
Summary: Textile has been experiencing connectivity issues recently, so we formed a squad to dig in and diagnose the issue.

@stebalien - the DHT dialing fix has been merged into master. The swarm dialer limit environment variable (https://github.com/libp2p/go-libp2p-swarm/pull/102) has also been bubbled to master.

##### Peer ID Inlining

Summary: While diagnosing the above textile issue, we (@whyrusleeping) found that we _would have_ broken Textile in the next release due to a change in how we're calculating peer IDs.

@stebalien - We've now completely reverted to 0.4.18 behavior with a flag to restore 0.4.15 behavior. We can now cut a release.

#### GraphSync
Summary: Sync Graphs Quickly (without lots of requests) - https://github.com/ipld/specs/pull/75

@eingenito - in design - We need a definitive spec for the initial MVP implementation that meets the needs of Filecoin but doesn't hamper us in the future. 

@hannahhoward - yes writing code for go-graphsync but will be blocked in a couple days. also need to put out a proposal for revised wire protocol which I do feel capable of

#### Process Improvements
Summary: We're trying to get better working as a team.

#### [Your Initiative Here]
Summary: [Your summary here.]

_@example - I moved this initiative forward by doing ..., and my next steps are ..._


## Cross-team updates

#### Testbed
Summary: [Testlab repo](https://github.com/libp2p/testlab/pull/1) is live! I kind of bungled the whole "empty master commit with large PR off it" so the best move is to really look at the "prototype" branch.

Request: Currently making some decisions about how to run [test scenarios](https://github.com/libp2p/testlab/issues/2). Would LOVE input.


#### MultiWriter IPNS/Append-Only DAGs
Summary: @aschmahmann Got some positive feedback/review on the work so far. Did a fairly thorough review of how gossipsub and peer-base do message propagation and trying to develop a reusable interface that Append-Only DAGs can use as well. More eyes always welcome!

@aschmahmann Due to IPFS de-scoping/focusing on package managers I have much less DDC work to do. Will be reaching out to some of you over the next week or two to see how I can be of use.

#### [Your Initiative Here]
Summary: [Your summary here.]

_@example - I moved this initiative forward by doing ..., and my next steps are ..._

#### DHT in JS IPFS

@alanshaw - We merged the DHT feature, it's great because JS <=> Go interop and content/peer discovery, thanks to @vasco-santos, @daviddias and loads more people for helping bring this over the line. It'll be in the [next JS IPFS release - 0.35](https://github.com/ipfs/js-ipfs/issues/1826)

#### Tests in JS IPFS HTTP Client

@alanshaw - `js-ipfs-http-client` tests take 5 mintues now! https://github.com/ipfs/js-ipfs-http-client/pull/942 thanks to the "test" profile and @Kubuxu. I'd like to know exactly what this profile does? Can anyone point me in the right direction?

- This is what it does: https://github.com/ipfs/go-ipfs-config/blob/master/profile.go#L68-L85 (@Kubuxu)

## Wins / Celebrations

_@example - We merged this feature ..., it's great because ..., thanks to @awesome for helping!_

## Questions

* Jenkins/Travis? (@eingenito)
Turns out the go-ipfs project is okay to use CircleCI exclusively
* Graphsync (@eingenito)
Graphsync team is busy this week but will try to arrange some time to further discuss design
* Base32/CIDv1 (@eingenito)
Most important next milestone is storing/fetching multihashes in the DHT in libp2p

## Notes
