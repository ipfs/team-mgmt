# ⒿⓈ⚡️  js-ipfs Core Dev Team Weekly April 02, 2018

- **Lead:** David Dias (@diasdavid)
- **Notetaker:** zane
- **Attendees:**
  - _attendee names..._
  - @mkg20001
  - @jacobheun
  - @fsdiogo
  - @jonkrone
  - @vmx
  - @vasco-santos
  - @gar
  - @dryajov
  - @gpestana
  - @zcstarr
- **Recording:** https://youtu.be/bACmpRWnIMQ

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
	- OKR planning for next quarter, needs feedback for goal setting/planning

	- DAG api work continues, and working on finishing up the ipld-format
  
  - refactoring js-ipfs api to support more than CBOR and protobufs format, and use js-ipld. blocked on a circular dependency issue surrounding js-ipld and js-ipfs-api.

	- libp2p crypto. In libp2p there are a few blockers, surrounding crashes and issues around libp2p. 

Jacob - There was an issue with peerIDs dropping, and a patch has been submitted that will improve the stability of the ipfs daemon. Other known daemon crash issue: https://github.com/ipfs/js-ipfs/issues/1156 

Gar - Created a PR for wrap directory, and going to follow up with david about going over additional issues, and meanwhile will troll around for more issues to tackle

Jon - Mostly afk last week, started addressing the reviews with the pin PR. Following up with folk about a few pin PR questions. Blocked a little bit on needing reviews. Should follow up with @diasdavid on some of the PR just ping him about the outstanding reviews. Interop tests need to be reviewed and tested a little more before the code lands

Diogo - Made alot PRs surrounding fixing uglify, and is currently blocked on needing a reviews, for the code to land. 

Dimitry - Working on implementation of libp2p mplex with pull streams, and created a separate module called pulled-plex that will allow the code to be surfaced outside of libp2p. Right now just adding additional tests, targetting completion sometime midweek. 

Zane - Working adding pull streams to get ipld-resolver, and blocked a little on the ipld-format changes heading down the pipeline. Will follow up with @vmx to figure out the details. 

Goncalo - Just peeping the project, and looking to jump in and help out. 

### Week Update

@diasdavid
 - Done:
   - OKR prep and update (let's get that frozen this week)
   - Create the Module Lead Maintainers Proposal and Notes (https://github.com/ipfs/pm/issues/600)
 - Blocked:
   - I need everyone to review the OKR proposal on js-ipfs
 - Next:
   - Finish OKR

@vmx
 - Done:
   - DAG API for js-ipfs-api: https://github.com/ipfs/js-ipfs-api/pull/534
 - Blocked: No
 - Next:
   - Merge DAG API for js-ipfs-api
   - Finish DAG API for js-ipfs CLI
   - Finish updating IPLD Format Spec: https://github.com/ipld/interface-ipld-format/pull/22
 
@mkg20001
 - Done:
   - c-libp2p-crypto: https://github.com/mkg20001/c-libp2p-crypto
   - More work on libp2p-dissector
 - Blocked:
   - nodetrust:
     - https://github.com/libp2p/js-libp2p/issues/170 (crashes)
     - https://github.com/libp2p/js-libp2p/issues/173 https://github.com/libp2p/js-libp2p/issues/172 (support changing transports/listeners at runtime)
     - https://github.com/libp2p/js-libp2p/issues/159 (libp2p.next)
 - Next:
   - Nodetrust. Get this deployed and used in production?
   - Finish some muxers for the dissector
   
@jacobheun
  - Done:
  	- fixed missing peer id issue, https://github.com/ipfs/js-ipfs/issues/1221
    - Started s3 datastore addition https://github.com/ipfs/js-ipfs-repo/issues/135
  - Blocked: No
  - Next:
    - creating the s3 datastore, should be done this week
    - will start the private network, https://github.com/libp2p/js-libp2p/issues/163, after s3 datastore

@gar
  - Done:
    - implemented wrapWithDirectory in files.add
  - Blocked:
  - Next:
  	- TBD (OKR tasks to be assigned)

@jonkrone
  - Done:
    - AFK all last week
  - Blocked:
  - Next:
    - js-ipfs pin reviews: https://github.com/ipfs/js-ipfs/pull/1045
    - interop test pin review: https://github.com/ipfs/interop/pull/15

@fsdiogo
- Done
 - **js-class-is**
   - [https://github.com/moxystudio/js-class-is/pull/3](https://github.com/moxystudio/js-class-is/pull/3) [merged]
   - [https://github.com/moxystudio/js-class-is/pull/5](https://github.com/moxystudio/js-class-is/pull/5) [merged]
 - **js-ipld-dag-pb**
   - [https://github.com/ipld/js-ipld-dag-pb/pull/60](https://github.com/ipld/js-ipld-dag-pb/pull/60) [merged]
   - [https://github.com/ipld/js-ipld-dag-pb/pull/61](https://github.com/ipld/js-ipld-dag-pb/pull/61) [merged]
   - [https://github.com/ipld/js-ipld-dag-pb/pull/62](https://github.com/ipld/js-ipld-dag-pb/pull/62) [merged]
 - **js-ipfs-block**
   - [https://github.com/ipfs/js-ipfs-block/pull/39](https://github.com/ipfs/js-ipfs-block/pull/39)
 - **js-multiaddr**
   - [https://github.com/multiformats/js-multiaddr/pull/61](https://github.com/multiformats/js-multiaddr/pull/61)
- Blocked: N/A
- Next
 - Continue to make PRs in repos that are using `constructor.name` typechecks
 - Test uglified js-ipfs build


@dryajov
 - Done:
   - pull-mplex - refactoring of js-libp2p-mplex with pull-streams
     - interface tests are passing (works on my box)*
     - https://github.com/dryajov/pull-plex (should be moved under libp2p)
     - https://github.com/libp2p/js-libp2p-mplex/pull/76
 - Blocked:
   - N/A
 - Next:
   - finish pull-mplex and js-libp2p-mplex (cleanup, coverage and perf)

@zcstarr 
- Done:
	- pull-streams get ipld - implement pull streams for  ipld-resolver
  	- https://github.com/ipld/js-ipld/issues/101
-	Blocked: 
	- ipld serialization of cid changes pending ipld-format
  changes
  	- https://github.com/ipld/js-ipld-dag-cbor/pull/62
  - js-multiaddr changes 
  	- https://github.com/multiformats/js-multiaddr/pull/60
- Next:
	- finish pull-streams ipld refactor 
  

### Questions

**Volker**: does anyone feel responsible for the green quality of the repos/CI staying green? 
  
**David**: Right now we have multiple CI , travis, jenkins, circleci. We should be targetting going for improvement in quality the whole time, though there are a few outstanding flaky test issues, that would block progress, so the PR's are approved without being green.

**Dmitriy**: I'm volunteering to help keep CI green across the projects

**David**: I'll write an issue to follow up with the CI greeness quality
  
### Other notes

- @diasdavid will be unavailable next week. Who wants to lead the call?

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
