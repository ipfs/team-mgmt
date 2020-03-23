 # 🚀 IPFS Core Implementations Weekly Sync 🛰 March 23, 2020

- **Lead:** @achingbrain
- **Notetaker:** @jacobheun
- **Attendees:**
  - @vasco-santos
  - @alanshaw
  - @aphelionz
  - @petar
  - @ribasushi
  - @stebalien
  - @hugomrdias
  - @willscott
  - @johnnymatthews
- **Recording:** https://youtu.be/zRQwZNAFcxQ

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

- go-ipfs 0.5
  - RC1 is still a bit late, the team is pushing to wrap everything up
  - DAG import/export code is almost done
  - Everything is landing, but we're still wrapping things up
  - Hoping to land an RC in the next couple days so we can get more folks testing
  - Subdomain + proxy gateway support has landed.

- js-ipfs
  - Looking to do a patch release this week

#### Upgrade Testing Infra/Process
@raulk / @RobM
- Shipped v0.3 Testground
  https://github.com/ipfs/testground/releases
- Team back to full strength
- Finishing week 1 of v0.4 sprint. Feature planning here: https://docs.google.com/document/d/1w_6j27BJd9J5aC2SIjmBxblk8uI-eu6RzwR05zClphU/edit#heading=h.v8p8f73x7l10
- Looking to on-board Hugo so as to bring JS Browser/node functionality
  - spec to be built out this week.

#### Content Routing
@stebalien / @raulk / @dirkmc / @aschmahmann / @jacobheun / @alanshaw / @willscott / @aschmahmann

- Doing a lot of testing and analysis of the DHT changes
  - Working on updates and tuning in preparation for landing the IPFS 0.5 RC

- 🐲 Hydra nodes deployed (a few)
    - Linking up metrics

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- go-ipfs: merged \o/ [feat: gateway subdomains + http proxy](https://github.com/ipfs/go-ipfs/pull/6096) on track to be in v0.5.0
- ipfs-companion: wip
    - is-ipfs: [feat: isIPFS.dnslinkSubdomain(url)](https://github.com/ipfs/is-ipfs/pull/32)
    - **shipped ipfs-companion beta** with support for `*.localhost` EVERYWHERE: [v2.10.0.893](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.10.0.893)
    - next merge & release stable version: [feat: *.localhost subdomain gateway support with http proxy](https://github.com/ipfs-shipyard/ipfs-companion/pull/853)

#### Bitswap Updates
@dirkmc

- Go performance improvements
  - Reuse message objects.
  - Avoid allocating when serializing CIDs.
- There's a [wantlist leak](https://github.com/ipfs/go-bitswap/issues/310) in go-bitswap that we need to track down before the release.

#### Stream Content-Based-Chunking Research/Improvements (go-ipfs / js-ipfs)
@ribasushi
  - Multi-processor ordered streaming !!!!!!1111oneoneone https://github.com/ipfs/specs/issues/227#issuecomment-602405980
  - Car import/export functionality ready ( uses go-ipld-prime selectors !), currently fixing up issues with progress, and wrapping up tests

#### Stardust transport/discovery
@vasco-santos

- Deployment PR with docker and prometheus instrumentation was merged
  - [libp2p/js-libp2p-stardust#24](https://github.com/libp2p/js-libp2p-stardust/pull/24)
- Waiting on final comments on `js-ipfs` and `js-libp2p` browser examples/integration PRs for shipping final release and follow up with libp2p infra for deployment

#### Rust IPFS Initiative
@aphelionz

- Phase 1.0 [Grant report](https://github.com/ipfs/devgrants/blob/c560f3134a3391083b867414ddb65615ca06155e/open-grants/ipfs-rust/reports/phase-1.0.md) submitted
- [Phase 1.1](https://github.com/orgs/ipfs-rust/projects/2) is in progress, about 1 week behind due to internal + external circumstances
    - /version and /swarm are done, /id is mostly done, /pubsub in progress
    - Mostly working with `rust-libp2p` complexities
    - refactoring caused /swarm to delay, which delayed /pubsub
    - dealing with need to refactor certain interface / interop tests
- Phase 1.2 will contain /bitswap, /refs, /block, and /dag

### Other Initiatives

This is the backlog of initiatives that are either on-hold or low-priority.

#### UnixFS v1.5 (go-ipfs)
@achingbrain / @ribasushi

- Shipped in JS
- There is a bounty open for go: https://github.com/ipfs/go-ipfs/issues/6920

#### Add Performance (js-ipfs)
@achingbrain

#### Distributed Signaling (js-libp2p)
@jacobheun

- Pushing for a draft spec by the end of Q2

#### Migration to multihash keys in blockstore (js-ipfs / go-ipfs)
@hsanjuan

Juan said we should look into alternatives. Discussion ongoing here:  https://github.com/ipfs/specs/issues/242.

@stebalien is punting this discussion till April.

### Design Review Proposals
> You want to propose something for design review.

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

### Questions
> You have questions and need them answered. List them here.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

### Week Update (for async review)
> Only post updates that are relevant 
to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟 

@vasco-santos
- Done:
  - `libp2p-stardust`
    - Addressed reviews on examples PR
      - [ipfs/js-ipfs#2831](https://github.com/ipfs/js-ipfs/pull/2831)
    - Deployment PR with docker file merged
      - [libp2p/js-libp2p-stardust#24](https://github.com/libp2p/js-libp2p-stardust/pull/24)
  - `js-libp2p` planning with jacob
  - `js-libp2p` peerStore improvements plan with 6 milestones
    - [libp2p/js-libp2p#582](https://github.com/libp2p/js-libp2p/issues/582)
    - started working on the initial milestone
    - milestone 2 proposal plan to deprecate `peer-info`
      - [libp2p/js-libp2p#589](https://github.com/libp2p/js-libp2p/issues/589)
- Blocked: N/A
- Next:
  - `libp2p-stardust`
    - ship final release
    - sync with lib2p infra team for deploying signaling servers
    - get `js-ipfs` and `js-libp2p` browser example merged
  - peerStore improvements
    - milestone 1 PR ready for review
    - Identify outstanding issues for milestone 3 (Persistent PeerStore)

@jacobheun
- Done:
  - webrtc-star now automatically deploys to [Docker Hub](https://hub.docker.com/r/libp2p/js-libp2p-webrtc-star)
  - started Testground metrics collection for Content Routing, will continue that this week
- Blocked:
- Next:
  - Q2 OKR planning (js-libp2p and go-ipfs)
  - Continue testing of the DHT performance for IPFS 0.5 release

@dirkmc

- Done:
  - Go performance improvements
    - Reuse message objects.
    - Avoid allocating when serializing CIDs.
- Next:
  - There's a [wantlist leak](https://github.com/ipfs/go-bitswap/issues/310) in go-bitswap that we need to track down before the release.


@lidel

- Done:
  - subdomain gateways
    - go-ipfs: landed [feat: gateway subdomains](https://github.com/ipfs/go-ipfs/pull/6096)
    - is-ipfs: [feat: isIPFS.dnslinkSubdomain(url)](https://github.com/ipfs/is-ipfs/pull/32)
    - shipped ipfs-companion beta with [feat: *.localhost subdomain gateway support with http proxy](https://github.com/ipfs-shipyard/ipfs-companion/pull/853)
  - other
    - looked into metrics sources for Browsers&Connectivity SIG
  - distributed-wikipedia-mirror
    - smoke testing [PR with new build scripts](https://github.com/ipfs/distributed-wikipedia-mirror/pull/70#issuecomment-591987481) against latest Turkish snapshot
- Next: Q1/Q2 planning, reviews, ipfs-companion-stable 

@hugomrdias   

- Done: 
  - review [https://github.com/ipfs/js-ipfs/pull/2811](https://github.com/ipfs/js-ipfs/pull/2811)
  - ship aegir with electron lazy download
  - [https://github.com/ipfs/aegir/pull/532](https://github.com/ipfs/aegir/pull/532) github actions for bundle size and improved bundle size aegir cmd
  - ship ipfs-utils 1.0.0
  - [https://github.com/ipfs/js-ipfs/issues/2924](https://github.com/ipfs/js-ipfs/issues/2924) Track: remove usage of node globals #2924
- Next:
  - Q1 scoring and Q2 planning

@willscott
- Done:
  - Autonat merging / v0.2.0 landed
  - ipfs counter is collecting live peer data
- Next:
  - pull out statistics from ipfs counter
  - extend grafana metrics of content routing performance
  - help with ipfs 0.5

@aschmahmann
- Done:
  - worked with @petar on developing + implementing async queries improvement to the new DHT proposal
  - work on dht testground plan + accumulating results
  - review and tackle some other misc DHT fixes
- Blocked:
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
- Next:
  - land async queries PR
  - more testing of DHT improvements
  - any other DHT things in the way of pushing out go-ipfs 0.5 RC

@johnnymatthews
- Done:
  - Go-IPFS 0.5 docs being made. Branch is here [`ipfs/ipfs-docs-v2:go-ipfs-0.5`](https://github.com/ipfs/ipfs-docs-v2/tree/go-ipfs-0.5).
- Next:
  - People will start getting requests for reviews soon. Stay sharp.

@alanshaw
- Done:
  - Learn google cloud and kubernetes
  - Deployed 2 hydras 4 sybils
  - Deployed Prometheus and Grafana (but need configuring)
  - Took notes on the deployment https://github.com/libp2p/hydra-booster/pull/49
- Next:
  - Hooking up Prometheus and Grafana to the Hydra nodes

@achingbrain
- Done:
  - Merged mfs into core https://github.com/ipfs/js-ipfs/pull/2811
  - Removed ipfs-utils from monorepo: https://github.com/ipfs/js-ipfs/pull/2931
- Next:
  - Cancellable requests https://github.com/ipfs/js-ipfs/issues/2884

