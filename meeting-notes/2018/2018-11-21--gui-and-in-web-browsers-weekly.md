# GUI & In Web Browsers Weekly Sync 2018-11-21

- **Lead:** @olizilla
- **Notetaker:** @lidel
- **Attendees:**
    - @terichadbourne
    - @olizilla
    - @lidel
    - @alanshaw
    - @hacdias
    - fsdiogo

## Before the Sync

- Write down your updates
    - What have you accomplished since the last Weekly?
    - Were there any blockers? If so, which ones? Is it still blocked? Why?
    - What is the next important thing you should focus on?
- Read updates of others
    - Any questions, requests to communicate?
- Ask everyone to put their name into the list of attendees and add any last minute agenda items
- Go over everyone's updates and ask if there are any questions or things to discuss
- Everyone can demo something!

## Agenda

- PSA: Upate IPFS Working Group Capacity Planner (link in Action Items at the end)
- Q4 mid quarter scoring - should we skip the mid quarter self assesment this time?
- IPFS KPIs 
    - metrics to track how the project is doing. 
    - A lightweight tool to let different teams set their own prorities, but still pull in the same direction.

## Notes

### Team Updates

- @lidel
    -  Done:
        - Moved meeting notes to [team-mgmt](https://github.com/ipfs/team-mgmt/pull/760) and added Zoom Call URL to [IPFS Calendar (UTC)](https://calendar.google.com/calendar/embed?src=ipfs.io_eal36ugu5e75s207gfjcu0ae84@group.calendar.google.com&ctz=UTC) with Oli as co-host.
        - Issue updates related to foreign fetch being removed from ServiceWorker 
            - Summary: [in-web-browsers/issues/55](https://github.com/ipfs/in-web-browsers/issues/55#issuecomment-439255498) | Details: [arewedistributedyet/issues/32](https://github.com/arewedistributedyet/arewedistributedyet/issues/32)
            - Fixed up basic Service Worker demo to work with latest js-ipfs - [ipfs-service-worker/pull/16](https://github.com/ipfs-shipyard/ipfs-service-worker/pull/16)
            - Started looking into js-ipfs in service worker shared over iframe - [service-worker-gateway/issues/30](https://github.com/ipfs-shipyard/service-worker-gateway/issues/30)
        - Removed suggestion to set `Access-Control-Allow-Credentials` from GUIs, docs and scripts as a part of [HTTP Headers Cleanup](https://github.com/ipfs/in-web-browsers/issues/132)
        - `window.ipfs.enable()` is now used by `window.ipfs-fallback` if available ([#2](https://github.com/ipfs-shipyard/window.ipfs-fallback/pull/2))
    - Next:
        - publish API drafts as PR for comments
        - finish sw+iframe demo/poc to test feasibility of [service-worker-gateway/issues/30](https://github.com/ipfs-shipyard/service-worker-gateway/issues/30#issue-381410578)
- @alanshaw
    - Done:
        - Files API refactor (MERGED NOT YET RELEASED)
            * `ipfs.files.add` => `ipfs.add`
            * `ipfs.files.addPullStream` => `ipfs.addPullStream`
            * `ipfs.files.addReadableStream` => `ipfs.addReadableStream`
            * `ipfs.files.cat` => `ipfs.cat`
            * `ipfs.files.catPullStream` => `ipfs.catPullStream`
            * `ipfs.files.catReadableStream` => `ipfs.catReadableStream`
            * `ipfs.files.get` => `ipfs.get`
            * `ipfs.files.getPullStream` => `ipfs.getPullStream`
            * `ipfs.files.getReadableStream` => `ipfs.getReadableStream`
            * --- New core files API methods (js-ipfs) / moved from `ipfs.util` (js-ipfs-api):
            * `ipfs.addFromStream`
            * `ipfs.addFromUrl`
            * `ipfs.addFromFs`
            * See https://github.com/ipfs/js-ipfs/pull/1720
        - `ipld-dag-pb` refactor (MERGED NOT RELEASED) TLDR; no `multihash` or `cid` properties
        - [`--cid-base`/`?cid-base` PR](https://github.com/ipfs/js-ipfs/pull/1552) is ready for review!
        - `window.ipfs.enable()` is now used by `window.ipfs-fallback` if available ([#2](https://github.com/ipfs-shipyard/window.ipfs-fallback/pull/2)) thanks @lidel! 
        - Pair programming with [@pkafei](https://github.com/pkafei)
        - [0.34](https://github.com/ipfs/js-ipfs/issues/1721) is coming end of Nov/beginning of Dec
    - Blocked:
        - [Object API breaking change to return CIDs](https://github.com/ipfs/interface-ipfs-core/pull/388#issuecomment-437866965) "soft blocks" a release of js-ipfs-api.
    - Next:
        - Implement `addFrom*` methods in js-ipfs
        - Write interop tests for CIDv0/1 put and get        
- @fsdiogo
    - Done:
        - Share Files working without public gateways
            - https://github.com/ipfs-shipyard/ipfs-share-files/pull/44
        - Enable dir listing and downloading folder structures
            - https://github.com/ipfs-shipyard/ipfs-share-files/pull/47
    - Next:
        - Integrate Share Files in Web UI and Companion
        - IPFS UI Component Library ✨
- @olizilla
    - Done:
        - Design Systems London Conf
        - Error modal design
        - share files planning
    - Next
        - Define what's todo in Desktop
        - Fix resource utilization in webui
        - cut webui release
- @hacdias
  - Done:
    - Merge 'The PR' of IPFS Desktop
      - https://github.com/ipfs-shipyard/ipfs-desktop/pull/662
    - Still working on:
      - IPFS Desktop settings on Web UI
        - https://github.com/ipfs-shipyard/ipfs-webui/pull/883
      - Error handling on Desktop:
        - https://github.com/ipfs-shipyard/ipfs-desktop/pull/697

### Discussion Highlights ✨

- Some js-ipfs in Service Worker updates: [in-web-browsers/issues/55](https://github.com/ipfs/in-web-browsers/issues/55#issuecomment-439255498)
- js-ipfs 0.34 coming at the end of Nov/beginning of Dec with [nice API cleanup/refactoring](https://github.com/ipfs/js-ipfs/pull/1720)
- IPFS Desktop: improving UX for [error handling, built-in issue reporting](https://github.com/ipfs-shipyard/ipfs-desktop/pull/697)
- IPFS Share App: wip on improvements for users without ipfs-companion (embedded js-ipfs + gateway)
- Proto School: wip on saving state to local storage between learning sessions
- Open discussion: working hours / open-door-policy to provide support for people with questions about GUI/websites? 
- PSA: Working Group Capacity Planner (@all: see Action Item below)
- We did Milestone Evaluation Exercise ([notes](https://hackmd.io/haC8c6tPQYiBHJp09KzbMQ))
  - Review of [IPFS Project KPI Draft](https://docs.google.com/document/d/1r2Ng8Ura9yg63Aq8sXpJQ-PKFhDzJADoHRxZUESUugg/edit#) (will be made public in following weeks)
  - Everyone grabbed one Milestone and picked one Awesome and one Meh milestone and we discussed what makes them that way.
    - Brief discussion about the need for explaining basic concepts "just in time", so users are not overwhelmed. Both [docs.ipfs.io](https://docs.ipfs.io/guides/concepts/) and [proto.school](https://github.com/ipfs-shipyard/proto.school/pull/59) try to address this. 
    - Creating websites with IPFS is a good opportunity to onboard users  with IPFS concepts.

### By The Way! ✨

- @Gozala (Research Engineer at Mozilla) joined us last week during [All Hands Call](https://github.com/ipfs/team-mgmt/issues/756) and gave a talk about [mozilla/libdweb](https://github.com/mozilla/libdweb). [Recording](https://www.youtube.com/watch?v=0fT9HC2Crqw) and [Meeting Notes](https://github.com/ipfs/team-mgmt/blob/master/meeting-notes/2018/2018-11-12--all-hands.md#main-presentation) are available. 


### Action Items

- @all: Fill your estimated availability for 2019 in J column of [IPFS Working Group Capacity Planner - 2019 Roadmapping](https://docs.google.com/spreadsheets/d/1M7vSGfQyHZFQ0D-WpBcbjLCZrNT0x-qiRcR_7qzgyJo/#gid=2055723494). If you don't have write access, just message @lidel or @olizilla. 
- @all: Read [IPFS Project KPI Draft](https://docs.google.com/document/d/1r2Ng8Ura9yg63Aq8sXpJQ-PKFhDzJADoHRxZUESUugg/edit#) and provide comments
