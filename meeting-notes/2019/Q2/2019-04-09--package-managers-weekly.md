# 📦 Package Managers Weekly Sync

## April 9, 2019

- **Lead:** @achingbrain
- **Notetaker:** @olizilla
- **Attendees:**
  - @achingbrain
  - @jimpick
  - @olizilla
  - @aschmahmann
  - @stebalien
  - @warpfork
- **Recording:** https://youtu.be/kBZN8K6GxGg

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
  - PR to add IPFS/IPNS support to npm: https://github.com/zkat/pacote/pull/173
  - Fix npm-on-ipfs bugs: ipfs-shipyard/npm-on-ipfs#93
- Blocked:
  - N/A
- Next:
  - Fix npm-on-ipfs bugs

@name
- Done:
- Blocked:
- Next:


### Notes

- some folks said things on twitter.
- alex was suitably goaded to PR pacote which is used by npm... it'd allow npm to load deps  over ipfs

- npm on ipfs app as a standalone or a desktop extention?
- dont want lots of daemons on my machine.
- do want the app to be succesful
- could we create an ipfs app store in ipfs desktop?
- yes, but lets create npm on ipfs app first, then figure out what the building blocks are.
- general feeling that a standaline app for npm on ipfs would make more sense at this stage.

- how much faster does IPNS need to be?
 - the depth of the package tree affects how fast they gotta be. (there are some 1st order deps, there are many 2nd and 3rd order deps)
 - we dont control where a dep that is loaded via ipns appears in the tree, so it needs to be fast.

- what could we get out of package manager designs that would be composable in ways they are not now.
- reproducible builds wants something from the union of package managers and ipfs...
- what is introspectable -- what is composable
- gx thought about a lockfile that defined how a bunch of packages fit together, without digging to deep into the details of the package manager.
- lets document the ideas on this. itd be great to expose ideas on where we see that heading, so we have something to shoot for.
- a brain dump from andrew on all the immutable package management things https://app.mural.co/t/protocollabs6957/m/protocollabs6957/1553255121186/0cf4685c5ef5df8ab7d02c7a09ea3ad49a77f0ac

- how fast does IPNS need to be?
- A IPNS over DNS could be fast, but what do you do if you get 2 disjoint networks... if you get results back from each, and they differ
- its centralised. we want the offline case to work.
- there are 2 cases... the fully offline case _must_ work, but it's tolerable if it's slower than online alternatives. Some service is better than no service. The online case needs to aim to be as fast as http and dns, as that is what it will be compared to, even tho we understand that it is not a "fair" comparison, due to the inherent overhead in making things verifiable and p2p.











