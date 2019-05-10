# IPFS All Hands Call May 6th, 2019

-   **Moderator:** @pkafei
-   **Notetaker:** @dietrich
-   **Attendees:**

    -   _@jessicaschilling_
    -   _@AbhikChowdhury6_
    -   _@jacobheun_
    -   _@jimpick_
    -   _@jaycarpenter_
 

  
**Moderator checklist**

-   Ensure that there is a notetaker
-   Start recording
-   Call for additional agenda items

  
**Agenda**

Presenter: Piotr Dyraga and Raghav Gulati

Presentation: Keep Network and Libp2p

Video: https://youtu.be/EamY2U2Ohyk

**Demos**

_Show your work!_

  
**Q&A, Help Wanted**

_Ask questions, get answers. Announce issues that need help, get people to help._

# Notes

-   Keep
-   Piotr & Raghav
-   Uses libp2p
-   Privacy layer for public blockchains
-   “Enable smart contracts to interact w/ data in a private way”
-   Bridge btwn public bc and priv data
-   Can store and compute data private even from itself
-   Keep network
-   1 part on chain - public api
-   2 part off chain - serves reqs from the chain
-   Random beacon
-   Client req to chain “new rdm # plz”
-   Keep clients coop to serve the req
-   Publish res to chain
-   Then added to new rdm group that may or may not be selected (rdm) to serve future reqs
-   Clients can be in multiple groups
-   Groups are limited timespan
-   Groups must have high delivery rate, w/ other service crit
-   Peer discovery mech for when clients join, so use libp2p
-   Go + Go = Go!
-   \> Raghav
-   1.5yrs ago
-   Libp2p, go-eth or diy
-   Clients have their eth keys, turn into libp2p rep and get peer id
-   Instantiate and connect to libp2p network
-   Then find bootstrap list via published nodes
-   (DOS vector?)
-   Need diversity of bootstraps, plus retry
-   Wrote custom transport to hijack connection
-   Group selection protocol
-   When selected, join pubsub channel (hash of clients)
-   Topic in libp2p pubsub
-   Using floodsub
-   Maybe switch to gossip in future
-   Dkg or relay signing
-   Publish on pubsub
-   Rely on libp2p for signing instead of diy
-   Msg is protobuf
-   Recv -> next()
-   Each msg treated like http req
-   Call handler for given protocol
-   Some code for key types, but mostly ECDSA
-   TODO
-   Need deeper conn mgmt
-   Eg ban/sever conns for given period
-   Need more resilient bootstrap scenario, diversity, retries, etc
-   Rework validator pipeline
-   Can run code sometimes but not others - signing enabled resulted in msg drops
-   Inline validation
-   Patch for splitting validation off for async processing
-   Their only diff from master
-   Q&A
-   Who is using Keep? Use-cases?
-   Haven’t launched priv testnet
-   But ppl like Aragon are interested
-   Ppl who need decentralized custodial solutions
-   Priv containers for data - mask data for period of time
-   ECDSA keys
