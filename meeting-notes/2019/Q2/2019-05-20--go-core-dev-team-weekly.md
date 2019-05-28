# 💫Golang Core Dev Team Weekly Sync 🙌🏽 2019-05-20

Please note. There has been a  [meeting format change](https://github.com/ipfs/team-mgmt/issues/827#issuecomment-452157617) intended to make our brief sync time more valuable and more easily understood by new/occasional attendees.

**Meeting Lead:** @eingenito

**Attendees:**
  - @jimpick
  - @michaelavila
  - @aschmahmann
  - @stebalien
  - @magik6k
  - @hannahhoward
  - @djdv
  - @kubuxu
  
**Recording:** _add link to recording once it's online_


## Announcements
- Reminder C5 (Michael, Erik, Hannah) out Thur+Fri this week

## Current IPFS Initiatives
#### Datastore
Summary: We are investigating various IPFS datastore options with the goal of replacing the current default datastore with a faster, more scalable one: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4279)

@magik6k
  - No updates, Badger still didn't make a release with fixes we want

#### Bitswap
Summary: We are improving the performance of transferring data between IPFS instances: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5723)

@hannahhoward
Last week: not much due to bug party & c5 stuff
This week: 
  - periodic provider search
  - merging peer task queue extraction
  - protocol improvements
  - sessions improvements
  
#### CoreAPI
Summary: We are improving the API used to drive IPFS functionality and extracting it to a separate project without a dependency on go-ipfs itself. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4498)

@magik6k
 - Refactored constructor is creating ipfs nodes
   - works for simple cases, libp2p is almost working
   - Figured out how to replace RoutingOption / HostOption in a way consistent with other options
   - PR might happen this week (Depending on how hard things break)
   - Node constructor will probably live in CoreAPI package, at least for now
     - tl;dr import loops, but it fits there
 - "Path parsing, validating, and normalizing" - https://github.com/ipfs/interface-go-ipfs-core/issues/33
   - Like the approach, but dedicating all bandwidth to the constructor this week

#### Provider Records
Summary: We are improving the scalability of the providing subsystem (the system for advertising, via the DHT, the content that a given IPFS node can provide). [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5870)

@michaelavila
  - None provider
    - Should be able to get this merged this week (in the next two days) barring anything unexpected:
    - https://github.com/ipfs/go-ipfs/pull/6292
    - https://github.com/ipfs/go-bitswap/pull/124 – working on a CI issue here with the race detector
  - Roots provider
    - WIP, will likely have PRs early next week

#### Base32/CIDv1
Summary: We are converting the default format of content identifiers in IPFS from Base58 to Base32 and encoding additional metadata about the identifer. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5358)

- PR by @Stebalien: [multicodec: add IPLD codec for libp2p public keys](https://github.com/multiformats/multicodec/pull/131)
  - Context by @lidel: [IPNS: should work with case-insensitive identifiers (Base32)](https://github.com/ipfs/go-ipfs/issues/5287)

  
#### IPFS over FUSE
Summary: We are improving the use of IPFS via FUSE to provide simple way to consume IPFS content from existing applications. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5003)

@djdv
 - Nothing to report this week
 - Collected relevant existing issues/info related to FUSE
 (https://github.com/ipfs/go-ipfs/issues/5003#issuecomment-492401897)

#### GraphSync
Summary: Sync Graphs Quickly (without lots of requests) - https://github.com/ipld/specs/pull/75

@hannahhoward
No update this week - meeting tentatively scheduled for next week.

#### Process Improvements
Summary: We're trying to get better working as a team.

@eingenito - icebox label, and discussion of upcoming work label, backlog, help wanted.
Bug squish party went great. Should repeat periodically. 

#### IPNS
Summary: Make IPNS faster and support more use cases

@aschmahmann
- Was with the IPLD team and DTN last week. Unsurprisingly, lots of people who want IPNS to be better.
  - Also spoke with @sander at Textile about Multiwriter IPNS utility
- PR for moving discovery into pubsub (https://github.com/libp2p/go-libp2p-pubsub/pull/184)
- Going to create a go-ipfs fork with faster IPNS for people to play with while I figure out getting https://github.com/libp2p/go-libp2p-pubsub/pull/171 accepted.
  - Looks like libp2p might want to wait for a greater pubsub refactor before adding the configurability and LWWs ability
  - Could be trouble for getting IPNS into experimental faster. Any chance we'd be interested in using a fork of go-libp2p-pubsub if libp2p needs more time before they're ready to accept the changes.
