# 📦 Package Managers Weekly Sync

## February 12, 2019

- **Lead:** @achingbrain
- **Notetaker:** @jimpick
- **Attendees:**
  - @achingbrain
  - @andrew
  - @jimpick
  - @jessicaschilling
  - @momack2
  - @alanshaw

- **Recording:** https://youtu.be/dYNOg6DpVb8

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
  - Convert unixfs-exporter to async/await [ipfs/js-ipfs-unixfs-exporter#21](https://github.com/ipfs/js-ipfs-unixfs-exporter/pull/21)
  - Convert unixfs-importer to async/await [ipfs/js-ipfs-unixfs-importer#24](https://github.com/ipfs/js-ipfs-unixfs-importer/pull/24)
- Blocked:
  - N/A
- Next:
  - Finish unixfs-importer async/await conversion
  - Release unixfs-importer, unixfs-exporter & ipfs-mfs async/await

@andrew
- Done:
  - added more pacakge managers to https://github.com/ipfs/package-managers/tree/master/package-managers
  - contributed version option to wapm https://github.com/wasmerio/wapm-cli/pull/65
  - call and follow up issue with wapm about ipfs support: https://github.com/wasmerio/wapm-cli/issues/78
  - investigated deno package manager: https://github.com/ipfs/package-managers/issues/49
  - talking with eric about package manager specs
- Blocked:
  - N/A
- Next:
  - support wapm in stage 1 of ipfs integration
  - Continuing work on [How IPFS Concepts map to package manager concepts](https://docs.google.com/document/d/12RiLaiTXHJh3jVRkGOCsb4C7Dd-mmU77Gi-cq4xCGFg/edit#)

@jessicaschilling
- Done:
  - (almost done) Workplan with some more definite package-manager-related goals (and some that aren't but will be relevant re design methodologies)
  - Non-package-manager work: wrote up DPLAfest summary with info re user research methodologies we may want to recycle in a package manager workshop for IPFS Camp
- Blocked:
  - N/A
- Next:
  - Work on user segmentation for package manager users tied to Andrew's pain points in https://github.com/ipfs/package-managers/issues/17
  - Work on some initial journey map/mental model ideas for those segments


@warpfork
- Done:
  - hoisted some of those "cladistics of integration" docs attempts: https://github.com/ipfs/package-managers/issues/50
  - circulating some ideas with Andrew about different perspectives distro-scale pkgman sometimes has... in particular the idea that selection algos may vary!  And perhaps concepts like "minimum version spanning selection" are useful... which notably *don't exist* when considering package selection for a single project.  Not really resolved to a writeup yet.
- Blocked:
- Next:


@jimpick
  - more experimenting with "WebPackage" ... needs a package manager?
  - epic: https://github.com/ipfs/in-web-browsers/issues/121

@name
- Done:
- Blocked:
- Next:




### Notes

- andrew: lack of cross-over between disto and other package managers
- eric: speaking of distributing stuff repeatedly in-DC: https://github.com/uber/kraken
- Cool WIP: https://github.com/ipfs-shipyard/ipfs-desktop/pull/911 
- From Andrew Nesbitt: HPC package manager: https://github.com/spack/spack 
- Jim: WebPackage/AMP is sort of package manager for the web ... need to think about it
- andrew: deno is acting like a web browser, so some overlap with WebPackage/AMP
- mikeal: deno is based on TypeScript, so might not be best candidate
- alex: IPFS needs speed and identity
- molly:
  - cladistic tree ... having a couple of flavours is really interesting
  - where is the optimal balance
- alex: speed
- warpfork: for reproducible builds, speed is less important
- mikeal: where are the bottlenecks? does more cache help? is IPFS inherently slow?
- warpfork: can immunize against slow speeds by using a certain way
  - examples...
    - is IPNS slow?  resolve whole pkg index CID once, hang on to it (no fractal of additional IPNS refs) -> don't care
    - is the FUSE mount slow (e.g. when gcc reads every file 18000 times for no reason)?  copy it to plain disk once first -> caching a hot-readable snapshot by CID is easy, therefore -> don't care
      - to be frank, if you've benchmarked *any* fuse thing before... you're doing this anyway, it's not the IPFS code that's a problem, it's the core concept of FUSE and how syscall context switching works...
    - for the reproducible builds case in general: care about immutability and offline-first infinitely more than fastness.  Can wait for speed improvements to come down the dev pipeline later.
  - so maybe we could make some more charts of different feature groups like this, and determine if some usage paths can dodge them, and that might lead to interesting choices of integration patterns?
  - these examples are also interesting because they're mostly things I would do anyway (e.g. whole pkg index CID -- want that for snapshots anyway -> because it enables reproducible resolve)
- mikeal:
  - Q3, larger graph mutation APIs coming via batch operations
  - catch, built on new data layer
- alex: https://github.com/zkat/pacote/pull/173





