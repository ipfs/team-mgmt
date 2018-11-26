# 💫Golang Core Dev Team Weekly Sync 🙌🏽 November 26, 2018

- **Lead:** @eingenito
- **Notetaker:**
- **Attendees:**
  - _attendee names..._
  - @aschmahmann
  - @djdv
  - @michaelavila
  - @momack2
  - @hannahhoward
  - @kevina
- **Recording:** _add link to recording once it's online_

## Agenda

- Ask everyone to put their name into the list of attendees
- Round of updates
  - What have you accomplished since the last Weekly?
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
  - What is the next important thing you should focus on?
- Ask for general questions. Could be things like:
  - I'm stuck with something, I don't know who to ask. Who knows who to ask?
  - Who can help me with xyz?
- Plan this week
  - Select issues to work on
- Review remaining issues if there is time left


## Notes

### Week Update

@marten-seemann
 - Done:
 	- implemented a proof of concept for TLS for libp2p, designed to replace secio: https://github.com/libp2p/go-libp2p-tls
 	- worked in the design team for QUIC connection migration, discussed a fix for an off-path attack
 	- worked on a proposal to make connection migration work in the p2p setting (currenty it is only being specified for clients to migrate, servers are assumed to be static)
 	- started working on implementing the QUIC header encryption
 - Blocked:
  - need feedback on go-libp2p-tls, especially https://github.com/libp2p/go-libp2p-tls/issues/2
  - **important**: need feedback for my QUIC blog post, please review if you have time: https://github.com/ipfs/blog/pull/194. My goal is to publish this week.
 - Next:
   - continue work on QUIC draft-17

@Magik6k (may not attend)
 - Done:
   - go-ipfs-ds (benchmarks):
     - ssh workers
     - parallel execution
   - go-ipfs-files refactor debugging
 - Blocked:
   - go-ipfs-files refactor needs a hopefully final review:
     - https://github.com/ipfs/go-ipfs-files/pull/2
     - https://github.com/ipfs/go-ipfs/pull/5661 (still needs some fixes, but it sholud be really close)
 - Next:
   - Cleanup all the go-ipfs-files PRs
   - Update go-ipfs-files in other PL projects
   - Properly setup aws runners, had a long list of problems last week
   
@aschmahmann
 - Done:
   - DDC Identity meeting happened
     - There's now a #ipfs-identity channel
     - Identity and identity management specs/discussions should be starting in https://github.com/ipfs-shipyard/pm-idm
   - Starting sharing and version graph synchronization in https://github.com/aschmahmann/ipshare
 - In Progress:
   - Version Graph Syncing specs
   - Sharing specs
 - Blocked:
 - Next:
   - Finish writing and publishing above specs to the repos listed
   - Create simple version graph synchronization pinner

@schomatis (no blockers, not attending)
 - Done/In Progress (continuation from last week):
   - Improving content for a concept document about files in IPFS (https://github.com/ipfs/docs/issues/133).
   - Review Files API document in the `interface-ipfs-core` repo (https://github.com/ipfs/interface-ipfs-core/blob/master/SPEC/FILES.md)
   - Write mid-level document on the `ipfs files` API (https://github.com/ipfs/go-ipfs/pull/5052)
   - With the DAG walker merged finish up the DAG reader refactor using it (https://github.com/ipfs/go-unixfs/pull/12). 

@eingenito (no blockers)
 - Done: OOO all week
 - Next: 
   - Reminders: [Reflection Issue](https://github.com/ipfs/go-ipfs/issues/5781) extra week because of short week. Lucky you.
   - Transfer Benchmarking
   - 2019 IPFS Planning - coordinate go-ipfs goals with org KPIs. 
   - Check in with teams on high-priority efforts and reflect in next week's weekly (and ongoing)

@kevina
 - Done:
    - Redo `--cid-base` p.r. https://github.com/ipfs/go-ipfs/pull/5789
 - Blocked/Asked:
    - Would like to hold off on any major changes to the `core/commands` pacakge until the
      `--cid-base` p.r. get in.  It is now in the fourth iteration
 - Next:
    - Hopefully get `--cid-base` p.r. in
    - Help review go-ipfs-files refactor

@michaelavila (no blockers)
  - Done:
  	- First few steps of my provide plan (https://github.com/ipfs/go-ipfs/issues/5774)
  - Next:
  	- Make provide in ipfs as performant as provide in bitswap

@djdv
 - Done:
   - Assisted Lady Columbia and Lady Justice with republic maintenance (jury duty complete, back in office)
 - Next:
   - Make up for lost time (recap, respond, etc.)
  
@raulk (no blockers, no high prio stuff)
  - Done:
    - (well, in progress) libp2p roadmap \o/ It's been an insightful exercise to sift through open issues and docs to build a plan forward! The async culture of putting everything in writing has made things easier.
  - Next:
    - more libp2p roadmapping.
    - finish peerstore GC PR (two-tiered GC procedure); writing tests now.

@bigs
  - Done:
    - IPTB libp2p daemon plugin (90%, figuring out last details of plugin arch)
  - Question:
    - If I want to create rich integration testing for IPTB, would that operate as a plugin or would it be more tightly integrated? Needs metadata on other processes in IPTB.
  - Next:
    - Begin work on test orchestrator to run in IPTB

@hannahhoward
  - Done:d-p
		- Streaming LS merged
  - Block/Asked:
  	- goprocess? Do we use it? Can talk over IRC
    - feedback on PR below welcome!
  - Next:
    - In progress work on bitswap refactor: https://github.com/ipfs/go-bitswap/pull/26
    - Start bitswap sessions performance work!

     
@warpfork (none blockers)
  - Done:
    - fixed/support-added for https://github.com/polydawn/refmt/issues/43
    - go-ipld-prime now has a mutable array implementation
    - in another quest: onboarded a contributor to merklebuilds things; he packaged libc and bash.  woot?
  - Questions:
    - i'd love to join a review session on the goprocess thing
  - Next:
    - moar go-ipld-prime
    - need to finish logistics for RBsummit

@momack
  - Done:
    - IPFS capacity tracker
    - Draft IPFS KPIs
    - Exercise with WGs about upgrading our roadmap
  - Blocked
    - go-ipfs capacity tracker - everyone check accuracy! Where do we need to grow/improve?
    - go-ipfs WG roadmap - we need to iterate using feedback loops around what other teams need and the KPIs IPFS takes on (aka defining the metrics that measure success)
  - Next:
    - Consolidate key learnings from WG roadmaps across IPFS org into unified track
    - Prepping 2019 IPFS OKRs / roadmap presentation

@stebalien
  - Done:
    - Merged streaming ls PR
  - Next:
    - Email, reviews, catchup
    - Peer ID/CID/Ed25519 fixes
    - Make libp2p relay act like a normal transport (https://github.com/libp2p/go-libp2p-circuit/issues/28)

### Questions / Discussion items
- [Capacity tracker] (https://docs.google.com/spreadsheets/d/1M7vSGfQyHZFQ0D-WpBcbjLCZrNT0x-qiRcR_7qzgyJo/edit#gid=2055723494)
- [WG roadmap iteration] (https://docs.google.com/document/d/11zw8H8NjUzMM5CJ1y9lpvDxmVrJ6SAOxsRsiLPZxDaI/edit#)
  - [KPI Doc](https://docs.google.com/document/d/1r2Ng8Ura9yg63Aq8sXpJQ-PKFhDzJADoHRxZUESUugg/edit#)
- Libp2p roadmap
  - [Roadmap here](https://docs.google.com/document/d/1Rd4yNw1TNQBvfRrKeEMSTseb6fvPzS-C--obOn0nul8/edit#heading=h.bbb5kq80e8n) - draft stage, not prioritized yet
  - We are looking for feedback from other PL teams (IPFS, Filecoin, etc) as well as other communities outside PL (e.g. Ethereum)
  - Goal is to have a "big 3" or "big 5" 2019 priorities by end of week
- @hannahhoward to make issue about the use of context-like package. 
- @kevina's PR needs review: https://github.com/ipfs/go-ipfs/pull/5789
  
  
### Other notes
