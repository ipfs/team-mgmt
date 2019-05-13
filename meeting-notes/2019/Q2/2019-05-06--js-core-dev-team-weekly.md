# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 May 6, 2019

- **Lead:** @jacobheun
- **Notetaker:** @vmx
- **Attendees:**
  - @jimpick
  - @vmx
  - @lidel
  - @jacobheun
  - @mikeal
  - @kumavis
  - @hugomrdias
  - @terichadbourne
  - @yusefnapora
  - @momack2
- **Recording:** https://youtu.be/s9lhZM9jYuo

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

@jacobheun
 - Done:
   - pull-mplex is ready
     - pull-mplex wasnt setting the channel name [pull-mplex#12](https://github.com/libp2p/pull-mplex/pull/12)
     - Cleaned up the ipfs/interop pubsub tests and fixed an issue causing it to fail, [interop#66](https://github.com/ipfs/interop/pull/66). This also fixes the last thing needed to unblock [pull-mplex in js-ipfs](https://github.com/ipfs/js-ipfs/pull/1884).
   - Added message signing in pubsub. go will be rolling out strict signing soon.
     - https://github.com/libp2p/js-libp2p-pubsub/pull/17
     - https://github.com/libp2p/js-libp2p-floodsub/pull/78
     - https://github.com/libp2p/js-libp2p/pull/362
   - Did some cpu testing of the dht on js-ipfs, need to finish that up this week
 - Blocked:
   - pubsub review and release from @vasco-santos
 - Next:
   - Get message signing released for pubsub
   - Add signature verification to pubsub [libp2p-pubsub#16](https://github.com/libp2p/js-libp2p-pubsub/issues/16)
   - Finish DHT performance testing on js-ipfs
   - Possibly start Nat Traversal and better address announcing

@alanshaw (not attending - public holiday)
- Done:
    - Released `js-ipfs-http-api`@`30.1.4`
    - PR for `interface-stream-muxer` [#55](https://github.com/libp2p/interface-stream-muxer/pull/55)
    - Wrote up documentation for [`it-mplex`](https://github.com/alanshaw/it-mplex/blob/master/README.md)
    - Reviewed unixfs exporter async/await PR [#21](https://github.com/ipfs/js-ipfs-unixfs-exporter/pull/21)
    - Started work on async iterators `js-multistream-select`
        - Currently converting `pull-length-prefixed` to async iterators: https://github.com/alanshaw/it-length-prefixed
- Blocked:
    - `null`
- Next:
    - Building workshops for IPFS Camp

@dirkmc (not attending - 🐨 Australian time zone)
 - Done:
   - refs local endpoint
   - RFC for garbage collection: https://github.com/ipfs/js-ipfs/issues/2012
     - Please take a look and give feedback, thank you ❤
 - Blocked:
 - Next:
   - Implement garbage collection

@vmx
 - Done:
   - IPLD Formats API (only ipld-ethereum and js-ipld are not approved yet)
 - Blocked:
   - Nope
 - Next:
   - Hopefully getting the whole IPLD Format things merged and released

@hugomrdias
 - Done:
   - feat: add support for File DOM API to files-regular [#2013](https://github.com/ipfs/js-ipfs/pull/2013)
   - [#986](https://github.com/ipfs/js-ipfs-http-client/pull/986) : feat: add support for File DOM API to files-regular
   - [#461](https://github.com/ipfs/interface-js-ipfs-core/pull/461) : feat: add tests for add data using File DOM api #461
   - [https://github.com/hugomrdias/js-ipfs-utils](https://github.com/hugomrdias/js-ipfs-utils) : Package to aggregate shared logic and dependencies for the IPFS ecosystem
   - add node 12 to CI in aegir
   - [#358](https://github.com/ipfs/aegir/pull/358): feat: update deps and cleanup
   - fixed js-ipfs electron example
   - [#359](https://github.com/ipfs/aegir/pull/359) : feat: add support for electron in tests
   - more fixes to "add support to ipns resolve /ipns/fqdn" PRs
 
 - Blocked:
   - https://github.com/ipfs/go-ipfs/pull/6255 add multiple files
   - https://travis-ci.com/ipfs/js-ipfs/jobs/197934371#L1812
 - Next:
   - ipns over dns
   - make ipfs dns recursive by default
   - make ipfs resolve recursive by default
 
 @lidel
 - Done:
   - Holidays
   -  Rebased PR 1989: [js-ipfs Gateway Improvements: Streaming, Conditional and Range Requests](https://github.com/ipfs/js-ipfs/pull/1989), should be easier to review
   - Filled some upstream PRs
   - WIP getting `/ipns/tr.wikipedia-on-ipfs.org/wiki/Anasayfa.html` to work
     (Research / prototyping with PRs related to IPNS+DNSLink+HAMT and [js-ipfs in Brave](https://github.com/ipfs-shipyard/ipfs-companion/issues/716))
 - Blocked:
   - Not a hard block, but PRs related to above work need review/release:
     - https://github.com/ipfs/js-ipfs/pull/1989
     - https://github.com/ipfs/js-ipfs-http-response/pull/19
 - Next:
   - Release Companion Beta that can load Wikipedia with js-ipfs+Brave
   - Interop tests for HTTP gateway
 
@jimpick
 - Done:
   - more experimentation with SXG https://github.com/ipfs/integration-mini-projects/issues/3
   - https://github.com/ipfs/in-web-browsers/issues/121
   - IPFS Camp content planning
 - Blocked:
 - Next:
   - more IPFS Camp
   - peer-base-pinner ... Dockerize it
   - csv,conf in Portland https://csvconf.com/


### Questions

 - @yusefnapora: Will the embedded node use UDP API on Chrome for DNS lookups
   - @lidel: Yes.
 - @kumavis: Async/await endevour: incremental vs. large changes
   - @jacobheun: full changes/breaking for small modules, more incremental for bigger ones like ipfs/libp2p
 - @kumavis: Compatibility?
   - @jacobheun: we support Node.js >= 10. 


### Cross team updates

@terichadbourne (ProtoSchool)
- reach out while you're building your tutorials for IPFS Camp


### Other notes

 - Next week (2019-05-13/19) is IPLD Team Summit + Data Terra Nemo conference in Berlin => @vmx will be out
