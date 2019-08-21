## IPFS Project Operations Weekly Sync - July 22, 2019

**Moderator:** Molly

**Notetaker:**

**Recording:**

**Attendees:**

-   __@momack2__
-   __@autonome__
-   __@stebalien__
-   __@hugomrdias__
-   __@leshokunin__

**Moderator checklist**

-   Ensure that there is a notetaker
-   Start recording
-   Call for additional agenda items

**Agenda**

General discussions, decisions, etc.

-   Q3 OKRs: The[sheet](https://docs.google.com/spreadsheets/d/1AiNUL7vK5Jp8aa839UaMaI_AlBU5r6Bor-A40179I2A/edit#gid=1562851442) is now source of truth for our Q3 OKRs
-   Q3 Project Operations Objectives:
    -   ****🚀 IPFS Implementations are shipping quality releases on a schedule (Alan, Steven)****
        -   JS IPFS 0.37 is coming! RC0 is out now -<https://github.com/ipfs/js-ipfs/issues/2192>
            -   Interop tests \*almost\* all passing!
            -   Has support for dnslink IPNS resolution - ipns name resolve with dns path in it should work now in js / on the gateway
            -   Hopefully delegated peer content routing (not on by default)
            -   Backwards compatible promises API
        -   Benchmarks will be revived this week -<https://github.com/ipfs/benchmarks/>
            -   Can see when performance regressions
            -   Each test is a js file, there is a tutorial on the architecture and a tutorial on adding a new test
            -   Should be easy for js humans to pick this up and add more 🙌
        -   The Go IPFS 0.4.22 release has hit stage 2 (<https://github.com/ipfs/go-ipfs/issues/6506>) and our early testers are testing in their dev environments.
            -   Stage 3 is soft release in production environment scheduled for next week
        -   Testlab is making progress:
            -   UI mockups + example test scenarios
            -   System architecture
            -   Need to deduplicate work with ipfs/benchmarks.
    -   ****🤝 Collaborations are systematized and prioritized (Dietrich, Arkadiy)****
        -   Dweb camp this past weekend
        -   Updated pipeline work to share next week
    -   ****📣 The IPFS Community is informed of relevant news in a timely manner (Molly, Dietrich)****
        -   Molly discussed with Shokunin at dweb camp about helping coordinate some community posts about the projects / demos they shared at IPFS Camp - he’s going to start an issue and tag some folks to get this rolling
        -   Thinking of standardization for how to get teams on awesome.ipfs to follow up with groups and also look at adding fields
            -   Dietrich will ping with a link on that
        -   Great work to Zak and David for getting IPFS Camp content out!<https://blog.ipfs.io/2019-07-22-ipfs-camp-content-first-batch/>
            -   Some folks have already seen this, but also want to push this to people proactively (tagged them in the blog issue, let’s create another camp issue to point people in!)
            -   Shokunin will also pin on reddit / IRC
        -   This week there will be one more blog post with courses, sci-fi fair and interviews
    -   ****⚙️ Lower priority projects are clearly owned and maintained (Dietrich)****
        -   Ask: What are the projects/initiatives/repos/docs you have at the back of your mind that needs love and is not getting it this quarter?
            -   MULTIFORMATS! ALL THE MULTIFORMATS!
            -   ipfs-update
            -   go-ds-{sql,s3}
            -   Still need to talk with package manager group on IPNS
                -   Requests from multiple parties to split it out from IPFS
            -   (go) IPFS libraries usable without entire CLI (e.g. CoreAPI)
            -   “wget for ipfs”:<https://github.com/ipfs/ipget> (sounds like something useful for package managers?)
    -   ****🥼 Research is projecting the present into the future (David)****
        -   A new Lab/Group within Protocol Labs Research is forming 🧪
            -   Will take over many of the Research Open Problems on building scalable and resilient distributed systems.
            -   The goal for this quarter is to set the group up, following a PL Research restructure into a more of an Enablement Group
        -   WIP Specification Maintainer Protocol<https://github.com/ipfs/specs/pull/214> (no new update this week)
-   &lt;other topics>
-   David’s will be taking (long waited) OOO time in August. Send all the articles, books, papers, talks and ideas you would like me (David) to go through or think about :).
-   OKRs -> Links! Should we aim to have each OKR linked back to an issue/document/something?
    -   Plus one - let’s try it!
