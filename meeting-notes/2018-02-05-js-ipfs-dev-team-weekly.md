# ⒿⓈ⚡️ js-ipfs Core Dev Team Weekly Feb 5, 2018

- **Lead:** David Dias (@diasdavid)
- **Notetaker:** @dryajov
- **Attendees:**
  - @dryajov
  - @mkg20001
  - @vmx
  - @Admin-DataRoads (Jared)
  - @diasdavid
  - @richardschneider
  

## Agenda

- Ask everyone to put their name into the list of attendees
- Round of updates
  - What have you accomplished since the last Weekly?
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
  - What is the next important thing you should focus on?
- Plan this week
  - Select issues to work on
- Review remaining issues if there is time left
  - https://waffle.io/ipfs/js-ipfs
  - https://waffle.io/libp2p/js-libp2p

## Notes
 
Recording:  https://youtu.be/17WUrzWHcDQ
 
@dryajov

- Done: 
  - Circuit Relay: Implemented all browser tests
  - Circuit Relay is 100% functional
- Blocked: 
  - Needs a new release from go-ipfs. Currently blocked on issues that already have been solved
- Next:
  - Merging the Circuit Relay interop
  - Investigate outstanding issues
  - Identify which docs need to be written for users to use Circuit Relay
  - Beta test docs with Jared, Jonny and Jkrone

@richardschneider

- Done: 
  - key management and key chain released (js-libp2p-keychain)
- Blocked: 
  - PR reviews blocked on daviddias
    - https://github.com/libp2p/js-libp2p-mdns/pull/71
    - https://github.com/libp2p/js-libp2p-mdns/pull/69
    - https://github.com/ipfs/js-ipfsd-ctl/pull/195
    - https://github.com/ipfs/interface-ipfs-core/pull/188
  
  - need to figure out the proper name for "shutdown"
- Next: 
  - working on mdns
  - one package (dns-packet) has been release that is a dependency of (multicast-dns)
  - working on js-ipfs shutdown
  
@vmx

- Done: 
  - working on ipfs cli
- Blocker:
- Next:
  - working on ipfs cli
    - encounter some inconsistencies in the spec
  - should have a proper dag command soon
      
@mkg20001

- Done:
  - rewrote websocket-star to use circuit and protobuf instead of socketio
- Blocker:
- Next:
  - getting libp2p node trust working
    
@davidias

- Done: 
  	- reviewed many PRs
	  - setting up wafleboards for js-ipfs and js-libp2p
- Blockers: fosdem and brocken laptop
- Next:
  - reviewing PRs
  - js-libp2p.next() whats next for libp2p?
  - setting up wafleboards for js-ipfs and js-libp2p
    
@jkrone

- Done:
  - worked on PRs that got merged
  - `jsipfs version --all` & `jsipfs repo version`
    - https://github.com/ipfs/js-ipfs/pull/1199
    - https://github.com/ipfs/js-ipfs-repo/pull/158
- Blockers:
  - issues running `js-ipfs` tests on windows https://github.com/ipfs/js-ipfs/issues/1204
    - richard to help taking a look at the above issue
- Next:

## Notes:

- @jkrone asked - Whats the best place to have a more general discussion about architecture and other askpects of IPFS
	- https://discuss.ipfs.io/
  - https://github.com/ipfs/community

- @daviddias - showed the waffleboard and suggested picking P0 and P1 issues that might be quickly addressed, or something that is exciting to work on out of that list


<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
