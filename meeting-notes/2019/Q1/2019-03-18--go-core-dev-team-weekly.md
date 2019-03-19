# 💫Golang Core Dev Team Weekly Sync 🙌🏽 2019-03-18

Please note. There has been a  [meeting format change](https://github.com/ipfs/team-mgmt/issues/827#issuecomment-452157617) intended to make our brief sync time more valuable and more easily understood by new/occasional attendees.

**Meeting Lead:** @eingenito

**Attendees:**
  - @alanshaw
  - @michaelavila
  - @hsanjuan
  - @jimpick
  - @hannahhoward
  - @djdv
  - @kubuxu
  - @magik6k
  - @momack2
  - @stebalien
  
**Recording:** [Video recordings are private to the Golang Core Dev Team](https://drive.google.com/drive/u/2/folders/1glxD-aXkwvYAg7YFgKFLk217sC60i4yW)


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

@magik6k
  - Not much progress, coming up with new scenarios, looking for new candidate datastores

#### Bitswap
Summary: We are improving the performance of transferring data between IPFS instances: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5723)

@hannahhoward
- no update

#### CoreAPI
Summary: We are improving the API used to drive IPFS functionality and extracting it to a separate project without a dependency on go-ipfs itself. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4498)

@magik6k
  - Files API prototype! - https://github.com/ipfs/go-ipfs/pull/6081
  - Unixfs.Wrap needs some work in go-ipfs-cmds
  - Symlink paths discussion - https://github.com/ipfs/interface-go-ipfs-core/issues/15

#### Provider Records
Summary: We are improving the scalability of the providing subsystem (the system for advertising, via the DHT, the content that a given IPFS node can provide). [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5870)

@michaelavila
  - I've been working on a very simplified version of the new provider system
  - I was out most of the week, but Monday I wrote some tests (around the provider queue)
  - I came back to some changes to my PR so just going over those this morning
  - No blockers

#### Base32/CIDv1

Summary: We are converting the default format of content identifiers in IPFS from Base58 to Base32 and encoding additional metadata about the identifer. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5358)

* Started working on: https://github.com/ipfs/go-ipfs/pull/6096
 	
#### IPFS over FUSE
Summary: We are improving the use of IPFS via FUSE to provide simple way to consume IPFS content from existing applications. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5003)

@djdv
- issues around lookup where detected and likely resolved
- A lot of changes around data structures, lookup semantics, and IO resource management
  - Basically boils down to generalizing many structures and functions into fewer, tightening scope, and doing manual memory management where appropriate (because fuse expects things that Go dislikes)
- A better way of handling IO resetting for mutable node types (mfs, ipns)
- Will likely have a much better V2 draft up soon with more in-depth technical details

#### Gateway Performance
Summary: We are analyzing and troubleshooting the performance of the PL IPFS gateway nodes to make then faster.

@eingenito - no updates that I know of - but important note from the Filecoin team that large files that they are trying to share are taking a long time to download via the gateways Possibly related to block providing order which is helped by a PR currently in review. 

#### Benchmarking vs Torrent
Summary: Compare performance of go-ipfs versus torrent protocol
Restarting work on it. Torrent clients don't like private networks (as in no global connectivity network).

#### GraphSync
Summary: Sync Graphs Quickly (without lots of requests) - https://github.com/ipld/specs/pull/75

@hannahhoward
  - much work was done!
  - RFC: Filecoin interfaces -- https://github.com/ipfs/go-graphsync/issues/18 - YOU MIGHT CARE CAUSE IT'LL BE IPFS INTERFACES TOO ONE DAY!
  - First big component - RequestManager (along with message dispatch work) - https://github.com/ipfs/go-graphsync/pull/19
  
#### Process Improvements
Summary: We're trying to get better working as a team.

@eingenito - haven't yet tried to schedule a sync reflection. Will do so. 

#### IPNS
Summary: Make IPNS faster and support more use cases

@aschmahmann
  - Ready to start basic performance testing on persistent pubsub once testlab moves a little further along
  - Started working on integrating persistent pubsub into go-IPFS.
    - Requires adding channel specific options and otherwise messing with pubsub/gossipsub internals
  - Working on how I could nicely integrate DAG sync support into pubsub with minimal intrusions
    - Will likely use go-ipld-prime to give some usability feedback to @warpfork
    
#### Go Modules
 - Trying to get filecoin to switch to go modules.
   - Transition PRs filed by @hsanjuan and one more by @stebalien.
 - What else can we do? Ideas? @Kubuxu
   - Assign End of Life for gx based go-ipfs?
 @eingenito - we're going to state that we'll suppport gx until the end of the month, but if something really nasty comes up (update bubble) we're going to give up earlier.
 

## Cross-team updates

#### Testbed
Summary: https://github.com/libp2p/testlab Added metrics collection endpoint to the daemon, about 50% done with automatic configuration of metrics collectors in the nomad cluster. After that, it's instrumentation time! 

#### IPFS Desktop 0.7 released
Summary: https://github.com/ipfs-shipyard/ipfs-desktop#ipfs-desktop
Putting go-ipfs 0.4.19 in yer operating system menu bar. graphical user interface style.

#### js-ipfs-http-client 30.1.0 released!
Summary: It's much smaller now! ~33% smaller! https://bundlephobia.com/result?p=ipfs-http-client@30.1.0
Please re-tweet! https://twitter.com/_alanshaw/status/1106500694452985856
