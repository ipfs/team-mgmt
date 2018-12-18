# 💫Golang Core Dev Team Weekly Sync 🙌🏽 December 3, 2018

- **Lead:** @eingenito
- **Notetaker:**
- **Attendees:**
  - _attendee names..._
- **Recording:** _add link to recording once it's online_

## Agenda

- Ask everyone to put their name into the list of attendees
- Round of updates
  - What have you accomplished since the last Weekly?
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
  - What is the next important thing you should focus on?
  - How much fun did you have working on ipfs/ipld/libp2p last week?
- Ask for general questions. Could be things like:
  - I'm stuck with something, I don't know who to ask. Who knows who to ask?
  - Who can help me with xyz?
- Updates on the big 3+
  - Data Exchange/Transfer
  - Data Management
  - Provider strategies
  - cmd lib refactor
  - Base32/CIDv1
- Plan this week
  - Is anybody looking for work?
  - Are the high priority issues that need attention?

## Notes

### Week Update

@name
 - Done:
 - Blocked:
 - Next:

@schomatis (need review, not attending)
 - Review: DAG reader, https://github.com/ipfs/go-unixfs/pull/12.
 - In progress: Files doc.
 - Next: Coordinate with magik to test Badger with the new DS benchmarks.

@Magik6k
 - Done:
  - go-ipfs-files 2.0
    - Cluster port - https://github.com/ipfs/ipfs-cluster/pull/613
    - Added few convenience functions
    - Fixed all the bugs
  - Reviews
 - Blocked
  - go-ipfs-files still needs a review - https://github.com/ipfs/go-ipfs-files/pull/2
  - Datastore benchmarking stuck on infra setup
    - infra team seems a bit overloaded
 - Next
  - Finish go-ipfs-files refactors for real this time
  - Bug infra team a bit more, if it works, start running some more serious benchmarks
  - If everything gets blocked, work on https://github.com/ipfs/go-ipfs-http-client a bit more
    
@aschmahmann
 - Done:
   - Versioned graph synchronization proposal
     - https://github.com/ipld/replication/pull/3
   - Versioned graph synchronization implementation supports multiple named graphs
     - Required for reasonable pinner functionality
 - In Progress:
   - IPNS Multi-Writer style API
   - Simple version graph synchronization pinner
     - May require adding authentication to distinguish pinners from users
 - Blocked:
   - Rolled my own communication protocol on top of libp2p, for maintainability should use something more generic like RPC. Do we have any RPC libraries supported by Go and JS?
     - Likely related to https://github.com/libp2p/libp2p/issues/23
     - If nobody here has an answer, will shop it around at the libp2p meeting 
 - Next:
   - Discussions and documentation on multi-writer pinner threat models
   - Start on content resolvers https://github.com/aschmahmann/ipshare/blob/master/sync/MultiWriterIPNS.md
   
@djdv
 - Done:
   - Catch up with people after absence
   - Some reviews
   - Follow up with outstanding PRs
   - `ipfs mount` improvements, "stable" reads and writes, cache+consistency mechanisms around lookup (perceptibly faster reads and traversal, usable on slow repo/media)
 - Next:
   - Always more reviews
   - Continue efforts with mount improvements, and coordination with bitswap improvment effort

@kevina
 - Done:
   - Misc. Code review issue handling
   - Made a tiny dent in closing old bugs, looked over say 20, closed 1
 - Blocked:
   - Need decision (and code review) by @Stebalien on how to handle `--cid-base` client or
     server (or something else), also blocking J.S. side.  
     https://github.com/ipfs/go-ipfs/pull/5789
 - Next:
   - Code review of link traversal option and go-ipfs-files
   - Do what ever is required to move `--cid-base` p.r. along

@momack2
 - Done:
   - COOKIESSSS
   - Instantiated the [Local Offline Collaboration WG](https://github.com/ipfs/local-offline-collab)! This is still in "boot stage" - we'll be hosting a monthly meetup for anyone interested in discussing offline use cases, interesting projects/research, or discussing how we can better support offline/local tools.
     - Add any projects or resources you know about to this file [here](https://github.com/ipfs/local-offline-collab/blob/master/Resources.md)
   - 2019 OKRs, 2019 Roadmap, 
 - Next:
   - Putting our drafted project and working group roadmaps on GitHub!
   - Locl WG Research Plan
   - Feedback on Libp2p Roadmap
 
@bigs:
 - Done:
   - multiformats bug fixes
     - unix socket support in networking library
     - parsing errors
   - onboarding @mvid
   - onboarding prep for matt joiner
   - code review
 - Blocked:
 - Next:
   - merge IPTB pr
   - begin on test framework

@warpfork
  - Done:
    - discussion launch on how to do union patterns in unixfsv2: https://github.com/ipfs/unixfs-v2/issues/20
    - draft (not to be taken seriously, just convo starter) on a schema dsl, using unixfsv2 to drive it (gist: https://gist.github.com/warpfork/6df17e791936d1f9b0d5e5483678c8bf)
  - Asks:
    - Anyone want to review and brainstorm on drafts?

@michaelavila
  - Providing strategy issue: https://github.com/ipfs/go-ipfs/issues/5774
  - Done:
    - pulled providing out of bitswap
    - added explicit provide calls when adding data
  - Next:
    - adding explicit provide calls into IPFS (for data retrieval)

@hannahhoward
  - Done:
    - Bitswap Refactor PR is in!
  - Blocked:
    - Seeking feedback on bitswap refactor PR! https://github.com/ipfs/go-bitswap/pull/26
  - Next:
    - Sessions optimization work

@raulk (no blockers):
  - Done:
    - Peerstore GC mechanism PR finished and reviewed. Addressed review comments -- @stebalien to take another look: https://github.com/libp2p/go-libp2p-peerstore/pull/47/files
    - Supporting py-libp2p => pulling sbuss/py-multiaddr into multiformats org: https://github.com/multiformats/py-multiaddr/issues/2
    - Supporting Ethereum (joined bi-weekly and invited them to review libp2p roadmap).
    - libp2p roadmap.
  - Blocked:
    - Nothing.
  - Next:
    - Finish next iteration on dialer v2.
    - Connection manager.
    - libp2p roadmap.

@stebalien:
 - Done:
   - Merged http proxy PR (go-ipfs#5526)
   - Code review, design review.
   - Thanksgiving catchup.
   - Lots of multiformats/multiaddr stuff.
 - Next:
   - Finish removing peer ID inlining (https://github.com/libp2p/go-libp2p-peer/pull/40) and handle fallout.
   - Multiformats design stuff (ENS just started using multiaddr and there's a lot of confusion).

### Questions

- is anyone writing an HTTP API implementation that satisfies github.com/ipfs/go-ipfs/core/coreapi/interface ? Our initial implementation is here: https://github.com/qri-io/ipfs-core-http
- Yes there is - Magik is working on it and can link to his work so far. 

- Is there an RPC library for interacting with both js and go libp2p? There is one here: https://github.com/libp2p/go-libp2p-gorpc, TBdiscussed in libp2p meeting.

### Other notes
- Data Exchange/Transfer: Big bitswap refactor PR in and needs review (https://github.com/ipfs/go-bitswap/pull/26). Steb volunteered @djdv ;). Hannah to work on new sessions impl on top of that PR in review.
- Data Management: Magik6k working on further benchmarking of data storage. Working with infra to get appropriate test hosts provisioned.
- Provider strategies: Michael working on refactor to change how providing is triggered. Working branch here: https://github.com/ipfs/go-ipfs/issues/5774 and Magik2k taking a look. 
