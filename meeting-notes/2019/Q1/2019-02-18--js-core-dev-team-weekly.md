# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 February 18, 2019

- **Lead:** @jacobheun
- **Notetaker:** @alanshaw
- **Attendees:**
  - @vmx
  - @alanshaw
  - @vasco-santos
  - @lidel
  - @achingbrain
  - @hugomrdias
  - @jimpick
  - @zcstarr
- **Recording:** https://youtu.be/I5CC112SkYY

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
    - js-datastore-s3@0.2.3 now has a convenience method for more easily creating S3 backed IPFS Repos. See the [updated example](https://github.com/ipfs/js-datastore-s3/blob/v0.2.3/examples/full-s3-repo/index.js#L3-L18) for more details.
      - Added this to the ipfs npm registry mirror [ipfs-npm-registry-mirror#8](https://github.com/ipfs-shipyard/ipfs-npm-registry-mirror/pull/8)
    - pull-mplex initial release [0.1.0](https://github.com/libp2p/pull-mplex/releases/tag/v0.1.0)
      - Added to the js-libp2p-switch test suite [libp2p-switch#305](https://github.com/libp2p/js-libp2p-switch/pull/305)
    - Migrated some modules over to Travis from Jenkins. Updates at [ipfs/aegir#329](https://github.com/ipfs/aegir/issues/329)
      - wrtc fails on Windows in Travis, tracking this in [libp2p#324](https://github.com/libp2p/js-libp2p/pull/324). Possibly a missing drivers issue.
    - Released [libp2p-circuit@0.3.5](https://github.com/libp2p/js-libp2p-circuit/releases/tag/v0.3.5) which fixes a bug with source/destination peer validation.
  - Blocked:
  - Next:
    - Roll out pull-mplex to js-ipfs. Tracking at [pull-mplex#7](https://github.com/libp2p/pull-mplex/issues/7)
    - Better support for listen/announce/noAnnounce addresses in libp2p [libp2p#202](https://github.com/libp2p/js-libp2p/issues/202)

@alanshaw

- Done:
    - CI to travis switch for `js-ipfs-http-client` [#943](https://github.com/ipfs/js-ipfs-http-client/pull/943)
    - Updated `name-api` example for `js-ipfs-http-client` [#944](https://github.com/ipfs/js-ipfs-http-client/pull/944)
    - Updated `bundle-webpack` example for `js-ipfs-http-client` [#945](https://github.com/ipfs/js-ipfs-http-client/pull/945)
    - Progress on letting users know of module rename `-api` => `-http-client`
        - Now exists script to get data on maintainers and repos! 🚀
            - https://github.com/ipfs/js-ipfs-http-client/issues/929#issuecomment-463416864
    - Debugging issue with JS IPFS nodes not being able to access content via preload servers [#1874](https://github.com/ipfs/js-ipfs/issues/1874)
        - Opened issue here: [go-bitswap#68](https://github.com/ipfs/go-bitswap/issues/68)
    - Started work on [mplex-it](https://github.com/alanshaw/mplex-it) (SUPER early days)
        - Using `bl` to avoid buffer concats
        - Fun times experiment using a `Proxy` to allow [`varint` to take a `bl` instead of a `Buffer`](https://github.com/alanshaw/mplex-it/blob/873010147515f95424abe9ca1a7365d5410e5176/src/lib/coder/decode.js#L16-L18) 🎭
        - Plan to expose a pull stream facade for easy switchout
        - Currently has a working (tests passing) [encoder and decoder](https://github.com/alanshaw/mplex-it/tree/master/src/lib/coder)
- Blocked:
    - Bitswap is not sending wanted blocks https://github.com/ipfs/go-bitswap/issues/68 **ALL** JS IPFS nodes cannot access content
- Next:
    - Continue work on `mplex-it` or CIDv1 base32
    - Not in Wednesday or Thursday so will be low output week 😢


@vmx
 - Done:
   - Build a DAG from a text file: https://github.com/vmx/dagbuilder
     - Examples for those DAG text files: https://github.com/vmx/js-ipld-selectors/tree/master/test/fixtures
   - Visualise such a DAG with Graphviz: https://github.com/vmx/ipld-graphviz
   - WIP implementation of the selectors: https://github.com/vmx/js-ipld-selectors
 - Blocked:
   - Nope
 - Next:
   - (Hopefully) Adressing new JS-IPLD review comments

@vasco-santos

- Done:
  - libp2p interop
    - libp2p go dependency released with support for Linux, Mac OS and Windows [libp2p/npm-go-libp2p-dep#1](https://github.com/libp2p/npm-go-libp2p-dep/pull/1)
    - libp2p interop tests setup and connect ready
      - [libp2p/interop#4](https://github.com/libp2p/interop/pull/4)
    - Fixes / Improvements:
      - [libp2p/js-libp2p-daemon-client#3](https://github.com/libp2p/js-libp2p-daemon-client/pull/3)
      - [libp2p/js-libp2p-daemon#6](https://github.com/libp2p/js-libp2p-daemon/pull/6)
      - [libp2p/js-libp2p-daemon#8](https://github.com/libp2p/js-libp2p-daemon/pull/8)
  - libp2p-gossipsub initial implementation review [libp2p/npm-go-libp2p-dep#1](https://github.com/libp2p/npm-go-libp2p-dep/pull/1)
  - DHT in browser
    - [ipfs/js-ipfs#1879](https://github.com/ipfs/js-ipfs/pull/1879)
- Blocked: N/A
- Next:
  - Debug CPU usage on the sky in `js-ipfs`
  - Migrate repos to travis CI
  - libp2p interop tests
    - add dht interop tests
    - add pubsub support on [libp2p/js-libp2p-daemon-client](https://github.com/libp2p/js-libp2p-daemon-client) and [libp2p/js-libp2p-daemon](https://github.com/libp2p/js-libp2p-daemon)

@hugomrdias
 - Done:
   - spent a lovely week with the london crew
   - lots of "move to travis.com"
     - check [ipfs/aegir#329](https://github.com/ipfs/aegir/issues/329) for progress
   - ipfs benchmarks integration into Travis 
   - lots of infra chats
 - Blocked:
 - Next:
   - bundle size PRs
   - travis bundle size integration
   - finish benchmarks travis integration

@zcstarr
 - Done:
		- Out of pocket this past week
 - Blocked:
 - Next:
 		- address PR comments https://github.com/ipfs/js-ipfs-repo/pull/189
 		- datastore-fs PR for awesome async

@achingbrain
 - Done:
   - Investigated memory leak
   - Tidied up promise use in [unixfs-exporter](https://github.com/ipfs/js-ipfs-unixfs-exporter/pull/17) and [mfs](https://github.com/ipfs/js-ipfs-mfs/pull/40)
   - Travis migration for unixfs/mfs
   - npm-on-ipfs blog post
   - Added monitoring to ipfs-npm-registry-mirror
 - Blocked:
   - n/a
 - Next:
   - pubsub on ipfs-npm-registry-mirror only works for an hour
   - Enable webworker in Travis migration for unixfs/mfs

### Questions

* @alanshaw why would a dag be in a text file?
    * @vmx: [dagbuilder](https://github.com/vmx/dagbuilder) is for creating fixtures for testing. Examples: https://github.com/vmx/js-ipld-selectors/tree/master/test/fixtures
* @alanshaw how does ipld-graphvis differ from graph in ipld-explorer in the webui?
    * @vmx: it allows you to explore the full graph
* @lidel should we allow windows target to fail?
    * @hugomrdias depends on your needs, by default no
    * Windows on Travis is beta atm so there might be issues we can't resolve
    * @hugomrdias will add documentation on how to configure Travis to skip windows to the [Travis migration tracking issue](https://github.com/ipfs/aegir/issues/329)

### Other notes

Good news, @achingbrain didn't find a memory leak, it was reading from npm too quickly and buffering it up!

* @alanshaw OOO Wednesday & Thursday
* @vasco-santos OOO Thursday afternoon & Friday
* @achingbrain OOO From Wednesday and all next week
