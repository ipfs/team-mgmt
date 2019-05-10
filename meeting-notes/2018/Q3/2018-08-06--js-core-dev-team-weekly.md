# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 August 06, 2018

- **Lead:** David Dias (@diasdavid)
- **Notetaker:** Vasco Santos (@vasco-santos)
- **Attendees:**
  - @alanshaw
  - @travisperson
  - @vasco-santos
  - @diasdavid
  - @mikeal
- **Recording:** https://youtu.be/23Q4Ax0K04Q

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

@diasdavid
 - Done:
 	 - Intense week at DWeb Summit
   - Release js.ipfs.io \o/
 - Blocked:
 - Next:
   - Half time this week
	 - Run Mid Quarter Retrospective
   - Run js.ipfs.io Retrospective
   
@alanshaw
 - Done:
   - Attended DWeb Summit and it was AWESOME \o/
   - Released `js-ipfs` v0.31.2 with gateway SVG Content-Type fix ([#1482](https://github.com/ipfs/js-ipfs/pull/1482))
   - Released `js-ipfs-api` v22.3.0 with `files.read*Stream` methods ([#823](https://github.com/ipfs/js-ipfs-api/pull/823))
 - Blocked:
   - `null`
 - Next:
   - Merge `ipfs.resolve` PRs ([#826](https://github.com/ipfs/js-ipfs-api/pull/826))
   - Help pre-generated Peer IDs PRs land ([#1485](https://github.com/ipfs/js-ipfs/pull/1485) and [#284](https://github.com/ipfs/js-ipfsd-ctl/pull/284))
   - Make progress on base32 CIDv1 ([#1441](https://github.com/ipfs/js-ipfs/pull/1441))

@vmx (not attending)
 - Done:
   - DWeb Summit
 - Blocked: Nope
 - Next:
   - GraphSync
   - FOSS4G presentation preparations
   
@vasco-santos
  - Done:
    - DWeb / PL Lab Day
    - Helped with final bugs for releasing js.ipfs.io
    - Some minor fixes on `service-worker-gateway`
    - IPNS
      - Achieved `js-ipfs` publish and `go-ipfs` resolve
  - Blocked:
    - N/A
  - Next:
    - IPNS
      - Update current PRs for full IPNS interop
      - Republish IPNS entries
    - Get repo Interop PRs merged (will sync with Jacob later this week)

@travisperson
 - Done:
   - Preliminary test of jsipfs in iptb
     - Success!
 - Blocked:
   - 
 - Next:
   - Actually merge v2 iptb
     - Working closely with why to review early this week
   
### Questions

### Other notes

- David
  - lot's of talks and demos on dweb
  - js.ipfs.io live
  - sync team during this week (current state and priorities)
    - Plan on how many days you will need per task during this week (since there will be people on holiday during the quarter)
    
- Alan
  - released new js-ipfs release during dweb
  - New PRs on `js-ipfs-api` and `js-ipfsd-ctl` made by @mkg20001
  - Checking issues and PRs during this week

- Vasco
  - IPNS working locally is finally interop with go
  - `David` suggests to go with IPNS pub-sub afterwards

- Travis
  - IPTB for jsipfs will be ready really soon

- Mikeal Rogers
  - proto.school released
  - work plan for proto.school
  - `David` suggests having a IPLD presentation recorded by Mikeal Rogers
