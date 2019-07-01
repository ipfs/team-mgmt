# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 July 1, 2019

- **Lead:** @jacobheun
- **Notetaker:** @jacobheun
- **Attendees:**
  - @vasco-santos
  - @momack
- **Recording:** https://youtu.be/7zmZvy_pDH0

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
   - IPFS Camp prep
   - Ran course at [IPFS Camp](https://github.com/ipfs/camp)
 - Blocked:
 - Next:
   - Get some libp2p thoughts from IPFS Camp written down
   - Weigh in on Q3/Q4 libp2p OKRs goals
   - Work on getting webrtc transport into js-ipfs by default
   - Add strict message signing verification to pubsub for gossipsub roll out
   
@vasco-santos
  - Done:
    - Moved to Berlin
    - Reprovider DHT
      - [ipfs/js-ipfs-bitswap#199](https://github.com/ipfs/js-ipfs-bitswap/pull/199)
      - [ipfs/js-ipfs#2184](https://github.com/ipfs/js-ipfs/pull/2184)
    - Fix test failing
      - [ipfs/js-ipfs#2205](https://github.com/ipfs/js-ipfs/pull/2205)
  - Blocked: N/A
  - Next:
    - Libp2p OKRs planning
    - Add fallback for floodsub on gossipsub
    - Add interop tests for hyprid pubsub network
      - [libp2p/interop#17](https://github.com/libp2p/interop/pull/17)
    - Get back to async iterators

### Questions

- @jacobheun: Should we move pubsub our of experimental as part of the move to Gossipsub?
  - @vasco-santos: It's a new implementation so maybe we should wait?
  - @jacobheun: I think if we get message signing verification in place we should be able to comfortably move it out of experimental. There may be some bugs, but aside from verification there shouldn't be any major issues doing so.
  - @vasco-santos: Yes, that works.
