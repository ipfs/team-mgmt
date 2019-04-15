# IPFS Weekly Call April 15, 2019

-   **Moderator:** @pkafei
-   **Notetaker:** @jacobheun
-   **Video:** 
-   **Attendees:**
    -   @alanshaw
    -   @prfnv
    -   @AbhikChowdhury6
    -   @jaycarpenter
    -   @mburns
    -   @jimpick
    -   @jessicaschilling
    -   @lidel
    -   @MattOber1
    -   @vmx

### Moderator checklist
-   Ensure that there is a notetaker
-   Start recording
-   Call for additional agenda items

### Agenda

**Presenter**: Joel Torstensson

**Topic**: Intro to 3Box and its Usage of IPFS

**Notes**:

-   A user data network to enable users to build social dapps
-   Created 3Box after working in the Ethereum space, existing apps were felt to be uninteresting and scary to use
-   3Box is made up of:
    -   3box-js - main entry point for developers
    -   3box-pinning-node - nodejs application for replicating and persisting user data
        -   Leverages js-datastore-s3
    -   3Box Profile Dapp - a simple UX for identity and profile management
-   3Box.js allows users to restrict access to data via Spaces
-   How it works:
    -   js-ipfs data storage and pubsub
    -   OrbitDB databases
    -   DID for user identifiers
    -   The Dapp communicates with the pinning node via pubsub
    -   Leverages a REST API to kind of cache the current state so you don’t have to fetch and rebuild state of CRDTs
-   Future Exploration
    -   Data Schemas, how are we storing interoperable schemas. Would be cool to see IPLD based schemas
    -   Compatibility of IPLD and JSON-LD
    -   A standard for signed linked data


### Questions:

**Q:** Is 3Box in production right now or still in development?

**A:** We see ourselves as in production. We’re using new technologies so things may be shaking at times. Already being used by applications and have others in the works.

**Q:** What are your biggest pain points using JS IPFS right now?

**A:** It’s been a good experience. When IPFS does a release we have to wait to update until OrbitDB has updated their version. Pubsub works fairly well, would like to explore making it easier to understand when messages can be sent and received by a specific peer to make sure the message is received.

**Q:** What specific DID method are you using?

**A:** MUPort:<https://github.com/3box/muport-did-resolver>.

### Comments

@vmx: There's schema work going on in the ipld team:<https://github.com/ipld/specs/pull/113>
-   There's a bi-weekly meeting (today( of the IPLD team that is open for everyone. more information is available at : https&#x3A;//github.com/ipld/team-mgmt#bi-weekly-call
