# 💫Golang Core Dev Team Weekly Sync 🙌🏽 2019-04-08

Please note. There has been a  [meeting format change](https://github.com/ipfs/team-mgmt/issues/827#issuecomment-452157617) intended to make our brief sync time more valuable and more easily understood by new/occasional attendees.

**Meeting Lead:** @eingenito

**Attendees:**
  - @jimpick
  - @alanshaw
  - @stebalien
  - @jacobheun
  - @aschmahmann
  - @bigs
  - @kubuxu
  - @magik6k
  - @momack2
  - @michaelavila
  
**Recording:** [Recordings are private to the PL org](https://drive.google.com/drive/u/2/folders/1RzrSErPxIh9EjzzGijDIGrqal03-jRqc)

## Current IPFS Initiatives
#### Datastore
Summary: We are investigating various IPFS datastore options with the goal of replacing the current default datastore with a faster, more scalable one: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4279)

@Magik6k:
- Not much progress
  - Some digging into badger codebase

#### Bitswap
Summary: We are improving the performance of transferring data between IPFS instances: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5723)

@stebalien - a bug was fixed that was assuming hosts had our wantlist when perhaps they did not. This necessitates sending the want list more frequently, but probably not so much that performance is an issue.

#### CoreAPI
Summary: We are improving the API used to drive IPFS functionality and extracting it to a separate project without a dependency on go-ipfs itself. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4498)

@Magik6k
  - https://github.com/ipfs/go-ipfs-http-client now exposes `Request` for unsupported functionality
  - Addressed comments in constructor refactor PR - https://github.com/ipfs/go-ipfs/pull/6162
    - Mostly, libp2p routing construction is a bit weird
  - Did some experimenting on next stage constructor refactor
  - Path changes ready for a review - https://github.com/ipfs/interface-go-ipfs-core/pull/22
    - Needed to push MFS further

#### Provider Records
Summary: We are improving the scalability of the providing subsystem (the system for advertising, via the DHT, the content that a given IPFS node can provide). [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5870)

- @michaelavila:
  - Done:
    - Added reprovider (alongside provide roots code)
    - Added simple `ipfs provider tracking` command
    - Moved `ipfs bitswap reprovide` to `ipfs provider reprovide`
  - This week:
    - Fix rc1 issue 
      - Cleaning up what I believe to be a fix now: https://github.com/ipfs/go-ipfs/pull/6186
      - The fix is to "close" the provider queue in the ipfs shutdown process
    - Rebase https://github.com/ipfs/go-ipfs/pull/6141
    - Add remaining provide calls (beyond just add and pin)

- @stebalien still working on improving leveldb query performance and fixing a bunch of half-implemented datastore features that we now expect to be implemented correctly.

#### Base32/CIDv1
Summary: We are converting the default format of content identifiers in IPFS from Base58 to Base32 and encoding additional metadata about the identifer. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5358)

Q(@lidel): [Are we able to ship support for PeerIDs represented in CIDv1 before IPFS Camp?](https://github.com/ipfs/go-ipfs/issues/5287) We want to use them in `https://{PeerID_in_cidv1b32}.ipns.dweb.link`

- @stebalien - we can absolutely make this work "well enough".
 	
#### IPFS over FUSE
Summary: We are improving the use of IPFS via FUSE to provide simple way to consume IPFS content from existing applications. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5003)

@eingenito - @djdv out due to illness

#### Gateway Performance
Summary: We are analyzing and troubleshooting the performance of the PL IPFS gateway nodes to make then faster.

- @stebalien (on the topic of infra) - relays got swarmed, seems more stable now. We had tens of thousands of hosts relaying. 

#### Benchmarking vs Torrent
Summary: Compare performance of go-ipfs versus torrent protocol

@kubuxu:

```
Dataset: 7.16 GB, 1715 files and directories
ipfs get with connection to the network: did not succeed (fetching node got disconnected repeatedly)
ipfs get 1-to-1 (no network, manually connected): 6m48.36 = 17.5MB/s
ipfs get 2-to-1 (no network, manually connected): 5m24.33 = 22MB/s
ipfs add offline 3m51.05 = 31MB/s
torrent 1-to-1: 3m20.87 = 35MB/s
rsync: 2m10.59 = 55MB/s
iPerf = 2.75 Gbit/s = 340MB/s 
```

Should I spend one more day to run this but in tmpfs (bypasses storage speed limits)?

#### GraphSync
Summary: Sync Graphs Quickly (without lots of requests) - https://github.com/ipld/specs/pull/75

- (@momack2) We have a meeting with folks from the Filecoin team  (anorth, whyrusleeping) to talk about integration, end-user interface for graphsync, and timeline

#### Process Improvements
Summary: We're trying to get better working as a team.

@eingenito - It's time for another async reflection. Issue can be found here: https://github.com/ipfs/go-ipfs/issues/6192. Add your 'I like ...' and 'I wish ...' as comments, then we'll vote, then we'll solutioneer.

@momack2 - We need to finalize OKRs ASAP! We're late =/ Note we have some asks from GUI and Infra to improve - https://github.com/ipfs/team-mgmt/pull/903
- Score OKRs: https://docs.google.com/spreadsheets/d/1BtOfd7s9oYO5iKsIorCpsm4QuQoIsoZzSz7GItE-9ys/edit?ts=5c2f3d49#gid=1681757723
- for the benefit of the gateway, ipfs/go-ipfs#5783 needs to be addressed. It would be great to have a member of the go-ipfs team be the DRI for instrumenting the code base, specifically for calls to the http handler
for the benefit of container deployments, go-ipfs needs to be configurable via environment variables
- It'd be rad to get per CID bandwidth stats as per: ipfs/go-ipfs#4740 so we could show things like share-ratios in npm-on-ipfs for modules you are co-hosting.

Notes:
- modification times and diffs for updated packages are required
  - doesn't need to be stored inline, could be stored outline
- need to be able to ingest rsync commands as IPFS

#### IPNS
Summary: Make IPNS faster and support more use cases

@aschmahmann
 - Submitted WIP PR to go-libp2p-pubsub that will be worked on more this week with libp2p team
   - https://github.com/libp2p/go-libp2p-pubsub/pull/171
 - Pushed first version of multiwriter over pubsub to https://github.com/aschmahmann/ipshare
 - IPNS OKRs more detailed and solid https://docs.google.com/spreadsheets/d/1cWnEt8kWrKOc3NHBg9-mdja8EbHIJrFGqNSAkN6HkEQ/edit#gid=0 
 - Start work with @pgte and @bigs on benchmarking
 - Ongoing work on signature/validation for multiwriter IPNS

## Cross-team updates

#### Testbed
Summary: https://github.com/libp2p/testlab
- Fixed issues with service discovery
- First scenario done this week :)

@eingenito - first scenario is some simple correctness testing of pubsub. @aschmahmann to follow with more complex test cases testing multi-writer IPNS
