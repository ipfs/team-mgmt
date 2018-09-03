# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 September 3, 2018


- **Lead:** Mike Goelzer
- **Notetaker:** Mike
- **Attendees:**
  - @mgoelzer (leading in @diasdavid's absence)
  - @vasco-santos
  - @victorbjelkholm
  - @mkg20001
  
(Note:  US Holiday + many other people away today)
  
- **Recording:** (coming soon)

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

@victorbjelkholm
	- CLI/HTTP refactor experiment

## Notes

### Week Update

@name
 - Done:
 - Blocked:
 - Next:

@diasdavid (on vacation)

@alanshaw (away)
    
@jacobheun (away)
  - Update: 
    - Will continue to work on delegated routing this week. Encountered an issue with the example late last week where the api connection stays open when finding providers and the total number of providers is < 20. This will need to get fixed before we deploy this so we don't hold open http connections to the delegated peers.

@vasco-santos
 - Done:
   - IPNS PR merged [js-ipfs#1400](https://github.com/ipfs/js-ipfs/pull/1400)
   - Reviewed several PRs both on `libp2p` and `ipfs` context
   - IPNS over Pubsub
     - Created first set of PRs
       - [interface-ipfs-core/pull/361](https://github.com/ipfs/interface-ipfs-core/pull/361)
       - [js-ipfs-api#846](https://github.com/ipfs/js-ipfs-api/pull/846)
     - Main implementation in `js-ipfs` in progress
   - Minor PR for `js-ipfs` [js-ipfs#1535](https://github.com/ipfs/js-ipfs/pull/1535)
 - Blocked:
   - Several interop related PRs
     - [interop#29](https://github.com/ipfs/interop/pull/29) - Approved (needs merge)
     - [interop#26](https://github.com/ipfs/interop/pull/26) - Needs js-ipfs new release and to be approved and merged
   - IPNS over Pubsub (need the following PRs for `js-ipfs` PR)
     - [interface-ipfs-core#361](https://github.com/ipfs/interface-ipfs-core/pull/361) - needs to be approved, merged and released
     - [js-ipfs-api#846](https://github.com/ipfs/js-ipfs-api/pull/846) - needs the previous PR released, followed by being approved, merged and released
 - Next:
   - Create remaining PRs for `IPNS over PubSub` OKR
   - Get the current open PRs merged

@hugomrdias
- Done:
  - js-ipfsd-ctl
    - make ipfsd.start return ipfsd instead of ipfs-api [#292]([https://github.com/ipfs/js-ipfsd-ctl/issues/292](https://github.com/ipfs/js-ipfsd-ctl/issues/292) feedback pls
    - fix: fix ipfsd.init return value [291]([https://github.com/ipfs/js-ipfsd-ctl/pull/291](https://github.com/ipfs/js-ipfsd-ctl/pull/291)
    - improvements to the docs (chore/improve-docs branch)
  - js-ipfs-api chunked uploads
    - feat: add support for chunked uploads [#851](https://github.com/ipfs/js-ipfs-api/pull/851)
    - feat: support chunked add requests [#1540](https://github.com/ipfs/js-ipfs/pull/1540)
  
- Blocked: null
- Next: 
  - finish js-ipfs-api chunked uploads PRs
  - finish js-ipfsd-ctl docs improvements documentation.js for some reason doesn't find `factory-daemon`. `npx documentation serve ./js-ipfsd-ctl/src/index.js -w -f html`

  
  
@travisperson

@mkg20001:
- Done:
  - Fixed tests: https://github.com/libp2p/js-libp2p-crypto/pull/128 (using ursa-optional for faster keygen)
- Blocked:
   - Waiting for re-review: https://github.com/libp2p/js-libp2p-crypto/pull/128
   - Waiting for next js-ipfs release (and go-ipfs feature implementation?): https://github.com/ipfs/js-ipfsd-ctl/pull/284

@jhiesey:


### Questions

### Other notes

- Victor presented a framework to generate all the HTTP/CLI commands (branch:  chore/deduuplicate).  He will open a PR soon.

- Victor:  tests on js-ipfs have not been passing for some at least a month; he cannot get the tests to pass locally
	- Vasco:  usually all green for me locally, but does not work in CI
  - Victor:  think it's timeouts, but Vasco will re-test locally
  - Tests currently take 40 minutes

- Next week:
  - Sep 10 - ✋ @alanshaw to lead (yay!)
  

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
