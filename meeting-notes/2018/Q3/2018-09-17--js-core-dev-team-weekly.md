# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 September 17, 2018

- **Lead:** David Dias
- **Notetaker:** @jacobheun
- **Attendees:**
  - @diasdavid
  - @vasco-santos
  - @jacobheun
  - @hugomrdias
  - @vmx
  - @alanshaw
- **Recording:** https://youtu.be/9GjKChfbzNQ

## Agenda

- Ask everyone to put their name into the list of attendees
- Quick Announcements
	- (@diasdavid, 30 sec) Planning Q4 OKRs https://github.com/ipfs/pm/issues/698
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
* Looking to have our OKRs completed by September 24th.Other teams would appreciate having our OKRs to reference.

### Week Update

@name
 - Done: 	 
 - Blocked:
 - Next:

@diasdavid
 - Done:
 	 - Came back from timeoff
   - OKR Planning Kick off
 - Blocked:
 - Next:
 	 - Busy in Go Core Dev Land for the Week 

@achingbrain (not attending)
 - Done:
   - Most of the API is now covered & wired up: https://github.com/ipfs-shipyard/ipfs-http
   - Small doc update https://github.com/ipfs/interface-ipfs-core/pull/363
 - Blocked:
   - npm-on-ipfs storage solution: https://github.com/ipfs/infrastructure/issues/432
   - libp2p-keychain default password or not: https://github.com/libp2p/js-libp2p-keychain/pull/25
   - Aegir npm OTP: https://github.com/ipfs/aegir/pull/260
   - Fix for invalid generated swagger.json: https://github.com/glennjones/hapi-swagger/pull/533
 - Next:
   - Continue IPFS HTTP API
   - PR to js-ipfs with new HTTP API
   - Wire up npm-on-ipfs to monitoring
   - Q4 OKR planning
   
@jacobheun
  - Done:
    - Added multiformat support for tcp over dns. https://github.com/multiformats/js-mafmt/pull/31
    	- Release [libp2p-tcp@0.13.0](https://github.com/libp2p/js-libp2p-tcp/tree/v0.13.0) for dns support
    - Updates for datastores to resolve inconsistent errors codes https://github.com/ipfs/js-ipfs/issues/1557
      - https://github.com/ipfs/interface-datastore/pull/22
      - https://github.com/ipfs/js-datastore-fs/pull/18
      - https://github.com/ipfs/js-datastore-level/pull/10
      - https://github.com/ipfs/js-datastore-s3/pull/8
      - https://github.com/ipfs/js-datastore-core/pull/14
      - [ipfs mfs#10](https://github.com/ipfs/js-ipfs-mfs/pull/10)
    - Switch Connection FSM is mostly done, need to work on the listener aspect of it, and improve how state is being driven (this will better support future daemon work)
    - PR to catch rtc connection issues in chrome, https://github.com/libp2p/js-libp2p-webrtc-star/pull/157. This is just catching the thrown error that is a result of the chrome rtc connection issue and isn't connection management improvement.
  - Blocked:
    - The datastore updates are blocked on the release of the interface, https://github.com/ipfs/interface-datastore/pull/22
      - Datastore-core will also need to be released after the interface to unblock level. https://github.com/ipfs/js-datastore-core/pull/14
  - Next:
    - Update delegated routing modules to include sane defaults for timeouts that will be getting added to the go-ipfs work.
    - Improve Switch Connection FSM state progression and make the listener connections also FSMs.
    - Q3 Retrospective and Q4 OKR planning for libp2p in preparation for next weeks OKR meetings.

@mkg20001 (Not attending until 1st or 8th October)
 - Done:
   - 
 - WIP/Next:
   - Continuing to make aegir smaller by trying to bundle it (would reduce size by 50%, 306mb => 160mb): Issue https://github.com/ipfs/aegir/issues/215
     - Currently writing https://github.com/mkg20001/pkg-bundle which is a pkg fork that creates a bundle instead of an executable (easier to do than to use webpack)
     - Will require only a tiny bit of changes to aegir (still WIP, might be a bit more): https://github.com/ipfs/aegir/pull/262
     - Just wanted to mention: My projects folder is 80% aegir+dependencies. This isn't very fun to deal with. Making it smaller (both file count and size) would be really great and not just for me but for others, too
 - Blocked/Need merge:
   - https://github.com/libp2p/js-libp2p-crypto/pull/128

@vasco-santos
- Done:
  - Released [datastore-pubsub](https://github.com/ipfs/js-datastore-pubsub) for `IPNS over Pubsub`
  - IPNS over Pubsub [js-ipfs#1559](https://github.com/ipfs/js-ipfs/pull/1559)
  - CTL accepting IPNS over Pubsub experimental flag for testing [js-ipfsd-ctl#293](https://github.com/ipfs/js-ipfsd-ctl/pull/293)
  - Revert libp2p records (IPNS) being signed for interop [js-ipfs#1570](https://github.com/ipfs/js-ipfs/pull/1570)
  - Started interop tests for `IPNS over Pubsub`
  - Started interop tests for `DHT`
- Blocked:
  - `IPNS Interop`
    - [js-ipfs#1570](https://github.com/ipfs/js-ipfs/pull/1570) - Needs review and release
    - [interop#26](https://github.com/ipfs/interop/pull/26) - Needs [js-ipfs#1570](https://github.com/ipfs/js-ipfs/pull/1570) and code review
  - `IPNS over Pubsub`
    - [interface-ipfs-core#361](https://github.com/ipfs/interface-ipfs-core/pull/361)
    - [js-ipfs-api#846](https://github.com/ipfs/js-ipfs-api/pull/846)
    - [js-ipfs#1559](https://github.com/ipfs/js-ipfs/pull/1559)
    - All need review/release and are dependencies of each other from top to bottom
- Next:
  - Fix all the feedback bavailable for my blocked PRs
  - `DHT Interop` tests
    - WIP [interop#36](https://github.com/ipfs/interop/pull/36)
    - Call with Cole (@bigs)
  - `IPNS over Pubsub Interop` tests

@alanshaw
- Done:
    - Released `js-ipfs` 0.32! https://ipfs.io/blog/43-js-ipfs-0-32/
    - Created `jsipfs cid` tool [#1560](https://github.com/ipfs/js-ipfs/pull/1560)
    - Worked on `--cid-base` option [#1552](https://github.com/ipfs/js-ipfs/pull/1552)
- Blocked:
    - Jenkins npm errors frequent [#51](https://github.com/ipfs/testing/issues/51)
    - Jenkins windows workers out of space [#135](https://github.com/ipfs/testing/issues/135)
- Next:
    - Finish `--cid-base` option
    - Create interop tests for block store get by CIDv0/1
    - Implement block store get by CIDv0/1
    
@hugomrdias
- Done
  - ipfs add experimental [https://github.com/ipfs/js-ipfs/pull/1540](https://github.com/ipfs/js-ipfs/pull/1540)
  - ipfs-api add experimental [https://github.com/ipfs/js-ipfs-api/pull/851](https://github.com/ipfs/js-ipfs-api/pull/851)
- Blocked
  - jsdoc rule fix [#265](https://github.com/ipfs/aegir/pull/265)
  - improve ctl docs [#pull/294](https://github.com/ipfs/js-ipfsd-ctl/pull/294)
  - Doesn't work inside a service-worker on Firefox [848#issuecomment-419887279](https://github.com/ipfs/js-ipfs-api/issues/848#issuecomment-419887279)
  - stream-http improvements [stream-http/tree/fix/body-handling](https://github.com/hugomrdias/stream-http/tree/fix/body-handling)
- Next
  - release ipfsd-ctl with pregen peer-id , docs, updated deps etc (try to include fix for node ≥ 10.9)
  - help out with examples to embed in js.ipfs.io
  - OKR stuff [https://github.com/ipfs/js-ipfs/pull/1566#event-1847679907](https://github.com/ipfs/js-ipfs/pull/1566#event-1847679907)


@travisperson
 - Done:
   - js ipfs / browser plugins merged (https://github.com/ipfs/iptb/pull/69)
 - Blocked:
   - iptb interopt tests
 - Next:
   - iptb plugin documentation

@vmx
 - Done:
   - GraphSync (I call it Transsub) first public prototype: https://github.com/vmx/js-transsub
 - Blocked: Nope
 - Next:
   - GraphSync
   - Recording the talk I gave at the FOSS4G conference
   


### Questions

### Other notes

- Alex back on Tuesday
- Alan away 1st-5th October

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
