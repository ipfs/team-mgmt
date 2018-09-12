# 💫Golang Core Dev Team Weekly Sync 🙌🏽 September 10, 2018

- **Lead:** @bigs
- **Notetaker:** 
- **Attendees:**
    - @stebalien
    - @bigs
    - 
- **Recording:**

## Agenda

- Ask everyone to put their name into the list of attendees
- Round of updates
  - What have you accomplished since the last Weekly?
  - Were there any blockers? If so, which ones? Is it still blocked? Why?

- Ask for general questions. Could be things like:
  - I'm stuck with something, I don't know who to ask. Who knows who to ask?
  - Who can help me with xyz?
- Plan this week
  - Select issues to work on
- Review remaining issues if there is time left


## Notes

### Week Update

@raulk:

- Done:
  - Peerstore: refactorings merged; keybook tests merged; migration to TxnDatastore; performance; caching 🙌
  - Analysis: k-bucket underutilisation and excessive thrashing https://github.com/libp2p/go-libp2p-kad-dht/issues/194
  - Getting up to speed with ETH libp2p sharding PoC.
  - SecIO and Yamux data race: https://github.com/libp2p/go-libp2p/issues/396
- Blocked: none
- Next:
  - Create tests for Yamux net.Conn deadlines
  - Look at extracting PING protocol.
  - Continue work on peerstore.

@keks:
- Done:
  - more go-ipfs-cmds (long CR process) (https://github.com/ipfs/go-ipfs-cmds/pull/112)
  - review ipfs add --name (in progress)
- Blocked: none
- Next:
 
  - go-ipfs-cmds
    - wait for green light from stebalien
  - go-ipfs: update cmds
    - rebase feature branch to master
    - update to new cmds version
    - pass sharness tests
    - final rounds of review
  - go-ipfs add --name: finish review
    
@kevina
 - Done: 
   - Work on bubbling up go-cid string representation (https://github.com/ipfs/go-cid/pull/71)
   - Side project: gx-update-tracker (https://github.com/kevina/gx-update-helper)
     - Tool for keeping track of state during complex gx update with lots of dependencies
     - Wrote it to keep my sanity while working on go-cid API change
     - Stebalien's FYI: https://github.com/whyrusleeping/gx/issues/179, https://github.com/whyrusleeping/gx/pull/206
 - Blocked:
   - General feedback and approval on active p.r.
 - Next: 
   - Merge and bubble-up switch to go-cid string representation (https://github.com/ipfs/go-cid/pull/71)
   - Merge and bubble-up switch to go-multihash string representation (https://github.com/multiformats/go-multihash/pull/84)
   - Create P.R. for new plas for `--cid-base` and `--upgrade-cid` options
   
@bigs
- Done:
  - Coral pairing with @carospiegly
  - Waffle management spin-up with @mgoelzer
  - libp2p daemon exploration
  - DHT day
- Blocked:
- Next:
  - Need input on libp2p daemon scope. I'm currently of the opinion that a standalone libp2p daemon for general networking purposes is not a feasible/reasonable option, and that it should be specialized for testing purposes.
    - Stebalien's comment: testing/stand-alone are, IMO, independent issues. 
    - Cole: agreed! perhaps separate endpoints.

@warpfork
- Done:
  - some refmt fixes merged
  - review & benchmark on ipld branches; some more things merged
  - specs: have folks seen https://tools.ietf.org/html/rfc6901 ?  it looks a lot like our merklepaths.
- Blocked: none... well, will be happy when go-cid goes in :)
- Next:
  - allocating some time to merklebuilds and talk prep for ASGconf
  
@stebalien:
- Done:
  - review, gx, issue wrangling
  - [p2pcat](https://github.com/Stebalien/p2pcat)/[protocat](https://github.com/Stebalien/p2pcat) utilities.
  - started process of un-gxing everything: https://github.com/ipfs/go-ipfs/pull/5435
  - started removing the Godeps: https://github.com/ipfs/go-ipfs/pull/5440
  - Modified multistream to send fewer packets: https://github.com/multiformats/go-multistream/pull/32
  - Further testing on: https://github.com/ipfs/go-ipfs/issues/4280. Some work on my go-dbuf library but I'm no-longer convinced it's the right approach.
- Next:
  - P0: Get my inbox(s) back down to 0.
  - P0: Review and merge the CID refactor.
  - Get the commands lib refactor in: https://github.com/ipfs/go-ipfs-cmds/pull/112
  - Get the p2p refactor in.
  - Get the CoreAPI refactors in (@magik6k, status?).
    - block cmd / dht should be ready
  - Work a bit on port-mapping stuff (we have some users filing PRs who could use a bit of context/direction)
  - Raúl: Can you take a look at https://github.com/libp2p/go-libp2p-kad-dht/issues/194?
- Blocked/Asks:
  - "If you see something, say something". If you see a new PR, issue, etc., just jump in and do what you can.
  - Please try to show up to this meeting in-person. It's the only time we have to sync.

@Magik6k (zoom broke)
- Done:
  - Did some reviewing
  - PR maintenance
  - 32bit ci tests
- Blocked:
  - Still need reviews:
    - Routing interface changes - https://github.com/libp2p/go-libp2p-routing/pull/25 (and it's dependencies)
    - ipfs p2p refactor - https://github.com/ipfs/go-ipfs/pull/4929
    - coreapi dht - https://github.com/ipfs/go-ipfs/pull/4804
    - block cmd on coreapi - https://github.com/ipfs/go-ipfs/pull/5331
- Next:
  - Rebase PRs steven wants in
  - PR unixfs coreapi stuff
  - Hopefully finish routing changes for SearchValue

@schomatis (took a couple of days off to recover from a cold):
- In progress: DAG walker https://github.com/ipfs/go-ipld-format/pull/39/files
  - Split the Walker creating the `NavigableNode` interface to try to reuse it with any structure that can fetch its children (not just the IPLD interface).
  - Found a bug in `go-unixfs` (https://github.com/ipfs/go-unixfs/issues/14) while trying to figure out how should IPLD node promises be handled while reading a file DAG.
- Next:
  - Add Badger truncate option.
  - `ipfs files cp <symlink>` error: https://github.com/ipfs/go-ipfs/issues/5302
  - Figure out context use in the `NavigableIPLDNode` used by the DAG walker.
   
### Questions

- Cole: how should we structure the libp2p daemon for testing? IPFS daemon is very heavily wrapped up in the go-ipfs project. Is it worth extracting any of that infrastructure? What should APIs look like for tests.
	- Stebalien: A daemon will allow us to share peer routing, content routing, and connections. That's really why we want it. However, we also need daemon for testing. They may end up being the same but we'll need to, at the very least, expose additional endpoints for testing.

### Other notes
