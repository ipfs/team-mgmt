# GUI & In Web Browsers Weekly Sync 2018-12-05

- **Moderator:** olizilla
- **Notetaker:** @fsdiogo
- **Attendees:**
	- @hacdias
	- @lidel
	- @olizilla
	- Jason Zhou
	- @terichadbourne
	- @alanshaw

**Moderator checklist**

- Ensure that there is a notetaker
- Start recording
- Call for additional agenda items

**Agenda**

- Moving notes to Google Doc (you are here ;^))
	- Should make it easier for people to submit agenda items
	- After each call we covert to Markdown and publish to https://github.com/ipfs/team-mgmt/tree/master/meeting-notes
		- Super easy conversion via https://github.com/Mr0grog/google-docs-to-markdown
- Team Updates and Demos
- @olizilla - 10 mins - ipfs-share-files - Experiment with websocket-star in js-ipfs fallback (https://github.com/ipfs-shipyard/ipfs-share-files/issues/63#issuecomment-444437359)
- @olizilla - 5 mins - Reach out to other IPFS file sharing services (https://github.com/ipfs-shipyard/ipfs-share-files/issues/52)

**Team Updates**

- @lidel
	- Done:
		- Spent big chunk of time on reviewing IPFS and libp2p Roadmaps, added some comments and questions
		- Provided some knowledge transfer about WebExtension stores to Discussify team :)
		- [RFC: Support ArrayBuffer as an alternative to Buffer input argument](https://github.com/ipfs/interface-ipfs-core/issues/404)
		- Added ipfs-share-files to Transifex: https://www.transifex.com/ipfs/ipfs-share-files/
		- Origin Trial for Signed HTTP Exchanges is enabled for ipfs.io Gateway – details in https://github.com/ipfs/infrastructure/issues/453#issuecomment-442944274 & https://github.com/ipfs/in-web-browsers/issues/121#issuecomment-442952118
		- Fixed local build of blog.ipfs.io - https://github.com/ipfs/blog/pull/199
		- Fixed ipfs-companion’s API access in Chrome 72 - https://github.com/ipfs-shipyard/ipfs-companion/pull/631
		- Confirmed js-ipfs repo can be shared by multiple pages when embedded via iframe
	- Blocked:
		- Waiting for cert from Digicert (for SXG experimentation)
		- Companion fails to build after dependency bump, looking into it (webpack/terser)
	- Next:
		- Release new Companion Beta release with fix for Chrome Beta
		- Blog post about Signed HTTP Exchanges at ipfs.io
		- Finish capabilities preload via window.ipfs.enable and ship to Beta


- @terichadbourne
	- Done:
		- Opened an issue proposing a workshop using the file API (rather than DAG API) for ProtoSchool. (All current workshops use the DAG API so it’s not being surfaced that file transfer is possible.) Open to suggestions and feedback at https://github.com/ipfs-shipyard/proto.school/issues/91
		- Was guinea pig in usability test of Web UI with Oli
		- ProtoSchool updated to use the new CID link API (about to be merged from https://github.com/ipfs-shipyard/proto.school/pull/88)
		- Taught ProtoSchool to save state of code in editor box and completion status of each lesson (to be merged this week from<https://github.com/ipfs-shipyard/proto.school/pull/86>)
		- Conducted usability test of ProtoSchool


- @olizlla
	- Done:
		- Short week, was off thurs / friday
		- 3x Useability interviews for Web UI - https://github.com/ipfs-shipyard/ipfs-webui/tree/master/docs/usability/notes
		- cleanup repository before starting up IPFS PR reviews
		- Kick off “add Desktop to ipfs.io website” https://github.com/ipfs/website/issues/281 to honour it’s upcoming new release.
		- Get specton test working for ipfs desktop - https://github.com/ipfs-shipyard/ipfs-desktop/pull/730
		- Docs PR review https://github.com/ipfs/docs/pull/67
	- Blocked:
		- 	N/A
	- Next:
		- 2 more usability testing session for webui. write up the common issues. Propose next round of improvements to webui
		- Replace distribution of peers graph in webui with repo size information. Limit geolocations to peers page to avoid gratuitous system load.
		- Cut a release of Web UI
		- PR go-ipfs to add webui link to ipfs daemon output.
		- GET DESKTOP RELEASED 🚢 ✨


- @alanshaw
	- Done:
		- Progress on [async iterators endeavour](https://github.com/ipfs/js-ipfs/issues/1670)
			- interface-datastore https://github.com/ipfs/interface-datastore/pull/25
			- datastore-level https://github.com/ipfs/js-datastore-level/pull/12
		- Many reviews for [js-ipfs 0.34](https://github.com/ipfs/js-ipfs/issues/1721)
		- Switched to octobox for all github notifications
		- Releasedipfs-http-client@27.1 -[streaming ls](https://github.com/ipfs/interface-ipfs-core/blob/master/SPEC/FILES.md#fileslsreadablestream)!
		- Benchmark tests matrix was created
			- https://gist.github.com/alanshaw/e8f49ff1875f0e256e7c45ddeef31498
			- More test ideas are here needed!?
	- Blocked:
		- N/A
	- Next:
		- Implement CID version agnostic get
		- Implement addFrom\* methods in js-ipfs
		- Release candidate for js-ipfs 0.34 🚢


- @hacdias
	- Done:
		- Fixed some IPFS Desktop related issues.
		- Progresses on ECONNREFUSED issue: https://github.com/ipfs-shipyard/ipfs-desktop/pull/722
	- Blocked:
		- N/A
	- Next:
		- Work on removing the need for CORS headers for IPFS Desktop
		- https://github.com/ipfs-shipyard/ipfs-desktop/issues/728
		- Decide whether or not to remove React from IPFS Desktop menubar
			- https://github.com/ipfs-shipyard/ipfs-desktop/issues/732
		- Release Desktop 0.6


- @fsdiogo
	- Done
		- Finalised and shipped app copy
			- https://github.com/ipfs-shipyard/ipfs-share-files/pull/57
		- Added project to Transifex
			- https://github.com/ipfs-shipyard/ipfs-share-files/pull/61
		- Updated the readme
			- https://github.com/ipfs-shipyard/ipfs-share-files/pull/62
		- IPFS website new section proposal
			- https://www.figma.com/file/RLVmj3C8fy84KrdaFLPuHbvX/ipfs.io?node-id=0%3A1
	- Blocked:
		- N/A
	- Next:
		- Finish IPFS website new section
		- Work on Share Files to use a signalling server


**Notes**

- After [this discussion](https://github.com/ipfs-shipyard/ipfs-share-files/issues/) we reached consensus and we’re moving forward to using a websocket-star server as a centralised discovery server.
- Before releasing Share Files we must [reach out to other IPFS file sharing services](https://github.com/ipfs-shipyard/ipfs-share-files/issues/52), being as starting a direct conversation or opening issues in their repos. This should be collaborative and educational for both parties.
