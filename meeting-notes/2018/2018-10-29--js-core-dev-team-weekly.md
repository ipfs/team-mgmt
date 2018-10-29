# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 October 29, 2018

- **Lead:** @jacobheun
- **Notetaker:** @olizilla
- **Attendees:**
  - @vmx
  - @achingbrain
  - @vasco-santos
  - @jacobheun
  - @olizilla
  - @hugomrdias
  - @diasdavid
  - @terichadbourne
- **Recording:** https://youtu.be/j531h2oUi0Y

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

@alanshaw (not attending)

* Done
    * Released `jsipfs 0.33.0-rc.2`
        * Update to Web UI 2.1.1 [#1653](https://github.com/ipfs/js-ipfs/pull/1653)
        * Remove Hapi `maxBytes` restriction allowing large file uploads from the browser [#1645](https://github.com/ipfs/js-ipfs/pull/1645)
    * Released `jsipfs 0.33.0-rc.3`
        * Allows the Web UI to detect and connect to origin without the user having to configure the API multiaddr [#1660](https://github.com/ipfs/js-ipfs/pull/1660)
    * Attempted release 0.33, and delayed due to:
        * Running tests for [orbitdb/ipfs-log](https://github.com/orbitdb/ipfs-log) failed with [#1615](https://github.com/ipfs/js-ipfs/issues/1615), now fixed by [#1617](https://github.com/ipfs/js-ipfs/pull/1617)
        * `js-unixfs-engine` upgraded to `js-ipld 0.18` (a breaking change), causing 2 versions of `ipld` to be included in `js-ipfs`. Resolution is to also bring this breaking change into `js-ipfs 0.33`. PR open to resolve [#1668](https://github.com/ipfs/js-ipfs/pull/1668)
    * Created **Awesome Endeavour: Async Iterators** [#1670](https://github.com/ipfs/js-ipfs/issues/1670)
        * Converted `js-libp2p-crypto` and `js-libp2p-crypto-secp256k1` to use async/await over the weekend ([#131](https://github.com/libp2p/js-libp2p-crypto/pull/131) and [#9](https://github.com/libp2p/js-libp2p-crypto-secp256k1/pull/9))
        * It faster! https://github.com/libp2p/js-libp2p-crypto/pull/131#issue-226279844
    * PR open to AEgir for prereleases support [#289](https://github.com/ipfs/aegir/pull/289)
* Blocked
    * `n/a`
* Next
    * [Many PRs to review, merge and release for IPLD breaking change](https://github.com/ipfs/js-ipfs/pull/1668#issuecomment-433074668)
    * Release `js-ipfs 0.33`
    * Work on `--cid-base` option

@vasco-santos

- Done
  - DHT Interop
    - Interop PR ready for review [interop#36](https://github.com/ipfs/interop/pull/36)
    - Couple PRs for `ipfsd-ctl`
      - [js-ipfsd-ctl#306](https://github.com/ipfs/js-ipfsd-ctl/pull/306)
      - [js-ipfsd-ctl/pull/307](https://github.com/ipfs/js-ipfsd-ctl/pull/307)
  - Upgraded `interface-datastore` in lots of modules
  - `service-worker-gateway`
    - Upgraded example to use `wepack@4` to track down a js.ipfs.io problem
  - IPNS over Pubsub
    - Created WIP Interop PR [interop#39](https://github.com/ipfs/interop/pull/39)
- Blocked
  - IPNS over Pubsub interop
    - [interop#39](https://github.com/ipfs/interop/pull/39) - incompatible pubsub topic format
- Next
  - DHT stress tests
  - Solve IPNS over Pubsub interop problem with @stebalien
  - Address reviews from IPNS over Pubsub / DHT PRs 

@jacobheun
- Done:
  - Released js-libp2p 0.24.0-rc.2
  	- Will finish testing today/tomorrow and get 0.24 released
    - Released lip2p-switch v0.41.1, fixes a concurrent dials issue with the state machine
  - Started looking more in depth at js-ipfs testing
    - Consolidating http-api tests [js-ipfs#1672](https://github.com/ipfs/js-ipfs/pull/1672)
    - Started a proof to get rid of `ipfsd-ctl` usage in cli tests https://github.com/ipfs/js-ipfs/issues/1666#issuecomment-433993559
  - Helped with the datastore upgrade issues that occurred last week
  - Released js-ipfs-repo v0.25.0
- Blocked:
- Next:
  - Release libp2p 0.24
  - Attempt to focus on testbed

@hugomrdias
- Done:
    - gitlab pipeline
    - dependencies upgrades with PR filtered for ipfs only packages
    - [https://github.com/ipfs/js-ipfs/pull/1662](https://github.com/ipfs/js-ipfs/pull/1662) feat: add support to pass config in the init cmd
    - [https://github.com/ipfs/js-ipfsd-ctl/pull/303](https://github.com/ipfs/js-ipfsd-ctl/pull/303) fix: pass config to init
    - [https://github.com/ipfs/js-ipfs/pull/1663](https://github.com/ipfs/js-ipfs/pull/1663) fix: add missing dependencies
    - [https://github.com/ipfs/js-ipfs/pull/1665](https://github.com/ipfs/js-ipfs/pull/1665) fix: remove unused deps
    - [https://github.com/ipfs/js-ipfs-api/pull/879](https://github.com/ipfs/js-ipfs-api/pull/879) fix: add missing deps
    - [https://github.com/ipfs/js-ipfs-api/pull/880](https://github.com/ipfs/js-ipfs-api/pull/880) fix: remove unused deps
    - [https://github.com/ipfs/js-ipfsd-ctl/pull/308](https://github.com/ipfs/js-ipfsd-ctl/pull/308) Fix non disposable daemon init/start and attach to running daemons
    - [https://github.com/ipfs/js-ipfs/pull/1678](https://github.com/ipfs/js-ipfs/pull/1678) fix: remove example eslint config
    - [https://github.com/ipfs/aegir/pull/250](https://github.com/ipfs/aegir/pull/250) feat: add support for eslint overrides
- Blocked
- Next
    - push this PR [https://github.com/ipfs/js-ipfs/pull/1669](https://github.com/ipfs/js-ipfs/pull/1669) and add gitlab example and details to it
    - make a issue about renovate service with [https://github.com/hugomrdias/js-ipfs](https://github.com/hugomrdias/js-ipfs) as an example
    - push aegir experimental build to be the default
    - OKR error codes
    - IPFS Roadmap


@diasdavid
- Done:
  - Files API Refactor (did interface-ipfs-core, js-ipfs-api, missing js-ipfs)
    - https://github.com/ipfs/interface-ipfs-core/pull/378
    - https://github.com/ipfs/js-ipfs-api/pull/878
    - https://github.com/ipfs/js-ipfs/pull/1671
    	- let's stop with the circular dependencies
  - found and create a PR (WIP) for disposable nodes with js-ipfsd-ctl
    - https://github.com/ipfs/js-ipfsd-ctl/pull/304
  - Bunch of PR Review, Merge and Release that were stuck 
    - Why do things have been taking so much time to merge?
  - dweb-publish refactor. Making publishing to the DWeb simpler
  	- https://github.com/ipfs-shipyard/ipscend/pull/114
  - Shipped IPFS Architecture Diagram
    - https://github.com/ipfs/js-ipfs/pull/1673
  - Did a ton of waffle grooming  
  - Open the question "Consider Gitlab for our org" issue https://github.com/ipfs/project/issues/5
- Blocked:
  - 
- Next:
  - refactor js-ipfs-mfs for the Files API refactor 
  

@vmx
- Done:
  - Get js-ipld breaking changes into js-ipfs: https://github.com/ipfs/js-ipfs/pull/1668
  - GraphSync spec
- Blocked: Nope
- Next:
  - Fix Windows Python failire: https://github.com/ipfs/dev-team-enablement/issues/155
  - GraphSync spec

@achingbrain
- Done:
  - Published a new version of ipfs-npm
  - Split ipfs-npm-registry-mirror out and deployed it
  - https://github.com/ipfs/js-ipfs-unixfs-engine/issues/230
- Blocked:
  - https://github.com/pull-stream/pull-sort/pull/2
- Next:
  - performance performance performance performance

@name
- Done:
- Blocked:
- Next:

### Questions

### Other notes

Vasco out 1st November (public holiday portugal, reachable through slack)
Alex out 1st, 2nd, 5th November (checking email though)
Volker out Thu 1st November (public holiday)

Actions
- check out the dht interop PRS! It's so close!1!
  - https://github.com/ipfs/interop/pull/36

- we have to ship an improvement to CI as it's really hurting us. get involved in these issues!
  - https://github.com/ipfs/js-ipfs/pull/1669
  - https://github.com/ipfs/infrastructure/issues/442

- we need to get better at waffle grooming. lots of things getting stuck, PRs not getting reviewed. Try timeboxing 30mins to go through the backlog, get some things merged and feel good.

- lets install npm-on-ipfs next week when it is fast.

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
