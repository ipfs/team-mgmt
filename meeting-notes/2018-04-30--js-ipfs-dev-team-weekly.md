# ⒿⓈ⚡️  js-ipfs Core Dev Team Weekly April 30, 2018

- **Lead:** David Dias (@diasdavid)
- **Notetaker:** Jacob Heun @jacobheun
- **Attendees:**
  - @jacobheun
  - @fsdiogo
  - @gar
  - @achingbrain
  - @travisperson
  - @zcstarr
  - @victorbjelkholm
  - @mkg20001
  - @hugomrdias
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

@fsdiogo hoping to create a PR this week for Exchange Files. Upload files to a work space and would be able see files uploaded there. Focusing on UI.

@achingbrain focusing on getting the MFS updates working first and then will look at getting the interop w/ go behavior working correctly.

@diasdavid - there are a lot of things going on around the jsipfs 0.29 release that need to get resolved.

@zcstarr - Needs a review from @vmx but can continue work, not blocked.

@hugomrdias - Hard to debug browser tests (js-ipfs). Lack of source maps leads to no stack trace, making it difficult to determine where issues are coming from.

@mkg20001 - @daviddias to look at the 2 PRs that are blocking.

### Week Update

@fsdiogo
 - Done:
   - Revamping the Exchange Files example
 - Blocked:
    - N/A
 - Next:
   - Revamping the Exchange Files example
   
@jacobheun
  - Done:
    - Custom repo example merged into js-ipfs
    - Opened a PR for libp2p-switch refactor, still need to run cross repo tests
  - Blocked: 
    - N/A
  - Next
    - Fix tests around Switch refactor
    	(js-libp2p break with new Switch)
    - Private Network and state machine updates for Switch

@achingbrain
 - Done:
    - MFS write command for replacing bytes
 - Blocked:
    - Stream slicing is blocked on js-ipfs-api
 - Next:
    - MFS write command for expanding files

@diasdavid
 - Done:
   - js-contributing-guidelines
   - prep js release and all of its dependent issues
   	- Victor question: please record/note the steps you do for releasing
 - Blocked:
   - blocked on releasing js-ipfs due to many things happening (CI)
 - Next: 
 
@gar
 - Done:
   - switch back to js-ipfs from another task (dapp related)
   - js-ipfs PR 1329 (wrapWithDirectory)
 - Blocked:
   - testing is very confusing
   	- From Victor, any way I can help with this? Write me at victor@protocol.ai
 - Next:
   - tests on bitswap.unwant in spec
   
@zcstarr
 - Done:
   - Pull streams for ipld get PR update
 - Blocked:
 - Next:
  - Pull streams for ipld get more PRs for affected packages
 	  - https://github.com/ipld/js-ipld/pull/122
 
@hugomrdias
 - Done:
   - https://github.com/ipfs/js-ipfsd-ctl/pull/233
   - js-ipfs-repo init error
   - cli error handling WIP PR
   - browser builds
 - Blocked:
   - cli error handling tests
 - Next: 
   - browser builds and browser tests

@mkg20001
 - Done:
   - js-rendezvous protocol https://github.com/libp2p/js-libp2p-rendezvous
   - WIP fix utp https://github.com/libp2p/js-libp2p-utp/pull/77
 - Blocked:
   - review:
     - https://github.com/libp2p/website/pull/69
     - https://github.com/libp2p/js-libp2p-identify/pull/44
 - Next:
   - finish js-rendezvous

### Questions

- (VictorBjelkholm) will activate code coverage via codecov rather than coveralls, any objections?
  - Badges will need to be updated
  - Still want to keep %coverage change in PRs
  - No issues switching to codecov
- (mkg) libp2p-nodetrust: will this ever get deployed?
  - need more time to determine yes or no
  - has been getting pushed due to other priorities
  - missing reviews from core libp2p contributors
- (mkg) utp: extend utp protocol to add half open connection closing?
  - could add a connection upgrade to handle this

### Other notes

- Crashing daemon! https://github.com/ipfs/js-ipfs/issues/1325
	- Let's fix this so we can deploy js-ipfs on js.ipfs.io!
