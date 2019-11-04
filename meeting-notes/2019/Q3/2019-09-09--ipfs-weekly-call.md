## IPFS All Hands Call Sep 9th, 2019



*   **Moderator:** @achingbrain
*   **Notetaker:** @olizilla
*   **Attendees:**
    *   _attendee names…_
    *   _@jaycarpenter_
    *   _@vmx_
    *   @mburns
    *   @terichadbourne
    *   @lidel
    *   @momack2
    *   @mikeal
    *   @autonome
    *   Yiannis Psaras (@yiannisbot)
    *   @stebalien
    *   @daviddias
    *   Warp Fork
    *   Dirk McCormick

**Moderator checklist**



*   Ensure that there is a notetaker
*   Start recording
*   Ask attendees to add their names to meeting notes
*   Call for additional agenda items

**Agenda**

_General discussions, decisions, etc., add your name: your shout-out here!_



*    Offline Camp got rescheduled! You can still go! 27th-30th Sept in Grants Pass, Oregon, USA.  A few tickets and scholarships still available. [http://offlinefirst.org/camp/](http://offlinefirst.org/camp/) 
*   **TALK:** Our very own Dirk McCormick tells us about Bitswap - an overview of the protocol and improvements that are in the pipeline.
*   Bitswap is how ipfs gets stuff from the network
*   It will either get from your repo or ask the network if its not there
*   Typically you request a root block <cid>
*   It has links, so you ask for 1 block, ask for many blocks, and so on
*   Or you ask for a path, where you might request each block along the path and then all the links
*   Bitswap asks all the peers its connected to for a WANT, the cid for the root
*   Once some peers respond, with blocks, we add them to a session, so we can ask them for subsequent blocks
*   Peer A sends out WANTS. Peer B recieves them and keeps a list of all the CIDs that a has asked for
*   Peers in a bitswap session are ordered by latency
*   Sessions are limited to 32 live wants.
*   Issues
*   Peers could be ordered by throughput rather than latency
*   Splitting small numbers of peers introduces unnecessary queuing
*   Better to rate limit per-peer, rather than per-session
*   We want to “keep peers busy” so we want to optimise to keep the pipe full, with peers sending us blocks.
*   Proposed upgrade
*   Add a HAVE message
*   Peer a sends a want-have
*   peer b sends back a HAVE, rather than the block
*   If it’s a small block then peer b would send the block immediately
*   HAVE and DONT_HAVE responses let us determine which peers to ask for more
*   We can ask for blocks (WANT-BLOCK) and for info about if others have it (WANT-HAVE) in parallel, so we can start getting data and info about other providers in parallel.

**Demos**

_Show your work!_

**Q&A, Help Wanted**

_Ask questions, get answers. Announce issues that need help, get people to help._
