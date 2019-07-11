# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 June 24, 2019

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @vmx
  - @alanshaw
  - @jacobheun
  - @dirkmc
- **Recording:** https://youtu.be/gf4noYI2hbs

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

@vasco-santos (not attending)
  - Done:
    - libp2p and IPFS presentations in Aveiro University
    - Prepared libp2p (focused on JS) presentation for OPO.js
    - Reprovider work for DHT
      - [ipfs/js-ipfs-bitswap#199](https://github.com/ipfs/js-ipfs-bitswap/pull/199)
      - [ipfs/js-ipfs#2184](https://github.com/ipfs/js-ipfs/pull/2184)
  - Blocked: N/A
  - Next:
    - OPO.js final preparation and presentation
    - Get DHT reprovider PRs ready for review
    - Add interop tests for hyprid pubsub network
      - [libp2p/interop#17](https://github.com/libp2p/interop/pull/17)

@vmx
  - Done:
    - Compiled C based Rabin chunker to WASM to see if it's faster than https://github.com/hugomrdias/rabin-wasm/. It is not.
  - Blocked:
    - Making js-ipld promisfy/`new Promise()` free is blocked on: https://github.com/alanshaw/ipld-in-memory/pull/1
  - Next:
    - Upgrading IPLD to async/await based ipfs-repo
    - Possible removing named links from dag-pb: https://github.com/ipld/js-ipld-dag-pb/pull/141#issuecomment-503623854

@dirkmc
 - Done:
   - Fixed some pinning bugs in go-ipfs [go-ipfs#6428](https://github.com/ipfs/go-ipfs/issues/6428)
   - Created an issue about js-ipfs blocks that are used internally by the pinner being shared on bitswap [js-ipfs#2179](https://github.com/ipfs/js-ipfs/issues/2179)
   - Working on improving pinning performance
 - Blocked:
 - Next:
    - Continue working on improving pinning performance

@jacobheun
  - Done:
    - Some IPFS Camp stuff, was mostly out last week
    - Created PR for delegated routing support in [js-ipfs#2195](https://github.com/ipfs/js-ipfs/pull/2195)
  - Blocked: Nope
  - Next:
    - Finishing up IPFS Camp workshop
    - At IPFS Camp Thur/Friday

@alanshaw
  - Done:
      - IPFS Team Week
  - Blocked:
  - Next:
      - Release 0.37 [#2192](https://github.com/ipfs/js-ipfs/issues/2192)
      - Final prep for IPFS Camp
          - Core Course A
          - Deep Dives almost locked and loaded

### Questions

- Can we have the delegated routing nodes not enabled by default yet, since they are using the preload nodes?
  - Yes! We can make it so that if no Delegate addresses are specified in the config, we don't enable it. This will allow users to configure delegates as needed, and hopefully encourage people to run their own delegate nodes.

### Cross team updates

None.

### Other notes

@vasco-santos: unavailable 24th June (Public Holiday)

@vmx: unavailable next two weeks 2019-07-01/12

@dirkmc: in Cuba July 4th - 8th (no internet)
