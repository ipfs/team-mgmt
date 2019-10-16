# 📦 Package Managers Weekly Sync

## March 5, 2019

- **Lead:** @achingbrain
- **Notetaker:** @jimpick
- **Attendees:**
  - @achingbrain
  - @andrew
  - @warpfork
  - @olizilla
  - @jimpick
  - @mikeal

- **Recording:** https://youtu.be/3eOxzgdClgc

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
  - Fixed problem with npm-on-ipfs where pubsub would stop working - https://github.com/libp2p/js-libp2p-pubsub/issues/7
- Blocked:
  - N/A
- Next:

@andrew
- Done:
  - merged [glossary](https://github.com/protocol/package-managers/pull/9) and [package manager list](https://github.com/protocol/package-managers/pull/10) prs
  - Experiment to add ipfs support to Homebrew: https://github.com/protocol/package-managers/issues/12
  - Categorization by implmentation: https://github.com/protocol/package-managers/issues/14
  - Started planning announcement of Package Managers Working Group: https://github.com/protocol/package-managers/issues/15
  - started researching gx
  - reduced excess dependencies in IPFS formula on homebrew: https://github.com/Homebrew/homebrew-core/pull/37426
- Blocked:
  - N/A
- Next:

@name
- Done:
- Blocked:
- Next:


### Notes

- @achingbrain: Tink on ipfs would require refactoring ipfs
- @andrew:
  - Some initial resistance to merging Homebrew changes upstream
  - Homebrew recipes on Git are huge
  - iGiS is tricky
  - Homebrew maintainer is interested, not dismissive
  - different categories of package managers...
  - go public?
- @mikeal: Hit live API because of delays?
- @andrew: Microsoft has a CRAN archive snapshotted by day
- @achingbrain: Aim for registries to add CIDs directly
- @mikeal: Package managers with immutable guarantees? nix and ??
- @jimpick:
  - ES6 module CDNs
  - https://unpkg.com/
  - https://www.pikapkg.com/
  - Deno and IPFS: https://github.com/denoland/deno/issues/428
    - https://github.com/denoland/registry
  - Live ES6 imports on Node: https://github.com/RangerMauve/webrun
    - Used by: https://github.com/gozala/lunet
  - https://github.com/victorb/gx-js
- @andrew: future of gx?
- @mikeal: npm in the early days ... graph in the registry
  - potentially faster for npm
  - @andrew: ruby gems has a computed state cached file for resolution
  - @mikeal: Mafintosh was booting VMs on bittorrent https://github.com/mafintosh/torrent-mount
    - @jimpick: Pipette - https://jimpick.com/2017/11/12/pipette-dev-blog/
    - @andrew: Docker hub content digests: https://docs.docker.com/registry/spec/api/#content-digests
- @mikeal: Package counts: https://github.com/protocol/metrics/issues/7


