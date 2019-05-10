# GUI & In Web Browsers Weekly Sync 2018-12-12

-   **Moderator:** @olizilla
-   **Notetaker:** @lidel
-   **Attendees:**
    -   @hacdias
    -   @lidel
    -   @fsdiogo
    -   @pgte
    -   @olizilla
    -   @terichadbourne

  


**Moderator checklist**

-   Ensure that there is a notetaker ;-)
-   Start recording
-   Call for additional agenda items

  


**Agenda**

_General discussions, decisions, etc._

-   Start with Team Updates and Demos
-   lidel: we should make a plan around OKRs (finalizing Q4 & drafting Q1)
-   olizilla: Desktop release plan
-   olizilla: infra needs around share.ipfs.io

  


**Team Updates**

**@lidel**
-   Done:
    -   Released new Companion Beta and Stable with fix for Chrome Beta:[v2.6.2.12270](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.6.2.12270) and[v2.6.3](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.6.3) 
    -   Moved Issue with Weekly Sync to WG-agnostic repo:<https://github.com/ipfs/team-mgmt/issues/790> 
    -   Going over my backglog of bugzilla and github notifications
        -   Fun fact:[streams got enabled in Firefox Nightly](https://github.com/ipfs/js-ipfs-http-client/issues/848#issuecomment-445566344)!
    -   window.ipfs.enable(opts) (aka Bulk Permission Prompt) - PR[ipfs-companion/pull/619](https://github.com/ipfs-shipyard/ipfs-companion/pull/619) 
-   Blocked:
    -   window.ipfs.enable build fails on Jenkins, probably due to tarser override, need to look into this
-   Next:
    -    [ipfs-companion/pull/619](https://github.com/ipfs-shipyard/ipfs-companion/pull/619) 
        -   Finish remaining chores, get it reviewed and release to Beta
        -   Extract remaining TODOs to dedicated issues
    -   Q4 retro/Q1 OKRs

olizilla

-   Done:
    -   [Rework the status page](https://github.com/ipfs-shipyard/ipfs-webui/pull/902) to remove the peer distribution graph… geolocating all peers via ipfs-geoip creates a bunch of work for the browser, and a[runaway resource usage issue in go-ipfs](https://github.com/ipfs/go-ipfs/issues/5613)
    -   fix[ipfs-cluster website dev mode](https://github.com/ipfs/ipfs-cluster-website/pull/45) to unblock their updates
    -   Introduced IPFS to new people at the redecentralize meetup in London<https://twitter.com/shevski/status/1072120698087321601> (met with matrix and scuttlebutt folks too)
    -   Supporting a first time contributor on ipfs-desktop - https&#x3A;//github.com/ipfs-shipyard/ipfs-desktop/pull/726#issuecomment-445795049
-   Blocked:
    -   I was blocked by laryngitis. I’,m on the mend now.
-   Next:
    -   2 more usability testing session for webui. write up the common issues. Propose next round of improvements to webui
    -   Refactoring to webui and ipfs-redux-bundle to work with the api changes in ipfs-http-client \*\*help wanted\*\*
    -   Refactoring ipld-explorer-components to work with changes to dag-pb and ipld apis. \*\*help wanted\*\* (good opportunity to pair on ipld-explorer code.)
    -   Cut a release of Web UI
    -   PR go-ipfs to add webui link to ipfs daemon output.
    -   GET DESKTOP RELEASED 🚢 ✨ 😳

@hacdias
-   Done:
    -   Remove the need of setting the CORS headers on IPFS to run Web UI inside Desktop
        -   <https://github.com/ipfs-shipyard/ipfs-desktop/pull/740>
        -   <https://github.com/ipfs-shipyard/ipfs-desktop/pull/736>
    -   Ask user to run ‘repo fsck’ if he gets ECONNREFUSED. For some background: this may happen if the daemon shutdowns unexpectedly and doesn’t remove the api nor the lock files.
        -   <https://github.com/ipfs-shipyard/ipfs-desktop/pull/722>
    -   Avoid opening external URLs inside Desktop:
        -   <https://github.com/ipfs-shipyard/ipfs-desktop/pull/741/files>
    -   Some tweaks:
        -   <https://github.com/ipfs-shipyard/ipfs-desktop/pull/733>
-   Blocked:
    -   I’m a bit more busy this week. It’s the final week of this semester. Will be more free from now until the beginning of February.
-   Next:
    -   Add Spectron startup tests:
        -   <https://github.com/ipfs-shipyard/ipfs-desktop/pull/730>
    -   Set up auto-update
        -   <https://github.com/ipfs-shipyard/ipfs-desktop/pull/742>
    -   Release IPFS Desktop !!!
 

@fsdiogo

-   Done:
    -   IPFS website “Implementations” section
        -   <https://github.com/ipfs/website/pull/282>
    -   Allow passing a custom config to ipfs-redux-bundle
        -   <https://github.com/ipfs-shipyard/ipfs-redux-bundle/pull/21>
    -   Kick off the use of a signalling server in Share Files
        -   <https://github.com/ipfs/infra/issues/461>
-   Blocked:
    -   N/A
-   Next:
    -   Get ipfs.io released
    -   Get ipfs-redux-bundle custom config merged
    -   Share Files using signalling server
    -   Refactor Share Files with changes from ipfs-http-client

  


**Discussion Highlights**

-   We started thinking about OKRs (Q4 retro + Q1 planning)
    -   Parent issue: <https://github.com/ipfs/team-mgmt/issues/792> 
    -   Date to remember: OKR draft reporting will be on 19th
    -   Async retrospective retro & planning: [in-web-browsers/issues/136](https://github.com/ipfs/in-web-browsers/issues/136) 
    -   Friday: score Q4 and do personal retro, create Q1 OKR draft
    -   Monday: continue Q1 OKR planning
-   IPFS Companion
    -   MVP window.ipfs.enable will land soon: early preview in PR [ipfs-companion/pull/619](https://github.com/ipfs-shipyard/ipfs-companion/pull/619) 
        -   tl;dr ask IPFS Proxy for a list of permissions and user will accept them in bulk.
        -   This gives developer full control on when permission prompt is displayed
        -   We want to improve UX of the permission prompt, for now it has the old look._Feedback/suggestions/mockups are welcome!_
-   IPFS Web UI
    -   Removed CountryGraph from status to solve issues described in [ipfs-webui/issues/848](https://github.com/ipfs-shipyard/ipfs-webui/issues/848) 
        -   Web UI will no longer generate huge traffic due to geoip requests to an empty IPFS repo
    -   Improved onboarding of new users (“am I connected?”)
        -   Status page includes connection confirmation, and inviting files and peers info
    -   Usability sessions in progress (2 next week)
    -   A new release will happen after we update IPLD and other libraries
-   IPFS Desktop
    -   Merged: Removed the need of setting of CORS headers on ipfs daemon - [ipfs-desktop/pull/740](https://github.com/ipfs-shipyard/ipfs-desktop/pull/740) 
    -   Merged: Improved cleanup of lock files - [ipfs-desktop/pull/722](https://github.com/ipfs-shipyard/ipfs-desktop/pull/722)
    -   Release plan:
        -   We want to ensure from now on, Windows and Mac users will get auto-updated (Linux users will usually use distro-specific package)
        -   Cut pre-relase to test auto-update
        -   Install on ipfs-gui team machines.
        -   Make a simple change and cut another release and test the update mechanism
        -   Make a proper release and share with IPFS org.
        -   Get PR to ipfs.io website with links to companion & desktop merged
        -   Update docs.ipfs.io about desktop (and webui)
        -   Write blog-post, tweet, and share with IPFS weekly newsletter
        -   What else would make for a great Desktop release?
            -   Idea: &lt;1m video showing installation + opening webui from IPFS Desktop on Mac and Windows to demonstrate how easy it is to get it going
-   The new implementation section on ipfs.io website ([ipfs/website/pull/282](https://github.com/ipfs/website/pull/282) ) is ready but we park it until IPFS Desktop is released with working auto-update :)
-   Honorable mention: Oli lost his voice while explaining IPFS to people
-   [proto.school](https://proto.school) 
    -   Saving state and CID updates are merged
    -   WIP on restructuring entire website to have more sections than current workshops
-   DDC WG looking into using Companion on peer-\*: [ipfs-companion/issues/634](https://github.com/ipfs-shipyard/ipfs-companion/issues/634)
-   Discussion: points of centralization and infra needs around share.ipfs.io (WIP)
    -   Proposal for infra team: <https://github.com/ipfs/infra/issues/461> 
    -   We want to end up with a good explanation of what config and machines we need to run a good / performant service.
    -   We can work with ipfs core and infra to define it, and it will form a useful checklist / educational component.
    -   We must clearly call out what centralised points there are (ws-\* or preload nodes), and what guarantees they have (currently none, we can’t build a service on that, but we can work to set a sensible one one up)
    -   Solutions:
        -   UX/copy: communicate points of centralization to users and explain why we need to have them (lack of relevant web standards, performance).
            -   There is a great story there for startups that start with own semi-centralized architecture, because nobody cares about their data, but as they grow IPFS swarm will take care of scaling and persistence.
        -   In parallel, look into technical solutions
            -   Measure SLA of preload nodes, ws-star
            -   Don’t fail js-ipfs start if ws-tar is down? Make it possible to connect to multiple ws-stars at the same time?
                -   Caveat: be mindful if it is worth investing time in things that will be superseded by autorelay and DHT.
            -   js-ipfs 0.34 may not have DHT in browser yet ( "js-libp2p-ipfs-browser will only add DHT there after Relay is in")
 


**Action Items**

_Announce issues that need help, get people to help_

-   @all: go to <https://github.com/ipfs/in-web-browsers/issues/136> and..
    -   Update End-Q4 scores
    -   Write a few words of retrospective
    -   Think about OKRs for Q1
