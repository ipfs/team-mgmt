- **Lead:** Alan Shaw (@alanshaw)
- **Notetaker:** @jacobheun
- **Attendees:**
  - @travisperson
  - @jacobheun
  - @diasdavid
  - @mkg20001
  - @Mr0grog
  - @achingbrain
  - @vasco-santos
  - @hugomrdias
  - @achingbrain

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

@alanshaw
- Done:
  - Added tests and docs for `ipfs.resolve` [#332](https://github.com/ipfs/interface-ipfs-core/pull/332) in response to [#794](https://github.com/ipfs/js-ipfs-api/pull/794)
  - Reviewed and finished PR to `ipld-dag-pb` to allow traverse links by name [#78](https://github.com/ipld/js-ipld-dag-pb/pull/78)
  - Opened PR for partial `ipfs.resolve` on `js-ipfs` [#1455](https://github.com/ipfs/js-ipfs/pull/1455)
  - Reviewed PR for implementing `--raw-leaves` in `js-ipfs-unixfs-engine` [#219](https://github.com/ipfs/js-ipfs-unixfs-engine/pull/219)
  - Reviewed PR adding IPNS tests [#327](https://github.com/ipfs/interface-ipfs-core/pull/327)
  - Released `js-ipfs` 0.30.1 with fix for multiple calls to `preStart` [#1437](https://github.com/ipfs/js-ipfs/pull/1437)
  - Opened issue for `js-ipfs` 0.31 release 🎉 (#1458)[https://github.com/ipfs/js-ipfs/issues/1458]
- Blocked:
  - `null`
- Next:
  - Fix up [#755](https://github.com/ipfs/js-ipfs-api/pull/755) now it is unblocked
  - Continue work on CID base (`--cid-base`) option [#1441](https://github.com/ipfs/js-ipfs/pull/1441)
  - Get MFS support for `--raw-leaves` and `--cid-base` merged [#1454](https://github.com/ipfs/js-ipfs/pull/1454)


@vmx (not attending)
- Done:
  - Fixed js-ipls-bitcoin and js-ipld-zcash to work as expected (using
only the block header and not the full block with transaction)
  - DWebSummit IPLD Workshop preparations
- Blocked: Nope
- Next:
  - DWebSummit IPLD Workshop preparations

@diasdavid
- Done:
  - Connectivity Magic https://github.com/ipfs/js-ipfs/issues/1459#issuecomment-407105310
    - Design Session with Alex, Oli and Alan
    - Open Issue
    - Hosted session
    - Reached consensus \o/ 
  - Ship js-ipfs & js-libp2p OKRs
  - DWeb Workshops are on their way
  - Found a bug on dag-pb on resolve by link name. Submitted a patch (which was then finalized by Alan and Volker \o/)
  - Started a js-libp2p release [#226](https://github.com/libp2p/js-libp2p/issues/226)
  - Standard PR Review & Merge dance
  - js.ipfs.io (Review Illustrations + Animations + design, write copy, and sync up and sync up with the team)
- Blocked: Nope
- Next:
  - Support DWeb Summit Workshops
  - Support js.ipfs.io launch

@mkg20001:
- Done:
  - Rewritten libp2p-nodetrust into microservices
  - Fixed some bugs in peertunnel
- Blocked: N/A
- Next: _Will pick tasks later_

@Mr0grog
- Done: n/a
- Blocked: n/a
- Next:
  - Finish cleaning up docs site theme so it doesn't fire up your computer's fans
    - After this, I’ll be working with Lars/Victor/??? to get it live, at which point my involvement ramps down over the next few weeks to nothing
  - Post notes and drafts of concepts docs from Berlin meetings
  - Prototype some new approaches to HTTP API docs (*probably* won'tget to it this week)

@jacobheun
- Done:
  - Released new versions of libp2p-switch. latest is 0.40.7
  	- Bug fixes for protocol stats via @dryajov
   	- Fix a vulnerability, thanks @mkg20001!, with identify allowing peers to send any peer id
  - Private networking has been merged into libp2p-switch
  - released lib2p-pnet (private networking) 0.1.0, initial release
  - libp2p connection manager will now start and stop with libp2p [#225](https://github.com/libp2p/js-libp2p/pull/225)    
- Blocked: n/a
- Next:
  - Work on getting private networking integrated into [js-ipfs-repo](https://github.com/ipfs/js-ipfs-repo/pull/172) and js-ipfs
  - See what else is needed for peer and content routing to get shipped

@achingbrain
- Done:
  - added base32 support to mfs
  - improved cid-v1 support in unixfs-engine
  - added raw leaf nodes support to unixfs-engine
  - npm-on-ipfs
- Blocked:
  - https://github.com/ipfs/js-ipfs-api/pull/806 (waiting for go-ipfs 0.4.17)
  - https://github.com/ipfs/js-ipfs/pull/1372
  - https://github.com/ipfs/interface-ipfs-core/pull/334
- Next:
  - npm-on-ipfs

@vasco-santos
- Done:
  - interface-ipfs-core PR for IPNS tests
    - https://github.com/ipfs/interface-ipfs-core/pull/327
    - Alan's Code Review fixed (will fix the new comments later today)
  - Repo interoperability
    - Created PRs on js-ipfs, js-ipfs-repo and interop
  - js-ipfs IPNS PR
    - Some fixes due to the `interface-ipfs-core` code review
    - Got go -> js IPNS interoperability is working on ipfs/interop (linking interop repo PRs)
  - Labeled all the issues from the repos where I am the lead maintainer  
- Blocked:
  - All the repo interop PRs
    - https://github.com/ipfs/js-ipfs/pull/1461
    - https://github.com/ipfs/js-ipfs-repo/pull/173
    - https://github.com/ipfs/interop/pull/29
    (need the repo interop for finishing IPNS interop)
- Next:
  - Get repo interop PRs merged
  - js -> go IPNS interop
  - Repo migration tool problems description

@travisperson
 - Done: na/a
 - Blocked: n/a
 - Next:
   - Continue iptb plugins (https://github.com/ipfs/iptb/pull/61)
     - Break apart interface
     - Update CLI
   - Investigate and open issue around jsipfs in iptb

@hugomrdias
  - Done:
    - js.ipfs.io getting started section
    - js.ipfs.io support for relative urls 
    - vacations
  - Blocked:
  	- make gatsby work with js-ipfs and relative urls
  - Next:
  	- finish js.ipfs.io
    
@name
  - Done:
  - Blocked:
  - Next:
  
  
### Questions

### Other notes
- @jacobheun will be out Aug 1 - 8th
- @travisperson not attending next update (attending http://gonorthwest.io/) 

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
