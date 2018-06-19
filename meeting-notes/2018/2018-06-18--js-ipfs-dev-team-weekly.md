# ⒿⓈ ⚡️ js-ipfs Core Dev Team Weekly 2018-06-18

- **Lead:** Alan Shaw (@alanshaw)
- **Notetaker:** @jacobheun
- **Attendees:**
  - @mkg20001
  - @fsdiogo
  - @vasco-santos
  - @hugomrdias
  - @vmx
  
- **Recording:** https://www.youtube.com/watch?v=xa0jT9r8Na8

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
- Please take a look at [#290](https://github.com/ipfs/interface-ipfs-core/pull/290) and give it a +1 if you can, that would be super helpful!

### Week Update

@alanshaw
- Done:
  - n/a (on holiday)
  - Released js-ipfs-api with backwards compatible API changes to `files.cp` and `files.mv` [#786](https://github.com/ipfs/js-ipfs-api/pull/786)
  - I have a PR open on interface-ipfs-core to modularise the tests and add skip/only support, **please please please** look at the description and throw a +1 on there or something if you're ok with the changes :D [#290](https://github.com/ipfs/interface-ipfs-core/pull/290)
- Blocked:
  - I need someone to review, approve and merge the libp2p connection manager PR [#184](https://github.com/libp2p/js-libp2p/pull/184)
- Next:
  - work towards release 0.30
    - merge: use same hashes as go [#1371](https://github.com/ipfs/js-ipfs/pull/1371)
    - merge: pin API [#1045](https://github.com/ipfs/js-ipfs/pull/1045)
    - merge: bitswap wantlist/unwant [#1349](https://github.com/ipfs/js-ipfs/pull/1349)
  - get mfs merged
  
@achingbrain (not attending)

MFS is ready to be merged.  Worked on adding interop tests.  Found an interesting bug where JSON parsing of 'text' (e.g. binary/ascii) encoded data from go in ipfs.object.get leads to the data field becoming corrupted (ipfs.object.data is fine).  ipfs.dag.get should not be affected as it base64 encodes the data first but seems to need ipfs.dag.resolve to be implemented in js-land to be useable.  Have patched go-ipfs to allow base64 encoding the data field of ipfs.object.get but need to figure out how their tests work before submitting a PR.

- Done:
  - finished mfs
- Blocked:
  - https://github.com/ipfs/js-ipfs/pull/1371
  - https://github.com/ipfs/js-ipfs/pull/1360
  - https://github.com/ipfs/interop/pull/22
  - https://github.com/ipfs/interface-ipfs-core/pull/278
- Next:
  - merge mfs
  - finish hash interop tests
  - submit PR to go-ipfs allowing for base64 encoding data fields

@vmx
- Done:
  - Graphsync, fighting pull-streams
- Blocked: No
- Next:
  - Graphsync

@vasco-santos
- Done:
  - IPNS working locally OKR
    - initial core implementation almost ready with Publish and Resolve commands.
    - writting spec draft for IPNS (not existing for go)
- Blocked: N/A
- Next:
  - IPNS working locally OKR
    - resolve validation
    - create PR
    - interoperability with go
    - add tests
  - Analyze CI problem for Alan's ctl pull request
    - https://github.com/ipfs/js-ipfsd-ctl/pull/261
  - Close more PRs for ipfsd-ctl

@hugomrdias
- Done:
  - implemented datastore-bfs using file system api 
  - implemented unix-fs unmarshal with pbf and benchmarked
  - implemented streaming browser download
- Blocked:
- Next:
  - continue with the Big Files OKR
  - benchmark file system vs idb 

@jacobheun
- Done:
  - Private networks are functioning with js-ipfs in node and are working with both js and go. I'll be finalizing the PRs for those today and will prepare a demo for next weeks all hands. https://github.com/libp2p/js-libp2p-pnet/pull/1
  - Fixed ability to send libp2p config to ipfsd-ctl proc daemon https://github.com/ipfs/js-ipfsd-ctl/pull/268
- Blocked:
- Next:
  - Finish up private network PRs and solicit/implement feedback
  - If there are no higher priority items, I will start looking into updating libp2p-switch and its connections to be a state machine.

@fsdiogo
- Done:
    - Working on debugging js-ipfs, libp2p-websocket-star and libp2p-switch
        - https://github.com/libp2p/js-libp2p-websocket-star/pull/52
        - https://github.com/libp2p/js-libp2p-switch/pull/265
    - Daemon crashes on WebSocket error
        - https://github.com/ipfs/js-ipfs/issues/1326
- Blocked:
    - N/A
- Next:
    - Continue with daemon stability and error handling
        - https://github.com/ipfs/js-ipfs/issues/1326

@mkg20001
 - Done:
   - rewritten webrtc-star with interface-data-exchange (demo/presentation was done on all-hands-call)
   - created interface-data-exchange https://github.com/mkg20001/interface-data-exchange https://docs.google.com/presentation/d/1yfxI_4wY-5ydFxcIr2NBsg8E0wyJJStekRfectZjcf0/edit?usp=sharing
 - Blocked:
    (a bunch of stuff to make wrtc-star v2 work needs to be merged/fixed)
    - interface-data-exchange
       - exchange-direct
           - https://github.com/libp2p/js-libp2p-circuit/issues/26
       - exchange-rendezvous
           - https://github.com/libp2p/js-peer-id/issues/80
               - pr: https://github.com/libp2p/js-libp2p-crypto/pull/125
           - https://github.com/libp2p/js-peer-id/issues/79
           - https://github.com/libp2p/js-peer-id/pull/76
 - Next:
   - get wrtc-star v2 merged https://github.com/libp2p/js-libp2p-webrtc-star/pull/148
   - get libp2p-rendezvous finished & merged

@name
- Done:
- Blocked:
- Next:

### Questions

* from @achingbrain: do our interop tests run anywhere as part of CI and prevent anything from being released if they fail?
  - They are part if the release issue template and are intended to be run manually, but there is no automated runner. It would be great for this to be run more often.

* from @hugomrdias: 
  - Request for help making a pull-stream to web stream with backpressure?
    - Hugo can post the function he is using to initiate this for anyone who can help
```js
function readableNodeToWeb(nodeStream) {
    return new ReadableStream({
        start(controller) {
            nodeStream.pause();
            nodeStream.on('data', chunk => {
                controller.enqueue(chunk);
                nodeStream.pause();
            });
            nodeStream.on('end', () => controller.close());
            nodeStream.on('error', e => controller.error(e));
        },
        pull(controller) {
            nodeStream.resume();
        },
        cancel(reason) {
            nodeStream.pause();
        }
    });
}
```
This `new ReadableStream` is a web stream, all i need to do is translate this to pull-streams. If anyone can help would be awesome. Thanks.

  - websockets on a go-ipfs daemon how to? 
    - Maybe David can help answer this?
  - js-ipfs object patch add-link crashes anyone knows why ?
    - No answers off the top of anyones head
  
