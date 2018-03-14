# ⒿⓈ⚡️ js-ipfs Core Dev Team Weekly 2018-03-05

- **Lead:** Volker Mische (@vmx)
- **Notetaker:** dryajov
- **Attendees:**
  - @victorbjelkholm
  - @mkg20001
  - @jonkrone
  - @dryajov
  - @zcstarr
- **Recording:** https://www.youtube.com/watch?v=uxs8P5xMdbs
## Agenda

- Ask everyone to put their name into the list of attendees
- Round of updates
  - What have you accomplished since the last Weekly?
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
  - What is the next important thing you should focus on?
- Plan this week
  - Select issues to work on
- Review remaining issues if there is time left


## Notes

@dryajov
 - Done:
   - Reworked tests. They are now cleaner, faster and more maintainable(TM).
     - This rewrite addressed most of the issues outlined in ipfs/interop#12
     - CI is a lot more stable after the rewrite as well - getting consistent green circle, jenkins is happier too.
  - A draft of the circuit relay tutorial.
  - mplex abrupt stream termination
 - Blocked:
   - Occasional write quote exceeded errors in macosx under jenkins (https://ci.ipfs.team/blue/organizations/jenkins/IPFS%2Finterop/detail/PR-6/76/pipeline/)
 - Next:
  - Finishing mplex stream termination
  - wrapping up circuit tutorial (will possibly have another pass with provided feedback)


@diasdavid
 - Done:
   - js-ipfs 0.28 release
   - Fixed DHT tests on libp2p-kad-dht
 - Blocked:
 - Next:
   - libp2p.next() endeavour

@vmx
 - Done:
   - Webpack out-of-memory issue: https://github.com/ipfs/js-ipfs-api/issues/683
   - js-ipfs-api DAG API support
   - More Feross' Buffer tests porting
 - Blocked: https://github.com/ipfs/js-ipfs-api/issues/683
 - Next:
   - IPLD Selectors
   - Get all my outstanding js-ipfs-api changes merged

@mkg20001:
  - Done:
    - Finished libp2p-nodetrust (still contains some hacks that should be solved after the libp2p rewrite)
  - Blocked:
    - https://github.com/libp2p/js-libp2p-websockets/pull/66
    - https://github.com/libp2p/js-libp2p/issues/173
    - https://github.com/libp2p/js-libp2p/issues/172
    - libp2p rewrite
  - Next:
    - Maybe deploy libp2p-nodetrust to libp2p.io ?
    - Merge https://github.com/libp2p/js-libp2p-websocket-star/pull/43             

@jonkrone
  - done:
    - most of the work finishing up @AdamStone's pin PR
    - pin go/js interop tests, will PR later today
  - blocked
    - only-hash js-ipfs-api: https://github.com/ipfs/js-ipfs-api/pull/700
    - https://github.com/ipfs/js-ipfsd-ctl/pull/212
  - next
    - aim to get what I've currently got running merging

@victorbjelkholm
  - done:
    - jenkins now builds and tests all changes
    - deployed js-ipfs gateway/node
    	- http://159.65.62.176/d/tYEfOP6kk/js-ipfs?refresh=5s&orgId=1&from=now-30m&to=now
    - started on ws-star deployment
  - blocked
  - next
    - merge js-ipfs infra (also update dns)
    - finish ws-star deployment (also update dns)
    - refactoring js-ipfs tests
      - splitting out some things, generally improving most tests

@zcstarr
  - done:
  - blocked
  	- https://github.com/libp2p/js-libp2p-railing/pull/74 needs   feedback
  - next
  	- gain more familiarity with js-libp2p via bug fixes
  
**NOTES**:

@dryajov: I'd like to get feedback on the tutorial located here https://github.com/ipfs/js-ipfs/pull/1063/files#diff-f89ebb9bf6a8c8aacbcefe1bffbdd086  (https://github.com/ipfs/js-ipfs/pull/1063)
@jonkrone: pin api interop feedback/review 
  - talk to @dryajov about interop circuit (config based) vs pin api implementation
@jonkrone: asked about best way/places to ask questions and getting assistance - is it over issues, irc only. 
  - @victor: best way is to be on IRC (#ipfs-dev) and sometimes its good to get on a call. If someone doesn't know about a topic, they will know who does on IRC.

@mkg20001: is it possible to expose wrtc-star and ws-star metrics as dashboards?
  - @victor: we have them but they are not public, once things move around, they will be exposed 
@mkg20001: who to coordinate with to deploy nodetrust. 
  - @victor: that some discussion still needs to hapen before its deployed
  - also need an issue under infrastructure to coordinate it
@vmx: we should allocate 5mins at end of the call (if there's time) for general questions

