# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 June 25, 2018

- **Lead:** Alan Shaw (@alanshaw)
- **Notetaker:**
- **Attendees:**
  - @jacobheun
  - @hugomrdias
  - @fsdiogo
  - @Mr0grog
  - @achingbrain
  - @vasco-santos
  - @gar
  - @vmx
- **Recording:** _add link to recording once it's online_

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
- End of quarter actions
  - Retrospective doc
  - Scores for Q2 OKRs
  - What are your objectives for next quarter?


## Notes

### Week Update

@alanshaw
  - Done:
    - Investigated and raised an issue on go-ipfs for peer discovery regression on Windows [#5146](https://github.com/ipfs/go-ipfs/issues/5146)
    - Added a WIP PR to expose libp2p connection manager config [#1410](https://github.com/ipfs/js-ipfs/pull/1410)
    - Released new `js-ipfs-api` with fix for block get with empty blocks [#789](https://github.com/ipfs/js-ipfs-api/pull/789)
    - Opened PR to address same block get issues in `js-ipfs` [#1408](https://github.com/ipfs/js-ipfs/pull/1408)
    - Reviewed tweaked and merged PR for enabling pin tests [#1405](https://github.com/ipfs/js-ipfs/pull/1405)
    - ...and more PR reviews and merges
  - Blocked:
    - `null`
  - Next:
    - Finish off remaining tasks for modular interface-ipfs-core tests [#290](https://github.com/ipfs/interface-ipfs-core/pull/290)
    - Finish off remaining tasks for 0.30 release
      - Connection manager merged ([#184](https://github.com/libp2p/js-libp2p/pull/184)) just needs a libp2p version bump
      - By special request review and merge libp2p config PR [#166](https://github.com/libp2p/js-libp2p/pull/166)
    - Review and merge MFS [#1360](https://github.com/ipfs/js-ipfs/pull/1360)

@vmx
 - Done:
   - Get a full file via GraphSync hacks
   - Review of IPLD Format changes implementation from @richardschneider
 - Blocked: No
 - Next:
   - More reviews of IPLD Format changes implementation from @richardschneider
   - Writing down what the essential core of GraphSync is from my perspective
   - Playing around with js-libp2p with GraphSync in mind

@hugomrdias
 - Done:
   - Implemented non-leveldb indexed db datastore
   - secio/crypto testing
 - Blocked:
 - Next:
   - Q2 retro and Q3 planning
   - make web crypto work with local daemon
   - Test/fix add file with more than 256mb with the ipfs api [#788](https://github.com/ipfs/js-ipfs-api/issues/788#issuecomment-398505668)
 
@fsdiogo
- Done:
    - Better WebSocket errors
        - https://github.com/libp2p/js-libp2p-websocket-star/pull/54
    - Issue with a “roadmap” to track and keep progress of issues about errors and daemon crashes
        - https://github.com/ipfs/js-ipfs/issues/1406
- Blocked:
    - N/A
- Next:
    - Create a repo that gathers the error codes in the `js-ipfs` scope
        - https://github.com/ipfs/js-ipfs/issues/1406#issuecomment-399495062
    - Create PRs in repos that are using error codes to import the new repo
    - Analyze the `WebUI` and `IPFS Companion` current state to propose OKRs for the next quarter (In Web Browsers WG)

@vasco-santos
  - Done:
    - PR for `js-ipfs` with initial working implementation of `IPNS working locally`
      - https://github.com/ipfs/js-ipfs/pull/1400
    - Created `js-ipns` module (same as go-ipns), but name is under discussion
      - https://github.com/ipfs/js-ipns/pull/1
    - Merged 2 PRs on `js-ipfsd-ctl`
      - https://github.com/ipfs/js-ipfsd-ctl/pull/270
      - https://github.com/ipfs/js-ipfsd-ctl/pull/268
  - Blocked:
    - Define IPNS modules and naming with go
      - https://github.com/ipfs/js-ipfs/pull/1400
  - Next:
    - Add nanoseconds precision on IPNS records validity for interoperability with go
      - https://github.com/ipfs/js-ipns/pull/1
    - Finish test for IPNS
      - https://github.com/ipfs/js-ipfs/pull/1400
    - Have IPNS modules defined and "js-ipns" module released
    - Create WIP PR for IPNS Specs
    - `libp2p` Q3 OKRs

@jacobheun
  - Done:
    - Added interop tests for private network. Fixed an issue with dialing order for go.
    - Found an issue with bad private network connections (such as dialing to a public network) where the connection would hang until timeout, 60s. This is due to https://github.com/dominictarr/pull-reader/issues/5, I am working on a fix for pull-reader, which will include updates to pull-length-prefixed.
    - Demo'd private network interop at the [IPFS All Hands today](https://youtu.be/fObld4alGag?t=47).
  - Blocked: 
    - N/A
  - Next:
    - Fix issue with pull-reader handling overreading
    - Finish submitting PRs for private networking
    - Work on Q2 retro and Q3 OKRs for libp2p
    - Update examples for libp2p config update and help get that merged and released

@achingbrain
  - Done:
    - Working on npm-on-ipfs
    - Adding interop tests
  - Blocked:
    - https://github.com/ipfs/go-ipfs/pull/5139
    - https://github.com/ipfs/js-ipfs/pull/1372
  - Next:
    - Q3 OKRs
    - Working on npm-on-ipfs
    - Adding interop tests

@Mr0grog
  - Done: n/a
  - Blocked: n/a
  - Next:
    - Code & Visual teardown/rebuild on docs site ([docs#77](https://github.com/ipfs/docs/issues/77))
    - Docs-related proposals for summit

@gar
  - Done:
  	- js-ipfs bitswap.wantlist(peerid) all merged
    - js-ipfs bitswap.unwant all merged
  - Blocked:
  	- js-peer-id: change toPrint output https://github.com/libp2p/js-peer-id/pull/81 (needs merging)
  - Next:
    - js-ipfs bitswap.ledger (will need to incorporate peer-id change in js-ipfs-bitswap repo)
    - Q3 OKRs

### Questions

### Other notes

- @Mr0grog is away from Wednesday
