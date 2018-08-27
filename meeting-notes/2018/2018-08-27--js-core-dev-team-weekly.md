a# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 August 27, 2018


- **Lead:** David Dias
- **Notetaker:** Jacob Heun
- **Attendees:**
  - @vasco-santos
  - @jacobheun
  - @hugomrdias
  - @travisperson
  - @mkg20001
  - @mgoelzer (just here to learn)
  - @jhiesey
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


## Notes

### Week Update

@name
 - Done:
 - Blocked:
 - Next:

@diasdavid
 - Done:
   - Created package-table https://github.com/ipfs-shipyard/package-table and updated the packate tables on js-ipfs, js-libp2p and js-ipld
   - Discussed and Reviewed the Work Plan for finalizing js.ipfs.io
   - Groom the Waffle Boards
 - Blocked:
   - My time is even spreaded more thin with my commitement to support the Go Core Dev team. I expect to regain my availability back once the new TPM joins mid September.
 - Next:
   - 

@alanshaw (not attending - UK public holiday)
- Done:
    - Fixed issue with `files.add --cid-version=1` [#1518](https://github.com/ipfs/js-ipfs/issues/1518)
    - Released js-ipfs 0.31.7 with fix for start failure when preloading is disabled [#1514](https://github.com/ipfs/js-ipfs/issues/1514)
    - Found and sent a PR to js-ipld to address a bottleneck for IPFS startup time [#145](https://github.com/ipld/js-ipld/pull/145)
    - Sent PR to fix issue with IPLD resolving a non-existent path - was throwing and not calling callback [#146](https://github.com/ipld/js-ipld/pull/146)
    - Upgraded the [IPLD explorer CLI tool](https://www.npmjs.com/package/ipld-explorer-cli) to use IPLD directly and resolve all sorts of node types. Also now works with js-ipfs daemon \o/!!!!
- Blocked:
    - `null`
- Next:
    - get IPNS PR into mergable state [#1400](https://github.com/ipfs/js-ipfs/pull/1400)
    - base32 CID [#1441](https://github.com/ipfs/js-ipfs/pull/1441)
    
@jacobheun
  - Done:
    - Peer/Content routing work is pretty much done, just need to add an example to work out any issues, [libp2p#242](https://github.com/libp2p/js-libp2p/pull/242). Allows for multiple routing modules and prioritizes the dht if it exists.
    - Released a security fix for [js-ipns0.1.3](https://github.com/ipfs/js-ipns/commit/33684e356f1f2fdcd99b2fb85fcc5d52223769a0). Public key validation was not happening properly. npm security advisory was submitted.
    - DHT update to fix bad char encoding logs [libp2p-kad-dht#33](https://github.com/libp2p/js-libp2p-kad-dht/pull/33)
    - Delegate content routing fix for complying to dht interface [libp2p-delegated-content-routing#4](https://github.com/libp2p/js-libp2p-delegated-content-routing/pull/4)
    - Update language for libp2p custom bundle pr for ipfs [ipfs#1470](https://github.com/ipfs/js-ipfs/pull/1470)
  - Blocked:
    - Delegate routing. These aren't currently hard blockers but will need to be finished in the next couple weeks.
      - [libp2p-delegated-content-routing#4](https://github.com/libp2p/js-libp2p-delegated-content-routing/pull/4) dht interface compliance
      - [go-ipfs#4595](https://github.com/ipfs/go-ipfs/pull/4595) Go delegate endpoints
      - [infrastructure#426](https://github.com/ipfs/infrastructure/issues/426) Go deployment for delegate routes. Blocked by [go-ipfs#4595](https://github.com/ipfs/go-ipfs/pull/4595)
  - Next:
    - Delegate routing example
    - State machine updates
    - ipfs-repo configuration updates for better go interop

@vasco-santos
  - Done:
    N/A
  - Blocked:
    - Several IPNS related PRs
      - [js-ipfs#1400](https://github.com/ipfs/js-ipfs/pull/1400) - needs final review from @alanshaw, and then being merged and released
      - [interop#29](https://github.com/ipfs/interop/pull/29) - needs review
      - [interop#26](https://github.com/ipfs/interop/pull/26) - needs [js-ipfs#1400](https://github.com/ipfs/js-ipfs/pull/1400) merged and then PR review
  - Next:
    - Have all blocked IPNS related PRs merged
    - Fix `ipfs-api` using `interface-ipfs-core` tests for IPNS
    - Check all the requests for me (PRs and Issues) during my holidays
    - Get an initial implementation of `IPNS over PubSub`

@hugomrdias
 - Done:
   - Without a daemon running we cant ipfs cat an non-local cid with the CLI [#1527](https://github.com/ipfs/js-ipfs/issues/1527)
   - big data tests 
     - tests to adding data in node multiple ways (new IPFS, cli, ipfsd-ctl)
     - tests to get data with go and node using ctl 
     - started integrating browser add/get from the previous quarter (on hold until repo handling finished)
     - env vars for data size and repos path 
     - started repo handling refactor to better run the tests
 - Blocked:
 - Next:
   - finish repo refactor and publish repo on github to get feedback
   - finish integrating browser tests
   - ipfsd init start docs and behavior don't match [#289](https://github.com/ipfs/js-ipfsd-ctl/issues/289)
   
@travisperson
 - Done:
   - IPTB JS Browser [iptb#69](https://github.com/ipfs/iptb/pull/69) (needs review - jscode)
     - [Demo Script + Output](https://gist.github.com/travisperson/df370a47797d1ae801508914cd053b26)
 - Blocked:
 - Next:
   - Update IPTB docs (general documentation)
   - Investigate flaky tests [testing#127](https://github.com/ipfs/testing/issues/127)

@mkg20001:
 - Done?/Need re-review?
   - Pregenerated iPeer IDs for tests https://github.com/ipfs/js-ipfsd-ctl/pull/284 (and https://github.com/libp2p/js-libp2p-crypto/pull/128)
   - aegir: Check for unused/missing dependencies https://github.com/ipfs/aegir/pull/241
   - https://github.com/libp2p/js-libp2p-webrtc-star/pull/148
   
@jhiesey:
 - Done:
   - Learning about DHT code; discovered https://github.com/ipfs/js-ipfs/issues/1526

### Questions

### Other notes

- David will be out Sep 3 ~ Sep 14. Need takers to Lead the Weekly Sync for:
  - Sep 3 (US holiday) - ✋ @mgoelzer (can lead or notetake)
  - Sep 10 - ✋ @alanshaw
  
- Alan away 30th Aug - 3rd Sep
- Jacob out Sep 3rd (U.S. public Holiday)

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
