# 💫Golang Core Dev Team Weekly Sync 🙌🏽 November 19, 2018
- **Lead:** @eingenito
- **Notetaker:** @momack2
- **Attendees:**
  - @aschmahmann
  - @mgoelzer
  - @kevina
  - @bigs
  - @stebalien
  - @alanshaw
  - @michaelavila
  - @hannahhoward
  
- **Recording:** _add link to recording once it's online_

## Agenda

- Ask everyone to put their name into the list of attendees
- Announcements
- @magik6k's update on datstore benchmarking
- Round of updates
  - High-priority updates. Are you blocked? On what and whose help do you need.
- Ask for general questions. Could be things like:
  - I'm stuck with something, I don't know who to ask. Who knows who to ask?
  - Who can help me with xyz?


## Notes

#### Announcements

- OKRs still need projections from some team members: https://docs.google.com/spreadsheets/d/139lROP7-Ee4M4S7A_IO4iIgSgugYm7dct620LYnalII/edit?ts=5bef213d#gid=1720716278. Check the spreadsheet for your OKR items and review the mid-Q completion estimate, and provide an estimate for completion by the end of the quarter.

- Weekly sync changes; make time each week for reviewing progress of the three critical go-ipfs efforts; data transport, providing, and data management.
  - going to center this meeting more around our 3 main endeavors (starting with datastore)
  

- Reflection issue - improving how we work: https://github.com/ipfs/go-ipfs/issues/5781. Read it over and please add your comments. Let's not worry about solutions yet - we'll get to that. 

- @stebalien's 'Not blocked by steb' issue. Read it over - there's a new label, and new informaiton about how to reach Steven when you need him.

#### Discussion
- Datastore benchmarking update from @magik6k
  - beautiful beautiful graphs that tell us lots more information
  - would love to see them with an additional 0 for size
  - jfs is broken
  - using the default driver (ntfs doesn't have great performance over time)
  - interested to see graphs with different data sets (expect to see this behave differently on different configurations of data - many small files, large files, etc)
  - plan: expand to run more benchmarks on more computers to integrate with AWS to auto-run more stuff there.

### Week Update

@name
  - Done:
  - Blocked:
  - Next:

@marten-seemann
 - Done: 
  * a lot of review of PRs for the QUIC spec
  * more work on draft-17
  * started working on a benchmarking suite for quic-go
 - Blocked: ---
 - Next:
 	* more draft-17 work, especially header encryption and stateless resets

@djdv
 - Blocked:
    - still OOO ⚖️

@schomatis (not attending)
 - Done/In Progress:
   - Improving content for a concept document about files in IPFS (https://github.com/ipfs/docs/issues/133).
   - Write mid-level document on the `ipfs files` API (https://github.com/ipfs/go-ipfs/pull/5052).
   - With the DAG walker merged finish up the DAG reader refactor using it (https://github.com/ipfs/go-unixfs/pull/12).
- Next:
   - MFS interface (https://github.com/ipfs/go-mfs/issues/3).

@aschmahmann
 - Done/In Progress:
  - Decided to push off more sophisticated synchronization of version graphs for now
    - Will revisit after a chat demo is working
  - Scaffolding for causal chat application (it will likely be Yjs + HTTP Go daemon)
  - Working towards a Sharing API
 - Blocked:
 - Next:
  - DDC having Identity meeting tomorrow
    - If you are interested please let me know and I'll send you a calendar invite
  - Specs v0 for Sharing API
  - Specs v0 for Version Graph Syncing since we're freezing it for now
  - More work towards chat application
  - Happy Thanksgiving!

@warpfork (you can skip me, not interesting and no blockers :))
  - Done: worked on package management / merklebuilds topics most of this week
  - Blocked: nah
  - Next: 
    - i'd like to add a config flag to https://github.com/polydawn/refmt/pull/44 then merge that
    - would like to keep working on some pkgman/merklebuild as RBsummit coming up, but happy to be pulled into other things as necessary

@eingenito
  - Done:
    - Worked on PM tasks
    - Kept up on Hannah's bitswap work and Michael's provider work
  - Blocked: none
  - Next:
    - OOO this week
    - Will continue to badger people about PM initiatives 
    
@raulk:
  - Done:
    - [devcon4 field notes finished!](https://docs.google.com/document/d/1nTa5xL9-Cs8FaHITCAKG2dmlPuU4ps-plC_54lx4EVc/edit?usp=sharing)
    - Peerstore simplification WIP; pending smarter GC and more tests. [Numbers looking great](https://github.com/libp2p/go-libp2p-peerstore/pull/47/), with some benchmarks -98% ns/op vs. previous!
    - Some work on dialerv2.
  - Blocked: nope.
  - Next:
    - Focus on libp2p roadmap 2019.
    - Continue working on peerstore and dialerv2 when I need a break.
    
@momack2
  - Done:
    - [Epic capacity tracking sheet!](https://docs.google.com/spreadsheets/d/1M7vSGfQyHZFQ0D-WpBcbjLCZrNT0x-qiRcR_7qzgyJo/edit#gid=2055723494)
    - Shared IPFS project roadmap with PL community
    - reviewed midQ OKR grading
    - OKR best practices across IPFS, Libp2p, and other open teams
    - draft for IPFS project KPIs to track our path toward 
  - Blocked:
    - iterating on go-ipfs working group roadmap! Need more suggestions/additions
  - Next:
    - Merge step for project roadmap
    - Iteration on KPIs based on 
  
@Magik6k
  - Done:
  	- Some datastore benchmarking
      - https://docs.google.com/document/d/19a_QYFCW2zYj7xScp1-H50WaNsJ56IGQdW8FLGsozkQ/edit#
    - Still fighting with go-ipfs-files refactor
    - p2p report-peer-id option
  - Blocked:
    - reviews:
      - https://github.com/ipfs/go-ipfs/pull/5771 (p2p report-peer-id)
    - talking to infra team about benchmarking infra
  - Next:
    - Start running large scale datastore benchmarks
    - Finish go-ipfs-files refactor for real this time
    - Maybe get back to go-ipfs-http-api
  
@michaelavila
	- Next:
  	- working on the minimal change to base provide off of reprovide (inspired by Magik6k)
    
@hannahhoward
  - Done:
   - fix for Bitswap rejecting unwanted blocks
   - improved benchmarks for bitswap
   - final work on streaming LS -- ready to merge?
  - Blocked:
   - just a reminder to merge streaming LS
  - Next:
   - in progress on bitswap refactor
   - sessions improvements
   
@kevina (you can skip me, no blockers)
  - Had a slow week last week.  Helped with some review other odds and ends.
Blocked:
  - Nothing
Next:
  - Figure out and how to move `--cid-base` option forward
  - Maybe spend some time figuring out how to switch providers to use multihashes instead of Cids.


@stebalien
 - Done:
   * Spec compliance tests for go-multibase.
   * Random reviews.
 - Asks:
   * Test needs debugging and fixing: https://github.com/ipfs/go-ipfs-cmds/pull/116
   * Warpfork: https://github.com/polydawn/refmt/issues/42
 - Next:
   * Propose solutions to the ed25519 embedding issue (libp2p): https://github.com/libp2p/specs/issues/111
   * Repo-reduction proposal for go-libp2p.
   
@bigs
- Done:
  - DHT client incl protocol testing (whew)
  - golang reflect experiments for libp2p services
  - Code review
  - Onboarded Mantas
- Blocked:
  - IPTB: Didn't realize k8s support was *not* landed. Would love opinions/experiences about integrating k8s with IPTB. Any other cluster managers we're interested in leveraging? (Note: love the refactor)
- Next:
  - Short week, finishing the localp2pd (local instance of libp2p daemon) plugin for IPTB.
  
  
### Questions

### Other notes
