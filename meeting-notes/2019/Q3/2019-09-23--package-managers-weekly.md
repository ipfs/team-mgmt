# 📦 Package Managers Weekly Sync - Sept 24, 2019

- **Lead:** @mhz
- **Notetaker:** @momack2
- **Attendees:**
  - @djdv
  - @andrew
  - @dirkmc
  - @stebalien
- **Recording:**

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
  - OKR Draft: https://github.com/ipfs/team-mgmt/pull/1041

## Updates

@name
- Done:
- Blocked:
- Next:

@djdv (subset copy pasted from core impl notes)
- Done:
  - bugfixes in regard to the experimental mount PR around context inheritance, and stat operations (https://github.com/ipfs/go-ipfs/pull/6612)
  - Helping with multiaddr-net thing (unix sockets on Windows) https://github.com/multiformats/go-multiaddr-net/pull/60
  - talked about UnixFS v1.5 requirments for immediate user usecases in a design discussion call
- Next:
  - Still working on refining mount PR
    - currently not following the protocol standard perfectly
    - still needs a better context model
    - intend to have functional IPNS write support this week

@momack2
- Done: Project Level Q4 OKRs
- Blocked: Q3 OKR grading?
- Next: Offline Camp

@stebalien
  - Done:
    - An alternative OKR draft (to get something started): https://github.com/ipfs/team-mgmt/pull/1041
    - Reviews as usual
  - Next:
    - go-ipfs 0.4.23, again (hopefully I'll have time to handle it this week)
    - Review the pubsub work.
    - Fix the go integration tests on the "stabilize" branch.
    - Sync with andrew so I can better make technical decisions WRT go-ipfs.
    - Look through dirk's bitswap proposal.

@dirkmc:
- Done:
  - Created [go-bitswap issue](https://github.com/ipfs/go-bitswap/issues/197) about ordering response blocks
- Next:
  - Implement above issue as part of [Bitswap protocol improvements PoC](https://github.com/ipfs/go-bitswap/pull/189)



-


### Notes
- npm-on-ipfs - need infra support in order to make this experience better (not blocked on performance improvements)
  - need documentation on npm-on-ipfs's current state!
  - not clear whether we actually *intended* to launch this in
  - running npm-on-ipfs runs into locks if already watching js-ipfs because tries to spin up another IPFS node
    - need to avoid these usability issues

- Need to use sync meeting on Friday to finalized OKRs