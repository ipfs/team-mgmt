# ⒿⓈ⚡️  js-ipfs Core Dev Team Weekly 2018-01-29

- **Lead:** David Dias (@diasdavid)
- **Notetaker:** @vmx
- **Attendees:**
  - @dryajov
  - @lidel
  - @powersource
  - @Jaredhardy
  - @richard schneider
  - @jonnycrunch
  - @rob
  - @vmx
  - @victor
  - @hacdias
- **Recording:** https://www.youtube.com/watch?v=F0wEg6ZQB34

## Agenda

- Re-enter Weekly Sync Mode (@diasdavid)
  - What we expect to achieve with these calls
  - How these calls are going to function
- Pair Programming Sessions (@diasdavid)
- Round of updates (@all)
  - Done: What have you accomplished since the last Weekly?
  - Blocked: Were there any blockers? If so, which ones? Is it still blocked? Why?
  - Next: What is the next important thing you should focus on?
- Plan this week (@all)
  - Select issues to work on
- Review remaining issues (by priority) if there is time left (@all)

## Notes

- Explaining Weekly stand-up, roundtable
  - Next: What have you accomplished since the last Weekly?
  - Blocked: Were there any blockers? If so, which ones? Is it still blocked? Why?
  - Done: What is the next important thing you should focus on?

- Waffleboard gets explained: https://waffle.io/ipfs/js-ipfs
  - Issues have a:
    - Priority: P0 (high) - P4 (low)
    - Dificulty
    - "Help Wanted" tag means "an outside contributer can tackle this one, all information should be available"
  - Columns:
    - Backlog: won't be worked on atm. Issues tagged as "Question" are kept there
    - Ready: No one is working on it atm
    - In Progress: Someone is actually working on an issue
    - Done: Once it's closed. It stays there for a week, afterwards it disappears from Waffle

 - Pair programming sessions:
   - Worked well in the past
   - Do a Zoom call with screen sharing (30-60 mins)
   - There's lots to learn
   - Don't need any preparation, just tackle some interesting issue
     calendly.com/pl-daviddias

@diasddias
  - Done: a lot, unblocked people
  - Blocked: no
  - Next: refactor libp2p

@dryajov
  - Done: some fixes to ipfsd-ctl
  - Blocked: no
  - Next: wrapping up circuit relay related work

@richard schneider
  - Done: keychain stuff
  - Blocked: due to CI
  - Next: using keychain to encrypt and sign messages

@jonnycrunch
  - Next: IPID (was written in Go, now JS)

@rob
  - just in call to get some idea what's going on

@vmx
  - Done: finished js-ipld-bitcoin & js-ipld-zcash
  - Blocked: by @diasdavid on a PR review on js-ipld-zcash
  - Next: IPLD CLI support for traversing Bitcoing and Zcash

@victor
  - Done: get projects CI'ed on Jenkins
  - Blocked: on Windows fixes
  - Next: integration testing across platforms

@hacdias
 - Done: stats spec, MFS file spec
 - Blocked: no
 - Next: implement stats spec

@nunofmn
 - Next: use sees filenames when downloading files via js-ipfs-companion

