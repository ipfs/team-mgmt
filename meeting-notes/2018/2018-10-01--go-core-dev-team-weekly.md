# 💫Golang Core Dev Team Weekly Sync 🙌🏽 October 1, 2018

- **Lead:** Erik Ingenito
- **Notetaker:**
  - momack2ck2
- **Attendees:**
  - _attendee names..._
  - momack2
  - bigs
 - michaelavila
  - kevina
  - Steven
  - Mikael
  - djdv
- **Recording:** _add link to recording once it's online_

## Agenda

- Ask everyone to put their name into the list of attendees
- @momack2 - meta agenda plan - how to use our time most effectively on this call
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
 - Molly: Proposal to only call out blockers and top-level progress to save time for sync OKR planning
 - Erik: working on grooming the waffle board
 - Hannah: questions about the sharded directory tests - test data itself not setup for the new implementation. Need Steven/Jeromy to double check that the implementation is correct and the tests are wrong
 - Kevin: need review on outstanding PRs, in particular the cid subcommand 
 - 
 

### Week Update

@name
 - Done:
 - Blocked:
 - Next:

@schomatis (not attending)
 - Done:
   - Reviewed a few PRs.
   - Reviewed the HAMT package in the context of a performance improvement PR
      (https://github.com/ipfs/go-unixfs/pull/19).
 - In-progress:
   - Reviewing MFS code.
 - Next:
   - Refactor the HAMT package to make it more accessible.
   - Propose a new MFS interface (https://github.com/ipfs/go-mfs/issues/3).
   
@bigs
 - Done:
   - libp2p golang client (few stylistic changes outstanding for merge)
	 - establish golang OKRs
   - code review & PRs
 - Blocked: n/a
 - Next:
   - formalize daemon protocol in spec
   - review dht subsystem protocol for daemon
   - sketch yamux p2p enhancement

@raulk (not attending):
 - Done:
   - Peerstore: datastore-backed keybook and peer metadata.
   - go-ds-leveldb: add transactionality.
   - Ethereum 2.0 <=> libp2p: support.
   - libp2p daemon roadmap.
   - Improve go-libp2p chat example
   - OKR and planning.
 - Blocked:
   - n/a
 - Next:
   - Implement peer routing records to deal with "address abusers" https://github.com/libp2p/libp2p/issues/47
   - Ethereum 2.0 <=> libp2p: support.
   
@eingenito
- Done: 
  - Paired with @michaelavila on sharded dir listing tests and pinning/gc locking. 
  - Followed OKR sessions
- Next:
  - Help finalizing OKRs for October 4th.
  - Issue tagging and grooming. 
  - Looking forward to next two weeks. 

@hannahhoward
- Done:
	- Worked on Sharded dir briefly before going to conference
- Next:
	- Trying to wrap up sharded dir speedup
- Blocked:
  - Clarity on testing data for HAMT tests - seeking synchronous brief discussion during meeting

@michaelavila
- Done:
	- Concurrent pinning PR merged
- Next:
	- Recursive add symlink (review/help with existing PR however I can)
  - Need to get my travel for London booked, I think, right?	

@kevina
 - Done:
   - Not much progress code wise, waiting for feedback/review of p.r. with regard to base32
   - Reviewd one or two p.r, feedback on other issues
 - Blocked:
   - Need code review on `--cid-base` and `--upgrade-cid` options p.r
     (https://github.com/ipfs/go-ipfs/pull/5464)
   - Several issues came up for Switching Blockstore to multihash
     that I still need feedback on (https://github.com/ipfs/go-ipfs/pull/5510)
 - Next:
   - Get "cid" sub-command merged, wating on @warpfork?
   - Have another pass on `--cid-base` p.r. to see if using "functional options pattern" will help in one aspect
   - Finish writing up my thoughts on pinning and related 
   - Get ready for team week
   - Possibly Merge and bubble-up switch to go-multihash string representation (https://github.com/multiformats/go-multihash/pull/84)
 - Notes:
   - Issue to track migration to base32 progress: https://github.com/ipfs/go-ipfs/issues/5358
   - All base32 related issues/p.r. in go-ipfs: https://github.com/ipfs/go-ipfs/labels/cidv1b32
   
@momack2
 - Done: 
   - Sourcing input and documenting knowledge for IPFS Roadmapdmap
   - Lab Week Planning
 - Blocked:
   - N/A
 - Next: 
   - Draft of IPFS roadmap!

@stebalien:
  * Highlights:
    * review, fixes, etc.
    * figured out why yamux was so slow (low send window)
    * work towards fixing portscan issue
    * OKRs!
    * switched over to go-buffer-pool (from go-msgio/pool)
  * Next:
    * prepare for team-week
    * push though base32 CID stuff
    
    
@hsanjuan
  - Opened some issues about improving "ipfs p2p", namely supporting `/dnsaddr/*` multiaddresses correctly
  - I managed to use ipfs to tunnel a libp2p connection to the libp2p-http endpoint from cluster api (which is cool).


### Questions

### Other notes
Thanks for everyone who joined in the discussion and generation of Q4 OKRs so far. Please review the Q4 OKRs. Spreadsheet here: https://docs.google.com/spreadsheets/d/139lROP7-Ee4M4S7A_IO4iIgSgugYm7dct620LYnalII/edit and PR here: https://github.com/ipfs/go-ipfs/pull/5474.

We're going to trial a daily PR review on Zoom as we come up to speed on the project and try to understand the work that's being done. And to contribute to the PR process. We're tentatively going to start at 5:00pm UTC daily and just pick a PR to look over. We'll post a link in IRC as we begin. 

Reviewing OKR PR together first. https://github.com/ipfs/go-ipfs/pull/5474. If you are interested in working on one of the KRs you can go ahead and put your name next to it in the spreadsheet. If you're unsure if it's appropriate for you to pick up a specific item put a question in the PR and tag @stebailen with it. 



