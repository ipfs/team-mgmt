# 📦 Package Managers Weekly Sync

## October 15, 2019

- **Lead:** @achingbrain
- **Notetaker:** @momack2
- **Attendees:**
  - @achingbrain
  - @djdv
- **Recording:** https://youtu.be/zOPzQmP_mV4

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

## Updates

@achingbrain
- Done:
  - Published rc for js-IPFS@0.39.0
  - Automated all the things - [ipfs/js-ipfs#2528](https://github.com/ipfs/js-ipfs/pull/2528)
  - Added support for missing dag CLI commands - [ipfs/js-ipfs#2521](https://github.com/ipfs/js-ipfs/pull/2521)
  - Shore up tests - [ipfs/js-ipfs#2531](https://github.com/ipfs/js-ipfs/pull/2531)
- Blocked:
  - UnixFSv1.5 - pending @stebalien's proposal for metadata
- Next:
  - Make errors work in the browser - [ipfs/js-ipfs#2519](https://github.com/ipfs/js-ipfs/issues/2519)
    - fetch doesn't support http trailers - which is where our errors went
    - working to change our http api on js/go to fix this
  
@djdv
- Done:
  - Fixed issues around node construction and context inheritance
    - when the root was attached to by multiple clients, a close on either would cancel the context for all references
    - sub nodes would derive a context from their parent node, if the parent is closed, the sub node would also close. This has been separated so there is an fs-wide context and a file context instead.
    - node cloning functions try to be inexpensive copies of pointers to shared memory
      - optimization/caching potential exists around this
  - Reworked + added tests
  - Reworked how walk works, tries to (safely) modify where possible rather than duplicate node structures
- Blocked:
- Next:
  - iterate on PR review feedback / fixes
  - put up PR for write portions of the 9P plugin/server implementation

@momack2
- Done:
  - at Eth DevCon last week!
- Blocked:
  - send intro emails to guix/opensuse (who should I connect them to?)
    - blocked on finalizing unixfsv1.5 spec and getting writes somewhat working (though not necessarily fully tested / merged)
    - will check in again next week to make those connections (Alex<>guix & Dom<>OpenSuse)
- Next:

@dirkmc
- Done:
  - improved bandwidth efficiency of proof-of-concept bitswap implementation
    (reduce duplicate blocks)
- Next:
  - take advantage of block presence knowledge (HAVE / DONT_HAVE) to immediately
    trigger broadcast instead of waiting for timeout

@name
- Done:
- Blocked:
- Next:

### Notes
- merged into updates above
