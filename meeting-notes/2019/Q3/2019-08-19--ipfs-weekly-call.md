## IPFS All Hands Call Aug 19th, 2019



*   **Moderator:** @olizilla
*   **Notetaker:** $NOTETAKER
*   **Attendees:**
    *   @olizilla
    *   @jessicaschilling
    *   @ericlscace
    *   @jaycarpenter
    *   @alanshaw
    *   @dirkmc
    *   @vmx
    *   @autonome
    *   @lidel
    *   @achingbrain
    *   @terichadbourne
    *   Jonathan Schwartz
    *   @jimpick
    *   @ericronne
    *   @hugomrdias
    *   @stebalien
    *   Jay Carpenter
    *   @jonnycrunch
    *   @michaelburns

**Moderator checklist**



*   Ensure that there is a notetaker
*   Start recording
*   Ask attendees to add their names to meeting notes
*   Call for additional agenda items

**Agenda**

_General discussions, decisions, etc._



*   [Improved IPFS Release process](https://blog.ipfs.io/2019-08-14-ipfs-release-process/)
*   [Go-ipfs 0.4.22 released 🚀](https://blog.ipfs.io/054-go-ipfs-0.4.22)
*   Graphs with friends meetup in London - [https://www.meetup.com/Graphs-With-Friends/](https://www.meetup.com/Graphs-With-Friends/) 
*   Local & Offline Collaboration SIG next monthly meeting is this Wednesday at 17:00 UTC. Yiannis will be demoing Data Hop. [https://github.com/ipfs/local-offline-collab/issues/19](https://github.com/ipfs/local-offline-collab/issues/19)
*   Offline Camp rescheduled to Sept 27 - 30 in Oregon and we have a few more tickets available: [http://offlinefirst.org/camp](http://offlinefirst.org/camp) 
*   **TALK: **Jon from [Open Work Labs](https://www.openworklabs.com/)

**Demos**

_Show your work!_

**Q&A, Help Wanted**

_Ask questions, get answers. Announce issues that need help, get people to help._

**Notes**



*   New release process! Read the blog post
*   New go IPFS release!
*   Graphs with friends! New community meetup in London started by Alex Potsides
*   Local and offline use-cases meetup
    *   Yiannis demo’ing BLE file sharing
*   Offline Camp - long weekend in the woods doing offline discussing making stuff just work offline
*   Jon! Open Work Labs!
    *   Decentralized orgs + ipfs
    *   Bridging the gap
    *   None of this is built yet
    *   Few to 6 months or more, future work
    *   Want questions and feedback
    *   DAO, buzzword but also cool
    *   Epicenter = vault of assets
    *   Rules, apps, permissions, owning, courts all built around vaults
    *   Encorced and validated by a blockchain
    *   DAOs need a place to store data
    *   Immutable things can be store on chain
    *   But lots of mutable - store it efficiently off
    *   What are the data requirements?
    *   Here are 3:
    *   Available
    *   Content-addressable
    *   Without CAS, whole point of blockchains gone
    *   Write permissions
    *   Don’t want anyone to be able to use space
    *   Most presentation is about write perms
    *   (someday read perms too)
    *   1 org : 1 ipfs cluster
    *   Cluster allows replication across multiple notes
    *   More reliable
    *   Wrapping a cluster node in an auth proxy
    *   Which users Ethereum if someone/thing can pin content to a node
    *   Adding nginx or whatever submodule proxy to check ethereum
    *   It could be simple, but it’s not yet
    *   But it’s not really a whole lot
    *   Someone who wnats to pin
    *   Can post cid (maybe salted)
    *   Checks a pre-determined smart contract
    *   Does this eth address have permission to pin to cluster?
    *   If so, do all the things
    *   Or reject
    *   Smart contract allows almost unlimited flexibility for auth schemes
    *   Eg: bool canPin(ethAddr)
    *   An org with a token - only hodlers can pin?
    *   What if smart contracts can pin data too?
    *   An entire org, or a multi-sig wallet
    *   Update settings, use a theme
    *   Can do admin… but not cool
    *   Event based pinning
    *   Flow: watch event log from ethereum
    *   When you see pin event, get cid and pin it
    *   If you have a vault, and extra storage in your cluster…
    *   Generate income with Filecoin integration!
    *   Idea… give feedback
    *   @openworklabs
    *   Half work on Aragon
    *   Build better tools for people to share, organize and archive their work data
    *   Streams - immature concept they’re working on
    *   Present later?
    *   Questions?
    *   Size liimits?
    *   Another submodule
    *   Disable pinning?
    *   Hard because users can change eth addrs
    *   But maybe not hard - smart contract can check things about the addr
    *   Could be outcome of prev vote
    *   Smart contract could check that maybe?
    *   What kind of music is the ethereum blockchain?
    *   r&b?
    *   Autark labs
    *   Give dao an option to select a provider
    *   Spin up in containers?
    *   Dao creater runs docker compose up and boom
    *   Add option for custom cluster
    *   Longer term though
    *   When ready?
    *   2-3 weeks for orgs having own datastores
    *   Apps currently have own datastore
    *   Js http api is heavy, so aragon wants to just use rest apis
    *   So currently only allowing services w/ that
    *   Lighter ipfs client would help
    *   Some options, experimental
    *   Js-http-ipfs-client-lite
    *   Way lighter
    *   Minimal client [https://github.com/ipfs-shipyard/js-ipfs-http-client-lite](https://github.com/ipfs-shipyard/js-ipfs-http-client-lite)
    *   For lite client, the dream is to fold changes into the main one
    *   Enter Alan Shaw
    *   The hard parts are treacled
    *   But accepting PRs - welcome and rad
    *   Readme shows what’s done and not
    *   Pipe learnings back to main client
    *   13k min’d, less than half api
    *   Won’t go double
    *   Back to Jon
    *   And goodbye
    *   OFFICE HOURS ROCK WUT
    *   ipfs/community
    *   Come give a talk!
