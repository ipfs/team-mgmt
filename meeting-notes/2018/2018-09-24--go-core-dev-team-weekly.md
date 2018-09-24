# 💫Golang Core Dev Team Weekly Sync 🙌🏽 September 24, 2018

- **Lead:** Erik Ingenito
- **Notetaker:** Molly (thanks!)
- **Attendees:**
  - _attendee names..._
  - @Magik6k
  - @stebalien
  - @momack2
  - @michaelavila
  - @warpfork
- **Recording:** _add link to recording once it's online_

## Agenda

- Ask everyone to put their name into the list of attendees
- Quick Announcements
 - (@eingenito) Q3 OKRs awaiting grading https://docs.google.com/spreadsheets/d/19vjigg4locq4fO6JXyobS2yTx-k-fSzlFM5ngZDPDbQ/edit#gid=1720716278
 - (@eingenito) New Q4 OKRs PR needs input: https://github.com/ipfs/go-ipfs/pull/5474
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
- Quick moment to look at Q3 OKRs and the Q3 Retrospective to suggest any Q4 priorities


## Notes

### Week Update

@name
 - Done:
 - Blocked:
 - Next:
 
@michaelavila
 - Done: 
   - Ramp up week with Molly, Steven, Jeromy, David, and Juan
 - Blocked: none
 - Next: 
   - Working on (hopefully) small change for reducing the critical section during pinning (https://github.com/ipfs/go-ipfs/issues/5376)
   - I have a PR up for a naive implementation https://github.com/ipfs/go-ipfs/pull/5512 that already has some feedback I'm processing 

@hannahhoward
 - Done: 
   - Ramp up week with Molly, Steven, Jeromy, David, and Juan
   - First iteration of sharded directory speed up -- https://github.com/ipfs/go-unixfs/pull/19
 - Blocked:
   - Seeking review on PR -- https://github.com/ipfs/go-unixfs/pull/19 --, not immediately blocked
 - Next: 
   - Exploring additional speedups
   - Finish adding sessions to LS command (need to make changes per @whyrusleeping)
   - Out Tues - Fri for Strangeloop Tech conference

@diasdavid
 - Done:
   - Ramp up Michael, Hannah and Erik
   - Ramp up Erik as the new TPM
   - Push proposed OKRs to https://github.com/ipfs/go-ipfs/pull/5474
 - Blocked:
 - Next:
   - Provide support to the Go Core Dev Team on OKR Planning and Freezing
   - Prepare Go Core Dev Team Hack Week
   
@eingenito
 - Done:
   - Ramp up week with Molly, Steven, Jeromy, David and Juan
 - Blocked: none
 - Next:
   - Working on OKRs for Wednesday, please contribute to the discussion (just starting) on the PR: https://github.com/ipfs/go-ipfs/pull/5474. Thanks for your feedback. 
   - Working on understanding and organizing the issues/backlog. Will create a PR for people to check out about cleanup and relegating things to icebox/notes. 
   - Understand what people are working on and do my best to help when people are blocked.
   
@momack2
 - Done:
   - Ramp up week with Erik, Hannah, and Michael
   - PR for updated call hosting guide
   - Video tutorial of "how to host a call and give permission"
 - Blocked: none
 - Next:
   - Figure out what I'm missing about livestreaming the all hands and submit the video tutorial
   - Team week / go-hack-week planning
   - helping push forward OKR planning / priority setting
 
@bigs (unable to attend)
 - Done:
   - libp2p daemon spec (in progress) & review
   - Determine source of floodsub test bugs
 - Blocked: by lack of sleep / redeye flight! going to nap.
 - Next:
   - Finish a patch for yamux to make it more p2p/simultaneous connect friendly, fixing issues with floodsub tests
   - Finish basic libp2p daemon client in golang
   - Q3 OKR Scoring
   - Q4 OKR writing!
   
@kevina
 - Done:
   - Phase 1 of Base32 migration done once p.r are in:
     - GitHub issue blocking review of `ipfs cid` sub-commands seams to be fixed
     - Created P.R. for `--cid-base` and `--upgrade-cid` options
       (https://github.com/ipfs/go-ipfs/pull/5464) 
   - Phase 2:
     - Started work on Switching Blockstore to use multihashes instead of Cids
     (https://github.com/ipfs/go-ipfs/pull/5510)
 - Blocked:
   - Still need code review on `ipfs cid` commands p.r.
     (https://github.com/ipfs/go-ipfs/pull/5385)
   - Need code review on `--cid-base` and `--upgrade-cid` options p.r
     (https://github.com/ipfs/go-ipfs/pull/5464)
   - Several issues came up for Switching Blockstore to multihash
     that I need feedback on (mentioned in p.r.), most pressing:
      - Dag service has delete methods, this will create problems if it backed by a Blockstore based on multihash
      - Bitswap: Do we ever publish the list of all blocks in the blockstore, if so this will create problems as we
          no longer have full CIDs available, just multihashes.
 - Next:
   - Continue pussing through already mentioned open p.r.
   - Possibily right up my thoughts on pinning and related
   - Possibly Merge and bubble-up switch to go-multihash string representation (https://github.com/multiformats/go-multihash/pull/84)
 - Notes:
   - Issue to track migration to base32 progress: https://github.com/ipfs/go-ipfs/issues/5358
   - All base32 related issues/p.r. in go-ipfs: https://github.com/ipfs/go-ipfs/labels/cidv1b32


@Magik6k
  - Done:
    - Routing changes for SearchValue
      - Still a bit broken
    - Swift datastore - https://github.com/ipfs/go-ds-swift
    - Work on expanding unixfs coreapi - https://github.com/ipfs/go-ipfs/pull/5501
    - Reviews / bux fixes
  - Blocked:
  	- Reviews:
     - Unixfs coreapi: https://github.com/ipfs/go-ipfs/pull/5501
     - Swarm coreapi: https://github.com/ipfs/go-ipfs/pull/4803
  - Next:
    - Further work on all the CoreAPI stuff
    - Get `ipns name resolve --stream` done
    - Switch path resolving to CoreAPI


@raulk
  - Done:
    - PR to fix write timeouts in Yamux, incl. test case that triggers data race: https://github.com/whyrusleeping/yamux/pull/10
    - Getting up to speed with Eth 2.0 <=> libp2p. Discussions, meetings, lots of reading.
    - Researching peer routing records to deal with "address abusers" https://github.com/libp2p/libp2p/issues/47
  - Blocked:
    - Nothing.
  - Next:
    - Eth2.0 support and collaboration.
    - Make go-ds-leveldb support transactions.
    - Benchmark peerstore badger vs. leveldb.
    - Implement peer routing records to deal with "address abusers" https://github.com/libp2p/libp2p/issues/47
    - Finish migrating Peerstore's KeyBook and PeerMetadata inner compcomponents to datastore-backed.


@djdv (Dominic)
 - In-progress:
   - Symlink resolution for `ipfs add` https://github.com/ipfs/go-ipfs-cmds/pull/96
 - Next:
   - Resume mount progress
   

@stebalien:
 - Done:
   - lots of reviews, issue discussion. lots of new contributors
   - ramping up eric, michael, hanna
   - cmds update *merged*
   - massive gx update today, we're now using the refmt version of go-ipld-cbor. We can now start using go-hamt-ipld (probably). I'd like to use this for pinning.
   - systemd socket activation (because I want it, dammit!) <- <3
 - Next:
    - throw up a draft of the protocol negotiation spec (finally). There are still some open questions but they won't get solved by butterflies and random bit flips.
    - OKRs

@warpfork (Eric)
 - In-progress:
   - Working on slides and demos for all-systems-go conf (aaaaiiiee friday)
 - Next:
   - Why has some perf things on my queue...
     - It would be really cool to do some working groups on this at the labweek coming up! Dream: some scripts for gather perf info that are standard enough for us to use when filing reports to each other.


### Questions

### Other notes

Remember to check out the OKR PR (https://github.com/ipfs/go-ipfs/pull/5474) and indicate what you'd like to work on for the next quarter, and (if it's not the same) what you think is important for the team to work on in general. Thanks!

Notes on PR Reviewing (@eingenito to PR this to go contributing guidelines - https://github.com/ipfs/community/blob/master/go-code-guidelines.md)
- All questions are good! Goal is to understand if all code is both sufficient and necessary, and first few rounds can just be adding more info to the PR via clarifications
- Block out time for actually going as deep as possible through the code paths
- Are there tests?  Do they run?
- Pair-reviewing to explain things to each other can make it more comfortable to get into the code
- Can reference js guidelines at ()https://github.com/ipfs/community/blob/master/js-code-guidelines.md)

