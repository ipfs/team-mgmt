# 💫Golang Core Dev Team Weekly Sync 🙌🏽 2019-05-13

**Meeting Lead:** @eingenito

**Attendees:**
  - @stebalien
  - @bigs
  - @alanshaw
  - @magik6k
  - @momack2
  - @hannahhoward
  - @lidel
  
**Recording:** [This recording is private to the PL organization](https://drive.google.com/drive/u/2/folders/1XbbTHze8yFYwE-kxuPjgmI_xx2uK_coT)


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

- Bug Party!
  - See: https://github.com/ipfs/go-ipfs/issues/6324
  - When: May 14-16 (or whenever we finish the entire list).

## Blockers or Needs 

ex.: @gocoredev - Need feedback on PR

- Question: @kubuxu - what's the status update on 4.20 bugfix RC?


## Current IPFS Initiatives\
#### Bitswap
Summary: We are improving the performance of transferring data between IPFS instances: [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5723)

@hannahhoward 
  - a couple of PRs are up 
  - https://github.com/ipfs/go-bitswap/pull/118
  - https://github.com/ipfs/go-bitswap/pull/119
  - working on sessions + reprovide providers this week

#### CoreAPI
Summary: We are improving the API used to drive IPFS functionality and extracting it to a separate project without a dependency on go-ipfs itself. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/4498)

@magik6k
- go-ipfs-api using go-ipfs-http-client
  - https://github.com/ipfs/go-ipfs-api/pull/182
  - For request only for now
  - Can implement some of go-ipfs-api.Shell on top of CoreAPI (no need for now)
- Constructor
  - A lot of design done, PR in 2-3 days

#### Provider Records
Summary: We are improving the scalability of the providing subsystem (the system for advertising, via the DHT, the content that a given IPFS node can provide). [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5870)

@eingenito for @michaelavila
- initial PR in the works that allows turning off providing entirely, and another one after that to enable just providing root nodes.

#### Base32/CIDv1

Summary: We are converting the default format of content identifiers in IPFS from Base58 to Base32 and encoding additional metadata about the identifer. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5358)

- CIDv1 defaulting to base32 should now be ready to merge when the js team is ready.
  - JS is ready - let's merge this!
- For [IPNS to work with case-insensitive identifiers (Base32)]((https://github.com/ipfs/go-ipfs/issues/5287)):
  - .. we need to [add multicodec for libp2p key](https://github.com/multiformats/multicodec/issues/130)(?)
 	
  
#### IPFS over FUSE
Summary: We are improving the use of IPFS via FUSE to provide simple way to consume IPFS content from existing applications. [Epic Issue](https://github.com/ipfs/go-ipfs/issues/5003)

@djdv
 - `filesystem` interface discussion https://github.com/ipfs/interface-go-ipfs-core/pull/30
 - Feedback considerations:
   - Responsibility boundaries (separating interfaces + naming/doc stuff)
   - task managment (looking at goprocess, and erlang style supervisor libs)

#### Gateway Performance
Summary: We are analyzing and troubleshooting the performance of the PL IPFS gateway nodes to make then faster.

@gmasgras
- setting up basic allerts on the gateways (memory, CPU, etc) - not based on IPFS metrics yet but working on that
- going to open a PR for passing environment variables as a config
- infra team needs to meet to help set priorities - likely preload nodes =]


#### Benchmarking vs Torrent
Summary: Compare performance of go-ipfs versus torrent protocol
- Step 1: setup a file with random bytes of data (to be fair , excluding de-duplicaiton)
- Step 2: turn on libtorrent and go-ipfs between two computers, one as sender and one as receiver
- Step 3: upload file to both systems at the same time (using shell scripts for each Windows and Linux)
- Step 4: time the reciever of each protocol library for the time it takes to send and check the files
- Step 5: (optionally) repeat the experiment to see if there are any difference between Windows and Linux
- Step 6: Assess the possibility of the need to optimize IPFS, go back to step 1 after optimizing
- Step 7: Start adding multiple receivers to see if the system can scale to having multiple nodes
Note: would be important if people would try and pitch this as an alternative to Torrents


#### GraphSync
Summary: Sync Graphs Quickly (without lots of requests) - https://github.com/ipld/specs/pull/75

@hannahhoward
- Mostly on hold pending Warpforks work
- Aiming for May 28ish meeting with Filecoin

#### Process Improvements
Summary: We're trying to get better working as a team.

#### Securing IPFS with alternate hash algorithems
* Summary: We should move away from SHA1 and possibly SHA2 due to its innate structural weakness
 - https://eprint.iacr.org/2019/459.pdf and previous https://shattered.io/
 - https://eprint.iacr.org/2015/967.pdf and https://eprint.iacr.org/2017/173.pdf and https://eprint.iacr.org/2017/190.pdf
 - Also https://github.com/skelsec/BitErrant shows a BitTorrent attack, so it is a big deal
* Concept: set the default multihash setting to something that is not (only?) SHA2
 - Solution 1: Use SHA3 (very safe, using a sponge construction, but very slow)
 - Solution 2: Use BLAKE2 (fast but not as safe as SHA3, since it uses HAIFA construction)
 - Solution 3: Use Skein (really fast but not that safe, has a construction all on its own)
 - Solution 4: Use KangarooTwelve (an ultra fast, slightly less safe version of SHA3)
 - Solution 5: Use a mixture of multiple alternate hashes (fail proof but wastes space)

## Cross-team updates

#### Testbed
Summary: https://github.com/libp2p/testlab

Demo tomorrow (libp2p internal, will be recorded for others!) Otherwise taking a brief break to do some core libp2p work.
