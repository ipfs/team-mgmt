# 🚀 IPFS Core Implementations Weekly Sync 🛰 Jan 27, 2020

- **Lead:** @stebalien
- **Notetaker:** @jacobheun
- **Attendees:**
  - @alanshaw
  - @hugomrdias
  - @lidel
  - @hsanjuan
  - @hacdias
  - @ribasushi
  - @momack2
  - @johnnymatthews
  - @nonsense
  - @achingbrain
- **Recording:** https://youtu.be/fS0JjLBg54M 

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

- js-ipfs-http-client `42.0.0-pre.0` RELEASED 🚢
  - It smaller!
  - <img src="https://user-images.githubusercontent.com/152863/73194114-92285900-4123-11ea-9903-f6ed12a57ab2.png" width="100%">
  
- js-ipfs `0.41` COMING SOON! 🛫
  - Highlights: async/await & UnixFS v1.5
  - Check out the API changes in the release issue:
    - https://github.com/ipfs/js-ipfs/issues/2656
  - Migration guide:
    - https://gist.github.com/alanshaw/04b2ddc35a6fff25c040c011ac6acf26
  - It faster!
  - <img src="https://user-images.githubusercontent.com/152863/73194116-93f21c80-4123-11ea-9e75-0435c70f2513.png" width="100%" />
  - This is one run of the IPFS interop tests after (left) and before (right) the async/await refactor. These tests spin up 2 nodes and transfer one file between them of varying size.
  
- js-libp2p `0.27` COMING TOMORROW! 🛫
  - https://github.com/libp2p/js-libp2p/issues/487

- go-ipfs `0.4.23` COMING TODAY (probably)! 🚢
  - blog post preview: https://bafybeignslkl26pfv7fc2fw3ac6lursoneuxuohezxrtf3xkmig7v2mv24.ipfs.dweb.link/2020-01-27-go-ipfs-0-4-23/
  - Review it here: https://github.com/ipfs/blog/pull/353

#### Upgrade Testing Infra/Process
@stebalien / @daviddias / @nonsense / @raulk

- 500 node DHT test working reliably.
  - 500-1000 nodes but the DHT test plan won't work with more than 500.
  - The remaining problems look like they may be related to the test but need more investigation.
- Work on testing multiple versions underway.
  - https://github.com/ipfs/testground/pull/400
- Work on persisting assets under way
  - https://github.com/ipfs/testground/pull/409

#### Content Routing
@stebalien / @raulk / @dirkmc / @aschmahmann / @jacobheun

- All high level (Epic / Feature set) issues have been created
- We will finish breaking down the work and estimating this week
  - We will be finalizing the timeline based on these
  - Issues will be created for each of the sub tasks if they don't already exist and associated to their parent issues.
- Content routing plan has seen many updates: https://docs.google.com/document/d/1obd3QHL5QLAUHqi8oxtOl0EYs9bAuPVwz5SWQ53rSvI/edit#
- Kademlia query logic PR has tests passing
  - We need to run this against Testground
- We have noticed spliting of the network (disjointed networks)  
  - Need to work out a plan on how to test and resolve this issue
  

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- go-ipfs: [subdomain gateway feature](https://github.com/ipfs/go-ipfs/pull/6096) mostly implemented, remaining work: config cleanup, tests, docs and bugfixes
  - A version will be implemented for js-ipfs in the near future

#### Bitswap Updates
@dirkmc
- Running test suites against bitswap master vs [proof-of-concept](https://github.com/ipfs/go-bitswap/pull/189)
  - Spoiler: More seeds makes things speed up now!

#### js-ipfs/js-libp2p/js-ipld async await refactor
@achingbrain / @jacobheun / @vasco-santos / @alanshaw

- js-libp2p
  - Releasing tomorrow (v0.27), January 28th! 🚀
  
- js-ipfs
  - async/await PRs merged

- Lets remove this initiative! \o/

#### Stream Content-Based-Chunking Research/Improvements (go-ipfs / js-ipfs)
@ribasushi

- Failed to get a preliminary version of the chunker-tester published/demoed today :( Ironing out the last few off-by-ones / mismatches with go-ipfs. *REALLY* should have it all done by tomorrow morning.
  - It's a cli tool that reads from stdin, the work hasn't been pushed yet. Will be pushed later today.

### Other Initiatives

This is the backlog of initiatives that are either on-hold or low-priority.

#### UnixFS v1.5 (go-ipfs / js-ipfs)
@achingbrain / @ribasushi

#### Add Performance (go-ipfs / js-ipfs)
@aschmahmann / @achingbrain

#### Distributed Signaling (js-libp2p)
@jacobheun

- Flushing out the js-libp2p roadmap for this year and will assess the priority of this against other initiatives. After initial discussion this still seems to be high on the priority list.

#### Migration to multihash keys in blockstore (js-ipfs / go-ipfs)
@alanshaw / @auhau

- from @stebalien to @hsanjuan: will you likely have time to tackle this in the near future?
  - https://github.com/ipfs/go-ipfs/issues/6815

### Design Review Proposals
> You want to propose something for design review.

- tsize field of DAG links: it's unreliable and a vector for attacks
  - https://github.com/ipld/specs/pull/234
  - Let's coordinate a call to have a discussion about this.
    - @achingbrain to coordinate a call. Interested people:
      - @stebalien
      - @achingbrain
      - @ribasushi 
      - @alanshaw


- raw leaves by default:
  - https://github.com/ipfs/js-ipfs-unixfs-importer/pull/50
  - Interested:
    - @stebalien
    - @alanshaw

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

### Questions
> You have questions and need them answered. List them here.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟 

@name
- Done:
  - What have you accomplished since the last Weekly?
- Blocked:
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
- Next:
  - What is the next important thing you should focus on.

@hacdias
- Done:
  - Uni exams!
  - Fixed bug where users can't toggle 'launch on login' on IPFS Desktop [(PR)](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1334)
  - Released [dnslink-cloudflare@2.0.4](https://github.com/ipfs-shipyard/dnslink-cloudflare/compare/v2.0.3...v2.0.4) with some awesome fixes!
  - Release [ipfs-deploy@7.14](https://github.com/ipfs-shipyard/ipfs-deploy/compare/v7.13.0...v7.14.0)
- Blocked:
- Next:
  - Catchup on Testground

@dirkmc
- Done:
  - Fixed [an issue](https://github.com/ipfs/go-bitswap/pull/239) with Bitswap shutdown
  - Run several testground bitswap tests [within a single test plan](https://github.com/ipfs/testground/pull/345)
- Next:
  - Create test suites to compare several variables between bitswap master and proof-of-concept
  
@jacobheun
- Done:
  - js-libp2p async refactor
    - Fixed an issue with using base32 and b58 inconsitently [js-libp2p#537](https://github.com/libp2p/js-libp2p/pull/537)
    - Improve ux of webrtc-star listening addresses [js-libp2p-webrtc-star#194](https://github.com/libp2p/js-libp2p-webrtc-star/pull/194)
    - Released an [official RC](v0.27.0-rc.0) for 0.27!
  - Content Routing
    - Started work on the [project roadmap](https://app.zenhub.com/workspaces/content-routing-2020-5e29be25ab9d8da0b032cfcc/roadmap) for go-ipfs v0.5 release
- Next:
  - Release js-libp2p refactor tomorrow (Tuesday)!
  - Work on 2020 roadmap for js-libp2p
  - Finalize dates and estimates for Content Routing work
  
@alanshaw
- Done:
  - Updated interop tests to use new js-ipfs APIs
    - https://github.com/ipfs/interop/pull/96
  - Merged async/await branches into js-ipfs, js-ipfs-http-client and interface-js-ipfs-core
  - js-ipfs-http-client pre-release `42.0.0-pre.0`
    - https://github.com/ipfs/js-ipfs-http-client/releases/tag/v42.0.0-pre.0
  - Wrote release notes for go-ipfs 0.4.23
    - https://github.com/ipfs/blog/pull/353
- Next:
  - Blog post for async/await
  - Finish release notes for js-ipfs 0.41
  - Release candidate for js-ipfs 0.41


@aschmahmann
- Done:
  - WIP [Kademlia query logic improvements](https://github.com/libp2p/go-libp2p-kad-dht/pull/436)
    - Passes golang tests
  - Worked with testground locally (~50 docker containers) on the DHT find-peers test plan
    - Discovered issues when using multiple bootstrappers
       - TCP simultaneous connect issue resolved
       - Very easy to cause disjoint networks with small k values (required for small number of simulated nodes to make sense)
    - Connection Manager trimming can cause disjointed networks...😥
    - Can create static connection graphs during the test
- Blocked:
  - N/A
- Next:
  - Test with larger networks on Kubernetes and modify the test plan to see if we can test the query logic on many nodes without dealing with connection manager issues
  - Update DHT plan to emit events and connection graphs on Kubernetes
  - Get discussions moving on Connection Manager trimming options and priority ordering
     - Change which connections we keep vs trim
     - Allow dissociating peer connection state from routing table state
     - Require QUIC/UDP + to allow much larger numbers of connections, etc.
     - your idea here 😀
  
@hugomrdias
- Done:
    - release connect-deps [https://github.com/hugomrdias/connect-deps/releases/tag/v0.2.0](https://github.com/hugomrdias/connect-deps/releases/tag/v0.2.0)
    - improve ipfsd-ctl docs for `Factory.spawn`
    - rewrite js-ipfs-http-client examples [https://github.com/ipfs/js-ipfs-http-client/pull/1222](https://github.com/ipfs/js-ipfs-http-client/pull/1222)
    - react-native research and development with 3box
    - js-ipfs cli tests rewrite
- Next:
    - Quarter planning with new working groups
    - Continue js-ipfs cli tests rewrite

@lidel
- Done:
  - subdomain gateways 
    - go-ipfs: working on [subdomain gateway feature](https://github.com/ipfs/go-ipfs/pull/6096)
    - in-web-browsers: initial notes on using [Clear-Site-Data when loaded via path gateway](https://github.com/ipfs/in-web-browsers/issues/157)
  - distributed-wikipedia-mirror
    - wip PR: [fix: TR snapshot generation scripts and docs](https://github.com/ipfs/distributed-wikipedia-mirror/pull/67)
  - go-ipfs 0.4.23
    - QA for [RC releases](https://github.com/ipfs/go-ipfs/issues/6837) (companion, webui, desktop)
    - [backported latest webui](https://github.com/ipfs/go-ipfs/pull/6844)
    - ipfs-desktop: [switch to 0.4.23](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1329)
- Next:
  - continue work on subdomain gateways ( [subdomain gateway feature](https://github.com/ipfs/go-ipfs/pull/6096))


@achingbrain
- Done:
  - Update js-IPFS examples to new api https://github.com/ipfs/js-ipfs/pull/2729
  - Return peer ids as strings and multiaddrs as multiaddrs
    - https://github.com/ipfs/interface-js-ipfs-core/pull/581
    - 
  - Upgrade http client
    - https://github.com/libp2p/js-libp2p-delegated-peer-routing/pull/16
    - https://github.com/libp2p/js-libp2p-delegated-content-routing/pull/22
  - Make `npm install` 300MB smaller and CI faster https://github.com/ipfs/js-ipfsd-ctl/pull/446
  - Make unhandled promise rejections fail tests https://github.com/ipfs/aegir/pull/507
- Blocked:
  - N/a
- Next:
  - Finish IPFS tests
  - Get build green
  - Merge mfs into js-IPFS
  - Pinning improvements
  - Refactor unixfs-importer to use the blockstore directly



@hsanjuan
- Done
  - Keep two legs intacts in ski vacation last week
  - Email/Github Housekeeping, reconfigure all filters and notifications, prepare to non-cluster-focused role. Will now receive and read all Go things at least
  - Sizeable amount of time spent on answering users on discuss etc.
 - Blocked
   - n/a
- Next:
  - Start taking ownership of small issues in Go-land
  - Start handling go-ipfs community and users
  - Start discussions and help setting direction to the DevExp interest group
  
@Stebalien
- Done:
  - go-ipfs 0.4.23 validation/testing
  - paired with adin on DHT fixes
  - continued to improve the content routing plan with raul
  - improved k8s ip assignment in testground: https://github.com/ipfs/testground/pull/397
  - refactored testground status handling: https://github.com/ipfs/testground/pull/406
  - started work on storing assets/results in testground: https://github.com/ipfs/testground/issues/377
  - reviews, unblocking, etc.
- Next:
  - ship go-ipfs 0.4.23
  - review cid subdomain work
  - continue to review bitswap patch (getting more critical as we've made significant progress testing it)
  - continue to refine content routing plan
