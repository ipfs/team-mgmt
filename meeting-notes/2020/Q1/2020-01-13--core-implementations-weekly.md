# 🚀 IPFS Core Implementations Weekly Sync 🛰 Jan 13, 2020

- **Lead:** @stebalien
- **Notetaker:** @jacobheun
- **Attendees:**
  - @achingbrain
  - @dirkmc
  - @alanshaw
  - @riba
  - @johnnymatthews
  - @vasco-santos
  - @lidel
- **Recording:** https://youtu.be/A5iwxqhcxkw

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

#### Upcoming/Shipped Releases
@stebalien / @alanshaw

- js-ipfs 0.41 (https://github.com/ipfs/js-ipfs/issues/2656)
  - Waiting on async/await refactor PRs (imminent)
- go-ipfs 0.4.23 still not out

#### Upgrade Testing Infra/Process
@stebalien / @daviddias / 

- Road to 1K+ nodes
  - We've found a network configuration for k8s that appears to work for us
  - We're almost done porting the sidecar to work on k8s (working through some final bugs).
- Remaining requirements for go-ipfs 0.5.0 have been defined. Mainly:
  - 1-10K nodes
  - Artificial latencies (e.g., 100ms).
  - Multiple IPFS/libp2p/DHT/etc. versions within a single test run (cross-version testing)
  - A way to extract traces/logs for debugging.


#### Content Routing
@stebalien / @raulk / @dirkmc / @aschmahmann / @jacobheun ??

- Lots of design and research work during the ResNetLab research retreat
  - Many plans were creating for resolving outstanding issues
- Raul and Stebalien have been working on putting together a work plan for resolving outstanding issues

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- [Updated docs about gateways @ docs-beta.ipfs.io](https://docs-beta.ipfs.io/how-to/address-ipfs-on-web/#http-gateways)
- Did not start subdomain work yet (finishing Q4 leftovers) 

#### Distributed Signaling (js-libp2p)
@jacobheun

- Should be kicking off again in the next couple weeks (once the async/await is live)

#### IPNS (go-ipfs / js-ipfs)
@aschmahmann / @hugomrdias

- Working on improving how updates are selected

#### Add Performance (go-ipfs / js-ipfs)
@aschmahmann / @achingbrain

- No updates (mostly)
- Started work on supporting badger 2.0

#### Migration to multihash keys in blockstore (js-ipfs / go-ipfs)
@alanshaw / @auhau

- JS On hold
- Go has several PRs open for migrating to multihashes
  - The migration code to convert existing stores needs to be created

#### Bitswap Updates
@dirkmc

- Stebalien is still reviewing [proof of concept changes](https://github.com/ipfs/go-bitswap/pull/189)
- js-bitswap implementation of [server side of PoC changes](https://github.com/ipfs/js-ipfs-bitswap/pull/204) (responds to want-have / want-block messages) is ready for review
  - AI @alanshaw to review

#### js-ipfs/js-libp2p/js-ipld async await refactor
@achingbrain / @jacobheun / @vasco-santos / @alanshaw

- js-ipfs
  - Async/await PRs being rebased on top of UnixFS v1.5 work
  - Less than 10 files of tests to be refactored remaining

- js-libp2p
  - Working through final integration bugs with js-ipfs and libp2p interop
  - Will do an RC release once that is all passing and all examples/docs have been merged. (This should be in the next few days)

#### UnixFS v1.5 (go-ipfs / js-ipfs)
@achingbrain / @ribasushi

- Merged `mode` and `mtime` support into js-ipfs
  - It will be released in the next version of js-ipfs

#### Stream Content-Based-Chunking Research/Improvements
@ribasushi

- Working on preliminary go-based implementation of hypothesis-tester. Update of progress at top of https://github.com/ipfs/specs/issues/227. Planning to close out entirety of O1 this week.

### Design Review Proposals
> You want to propose something for design review.

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

### Questions
> You have questions and need them answered. List them here.

- @alanshaw - would it be a good idea to write a separate blog post on UnixFS v1.5? What new things are landing in JS IPFS, why it's important etc. etc.
  - Yes! (@achingbrain will do it!)
- @dirkmc: which content routing improvements / fixes need to be made before 0.5 release?
  - We have a list we are currently editing, should hopefully share that out later this week. Query logic, correct / up to date / persisted routing tables, etc. Determining what's going to go into 0.5 and what will come after.
  - First step is getting adequate number of nodes (1k/10k) in testground, get metrics on the current version of the dht and replicate what we're seeing in production, so that when we perform these fixes we **know** it's better.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟

@alanshaw
- Done:
  - Refactored `ipfs-http-response` to use new js-ipfs APIs
    - https://github.com/ipfs/js-ipfs-http-response/pull/30
  - Fixed discovery modules stopping in new libp2p
    - https://github.com/libp2p/js-libp2p/pull/530
  - Fixed connection manager min/max connection default values
    - https://github.com/libp2p/js-libp2p/pull/528
  - Found and fixed memory leak for leveldb iterators in `datastore-level`
    - https://github.com/ipfs/js-datastore-level/pull/26
  - Rebased async/await PRs for `js-ipfs-mfs`, `interface-js-ipfs-core` and `js-ipfs-http-client`
- Next:
  - Getting async/await PRs merged:
    - https://github.com/ipfs/js-ipfs/pull/2683
    - https://github.com/ipfs/js-ipfs-http-client/pull/1183
    - https://github.com/ipfs/interface-js-ipfs-core/pull/567

@jacobheun
- Done:
  - Bug fixes
    - Catch errors on pubsub newStream creation [#js-libp2p-pubsub#34](https://github.com/libp2p/js-libp2p-pubsub/pull/34/files)
    - Debugged issues with js-ipfs swarm interface tests. Pushed to [js-ipfs#2683](https://github.com/ipfs/js-ipfs/pull/2683), just pending a merge and release of Gossipsub to fully resolve test issues.
    - Debugging issues with libp2p in the browser example for the refactor
- Next:
  - Finish fixing the libp2p in the browser example
  - Help finish js-ipfs integration of libp2p refactor
  - Review getting started docs and get that merged

@vasco-santos
- Done:
  - addressed examples review
    - [libp2p/js-libp2p#523](https://github.com/libp2p/js-libp2p/pull/523)
    - [libp2p/js-libp2p#503](https://github.com/libp2p/js-libp2p/pull/503)
  - debug regression issue on interop
      - [libp2p/js-libp2p#532](https://github.com/libp2p/js-libp2p/pull/532)
  - first iteration on `js-libp2p-stardust` refactor
    - use `async await`, created a reliable test suite and updated most of the dependencies
    - [libp2p/js-libp2p-stardust#14](libp2p/js-libp2p-stardust#14)
    - [libp2p/js-interfaces#18](https://github.com/libp2p/js-interfaces/pull/18)
  - "peerStore v1.5"
    - analyzed the impact of deprecating `peer-info` and rely only on `peer-info`
    - [libp2p/js-peer-info#85](https://github.com/libp2p/js-peer-info/issues/85)
- Blocked: N/A
- Next:
  - Get open `js-libp2p` PRs landed
  - Help with release stuff
  - `js-libp2p-stardust` refactor
    - use latest `libp2p-mplex` and `multistream-select`
    - get rid of "microswitch"
    - move to new `interface-connection` and use `async iterators` instead of `pull-stream`

@dirkmc
- Done:
  - Merged some smaller PRs into [js-bitswap PoC engine implementation](https://github.com/ipfs/go-bitswap/pull/189)
- Blocked:
  - Unable to run any testground testplans with docker ([issue](https://github.com/ipfs/testground/issues/334))

@achingbrain
- Done:
 - Shipped UnixFSv1.5 metadata
   - https://github.com/ipfs/js-ipfs-mfs/pull/70
   - https://github.com/ipfs/js-ipfs-utils/pull/20
   - https://github.com/ipfs/js-ipfs-utils/pull/19
   - https://github.com/ipfs/js-ipfs-multipart/pull/39
   - https://github.com/ipfs/js-ipfs-unixfs-importer/pull/42
   - https://github.com/ipfs/js-ipfs-unixfs/pull/40
   - https://github.com/ipfs/interface-js-ipfs-core/pull/572
 - Remove format option from mfs commands
   - https://github.com/ipfs/js-ipfs-http-client/pull/1218
   - https://github.com/ipfs/js-ipfs-mfs/pull/69
   - https://github.com/ipfs/interface-js-ipfs-core/pull/575
 - Return CID of flushed path
   - https://github.com/ipfs/js-ipfs/pull/2715
   - https://github.com/ipfs/js-ipfs-http-client/pull/1216
   - https://github.com/ipfs/interface-js-ipfs-core/pull/579
   - https://github.com/ipfs/js-ipfs-mfs/pull/72
 - Fixes writing with offsets beyond file lengths https://github.com/ipfs/js-ipfs-mfs/pull/71
- Blocked:
- Next:
 - Customising importer pipline: https://github.com/ipfs/js-ipfs-unixfs-importer/pull/48
 - Pinning performance improvements
 - Write UnixFSv1.5 blog post
 - Help Alan land async iterators?

@lidel
- Done:
  - subdomain gateways
    - docs-beta.ipfs.io: [docs: subdomain gateway](https://github.com/ipfs/ipfs-docs-v2/pull/61)
  - ipfs-webui:
    - Merged [feat: E2E test suite with puppeteer+ipfsd-ctl](https://github.com/ipfs-shipyard/ipfs-webui/pull/1353)
    - PR: [refactor: run all unit and e2e tests by default](https://github.com/ipfs-shipyard/ipfs-webui/pull/1373)
    - PR: [test: E2E tests against ipfs-webui HEAD](https://github.com/ipfs/js-ipfs/pull/2706/)
  - is-ipfs: [fixed CI and released v0.6.3](https://github.com/ipfs/is-ipfs/releases/tag/v0.6.3)
  - js-ipfsd-ctl: [improve usage docs](https://github.com/ipfs/js-ipfsd-ctl/pull/421)
  - awesome.ipfs.io
    - [fix: ensure all links work](https://github.com/ipfs/awesome-ipfs/pull/306)
    - [feat: faster build via npm ci](https://github.com/ipfs/awesome-ipfs/pull/305)
    - PR reviews   
- Blocked:
  - not blocked, but E2E at CI of js-ipfs taking more time than expected (found some bugs that I need to fix first)
- Next:
  - finish [test: E2E js-ipfs tests against ipfs-webui HEAD](https://github.com/ipfs/js-ipfs/pull/2706/)

