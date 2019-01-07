# 💫Golang Core Dev Team Weekly Sync 🙌🏽 January 7, 2019

- **Lead:** @eingenito
- **Notetaker:**
- **Attendees:**
  - _attendee names..._
  - @mgoelzer
  - @aschmahmann
  - @momack2
  - @stebalien
  - @michaelavila
  - @daviddias
  - @bigs
  - @djdv
  - @kevina
  - @warpfork
- **Recording:** _add link to recording once it's online_

## Agenda

- Ask everyone to put their name into the list of attendees
- Round of updates
  - What have you accomplished since the last Weekly?
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
  - What is the next important thing you should focus on?
  - How much fun did you have working on ipfs/ipld/libp2p last week?
- Ask for general questions. Could be things like:
  - I'm stuck with something, I don't know who to ask. Who knows who to ask?
  - Who can help me with xyz?
- Plan this week
  - Is anybody looking for work?
  - Are the high priority issues that need attention? 
- New meeting format proposal (https://github.com/ipfs/team-mgmt/issues/827) - @stebalien
  - Meeting:
    1. Blockers/asks (no updates)
    2. Announcements
    3. Agenda
  - Async:
    - Every large endeavor gets a meta issue ("epic issue").
    - Updates are posted in these issues.
- Gateway Issue - @stebalien
  - Believed to be https://github.com/ipfs/go-bitswap/issues/53
    - We're not connecting to providers.
    - Deeper issue: we should be reconnecting to peers in a session.
- CORs - @stebalien
  - Our CORs headers are a bit of a mess.
  - Separate implementations for the gateway/api
  - Some fixes, not all: https://github.com/ipfs/go-ipfs/pull/5893
- GUIX package manager adoption of IPFS (@hsanjuan)
  - Sent email to wg mailing list
  - :D :D :D :D  (eric reaction)
- Cut a release: https://github.com/ipfs/go-ipfs/issues/5867


## Notes

### Week Update

@marten-seemann:
  - Done: 
    - proposed a better mechanism for transport key updates in QUIC
    - found a DoS vulnerability in the current QUIC specification and proposed a solution
    - started interop testing with other draft-17 QUIC implementations. Still *a lot* of work to do, but this already proved hugely benefitial in finding issues
    - fixed tons of issues in quic-go
  - Blocked: ---
  - Next: focussing on interop testing for now

@Magik6k:
 - Done:
    - A Bunch of reviews
    - Ran go-ipfs in web browser - https://github.com/ipfs/go-ipfs/pull/5878 (WIP)
    - Global --offline option - https://github.com/ipfs/go-ipfs/pull/5825 (Merged)
    - go-ipfs-files refactor finally merged - https://github.com/ipfs/go-ipfs/pull/5661 (Merged)
    - Improved `gx deps dupes` - https://github.com/whyrusleeping/gx/pull/220 (Merged)
    - Some CoreAPI cleanups:
      - Less string CIDs in CoreAPI - https://github.com/ipfs/go-ipfs/pull/5854 (Merged)
      - Move tests to interface package - https://github.com/ipfs/go-ipfs/pull/5865 (Merged)
    - Init config with /ws addresses - https://github.com/ipfs/go-ipfs-config/pull/24 **(Needs Review)**
    - Local Gateway (Gateway.NoFetch) - https://github.com/ipfs/go-ipfs/pull/5649 **(Needs Review)**
    - Make CoreAPI tests not crash with go-ipfs-http-api - https://github.com/ipfs/go-ipfs/pull/5900 **(Needs Review)**
 - Blocked:
   - Mumble server setup waiting for infra response - https://github.com/protocol/ad-hoc-infra/pull/6
   - (Decision needed) - Do we relaly need go/js core interfaces to live next to each other  https://github.com/ipfs/interface-ipfs-core/issues/423
 - Next:
   - Implement all major CoreAPI parts in go-ipfs-http-api
   - Try to ressurect datastore benchmark efforts
   - Setup mumble server (impromptu voice communication) - https://github.com/ipfs/go-ipfs/issues/5837
     - Should I make it publicly accessible or should it have a password / something like that for now?

@warpfork
  - Done:
    - Happy holidays, y'all
    - IPLD: had some good conversations at CCC, got new ideas about open-vs-closed unions/etc; have notes, need to make them accessible to others.
  - Blocked: nah
  - Next:
    - Boil open-vs-closed into a decision tree... um, schema, and document that.
    - Moar go-ipld-prime implementation.  Maybe fleshing out some of the ipldcbor.Node impl?  A lot of things need love.

@djdv
 - Done:
   - Minor documentation things
   - this /ipfs/QmUiDVir9imgCpPLmXgTwLRTpHXrkn4vg2n7grc54MRk1N
   - Large mount refactor, much better performance (https://github.com/ipfs/go-ipfs/issues/5003#issuecomment-449764627)
   - mount now builds and runs on MacOS and Linux (dependencies are not gx'd yet)
 - Next:
   - Continue investigating showstopping elusive bug in mount and third party libraries it depends on (detailed https://github.com/ipfs/go-ipfs/issues/5003#issuecomment-451751681)
   - Get pkg in a state where other people can help review/debug, coupled with a screencast walking through the implementation (sometime after lunch)

@kevina 
  - Done:
    - Rebase `--cid-base=base32` 
    - Work on config options for specifing default CID base
  - Blocked/Asks:
     - `--cid-base` p.r. needs help deciding command line option for upgrading CIDv0 to CIDv1 in order to display the CID in the correct multibase https://github.com/ipfs/go-ipfs/pull/5789, likely to go with `--force-cid-base` 
  - Next:
    - Today: Write status report for go side of CIDv1 base32 (keep forgetting about it, sorry) -- note Eric says no longer needed
    - Hopefully get `--cid-base` p.r. merged
    - Move config options for changing the default base issue along 
    - Start work on chagning the DHT (providers) to use Multihashes instead of CIDs
      https://github.com/libp2p/go-libp2p-routing/issues/32

@stebalien
  - Done:
    - Email catchup
    - Maintainer stuff
    - Some work on CORs
    - Debugged gateway issue
  - Next:
    - More catchup, review, maintainer stuff.
    - Make sure the bitswap bug affecting the gateway gets fixed.
    - Cut a release.
   

@bigs
  - Done: 
    - vacation!
    - email catch up
    - unblocking daemon progress
  - Next:
    - testing framework & code review
   
@aschmahmann
 - Done:
   - MW-IPNS API improvements
   - Added some MW-IPNS content resolvers:
      - Set CRDTs
      - Single writer IPNS with conflicts
 - Blocked:
 - Next:
   - Working on peer-base specs for a while, coming up with a priority order/strategy
   - Investigate MW-IPNS over public channel

@michaelavila
  - Done:
    - RFC#2 for providing: https://github.com/ipfs/go-ipfs/pull/5870
  - Blocked:
    - Not really, but would really appreciate feedback on the providing PR
  - Next:
    - Work out GC/Providing issue with new providing tracking mechanism
    - There's still a few small things to tie up with this new providing mechanism, so continuing work on them

@momack2
 - Done:
   - Holidays
   - Local/Offline Talk from London Meetup published to Youtube! (writing up more on that - next monthly is Jan 23) - https://twitter.com/momack28/status/1082350145994289153
 - Blocked:
   - would love team feedback on Steven's issue re meeting format: https://github.com/ipfs/team-mgmt/issues/827
 - Next:
   - Catching up from the holidays
   - Surfacing Libp2p dependencies from IPFS and providing 2019 prioritization input (plus me in on anything not already in our roadmaps!)
   - Unblocking some open threads/decisions (gateway issues/Graphsync/KPIs)


### Questions

### Other notes

- Gateways are running into issue in bitswap sessions where we don't connect to peers that we find. Issue is here: https://github.com/ipfs/go-bitswap/issues/53. @stebalien thinks this is a critical issue currently impacting gateway performance: https://github.com/protocol/infra/issues/410

- CORS handling is messy and we should investigate and rework. @daviddias knows about CORS and indicates that it's not just our handling of CORS - it's also about how people configure proxies. @eingenito to make a roll-up issue for CORS in go-ipfs and share with @daviddias. 

- 0.4.19 Release. @stebalien is starting to pull together a new release and wonders if people know of outstanding blockers apart from the bitswap session connection issue mentioned above. @daviddias wondered if before we release we could have Openbazzaar test the RC, but @steb indicated that that was a lot of work for the as they have to rebase their changes on ours. Multiple days of work. 

