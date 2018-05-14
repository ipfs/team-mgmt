# ⒿⓈ⚡️  js-ipfs Core Dev Team Weekly May 7, 2018

- **Lead:** David Dias (@diasdavid)
- **Notetaker:** Jacob Heun (@jacobheun)
- **Attendees:**
  - @fsdiogo
  - @vasco-santos
  - @alanshaw
  - @jacobheun
  - @dryajov
  - @gar
  - @mgoelzer
  - @vmx
  - @mkg20001
  - @pgte
- **Recording:** https://youtu.be/JukmLgmBjmw

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

@vmx
 - Done:
   - [IPLD Format spec](https://github.com/ipld/interface-ipld-format/blob/master/README.md) updates (all merged!)
   - Lots of administrative things
   - Bit of GraphSync realted things
 - Blocked: None
 - Next:
   - GraphSync
   - IPLD Meeting in Lisbon

@zcstarr
 - Done:
 	- IPLD pull streams refactor
    - https://github.com/ipld/js-ipld/issues/101
 - Blocked:
 - Next:
 	- IPLD pull streams js-ipfs and js-unixfs update
    	- https://github.com/ipld/js-ipld/pull/122	
 	- will be online but probably will miss next few sync ups
  
@fsdiogo
- Done:
  - Upgraded the File Exchange example UI/UX
  - [https://github.com/ipfs/js-ipfs/tree/docs/revamp-exchange-files-example](https://github.com/ipfs/js-ipfs/tree/docs/revamp-exchange-files-example)
- Blocked:
  - N/A
- Next:
  - Add pubsub and file sync feature to the example

@vasco-santos
- Done:
  - Issue 712 - multiaddr support with DNS
    - https://github.com/multiformats/js-multiaddr/pull/62 (MERGED)
  - Issue 237 - Daemon spawning throws error with the new multiaddr version
    - https://github.com/ipfs/js-ipfsd-ctl/pull/238 (MERGED)
  - Started service worker for browser gateway (OKR)
    - Fix ipfs-service-worker on page refresh (WIP branch)
    - Caching requests (WIP branch)
    - New repo: https://github.com/ipfs-shipyard/service-worker-gateway
- Blocked:
  - Issue 581 - ipfs behind proxy
    - https://github.com/ipfs/js-ipfs-api/pull/744 (waiting for merge)
  - Issue 529 - dht.findprovs uniformization
    - https://github.com/ipfs/js-ipfs-api/issues/529 (waiting david feedback)
- Next:
  - Continue Service worker gateway
  - Close blocked issues

@jacobheun
- Done:
  - libp2p-switch code clarity refactor
  - State machine proposol for connections in switch https://github.com/libp2p/js-libp2p-switch/issues/24#issuecomment-386331717
- Blocked:
  - N/A
- Next
	- libp2p private network
  - state machine updates for switch
  - getting caught up on latest issues for ipfs-repo for lead maintainer work

@dryajov (was out most of last week)
 - Done:
  - pull-mplex performance - https://github.com/libp2p/pull-mplex/pull/1#issuecomment-385130066
  - troubleshooted and fixed js interop issues with go mplex changes - https://github.com/libp2p/go-mplex/pull/26
  - don't blow up stack - https://github.com/libp2p/pull-mplex/pull/1/commits/0cc6dac7f6f5077126551bc83f3f23b80c31bc40
 - Blocked:
   - NA
 - Next:
   - NAT traversal
   - finish up pull-mplex and libp2p-mplex

@mkg20001
 - Done: N/A
 - Blocked: N/A
 - Next:
   - finish libp2p uTP fix
   - update libp2p rendezvous
   - do something on libp2p nodetrust?

@diasdavid
  - Done
    - PubSub Fixes and API upgrade
    - Maintainers PRs (tons of PRs, still more to come)
    - Get js-ipfs CI to go green (find ipfs-repo issue)
    - Review and merge PRs (which I hope to be less)
  - Blocked
  - Next
  	- js-ipfs release

@gar:
 - Done: N/A
 - Blocked:
  - datastore-fs sync param https://github.com/ipfs/js-datastore-fs/pull/15
  - bitswap unwant cli/http api
   - https://github.com/ipfs/js-ipfs/pull/1306
   - https://github.com/ipfs/js-ipfs-api/pull/754
   - https://github.com/ipfs/interface-ipfs-core/pull/254
 - Next: 
  - Continue getting js-ipfs implementation matched w/ go (bitswap section is current focus)
   - https://github.com/ipfs/ipfs/blob/master/IMPLEMENTATION_STATUS.md

@pgte
 - Done:
   - Took the maintainer role for peer-id, peer-info and peer-book
   - libp2p/connection-manager discussions
   - some small reviews
 - Blocked: N/A
 - Next: N/A

@alanshaw
 - Done:
   - Made progress on using IPLD to the DAG API (https://github.com/ipfs/js-ipfs-api/issues/738)
   - Taking the maintainer role for js-ipfs, js-ipfs-api, interface-ipfs-core
 - Blocked:
 - Next:
   - Finish off IPLD DAG work (https://github.com/ipfs/js-ipfs-api/pull/755)

@name
 - Done:
 - Blocked:
 - Next:

### Questions

 - @vmx: Is anyone good with npm pre-release tags? I plan to release the AEgir flow branch as pre-release tag and I'm really unsure how to do it properly
 - @mkg20001: Can I be lead maintainer of ws-star and js-rendezvous?
 - @dryajov: I can take libp2p-circuit, libp2p-mplex, pull-mplex, ipfsd-ctl
 - @diasdavid: How to people feel about the work they are doing vs Q2 OKRs? Are we on track?
  - Everyone should do a check in the next few days to see how their priorities are for Q2 OKRs, so we can work on trying to get closer to be on track to complete everything we set out to. Try to identify things that are taking up more time, so we can work on mediating those.
  
### Other notes

For people looking to be a lead maintainer, look into the guidelines for that and reach out async for those to ensure it is clear what needs to be done there.

 - @mgoelzer: Any notes coming out of the ipld meetings?
 	- Yes, there will be notes, it might take 3-4 weeks to get everything posted. No videos are planned.
  
<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
