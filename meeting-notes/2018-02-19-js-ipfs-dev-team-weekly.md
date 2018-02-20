# ⒿⓈ⚡️  js-ipfs Core Dev Team Weekly 2018-02-19

- **Lead:** David Dias (@diasdavid)
- **Notetaker:** Volker Mische (@vmx)
- **Attendees:**
  - @mkg20001
  - @vmx
  - @diasdavid
  - @victorbjelkholm
  - @jkrone
  - @Richard Schneider
- **Recording:** https://youtu.be/MJyI0FI1cu4

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

 - From next week on everyone will put their done/blocked/next items before the meeting into the pad
 - There should be a new issue for every weekly meeting (this will be done once the meeting bot is in better shape)

### Roundtable

@dryajov (had to skip this meeting because of conflict in schedule)
 - Done:
   - ipfsd-ctl keysize from env support
   - ipfsd-ctl replace config instead of setting each config individualy
 - Blocked: N/A
 - Next:
   - complete circuit interop ci failures 
   - add tutorials for circuit in ipfs and libp2p
   
@diasdavid
- Done:
    - CR, M and R all over
    - Help PRs get to the finish stated
    - Solved the Fixtures problem in Aegir
    - Solved the Buffer shim problem in js-ipfs-api
    - Continue on the libp2p.next endeavour
        - Got PubSub as part of libp2p and bubbled that to js-ipfs
        - Make mplex an official thing (before it was a fork of a fork)
    - Other bug fixes
- Blocked:
    - Nothing
- Next:
    - Release js-ipfs 0.28
    - Continue the libp2p.next endeavour
    
@victorbjelkholm
- Done:
	- Monitoring for star services
  - CI/Jenkins work on js-ipfs
  - Tests refactoring on ipfs/interop (to be applied everywhere)
- Blocked: None
- Next:
	- Continue CI work

@mkg20001
 - Done:
   - libp2p-nodetrust rewrite https://github.com/mkg20001/libp2p-nodetrust/pull/5
 - Blocked:
   - conn.getObservedAddrs() returns no addresses
   - libp2p.next() rewrite
 - Next:
   - Finish libp2p-nodetrust

@Richard Schneider
 - Done:
   - Gracefull stopping on Windows (problems with IPFS-Daemon)
 - Blocked:
   - Waiting for new js-ipfs release
 - Next:
   - PR open on making IPFS-Daemon faster
 
@jonkrone
 - Done:
   - @diasdavid merged ipfs version --all
   - PR for `ls -r`
 - Blocked:
   - just figuring out how much time I can spend on ipfs
 - Next:
   - merge `ls -r`
   - speculative add, `files add --only-hash`
   - figure out what's next
   
 @vmx
  - Done:
    - Bitcoin and Zcash is finally merged in js-ipld
    - First PR on Feross' Buffer got merged: https://github.com/feross/buffer/pull/178
  - Blocked: None
  - Next:
    - IPLD Selectors
    - DAG commands in js-http-api
    - More Buffer tests improvements
