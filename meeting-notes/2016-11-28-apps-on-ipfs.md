## Apps on IPFS

#### Lead: @richardlitt
#### Notetaker: @dignifiedquire

#### Participants

- @richardlitt
- @jbenet
- @dignifiedquire
- @whyrusleeping
- @keks
- @em-ly
- @richardlitt
- @victor
- @kevina
- @kubuxu

## Agenda

- Orbit update:
    - We're close to merge "Ability to configure the IPFS daemon in the UI" https://github.com/haadcode/orbit/issues/166.
    - Working on moving Orbit's code to its own module.
    - Orbit will use the upcoming version 0.4.5 of go-ipfs, currently at 'pre1', ie. before rc1. Things will be *"experimental"* for the next few weeks.
    - We have a working version of Pubsub in fork of js-ipfs-api (https://github.com/haadcode/js-ipfs-api/blob/master/src/api/pubsub.js). It uses a fork of go-ipfs-dep (which can download go-ipfs 0.4.5.-pre1 which includes pubsub). Will work to merge all of that into Orbit this week.
    - **Currently blocked by**: not being able to use js-ipfs-api with Electron (https://github.com/libp2p/js-libp2p-crypto/issues/38). This basically means there's no working version of Orbit atm, and that we need to get this fixed ***asap***.
    - Created a simple example for the DappHackaton in Berlin: https://github.com/haadcode/orbit-core/blob/master/examples/browser/index.html
    - Next up (priorities): 
        - Merge https://github.com/haadcode/orbit/issues/166
        - Make it work with 0.4.5-pre1 so that pubsub gets fixed
        - Move core Orbit code to its own module
        - Start fixing the web version
            - Update to latest js-ipfs
            - There be dragons, js-ipfs is currently very much under construction. Need: merge new DAGNode API, pubsub
        - Move Electron client to orbit-electron, the UI (orbit-webui?) to its own module
- Go orbitdb is pretty much done: https://github.com/keks/go-orbitdb
    - currently still using github.com/keks/go-ipfs-api
        - still waiting for https://github.com/ipfs/go-ipfs-api/pull/41
        - when that is in go back to ipfs/go-ipfs-api
    - todo: proper interop tests
- ipget 1.0.0 Release
    - 1.0.0 Roadmap: https://github.com/ipfs/ipget/issues/18
    - It's almost ready! I spent a week or so getting a lot of the big pieces done (stable builds, sharness tests).
    - There's really just some UX work to be done with the output (verbosity options, help docs), and making sure the examples IPFS/IPNS hashes in the README are stably pinned so future users can try out the program.
    - Once that's done, we bundle it up for the various platforms and release.
    - Then we can see how/where/why people use it, and see how we can cater ipget's development toward those use cases.
- orbit-db is `go get`-able

**You have 30 minutes for this agenda**, 5 minutes before the meeting ends, consider moving the remaining items to a github discussion thread so that all the other sprint meetings can start in time.

## Notes

### Orbit Update

> @richardlitt reading the notes from @haadcode about Orbit

- We're close to merge "Ability to configure the IPFS daemon in the UI" https://github.com/haadcode/orbit/issues/166.
- Working on moving Orbit's code to its own module.
- Orbit will use the upcoming version 0.4.5 of go-ipfs, currently at 'pre1', ie. before rc1. Things will be *"experimental"* for the next few weeks.
- We have a working version of Pubsub in fork of js-ipfs-api (https://github.com/haadcode/js-ipfs-api/blob/master/src/api/pubsub.js). It uses a fork of go-ipfs-dep (which can download go-ipfs 0.4.5.-pre1 which includes pubsub). Will work to merge all of that into Orbit this week.
- **Currently blocked by**: not being able to use js-ipfs-api with Electron (https://github.com/libp2p/js-libp2p-crypto/issues/38). This basically means there's no working version of Orbit atm, and that we need to get this fixed ***asap***.
- Created a simple example for the DappHackaton in Berlin: https://github.com/haadcode/orbit-core/blob/master/examples/browser/index.html
- Next up (priorities): 
    - Merge https://github.com/haadcode/orbit/issues/166
    - Make it work with 0.4.5-pre1 so that pubsub gets fixed
    - Move core Orbit code to its own module
    - Start fixing the web version
        - Update to latest js-ipfs
        - There be dragons, js-ipfs is currently very much under construction. Need: merge new DAGNode API, pubsub
    - Move Electron client to orbit-electron, the UI (orbit-webui?) to its own module

### IPGET

> @richardlitt reading notes from @noffle

- 1.0.0 Roadmap: https://github.com/ipfs/ipget/issues/18
- It's almost ready! I spent a week or so getting a lot of the big pieces done (stable builds, sharness tests).
- There's really just some UX work to be done with the output (verbosity options, help docs), and making sure the examples IPFS/IPNS hashes in the README are stably pinned so future users can try out the program.
- Once that's done, we bundle it up for the various platforms and release.
- Then we can see how/where/why people use it, and see how we can cater ipget's development toward those use cases.

### Other Agenda Items?

- @keks: orbit-db is now go getable, fully usable in go
    - Q: Interop? (@dignifiedquire)
    - A: A little at the beginning, will work on this this week (@keks)
- TODO(@richardlitt): create place to brainstorm demos for orbit-db
