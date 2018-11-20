# IPFS All Hands Call November 19, 2018

-   **Moderator:** @pkafei
-   **Notetaker:** @terichadbourne
-   **Attendees:**

    -   _@jacobheun_
    -   _@terichadbourne_
    -   _@mikeal_
    -   _@flyingzumwalt_
    -   _@pkafei_
    -   _@momack2_
    -   _@jonnycrunch_
    -   _@jaycarpenter_
    -   _@alanshaw_
    -   _@aschmahmann_
    -   _@lidel_
    -   _@olizilla_

  


**Moderator checklist**

-   Ensure that there is a notetaker
-   Start recording
-   Call for additional agenda items

  


**Agenda**

_General discussions, decisions, etc._

-   Announcement from Molly: Remember to do your mid-Quarter OKR reviews (see email from David Dias)

  


**Demos**

Future of the Web: Internet of Data (MIkeal Rogers @mikeal)

-   Talk notes

    -   In the 90s we had content portals run by businesses (AOL) that were easier to navigate than the web itself with crazy URLs to remember
    -   Keywords were key to organizing content on AOL
    -   URLs were self-created but enabled a much more impressive network of content
    -   Web is built on the network effects of links and depends on URLs and links (foundational building blocks)
    -   URL has content (index.html), authority (mikealrogers.com), and transport (https)
    -   Centralization is baked in to this system, have to talk to a central location
    -   More than HTML - web apps use services and APIs that are also addressed by URL
    -   Data centralization is baked in with content silos behind APIs - we can’t see and manipulate that data the way we can manipulate the web
    -   It’s hard to have the network effect behind paywalls, which is why ad-driven business models proliferate
    -   Databases takes serialized data structures and serialize them again and provide consistency guarantees on read and write end which user interactions all depend on
    -   Without transport and authority of URL system we need to hash the content
    -   Content addressability - referring to things by the hash of the data rather than URLS - a primitive that doesn’t require us to centralize the data - the proof keeps us from having to contact an authority
    -   Here we use CID - a hash with some additional data that tells you how to get the info out of it - can get this from anyone anywhere at any time
    -   Can use CIDs to link between resources and build the network effect we used to see, but at a more primitive layer
    -   Data can be hosted in a variety of places but still linked together
    -   Don’t need to host all of the data yourself to create regression, can just use pointers
    -   “A CID is a pointer than spans the Internet.” - Mikeal Rogers :)
    -   You could build a b-tree or recreate the work databases do in a more primitive way
    -   We can create something like the web for data, built on primitives, giving data the access to network effects that the web has access to
    -   Check out github.com/ipld/specs to learn more

-   Discussion after talk

    -   Mikeal: Focus on sharing this info with web dev audiences without using terms like blockchain, P2P, and merkle dag and making it feel too niche
    -   Mikeal: Most people in web dev audience aren’t familiar with content addressing
    -   Adin: How important is it to discuss the difference between free (via ads) and paid? P2P makes us rely on benevolence of the masses.
    -   MIkeal: Avoiding talking about how you get the data - there are options out there beyond what we’re doing. Google is looking at ways to catalog decentralized data by centralizing the listing. Can talk about it after we have a workflow of how you host stuff yourself of pay others to host it.
    -   JohnnyCrunch: Frustrated with W3C and their URL-focused standards. Would we need a standards body for decentralized?
    -   Mikeal: Don’t want to try to standardize too early while things are changing. We can start some stuff with ITS(?), not W3C. He has a call with someone to help get multiformat stuff on standards track.
    -   Hannah: Do you get questions about private/authenticated data?
    -   Mikeal: Yes, they ask, and everyone needs to encrypt data as best practice. If you want to share and have workgroups, etc. you need to come up with keys etc.
    -   CascadiaJS talk recording will be available on YouTube someday.

  


**Q&A, Help Wanted**

_Ask questions, get answers. Announce issues that need help, get people to help._

# 
