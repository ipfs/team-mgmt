# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 February 25, 2019

- **Lead:** @jacobheun
- **Notetaker:** @jimpick
- **Attendees:**
  - @jacobheun
  - @jimpick
  - @vmx
  - @zcstarr
  - @vasco-santos
  - @aschmahmann
  - @hugomrdias
  - @mikeal
  - @lidel
  - @pkafei
- **Recording:** https://youtu.be/90WT0P6zSns

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
  - [WIP] pull-mplex PR to js-ipfs
    - branch for ipfs/interop that needs validation
  - js-multiaddr now supports the unix protocol [js-multiaddr#v6.0.5](https://github.com/multiformats/js-multiaddr/releases/tag/v6.0.5)
  - js-libp2p config is less restrictive on transports [js-libp2p#329](https://github.com/libp2p/js-libp2p/pull/329)
  - fixed pull-mplex issue with high throughput streams (file exchange) [pull-mplex#8](https://github.com/libp2p/pull-mplex/pull/8)
  - libp2p-daemon updates [daemon#10](https://github.com/libp2p/js-libp2p-daemon/pull/10)
    - multiaddr listening support
    - listen and announce address support
    - control over TCP sockets
    - will also run with a websocket transport enabled
 - Blocked:
  - [highlight.js#1984](https://github.com/highlightjs/highlight.js/issues/1984), an aegir dependency, is failing installs
 - Next:
  - Finish pull-mplex interop testing for js-ipfs
  - Better support for listen/announce/noAnnounce addresses in libp2p [libp2p#202](https://github.com/libp2p/js-libp2p/issues/202)

@vmx
 - Done:
   - IPLD Selectors: Implemeting what is outlined here: https://github.com/ipld/specs/pull/95
   - Write up on how libp2p could be use for more complex protocols: https://github.com/ipld/specs/issues/101
   - Incorporated review comment on the new JS IPLD API: https://github.com/ipld/js-ipld/pull/190 It really made the code a lot nicer to read
 - Blocked:
   - Nope
 - Next:
   - Hopefully getting the new JS IPLD API merged
   - More IPLD Selectors work

@vasco-santos
- Done:
  - libp2p interop
    - libp2p interop tests setup and connect merged
      - [libp2p/interop#4](https://github.com/libp2p/interop/pull/4)
    - libp2p dht interop tests in progress
  - moved a bunch of repos to travis CI
  - libp2p error codes for pubsub and dht
    - [libp2p/js-libp2p#328](https://github.com/libp2p/js-libp2p/pull/328)
- Blocked:
  - [highlight.js#1984](https://github.com/highlightjs/highlight.js/issues/1984), `npm install` is not working
- Next:
  - Debug CPU usage on the sky in `js-ipfs`
  - Migrate last repos to travis CI
  - libp2p interop tests
    - finish dht interop tests
    - add pubsub support on [libp2p/js-libp2p-daemon-client](https://github.com/libp2p/js-libp2p-daemon-client) and [libp2p/js-libp2p-daemon](https://github.com/libp2p/js-libp2p-daemon)
    - start pubsub interop tests

@hugomrdias
 - Done:
   - finish libp2p bundle size PR
   - travis debugging on windows
   - reviewed travis support feedback
   - lots of travis PR reviews
   - ipfs-http-client bundle size PR
   - created a new module pull-to-stream [hugomrdias/pull-to-stream](https://github.com/hugomrdias/pull-to-stream)
   - js-ipfs bundle size PR
 - Blocked:
   - libp2p release
   - highlight.js issue
 - Next:
   - finish js-ipfs bundle size PR 
   - benchmarks integration into CI
   - multihashing-async async/await PR

@aschmahmann
 - Note: I'm collecting feedback on relative importance of IPNS improvements [here](https://docs.google.com/document/d/1fkHofmPDHHpcMsXF22Kf3O6q9POM02bQ4BCcePp0roA/edit?usp=sharing)

@zcstarr
 - Done:
 	- PR for async/await datastore-fs https://github.com/ipfs/js-datastore-fs/pull/22
 - Blocked:
 - Next:
  - address any comments for datastore async/await PRs and an async PR for datastore-core 
 
 @lidel
 
 - Done:
 	- (is-ipfs) PR to add multiaddr check: https://github.com/ipfs/is-ipfs/pull/27
 - Blocked:
    - (already mentioned) `npm install` broken by highlight.js https://github.com/ipfs/aegir/issues/336
    - (js-mafmt) allow Buffer input https://github.com/multiformats/js-mafmt/pull/39
 - Next:
    - revisit chrome.sockets APIS in Brave with hapi 18

Others:
 - Dirk: worked on the migration to async await on ipns / dht
 - Shoku
 - Mikeal: Collecting github metrics for growth
 - Portia: refactoring promise / await

### Questions

- Adin: process for migrating gossipsub into core?
  - Vasco: plan is for end of march
- Jacob: look at shrinkwrap on aegir (related to highlight.js breakage)
  - Hugo: aegir might not be the best place to try it out
  - Jacob: aegir has breakage now
  - Hugo: package-lock.json is another approach

### Other notes

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
