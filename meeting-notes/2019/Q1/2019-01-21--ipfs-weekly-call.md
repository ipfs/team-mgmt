# IPFS All Hands Call January 21st, 2019


-   **Moderator:** @pkafei
-   **Notetaker:** @jimpick
-   **Attendees:**

    -   _@alanshaw_
    -   _@vmx_
    -   _@jacobheun_
    -   _attendee names..._

  
**Main Topic:** [Tallylab](https://tallylab.com/) and IPFS

**Presenter:** Jordyn Bonds and Mark Henderson

**Video:** https://youtu.be/wYIMbTaJfAA

**Notes**

-   TallyLab Demo

    -   P2P diary app
    -   Many people use it for health
    -   The app has the ability to track correlations
    -   TallyLab is a Progressive Web App
    -   Example Demo: Chocolate vs. Headaches. TallyLab can be used to track the correlation between an action and outcome- for instance does eating chocolate cause headaches?
    -   IPFS used to back up data
    -   Data stored locally in Indexeddb (but browsers sometimes nuke the data)
    -   Encryption uses [libsodium](https://libsodium.gitbook.io/doc/)
    -   IPNS name is derived from user’s public encryption key
    -   Moving to [OrbitDB](https://github.com/orbitdb) which is a peer-to-peer database that is built on top of IPFS
    -   Questions:

        -   Interop with [QRI](https://qri.io/)
        -   RSA or EC keys? A: RSA
        -   Per-device keys? A: Each device has random keys. Backup flow asks questions, and data is used to generate a seed for the key.
        -   Interesting properties on the data model? (IPLD) A: Data model is malleable. People can track whatever they want. Collection, tally, count, data, notes, timestamp, endstamp… Thinking about things to add to count.
        -   What communities are you working with? Behavioural therapists. HIPAA and GDPR compliant. Health care.
