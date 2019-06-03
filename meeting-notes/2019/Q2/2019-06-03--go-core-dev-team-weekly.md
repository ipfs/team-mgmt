# 💫Golang Core Dev Team Weekly Sync 🙌🏽 2019-06-03

Please note. There has been a  [meeting format change](https://github.com/ipfs/team-mgmt/issues/827#issuecomment-452157617) intended to make our brief sync time more valuable and more easily understood by new/occasional attendees.

**Meeting Lead:** @michaelavila

**Attendees:**
  - @jimpick
  
**Recording:** https://drive.google.com/drive/u/0/folders/1oXD-x0_5pfsdoq9-iAe3LLgE4AZ_mmzP

## Announcements

- WDYT about putting our recording on YouTube so it's easier for the community to understand / index on?
  - Think it'd benefit from including the link to the notes so can parse through the information
  - djdv has done this in the past
  - https://github.com/ipfs/team-mgmt/issues/984 
- Go-IPFS 0.4.21 is out!

## Blockers or Needs 

ex.: @gocoredev - Need feedback on PR

## Current IPFS Initiatives
#### Datastore
Summary: We are investigating various IPFS datastore options with the goal of replacing the current default datastore with a faster, more scalable one: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4279)

- ask for @magik6k from @stebalien: https://github.com/ipfs/go-ds-badger/issues/51
- @magik6k
  - No updates

#### Bitswap
Summary: We are improving the performance of transferring data between IPFS instances: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5723)


@hannahhoward - 
 - Done: find provider optimizations!
 - In progress: Realistic test net, w/ DHT
 - Of note: Problem with BlocksGenerator + CIDv1/Base32?
  

#### CoreAPI
Summary: We are improving the API used to drive IPFS functionality and extracting it to a separate project without a dependency on go-ipfs itself. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4498)

@magik6k
  - More constructor work, almost passing all tests
  - Pushed some updates to ipfs-embedded-shell (dependency of ipget)

#### Provider Records
Summary: We are improving the scalability of the providing subsystem (the system for advertising, via the DHT, the content that a given IPFS node can provide). [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5870)

@michaelavila:
- First provider strategy (none) is merged
- Work on the next provider strategy (roots) is in progress

#### Base32/CIDv1
Summary: We are converting the default format of content identifiers in IPFS from Base58 to Base32 and encoding additional metadata about the identifer. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5358)
  
#### IPFS over FUSE
Summary: We are improving the use of IPFS via FUSE to provide simple way to consume IPFS content from existing applications. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5003)

@djdv
 - looked into Plan9's filesystem protocol, trying to adapt some concepts into our fs interface
   - implementing interfaces around generic fs metadata and node versions
 - considerations around IPLD conventions (things like naming 'type' -> 'kind', etc.)


#### Gateway Performance
Summary: We are analyzing and troubleshooting the performance of the PL IPFS gateway nodes to make then faster.

- Looking into it again - seems related to finding and publishing provider records
- Folks looking at DHT issues
- Sending a provider record takes a very long time - try to find the closest peers to the key takes forever and times out - and never actually send our provider records =/


#### GraphSync
Summary: Sync Graphs Quickly (without lots of requests) - https://github.com/ipld/specs/pull/75

@hannahhoward
- have big meeting today
   
#### Process Improvements
Summary: We're trying to get better working as a team.

- Process improvements on releases?
  - CI script for dist?
  - interop tests?
  - Semver
  Next steps: PM --> issue, and follow up next week

#### Garbage Collection
Summary: We're trying to improve the garbage collection system to be less obtrusive and more performant.

@michaelavila:
- Attended GC kickoff with Kuba/Stebalien
- Gathering existing issues relevant to GC into a master issue. I'm working on a similar issue for the metadata and sqlite conversations that have been going on.
- My plan is to keep this work active by tackling low hanging fruit and necessary experiments until the provider work completes.
- My other plan is for this new GC system to begin its life experimental, so we can merge and get feedback early and often instead of waiting until we have a complete solution.

#### IPNS
Summary: Make IPNS faster and support more use cases

@aschmahmann
 - Rewrote IPNS over PubSub improvements per @raulk and @vyzo's suggestions to move all pubsub complexity from go-libp2p-pubsub into go-libp2p-pubsub-router
   - Will put out the go-libp2p-pubsub-router PR once https://github.com/libp2p/go-libp2p-pubsub/pull/184 is resolved
 - Stateful Rendezvous client that implements libp2p Discovery interfaces PR https://github.com/libp2p/go-libp2p-rendezvous/pull/3 waiting on reviews
 - Going to work on a go-ipfs branch adding a config parameter for a rendezvous server(s)
   - A PR into master will be blocked until https://github.com/libp2p/go-libp2p-rendezvous/pull/3 and https://github.com/libp2p/go-libp2p-rendezvous/pull/1 are resolved.
 - Will also try and work on some demos:
   - Regular IPNS performance demo (and some bonus features like implicit record republishing and long-lived records)
   - Options for how to best demo multiwriter IPNS

## Cross-team updates

#### Testbed
Summary: https://github.com/libp2p/testlab

- @bigs:
  - Done:
    - alpha release of testlab
  - Next:
    - investigate https://github.com/libp2p/go-libp2p-kad-dht/issues/283
    - testlab plugin for ipfs cluster

## Wins / Celebrations

- 0.4.21 is out!
