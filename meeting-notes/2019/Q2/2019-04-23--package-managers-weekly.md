# 📦 Package Managers Weekly Sync

## April 23, 2019

- **Lead:** @andrew
- **Notetaker:**
- **Attendees:**
  - @warpfork
  - @jessicaschilling
  - @jimpick
  - @jchris
- **Recording:** https://youtu.be/Jom8YbU8rf8

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

@achingbrain (not present)
- Done:
  - Converted mfs to async/await [ipfs/js-ipfs-mfs#49](https://github.com/ipfs/js-ipfs-mfs/pull/49)
- Blocked:
  - N/A
- Next:
  - Record some basic performance numbers to answer question on [zkat/pacote#173](https://github.com/zkat/pacote/pull/173) - e.g. pull tarball/resolve IPNS name from:
    - IPFS node on local network
    - 5x IPFS nodes on local network
    - IPFS node on remote network
    - etc
  - Convert unixfs-importer to async/await
  - Convert unixfs-exporter to async/await

@andrew
- Done:
  - [How IPFS Concepts map to package manager concepts](https://docs.google.com/document/d/12RiLaiTXHJh3jVRkGOCsb4C7Dd-mmU77Gi-cq4xCGFg/edit#)
  - Added more package managers to https://github.com/ipfs/package-managers/tree/master/package-managers
  - Informal package manager meetup in London with @olizilla, @warpfork and @achingbrain
  - Researching Athens proxy for go: https://github.com/ipfs/package-managers/issues/46
- Blocked:
  - N/A
- Next:
  - Continuing work on [How IPFS Concepts map to package manager concepts](https://docs.google.com/document/d/12RiLaiTXHJh3jVRkGOCsb4C7Dd-mmU77Gi-cq4xCGFg/edit#)

@jessicaschilling
- Done:
  - DPLAfest workshop (http://dplafest2019.dp.la/) (not specifically PM-related)
- Blocked:
  - N/A
- Next:
  - Formalize workplan and get some projects set up!
  - Help with issues 41 and 42: document stages/types of package managers (https://github.com/ipfs/package-managers/issues/41), feedback loop between PM users and core devs (https://github.com/ipfs/package-managers/issues/42)
  - More discussion on progressive UX for menubar app vs IPFS desktop? https://github.com/ipfs-shipyard/npm-on-ipfs/issues/94

@warpfork
- Done:
  - attempted some writeups of a cladistic tree on various levels of IPFS/IPLD integration and what they mean.
    - still need to land this in an issue or something somewhere.

@name
- Done:
- Blocked:
- Next:


### Notes

- distributed identity as related to package management: discussion
- molly is chatting with wasmer (sp?)
- can cdnjs integrate with IPFS to ensure you load it locally via ipfs if you already have it

3 types of identity
- personal identity
- 2fa, password logins
- derived identity (what your isp has collected about you)
  - debian (etc) package history graph with red/yellow/green for each node is similar

