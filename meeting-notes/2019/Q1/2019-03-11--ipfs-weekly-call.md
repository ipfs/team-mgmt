# IPFS Weekly Call March 11th, 2019

-   **Moderator:** @pkafei
-   **Notetaker:** @terichadbourne
-   **Video:** https://youtu.be/8JmCaCQOVEA
-   **Attendees:**

    -   @jaycarpenter
    -   @jonnycrunch
    -   @alanshaw
    -   @terichadbourne
    -   @jimpick
    -   @MattOber1
    -   @zcstarr
    -   @vmx
    -   @aschmahmann

  

**Moderator checklist**

-   Ensure that there is a notetaker
-   Start recording
-   Call for additional agenda items

  

**Agenda**

Presenter: Brian Hoffman

Topic: Open Bazaar and IPFS

Notes:

-   Brian’s background is in engineering and he’s CEO at OB1
-   Open Bazaar is open source project building a protocol and software for e-commerce that’s as decentralized as possible and uses only cryptocurrencies
-   One of the better known and most used DApps
-   Every OpenBazaar node is also an IPFS node
-   OpenBazaar.com is a read-only version of the network so people can browse using the gateway without downloading. (Have to download to purchase.)
-   OpenBazaar v2

    -   Golang software stack (IPFS, BTCD and all marketplace code)
    -   Uses IPFS/libp2p for the data storage layer and networking
    -   Tor transport
    -   Offline messaging layer on top of IPFS - can create listings or request to make purchases while one party is offline and have the actual purchase happen when all parties are back online
    -   IPNS for naming system

-   How this is different from standard IPFS network

    -   Uses a fork of IPFS network

        -   Extends achingtime from 1 day to 1 week for offline support, etc.

    -   Custom indexers built to crawl the network and provide search/caching

        -   Puts results of crawl into Elasticsearch
        -   Search API provides storefront and user data (users, listings, etc.)
        -   Offer up IPNS records to speed up resolution

    -   Gateways serve as supernodes

        -   OpenBazaar servers are programmed to push all publishes to the Gateways so they can seed content immediately

-   Access storefronts using IPNS addresses for static locations of user profiles and storefronts, with content served via IPFS hashes (profile JSON, images, etc.)
-   Custom data directory

    -   Stores offline messages in a folder for durable storage
    -   Adds logging
    -   Hidden service Onion keys stored in data directory
    -   Repover allows tracking migrations of OpenBazaar

-   When you update your profile, OB pushes data to seeds, publishes to IPNS, and gateway indexes content. Publishes take 1-6 minutes although retrieving is super fast. Looking at alternative tiered routing options (maybe an HTTP endpoint that would be faster than DHT?)
-   Future: Would like to get off of a fork to make upgrades faster
-   Coming soon: Mobile app called Haven runs same code as desktop on the device - full IPFS node. Compiled into an arm binary. Shopping, chat, wallet, and social (like decentralized Twitter) will all be supported.
-   Mobile challenges:

    -   No inbound connections on mobile, want to take advantage of circuit relays. Every communication is currently like an offline message.
    -   Resource usage is high, need to optimize
    -   Bootstrapping is slow on mobile
    -   Would like to move to js-ipfs (already working on building out web version using js-ipfs)

-   Q&A

    -   @johnnycrunch: Are you compiling go to ARM?

        -   Yes, using x go. When release is finished it’s tagged and compiled and dumped into GH. Wrapped in iOS creating a bridge. Similar concept on Android.

    -   @alanshaw: What are the main blockers stopping you from moving to js-ipfs?

        -   Haven’t tested that thoroughly. Have done initial experiments. Were heavily reliant on IPNS and DHT which are very new to js-ipfs and have had some challenges getting those to work in this context, but just started working on it.

    -   @aschmahmann: Would a pubsub based on IPFS be suffient of do you require offline / DHT support

        -   Problem with pubsub is you have to be subscribed first. Need to access nodes you’ve never known about before.

    -   @johnnycrunch - How do you verify the authenticity of goods?

        -   Rely on vendors to be honest
        -   Implemented “verified moderators program” with buyer, seller, dispute resolution moderator and money goes into an escrow account until you’re happy with purchase, then it’s released to seller.
        -   Added value program, not forced to use it
        -   Try to stay away from handholding and legal liability

    -   @aschmahmann: have you considered using DIDs for social identifiers

        -   No. can publish to DNS and use DNS names to resolve storefront with txt record in your DNS or can use blockstack IDs

    -   @momack2: on the tor / private browsing - what are the expectations of OB users in terms of privacy? Do you do anything special around IPFS to add more security guarantees?

        -   Asks you if you want to route through Tor Onion transport before it connects you
        -   We don’t promise that there aren’t leaks
        -     



-   Additional notes

    -   This call will be an hour earlier than usual for non-US folks for the rest of March (16:00 UTC instead of the usual 17:00 UTC) due to differing daylight savings time periods globally. US folks will have the call at their usual time (12:00 Eastern). In April it will feel like the normal time for everyone again (back to 17:00 UTC, still 12:00 Eastern).
