# 📦 Package Managers Weekly Sync

## February 12, 2019

- **Lead:** @achingbrain
- **Notetaker:** @olizilla
- **Attendees:**
  - @achingbrain
  - @andrew
  - @olizilla
  - @jimpick
- **Recording:** https://youtu.be/3Fnh7_ICjbU

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
  - Met with @andrew, @olizilla & @alanshaw to dive into package manager requirements
  - Ask list - https://github.com/protocol/package-managers/issues/23
- Blocked:
  - N/a
- Next:
  - GUI and in browsers hack and plan week
  - Help Alan ship IPFS v0.35.0

@andrew
- Done:
  - Further experimenting with [apt](https://github.com/protocol/package-managers/issues/18#issuecomment-473841121) and [clojars](https://github.com/protocol/package-managers/issues/19) mirrors
  - London meetup with @achingbrain, @olizilla and @alanshaw
  - wrote up package linked list thoughts: https://github.com/protocol/package-managers/issues/22
    - bake the CID to the previous release into the next release as a simpler mechanism to track versions / doesn't need an external indexing process.
  - Opened "blockers" pr to highlight problems preventing further adoption: https://github.com/protocol/package-managers/pull/21
    - we're hoping to remove items from the blockers list as fixes and features land in IPFS
  - made a docker image to automate testing of clojars mirroring: https://github.com/andrew/clojars-mirror-test
    -  it takes 24hrs to run some of these experiments
    - looking for somewhat smaller datasets to run experiments on that dont take longer to update than the time between mirror updates

- Blocked:
  - N/a
- Next:
  - IPFS GUI and in browsers hack and plan week
  - package-management-wg-going-public blog post

@name
- Done:
- Blocked:
- Next:

### Notes

- thinking about ipfs-on-npm gui app idea - a small UI to visualise your npm stats and to encourage end users to keep a long running process that is re-sharing modules downloaded.

- ask: make a presentation for lisbon hack and plan, that we can share around. What really are package managers and what are the issues with using them with IPFS.

- we have 2 sessions for package-manager outcomes planning. They are FUN. and dig up lots of unverbalised assumptions.

- what is our mechanism for comparing merkle-tree layout ideas (in general, and specifically for package versioning.)

### Questions

- When public? :D
  - lets aim for when we ship the Q2 OKRs
  - can we open up sooner?
  - opening a repo doesn't make a thing publicised. Consider twitter / blog post / all our channels, to announce.
  - get alex on "The manifest" to reach more folks!


