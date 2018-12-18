# IPFS All Hands Call December 10th, 2018

-   **Moderator:** @pkafei
-   **Notetaker:** @alanshaw
-   **Attendees:**

    -   _@alanshaw_
    -   __@jonnycrunch__
    -   __@jacobheun__
    -   __@jaycarpenter__
    -   __@terichadbourne__
    -   __@MattOber1__
    -   __@momack2__
    -   __@lidel__
    -   __@pgte__


**Moderator checklist**

-   Ensure that there is a notetaker
-   Start recording
-   Call for additional agenda items


**Agenda**

_General discussions, decisions, etc._

-   (@daviddias, 2 min) It’s that time of the Quarter again, OKR time! ✨

    -   https://github.com/ipfs/team-mgmt/issues/792


**Main Talk**


**Sander Pick - Textile photos (Talk Notes)**

-   Mobile a good space to create dapp right now
-   Decentralized and open iCloud that developers cna users can build upon
-   Originally wanted to tackle photos as it’s easy to define ownership etc.
-   Also wants to enable people to build apps like textile
-   Based on the idea of a wallet
-   Works on operation based CRDTs that textile call a thread
-   Will be integrated with Filcoin in the future
-   Next feature is figuring out an account recovery mechanism
-   Chat feature included threads



**Q&A, Help Wanted**

Q: How are the blocks encrypted or kept private?

_A: Each message in a thread is encrypted with the thread’s key. If you are invited to a thread, you can take the thread’s key and encrypt it with your public key or encrypt the thread with a one time AES key and put it to IPFS and finally send you a link._



Q. Do you use IPFS mutable file system or are you directly manipulating the DAG? Are you familiar with Triple I F the International Image Interoperability Framework and their APIs for images and manipulating images- did you use that as a reference point to think about schemas and things?

_A. We don’t use the MFS system, and it is more our concept of a file- it could be a json or another file type. When you create a photo schema it does validate the right content type for the data. And for the second question, no, that sounds awesome, and I would love to learn more about Triple I F._



Q. This is amazing work and I’m in full support of creating a firebase or something, and I know that the metadata working group is working on something similar. I want to know if you are familiar with their work and how much of Textile is custom and how much of it maps to Peer Star App and so on?

_A. Last week I talked with Pedro, and Jeromy and I really don’t want to build a castle in the sky, or a custom thing, I do want to collaborate. If there is built-in core stuff from dynamic data I would love to use that instead of what we have._



_A2. We have these profiles that are super basic, if someone had a nice identity solution we would like to plug that in, we don’t want to be in the business of creating another solution. It would be nice to enter the textile internet space with an existing idea- even a centralized solution would good to bootstrap your account._


Q. You’ve done great work trying to get this on iOS and Android- that seems like an incredible engineering effort. I’m very curious about what limits you’ve seen with performance, power consumption, and performance and things we can help out with.



_A. So honestly, we really haven’t done rigorous analysis. I can tell you that it is not great, and it is a power. One of the trickiest thing is starting and stopping the node. At this point it would be cumbersome for someone to pick it up and start building. We really want to improve that experience, but things like that are really hard to deal with. I wish I had some numbers around power consumption. We are just kind of like- we hope the phones get more powerful._
