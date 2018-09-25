# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 September 24, 2018

- **Lead:** Jacob Heun
- **Notetaker:** @alanshaw
- **Attendees:**
  - _attendee names..._
  - @alanshaw
  - @achingbrain
  - @jacobheun
  - @hugomrdias
  - @momack2
  - @vasco-santos
  - @vmx
  - @victorbjelkholm
  - @pgte
  - @mikeal
- **Recording:** https://youtu.be/9_p7GKP_e5A

## Agenda

- Ask everyone to put their name into the list of attendees
- Round of updates
  - What have you accomplished since the last Weekly?
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
  - What is the next important thing you should focus on?
- Ask for general questions. Could be things like:
  - I'm stuck with something, I don't know who to ask. Who knows who to ask?
  - Who can help me with xyz?
  - Select issues to work on
- Review remaining issues if there is time left

- **DEMO**
	- Alan Shaw - spawning IPFS daemons concurrently with a port service
  - Victor - Less of a demo: new js pipeline https://github.com/ipfs/jenkins-libs/pull/35

- **OKRs**
  - Check grades for Q3 OKRs: https://docs.google.com/spreadsheets/d/19vjigg4locq4fO6JXyobS2yTx-k-fSzlFM5ngZDPDbQ/edit#gid=274358435
  - Take aways from prQ3 retrospective / what needs to happen next: https://docs.google.com/document/d/15m28CgV8aksgHsS_MlQKJhTP0LtgYobIkOIuSXew4WE/edit#heading=h.7bczaod8nf6g
  - Suggestions for Q4 OKRs (draft due this Wednesday!): https://docs.google.com/spreadsheets/d/139lROP7-Ee4M4S7A_IO4iIgSgugYm7dct620LYnalII/edit#gid=274358435

## Notes

### Week Update

@jacobheun
 - Done:
   - Q3 Retrospective and OKR scoring
   - Draft of [Q4 libp2p OKRs](https://github.com/libp2p/js-libp2p/pull/247) completed. Those should get moved over to the sheet tomorrow.
   - Testing of the datastore standardized error codes for js-ipfs
   - Delegated routing timeout defaults
     - [peer-routing#6](https://github.com/libp2p/js-libp2p-delegated-peer-routing/pull/6)
     - [content-routing#6](https://github.com/libp2p/js-libp2p-delegated-content-routing/pull/6)
   - js-libp2p test stability fix [js-libp2p#252](https://github.com/libp2p/js-libp2p/pull/252)
 - Blocked:
   - n/a- n
 - Next:
   - Get delegated routing PR finalized
   - Finish Q4 OKRs and present on Thursday's libp2p meeting
   - Support getting the remaining datastore fixes merged in (js-ipfs, js-ipfs-mfs, datastore-s3)
   - js-libp2p-switch incoming connection FSM updates

@vmx
 - Done:
   - GraphSync: https://github.com/ipld/specs/pull/66
 - Blocked:
   - Nope
 - Next:
   - GraphSync
   - IPLD projects maintainance
   - Hopefully recording my FOSS4G talk

@vasco-santos
 - Done:
   - Q3 Retrospective and Q4 planning
   - IPFS Awesome DHT Endeavour
     - Rebased [js-ipfs#856](https://github.com/ipfs/js-ipfs/pull/856)
     - Multiple fixes related:
       - [interface-ipfs-core#368](https://github.com/ipfs/interface-ipfs-core/pull/368)
       - [js-libp2p-kad-dht#40](https://github.com/libp2p/js-libp2p-kad-dht/pull/40)
       - [js-libp2p#250](https://github.com/libp2p/js-libp2p/pull/250)
       - [js-libp2p-kad-dht#42](https://github.com/libp2p/js-libp2p-kad-dht/pull/42)
   - Continued working on interop tests for DHT and idenfifying problems
   - PRs for handling new datastore errors
     - [js-ipfs#1558](https://github.com/ipfs/js-ipfs/pull/1558)
     - [js-ipfs-repo#176](https://github.com/ipfs/js-ipfs-repo/pull/176)
 - Blocked:
   - [js-ipfs#1558](https://github.com/ipfs/js-ipfs/pull/1558)
   - IPNS Interop:
     - [js-ipfs#1570](https://github.com/ipfs/js-ipfs/pull/1570) - Needs review and release
     - [interop#26](https://github.com/ipfs/interop/pull/26) - Needs [js-ipfs#1570](https://github.com/ipfs/js-ipfs/pull/1570) and code review
   - IPNS over Pubsub:
     - [interface-ipfs-core#361](https://github.com/ipfs/interface-ipfs-core/pull/361) - Needs review and release
     - [js-ipfs-api#846](https://github.com/ipfs/js-ipfs-api/pull/846) - Needs [interface-ipfs-core#361](https://github.com/ipfs/interface-ipfs-core/pull/361), review and release
     - [js-ipfs#1559](https://github.com/ipfs/js-ipfs/pull/1559) - Needs [interface-ipfs-core#361](https://github.com/ipfs/interface-ipfs-core/pull/361), [js-ipfs-api#846](https://github.com/ipfs/js-ipfs-api/pull/846), review and release
 - Next:
   - Fix feedback available for my blocked PRs
   - Review lidel's work for integrating cid support to `ipfs-http-response`
   - Continue working on DHT Interop, namely interop between [js-libp2p-record](https://github.com/libp2p/js-libp2p-record/) and [go-libp2p-record/](https://github.com/libp2p/go-libp2p-record/)

@alanshaw
 - Done:
   - Almost finished work on --cid-base PR
 - Blocked:
   - n/a
 - Next:
   - Review pubsub IPNS PR
   - Review keychain PR (https://github.com/ipfs/js-ipfs/pull/1548)
   - Review repo config PR (https://github.com/ipfs/js-ipfs/pull/1372)
   - More work on --cid-base PR
   - Finish OKRs
   - Prepare for OKR presentations

@achingbrain
 - Done:
   - Fixed swagger array types [glennjones/hapi-swagger#533](https://github.com/glennjones/hapi-swagger/pull/533)
   - Merged [ipfs/js-ipfs-mfs#10](https://github.com/ipfs/js-ipfs-mfs/pull/10) but can't release until [ipfs/js-ipfs#1558](https://github.com/ipfs/js-ipfs/pull/1558) is in
   - Refactor npm-on-ipfs to transfer via CIDs as well as MFS
   - Q3 OKRs retro
   - Q4 OKRs planning
 - Blocked:
   - Storage solution for npm-on-ipfs [ipfs/infrastructure#432](https://github.com/ipfs/infrastructure/issues/432)
 - Next:
   - Refactor npm-on-ipfs to transfer via CIDs as well as MFS
   - Write `ipnpm install` command [ipfs-shipyard/npm-on-ipfs#50](https://github.com/ipfs-shipyard/npm-on-ipfs/issues/50)


@hugomrdias
- Done
    - Doesn't work inside a service-worker on Firefox [848#issuecomment-419887279](https://github.com/ipfs/js-ipfs-api/issues/848#issuecomment-419887279)
    - chrome crash fix [#93](https://github.com/jhiesey/stream-http/pull/93)
    - OKR retro/planing [#1566#event-1847679907](https://github.com/ipfs/js-ipfs/pull/1566#event-1847679907)
    - browser core and service worker tests on [hugomrdias/js-ipfs-big-data-tests](https://github.com/hugomrdias/js-ipfs-big-data-tests)
- Blocked
    - ipfs-api chunked add [#851](https://github.com/ipfs/js-ipfs-api/pull/851)
    - ipfs chunked add [#1540](https://github.com/ipfs/js-ipfs/pull/1540)
    - jsdoc lint fix[#265](https://github.com/ipfs/aegir/pull/265)
    - ipfsd-ctl docs [#294](https://github.com/ipfs/js-ipfsd-ctl/pull/294)
    - release ipfsd-ctl with pregen peer-id , docs, updated deps etc.
- Next
    - help out with examples to embed in js.ipfs.io
    - ship service worker fix for stream-http
    - ship the browser/sw tests

@diasdavid
- Done
  - Review some IPNS/DHT PRs and give feedback on design
  - OKRs dance all over the place (help teams get their OKRs ready)
  - Presentations
  - Got my time allocated into planning the coming up IPFS Team Days
- Blocked
- Next
  - More OKR Dance
  - Prepare IPFS Team Days


### Questions

- @diasdavid: FOSS4G talk re-recording why? - not all talks recorded - @vmx re-recording

- @diasdavid: can we ensure any prototype of GraphSync works with IPFS so we can grab all usecases and have real tests on the network

- @alanshaw: can we get some more visibility on GraphSync? Live demo or pre-recorded video. Seeing the process that @vmx is going through is interesting and will provide @vmx feedback to improve it and keep motivation levels high!

- @mikeal: would like to see the changes GraphSync has gone through and why. Changes speak to fundamental architectural issues that we'll run into in the future. We need to know the reason why these approcahes were not taken, maybe they won't work or they won't scale, either way it'll help repeating work in the future.

- @hugomrdias: needs advice on what to do with releasing ipfsd-ctl, the pregenerated IDs do not appear to have any performance gain https://github.com/ipfs/js-ipfsd-ctl/issues/295, but the work has been merged already and @hugomrdias wants to release a new version with dependency updates

- @pgte: What's the status of rendezvous protocol RFC? https://github.com/libp2p/specs/pull/56 - Would love to work on that / help out. @victorbjelkholm: There's comments in a PR on that repo to adjust the spec (needs review). There's a go implementation and a testing server you can use. There's also a js implementation built by @mkg20001.


### Other notes

- No time for demos
- Alan on holiday next week

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
