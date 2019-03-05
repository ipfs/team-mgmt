# 💫Golang Core Dev Team Weekly Sync 🙌🏽 2019-02-25

Please note. There has been a  [meeting format change](https://github.com/ipfs/team-mgmt/issues/827#issuecomment-452157617) intended to make our brief sync time more valuable and more easily understood by new/occasional attendees.

**Meeting Lead:** @eingenito

**Attendees:**
  - _attendee names..._
  - @hannahhoward
  - @michaelavila
  - @jimpick
  - @djdv
  - @momack2
  - @mgoelzer
  
**Recording:** _add link to recording once it's online_

## Agenda
- Review Announcements for the whole team
- Review blockers and needs from other team members (not general updates)
  - Are you blocked waiting for input?
  - PRs for review? Remember the [project board](https://github.com/orgs/ipfs/projects/1)
- Review progress on major initiatives
  - Find or create the section for the IPFS initiative(s) you worked on.
  - Summarize the initiative briefly in notes to give a little context.
  - Summarize your progress
  - Summarize your next steps.
- Review other Questions/Announcements/Notes

## Announcements

## Blockers or Needs 

ex.: @gocoredev - Need feedback on PR


## Current Golang Initiatives
#### Datastore
Summary: We are investigating various IPFS datastore options with the goal of replacing the current default datastore with a faster, more scalable one: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4279)

- No udpates since last week. Still waiting on Infra - issue open there.                                                                                                      

#### Bitswap
Summary: We are improving the performance of transferring data between IPFS instances: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5723)

@hannahhoward - 
   - Flurry of PRs in preparation for launch / cleaning up a couple bugs
   - BS refactor work and optimization going into next launch! (yay)
   - One more speed up attempt in progress, still debugging some issues

#### CoreAPI
Summary: We are improving the API used to drive IPFS functionality and extracting it to a separate project without a dependency on go-ipfs itself. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4498)

@magik6k
 - go-ipfs-http-client initial implementation is merged
   - some parts are still WIP, but it's generally usable
 - Interface needs more docs
 - RFC - Change coreapi.Unixfs.Add Wrap behaviour - https://github.com/ipfs/go-ipfs/pull/6019
   - Doesn't affect CLI `ipfs add`

#### Provider Records
Summary: We are improving the scalability of the providing subsystem (the system for advertising, via the DHT, the content that a given IPFS node can provide). [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5774)

- Done:
	- Reprovider built on provider
	- Plan to move forward with queue implementation
	- The big rebase
- Next:
	- Moving provider calls into new core api (current)
	- Call-site provider strategies (upcoming)
- Blocked
	- n/a

#### Base32/CIDv1
Summary: We are converting the default format of content identifiers in IPFS from Base58 to Base32 and encoding additional metadata about the identifer. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5358)

@eingenito - likely no updates. Multihashed-based content routing still our top next priority. 
  
#### IPFS over FUSE
Summary: We are improving the use of IPFS via FUSE to provide simple way to consume IPFS content from existing applications. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5003)
@djdv
- Done:
 - IPNS create+write mappings
   - creation of IPNS keys "/ipns/key-name-string"
   - create+write methods for children of IPNS keys (and the key itself if it references a file)
 - general refactoring in preparation for correctness pass and external eyes on
- Next:
 - Continue source refactoring and spec compliance checks
 - BSD ports/tests

#### Gateway Performance
Summary: We are analyzing and troubleshooting the performance of the PL IPFS gateway nodes to make then faster.

@eingenito - Gatways are running very recent code with Raul's dialing queue fixes and faster (and bugfixed) bitswap. Graphs indicate much better response time in general. IPFS logging to ELK is in the works but not yet done (I don't think). @scout provided [this graph of the changeover](https://protocollabs.slack.com/files/UBAFNM7D5/FGCTRHUV6/screen_shot_2019-02-21_at_3.11.43_pm.png) in Slack.

#### Benchmarking vs Torrent
Summary: Compare performance of go-ipfs versus torrent protocol

 - no progress :|

#### GraphSync
Summary: Sync Graphs Quickly (without lots of requests) - https://github.com/ipld/specs/pull/75

@hannahhoward
- Team continuing to work out specs
  - [PR to Selectors by Volker](https://github.com/ipld/specs/pull/95) that needs review!
  - Lots of movement on go-ipld-prime (where go-selectors lives), but still a few more weeks before we'll have _more_ stable interfaces to code against
    - [Link Loader](https://github.com/ipld/go-ipld-prime/blob/cd841fb1d1554538775196d1873071ab016bd971/repose/repose.go#L26-L36), [Traversal Progress](https://github.com/ipld/go-ipld-prime/blob/cd841fb1d1554538775196d1873071ab016bd971/traversal/fns.go#L25-L28)
  - Volker going to be focusing on a slightly different but mostly compatible alternative to graphsync in JS described more here: https://github.com/ipld/specs/issues/101
- Wire protocol finalized given SGTM from Whyrusleeping
- Have been blocked but moving forward this week (likely soon to be blocked again on landing selectors spec, but that's ok)

#### Process Improvements
Summary: We're trying to get better working as a team.

- @hannahhoward
  - Just want to say big heads up for everyone attempting daily, now 10am PST all weekdays

#### go.mod !!!
Summary: After fighting with gx, pushing go.mod some more. @Kubuxu

- Renamed git tags in multiformats and libp2p (Travis freaked out with number of builds).
- Setting up tag-dog to bark at people re-pushing old tags.
- 👉 All devs run: `find libp2p multiformats -maxdepth 1 -mindepth 1 -type d | while read dir; do; cd $dir; git fetch --prune origin '+refs/tags/*:refs/tags/*'; cd ../..; done` in `$GOPATH/src/github.com/` to prune old tags. 👈
- Started introducing go.mod bottom-up.
  - https://github.com/multiformats/go-multihash
  - https://github.com/multiformats/go-multiaddr
  - https://github.com/multiformats/go-multiaddr-dns/pull/12
- Reworked Travis build script
  - https://github.com/ipfs/ci-helpers/pull/14

- Need list of repos in `ipfs` org that shouldn't have tags renamed:
  - ipfs/go-ipfs
  - ipfs/ipfs-cluster
  - ipfs/iptb
  - ipfs/ipget
  - (more?)

#### Release
- RC1 will go up on dists as soon as the build finishes. 🙌👏💪

#### [Your Initiative Here]
Summary: [Your summary here.]

_@example - I moved this initiative forward by doing ..., and my next steps are ..._

## Cross-team updates

#### [Your Initiative Here]
Summary: [Your summary here.]

_@example - I moved this initiative forward by doing ..., and my next steps are ..._

#### Testbed
Summary: Broke ground on first pass of scenario runners, expecting an example by EOW. Going to have to spike on some instrumentation after this initial pass.

**Callout**: If you have experience instrumenting code for prometheus or operating collection servers, please share some of that with me!

#### IPNS Improvements
Summary: Implement some of the changes people have been requesting for a while

- @aschmahmann
  - I'm collecting feedback on relative importance of IPNS improvements [here](https://docs.google.com/document/d/1fkHofmPDHHpcMsXF22Kf3O6q9POM02bQ4BCcePp0roA/edit?usp=sharing)
  - Thank you to all of you who have been helpful so far and whose issues from X years ago I've been reading up on
  
## Wins / Celebrations

_@example - We merged this feature ..., it's great because ..., thanks to @awesome for helping!_

## Questions

@eingenito
* Riot vs Slack. Filecoin really likes Slack for threads and they use it heavily. @steb indicated that they have an IRC bridge in place so that those without access to Slack can still participate. Should we do that on our project?
* Daily - the brief daily meetings are really useful for some of us. Attendance is encouraged. We should determine if there's a better time to do them. If you can't make the daily please leave an update on what you're working on in IRC/Slack. 
* 1-on-1s - I'm going to schedule 30 minute meetings with each of the IPFS Go Core dev team members. I want to hear what you think would make your work on IPFS better/easier/more fun. 


## Notes
