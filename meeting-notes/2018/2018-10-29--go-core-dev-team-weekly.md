# 💫Golang Core Dev Team Weekly Sync 🙌🏽 October 29, 2018

- **Meeting Lead:** @eingenito
- **Notetaker:**
- **Attendees:**
  - bigs
  - erikingenito
  - hannah howard
  - warpfork
  - djdv
  - Adin Schmahmann
  - Molly Mackinlay
  - David Dias
  - Kevin Atkinson
  - Hector Sanjuan
  - Travis Person
- **Recording:** _add link to recording once it's online_

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

@name
 - Done:
 - Blocked:
 - Next:


@marten-seemann

- Done: completed the switch to tls-tris for QUIC (still a bunch of issues to fix though)
- Blocked: nothing
- Next: preparing for the IETF meeting next week

@schomatis (not attending)
- Done:
  - Solved some issues and reviewed PRs on UnixFS and related components.
  - Reviewed more UnixFS/MFS code.
- Next: Coordinate with Rob to start producing some IPFS Files documentation.

@warpfork
 - Done:
   - a few hours on refmt obj traversal improvements.
   - researching prior art for IPLD schemas (protobuf, graphql, fuchsia FIDL) and gathering notes
     - did you know?  basically nobody allows non-string map keys
     - did you know?  graphql actually doesn't support maps at all (just structs)
   - some experimental code for internal reprs of a type system.  just exploring.
   - reading up on alternative chunkers.  need to digest more.  (ex; adler32 vs buzhash; casync switched from former to latter: why?)
 - Blocked:
   - more concrete IPLD data model specs is still on the wishlist.
 - Next:
   - need to do some PR reviewing (ex: ipld dagwalker)
   - figure out where to land some of these notes and design sketches for IPLD
  
@travisperson
 - Done:
     - first pass at updating iptb
 - Blocked: N / A
 - Next:
     - Mauppdate iptb with a few fixes
     - update iptb to match ipfs gx deps
     - release iptb 2.0
  
@aschmahmann
 - Done:
   - Basic ID-based message passing/protocol structure
  - Research on GraphSync and planning next steps for graph synchronization related to multi-writer files
 - Blocked:
 - Next:
  - Implement basic graph synchronization
  - Work towards testing framework

@djdv
 - Done:
   - email/response catch up
   - various FUSE improvements
   - reviews
   - reading up on components /subsystems
 - Blocked:
   - None this week, some next week
 - Next:
   - Handle some outlying PRs (my own)
   - more reviews
   - focus on bitswap effort
   
@kevina
  - Done:
    - First attempt at converting Provider/FindProvider to use multihashes (https://github.com/libp2p/go-libp2p-routing/issues/32)
  - Blocked:
    - `--cid-base` option p.r. needs review (https://github.com/ipfs/go-ipfs/pull/5464)
      right now I just need feedback on the general approach
    - Need feedback and guidance on converting Provider/FindProvider to use multihashes 
  - This Week:
    - Continue work on Provider/FindProvider
    - Try to get `--cid-base` option p.r. in
    - Help out with code review

@stebalien
 - Done:
    - Fixed race in query events (https://github.com/libp2p/go-libp2p-routing/pull/31)
    - Cut 0.4.18-rc1
    - Added a delay to calling FindProviders in bitswap.
    - Lots of testing of ipfs/go-bitswap#8
    - Fixed another yamux race (libp2p, technically)
    - Got everyone to agree on making ds.Delete idempotent for now :)
    - Fixed a ancient race in the mock network.
    - Buffered bitswap writes (don't send two packets per wantlist!).
    - Got pubsub signing support into go-ipfs
    - Fixed encoding of errors WRT MakeTypedEncoder.
    - Fixed pin-lock bug in `ipfs dag put`
 - Asks:
    - Need review of ipfs/go-ipfs-config#16
    - Please review commands-lib update PRs.
 - This week:
    - Cut a release.
    - Spend a bit more time on libp2p things (reviewing auto-relay stuff, dialer
      stuff, etc.). Preparing for a go-ipfs release took over my week last week.
     
@eingenito
 - Done:
 	- working on bitswap benchmarking sharness tests
	- Understanding bitswap code/protocol	
 - Blocked:
 - Next:
 	- Get a rudimentary benchmark checked in and start using it to test bitswap changes.
  - Iterop testing of the new RC

@hannahhoward
 - Done:
 
   - RevReviewed and discussed Bitswap PR, decisions is no merge, but extract parts
   - Discovered issue with bitswap sessions not running due to code changes
   - Worked on Bitsw testing with @eingenito
 - Blocked:
   - n/a
 - Next:
   - Fix Bitswap sessions using extracted file from PR
   - Extract testing from PR

@hsanjuan
 - Done:
   - Un-force Batching in impoters. Enable explicitally on go-ipfs: https://github.com/ipfs/go-ipfs/pull/5626
     - Needs merging in go-ipfs
     - Everything else (dep-tree) is merged

@bigs
 - Done:
   - Daemon DHT protocol spec
   - Testbed coordination with Jacob
   - Workplan for new libp2p contractor
 - Blocked: n/a
 - Next:
   - Second round review on dialer
   - Kickoff call for testbed work with Jacob
   - Finish DHT protocol spec
   - Code review autorelay/autonat once again
   - Services design disiscussion
   
@momack2
 - Done:
   - IPFS Project roadmap moved one step forward! All go-ipfs core should an email in their inbox to schedule a time to dive in deeper!
 - Blocked: n/a
 - Next:
   - Itterate on Roadmap resources (for WGs and the wider org)
   - KPIs and other project WG planning


### Questions
- @aschmahmann: Are there examples or "standard" ways that we implement message passing between peers? I recently built a basic message passing structure for synchronizing graphs using protobuf, but it feels like these structures must already exist elsewhere.
  - Answer: no. We usually open a stream, write a message, read a response (and use protobufs). However, I would *like* a more standardized request framework...

### Other notes

- @aschmahmann's question precipitated a conversation about how to best tter coordinate between the Go and JS initiatives. @stebalien said that there has historically been poor communication between the JS and Golang efforts. @daviddias suggested perhaps joining the Go and JS weekly calls every other week (on week together next week separate) so that there's a time when everyone can discuss work underway and what cross project decisions need to be made. @eingenito suggested perhaps a brief weekly meeting where specific interop or group decisions are considered. Meeting wrapped up without conclusion but we'll create an issue to figure out exactly how to proceed. 
