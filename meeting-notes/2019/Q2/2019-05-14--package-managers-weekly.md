# 📦 Package Managers Weekly Sync

## May 14, 2019

- **Lead:** @achingbrain
- **Notetaker:** @olizilla
- **Attendees:**
  - @andrew
  - @jessicaschilling
  - @jimpick
  - @olizilla
  - @achingbrain
  - @momack2
- **Recording:** https://youtu.be/ZCV6vrqHbz4

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
  - Convert unixfs-importer to async/await [ipfs/js-ipfs-unixfs-importer#24](https://github.com/ipfs/js-ipfs-unixfs-importer/pull/24)
- Blocked:
  - N/A
- Next:
  - Work on IPFS-camp libp2p/packet adventure/protocol workshop
  - Finish unixfs-importer async/await conversion
  - Release unixfs-importer, unixfs-exporter & ipfs-mfs async/await
  - DTN Conf Thurs/Fri
  - Release new ipfs-npm

@andrew
- Done:
  - github package registry review: https://github.com/ipfs/package-managers/issues/55
  - follow up call with GitHub about IPFS integration and package registry feedback
  - work on extracting content from issues into docs: https://github.com/ipfs/package-managers/pull/53
  - further research and writing up making decentralized package management resiliant
- Blocked:
  - N/A
- Next:
  - finishing repo documentation reorg: https://github.com/ipfs/package-managers/pull/53
  - publishing further decentralized package management research


@jessicaschilling
- Done:
  - Set up [labels for our GitHub project](https://github.com/ipfs/package-managers/issues/labels) and took a bash at assigning labels to all open issues
  - Updated layout for @warpfork's [implementation decision tree](https://app.mural.co/t/protocollabs6957/m/protocollabs6957/1556717261380/7d93181e586fc3416ef88a42ba6d6df4b964c89b) (still an open question on the last part)
  - Started consolidating some of our outcomes workshops from earlier this spring into an [outcomes/requirements/ideals doc](https://app.mural.co/t/protocollabs6957/m/protocollabs6957/1557517017971/9233bd163f1ab153334d7538e855d00baf9861ee) for future discussion
  - Started looking at best approach to generating personas for our core audience segments, need to find useful parameters for that
- Blocked:
  - I am my own blocker: moving vans etc, big apologies in advance for being sporadic some of this week and next
- Next:
  - Will add a readme to @andrew's docs directory once he merges all that stuff in (edit: will just add it to his branch to include in the PR)
  - Keep bashing away at the last two bullets in my "done" above; vis-a-vis personas this will probably end up being a bit of a detour into UX strategy toolbox land

@jimpick
- Done:
  - brainstormed some "mini projects" ideas with Andrew - [Notes on PeerPad](https://dev.peerpad.net/#/w/markdown/75fL4JzgT7CNKHNTrDcXHw8hKbKVhJkWEJv5BSE9qdou/4XTTMCmEuMcGdjadFntictyFQoX9p2k1JPrQLQ8isuzivBMDL-K3TgUwapcqXa93VsxGcF9pD1HaRqReLvorT86Qy96gTNrSAhKRK7xCmdpjbigGLhDwPLY8sJXMTzPPxs52g9n6wns4dYGJgjDoSBYnTi2uPxLtvjbwp4NxQCx8xmH66rquMRjwAi)
  - csv,conf in Portland! https://csvconf.com/
    - lots of people using Docker for reproducible science, binder (Jupyter) https://mybinder.org/
    - packaging datasets - Open Knowledge / Frictionless Data https://okfn.org/projects/
    - datasette for viewing SQLite data https://github.com/simonw/datasette
    - WARC / Scalar prototype -> turn scraped websites into live sites using Docker https://scalar.webrecorder.net/
  - met with Jeffrey Yasskin from Chrome team ... learned a bit more about [WebPackage](https://github.com/WICG/webpackage) - intended for ES JavaScript modules!
- Blocked:
- Next:
  - convert brainstorming notes into "mini projects" issues https://github.com/ipfs/integration-mini-projects

@name
- Done:
- Blocked:
- Next:

### Notes

- Alex is almost done with refactoring
- off to dtn next week
- Jessica
  - the labelling is an experiment in how we might scale it out to all our teams
  - take a look at this consolidation of the outcomes workshops https://app.mural.co/t/protocollabs6957/m/protocollabs6957/1557517017971/9233bd163f1ab153334d7538e855d00baf9861ee

- Andrew
  - you can publish anything to the github package manager... the connection between the repo and the published artefact is not verifiable
  - you can still delete things
  - maven & rubygems dont have a mechanism for defining priortiy of mirror...  squatting on a module there could cause issues.
  - github action produced artefacts could be marked as "verified" in the sense that you'd be able to see the log of how it was produced.
  - github package manager conf, andrew to co-organise!
  - Resiliant resolution - store more of the dependency resolution info with the package. allow "offline" dependency constraint solvers... rather than contact possibly many remote pacakge registries.
  - the proposal doesnt assume an implementation, but using ipfs for tarball storage seems obvious, and if you go futher, using IPLD for storing the metadata would allow  further de-duplication of the indexes.

