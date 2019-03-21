# GUI & In Web Browsers Weekly Sync 2019-03-13

-   Recording: <https://youtu.be/x9oEXMTaI5E> [/ipfs/bafybeia3bbd42eg2rrumlbxdf4fpdb3rjwagfwsbj6i3xn7bsyzqrkz5cm](https://ipfs.io/ipfs/bafybeia3bbd42eg2rrumlbxdf4fpdb3rjwagfwsbj6i3xn7bsyzqrkz5cm) 
-   Moderator: @olizilla
-   Notetaker: @ericronne
-   Attendees:
    - @lidel
    - @olizilla
    - @pkafei
    - @fsdiogo
    - @hugomrdias
    - @ericronne
    - @terichadbourne
    - @alanshaw
    - @cwaring
    - Chris Anderson

**Preflight checklist**

-   Call for additional **agenda** items!
-   Ensure that there is a **notetaker**!
-   Start **recording**! :^)

  


**Agenda**

_General discussions, decisions, etc._

-   Start with Team Updates and Demos
-   @lidel, 3min, quick Brave update

  


**Team Updates**

  


@lidel

-   Done:
    -   (ipfs-companion)
        -   [PR: IPFS Actions on DNSLink Sites](https://github.com/ipfs-shipyard/ipfs-companion/pull/694) 
        -   [js-ipfs is missing code for resolving DNSLink IPNS paths](https://github.com/ipfs/js-ipfs/issues/1918), so we do fallback to value from DNSLink cache there
        -   **Released a new Beta:** [v2.7.5.753](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.7.5.753)
    -   (cidv1b32) bird’s view: Identified PRs without owner
    -   (brave)[updated branch, solved issues blocking js-ipfs from not start](https://github.com/ipfs-shipyard/ipfs-companion/issues/664#issuecomment-472445478) 
    -   (other) booked flights for Lisbon hack’n’plan \\o/
-   Next:
    -   (cidv1b32) bird’s view: another pass + add missing PRs/Issues
    -   (brave/js-ipfs) rewire HTTP API/Gateway to start on-demand in webextension context

  


@hacdias

-   Done:
    -   (ipfs-desktop)[Only show one menu at a time](https://github.com/ipfs-shipyard/ipfs-desktop/pull/863)
    -   (ipfs-desktop)[Fixed the vertical positioning](https://github.com/hacdias/electron-menubar/pull/5)
    -   (ipfs-desktop)[Working on making it just a simple menubar](https://github.com/ipfs-shipyard/ipfs-desktop/pull/866)
-   Blocked:
    -   (ipfs-webui)[‘Add Connection’ modal](https://github.com/ipfs-shipyard/ipfs-webui/pull/969)  (waiting for native speakers’ review)
    -   (ipfs-webui/desktop)[PDF issue.](https://github.com/ipfs-shipyard/ipfs-desktop/issues/785) @olizilla
    -   (ipfs-\*)[We need IPFS 0.4.19](https://github.com/ipfs-shipyard/ipfs-desktop/issues/864) - I’ve made changes to hownpm-go-ipfs-dep works and it needs to be released. @alanshaw did the reviews. So far, only @daviddias has permission to release that module. We should ask him to add someone from the JavaScript team.
-   Next:
    -   Add ‘ipfs’ to PATH on IPFS Desktop


@olizilla

-   Done:
    -   Analytics opt-in per type -<https://github.com/ipfs-shipyard/ipfs-webui/pull/985> 
    -   Planning docs for Libson hack & plan meetup
    -   Updated ipfs-dns-deploy with ipfs-cluster-ctl@0.10 but hit an issue<https://github.com/ipfs-shipyard/ipfs-dns-deploy/issues/3#issuecomment-472386473> 
    -   Pin a site to IPFS via a GitHub Action
        -   Action:<https://github.com/ipfs-shipyard/ipfs-github-action> 
        -   Example workflow:<https://github.com/ipld/website/blob/4ac6f4d169838ee03ce17bcc2753083a04758661/.github/main.workflow> 
    -   Proposal for the IPFS Desktop menubar<https://github.com/ipfs-shipyard/ipfs-desktop/pull/866#issuecomment-472394340> 
-   Next:
    -   Update ipfs-desktop with latest analytics work and release 0.7
    -   Proposal for the Peers page
    -   Help get the Help system for Web UI done
    -   Document the ideal infrastructure for share.ipfs.io

  


@fsdiogo

- Done:
    - Web UI help system
        - <https://github.com/ipfs-shipyard/ipfs-webui/pull/983>
    - Kickstarted a doc to discuss the help system
        - <https://docs.google.com/document/d/1FNqrzjnPcgcyD6OIrkihPbjXkQFIlkCmdd5T1GYqVpI/edit>
    - Update to CRA v2
        - <https://github.com/ipfs-shipyard/ipfs-webui/pull/987>
    - Update to Storybook v5
        - <https://github.com/ipfs-shipyard/ipfs-webui/pull/987>
- Next:
    - I’ll be off Thursday and Friday


@hugomrdias

Done:
-   proper-lockfile fixing
-   protoschool fix ipfs require
    -   <https://github.com/ProtoSchool/protoschool.github.io/pull/170>
-   released proper-lockfile 4.0.0
-   ipfs-repo PR to update fix: update lock file #193
-   js-libp2p windows testing
    -   <https://github.com/libp2p/js-libp2p/pull/335>
Next:
-   Js-ipfs bundle size PR
-   Vue support
-   Async iterators  

@terichadbourne

-   Still:
    -   Continuing work on creating a ProtoSchool tutorial on the File API (suggestions welcome)
        -   Issue:<https://github.com/ProtoSchool/protoschool.github.io/issues/91#issuecomment-456457377> 
        -   WIP PR:<https://github.com/ProtoSchool/protoschool.github.io/pull/111> 
-   Help Needed:
    -   ProtoSchool roadmap is in progress! I need suggestions from various project teams as to what ProtoSchool content would support their goals. Please deposit all the IPFS-related feels at:<https://github.com/ipfs/roadmap/issues/25> 

  


@ericronne

-   Done:
    -   Onboarded! :P
    -   Began Filecoin brand-book work (visual survey, style sheet)
    -   Designed IDM progress meeting title-card concepts
    -   Designed an International Women’s Day poster to celebrate the magnificent women of PL!
-   Next:
    -   Wrap v0.2 of Filecoin style sheet and test on existing product
    -   Finalize IDM title card
    -   Iterate on IPFS brand book

  
  


**Discussion Highlights**

“What highlight was most exciting from my last week? What am I looking forward to next week?”

-   Marcin:
    -   Demoed updates to the IPFS Companion (beta).
-   Henrique (not present, Oli shared on his behalf):
    -   Making IPFS Desktop simplification and debugging
    -   Also working on IPFS new version, hoping to cut a release after this call, woo!
-   Oli:
    -   Analytics for WebUI finally done, including granular user opt-in/-out controls, and detailed in-app documentation.
    -   GitHub Action for IPFS now exists. Builds a preview site via npm, make.
-   Diogo:
    -   Walked through Web UI help system (“guided tour” feature)._Feedback, please!_
    -   Updated CRA 2 and Storybook 5.
-   Hugo:
    -   Resolved issues with lockfile not running properly.
    -   (Debugged Vue problems which are too technical for this note-taker (ER) to summarize!)_Oli posited an “IPFS Lite” version for the browser._
    -   Created a stopgap solution for js-libp2p windows issues
-   Teri:
    -   Found a location for Offline Camp and booked it!
    -   Discussed issues with file-upload models and MFS for ProtoSchool.
    -   Looking for suggestions on how various teams might best be supported by ProtoSchool, with an eye to creating a roadmap.
-   Eric:
    -   Working on a design inventory across the projects although officially assigned to IPFS
-   Portia:
    -   Launched us into a Live Hackathon in the interest of debugging the timing of the alert bar for the IPFS Weekly Call. Alas, time constraints forced this To Be Cont …
-   Alan:
    -   Discussed a new motif (courtesy Hugo) which makes Go IPFS installation smarter, via a json file which checks for various info at installation time (whereas these bits were formerly hard coded). Plus other improvements, eg to node, currently readying for release.
-   Chris:
    -   Shared component library.
    -   Working on IPFS camp: website content, session planning, data-collection policy, etc.
-   Marcin:
    -   Has been solving chrome.sockets issues,  in order to distribute a special, more-powerful, instance of our app for Brave users (which they will then be able to toggle on and off). We’re looking forward to a demo next week!
