# GUI & In Web Browsers Weekly Sync 2019-04-17

-   Recording: (@lidel will add link here when ready)
-   Moderator: @lidel
-   Notetaker: @dietrich
-   Attendees:
    -   @lidel
    -   @pkafei
    -   @fsdiogo
    -   @dietrich
    -   @ericronne
    -   @jimpick
    -   attendee names...

**Preflight checklist**

-   Call for additional**agenda** items!
-   Ensure that there is a**notetaker**!
-   Start**recording**! :^)

**Agenda**

_General discussions, decisions, etc._

-   Start with Team Updates and Demos
-   **_**_{ add your items below}_**_**
-   __@dietrich - You got your IPFS in my Filecoin!__
-   __@dietrich - Words, words, words:_[_https://ethercalc.org/pfn2sr40qogi_](https://ethercalc.org/pfn2sr40qogi)_
    -   _[_https://www.youtube.com/watch?v=raN4S2B4-vo_](https://www.youtube.com/watch?v=raN4S2B4-vo)_ __
    -   __+ form by_@ericronne[_https://docs.google.com/forms/d/e/1FAIpQLSdEHpIdXYYLAoecc2rl2cSBGRI1SfzdhasM_rPjSKJRV7QxKQ/viewform_](https://docs.google.com/forms/d/e/1FAIpQLSdEHpIdXYYLAoecc2rl2cSBGRI1SfzdhasM_rPjSKJRV7QxKQ/viewform)_ __
-   (&lt;your_name&gt;, topic)

**Team Updates**


@lidel
-   Done:
    -   ipfs-companion
        -   Beta release:[v2.8.1.778](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.1.778) 
            -   Includes feature-detection of chrome.sockets at runtime  
                (shipped to unblock Brave integration, regular users won't see any difference yet)
    -   js-ipfs
        -   [PR 1950: Decouple HTTP Servers from cli/commands/daemon](https://github.com/ipfs/js-ipfs/pull/1950) 
        -   [PR 1989: fix streaming of compressed payload](https://github.com/ipfs/js-ipfs/pull/1989) 
    -   CIDv1 Base32: opened proposals to switch CIDv1 from Base58 to Base32
        -   -   <https://github.com/ipfs/go-ipfs/issues/6220>
            -   <https://github.com/ipfs/js-ipfs/issues/1995>
    -   Trivia:[i18n triggering bad word filters](https://github.com/ipfs-shipyard/ipfs-companion/issues/369#issuecomment-484040067)
-   Blocked:
    -   [PR #1989: fix(gateway): streaming compressed payload](https://github.com/ipfs/js-ipfs/pull/1989) needs a review (CI fails due to unrelated libp2p error)
    -   [HTTP Gateway fails to load sharded website #1963](https://github.com/ipfs/js-ipfs/issues/1963) / PR[ feat: load files/dirs from hamt shards #19](https://github.com/ipfs/js-ipfs-http-response/pull/19)
    -   [Resolving DNSLink Paths: /ipns/&lt;fqdn> #1918](https://github.com/ipfs/js-ipfs/issues/1918)
-   Next:
    -   Meetings (ENS, IPFS Camp workshops)
    -   Polish Embedded Gateway for Brave
        -   Add support for[ Range requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests) to js-ipfs Gateway
        -   Cherry-pick and test IPNS/sharding PRs
        -   Inspect/fix HTTP headers in the context of[known issues](https://github.com/ipfs/in-web-browsers/issues/132)
        -   Add a button on landing page to enable embedded gateway instead of setting up external one
        -   Look into p2p transport if time allows

@fsdiogo
-   Done:
    -   Add ability to override externals errors on code validation
        -   <https://github.com/ProtoSchool/protoschool.github.io/pull/111>
    -   Surface console logs into the UI
        -   <https://github.com/ProtoSchool/protoschool.github.io/pull/198>
-   Blocked:
    -   \`ipld-explorer-components\` guided tour
        -   <https://github.com/ipfs-shipyard/ipld-explorer-components/pull/17>
    -   Web UI guided tours
        -   [https://github.com/ipfs-shipyard/ipfs-webui/pull/98](https://github.com/ipfs-shipyard/ipfs-webui/pull/983)

@hugomrdias
-   Done:
    -   fix: fix missing buffer bundling with browserify
        -   <https://github.com/ipfs/js-ipfs-http-client/pull/966>
    -   fix: move mfs cmds and safer exit
        -   <https://github.com/ipfs/js-ipfs/pull/1981>
    -   ipns-over-dns deep dive with lidel
    -   WB wg OKRs review session
    -   finalize js-ipfs remove ipld formats PR
    -   review blog posts for libp2p and ipfs releases
    -   released last callbacks version of multihashing-async 0.6.0
    -   Review and merge chore: update semver usage for babel packages
        -   <https://github.com/ipfs/aegir/pull/348>
    -   released multihashing-async 0.7.0 with async/await
    -   Almost finished PR to enable_ipfs name resolve /ipns/ipfs.io_
    -   Reserved_ipns.workers.dev_ for ipns-over-workers
-   Next:
    -   Support file and filelist in js-ipfs
    -   add bundlesize PR check to js-ipfs
    -   Fix file uploads in web ui
        -   <https://github.com/ipfs/js-ipfs-http-client/issues/967>
    -   Continue ipns-over-dns

@dietrich

* Answered some StackOverflow IPFS questions, eg https&#x3A;//stackoverflow.com/questions/55580478/how-data-is-stored-in-the-storage-device-in-ipfs/55622561#55622561
* Updated all the browser collab issues with meeting notes and status - need to figure out best pattern here
* Some l10n translations for IPFS Companion to Zh
* Read through community metrics work so far
* Lighthouse testing comparison for JS-IPFS 0.35 https&#x3A;//twitter.com/dietrich/status/1118003381757341696
* Tested other js-ipfs-http-client examples, filed issues
* Met with Opera
* PR for<https://github.com/ipfs/js-ipfs-http-client/issues/968>

@ericronne

-   (have been distracted with Filecoin Fun, OKRs, etc)
-   would love to get your thoughts on our interface-bearing products[**here!**](https://docs.google.com/forms/d/e/1FAIpQLSdEHpIdXYYLAoecc2rl2cSBGRI1SfzdhasM_rPjSKJRV7QxKQ/viewform)** ****  
    **(very brief survey)
-   next:
    -   summarize feedback from ^ this ^
    -   submit recommended design revisions based on[this review](https://docs.google.com/document/d/1jQn14u8CJm8fOjLPbo2lug4RG3Eb8ulHX1LVlu9jMck/edit#heading=h.nvl6wd19122n) 

@jimpick

-   Cloudflare Webpackage work went live<https://blog.cloudflare.com/announcing-amp-real-url/>
-   I commented on a Twitter thread about the past experimentation we did … got retweeted by Brendan Eich!<https://twitter.com/jimpick/status/1118529906550263811>
    -   Our experiments with Signed HTTP Exchanges and WebPackages:<https://github.com/ipfs/in-web-browsers/issues/121> 

@terichadbourne

-   Done
    -   Offline Camp work (hope to launch site/applications this week)
    -   Added Hangzhou and Taipei ProtoSchool chapters
    -   Repurposing IPFS Community WG call into a ProtoSchool call, open to all:<https://github.com/ProtoSchool/organizing/issues/47>
    -   Out sick
-   In Progress
    -   MFS tutorial in ProtoSchool<https://github.com/ProtoSchool/protoschool.github.io/pull/111> (about to be broken out in a new PR)
-   Next
    -   Offline Camp launch
    -   Better instructions for tutorial authors

**Discussion Highlights**

_Discussion highlights and additional notes._


-   Dietrich re: IPFS + Filecoin
    -   please share your knowledge with me about which parts of IPFS are used by Filecoin. Email or msg or however you like. Looking for specific repos/components.

-   Dietrich re: language
    -   We talked a lot in Lisbon last month about language for pinning/saving/sharing/etc
    -   We also talked in WB WG about core use-cases: saving, reading, publishing, sharing
    -   Design, development and usage will all benefit from shared language
    -   Let’s do an exercise based on the video Mhz shared ([_https://www.youtube.com/watch?v=raN4S2B4-vo_](https://www.youtube.com/watch?v=raN4S2B4-vo)_ )_
    -   _Add your language here for these different nouns/verbs in the IPFS project - whatever comes to mind, free form, no restrictions (except the CoC! Keep it appropriate!):[_https://ethercalc.org/pfn2sr40qogi_](https://ethercalc.org/pfn2sr40qogi)_
		-   Provide narrative input on usage and audiences in this survey by @ericronne<https://docs.google.com/forms/d/e/1FAIpQLSdEHpIdXYYLAoecc2rl2cSBGRI1SfzdhasM_rPjSKJRV7QxKQ/viewform> 

