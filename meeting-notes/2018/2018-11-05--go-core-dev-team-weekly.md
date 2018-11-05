# 💫Golang Core Dev Team Weekly Sync 🙌🏽 November 5, 2018

- **Lead:** @eingenito
- **Notetaker:**
- **Attendees:**
  - _@momack2_
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

@name
 - Done:
 - Blocked:
 - Next:
 
@schomatis (not attending)
 - Done: v0.4.18 performance tests (https://github.com/ipfs/go-ipfs/issues/5715).
 - Next: Start adding high level content to github.com/ipfs/docs about UnixFS/MFS (in the form of issues) and figure out later who can/will produce actual documentation from that.

@raulk (not attending)
 - Done:
  - Was in devcon4 last week; lots of stuff happening around libp2p, see: https://twitter.com/raulvk/status/1058712044277510144
  - Development paused during the week.
  - WIP peerstore for non-strict TTL (regroup multiaddrs under single key).
 - Next:
   - Continue work on Dialer v2 -- thanks for your feedback!
   - Technical diagrams: gossipsub, daemon.
   - Research go-libp2p modularity, repo consolidation, gomod/gx/ugx.
   - Blog: libp2p walkthrough series for Hackernoon.
   - ENR (Ethereum Name Records) <=> IPRS; compare and converge if possible.
   
@hannahhoward (not attending)
 - Done:
 	- Working on bitswap benchmarking and sessions performance enhancements
  - Continuing with sharded directory listing PRs
 - Next:
  - Continue with both
  
@travisperson
 - Done:
   - IPTB v2
   - Updated IPFS to use IPTB v2
 - Blocked:
 - Next:
   - Fix gx issue blocking gx-go uw everywhere effort (https://github.com/ipfs/go-ipfs/pull/5435)
 
@djdv
 - Done:
   - More reviews
   - Synced up with working groups
   - Minor fixes and checks around releases
   - Built up influenza immunity
 - Blocked:
   - Jury duty this week
 - Next:
   - Continue review queue
   - Continue focus on bitswap
   - Attempt to catch up with existing outstanding efforts
 
@aschmahmann
 - Done:
  - Two party basic graph syncronization
  - Handle incoming deltas
  - Had meeting on IPFS sharing utilities
 - Blocked:
  - Just fighting with Go and gx, getting easier over time
 - Next:
  - Test graph sync across many parties
  - Implement one of the more sophisticated graph synchronization protocols
  - Start a basic application that leverages the graph synchronization
 
@magik6k
 - Done:
   - Reviews
   - Some fixes for the release
   - Catching up with github notifications
   - Updated circleci in go-ipfs to 2.0
   - Moved persistent datastores to plugins (because wasm)
   - Implemented listen mode in stebalien/p2pcat
   - Refactor go-ipfs-files
   - Look at go-ipfs-http-api (http coreapi)
   - Setup local testbed for datastore benchmarking
 - Blocked:
   - Not yet?
 - Next:
   - Hopefully finish refactoring go-ipfs-files
   - Make go-ipfs-http-api POC
   - Have initial impl for datastore benchmarks
 
@kevina (might be a bit late)
  - Done:
    - Review p.r. to switch to new commands library
  - Blocked:
    - `--cid-base` p.r. is now blocked on switch to commands library which
      is mostly being done based on an outside contributor @overbool
    - Need guidence on provider changes (https://github.com/libp2p/go-libp2p-routing/issues/32) for libp2p
  - Question:
    - I really want to get the commands lib. stuff in ASAP, at what point
      should I take
      over the p.r. if @overbool is not responding,
      (especially the ones that require a use of PostRun)
  - Next:
    - Continue reviewing commands lib. P.R.
    - Maybe spend some more time figure out how IPFS works at the network
      layer so
      I can come up with a solution to the provder problem on my own
      
@michaelavila
* Next
	- Back from vacation, catching up on everything (primarily provider changes).
  
@momack2
 - Done:
   - Went through everyone's feedback on the Project-level roadmap - add more thoughts/comments to get merged into master!
   - First draft of IPFS Project WG Roadmap (https://docs.google.com/document/d/1oheiSlUQCJhc2KWKPIb0MQUTuabaE2ISUSR2fp0YbDQ/edit#heading=h.smf8bi68l4eu)
   - Installed the new go-ipfs, filed an issue, and someone else fixed it! =]
 - Blocked:
   - Would love to give more feedback on the go-ipfs roadmap draft (https://docs.google.com/document/d/11zw8H8NjUzMM5CJ1y9lpvDxmVrJ6SAOxsRsiLPZxDaI/edit#)
 - Next:
   - Giving feedback to go-ipfs release https://github.com/ipfs/blog/pull/189/files
   - Iterating on Project roadmap
   - Finalize prohject-level PR for captains huddle and file new PR for communication lists
 
@bigs
 - Done:
   - Kickoff call for testbed with Jacob Heun
   - Catch up with current state of IPLD (!)
   - Finished daemon DHT client
   - Daemon and autorelay code review
 - Blocked:
   - Not necessarily blocked, but would love experiences with kubernetes-ipfs, as we're trying to leverage it for the testbed.
 - Next:
   - Interview go-libp2p candidate
   - Review raulk's magnificent and scary dialer PR
   - Docker images for libp2p daemon
   
@stebalien
  - Done:
    - 0.4.18 Release
    - Fixed two bugs in refmt (https://github.com/polydawn/refmt/pull/41, https://github.com/polydawn/refmt/pull/38)
    - Fixed prometheus crashes
  - Blocked
    - nothing
  - Next:
    - Catch up with post-release work (merging stuff).

### Questions
- @eingenito how are things added to the Global Priorities list? Many of the bullet points for PL priorities seem pretty aspirational even for a 1 year plan, and many of them have no clear owners. I will ask in the doc. 
- @eingenito who can help me with the blog? @stebalien pointed out that PRs to the blog are built and published by Jenkins and are linked to in the check's section of the Github PR page. That was my question - I just wanted other people to be able to see the page rendered and I couldn't figure out how to build it myself (because of chanllenges with hugo - the blog build tool). 

### Other notes
- @eingenito Don't forget the Roadmap!: https://docs.google.com/document/d/11zw8H8NjUzMM5CJ1y9lpvDxmVrJ6SAOxsRsiLPZxDaI/edit#heading=h.3o5e0g37o69l

