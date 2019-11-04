## IPFS All Hands Call November 4th, 2019

*   **Moderator:** Molly
*   **Notetaker:** Inline in notes
*   **Attendees:**
    *   _attendee names…_
    *   _@jaycarpenter_
    *   _@terichadbourne_

**Moderator checklist**

*   Ensure that there is a notetaker
*   Start recording
*   Ask attendees to add their names to meeting notes
*   Call for additional agenda items

**Agenda**

_General discussions, decisions, etc._

*   (Molly, 2 min) IPFS Weekly Update
    *   New go-ipfs as a library tutorial: [https://blog.ipfs.io/073-go-ipfs-as-a-library](https://blog.ipfs.io/073-go-ipfs-as-a-library)
    *   [Js 0.39 released](https://ipfs.io/ipns/blog.ipfs.io/071-js-ipfs-0-39/), with config profiles, in-browser request throttling, ability to init+start the daemon in one go, and so much more
    *   Go-ipfs performance improvements:
        *   Add performance work shows that add+badger is (already) as fast as copying on some platforms…
        *   Fix merged to go-ipfs master for improved bitswap performance on slow disks (should increase cluster throughput)
    *   IPFS docs [V2 repo](https://github.com/ipfs/ipfs-docs-v2) is being worked on!
        *   Aim is to have a sandbox site ready for folks to talk through with the team at Lab Week; this’ll have content parity from the legacy site, improved IA for a new nav structure, and whatever other things we implement in time off our list
    *   Note libp2p v0.4 doesn’t support 1024 bit keys
    *   manifestV3 from Chrome - controversial changes to permissions that addons have affecting companion (slowing down release cycle / time to push changes, and also forcing major refactor)
        *   In-depth review: [https://github.com/ipfs-shipyard/ipfs-companion/issues/808](https://github.com/ipfs-shipyard/ipfs-companion/issues/808)
        *   Meta-issue about Manifest V3: [https://github.com/ipfs-shipyard/ipfs-companion/issues/666](https://github.com/ipfs-shipyard/ipfs-companion/issues/666) 
*   Hector - something to test 
    *   <code>git clone [https://github.com/ipfs/go-ds-crdt.git](https://github.com/ipfs/go-ds-crdt.git)</code>
    *   <code>cd go-ds-crdt/examples/globaldb</code>
    *   <code>go build</code>
    *   <code>./globaldb</code>
    *   <code>(alternatively you can grab the prebuilt binary (linux-amd64): QmVyDjF1S74bMKjXCWpF31yTpZumqqVtKH7Tf4qiBPtfud</code>
*   @autonome - IPFS Browser Design Guidelines preview
*   @alanshaw - uniting the files APIs
    *   [https://github.com/ipfs/specs/issues/98](https://github.com/ipfs/specs/issues/98)
    *   [https://github.com/ipfs/interface-js-ipfs-core/issues/284](https://github.com/ipfs/interface-js-ipfs-core/issues/284) 
