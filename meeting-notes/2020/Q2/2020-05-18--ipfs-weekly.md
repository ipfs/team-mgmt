# IPFS All Hands Call May 18, 2020

-   **Moderator:**@aschmahmann
-   **Notetaker:**@jessicaschilling
-   **Attendees:**

    -   _@jaycarpenter_
    -   _@jakehemmerle_
    -   _@jessicaschilling_
    -   _@rafaelramalho_
    -   _@jennturner_
    -   _@Kwray_
    -   _@codynhat_
    -   _@gravenp_
    -   _@alanshaw_
    -   _@chadeylander_

  


**Moderator checklist**

-   Ensure that there is a notetaker
-   Start recording/Live streaming to YouTube
-   Ask attendees to add their names to meeting notes
-   Call for additional agenda items

# Agenda

-   **Announcements**

    -   Go-ipfs v0.5.1 [released](https://github.com/ipfs/go-ipfs/releases/tag/v0.5.1), including some great updates … so you should upgrade right now :)

-   **Presentation:Anytype, Zhanna Sharipova and Roma Khafizianov**

    -   Last time, Anytype presented us a prototype
    -   This is a new version built on a new architecture
    -   Lots of technical progress in the last month
    -   Switched filestore resulted in significant performance increase for typical use cases

        -   Was from 1-2 sec, now 10ms

    -   Now, two foci going forward

        -   Switching from state-based CRDT to event-based, will allow to improve resolution for pages
        -   Improved data structures: extendable schemas for data, plus CRDT for the data

    -   Slide: rough draft of page’s state and changes flow in Anytype ![](https://lh4.googleusercontent.com/XfgUNRxsNb7KgrF3-e6xEvfhTT1khxYrgUdxA8OTOw8csNPinm5SQbpokFb-cDr9AjKBoVr7NBqCPhnXdlxj_3ms0RbNaCKSDqYRonY1i22Er5-o1W4oEUDBsXxmSemCWMXXDvva)

        -   IPFS DAG > Threads > Library > Middleware > Client
        -   Native clients for mobile benefits from libraries

    -   Demo of next version

        -   Main screen: Zhanna’s personal knowledge base (as a usage example)
        -   Anything in Anytype consists of objects and the relationships between them
        -   Example: pages (web pages with an easy-to-use editor for adding blocks etc)
        -   Currently “page” is the only type of object, but plan is for adding people, tasks, other types of objects in the near future
        -   Relations:

            -   a page can be added to an existing page like a traditional hyperlink
            -   In the future, will have different types of relations; particularly vis-a-vis different objects than pages
            -   Navigation is bidirectional, unlike the current web: both bookmarks and in a navigational map depicting the entirety of what’s linked to what
            -   So, each object is meaningful in itself, and useful in the larger context when examining its interconnectedness

        -   This acts to give as much power to non-developers as possible to create their own unique workflows without needing to code
        -   When Anytype open-sources, they’re hoping other developers will add their own new and awesome objects … transactions, invoices, other great things?
        -   Basically it’s intended to be a foundation for the knowledge that we all have: a platform for expansion for others
        -   There will be non-encrypted pages, too: personal websites, your book collection, etc -- as an analogy to the traditional web

            -   Still censorship resistant and all the other good bits of the dweb

        -   The goal: make it as easy as possible to put content on web3!

    -   Q&A …

        -   Did you build your own CRDT library?

            -   Roman: Built our own. We have pretty specific cases for the blocks in documents; if you imagine a document of different blocks, “one person put the block here, the other here” isn’t specific enough. Need to be sure that in most cases conflicts will be solved automatically without any user interruption

        -   What sort of conflicts do you need to give back to the user to resolve?

            -   Roman: We are not trying to solve conflicts at the moment they appear, can be resolved later when it’s comfortable to you. Could be that two users write to the same block, but can possibly see via a UI to choose which appearance of block they prefer. Something similar to Git’s approach.

        -   In Anytype, is each page a thread, or do you have a more complex thread architecture?

            -   Roman: You need a thread when you have a specific encryption for this kind of entity. The whole page is one thread. If you wanted to link to simple blocks in other pages we can refer to “smart blocks” - other threads.

        -   If there are place I could read more details about specific constraints mentioned & how your custom CRDTs address those I’d love to read / provide feedback

            -   Roman: As soon as we finalize APIs, we’ll provide that info.

        -   What’s your plan going forward for AnyType? What can IPFS core team do to help with your next phase?

            -   Zhanna: Currently inviting friends and family for beta, plan to start inviting external users in a few weeks. Finally have arrived at a stable version that we’re not afraid to share any more. Anyone who really wants to use a self-hosted notetaking document editor would be a great tester … but if you need other features it might not be quite ready for you yet.

**Q&A, Help Wanted**

_Ask questions, get answers. Announce issues that need help, get people to help._

