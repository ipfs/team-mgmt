# IPFS Weekly Call February 25th, 2019

-   **Moderator:** @pkafei
-   **Notetaker:** @jimpick
-   **Attendees:**

    -   _@jaycarpenter_
    -   _@jonnycrunch_
    -   _@vmx_
    -   _@mburns_
    -   _@lidel_
    -   _@nukemandan_
    -   _@jacobheun_
    -   _@prfnv_
    -   _@zcstarr_

  
**Moderator checklist**

-   Ensure that there is a notetaker
-   Start recording
-   Call for additional agenda items

  
**Agenda**

Presenter: Cale Teeter

Topic: IPFS in Enterprise

Notes:

-   Blockchain Engineering at Microsoft Azure
-   Building consortiums with large enterprise customers
-   IPFS as part of the consortiums
-   Consortiums - between 2 participants (companies)
-   Quorum - Fork of Ethereum

    -   GEth + Private TX Mgr + IPFS

-   Supply chain management - need to store documents off-chain
-   Beyond 15-20 participants, using traditional storage doesn’t scale
-   IPFS in Docker in the Azure App Store (packaged by Microsoft)
-   Fully automated installation of multiple IPFS nodes (can be private using libp2p)
-   Can build private tunnel between datacenters
-   Demo of IPFS in docker in 2 datacenters (using private swarm key)
-   Demo of creating an IPFS cluster in Azure dashboard
-   Multiple companies can connect their clusters together
-   In progress work: automatic privacy and key management, network invitations
-   Documentation for IPFS on Azure, sample code
-   Getting interest … enterprise wants privacy
-   Questions:

    -   Jonnycrunch: How do you verify code hasn’t been altered?

        -   (Tour of templates)

    -   Jonnycrunch: DID integration?

        -   Working with various groups
        -   Extend DID for role/group based access
        -   Using Azure Keyvault
        -   Extending Microsoft Authenticator app for key storage

    -   Dan Shields: Is the source code available?

        -   Source of template is available as download when creating project
        -   Not in a public repo currently

    -   Matt Ober: Are you seeing more push for encrypted content or non-encrypted content from enterprise?

        -   Companies want to see things encrypted

    -   Portia: Wishlist for features from IFPS?

        -   Libp2p privacy feature … currently flagged as experimental

  
_General discussions, decisions, etc._

-   @jonnycrunch IPID DID method draft is live:<https://did-ipid.github.io/ipid-did-method/> 
