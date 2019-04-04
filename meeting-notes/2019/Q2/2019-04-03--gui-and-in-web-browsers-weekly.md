# GUI & In Web Browsers Weekly Sync 2019-04-03

-   Recording: <https://youtu.be/ugVF2QyyKNU> or [/ipfs/bafybeiaubttdsblhyrvdcdjmzl6qwxunfxql2ly57rlzvaqrmkiusirviu/](https://ipfs.io/ipfs/bafybeiaubttdsblhyrvdcdjmzl6qwxunfxql2ly57rlzvaqrmkiusirviu/) 
-   Moderator: @olizilla
-   Notetaker: we forgot to ask for one this week :'(
-   Attendees:
    -   @ericronne
    -   @jimpick
    -   @fsdiogo
    -   @terichadbourne
    -   @lidel


**Agenda**

_General discussions, decisions, etc._

-   Start with Team Updates and Demos
-   @lidel, GUI/IWB call moved +1h due to summer time (the call is anchored to UTC)  
    Are we ok with this, or should we move it back to the old time?
    -   Answer: we decided to keep it as-is
-   Q2 hopes and dreams
    -   GUI: <https://github.com/ipfs/team-mgmt/pull/926>
    -   In Browsers: <https://github.com/ipfs/team-mgmt/pull/910> 

  
**Team Updates**

 @lidel

-   Done:
    -   Lisbon hack’n’ plan
    -   [OKRs - 2019 Q2 Web Browsers WG: team-mgmt/pull/910](https://github.com/ipfs/team-mgmt/pull/910) 
    -   Meetings and discussions around ENS collaborations
    -   (i18n) [added support for pt-BR to existing projects](https://github.com/ipfs/i18n/issues/7) 
    -   Started tracking Alt-Srv in <https://github.com/ipfs/in-web-browsers/issues/144> 
    -   [IPFS Companion v2.8.0 landed in Stable Channel](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.0)
    -   \[Brave+chrome.sockets]: WIP [Embedded JS Gateway now produces valid streaming responses](https://github.com/ipfs-shipyard/ipfs-companion/issues/664#issuecomment-479535264)
-   Next:
    -   Solve known problems with gateway over chrome.sockets
    -   Cleanup and PR upstream patches (js-ipfs, hapi)

  


@fsdiogo

-   Done:
    -   Team week in Lisbon
    -   ProtoSchool
        -   Project restructuring
        -   Componentize tutorials
        -   Simplify how to add tutorials
        -   Landing page for each tutorial
        -   <https://github.com/ProtoSchool/protoschool.github.io/pull/180>
-   Blocked:
    -   Added guided tours to \`ipld-explorer-components\` to plug them to Web UI
        -   <https://github.com/ipfs-shipyard/ipld-explorer-components/pull/17>
    -   Polished the Web UI guided tours
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/983>
-   Next:
    -   Help with the files tutorial on ProtoSchool
    -   Tackle Web UI issues

  


@olizilla

-   Done:
    -   GUI Team OKRs <https://github.com/ipfs/team-mgmt/pull/926>
    -   Lisbon hack & plan wrangling and review <https://github.com/protocol/event-management/issues/197#issuecomment-478537267>
    -   Debug IPLD Explorer cid coerced to base58btc issue
        -   <https://github.com/multiformats/js-cid/issues/76>
    -   Research how Atom installs the `atom` and `apm` commands on install, as guide for how we'd do the same for `ipfs` from desktop - <https://github.com/ipfs-shipyard/ipfs-desktop/issues/727#issuecomment-479425358> 
    -   PR to get webui 2.4.4 into go-ipfs 0.4.20 release - <https://github.com/ipfs/go-ipfs/pull/6169> 
    -   Interviewing for js-ipfs TPM role
-   Blocked:
    -   Not urgent but waiting on feedback on PR for preserving base in js-cid <https://github.com/multiformats/js-cid/pull/77>
-   Next:
    -   End-to-end tests for adding files to webui and ipfs desktop
    -   Fix dir adding bug in desktop
    -   Fix ipld graph-crumb bug in desktop
    -   Catch up with proto.school work

  


@ericronne

-   Done:
    -   Lisbon team week
    -   Video thumbnail title card designs
    -   \[Misc Filecoinery: branding research, style iteration]
-   Next:
    -   Styleguide: assess Tachyons to see if it’s promising/fitting
    -   Styleguide: design review of current IPFS apps
    -   \[More Filecoinchicanery]

  


@terichadbourne

-   Done:
    -   Lisbon hack’n’ plan
    -   ProtoSchool planning:
        -   Roadmap: <https://github.com/ProtoSchool/roadmap#protoschool-roadmap> 
        -   Q2 OKRs: <https://github.com/ProtoSchool/roadmap/blob/master/okrs/2019-q2.md>
-   Kinda making progress, yet somewhat stuck:
    -   Building an MFS tutorial on ProtoSchool
        -   WIP PR: <https://github.com/ProtoSchool/protoschool.github.io/pull/111>
-   Next:
    -   All the things!

@jimpick

-  Done:
        -   DDC WG OKRs
    -   Next:
        -   IPFS Camp things… ?

@hugomrdias

-   Done:
    -   Lisbon team week
    -   Reviewed fix: fix mtime precision on some filesystems: <https://github.com/moxystudio/node-proper-lockfile/pull/88>
    -   Lots of planning and OKRs definition
    -   Vue support debugging mplex and readable-stream
    -   IPNS research (ddc okrs, lars RFC, etc)
-   Blocked
    -   https://github.com/ipfs/js-ipfs/pull/1884 pull-mplex
-   Next:
    -   IPNS research


**Action Items**

_Announce issues that need help, get people to help_

-   Speaking Portuguese? Living in **Portugal** or**Brazil**? Help us understand how to handle `pt-*` translations by providing feedback in: <https://github.com/ipfs/i18n/issues/7> 
-   Looking for feedback on PR for preserving base in js-cid: <https://github.com/multiformats/js-cid/pull/77>
