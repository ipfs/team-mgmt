⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 July 16, 2018

- **Lead:** David Dias (@diasdavid)
- **Notetaker:** @vmx
- **Attendees:**
   - @diasdavid
   - @vmx
   - @alanshaw
   - @travisperson
    - @achingbrain@hugodias
   - @jacobheun
   - @mkg20001
   - @vasco-santos
   - @victorbjelkholm
   - @achingbrain

- **Recording:** https://youtu.be/ZnfqbIVoq-s

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

**INFO:** As discussed on the last js-core dev call, we are now dogfooding PeerPad. If you find bugs or have suggestions for improvements, please open a issue at -- https://github.com/ipfs-shipyard/peer-pad -- with them.

### Week Update

@diasdavid
 - Done:
   - Awesome IPFS & libp2p Dev Meetings
   - Released js-ipfs 0.30 LIVE with @alanshaw!
   - Kick off reboot of ipscend (needs better new name)
   - Review OKRs (for the multiple teams)
   - Landed js-libp2p OKRs
   - Update npm-go-ipfs-dep and npm-go-ipfs modules to use 0.4.16
   - Update interop tests to use latest go-ipfs
   - Started crafting two workshops for DWeb Summit (will be published publicly after)
   - Review js.ipfs.io 
 - Blocked:
   - interop tests are showing some issues with latest go-ipfs https://github.com/ipfs/interop/pull/28
 - Next:
   - Land js-ipfs OKRs
   - Continue on js.ipfs.io
   - Continue on Workshops for DWeb Summit
   - Visiting London (Wed to Fri)
   - Continue on hacking ipscend and/or try to get a IPFS workshopper off the ground with Oli and Alan

@alanshaw
- Done:
  - IPFS dev meetings in Berlin
  - Released js-ipfs@0.30 live, in front of a studio audience
  - Fix for `preStart` being called twice ([#1437](https://github.com/ipfs/js-ipfs/pull/1437))
- Blocked:
  - n/a
- Next:
  - Add `--cid-base` option to allow create base32 hashes ([#1440](https://github.com/ipfs/js-ipfs/issues/1440))
  - Set base32 CID as default ([#1440](https://github.com/ipfs/js-ipfs/issues/1440))
  - Continue to stableise js-ipfs and js-ipfs-api tests
  - Identify bottlenecks in test execution time
  - Create plan for working towards a 10 day no crash js-ipfs bootstrap node

@vmx
 - Done:
   - IPFS Dev Meetings
     - Great GraphSync Deep Dive (thanks @b5 and @mib-kd743naq: https://github.com/ipld/specs/pull/66
     - Great IPLD/IPLD + Search discussions: https://github.com/ipld/ipld/issues/43
 - Blocked: Nope
 - Next:
   - Get prepared for DWeb Summit IPLD things
     - Polish js-ipld Formats
   - Get prepared for FOSS4G conference

@hugomrdias
 - Done:
 	- dev meetings
    - js.ipfs.io
 - Blocked: No
 - Next:
 	- okrs
    - js.ipfs.io
    - repo maintenance 
 
@jacobheun
  - Done:
    - dev meetings
    - Updates to pull-reader which resulted in a needed update to kad-dht
  - Blocked: 
    - not blocking me directly but we need to work out mdns spec: [#28](https://github.com/libp2p/libp2p/issues/28)
  - Next: 
    - Start looking into peer and content routing for Q3 OKRs
    - Catch up on PRs from last week
    - Knowledge dump from Berlin meetings to those issues
    - Continue conversations around libp2p daemon
 
@vasco-santos
 - Done:
   - https://github.com/ipfs/js-ipfs/pull/1400
     - Added remaining optional params
     - Added logging and error handling
     - Added LRU cache
     - Complete refactor
   - Froze libp2p OKRs
   - Interface ipfs-core PR for IPNS tests
     - https://github.com/ipfs/interface-ipfs-core/pull/327
   - IPFS + Libp2p dev meetings
 - Blocked:
   - Interop tests
     - https://github.com/ipfs/interop/pull/26
       - Go-ipfs repo -> js-ipfs repo broken
         - Test is being skipped
       - Js-ipfs repo -> go-ipfs repo compatible
         - Trying to figure out why
- Next:
  - IPNS + interoperability
  - Label issues from the repos which I am responsible for
  - Continue writing IPNS spec

@mkg20001
 - Done:
   - Made peertunnel https://github.com/mkg20001/peertunnel
   - Reported a few potential vulns in js-libp2p
 - Blocked: No
 - Next: TODO

@achingbrain
 - Done:
   - Shipped MFS!
 - Blocked:
   - N/a
 - Next:
   - Adding --raw-leaves support to unixfs-engine
   - Publish npm registry on IPFS

### Questions

None

### Other notes

 - ipfs-repo migration tool for Browsers is needed
   - https://github.com/ipfs/interop/pull/28#discussion_r202613340 
   - https://github.com/ipfs/js-ipfs/issues/1115
   - https://github.com/ipfs/fs-repo-migrations 

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
