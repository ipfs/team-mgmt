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
    
# Tuesday Notes - Go Core Dev Week, October 2018

### Attendees
@stebalien @djdv @momack2 @magik6k @eingenito @warpfork @vyzo @hannahhoward @keks

## Bitswap Improvements

Prediction Engine
  -- Who had the parents -> has the children
  -- Who's in the sessions?

Driver? Sits on bitswap, tells it information about the graph?
Does this conflict w/ GraphSync?
"Graph Service" - chooses between block service / bitswap & Graph Sync
Dag Service / Graph Service ? Does it exist in GO? What improvements are needed
Does a graph service always fuse graphsync when available?


## Spec PR
AI: molly - merge go contributing guidelines and make accessible

AI: warpfork - add a design doc proposal to some repo and explain why it should be there

AI: molly - update ipfs/ipfs graph of where all the things are


- a biweekly/monthly 45min meeting for spec review with the "needed reviewers" that would syncronously debate over a new spec proposal (already reviewed)
- bit of what spec is available for review - everyone has to do the homework
- required to give structured outpouut (go/nogo/continue, specific constraints for the next round of iteration)
- examples: IEEE - does their spec review every 6 months, very fast and efficient, whole large community, specs ahead of time
- beef: people aren't even writing RFCs about how to improve the protocol
- need there to be someone with the discipline of reviewing extensively
  - should write down the meta-process for what a decent RFC and a decent review look like
  - like the model of starting with needs, then factors, then discussing different proposals, and finally moving to a design proposal

## Benchmarks

- they are important
- types of a benchmark
  - **research benchmark:** don't need to exercise production code, don't go in CI, just answer very specific questions
    - want this to be really scrappy 
    - should be *required* in major design PRs
    - can have multiple! Can explore benchmarks for different ways to do the thing.
    - both *write the code* and *write a doc about what you learned*.
  - **functional benchmarks:** benchmarks which target our actual production codepaths.
    - these are useful for testing for performance regressions
    - also useful for eyeballing '-benchmem' in subsystems
    - Prometheus?? Statsd? setup
  - **acceptance-test benchmarks:** need to be able to *prove* that IPFS is robust enough for certain use cases
    - care more about comparison to other existing tools to understand how IPFS compares to what exists in the market for users to make choices
    - nice to compare since other players will also get faster as network conditions change! Helps move the benchmarks accurately to the market vs changing static params given stale network speeds / capabilities
    - ideally both a success measure and something that helps drive development and research
    - Comparing bitswap vs rsync performance -- 10 node download test per keks? -an "acceptance"-level test (not functional)
   - Benchmarks for comparison of NPM? What are specific goals
- currently existing benchmarks
  - why has some bitswap benchmarks existing (more functional) - what would we want to do with them from a process perspective
   	- Merge and run as BS Performance Changes are suggested
    - make it part of our build pipeline?
    - could wire it to give a perf difference between branches and master
  - sharness work could be turned into performance tests
    - investigate adding metrics around stress tests

## Interop and coordination go<-->js

AIs: 
- Steven: add js interop test directly to go release script
- Oli: adding a nightly Jenkins CI interop
- Vyzo: ask Jacob to look into IPTB for libp2p interop stuff

Notes:
- we should all be friends, not competing over our user's pain
- current situation: there's an interop repo with some tests in it written in javascript (maybe not great for go developers to interact with them)
  - at time of release, js runs interop tests (don't know whether have interop at any time *before* release)
    - go should run these too!
    - we should reduce our API scope so that it's easier to test without accidentally breaking something that doesn't really matter much
    - tests need to not fail (or to actually start)
      - need either tests that run, or how to resolve test breakages 
      - more set-up agnostic running surface to make sure these run 
      - running them in CI fixes this too! feasible since they're minutes long
      - when say CI, mean Jenkins - and it's "unrunnable" and causing everyone success
      - currently after every merge it rebuilds all the PRs
      - rust has a bot that merges everything automatically. run tests locally in their branch. grab a whole batch of merges to run CI on and then only break them apart if something fails
      - 
  - there was an effort for interop tests to be run on CI (continuous integration) - would be nice!
  - also want interop tests to be run on all PR merges
  - currently spawn two nodes (js and go), and make them talk to each other
- Planning to have a second interop infra for libp2p
  - interested in doing the go, js, and rust interop
  - planning to spawn their own libp2p deamons
    - will this use IPTB? Not sure.. depends if that requires IPFS
    - Jacob is spearheading the org
    - Travis added support for IPTB deamons and browser nodes
- Currently don't have time for core devs to also be the maintainers of all the testing, interop, and infra
  - should have a team focusing on this to build testing infra for peer to peer networks (across libp2p, go/js ipfs, etc)
  - what are the minimum things we could do today that would make things better?
    - release checklist for js ipfs
    - go has a release script that builds all the things - let's add the release checklist to that script
    - a nightly Jenkins job for interop
    - go ipfs thinking of using a database of some sort to record metadata about blocks (could be ephemeral - but want to write stuff quickly and speed up development)
      - when developing locally, could speed things up by using a database 
    - Steven: want to not have the repo be part of the API - only want to expose useful packages so that internal details aren't brittle and tested against
      - Nice to have a standard IPFS repo format, but also find this hindering, not sure if it's worth it
      - for same supported datastore, should write the same things to disk
    
## Testing

- Unit testing is hard
- Interfaces are not supere clear
- DI style testing?
- Redesign + Refactor using testing as a tool to force conversations about design + API svurface
- We need functional testing at the highest level to do refactoring?
- Are modules well broken up?
- Run Sharness for CI on sub module changes
	- Reach out to infrastructure team lead
- Resolution: write a unit test for new code OR identify an area as hard to unit test and suggest a refactor

## Offline
- For secenario of two friend meeting over coffee - one with a file the other wants
  - Setup 1: connect over local wifi (but no external connection), explicit want in the want list, both actively running ipfs node that is constantly looking for peers, has enough resources / small enough node (memory (200-300MB min), Storage, not getting shut down by OS, battery (avoid power saving))
    - "it just works" - sender doesn't need to explicitly sendbut asker has to explicitly ask for this exact ahash
    - Things that require extra tooling
      - Pubsub content subscriptions
        - Subscribe to content from X person / friend / peer
        - Grab content on this topic I like / content like X / optimistic useful something
      - Don't have ad-hoc or short-range transports in libp2p (bluetooth, IR, various radios like wifi-direct)
        - why go through a third party if you don't have to!
      - need better semantics around relays
        - chaining of communications and requests (point-to-point or message passing --> doesn't require peer-to-peer direct connection)
        - ties into resiliant, self-healing networks (being discussed in libp2p)
        - How do we enable cross-party connections - could gossiping knowledge of peers AND best connection protocol (bootstrap method and self-healing mechanism)
        - examples: sekiai - unifies entire friend graph, pex = peer exchange in BitTorrent 
      - both peers have to already have ipfs (don't yet have a path to distribute ipfs from peer to peer)
    - battery drained by gossip / always searching for peers
      - need to do this opportunistically, at interval, responsively to changing network conditions (incoming pings?)
        - sony and BLE beacons do this really well
    - RAM constrained just by data structure performance
      - reduce waste, struct alignment/packing (minimizing extra space provisioned for holding data), reduce fragmentation!
    - CPU
      - use lots of threads and lots of go routines
      - apps have to be ready to be interrupted at any moment
    - on-disk memory
- Offline: concern, use cases to cover, why is this important
  - bare minimum: eltricity, some hardware, link, some storage that you can link to,
  - Thin clients - have benefits in terms of hardware, detriments in terms of hackability/manipulability if don't have ability to store locally
  - Example use cases:
    - School/Enterprise
      - Characteristics: many individuals on the same network, similar browsing characteristics / content needs, desire to local-first collab, some centrally hosted nodes to federate/distribute cached content
      - Ex1: Many users request the same file (schedule, video, reference material, etc)
        - goal: duplicate requests go local-first to fetch content that's already been dowonloaded into sub-network
      - Ex2: P2p collab on single doc/wiki (notes, discussion, comments, question, quiz, sign-ups, etc)
        - goal: send updates/messages local first to near peers and secondary/slow sync outside to rest of network (instead of current vice/versa)
      - squid caches over IPFS: very compatible. does the DNS lookup and then points to local peers to fetch files from within network
        - theoretically could distribute the cache to peers under http semantics
        - need some intelligent traffic shaping (how to route packets, which peers to ask, etc) - needed to avoid overloading peers, duplicate blocks, malicious actors
    - p2p transfer networks
      - peer-to-peer
        - share-it/airdrop/etc for local sharing
        - frequently entertainment / social content
        - "intentional" and explicit shares --> would be cool to move to more optimistic distribution
      - point-to-point
        - delegated peer discovery / routing
      - couriers
        - explicit: passing/fulfilling want lists  when moving between networks
          - ex OS updates - distributed, severable network updates flowing p2p
          - data refreshes - bring new data dumps to existing locations
        - implicit: finding and couriering "interesing" content --> question of "what is useful?"
          - advertize content beacon to show hosting (potentially) interesting content
    - Social, Local, (Mobile?)
      - local social networks (neighbor, circle, likealittle)
        - contextual chats about locally relevant content
        - webs of trust / consensus of authority and hhow to filter content or individuals
      - use local chats to communicate with each other when ISP goes down / data networks overshewhelmed (stadium, concert, theater, etc)
      - local gaming over LAN
        - high resolution, rich media, highly responsive, local host election to pairing / managing connections
        - Integrate with unity tooling? Ways of addressing/sharing hash-addressed 
        - how handle value capture for the gaming company (aka money)?
    

- Meta observations
  - unclear to offline app developers - what should be done at the layer above IPFS vs inside IPFS (what does low level tool enable -? Proof of concept?)
  - "intelligent" network shaping / content couriering is hard!
  - rtrading off one type of efficiency for another (will have some losses over traditional methods, in exchange for gains)
  
## RPC

- we currently have the "old" API that uses HTTP API which uses core/commands which uses internals core api
- the old HTTP api has cases we/compatability with the JS api
- instead of making the old api backwards compatible, we'll make a new thing:
- we want to have the "new" API (called core RPC) and exposes core-api
- the goal is to shift as much as we can from core/commands to core api
- JS team is looking into reorganizing the entire API, might be a good time for the go team to look into the same
- core rpc/multiplexing/backpressure
- needs to be web friendly so it can be used in the browser
- ability to distinguish between data and errors
- maybe support sockets
- make it easy for clients to use
- core rpc can be an interface with multiple implementations: (e.g. core-rpc-http)
- we should be generating core-rpc + core-api-rpc from an API description of core-api-node
- we probably won't be able to use software off the shelf because we want to do some special case things (e.g. pass a file descriptor)
- we need to version commands

# Wednesday Notes

### Attendees
@stebalien @djdv @momack2 @magik6k @eingenito @warpfork @vyzo @hannahhoward @keks

## Bitswap Improvements

#### Prediction Engine 
We want to be able to introduce DAG context awareness, to more intelligently choose peers when doing bitswap (e.g. a peer that gave us the sibling of the currently desired block, is likely to provide  that block).

There's already some acceptance of this concept as a preditctor service, driven by bitswap. But there's a more abmbitious refactor proposed now, that inverts that relationship and places this logic between the Dag Service and bitswap (or other exchanges, such as GraphSync).  
This driver would expose 'ask for x' where 'x' would initially be a cid, and may subsequently be transformed into a GraphSync expression, which in turn may be reduced to simple bitswap requests 'ask peer x for []cid' (or (when implimented) a request to a dag fetch service 'ask peer x for graphsync_expr').

There was a alternative/existing proposal that @diasdavid presented, which used a cascading mechanism for choosing the exchange; first graphsync if applicable and then fallthrough to bitswap. One disadvantage of this pointed out by @Kubuxu was that you would lose the ability to choose a low latency bitswap peer over a high latency graphsync peer (or related cases where high priority exchange-methods would exclude higher quality peers).

**Refactor Path**

Our initial goal is to introduce scoring of peers using DAG context awareness (latency, uptime, have we exchanged with them before, etc.). To do this we'll:

- Split the current bitwap into peer management and the fetcher.
- Introduce the DAG exchange that can manage peers and know about the DAG and what peers have provided to us historically.

<media-tag src="/blob/43/439aa260acd0852384c7f131e8eb5fe1d910f055c8abfa2d" data-crypto-key="cryptpad:jCEeCDVUgz/1CWesoxcfvT3Jh+2qu8iiRC54xjda/SQ="></media-tag>
<media-tag src="/blob/7e/7ebe253e7af8f131d61ef0385a4d59d08c04126b8ba88ce6" data-crypto-key="cryptpad:W4ab8pQuM8oq/OZr0fZ3COt2L+o1+BVJZiVysyfRg9Q="></media-tag>


## Decentralized Identities
- What does it look like to have identity services on IPFS?
- How should your existing identity interop with services on IPFS? Can they retain info, or do they need to query a central database for content?
- A great example of a complicated identity system we'd want to interop with is the EU identity system: allows cross-country querying for updates while minimizing data stored in various systems
- Federated account retrieval between central authorities, friends, family, etc
- Keybase works pretty well - think about how to import from them or create a challenge for them to validate an identity on IPFS

