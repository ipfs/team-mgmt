# 🚀 IPFS Core Implementations Weekly Sync 🛰 Sep 2, 2019

- **Lead:** @alanshaw
- **Notetaker:** @olizilla
- **Attendees:**
    - @momack2
    - @olizilla
    - @achingbrain
    - @lidel
    - @vasco-santos
    - @jimpick
    - @autonome
    - @hugomrdias
- **Recording:** https://youtu.be/mrwv5UzLDjw

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
@stebalien / @alanshaw

- PR for updated release process for js-ipfs [ipfs/js-ipfs#2408](https://github.com/ipfs/js-ipfs/pull/2408)

<img src="https://ipfs.io/ipfs/QmU5pwcGh38DqzLy3rK8GAHuWm2kK87oGqDAtqZYWhxjab?filename=release-cycle.jpg" width="100%" />

Thanks @eric

#### Upgrade Testing Infra/Process
@jimpick / @stebalien / @alanshaw

Next steps:

* @alanshaw review [ipfs/benchmarks#268](https://github.com/ipfs/benchmarks/pull/268)

- jim is adding instrumentation to go-ipfs
- raul has PR for running in a nomad cluster.

#### Garbage Collection and Pinning (js-ipfs)
@alanshaw

- Initial impl of GC merged [ipfs/js-ipfs#2022](https://github.com/ipfs/js-ipfs/pull/2022), will be available in [`v0.38`](https://github.com/ipfs/js-ipfs/issues/2396)
  - N.B. This is initial impl adding commands to core, CLI and HTTP API. No automatic or periodic collection.

Next steps:

1. Streaming [ipfs/js-ipfs#2266](https://github.com/ipfs/js-ipfs/issues/2266)
2. Automatic / periodic collection (TODO: needs tracking issue?)

you gotta call the command. its a first pass.

#### Gossipsub (js-libp2p)
@vasco-santos

- Interop PR merged [libp2p/interop#17](https://github.com/libp2p/interop/pull/17)
- Integration reviewed and pending final tweaks [ipfs/js-ipfs#2298](https://github.com/ipfs/js-ipfs/pull/2298)
    - ! Renamed: `--enable-pubsub-experiment` => `--enable-pubsub`

profiling of gossipsub shows that message signing is slow.
but we rely on message signing for security...
we are looking to see if we can upgrade the protocol

!!!enable it by default if it is not experimental!!!

does it do anything if you dont use pubsub?
it would accept incoming messages.

ACTION: @stebalian @alanshaw @vasco-santos FOLLOW UP!


#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- applied suggested changes, PR ready for final review: [RFC 0001: Text Peer Ids as CIDs](https://github.com/libp2p/specs/pull/209)

Please take a look if you are interested in peerIDs as CIDv1 and the new RFC process!

#### Distributed Signaling (js-libp2p)
@jacobheun

#### IPNS (js-ipfs / go-ipfs)
@aschmahmann / 

@hugomrdias
- IPNS over DNS
  - Spec work ongoing, call scheduled for tomorrow to discuss missing pieces.
  - feat: add support for ipns and recursive to ipfs resolve should be finally ready to merge.
    - https://github.com/ipfs/js-ipfs/pull/2297 
  - This week i should start `ipfs dns should use DNS over HTTPS` to support IPNS over DNS
  


#### Migration to multihash keys in blockstore (js-ipfs)
@alanshaw/@auhau

@auhau did some initial analysis in code base for parts that will be affected. Outcome is in [js-ipfs/#2415](https://github.com/ipfs/js-ipfs/issues/2415) 

Next steps:

* @alanshaw must review JS IPFS repo migration tool PR [#1](https://github.com/ipfs/js-ipfs-repo-migrations/pull/1)
* @alanshaw and @stebalien please provide input to [js-ipfs/#2415](https://github.com/ipfs/js-ipfs/issues/2415) 

#### Package Managers Updates
@dirkmc

#### Bitswap Updates
@dirkmc / @stebalien

* Proposal: https://github.com/ipfs/go-bitswap/issues/186
  * PoC implementation: https://github.com/ipfs/go-bitswap/pull/189

#### js-ipfs/js-libp2p/js-ipld async await refactor
@alanshaw

Tracking issue: [js-ipfs#1670](https://github.com/ipfs/js-ipfs/issues/1670)

* Trying to land [`addAsyncIterator`](https://github.com/ipfs/js-ipfs/pull/2379) in js-ipfs which might [make adding in js-ipfs faster than go-ipfs in some situations](https://github.com/ipfs/js-ipfs/pull/2372)!
* Landed browser pubsub in js-ipfs-http-client (switch to `fetch` API and async/await)
  * https://ipfs.io/blog/2019-08-29-pubsub-in-the-browser/
* PR for add with `fetch` is WIP [ipfs/js-ipfs-http-client#1087](https://github.com/ipfs/js-ipfs-http-client/pull/1087)

**72%** merged or with open PRs

### Design Review Proposals
> You want to propose something for design review.

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

- @alanshaw: Please review the updated js-ipfs release process [ipfs/js-ipfs#2408](https://github.com/ipfs/js-ipfs/pull/2408)
  - Shipping date - give people an idea of when it's coming!
  - Open the next release issue asap - start planning early
  - How do we want to follow Semver going forwards?
- @alanshaw: I'm going to be away for a bit and the next js-ipfs release needs a release manager - please read: https://github.com/ipfs/js-core/issues/4
- @lidel: libp2p/specs PR needs final review/merge: [RFC 0001: Text Peer Ids as CIDs](https://github.com/libp2p/specs/pull/209)
- @stebalien: I will be assigning lead maintainers for various repos. If I ask you to be a lead maintainer, please read https://github.com/ipfs/team-mgmt/blob/master/LEAD_MAINTAINER_PROTOCOL.md and feel free to say no or later. 
- @hugomrdias does anyone knows what's up with the gateways `ipfs dns` cmd? 
  - https://travis-ci.com/ipfs/js-ipfs/jobs/230141268#L2549
  - go-ipfs switched to recursive lookups by default, could be relevant.
  - test suggests its getting *Bad Jason*. 

### Questions
> You have questions and need them answered. List them here.

### Parking Lot

- @lidel: what is the state / next steps for DHT in js-ipfs? current pain points? (asking for a friend who may want to use it in Brave with TCP multiaddrs 🙃)

https://github.com/ipfs/js-ipfs/pull/1994

### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟

@alanshaw
- Done:
  - Merged GC PR ([ipfs/js-ipfs#2022](https://github.com/ipfs/js-ipfs/pull/2022)), and these PRs also got merged:
    - PR to export repo block key encode/decode fns [ipfs/js-ipfs-repo#206](https://github.com/ipfs/js-ipfs-repo/pull/206)
    - PR to export MFS root key [ipfs/js-ipfs-mfs#58](https://github.com/ipfs/js-ipfs-mfs/pull/58)
  - Released js-ipfs pre-release `0.38.0-pre.0` with GC work
  - Opened planning issue for js-ipfs `0.38` release [ipfs/js-ipfs#2396](https://github.com/ipfs/js-ipfs/issues/2396)
  - Merged js-ipfs-http-client browser pubsub PR [ipfs/js-ipfs-http-client#1059](https://github.com/ipfs/js-ipfs-http-client/pull/1059)
    - Added browser pubsub example [ipfs/js-ipfs-http-client#1086](https://github.com/ipfs/js-ipfs-http-client/pull/1086)
  - Released js-ipfs-http-client `34.0.0` with browser pubsub support!
    - Blog post for browser pubsub support
      - https://blog.ipfs.io/2019-08-29-pubsub-in-the-browser/
  - Created PR for improved js-ipfs release process [ipfs/js-ipfs#2408](https://github.com/ipfs/js-ipfs/pull/2408)
- Next:
  - Unblock any libp2p async/await work that I am blocking (libp2p-tcp, interface-connecttion, libp2p-mplex etc.)
  - Merge gossipsub integration PR [ipfs/js-ipfs#2298](https://github.com/ipfs/js-ipfs/pull/2298)
  - Merge limit concurrent HTTP requests in browser PR [ipfs/js-ipfs#2304](https://github.com/ipfs/js-ipfs/pull/2304)
  - Get "fetch add" PR ready for review [ipfs/js-ipfs-http-client#1087](https://github.com/ipfs/js-ipfs-http-client/pull/1087)
  - Review JS IPFS repo migration tool PR [ipfs/js-ipfs-repo-migrations#1](https://github.com/ipfs/js-ipfs-repo-migrations/pull/1)
  - Finish review for benchmarks go-ipfs update [#268](https://github.com/ipfs/benchmarks/pull/268)
  - Review IPFS Test Infrastructure Design document https://docs.google.com/document/d/1jToUP0E0of0WSnLv7gdIEXXQgfscIaxq_aEbwCMPN28

@lidel
 - Done:
   - ipfs.io: [robots.txt discussion](https://github.com/ipfs/website/pull/330)
   - interface-js-ipfs-core: [fix: tests of addFromURL in browsers](https://github.com/ipfs/interface-js-ipfs-core/pull/514)
   - mwoffliner: [Add canonical link header](https://github.com/openzim/mwoffliner/pull/963) (for [ipfs/distributed-wikipedia-mirror](https://github.com/ipfs/distributed-wikipedia-mirror))
   - got working TCP transport with embedded js-ipfs in Brave ([sneak peek](https://ipfs.io/ipfs/QmQczWn9zcqCF1UueFvjRniSdUUv7LzU5ZUqS4FzvmHJrM))
 - Blocked:
   - libp2p/specs PR needs final review/merge: [RFC 0001: Text Peer Ids as CIDs](https://github.com/libp2p/specs/pull/209)
 - Next:
   - update PRs with open specs with received feedback
   - continue work on TCP transport in Brave and try to do the same witg UDP for MDNS discovery

@vasco-santos
  - Done:
    - Async migration draft PRs
      - [libp2p/js-libp2p-kad-dht#144](https://github.com/libp2p/js-libp2p-kad-dht/pull/144)
      - [libp2p/js-libp2p-pubsub#26](https://github.com/libp2p/js-libp2p-pubsub/pull/26)
    - Gossipsub
      - [libp2p/interop#17](https://github.com/libp2p/interop/pull/17) merged
      - [ipfs/js-ipfs#2298](https://github.com/ipfs/js-ipfs/pull/2298) integration PR review addressed
      - [ipfs/js-ipfsd-ctl#362](https://github.com/ipfs/js-ipfsd-ctl/pull/362)
      - [ipfs/js-ipfsd-ctl#363](https://github.com/ipfs/js-ipfsd-ctl/pull/363)
  - Blocked:
  - Next:
    - Iterate on the started draft PRs for async migration
    - Create migration PR for `libp2p-floodsub`
    - get [ipfs/js-ipfs#2298](https://github.com/ipfs/js-ipfs/pull/2298) merged
