# IPFS All Hands Call December 3, 2018

-   **Moderator:** pkafei
-   **Notetaker:** olizilla
-   **Attendees:**

    -   _@jacobheun_
    -   _@jonnycrunch_
    -   _@momack2_
    -   _@terichadbourne_
    -   _@Mr0grog_
    -   _@jaycarpenter_
    -   _@alanshaw_

  
**Moderator checklist**

-   Ensure that there is a notetaker
-   Start recording
-   Call for additional agenda items

  
**Agenda**

_General discussions, decisions, etc._

-   Announcing event in Berlin tomorrow: Contribute to Open Source Project IPFS - Tuesday, December 4, 2018 6:30 PM to 9:00 PM - https&#x3A;//www.meetup.com/IPFS-Berlin/events/255970865

  
**Demos**

_Jacob on js-libp2p 0.24.0 release_

-   _Slides_ https://docs.google.com/presentation/d/1z7NOHaLL9T7EFip2oOMBaKybXTxhvqWEDqD6yAl9KB0/edit#slide=id.g3d7037ccd0_0_96

-   _Delegated peer & content routing_
-   _DHT INTEROP!!_
-   _Delegated routing helps for browser nodes and low resource nodes. It allows a node to delegate to another node to do the work of finding and fetching content on their behalf_
-   _Delegated routing example<https://github.com/libp2p/js-libp2p/tree/ae513887f5d90afeb1bc14764800dcca5cad2346/examples/delegated-routing>_
-   _Circuit Relay is on by default._
-   _Js-libp2p and js-libp2p-switch refactored to be state machines along with the connections themselves, and much richer debug logging, for every state transition._
-   _Delegated providers will fetch the content from you and provide it on your behalf… this is similar to the idea of a pinning service._
-   _If you run a libp2p relay node, there is currently no way to limit which nodes you will relay for… you are relaying for the greater good_
-   _Check out uTP https&#x3A;//en.wikipedia.org/wiki/Micro_Transport_Protocol_
