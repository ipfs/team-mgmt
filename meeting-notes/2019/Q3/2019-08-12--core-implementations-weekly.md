# 🚀 IPFS Core Implementations Weekly Sync 🛰 Aug 12, 2019

- **Lead:** @stebalien
- **Notetaker:** @jimpick
- **Attendees:**
    - @alanshaw
    - @stebalien
    - @jacobheun
    - @lidel
    - @djdv
    - @aschmahmann
- **Recording:** https://youtu.be/ZXfNkKNwgyE

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

- Marcin: Alan, I low key shipped delegated routing in Brave beta today: https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.3.810 (Not yet in Stable, so need to install via https://chrome.google.com/webstore/detail/ipfs-companion-beta-730ac/hjoieblefckbooibpepigmacodalfndh) but we need https://github.com/ipfs/js-ipfs/issues/2335 to make the gateway  actually useful, i think
- Alan Shaw: yes, it is high priority (BTW gateway was useful until ipfs-http-response was refactored to use MFS)
- Molly: Spike on js-ipfs async in Q4? Alan: Hesistant about having new people work on it without experience.


### Initiatives
> Update or add info on initiatives that are happening

#### Upgrade Release Process
@stebalien/@alanshaw

* Draft designs for the blog post are up.
* publishing the new release process blog post today / tomorrow / this week?

Next step: Now that js-ipfs 0.37 has been released... This week @alanshaw will send a PR to update the JS IPFS release process to be more in line with the new Go IPFS release process.

#### Upgrade Testing Infra/Process
@jimpick/@stebalien/@alanshaw

* Test Infra Design V1 - https://docs.google.com/document/d/1jToUP0E0of0WSnLv7gdIEXXQgfscIaxq_aEbwCMPN28/edit?ts=5d4e83d3#

Next step: This week @alanshaw will review PR to benchmarks for go-ipfs update [#268](https://github.com/ipfs/benchmarks/pull/268)

#### Garbage Collection and Pinning (js-ipfs)
@dirkmc/@alanshaw

Next step: This week @alanshaw will merge GC PR [#2022](https://github.com/ipfs/js-ipfs/pull/2022)

#### Delegated Routing (js-ipfs)
@lidel, @alanshaw, @jacobheun

Released in js-ipfs 0.37 \o/

(remove initiative for next week)

#### Gossipsub (js-libp2p)
@vasco-santos

Support released in js-libp2p 0.26.

Open PR to move to Gossipsub as the default pubsub router in js-ipfs. [js-ipfs#2298](https://github.com/ipfs/js-ipfs/pull/2298)

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

* PR for DNS over HTTPS - https://github.com/ipfs/go-ipfs/pull/6560

#### Repo Consolidation (js-libp2p)
@jacobheun

Focusing on finishing repo consolidation up to help support the async migration.

- Opened [libp2p#400](https://github.com/libp2p/js-libp2p/pull/400) to consolidate core modules. 
  - Need to finish consolidating tests/utility methods

#### Distributed Signaling
@jacobheun

Creating an example of signaling over a circuit relay in js and fixing issues as they come up. The goal is to be able to have the client advertise its relay addresses and for a dialing node to be able to upgrade to a direct webrtc connection via that node.

- Fixed an issue with js-multiaddr that prevented dialing to a peer listening on a circuit relay [multiaddr#95](https://github.com/multiformats/js-multiaddr/pull/95)

**Distributed ICE**: Right now the focus is on signaling, but we will need to address distributed ICE. If ICE is not distributed it makes it easy to block webrtc usage by blocking the ICE servers.

* Connection Upgrade Through Relays - https://github.com/libp2p/specs/pull/173

#### IPNS
@aschmahmann
  - [go-libp2p-pubsub#190](https://github.com/libp2p/go-libp2p-pubsub/pull/190) merged 🚢
  - following design review discussion from last week [go-libp2p-pubsub-router#33](https://github.com/libp2p/go-libp2p-pubsub-router/pull/33) nearing completion
  - a couple design-related github issues related to the go-libp2p-record Validator interface
    - We can't tell if records are equal: [go-libp2p#701](https://github.com/libp2p/go-libp2p/issues/701)
    - Support for record resolution beyond "best record wins": [go-libp2p-pubsub-router#36](https://github.com/libp2p/go-libp2p-pubsub-router/issues/36)
  - starting to look at having a [separate namesys library](https://github.com/ipfs/go-ipfs/issues/6537) - please comment on the issue if you have thoughts/opinions

#### Migration to multihash keys in datastore (js-ipfs)
@alanshaw/@auhau

Next step: This week @alanshaw will review JS IPFS repo migration tool PR [#1](https://github.com/ipfs/js-ipfs-repo-migrations/pull/1)

#### Package Managers Updates
@dirkmc

- Lots of work on bitswap performance - https://github.com/ipfs/go-bitswap/issues/167

#### js-ipfs/js-libp2p/js-ipld async await refactor
@alanshaw

- Justification, owners and status: https://github.com/ipfs/js-ipfs/issues/1670
- 67 repos that need to be refactored - 64% complete
- has been a "when you have time" effort
- many libp2p repos, and refactoring is trickier (more involved)!
- next - ipfs-repo (blocking something on the ipld side) - also want this for garbage collection streaming to avoid OOMing
- P0 the ones with no dependancies of other modules
- jacob is going to unblock the ipfs-repo refactor by refactoring [keychain](https://github.com/libp2p/js-libp2p-keychain) and [dht](https://github.com/libp2p/js-libp2p-kad-dht)
- libp2p work needs more expertise, but the js-ipfs stuff can and is getting picked up by a variety of folks


### Design Review Proposals
> You want to propose something for design review.

Design reviews from last week:
  - IPNS over PubSub - Resolutions: https://github.com/libp2p/go-libp2p/issues/698#issuecomment-518737317

New: 
- Resolving /http multiaddr spec (https://github.com/multiformats/multiaddr/issues/63) - @stebalien (will write a summary issue)
  - Summary:
    - /http currently takes _no_ arguments.
    - We have /http, /https, and /tls. We should probably have /tls/http
    - We're already using /http/p2p-webcrt-direct (two protocols) so upgrading to paths is non-trivial.
    - Motivation is DNS over TLS: https://github.com/ipfs/go-ipfs/pull/6560
  - Attendees:
    * @stebalien
    * @alanshaw
    * @lidel
    * @djdv (sit in)
    * @aschmahmann
    * @jacobheun

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

* Alan has a PR open on the js.ipfs.io website - ask for somebody front-end focused to look at it
 - https://github.com/ipfs/js.ipfs.io/pull/267

### Questions
> You have questions and need them answered. List them here.

* In the go code, we use interfaces as if they're java interfaces.
  * Many repos, many developers, no central control.

### Parking Lot


### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟

@name
 - Done:
   - What have you accomplished since the last Weekly?
 - Blocked:
   - Were there any blockers? If so, which ones? Is it still blocked? Why?
 - Next:
   - What is the next important thing you should focus on?
   
@alanshaw
- Done:
    - Released [JS IPFS 0.37](https://www.npmjs.com/package/ipfs/v/0.37.0) 🚢 🎊
        - Published [blog post for 0.37 release](https://blog.ipfs.io/2019-08-06-js-ipfs-0-37/)
    - Updated https://js.ipfs.io with changes for 0.37 release [#267](https://github.com/ipfs/js.ipfs.io/pull/267)
    - Created and published [`it-reader`](https://github.com/alanshaw/it-reader) module for use in `it-multistream-select`
    - [`it-multistream-select`](https://github.com/alanshaw/it-multistream-select/pull/2) is 90% ready
- Next:
    - Port go-ipfs new release flow to js-ipfs
    - Finish review for benchmarks go-ipfs update [#268](https://github.com/ipfs/benchmarks/pull/268)
    - Merge GC PR [#2022](https://github.com/ipfs/js-ipfs/pull/2022)
    - Review JS IPFS repo migration tool PR [#1](https://github.com/ipfs/js-ipfs-repo-migrations/pull/1)
    
@djdv
 - Done:
   - Still making progress on exposing IPFS over 9P (for mounting purposes): https://github.com/ipfs/package-managers/issues/74
   - Discovering issues with protobuf makefiles across several repos: https://github.com/libp2p/go-libp2p/issues/700 + https://github.com/libp2p/go-libp2p-pubsub-router/pull/33#discussion_r312677205
 - Next:
   - continue effort on experimental IPFS mount
   - figure out how best to handle protobuf build issue
   - I owe people some tests and patches 👀  
   - Lots of reading (design docs, review proc, platform standards, etc.)

@jacobheun:
  - Done:
    - Released js-libp2p 0.26 with Gossipsub support [js-libp2p@v0.26.0](https://github.com/libp2p/js-libp2p/releases/tag/v0.26.0)
    - Fixed an issue with js-multiaddr resolution of circuit addresses [js-multiaddr#95](https://github.com/multiformats/js-multiaddr/pull/95)
    - Updated libp2p devgrants
    - Started repo consolidation for js-libp2p core modules [js-libp2p#400](https://github.com/libp2p/js-libp2p/pull/400)
      - Just need to finish test/util consilidation. 
  - Blocked: N/A
  - Next:
    - Finish js-libp2p repo consolidation
    - Continue work on distributed signaling over relay
    - async/await migration support
      - Will probably update js keychain and dht to make sure js-ipfs-repo updates don't get blocked (we use the ipfs datastore interface)  
      
@lidel
- Done:
    - Fixed electron tests and CI on https://github.com/ipfs/js-ipfs/pull/2304
    - vacation \o/
    - released ipfs-companion [v2.8.3.810](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.3.810) to beta channel (with delegated routing enabled for embedded js-ipfs in Brave)
- Next:
    - Land https://github.com/ipfs/js-ipfs/pull/2304
    - Figure out how to preload CIDs requested via embedded js-ipfs in Brave (https://github.com/ipfs/js-ipfs/issues/2335)

@stebalien
 - Done:
   - Reviews, as usual.
   - Mostly work management stuff.
 - Blocked:
   - Nothing.
 - Next:
   - Get the release out the frickn door!
