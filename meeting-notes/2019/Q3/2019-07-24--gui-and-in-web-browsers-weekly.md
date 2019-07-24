GUI and In Web Browsers 2019-07-24
===

A weekly discussion and show & tell around IPFS _GUIs_ and _Web Browsers_

Details: https://github.com/ipfs/team-mgmt/issues/790

## Agenda

- Follow up from last week on ways to load Web UI 
  ([ipfs-companion/issues/736](https://github.com/ipfs-shipyard/ipfs-companion/issues/736))
- Content and Peer Discovery/Routing in Browsers
  - Proposal to [sunset the *-star protocols 🌅](https://github.com/libp2p/js-libp2p/issues/385))
  - Ways to improve Delegated Routing in web browser 
- Next steps for IPNS in Browsers
- Issues with peers view ([ipfs-webui/issues/1072](https://github.com/ipfs-shipyard/ipfs-webui/issues/1072))
    - How to sort location?


## Notes

* Loading webui
  * compat across releases and implementations
  * ready to merge
  * mitm risk!
  * go/js ipfs using os-level dns
  * can't tell if encrypted or not
  * usually not, sad trombone
  * for now, hold off on loading from dnslink
  * until we have doh/dot
  * will ship go-ipfs webui fallback
  * ipns also ready, but parked
  * no backwards compat issues
  * even oldest go-ipfs will work
  * now a lot safer, no more leaking site visits
  * no more tamper risk
  * already have encrypted resolver, just not default
  * on companion, removes maintenance burden
* content and peer discovery
  * #1 - david proposed to sunset *-star protocols
  * it's default now, but they were intended to be temporary
  * signal to community that we will be moving away from them
  * need new infra for new network defaults
  * eg rendezvous protocol
  * #2 - delegated routing
  * eg: ask dht for peers that have a given cid, or reverse
  * challenge is mostly browser use, but there are a number of challenges there
  * connection caps, long requests hoarding slots
  * solutions: throttling concurrent requests, support timeouts for long running requests
  * they'll block everything right now
  * how much improvement is possible with delegated routing
  * main improvement is when adding content
  * nodes who coldn't reach you before can get the content from the delegated nodes
  * not a pin - just holds in cache until GC
  * DG is short term
  * long term is relay and rendezvouz
  * Q: how are the delegate peers found?
  * A: preloads are intended to close that gap
  * so that makes delegates like relays?
  * yessish, temporarily
  * can we connect to all peers listening on websockets?
  * yes, but there's not many of them
  * doing it right involves certs etc
  * and the others are unencrypted
  * most websites are https but dont have ws
  * Q: most connections NAT'd, will relays help
  * totally
  * bootstrap nodes are planned to be relays and listen on ws
  * if lots of ppl running this package bundle, overall network health gets better
  * but still need to offer federated path for browsers
  * Q: what's blocking relay and what is timeframe?
  * can't sunset *-star until new infra running in parallel, that provides DG and RV
  * Infra team rolled back a number of relays, how do not hit same problems
  * old problem was pushing the data through those, but no other relays were available, so became high volume and expensive
  * we need to offer other p2p communication between relayed nodes - eg "hey, we both speak web-rtc, let's speak directly to each other!"
  * mixing of RV and relay - single machine can act as both
  * p2p upgrade path once address mutual discovery
  * will RV be available in browsers?
  * maybe - browser can opt-in
* IPNS in web browsers
  * tracking issue js-ipfs #2000 (!!!)
  * this quarter the goal is make production ready and deploy it
  * still needs some tweaks
  * eg DOH
  * also need support on go-ipfs, which will happen this quarter
  * djdv has preliminary impl
  * will push up on the end of Q3
  * Q: gateway being broken out from go-ipfs, will there be convention for standalone gateway apis?
  * no convention yet, but plan is to map to repo structure
  * and api will be the same
  * Q: extracting only ipns, or all naming things?
  * stuck on this right now - what is naming, what is ipns, what isn't
  * what to keep inside, outside
  * Q: what do we get from these cahnges?
  * single router approach vfor local and global internet
  * no dht dependency
  * streamlined
  * known old tech
  * super fast
  * user will have different routers available
  * either fast or decentralized
  * premade subdomains for everything you publish
  * Q: dynamic fallback?
  * yes we have a plan
  * not impl completely  at first
  * but can add more options later
  * can choose fast and have hook for later
* peers view
  * justin
  * how to sort locations?
  * have text desc (city,country) and a bunch of unknowns
  * if by place name, country then city makes sense
  * more interesting might be highest latency
  * unknowns should always be at end
  * unkowns are resolved over time
  * geolocated?
  * would be confusing default, but interesting!
  * what to offer sorts on?
  * latency most important
  * should be consistent about what's sortable and what's not, or visually identify

## Async Updates

_Post async updates here, as long related to GUI or Web Browsers_

### @lidel

Done:
- Switching IPFS Companion to use Web UI version from IPFS Node
  ([ipfs-companion/issues/736](https://github.com/ipfs-shipyard/ipfs-companion/issues/736))
  - PR: [use Web UI provided by IPFS node](https://github.com/ipfs-shipyard/ipfs-companion/pull/737)
  - PR: [opt-in for loading webui from dnslink](https://github.com/ipfs-shipyard/ipfs-companion/pull/738)
  - Concern: [How to mitigate MITM on unencrypted DNS?](https://github.com/ipfs/go-ipfs/pull/6530#issuecomment-513275280)
- [Improving performance of Delegated Routing](https://github.com/libp2p/js-libp2p-delegated-content-routing/issues/12) in web browser (Brave): 
  - PR: https://github.com/libp2p/js-libp2p-delegated-content-routing/pull/16
  - PR: https://github.com/libp2p/js-libp2p-delegated-peer-routing/pull/12
  
Next:
- Delegated routing modules:
  - add timeouts in browser
    ([js-libp2p-delegated-content-routing/issues/15](https://github.com/libp2p/js-libp2p-delegated-content-routing/issues/15))
  - js-ipfs: throttle preload and DNS calls
- Release New Companion Beta with improved Delegated Routing enabled

### @hacdias

- Done:
    - Add new 'New Folder' icon to ipfs-css by @eric ([PR](https://github.com/ipfs-shipyard/ipfs-css/pull/34))
    - Only show accelerators on IPFS Desktop on macOS ([PR](https://github.com/ipfs-shipyard/ipfs-desktop/pull/984))
    - Fix ´npm install´ script on Windows ([PR](https://github.com/ipfs-shipyard/ipfs-desktop/pull/986))
    - Do not error when there is port collision on IPFS Desktop ([PR](https://github.com/ipfs-shipyard/ipfs-desktop/pull/989))
    - Use local gateway when available on IPFS Desktop ([PR](https://github.com/ipfs-shipyard/ipfs-desktop/pull/994))
- Next:
    - Allow to move repository location on IPFS Desktop ([PR](https://github.com/ipfs-shipyard/ipfs-desktop/pull/990))
    - Finish and merge 'Files in the Wild' ([PR](https://github.com/ipfs-shipyard/ipfs-webui/pull/1027))
