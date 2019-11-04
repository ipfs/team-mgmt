## IPFS All Hands Call July 8th, 2019



*   **Moderator:** @jimpick
*   **Notetaker:** @momack2
*   **Attendees:**
    *   _@jaycarpenter_
    *   _@alanshaw_
    *   _@andrew_
    *   _@lidel_
    *   _@jessicaschilling_

**Moderator checklist**



*   Ensure that there is a notetaker
*   Start recording
*   Ask attendees to add their names to meeting notes
*   Call for additional agenda items

**Agenda**

**Presentation: **PeerPad Demo

**Speaker: **Jim Pick

**Notes**



*   New version at peerpad.net
    *   Collaborative Demo!
*   Uses CRDTs
*   Uses peer-base - works in the browser
    *   Uses libp2p for network communication and websockets
    *   Uses pubsub for document gossiping
*   Discussify is another tool - an extension for website commenting - that moxy built on peerbase
*   Js-delta-crdts - follow on paper for middle ground between other CRDT implementations
*   Lights.jimpick.com - home automation demo using peer-base
    *   Plan to use as “hello world” app
*   merkle-CRDTs
    *   Stores data structures in IPLD - can store very large data structures
*   Replicated object notation (RON) - another research project
*   The pinner stores encrypted data using IPLD - in the web browser it doesn’t use IPLD
