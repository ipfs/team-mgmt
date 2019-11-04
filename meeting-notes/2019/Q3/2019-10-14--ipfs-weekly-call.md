## IPFS Weekly Call October 14th, 2019



*   **Moderator:** @achingbrain
*   **Notetaker:** @autonome
*   **Attendees:**
    *   _@olizillia_
    *   _@jessicaschilling_
    *   _@alexpotsides_
    *   _@hareeshnagaraj_
    *   _@ericscace_
    *   _@ericronne_
    *   _@autonome_
    *   _@jaycarpenter_
    *   _Michael Burns_
    *   _@hugomrdias_
    *   _@lidel_
    *   _@steverichmond_
    *   _@cwaring_
    *   _@tanyamedukha_

**Moderator checklist**



*   Ensure that there is a notetaker
*   Start recording
*   Ask attendees to add their names to meeting notes
*   Call for additional agenda items

**Agenda**

Talk: Hareesh Nagaraj and Dheeraj Manjunath tell us about [https://audius.org](https://audius.org) - a decentralized, community-owned audio sharing protocol which uses a blockchain verified system of attribution to ensure content creators get paid as people listen, all in a familiar music player interface.

_General discussions, decisions, etc._



*   **Add your announcement here**
    *   

**Q&A, Help Wanted**

_Ask questions, get answers. Announce issues that need help, get people to help._

**Notes**



*   Audius
*   Launched 9/24
*   Public beta
*   1m unique cids!
*   8k users
*   16k tracks
*   180gb content on ipfs
*   **Architecture (general)**
*   Smart contracts on both eth mainnet, on POA
*   Creator nodes, discovery providers, content svcs
*   Each is an ipfs node
*   Front-end is dapp
*   Made with React - does desktop, mobile, web, etc
*   The ipfs services are run by 3rd parties
*   Not run by Audius
*   Registered on the blockchain
*   That’s the part that makes it decentralized
*   **IPFS that we use**
*   Go-ipfs
*   Py-ipfs-api
*   ...
*   **Creator Nodes**
*   File uploads, registration, images
*   Processes the audio files
*   Add and pin 6 second audio chunks
*   Client combines the multihashes, ties to track metadata in json
*   -> CID
*   Creator node also can be final fallback gateway
*   Track ends up living in at least 3 places
*   Synced when changed
*   To increase availability and decentralization
*   Make sure content is safe
*   **Metadata**
*   Chunks
*   Artist metadata
*   Covers
*   **Discovery Provider nodes**
*   Indexing blockchain state
*   A window into the network
*   Caches metadata for faster reads
*   (avoid hitting blockchain every time)
*   Used for all kinds of types
*   All user events are written to chain
*   Eliminates need to read metadata from ipfs each time
*   Much faster
*   Indexing == network availability
*   Delay in retrieving cid blocks the whole network
*   2-way peering between creator and provider nodes
*   Super helpful - keeps connections
*   **Content Service nodes**
*   Monitors all content on the audius network
*   Increases availability of ipfs content
*   Want public gateway availability for decentralization
*   Not just on our private nodes
*   Is like a CDN
*   **Dapp/Client (React)**
*   Use HLS
*   .m3u8 generated at stream time
*   Dynamically streaming 5s segments
*   Prefetching from ipfs
*   And assembling
*   Start w/ public gateways
*   Fall back to creator nodes
*   Starting audius gateway soon
*   Works quite well
*   **Upcoming**
*   Embedded js-ipfs in browser
*   Private network (private?)
*   Not a cluster - more like private swarm
*   Publish the swarm key
*   If private network, don’t have to fetch through public network
*   Audius nodes can peer together, improving perf
*   Hopefully keep all peers connected
*   And not get gc’d out
*   Interested in “swarm bind”
*   Peer resolution
*   Real time payments coming
*   Need to identify which peer served cid
*   To reward them
*   Contributing
*   Looking for service providers
*   Service providers who stake now, included at mainnet
*   This is what makes it decentralized
*   **Questions**
*   Q: Financial model
*   Revenue from a stream distributed amongst creators
*   And Service provider
*   Also maybe discovery - who put in playlist, etc
*   Eg, curation
*   Rewarded in different percentages
*   Audius protocol doesn’t get a percentage
*   No cut
*   Only directly relevant actors get compensated
*   Segmentation at 6s
*   Pay per segment
*   Rt payments per segment
*   Q: swarm bind - ???
*   Q: use own gateway?
*   Public gateways are transitional
*   Cycle between public gateways
*   Private gateway coming soon
*   Q: how much work for machine to be creator node?
*   What about desktop being the creator node?
*   Some func moving to desktop app
*   But always will need an always-online creator node
*   Desktop would maybe increase availability
*   But need master copies in one place
*   Recommend aws/t2 xlarge, single ec2 node
*   Webserver, audius, rds
*   So hosting provider is recommended
*   2-4 core, 16gb ram, terabyte
*   Q: cluster used for failover?
*   No. evaluated, but …
*   Don’t and can’t control what providers run
*   So simpler to do manually instead of cluster
