# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 February 04, 2019

- **Lead:** @alanshaw
- **Notetaker:** @zcstarr
- **Attendees:**
  - @vasco-santos
  - @vmx
  - @zcstarr
  - @jacobheun
- **Recording:** https://youtu.be/ViTs2S3zeeg

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

@vmx
- Done:
  - IPLD Selectors/Graphsync stuff (sorry, there's no link yet)
  - FOSDEM!
- Blocked:
  - Missing review from @alanshaw, though not sure if needed, @achingbrain did a review (thanks!) on the new js-ipld API: https://github.com/ipld/js-ipld/pull/190
- Next:
  - Implementing [new IPLD Formats API](https://github.com/ipld/interface-ipld-format/pull/50), once the js-ipld API is merged and released
  - Working on IPLD Selectors 

@alanshaw
- Done:
    - Upgrade to Hapi 18 [#1844](https://github.com/ipfs/js-ipfs/pull/1844)
    - Fix for swallowed errors [#1860](https://github.com/ipfs/js-ipfs/pull/1860)
        - `echo "hello" | jsipfs add -q | jsipfs cid base32` now works \o/
    - Created [`iim` - IPFS Install Manager](https://github.com/alanshaw/iim)
    - De-scoping the 2019 roadmap [#22](https://github.com/ipfs/roadmap/pull/22)
- Blocked:
    - Review for Hapi 18 PR [#1844](https://github.com/ipfs/js-ipfs/pull/1844)
    - Review for swallowed errors PR [#1860](https://github.com/ipfs/js-ipfs/pull/1860)
- Next:
    - Continue CID v1 base32 default work ([step 2 here](https://github.com/ipfs/js-ipfs/issues/1440#issuecomment-407343797))
    - Review IPLD API change PR [#190](https://github.com/ipld/js-ipld/pull/190)
    - Re-review DHT PR [#856](https://github.com/ipfs/js-ipfs/pull/856)
    - Review benchmarks, add more!
    
@jacobheun
- Done:
  - Fixed issue with libp2p start and stop not calling back on error [libp2p#316](https://github.com/libp2p/js-libp2p/pull/316)
  - [Rendezvous roadmap](https://github.com/libp2p/libp2p/issues/66) created
  - Released initial version of the [js-libp2p-daemon@0.1.0](https://github.com/libp2p/js-libp2p-daemon/pull/1#issue-237374739)
- Blocked:
- Next:
  - Fix libp2p-mplex performance issues [mplex#89](https://github.com/libp2p/js-libp2p-mplex/issues/89)
  - Review state of js-libp2p-rendezvous vs current spec and work on needed changes

@vasco-santos
- Done:
  - Released initial implementation of [libp2p/js-libp2p-daemon-client](https://github.com/libp2p/js-libp2p-daemon-client)
    - contains basic commands and dht commands
  - Reviewed initial implementation of [libp2p/js-libp2p-daemon](https://github.com/libp2p/js-libp2p-daemon)
  - Renamed flag `local` to `offline` [ipfs/js-ipfs#1850](https://github.com/ipfs/js-ipfs/pull/1850)
  - DHT Endeavour:
    - Enabled by default in `js-libp2p` for node [libp2p/js-libp2p#313](https://github.com/libp2p/js-libp2p/pull/313)
    - Fixed david's review [ipfs/js-ipfs#/856](https://github.com/ipfs/js-ipfs/pull/856)
  - FOSDEM
- Blocked: 
- Next:
  - DHT
  - Finish Connection manager limiting number of connection PRs:
    - [libp2p/js-libp2p-kad-dht#66](https://github.com/libp2p/js-libp2p-kad-dht/pull/66)
    - [libp2p/js-libp2p#303](https://github.com/libp2p/js-libp2p/pull/303)
    - [ipfs/js-ipfs#1800](https://github.com/ipfs/js-ipfs/pull/1800)
  - libp2p interop tests setup for using the daemons
    - [libp2p/npm-go-libp2p-dep#1](https://github.com/libp2p/npm-go-libp2p-dep/pull/1)
    - [libp2p/interop](https://github.com/libp2p/interop)

@zcstarr
- Done:
	- ipfs-repo async/await just converting tests
- Blocked:
- Next:
  - ipfs-repo PR this week

@achingbrain
- Done:
  - npm-ipfs-registry-fetch
  - FOSDEM
- Blocked:
- Next:
  - npm-ipfs-registry-fetch
  - Investigate using urlstore for 

@litzenberger
- Done:
  [Adding links to the Readme matrix](https://github.com/ipfs/benchmarks/pull/223)
  - Updated test description to match matrix
  - Updated test to use the correct libp2p options
  - Changed the test name to match libp2p options
  - Refactor to allow libp2p options to be passed per test.
  
- Blocked:
	- [Issue with JS -> go test](https://github.com/ipfs/benchmarks/issues/214)
- Next:
	- Continue with updating tests names,and descriptions
	- adding more tests
	- Update test readme
  - Add comments in each test to be used with swagger
  

@name
- Done:
- Blocked:
- Next:

### Other notes
 - FOSDEM excellent all around
 - @alanshow: ipfs install manager check it out! Also, if anyone wants to review the Hapi PR would be much appreciated.
 - @jacobhuen: decomissioning the star servers soon. libp2p daemon released!
 - @achingbrain: we have an apt-get transport within ipfs somewhere
 
<!-- After each call, the notetaker submits a PR to ipfs/team-mgmt to store the notes on the meeting-notes folder -->
