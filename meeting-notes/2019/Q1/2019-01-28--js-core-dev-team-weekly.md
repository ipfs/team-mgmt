# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 January 28, 2019

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @jacobheun
  - @chriscool
  - @vmx
  - @litzenberger
  - @zcstarr
  - @hugomrdias
  - @mgoelzer
  - @achingbrain
  - @lidel
- **Recording:** TBC

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
  - Better custom lock example in datastore s3 [js-datastore-s3#13](https://github.com/ipfs/js-datastore-s3/pull/13)
    - Also updated example for the latest js-ipfs
  - Fix datastore s3 issue with multiple callbacks due to AWS lib [js-datastore-s3#14](https://github.com/ipfs/js-datastore-s3/pull/14)
  - Now lead maintainer of js-multiaddr
  - Created issue for tracking transport listening retry [js-libp2p#312](https://github.com/libp2p/js-libp2p/issues/312)
  - Lots of reviewing
- Blocked:
- Next:
  - Work to finalize [js-libp2p#312](https://github.com/libp2p/js-libp2p/issues/312) so work can start on that
  - Finish libp2p daemon PR [js-libp2p-daemon#1](https://github.com/libp2p/js-libp2p-daemon/pull/1)
  - Finalize rendezvous timeline

@vmx
- Done:
  - new js-ipld API:
    - API Docs: https://github.com/ipld/js-ipld/pull/185
    - js-ipld itself: https://github.com/ipld/js-ipld/pull/190
    - Changes on projects that depend on js-ipld:
       - https://github.com/ipfs/js-ipfs-unixfs-importer/pull/20
       - https://github.com/ipfs/js-ipfs-unixfs-exporter/pull/15
       - https://github.com/ipfs/js-ipfs-mfs/pull/35
       - https://github.com/ipfs/js-ipfs/pull/1848
- Blocked:
  - Not really blocked, but it would be cool to get the new IPLD API merged soon.
- Next:
  - Graphsync selectors, creating grammar and parser
  - Make the new JS IPLD API use the JS IPLD Format API. Start with dag-pb and hope to get other formats picked up by others.


@alanshaw
- Done:
    - Fixed up `_libp2pNode` to `libp2p` move [#1832](https://github.com/ipfs/js-ipfs/pull/1832)
    - Fixed bundle `ipfs-http-client` in Meteor [#931](https://github.com/ipfs/js-ipfs-http-client/pull/931)
    - Started migration to CID v1 base32 by default with PR to js-cid [#73](https://github.com/multiformats/js-cid/pull/73)
    - Worked on upgrade to hapi 18 [#1844](https://github.com/ipfs/js-ipfs/pull/1844)
        - `ipfs.add` response not buffered!
        - net removal of nearly 800 LOC so far
    - Fix to js.ipfs.io - still using old files API [#241](https://github.com/ipfs/js.ipfs.io/pull/241)
    - Reviewed and merged PR adding support for `_dnslink` subdomain to `ipfs.dns` [#1843](https://github.com/ipfs/js-ipfs/pull/1843)
- Blocked:
    - `null`
- Next:
    - Finish off upgrade to hapi 18
    - Continue CID v1 base32 default work ([step 2 here](https://github.com/ipfs/js-ipfs/issues/1440#issuecomment-407343797))
    - Filecoin Friday!

@vasco-santos

Done:
- DHT integration in `js-ipfs`
  - CI is green now [ipfs/js-ipfs#856](https://github.com/ipfs/js-ipfs/pull/856)
  - Test improvements and rebased with master
  - Fix ipv6 connections with websockets [libp2p/js-libp2p-websockets#81](https://github.com/libp2p/js-libp2p-websockets/pull/81)
  - Connection manager limits (in progress)
    - [libp2p/js-libp2p-kad-dht#66](https://github.com/libp2p/js-libp2p-kad-dht/pull/66)
    - [libp2p/js-libp2p#303](https://github.com/libp2p/js-libp2p/pull/303)
    - [ipfs/js-ipfs/tree/feat/limit-connections-number](https://github.com/ipfs/js-ipfs/tree/feat/limit-connections-number)
- Created pubsub base protocol
  - https://github.com/libp2p/js-libp2p-pubsub
  - Base protocol extracted from floodsub to its own module, to be used by gossipsub implementation
  - @Mikerah from ChainSafeSystems will be implementing gossipsub for JS land
- Pubsub message benchmark
  - [ipfs/benchmarks#210](https://github.com/ipfs/benchmarks/pull/210)

Blocked: N/A

Next:
- DHT review addressed
- Review [libp2p/js-libp2p-daemon](https://github.com/libp2p/js-libp2p-daemon)
- Get [libp2p-daemon-client#1](https://github.com/libp2p/js-libp2p-daemon-client/pull/1) merged
- Continue `libp2p` interop work

@chriscool
- Done:
  - Implementation status dashboard prototype
    https://github.com/chriscool/go-ipfs/commits/implementation-status1
    It uses `prove` (https://perldoc.perl.org/prove.html) and the existing
    coverage script (https://github.com/ipfs/go-ipfs/blob/master/test/sharness_test_coverage_helper.sh)
- Blocked: N/A
- Next:
  - Git Merge and FOSDEM
  - Merge scripts together
  - Improve prototype to generate markdown

@hugomrdias
- Done:
  - https://github.com/ipfs/js-ipfs/pull/1830 reviewed feat: load IPLD formats lazily from IPFS 
  - https://github.com/ipfs/js-ipfs/issues/1827  Bootstrap broken in 0.34.0?
  - https://github.com/hugomrdias/iso-url/releases/tag/v0.4.5 released iso-url
  - https://github.com/ipfs/js-ipfs/pull/1839 fix: add cors support for preload-mock-server and update aegir
  - Debugged a Invalid URL error in the preload tests of js-ifps seems to be related to ipv6 url without brackets and not iso-url related 
  - Make pullstream-to-stream return a proper readable-stream
  - Add cov and custom browsers to karma config in aegir (ci prototypes related)
  - sick thrusday and friday
- Blocked:
  - mplex
- Next:
  - FOSDEM
  - Vacation on tuesday
  - finish pullstream-to-stream
  - proper-lockfile with extra check for staleness 


@mcollina
- done:
  - https://github.com/ipfs/js-ipfs/issues/1337#issuecomment-457563157 
- blocked:
- next:
  - analysis of https://github.com/ipfs/benchmarks/issues/203#issuecomment-457246301


@achingbrain
- Done:
 - npm-registry-client => npm-ipfs-client
 - Reviewing js-ipld api changes
- Blocked:
 - n/a
- Next:
 - npm-registry-client => npm-ipfs-client
 - Merge js-ipld API update PRs
 - Refactor unixfs/mfs to use async interators


@zcstarr
- Done:
	- js-ipfs repo async/await
- Blocked:
- Next:
	- js-ipfs repo async/await PR

@elexy
- done: 
- blocked:
  - https://github.com/ipfs/benchmarks/issues/150
- next: 
  - https://github.com/ipfs/benchmarks/issues/198
  - https://github.com/ipfs/benchmarks/issues/169
  - https://github.com/ipfs/benchmarks/issues/165
  - https://github.com/ipfs/benchmarks/issues/147
  - https://github.com/ipfs/benchmarks/issues/35

@litzenberegr
- done: 
  - [Added Js - Go tcp](https://github.com/ipfs/benchmarks/pull/213)
  - [Added Go -> JS Cat tests](https://github.com/ipfs/benchmarks/pull/208)
  - [Fix for using Large files in peer testing](https://github.com/ipfs/benchmarks/pull/207)
  - [Added Go -> JS tcp](https://github.com/ipfs/benchmarks/pull/206)
  - [Added Web Sockets tests for Go ->JS and JS-GO cat tests](https://github.com/ipfs/benchmarks/pull/206)
- blocked:
- next:
  - Add IPFS options per test - https://github.com/ipfs/benchmarks/issues/216
  - MFS test 
  - Testing changes
  - Other tests

@lidel
- Done:
	- Quick update on Brave/Chromium: ipfs-companion extension ID is now whitelisted in Brave and we confirmed `chrome.sockets` API can be used to start HTTP server: [ipfs-companion/issues/664#comment](https://github.com/ipfs-shipyard/ipfs-companion/issues/664#issuecomment-458213687) (this is huge, as it confirms js-ipfs-in-webextension as a provider of HTTP Gateway is feasible \o/)
- Blocked:
- Next:
	- Go spelunking what is missing to get js-ipfs' HTTP gw to start
  - FOSDEM

@name
- Done:
- Blocked:
- Next:

### Other notes

- Happy IPLD day everyone!

<!-- After each call, the notetaker submits a PR to ipfs/team-mgmt to store the notes on the meeting-notes folder -->
