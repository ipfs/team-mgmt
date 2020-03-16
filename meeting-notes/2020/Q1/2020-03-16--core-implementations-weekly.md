 # 🚀 IPFS Core Implementations Weekly Sync 🛰 March 16, 2020

- **Lead:** @alanshaw
- **Notetaker:** @dirkmc
- **Attendees:**
  - @lidel
  - @ribasushi
  - @aphelionz
  - @willscott
  - @aschmahmann
  - @gmasgras
  - @petar
  - @dirkmc
  - @hugomrdias
- **Recording:** https://youtu.be/1rDWsIJvs3w

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
@stebalien / @achingbrain

- go-ipfs RC is a bit late. We wanted to get it out by Friday at the latest but:
  - Go-ipfs patches are still in flight.
    - Keystore refactor should be landing soon.
    - Subdomain gateway should be landing soon.
    - We have at least one more tiny bitswap patch but bitswap changes have now been merged.
    - Address filtering isn't quite working (bug introduced recently in libp2p)
  - We're still finishing up some final DHT patches, addressing some test issues, and testing in testground.
  - We should have an RC by the end of the week.
  - Timezones suck (hard to meet synchronously)
- If you have any last-minute changes to go-ipfs, now is the time to submit them _iff_ they need to make it into the release.
- Changelog initial draft: https://github.com/ipfs/go-ipfs/pull/6977

- js-ipfs
  - Shipping pinning improvements may not make it in this week
  - Shop bug-fix release once MFS has been fixed

#### Upgrade Testing Infra/Process
@nonsense / @raulk / @RobM
- no one present to give updates (fill in async)


#### Content Routing
@stebalien / @raulk / @dirkmc / @aschmahmann / @jacobheun / @alanshaw / @willscott / @aschmahmann

* 🐲 Hydra v0.1.0 tagged - in process of being deployed
 - balanced peer id generation (peer ids evenly distributed)
 - providing for things that peer asked for
 - prometheus metrics
 - plan is deploy version with a few heads and ramp up
* Hydra next steps:
  - Shared routing table (requires some design thinking)
  - Shared datastore (across multiple machines)
    - There is an existing, reasonably up to date postgres impl
  - https://github.com/libp2p/hydra-booster
* autonat interface solidifying - optimistically tag in next day or two
* DHT changes are mostly looking good
  - Writing more tests to better emulate the existing network
    - Currently use a small set of network topologies
    - Haven't yet scaled up to thousands of nodes on k8s
  - Aarsh is looking into some unit test issues

#### Subdomain Gateway (Base32, Origin isolation)
@lidel


- go-ipfs: 
  - ongoing review [feat: gateway subdomains + http proxy mode](https://github.com/ipfs/go-ipfs/pull/6096)
    - addressed most, two things should land soon: `/api` handling, validation before redirect
  - `$IPFS_PATH/config` docs for new options at `Gateway.PublicGateways` can be previewed at: [feat/gateway-subdomains/docs/config.md#gatewaypublicgateways](https://github.com/ipfs/go-ipfs/blob/feat/gateway-subdomains/docs/config.md#gatewaypublicgateways)
- ipfs-companion: http proxy/subdomain support wip, aiming for a beta release by end of week

#### Bitswap Updates
@dirkmc
- This week:
  - [Remove unresponsive peers from session](https://github.com/ipfs/go-bitswap/issues/258)
  - [Add docs](https://github.com/ipfs/go-bitswap/pull/294)
  - [Cleanup logs](https://github.com/ipfs/go-bitswap/pull/299)
- Next:
  - Testing against staging

#### Stream Content-Based-Chunking Research/Improvements (go-ipfs / js-ipfs)
@ribasushi

- go-ipfs: dag import/export
  - Design finalized, dependency changes in PR
  - Wrapping up tests / code changes in go-ipfs
  
- dagger:
  - Car export ready, waiting for above to test interop
  - Some progress on stacked chunkers interface, but not yet there :(

#### Stardust transport/discovery
@vasco-santos (not attending, Internet connection on a terrible day)

- Still waiting final reviews on examples
- Docker image and Prometheus instrumentation in preparation for deploy
  - [libp2p/js-libp2p-stardust#24](https://github.com/libp2p/js-libp2p-stardust/pull/24)

#### Rust IPFS Initiative
@aphelionz

- Phase 1.0 is _complete_ pending the submission of the milestone report
    - Phase 1.0 is project setup and conformance framework setup (ipfs/interop and interface test)
- Blog posts are also pending
- As of right now we have
   - IPFS_PATH setup - https://github.com/ipfs-rust/rust-ipfs/issues/88
   - /id API largely done
   - /version API done
   - /swarm in progress
   - /pubsub on deck
- Phase 1.2 will complete /block, /dag, /refs, /bitswap 
- Doing things that are most idiomatic to Rust now, pending decisions from PL on Blockstore (index by multihash, etc)
   - PL will have meeting in near future

### Other Initiatives

This is the backlog of initiatives that are either on-hold or low-priority.

#### UnixFS v1.5 (go-ipfs / js-ipfs)
@achingbrain / @ribasushi

#### Add Performance (js-ipfs)
@achingbrain

#### Distributed Signaling (js-libp2p)
@jacobheun

#### Migration to multihash keys in blockstore (js-ipfs / go-ipfs)
@hsanjuan

### Design Review Proposals
> You want to propose something for design review.

[Naming blocks in the datastore](https://github.com/ipfs/specs/issues/242)
- Should we switch to multihashes in the blockstore (rather than cids)?
  - @dirkmc
  - @david
  - @alanshaw
  - @stebalien
  - @ribasushi
  - @koivunej (Joonas from Equilibrium should be on this call w/r/t Rust IPFS) - joonas@equilibrium.co
  - @achingbrain
  - @aschmahmann

Note: The plan for the meeting is to make a decision, so all participants should make sure to read all the context very carefully (and there may not be time for many questions)

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

- Help Johnny update docs.
- Contribute to the release notes. https://github.com/ipfs/go-ipfs/pull/6977

### Questions
> You have questions and need them answered. List them here.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

### Week Update (for async review)
> Only post updates that are relevant 
to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟 

@name
- Done:
  - What have you accomplished since the last Weekly?
- Blocked:
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
- Next:
  - What is the next important thing you should focus on.
 
@vasco-santos
 - Done:
  - `libp2p-stardust`
    - Docker image and Prometheus instrumentation
      - [libp2p/js-libp2p-stardust#24](https://github.com/libp2p/js-libp2p-stardust/pull/24)
  - PR for testing/integrating `libp2p-noise` on `js-libp2p`
    - [libp2p/js-libp2p#585](https://github.com/libp2p/js-libp2p/pull/585)
  - `js-libp2p` backlog grooming and relevant issues creation
  - Created issue with PeerStore v2 thoughts from discussion in the IPFS Team week with @jacob and @yiannis and iterate on them
    - [libp2p/js-libp2p#582](https://github.com/libp2p/js-libp2p/issues/582)
- Blocked: N/A
- Next:
  - Get stardust final release, integration on `js-ipfs` and `js-libp2p` browser example merged and Docker image PR ready
     - Follow up on getting it deployed with infra team
  - Create initial PeerStore proposal
  
@lidel

- Done: 
 - subdomain gateways
  - go-ipfs: addressing feedback from review of [feat: gateway subdomains](https://github.com/ipfs/go-ipfs/pull/6096)
 - distributed-wikipedia-mirror
  - testing [PR with new build scripts](https://github.com/ipfs/distributed-wikipedia-mirror/pull/70#issuecomment-591987481)
 - ipfs-desktop
    - [debugging missing Tray icon with Electron 8 + Linux](https://github.com/ipfs-shipyard/ipfs-desktop/issues/1153#issuecomment-596780147)
    - PR: [fix startup on Debian 10](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1370)
    - PR: [macOS notarizing](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1365) 
    - released: [0.10.4](https://github.com/ipfs-shipyard/ipfs-desktop/issues/1343)
- Next:  
  - continue subdomains
  
@hugomrdias
  - done:
    - rabin-wasm 0.1.4 published 🎉with last fixes (team decided to not invest more time in rabin)
    - `playwright-test` is now featured here [https://github.com/microsoft/playwright/blob/master/docs/showcase.md](https://github.com/microsoft/playwright/blob/master/docs/showcase.md)
    - No more ky in http-client or ipfs utils
      - [https://github.com/ipfs/js-ipfs/issues/2801](https://github.com/ipfs/js-ipfs/issues/2801)
      - [https://github.com/ipfs/js-ipfs/pull/2810](https://github.com/ipfs/js-ipfs/pull/2810)
    - Testgrount onboarding
    - [https://github.com/ipfs/interop/pull/108](https://github.com/ipfs/interop/pull/108) fix a interop test, new http-client uncovered a problem in this test.
    - [https://github.com/ipfs/js-ipfs/pull/2919](https://github.com/ipfs/js-ipfs/pull/2919) fix: dont include util.textencoder in the browser #2919
    - take over multibase cleanup repo, merge PRs and ship releases
    - [https://github.com/ipfs/js-ipfs/issues/2924](https://github.com/ipfs/js-ipfs/issues/2924) Track: remove usage of node globals #2924
  - Next
    - Testground JS
    - Finish Track: remove usage of node globals #2924
  
@dirkmc
- Done:
  - [Remove unresponsive peers from session](https://github.com/ipfs/go-bitswap/issues/258)
  - [Add docs](https://github.com/ipfs/go-bitswap/pull/294)
  - [Cleanup logs](https://github.com/ipfs/go-bitswap/pull/299)
- Next:
  - Testing against staging
  - Ramping up on Gossipsub Hardening

@achingbrain
- Done
  - Merge ipfs-mfs module into core
  - Fix exchange in files example https://github.com/ipfs/js-ipfs/pull/2913
  - Fix video streaming example https://github.com/ipfs/js-ipfs/pull/2914
  - Only run scripts in modules that have changed in CI https://github.com/ipfs/js-ipfs/pull/2915
  - Fix error when command is unknown https://github.com/ipfs/js-ipfs/pull/2916
- Blocked
- Next
  - Finish merging ipfs-mfs module into core (turns out loads of stuff is broken)
  - Do a bug fix release
  - Start working on cancellable requests
  
@willscott
- Done:
  - [https://github.com/libp2p/go-libp2p-autonat/pull/53](https://github.com/libp2p/go-libp2p-autonat/pull/53) function options + restructure.
- Inflight
  - merging autonat-svc
  - testground for autonat
  - peer filter in kad-dht (netroute dep. released)
  
@alanshaw
- Done:
  - Created simple golang parser for Prometheus `/metrics` https://github.com/alanshaw/prom-metrics-client
  - Record prometheus metrics, consume them in "UI"
    - https://github.com/libp2p/hydra-booster/pull/36
  - Pass number of sybils to spawn to hydra
    - https://github.com/libp2p/hydra-booster/pull/41
  - Tagged 🐲 Hydra v0.1.0
- Next:
  - Finish deploying Hydra
  
@aschmahmann
- Done: 
  - dht upgrade PR merged
  - routing table changes merged
  - testground taking into account new DHT changes (especially testing compatbility between new and old DHT)
- In progress/Next:test 
  - Continue work on testground dht tests
    - Have a test running, but need to work on scaling and some reliability issues
  - Reviewing + helping with some smaller outstanding DHT issues

