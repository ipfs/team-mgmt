# IPFS Community Working Group Weekly Sync 2019-01-17

-   **Video Recording:** <https://youtu.be/_FgohcFTa2A>
-   **Moderator:** @mikeal
-   **Notetaker:** @terichadbourne
-   **Attendees:**

    -   _@terichadbourne_
    -   _@jimpick_
    -   _@nukemandan_
    -   _@pkafei_
    -  _@kk3wong_

**Moderator checklist**

-   Ensure that there is a notetaker
-   Start recording
-   Call for additional agenda items


**Agenda**

_General discussions, decisions, etc._

-   Start with Team Updates and Demos
-   **_{ add your items below}_**
-   @mikeal:  Round 2 OKR planning - priorities have been added at:<https://github.com/ipfs/community/blob/master/okrs/2019-q1.md>
-   @NukeManDan: matrix/riot chat for proto.school?
-   @NukeManDan: Chapter template?
-   @mikeal: IPFS GitHub Org Metrics:<https://docs.google.com/spreadsheets/d/1fPQHIJniOC39Nn5ABibGIn1yY0G9f2ZBqlXLwAW82Bg/edit#gid=1837173789>



**Team Updates**

@terichadbourne

-   Done:

    -   Pair programmed with @olizilla to build a responsive nav for ProtoSchool before launch
    -   Launched ProtoSchool!
       - Launch presentation posted to YouTube already has 193 views! <https://youtu.be/G5aiLkHZ7CM>
        -   Slide deck available at: <https://github.com/ProtoSchool/organizing/blob/master/presentations/ProtoSchool_Launch_Preso_2019-01-14.pdf>
        -   Full recording of the IPFS Weekly Call (with launch Q&A) at: <https://youtu.be/DlP0Ss6LV5M>
    -   Assisting with chapter setup requests since Monday’s launch from Hong Kong, Mumbai, Phoenix, Beijing, Berlin, Seattle, and Washington, DC
    -   Added Apache 2.0 + MIT License to ProtoSchool’s main repo
-   Next:
    -   Add license to ProtoSchool \`organizing\` and chapter repos
    -   Reach out to IPFS Meetup organizers to invite them to start ProtoSchool chapters
    -   Explore IPFS File API in preparation for building a new ProtoSchool tutorial

@pkafei
-   Done:
    -   Extract the IPFS Community Sync Up Notes from google drive using google API (with help from Andre)
    -   Working with Mikeal on the community sync feature where organizers can announce issues via Github issues
-   Blocked:
    -   Rendering and sending markdown in the request body to the Github issues API
-   Next:
    -   Finish up community call helper bot
    -   Start working on paired down more approachable contributor documentation
    -   Clarifying the goals and objectives for onboarding new contributors






**Discussion Highlights**

_Discussion highlights and additional notes._


-   _**Discussion channel.** @NukeManDan asks if we could start a Matrix/Riot channel for ProtoSchool. @Mikeal recommends sticking to GitHub for discussion because it’s better for onboarding new contributors and having discussions referenceable. Will continue the discussion in the issue Dan previously opened:<https://github.com/ProtoSchool/organizing/issues/22>_
-   _**IPFS GitHub Metrics** presented by @mikeal. <https://docs.google.com/spreadsheets/d/1fPQHIJniOC39Nn5ABibGIn1yY0G9f2ZBqlXLwAW82Bg/edit#gid=1837173789>_

    -   @mikeal would like feedback on this issue: What are the new questions we’d like to ask?<https://github.com/protocol/github-org-metrics/issues/1>
    -   Q @jimpick: Can we separate PL folks from others in stats?
        -   A @mikeal: Hard to do because most folks don’t list their company in GitHub. Easier to quantify number of unique people we put on a project at different time periods and subtract from total

-   _**User tracking.**@nukemandan asks if we can track where people fall off in ProtoSchool curriculum and whether they contribute to IPFS after doing those tutorials. Can’t connect user in Google Analytics to GitHub user. Right now no persistent login, just caching in the browser. If we added one, this would be a good reason to do it based on GitHub login. @mikeal recommends adding an issue for persistent login (optional for user)._
-   _**Chapter template.** @nukemandan has a chapter website (GH Pages) template he’s happy to share (<https://github.com/NukeManDan/protoschool-chapter-template>) and wants to know where to do so. @terichadbourne notes this should be optional since some chapters won’t want to host a GH Pages website at all. @mikeal suggests adding some setup tasks as issues and starting with a CoC in place, making organizer give us the contact person that should be usedbefore we set up their repo (they can later edit or remove if they’ll be linking to an external CoC). @terichadbourne asks @mikeal to check the format of the seattle repo made today, which includes license already in place, placeholder COC doc and TODO notes mixed in. Should any of this be issues instead?_



**Action Items**

_Announce issues that need help, get people to help_

-   {?}
