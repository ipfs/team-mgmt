# IPFS Community Call January 28th, 2019

-   **Moderator:** @pkafei
-   **Notetaker:** @alanshaw
-   **Attendees:** 

    -   _@alanshaw_
    -   _@pkafei_
    -   _@jacobheun_
    -   _@jaycarpenter_
    -   _@jimpick_
    -   _@flyingzumwalt_
    -   _@vmx_
    -   _@olizilla_
    -   _@aschmahmann_
    -   _@MattOber1_
    -   _@eocarragain_
    -   _@nukemandan_
    -   _@jamiew_
    -   _@prfnv_

  
  


**Main Topic:**The IPFS Pinata Project

**Presenter:** Matt Ober

**Video:** https://www.youtube.com/watch?v=NHIqSYXAu0M&t=385s

-   Background with Ethereum
-   Allow Ethereum and web3 devs to post content on IPFS
-   Launched October 2018
-   Has key+secret authenticated HTTP API

    -   Upload file to pin
    -   Pin by existing hash
    -   Pin list (per user)

        -   Search via

            -   Meta
            -   When pinned
            -   Pin size
            -   \+ more

        -   Pagination

    -   \+ more endpoints

-   Give your pins metadata like a name and custom key values for use in search (stored in postgres)
-   Running their own IPFS gateway at gateway.pinata.cloud
-   Pay monthly for what you have pinned
-   Coming soon - IPNS & DNS Link for personal sites and blogs
-   Code base will be open sourced eventually 🙌
-   Want Cluster JS HTTP client
