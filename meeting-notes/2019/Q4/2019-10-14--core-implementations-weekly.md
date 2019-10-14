# 🚀 IPFS Core Implementations Weekly Sync 🛰 Oct 14, 2019

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @jacobheun
  - @vasco-santos
  - @pedromiguelss
  - @achingbrain
- **Recording:** https://youtu.be/iNIQnlpZfew

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

### Initiatives
> Update or add info on initiatives that are happening

#### Upgrade Release Process
@stebalien / @achingbrain

- js-IPFS added automated tests for examples
  - Runs on every push to a release branch. Might add this to PRs in the future
  - https://github.com/ipfs/js-ipfs/pull/2536
- 0.38.0-rc0 published
  - Need to run tests for external repos (early testers and other dependents)
    - Will be able to run tests against branches of external repos
- Some fixes to block rm required
  - https://github.com/ipfs/js-ipfs/pull/2531
  - Blocked by: https://github.com/daviddias/pull-ndjson/pull/3
- Is the release process too short? [js-ipfs#2525](https://github.com/ipfs/js-ipfs/issues/2525)

#### Upgrade Testing Infra/Process
@jimpick / @stebalien / @alanshaw / @daviddias

- No update

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- No update. Will pick this up when I clear my plate. If someone wants to work on this it should be fairly simple.
  - https://github.com/libp2p/specs/issues/216

#### Distributed Signaling (js-libp2p)
@jacobheun

- Still on hold pending async/await refactor

#### IPNS (go-ipfs / js-ipfs)
@aschmahmann / @hugomrdias

- No update

#### Migration to multihash keys in blockstore (js-ipfs)
@alanshaw / @auhau

- Repo migration tool is almost merged
- If we use multihash keys we lose ipld codecs, need to solve this
    - Please comment: https://github.com/ipfs/js-ipfs/pull/2522

#### IPFS Mount
@djdv

- No update

#### Bitswap Updates
@dirkmc

- [Proof of concept](https://github.com/ipfs/go-bitswap/pull/189) transfers are fast and consistent, but it's sending duplicate data. Working on resolving this.
  - Need to get testing infrastructure setup to better model the live network (current test environment is low latency)

#### js-ipfs/js-libp2p/js-ipld async await refactor
@achingbrain / @jacobheun / @vasco-santos

- js-libp2p [trello board](https://trello.com/b/ibz3Ub0a/js-libp2p-async-refactor)
  - No new releases from last week
  - Pubsub refactor is in progress
  - The Dialer/Upgrader refactor should be done this week
  - Working through some issues refactoring websocket-star
  - There are some issues with libp2p-utp dependencies, we are punting that until the rest of the refactor is done
- js-ipfs
  - interface-core tests setup refactored and is now using async/await pending PR merge
    - https://github.com/ipfs/js-ipfsd-ctl/pull/395
    - https://github.com/ipfs/interface-js-ipfs-core/pull/541
    - https://github.com/ipfs/js-ipfs-http-client/pull/1127
    - https://github.com/ipfs/js-ipfs/pull/2529
  - move interop repo to ipfsd-ctl async/await by @pedromiguelss
    - https://github.com/ipfs/interop/pull/86
  - `js-ipfs-http-response` refactored
    - https://github.com/ipfs/js-ipfs-http-response/pull/29
    - https://github.com/ipfs/js-ipfs-http-response/pull/28
  - `interface-js-ipfs-core` docs examples converted already
    - https://github.com/ipfs/interface-js-ipfs-core/pull/542
  - Remaining files API moved to async iterators
    - https://github.com/ipfs/js-ipfs/pull/2517

### Design Review Proposals
> You want to propose something for design review.

- This week:
  - @lidel: [exploring "lazy" website cohosting](https://github.com/ipfs-shipyard/cohosting/issues/6)
- Last week:
  - [Experimental SPEC for MFS-based cohosting](https://github.com/ipfs-shipyard/cohosting) is looking for feedback. It is an exploration around simple tools and conventions for cohosting existing websites with IPFS
  - unixfsv1.5: @stebalien is still the DRI for writing this up.

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

- @daviddias https://github.com/daviddias/pull-ndjson/pull/3

### Questions
> You have questions and need them answered. List them here.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

@alanshaw - Help me test this side project thing! It's in celebration of gossipsub being released in JS IPFS. Install it and lets chat!
- https://github.com/alanshaw/chatterbox-webext

### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟
  
@jacobheun:
- Done:
  - Fixed private network docs/examples from the libp2p repo consolidation effort [js-libp2p#464](https://github.com/libp2p/js-libp2p/pull/464)
  - Continued work on the libp2p Dialer/Upgrader refactor [js-libp2p#462](https://github.com/libp2p/js-libp2p/pull/462)
- Blocked:
- Next:
  - Fix issues with websocket-star async refactor
  - Finish the libp2p dialer/upgrader PR [js-libp2p#462](https://github.com/libp2p/js-libp2p/pull/462)
  - Refactor privatized connections and add async /plaintext/2.0.0 insecure crypto  

@vasco-santos
- Done:
  - `libp2p-utp` migration PR new iteration
    - [libp2p/js-libp2p-utp#81](https://github.com/libp2p/js-libp2p-utp/pull/81)
    - There are issues with connection closing. We will probably need to work on the library we are using (`utp-native`), to get it working
    - We will leave this in standby for now, as we don't think that anyone is currently using it, and focus on the remaining migration work.
  - Proposal for pubsub subsystem refactor
    - [gist.github.com/vasco-santos/2c39ab16d15a87c573bef4f916472831](https://gist.github.com/vasco-santos/2c39ab16d15a87c573bef4f916472831)
    - Removed dialing layer from subsystems (for DHT, Pubsub, ...)
  - Updated `js-libp2p-pubsub` with the new proposal
     - [libp2p/js-libp2p-pubsub#26](https://github.com/libp2p/js-libp2p-pubsub/pull/26)
  - Started working on `js-libp2p-floodsub` PR new iteration to use the new proposal and also its integration on `js-libp2p`
    - [libp2p/js-libp2p-floodsub#88](https://github.com/libp2p/js-libp2p-floodsub/pull/88) 
  - Released `js-ipfs-http-response` with async migration PR
- Blocked: N/A
- Next:
  - Get `js-libp2p-websockets-star` PR merged
  - Pubsub subsystem refactor
    - Get [libp2p/js-libp2p-pubsub#26](https://github.com/libp2p/js-libp2p-pubsub/pull/26) finished
    - Get [libp2p/js-libp2p-floodsub#88](https://github.com/libp2p/js-libp2p-floodsub/pull/88) finished
    - PR `js-libp2p` async branch with refactored Pubsub
    - Create `gossipsub` migration PR
  - IPFS Help desk in Diffusion developers conference in Berlin
      - [diffusion.events](https://diffusion.events/)
      
@pedromiguelss
- Done:
	- Converted `js-ipfs-http-response` to use async/await - [PR merged](https://github.com/ipfs/js-ipfs-http-response/pull/28)
	- Debugging to understand why tests on browser were not running
		- most of the tests are now running and green
		- some of them are still red - found out that this was a problem related to the `multiaddr` version that `ipfsd-ctl` uses - @hugomrdias is helping me out on this
	- Created [`p-try-each` module](https://www.npmjs.com/package/p-try-each)
	- Coverted `interface-js-ipfs-core` docs examples to use async/await - [PR here](https://github.com/ipfs/interface-js-ipfs-core/pull/542)
	- Updated `js-ipfs-http-response` README.md file to use async/await syntax - [PR here](https://github.com/ipfs/js-ipfs-http-response/pull/29)
- Blocked: N/A
- Next:
	- Convert `interface-ipfs-core` tests to use async await
		- https://github.com/ipfs/interface-js-ipfs-core/issues/526
	- Add `—human` flag to `bitswap.stat` and `repo.stat`
		- https://github.com/ipfs/js-ipfs/issues/1996
		- https://github.com/ipfs/js-ipfs/issues/2057

@dirkmc
- Next:
  - Improving efficiency of bitswap proof-of-concept (reducing duplicate blocks)



@lidel

Done:
- Released new Companion Beta: [v2.8.6.840](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.6.840)
- most of time this week: debugging [Brave regression in embedded /api/v0/add](https://github.com/ipfs-shipyard/ipfs-companion/issues/757)
    - fixed `/api/v0/add` and other streaming API endpoints, but the fix broke streaming responses from embedded HTTP gateway in Brave, so still wip
- Reviews
    - Companion and WebUI PRs
    - [blog post on IPFS in Web Browsers](https://github.com/ipfs/blog/pull/311)
    - [lazy/full cohosting spec](https://github.com/ipfs-shipyard/cohosting/pull/7)
    - [cohosting.sh](https://github.com/ipfs-shipyard/cohosting/pull/3/)
    - [getzim.sh for distributed-wikipedia-mirror](https://github.com/ipfs/distributed-wikipedia-mirror/pull/40)
- ipfs-companion: 
    - [fix: avoid internal requests for action icons](https://github.com/ipfs-shipyard/ipfs-companion/pull/788)
    - Notes on [enabling WebRTC transport in Browser](https://github.com/ipfs/in-web-browsers/issues/153)
    - [Install issue in Firefox ESR](https://github.com/ipfs-shipyard/ipfs-companion/issues/784)
    - Created a [plan to evaluate alternative datastore for embedded js-ipfs in Brave](https://github.com/ipfs-shipyard/ipfs-companion/issues/786)
- [Exploring "lazy" website cohosting](https://github.com/ipfs-shipyard/cohosting/issues/6)
- [2019-10-09--gui-and-in-web-browsers-weekly](https://github.com/ipfs/team-mgmt/pull/1045)

Next:
- Some of Brave work is blocked, waiting for  [/api/v0/add fix](https://github.com/ipfs-shipyard/ipfs-companion/issues/757), need to solve it first, then relese new beta
- Look into WebUI Test Matrix


@hugomrdias  

Done:
  - [https://github.com/ipld/js-ipld/pull/238](https://github.com/ipld/js-ipld/pull/238) feat: add support for batch puts #238
  - [https://github.com/ipfs/js-ipfs-unixfs-importer/pull/38](https://github.com/ipfs/js-ipfs-unixfs-importer/pull/38) add support for batch puts #38
  - Release aegir to remove electron from the default test target, electron-renderer breaks to many repos
  - [https://github.com/ipfs/js-ipfsd-ctl/pull/393](https://github.com/ipfs/js-ipfsd-ctl/pull/393) fix: revert multiaddr #393
  - [https://github.com/ipfs/js-ipfsd-ctl/pull/395](https://github.com/ipfs/js-ipfsd-ctl/pull/395) feat: add interface-core tests setup #395
  - [https://github.com/ipfs/interface-js-ipfs-core/pull/541](https://github.com/ipfs/interface-js-ipfs-core/pull/541) feat: add support for a simpler and async test setup #541
  - [https://github.com/ipfs/js-ipfs-http-client/pull/1127](https://github.com/ipfs/js-ipfs-http-client/pull/1127) fix: use new ipfsd-ctl setup #1127
  - [https://github.com/ipfs/js-ipfs/pull/2529](https://github.com/ipfs/js-ipfs/pull/2529) feat: support the new interface core tests setup #2529
  - Debugging session with lidel and Jacob about interop circuit relay browser tests to unblock [https://github.com/ipfs/interop/pull/86](https://github.com/ipfs/interop/pull/86)
  - [https://github.com/ipfs/js-ipfsd-ctl/pull/396](https://github.com/ipfs/js-ipfsd-ctl/pull/396) fix: support more ipfs options #396
  - Release ipfsd-ctl
  
  @hacdias
  Done:
    - `ipfs-webui`
      - improved rendering of peers maps [#1247](https://github.com/ipfs-shipyard/ipfs-webui/pull/1247)
      - removed the peer location cache because peers can move from place to place [#1244](https://github.com/ipfs-shipyard/ipfs-webui/pull/1244)
  - `ipfs-desktop`: fix bug where we were installing `npm-ipfs` by default without the consent of the user [#1195](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1195)
  - Cohosting SPEC: discussing how to separate 'lazy' from 'full' cohosting [#6](https://github.com/ipfs-shipyard/cohosting/issues/6), [#7](https://github.com/ipfs-shipyard/cohosting/pull/7)
