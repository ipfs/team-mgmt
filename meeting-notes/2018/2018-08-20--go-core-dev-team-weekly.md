# 💫Golang Core Dev Team Weekly Sync 🙌🏽 August 20, 2018

- **Lead:** Dominic Della Valle
- **Notetaker:** 
  - @bigs
- **Attendees:**
  - @mgoelzer
  - @keks
  - @djdv
  - @stebalian
  - @kevina
  - @hsanjuan
  - @Magik6k
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
 
@djdv
 - Done:
   - Refined the IPFS on fuse implementation
     - Added caching around things like pins, keys, and metadata
     - Reduced lock contention
     - Reworked how indexes are generated and referenced
    - Added fs stat data
      - free space remaining on daemon's datastore device
      - available file descriptors/handles
    - Partial symlink support
      - they work with *nix tools and Go's os pkg but not win32
 - Blocked:
   - Previously I wanted to work on write support, but was blocked on an issue related to file permissions
     - This was resolved while refactoring
   - Currently I'm dealing with an issue related to file ownership
     - I am currently in contact with the cgofuse developer about it
     - Currently working around this by setting everything to 0777, later node owners will be the same as the process owner/invoker
 - Next:
   - Add create, write, and delete methods for MFS
   - Experiment with mutable methods in non-mutable areas
     - rmdir/del -> unpin; for files directly under the ipfs root
     - write -> add -w
 
@diasdavid (Unsure if will have good connectivity for this one)
 - Done:
   - Done more interviews (almost there, only 3 that still need to be scheduled)
   - Request DX Team to get go-ipfs, go-libp2p and go-ipld Packages table https://github.com/ipfs/testing/issues/128
 - Blocked:
 - Next: 
   - Finish the interviews/chats
   - Compile all the notes from the interviews/chats into something easy to consume by everyone in the Go Core Dev Teams
   
@kevina
  - Done:
    - In Progress: Begin new "cid" sub-command https://github.com/ipfs/go-ipfs/pull/5385
    - Needs Review: Extract parts of go-cid into go-cidutil https://github.com/ipfs/go-cid/pull/69 
    - In Progress: Add support for inlinling via the id-hash https://github.com/ipfs/go-ipfs/pull/5281
    - [WIP] Start work towards switching blockstore to use Multihashes: https://github.com/ipfs/go-ipfs-blockstore/pull/13
    - Various work towards Base32 CidV1 (see Other notes section)
  - Blocked:
     - Various aspects of Base32 CidV1 need feedback (see Other notes section)
  - Next:
     - Continue Base32 CidV1 work
     - Continue In progress P.R.

@schomatis (not attending)
 - Done:
   - `gx`: 
     - Unify dependency fetching in `gx` (https://github.com/whyrusleeping/gx/pull/197)
     - Review part of the documentation (https://github.com/whyrusleeping/gx/issues?q=is%3Aissue+is%3Aopen+label%3Adocumentation).
   - Encourage some community contribution.
   - In progress: Badger integrity (`go-ipfs`: #5213, #5280) and memory (#5177, #5390) issues.
   	- - Notes from @bigs:
     	 - When Commit(nil) returns (as we have it implemeneted in go-ds-badger), entries have been committed to the WAL at least and should be truncate-safe.
 - Next:
   - Ease the use of `gx-go link` when dependencies don't match, e.g., developing in `go-unixfs` and testing in `go-ipfs` (https://github.com/whyrusleeping/gx-go/issues/46).
   - Keep working on `gx` docs and code clarity.
   - Incorporate the feedback of the DAG traversal PR (https://github.com/ipfs/go-ipfs/pull/5257) and split it in the corresponding repos (`go-unixfs` and `go-ipld-format`). PR under review.

@stebalien
 - Done:
   - IPLD:
     - thinking through go-ipld interfaces from a performance perspective (no concrete progress)
     - have a plan to fix the interfaces and move to the IPLD org: https://github.com/ipld/go-ipld/issues/2
   - fix (in review): stop go-libp2p from NAT port mapping non-nat (e.g., localhost) addresses.
   - fix (in review): stop go-ipfs from listening on random ports.
   - misc fixes, reviews, gx
 - Next:
   - multistream-select (again)
   - continue work on IPLD interfaces/migration.
 - Blocked:
   - @daviddias: [Remove bitswap unwant](https://github.com/ipfs/go-ipfs/pull/5308)
   - @daviddias: [New multiaddr protocol](https://github.com/multiformats/multiaddr/pull/68)
 - Ask:
   - Please review PRs!
   - Bug me if you're blocked on something.

@Magik6k
 - Done:
   - Coverage from Jenkins - https://github.com/ipfs/go-ipfs/pull/5389
     - Needs a review + some admin actions
   - Rebasing / finishing PRs
 - Blocked:
 - Next:
   - get go-cidutil to be released on gx for coreapi/dht - https://github.com/ipfs/go-ipfs/pull/4804
     - + update the PR to use it
   - More coreapi command refactoring
   - `ipfs name resolve --stream` (@stebalien says ❤️)
   - workaround peerHost.SetStreamHandler not returning errors by using SetStreamHandlerMatch instead (for `ipfs p2p` refactor)

@keks
 - Done:
   - cmds refactor is on it's way
     - development branch of go-ipfs now uses newest version of refactored cmds lib
     - sharness tests fail
   - start of discussion on gx-gomod
     - https://github.com/whyrusleeping/gx/issues/200
 - Blocking:
   - keep gx-gxmod discussion alive (not urgent on my side)
   - get https://github.com/ipfs/go-ipfs/pull/5035 reviewed (not *super* urgent)
 - Next:
   - fix sharness tests
   - continue designing gx-gomod

@hsanjuan
 - Done:
   - Another round. Refs -r: https://github.com/ipfs/go-ipfs/pull/5337
   - Extract MFS (waiting OK): https://github.com/ipfs/go-ipfs/pull/5391
 
 - Blocked:
 - Next:
 
@bigs
 - Done:
   - Reversible netdefs and subnet support (feat/subnets on go-netdef)
   - Update existing netdef tool
   - Coral pairing with @carospiegly
 	 - Merged go-datastore and go-ds-badger changes!
 - Blocked:
 - Next:
 	 - Link options for subnet-to-subnet links in netdef
   - Collision-free namespacing for netdef
   - Helping boot up @raulk on Peerstore chnages
 - Notes:
   - OOO second half Thursday, all Friday

@mgoelzer
 - Done:
   - OKRs - wrangling everyone for mid-quarter scores; mid-qtr report to LabOS
   - Scheduling some recruiting meetings for September
   - Recruiting spreadsheet for Thr meeting


 - Blocked:
 	- Not blocked -- just not enough hours in the day!


 - Next:
   - Plan September trip to Bay Area to maximize chances to recruiting 1 or more great Go engineer s
   - Waffle cleanup
   - Continue developing go/js/rust interop demo
   - Docs improvement SOW and interviews
   - Rust dev shop SOWs
 

### Questions

### Other notes

**Base32 CidV1 Progress:**

_(Mostly Copied From Last Week)_

@kevina has been working steadily toward the goal to switch to base32.  Go-ipfs now can retrieve a block regardless of what CID version it is in.

He has created a a meta issue for tracking the progress in go-ipfs: https://github.com/ipfs/go-ipfs/issues/5358

He will continue to work steadily towards the goal but needs feedback on several issues:
  * Handling of Alternative Multibases [#5349](https://github.com/ipfs/go-ipfs/issues/5349) _(could use feedback from: @Stebalien @lidel @lgierth)_
  * How to handle CIDv0 as we migrate to CIDV1 [#5291](https://github.com/ipfs/go-ipfs/issues/5291) _(could use feedback from: @whyrusleeping @Stebalien)_
  * Create config option for specifying full default cidv1 parameters [#5230](https://github.com/ipfs/go-ipfs/issues/5230) 
  
#5349 and #5230 and are the most pressing and blocking full multibase support in go-ipfs.  #5291 is less pressing but he would really appeciate @daviddias and @whyrusleeping insight.

For all issues and p.r. related to Base32 CidV1 search using the `cidv1b32` tag: https://github.com/ipfs/go-ipfs/labels/cidv1b32
