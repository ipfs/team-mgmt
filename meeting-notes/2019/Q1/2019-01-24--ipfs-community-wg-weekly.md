# IPFS Community Working Group Weekly Sync 2019-01-24

-   **Video Recording:** <https://youtu.be/SUEySblFvjE>
-   **Moderator:** @mikeal
-   **Notetaker:** @pkafei
-   **Attendees:**

    -   _@NukeManDan_
    -   _@pkafei_
    -   _@terichadbourne_
    -   _@renrutnnej_
    -   _@kk3wong_
    -   _@mikeal_
    -   _@jimpick_

**Moderator checklist**

-   Paste agenda link into Zoom chat (<https://docs.google.com/document/d/1N4wlwVexHOGmBdSaECMnxvkDz11A-vmN7DMe4I4a654/edit?usp=sharing>)
-   Remind everyone to add their names to “Attendees” list in doc
-   Ensure that there is a notetaker
-   Start recording (on computer and livestream)
-   Call for additional agenda items

**Agenda**

_General discussions, decisions, etc._

-   Start with Team Updates and Demos
-   [Review OKRs](https://github.com/ipfs/community/blob/master/okrs/2019-q1.md)
-   **_{ add your items below}_**
-   (&lt;your_name>, topic)




**Team Updates**

@terichadbourne

-   Done:

    -   Assisting with adding ProtoSchool chapters (ongoing)

        -   Mumbai, Hong Kong, and Seattle are live
        -   DC, Beijing, Berlin are in process
        -   View chapter list at: <https://proto.school/#/chapters>
        -   Requests in progress: <https://github.com/ProtoSchool/organizing/issues?q=is%3Aissue+is%3Aopen+label%3Anew-chapter>
        -   Chapter setup instructions: <https://github.com/ProtoSchool/organizing#how-to-start-a-new-protoschool-chapter>

    -   Started ProtoSchool roadmap discussion. Please contribute!

        -   Roadmap issue: <https://github.com/ProtoSchool/protoschool.github.io/issues/104>
        -   Messaging exercise: <https://docs.google.com/document/d/1XVd_ZVmjVOLYoGHACX3x5zJEuFP-6aEm-AzZZbtUkMI/edit?usp=sharing>

    -   Got hex sticker designed for ProtoSchool. Will share details on how chapter organizers can share these shortly. <https://github.com/ProtoSchool/organizing/issues/20>
    -   Reviewed existing resources on the IPFS File API. Would appreciate feedback on my proposal for the ProtoSchool tutorial on this subject before I start building: <https://github.com/ProtoSchool/protoschool.github.io/issues/91>
    -   Launched registration for Boston’s Global Diversity CFP Day. I encourage everyone globally to check out local event to attend as a student (if a new speaker from a group underrepresented in tech or marginalized) or a mentor (anyone with speaking experience to share). You can still volunteer to host an event in your city if there’s not one there yet. Great way to encourage those in your ProtoSchool chapters to build their confidence in speaking about decentralized tech or other topics. <https://www.globaldiversitycfpday.com/>

-   Next:

    -   Build ProtoSchool tutorial on IPFS File API. <https://github.com/ProtoSchool/protoschool.github.io/issues/91>
    -   Recruit authors/content for upcoming publication on decentralized web topics
    -   Will be out 1/30 - 2/4 for Git Merge and FOSDEM in Brussels. Expect a slower response.

@pkafei

-   Done:

    -   Can announce community syncs via Github issues <https://github.com/ipfs/community-call-helper>
    -   Working on building an announcement bar for community syncs
    -   Outline on how to make it easier for devs and nondevs to contribute to IPFS

-   Blocked:

    -   Getting data into Hugo partials (pairing with Olie)

-   Next:

    -   Finishing dynamic announcement bar on the ipfs.io site
    -   Finding more speakers for the IPFS Weekly call
    -   Will also be out 1/30-2/4 for FOSDEM

**Discussion Highlights**

* @terichadbourne: Code of conduct is mandatory before starting ProtoSchool chapter, so it's now provided in default repo. Worked with Alan Shaw to review existing File API resources before creating a ProtoSchool tutorial on it. Recruiting writers for upcoming publication covering decentralized web development (case studies, etc.). Also mentoring for Global Diversity CFP Day.


* @pkafei: First iteration of the community sync bot is live. Working on creating an announcement bar for IPFS Weekly meetings which will be displayed on ipfs.io homepage


* @mikeal: Continuing work on metrics


* @jenn: Request feedback and ideas for the weekly newsletter. https://github.com/ipfs/newsletter/pull/75


**Open Office Hours Questions and Notes**

Hong Kong ProtoSchool Update from @kk3wong:

-   Partnering with CS engineering faculty in Hong Kong at a university that's building a blockchain department
-   @terichadbourne: Organizers are encouraged to share what’s working and what’s not in their ProtoSchool chapter https://github.com/ProtoSchool/organizing


ETHDenver:

-   @NukeManDan is one of the organizers of EthDenver (February 15th-17th) will be hosting a ProtoSchool workshop during EthDenver startup week. After workshop he will post notes about how the event went in the organizing repo.
-   Request for IPFS stickers and swag for EthDenver
-   Started a thread where chapter organizers can introduce themselves https://github.com/ProtoSchool/organizing/issues/26


PeerPad Questions:

-   Q (@mikeal): Is PeerPad ready for launch?
   - A (@jimpick):

    -   Persistent pinning is a blocker for PeerPad (this feature is called the pinner which joins the different collaborations). Originally hosted on heroku but not an ideal solution because of ephemeral disks. Still looking for a place to save the data (like IPFS). This could be done by pointing an S3 bucket to IPFS
    -   Scalability is also an issue/blocker. When scaling to 20 people, one person will experience a corruption
    -   Considering creating a Vue version of PeerPad
    -   Collaborating with @pkafei in implementing PeerPad into community sync helper


**Action Items**

_Announce issues that need help, get people to help_

-   If hosting a Protoschool meetup please share what works and doesn’t on github: https://github.com/ProtoSchool/organizing
-   ProtoSchool chapter organizers, please introduce yourselves in organizing repo: https://github.com/ProtoSchool/organizing/issues/26
-   If you would like to write a story about IPFS or the distributed web please reach out to Teri (teri@protocol.ai)
