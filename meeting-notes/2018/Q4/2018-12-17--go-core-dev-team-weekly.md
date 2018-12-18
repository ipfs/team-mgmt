 # 💫Golang Core Dev Team Weekly Sync 🙌🏽 December 17, 2018
 

- **Lead:** @eingenito
- **Notetaker:**
- **Attendees:**
  - _attendee names..._
  - @alanshaw
  
## Agenda
- Ask everyone to put their name into the list of attendees
- Round of updates
 - What have you accomplished since the last Weekly?
 - Were there any blockers? If so, which ones? Is it still blocked? Why?
 - What is the next important thing you should focus on?
 - How much fun did you have working on ipfs/ipld/libp2p last week?
- 2019 OKRs (@eingenito)
  - We need your retrospective! https://docs.google.com/document/d/1gdxLWcFZPQN5921Br2kSEJqMjHx-jO5JTDEbGExMSuE/edit
  - We need your OKRs! https://github.com/ipfs/team-mgmt/pull/794
- Work tracking (@eingenito):
  - We're going to try a project board: https://github.com/orgs/ipfs/projects/1 
- Impromptu Team Communication (@eingenito)
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
 
@kevina (have blockers but unlikely to be able to attend)
  - Done:
    - Got `--cid-base=base32` ready for review
    - Work on config options for specifing default CID base
  - Blocked/Asks:
    - `--cid-base=base32` needs review https://github.com/ipfs/go-ipfs/pull/5789
    - Would like feedback on config options for changing the default base, there are some complications see https://github.com/ipfs/go-ipfs/issues/5851
  - Next:
   - Get `--cid-base` p.r. merged
   - Write status report for go side of CIDv1 base32 (keep forgetting about it, sorry)

@schomatis (have blockers: need a review, not attending)
  - Need review: https://github.com/ipfs/go-unixfs/pull/12
  - Working on MFS: https://github.com/ipfs/go-mfs/milestone/1
  
@marten-seemann
- Done:
  - debugged a stream deadline race condition and deadlock
  - implemented QUIC header encryption
- Blocked:
- Next:
  - make go-libp2p-quic-transport installable without gx
  - implement QUIC key updates (AEAD keys are updated during the connection)

@warpfork
  - Done:
    - Last week was the RBsummit -- and it rocked
    - Had some very interesting conversations about type systems, tried to apply draft to some other projects, got ideas (that need a little more brew time).
  - Blocked: nah
  - Next:
    - back to go-ipld-prime coding.
    
@djdv (not blocked)
 - Done:
   - Previously, `ipfs mount` completed the "make it work" phase by (very slowly) building IPFS within the IPFS mount
   - "make it right" phase:
     - record-handles store "file" I/O information across operations (allows for buffered writes, /should/ make write-performance practical)
     - added a handle-index, which is responsible for managing internal structures associated with a record-handle (actual underlying I/O interface, record-metadata, directory-entries, etc)
     - various POSIX/FUSE compliance translations/changes (in-progress)
 - Next:
    - All I want for Christmas is a practically usable mount implementation 🎁
      - "directory"-records need to store their internals like "file"-records do (currently we construct them every operation). We need to store this for the sake of spec compliance, but it should also improve traversal time
      - properly implement directory operations (including real device/root handling instead of hacks)
      - with files and directories implemented in a compliant way, we may have a practically usable, RW mountpoint Soon™

@momack2
 - Done:
   - Initiated prototypes for intra-team private communication channels (google groups) & cross-team status/blocker sharing
   - Did a quick census of apps and tools using IPFS - the largest of which is D-Tube!
   - First local/offline meeting this wednesday! Going to have attendees from both the ipfs and offline-first communities
   - iterated on 2019 OKRs and how we structure ourselves to drive forward on our 2019 epics
   - IPFS project wg okr grading and planning
 - Blocked:
   - Took a stab at answering community questions on Stack Overflow and Ethereum Stack Exchange - but it'd be great to have more eyes on those issues!
     - https://ethereum.stackexchange.com/questions/tagged/ipfs, https://stackoverflow.com/questions/tagged/ipfs
 - Next:
   - local/offline drafting Q1 OKRs (including community work in the offline space)
   - midpoint check in with Peergos tonight!
 
@raulk (no blockers):
  - Done:
    - Fixed bugs in lib2p connmgr that were pruning more connections than needed: https://github.com/libp2p/go-libp2p-connmgr/pull/26
    - Peerstore refactor: addressed review comments (still WIP).
    - Connection mgr: started sketching new interface proposal with locking, scoring, boosting.
    - Dialer v2: implemented AddressResolver, now onto refactoring Planner.
    - Lots of talent referrals.
  - Blocked:
    - none.
  - Next:
    - Continue work on connection manager, dialer v2, peerstore.
    - JNI daemon integration; meeting with Harmony & PegaSys upcoming.

@magik6k
  - Done:
    - Reviews
    - go-ipfs-files 2.0 mostly merged (go-ipfs PR still left)
    - global --offline option ready for review too
  - Blocked:
    - probbaly no
  - Next:
    - Start go-ipfs-http-api once 2 files2.0/--offlnie is merged
    - Try to push datastore benchmarks forward
    - Maybe setup something for 'Improving impromptu communication' - https://github.com/ipfs/go-ipfs/issues/5837

@bigs:
  - Done:
    - iptb plugin merged
    - mvid mentoring
    - services design discussion
    - matt joiner spinup
    - iptb testing framework initial design
  - Blocked: n/a
  - Next:
    - iptb testing framework

@hannahhoward:
  - Done:
    - Bitswap Refactor last PR merged
  - Blocked:
    - n/a
  - Next
    - Bitswap Session Speedup PR incoming soon!
    - Addressing good peer/bad peer issue through that! https://github.com/ipfs/go-bitswap/issues/38

@stebalien
 - Done:
   - The usual (reviews, issues, design)
   - We no longer have to call `SetupOfflineRouting` or `LoadPrivateKey` (https://github.com/ipfs/go-ipfs/pull/5844)
 - Ask:
   - Can someone review a complex unixfs PR: https://github.com/ipfs/go-unixfs/pull/12
   - Someone want to tackle the orphaned API file issue: https://github.com/ipfs/go-ipfs/issues/5784
   - Thoughts on testing Autorelay: https://github.com/ipfs/go-ipfs/pull/5785
   - Please comment on Merge Policy: https://github.com/ipfs/community/pull/377
   - Comment on continuing with/parting with GX: https://github.com/ipfs/go-ipfs/issues/5850
 - Todo:
   - The usual.
   - OKRs

@michaelavila
 - Done:
	 - Got plenty of feedback on the provide on retrieval issue I ran into
 - Next:
   - Providing/reproviding based on additional bookkeeping in the datastore
 - Blocked:
   - n/a

@aschmahmann
 - Done:
   - Met with Textile.io folks
   - MW-IPNS partition tolerant (*see blocked)
 - Blocked:
   - I updated my dependencies and libp2p NewStreams to nodes without registered protocolIDs takes a long time to cancel now. Is this because of peer v3.0.0 or should I go dependency diving?
 - Next:
   - DDC OKR things
   - More research into public append-only graphs
   - Fix blocked issue above

@hsanjuan
  - Done:
    - Reproducible Builds summit with @warpfork
    - Some notes https://groups.google.com/a/ipfs.io/forum/#!topic/go-ipfs-wg/POX2pgoEZR4




### 2019 OKRs

#### Retrospective!

Like last quarter, please fill fill out your part of this retrospective document: https://docs.google.com/document/d/1gdxLWcFZPQN5921Br2kSEJqMjHx-jO5JTDEbGExMSuE/edit

_Don't overthink it!_ Anything is better than nothing. 


#### We need **OKRS!** 

Check out the issue at https://github.com/ipfs/team-mgmt/pull/794

Make sure that the work you think you'll be undertaking during the first three months of 2019 is reflected there. 

_Don't overthink it!_ A couple of sentences about the work you intend to do is all that's needed. Don't worry about the OKR format. We can refine the entries after we capture the work. 

If you don't know what work you'll be doing that's fine. There are three high priority efforts that we undertook in London that we need help with. 

### Project Tracking

https://github.com/ipfs/go-ipfs/issues/5838

We voted to improve our tracking of work in progress and next priorities. Waffle.io won't cut it speed wise. All the other 3rd party github project boards require crazy permissions. So we're going to try a github project board: https://github.com/orgs/ipfs/projects/1

There are three columns
 - Backlog
 - In Progress
 - Needs Review
 
Nothing gets added automatically. I don't know if this is good or bad yet; but it might be a good thing.  
 
**Backlog** is for work that should be started when people have the opportunity. Entries here are issues or notes that describe work to be done. We will try to keep this in rough order of priority. When you start work from the backlog, move the card to in progress.

**In Progress** this is for tracking _currently ongoing_ work. If you're working on something and you don't want it to be a secret, make sure it is reflected in this column. I'll remind you individually to keep up your "In Progress" entries up to date so the rest of the team can get a quick, useful understanding of what you are doing. 

Let's try to keep this column useful. If you put work aside for something else it should come out of this column for more than a week. Definitely let's **not** put all open PRs in here. Just the ones getting active attention.

**Needs Review** (@Magik6k's suggestion) This is for PRs (or I guess issues) that need attention from the rest of your team. RFC, WIP and ready for review PRs particularly should go here. If this column becomes too big we'll start sorting it by priority too. 

### Team Communication

https://github.com/ipfs/go-ipfs/issues/5837

We voted to experiment to improve our ad-hoc team communication. The interested parties suggested a persistent open voice channel. The options on the table are Teamspeak, Mumble and Discord. If you have experience with any of these chime in in the PR.  
   
### Questions
	
### Other notes
