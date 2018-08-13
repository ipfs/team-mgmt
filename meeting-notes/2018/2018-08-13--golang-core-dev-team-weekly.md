# 💫Golang Core Dev Team Weekly Sync 🙌🏽 August 13, 2018

- **Lead:** David Dias
- **Notetaker:** @keks
- **Attendees:**
  - @stebalien
  - @diasdavid
  - @bigs
  - @Magik6k
  - @keks
  - @djdv
  - @hsanjuan
  - @johnnycrunch
  
- **Recording:** Recording is currently private to the Go Core Dev Team.

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

@stebalien
 - Done:
   - Reviewed a bunch of PRs
   - Responded to/triaged a bunch of issues
   - Fixed a few bugs
   - Notable: update gogo protobuf
 - Blocked:
   - https://github.com/multiformats/multiaddr/pull/68 <- @daviddias P3
   - https://github.com/multiformats/multiaddr/pull/68#issuecomment-401971665
 - Next:
   - More of the same
     - CIDv1
   - Finish the protocol negotiation spec


@diasdavid
 - Done:
   - Kick off the Go Core Dev Weekly Sync
   - Created https://github.com/ipfs/pm/blob/master/GOLANG_CORE_DEV_MGMT.md
   - Updated the go-ipfs and go-libp2p waffle boards and created the go-ipld one 
   - Go Core Dev Team Interviews (ongoing)
   - Proposed Lead Maintainer Protocol up for discussion
 - Blocked:
   - none
 - Next:
   - Continue doing the Go Core Dev Team Interviews
   - Encourage everyone to do some Waffle Grooming
     - rough time scale: 30min/wk


@marten-seemann (not attending)
 - Done: 
   - various QUIC improvements
 - Blocked:
   - not blocked by anything
 - Next:
   - re-evaluate TLS1.3 libraries for their use in QUIC
   
@kevina (not attending)
  - Done:
    - Add ability to retrieve blocks even if given using a different CID version (https://github.com/ipfs/go-ipfs/pull/5285)
    - Builder interface for CID https://github.com/ipfs/go-cid/pull/53 & https://github.com/ipfs/go-ipfs/pull/5375
    - Learned how to use gx-workspace and work with gx dependency managment in general
    - Various work towards Base32 CidV1 (see Other notes section)
  - Blocked:
     - Various aspects of Base32 CidV1 need feedback (see Other notes section)
  - Next:
     - Continue Base32 CidV1 work
     - Maybe add support for inlinling via the id-hash (https://github.com/ipfs/go-ipfs/pull/5281).
    
@lgierth (not attending)
- done
  - infra stuff, nothing go related
- blocked
  - nothing go related :)
- next
  - a few code reviews where i was summoned

@bigs
 - Done:
   - Research into virtual network topologies w/ openvswitch/iptools
     -> @daviddias introduce travis & jacobheun
   - DHT research group
 - Blocked:
   - Nothing
 - Next:
   - Durable implementation of namespaced virtual networking in go-netdef
   - Write rendered network config to a file for easy reversal
   - Learn virtual NATing?
   - Establish regular meetup for DHT research group

@Magik6k
 - Done:
   - Extract go-ipfs config
   - DHT SearchValues (getvalues but it streams)
   - key cmd coreapi refactor
   - ci gx deps dupes
 - Blocked:
   - ipfs p2p refactor on SetStreamHandler not erroring <- @stebalien
 - Next:
   - More coreapi command refactoring
   - Coverage from Jenkins
   - `ipfs name resolve --stream`

@keks
 - Done:
 	 - get go-ipfs-cmds#112 forward
   - rough gx-gomod draft
 - Next:
 	 - get go-ipfs-cmds#112 ready
   - udpate [go-ipfs branch](https://github.com/ipfs/go-ipfs/pull/5035) that uses go-ipfs-cmds#112
   - discuss gx-gomod with @whyrusleeping and @stebalien
     - @stebalien says: See https://github.com/whyrusleeping/gx/issues/179#issuecomment-408243162
       - The thought here is to turn gx into a "lockfile" manager and allow users to use their language's package manager for everything else.

@djdv
 - Done:
    - Windows `ipfs mount` foundations (WinFSP, cgo-fuse)
    - Read only`mount` support for /ipfs, /ipns, and /local(MFS)
 - Blocked:
    - https://github.com/golang/go/issues/18296
      - Prevents use from building on non-Windows without cgo
      - Having mutliple implimentations for the same subcommand seems non-ideal
 - Next:
   - Schedule to speak with David :^)
   - Impliment writable support for `ipfs mount`
   - Finish remaining Windows tagged `go-ipfs` issues, allowing me to switch focus to:
     - Other tasks (discuss with the team where we're lacking and see if I can fill)
     - Other platforms (BSD, Solaris, Haiku, Plan9, et al.)
     - Other Archs (arm, ppc, z/OS, pdp11, etc.)
     - Whatever seems important
 
@hsanjuan
- Done:
  - Submitted a style fix https://github.com/ipfs/go-ipfs/pull/5354
- Next:
  - Working on depth limited refs -r https://github.com/ipfs/go-ipfs/pull/5337 (more this week)


### Questions

### Other notes

**Base32 CidV1 Progress:**

@kevina has been working steadly toward the goal to switch to base32.  Go-ipfs now can retrive a block regadress of what CID version it is in.

He has created a a meta issue for tracking the progress in go-ipfs: https://github.com/ipfs/go-ipfs/issues/5358

He will continue to work steadly towards the goal but needs feedback on several issues:
  * Handling of Alternative Multibases [#5349](https://github.com/ipfs/go-ipfs/issues/5349) _(could use feedback from: @Stebalien @lidel @lgierth)_
  * How to handle CIDv0 as we migrate to CIDV1 [#5291](https://github.com/ipfs/go-ipfs/issues/5291) _(could use feedback from: @whyrusleeping @Stebalien)_
  * Create config option for specifying full default cidv1 parameters [#5230](https://github.com/ipfs/go-ipfs/issues/5230) _(could use feedback from: @whyrusleeping @daviddias)_
  
#5349 and #5230 and are the most pressing and blocking full multibase support in go-ipfs.  #5291 is less pressing but he would really appeciate @daviddias and @whyrusleeping insight.

For all issues and p.r. related to Base32 CidV1 search using the `cidv1b32` tag: https://github.com/ipfs/go-ipfs/labels/cidv1b32


<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
