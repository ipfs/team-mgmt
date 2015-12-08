js-ipfs roadmap
===============

> Roadmap for IPFS implementation in JavaScript. This repo describes the milestones and each of the steps that must be accomplished in order to get js-ipfs ready for people to use

note: libp2p, which is the network stack of IPFS, has its own ROADMAP and should be referenced as `libp2p`, a component, in this project.

## Milestones

#### v0.1.0

> main goal: Working version with a js-ipfs delegated node

- [ ] writable gateway

#### v0.2.0

- [ ] js-ipfs-repo
- [ ] js-dag-store (IPLD store on top ipfs-repo)
- [ ] importer (what converts a file into a MerkleDAG)
  - importer interface
  - fixed size chunks
- [ ] DagStore

#### v0.3.0

- [ ] update js-ipld to respect the latest on IPLD spec


#### extra (that are part of IPFS, but not priority)

- importer
  - rabin chunking importer
  - tar importer
