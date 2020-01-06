# 🚀 IPFS Core Implementations Weekly Sync 🛰 Dec 09, 2019 

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @lidel
  - @vasco-santos
  - @pedromiguelss
  - @jimpick
  - @riba
  - @hugomrdias
- **Recording:** https://youtu.be/wlivUqa2iMs

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

#### Upcoming/Shipped Releases
@stebalien / @achingbrain / @alanshaw

- 🥚 `js-ipfs` v0.41.0 (upcoming)
  - https://github.com/ipfs/js-ipfs/issues/2656
  - Shipping ~Jan 13 (hopefully RC before xmas)
  - Performance improvements
  - Brand new APIs, promises and iterators are bubbling up!
  
- 🥚 `go-ipfs` v0.5.0 (upcoming)
  - ETA Dec 24

#### Upgrade Testing Infra/Process
@jimpick / @stebalien / @daviddias

- many team members getting together for a hack week this week
- lots going on
  - adding more test plans
  - working on infrastructure improvements
  - NAT traversal simulations in testground

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- Highly relevant discussion in https://github.com/ipfs/docs/issues/405
- Go: unblock https://github.com/libp2p/go-libp2p-core/pull/41

#### Distributed Signaling (js-libp2p)
@jacobheun

- Still on hold pending async/await

#### IPNS (go-ipfs / js-ipfs)
@aschmahmann / @hugomrdias

IPNS over PubSub
  - [go-libp2p PR](https://github.com/libp2p/go-libp2p-pubsub-router/pull/37) mergeable pending approval from @stebalien
  - [go-ipfs PR](https://github.com/ipfs/go-ipfs/pull/6758) blocked by datastore PR below due to dependency issues

#### Add Performance (go-ipfs / js-ipfs)
@aschmahmann / @achingbrain

Switch to async datastores in go-ipfs underway
  - https://github.com/ipfs/go-ipfs/issues/6775 is the epic
  - https://github.com/ipfs/go-ipfs/pull/6785 blocked on review

#### Migration to multihash keys in blockstore (js-ipfs)
@alanshaw / @auhau

- Still on hold, no bandwidth currently.

#### Bitswap Updates
@dirkmc

- currently going through review
- testplan written in testground, but need some traffic shaping features added to testground
- Won't be breaking to js-ipfs bitswap, but will be less efficient until js-ipfs is updated

#### js-ipfs/js-libp2p/js-ipld async await refactor
@achingbrain / @jacobheun / @vasco-santos / @alanshaw

- js-ipfs-http-client
  - Done pending review(s)
  - https://github.com/ipfs/js-ipfs-http-client/pull/1183
  - 88KB!!! (was 246KB)


- js-ipfs
  - In progress
  - https://github.com/ipfs/js-ipfs/pull/2547


- js-libp2p
  - Daemon and libp2p Interop
    - Refactored the libp2p daemon to use async libp2p [js-libp2p-daemon#29](https://github.com/libp2p/js-libp2p-daemon/pull/29)
    - Daemon client now uses async daemon [js-libp2p-daemon-client#18](https://github.com/libp2p/js-libp2p-daemon-client/pull/18)
    - go<->js libp2p interop tests are passing! [libp2p/interop#26](https://github.com/libp2p/interop/pull/26)
  - js-libp2p token dialer finished, pending final review [js-libp2p#490](https://github.com/libp2p/js-libp2p/pull/490)
  - Finishing up Ping, Stats and Connection Manager refactors
  - Improved Docs!
    - API docs are almost done [js-libp2p#472](https://github.com/libp2p/js-libp2p/pull/472)
    - New configuration docs [js-libp2p#495](https://github.com/libp2p/js-libp2p/pull/495)
    - Getting Started docs coming soon!
  - Remaining examples refactors are under way. There are a [slew of open PRs](https://github.com/libp2p/js-libp2p/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aopen+examples) for this.  
  - Pre release coming this week
    - Integration into js-ipfs will start

### Design Review Proposals
> You want to propose something for design review.


### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

- js-ipfs is re-licensed MIT+Apache
  - Please add your sign-off https://github.com/ipfs/js-ipfs/issues/2624

- js-ipfs-http-client is re-licensed MIT+Apache
  - Please add your sign-off https://github.com/ipfs/js-ipfs-http-client/issues/1189

### Questions
> You have questions and need them answered. List them here.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

- would appreciate some feedback on changes proposed in the latest Companion beta: https://github.com/ipfs/docs/issues/405#issuecomment-562789534 

### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟

@vasco-santos
- Done:
  - created docs for `js-libp2p`configuration
    - [libp2p/js-libp2p#495](https://github.com/libp2p/js-libp2p/pull/495)
  - new `js-libp2p` is interoperable
    - Miscellaneous PRs for getting the daemon and interop working properly
    - [libp2p/js-libp2p-daemon-client#18](https://github.com/libp2p/js-libp2p-daemon-client/pull/18)
    - [libp2p/interop#26](https://github.com/libp2p/interop/pull/26)
  - Started migrating remaining `js-libp2p`examples to async, as well as a getting started document
    - [libp2p/js-libp2p#498](https://github.com/libp2p/js-libp2p/pull/498)
    - [libp2p/js-libp2p#499](https://github.com/libp2p/js-libp2p/pull/499)
    - [libp2p/js-libp2p#500](https://github.com/libp2p/js-libp2p/pull/500)
    - [libp2p/js-libp2p#502](https://github.com/libp2p/js-libp2p/pull/502)
- Blocked: N/A
- Next:
  - Finish refactoring `js-libp2p` examples
  - Refactor `js-libp2p` ping
  - Finish getting started guide

@dirkmc
- Done:
  - Started reviews for [Bitswap PoC](https://github.com/ipfs/go-bitswap/pull/189)
- Next:
  - Start porting changes to js-bitswap


@lidel
- Done:
  - ipfs-companion:
    - PR: [fix: update error page for ipfs://CIDv0 in Firefox 70+](https://github.com/ipfs-shipyard/ipfs-companion/pull/824)
    - released [v2.9.0.867 (Beta)](https://github.com/ipfs-shipyard/ipfs-webui/issues/1346)
    - PR: [feat: improved experience on DNSLink websites](https://github.com/ipfs-shipyard/ipfs-companion/pull/826)
    - released [v2.9.0.872 (Double Beta)](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.9.0.872)
    - PR: [feat: preload visited DNSLink URLs to local node](https://github.com/ipfs-shipyard/ipfs-companion/pull/827)
  - ipfs-webui:
    - PR: [feat: sharing improvements](https://github.com/ipfs-shipyard/ipfs-webui/pull/1347)
    - PR: [fix: geoip and peers on map](https://github.com/ipfs-shipyard/ipfs-webui/pull/1334)
    - QA for [v2.7.2](https://github.com/ipfs-shipyard/ipfs-webui/releases/tag/v2.7.2)
    - [Files: permalink for sharing](https://github.com/ipfs-shipyard/ipfs-webui/issues/1349)
    - PR: [feat: e2e test suite against real go-ipfs](https://github.com/ipfs-shipyard/ipfs-webui/pull/1353)
  - ipfs/blog: [fix: zh-cn links for IPFS Weekly ](https://github.com/ipfs/blog/pull/339)
  - Other
    - Reviewed: [feat: support encoding/decoding peer IDs as CIDs _in text_](https://github.com/libp2p/go-libp2p-core/pull/41)
    - Design review and discussions: [Hosting Web Apps on IPFS](https://github.com/ipfs/docs/issues/405#issuecomment-562789534)
    - sync with Hugo & Chris on docs, vuepress, companion and relative paths
- Next:
  - land PR with webui e2e tests
  - design review & execution in Companion: https://github.com/ipfs/docs/issues/405
  
@jacobheun
- Done:
  - Fixed some bugs with peer discovery logic [js-libp2p#494](https://github.com/libp2p/js-libp2p/pull/494)
  - Removed old code and clean up dependencies for the refactor [js-libp2p#497](https://github.com/libp2p/js-libp2p/pull/497)
  - Started work on Stats refactor [js-libp2p#501](https://github.com/libp2p/js-libp2p/pull/501)
  - `js-libp2p-tcp` can now dial/listen on unix paths [js-libp2p-tcp/pull/118](https://github.com/libp2p/js-libp2p-tcp#118)
  - `js-libp2p-daemon` refactor to async is complete [js-libp2p-daemon#29](https://github.com/libp2p/js-libp2p-daemon/pull/29)
- Next:
  - Finish stats refactor [js-libp2p#501](https://github.com/libp2p/js-libp2p/pull/501)
  - Refactor connection manager
  - Do a pre release
  - Start integration with js-ipfs
  
@pedromiguelss
- Done
    - Added `—hidden` flag to CLI’s add command
        - https://github.com/ipfs/js-ipfs/pull/2649
    - Fixed `echo-server` to reject when `server.listen()` or `server.close()` fail 
        - https://github.com/ipfs/interface-js-ipfs-core/pull/569
- Blocked: N/A
- Next:
    - Verify `interface-ipfs-core` tests that are skipped in `js-ipfs` and/or `js-ipfs-http-client`
  
@hugomrdias
- Done:
  - https://github.com/ipfs/js-ipfsd-ctl/pull/395 new ipfsd-ctl almost there :)
    - Plus secondary PRs to support it
  - Help out docs team deploying the new site with IPFS
  - Review
    - https://github.com/ipfs/js-ipfs-http-client/pull/1183
    - https://github.com/ipfs/interface-js-ipfs-core/pull/567
  - Release `ipfs-utils` 0.5.0
- Next:
  - Dedupe ipfs tests
  
