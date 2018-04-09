# ⒿⓈ⚡️  js-ipfs Core Dev Team Weekly 2018-04-09

- **Lead:** Volker Mische (@vmx)
- **Notetaker:** @jacobheun
- **Attendees:**
  - @jacobheun
  - @mkg20001
  - @vasco-santos
  - @gar
  - @dryajov
  - @pgte
  - @hugomrdias
  - @jonkrone
  -	@kumavis
  - @fsdiogo
  - @zcstarr


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
* Several blockers on PR reviews, releases and feedback. See weekly update blockers.

### Week Update

@vmx
 - Done:
   - IPLD OKR planning
   - Basic js-ipfs-api DAG API
   - Moving Flow typing stuff to AEgir
 - Blocked: No
 - Next:
   - js-ipfs CLI DAG API
   - More Flow typing in AEgir
   - Learning about Bitswap

@vasco-santos
- Done:
	- Onboarding.
	- #580 = public readonly method for getting host data 
  	- https://github.com/ipfs/js-ipfs-api/pull/731
	- #406 = provide access to bundled libraries when in browser
		- js-ipfs => https://github.com/ipfs/js-ipfs/pull/1297 (Not merged yet)
		- js-ipfs-api => https://github.com/ipfs/js-ipfs-api/pull/732
		- PR interface-ipfs-core => https://github.com/ipfs/interface-ipfs-core/pull/252
	- #563 = display error when using unknown cli option
		- https://github.com/ipfs/js-ipfs/pull/1301
- Blocked:
	- Ipfs-service-worker OKR
    - Need more information @diasdavid
  - https://github.com/ipfs/js-ipfs/pull/1297 
- Next:
	- Continue solving issues
  	- #406
    - ...

@hugomrdias
 - Done:
   - Read documentation on ipfs
   - OKR definition 
 - Blocked: No
 - Next:
   - [work on Better error message when not initialized #1180](https://github.com/ipfs/js-ipfs/issues/1180)
   - [work on fix: CLI should accept content from stdin](https://github.com/ipfs/js-ipfs/pull/785)
 
@achingbrain
 - Done:
   - Update stream slicing inline with requested spec changes
 - Blocked: No
 - Next:
   - Finish stream slicing
   - Continue MFS implementation
   
@jacobheun
  - Done:
    - Created s3 datastore repo https://github.com/ipfs/js-datastore-s3
    - Read through the pnet spec and go implementation
  - Blocked: No
  - Next
  	- Making repo locks optional/configurable https://github.com/ipfs/js-ipfs-repo/issues/161
    - Private networks

@fsdiogo
- Done:
  - **js-libp2p-tcp**
    - [https://github.com/libp2p/js-libp2p-tcp/pull/90](https://github.com/libp2p/js-libp2p-tcp/pull/90)
  - **js-libp2p-webrtc-star**
    - [https://github.com/libp2p/js-libp2p-webrtc-star/pull/137](https://github.com/libp2p/js-libp2p-webrtc-star/pull/137)
  - **js-libp2p-webrtc-direct**
    - [https://github.com/libp2p/js-libp2p-webrtc-direct/pull/18](https://github.com/libp2p/js-libp2p-webrtc-direct/pull/18)
  - **js-libp2p-websocket-star**
    - [https://github.com/libp2p/js-libp2p-websocket-star/pull/48](https://github.com/libp2p/js-libp2p-websocket-star/pull/48)
  - **js-libp2p-websockets**
    - [https://github.com/libp2p/js-libp2p-websockets/pull/72](https://github.com/libp2p/js-libp2p-websockets/pull/72)
  - **js-libp2p-utp**
    - [https://github.com/libp2p/js-libp2p-utp/pull/75](https://github.com/libp2p/js-libp2p-utp/pull/75)
  - **js-libp2p**
    - [https://github.com/libp2p/js-libp2p/pull/182](https://github.com/libp2p/js-libp2p/pull/182)
- Blocked:
  - Waiting for some repos to be released and deps updated
- Next:
  - Check if all deps are up to date across the repos
  - Test a working ipfs bundle

@dryajov:
 - Done:
  - pull stream multiplexer: https://github.com/libp2p/js-libp2p-mplex/pull/76
    - expanded implementation to support all required use cases
    - ported existing mplex tests
    - interface-stream-muxer, libp2p-switch tests are passing (100%)
      - there is a weird issue with one test in libp2p, but the rest are passing 
  - ipfsd-ctl stop/kill timeout: https://github.com/ipfs/js-ipfsd-ctl/pull/228
 - Blocked: No
 - Next:
  - pull stream multiplexer: https://github.com/libp2p/js-libp2p-mplex/pull/76
    - finish implementation and cleanup
    - chunking
    - perf optimizations (make it flyyyyy)
      - Im creating buffers all over the place, this slows it down (perf is comparable to libp2p-mplex right now), this should be improved by using a mem pool

@gar
 - Done:
   - wrapWithDirectory https://github.com/ipfs/js-ipfs/pull/1290
   - datastore sync https://github.com/ipfs/js-datastore-fs/pull/15
 - Blocked: No
 - Next
   - https://github.com/ipfs/ipfs/blob/master/IMPLEMENTATION_STATUS.md

@jonkrone
	- Done:
    - PeerBox dapp https://github.com/ipfs-shipyard/peer-dapps/issues/1
  - Blocked:
  	- pin reviews
    	- js-ipfs: https://github.com/ipfs/js-ipfs/pull/1045
      - interop: https://github.com/ipfs/interop/pull/19

@mkg20001:
 - Done:
  	- fixed https://github.com/ipfs/js-ipfs/issues/1292 and other weird crashes
    - https://ipfs-cli.mkg20001.io/ - getting js-ipfs cli to run in the browser
    - https://github.com/mkg20001/ipfs-dnslink-update dnslink update script
 - Blocked: No
 - Next:
   - add SPDY and Yamux to libp2p-dissector?
   - deploy libp2p-nodetrust? maybe?

@pgte
 - Done:
 	 - First iteration of libp2p-connection-manager: http://github.com/libp2p/js-libp2p-connection-manager
 - Blocked:
 	 - approve libp2p and js-ipfs connection manangement API: https://github.com/libp2p/js-libp2p/issues/183
   - release first version of libp2p-connection-manager
 - Next:
   - Talk to @jonkrone about PeerBox
   - Define and finish libp2p and js-ipfs connection manangement API
   - Test connection management in the wild
   - Denying connections before they're established

@kumavis
 - Done:
 	- libp2p testing container for real peers in metamask (mvp)
 - Blocked:
	denying connections before they're established (for webrtc)
    - https://github.com/libp2p/js-libp2p/issues/175
    - https://github.com/libp2p/js-libp2p-connection-manager/issues/2
 - Next:
 	- more browser webrtc peering experiments

@zcstarr
 - Done:
 		initial PR for pull-streams in ipld
 - Blocked:
 		- PR for ipld hashAlg options in put
    	- https://github.com/ipld/js-ipld-dag-cbor/pull/62
    - PR for ipld get pull-streams in ipld    
    	- https://github.com/ipld/js-ipld/pull/122
 - Next:
 		- add more tests for ipld get pull-streams and  
    - pick up new items on waffle board


### Questions

 - (@vmx) Is the roundtable still useful or just a waste of time?
   - It is valuable
   - Extending it to 45 mins
   - Everyone should try to keep things short

### Other notes
