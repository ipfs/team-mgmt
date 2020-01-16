# 🚀 IPFS Core Implementations Weekly Sync 🛰 Oct 28, 2019

- **Lead:** @alanshaw
- **Notetaker:** @jimpick
- **Attendees:**
  - @jacobheun
  - @pedromiguelss
  - @dirkmc
  - @vasco-santos
  - @aschmahmann
- **Recording:** https://youtu.be/jt4idJ3o-aQ

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
@stebalien / @achingbrain

- js-ipfs 0.39 released 🥳
    - https://blog.ipfs.io/071-js-ipfs-0-39/
    - Kudos @achingbrain \o/
- js-ipfs 0.40 release issue created
    - https://github.com/ipfs/js-ipfs/issues/2558

#### Upgrade Testing Infra/Process
@jimpick / @stebalien / @alanshaw / @daviddias

- Dirk jumping in as "first customer" to start testing bitswap improvements more granularly
- Jim working on Ansible scripting
- David working on planning
- In-person hack week next week
- Roadmap: https://github.com/ipfs/testground/pull/75

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- [cid.ipfs.io](https://cid.ipfs.io): [fix: add support for libp2p-key multicodec](https://github.com/multiformats/cid-utils-website/pull/14)
  - demo: https://cid.ipfs.io/#bafzbeigweq4zr4x4ky2dvv7nanbkw6egutvrrvzw6g3h2rftp7gidyhtt4
- [PeerID as CID](https://github.com/libp2p/specs/issues/216) wip in JS land:
    - js-peer-id: [feat: support Peer ID represented as CID](https://github.com/libp2p/js-peer-id/pull/105)
    - js-multiaddr: [feat: multiaddr support Peer ID represented as CID](https://github.com/multiformats/js-multiaddr/pull/102)
    - js-ipfs: (draft with discussion on next steps) [feat: js-ipfs support of CIDs in /ipns/ content paths](https://github.com/ipfs/js-ipfs/pull/2566)

#### Distributed Signaling (js-libp2p)
@jacobheun

- Still on hold pending async/await

#### IPNS (go-ipfs / js-ipfs)
@aschmahmann / @hugomrdias

- pubsub fixes getting ready to merge

#### Add Performance (go-ipfs)
@aschmahmann

- Lots of testing on ipfs add performance https://github.com/ipfs/go-ipfs/issues/6523
     - TLDR: Add is really slow on Linux+ext4, fast on Windows+NTFS. Trying to figure out next steps. Is this a badger problem, ext4 problem, our problem?

#### Migration to multihash keys in blockstore (js-ipfs)
@alanshaw / @auhau

- new migrator tools for IPFS in browser
- next step, included in js-ipfs for repo migrations

#### IPFS Mount
@djdv

- Demo of basic write support: https://www.youtube.com/watch?v=OX0vM0Ay9Z0

#### Bitswap Updates
@dirkmc
- [PR](https://github.com/ipfs/go-bitswap/pull/212) to improve Bitswap read performance in a gateway environment
- Ready to start code review for [Bitswap proof-of-concept](https://github.com/ipfs/go-bitswap/pull/189) changes
 - Start with the engine as that's the least likely to change
- Would like to get feedback for designing testground scenarios

#### js-ipfs/js-libp2p/js-ipld async await refactor
@achingbrain / @jacobheun / @vasco-santos / @alanshaw

- js-libp2p
  - internal crypto refactor should be done this week
    - https://github.com/libp2p/js-libp2p/pull/469
  - Will start on peer discovery and circuit relay refactors
  - Pubsub refactor is in progress, several open PRs
    - https://github.com/libp2p/js-libp2p-pubsub/pull/26
    - https://github.com/libp2p/js-libp2p-floodsub/pull/88
    - https://github.com/ChainSafe/gossipsub-js/pull/49
    - https://github.com/libp2p/js-libp2p/pull/467

### Design Review Proposals
> You want to propose something for design review.

- This week:
  - Alan: Hoping to write RFC for uniting files APIs for next week

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

@alanshaw ask: Please take a look at:
  - Maximising results from JS Core 2019 roadmap
    - https://github.com/ipfs/js-core/issues/5
    - <img src="https://user-images.githubusercontent.com/152863/67488305-7f574180-f667-11e9-8e0a-d5b72d967fd9.png" width="100%" />

@stebalien ask: review unixfs v1.5 spec
  - specifically: https://github.com/ipfs/specs/pull/223#discussion_r338774531
  - @alanshaw? @achingbrain
  
### Questions
> You have questions and need them answered. List them here.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

- Adin: Non-dialable nodes won't join the DHT - might break offline use cases
  - possible solution - offline/local DHT or pubsub
  - [go-ipfs#6737](https://github.com/ipfs/go-ipfs/issues/6737)

### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟

@dirkmc
- Done:
  - Experimented with some ideas for improving Bitswap performance in a gateway environment. Opened a [PR with the best solution found](https://github.com/ipfs/go-bitswap/pull/212).
  - Created an [Issue to discuss](https://github.com/ipfs/testground/issues/79) benchmarking Bitswap with testground
  - Created a [PR for a test plan](https://github.com/ipfs/testground/pull/82)
- Next:
  - Get testground Bitswap test plans running
  - Start code reviews for [Bitswap proof-of-concept](https://github.com/ipfs/go-bitswap/pull/189) changes

@jacobheun
- Done:
  - Started crypto and pnet refactor in libp2p [js-libp2p#469](https://github.com/libp2p/js-libp2p/pull/469)
    - Includes the new plaintext 2 protocol
- Next:
  - Finish crypto/pnet refactor
    - Support the secio refactor
  - Refactor peer discovery and circuit relay  
   
@alanshaw
- Done:
  - Reviewed feedback PR for new repo migrations
      - Thanks @AuHau! https://github.com/ipfs/js-ipfs-repo-migrations/pull/3
  - Late reflection and planning "Maximising results from JS Core 2019 roadmap"
      - https://github.com/ipfs/js-core/issues/5
  - Initiated convo to get `ipld-zcash` fixed (it has security vuln for over 1 year)
      - Thanks @rvagg! https://github.com/ipld/js-ipld-zcash/pull/46
  - Reviewed Peer ID with `libp2p-key` codec PR
      - Thanks @lidel! https://github.com/libp2p/js-peer-id/pull/105
- Next:
  - Land repo migrations
  - RFC for a united files API, aiming to get consensus
      - See https://github.com/ipfs/specs/issues/98
      
@pedromiguelss
- Done:
	- Merged first interop PR
		- https://github.com/ipfs/interop/pull/86
	- Finished `interface-ipfs-core` tests conversion to async await - PR soon
	- Code review changes:
		- https://github.com/ipfs/interop/pull/87
		- https://github.com/ipfs/interface-js-ipfs-core/pull/542
- Blocked:
  - N/A
- Next:
	- Merge second interop PR
		- https://github.com/ipfs/interop/pull/87
	- Merge `interface-ipfs-core` docs conversion to async await PR
		- https://github.com/ipfs/interface-js-ipfs-core/pull/542
	- Add `—human` flag to `bitswap.stat` and `repo.stat`
		- https://github.com/ipfs/js-ipfs/issues/1996
		- https://github.com/ipfs/js-ipfs/issues/2057

@vasco-santos
- Done:
  - 2 days OOO
  - Pubsub subsystem refactor
    - `js-libp2p-pubsub` review addressed
      - [libp2p/js-libp2p-pubsub#26](https://github.com/libp2p/js-libp2p-pubsub/pull/26)
    - `js-libp2p-floodsub` review addressed
      - [libp2p/js-libp2p-floodsub#88](https://github.com/libp2p/js-libp2p-floodsub/pull/88)
    - Pubsub integration in `js-libp2p`
      - [libp2p/js-libp2p#467](https://github.com/libp2p/js-libp2p/pull/467)
- Blocked: N/A
- Next:
  - Finish pubsub refactor
  - Work on DHT subsystem refactor

@lidel

- Done:
  - cidv1b32:
    - [cid.ipfs.io](https://cid.ipfs.io): [fix: add support for libp2p-key multicodec](https://github.com/multiformats/cid-utils-website/pull/14)
    - js-peer-id: [feat: support Peer ID represented as CID](https://github.com/libp2p/js-peer-id/pull/105)
    - js-multiaddr: [feat: multiaddr support Peer ID represented as CID](https://github.com/multiformats/js-multiaddr/pull/102)
    - js-ipfs: (draft) [feat: js-ipfs support of CIDs in /ipns/ content paths](https://github.com/ipfs/js-ipfs/pull/2566)
  - ipfs-companion: QA around recovery logic
  - ipfs-webui: 
    - [Peers: prioritize geoip lookup of N peers with lowest latency](https://github.com/ipfs-shipyard/ipfs-webui/issues/1273)
    - [fix: peer count contrast on Peers screen](https://github.com/ipfs-shipyard/ipfs-webui/pull/1280)
    - [Design for using Web UI with a remote IPFS API and Basic Auth](https://github.com/ipfs-shipyard/ipfs-webui/issues/836#issuecomment-546622564)
    - looking at ways to implement webui's test matrix, identified lack of aegir
  - Reviewed 
    - ipfs-companion:
        - [feat: recover dead sub-domain gateways](https://github.com/ipfs-shipyard/ipfs-companion/pull/802)
    - ipfs-webui:
        - [feat: highlight local network peers](https://github.com/ipfs-shipyard/ipfs-webui/pull/1266)
        - [refactor: improve peers performance](https://github.com/ipfs-shipyard/ipfs-webui/pull/1262)
    - user-research: [pinning experience user workflows](https://github.com/ipfs/user-research/issues/17#issuecomment-544327627)
    - ipfs/specs: [URI specs](https://github.com/ipfs/specs/pull/222)
    - ipfs-cohost: [switching from pinning to MFS-based cohosting spec](https://github.com/ipfs-shipyard/ipfs-cohost/pull/5)

  - Next: 
    - fix bugs related to DNS recovery
    - ipfs-companion stable release
    - webui test matrix
    
@aschmahmann
- Done:
  - Lots of testing on ipfs add performance https://github.com/ipfs/go-ipfs/issues/6523
     - TLDR: Add is really slow on Linux+ext4, fast on Windows+NTFS. Trying to figure out next steps. Is this a badger problem, ext4 problem, our problem?
  - PubSub help (IPNS + Filecoin):
     - https://github.com/libp2p/go-libp2p-pubsub/pull/218
     - More on https://github.com/libp2p/go-libp2p-pubsub/pull/184
        - Includes https://github.com/libp2p/go-libp2p-discovery/pull/26
     - Lots of issues coming up that basically boil down to finally implementing the features provided by  https://github.com/libp2p/go-libp2p-pubsub/pull/171
- Blocked:
  - Need review + small quick feedback loop to finalize pubsub work. I'm not the only one blocked.
  - What about add performance is important and our problem to work on?
- Next:
  - Probably more add performance testing
  - Likely push further config things while I'm blocked
     - Relates to https://github.com/ipfs/go-ipfs-config/issues/53
  
@hacdias
- Done:
  - IPFS Web UI
      - Refactor and improve peers page performance ([PR](https://github.com/ipfs-shipyard/ipfs-webui/pull/1262)).
      - Highlight local network peers, as well as geographically nearby ones ([PR](https://github.com/ipfs-shipyard/ipfs-webui/pull/1266)).
      - Disable 'auto launch' at login option on unsupported OSes and dev environment ([PR](https://github.com/ipfs-shipyard/ipfs-webui/pull/1265))
  - Cohosting
      - Add Prune operation ([PR](https://github.com/ipfs-shipyard/cohosting/pull/9))
      - Implement SPEC on `ipfs-cohost` ([PR](https://github.com/ipfs-shipyard/ipfs-cohost/pull/5))
  - IPFS GeoIP
      - How to upgrade the current GeoIP database we have in order to support IPv6 and other questions ([issue](https://github.com/ipfs/ipfs-geoip/issues/68)).
  - IPFS Deploy
      - Give it a bit of love by reducing its package size by more than 50% ([PR](https://github.com/ipfs-shipyard/ipfs-deploy/pull/106))

@stebalien
- Done:
  - What have you accomplished since the last Weekly?
- Blocked:
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
- Next:
  - What is the next important thing you should focus on

@name
- Done:
  - What have you accomplished since the last Weekly?
- Blocked:
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
- Next:
  - What is the next important thing you should focus on
