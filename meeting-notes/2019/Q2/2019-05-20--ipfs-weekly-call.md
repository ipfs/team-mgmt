# IPFS All Hands Call May 20, 2019

-   **Moderator:** @pkafei
-   **Notetaker:** @jessicaschilling
-   **Attendees:**

    -   _@jessicaschilling_
    -   _@jaycarpenter_
    -   _@jonnycrunch_
    -   _@prfnv_
    -   _@vmx_
    -   _Guo Liu_
    -   _@pkafei_
    -   _@aschmahmann_
    -   _@lidel_
    -   _@olizilla_
    -   _@jimpick_
    -   _@autonome_
    -   _@jacobheun_
    -   _…._

  


**Moderator checklist**

-   Ensure that there is a notetaker
-   Start recording
-   Ask attendees to add their names to meeting notes
-   Call for additional agenda items

  


**Agenda**

_General discussions, decisions, etc._

-   None here: straight into the presentation!

  


**Presentation:**[**Matters.news**](http://matters.news)** on “Re-imagining Digital Publishing”**

[Slides here!](https://docs.google.com/presentation/d/1T964ehtCgN_pKRqxicOU-ULki6kzkifYOucooKYyQvA/edit#slide=id.p) The screenshots are in Chinese, but are heavily annotated :)

Speaker: Guo Liu (gl@matters.news)

-   Matters is a digital publishing platform in development for more than a year: “humane, distributed, copyright supported”
-   Traditionally, dapps make it hard to work with copyrighted materials but in order to make a good content ecosystem we need to have copyright support and for people to get paid
-   We’ll go over an overview of the prototype, plus a look at Matters’ vision and how they are planning to get there
-   Prototype view: in both traditional and simplified Chinese but they’re happy to add English support once there’s demand
-   It’s a progressive web app, geared toward servicing the writer and figuring out what they need, then sharpen the platform to their needs
-   The UX is “What you might expect from normal publications platforms such as Medium”

    -   Daily highlights, follow activity for other users, etc; sidebar has lots of editor recommendations
    -   Still a small community, so still heavily curated by humans

-   IPFS integration can be seen in a user’s profile page. You can see the articles they publish, the IPFS hashes of them, the public gateways so you can see your content on IPFS, plus the HTML equivalents (these are highlighted in the slide deck)
-   IPFS integration:

    -   Node.js server, go-ipfs + ipfs-http-client
    -   Switched from cluster to single node
    -   Add to IPFS as HTML bundle
    -   Add metadata as CID, using schema from schema.org

-   What are we trying to achieve?

    -   After the internet we see a bloom of content, different ways of discovering content, but most of these have shortcomings
    -   Microblogs, articles etc don’t have a niche ecosystem
    -   Traditional publishers are having a hard time staying in business and either need proprietary formats in order to financially survive or are pushed to provide content for free
    -   Writers don’t often own their own creations
    -   Interesting relationship of accessibility on web vs content length: linear relationship in which availability goes down as content length goes up
    -   Also issues of censorship, particularly in China and Russia (with India and Turkey picking up the rear)

-   Anatomy of content market: There are a lot of different rows of intermediation between writers and readers (curators, publishers etc). In order to build a structure that’s distributed and somewhere that readers can actually discover content, they’ve got to basically build a human graph: a “Content DAG” (illustration on slide 10 in deck)

    -   In that tree, articles can review, reference or reply to other articles, articles can be curated into collections, etc etc
    -   Similarly, each book or journal is itself a DAG containing articles, collections, etc, linked by reviews, references, replies, etc

-   Building the Content DAG:

    -   Creator roles reference, organize, bundle and copyright content
    -   Curator roles recommend and promote content, plus get profit share
    -   Reader roles discover by following other users or via trawling the content DAG
    -   Nodes in the DAG include author info, price and payment info, datetime
    -   Edges in the DAG include ACL and type

-   Now, they are working to create a UI that enables users to write/use the Content DAG in a human-centered way

    -   One area of focus right now is in best practices for collections of articles
    -   Also want to use this system to build books that can be created or printed in a traditional way, using Matters articles as building blocks
    -   Currently prototyping on a website because it’s fast and easy to push updates to users
    -   Eventual goal: Website + app

        -   Optimize for readers, then writers, curators and publishers
        -   Bridge to dweb, straightforward but distributed-compatible
        -   Optimize for special use cases (anonymity, encryption, censorship resilience)

            -   They know it will be slower, but the benefits of these use cases make up for it

        -   Community driven schema
        -   Open to other experiments (“does not need to be as production ready as the website”

-   Timeline:

    -   Website to introduce paid content this July; later dates include magazines, bookmarks etc
    -   Community: Paid content in July, followed by curators, self-publication
    -   Development timeline, in order of chronological distance:

        -   IPFS + electron, IPFS + react-native
        -   Render HTML from hash
        -   Integration with Tor
        -   Payment with cryptocurrency; resolve paid content
        -   Authorization with smart contract

-   Partners: Oxford University Press, China Digital Times, JianJiao, others, Berkeley Counter-Power Lab, LikeCoin (slides 20-21)
-   Challenges

    -   Design:

        -   Choice and integration of tools
        -   Avoiding new schema/protocols
        -   Dynamic content
        -   Authn and access control

    -   Adoption:

        -   Performance of dapp
        -   Killer use case for dapp

    -   Funding:

        -   Social responsibility fundings and family funds
        -   Any other recommendations for funding opportunities?
        -   ICO?

-   Q&A time …

    -   What is your plan for identity and ACL controls? We need to have a union of the IPFS node ID and a blockchain address.

        -   Still deciding between etherium and bitcoin. Access control is harder: we don’t want to have an encryption DRM, that’s “just nasty”. First version is just a schema that says what’s the price and what’s the payment method, leaving the further decisions to the application.

    -   Do you have the Data Structure exploration ready for review? Are the code & docs open source?

        -   Source code of the platform itself isn’t open source “yet - we are still adding tests”, plus not accepting PRs since they’re still working with a design team. But, the desktop and other apps are all to be open source. They’re working on the API schema now. “It’s open source, but it’s not well documented.”
