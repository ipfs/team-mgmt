## Apps on IPFS

#### Lead: @haadcode
#### Notetaker: @lgierth

#### Participants
- @sidharder
- @hsanjuan
- @Kubuxu
- @frankpetrilli
- @daviddias

## Agenda
<!-- Ensure notetaker is present before you begin -->
- Call for additional agenda items (moderator)

  - ipfs-cluster alpha: status and future
      - Alpha PR: https://github.com/ipfs/ipfs-cluster/pull/13
      - Path to beta: https://github.com/ipfs/ipfs-cluster/milestone/1
  - If Orbit is using pubsub, is there an assumption that there are no bad actors?
  - List alls apps on IPFS that appeared in the last Q
  - What will we be working on in Q1 related to apps (from @haadcode)

## Notes

- which apps endeavours are there?
    - orbit
    - ipfs-cluster
    - webui 
    - station
    - various pinning services
    - npm on IPFS
    - ipfs-pages
    - ipfsbin
    - ipfs.pics
    - ipfs-search
    - (https://github.com/ipfs/apps/issues)
    - Messaging/Chat App https://github.com/ipfs/apps/issues/10
- ipfs-cluster
    - there's an alpha version now
    - it has most of the basic functionality
    - looking for review and feedback
    - @hsanjuan sorted through @jbenet's feedback
    - it's alpha, interfaces/names/formats are subject to change
- security of pubsub
    - current assumption: no bad actors
    - anybody can publish anything
    - planned feature: signed logs (data structure layer)
    - planned feature: topic descriptors for authentication/authorization (pubsub layer)
    - planned feature: signed acks, so that a node in the broadcast tree can't eclipse another
    - floodsub strategy is naive, and just enough to get the pubsub api working
        - enough for a small network or app
        - easy to exploit
        - not planned to be the general pubsub solution for the ipfs network
    - we'll work on better pubsub strategies, but it's hard and will be lots of testing and trying things out
- plans for Q1
    - make IPNS fast enough that it's actually useful
    - ship pubsub (i.e. go-ipfs 0.4.5)
        - semi-blocker: need public websockets bootstrappers
    - publishing multiple IPNS records from different identities
    - ship private networks
        - @sidharder has a use case in his office

<!-- After each call, it is the responsibility of the notetaker to save the last
version of the notes in a file in ipfs/pm/meeting-notes, by opening a branch and
submitting a PR. -->
