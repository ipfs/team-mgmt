# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 June 10, 2019

- **Lead:** @jacobheun
- **Notetaker:** @jacobheun
- **Attendees:**
  - @achingbrain
  - @daviddias
  - @dirkmc
- **Recording:** https://youtu.be/Q9qP6kpeRkc

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

@jimpick (not attending)
 - Done:
   - Provided some more feedback on IPFS Camp Course C - "Apps" (w/Lidel and Hugo)
   - Testlab
     - got Cole's demo working with virtualbox/vagrant
	 - https://github.com/jimpick/testlab/tree/fork-jim/pubsub_scenario
	 - did Consul tutorial
 - Blocked:
   - Need to figure out ipfs-cluster issues for peer-base-pinner
 - Next:
   - Vacation in Barcelona this week ... I will check email/Slack, but skipping meetings
   - I will drop in on the Thursday IPFS Camp sync up
   - See IPFS Team Week people next week! 

@jacobheun
 - Done:
   - IPFS Camp Course B prep
   - js-libp2p now exports [`createLibp2p`](https://github.com/libp2p/js-libp2p#create-a-node---libp2pcreatelibp2poptions-callback). If you don't care about `PeerInfo` creation, this lets you create a libp2p instance without worrying about it. All other config options are the same.
   - Fixed an issue with [libp2p-switch](https://github.com/libp2p/js-libp2p-switch/pull/340). If a blacklisted peer dials you, Switch will now clear the blacklist, it wasn't previously doing this.
     - In the future we will likely move to blacklist management of multiaddrs instead of whole peers to improve the effectiveness of blacklisting.
 - Blocked:
 - Next:
   - IPFS Camp Course B prep
   - Connection prioritization [js-libp2p#369](https://github.com/libp2p/js-libp2p/issues/369)
     - Provide the ability to configure "important" peers so that we try to maintain connections with them, and so that connection manager doesn't kill those connections.

@vasco-santos (not attending)
- Done:
  - synced with @mburns and @jacobheun regarding the deploy of `go-ipfs` nodes with delegated routing enabled for enabling connectivity magic in the camp
     - @mburns will work on this
  - fixed ipfs interop tests for IPNS over Pubsub (cids dependency outdated on ctl)
    - [ipfs/js-ipfsd-ctl#334](https://github.com/ipfs/js-ipfsd-ctl/pull/334)
    - [ipfs/interop#73](https://github.com/ipfs/interop/pull/73)
  - started working on DHT reprovider for `js-ipfs`
    - [ipfs/js-ipfs#2160](https://github.com/ipfs/js-ipfs/issues/2160)
    - started experimenting on [ipfs/js-ipfs#feat/reprovider](https://github.com/ipfs/js-ipfs/tree/feat/reprovider)
  - proposal for libp2p interop based on @olizilla's work for ipfs
    - [libp2p/interop#19](https://github.com/libp2p/interop/issues/19)
  - reviews for the async migration of the dht by @kumavis
    - [libp2p/js-libp2p-kad-dht#132](https://github.com/libp2p/js-libp2p-kad-dht/pull/132)
    - [libp2p/js-libp2p-kad-dht#133](https://github.com/libp2p/js-libp2p-kad-dht/pull/133)
    - [libp2p/js-libp2p-kad-dht#134](https://github.com/libp2p/js-libp2p-kad-dht/pull/134)
- Blocked: N/A
- Next:
  - Preparation and presentation with @raulk in Aveiro University for master thesis
  - Prepare libp2p presentation in OPO.js (next week)
  - Get DHT reprovider experiments ready for a PR
  - Add interop tests for hyprid pubsub network
    - [libp2p/interop#17](https://github.com/libp2p/interop/pull/17)

@dirkmc
 - Done:
   - [config profiles](https://github.com/ipfs/js-ipfs/issues/2148)
 - Blocked:
 - Next:
   - [pin locking](https://github.com/ipfs/js-ipfs/issues/2103)

@achingbrain
 - Done
   - IPFS repo converted to async/await
   - Rabin implementation in ipfs-unixfs-importer replaced with WASM (thanks Hugo)
   - Updated npm-on-ipfs, fixed all outstanding bugs
   - Worked on package managers roadmap
 - Blocked
   - n/a
 - Next
   - IPFS camp prep
   - ipfs-npm-registry-mirror updated
   - Add mDNS discovery for npm-on-ipfs

### Other notes

- @jacobheun out next week June 17 - 21st
- @vasco-santos ooo June 14 (Go to Aveiro University for presentation)
