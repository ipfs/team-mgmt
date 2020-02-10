# 🚀 IPFS Core Implementations Weekly Sync 🛰 Feb 10, 2020

- **Lead:** @stebalien
- **Notetaker:** @jacobheun
- **Attendees:**
  - @stebalien
  - @vasco-santos
  - @fabiomartins91
  - @achingbrain
  - @ribasushi
  - @alanshaw
  - @nonsense
  - @willscott
  - @lidel
- **Recording:** https://youtu.be/E3aCX4EEemM

## Agenda

- Ensure a notetaker exists!
- Ask everyone to put their name into the list of attendees
- Initiatives
- Blockers (from the async status update)
- General questions. Could be things like:
  - I'm stuck with something, I don't know who to ask. Who knows who to ask?
  - Who can help me with xyz?
- Plan for this week
  - Select issues to work on
- Review remaining parking lot topics if there is time left

## Notes

### High Priority Initiatives

These are the high priority initiatives the team is currently working on.

#### Upcoming/Shipped Releases
@stebalien / @alanshaw

- js-ipfs `0.41.0-rc.1` RC RELEASED! 🚢
  - Highlights: async/await & UnixFS v1.5
  - Release blog post in review:
      - https://github.com/ipfs/blog/pull/369

#### Upgrade Testing Infra/Process
@stebalien / @daviddias / @nonsense / @raulk

- v0.1 has landed
    - https://twitter.com/raulvk/status/1225147495627608064
- CI is fixed.
- A few small improvements and bug fixes to v0.1
    - Image pushing to AWS ECR
    - Configurable resource limits for pods
    - Canceling of testplan runs on interrupt from Testground client

#### Content Routing
@stebalien / @raulk / @dirkmc / @aschmahmann / @jacobheun

- [Signed Peer Records](https://github.com/libp2p/go-libp2p/issues/776) should be landing today or tomorrow
- [Don't Join DHT when behind NATs](https://github.com/libp2p/go-libp2p/issues/778) is nearly complete and should be ready for testing.
- Work is kicking off on [Disassociating routing table membership from connection state](https://github.com/libp2p/go-libp2p-kad-dht/issues/283)
  - There is some open discussion about the approach that we need to nail down
- Disjoint Path and Terminating query improvements are in testing. There are some issues with Testground speed that are causing delays here.
  - Simultaneous dials have also been a problem. We are looking at mitigating it via [conditional dial cancels](https://github.com/libp2p/go-libp2p-swarm/issues/79#issuecomment-422587405)
  - Performance looking much better, but need to test with more nodes to get a better picture of how much better we expect IPFS network performance to get


#### Subdomain Gateway (Base32, Origin isolation)
@lidel
  - go-ipfs: fixed graceful PeerID support in gateway (incl subdomains) and CLI, and subdomain tests for CIDs and PeerIDs
    - next: more tests i9(cover two proxy modes and dnslink - testing the latter is tricky to test in trully offline mode)

#### Bitswap Updates
@dirkmc
  - New Test Plans
    - [Seed Selection](https://github.com/ipfs/testground/issues/436) - verify Bitswap chooses lowest latency peers
    - [Bitswap Fuzz Test Plan](https://github.com/ipfs/testground/pull/492) + profiling
    - [Version Compatibility](https://github.com/ipfs/testground/issues/435) - verify new Bitswap and old Bitswap can talk to each other
  - Timeout Management [issue](https://github.com/ipfs/go-bitswap/issues/244) [PR](https://github.com/ipfs/go-bitswap/pull/248)

#### Stream Content-Based-Chunking Research/Improvements (go-ipfs / js-ipfs)
@ribasushi
  - More feedback incorportion and profiling, CLI interface is taking its final shape. Slight scope-alignment, updated mid-section of the task-list at https://github.com/ipfs/specs/issues/227#issue-532891529. Seriously aiming at having external-usable `v0.1` by team week


### Other Initiatives

This is the backlog of initiatives that are either on-hold or low-priority.

#### UnixFS v1.5 (go-ipfs / js-ipfs)
@achingbrain / @ribasushi

#### Add Performance (go-ipfs / js-ipfs)
@aschmahmann / @achingbrain

#### Distributed Signaling (js-libp2p)
@jacobheun

#### Migration to multihash keys in blockstore (js-ipfs / go-ipfs)
@alanshaw / @auhau / @hsanjuan

- Getting closer, unfortunately tricky as we're trying to support a reverse migration. 
  - Hoping for a v0.5.0 release with this, but it might come a bit later

### Design Review Proposals
> You want to propose something for design review.

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

### Questions
> You have questions and need them answered. List them here.

- Were there hard blockers using unix sockets when we creating the IPFS cli? (It talks over http)
  - This is in master, planned for v0.5
- Can we attain peer latency in addition to their peer-id to get a better idea of what the network looks like?
  - We could get it on disconnect
- Will we be able to use signed peer records as provider records?
  - No, they're just peer records. Signed provider records with rsa would be a lot to store. Using smaller keys could make this more feasible to support.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟 

@alanshaw
- Done:
  * Fixed repo name for in memory IPLD node
      * https://github.com/ipld/ipld-in-memory/pull/7
  * Added packer to `it-tar` (it can now create tar files as well as extract)
      * https://github.com/alanshaw/it-tar/pull/1
  * Opened PR for adding metadata to `ipfs get`
      * https://github.com/ipfs/js-ipfs/pull/2759
  * Fixed issue with preserving `mtime` of imported files
      * https://github.com/ipfs/js-ipfs-utils/pull/24
  * Fixed issue with `ipfs block put` when CID is a string
      * https://github.com/ipfs/js-ipfs/pull/2760
  * Released js-ipfs 0.41 RC 0 and 1
      * https://github.com/ipfs/js-ipfs/releases/tag/v0.41.0-rc.0
      * https://github.com/ipfs/js-ipfs/releases/tag/v0.41.0-rc.1
  * Finished js-ipfs 0.41 release notes
      * https://github.com/ipfs/blog/pull/369
- Next:
  - Release js-ipfs 0.41
  - Move on to team content routing

@dirkmc
- Done:
  - New Test Plans
    - [Seed Selection](https://github.com/ipfs/testground/issues/436)
    - [Bitswap Fuzz Test Plan](https://github.com/ipfs/testground/pull/492)
  - Timeout Management [issue](https://github.com/ipfs/go-bitswap/issues/244) [PR](https://github.com/ipfs/go-bitswap/pull/248)
- Next:
  - Timeout Management
  - Connection Management
  - Fuzz testing + profiling

@vasco-santos
- Done:
  - Interop tests now run on CI for all `js-libp2p` PRs
    - [js-libp2p#526](https://github.com/libp2p/js-libp2p/pull/526)
    - [libp2p/interop#30](https://github.com/libp2p/interop/pull/30)
  - new iteration on stardust refactor
    - [libp2p/js-libp2p-stardust#14/](https://github.com/libp2p/js-libp2p-stardust/pull/14/)
    - complete rewrite of the protocol implementation
      - register and discovery flows already working
    - revamped tests and docs
  - miscellaneous small PRs and reviews
- Blocked: N/A
- Next:
  - Continue stardust refactor work
    - [libp2p/js-libp2p-stardust#14/](https://github.com/libp2p/js-libp2p-stardust/pull/14/)
    - finish dial flow
    - clean up code and docs for review

@jacobheun
- Done:
  - Started on setting up [noise interop tests](https://github.com/libp2p/interop/pull/32)
  - Perfomance testing on the 0.27 js-libp2p release. Average memory usage is down 30-40%.
  - Content routing coordination
- Blocked:
- Next:
  - Get a beta of the go and js daemon's testing noise implementations in libp2p/interop
  - Prep for next content routing sprint

@achingbrain
- Done:
  - js-unixfs-importer only output unixfs things (e.g. raw nodes become unixfs dag-pb nodes when there is only one of them) [ipfs/js-ipfs#2747](https://github.com/ipfs/js-ipfs/pull/2747)
  - upgrade js-ipfs-http-client ipfsd-ctl dep with simpler factory creation [ipfs/js-ipfs-http-client#1237](https://github.com/ipfs/js-ipfs-http-client/pull/1237)
  - fixed up files examples in specs [ipfs/interface-js-ipfs-core#590](https://github.com/ipfs/interface-js-ipfs-core/pull/590)
  - add `isInitialized` function to repo [ipfs/js-ipfs-repo#219](https://github.com/ipfs/js-ipfs-repo/pull/219)
  - removed option normalisation from ipfsd-ctl [ipfs/js-ipfsd-ctl#454](https://github.com/ipfs/js-ipfsd-ctl/pull/454)
  - remove path and ref from ipfs/ipfs-http modules in ipfsd-ctl [ipfs/js-ipfsd-ctl#458](https://github.com/ipfs/js-ipfsd-ctl/pull/458)
  - allow go-ipfs-dep to report where it installed the binary [ipfs/npm-go-ipfs-dep#40](https://github.com/ipfs/npm-go-ipfs-dep/pull/40)
  - report correct swarm addresses after listening on new ports [ipfs/js-ipfs#2749](https://github.com/ipfs/js-ipfs/pull/2749)
- Blocked:
  - Need a `go-ipfs-dep` release to remove github URLs from open PRs
- Next:
  - Issue triage
  - Tidy up existing PRs
  - Release new interop module
  - Merge mfs into core
  - Write up pin performance work

@lidel
- Done:
  - go-ipfs: working on [subdomain gateway feature](https://github.com/ipfs/go-ipfs/pull/6096)
  - Brave
    - admin work on targeted devgrant: https://github.com/ipfs/devgrants/pull/14
  - ipfs-desktop
    - shipped: [Release 0.10.3](https://github.com/ipfs-shipyard/ipfs-desktop/issues/1338)
  - distributed-wikipedia-mirror
    - admin on AWS grant for Kiwix infra
    - bounty for fixing IPFS version: https://github.com/ipfs/distributed-wikipedia-mirror/issues/64
  - i18n locale syncs
    - [ipld-explorer-components](https://github.com/ipfs-shipyard/ipld-explorer-components/pull/213)
    - [ipfs-desktop](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1347)
    - [ipfs-webui](https://github.com/ipfs-shipyard/ipfs-webui/pull/1399)
  - Kick-off discussions about URI / URN: https://github.com/jonnycrunch/ipfs-uri-scheme/issues/1
- Next:
  - prepare for team week
  - tests tests

@fabiomartins91
- Done:
  - Continuing onboarding process;
  - PR on TestGround documentation: Merge coordination
- blocked:
  -N/A
- Next:
  - Update TestGround USAGE documentation; 
  - Continuing learning about Testground work and IPFS
  - Continue onboarding


@hugomrdias
- Done:
  - aegir cleanup fix: cleanup, update deps, remove deps #512 [https://github.com/ipfs/aegir/pull/512](https://github.com/ipfs/aegir/pull/512)
  - release aegir 20.6.0 [https://github.com/ipfs/aegir/releases/tag/v20.6.0](https://github.com/ipfs/aegir/releases/tag/v20.6.0)
  - cli tests "remove yargs promise" rebase
      - [https://github.com/ipfs/js-ipfs/pull/2708](https://github.com/ipfs/js-ipfs/pull/2708)
      - [https://github.com/ipfs/js-ipfs-mfs/pull/68](https://github.com/ipfs/js-ipfs-mfs/pull/68)
  - react-native calls and grant review
  - Review/merge multiple `ipfsd-ctl`
  - Working on a new tool to test in the browser
- Next:
  - Merge CLI tests refactor now that rebase of first step is done
  - Remove `ky` from our repos.   

@aschmahmann
- Done:
  - Fixed dials to undialable (e.g. peers behind NATs) in DHT testground tests to more closely emulate reality (TCP connections timeout after 5 seconds)
  - Rewrote DHT test scripts to utilize testground v0.1 logging
  - Autonat support in DHT and DHT testing (upgraded from the hacky way from last week)
  - Started running small scale k8s tests
  - Hacked around TCP simultaneous connections at the swarm layer (instead of just in the tests). This approach uses more resources, but is better than just closing useful connections
- Blocked:
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
- Next:
  - Gather metrics for DHT tests as they scale across various parameters (e.g. network size, bucket size, number of disjoint paths, percent undialable nodes)
  - Hopefully get DHT tests running on 1k k8s nodes
