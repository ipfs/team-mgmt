# 💫Golang Core Dev Team Weekly Sync 🙌🏽 2019-05-27

Please note. There has been a  [meeting format change](https://github.com/ipfs/team-mgmt/issues/827#issuecomment-452157617) intended to make our brief sync time more valuable and more easily understood by new/occasional attendees.

**Meeting Lead:** @eingenito

**Attendees:**
  - _attendee names..._
  - @alanshaw
  - @jimpick
  - @stebalien
  - @aschmahmann
  - @olizilla
  - @lidel
  
**Recording:** [This video is private to the PL organization](https://drive.google.com/drive/u/2/folders/1vAF_jByRkuD5qJ1jcVF8gzp13fGTBRSB)

## Announcements

@eingenito
- Mid Quarter OKR scoring! Go ahead and update your initiatives with current and projected completion for the quarter: https://docs.google.com/spreadsheets/d/1YSeyWqXh3ImanRrTkYQHHkCofiORn68bYqM_KTLBlsA/edit#gid=1720716278

## Current IPFS Initiatives
#### Datastore
Summary: We are investigating various IPFS datastore options with the goal of replacing the current default datastore with a faster, more scalable one: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4279)

#### Bitswap
Summary: We are improving the performance of transferring data between IPFS instances: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5723)
  
#### CoreAPI
Summary: We are improving the API used to drive IPFS functionality and extracting it to a separate project without a dependency on go-ipfs itself. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4498)

#### Provider Records
Summary: We are improving the scalability of the providing subsystem (the system for advertising, via the DHT, the content that a given IPFS node can provide). [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5870)

#### Base32/CIDv1
Summary: We are converting the default format of content identifiers in IPFS from Base58 to Base32 and encoding additional metadata about the identifer. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5358)
  
#### IPFS over FUSE
Summary: We are improving the use of IPFS via FUSE to provide simple way to consume IPFS content from existing applications. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5003)

 - Researching other filesystems from other operating systems (namely all the Unix ones)

#### Gateway Performance
Summary: We are analyzing and troubleshooting the performance of the PL IPFS gateway nodes to make then faster.

@stebalien - new release should improve performance somewhat. There's improvements to memory usage and some changes to connection management.

#### GraphSync
Summary: Sync Graphs Quickly (without lots of requests) - https://github.com/ipld/specs/pull/75

#### Process Improvements
Summary: We're trying to get better working as a team.

@eingenito
- Bug Triage - label things interrupt if they should be discussed in this meeting. And feel free to assign bugs to people if you know that they know something about a certain area.

#### IPNS
Summary: Make IPNS faster and support more use cases

@aschmahmann
- Created go-ipfs fork with faster IPNS over PubSub support that people can play around with at https://github.com/aschmahmann/go-ipfs/releases
- Met with @vyzo @raulk and @stebalien about how to structure the pubsub persistence code so that libp2p can accept it.
  - Was decided to try and utilize stateful validators to handle the repeated broadcasting of the latest state.
    - Done: Performance is at the stage it was about a [month ago](https://github.com/ipfs/team-mgmt/blob/master/meeting-notes/2019/Q2/2019-04-29--go-core-dev-team-weekly.md)
  - Need to implement a new messaging protocol for peers to share their initial state when they come across new users in a PubSub channel
    - Should restore performance up to par
    - Will likely put up two proposals for this
      - One with two protocols "send latest" and "receive latest"
      - Another as a single state-based protocol

#### Improving Quality of DHT Servers

Idea: temporary disabling DHT Server on non-server profiles

@lidel We had a  chat today during a [Community call](https://github.com/ipfs/community/issues/419) about DHT clients and servers.

Relevant configuration key is [`Routing.Type`](https://github.com/ipfs/go-ipfs/blob/v0.4.21-rc3/docs/config.md#routing).  Current default (when no value is set) is `dht` (act as DHT server), and we often ask people to run desktop/laptop/mobile nodes with `--routing=dhtclient` 

We wondered what if we make a small tweak and change the default bahavior, eg:
- flip the default (when no value is set) to `dhtclient`
- make [`server` profile](https://github.com/ipfs/go-ipfs/blob/v0.4.21-rc3/docs/config.md#profiles) explicitly set `dht`  (enabling DHT Server)

(update) turns out there is a related discussion/issue at: [go-ipfs/issues/6283](https://github.com/ipfs/go-ipfs/issues/6283)

## Cross-team updates

#### JS IPFS 0.36 released (@alanshaw)
Summary: https://blog.ipfs.io/89-js-ipfs-0-36/

#### IPFS Camp Deep Dives (@alanshaw)
Ask: What are the open problems in IPFS/libp2p/ipld that we should deep dive on? 🐋

https://github.com/protocol/pl-ipfs-team/issues/45

#### IPFS Camp Course Course A has an outline (@alanshaw)
Ask: 🙏 please can has feedback: https://github.com/ipfs/camp/pull/4
