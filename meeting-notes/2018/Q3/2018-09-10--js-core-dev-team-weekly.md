# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 September 10, 2018

- **Lead:** Alan Shaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @alanshaw
  - @achingbrain
  - @travisperson
  - @jacobheun
  - @vasco-santos
  - @vmx
- **Recording:** https://youtu.be/KhsdFb_b8Yo

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

@alanshaw
- Done:
    - Published release candidate for `js-ipfs` 0.32.0-rc.1 and 0.32.0-rc.2
    - Test stabilisation work [#1541](https://github.com/ipfs/js-ipfs/pull/1541)
    - Sent PR for faster startup time when using CLI with no daemon running [#1542](https://github.com/ipfs/js-ipfs/pull/1542)
    - Many fixes to API docs [#1538](https://github.com/ipfs/js-ipfs/pull/1538)
    - Made progress adding `--cid-base` option to _all_ relevant `js-ipfs` commands (working in branch [feat/cid-base-option](https://github.com/ipfs/js-ipfs/tree/feat/cid-base-option))
- Blocked:
    - Jenkins npm errors frequent [#51](https://github.com/ipfs/testing/issues/51)
    - Jenkins windows workers out of space [#135](https://github.com/ipfs/testing/issues/135)
- Next:
    - Release js-ipfs 0.32
    - Finish `--cid-base` option
    - Create interop tests for block store get by CIDv0/1
    - Implement block store get by CIDv0/1

@achingbrain
- Done:
  - Spun up npm registry at https://registry.js.ipfs.io
    - Play along at home with `npm i --registry=https://registry.js.ipfs.io`
  - Fixed flaky pubsub tests https://github.com/ipfs/interop/pull/33
  - Made pin tests less flaky https://github.com/ipfs/interop/pull/34
  - Consolidated HTTP API https://github.com/ipfs-shipyard/js-ipfs-http
- Blocked:
  - Create S3 backend for npm-on-ipfs: https://github.com/ipfs/infrastructure/issues/432
  - Remove password requirement from libp2p-keychain? https://github.com/libp2p/js-libp2p-keychain/pull/25
  - Support OTP in Aegir: https://github.com/ipfs/aegir/pull/260
- Next:
  - Continue HTTP API https://github.com/ipfs-shipyard/js-ipfs-http

@jacobheun
 - Done:
   - Added core state machine logic for libp2p-switch. Started working on the connection state machine logic. Reviewed several existing issues surrounding the [state machine issue for libp2p](https://github.com/libp2p/js-libp2p/issues/98) to make sure that is incorporated.
   - Have a basic demo of delegated routing working against a local instance of the supporting go-ipfs branch. Will demo today at IPFS All Hands.
     - I believe there is a performance issue here when the numbner of providers is low. The http query stays open until at least 20 providers are found. I've seen this stay open for 30+ minutes.
   - Patch release for libp2p-switch (0.40.8) for dependency updates, including multistream-select already piped fix version bump.   
 - Blocked:
   - Delegated routing support in [go-ipfs#4594](https://github.com/ipfs/go-ipfs/pull/4595).
 - Next:
   - libp2p-tcp transport isnt currently dialble over dns, looking into this (mafmt needs to be updated for this to work)
   - Continue with state machine updates for libp2p connections

@vasco-santos
- Done:
  - IPNS over Pubsub OKR
    - Created `js-datastore-pubsub` module
      - Initial implementation of [ipfs/js-datastore-pubsub#1](https://github.com/ipfs/js-datastore-pubsub/pull/1)
    - `js-ipns`
      - Added records validator [js-ipns#5](https://github.com/ipfs/js-ipns/pull/5)
      - Added routing key format [js-ipns#7](https://github.com/ipfs/js-ipns/pull/7)
      - PRs approved, merged and released
    - `js-ipfs`
      - Implementation almost done 
  - fix: libp2p records for IPNS should be signed
    - https://github.com/ipfs/js-ipfs/pull/1543
- Blocked:
  - IPNS
    - [interop#26](https://github.com/ipfs/interop/pull/26)
      - Needs js-ipfs new release with IPNS, and to be reviewed
  - IPNS over Pubsub
    - [interface-ipfs-core#361](https://github.com/ipfs/interface-ipfs-core/pull/361)
        - Needs to be approved, merged and released
      - [js-ipfs-api](https://github.com/ipfs/js-ipfs-api/pull/846)
        - Needs the previous PR released, followed by being approved, merged and released
- Next:
  - Fix code review for `js-datastore-pubsub`
  - Add tests for `js-ipfs` implementation of `IPNS over Pubsub` and create PR
  - Fix IPNS over Pubsub PRs feedback
  - Create interop tests for `IPNS over Pubsub`
  - Create tests for testing DHT interop  

@hugomrdias
- Done
  - ipfs chunked add
    - [#1540](https://github.com/ipfs/js-ipfs/pull/1540)
  - ipfs-api chunked add
    - [#851](https://github.com/ipfs/js-ipfs-api/pull/851)
    - [stream-http/tree/fix/body-handling](https://github.com/hugomrdias/stream-http/tree/fix/body-handling)
- Blocked
- Next
  - finish add chunked
  - fix `stream-http`
    - Doesn't work inside a service-worker on Firefox [848#issuecomment-419887279](https://github.com/ipfs/js-ipfs-api/issues/848#issuecomment-419887279)
  - add api add chunked to big data tests
  - finish chore/improve-docs branch documentation.js for some reason doesn't find `factory-daemon`. `npx documentation serve ./js-ipfsd-ctl/src/index.js -w -f html`
  - PR aegir to update documentation.js


@travisperson
 - Done:
   - iptb [go/js/browser demo](https://asciinema.org/a/zn07AUFgZ5RWzAwit7mjpdqvW) 
 - Blocked:
 - Next:
   - Merge iptb browser plugin
   - Build test harness

@vmx
 - Done:
   - Conference (FOSS4G) and travels in Tanzania
 - Blocked: Nope
 - Next:
   - Recording my FOSS4G talk at ahome
   - GraphSync, GraphSync, GraphSync!


### Questions

### Other notes

- Alex away 14th-17th September
- Alan away 1st-5th October

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
