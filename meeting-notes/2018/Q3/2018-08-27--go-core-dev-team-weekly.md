# 💫Golang Core Dev Team Weekly Sync 🙌🏽 August 27, 2018

- **Lead:** David Dias
- **Notetaker:** Steven Allen
- **Attendees:**
  - @stebalien
  - @mgoelzer
  - @warpfork
  -
- **Recording:** The Go Core Dev Recordings are private to the team

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
 
@diasdavid
  - Done:
    - Almost done with the Interviews (10 out of 12)
    - Almost done with the Presentation. Preliminary version will go out tomorrow.
    - Create the package-table module https://github.com/ipfs-shipyard/package-table(and work with the Henrique to make it fulfill all go-ipfs needs)
    - Updated go-ipfs README https://github.com/ipfs/go-ipfs/pull/5396  
    - PR with the package table for go-libp2p got merged https://github.com/libp2p/go-libp2p/pull/403
  - Blocked:
    - PR with package table for go-ipfs https://github.com/ipfs/go-ipfs/pull/5395
    - PR with package table for go-ipld https://github.com/ipld/go-ipld/pull/3
  - Next: 
 	  - Finish the Presentation and Record it to distributed with the team
    - Find a replacement to Lead this call on Sep 03 and Sep 10
 
@marten-seemann (not attending):
  - Done: 
    - Prepared the go-ipfs PR to merge QUIC support
    - Started working on using tls-tris (the TLS 1.3 library by ClouldFlare, supposed to get merged into the Go standard library) for QUIC. This won't be an easy task.
  - Blocked: 
    - Discovered a minor quic-go bug, which I'll fix first, and update my go-ipfs PR
  - Next:
   - Continue working on QUIC
  
@raulk:
  - Done:
    - onboarding 🎉
    - assist with go-libp2p package table https://github.com/libp2p/go-libp2p/pull/403/
    - enable DNS resolution in multiaddrs passed to `--api` IPFS CLI flag https://github.com/ipfs/go-ipfs/pull/5372
    - review Go libp2p ConnManager
      - contributed docs: 
        - https://github.com/libp2p/go-libp2p-interface-connmgr/pull/7
        - https://github.com/libp2p/go-libp2p-connmgr/pull/21
      - proposals/discussions: 
        - https://github.com/libp2p/go-libp2p-connmgr/issues/19
        - https://github.com/libp2p/go-libp2p-connmgr/issues/20
  - Blocked:
    - n/a
  - Next: 
    - continue getting up to speed with things
    - take a stab at extracting and packaging PING protocol
    - contribute to persistent peer store => https://github.com/libp2p/go-libp2p-peerstore/pull/29
    - write summary from my first weeks @ libp2p
    
@kevina (attending, but will be a little late)
 - Done: 
   - Merged: Support for inlinling of small values into CIDs
   - Worked on: Change CID representatisentation to a string: https://github.com/ipfs/go-cid/pull/47
   - Worked on: New CID subcommand: https://github.com/ipfs/go-ipfs/pull/5385
 - Blocked:
   - @Stebalien Need to continue the discussion on: RFC: Handling of Alternative Multibases: https://github.com/ipfs/go-ipfs/issues/5349
 - Next:
   - Add `--cid-base` and `--cid-upgrade` (upgrade cidv0 to cidv1 for display) to at least `ipfs add`
   - Get promised feedback to Dave after Interview
   - Other tasks related to base32cidv1 migration

@Magik6k (possibly not attending):
 - Done:
   - `ipfs name resolve --stream` / namesys refactor mostly done, PR soon (today-ish)
 - Blocked:
 - Next:
   - Get last week tasks done (moving took more time than expected)

@schomatis (not attending)
 - Note: I won't be able to attend most of the times, but I'll be watching the video afterwards so feel free to mention me or leave questions/requests in the call itself.
 - Done:
    - `gx-go link`: Don't allow the root package dependencies to be overwritten in the map (https://github.com/whyrusleeping/gx-go/pull/47), pending Steven's review.
    - IPLD/DAG Walker (similar to Go's `filepath.Walk()` but for DAGs, https://github.com/ipfs/go-ipfs/pull/5257): Split original PR into two PRs in the `go-ipld-format` and `go-unixfs` repos.
 - Blocked: (@Stebalien)
    - The first iteration of `gx-go link` with `vendor/` has type mismatch issues.
    - Gx: Add an option to use package name and version (instead of hash): https://github.com/whyrusleeping/gx/issues/205.
 - Next:
    - Add a truncate option for the Badger datastore.
    - Incorporate review feedback to the IPLD Walker (https://github.com/ipfs/go-ipld-format/pull/39).

@stebalien
- Done:
  - reviews/fixes/docs/gx stuff
  - lots of time debugging: https://github.com/ipfs/go-ipfs/issues/5328. Still not clear what's happening.
  - worked with @travisperson on new gx design. There are PRs up for a first minimal implementation.
    - https://github.com/whyrusleeping/gx-go/pull/49
    - https://github.com/whyrusleeping/gx/pull/206
    - Discussions:
      - https://github.com/whyrusleeping/gx/issues/179#issuecomment-408243162
      - https://github.com/whyrusleeping/gx/issues/200#issuecomment-415618874
  - wrote up some thoughts on an alternative to IPRS that doesn't require a VM: https://github.com/ipfs/notes/issues/291#issuecomment-414495124
  - fixed some urlstore test issues noticed by @keks (errors are being swallowed by our current cmds lib but not the next version)
- Blocked:
  - Nothing
- Next:
  - Try to find time for multistream-select again (probably won't)
  - Review:
    - Any CIDv1 stuff @kevina throws my way.
    - The commands lib patches a final time.
    - CoreAPI PRs
    - Pubsub message signing
    - package-table
    - connection manager proposals
    - others?
- Comments:
  - from @warpfork: re gx stuff: I've been working on "pkg mgr comparison matrix" with some folks after Bornhack, might be relevant for terminology development.  Let's work more on that?

@bigs
- Done:
  - boot up chat with raul
  - all go netdef goals from last week! (https://github.com/whyrusleeping/go-netdef/pull/2)
    - subnet networking
    - safe name generation for auto-generated devices/namespaces
    - clean reversal of netdef changes
- Blocked:
  - nothing
- Next:
  - pair session with raul on peerstore
  - transactional dht updates with TxnDatastore
  - lots of code review!
  - iptb integration w/ go-netdef

@warpfork
- Done:
  - Home from bornhack.  Gave presentation about repro builds; audience asked about how to make it work with IPFS :3
  - CID-> depointerizing: research 'n benchmarks.
    - https://github.com/ipfs/go-cid/pull/70 -- research
    - https://github.com/ipfs/go-cid/pull/71 -- real deal
  - Researching some bugs for filecoin serialization.
  - Compiling notes on IPLD and where to aim.
- Blocked:
  - nothing
- Next:
  - land CID research, iterate
	- more of sa

@hsanjuan
- Done:
  - refs -r --max-depth looks fine (https://github.com/ipfs/go-ipfs/pull/5337)
- Next:
  - tests for above
- Blocked:
  - nothing

### Questions

### Other notes

- David will be out Sep 3 ~ Sep 14. Need takers to Lead the Weekly Sync for:
  - Sep 3 - @mgoelzer
  - Sep 10 - @bigs  
- Call for Waffle Grooming. Spend 30 minutes of your day reviewing 30 issues (1 minute per issue), all the contributors of go-{ipfs, libp2p, ipld} will thank you!
- Connection Manager Discussion
  - Consider tracking streams versus connections
  - Better connection triming logic
  - Need to compare JS/GO interfaces
