# ⒿⓈ⚡️ js-ipfs Core Dev Team Weekly May 21, 2018

- **Lead:** Alan Shaw @alanshaw
- **Notetaker:** Jacob Heun @jacobheun
- **Attendees:**
  - @mkg20001
  - @zcstarr
  - @jacobheun
  - @achingbrain
  - @travisperson
  - @gar
- **Recording:** https://youtu.be/CNAPR9HMjR4

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

@alanshaw
- Done:
  - Spent most of my time on fixing up the tests.
    - Finding hard to find bugs causing "flakey" tests:
      - `swarm.peers` never calls back - https://github.com/ipfs/js-ipfs-api/pull/770
      - Waiting for peers to be connected, if failure, unleash chaos every few milliseconds - https://github.com/ipfs/interface-ipfs-core/pull/274
    - Fixing things that cause test failure noise:
      - Failures stopping nodes because they failed to start - https://github.com/ipfs/js-ipfs-api/pull/771
  - Fixed up async `pubsub.unsubscribe` - https://github.com/ipfs/js-ipfs-api/pull/772
  - Reviewed `api-path` PR which documents optional parameter `api-path` https://github.com/ipfs/js-ipfs-api/pull/767
  - Reviewed fix for URL escaped paths in `addFromURL` - https://github.com/ipfs/js-ipfs-api/pull/764
- Blocked:
	- Update of ipfs-api in ipfsd-ctl - https://github.com/ipfs/js-ipfsd-ctl/pull/256
- Next:
  - FINALLY release 0.29
  - Hopefully release Node.js 10 fix in 0.29.1
  - More reviews and releases
  
@jacobheun
- Done:
  - Added node 10 WIP PR for visbility https://github.com/ipfs/js-ipfs/pull/1358
  	- There are several issues with node 10. I will udpate the PR as I encounter/resolve them
- Blocked:
- Next:
  - Hopefully resolve node 10 issues this week
  - Continue Private network OKR after node 10 is fixed

@vmx
 - Done:
   - Digging into Bitswap
 - Blocked: No
 - Next:
   - Create GraphSync prototype

@zcstarr
- Done: 
- Blocked:
- Next:
 - IPLD pull streams js-ipfs and js-unixfs update PR soon
   - https://github.com/ipld/js-ipld/pull/122
   - https://github.com/ipld/js-ipld/issues/101

@dryajov
 - Done:
   - several things in ipfsd-ctl
   - libp2p-nat - working on implementation
   - pull-mplex/libp2p-mplex varios perf/profiling tests
     - plese review PR https://github.com/libp2p/pull-mplex/pull/4
 - Blocked:
   - N/A
 - Next:
   - continue libp2p-nat

@vasco-santos
  - Done:
    - Service worker gateway OKR
      - Decoupled service worker gateway repo into several verticals
      - Display files of several types (file, directory listing and website view)
      - https://github.com/ipfs-shipyard/service-worker-gateway/pull/9
    - Issue 581 - IPFS behind proxy
      - https://github.com/ipfs/js-ipfs-api/pull/767
  - Blocked:
    - N/A
  - Next:
    - @Lisbon Hack Week
    - Service Worker Gateway OKR
      - Divide into modules several modules refactor and have those modules released
      - Have first version deployed into js.ipfs.io

@fsdiogo
<!-- In a meeting, can't attend the weekly sync -->
- Done:
  - Finding a way to improve how we handle errors in js-ipfs
    - [https://github.com/ipfs/js-ipfs/issues/1325](https://github.com/ipfs/js-ipfs/issues/1325)
  - WIP PR to remove boot from constructor and stop using event emitters
    - [https://github.com/ipfs/js-ipfs/pull/1359](https://github.com/ipfs/js-ipfs/pull/1359)
- Blocked:
  - N/A
- Next:
  - Lisbon Hack Week
  - Add pubsub to the file exchange example

@mkg20001
- Done:
  - some work on libp2p rendezvous https://github.com/libp2p/js-libp2p-rendezvous/pull/1 (WIP)
- Blocked: N/A
- Next: ?

@achingbrain
- Done:
  - MFS cli integration
  - MFS interface tests
  - Go/JS interop
- Blocked:
  - https://github.com/ipfs/aegir/pull/217
  - https://github.com/ipfs/community/pull/313
  - https://github.com/ipfs/js-ipfs/pull/1352
  - https://github.com/ipfs/js-ipfs-unixfs/pull/24
  - https://github.com/ipfs/js-ipfs-unixfs/pull/25
- Next:
  - Update mfs.files docs
  - Lisbon hack week
  - Release MFS
 
@gar
 - Done:
 - Blocked:
  - ipfsd-ctl tests https://github.com/ipfs/js-ipfsd-ctl/pull/248
  - ipfsd-ctl unused code https://github.com/ipfs/js-ipfsd-ctl/pull/247
  - js-ipfs bitswap spec PRs (same as last week)
 - Next:
  - js-ipfs bitswap ledger PRs
  - consolidate other bitswap spec PRs?
  
@name
 - Done:
 - Blocked:
 - Next:
 
### Questions

- (jacobheun) Jenkins started using yarn over npm in Nov 2017. Is there a reason for the switch? (I could not find a clear one). As we are not using package locks, and  several of the js-ipfs depencencies also use it as a dev dep, it's causing a lot of issues locking down versions, which is aggrevated by using different package managers.
	- Using yarn as it has better parallelization for jenkins and was having less issues than npm. The jenkins runners are not isolated.
  - (jacobheun) What are our plans for using package locks again? npm 6.0.1 has been running well for me over the past several weeks.
  	- Not using package locks yet as people are using different package managers (yarn vs npm). Worth an offline conversation to determine if we should be using package locks and whether or not we should be supporting more than 1 (ie: npm and yarn). Most appear to be in favor of only supporting one (npm).

### Other notes

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
