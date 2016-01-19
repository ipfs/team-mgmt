js-ipfs roadmap
===============

> Roadmap for IPFS implementation in JavaScript. This repo describes the milestones and each of the steps that must be accomplished in order to get js-ipfs ready for people to use

note: libp2p, which is the network stack of IPFS, has its own ROADMAP and should be referenced as `libp2p`, a component, in this project.

## Milestones

#### v0.1.0

> main goal: Working version with a js-ipfs delegated node

- [ ] Have a set of writable gateways, to be our delegated node
- [ ] js-ipfs-repo https://github.com/ipfs/js-ipfs-repo
- [ ] `$ jsipfs daemon`
- [ ] `$ jsipfs init`
- [ ] `$ jsipfs id`
- [ ] `$ jsipfs version`

#### v0.2.0

- [ ] js-merkledag-store (IPLD store on top ipfs-repo)
  - [ ] js-ipfs-blocks
- from core commands - https://github.com/ipfs/api/blob/master/level1.md#ipfs-core
  - [ ] `jsipfs config`
    - get
    - put
    - set
  - [ ] `jsipfs stat`
  - [ ] `jsipfs refs local`
  - [ ] `jsipfs block`
    - get
    - put
    - stat
- [ ] `jsipfs files cat` (ipfs cat today)

#### v0.3.0

- [ ] update js-ipld to respect the latest on IPLD spec
- [ ] importer (what converts a file into a MerkleDAG)
  - importer interface
  - fixed size chunks
- [ ] ipfs daemon (get a daemon running)
- [ ] http-api
  - (ipfs core) repo commands
  - (ipfs core) block commands
  - (ipfs core) refs commands
- of the core commands https://github.com/ipfs/api/blob/master/level1.md#ipfs-core -- need:
  - [ ] ipfs node {id, start, stop} (daemon, really)
  - [ ] ipfs pin {add, rm} (this is not easy)

note: list of ipfs core - https://public.etherpad-mozilla.org/p/dec-7-api

#### extra (that are part of IPFS, but not priority)

- importer
  - rabin chunking importer
  - tar importer
