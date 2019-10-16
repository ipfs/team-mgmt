# 📦 Package Managers Weekly Sync

## June 11, 2019

- **Lead:** @achingbrain
- **Notetaker:**
- **Attendees:**
  - @achingbrain
  - @andrew
  - @bmwiedemann
  - @jessicaschilling
- **Recording:** https://youtu.be/sGIz_Bp7A2c

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

## Updates

@achingbrain
- Done:
  - mfs rabin implementation now in wasm
  - updated npm-on-ipfs to fix outstanding issues
  - upgrading js-ipfs in ipfs-npm-registry-mirror
  - lip2p ipfs camp workshop
  - package manager roadmap
- Blocked:
- Next:
  - deploy ipfs-npm-registry-mirror
  - lip2p ipfs camp workshop
  - package manager roadmap

@andrew
- Done:
  - entropic [pull request #2](https://github.com/entropic-dev/entropic/pull/181)
  - package management roadmapping
  - ipfs team week presentation writing
  - ipfs camp lightning talk presentation writing
  - [ipfs-npm-republish](https://github.com/andrew/ipfs-npm-republish) improvements
    - performance
    - offline support
    - support for publishing to an existing micro-registry
- Blocked:
  - N/A
- Next:
  - package management roadmapping
  - ipfs team week presentation writing
  - ipfs camp lightning talk presentation writing


@jessicaschilling
- Done:
  - package management roadmapping
  - camp deep dive materials to be printed
  - so many non-package-manager camp/team week-related things
- Blocked:
  - cut https://hackmd.io/CsTxYif5Tk--svo2nKv0TA?both down to 20 combined
- Next:
  - continue roadmapping
  - camp deep dive materials (will need others' materials for opening discussion)
  - help with Andrew's team week deck: prettifying?

@name
- Done:
- Blocked:
- Next:


### Notes

- [Bernhard](https://github.com/bmwiedemann) is running repositories for OpenSuse
  - Having problems with IPFS
  - fetches latest updates adding 2-4GB per day
  - ipfs object add patch
  - keeping a rolling history of snapshots in CIDS
  - attempting to publish IPNS updates but is slow
  - ipfs process is growing and growing, reaching 8000 connections (ipfs bitswap)
  - currently using go-ipfs 0.4.20
  - molly recommeneded upgrading to 0.4.21
  - IPNS team is working to improve speed
  - reducing the number of peers you need confirmation for may speed things up
    - ipfs name resolve —help --dhtrc, --dht-record-count uint   - Number of records to request for DHT resolution.   --dhtt,  --dht-timeout      string - Max time to collect values during DHT resolution eg "30s". Pass 0 for no timeout.
  - likes deduplication between snapshots
  - using it for reproducabile builds for historical backups
  - was using a squid server but it was downloading duplicates, couldn't rely on a single mirror to be reliable
  - current
  - found ipfs.io gateway more reliable than cloudflare at the moment
  - his server is pushing a lot of bandwidth recently (128GB)
  - gateway is serving 10-20TB/day
  - histories and snapsots at http://opensuse.zq1.de/ (listing 4.2TB of data)
  - https://lizards.opensuse.org/2019/04/03/experimental-opensuse-mirror-via-ipfs/
  - go-ipfs doesn't having a restart/reload config command

- Jessica requests filtering https://hackmd.io/CsTxYif5Tk--svo2nKv0TA?both down to 20 problems and benefits today before getting them printed
- Alex needs a list of things to be downloaded and cached for IPFS camp
-