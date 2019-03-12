# 💫Golang Core Dev Team Weekly Sync 🙌🏽 2019-03-04

Please note. There has been a  [meeting format change](https://github.com/ipfs/team-mgmt/issues/827#issuecomment-452157617) intended to make our brief sync time more valuable and more easily understood by new/occasional attendees.

**Meeting Lead:** @eingenito

**Attendees:**
  - @michaelavila
  - @jimpick
  - @hannahhoward
  - @alanshaw
  - @stebalien
  - @momack2
  - @magik6k
  - @kubuxu
  - @djdv
  - @bigs
  - @lidel
  
**Recording:** 
[Meeting recordings are private to the Golang Core Dev Team](https://drive.google.com/drive/u/2/folders/1lgWbwRDMvndcmmJpmvW7bj5msTaoriXz)

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

## Current Golang Initiatives
#### Datastore
Summary: We are investigating various IPFS datastore options with the goal of replacing the current default datastore with a faster, more scalable one: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4279)

- Gathered initial batch of raw data, it has a few issues but should be useful
  - Initial (very broken) graphs - https://cloudflare-ipfs.com/ipfs/QmaivZi8mvEqk9X4dXpdS1uFvzjA6qse7QsV8tZsnibSJ8/x_plots/c5d-deb (ipfs.io seems down here)
  - Will try to pull some usful info for the next sync

#### Bitswap
Summary: We are improving the performance of transferring data between IPFS instances: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5723)

@hannahhoward - no major updates -- working on graphsync

#### CoreAPI
Summary: We are improving the API used to drive IPFS functionality and extracting it to a separate project without a dependency on go-ipfs itself. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4498)

- Still working on `Unixfs.Wrap` logic refactor - https://github.com/ipfs/go-ipfs/pull/6019
- Also planning the MFS interface (=mostly reading MFS code)

#### Provider Records
Summary: We are improving the scalability of the providing subsystem (the system for advertising, via the DHT, the content that a given IPFS node can provide). [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5870)

- Done:
	- Big rebase + some of the new provider core api updates
  - Sort of a plan for handling migrations for reproviding
  - Did some testing for 0.4.19
- Next:
  - Finish provider core api updates
  - Timestamp provider records to not reprovide too often
- Blockers:
	- None


#### Base32/CIDv1
Summary: We are converting the default format of content identifiers in IPFS from Base58 to Base32 and encoding additional metadata about the identifer. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5358)
 
- No progress this week. @lidel is taking over coordination of this effort across projects.

#### IFPS over FUSE
Summary: We are improving the use of IPFS via FUSE to provide simple way to consume IPFS content from existing applications. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5003)

@djdv
 - PR draft is up, described subsystems and expected behaviour https://github.com/ipfs/go-ipfs/pull/6036  
 - In need of various bugfixes and formalities (mostly around user preferences/config stuff) before final

#### Gateway Performance
Summary: We are analyzing and troubleshooting the performance of the PL IPFS gateway nodes to make then faster.

- @eingenito - dev nodes temporarily not recieving prod traffic. Some logging added to bitswap. 
- Extra gateway slowness following release of 0.4.19. I'm helping debug with infra team (@Kubuxu)

#### Benchmarking vs Torrent
Summary: Compare performance of go-ipfs versus torrent protocol
 - No progress (gomod stole all the time)

#### GraphSync
Summary: Sync Graphs Quickly (without lots of requests) - https://github.com/ipld/specs/pull/75

@hannahhoward - worked on getting architecture of go-graphsync synced with latest designs for ipld traversal - and synced with team about implementation approach

#### go.mod !!!
Summary: After fighting with gx, pushing go.mod some more. @Kubuxu
 - tag-dog bot is running: https://github.com/multiformats/go-multihash/issues/102
 - With raulk, we've added standard TravisCI config to all currently used repos.
 - libp2p is fully go.modded (thanks @raulk)
 - ipfs libraries are go.modded
   - we have a lot of old old old, unmaintained repos in ipfs org.
 - go-ipfs PR: https://github.com/ipfs/go-ipfs/pull/6038 please review and comment
   - current state: everything builds, tests pass, CircleCI is go.mod only
   - gotest failure collections is broken (pre-existing) @Magik6k
   - replaced netcat with socat in sharness (because of bsd vs gnu incompatibilities)
   - 
Q: what is the stratedy of gomod vs gx right now?:
  - drop gx
  - coexist go.mod and gx (what are reqs for go-ipfs CI)
  
@eingenito - Filecoin has indicated that gx support can be dropped.

#### Process Improvements
Summary: We're trying to get better working as a team.
- Thanks everyone for doing mid-Q scoring promptly! Reminder to [remember what you took on this quarter!](https://docs.google.com/spreadsheets/d/1BtOfd7s9oYO5iKsIorCpsm4QuQoIsoZzSz7GItE-9ys/edit?ts=5c2f3d49#gid=1720716278)

## Cross-team updates

#### Testbed
Summary: https://github.com/libp2p/testlab

## Wins / Celebrations

- [Released go-ipfs 0.4.19!](https://github.com/ipfs/go-ipfs/blob/master/CHANGELOG.md#0419-2018-03-01)
- Commit 10,000! (one of the merge commits!)
