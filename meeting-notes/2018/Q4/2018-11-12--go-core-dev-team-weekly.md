# 💫Golang Core Dev Team Weekly Sync 🙌🏽 November 12, 2018
- **Lead:** @eingenito
- **Notetaker:**
- **Attendees:**
  - _attendee names..._
  - @stebalien
  - @hannahhoward
  - @michaelavila
  - @alanshaw
  - @warpfork
  - @momack2
  - @daviddias
  
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
  - Mid-Q OKRs


## Notes

### Week Update

@name
  - Done:
  - Blocked:
  - Next:

@marten-seemann
 - Done:
 	- attended IETF 103 meeting & hackathon in Bangkok
  	- I discovered a packet injection attack on the QUIC handshake, held a presentation about this in the QUIC WG meeting and proposed a fix, which was accepted
    - discussed loss recovery pitfalls, which will lead to changes to the QUIC specificiation
 - Blocked: nothing
 - Next:
 	- there was a presentation about using HTTP/2 as a transport. I will follow the discussion about this (maybe this offers an easy solution for our stream muxer problems?)
 - continue implementing the current QUIC draft

@kevina (might not be able to attend)
  - Done:
    - Review p.r. to switch to new commands library.  Almost all the commands are now using the new commands library except for `ipfs ls`.
  - Next:
    - Redo `--cid-base` p.r. now that the command line conversion is in, may make things simpler

@schomatis (not attending)
 - Done/In Progress:
   - Review `ipfs/docs` PRs (the repo hasn't been active for some months now).
   - Write content for a concept document about files in IPFS (https://github.com/ipfs/docs/issues/133).
   - Merge DAG walker (https://github.com/ipfs/go-ipld-format/pull/39).
   - Review HAMT directory refactor PR (https://github.com/ipfs/go-unixfs/pull/42).
   - Review trickle DAG refactor PR (https://github.com/ipfs/go-unixfs/pull/10).
 - Next (not necessarily this week):
   - With the DAG walker merged finish up the DAG reader refactor using it (https://github.com/ipfs/go-unixfs/pull/12).
   - Write mid-level document on the `ipfs files` API (https://github.com/ipfs/go-ipfs/pull/5052)
   - MFS interface (https://github.com/ipfs/go-mfs/issues/3).

@magik6k (not attending)
 - Done:
   - Running datastore benchmarks right now
   - (Almost) have consensus on go-ipfs-files refactor
   - Did some reviews
 - Blocked:
   - No, but will need some reviews this week
 - Next:
   - Run all the benchmarks, on all the things
   - Finish go-ipfs-files stuff
   - Write a doc on datastore performance

@eingenito
  - Done:
    - Worked on [2019 Planning Doc](https://docs.google.com/document/d/11zw8H8NjUzMM5CJ1y9lpvDxmVrJ6SAOxsRsiLPZxDaI/edit#heading=h.3o5e0g37o69l)
    - Did [screencast of same](https://drive.google.com/open?id=1MHzaHujcYfOhQEOd0PseViTUkqm6Ap5D)
    - Worked on bitswap with Hannah
    - Investigated benchmarking - so many options
  - Next
    - OKR projections
    - Benchmarking - just choose one
    
  
@warpfork
  - Done:
    - Worked on [2019 Planning Doc](https://docs.google.com/document/d/11zw8H8NjUzMM5CJ1y9lpvDxmVrJ6SAOxsRsiLPZxDaI/edit)
    - There have been some discussions on how representations of serial zeros and nulls and whatnot should work: https://github.com/polydawn/refmt/issues/42
    - https://github.com/ipld/specs/pull/72 merged woo (thank you mikeal)
    - go-ipld-prime has a MutableNode interface now and it has one impl; a fluent wrapper interface layer for convenience; some tests
    - did some dives on merkleCI agent models across platforms (punted to victorb for review)
  - Blocked: n/a
  - Next:
    - flesh out (way) more tests in go-ipld-prime, finish several todos for recursive mutables
    - build a first draft of traversers and zippers in go-ipld-prime
    
@bigs
  - Done:
    - Local kubernetes cluster with daemon images!
    - Code review
    - SECIO spec first pass
  - Blockers/callout:
    - Would love a link to a good spec
  - Next:
    - Begin publishing daemon images
    - Create basic integration test library for daemons
    - SECIO spec complete
    
@raulk (not attending):
  - Done:
    - Compiled my field notes from devcon4 into a 18-page doc! Will distribute once I write a TL;DR for everybody else ;-)
    - Kademlia DHT spec: https://github.com/libp2p/specs/pull/108
    - Good discussion on connection manager and Multistream 2.0.
    - Cruising speed on dialer v2! Integrating feedback and hardening.
    - Almost done with peerstore simplification. Relaxing strict db-level TTL expiration helps a lot.
  - Blocked: nothing.
  - Next:
    - Finish dialer v2.
    - Finish peerstore simplification.
    - Connection manager sketch.
    - Blog post writing.
    - Helping out our py-libp2p friends.
    
@travisperson
  - Done:
    - Made some progress towards fixing gx lock issue
  - Blocked:
  - Next:
    - Still working on gx issues around gx-go uw https://github.com/ipfs/go-ipfs/pull/5435
  
@aschmahmann
  - Done:
   - Lots of Roadmapping with DDC
   - More graph synchronization
  - Blocked:
   - Given that graph syncronization v1 is working, I don't know how much more time I should put into it vs. leave it for the group working on IPLD selectors and GraphSync
  - Next:
   - Start working towards a basic causal chat application

@hannahhoward
  - Done: 
    - support PRs in go-unixfs & go-merkledag for streaming ls
    - improvement to go-ipfs-delay to allow more flexible use
    - many published packages from go-ipfs-delay update
    - worked on workgroup plan
  - Blocked:
    - PR to merge all published packages from go-ipfs-delay update
    - Streaming LS PR -- seeking sync discussion to get path forward
    - Many build failures on main repo?
  - Next:
    - PR to go-bitswap with more testing
    
@momack2
  - Done:
    - Every WG has a draft roadmap 👏
    - Graded my mid-Q OKRs
    - Draft PL Directory PRD
  - Blocked:
    - We still need mid-Q Projected OKRs!
  - Next:
    - Draft merge step of WG milestones
    - Still iterating on comms stream proposal

@michaelavila
	- Next:
  	- Working on provider strategy, specifically breaking out a provider module
    - Catching up on Kuba's work on comparing provide strategies

@stebalien
  - Done:
    - Some roadmapping work 
    - Lots of debugging
    - Misc design work, unblocking, etc.
    - Revision of the multistream 2.0 spec
  - Asks:
    - Turns out bitswap hasn't been rejecting blocks we never requested since a bug
      was introduced in *2015*! Anyone interested (hannah?)?
    - Input on https://github.com/polydawn/refmt/issues/42
    - Some eyes on https://github.com/ipfs/go-ipfs/issues/5740 (hanna, you'll be interested)
  - Next:
    - Get the http proxy pr merged https://github.com/ipfs/go-ipfs/pull/5526
    - Get the streaming ls pr merged https://github.com/ipfs/go-ipfs/issues/4882
    - OKR Mid Quarter stuff

### Questions

Cole: Anyone have link to well done PL specs for reference?
	- https://gist.github.com/warpfork/8c50277bc48fbd0591bae326099a9c18 has links to nice design docs... but not specs womp womp

### Other notes

- @eingenito Q4 OKR Projections
  - let's be realistic about what we can accomplish!
  - let's make sure we enter our **projections** in addition to our current assesments: https://docs.google.com/spreadsheets/d/139lROP7-Ee4M4S7A_IO4iIgSgugYm7dct620LYnalII/edit#gid=1720716278
- 2019 Planning review
- Hannah: We're experiencing build failures in the main IPFS repo, do we have a process for addressing this?
  Steven: We've got some test failures (timeout related) that should be addressed. They fail intermittently and don't appear to be signs of failures in the code they test.
- Molly: please look at your nearest-neighbor roadmaps so we can give each other feedback and reflect one another's needs.
- We'll be setting up another sync call to discuss our waffle usage and how it relates to our OKRs.
