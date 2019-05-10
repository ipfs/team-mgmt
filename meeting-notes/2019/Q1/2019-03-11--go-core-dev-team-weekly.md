# 💫Golang Core Dev Team Weekly Sync 🙌🏽 2019-03-11

Please note. There has been a  [meeting format change](https://github.com/ipfs/team-mgmt/issues/827#issuecomment-452157617) intended to make our brief sync time more valuable and more easily understood by new/occasional attendees.

**Meeting Lead:** @eingenito

**Attendees:**
  - _attendee names..._
  - @hannahhoward
  - @michaelavila
  - @momack2
  - @jimpick
  - @alanshaw
  - @aschmahmann
  
**Recording:** [Recordings are private to the Go Core Dev Team](https://drive.google.com/drive/u/2/folders/1g-nLRO68jYkxDbA5cHCad8mZNNT_rlPz)

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

## Current IPFS Initiatives
#### Datastore
Summary: We are investigating various IPFS datastore options with the goal of replacing the current default datastore with a faster, more scalable one: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4279)

@magik6k
- Initial dataset - https://cloudflare-ipfs.com/ipfs/Qmc168UrkY3ngPuKpSJtkhxS1r7hZJxcZzcw1Nfan1yZ5w
  - turns out filesystems don't matter that much, at lesat at this scale (erorr bars are 10x the difference between filesytems)
  - badger is fast
  - some gaps in data, benchmarks still running
  - will exclude leveldb / boltdb from further testing (too slow)
  - ideas for new candidates?

#### Bitswap
Summary: We are improving the performance of transferring data between IPFS instances: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5723)

@hannahhoward
- No major updates for this week
- Some post releases fixes had to be put in for gateways

#### CoreAPI
Summary: We are improving the API used to drive IPFS functionality and extracting it to a separate project without a dependency on go-ipfs itself. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4498)

- Unixfs.Add / coreunix.Adder refactor almost ready
  - https://github.com/ipfs/go-ipfs/pull/6019
  - CI is green
  - Removed hidden file handling, stdinName and changed wrap behaviour
- Discussion on relative paths (symlinks)
  - https://github.com/ipfs/interface-go-ipfs-core/issues/15
- Will open MFS interface PR soon

#### Provider Records
Summary: We are improving the scalability of the providing subsystem (the system for advertising, via the DHT, the content that a given IPFS node can provide). [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5870)

- Done:
  - Simplified version of provider system for https://github.com/ipfs/go-ipfs/issues/6067
  - On larger ticket I started the call-site strategies (a simplified version with just Provide and effectively ProvideAll)
- Next:
  - Write tests for ^^
  
- Raul found an issue with our DHT: https://github.com/libp2p/go-libp2p-kad-dht/issues/290.
  - Basically, we explore _all_ paths when providing. This takes _ages_. I'm working on a patch.
    - https://github.com/libp2p/go-libp2p-kad-dht/pull/291

#### Base32/CIDv1
Summary: We are converting the default format of content identifiers in IPFS from Base58 to Base32 and encoding additional metadata about the identifer. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5358)

- CID-in-subdomain Gateway (`https://<cidv1b32.ipfs.dweb.link`) got HTTPS set up and  [Works Today™](https://bafkreigh2akiscaildcqabsyg3dfr6chu3fgpregiymsck7e7aqa4s52zy.ipfs.dweb.link/)
- Added “Bird's-eye view"  to the [Meta issue about the move to CIDv1 Base32](https://github.com/ipfs/ipfs/issues/337#issue-340637664) (work in progress, ping me if something is inaccurate/missing)
  
#### IPFS over FUSE
Summary: We are improving the use of IPFS via FUSE to provide simple way to consume IPFS content from existing applications. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5003)

@djdv
- Draft refinement still in progress
  - reworking how objects are initialized and coupled to simplify operations and assure consistency
    - path nodes will embed their io interfaces instead of being tracked separately by the FS
    - objects are being generalized, mount root, etc. contain their own distinct methods, ipfs & ipns nodes use coreapi methods, files-api & owned-ipns-paths use mfs methods
- Issue discovered in Lookup that could cause continuity issues (centered around being cache dependant)

#### Gateway Performance
Summary: We are analyzing and troubleshooting the performance of the PL IPFS gateway nodes to make then faster.

@eingenito - @scout ran a meeting to discuss further work on metrics, logging and tracing with a broader group. Meeting again next week. 

#### GraphSync
Summary: Sync Graphs Quickly (without lots of requests) - https://github.com/ipld/specs/pull/75

@hannahhoward
- Lots of architectural discussions worked out
- Have clear interfaces between go-ipld-prime & go-graphsync
- Moving forward this week

#### go.mod !!!
Summary: After fighting with gx, pushing go.mod some more.
- need to reach out to users who are still using gx and notify them about go.mod migration

#### IPNS
Summary: Make IPNS faster and support more use cases

@aschmahmann
 - If you haven't seen the Google Doc for collecting IPNS issues it's at https://docs.google.com/document/d/1fkHofmPDHHpcMsXF22Kf3O6q9POM02bQ4BCcePp0roA/edit
 - Put together a basic prototype for IPNS-over-PubSub that has persistence and therefore does not require IPNS-over-DHT for the initial resolution
   - Not plugged into the go-ipfs Namesys system, but does propagation of IpnsEntry records
 - Working on a prototype for MultiWriter IPNS-over-PubSub
 - Going to do some investigation with @bigs on how to test/profile the various IPNS implementations.
   - Largely blocked by libp2p instrumentation, but might be able to work around this for now (or help @bigs with instrumentation :) )
 - Upcoming meeting with people from RWOT8 on social key recovery. Should help inform decisions on multiple IPNS key types.
 
## Cross-team updates

#### Testbed
Summary: https://github.com/libp2p/testlab
- Wound up focusing on single node testing. JS & Go teams have collaborated to create [one suite](https://github.com/libp2p/interop) of interop tests. This will also go towards single node benchmarks.
- Migrated to go.mod.
- Met with Jim & Adin regarding dynamic data use cases for the testlab, got tentative sign on as first use cases.

Next: Finally instrumenting libp2p. :<
