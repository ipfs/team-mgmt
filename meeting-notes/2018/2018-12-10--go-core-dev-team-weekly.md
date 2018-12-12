 # 💫Golang Core Dev Team Weekly Sync 🙌🏽 December 10, 2018

- **Lead:** @eingenito
- **Notetaker:**
- **Attendees:**
  - _attendee names..._
  - @djdv
  - @bigs
  - @hannahhoward
  - @kevina
  - @aschmahmann
  - @michaelavila
  - @alanshaw
## Agenda

- Ask everyone to put their name into the list of attendees
- Round of updates
  - What have you accomplished since the last Weekly?
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
  - What is the next important thing you should focus on?
  - How much fun did you have working on ipfs/ipld/libp2p last week?
- 2019 OKRs
  - Reflection - https://docs.google.com/document/d/1gdxLWcFZPQN5921Br2kSEJqMjHx-jO5JTDEbGExMSuE/edit#
  - New OKRs discussion - https://github.com/ipfs/team-mgmt/pull/794
- Updates on Reflection - @eingenito
  - *Impromptu team communication*
  - *Tracking work priorites*
- Updates on the big 3+ (time permitting)
  - Data Exchange/Transfer - @hannahhoward
  - Data Management - @magik6k
  - Provider strategies - @michaelavila
- Ask for general questions. Could be things like:
  - I'm stuck with something, I don't know who to ask. Who knows who to ask?
  - Who can help me with xyz?
- Plan this week
  - Is anybody looking for work?
  - Are the high priority issues that need attention?

## Notes

### Week Update

@name
 - Done:
 - Blocked:
 - Next:

@aschmahmann
 - Done:
   - IPNS Multi-Writer API on top of versioned graph synchronization
   - Basic pinner for versioned graph synchronization
   - Answer from last week: RPC library may be of interest to libp2p, discussing it on the roadmap.
   - Started using IPLD structures (go-ipld-cbor) in the communication protocol
     - Moving away from Protobufs at the recommendation of the libp2p team
 - Blocked:
 - Next:
   - Make graph replication tolerate partitions (https://github.com/aschmahmann/ipshare/issues/3)
   - Investigate the creation of public graphs that anyone can append to
     - Will likely involve utilizing pubsub + connection event handlers. Thx @stebalien for the help.
   - Prepare for and meet with group from Textile.io

@djdv
 - Done:
   - add tests and minor patches in various repos
   - various input for documentation and specs
   - maybe fixed microphone issues
   - wrote a script to test `ipfs mount` stability (go-ipfs binary is built from a go-workspace inside of the `/ipns` mount, binary is then used to initalize a daemon with datastores hosted in MFS and request operations on it)
   - ^this works (now) but it's very slow /ipfs/QmaRk89yEX2qZLuWbmiPYyQsPxSZBhq12RwosgnKn8NkWt
 - Next:
   - continue trying to improve I/O performance and stability of `ipfs mount` ops for practical use
   
@kevina
 - Done:
   - Worked on getting `--cid-base` in
 - Blocked
   - Nothing
 - Next:
   - Get `--cid-base` p.r. merged.
   - Propose `cid-base` config options and possible get that merged
   - Write status report for go side of CIDv1 base32
   - Code review of link traversal option and go-ipfs-files

@warpfork
  - Done:
    - Progress on implementing a draft of IPLD schemas: keeping to well-understood basics (sum types, product types, some specific recursive types).  Writing a "validate" method to use these.  Still lots to do, but shaping up nicely.
  - Next:
    - At the Reproducible Builds summit most of this week, talking to package manager folk.

@raulk (can't attend):
  - Done:
    - Analysed and reported a security vulnerability in libp2p/IPFS.
    - Continued work on dialer v2.
    - Helped out with hiring efforts (tapping into a new talent stream).
  - Blocked:
    - Waiting for re-review by @stebalien: https://github.com/libp2p/go-libp2p-peerstore/pull/47/
  - Next:
    - dialerv2 and connection manager.
    
@bigs
 - Done:
   - Finished and tested iptb plugin!
   - Booting up matt joiner & mantas
   - Lots of code review
   - multiaddr/multiaddr networking enhancements
   - Upgrade the daemon to support tcp sockets
 - Blocked:
   - Need review on [my iptb plugin](https://github.com/ipfs/iptb-plugins/pull/8) 
   - Would love input on testing framework ideas
 - Next:
   - Merging iptb plugin
   - Testing framework on top of IPTB
    
@michaelavila
  - Done:
  	- Moved existing provide calls in my branch over to core api
    - Marked commands that don't use coreapi (need to potentially move some stuff into coreapi, but that will come after the current work ... immediately if that's deemed appropriate)
  - Next:
    - Working out pubsub in new provide system
    - Restrict providing when fetching to only data retrieved from the network


@hannahhoward
  - Done:
    - Some bitswap improvement progress
    - First of 3 refactor PRs merged
  - Blocked:
    - n/a
  - Next:
    - Moving forward with improvements to bitswap
    - Merge remaining refactors

@momack2
 - Done:
   - drafted a go-ipfs interview plan (curious whether folks have been involved with interviewing in the past)
   - Team communication PR (suggest we have working group mailing lists we can add core contributors to): https://github.com/ipfs/project/issues/10
   - Roadmaps posted to github: https://github.com/ipfs/roadmap/pull/4!
 - Blocked:
 - Next:
   - We have a retrospective on 2019 planning on Friday if anyone wants to attend
   - Q4 okr scoring and Q1 OKR planning! Should be easier given we've already done much of the planning


@mgoelzer:
 - Done:
   - roadmap v0.0.x  (now --> 0.1.x)
 - Blocked:
 - Next:
   - 2019 Q1 OKRs
   - took over all roadmap/KPIs/budget/OKRs
   - libp2p porto team week planning
   - libp2p Day planning


@Magik6k
 - Done:
   - go-ipfs-files 2.0 pretty much finalized (needs review/merge)
   - global coreapi offline option (https://github.com/ipfs/go-ipfs/pull/5825), still making sure there are no bugs
     - turned out slightly invasive
   - few reviews
 - Blocked:
   - still talking to infra about benchamrking setup, should resolve itself this week
 - Next:
   - finish global coreapi offline option
   - if benchmarking infra is unblocked, do some benchmarking
   - if not, and files2.0 PR is merged, work on go-ipfs-http-api (coreapi http wrapper)
   - else process some backlog from my todo-list


@Stebalien

- Done
  - Reviews, design stuff
  - Merged go-multihash pluggability
  - Lots of non-go multiformats stuff.
  - PR to disable peer ID inlining
- Asks:
- Next:
  - Work through inbox by EOD (because email overload)


### Questions
- @daviddias Q) when was the last go-ipfs release? A) Sometime in early November (Nov 1, 2018 precisely). Follow on discussion about what a proper release cadence for go-ipfs is. @daviddias mentioned that there was at one time a 2 week release cadence. @Stebalien thinks this is too frequent for go-ipfs at this stage, particularly given our current practice of testing releases for 1 week as a gateway. 6 weeks is mentioned and @eingenito indicates that he'll open an issue about release cadence; what it should be and what process we need around it.
	

### Other notes

  - Release every two weeks? https://github.com/ipfs/notes/issues/203
    - Maybe every 6 weeks instead.

