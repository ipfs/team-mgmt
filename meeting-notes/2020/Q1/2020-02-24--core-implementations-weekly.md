# 🚀 IPFS Core Implementations Weekly Sync 🛰 Feb 24, 2020

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @ribasushi
  - @aschmahmann
  - @johnnymatthews
  - @lidel
  - @momack2
  - @willscott
  
- **Recording:** https://youtu.be/E3gZj0ibyAs

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

- js-ipfs `0.41.0` RELEASED! 🚢
  - Highlights: async/await & UnixFS v1.5
  - Release blog post: https://blog.ipfs.io/2020-02-13-js-ipfs-0-41/

#### Upgrade Testing Infra/Process
@nonsense / @raulk

- No update

#### Content Routing
@stebalien / @raulk / @dirkmc / @aschmahmann / @jacobheun / @alanshaw / @willscott / @aschmahmann

- Decision made on how to handle the DHT upgrade:
  - 1 DHT
  - 2 Protocols
  - New nodes accept requests from old nodes but do not add old nodes to their routing tables.
  - This should work 99% of the time once 20% of the network has updated. We'll get 5 9s once 45% of the network has updated.
  - We can pad these numbers by using DHT boosters.
- 1000 node test works.
- We have some concerns about LANs and VPNs.
- First round of AutoNAT improvements are in review.
- Dissociating routing table state from connection state is in the final stages of review.
- All go-libp2p stabilize changes (except those in the DHT itself) have been merged into master.

Metrics from the _old_ DHT on the _current_ network:

![Provide Time](https://ipfs.io/ipfs/Qmep6vCACJuuP5vc4shSmQkTEt5mYXKmHkakGwXSb6yvMk/provide-time.png)

![Find Time](https://ipfs.io/ipfs/Qmep6vCACJuuP5vc4shSmQkTEt5mYXKmHkakGwXSb6yvMk/find-time.png)

![Fetch Time](https://ipfs.io/ipfs/Qmep6vCACJuuP5vc4shSmQkTEt5mYXKmHkakGwXSb6yvMk/fetch-time.png)


#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- subdomains
  - Writing tests
  - Subdomain gateways will land in go-ipfs 0.5.0.
    - Hopefully in js-ipfs by 0.43

- Agreement on how to ship CIDv1 has been reached.
  - CIDv1 Will land in go-ipfs 0.6.0 and js-ipfs 0.43


#### Bitswap Updates
@dirkmc

- Team Week
- Drop peers from the session if they aren't being useful.
- Improve perf of message sending debouncing logic.
- Send ourselves "simulated" DONT_HAVE messages for old peers when they don't send us a block within the expected timeout.
- js is blocked on PR review
  - @jacobheun and maybe @alanshaw to get reviews done this week

#### Stream Content-Based-Chunking Research/Improvements (go-ipfs / js-ipfs)
@ribasushi
 - Tool continues to take shape
   - lots of progress during team-week
     - Still a few probleems in stackable chunker/linker definitions
   - 2 lightning talks
   - Scheduled call with a collab to ensure their use-case is taken into account in final UI

### Other Initiatives

This is the backlog of initiatives that are either on-hold or low-priority.

#### UnixFS v1.5 (go-ipfs / js-ipfs)
@achingbrain / @ribasushi

- No updates

#### Add Performance (js-ipfs)
@achingbrain

- @aschmahmann
  - There are no new changes happening on the go-ipfs side of things (already made things ~2x faster by switching to async writes - very similar to copy-paste speed when using BadgerDB). Removing go-ipfs and myself from this initiative.

#### Distributed Signaling (js-libp2p)
@jacobheun

- Still on pause, specs and PoC are slated for Q2

#### Migration to multihash keys in blockstore (js-ipfs / go-ipfs)
@hsanjuan

### Design Review Proposals
> You want to propose something for design review.

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

### Questions
> You have questions and need them answered. List them here.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟 

@alanshaw
- Done:
  * Released js-ipfs `0.41`
      * https://blog.ipfs.io/2020-02-13-js-ipfs-0-41/
  * Refactored examples on https://js.ipfs.io for new APIs
      * https://github.com/ipfs/js.ipfs.io/pull/270
  * Opened PR to remove `asn1.js` module from js-libp2p-crypto for smaller bundle
      * https://github.com/libp2p/js-libp2p-crypto/pull/166
- Next:
  - Golang training
  - Start reviewing content routing PRs
  
@jacobheun
- Done:
  - Fixed an issue with libp2p-tcp throwing uncaught errors in the listener [libp2p-tcp#122](https://github.com/libp2p/js-libp2p-tcp/pull/122)
  - local [interop testing](https://github.com/libp2p/interop/pull/32) for go and js libp2p noise is passing for XX handshakes
    - Need to verify IK and XX fallback
  - Started planning out Content Routing work through June
- Next:
  - Golang training
  - Catch up on blocking PR Reviews
    - js-libp2p-stardust
    - js-ipfs-bitswap
  - Finish noise implementation evaluation against spec for go & js
  - Design of multiaddr resolver usage in js-libp2p

@achingbrain
- Done:
  - Pinning: api 
  - Aegir: more granular builds https://github.com/ipfs/aegir/pull/526
  - Aegir: generic testing of third party repos https://github.com/ipfs/aegir/pull/525
  - React Native: removing use of `assert` module
    - https://github.com/libp2p/js-peer-id/pull/117
    - https://github.com/ipld/js-ipld-dag-pb/pull/167
    - https://github.com/libp2p/js-libp2p-websockets/pull/101
    - https://github.com/libp2p/js-libp2p-tcp/pull/123
    - https://github.com/libp2p/js-libp2p-pubsub/pull/37
    - https://github.com/libp2p/js-libp2p-mdns/pull/87
    - https://github.com/libp2p/js-libp2p-floodsub/pull/95
    - https://github.com/libp2p/js-libp2p-bootstrap/pull/99
    - https://github.com/libp2p/js-libp2p/pull/561
    - https://github.com/libp2p/js-interfaces/pull/34
    - https://github.com/ChainSafe/gossipsub-js/pull/65
    - https://github.com/libp2p/js-libp2p-kad-dht/pull/173
    - https://github.com/libp2p/js-libp2p-secio/pull/114
    - https://github.com/libp2p/js-libp2p-webrtc-star/pull/202
    - https://github.com/libp2p/js-libp2p-record/pull/18
    - https://github.com/libp2p/js-peer-info/pull/88
  - Build:
    - Fixing windows https://github.com/ipfs/js-ipfs/pull/2793
    - Debugging node 10 segfaults: https://github.com/ipfs/js-ipfs/pull/2794
- Next:

@lidel

- Done (this week):
  - IPFS Team Week
  - ipfs/devgrants
    - wip draft: Native Protocol Handler API for Browser Extensions
  - ipfs-companion
    - [addressing Chrome Web Store review](https://github.com/ipfs-shipyard/ipfs-companion/issues/808#issuecomment-588343944)
- Done (before team week): 
  - subdomain gateways 
    - go-ipfs: working on [subdomain gateway feature](https://github.com/ipfs/go-ipfs/pull/6096)
  - ipfs companion:
    - [https on .eth.link](https://github.com/ipfs-shipyard/ipfs-companion/issues/841)
  - i18n locale syncs
    - [ipld-explorer-components](https://github.com/ipfs-shipyard/ipld-explorer-components/pull/213)
    - [ipfs-desktop](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1347)
    - [ipfs-webui](https://github.com/ipfs-shipyard/ipfs-webui/pull/1399)
  - js-ipfs
    - rebase/fix [test: E2E tests against ipfs-webui HEAD](https://github.com/ipfs/js-ipfs/pull/2706)
  - other
    - blog.ipfs.io: [Fix ipfs.io/blog/* links loaded via DNSLink](https://github.com/ipfs/blog/issues/360)
    - https://awesome.ipfs.io: reviews and small fixes
- Next: 
  - Chrome Web Store issues
  - make PR with subdomain gws ready for review

@Stebalien
- Done:
  - Team week.
  - Lots of reviews
  - Some bitswap design discussions.
  - Lots of DHT design discussions.
- Next:
  - Wrap up the LAN/VPN+DHT questions.
  - Teach people go!

@aschmahmann
- Done:
  - Team week
  - 1k node DHT tests running on testground
      - includes test design, optimization, and testground hacking/debugging
  - DHT design discussions
- Next:
  - Would like to increase the test sizes even more, requires working with testground team
  - Golang training
  - LAN/VPN DHT discussions
  - Proposals on very short term DHT improvements that don't require a go-ipfs release
  - Get content routing changes from different go-libp2p branches settled up (query changes, stabilize changes, misc changes in master)
