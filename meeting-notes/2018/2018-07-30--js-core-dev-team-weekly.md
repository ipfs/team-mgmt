# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 July 30, 2018

- **Lead:** David Dias (@diasdavid)
- **Notetaker:** @jacobheun
- **Attendees:**
  - _@alanshaw_
  - _@mkg20001_
  - _@victorbjelkholm_
  - _@achingbrain_
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

### Week Update

@name
 - Done:
 - Blocked:
 - Next:
 
@alanshaw
- Done:
  - Fixed issue with `error` event emitted twice during boot ([#1472](https://github.com/ipfs/js-ipfs/pull/1472))
  - Added content preloading to `js-ipfs` ([#1464](https://github.com/ipfs/js-ipfs/pull/1464) and [#1475](https://github.com/ipfs/js-ipfs/pull/1475))
  - Released `js-ipfs` 0.31 ([#1458](https://github.com/ipfs/js-ipfs/issues/1458))
  - Fixed issue with `XMLHttpRequest` unavailable in service worker ([#1478](https://github.com/ipfs/js-ipfs/pull/1478)) (and then released `js-ipfs` 0.31.1)
- Blocked:
  - `null`
- Next:
  - Presenting at DWeb summit
  - Get `ipfs.resolve` PR merged ([#1455](https://github.com/ipfs/js-ipfs/pull/1455))
  - Get IPLD powered `ipfs.dag.get` PR merged ([#755](https://github.com/ipfs/js-ipfs-api/pull/755))
 
@vmx (not attending)
- Done:
  - "Building a DAG" lessons at http://proto.school Please have a look and give feedback at https://github.com/ipfs-shipyard/proto.school (the sooner the better, it will be used in the Workshop on Wednesday)
- Blocked: No
- Next:
  - Attending the DWeb Summit
 
@vasco-santos (not attending)
- Done: 
  - Got Interface-ipfs-core PR approved
    - https://github.com/ipfs/interface-ipfs-core/pull/327
  - Repo interoperability
    - Created an Awesome Endeavour: repo interoperability
    - Call with Jacob and David for defining it
    - https://github.com/ipfs/js-ipfs/issues/1467
    - Update PRs on js-ipfs, js-ipfs-repo for the awesome endeavour
        - https://github.com/ipfs/js-ipfs/pull/1461
        - https://github.com/ipfs/js-ipfs-repo/pull/173
    - Created PR for spec
        - https://github.com/ipfs/specs/pull/186
    - Fixed Service worker gateway not working properly on firefox
    - Help finishing js.ipfs.io website with several PRs, code review and testing
- Blocked: 
  - N/A
- Next:
  - Get first iteration of Awesome Endeavour repo interoperability ready
  - DWEB
  - Ipfs -> go IPNS interop (couldn't finish it) 

@travisperson (not attending)
 - Done:
 - Blocked:
 - Next:
   - Merge/open v2 branch iptb
   - Open PR for iptb update in go-ipfs
   - Open issue for jsipfs in iptb
   
@jacobheun
  - Done:
    - Opened a PR for allowing libp2p configuration in ipfs via a factory, it includes an example: [js-ipfs#1470](https://github.com/ipfs/js-ipfs/pull/1470)
    - Test Flakiness fixes for delegated routing modules
    	- [content-routing#3](https://github.com/libp2p/js-libp2p-delegated-content-routing/pull/3)
      - [peer-routing#3](https://github.com/libp2p/js-libp2p-delegated-peer-routing/pull/3)
    - Working on js-ipfs configurable delegated routing api endpoints to match the in progress go implementation [go-ipfs#4595](https://github.com/ipfs/go-ipfs/pull/4595)
    - Test stability improvements for js-ipfs-repo [#174](https://github.com/ipfs/js-ipfs-repo/pull/174)
  - Blocked:
  	- Delegated routing needs https://github.com/ipfs/go-ipfs/pull/4595 to be completed before it will be functional. This isn't a hard blocker yet and Lars is slated to work on this after dweb things are taken care of.
  - Next:
    - Finish libp2p configuration for delegated routing support
    - Finish js-ipfs interop with go-ipfs for delegated routing http-api (dependent on go-ipfs#4595)

@diasdavid
  - Done:
 	  - go-ipfs 0.4.17 release dance (update all the deps)
    - now exchange files interop tests work again
    - Lot's of prep for DWeb Summit
    	- DApps Workshop
      - Merkle Forest Workshop
      - js.ipfs.io
      - IPFS talk
      - libp2p talk
      - review others talks
  - Blocked:
  - Next:
  	- Launch js.ipfs.io
    - DWeb Summit

@mkg20001:
 - Done:
   - test-peer-ids.tk https://github.com/mkg20001/test-peer-ids.tk
   - make key generation fast again https://github.com/libp2p/js-libp2p-crypto/pull/128
   - a few fixes in nodetrust
 - Blocked:
   - https://github.com/libp2p/js-libp2p/issues/130 blocks adding rendezvous as libp2p module to ipfs, that blocks peer-star using rendezvous
   - https://github.com/libp2p/js-libp2p-tcp/issues/95 not really blocked but makes moving servers for nodetrust painful
   - https://github.com/libp2p/libp2p/issues/22 needed for peertunnel v2
 - Next: _As always it remains a mystery_

@achingbrain:
 - Done:
   - Added proper --raw-leaves support to js-ipfs-mfs
   - npm-on-ipfs
 - Blocked:
   - n/a
 - Next:
   - Deploy npm-on-ipfs somewhere we can use it

### Questions

* Shall we run our tests in service worker also (@alanshaw)?
  - Yes, we should run this in ci , we will need to make updates to aegir.
* (@diasdavid -> @jacobheun) Look into circuit relay issues, there seems to be some issues talking with other nodes and this may create issues doing the delegated routing.

### Other notes
- Several team members will be fairly unavailable this week for the dweb summit.
- @jacobheun out Aug 1 - Aug 8

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
