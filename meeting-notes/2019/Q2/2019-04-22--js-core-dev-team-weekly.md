# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 April 22, 2019

- **Lead:** @jacobheun
- **Notetaker:** @jacobheun
- **Attendees:**
  - @terichadbourne
  - @jacobheun
  - @hugomrdias
  - @vasco-santos
  - @stebalien
  - @jimpick

- **Recording:** https://youtu.be/sjQM1eFOjFQ

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
- Done:
    - Worked on finalizing OKRs [#927](https://github.com/ipfs/team-mgmt/pull/927)
    - Reviewed/merged as many interop PRs as possible!
    - Released `go-ipfs-dep 0.4.20`
        - Sent PR to update `interop` [#65](https://github.com/ipfs/interop/pull/65) and `ipfs-http-client` [#973](https://github.com/ipfs/js-ipfs-http-client/pull/973) to use `0.4.20`
    - Updated async iterators issue [#1670](https://github.com/ipfs/js-ipfs/issues/1670)
        - Over 40% with PR or done!
    - Added `AbortController` support to `libp2p-websockets` async/await PR [#82](https://github.com/libp2p/js-libp2p-websockets/pull/82)
- Blocked:
    - No rush but these need final review:
        - https://github.com/libp2p/js-libp2p-mdns/pull/80
        - https://github.com/libp2p/js-libp2p-websockets/pull/82
- Next:
    - Finalize Q2 OKRs and create Q2 OKRs video
    - Work on landing DHT
    - Async iterators work

@vmx (not attending)
- Done:
  - IPLD Format API cleanup ready for review:
    - https://github.com/ipld/interface-ipld-format/pull/51
    - https://github.com/ipld/js-ipld-bitcoin/pull/48
    - https://github.com/ipld/js-ipld-dag-cbor/pull/107
    - https://github.com/ipld/js-ipld-dag-pb/pull/127
    - https://github.com/ipld/js-ipld-ethereum/pull/51
    - https://github.com/ipld/js-ipld-git/pull/51
    - https://github.com/ipld/js-ipld-raw/pull/32
    - https://github.com/ipld/js-ipld-zcash/pull/39
    - https://github.com/ipld/js-ipld/pull/201
 - Blocked:
 - Next:
   - We'll see

@dirkmc (not attending):
  - Done:
    - Limit scope of DHT queries js-libp2p-kad-dht#97
  - Blocked:
  - Next:
    - Implementing /refs endpoint js-ipfs#2004
    - Implementing js-libp2p-tcp js-libp2p-tcp#102

@jacobheun
 - Done:
   - Fixed failing firefox ipfs/interop Circuit tests
     - Fixed an issue with Switch not properly getting distinct listen addresses [js-libp2p-switch#334](https://github.com/libp2p/js-libp2p-switch/pull/334)
     - Fixed an issue with Transports not being properly sorted in Switch [libp2p-switch#333](https://github.com/libp2p/js-libp2p-switch/pull/333)
   - libp2p configuration of the DHT is now less restrictive [libp2p#359](https://github.com/libp2p/js-libp2p/pull/359)
   - libp2p will no longer emit itself as a discovered peer [libp2p#357](https://github.com/libp2p/js-libp2p/pull/357)
   - DHT random walk is now less buggy and has a full suite of tests [libp2p-kad-dht#104](https://github.com/libp2p/js-libp2p-kad-dht/pull/104)
   - DHT random walk now has a configurable delay to start [libp2p-kad-dht#101](https://github.com/libp2p/js-libp2p-kad-dht/pull/101)
   - ipfs/interop browser-browser-go Circuit test is enabled and passing [ipfs/interop#64](https://github.com/ipfs/interop/pull/64)
   - Added listen on array to interface-transport for the async updates [interface-transport#46](https://github.com/libp2p/interface-transport/pull/46)
     - Updated TCP async WIP to support listen on array [libp2p-tcp#104](https://github.com/libp2p/js-libp2p-tcp/pull/104)
 - Blocked:
 - Next:
   - Review @alanshaw's blocked PRs
   - Continue DHT performance work
   - look at pull-mplex pubsub ipfs/interop issue

@vasco-santos
- Done:
  - unblocked @Mikerah on gossipsub, with a debug for fixing the `subscribe` / `publish` issue
    - [ChainSafe/gossipsub-js#15](https://github.com/ChainSafe/gossipsub-js/pull/15)
  - interop tests for IPNS over Pubsub, IPNS over DHT and DHT updated
    - [ipfs/interop#47](https://github.com/ipfs/interop/pull/47)
    - [ipfs/interop#39](https://github.com/ipfs/interop/pull/39)
    - [ipfs/interop#36](https://github.com/ipfs/interop/pull/36)
  - enable core tests for for IPNS over Pubsub
    - [ipfs/js-ipfs#2003](https://github.com/ipfs/js-ipfs/pull/2003)
  - `interface-connection` proposal for async iterators
    - [libp2p/interface-connection#29](https://github.com/libp2p/interface-connection/pull/29)
- Blocked: N/A
- Next:
 - help @Mikerah getting all tests passing for gossipsub
 - fix IPNS over Pubsub interop test issue
 - get a suite of tests for `interface-connection` and a draft PR with one of the repos using it
 - finish updating all JS libp2p modules with forum badge

@hugomrdias
 - Done:
   - released multihashing-async 0.7.0 with async/await
   - add support to `/ipns/<fqdn>` to ipfs name resolve [https://github.com/ipfs/js-ipfs/pull/2002](https://github.com/ipfs/js-ipfs/pull/2002)
   - meeting with ipns tiger time
   - make ipfs name resolve recursive [https://github.com/ipfs/js-ipfs/issues/2001](https://github.com/ipfs/js-ipfs/issues/2001)
   - add with 1MB file triggers Uncaught Error: stream.push() after EOF #967 [https://github.com/ipfs/js-ipfs-http-client/issues/967](https://github.com/ipfs/js-ipfs-http-client/issues/967)
   - feat: add support to resolve dns to ipns [https://github.com/ipfs/interface-js-ipfs-core/pull/458](https://github.com/ipfs/interface-js-ipfs-core/pull/458)
   - fix: adds tests for `ipfs name` [https://github.com/ipfs/js-ipfs-http-client/pull/974](https://github.com/ipfs/js-ipfs-http-client/pull/974)
 - Blocked:
 - Next:
   - ipns over dns


### Questions

### Cross team updates

@name (team/WG)
- win 0
- win 1
- ...etc.

### Other notes

@vasco-santos and @hugomrdias out Thursday, 25th April (Public holiday in Portugal)

<!-- After each call, the notetaker submits a PR to ipfs/team-mgmt to store the notes on the meeting-notes folder -->
