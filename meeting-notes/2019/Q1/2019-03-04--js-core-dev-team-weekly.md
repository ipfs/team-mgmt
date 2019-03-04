# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 March 04, 2019

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @vmx
  - @jimpick
  - @vasco-santos
  - @hugomrdias
  - @zcstarr
  - @mikeal
  - @lidel
  - @terichadbourne
  - @achingbrain
  
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
- Present cross team updates and review remaining issues if there is time left

## Notes

### Week Update

@alanshaw

- Done:
  - Progress opening many PRs for CIDv1 & base32 encoded by default ([list here](https://github.com/ipfs/js-ipfs/issues/1440#issuecomment-461049347))
  - Re-reviewed IPLD API refactor [#190](https://github.com/ipld/js-ipld/pull/190)
  - Intervews
  - Investigated go-bitswap issue [#68](https://github.com/ipfs/go-bitswap/issues/68)
  - Made a module for parallel mapping for async iterators https://github.com/alanshaw/paramap-it
- Blocked:
  - 0.35 release is blocked on 100% CPU issue (@vasco-santos investigating)
- Next:
  - Debugging for 100% CPU
  - Testing the DHT
  - Work towards async iterators endeavour [#1670](https://github.com/ipfs/js-ipfs/issues/1670)
  - Work towards CIDv1 & base32 encoded by default [#1440](https://github.com/ipfs/js-ipfs/issues/1440)

@vmx
 - Done
   - IPLD Selectors:
    - Spec: https://github.com/ipld/specs/blob/7ba014c1b6868514eb461db3c3126136b9250bdc/selectors/selectors.md
    - JS implementation: https://github.com/vmx/js-ipld-selectors/
      - Especially see the tests, you can add your own easily without doing any JavaScript: https://github.com/vmx/js-ipld-selectors/tree/master/test/fixtures
   - Tooling around selectors:
     - Specify a DAG for testing within a single file: https://github.com/vmx/dagbuilder/
     - Create Graphviz diagrams to view your DAG: https://github.com/vmx/ipld-graphviz
   - Moved to Travis CI on all repos I'm the lead maintainer of
 - Blocked: nope
 - Next:
   - Hopefully getting the new JS IPLD API PR merged https://github.com/ipld/js-ipld/pull/190
   - Make sure dependencies on the JS IPLD API (mainly unixfs) still works with the post-review code
   - Start to work on the new IPLD Formats API implementation: https://github.com/ipld/interface-ipld-format/pull/50

@achingbrain (Not attending - doing a interview)

- Done:
  - On leave last week
  - Figured out why npm-on-ipfs pubsub stops working - is related to message sizes https://github.com/libp2p/js-libp2p-pubsub/issues/7
- Blocked:
  - N/a
- Next:
  - Address comments on npm-on-ipfs blog posts
  - Start implementing missing IPFS features from Q1 OKR list

@jacobheun
 - Done:
   - released multiaddr 6.0.6. multiaddr now supports toJSON. Resolves [multiaddr#54](https://github.com/multiformats/js-multiaddr/issues/54)
   - Investigating issues with ipfs/interop test performance
   - Assisting with libp2p-switch updates needed for gossipsub. Support for adding known protocols to PeerInfo.
   - Worked with Vasco to diagnose js-ipfs cpu issues
   - Investigating issues with libp2p-circuit connection issues on firefox in ipfs/interop https://travis-ci.com/ipfs/interop/jobs/177364408#L604
 - Blocked:
   - Hitting issues upgrading libp2p-tcp, Travis doesn't appear to support ipv6. May have to skip ipv6 tests.
 - Next:
   - Create basic benchmarks for libp2p-switch to diagnose performance issues there
   - Do a write up of the libp2p-switch and how it functions
   - Finish daemon-client updates to use multiaddrs everywhere [WIP daemon-client#6](https://github.com/libp2p/js-libp2p-daemon-client/pull/6)
   - Work on resolving the ipfs/interop issues

@vasco-santos

- Done:
  - dht
    - Diagnose / Debug CPU usage on the sky in `js-ipfs` (@jacobheun help <3)
      - [ipfs/js-ipfs#1907](https://github.com/ipfs/js-ipfs/pull/1907)
    - Temporary fix for `closerPeers` [libp2p/js-libp2p-kad-dht#85](https://github.com/libp2p/js-libp2p-kad-dht/pull/85) and issue for discussing solution [libp2p/js-libp2p-kad-dht#86](https://github.com/libp2p/js-libp2p-kad-dht/issues/86)
  - libp2p interop (WIP)
    - dht interop tests
      - [libp2p/interop/tree/test/dht](https://github.com/libp2p/interop/tree/test/dht)
    - pubsub support
      - [libp2p/js-libp2p-daemon/tree/feat/pubsub](https://github.com/libp2p/js-libp2p-daemon/tree/feat/pubsub)
      - [libp2p/js-libp2p-daemon-client/tree/feat/pubsub](https://github.com/libp2p/js-libp2p-daemon-client/tree/feat/pubsub)
  - migrate repos to use travis CI PRs / Reviews
  - fix DNS formats [multiformats/js-mafmt/pull/41](https://github.com/multiformats/js-mafmt/pull/41)
- Blocked: 
- Next:
  - Reviews:
    - new review to gossipsub implementation
    - @dirkmc PRs for async migration (IPNS / DHT)
  - libp2p interop tests
    - finish dht interop tests
    - finish pubsub support on [libp2p/js-libp2p-daemon-client](https://github.com/libp2p/js-libp2p-daemon-client) and [libp2p/js-libp2p-daemon](https://github.com/libp2p/js-libp2p-daemon)
    - start pubsub interop tests

@hugomrdias
 - Done:
   - finished js-ipfs-http-client bundle size PR [#915](https://github.com/ipfs/js-ipfs-http-client/pull/915)
   - reviewed Per-site Redirect Opt-out #687 PR [#pull/687#issuecomment-467542577](https://github.com/ipfs-shipyard/ipfs-companion/pull/687#issuecomment-467542577) and made a prototype [https://codesandbox.io/s/14y8r7qjo3](https://codesandbox.io/s/14y8r7qjo3)
   - bl package merged feat: upgrade to stream 3 [#66](https://github.com/rvagg/bl/pull/66)
   - tar-stream bundle size
   - concat-stream bundle size
   - debugging libp2p windows ci job [#issues/41](https://github.com/dignifiedquire/borc/issues/41)
   - async iterators priority list [#1670](https://github.com/ipfs/js-ipfs/issues/1670)
   - fix: use the same timeout for mocha and karma-mocha [#338](https://github.com/ipfs/aegir/pull/338)
 - Blocked:
   - libp2p release
 - Next:
   - merge http-client bundle size PR
   - finish js-ipfs bundle size PR
   - multihashing-async async/await PR
   - async iterators
   - proper-lockfile mess


@zcstarr
 - Done:
   - js-datastore-fs PR https://github.com/ipfs/js-datastore-fs/pull/22
   - js-ipfs-repo address PR comments https://github.com/ipfs/js-ipfs-repo/pull/189
   - js-datastore-core PR https://github.com/ipfs/js-datastore-core/pull/17
 - Blocked:
 - Next:
   - js-datastore-fs test with js-datastore-core and fix test
   - js-ipfs-repo address PR comments and test with datastore-fs + core 
   - js-datastore-core PR fix CI build with js-datastore-core

@name
 - Done:
 - Blocked:
 - Next:

### Questions
- Can we add any libraries we create/find for async iterators updates to the async iterator issue to keep track of helpful libraries?
  - Yes, let's do that!

### Cross team updates

- @jimpick (Dynamic Data and Capabilities)
  - experimenting with IPNS on PeerPad pinner
  - excited about dagbuilder ... want to try some different approaches to append only logs
  - want to investigate simulation environment (Testlab?)
  - Adin is working on IPNS ideas
  
- @lidel (UI WG)
  - If you are interested in how we can make the IPFS Companion better, come have a chat in https://github.com/ipfs-shipyard/ipfs-companion/issues/689

### Other notes

- @jacobheun out next Monday (11/03)
- @vmx out next week (Tue - Sat: 2019-03-12/16) at FOSSGIS conference
