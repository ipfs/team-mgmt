# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 April 29, 2019

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - _attendee names..._
  - @jimpick
  - @hugomrdias
  - @vmx
  - @jchris
  - @kumavis
  - @terichadbourne
- **Recording:** https://youtu.be/bCHigS1c9Y8

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
    - Finalized Q2 OKRs
        - Transferred to [spreadsheet](https://docs.google.com/spreadsheets/d/1YSeyWqXh3ImanRrTkYQHHkCofiORn68bYqM_KTLBlsA/edit#gid=274358435)
        - Recorded [video](https://drive.google.com/file/d/1sM_dFRnRcL9XFQTQFAbI4efVTSHxEpNj/view?usp=sharing)
    - Worked on [`it-mplex`](https://github.com/alanshaw/it-mplex) (a JS implementation of mplex using async iterators)
        - Around 20% faster than `js-libp2p-mplex` (10% faster than `pull-mplex`)
        - Around 65% smaller (in lines of code - 250 vs 700)
        - Click to enlarge: <a href="https://usercontent.irccloud-cdn.com/file/3BicxZiN/Screenshot%202019-04-27%20at%2014.40.28.png" target="_blank"><img src="https://usercontent.irccloud-cdn.com/file/3BicxZiN/Screenshot%202019-04-27%20at%2014.40.28.png" style="max-width:100%" /></a>
    - Created `it-pushable` https://github.com/alanshaw/it-pushable
- Blocked:
    - `n/a`
- Next:
    - Testing for `it-mplex`
    - Send PR for `libp2p/interface-stream-muxer`
    - Enabling the DHT in JS IPFS

@dirkmc (not attending - in Perth, Australia timezone)
 - Done:
   - refs endpoint
     - interface-js-ipfs-core#460
     - js-ipfs-http-client#978
     - js-ipfs#2004
   - Abort after connect
     - interface-transport#49
 - Blocked:
 - Next:
   - async/await of interface-transport and js-libp2p-tcp
     - js-libp2p-tcp#102
   - repo/gc endpoint

@lidel (unable to join the call)
 - Done: 
   - js-ipfs/pull/1989: [Gateway Improvements: Streaming, Conditional and Range Requests](https://github.com/ipfs/js-ipfs/pull/1989)
 - Blocked:
 - Next:
   - Expose `/ipns/` at HTTP Gateway, identify what is missing

@jacobheun
 - Done:
   - Switch will not add observed addresses until we start doing proper validation [libp2p-switch#337](https://github.com/libp2p/js-libp2p-switch/pull/337)
   - Fixed an issue retrieving peerinfo in the libp2p daemon [libp2p-daemon#17](https://github.com/libp2p/js-libp2p-daemon/pull/17)
   - DHT Performance work [libp2p-kad-dht#107](https://github.com/libp2p/js-libp2p-kad-dht/pull/107)
     - Added timeouts to lower the impact of slow/offline peers
     - Following S/Kademlia and starting with k (20) peers instead of alpha (3)
     - Created a basic simulation to be able to compare results against
     - Reduction in query times from upwards of 10minutes, to under 1 minute
     - Network latency improvements via NAT traversal and more controlled dial timeouts should help with further query improvements
 - Blocked:
 - Next:
   - Fix ipfs/interop pubsub tests [ipfs/interop#66](https://github.com/ipfs/interop/pull/66)
   - Fix ipfs/interop pubsub issue when using pull-mplex [js-ipfs#1884](https://github.com/ipfs/js-ipfs/pull/1884)
   - DHT performance testing against js-ipfs for cpu balance

@vmx
 - Done:
  - IPLD Format API cleanup (part of the async/await endevour) ready for review (now even better):
    - https://github.com/ipld/interface-ipld-format/pull/51
    - https://github.com/ipld/js-ipld-bitcoin/pull/48
    - https://github.com/ipld/js-ipld-dag-cbor/pull/107
    - https://github.com/ipld/js-ipld-dag-pb/pull/127
    - https://github.com/ipld/js-ipld-ethereum/pull/51
    - https://github.com/ipld/js-ipld-git/pull/51
    - https://github.com/ipld/js-ipld-raw/pull/32
    - https://github.com/ipld/js-ipld-zcash/pull/39
    - https://github.com/ipld/js-ipld/pull/201
 - Blocked: Nope
 - Next:
   - Allow caret in < 1.0.0 versions in package.json: https://github.com/ipfs/aegir/pull/356
   - (Cross team update): Trying to get [STAC](https://stacspec.org/) work on IPLD

@hugomrdias
 - Done:
   - feat: add support to resolve dns to ipns [#458](https://github.com/ipfs/interface-js-ipfs-core/pull/458)
   - fix: adds tests for `ipfs name` [#974](https://github.com/ipfs/js-ipfs-http-client/pull/974)
   - add support for File DOM API to js-ipfs, http-client and interface-core
   - fix: dont drain source while drain in progress [#1](https://github.com/hugomrdias/pull-to-stream/pull/1)
 - Blocked:
 - Next:
   - finish add support for File DOM API PRs
   - IPNS
   - backlog of issues and PR 

@jimpick
 - Done:
   - Joined js-ipfs! (Dynamic Data and Capabilities Working Group is now an Interest Group)
   - Keeping DDC OKRs for Q2
   - Getting up to speed with Testlab ... learning Terraform, Packer, Nomad
   - IPFS Camp planning for "Apps" course
   - Fun project: https://protocol-words.jimpick.com/
 - Blocked:
 - Next:
   - stable production peer-base-pinner deployment
   - More Testlab
   - More IPFS Camp
   - Set up weekly "PeerPad + friends" call?
   - Brainstorming for "integration-mini-projects" https://github.com/ipfs/integration-mini-projects

@achingbrain
- Done:
  - Opened a PR that requires `await` in functions marked `async`. Feels? https://github.com/ipfs/aegir/pull/355
  - Convert unixfs-exporter to async/await [ipfs/js-ipfs-unixfs-exporter#21](https://github.com/ipfs/js-ipfs-unixfs-exporter/pull/21)
  - Convert unixfs-importer to async/await [ipfs/js-ipfs-unixfs-importer#24](https://github.com/ipfs/js-ipfs-unixfs-importer/pull/24)
- Blocked:
  - N/a
- Next:
  - Finish unixfs-importer async/await conversion
  - Release interface-datastore with async/await (should unblock js-ipfs-repo async/await branch)
  - Release unixfs-importer, unixfs-exporter & ipfs-mfs async/await

### Cross team updates

@olizilla
- IPFS contributor office hours (starts next monday, 16:00 UTC for 1hr before the IPFS weekly call) https://github.com/ipfs/community/issues/408
- 

@jchris
- curious about https://github.com/ipfs/js-ipfs/issues/1145 does it make sense to refine https://github.com/ipfs/js-ipfs/pull/1965 ?

@terichadbourne (ProtoSchool)
- Went through the plans for the MFS tutorial with @olizilla and reworked the lesson order and contents a bit. 
  - New lesson order plan in issue: https://github.com/ProtoSchool/protoschool.github.io/issues/91#issuecomment-487084184
  - WIP PR: https://github.com/ProtoSchool/protoschool.github.io/pull/200
- If you want to use ProtoSchool as your delivery method for part of an IPFS Camp course, please go ahead and open an issue to start discussing plans. https://github.com/ProtoSchool/protoschool.github.io/issues/new?assignees=&labels=new-tutorial&template=tutorial-proposal.md&title=New+Tutorial%3A+%5BProposed+title%5D
- There's a ProtoSchool weekly call on Thursdays: https://github.com/ProtoSchool/organizing/issues/47
