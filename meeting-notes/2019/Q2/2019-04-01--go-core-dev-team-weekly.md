## 💫Golang Core Dev Team Weekly Sync 🙌🏽 2019-04-01

**Meeting Lead:** @eingenito

**Attendees:**
  - michaelavila
  - hannahhoward
  - jimpick
  - aschmahmann
  - momack2
  - bigs
  - magik6k
  
**Recording:** [Recordings are private to the PL organization](https://drive.google.com/drive/u/2/folders/12JTXp8Jh-2nsKNLYB0z2_Nz1UokyOC3Y)

## Current IPFS Initiatives

#### Datastore
Summary: We are investigating various IPFS datastore options with the goal of replacing the current default datastore with a faster, more scalable one: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4279)

@eingenito - no updates for this week. @magik6k has been working on revamping the go-ipfs constructor logic. Plan to have a discussion to fill the team in on blockstore options sometime in the coming week.

#### Bitswap
Summary: We are improving the performance of transferring data between IPFS instances: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5723)

@hannahhoward - #nothing - though may do some code extraction/refactor to share with graphsync this week.

@stebalien - Potential connect/disconnect races: https://github.com/ipfs/go-bitswap/issues/99#issuecomment-476355204. Solution may have to be that any time we reconnect to a peer in bitswap we have to always send our wantlist even if they might already have it. 

#### CoreAPI
Summary: We are improving the API used to drive IPFS functionality and extracting it to a separate project without a dependency on go-ipfs itself. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4498)

@magik6k
  - Working on new constructor
    - https://github.com/ipfs/go-ipfs/pull/6162 (still WIP)
    - Uses DI
    - Whole week of fixing regressions, much fun
    - Just passed all the tests

#### Provider Records
Summary: We are improving the scalability of the providing subsystem (the system for advertising, via the DHT, the content that a given IPFS node can provide). [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5870)

@michaelavila

- Done:
  - Orders/Filters/Limit/Offset in mount.Query
  - Use updated mount.Query to get head/tail directly for provider
  - Started rebasing old provider/reprovider onto new provider
- Next:
  - Continuing work to bring new provider/reprovider in (can be tracked here: https://github.com/ipfs/go-ipfs/pull/6141)
  - Most of this work is rebase/addding tests/accounting for new quirks intoduced by the provider work that was merged
- Blockers:
  - None
  - Potential parking lot for another day regarding preserving provide roots behavior that was recently merged without clobbering it with the new work

#### Base32/CIDv1

Summary: We are converting the default format of content identifiers in IPFS from Base58 to Base32 and encoding additional metadata about the identifer. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5358)
 	
@stebalien - Although we deprioritized this to focus on Package Managers, we might now need to reconsider a bit, because we're also prepping for a successful IPFS Camp in June and the attendees there are going to be DAPP devs, who have a great interest in this change. This requires some further conversation with PL peoples but there may be some re-reprioritization as a result.
  
#### IPFS over FUSE
Summary: We are improving the use of IPFS via FUSE to provide simple way to consume IPFS content from existing applications. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5003)
@djdv
- System
  - Index retrieval refactoring (object lifetime and type guarantees, resource sharing, cancellation, etc.)
  - Operations now rely more on POSIX generalities (i.e. use things like the mode instead of checking an object type)
- Directory IO
  - Use system level lookup for entries (consistency guarantees; utilizes cache)
  - directory stream interface multiplexing / spec compliance (CSP/channel syncing stuff; re-producible stream generator)
- In-progress
  - Refactor reference types and handling in operations (interface for fs-level reference nodes; mountpoint, symlinks, ipnsKeys)

#### Gateway Performance
Summary: We are analyzing and troubleshooting the performance of the PL IPFS gateway nodes to make then faster.

@stebalien - Continuing issues with Gateways
  - https://github.com/ipfs/go-ipfs/issues/6145
  - https://github.com/ipfs/go-bitswap/issues/99#issuecomment-476355204
  - https://github.com/ipfs/go-ipfs/issues/6097

#### Benchmarking vs Torrent
Summary: Compare performance of go-ipfs versus torrent protocol

@Kubuxu - I hit a bit of a troubles as script of bittorrent testing I had failed quietly and I thought it was running.

#### GraphSync
Summary: Sync Graphs Quickly (without lots of requests) - https://github.com/ipld/specs/pull/75

@hannahhoward - Big PR incoming -- today? Tomorrow
   - spoke to Filecoin folks last week about where they are at
   - meeting this thurdays
   - aiming for code complete on graphsync this week?
   
#### go.mod !!!
Summary: After fighting with gx, pushing go.mod some more.

@stebalien - the package.json files are still there but we've stopped updateing them. If you run into CI trouble, remove the `BUILD_DEPTYPE=gx` environment variable.

- Filecoin: https://github.com/filecoin-project/go-filecoin/pull/2307

#### IPNS
Summary: Make IPNS faster and support more use cases

@aschmahmann
  - Done
    - Created Option wrappers for topic subscriptions (thx @hannahhoward for talking through this with me)
    - Sync support (instead of just message propagation) in one of the pubsub configurations
    - First runs of MW-IPNS over pubsub working!
    - Working on IPNS OKRs
      - Some pretty detailed OKRs here: https://cryptpad.fr/code/#/2/code/edit/ObQrMQ6JDO1kgCeyeCC9CHyt/
      - They will be linked from main OKR docs later this week
  - Next
    - Create signature/validation layer for MW-IPNS
    - Work with @pgte and @bigs on putting together a testbed plan for gossip-IPNS
    - @jimpick and I to meet with package manager folks to figure out how we can immediately be most helpful
    - OKR planning
  
## Cross-team updates

#### Testbed
Summary: https://github.com/libp2p/testlab

Metrics consensus has been achieved. libp2p will be moving forward with OpenCensus, exporting to prometheus as a backend. Prometheus support is now merged in testlab.

This week will be dedicated to creating our first test scenario :) I'll be doing pubsub and hopefully working with Adin for his use case.
