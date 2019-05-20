# 💫Golang Core Dev Team Weekly Sync 🙌🏽 2019-05-06

Please note. There has been a  [meeting format change](https://github.com/ipfs/team-mgmt/issues/827#issuecomment-452157617) intended to make our brief sync time more valuable and more easily understood by new/occasional attendees.

**Meeting Lead:** @eingenito

**Attendees:**
  - @stebalien
  - @hannahhoward
  - @lidel
  - @magik6k
  - @momack2
  - @kubuxu
  - @djdv
  - @bigs
  - @aschmahmann
  - @yusefnapora
  
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

## Blockers or Needs

- adding multiple files broke in 0.4.20 - breaking test suites and interop - https://github.com/ipfs/go-ipfs/issues/6254 
  - desire bug fix or new release
  - Kuba will take a pass at this (changelog, interop tests, etc)
  - we'll aim for 1 week for a new release (We'll aim for RC end of tomorrow or the next day)
  - @stebalien will run the dist build

## Current IPFS Initiatives
#### Datastore
Summary: We are investigating various IPFS datastore options with the goal of replacing the current default datastore with a faster, more scalable one: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4279)

@magik6k
- 2 important fixes merged in Badger, need to update in go-ipfs

#### Bitswap
Summary: We are improving the performance of transferring data between IPFS instances: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5723)

@hannahhoward
  - bug fix on memory usage
  - pr for protocol improvements
this week:
  - immediately working on bitswap docs improvements
  - see bitswap backlog! https://github.com/ipfs/go-bitswap/projects/1
  
#### CoreAPI
Summary: We are improving the API used to drive IPFS functionality and extracting it to a separate project without a dependency on go-ipfs itself. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4498)

@magik6k
- Work on constructor continues
  - Mostly around daemon / cmds / cli node

#### Provider Records
Summary: We are improving the scalability of the providing subsystem (the system for advertising, via the DHT, the content that a given IPFS node can provide). [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5870)

@eingenito for @michaelavila: 'none' provider strategy in PR and working to merge. Next steps are deploy to gateways for testing and get 'roots only' strategy in PR form.

#### Base32/CIDv1
Summary: We are converting the default format of content identifiers in IPFS from Base58 to Base32 and encoding additional metadata about the identifer. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5358)
  
* Long discussion about making base32 the default for _all_ CIDv1 CIDs.
  - Resolution: do it. We want to do it eventually, most users aren't using CIDv1, we might as well do it now.
  - Switch tracked in:
    - go-ipfs https://github.com/ipfs/go-ipfs/issues/6220
    - js-ipfs https://github.com/ipfs/js-ipfs/issues/1995

#### IPFS over FUSE
Summary: We are improving the use of IPFS via FUSE to provide simple way to consume IPFS content from existing applications. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5003)

@djdv
- Gathered feedback on file system interface and fuse implementation
- Compared design against other systems, and looked for opinions from system maintainers
- Currently processing everything into an interface proposal

#### Gateway Performance
Summary: We are analyzing and troubleshooting the performance of the PL IPFS gateway nodes to make then faster.
- wrapped up influxDB long term metric storage
- updated container start-up script to accept ENVs as source for go-ipfs configs
- need write access before I can PR^
- started on configuring alerts from gateway metrics

#### GraphSync
Summary: Sync Graphs Quickly (without lots of requests) - https://github.com/ipld/specs/pull/75

@hannahhoward
- External meeting ~21st?
- on holding pending go-ipld-prime work

#### Process Improvements
Summary: We're trying to get better working as a team.

@eingenito - interrupt tag is being used and we'll continue to discuss interrupt issues in daily and weekly. 

#### IPNS
Summary: Make IPNS faster and support more use cases

@aschmahmann
- LWW pubsub initial resolution is faster (on localhost is 50-100 ms + finding peer)
- IPNS over PubSub initialization no longer waits on bootrapping over DHT publish (just for retrieve)
  - https://github.com/libp2p/go-libp2p-pubsub-router/pull/29
- IPNS over PubSub Subscribe before Publish - needed for CLI users of LWW pubsub
  - https://github.com/libp2p/go-libp2p-pubsub-router/pull/30
- Working on moving bootstrapping logic from [go-libp2p-pubsub-router](https://github.com/libp2p/go-libp2p-pubsub-router/) into [go-libp2p-pubsub](https://github.com/libp2p/go-libp2p-pubsub/) by utilizing [go-libp2p-discovery](https://github.com/libp2p/go-libp2p-discovery/)
  - Some details [here](https://github.com/libp2p/go-libp2p-pubsub-router/issues/28)
- After this will work on a discovery wrapper for [rendezvous](https://github.com/libp2p/go-libp2p-rendezvous/pull/1)
- Going to rewrite https://github.com/libp2p/go-libp2p-pubsub/pull/171 to use channels (so it's consistent with the rest of pubsub)
- With IPLD team next week

#### Turning off git-cop
Summary: Updating our contribution license so we can turn off gitcop

@momack2 - I am going to take a pass at updating the go-ipfs license and create an issue to reliscense past contributions 

## Cross-team updates

#### Testbed
Summary: https://github.com/libp2p/testlab

**Finally** open for business. The testlab is usable. I'd love to speak with IPFS and Filecoin team members that have concrete asks for measurement in a clustered environment. For now, I'd like to focus on benchmark oriented tests.
