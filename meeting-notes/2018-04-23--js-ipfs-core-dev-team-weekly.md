# ⒿⓈ⚡️  js-ipfs Core Dev Team Weekly April 23, 2018

- **Lead:** David Dias (@diasdavid)
- **Notetaker:**
- **Attendees:**
  - @jacobheun
  - @dryajov
  - @hugomrdias
  - @zcstarr
  - @travisperson
  - @achingbrain
- **Recording:** https://youtu.be/DoRx1VHtgGQ

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
   - Came out from the woods
   - Started reviewing and merging all the things. Awesome work y'all!
 - Blocked:
 - Next:
   - Work on getting js-ipfs 0.29.0 released
   - Work on setting up the protocol for distributing the captainship of the multiple modules
     - https://github.com/ipfs/pm/issues/600

@vmx
 - Done:
   - Really basic Bitswap benchmark (Peer 2 empty nodes, add file to one, retrieve it from the other)
 - Blocked:
   - IPLD Format Spec reviews (I'll ping Kumavis again)
     - https://github.com/ipld/interface-ipld-format/pull/25/files
 - Next:
   - DAG API for JS IPFS CLI perhaps this week?
   - Look into how GraphSync will actually look like

@dryajov
 - Done:
  - pull-mplex perf improvements
  - feat: improve default address overrides 
    - https://github.com/ipfs/js-ipfsd-ctl/pull/232
 - Blocked:
  - N/A
 - Next:
   - circuit relay NAT
   
@jacobheun
  - Done:
    - Repo custom lock is merged in
    - Updated example in datastore-s3 repo to include custom lock
  - Blocked:
  	- None
  - Next:
    - Finalizing the repo configuration example in js-ipfs
    - Continuing on with private network (pnet)
    - Will be working on a refactor of libp2p-switch in tandem with pnet updates
  
@hugomrdias
 - Done: 
   - Research libp2p and connection manager 
   - Browser builds with webpack - diogo took over that to finish the last tweaks and PR
 - Blocked:
 - Next:
 	 - Add support for a couple features to aegir test, like --bail etc
   - Review set and hook up libp2p-connection-manager https://github.com/libp2p/js-libp2p/pull/184
   - Setup connection-manager and expose it https://github.com/libp2p/js-libp2p/issues/183

@zcstarr
 - Done:
 	- Vacation last week
 - Blocked:
 - Next:
 	- ipld pull-streams api changes
  	- https://github.com/ipld/js-ipld/pull/122 

@fsdiogo
- Done:
  - Started working with @hugomrdias to add babel-loader to AEgir to produce a transpiled version of js-ipfs
    - [https://github.com/fsdiogo/aegir/commit/8fbdf3cae819c09def21d9d7e8e5635b53462c95](https://github.com/fsdiogo/aegir/commit/8fbdf3cae819c09def21d9d7e8e5635b53462c95)
  - Started looking at the Exchange Files example to revamp it
  - Did some house cleaning about the UglifyJS issue
    - h[ttps://github.com/ipfs/js-ipfs/issues/1321](https://github.com/ipfs/js-ipfs/issues/1321)
- Blocked:
  - Waiting for AEgir PR to be merged
    - [https://github.com/ipfs/aegir/pull/214](https://github.com/ipfs/aegir/pull/214)
  - Release new version of IPFS with updated AEgir
    - [https://github.com/ipfs/js-ipfs/issues/1320](https://github.com/ipfs/js-ipfs/issues/1320)
- Next:
  - Revamp the Exchange Files example

@vasco-santos
- Done:
  - Created PR for Issue 581
  - Created PR for Issue 712
  - Analysis and testing  ipfs/ipfs-service-worker preparing for OKR
   (https://github.com/ipfs/ipfs-service-worker/issues/9 answered and tested)
- Blocked: 
  - Ipfs-service-worker
  (https://github.com/ipfs/ipfs-service-worker/issues/11)
  (Need more information)
  - IPNS OKRs
  (Need more information)
  - Issue 581 - ipfs behind proxy
  (https://github.com/ipfs/js-ipfs-api/issues/581)
  - Issue 712 - multiaddr support with DNS - PR Reviewed by victor
  (https://github.com/ipfs/js-ipfs-api/issues/712)
  - Issue 529 - dht.findprovs uniformization
  (https://github.com/ipfs/js-ipfs-api/issues/529)
- Next:
  - AFK until 2nd May
  - Service Worker Gateway OKR 
  - Pending Issues

@achingbrain
 - Done: mfs write operation
 - Blocked: stream slicing PRs
   - https://github.com/ipfs/interface-ipfs-core/pull/258
   - https://github.com/ipfs/js-ipfs-api/pull/746
   - https://github.com/ipfs/js-ipfs/pull/1231
 - Next: mfs write operation

@name
 - Done:
 - Blocked:
 - Next:


### Questions

### Other notes

@hugomrdias: here is the link to the connection manager issue - https://github.com/libp2p/js-libp2p-connection-manager/issues/2

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
