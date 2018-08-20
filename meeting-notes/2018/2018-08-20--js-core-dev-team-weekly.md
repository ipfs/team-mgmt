# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 August 20, 2018

- **Lead:** Alan Shaw (@alanshaw)
- **Notetaker:** @jacobheun
- **Attendees:**
  - @achingbrain
  - @jacobheun
  - @vmx
  - @mgoelzer
  - _attendee names..._
- **Recording:** https://youtu.be/KZ5mMAdMmo0

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
    - (already last week): Describe your DAG in a text file: https://github.com/vmx/dagbuilder
    - Hello world libp2p (for GraphSync)
    - FOSS4G talk preparations
  - Blocked: nope
  - Next:
    - FOSS4G conference + holidays (will be away till 2018-09-09)

@jacobheun
  - Done:
    - Released [multistream-select@0.14.3](https://github.com/multiformats/js-multistream-select/commit/64206162b525ba841e77dd4a6caa3a73b020e089) to prevent 'already piped' errors from crashing daemons.
    - Release of libp2p@v0.23.1, which includes @alanshaws fix for bad multiaddrs throwing errors instead of calling back.
    - Created [ipfs-api#837](https://github.com/ipfs/js-ipfs-api/pull/837) to make mocking the api requests easier, which should make it easier to create tests without spinning up full nodes.
    - libp2p factory is ready to merge [js-ipfs#1470](https://github.com/ipfs/js-ipfs/pull/1470)
    - delegate peer routing test updates are ready to merge https://github.com/libp2p/js-libp2p-delegated-peer-routing/pull/3
    - Found an inconsistency issue when adding libp2p tests for delegate content routing.  Fixed that, going to finish the libp2p tests for that today.
  - Blocked:
    - Go delegate route endpoints https://github.com/ipfs/go-ipfs/pull/4595. We can get the work finished for delegated peer/content routing, but it won't be functional until this is deployed.
    - [ipfs-api#837](https://github.com/ipfs/js-ipfs-api/pull/837) will prevent me from finalizing my PR for libp2p content/delegate routing tests.
  - Next:
    - Finish libp2p tests for peer/content routing
    - Create example for peer/content routing
    - Going to look into js-ipfs-repo configuration updates that need to happen to help unblock the ipfs-repo interop [[awesome endeavor](https://github.com/ipfs/js-ipfs/issues/1467)
    - Start work on libp2p and libp2p-switch state machine work.

@alanshaw
  - Done:
    - Initial working version of discovery and transport using libdweb: https://youtu.be/LDHFqwC8Syg
    - Identified and fixed places where inputs were not properly validated causing daemon to crash [#1506](https://github.com/ipfs/js-ipfs/pull/1506)
    - Fixed issue with `object.patch.rmLink` [#1508](https://github.com/ipfs/js-ipfs/pull/1508)
    - Released js-ipfs 0.31.5 with fixes [#1506](https://github.com/ipfs/js-ipfs/pull/1506), and [#1508](https://github.com/ipfs/js-ipfs/pull/1508) (and others)
    - Released js-ipfs 0.31.6 with `data-encoding` arg for `object.get` [#1420](https://github.com/ipfs/js-ipfs/pull/1420)
    - Created PR to fix issue starting IPFS when preload disabled [#1516](https://github.com/ipfs/js-ipfs/pull/1516)
    - Created PR to exclude examples from `npm publish` [#1513](https://github.com/ipfs/js-ipfs/pull/1513)
    - Got all PRs except [#1400](https://github.com/ipfs/js-ipfs/pull/1400) for 0.32 into mergeable state ([#1455](https://github.com/ipfs/js-ipfs/pull/1455), [#1470](https://github.com/ipfs/js-ipfs/pull/1470) and [#1469](https://github.com/ipfs/js-ipfs/pull/1469))
    - Released js-ipfs-api 24.0.0 with fix for `object.get` (uses new `data-encoding` arg) [#806](https://github.com/ipfs/js-ipfs-api/pull/806)
  - Blocked:
    - `null`
  - Next:
    - release new js-ipfs with fix for disabled preload [#1516](https://github.com/ipfs/js-ipfs/pull/1516)
    - get IPNS PR into mergable state [#1400](https://github.com/ipfs/js-ipfs/pull/1400)
    - base32 CID [#1441](https://github.com/ipfs/js-ipfs/pull/1441)

@travisperson
  - Done:
  	- Merged iptb refactor [#61](https://github.com/ipfs/iptb/pull/61)
    - Basic PoC of browser plugin [with demo](https://asciinema.org/a/bNmFx2o9svyCsGtrTCfHUTV4g)
  - Blocked:
    - N / A
  - Next:
    - Get browser plugin ready to merge (feat/browseripfs)

@hugomrdias
  - Done:
    - Vacation 
  - Blocked:
    - `undefined`
  - Next:   
    - Push repo with a couple big data tests (KR)
    - Give some love to the repos i'm lead maintainer 

@achingbrain
  - Done:
    - `--data-encoding` arg PR merged to js-ipfs [ipfs/js-ipfs#1420](https://github.com/ipfs/js-ipfs/pull/1420)
    - fixed problem with Jenkins and long file names on Windows [ipfs/jenkins-libs#26](https://github.com/ipfs/jenkins-libs/pull/26), [ipfs/jenkins-libs#27](https://github.com/ipfs/jenkins-libs/pull/27)
    - fixed test where data was being pull from the network [ipfs/js-ipfs-api#832](https://github.com/ipfs/js-ipfs-api/pull/832)
    - make calculation of `this._json` lazy [ipld/js-ipld-dag-pb#81](https://github.com/ipld/js-ipld-dag-pb/pull/81)
    - allow .toJSON response to be modified [ipld/js-ipld-dag-pb#83](https://github.com/ipld/js-ipld-dag-pb/pull/83)
    - submitted a PR to go-ipfs to add `--parents flag` to `ipfs.files.write` [ipfs/go-ipfs#5359](https://github.com/ipfs/go-ipfs/pull/5359)
    - expanded test coverage of `npm-on-ipfs` [ipfs-shipyard/npm-on-ipfs#53](https://github.com/ipfs-shipyard/npm-on-ipfs/issues/53)
  - Blocked:
    - Deployment of `npm-on-ipfs` - [ipfs/infrastructure#423](https://github.com/ipfs/infrastructure/issues/423)
  - Next:
    - Park `npm-on-ipfs` until [ipfs/infrastructure#423](https://github.com/ipfs/infrastructure/issues/423) is resolved
    - Start looking at http-api-v2

@mikeal
  - Implemented DAGjson, solves some determinsm issues
    - Feeds into an RFC I'm writing, should make its way there soon
  - Some issues in the ipfs/community repo that people may be interested in
    - A PR to create a project lifecycle
      - We have 300+ repos, how do we make sure things are identified in their actual state

@name
  - Done:
  - Blocked:
  - Next:

### Questions
- What is the DAG Builder for?
  - Makes it easy to test graphs, so you don't have to make it manually.
- Should there be an issue tracking that we don't publish `dist` directories of the examples?
  - https://github.com/ipfs/testing/issues/129
- @mgoelzer want to createa a demo of the various libp2p nodes all connecting together, is that possible?
  - The ipfs nodes are talking together already, so it works, it's really just a matter of what fun things you'll find along the way as we don't have interop tests currently running for each of the versions. Interop tests are in the pipeline to complete this quarterh , although they will probably be delayed.

### Other notes
- Meeting ended ubruptly due to another meeting being started that ended this one.

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
