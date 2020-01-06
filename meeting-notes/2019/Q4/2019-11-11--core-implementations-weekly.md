# 🚀 IPFS Core Implementations Weekly Sync 🛰 Nov 11, 2019 

- **Lead:** @stebalien
- **Notetaker:** @volunteerPlease
- **Attendees:**
  - @alanshaw
  - @aschmahmann
  - @achingbrain
  - @stebalien
  - @pedromiguelss
  - @hugomrdias
  - @jacobheun
- **Recording:** https://www.youtube.com/watch?v=1NIwVrT0ECI

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

#### Upgraded Release Process
@stebalien / @achingbrain / @alanshaw

- js-ipfs 0.40.0-rc.0 released just now!
    - https://github.com/ipfs/js-ipfs/issues/2558

#### Upgrade Testing Infra/Process
@jimpick / @stebalien / @alanshaw / @daviddias

* Testground Hack Week happened
* Can now run 100-200 libp2p nodes per AWS instance
* Have a bunch of new people contributing test cases
* TODO
  * Network tuning (NAT, latency, bandwidth, IP assignment, etc.)
    * Status: WIP (steb)
  * Mixed networks (go-ipfs + js-ipfs, versions, etc.)
    * Status: not started
  * One-click (one command) test runs on AWS
    * Status: WIP?
  * GitHub integration for starting/scheduling test runs.
    * Status: not started
  * Dashboard: UX for viewing test results.
    * Status: WIP (jim)
  * Improved libp2p tracing.
    * Status: raul?

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- Support base32 encoded CID in IPNS paths (in js-ipfs 0.40)
    - https://github.com/ipfs/js-ipfs/pull/2566

#### Distributed Signaling (js-libp2p)
@jacobheun

- Still on hold pending async/await

#### IPNS (go-ipfs / js-ipfs)
@aschmahmann / @hugomrdias

IPNS-over-PubSub
  - [go-libp2p-pubsub-router#37](https://github.com/libp2p/go-libp2p-pubsub-router/pull/37) ready for review
    - Removes internal bootstrapping in favor of pubsub discovery
    - Breaking API changes (shouldn't effect anything other than IPNS, API breakage has been advertised on discuss.libp2p.io for months)
  - [go-ipfs#6758](https://github.com/ipfs/go-ipfs/pull/6758) on going
    - Uses the new router and updated pubsub in IPFS

Testground
  - Getting started with IPNS tests, need backup from the testground team

#### Add Performance (go-ipfs)
@aschmahmann

Seems like there's consensus on supporting asynchronous datastores [go-datastore#137](https://github.com/ipfs/go-datastore/issues/137)

@raulk indicated that there are areas in the codebase that probably need synchronous datastores, need to get a survey of what could actually break if we just switched to asynchronous datastores
  - Blocked by people being busy with testground
  - create "audit all uses of datastore" issue to specify whether need to be sync or async
  
Since upgrading to asynchronous datastores is a config file change, we should consider what the upgrade path for users using Badger will look like. This might be blocked on making our config file handling better.
  - badger is still esperimental - folks will change if they need to

#### Migration to multihash keys in blockstore (js-ipfs)
@alanshaw / @auhau

- Repo migration tool is merged and in 0.40
    - https://github.com/ipfs/js-ipfs/pull/2527
- @alanshaw reviewing repo multihash keys migration atm

#### Bitswap Updates
@dirkmc

Implemented [testground plan](https://github.com/ipfs/testground/pull/82) for Bitswap (multiple seeds / leeches)

#### js-ipfs/js-libp2p/js-ipld async await refactor
@achingbrain / @jacobheun / @vasco-santos / @alanshaw

- js-libp2p ([trello board](https://trello.com/b/ibz3Ub0a/js-libp2p-async-refactor))
  - Identify refactor is done, this also adds support for IdentifyPush to js-libp2p [js-libp2p#473](https://github.com/libp2p/js-libp2p/pull/473)
  - Circuit Relay refactor is in progress, should be finished this week.
  - Initial [PeerStore refactor](https://github.com/libp2p/js-libp2p/pull/470) and [Registrar](https://github.com/libp2p/js-libp2p/pull/471) additions have been added.
    - This should unblock pubsub
  - Pubsub, Floodsub and Gossipsub should get finished this week
  - Secio refactor is mostly finished, Jacob needs to review, and there are a couple of small blockers
    - @mkg20001's local benchmarks showed a pretty [significant improvement](https://github.com/libp2p/js-libp2p-secio/issues/96#issuecomment-551178753) in performance
    
- js-ipfs-http-api
    - @alanshaw Converted bitswap to async/await [ipfs/js-ipfs-http-client#1149](https://github.com/ipfs/js-ipfs-http-client/pull/1149)

- interop
    - @pedromiguelss completed https://github.com/ipfs/interop/pull/87
    - Next up: https://github.com/ipfs/interface-js-ipfs-core/pull/547

### Design Review Proposals
> You want to propose something for design review.

- HTTP API V1: https://github.com/ipfs/specs/pull/224
- UnixFSv1.5: https://github.com/ipfs/specs/pull/223
  - Tuesday 16:00UTC

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!
  
### Questions
> You have questions and need them answered. List them here.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

@adin:
- Any interest in porting pubsub router changes to js-libp2p?

@olizilla: bifrost things
- the gateway nodes started crashing over the weekend with `panic: concurrent write to websocket connection` on every node, every hour or so. Nothing changed from the infra side of things.
  - https://github.com/protocol/bifrost-infra/issues/372
    - Seems like https://github.com/ipfs/go-ipfs/issues/6197#issuecomment-552460523 
  - we've updated the nodes to a more recent commit on the go-ipfs/feat/stablize-dht branch which seems to not be suffering the same issue.
  

- 4 new boostrap nodes are provisioned and monitored and published under /dnsaddr/bootstrap.libp2p.io

@momack2: PSA for *focus*


### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟

@jacobheun
- Done:
  - finished Identify refactor and Identify Push addition [js-libp2p#473](https://github.com/libp2p/js-libp2p/pull/473)
  - Started work on Circuit Relay refactor
  - Opened PR to change PeerId isEqual to equals [js-peer-id#107](https://github.com/libp2p/js-peer-id/pull/107) (non breaking change)
  - Fix an issue with CIDS as PeerId strings [js-multiaddr#103](https://github.com/multiformats/js-multiaddr/pull/103)
- Next:
  - Finish Circuit Relay refactor
  - Work on Peer Discovery refactors
  - Review Secio and help remote any blockers

@dirkmc
- Done:
  - Implemented [testground plan](https://github.com/ipfs/testground/pull/82) for Bitswap (multiple seeds / leeches)
- Next:
  - More testing

@achingbrain
- Done:
  - Added DAG resource to https://github.com/ipfs/specs/pull/224
  - Helped @pedrosantos get https://github.com/ipfs/interop/pull/87 across the line
- Blocked:
- Next:
  - Get testground working in JS: https://github.com/ipfs/testground/issues/137 

@alanshaw
- Done:
  - libp2p bundle function now gets default options passed to it to save re-creating from scratch [ipfs/js-ipfs#2591](https://github.com/ipfs/js-ipfs/pull/2591)
  - Converted bitswap to async/await [ipfs/js-ipfs-http-client#1149](https://github.com/ipfs/js-ipfs-http-client/pull/1149)
  - Moved files API methods to the root [ipfs/js-ipfs-http-client#1150](https://github.com/ipfs/js-ipfs-http-client/pull/1150)
  - Wrote spec for multiaddr `dnsaddr` proto [multiformats/multiaddr#102](https://github.com/multiformats/multiaddr/pull/102)
  - Released js-ipfs `0.40.0-rc.0` [ipfs/js-ipfs#2558](https://github.com/ipfs/js-ipfs/issues/2558)
- Blocked:
  - Need proper review on [ipfs/js-ipfs#2547](https://github.com/ipfs/js-ipfs/pull/2547) 🙏 - blocking progress on async/await in js-ipfs now
- Next:
  - Finish off "unite the files API" proposal
  - Review repo migration PRs, investigate multihashes in DHT provider records


@pedromiguelss
- Done:
	- Started to improved output of `repo.stat()`
		- https://github.com/ipfs/js-ipfs/pull/2592
		- https://github.com/ipfs/js-ipfs-http-client/pull/1148
		- https://github.com/ipfs/js-ipfs-repo/pull/213
		- https://github.com/ipfs/interface-js-ipfs-core/pull/554
	- Merged interop
		- https://github.com/ipfs/interop/pull/87
- Blocked: N/A
- Next:
 - Merge `interface-core` async/await refactor
   - https://github.com/ipfs/interface-js-ipfs-core/pull/547
 - Finish adding `—human` flag to `repo.stat`
 - Add `—human` flag to `bitswap.stat`
	- https://github.com/ipfs/js-ipfs/issues/1996
	- https://github.com/ipfs/js-ipfs/issues/2057

@hugomrdias
- Done: 
  - Finished all the changes to ipfsd-ctl https://github.com/ipfs/js-ipfsd-ctl/pull/395
  - Helped Pedro Santos onboarding the ipfs dev workflow
- Next:
  - Finish the missing test for the new version of ipfsd-ctl
  - Ship all the supporting PR for the next ctl release


@lidel
- Done:
  - ipfs-companion: [fix: restore ESR compatibility ](https://github.com/ipfs-shipyard/ipfs-companion/pull/812)
  - distributed-wikipedia-mirror: [plan to switch to zimdump from zim-tools](https://github.com/ipfs/distributed-wikipedia-mirror/issues/66)
  - ipfs-provider: [feat: lazy load js-ipfs-http-client](https://github.com/ipfs-shipyard/ipfs-provider/pull/8)
  - 2020 Theme Proposal: [Wikipedia Mirror: Improving Access to World’s Knowledge](https://github.com/ipfs/roadmap/issues/46)
  - cidv1b32
    - interface-js-ipfs-core: [feat: test ipns resolve of peerid as cid](https://github.com/ipfs/interface-js-ipfs-core/pull/553)
        - js-ipfs-http-client: [feat: support name.resolve of peerid as cid](https://github.com/ipfs/js-ipfs-http-client/pull/1145)
    - js-ipfs: draft of [refactor: switch to async peer-id](https://github.com/ipfs/js-ipfs/pull/2588)
  - docs.ipfs.io
    - [added HTTP API Status Codes](https://github.com/ipfs/docs/pull/368)
    - [updated http-api-docs generator](https://github.com/ipfs/http-api-docs/pull/23)
  - Reviewed / Other
    - interface-js-ipfs-core draft: [FILESv2.md](https://github.com/ipfs/interface-js-ipfs-core/blob/feat/unite-the-files-apis/SPEC/FILESv2.md)
    - ipfs/specs draft: [docs: add files resource v1 spec #224 ](https://github.com/ipfs/specs/pull/224)
        - see also: [RPC over REST](https://github.com/ipfs/specs/issues/225)
    - js-ipfs: [extending libp2p config instead of overriding it](https://github.com/ipfs/js-ipfs/issues/2579#issuecomment-550328976)
        - [feat: pass libp2pOptions to the bundle function](https://github.com/ipfs/js-ipfs/pull/2591)
    - js-multiaddr: [fix: ensure b58 can decode hash](https://github.com/multiformats/js-multiaddr/pull/103)
    - ipfs-companion: [feat: upload files to MFS](https://github.com/ipfs-shipyard/ipfs-companion/pull/810/files)
- Next:
  - webui test matrix  🤞
  - ipfs-companion release compatible with fennec-based Firefox for android & ESR


@name
- Done:
  - What have you accomplished since the last Weekly?
- Blocked:
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
- Next:
  - What is the next important thing you should focus on
