# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 October 22, 2018

- **Lead:** @alanshaw
- **Notetaker:** @jacobheun
- **Attendees:**
  - @terichadbourne
  - @vasco-santos
  - @victorbjelkholm
  - @hugomrdias
  - @vmx
- **Recording:** https://youtu.be/wwJI_P7tH-4

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

@alanshaw
- Done:
  - [IPFS London meeetup](https://www.meetup.com/london-ipfs/events/255386386/)
  - Fixed issue with `maxBytes` option for Hapi HTTP routes [#1645](https://github.com/ipfs/js-ipfs/pull/1645)
  - [Released js-ipfs 0.33.0-rc.1](https://github.com/ipfs/js-ipfs/issues/1635) with new Web UI \o/
  - Spent time fixing up interop tests (currently failing in master) [#37](https://github.com/ipfs/interop/pull/37)
  - Reviewed IPNS on pubsub PRs [#1559](https://github.com/ipfs/js-ipfs/pull/1559) [#846](https://github.com/ipfs/js-ipfs-api/pull/846) [#361](https://github.com/ipfs/interface-ipfs-core/pull/361) [#26](https://github.com/ipfs/interop/pull/26)
- Blocked:
  - `null`
- Next:
  - Release js-ipfs 0.33.0
  - Complete `--cid-base` work [#1552](https://github.com/ipfs/js-ipfs/pull/1552)
  - Ask from Victor: https://github.com/ipfs/js-ipfs/pull/1553 (would help us get tests to run faster)

@jacobheun
 - Done:
   - Finalized all PRs for the [libp2p 0.24 release](https://github.com/libp2p/js-libp2p/issues/249)
     - Delegate routing, state machine, enable relay by default
 	 - Release Candidate `libp2p@0.24.0-rc.1` has been pushed to npm. Integration testing will happen this week.
   - `libp2p-switch@0.41.0` released, this adds state machine support for switch and its connections.
   - `libp2p-websocket-star-rendezvous@0.2.4` released. This fixes a crypto interface usage issue that was exposed by the peer-id crypto key type update.
   - Read through several of the issues regarding the [Interplantary Test Lab](https://github.com/ipfs/test-lab) and iptb to better inform the testbed direction for this quarter. Will be working on a proposal with the go team this week for libp2p.
 - Blocked:
   - Crypto key type support for peer-id should be ready for release https://github.com/libp2p/js-peer-id/pull/85. Not blocking anything, other than being able to be used by end users.
 - Next:
	 - Testing of the libp2p candidate release.
   - libp2p testbed proposal.
   - Begin libp2p daemon work to support interop and testbed work.

@vasco-santos
 - Done:
   - IPNS over Pubsub
     - Fixed Alan's review for all the PRs ([interface-ipfs-core#361](https://github.com/ipfs/interface-ipfs-core/pull/361), [js-ipfs-api#846](https://github.com/ipfs/js-ipfs-api/pull/846) and [js-ipfs#1559](https://github.com/ipfs/js-ipfs/pull/1559))
     - Fixed bug subscribing multiple times [js-datastore-pubsub#6](https://github.com/ipfs/js-datastore-pubsub/pull/6)
   - Finished spec proposal for IPNS
     - [ipfs/specs#184](https://github.com/ipfs/specs/pull/184)
   - DHT Interop
     - [js-libp2p-record#8](https://github.com/libp2p/js-libp2p-record/pull/8)
     - [js-datastore-pubsub#7](https://github.com/ipfs/js-datastore-pubsub/pull/7)
     - [js-libp2p-kad-dht#46](https://github.com/libp2p/js-libp2p-kad-dht/pull/46)
     - [js-ipfs#1646](https://github.com/ipfs/js-ipfs/pull/1646)
   - Remove local option from global options
     - [js-ipfs#1648](https://github.com/ipfs/js-ipfs/pull/1648)
   - Reviewed several Jacob PRs for libp2p
 - Blocked:
   - [interface-datastore#24](https://github.com/ipfs/interface-datastore/pull/24) - needs merge and release
   - [js-ipfs#1617](https://github.com/ipfs/js-ipfs/pull/1617) - needs the previous PR
 - Next:
   - Finish IPNS over Pubsub interop tests
   - Get DHT ready for being enabled by default in js-ipfs and interop tests fi

@hugomrdias
- Done   
  - gitlab pipeline
   - INSERT_LINK_TO_BACKGROUND_DISCUSSION_HERE
  - dependencies upgrades with PR filtered for ipfs only packages
  - ipfsd-ctl [https://github.com/ipfs/js-ipfsd-ctl/pull/302](https://github.com/ipfs/js-ipfsd-ctl/pull/302)
    - Simple cmd
```
            sub x 6.85 ops/sec ±1.95% (36 runs sampled)
            execa x 13.13 ops/sec ±2.70% (63 runs sampled)
            Fastest is execa
```
    - for a full spawn
```
            const f = IPFSFactory.create()
            
            f.spawn({
            	init: true,
              start: false,
              disposable: true
            }, (err, _ipfsd) => {
              console.log(err)
              defer.resolve()
            })
            sub x 1.36 ops/sec ±29.12% (10 runs sampled)
            execa x 2.82 ops/sec ±12.48% (19 runs sampled)
```
    - full tests set went  2m 39s to 2m 14s `-25s`
  - add init arg to ipfs daemon cmd
    - start-stop tests go and js 49 s > 38s  (go needs the same optimization)
    - start-stop tests js only 27s > 18s
    - full tests 2m 16s > 1m 50s
  - help with [js.ipfs.io](http://js.ipfs.io) upgrade to gatsby 2
    - Released [js-ipfsd-ctl v0.39.3](https://github.com/ipfs/js-ipfsd-ctl/releases/tag/v0.39.3)
- Blocked
    - couple aegir PRs
- Next
    - make experimental build default
    - start making bundles smaller
    - continue big data tests

@vmx
 - Done:
   - IPLD breaking changes (will help making the bundle smaller):
     - https://github.com/ipld/js-ipld/pull/163
     - https://github.com/ipld/js-ipld/pull/164
   - Recorded mt FOSS4G talk: https://youtu.be/rpx3kmpUwQI
   - Looked into which things are left over after a js-ipfs tests run: https://gist.github.com/vmx/8498700869961fd57057a281269d6424
 - Blocked: Nope
 - Next:
  - GraphSync spec as discussed in Glasgow
    Note: There is now a (new) GraphSync Spec, see talk https://drive.google.com/file/d/1NbbVxZQFKXwW6mdodxgTaftsI8eID-c1/view


### Questions

### Other notes

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
