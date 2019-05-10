# 💫Golang Core Dev Team Weekly Sync 🙌🏽 2019-04-15

Please note. There has been a  [meeting format change](https://github.com/ipfs/team-mgmt/issues/827#issuecomment-452157617) intended to make our brief sync time more valuable and more easily understood by new/occasional attendees.

**Meeting Lead:** @eingenito

**Attendees:**
  - _attendee names..._
  - @alanshaw
  - @hannahhoward
  - @Kubuxu
  - @djdv
  - @jimpick
  - @Stebalien
  - @bigs
  - @aschmahmann
  - @magik6k

**Recording:** @eingenito encountered an error in saving the recording of this meeting. 

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
- Reported a reproducible test case of GC not reclaiming space to badger

#### Bitswap
Summary: We are improving the performance of transferring data between IPFS instances: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5723)

@hannahhoward
- Mostly N/A but we did merge the periodic rebroadcast of wantlist PR, which should help with some of the failed-to-transmit blocks issues

#### CoreAPI
Summary: We are improving the API used to drive IPFS functionality and extracting it to a separate project without a dependency on go-ipfs itself. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4498)

@magik6k has an awesome PR up refactoring how an IPFS instance is contructed: https://github.com/ipfs/go-ipfs/pull/6162

@magik6k
- Addressed DI constructor refactor comments

#### Provider Records
Summary: We are improving the scalability of the providing subsystem (the system for advertising, via the DHT, the content that a given IPFS node can provide). [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5870)

@michaelavila
  - Next: Provider strategy system. There's a discussion of the rollout and specifics of provider strategies here: https://github.com/ipfs/go-ipfs/issues/6221. Please take a look if you have a horse in this race. There's also an open discussion about making this an experimental system first so people could use it quickly without us having to provide complete backwards compatibility with exiting provide/reprovide behavior, and whether that's needed at all.

#### Base32/CIDv1
Summary: We are converting the default format of content identifiers in IPFS from Base58 to Base32 and encoding additional metadata about the identifer. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5358)

@lidel identified two prerequisites for proto.school workshops, IPFS Camp courses etc:
- [#6220: Switch CIDv1 from Base58 to Base32](https://github.com/ipfs/go-ipfs/issues/6220)
  - switching default output of `ipfs add --cid-version 1` from Base58 to Base32 removes conversion step and makes opt-in adoption easier
- [#5287: Support for PeerID/KeyID in Base32](https://github.com/ipfs/go-ipfs/issues/5287)
  - enables use in `https://<key>.ipns.dweb.link` and `/ipns/<key_in_base32`) and gives IPNS partity with `/ipfs/bafy..` 
  
#### IPFS over FUSE
Summary: We are improving the use of IPFS via FUSE to provide simple way to consume IPFS content from existing applications. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5003)

@djdv
General focus was on making "soft" types work the same as "api-X" types and better propagation of operation side effects (FS create|delete, record metadata changes, etc.)
- add FsLink interface
  - contextual reference resolution across different APIs
- changed how root and subsystem nodes are initialized, stored, and indexed
  - all nodes are expected to be initialized through the FS index functions
  - roots conform to FsDirectory interface instead of being special cases
  - allows us to take advantage of the FS index capabilities (concurrency guarantees)

- In progress
  - changes to index functions around IPNS Key and Files API roots
  - change lookup functions for operations that need to read symlinks directly (use the FsLink interface where appropriate)
  - IO hotswapping at FS level
    - a path's handle should remain valid even after data changes because of another operation/thread
    - the FS should be able to replace a path's IO without interrupting operations (implemented but not tested fully)


#### Gateway Performance
Summary: We are analyzing and troubleshooting the performance of the PL IPFS gateway nodes to make then faster.

@momack2 - meeting with a PM on the Cloudflare gateway team on Wednesday

#### Benchmarking vs Torrent
Summary: Compare performance of go-ipfs versus torrent protocol

@kubuxu is going to package up his benchmark so it can be rerun periodically and be extended or incorporated in an automated workflow in the future if needed.

#### GraphSync
Summary: Sync Graphs Quickly (without lots of requests) - https://github.com/ipld/specs/pull/75

@hannahhoward
- IPFS Integration PR - https://github.com/ipfs/go-ipfs/issues/6208
- Almost done with last major task, PR today?
- Meeting with Filecoin team last week - targetting

#### Process Improvements
Summary: We're trying to get better working as a team.

@eingenito - https://github.com/ipfs/go-ipfs/issues/6192, also quarterly async reflection here: https://docs.google.com/document/d/14VplImHoUCVJdCMEMr-P9gatt0E1jDuj2ZOQgND_f7U/edit

#### IPNS
Summary: Make IPNS faster and support more use cases

@aschmahmann
 - More work on pubsub PR (https://github.com/libp2p/go-libp2p-pubsub/pull/171), including an overview at (https://github.com/libp2p/go-libp2p-pubsub/issues/175)
 - Started setting up benchmarking work with @bigs (part 1 of many :) )
 - More research into how to make IPNS-over-Pubsub work even faster with a semi-centralized strategy
   - This is prep work for the upcoming Wednesday meeting on fast semi-centralized IPNS strategies 
   - Hugo has a demo working for IPNS over cloudflare workers - which is presumably fast
   
## Cross-team updates

#### Testbed
Summary: https://github.com/libp2p/testlab

- Enhancements to scenario api and plugins
- Kicked off work with Adin

## Wins / Celebrations

@alanshaw - **JS IPFS 0.35** was released last week! https://blog.ipfs.io/80-js-ipfs-0-35/
@steb - Lots (125K) of nodes on IPFS! 100s of nodes configured autorelay!
