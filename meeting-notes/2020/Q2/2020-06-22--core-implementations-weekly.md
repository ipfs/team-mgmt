# 🚀 IPFS Core Implementations Weekly Sync 🛰 June 22, 2020

- **Lead:** @jacobheun
- **Notetaker:** @vasco-santos
- **Attendees:**
  - @vasco-santos
  - @aphelionz
  - @aschmahmann
  - @lidel
  - @gozala
  - @achingbrain
- **Recording:** https://youtu.be/qgt2XMRtED0

## Agenda

- Ensure a notetaker exists!
  - The notetaker should:
    - Add bullet points of what is said to each section of this file
    - Wait a day or two for people to add their async updates
    - PR this file into https://github.com/ipfs/team-mgmt
- Ask everyone to put their name into the list of attendees
- Initiatives
- Blockers (from the async status update)
- General questions. Could be things like:
  - I'm stuck with something, I don't know who to ask. Who knows who to ask?
  - Who can help me with xyz?
- Plan for this week
  - Select issues to work on
- Review remaining parking lot topics if there is time left

### High Priority Initiatives

These are the high priority initiatives the team is currently working on.

#### Upcoming/Shipped Releases

- [go-ipfs 0.6 launched](https://github.com/ipfs/go-ipfs/releases/tag/v0.6.0)
  - release with preparation for upcoming new features/improvements, like QUIC, base36

#### Content Routing
@stebalien / @raulk / @dirkmc / @aschmahmann / @jacobheun / @alanshaw / @willscott / @aschmahmann

- This effort is closing as of the 0.6 launch. The team is reviewing priorities for Q3 and will create new initiatives as a result of that this week.

#### Subdomain Gateway (Base32, Origin isolation)
@lidel @riba

- wip to rebase [go-ipfs#7441](https://github.com/ipfs/go-ipfs/pull/7441) and change it to try Base36 or return error (simplify everything, no automagical root node replacement, no rehashing)
  - should be ready for review later this week
  - reducing scope for now with a simpler implementation

#### Bitswap Updates
@dirkmc

- no update

#### Stream Content-Based-Chunking Research/Improvements (go-ipfs / js-ipfs / 🗡️ )
@ribasushi
 - minimal amount of work done, no push-able update on 🗡️ for the past week

#### Rust IPFS Initiative
@aphelionz

- Phase 2 is completed! You can read the grant report here: https://github.com/ipfs/devgrants/blob/master/open-grants/ipfs-rust/phase-2/reports/phase-2.md
- `ipfs add` coming soon
- Working on a blog post for blog.ipfs.io
- Preparing for Phase 3: https://github.com/rs-ipfs/rust-ipfs/issues/181

#### js-libp2p-rendezvous
@vasco-santos

- no update
  - still blocked on current signed peer records implementation in js-libp2p
  
#### Signed Peer Records

- Work in progress
  - Record Interface
      - [libp2p/js-libp2p-interfaces#52](https://github.com/libp2p/js-libp2p-interfaces/pull/52)
  - Record Manager
    - [libp2p/js-libp2p#681](https://github.com/libp2p/js-libp2p/pull/681)
  - Identify Integration
    - [libp2p/js-libp2p#682](https://github.com/libp2p/js-libp2p/pull/682)

### Other Initiatives

This is the backlog of initiatives that are either on-hold or low-priority.

#### UnixFS v1.5 (go-ipfs)
@achingbrain / @ribasushi

- no update

#### Migration to multihash keys in blockstore (js-ipfs / go-ipfs)
@achingbrain

- In progress - integrating migration/repo work with js-ipfs

#### Pinning system revamp
@achingbrain

- Finishing js-ipfs repo migration tool to unblock this

#### Shared IPFS node
@gozala

- Pull request is ready for the review
- Still waiting on reviews to propagate changes in depenencies
- Have issues with testing on Electron

### Design Review Proposals
> You want to propose something for design reviews

- Pinning Services integration
    - we need to define the scope of go-ipfs changes related to this epic
    - [technical analysis of ipfs-webui needs is here](https://docs.google.com/document/d/1f0R7woLtW_YTv9P9IOrUNK6QafgctJ7qTggEUdepD_c/edit#) 
    – familiarize with the above, let's meet this week to discuss the scope
    - add your name if you want to be part of the call
      - lidel (wb/gui)
      - Adin (go-ipfs)
      - Alex (would be good to include js-ipfs)
      - ...
    - Goal: clarify the scope

### Blockers/Asks
> You are blocked and need to talk about it to help unblock. List it here!

- Waiting no some protons change to be either accepted or instructions what needs to be done (see https://github.com/ipfs/protons/pull/13)
- Intermittent test failures in JS-IPFS repo makes it really hard to tell if failures are regresseions or known issues. Can we figure out better strategy to keep those without making tree red.

### Questions
> You have questions and need them answered. List them here.

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

- Alex out on Friday

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

@achingbrain
- Done:
  - Repo migration to store blocks by multihash https://github.com/ipfs/js-ipfs-repo-migrations/pull/4
  - Repo that stores blocks by multihash https://github.com/ipfs/js-ipfs-repo/pull/211
  - Fix intermittant pubsub test failure in js-ipfs https://github.com/ipfs/js-ipns/pull/48
  - Fix setting .code property smothers actual error https://github.com/feross/simple-peer/pull/660
  - https://github.com/ipfs/npm-go-ipfs-dep/pull/43
  - Increase build stability https://github.com/ipfs/js-ipfs/pull/3107
  - Fix circuit relaying example https://github.com/ipfs/js-ipfs/pull/3083
  - Fix multihashes use https://github.com/ipld/js-ipld-git/pull/67
  - Allow setting unsettable .code properties https://github.com/IndigoUnited/js-err-
  - Drop flow support https://github.com/ipfs/js-datastore-s3/pull/26
  - Build on current & active LTS node https://github.com/ipfs/js-ipfs/pull/3088
  - Deps https://github.com/ipfs/js-ipns/pull/49
  - Deps https://github.com/ipfs/js-ipfs-repo/pull/240
  - Deps https://github.com/multiformats/js-cid/pull/114
  - Deps https://github.com/multiformats/js-multihashing/pull/58
  - Deps https://github.com/ipfs/js-datastore-s3/pull/25
  code/pull/26
- Blocked:
  - N/a
- Next:
  - Finish store-block-by-multihash work https://github.com/ipfs/js-ipfs/pull/2522

@lidel
- Done
  - ipfs-companion
    - shipped [v2.13.1](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.13.1)
    - [analysis of go-ipfs' DNS leak when browser is set to use DoH or a proxy](https://github.com/ipfs-shipyard/ipfs-companion/issues/900#issuecomment-647026352)
  - subdomain gateways: (nearly done) rebasing and simplifying PR to try Base36 and return error when not enough
  - pinning services: [technical analysis of ipfs-webui needs](https://docs.google.com/document/d/1f0R7woLtW_YTv9P9IOrUNK6QafgctJ7qTggEUdepD_c/edit#) and kick-off meetings
  - go-ipfs 0.6 QA in gui apps
- Next:
  - clarify scope for pinning services in go-ipfs
  - finish refactor of [go-ipfs#7441](https://github.com/ipfs/go-ipfs/pull/7441)

@vasco-santos
- Done:
  - Reviews and Support for Gossipsub1.1
  - Some pubsub improvemtns
    - [libp2p/js-libp2p-pubsub#48](https://github.com/libp2p/js-libp2p-pubsub/pull/48)
    - [libp2p/js-libp2p-pubsub#49](https://github.com/libp2p/js-libp2p-pubsub/pull/49)
  - Signed Peer Records work for initial feedback
    - Record Interface
      - [libp2p/js-libp2p-interfaces#52](https://github.com/libp2p/js-libp2p-interfaces/pull/52)
    - Record Manager
      - [libp2p/js-libp2p#681](https://github.com/libp2p/js-libp2p/pull/681)
    - Identify Integration
      - [libp2p/js-libp2p#682](https://github.com/libp2p/js-libp2p/pull/682)
   - started Certified AddressBook
    - Miscellaneous
    - [multiformats/js-multicodec#60](https://github.com/multiformats/js-multicodec/pull/60)
- Blocked: N/A
- Next:
  - Finish Signed Peer Records PRs
    - Integrate in DHT + Pubsub
  - Continue supporting gossipsub 1.1
