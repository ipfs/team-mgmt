# 💫Golang Core Dev Team Weekly Sync 🙌🏽 2019-02-04

Please note. There has been a  [meeting format change](https://github.com/ipfs/team-mgmt/issues/827#issuecomment-452157617) intended to make our brief sync time more valuable and more easily understood by new/occasional attendees.

**Meeting Lead:** @eingenito

**Attendees:**
  - @alanshaw
  - @Kubuxu
  - @mgoelzer
  - @aschmahmann
  - @hannahhoward
  - @bigs
  - @michaelavila
  - @stebalien
  - @mikeal
  - @magik6k
  - @momack2
  - @raulk
  
**Recording:** 
[This recording is private to the Go Core Dev Team](https://drive.google.com/drive/u/2/folders/1jnVNjjtNmYz0soHyg6IqiIL_EGgLXY5f)


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

- Welcome back KUBA!

## Current IPFS Initiatives
#### Datastore
Summary: We are investigating various IPFS datastore options with the goal of replacing the current default datastore with a faster, more scalable one.

- need to update the epic with the outstanding work

#### Bitswap
Summary: We are improving the performance of transferring data between IPFS instances: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5723)

- a few outstanding PRs on the refactor stuff
- a few sessions improvements, but not seeing huge improvements in real world testing
- after refactors there will only be bitswap sessions (no get without session)
- @hannahhoward heavily committed to GraphSync

#### CoreAPI
Summary: We are improving the API used to drive IPFS functionality and extracting it to a separate project without a dependency on go-ipfs itself. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4498)

@magik6k
  - ipfs get uses CoreAPI!
  - ipfs ls uses CoreAPI too!
  - go-unixfs seek fix merged (it also uses ipld walker now)
  - block put --pin needed for http dag service - https://github.com/ipfs/go-ipfs/pull/5969

#### Provider Records
Summary: We are improving the scalability of the providing subsystem (the system for advertising, via the DHT, the content that a given IPFS node can provide). [Epic Issue](https://github.com/ipfs/go-ipfs/pull/5870)

- Issue is up-to-date (https://github.com/ipfs/go-ipfs/pull/5870)
- Currently reworking reprovider onto new provider system

#### Base32/CIDv1

Summary: We are converting the default format of content identifiers in IPFS from Base58 to Base32 and encoding additional metadata about the identifer. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5358)

@stebalien - updates needed to providers
 	
  
#### IPFS over FUSE
Summary: We are improving the use of IPFS via FUSE to provide simple way to consume IPFS content from existing applications. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5003)

@djdv
 - Reverted poor judgment (revert: internalized locks)
 - IPNS creation support Part 1
   - files and directories under keys
   - key creation in IPNS root soon
 - IPNS resolution speedup for keys we own (resolution is done locally)
 - minor refactors (CoreAPI changed some things, rebase was needed for bugfixes)
   - a seeking bug was fixed
   - offline handling
   - path parsing
   - directory lsiting
     - bug found in directory handling anyway so this is good timing
 - Adjusted how node caching is handled (more stable upstream library)

#### Gateway Performance
Summary: We are analyzing and troubleshooting the performance of the PL IPFS gateway nodes to make then faster.

- @eingenito - @raulk has a libp2p fix for an important issue with dialing (a hard limit on how many dials we can do simultaneously). He and @scout have this out on gateway nodes and I think the preliminary results are encouraging. I think this is specifically covered in the DHT Mass Dialing issue below. Tracing last week has shown that for long running bitswap sessions most of our time is spent finding/connecting to peers because of said issue and another bug that @steb found and @hannahhoward has merged a fix for; probably already discussed in the Bitswap initiative above.

#### Textile issues taskforce

##### DHT Mass Dialing
Summary: Textile has been experiencing connectivity issues recently, so we formed a squad to dig in and diagnose the issue. 

##### Peer ID Inlining

Summary: While diagnosing the above textile issue, we (@whyrusleeping) found that we _would have_ broken Textile in the next release due to a change in how we're calculating peer IDs.

Still waiting on OpenBazaar to review https://github.com/libp2p/go-libp2p-peer/pull/42.

#### GraphSync
Summary: Sync Graphs Quickly (without lots of requests) - https://github.com/ipld/specs/pull/75

* @momack2 - have a weekly meeting now at 9am on Fridays
* GraphSync Wire Repo (w/ latest docs files): https://github.com/ipfs/go-graphsync & Project for tracking: https://github.com/ipfs/go-graphsync/projects/1
* tiger team chat for fast questions iterating quickly \o/
* need a design doc we can agree on and review with stakeholders as the blessed source of truth

#### Process Improvements
Summary: We're trying to get better working as a team.

* @eingenito - Please update your epic issues and ensure they are up to date and that they link to current PR's/Issues. Also please make sure they're on the [Project Board](https://github.com/orgs/ipfs/projects/1)
* @eingenito - Speaking of - I made a new column for epic issues. Please make sure that any initiative that you're working on has an epic, and that it has some context about what you're doing, and links to issues/PRs. You can look at the current ones for inspiration. Also good if you label them Meta. 
* @eingenito - Mumble is a thing! 
* @eingenito - We (I?) need an internal chat - Mumble is pretty neat, but it feels invasive to just jump in and start talking to everyone. I think an internal PL-IPFS chat would help. The current IPFS Development channel is too big for project housekeeping. 
* @eingenito - Now that we have Mumble - we're holding a daily update meeting at 9:30PST on mumble. Everyone is invited, but attendance is not mandatory. We can change the time as appropriate.
- @momack2 - we need to finalize our [Q1 OKRs](https://docs.google.com/spreadsheets/d/1BtOfd7s9oYO5iKsIorCpsm4QuQoIsoZzSz7GItE-9ys/edit?ts=5c2f3d49#gid=755202447)! There are a few without owners in our doc - who is able to step in as owners

## Cross-team updates

#### Testbed
Summary: Finally, a tangible breakthrough! Working on a simple tool to generate nomad configurations for a test cluster. Leverages consul for service discovery (i.e. gateways and metric endpoints) as well as the IPFS gateways to pull test binaries. Repo coming soon.

@bigs - I've been feeling a bit stuck in the design process, but am stuck no more! Expect a repo and intro video soon.

#### MultiWriter IPNS/Append-Only DAGs
Summary: @aschmahmann Pushed out a large update to https://github.com/aschmahmann/ipshare. Main wins are better documentation and examples for content resolvers. Recommended to check out the resolvers package if you're interested.

@bigs helped me figure out some strategies for using public channels to synchronize these append-only DAG. @dirkmc is also working on a similar issue for peer-base (https://github.com/peer-base/peer-base/issues/243). Please reach out if you're interested.
