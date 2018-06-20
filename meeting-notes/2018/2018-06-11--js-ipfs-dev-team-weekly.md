# ⒿⓈ⚡️  js-ipfs Core Dev Team Weekly 2018-06-11

- **Lead:** Jacob Heun (@jacobheun)
- **Notetaker:** Diogo Silva (@fsdiogo)
- **Attendees:**
  - @achingbrain
  - @fsdiogo
  - @vasco-santos
  - @hugomrdias
  - @gar
- **Recording:** https://youtu.be/N6-rxdV3K9s

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

@jacobheun
 - Done:
 	- Rolled back https://github.com/libp2p/js-libp2p-webrtc-star to 0.15.1 to resolve an issue with the block-stream update breaking js-ipfs and libp2p tests. Libp2p still needs to be released.
  - Core functionality for private networks is in place, need to work on interface and interop tests for it.
 - Blocked:
 	- Libp2p release is blocking https://github.com/libp2p/js-libp2p/issues/198 and https://github.com/ipfs/js-ipfs/issues/1379
 - Next:
 	- Testing for private networks including interop tests with go.
  
@achingbrain
 - Done:
   - Merged unixfs PRs blocking mfs
   - Reading config from repo/config file instead of flags
   - Rolled back mfs flag from api
   - Refactored mfs to not be behind a flag
   - Added hash tests to interpo suite
   - Added mfs http tests and implementation
 - Next:
   - Fix unixfs-engine tests on Windows
   - Merge mfs
 - Blocked:
   - nothing

@vasco-santos
  - Done:
    - Several PRs merged in js-ipfsd-ctl
      - New version released
    - Started IPNS working locally OKR
      - Initial version of CLI and HTTP interface with the required parameters
      - Started Core implementation (Steven provided an intro to the go implementation, since there are no specs for IPNS)
  - Blocked:
    - N/A
  - Next:
    - Fix CI for a ctl pull request
      - https://github.com/ipfs/js-ipfsd-ctl/pull/261
    - Continue IPFS working locally implementation

@fsdiogo
- Done:
    - AFK @ JSConf Berlin
    - Reviewed and merged PRs from js.ipfs.io
    - https://github.com/libp2p/js-libp2p-webrtc-star/issues/142
    - https://github.com/ipfs/js-ipfs/issues/1356
    - https://github.com/ipfs/js-ipfs/issues/1390
    - https://github.com/ipfs/js-ipfs/pull/1386
    - Working on daemon stability
- Blocked:
    - N/A
- Next:
    - Daemon stability: add tests to reproduce errors

@hugomrdias
 - Done:
    - make js-ipfs support `create-react-app`
    - test bed/repo for big files okr
    - baseline benchmarks 
    - manually create the minimal possible setup to connect to a local peer and get a file
 - Blocked:
    - aegir experimental browser build and karma tests
 - Next:
    - Continue the research on big files okr
    - FileSystem API, idbMutableFile, Permanent storage permissions
    - Streaming user download

@gar
 - Done:
  - ipfsd-ctl bugfix https://github.com/ipfs/js-ipfsd-ctl/pull/247
 - Blocked:
 	- ipfs-bitswap release for ledgerForPeer
 - Next:
  - CLI tests for bitswap PRs (unwant and wantlist peerid)
  - Implement bitswap ledger for peer
  
@mkg20001
 - Done:
   - libp2p-rendezvous rewrite (https://github.com/libp2p/js-libp2p-rendezvous/pull/3) & demo with peer-pad (https://rendezvous.mkg20001.io)
 - Blocked: N/A
 - Next:
   - Finish libp2p-rendezvous rewrite
   - Integrate libp2p-rendezvous into IPFS/libp2p better

### Questions
- N/A

### Other notes
- David (@diasdavid) is off this week, we'll be blocked on `libp2p` releases on npm.

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
