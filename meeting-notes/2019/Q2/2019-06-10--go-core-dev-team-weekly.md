# 💫Golang Core Dev Team Weekly Sync 🙌🏽 2019-06-10

Please note. There has been a  [meeting format change](https://github.com/ipfs/team-mgmt/issues/827#issuecomment-452157617) intended to make our brief sync time more valuable and more easily understood by new/occasional attendees.

**Meeting Lead:** @michaelavila
  
**Recording:** https://drive.google.com/drive/u/0/folders/1chG5Cy33cPjj3OBuhT6WiLuaZGzUrEB4

## Current IPFS Initiatives
#### Datastore
Summary: We are investigating various IPFS datastore options with the goal of replacing the current default datastore with a faster, more scalable one: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4279)

#### Bitswap
Summary: We are improving the performance of transferring data between IPFS instances: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5723)

@hannahhoward
- Use a realistic test network w/DHT PR needs review: https://github.com/ipfs/go-bitswap/pull/136

#### CoreAPI
Summary: We are improving the API used to drive IPFS functionality and extracting it to a separate project without a dependency on go-ipfs itself. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4498)

@magik6k
  - Constructor:
    - Spent 3 days debugging pubsub issue
      - But eventually got it fixed
    - Ready for review
      - https://github.com/ipfs/go-ipfs/pull/6387
    
### Faster File Adding
Summary: Make `ipfs add` faster

@magik6k:
  - Started working on benchmarks
  - Will involve a small rewrite of coreunix/adder
    - Mostly not using MFS to create file structure
      - MFS creates huge overhead when adding many small files

#### Provider Records
Summary: We are improving the scalability of the providing subsystem (the system for advertising, via the DHT, the content that a given IPFS node can provide). [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5870)

@michaelavila
- Working on next PR (provide roots)
- Communicating with js-ipfs team for their provider work
- Introduce Provider tag in go-ipfs and tagged/reviewed/closed provider related issues
- Breaking provider module out of go-ipfs
  - https://github.com/ipfs/go-ipfs/issues/6417
  - https://github.com/ipfs/go-ipfs/pull/6421
  - https://github.com/ipfs/go-ipfs-provider
- TODO: talk to gateway about disabling providing

#### Base32/CIDv1
Summary: We are converting the default format of content identifiers in IPFS from Base58 to Base32 and encoding additional metadata about the identifer. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5358)

- (@lidel can't join [sorry:(] but would love to get answer on next steps for  https://github.com/ipfs/go-ipfs/issues/5287#issuecomment-498349216 and if its realistic to ship new go-ipfs with this before Camp, or are we moving this to July?)
 	
#### IPFS over FUSE
Summary: We are improving the use of IPFS via FUSE to provide simple way to consume IPFS content from existing applications. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5003)

@djdv
- No status this week, attention was spent on team week and camp things
- Will be speaking about this at camp though https://github.com/ipfs/camp/tree/master/DEEP_DIVES#topics

#### Gateway Performance
Summary: We are analyzing and troubleshooting the performance of the PL IPFS gateway nodes to make then faster.

#### GraphSync
Summary: Sync Graphs Quickly (without lots of requests) - https://github.com/ipld/specs/pull/75

#### Process Improvements
Summary: We're trying to get better working as a team.

#### Garbage Collection
Summary: We're trying to improve the garbage collection system to be less obtrusive and more performant.

@michaelavila
- Communicating with js-ipfs team for their GC work
- I will get the GC issue I started writing up this week

## Cross-team updates

#### Testbed
Summary: https://github.com/libp2p/testlab
