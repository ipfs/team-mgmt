# 🚀 IPFS Core Implementations Weekly Sync 🛰 Nov 25, 2019 

- **Lead:** @alanshaw
- **Notetaker:** @achingbrain
- **Attendees:**
  - @pedromiguelss
  - @achingbrain
  - @olizilla
  - @dirkmc
  - @mburns
- **Recording:** https://youtu.be/0oMmIaPIBsI

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

- `js-ipfs-http-client` v40 released
    - All `fetch` and `async/await` under the hood
    - https://github.com/ipfs/js-ipfs-http-client/releases/tag/v40.0.0
    - WIP PR to reduce bundle size by over _half_ https://github.com/ipfs/js-ipfs-http-client/pull/1174
- `js-ipfs` v0.40 in RC, Stage 2 - Community Dev Testing
    - Hopefully shipping beginning of Dec 2019
    - https://github.com/ipfs/js-ipfs/issues/2558
- New bootstrappers
    - Old bootstrappers being retired
    - Only DNS Multiaddrs supported in future, js-IPFS needs support adding
- Metadata supported added to `js-ipfs-unixfs-importer`
    - https://github.com/ipfs/specs/blob/master/UNIXFS.md

#### Upgrade Testing Infra/Process
@jimpick / @stebalien / @daviddias

- No update

#### Subdomain Gateway (Base32, Origin isolation)
@lidel

- Base32 encoded CIDs supported in paths

#### Distributed Signaling (js-libp2p)
@jacobheun

- Still on hold pending async/await

#### IPNS (go-ipfs / js-ipfs)
@aschmahmann / @hugomrdias

- No update

#### Add Performance (go-ipfs / js-ipfs)
@aschmahmann / @achingbrain

- 

#### Migration to multihash keys in blockstore (js-ipfs)
@alanshaw / @auhau

- No update

#### Bitswap Updates
@dirkmc

- Blocked on PRs and available capacity due to testground

#### js-ipfs/js-libp2p/js-ipld async await refactor
@achingbrain / @jacobheun / @vasco-santos / @alanshaw

- Nearly complete
- it-length-prefixed updated to support use in secio
- libp2p bubbling up to ipfs layer
- js-ipfs-http-client converted

### Design Review Proposals
> You want to propose something for design review.

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

- js-ipfs is re-licensed MIT+Apache
  - Please add your sign-off https://github.com/ipfs/js-ipfs/issues/2624

### Questions
> You have questions and need them answered. List them here.

- js-libp2p-kad-dht [silently drops messages](https://github.com/libp2p/js-libp2p-kad-dht/issues/154) that are too long. Should it return errors to the remote client instead?

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟

@alanshaw
- Done:
  - `js-ipfs-http-client` `v40.0.0` released
    - https://github.com/ipfs/js-ipfs-http-client/releases/tag/v40.0.0
  - `js-ipfs` `v0.40` in RC
    - Currently in Stage 2 - Community Dev Testing
    - https://github.com/ipfs/js-ipfs/issues/2558
  - Fixed issue with `ipld-dag-cbor` for new `ipfs dag put` CLI command
      - `ipld-dag-cbor` no longer allows `{ "/": "<CID>" }` links
      - https://github.com/ipfs/js-ipfs/pull/2631
  - Added multi newline delimited CID pipe to `ipfs cid base32`
      - https://github.com/multiformats/js-cid-tool/pull/8
  - `it-length-prefixed` can now encode/decode fixed length
      - Implemented custom length encoder/decoders to enable
      - https://github.com/alanshaw/it-length-prefixed/pull/8
  - Created `it-tar` - async iterable based tar parser
      - https://github.com/alanshaw/it-tar
  - js-ipfs relicensed as dual MIT+Apache!
      - https://github.com/ipfs/js-ipfs/pull/2620
- Blocked:
- Next:
  - Merge Pedro's interface-ipfs-core async/await tests
  - Merge ipfs-http-client dep update - some fallout ensues
  
@pedromiguelss
- Done
    - Added `—human` flag to `repo.stat` cli
        - https://github.com/ipfs/js-ipfs-repo/pull/216
        - https://github.com/ipfs/js-ipfs/pull/2630
    - Added `—human` flag to `bitswap.stat` cli
        - https://github.com/ipfs/js-ipfs/pull/2619
        - https://github.com/ipfs/js-ipfs/pull/2608
        - https://github.com/ipfs/interface-js-ipfs-core/pull/559
        - https://github.com/ipfs/js-ipfs-http-client/pull/1162
    - New PR for `interface-ipfs-core` (async/await refactor) to replace the old one. This new PR does not depend on @hugomrdias branch.
        - https://github.com/ipfs/interface-js-ipfs-core/pull/562
        - https://github.com/ipfs/js-ipfs/pull/2625
        - https://github.com/ipfs/js-ipfs/pull/2626
        - https://github.com/ipfs/js-ipfs-http-client/pull/1176
- Blocked: N/A
- Next:
    - Re-evaluate hidden file handling still has interop with go-ipfs
        - https://github.com/ipfs/js-ipfs/issues/1917
    - Verify skipped `interface-ipfs-core` tests that are skipped in `js-ipfs` and/or `js-ipfs-http-client`
    
@vasco-santos
- Done:
   - Pubsub subsystem refactor finished
      - [libp2p/js-libp2p#467](https://github.com/libp2p/js-libp2p/pull/467)
    - DHT refactor almost complete
      - [libp2p/js-libp2p-kad-dht#148](https://github.com/libp2p/js-libp2p-kad-dht/pull/148)
      - [libp2p/js-libp2p-kad-dht#152](https://github.com/libp2p/js-libp2p-kad-dht/pull/152)
      - [libp2p/js-libp2p-kad-dht#153](https://github.com/libp2p/js-libp2p-kad-dht/pull/153)
      - [libp2p/js-libp2p#480](https://github.com/libp2p/js-libp2p/pull/480)
- Blocked: N/A
- Next:
  - Finish DHT subsystem refactor
    - [libp2p/js-libp2p-kad-dht#153](https://github.com/libp2p/js-libp2p-kad-dht/pull/153)
    - [libp2p/js-libp2p#480](https://github.com/libp2p/js-libp2p/pull/480)
  - Finish integration of discovery modules
  - Finish docs PR

@lidel
- Done:
  - ipfs/in-web-browsers: [test: protocol handler support test page](https://github.com/ipfs/in-web-browsers/pull/154)
  - ipfs-companion
    - shipped [v2.9.0.860 (Beta)](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.9.0.860)
  - ipfs-webui: [looking into ways to improve test suite](https://github.com/ipfs-shipyard/ipfs-webui/issues/1164)
  - ENS/content-hash: [fix: persist CIDv1 multicodec](https://github.com/pldespaigne/content-hash/pull/37)
  - Reviews & other
    - ipfs-webui: 
        - [fix: allow non-multiaddress api url](https://github.com/ipfs/js-ipfs-http-client/issues/842)
        - [fix: peers page with /p2p-websocket-star addrs](https://github.com/ipfs-shipyard/ipfs-webui/pull/1306)
    - multiaddr: [dnsaddr docs](https://github.com/multiformats/multiaddr/pull/103)
    - Looked into https://unstoppabledomains.com
    - js-ipfs: [notes on mitigating js-ipfs startup failures due to ws-star being down](https://github.com/ipfs/js-ipfs/issues/2508#issuecomment-553395312)
    - [MetaMask to start using `*.ipfs.dweb.link` for ENS-IPFS sites?](https://github.com/ipfs/infra/issues/493)
    - ipfs-geoip: [ci fixes](https://github.com/ipfs/ipfs-geoip/pull/69)
    - [ipfs-cohost](https://github.com/ipfs-shipyard/ipfs-cohost) PRs
    - ipfs-cohost.sh: [update to follow latest spec](https://github.com/ipfs-shipyard/cohosting/pull/10)
- Next:
  - OOO monday-wednesday
  - PR with webui e2e
  - new companion stable

@achingbrain
- Done:
- Blocked:
- Next:
  - 

@name
- Done:
  - What have you accomplished since the last Weekly?
- Blocked:
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
- Next:
  - What is the next important thing you should focus on
