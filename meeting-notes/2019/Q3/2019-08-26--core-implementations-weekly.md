# 🚀 IPFS Core Implementations Weekly Sync 🛰 Aug 26, 2019

- **Lead:** @stebalien
- **Notetaker:** @jacobheun
- **Attendees:**
    - @jacobheun
    - @jimpick
    - @dirkmc
    - @stebalien
    - @vasco-santos
    - @momack2
    - @hugomrdias
    - @mburns
    - @djdv
    - @aschmahmann
    
- **Recording:**  https://youtu.be/qKO0Etqfci4

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


### Initiatives
> Update or add info on initiatives that are happening

#### Upgrade Release Process
@stebalien/@alanshaw

- @alanshaw is out on holiday. No known updates.

#### Upgrade Testing Infra/Process
@jimpick/@stebalien/@alanshaw

* @jimpick experimented with DHT Testing using Google Cloud Run
* [#268](https://github.com/ipfs/benchmarks/pull/268) still pending review from alan.

#### Garbage Collection and Pinning (js-ipfs)
@dirkmc/@alanshaw

* @alanshaw is still working on [#2022](https://github.com/ipfs/js-ipfs/pull/2022) (ON HIS HOLIDAY!?).

#### Gossipsub (js-libp2p)
@vasco-santos

- vasco will update `libp2p/interop` PR with the new released of js-libp2p to get it merged
  - [libp2p/interop#17](https://github.com/libp2p/interop/pull/17)
- Needs review on `js-ipfs` integration

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- PeerIDs encoded as CIDs still pending as a libp2p [RFC 0001: Text Peer Ids as CIDs](https://github.com/libp2p/specs/pull/209)


#### Repo Consolidation (js-libp2p)
@jacobheun

Next Step (last week): archive the old repos and post deprecation notices. Also ensure npm has deprecation notices.
  - This is done! Github repos are archived and their readmes and npm modules have deprecation notices

This was released with libp2p 0.26, this initiative can be closed.

#### Distributed Signaling
@jacobheun

Next step (last week): continue work on webrtc upgrade over relay

I have a POC of webrtc signaling over a relay node and upgrading to the new connection. Will push code tomorrow if anyone is interested in progress along the way.

Next steps:
  - Abstract out the signaling connection upgrade and comment on the [signaling spec](https://github.com/libp2p/specs/pull/159)
  - Look into leveraging other peers as ICE servers. Currently using the defaults (google and twilio servers) used by [simple-peer](https://github.com/feross/simple-peer)

#### IPNS
@aschmahmann
- IPNS-over-PubSub as an independent transport
  - [go-libp2p-pubsub-router#33](https://github.com/libp2p/go-libp2p-pubsub-router/pull/33) done 🚢
  - Existing IPNS over PubSub (pre above PR) is unusable over the public internet since timeouts for DHT rendezvous are set too low and we don't retry
    - Means it's time to work on PubSub discovery next
  - libp2p Discovery utilities needed to make things usable [go-libp2p#707](https://github.com/libp2p/go-libp2p/issues/707)

@hugomrdias
- IPNS over DNS Spec should be out this week
- IPNS nameservers deploy process should defined this week.

#### Migration to multihash keys in datastore (js-ipfs)
@alanshaw/@auhau

Next step: _This week_ @alanshaw will review JS IPFS repo migration tool PR [#1](https://github.com/ipfs/js-ipfs-repo-migrations/pull/1)

#### Package Managers Updates
@dirkmc

#### Bitswap Updates
@dirkmc / @stebalien

- Bitswap hack week done!
- Opened go-bitswap issue to discuss RFC for Bitswap extensions: [go-bitswap#186](https://github.com/ipfs/go-bitswap/issues/186)

#### js-ipfs/js-libp2p/js-ipld async await refactor
@alanshaw / @vasco-santos

Tracking issue: [js-ipfs#1670](https://github.com/ipfs/js-ipfs/issues/1670)

New PRs on libp2p side

- [libp2p/js-libp2p-webrtc-star#183](https://github.com/libp2p/js-libp2p-webrtc-star/pull/183)
- [libp2p/js-libp2p-webrtc-direct#30](https://github.com/libp2p/js-libp2p-webrtc-direct/pull/30)
- [libp2p/js-libp2p-utp#81](https://github.com/libp2p/js-libp2p-utp/pull/81)

**72%** merged or with open PRs

### Design Review Proposals
> You want to propose something for design review.

Design reviews from last week:
 - ipfs-shipyard/cohosting: [a simple spec for MFS-based website cohosting scheme](https://github.com/ipfs-shipyard/cohosting/pull/2) (late addition)

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!


- please review libp2p/specs change proposal: [RFC 0001: Text Peer Ids as CIDs](https://github.com/libp2p/specs/pull/209)


### Questions
> You have questions and need them answered. List them here.

- How to pronounce Adin's name? --> uh-deen
- what is our process for approving/merging PRs?
  - you need a review from someone - ideally someone who knows the codebase
  - if you think it's ready, you can merge it
  - if new features or bugfixes - please wait for review, if a doc fix or test add it's ok to just go ahead and merge

### Parking Lot


### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟


@dirkmc
 - Done:
   - merged go-bitswapPR to recognize when we've received a block that we want but haven't had a chance to ask for yet: https://github.com/ipfs/go-bitswap/pull/174
   - opened go-bitswap issue to discuss RFC for Bitswap extensions: https://github.com/ipfs/go-bitswap/issues/186
 - Next:
   - Finish up issue and convert into RFC
   - Start work on a PoC implementation

@vasco-santos
- Done:
  - Async migration PRs:
    - [libp2p/js-libp2p-webrtc-star#183](https://github.com/libp2p/js-libp2p-webrtc-star/pull/183)
    - [libp2p/js-libp2p-webrtc-direct#30](https://github.com/libp2p/js-libp2p-webrtc-direct/pull/30)
    - [libp2p/js-libp2p-utp#81](https://github.com/libp2p/js-libp2p-utp/pull/81)
  - ethberlinzwei
- Blocked:
  - Need feedback on
    - [libp2p/interface-connection#29](https://github.com/libp2p/interface-connection/pull/29)
  - Need review on gossipsub integration for `js-ipfs`
    - [ipfs/js-ipfs#2298](https://github.com/ipfs/js-ipfs/pull/2298)
- Next:
  - Async for:
    - `js-libp2p-kad-dht`
    - pubsub?
  - Continue `interface-connection` PR work


@jacobheun
  - Done:
    - js-libp2p [0.26.1](https://github.com/libp2p/js-libp2p/releases/tag/v0.26.1) was released, and includes the core module refactor updates 
    - Reviewed the js-libp2p-mplex refactor, there is a failing TCP test, once that is corrected it should be good to go.
    - Have a working POC of signaling over a relay working to establish a direct webrtc connection
      - Need to abstract this out and determine a path forward for the spec
- Blocked:
    - None
- Next:
    - Support async/await work
      - Promisify `switch.dial` as this will be needed for conversion of some of the other modules, like kad-dht
    - Continue with signaling over relay work
    - Update deploy and logging of websocket-star server (there were some restart issues last week)
    
@djdv
 - Done:
   - Still making progress on exposing IPFS over 9P (for mounting purposes)
     - Read only mounting seems to be working: https://github.com/ipfs/package-managers/issues/74#issuecomment-524004806
 - Next:
   - prepare read-only server to be merged into `go-ipfs` under experimental flag
     - considerations about command flags and mount config
   - Likely start on experimental 9P2000.L <-> FUSE client that works with the server
   - Likely talking about IPNS over DNS spec things



@lidel
 - Done:
  - ipfs-companion [feat: support ipfs://{dnslink} (redirect to ipns://)](https://github.com/ipfs-shipyard/ipfs-companion/pull/748)
  - ipfs-webui: [fix: stop crashing pin screen on a single ipfs.files.stat error](https://github.com/ipfs-shipyard/ipfs-webui/pull/1121)
  - js-multiaddr-to-uri: [feat: assume HTTP when multiaddr ends with /tcp ](https://github.com/multiformats/js-multiaddr-to-uri/pull/7)
  - js-ipfs: [feat: resolution of .eth names via .eth.link ](https://github.com/ipfs/js-ipfs/pull/2373)
  - js-ipfs: [fix: preload addreses with trailing slash (new multiaddr-to-uri)](https://github.com/ipfs/js-ipfs/pull/2377)
  - ipfs-provider: [feat: support window.ipfs.enable()](https://github.com/ipfs-shipyard/ipfs-provider/pull/5)
  - ipfs-shipyard/cohosting: [draft of a simple spec for MFS-based website cohosting scheme](https://github.com/ipfs-shipyard/cohosting/pull/2)
  - reviews & QA
 - Blocked:
   - libp2p/specs PR need review: [RFC 0001: Text Peer Ids as CIDs](https://github.com/libp2p/specs/pull/209)
 - Next:
   - wrap up remaining  js-ipfs fixes  and move to p2p transport in Brave
   

@name
 - Done:
   - What have you accomplished since the last Weekly?
 - Blocked:
   - Were there any blockers? If so, which ones? Is it still blocked? Why?
 - Next:
   - What is the next important thing you should focus on?
