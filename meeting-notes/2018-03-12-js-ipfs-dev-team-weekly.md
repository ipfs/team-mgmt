# ⒿⓈ⚡️  js-ipfs Core Dev Team Weekly 2018-03-12

- **Lead:** David Dias (@diasdavid)
- **Notetaker:** Volker Mische (@vmx)
- **Attendees:**
  - @vmx
  - @diasdavid
  - @mkg20001
  - @dryajov
  - @jonkrone
  - @zcstarr
- **Recording:** https://youtu.be/bAAzUct17ic

## Agenda

- Ask everyone to put their name into the list of attendees
- Round of updates
  - What have you accomplished since the last Weekly?
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
  - What is the next important thing you should focus on?
- Plan this week
  - Select issues to work on
- Review remaining issues if there is time left


## Notes

- 🌟 Let's solve the uglify issue ASAP
- In ws-star the memmory problem is caused by socket.io
- We want to try the Flow Typing
  - @vmx will take the lead
  - Create issue about which repos to convert
  - Timebox the effort

@vmx
 - Done:
   - Created https://github.com/ipfs/browser-process-platform/
   - Getting js-ipfs-api tests green
 - Blocked: N/A
 - Next:
   - Getting js-ipfs-api tests green
   
@diasdavid
 - Done:
   - Hotfix for regression on ipfs.files.add (add with objects containing path + content)
   - Grooming of the waffles
   - Lot's of PR review, Merge and Releases
 - Blocked:
   - A considerable amount of time was spent on Administrative tasks (will payback soon :))
 - Next:
   - Continue libp2p.next()

@mkg20001
 - Done:
   - Created Libp2p Dissector for Wireshark https://github.com/mkg20001/libp2p-dissector
   - Try to fix ws-star
 - Blocked:
   - School
   - nodetrust:
    - https://github.com/libp2p/js-libp2p-websockets/pull/66
    - https://github.com/libp2p/js-libp2p/issues/173
    - https://github.com/libp2p/js-libp2p/issues/172
    - libp2p rewrite
 - Next:
   - Resolve ws-star problems
   - Finish libp2p-dissector
   - libp2p-Nodetrust?

@dryajov
 - Done:
   - worked on circuit tutorial
     - https://github.com/ipfs/interop/pull/6
   - troubleshooted an issues with interop tests - `browser-browser-go`
     - fixed the issue in go circuit
     - issue documenting the issues and fixes - https://github.com/ipfs/interop/issues/16
     - interop tests issue - https://github.com/ipfs/js-ipfs/pull/1063
   - a few issues in ipfsd-ctl and troubleshooting some issues aroung uglifyjs in js-ipfs
 - Blocked:
   - N/A
 - Next:
   - get circuit related work merged - hopefuly this week
   - continue working ipfsd-ctl issues
     - graceful stop - https://github.com/ipfs/js-ipfsd-ctl/pull/205
   - finish mplex crash issue
     - https://github.com/libp2p/js-libp2p-switch/pull/245
     - https://github.com/libp2p/js-libp2p-mplex/pull/75
 
@jonkrone
  - Done
    - continued work on pin-related PRs
      - cleaned pin go/js interop tests
      - fixed additional issues relating to js-ipfsd-ctl dameon initialization
        - https://github.com/ipfs/js-ipfsd-ctl/pull/212
    - reviewed @dryajov's circuit relay tutorial
  - Blocked
    - js-ipfs-api CI was blocking https://github.com/ipfs/js-ipfs-api/pull/700 which is a root dep of Pin PRs
  - Next
 	  - will only be available for half a week this week
    - address PR comments
    - review code, provide feedback where I can
    - get a new microphone

@zcstarr
	- Done: N/A
  - Blocked: N/A
  - Next
    - Picking up more open help wanted issues
 
