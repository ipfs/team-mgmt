# IPFS All Hands Call Mar 30, 2020
  
-   **Moderator:** @alanshaw
-   **Notetaker:** @lidel
-   **Attendees:**
    -   __@jaycarpenter__
    -   __@andrew__
    -   __@carsonfarmer__
    -   __@jessicaschilling__
    -   __@Matt Ober__
    -   __@jennturner__
    -   __@ribasushi__
    -   __@gravenprest__
    -   __@lidel__
    -   __@terichadbourne__
    -   __@carlinwilliams__
    -   __@johnnymatthews__
    -   __@krudolph9__
-   **Video:** https://youtu.be/7dHj-J85_Tc

**Agenda**

_Lightning Talks!_

-   Carson - js-threads in Textile

    -   Original paper:<https://docsend.com/view/gu3ywqi>
    -   Threads

        -   Document store/ KV store
        -   Familiar API
        -   Offline first
        -   Encryption and auth primitives available out of the box
        -   Future

            -   Docs!
            -   Pubsub-only transport
            -   Indexing
            -   Pinning controls

    -   <https://github.com/textileio/js-threads>
    -   <https://github.com/textileio/go-threads>
    -   <https://github.com/textileio/papers>
    -   Q: integration with OrbitDB?

A: there is a functional overlap, one could write orbitdb codec that listens on pubsub

-   Matt Ober - Pinata Regions and Replications

    -   <https://medium.com/pinata/ipfs-regions-and-replications-a1e52d60dfdb>
    -   Pin content multiple times in multiple regions
    -   Control number of copies per region (eg. NYC vs Berlin)
    -   Custom policies for API uploads
    -   Region policies can be changes multiple times
    -   Q: plans for other regions?  
        A: Can support private swarms, and policies for cloud-based regions (eg. asking for 1 copy in AWS and 1 in Azure)

-   Dietrich - EthDenver

    -   There was a time when people met irl in Colorado
    -   Decentralized Networks Summit
    -   EthDenver

        -   Contrast between first timers vs the usual folks
        -   Everyone building on IPFS, confirmed by hackathon results

            -   24 of 52 submissions!
            -   8 of 16 finalists!
            -   3 of 5 winners!

    -   Q: any hackatons/events/grants related to DWEB and COVID-19?

        -   Protocol Labs announces COVID-19 Open Innovation Grants:  
            <https://research.protocol.ai/posts/202003-covid-grants/>
        -   <https://consensyshealth.com/covid-19/>

-   Alan Shaw - IPFS Browser Sandbox

    -   <https://github.com/alanshaw/ipfs-browser-sandbox>
    -   A browser to surf the internet but with IPFS!
    -   Technology Preview of how IPFS experience could look
    -   No limits, free to experiment with UI and overall UX
    -   Ability to experiment with various policies which are set in stone in regular browser
    -   DEMO

        -   \[a browser with tabs appears, but it has content-paths in address bar]
        -   \[images: room guardian retrieved from IPFS!]
        -   \[web pages]
        -   Fun experimentation: returning arbitrary DAGs, not only unixfs

            -   Example: dag-cbor returned as JSON

    -   **For experimentation and fun times only, do not do banking with it :^)**
    -   Q: shouldnt IPLD use ipld:// or something  
        A: yes probably :^

Q: will it follow upstream changes?  
A: it is an Electron app and uses js-ipfs as the backend, so a matter of dependency bump.
