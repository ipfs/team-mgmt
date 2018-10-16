# Monday Notes - Go Core Dev Week, October 2018

### Attendees
@stebalien
@djdv
@momack2
@magik6k
@eingenito
@warpfork
@vyzo
@hannahhoward
@whyrusleeping
@keks


## Bitswap
- disk performance
  - disk performance becomes the bottleneck when fetching across the LAN
  - layout of flat FS is relatively shallow and large directories are a huge issue
- challenges with badger
  - files remain memlocked  after read (possibly go-ds-badger specific)
  - immature
- maintaining context when fetching contents in bitswap (such that you can make smart queries to the DHT when you fail to fetch content in bitswap)
  - enables smarter ways of deciding what to provide
  - when we stop prividing every block, can enable better preformance/strategy for finding the content you want to retrieve
  - means keeping a list of your block history (what you got from who, and who you should reach out to)
  - as part of bitswap, carry context from session of where you got the data
    - helps predict which peer will have a block's children
- Predictor Engine for Bitswap
  - on add, blocks and peers go into the predictor engine
  - when you need  advice on how to find a block you pass it into the predictor and it provides apeer or peers that you should ask for the block
  - can wrap DHT if that's the appropriate abstraction - DHT could just be a nother strategy for predicting what peer has a block.
    

## Providers + ACLs
- explicit root: special metadata record that can be used as an index point to specifically point to a subtree and apply things like ACLs and provider hints
  - goal: provide information to the subtree, to be used as an indicator
  - wanted to embed them in the system so that when you transferred data people would always learn about them
  - didn't want to keep a separate data based mapping access controls to data
  
- provider hints: a point in the dag that should be provided on the DHT
- ACLs: mark the dag with access control lists (aka I will only provide this set of the dag to people who have the correct acl)
- pinning policy: can be used to suggest the pinning policy for the rest of the subtree (which to pre-fetch, which to pin)
- metadata point that sits below unixfs to add data to the trasnfer mechanisms and potentially get reprovided to other peers
  - add info around data transfer to the graph itself
- wanted to solve private content (ACLs) and simplifying/reducing provider records for large datasets
  - could be a part of solving those problems, but doesn't make them trivial/ / simpler
  - key problem: has attacks on ACLs
     - imagine have private content marked by a explicit root with an ACL
     - an attacker could trick me into downloading a node that would amend the ACL in the explicit root and give them access to the subtree of supposedly private data
     - all they need is the hash of the private content to make a new explicit root with their own acl that points into the same tree that the orginial acl didn't allow them to see
     - 1. can check to see if you have something (confirmation attack) or 
     - 2. can trick you into serving a piece of content you may not legally be allowed to give them
      
   - solution one: force people to prove they have the data before applying ACLs
     - doesn't always help with confirmation attack (if you have the data) because you could prove that you have the data and then request it without sending it - confirming that the data already existed on the target
   - solution two: don't apply the acl to the data unless you ACTUALLY FETCH ALL THE DATA from the peer (ick)
     - this would be indistinguishable from encrypting everything in the network and only deduping on unencryption on the client side
     - because of these attacks, actually have to taint data with the ACL so that with no more info than the block hash itself you can figure out that acls apply to it
       - need to record which blocks we received with which acls (on a per-block level somewhere in the database)
       - final conclusion: provide acls and blocks separately and at the same time (aka, use message channel for this instead of inside the data)
    - solution three: modify every block itself with aclacl that determines who gets to set the acls that apply to this block
      - annoying from a dedupe standpoint
      - but within a single acl would still have deduplication
      - can still link to acls from within unixfs itself so when user grabs a file and adds it back, system remembers to apply the acl
      - then could have data that appears to have an acl that doesn't
    - solution four: encrypt everything (also breaks dedupe)
   
     

## Decentralized Identities
- What does it look like to have identity services on IPFS?
- How should your existing identity interop with services on IPFS? Can they retain info, or do they need to query a central database for content?
- A great example of a complicated identity system we'd want to interop with is the EU identity system: allows cross-country querying for updates while minimizing data stored in various systems
- Federated account retrieval between central authorities, friends, family, etc
- Keybase works pretty well - think about how to import from them or create a challenge for them to validate an identity on IPFS

