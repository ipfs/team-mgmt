
# 💫Golang Core Dev Team Weekly Sync 🙌🏽 2019-03-25

Please note. There has been a  [meeting format change](https://github.com/ipfs/team-mgmt/issues/827#issuecomment-452157617) intended to make our brief sync time more valuable and more easily understood by new/occasional attendees.

**Meeting Lead:** @eingenito

**Attendees:**
  - @hannahhoward
  - @jimpick
  - @michaelavila
  - @aschmahmann
  - @djdv
  - @stebalien
  - @cole
  - @magik6k
  - David Lee
  
**Recording:** [This recording is private to the Go Core Dev Team](https://drive.google.com/drive/u/2/folders/1NeIdLondq2LF3HXBZ_1ZSE8TmCaU40m_)


## Current IPFS Initiatives
#### Datastore
Summary: We are investigating various IPFS datastore options with the goal of replacing the current default datastore with a faster, more scalable one: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4279)
@magik6k
  - Badger
    - User reported GC issues on IRC, did some debugging but the results are still far from ideal
      - https://github.com/ipfs/go-ds-badger/pull/56
      - Most likely an issue in badger
  - Benchmarks
    - Want to benchmark on-disk overheads, sort of blocked by buggy badger GC


#### Bitswap
Summary: We are improving the performance of transferring data between IPFS instances: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5723)

@hannahhoward
   - No major updates
   - May have refactor PR based on graphsync work later this week
   
#### CoreAPI
Summary: We are improving the API used to drive IPFS functionality and extracting it to a separate project without a dependency on go-ipfs itself. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4498)
@magik6k
- Wrap/Adder logic fixes merged - https://github.com/ipfs/go-ipfs/pull/6019
  - Can still be better - https://github.com/ipfs/go-ipfs/pull/6121 (drop wrap from adder, we don't really use it anywhere)
    - @stebalien, should I pick this up
    - @stebalien says: maybe later.
- Path refactor - https://github.com/ipfs/interface-go-ipfs-core/pull/22
  - Simplify handling of unresolved paths, move few things around
- MFS - https://github.com/ipfs/interface-go-ipfs-core/pull/19
  - Some progress, file interface should be usable
  - Got stuck on paths
- Constructor
  - Got started, but need to figure out better context switching workflow with gomod
  

#### Provider Records
Summary: We are improving the scalability of the providing subsystem (the system for advertising, via the DHT, the content that a given IPFS node can provide). [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5870)

@michaelavila
  - Done:
    - Provide roots immediately when adding or pinning
    - Add ordering, filtering, limiting, and offsets to mount.Query
  - Next:
    - Query for head/tail in provider queue
      - Done with queries
      - Working on lexicographical ordering issue (should be done after this)
    - Get larger provider/reprovider work rebased on provide roots changes
  - Blockers:
    - None

#### Base32/CIDv1

Summary: We are converting the default format of content identifiers in IPFS from Base58 to Base32 and encoding additional metadata about the identifer. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5358)

@stebalien - work is ongoing across teams, but although important these changes aren't critical to the Package Managers use case, and therefore isn't our top priority for the next quarter.
 	
  
#### IPFS over FUSE
Summary: We are improving the use of IPFS via FUSE to provide simple way to consume IPFS content from existing applications. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5003)

@djdv
- more IO changes [continuity/concurrency]
  -  better guarantees around sharing state across multiple references/handles. If logical errors are present around this, they should now be more obvious when debugging.
- metadata [FS index + operations]
  - initialized as-early-as-possible and cached instead of, as-late-as-possible and only if fields where requested
  - POSIX information mandates more (previously only a node's Go type was considered important, now we expect and utilise a node's metadata as a source of truth in various operations)
- misc [spec compliance]
  - POSIX timespecs are not being maintained properly through calls, which can cause various issues. Most notably, an infinite loop in client code related to `st_mtime` (read; file appears to have been modified; repeat)
  - symlinks as a format are implemented but are not resolved in operations that demand them to be
    - `Symlink()` and `Readlink()` work but `Open(symlink)`, et al. are not currently spec compliant
    - fixing this will require reconsidering internal reference types
      - internal reference resolution for targets within bounds (fuseNode -> fuseNode)
      - passthrough shims for targets beyond FS bounds (fuseNode -> externalNode)
  - directory entries under `Readdir()` are unique subsets of nodes
    - instead of (always) consulting with the daemon for (partial) data, we'll have to utilise our lookup methods to return fuseNode's and consult with the object for the data we need

@discussions - Some features of unixfs v2 would be useful for the implementation of IPFS on FUSE and @djdv is checking in with @warpfork about the development effort there. He has indicated interest/willingness in starting to incorporate those changes in go-ipfs when ready. 

#### Gateway Performance
Summary: We are analyzing and troubleshooting the performance of the PL IPFS gateway nodes to make then faster.

@stebalien via @eingenito - There are ongoing issues with Filecoin fetching large files from the gateways that have been stored in IPFS cluster. There are multiple reasons for this slowness. One was that some gateways were being reached from the cluster hosts via relay which meant that their connection was very slow. The other is the providing problem. Cluster simply can't write provider records to the DHT quickly enough to support the volume of data they are adding.

#### Benchmarking vs Torrent
Summary: Compare performance of go-ipfs versus torrent protocol

@eingenito - no updates this week as @kubuxu is working on other high priority PL initiatives.

#### GraphSync
Summary: Sync Graphs Quickly (without lots of requests) - https://github.com/ipld/specs/pull/75

@hannahhoward
- Proposed external interfaces for GraphSync (https://github.com/ipfs/go-graphsync/pull/20)
- Started work on responding to graphsync requests
- Continuing to navigate changing go-ipld-prime
- Targeting 1-2 weeks into April for starting Filecoin integration
- Brought @michaelavila & @adin up to speed on some of the concepts
- One more PR -- top level struct making network requests (first integration testable interface) -- https://github.com/ipfs/go-graphsync/pull/22

#### go.mod !!!
Summary: After fighting with gx, pushing go.mod some more.

@stebalien via @eingenito - The PR for adding go.mod support to filecoin is sitting. Filecoin doesn't want to rock the boat before their next release. OTOH we're not excited about bubbling gx changes in IPFS, so we're not going to do it. There are already some discrepancies between go-ipfs's go.mod and gx dependencies so we're EOL'ing gx support in go-ipfs like right now. That said if there's a change in a go-ifps dep that Filecoin needs to pick up they have team members very experienced in the gx bubbling process and can do it themselves if required.

#### IPNS
Summary: Make IPNS faster and support more use cases

@aschmahmann
  - Core internals for configurable gossip are done
    - still need to:
       - Create Option wrappers for topic subscriptions
       - Figure out how to expose these within go-ipfs
  - Working on how I could nicely integrate DAG sync support into pubsub with minimal intrusions
     - progress on interface work, should have some demo tests working soon (by next week hopefully)
  - First attempt at integrating go-ipld-prime with DAG synchornization
    - ran into a few issues, talking them over with @warpfork for when I try round 2
      - these are a little messy, please reach out if you'd like more info
  - This week will have lots of writing/spec work
    - would like some reviewers on current IPNS workplan (maybe @kubuxu and @stebalien if you have time)
      - https://docs.google.com/document/d/1NPDKHhsuqT26rahGT9YyMgQNrdT56ZGpQ4MuKb7wYUI


## Cross-team updates

#### Testbed
Summary: https://github.com/libp2p/testlab

First pass of instrumentation/metrics work is done! We still need to decide on what client-side instrumentation library we're going to use (I'm leaning OpenCensus), but I've got a [PR up for a prometheus metrics collector](https://github.com/libp2p/testlab/pull/4). Good news: it works!

**Help**: If you have any opinions re: cross-platform instrumentation, please get in touch. I've gotten some feedback that we'd like to prevent from having to link too much stuff into applications that will have instrumentation disabled. Unfortunately, I don't see a way around that that doesn't involve making an `Interface` with the exact same... interface... as the library it wraps, which feels like a smell.

## Wins / Celebrations

* @stebalien - we merged `ipfs add <url>`. That means you can add files directly from the web. This _also_ works with `--nocopy` so we can replace the underfeatured `ipfs urlstore add` command with `ipfs add --nocopy --arbitrary-option <url>`. Shout out to @jmank88 for pulling this through.

