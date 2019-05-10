# 📦 Package Managers Weekly Sync

## February 12, 2019

- **Lead:** @achingbrain
- **Notetaker:** @olizilla
- **Attendees:**
  - @achingbrain
  - @warpfork
  - @andrew
  - @hsanjuan
  - @daviddias

- **Recording:** [Google Drive](https://drive.google.com/drive/u/3/folders/1xPO6Ei6In4hEoAnKZVnBRg3gCKsmls9z)

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
  - Stabilised npm-on-ipfs deployment
  - Made a plan with infra to deploy to a container service
  - Investigate memory leak
- Blocked:
  - N/A
- Next:
  - Investigate memory leak
  - Update roadmap
  - Get proper zoom account
  - Write npm-on-ipfs blog post

@andrew
- Done:
  - started recategorizing spreadsheeet of package managers support
  - getting familiar with npm-on-ipfs
- Blocked:
 - N/A
- Next:
  - investigating general purpose version of npm-on-ipfs
  - further spreadsheet shuffling

@name
- Done:
- Blocked:
- Next:


### Notes

- write-file-atomic causing issues. nearform work is in progress to replace it.
- Andrew is updating the package managers ecosystem spreadsheet. It might not stay a spreedsheet forever, as it feels like a 4d problem space.
- Action: we need more folks to try npm-on-ipfs, for feedback / see the pain points
- Action: start a doc / list of capabilities that we know we need already to do a good job of integrating with package managers, to help focus other working groups
- Action: What are the talking points and exciting ideas in using IPFS for package-managers... Can we publish some interesting blog posts on these ideas
  - Rabin chunker on expanded tarballs may not be better than storing packed tarballs
    - https://github.com/ipfs-shipyard/ipfs-npm-registry-mirror/issues/6
    - our current rabin impl would be easy to improve... we need to dedicate time to it.
  - A story about all the packages a developer downloads and re-downloads over the course of a day / week
  - the npm graveyard, all the modules that got yanked from npm that are still on npm-on-ipfs
- Andrew looking at adapting npm-on-ipfs so that it can be used as a general purpose artefactory-like app that can be used by dev teams.
- Andrew speculating on what happens when multiple folks in a decentralized way fetch parts of an existing registry content.  Reproducible import becomes relevant!



