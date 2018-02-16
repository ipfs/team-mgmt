# ⒿⓈ⚡️ js-ipfs Core Dev Team Weekly Feb 12

- **Lead:** David Dias (@diasdavid)
- **Notetaker:** dryajov
- **Attendees:**
  - @dryajov
  - @mkg20001
  - @Admin-DataRoads (Jared)
  - @vmx
  

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

@vmx
 - Done: 
  	- last week spent time on ipld cli
 - Blocked:
 	- was blocked but not anymore
 - Next:
 	- work on ipld selectors

@davidias
 - Done:
 	- renamed libp2p-swarm to libp2p-switch
  	- fixed a bunch of bugs in the process
    - trickled the changes to libp2p
  - js-ipfs-api we have browser tests running
  - js-ipfsd-ctl refactored in the process
  - fixed aegir to take care of a regression
  - reviewed a bunch of PRs
 - Blocked:
 	- blocked on npm publishing (not anymore)
 - Next:
 	- continue with the refactor of libp2p
  - take a look at mdns PRs (richardshneider)
  
@kumavis
 - Done:
 	- metamask testbed (could you provide some more details please?)
 - Blocked:
 - Next:
 	- this week deploy testing container
  	- ideas on telemetry, etc...
    - move to webrtc-start from websockets-star
	- discuss ipld selectors    
    
@mkg20001
 - Done:
 	- fixed websocket-star
 - Blocked:
 	- PR for libp2p websockets-star rewrite review
  	- diasdavid - might take a week or more to rewrite js-libp2p, https://github.com/libp2p/js-libp2p/issues/159
 - Next:
	- rewriting nodetrust

@rob
 - Done:
   - had a convo with david about usecases
     - New users for js-ipfs are more focused on “how do I build a distributed web app?” than many new users of go-ipfs
     - Many web developers start here
     - Most common early issues are around APIs and fetching or including remote scripts and content
       - Common early question of “ok, so how do I use IPFS to send an XHR to my server” except you shouldn’t have a central server to send anything to in this context
       - Also wanting to include third-party client libraries, which have similar assumptions and problems
 - Blocked:
   - Nope
 - Next:
   - Continuing with reviewing docs
   - Hoping to post some summaries of research and notes this week for feedback and review
  
@dryajov
 - Done:
 	- helped with ipfsd-ctl refactor
 - Blocked:
 	- getting CIs green on interop circuit tests
- Next:
	- work on tutorial for circuit-relay
	- get that circuit stuff wrapped up
    
## Additional NOTES:

Jared - asked about webassembly use in ipfs/libp2p?:
  - js-ipfs/js-libp2p is a complete implementation of both specifications.
  - webasembly is used in specific cases, primarily rust- language projects.
  - go- language and other projects have complete implementation overlap with js- language, although each runtime platform has its own dis/advantages versus the others.
  
- daviddias - check the waffle boards for P0 and P1 and pick stuff to work on

- rob - asked about node-trust, rundown and explanation of what it is
	- this is a link to the project - https://github.com/mkg20001/libp2p-nodetrust
- post ideas on Test Mesh https://github.com/MetaMask/mesh-testing/issues/2

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
