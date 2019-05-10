# 💫Golang Core Dev Team Weekly Sync 🙌🏽 January 14, 2019

- **Lead:** @eingenito
- **Notetaker:**
- **Attendees:**
  - _attendee names..._
  - @alanshaw
  - @daviddias
  - @momack2
  - @magik2k
  - @stebalien
  - @eingenito
  - @hannahhoward
  - @djdv
  - @michaelavila
  - @warpfork
  - @mikeal
  - @aschmahmann
  - @eefahy
  - @donaldtsang
- **Recording:** [This recording is private to the Golang Core Dev Team](https://drive.google.com/drive/u/2/folders/1X2WJ7kbYbvmdUIhmmMPBO2es8hGcbTXA)


[Meeting format change](https://github.com/ipfs/team-mgmt/issues/827#issuecomment-452157617). Discuss current initiatives rather than individual progress. 

## Agenda
- Blockers or needs from other team members
  - Are you blocked on anything and how can others help?
  - Do you have PRs that need review - remember the [project board can help](https://github.com/orgs/ipfs/projects/1)
  - Do you have questions for other people on the team?
- Review major initiatives
  - Put progress information here. What IPFS initiative did you work on and what did you do?
  - What's the plan for the next week?
- Review other questions/Notes

## Blockers or Needs 

@momack2 (almost on plane)
  - ipfs needs for libp2p - pls add
  -  https://github.com/ipfs/roadmap/issues/18
  

@magik6k
  - Go-team Mumble server needs infra - https://github.com/protocol/ad-hoc-infra/pull/6
    - If infra people won't have time for this this week, I can set this up on my server (pings for us-west poeple are going to be a bit painful)


## IPFS Initiatives
#### Datastore
@magik6k
  - Done:
    - Talked with @warpfork about ds-bench, opened WIP pr for remote workers
      - https://github.com/ipfs/go-ds-bench/pull/2

#### Bitswap
@hannahhoward
   - General:
     - Somewhat focused on supporting Gateway issues working group right now
     - Also working on making Bitswap faster and use less network traffic
   - Done:
     - Fixed bug with connecting in sessions
   - In progress:
     - Logging in BS
     - Fixing node connecting/disconnecting issues
     
#### CoreAPI
@Magik6k
  - Done:
    - Progress on go-ipfs-http-api:
      - Most ipfs-related apis are starting to work, Unixfs.Add/Get done
  - Blocked:
    - Needs review/decisions:
      - `ipfs ls` reports real file sizes - https://github.com/ipfs/go-ipfs/pull/5906
      - Should `coreapi.Dag` just be `ipld.DagService` - https://github.com/ipfs/go-ipfs/pull/5922
  - Next:
    - Continue working on go-ipfs-http-api
    - Try to move https://github.com/ipfs/interface-ipfs-core/issues/423 forward (separate core-interface packages)
    
@daviddias asks if the CoreAPI is diverging from the concern (like files, bitswap, dag, block) based structure that currently exists in the JS API? Answer is yes. 

Is the CoreAPI structured off of the current interface-ipfs-core? Yes, more or less.

@daviddias points out the advantages of having common APIs (at least largely) they can share documentation and people can understand them across implementations.

@hannahhoward asks about will the Go API match the JS API? @Magik6k - the languages are quite different so they will diverge a little bit. @stebalien: we're going to try to keep the design discussion (of the API) in one repo, and then the implementations in different repos.



#### Provider Records
@michaelavila
	- Done:
  	- Much of the new provider is in place, I'm tackling the (I believe) last issue of keeping the tracking table consistent
	- Next:
    - Add a little documentation to my existing PR to help the reviews along
  	- In order to keep tracking table consistent, we need to clean it up during reprovide, in order to do that requires reworking the current reprovider system, which is what I'm working on now
  - Blocked:
  	- None, but I'm always looking for feedback on the PR that I have open (https://github.com/ipfs/go-ipfs/pull/5870/files)

#### Base32 CIDv1
@kevina
  - Done:
    - Finalize `--upgrade-cidv0-in-output` option for `--cid-base` p.r.
  - Blocked/Asks:
    - None
  - Next:
    - Libp2p: add note for base32 work (https://github.com/libp2p/go-libp2p-routing/issues/32)
    - Hopefully get `--cid-base` p.r. merged
    - Move config options for changing the default base issue along 
    - Start work on chagning the DHT (providers) to use Multihashes instead of CIDs
      https://github.com/libp2p/go-libp2p-routing/issues/32
 	
  
#### IFPS over FUSE
@djdv
  - Done:
    - Asked for help with `ipfs mount`
    - Likely found the elusive/silent mount issue: https://github.com/ipfs/go-ipfs/issues/5003#issuecomment-454019839
    - Replace 4:3 bars with something nicer in webcam broadcast
  - Next:
    - Rework concurrency model into something that serializes requests better
    - Implement IPNS write methods for mount when reads are stable

#### Things that Eric does <-- This is not an initiative... (cheater)
@warpfork
  - Done:
    - Had several (external) people ask me "what's next"/"how can I help?" on Timeless Stack (aka MerkleBuilds) last week, did some communication work :)
    - Picked up https://github.com/ipfs/go-ds-bench/, have a few fixes to make it works on my machine.
    - Tried out `go mod` on go-ds-bench (per discussion about that in go-ipfs lately -- thought it'd be a low-impact playground).  It... works?
    - Did a lot of deep work on figuring out native code integration for IPLD and what it implies for API design.  Big gist: https://gist.github.com/warpfork/8e1c4c0bb79a1406a9cbee10fb07853e
    - Oh, yeah, the `ipldfree.Node` impl in go-ipld-prime tokenizes again.  Which means you can serialize to, say, CBOR.  (Smooth user-facing API not yet presented, but guts are there.)
  - Blocked: Would always be lovely to have more people with a reserved timeslot for IPLD to brainstorm with :)
    - @stebalien would love to schedule a weekly 1-on-1 (or more).
    	- yassss
  - Next:
    - Package managers working group meetings this week
    - I want a type system draft that's good enough to write a unixfsv2 spec demo in it.  Maybe that can be (draft!) done in a week.
    - Or, put a pretty bow on the CBOR'izing so we can build the CID method again.

#### Gateway Performance
@eingenito 
- Erin and Michael on the Infra team have set up a dev instance of the gateway that we can shell into and deploy code to arbitrarily. You can ping them in the #gateway-tiger-team PL Slack channel (private).
- We are using a request replayer (goreplay) to sniff and clone traffic to one of our real gateways and send it to the dev box so we'll have real traffic there to respond to. There are some issues - so we'll see how it works.
- Hannah is working on some tracing instrumentation of Bitswap to be deployed to the dev node when possible (soon)
- Logs aggregation and searching coming next. May use existing ELK system used by Filecoin. Or might use 3rd party.

@stebalien
- Turns out the bitswap issue was new, we still need to debug the actual gateway issue.

#### Process Improvements
- @momack2 and @stebalien on this format change :)
	- dislike, suggests each person is working on one thing, and also that whoever drafted outline knows what every one of those things is before hand, which begs the question doesn't it?
    - Good points - should feel free to add initiatives, and should feel free to contribute to/discuss more than one initiative. 
  - advantage - we have a forum for "what is the plan for this initiative" that we didn't have a way to discuss synchronously before
  - downside - not clear where individuals should put "wins" or "updates from other teams" that are valuable but not associated with a specific initiative
- @Magik6k on mumble servier
- @Magik6k - should we clean `Done` column in the project board after each call? @eingenito - yah, we should, and I just did. 

## Questions

@DonaldTsang
  - concerned regarding go-ipfs #4558 with nocopy affecting apps downstream
    - Hydrus and Siderus Orion are the two closest app examples
    - https://github.com/ipfs/go-ipfs/issues/4558
    - https://github.com/ipfs/go-ipfs/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+nocopy
  - The nocopy bug has been reported to be broken for a year or even more!
  - (Sidenote: people have also said that using nocopy leads to different hashes)
> you need to pass the Abspath header with the full file path, in the http multipart headers
AND you need to have the mime type set as
application/octet-stream or whatever
for other more specific mime types it wouldnt work even with the Abspath header
hydrus does the right thing and passes the real mime type
which caused the problems
yea it was application/octet-stream thats the one that works
none of this is documented anywhere of course
so even though they provide the nocopy option, they dont tell you how to use it
and that guy that opened the original github issue which you linked to had run into this same problem (https://github.com/ipfs/go-ipfs/issues/4224)


## Other notes
