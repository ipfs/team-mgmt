## IPFS All Hands Call Sep 2nd, 2019



*   **Moderator:** @achingbrain
*   **Notetaker:** @olizilla
*   **Attendees:**
    *   _attendee names…_
    *   _@jimpick_
    *   _Topper Bowers (@tobowers)_
    *   _Wyatt_
    *   _@lidel_
    *   _@olizilla_
    *   _@alanshaw_
    *   _@hugomrdias_
    *   _@autonome_
    *   

**Moderator checklist**



*   Ensure that there is a notetaker
*   Start recording
*   Ask attendees to add their names to meeting notes
*   Call for additional agenda items

**Agenda**

_General discussions, decisions, etc., add your name: your shout-out here!_



*   ** Help create a next-generation navigation for [docs.ipfs.io](https://docs.ipfs.io/)!**  \
Join a discussion on the existing navigation structure of the IPFS documentation site, plus a collaborative "card sort" exercise to explore new possibilities for getting around the IPFS docs. 
    *   6 September 2019
    *   1700-1830 UTC
    *   [Join the video call at http://protocol.zoom.us/my/docsforce](http://protocol.zoom.us/my/docsforce)
*   **TALK:** Topper Bowers from [https://www.quorumcontrol.com](https://www.quorumcontrol.com/) tells us about Tupelo, a Distributed Ledger Technology platform that uses IPLD to implement Chain Trees, a novel data structure that can be used to maintain discrete history for each object in your application.
    *   Built for real world apps. Not finance.
    *   Blockchains store ordered transactions
    *   They do a lot of work to make the order fair (total ordering)
    *   Ordering is important to avoid double spend errors
    *   Folks have started to put weather data onto blockchains
    *   Weather data ordering takes as much work as payment ordering
    *   Blockchains keep data forever
    *   Not all weather data (or your app here) needs to be kept globally by thousands of machines forever
    *   When they got started, bitcoin, eth etc existed, but they would be costly per transaction and also wildly variable cost per transaction
    *   Blockchains are hard to scale (power use, transactions per second)
    *   Tupelo introduces “chaintree” and a simpler consenus algorithm
    *   Uses IPLD, which allows signers to work without the entire history.
    *   They can verify the tip is valid and work with that
    *   Its proof of stake not proof of work.
    *   Chaintrees are finite state machines… they transfer from one state (or ipld block) to another.
    *   Each chaintree can mint its own tokens… a token name is namespaced by the chaintree
    *   Can control the maximum number of tokens created.
    *   That’s the only monetary policy supported today, but more will be.
    *   Develop something here: [https://github.com/QuorumControl/tupelo-wasm-sdk](https://github.com/QuorumControl/tupelo-wasm-sdk) (there’s a Golang SDK available too upon request, in the process of open-sourcing). More on ChainTrees here: [https://docs.quorumcontrol.com/docs/chaintree.html](https://docs.quorumcontrol.com/docs/chaintree.html)

**Demos**

_Show your work!_

**Q&A, Help Wanted**

_Ask questions, get answers. Announce issues that need help, get people to help._
