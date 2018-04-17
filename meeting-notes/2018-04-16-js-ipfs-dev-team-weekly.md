# ⒿⓈ⚡️  js-ipfs Core Dev Team Weekly 2018-04-16

- **Lead:** Volker Mische (@vmx)
- **Notetaker:** Rob Brackett @Mr0grog
- **Attendees:**
  - @vmx
  - @fsdiogo
  - @hugomrdias
  - @vasco-santos
  - @travisperson
  - @Mr0grog
  - @jacobheun
  - @dryajov
  - @achingbrain
  
- **Recording:** https://youtu.be/kmo3HwAiK9g

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

(Notes inline)

@vmx
- Done:
  - Flow types + AEgir
  - IPLD spec
- Blocked:
  - IPLD spec PR review (all current open PRs at https://github.com/ipld/interface-ipld-format/pulls)
- Next:
  - JS IPFS CLI for DAG API
  - Digging into Bitswap

- Notes
  - Trying to get Flow into Aegir so it's easy for people to use/set up in other projects
  - Working on bitswap for _Graphsync_ next


@fsdiogo
- Done:
  - https://github.com/ipfs/js-ipfs-api/pull/735
  - https://github.com/ipfs/js-ipfs-unixfs-engine/pull/210
  - https://github.com/ipfs/js-ipfs/pull/1310
  - https://github.com/ipld/js-ipld-dag-pb/pull/66
  - https://github.com/ipfs/aegir/pull/214
- Blocked:
  - Waiting for AEgir PR to be merged
  - Update IPFS deps and relase new version
- Next:
  - Level up the Exchange Files example

- Notes
  - Whole bunch of PRs to clean up the uglify name mangling issue, now trying to get it into Aegir (IPFS will need to update its dependency on Aegir afterward)


@hugomrdias
- Done:
  - Better error message on the CLI and small improvements
- Blocked:
- Next:
  - aegir browser build
  - CLI should accept content from stdin
  - further improvements to the cli using go cli as reference

- Notes
  - Using CLI review work to get a good introduction and understanding of all the code
  - More CLI stuff next: help text
  - vmx: I’m working on DAG API, how can I coordinate with your CLI work?
    - hugomrdias: Just put your stuff up. I am working on a PR that needs some review on the fundamental approach, so it's kinda speculative. You should just keep working while we discuss that.
  - vmx: My new flow stuff requires a build step, so there may be overlap; we should coordiante


@vasco-santos
- Done:
  - Issue 1213 - Add IPFS_PATH
    - https://github.com/ipfs/js-ipfs/pull/1302
  - PR 1005 - Support hash algorithm parameter in files add
    -  https://github.com/ipfs/js-ipfs/pull/1308
  - Analysis of ipfs/ipfs-service-worker and IPNS implementation (GO), in order to prepare for OKRs.
- Blocked:
  - Browser Gateway OKR Requirements
    - https://github.com/ipfs/ipfs-service-worker/issues/11
  - Issue 581 - ipfs behind a proxy
    - https://github.com/ipfs/js-ipfs-api/issues/581
  - Issue 712 - multiaddr support with DNS
    - https://github.com/ipfs/js-ipfs-api/issues/712
  - Issue 529 - dht.findprovs uniformization between GO and js-ipfs-api
    - https://github.com/ipfs/js-ipfs-api/issues/529
- Next:
  - Blocked Issues
  - Start Browser Gateway OKR implementation
  
- Notes:
  - Need feedback/approval/opinions on PRs
  - Need clarification on service worker requirements from @diasdavid


@Mr0grog
- Done: Just poking around reviewing docs on various PRs
- Blocked: Nothing
- Next: Main work is in docs repo ATM on https://github.com/ipfs/docs/issues/60 if anyone has input


@achingbrain
- Done: stream slicing PRs, mfs ls, mfs mkdir, mfs stat
- Blocked: stream slicing PRs
- Next: mfs write, mfs read, make ls/mkdir/stat feature complete

https://github.com/ipfs/js-ipfs-mfs
https://github.com/ipfs/js-ipfs-api/pull/734
https://github.com/ipfs/js-ipfs-unixfs-engine/pull/209
https://github.com/ipfs/js-ipfs/pull/1231

- Notes:
  - Need review on stream slicing PRs


@jacobheun
- Done:
  - Created PR for adding custom lock to ipfs-repo
  - Read through the code and spec for implementing the private network. Will continue development on that this week.
- Blocked: Nothing
- Next: 
  - Finish custom lock and example PRs with feedback
  - Continue work on private network


@dryajov:
- Done:
  - refactor libp2p-mplex using pull streams: #20
    - most tests passing across most repos (but still need to get it to 100%)
    - libp2p - still have the issues with the one failing test (circuit relay, but don't seem to be related to circuit)
    - interop and js-ipfs all tests are passing except some tests failing in the browser (still looking into whether they are related to the new mplex implementation)

- Next:
  - circuit-relay (NAT)


### Questions

(None)


### Further Notes

Victor: Re: @vasco-santos on DNS multiaddr -- it hasn't been expanded beyond basic use cases, doesn't yet have a proper spec
- It's possible multiaddr doesn't support exactly what you need right now, so we may need to add it (or to multiaddr-net)

wraithgar - Doing work on some Dapp support, will be working on getting his open PRs closed this week as well as continue work on his OKRs as availability permits
