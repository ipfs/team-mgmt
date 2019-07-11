# 🚀IPFS Core Implementations Weekly Sync 🛰 July 8, 2019

- **Lead:** Molly Mackinlay (@momack2)
- **Notetaker:** @momack2
- **Attendees:**
  - @alanshaw
  - @vasco-santos
  - @andrew
  - @djdv
  - @lidel
  - @mhz
  - @mburns
  - @stebalien
  - @achingbrain
  - _@name_
- **Recording:** https://drive.google.com/drive/u/0/folders/1qP1h1yygjEKDAdyCZq6He3tdrMi4qEW_

## Agenda
- Ask everyone to put their name into the list of attendees
- Purpose of this meeting / topics to discuss
- How to organize this meeting
  - initiatives? :+1:
  - cross-team updates?
  - status updates?
- Blockers (from the async status update)
- General questions. Could be things like:
  - I'm stuck with something, I don't know who to ask. Who knows who to ask?
  - Who can help me with xyz?
- Plan for this week
  - Select issues to work on
- Review remaining parking lot topics if there is time left

## Notes

- Purpose of this meeting: combined core implementations meeting. We can come together as ask things of other team members; highlight blockers; etc
- a list of who is working on what would be super great! (where would this list be? who will pull it together?)
- attendees - want to make sure Raul and folks can join going forward
- Proposal: discuss blockers first?
- What is the standardized practice of tracking work? go and js do things differently, should we align?
- How track across task force teams
- initiatives and agenda are much more interesting to watch - having this on youtube and actually accessible/interesing is more useful if there's an agenda / focus
- how do we decide the initiatives? initiatives come from okrs from other teams 
- Next week: review list of OKRs from all [task groups] (<-- sorry, my brain, can't remember)


### Blockers
- go-ipfs is trying to cut an RC1 for a patch release
  - all infra is running patched releases
  - want to test this on infra - don't want to break current stabilize patches on infra
  - also want to send it to "early testers" to make sure it passes their tests
  - allocations, go routines, etc - put it under load and make sure things behave as expected
    - previously deployed to gateways and bootstrappers to put this under production environments
    - duplicating traffic and just blocking responses would also be ok
- delegated routine - make js-ipfs have delegated access to dht
  - want to expose some additional commands on the gateway port
  - there was a gateway configuration option that got merged to go-ipfs but the revs is still hardcoded
  - there were PRs that were closed without merging from lars
  - blocking people from running their own delegated router
  - also blocking our docs telling people it's a feature to use delegated routing - want go-ipfs to be able to do out of the box
- need to bubble up multicodec changes to go-ipfs
  - needs DRI on go-ipfs side - currently steven
  - need cid to be released and then nearly there
  - that enables bafy peer ids in dnslink? - after anything that parses a multiaddr should parse it as a cid
- @hannahhoward has a few PRs on bitswap performance before moving on to graphsync
  - goal is to increase transfer speed and reduce duplicates to tighly track peers in a session to max out what bitswap can do on its own
  - would like reviews on that PR
- error correction in bitswap could be interesting (but don't have time to pick that up)
- @achingbrain working on async iterator stuff in interface connection - figuring out which things don't have their dependencies done
  - has become an api refactor as well - not made much progress in a while
  - got blocked by ipfs camp work / reviews
  - vasco can pick this up and continue it
  - jake was working on DHT connection management (that is the known blocker - vasco is not yet pulled to help with that)
  - goal was to avoid multiple breaking changes in things built on top of connections
  - refactor api could introduce new bugs
  - alex could pick this up - would be helpful to pick this up sooner - so alex will do just the async await conversion
- @hugomrdias needs to be able to pass config on go deamon - https://github.com/ipfs/go-ipfs/issues/6262
  - tests will run twice as fast!
  - no merging, just being able to pass the config on the deamon command
  - dominic will take a stab at this
  

### Questions

- (@daviddias) Now that the Implementations Team is _one_ team, shall we have a "Weeks of Go-ipfs" and then a "Weeks of JS-ipfs" in which each team onboards the other one into the codebase to solve issues and contribute to code?
  - structured effort to walk each team through the other team's code base
  - like pair programming that is recorded by subsystem
  - where are the repos, what is there status, what are the known problems, what is different
  - do this for a few weeks until everyone feels more confident in the code base
  - folks would like to have time to prep for such a walkthrough - "this is the architecture of this component"
  - many components are complicated - if 1:1, can just go around for a while until folks understand
  - some areas really beneficial - ex changing config would be cool where folks from js can make changes in the go implementation and unblock that work
  - making these recorded would be really useful learning tools for the whole community
  - having a thought out presentation would be really really useful - and then can jump on mumble for 1:1 pair programming
  - a useful output from those sessions would be things to improve the spec for each sub system
  - David will take a stab at setting this up =]


### Parking Lot
- NA


### Week Update (for async review)
> Only post updates that are relevant to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️🌟

@name
 - Done:
   - What have you accomplished since the last Weekly?
 - Blocked:
   - Were there any blockers? If so, which ones? Is it still blocked? Why?
 - Next:
   - What is the next important thing you should focus on?

@daviddias
 - Done:
   - Pushed a revamped go-ipfs Release Flow https://github.com/ipfs/go-ipfs/pull/6482
   - Pushed proposal to dial a bit down the modularization in JS land https://github.com/ipfs/js-ipfs/issues/2222
 - Blocked:
   - Shall I wait for Consensus on the Release Flow or should I just take another stab at it, incorporating feedback and then calling for one last review?
 - Next:
   - Finalize the Release Flow
   - Standardize the Release Flow for both JS and Go?


@stebalien
  - Done:
    - Cut an RC1 for a _bugfix_ release.    
    https://github.com/ipfs/go-ipfs/pull/6484
    - Made go-ipfs work even with stale API files:
      - https://github.com/ipfs/go-ipfs/pull/6478
  - Blocked:
    - Getting the RC1 tested on our infra (which is currently running the "stabalize" branch).
  - Next:
    - Release IPFS v0.4.22 (patch).
    - Continue working with david and raulk on the release process and get it merged.
    - Figure out what needs to be done before we can start cutting releases again.
    - Retro the recent stability issues so we can all get on the same page.

@vasco-santos
  - Done:
    - Specification for DHT in libp2p introspection
      - [libp2p/notes#9](https://github.com/libp2p/notes/pull/9)
    - Gossipsub fallback to Floodsub
      - [libp2p/js-libp2p-floodsub#83](https://github.com/libp2p/js-libp2p-floodsub/pull/83)
      - [ChainSafe/gossipsub-js#34](https://github.com/ChainSafe/gossipsub-js/pull/34)
    - Updated `human-to-milliseconds`module
      - [ipfs/js-ipfs#2213](https://github.com/ipfs/js-ipfs/pull/2213)
    - Updated Reprovider DHT PR
      - [ipfs/js-ipfs#2184](https://github.com/ipfs/js-ipfs/pull/2184)
  - Blocked:
    - IPNS over Pubsub test failing on linux
      - [ipfs/interop#71](https://github.com/ipfs/interop/issues/71)
      - @hugomrdias will have a look
  - Next:
    - `js-libp2p` OKRs
    - Get remaining gossipsub PRs merged
      - [ChainSafe/gossipsub-js#34](https://github.com/ChainSafe/gossipsub-js/pull/34)
      - [libp2p/js-libp2p#365](https://github.com/libp2p/js-libp2p/pull/365)
      - [libp2p/js-libp2p-daemon#19](https://github.com/libp2p/js-libp2p-daemon/pull/19)
      - [libp2p/interop#17](https://github.com/libp2p/interop/pull/17)
    - Get back to async iterators
    - `js-libp2p` introspection work

@alanshaw
- Done:
    - Started reviewing PRs for GC [#2022](https://github.com/ipfs/js-ipfs/pull/2022)
    - Investigating crypto in insecure browser context [#149](https://github.com/libp2p/js-libp2p-crypto/pull/149)
    - Reviewing @lidel's gateway improvement PRs [#2217](https://github.com/ipfs/js-ipfs/pull/2217) [#2020](https://github.com/ipfs/js-ipfs/pull/2020) [#2227](https://github.com/ipfs/js-ipfs/pull/2227)
    - Hacking on ["lite" JS IPFS client](https://github.com/ipfs-shipyard/js-ipfs-http-client-lite)
- Blocked
    - 0.37 release is blocked on review changes [#2201](https://github.com/ipfs/js-ipfs/pull/2201)
- Next
    - Review proposed release flow
    - Unblock 0.37 release
    - Complete GC and perf profile reviews
    - Q3 OKRs
    - Re-visit the state of webrtc!?

@lidel
 - Done:
   - QA around Delegated Routing in js-ipfs (see `Gateway.APICommands`  in Blocked section)
   - HTTP Gateway improvements in js-ipfs 
     - add HTTP Gateway support for /ipns/ paths: https://github.com/ipfs/js-ipfs/pull/2020
     - fix(gateway): keep pretty URL and return implicit index.html https://github.com/ipfs/js-ipfs/pull/2217
     - fix(gateway): remove buffer-peek-stream https://github.com/ipfs/js-ipfs/pull/2227
 - Blocked:
   - Delegated Routing: we need people to be able to expose commands on Gateway port via `Gateway.APICommands` which is not wired to anything in go-ipfs right now:
        - Context: https://github.com/ipfs/js-ipfs/issues/2155
        - Problem: https://github.com/libp2p/js-libp2p/pull/371#pullrequestreview-255991314
   - IPNS in Base32: I think we need a new release of go-cid – https://github.com/ipfs/go-cid/pull/86#issuecomment-509302695
   - ENS interop: UX tweak for ENS integration in go-ipfs awaits review/merge: https://github.com/ipfs/go-ipfs/pull/6448
 - Next:
   - Push IPNS in Base32 forward – https://github.com/ipfs/go-ipfs/issues/5287#issuecomment-498349216
   - Back to Companion/Brave (p2p transport, local discovery)

@djdv
 - Done:
   - Attended IPFS Camp and spoke to lots of people about many things
   - Misc review & communications
 - Blocked:
   - N/A
 - Next:
   - Collecting and publishing notes, work plan, etc.
     - Related: https://github.com/ipfs/camp/blob/master/DEEP_DIVES/31-mounting-an-ipfs-filesystem.md
   - Coordinate with WG
   - Work around mounting IPFS, FS interfaces, etc.

@achingbrain
 - Done:
   - Created: https://github.com/libp2p/js-libp2p-delegated-content-routing/pull/7
   - Created: https://github.com/libp2p/js-libp2p-delegated-peer-routing/pull/8
   - Updated: https://github.com/libp2p/js-libp2p-crypto-secp256k1/pull/18
   - Updated: https://github.com/libp2p/js-libp2p-crypto/pull/131
 - Blocked:
   - Why has this stalled? https://github.com/libp2p/interface-connection/pull/29/files
 - Next:
   - Help out: https://github.com/libp2p/interface-connection/pull/29/files

<!-- After each call, the notetaker submits a PR to ipfs/team-mgmt to store the notes on the meeting-notes folder -->
