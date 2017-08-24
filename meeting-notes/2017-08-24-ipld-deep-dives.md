# IPLD Deep Dives August 24

**Moderator:** David Dias (@diasdavid)
**Notetaker:** Nicola @nicola
**Attendees** 
* _attendee names..._ 
- @hermanjunge 
- @stebalien
- @Magik6k
- @rasmuserik

## Agenda

<!-- Ensure notetaker is present before you begin -->
- Start recording
- Call for additional agenda items (moderator)
- 2 minutes for everyone
- Demos

<!-- After each call, it is the responsibility of the notetaker to save the last
version of the notes in a file in ipfs/pm/meeting-notes, by opening a branch and
submitting a PR. -->
## Notes

**Steven**: PubSub to IPLD
  - Complaints:
    - Go-ipfs monolithic
    - legacy code from protobuf
    - Better IPLD APIs (there is actually some kind of spec!)

**David Dias**:
  - maintain IPLD (in JS), eth resolvers..
  - looking for next steps, interfaces, use cases

**Jonnycrunch**: DID spec
   - question: @context, http resource for now, can it link to a hash?
   - should @context be in the spec as a reserved word? @nicola, @steven, maybe not?

**Nicola**: SELECTORS, SELECTORS, SELECTORS
  - Selectors:
  - IPLD spec:

**Herman**: Working on Ethereum + IPLD (golang)
  - **UPDATE**: These notes provided me a lot of big picture answers on the vision of the project: https://github.com/ipfs/notes/issues/255
  - Implemented some ethereum types in the go-ipld-eth plugin
    - Particularly block, tx and tx-trie.
    - We can traverse the transaction trie, as resolving concerns.
    - Next up is implementing the ethereum state trie nodes.
    - But first want to import the whole ethereum blockchain into a number of IPFS servers (7).
      - Working on that ^, we are talking of 4MM blocks or 250GB data,
      - The goal is to have real light clients operating with all the storage referenced via IPFS. 
  - Want to look at the IPLD roadmap:
      - Help with the interfaces,
      - and implement properly in go-ipld-eth.
      - this work could be useful to import further blockchains into IPLD.
  - Current Challenges:
    - Import the blockchain (mostly database / trie parsing)
    - Implement all ethereum types in go for IPLD.
    - Understanding bitswap, as we need to make these elements available to everybody, without them to connect directly to the servers containing the keys.
    - Optimize resolving: Today to get an ETH address state, you need to perform at least 8 resolve requests.
    - ^^  Too I/O Expensive.
  - Future challenges
    - Figure out a way to have a canonical hash table working.
    - ^^ IPNS to tell us which is the last block number and its hash.

**Vyzo**: looking for projects and hackinnnnn'!

**Lukasz**: integrating js API with go and make it work
  - stuck at IPLD api to be great on both sides
  - problem with types on javascript side
     - Related https://github.com/ipld/specs/issues/39#issuecomment-319554755
  - wants to know how to solve problems

**Martin**: ETH
  - when resolving cbor nodes, there is no easy way to get CBOR into JSON, "make it easy!"
 - graph builder: interest in standardize a JSON representation of graphs?
  - pathing in more complex graphs
  - performance issues on the binary radix tree, it generates proofs that are smaller of hexademical radix trees; issues when reading large amount of keys
  - making a change on the way the resolver serialize and hash things (hashing happens twice) 
  - radix tree  https://github.com/wanderer/merkle-radix-tree/
  - caching would be great!
  
  
  
  

## Overall

1. Restructuring APIs
2. Make it simpler to build graphs (layouts, graph builder), similar to mfs/unixfs
  - same language for every type of tree (and simplify to use multiple formats!)
3. Caching (details): how should caching work, should the resolver do this?
4. FIX naming and settle on a spec
5. Benchmarking
6. Steven's work on refactoring
  - conversation on block resolvers, node resolvers
  - DAGs execute IPLD selectors/transforms
  - IPLD service legacy (?)


## TODO
- [ ] set up a call on IPLD and JSON-LD (possibly have proposal, prototypes?) (@jonny)
- [ ] Call/update issues IPLD transformation and resolver (@nicola @stebalien)
- [ ] Figure out caching (@wanderer @diasdavid)
- [ ] Open issues for Martin!
  - [ ] @diasdavid to open the wasm
  - [ ] @diasdavid to review PR to the resolvers
- [ ] David to walk through Steven for JS-IPLD







