# 💫Golang Core Dev Team Weekly Sync 🙌🏽 September 3, 2018

- **Lead:** Mike Goelzer
- **Notetaker:** Mike
- **Attendees:**
  - @mgoelzer (leading in @diasdavid's absence)
  - @why
  - @warpfork
- **Recording:** The Go Core Dev Recordings are private to the team. https://drive.google.com/file/d/1-qdOhN1vq12V1r4RCiQP_wqSDnM6Du77/view?usp=sharing

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

@marten-seemann
 - Done: Finished QUIC support for IPFS. It's merged into master and will be rolled out with the next release.
 - Blocked: not blocked
 - Next: continue working on using tls-tris for the QUIC handshake
 
@kevina (not attending)
 - Done: 
   - More progress in `ipfs cid` sub-commands (https://github.com/ipfs/go-ipfs/pull/5385)
   - Finalize plans for switching go-cid to use a string internally (https://github.com/ipfs/go-cid/pull/71)
   - Finalize plans for switching go-multihash to use string internally (https://github.com/multiformats/go-multihash/pull/84 https://github.com/ipfs/go-cid/pull/73)
   - Work towards `--cid-base` and `--upgrade-cid` options (local branch not pushed yet)
 - Blocked: nothing inparticular
 - Next: 
   - Merge and bubble-up switch to go-cid string representation
   - Merge and bubble-up switch to go-multihash string representation
   - Create P.R. for new plas for `--cid-base` and `--upgrade-cid` options

@warpfork:
	- Done:
    - Firing up the brain on all things performance.  Learned to read go assembler.  Whee.
  - Blocked: nah
  - Next:
  	- Continuing benchmarking and profiling serialization libs, aiming to get towards confidence in merging some ipld PRs leaning on them.

@raulk:
 - Done:
   - Refactor peerstore into interface, mem impl, ds impl: https://github.com/libp2p/go-libp2p-peerstore/pull/30
   - Increase test coverage in peerstore: https://github.com/libp2p/go-libp2p-peerstore/pull/32
   - Connection manager discussions: https://github.com/libp2p/go-libp2p-connmgr/issues/19
   - Getting up to speed with peerstore, benchmarks.
   - WIP migrate peerstore from ds.Batching to ds.TxnDatastore: https://github.com/raulk/go-libp2p-peerstore/tree/txndatastore
 - Blocked: none
 - Next:
   - SecIO and Yamux data race: https://github.com/libp2p/go-libp2p/issues/396
   - Look at extracting PING protocol.
   - Continue work on peerstore.
   - libp2p writeup.

@schomatis (not attending):
 - Done: Add an option to `gx-go link` to resolve dependency version conflicts (https://github.com/whyrusleeping/gx-go/pull/51, it's pending one last review from Steven). Please try it out since this is just an experimental feature that I designed and coded thinking only of my own Gx workflow, so it would be great to have feedback from other developers.
 - Next: (Same as last week since I didn't get to it.)
   - Add Badger truncate option.
   - Finish the revision of the DAG walker in go-format-ipld.

@stebalien:
  - Done:
    - Experimentation on CIDs/multihash -> string stuff.
    - Reviews as usual (messag signing, cid sib command, gx, ...).
    - Extracted the extract provider record PR
    - Fixed issue where go was listening on a random port
    - Diagnosed secio race condition: https://github.com/libp2p/go-libp2p/issues/396
    - Merged/updated Stat command on streams
  - Next:
    - Review the go-bitswap stuff (in progress)
    - Finish rebasing the extract provider record PR in go-ipfs.

 
@diasdavid (on vacation)
 
@marten-seemann:

@Magik6k (not attending)
 - Done:
  - `ipfs name resolve --stream` works \o/
  - Workaround for double registration in `ipfs p2p`
  - coverage++ on coreapi dht PR
 - Blocked:
  - Need reviews:
    - Routing interface changes - https://github.com/libp2p/go-libp2p-routing/pull/25 (and it's dependencies)
    - `ipfs p2p` refactor - https://github.com/ipfs/go-ipfs/pull/4929
    - coreapi dht - https://github.com/ipfs/go-ipfs/pull/4804
    - block cmd on coreapi - https://github.com/ipfs/go-ipfs/pull/5331 
 - Next:
  - Hopefully get other coreapi stuff moving (depends on dht api PR)
  - Start reworking unixfs coreapi (get feature parity with `ipfs add` / other related command)

@bigs

@hsanjuan

### Questions

### Other notes

- David will be out Sep 3 ~ Sep 14. Next week leader will be:
  - Sep 10 - @bigs  
- Call for Waffle Grooming. Spend 30 minutes of your day reviewing 30 issues (1 minute per issue), all the contributors of go-{ipfs, libp2p, ipld} will thank you!
- Connection Manager Discussion
  - Consider tracking streams versus connections
  - Better connection triming logic
  - Need to compare JS/GO interfaces
- Lots of support for closing old issues/PRs.
  - Questions:  close them
  - Discussion issues:  close them
  - Designed but not actionable:  not sure what to do
  	- IPLD has a lot of these right now
  - Don't close design issues though - they are still under consideration
  	- E.g., DHT 2.0 issue
  - Need a workflow for design issues:  conversation stage, design doc needed stage
  	- Steb:  Meta issues would be a solution.  If there are eg 3 proposals for a design, create a meta issue, and link it to the 3 design issues.  Then close the 3.  Goal is for new people who come to the repo can search and find an open issue about a design, but the individual proposals are in a closed state so that we don't have a massive number of open issue.

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
