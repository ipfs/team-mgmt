# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 October 15, 2018

- **Lead:** Alan Shaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @vmx
  - @hugomrdias
  - @diasdavid
- **Recording:** https://youtu.be/4ezsd8srOd0

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
    - Attended Lab Week 2018 last week, it was the awesome \o/
        - https://alanshaw.github.io/js-ipfs-talk-lab-week-2018/dist/
        - https://alanshaw.github.io/ipfsx-talk-lab-week-2018/dist/
    - Released js-ipfs-api@25.0.0 (headline: fix for large file uploads)
    - Created [release issue for js-ipfs 0.33](https://github.com/ipfs/js-ipfs/issues/1635)
- Blocked:
    - null
- Next:
    - Complete `--cid-base` work [#1552](https://github.com/ipfs/js-ipfs/pull/1552)

@jacobheun
 - Done:
   - Attended Lab Week, libp2p made good progress on our roadmap, we'll continue to work on that and get it published.
   - Created an example for private networks on IPFS [libp2p-pnet#4](https://github.com/libp2p/js-libp2p-pnet/pull/4)
   - Added support for specifying key types in [peer-id#85](https://github.com/libp2p/js-peer-id/pull/85)
     - Need to do further testing with libp2p and js-ipfs. Ran into an issue with crypto failing over websockets when using ed25519 keys.
 - Blocked: 
   - none
 - Next:
   - Finish testing for specifying key types and get that released
   - Finalize state machine work for `libp2p` so we can get `0.24` released.
   - Start work on `js-libp2p-daemon` for interop and testbed needs
   - Work on designs/proposols for the libp2p testbed effort

@vmx
 - Done:
   - Lab Week 2018:
     - GraphSync has a design now, spec needs to be written
   - Recorded my FOSS4G talk
 - Blocked: Nope
 - Next:
   - GraphSync spec
   - Upload FOSS4G talk
   - Update most prominent projects that use dag-cbor to accommedate the [breaking change from js-ipld release v0.18.0](https://github.com/ipld/js-ipld/pull/162).

@hugomrdias
 - Done:
   - lab week 2018
 - Blocked:
 - Next:
   - finish chunk adds review
   - start making bundles smaller
   - continue big data tests
   - make experimental build default
      
@name
 - Done:
 - Blocked:
 - Next:

### Questions

### Other notes

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
