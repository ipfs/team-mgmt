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
 	- fixed webrtc-star
 - Blocked:
 	- PR for libp2p websockets-star rewrite review
  	- diasdavid - might take a week or more to review
 - Next:
	- rewriting node-trust
  

@rob
 - Done:
   - had a convo with david about usecases (anything specific to mention here Rob?)
 - Blocked:
 - Next:
	- continuing with reviwing docs
  
@dryajov
 - Done:
 	- helped with ipfsd-ctl refactor
 - Blocked:
 	- getting CIs green on interop circuit tests
- Next:
	- work on tutorial for circuit-relay
	- get that circuit stuff wrapped up
    
## Additional NOTES:

- Jared - asked about webassembly use in ipfs/libp2p (Jared is this accurate? I had trouble following your convo with david)
	- js-ipfs/js-libp2p is a complete implementation of both specifications
  	- webasembly is used in specific cases
- daviddias - check the waffle boards for P0 and P1 and pick stuff to work on
- rob - asked about node-trust, rundown and explanation of what it is
	- this is a link to the project - https://github.com/mkg20001/libp2p-nodetrust
- post ideas on Test Mesh https://github.com/MetaMask/mesh-testing/issues/2

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
