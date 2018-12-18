# 💫Golang Core Dev Team Weekly Sync 🙌🏽 October 22, 2018

- **Meeting Lead:** @eingenito
- **Notetaker:**
- **Attendees:**
  - _attendee names..._
  - @aschmahmann
  - @momack2
  - @hannahhoward
  - @kevina
  - @warpfork
  - @raulk
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
  - (molly) ways we can make this meeting more effective going foward?
    - Less status update - more blockers and topics to discuss more
    - still do status, but solicit agenda items first
    - questions section could be a better place for discussion items
    - sprint through updates, incentivize with discussion items
    - have a document that points forward? can't add multiple weeks of notes to cryptpad =/
    - Cryptpad does markdown by default with is super useful
    - the agenda for the me was supposed to be optimized around bullet points, but has gotten more verbose - try to go back to bullets
    - think about pair programming remoteslly


## Notes

### Week Update

@name
 - Done:
 - Blocked:
 - Next:
 
@momack2
 - Done:
   - Hack week notes merged into github: https://github.com/ipfs/pm/blob/master/meeting-notes/2018/2018-10-16--go-core-dev-hack-week.md 
   - First draft of IPFS project 2019 priorities & project wg okrs 
   - Offline-first talk: delivered and recorded!
 - Blocked:
 - Next:
   - iterate on project wg OKRs
   - iterate on 2019 prios and work with wgs to refine
   - start writing up project-level PRs
   
@hannahhoward
  - Done:
    - Finished streaming LS PR in go-unixfx + go-ipfs
    - https://github.com/ipfs/go-ipfs/pull/5611
		- https://github.com/ipfs/go-unixfs/pull/39
  - Blocked:
		- Need PR Review
  - Next:
    - Review IPLD Selectors Spec + Graphsync Spec
    - Pushing through Bitswap Sessions PR
    - EnumerateChildrenAsync increase concurrency?
    - Start defining Bitswap refactor interfaces
    
@raulk
 - Done:
   - Progress with dialer v2 pipeline. Expect a WIP PR soon \o/
   - Investigate Yamux throwing a data race tantrum during test shutdown.
     - Candidate patch submitted, awaiting test feedback from @hsanjuan.
 - Blocked:
 - Next:
   - dialer v2 pipeline!
   - prepare for devcon iv taking place next week

@warpfork
 - Done:
   - Research begun on go-ipld-prime.  Experimenting with different traversal APIs and whether or not to special-case leafs.
 - Blocked:
   - Someone sync up with me more deeply on the IPLD data model latest doc please
     - a link to whichever is most latest to make sure I didn't miss it
     - has there been a discussion on the specifics of allowable map key types?
 - Next:
   - Research continues on go-ipld-prime.  There are conflicting influences for "nice interface" and "performant interface".
 
@vyzo
 - Done:
    - discovery, autonat, autorelay, ping in basic host
 - Blocked:
    - need manet changes to bubble up, gx deps dupes resolved (blankhost)
      for autorelay and autonat-svc to merge
 - Next:
    - still exhausted from labweek/hackweek combo
    - update ipfs for changes in p2p-circuit (OptDiscovery) and ping in basic host
    - merge autonat-svc and autorelay, add support to ipfs, 
    - daemon work (pubsub)
 
@kevina 
 - Done (last two weeks)
   - Lab Week
     - Good discussion about Pinning/GC/Blockstore
     - Discussed base32 work a bit
     - Got to know people I worked with
   - Exhausted from lab week, so took a bit of time off but still
     provided some feedback on p.r. and moved base32 work along some.
 - Blocked:
   - Could use review on global option to specify the multibase encoding p.r. (https://github.com/ipfs/go-ipfs/pull/5464), but have other things I can also work on this week
 - Next
   - Write notes from Pinning/GC/Blockstore meeting somewhere
   - Catch up on what was done during hack week since I missed it
   - Maybe try and push through converstion of Multihash to strings (https://github.com/multiformats/go-multihash/pull/84)
   - Work on pushing through the changes discussed at lab week to convert blockstore
     to raw multihashes (https://github.com/ipfs/go-ipfs/pull/5510)

@hsanjuan
  - Done:
    - Remove forced batching from "importers"
      - Need feedback on https://github.com/ipfs/go-unixfs/pull/41
      - And: https://github.com/ipfs/go-ipfs/pull/5626
      - And: https://github.com/ipfs/go-ipld-format/pull/46
      - (all quick and easy)
  - Next
    - testing yamux for @raulk, but that's libp2p stuff

@bigs
 - Done:
   - Daemon DHT spec
   - Daemon DHT features for golang client (80%)
   - Recovery :D
 - Blocked: n/a
 - Next:
   - Daemon DHT tests for golang client
   - Review of london hack week work
 
@aschmahmann
 - Done:
   - Getting started with libp2p/ipfs in Go
   - Basic ID-based gossip
 - Blocked:
   - Where do I put this version control/naming over group gossip?
 - Next:
   - Graph synchronization over gossip

@stebalien
 - Done:
   - Lab Week/Hack Week
 - Blocked:
 - Next:
   - Catchup on email
   - Cut a release
   - Merge the gx-unrewrite patch.
   - Merge everything

### Questions

Bitswap sessions PR -- what will move it forward?

### Other notes

Molly: It's useful to shift this meeting towards more of a traditional stand up, i.e. highlight blockers and briefly mention what you'll be working on. What you've done last week can be found in these notes :)

Steven will be cutting a new release this week—speak now or forever hold your peace.

Adin: go-libp2p-examples have atrophied and need attention. Cole will take a look at merging fixes/migrating fixes from go-libp2p.

Group discussion: The new format will be that everyone can propose difficult/important topics for group discussion. Similarly, big blockers from everyone's updates will bubble up to this queestion list. Once everyone is done giving their brief updates (blockers/futfutpbrief plan for this week), we can move on to this group discussion with our valuable synchronous time!
