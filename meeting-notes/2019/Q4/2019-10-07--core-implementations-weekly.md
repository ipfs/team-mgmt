# 🚀 IPFS Core Implementations Weekly Sync 🛰 Oct 07, 2019

- **Lead:** @olizilla (@stebalien out at devcon)
- **Notetaker:** @vasco-santos 
- **Attendees:**
  - @jacobheun
  - @hacdias
  - @aschmahmann
  - @pedromiguelss
  - @achingbrain
  - @jimpick
  - @daviddias

- **Recording:**

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

- go-ipfs patch release did not ship, again.

- js-ipfs is on the v0.39.0 release train: https://github.com/ipfs/js-ipfs/issues/2489
  - [x] feat: [Allow daemon to init and start in a single command](https://github.com/ipfs/js-ipfs/pull/2428)
  - [x]  fix: [Limit concurrent HTTP requests in browser](https://github.com/ipfs/js-ipfs/pull/2304)
  - [x] feat: [Config profiles](https://github.com/ipfs/js-ipfs/pull/2165)
  - [x] feat: [Web UI 2.5.4](https://github.com/ipfs/js-ipfs/pull/2478)
  - [ ] feat: [Support `block rm` over HTTP API](https://github.com/ipfs/js-ipfs/pull/2514)

- No update this week

#### Upgrade Testing Infra/Process

@jimpick / @stebalien / @alanshaw / @daviddias

- [ipfs/testground](https://github.com/ipfs/testground)
- There are some tests being conceptualized and implemented
  - DHT Test being implemented
- Infrastructure progress with AWS and Elasticsearch
  - @jimpick will record a video explaining the flow

#### Subdomain Gateway (Base32, Origin isolation)

@lidel

  - "IPNS in Base32": merged [libp2p RFC 0001](https://github.com/libp2p/specs/pull/209)
    - next step is to implement it – tracked in [ibp2p/specs/issues/216](https://github.com/libp2p/specs/issues/216)
  - wrote [browser-addressing intro for docs.ipfs.io](https://github.com/ipfs/docs/pull/298)
  - revistited state of secure-context and `localhost` in Firefox & Chromium – [summary here](https://github.com/ipfs/in-web-browsers/issues/109#issuecomment-537061478)


#### Distributed Signaling (js-libp2p)
@jacobheun

- Still on hold pending the js-libp2p async refactor

#### IPNS (go-ipfs / js-ipfs)
@aschmahmann / @hugomrdias

@aschmahmann:
 - PubSub discovery improvements very close to shipping (working with @Stebalien on reviews while he's at DevCon)
 - Next work would be related to factoring namesys out of IPFS and changing the interfaces to support third-party publishing and local pinning of IPNS records
   - Priorities have shifted given that IPNS will no longer be on 🔥, likely won't have a ton of time to work on this during Q4
 - If IPNS over DNS spec lands before I can start working on the DHT (blocked by ongoing testground work), I can probably tackle it



#### Migration to multihash keys in blockstore (js-ipfs)
@alanshaw/@auhau


#### IPFS Mount
@djdv

@aschmahmann
- Things are getting progress

#### Bitswap Updates
@dirkmc

- Progress on https://github.com/ipfs/go-bitswap/issues/187
- Performance improvements
  - Parallel reads and research on finding the bottleneck

#### js-ipfs/js-libp2p/js-ipld async await refactor
@achingbrain / @jacobheun / @vasco-santos

- Libp2p: 20/30 Complete! 66%
  - Async modules incompatible with the current version of libp2p have been marked with `beta` tags on npm [js-libp2p#460](https://github.com/libp2p/js-libp2p/issues/460). All working versions are `@latest`. If you encounter issues let us know.
  - Modules finished:
    - [js-libp2p-webrtc-direct](https://github.com/libp2p/js-libp2p-webrtc-direct/pull/30)
    - [js-libp2p-webrtc-star](https://github.com/libp2p/js-libp2p-webrtc-star/pull/183)
  - Libp2p Core refactor is underway
    - Transport subsystem complete
    - Dialer and Upgrader refactor is in progress
  - Pubsub module refactors are also in progress
- Refactoring files api to use async iterator streams
  - https://github.com/ipfs/js-ipfs-http-client/pull/1124
  - https://github.com/ipfs/js-ipfs/pull/2517
  - Related: has ever handling over streamed APIs ever worked in the browser?  Error information is sent in HTTP trailers which browsers don't support.
    - The HTTP-API is very go-ipfs design centric. There are several issues already catalog (for a while), mind adding this to https://github.com/ipfs/specs/issues/208 as well?

### Design Review Proposals
> You want to propose something for design review.

- New:
  - [Experimental SPEC for MFS-based cohosting](https://github.com/ipfs-shipyard/cohosting) is looking for feedback. It is an exploration around simple tools and conventions for cohosting existing websites with IPFS

- Old:
  - unixfsv1.5: @stebalien is still the DRI for writing this up.

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

@aschmahmann: Trying to close https://github.com/ipfs/go-ipfs/issues/6527 and I'm confused by which pins should take priority (https://github.com/ipfs/js-ipfs/issues/2518). It seems like it should be direct/recursive > indirect. Instead we seem to do recursive > indirect > direct.

### Questions
> You have questions and need them answered. List them here.

- @david How to spin a go-ipfs daemon via code similarly to `js-ipfs` and add a file

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

@aschmahmann: Bitswap and PubSub seem like they share some issues to tackle (e.g. this pubsub issue https://github.com/libp2p/go-libp2p-pubsub/issues/206). Wonder if there's a way to help each other out.

### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟

@name
- Done:
  - What have you accomplished since the last Weekly?
- Blocked:
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
- Next:
  - What is the next important thing you should focus on
  
@jacobheun:
- Done:
  - PR for header consolidation recommendation in multistream-select spec [multistream-select#20](https://github.com/multiformats/multistream-select/pull/20)
  - JS Libp2p Async Refactor
    - Refactored the transport subsystem [js-libp2p#461](https://github.com/libp2p/js-libp2p/pull/461)
    - Started the Dialer/Upgrader refactor [js-libp2p#462](https://github.com/libp2p/js-libp2p/pull/462)
- Blocked:
- Next:
  - Finish the Dialer/Upgrader refactor
  - Unblock the [libp2p-secio refactor](https://github.com/libp2p/js-libp2p-secio/pull/108)
  - Start peer discovery refactor
  - Add more usage scenarios to the iterable streams guide.  
  
@vasco-santos
- Done:
  - `libp2p-webrtc-star` migration PR merged and released
    - [libp2p/js-libp2p-webrtc-star#183](https://github.com/libp2p/js-libp2p-webrtc-star/pull/183)
  - `libp2p-webrtc-direct` migration PR merged and released
    - [libp2p/js-libp2p-webrtc-direct#30](https://github.com/libp2p/js-libp2p-webrtc-direct/pull/30)
  - Initial draft for `js-libp2p-websockets-star` async migration
    - [libp2p/js-libp2p-websocket-star#77](https://github.com/libp2p/js-libp2p-websocket-star/pull/77)
    - Still hitting some issues in replacing `pull-streams`, but will continue to work on it
  - New iteration on `js-libp2p-utp`  migration PR
    - [libp2p/js-libp2p-utp#81](https://github.com/libp2p/js-libp2p-utp/pull/81)
    - Still hitting some issues closing the listener, but will continue to work on it
  - Updated `js-libp2p-pubsub` and `js-libp2p-floodsub` PRs
    - [libp2p/js-libp2p-pubsub#26](https://github.com/libp2p/js-libp2p-pubsub/pull/26)
    - [libp2p/js-libp2p-floodsub#88](https://github.com/libp2p/js-libp2p-floodsub/pull/88) 
- Blocked: N/A
- Next:
  - Get `js-libp2p-websockets-star`, `js-libp2p-utp`  PRs merged
  - Pubsub subsystem refactor
    - Create `gossipsub` migration PR
    - Get [libp2p/js-libp2p-pubsub#26](https://github.com/libp2p/js-libp2p-pubsub/pull/26) finished
    - Get [libp2p/js-libp2p-floodsub#88](https://github.com/libp2p/js-libp2p-floodsub/pull/88) finished
    - PR `js-libp2p` async branch with refactored Pubsub

@dirkmc
- Done:
  - Implemented [proposal to eliminate bottleneck](https://github.com/ipfs/go-bitswap/pull/189#issuecomment-537530735) in proof-of-concept: matching wants to peers
- Next:
  - Benchmarking changes on EC2
  

@pedromiguelss
- Done:
  - Opened [PR](https://github.com/ipfs/js-ipfs-http-response/pull/28) to close issue [#27](https://github.com/ipfs/js-ipfs-http-response/issues/27) of [js-ipfs-http-response](https://github.com/ipfs/js-ipfs-http-response).
  - Debugging to understand the problem of the 5 skipped tests:
    - 2 of them were fixed (daemon config was not correct)
    - 3 of them are still skipped but the problem was found (see this [comment](https://github.com/ipfs/interop/pull/86#issuecomment-537534113))
- Blocked: N/A
- Next:
  - Tackle issue [#525](https://github.com/ipfs/interface-js-ipfs-core/issues/525) of [`interface-js-ipfs-core`](https://github.com/ipfs/interface-js-ipfs-core)
  - Get both interop tests merged:
    - https://github.com/ipfs/interop/pull/86
    - https://github.com/ipfs/interop/pull/87
  - Get `js-ipfs-http-response` [PR](https://github.com/ipfs/js-ipfs-http-response/pull/28) merged

@lidel

Done:
- cidv1b32, origin
  - merged [browser-addressing intro for docs.ipfs.io](https://github.com/ipfs/docs/pull/298)
  - merged [libp2p RFC 0001](https://github.com/libp2p/specs/pull/209)
  - bifrost discussions about handling content paths on dweb.link URLs
  - revistited state of secure-context and `localhost` in Firefox & Chromium – [summary here](https://github.com/ipfs/in-web-browsers/issues/109#issuecomment-537061478)
      - [switching ipfs-companion from IP is tracked here](https://github.com/ipfs-shipyard/ipfs-companion/pull/780)
- ipfs-companion
    - [remove XHR CORS workaround for Firefox 69+](https://github.com/ipfs-shipyard/ipfs-companion/pull/771)
    - Android issues
        - merged [manifest fix to restore Android support](https://github.com/ipfs-shipyard/ipfs-companion/pull/770)
        - debugging Mozilla Addon store:
            - [Unable to install in Firefox for Android](https://github.com/ipfs-shipyard/ipfs-companion/issues/779)
            - filled upstream bug : <del>https://bugzilla.mozilla.org/show_bug.cgi?id=1582821</del>  [mozilla/addons/issues/1101](https://github.com/mozilla/addons/issues/1101)
    - js-ipfs in Brave 🦁
        - created [Brave project board](https://github.com/ipfs-shipyard/ipfs-companion/projects/4) to make it easier to see remaining work and current focus
        - synced with Brave, AI to identify additional APIs we may need for local discovery/storage
        - wip PR: [precached webui works in offline mode](https://github.com/ipfs-shipyard/ipfs-companion/pull/782)
          - shipped: [option to produce TAR archives](https://github.com/ipfs-shipyard/ipfs-or-gateway/pull/15) to [`ipfs-or-gateway`](https://www.npmjs.com/package/ipfs-or-gateway)
- [added RSS/Atom to cluster.ipfs.io/news](https://github.com/ipfs/ipfs-cluster-website/pull/102)
- [notes on minimum test matrix for ipfs-webui](https://github.com/ipfs-shipyard/ipfs-webui/issues/1164#issuecomment-537467318)
- Published initial draft of experimental MFS cohosting SPEC: [ipfs-shipyard/cohosting](https://github.com/ipfs-shipyard/cohosting/)
- smoke-testing and early feedback for DNS-over-HTTPS at https://eth.link/dns-query
- sync with @meiqimichelle on pinning experience   
- sync with Filecoin team regarding [ipfs/i18n](https://github.com/ipfs/i18n)

Blocked:
- soft self-block: ipfs-companion PRs parked until I find a fix for [ipfs-companion/issues/757](https://github.com/ipfs-shipyard/ipfs-companion/issues/757)

Next:
- brave
    - ipfs-companion: fix [Brave: regression in embedded /api/v0/add](https://github.com/ipfs-shipyard/ipfs-companion/issues/757) needs to be fixed before we merge other pending PRs 
    - create dedicated datastore one for WebExtension APIs (eg. `chrome.storage`) and benchmark it against IndexDB
    - figure out local B2B (browser to browser) discovery without centralized signaling (ws-star)
    

@hacdias
- Done:
  - `ipfs-desktop`
    - Worked on some fixes and small refactors([#1157](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1157), [#1169](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1169), [#1170](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1170), [#1175](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1175))
        - Thinking about the possibility of adding a v8 cache to speed up starting time [#1172](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1172)
        - Investigated why `ipfsd-ctl` 0.47.x is not working with IPFS Desktop [#1137-comment](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1137#issuecomment-538655094)
    - `ipfs-webui`
        - feat: use local gateway on explore page [#1219](https://github.com/ipfs-shipyard/ipfs-webui/pull/1219) [ipld-explorer-components#91](https://github.com/ipfs-shipyard/ipld-explorer-components/pull/91)
        - fix: rename modal keeping the previous name [#1221](https://github.com/ipfs-shipyard/ipfs-webui/pull/1221)
        - Started investigating why the peers page gets so slow with 20k more peers (it's not a rendering issue).
    - Cohosting SPEC: starting working on a simple script to match the SPEC and updated `ipfs-cohost` ([cohosting#4](https://github.com/ipfs-shipyard/cohosting/issues/4), [#3](https://github.com/ipfs-shipyard/cohosting/pull/3), [#5](https://github.com/olizilla/ipfs-cohost/pull/5), [#1171](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1171))
- Next:
  - Release patch Web UI and Desktop with new fixes.
  - Get new `ipfs-cohost` on the wild.
