# ⒿⓈ⚡️  js-ipfs Core Dev Team Weekly Feb 26

- **Lead:** David Dias (@diasdavid)
- **Notetaker:** Jonathan Krone (@jkrone)
- **Attendees:**
	- @jkrone
	- @dryajov
	- @hacdias
	- _attendee names..._
- **Recording:** https://youtu.be/gotCojdrl_4

## Agenda

- Ask everyone to put their name into the list of attendees
- Round of updates
  - What have you accomplished since the last Weekly?
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
  - What is the next important thing you should focus on?
- Plan this week
  - Select issues to work on
- Other topics:
  - @vmx: Tests of js-ipfs-api fail already for some time. What is the current process of merging things? Is it enough if the Node.js test run passes on Jenkins?
- Review remaining issues if there is time left


## Notes

New Attendees!
  - Zane
    - Going to look through waffle for some nice starter issues
  - @achingbrain
    - Has made contributions to a number of IPFS modules.

@diasDavid reiterated the use of [waffle.io](https://waffle.io/ipfs/js-ipfs) to find issues that are interesting to you and a priority to the project

### Roundtable

@name
 - Done:
 - Blocked:
 - Next:

@richardschneider
 - Done: nothing
 - Blocked:
   - ipfsd-ctl [gracefull stop](https://github.com/ipfs/js-ipfsd-ctl/pull/205). Waiting for ipfs release with `shutdown` route.
   - ipfsd-ctl [performance](https://github.com/ipfs/js-ipfsd-ctl/pull/190). Waiting for ipfs release with `shutdown` route.
   - ipfs [jenkins](https://github.com/ipfs/js-ipfs/pull/1103). Waiting for ipfs release with `shutdown` route.
   - libp2p-mdns [polling](https://github.com/libp2p/js-libp2p-mdns/pull/71). Waiting for `multicast-dns` and `sleeptime` PRs to be merged and released.
 - Next:
   - Working on [IPFS C# engine](https://github.com/richardschneider/net-ipfs-engine)

@vmx
 - Done:
   - Some progess on DAG API for js-ipfs-api: https://github.com/ipfs/js-ipfs-api/pull/534
 - Blocked:
   - Skip some tests on go-ipfs: https://github.com/ipfs/interface-ipfs-core/pull/223
 - Next:
   - DAG API for js-ipfs-api and js-ipld
   - Porting more Node.js buffer tests to Feross' Buffer: https://github.com/feross/buffer/issues/177

   - * js-ipld release and bubble up of updates to unblock js-ipfs release

@mkg20001:
 - Done:
   - *empty*
 - Blocked:
   - https://github.com/libp2p/js-libp2p-secio/pull/98
   - libp2p.next() rewrite
 - Next:
   - Finish libp2p-nodetrust after libp2p gets rewritten
   - \* Pick more issues from the waffle board (P0 and P1) to tackle this week

@diasdavid
 - Done:
   - Worked on the js-ipfs release (prep issue, write highlights, follow up on necessary threads)
   - Review PR #1103 and discuss in depth with Victor the path to go
   - Review/Merge/Respond PRs and Issues all over
 - Blocked:
    - need a new release of js-ipld
 - Next:
    - js-ipfs release
    - unblock
    	- https://github.com/libp2p/js-libp2p-secio/pull/98

@hacdias
 - Done:
   - Started implementing Bandwidth Stats (https://github.com/ipfs/js-ipfs/pull/1230)
 - Blocked:
   - Waiting for https://github.com/libp2p/js-libp2p-switch/pull/243
 - Next:
   - Finish bandwidth stats and focus on IPFS Desktop
   - ??? Not planned.
   - Sync up with @pgte on needs.

 @jkrone
 	- Done:
 		- jsipfs add --only-hash code, waiting on PR reviews
   - Blocked:
     - js-ipfs PR for --only-hash: https://github.com/ipfs/js-ipfs/pull/1233
   	- js-ipfs-api PR for --only-hash: https://github.com/ipfs/js-ipfs-api/pull/700)
  	- Next:
   	- finish up @adamStone's work on pin api? https://github.com/ipfs/js-ipfs/pull/1045
       - * push additional tests to go/js-ipfs interop to ensure implementations match

@dryajov
 - Done:
 	- https://github.com/ipfs/js-ipfsd-ctl/pull/203
 	- https://github.com/ipfs/js-ipfs/pull/1232
 - Blocked:
  - https://github.com/ipfs/js-ipfsd-ctl/pull/205
    - this issue is holding up a lot of issues around testing on windows
 - Next:
  - circuit relay tutorial and interop
  	- https://github.com/ipfs/js-ipfs/pull/1063
  - https://github.com/ipfs/interop/pull/14
  - https://github.com/ipfs/js-ipfs-api/pull/698

@achingbrain
 - Done:
   - https://github.com/ipfs/js-ipfs/pull/1223
 - Blocked:
   - https://github.com/ipfs/js-ipfs-unixfs-engine/pull/202
 - Next:
   - https://github.com/ipfs/js-ipfs/pull/1231
