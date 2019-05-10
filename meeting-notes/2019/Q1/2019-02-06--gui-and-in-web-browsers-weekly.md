# GUI & In Web Browsers Weekly Sync 2019-02-06

-   **Recording:** https://youtu.be/nknqIj1eCP8 || [/ipfs/bafybeif4kac6dt7xbrkilsatnelb7h5aje55odectwwdkois5zxfpje5b4](https://ipfs.io/ipfs/bafybeif4kac6dt7xbrkilsatnelb7h5aje55odectwwdkois5zxfpje5b4) 
-   **Moderator:** @olizilla
-   **Notetaker:** n/a (covered by @lidel)
-   **Attendees:**
    -   @jimpick
    -   @terichadbourne
    -   @lidel
    -   @fsdiogo
    -   @alanshaw
    -   @hugomrdias

  


**Moderator checklist**
-   Ensure that there is a notetaker
-   Start recording
-   Call for additional agenda items

  


**Agenda**

_General discussions, decisions, etc._

-   Team Updates and Demos
-   (olizilla 5mins) ipfs design resource<https://ipfs.io/ipfs/QmcSKzW6SSS2ygfbXHJHtNnDtJd4pHvVHDQUwhiM5FuWkX/>
-   OKR check in
-   FOSDEM highlights
    -   olizilla<https://www.localizationlab.org/>
    -   UX team at Tor.
    -   lidel: new i18n solution from Mozilla - Fluent:<https://projectfluent.org/> <https://arewefluentyet.com/> 

  


**Team Updates**

  


@hacdias (**OOO** until the 14th, first person writing updates this week!)

-   Done:
    -   FOSDEM’19 was awesome!
    -   Improve logging messages ([PR](https://github.com/ipfs-shipyard/ipfs-desktop/pull/816))
    -   Spectron tests for startup ([PR](https://github.com/ipfs-shipyard/ipfs-desktop/pull/730))
        -   There were lots of issues and searching involved to make them work. For some background, we had a bug where the tests wouldn’t finish if a window had the node integrations disabled. We are enabling them only for testing purposes. I’ve filed an issue on spectron repository for that ([ISSUE](https://github.com/electron/spectron/issues/347))
        -   Also the tests only pass on Windows and macOS. I’ve added a note to the README saying that Linux support is experimental and that Desktop might not work on every desktop environment possible.
    -   Update “auto” update procedure ([PR](https://github.com/ipfs-shipyard/ipfs-desktop/pull/815))
        -   It now shows a notifications when the update is available **and** downloaded. The user needs to click on it to update.
        -   The error handling is also better and hopefully it won’t crash IPFS Desktop with network errors or any other update-related error.
    -   Add ‘Configuration File’ option to right click menu for easy access. ([PR](https://github.com/ipfs-shipyard/ipfs-desktop/pull/818))
    -   Added some FQAs to the readme ([PR](https://github.com/ipfs-shipyard/ipfs-desktop/pull/819))
-   Next:
    -   OOO until the 14th
    -   @olizilla @fsdiogo, could one of you take a stab at[this PR](https://github.com/ipfs-shipyard/ipfs-desktop/pull/810/files)? So we can support dropping files and folders on macOS tray icon.

  


@lidel

-   Done:
    -   FOSDEM ‘19 \\o/
    -   ([i18n](https://github.com/ipfs/i18n)) started work on[improved GitHub Integration for Transifex](https://github.com/ipfs/i18n/issues/5) 
    -   ([proto.school](https://proto.school/)) wrote some notes on Files tutorials:[issue](https://github.com/ProtoSchool/protoschool.github.io/issues/91#issuecomment-460710050) and[PR](https://github.com/ProtoSchool/protoschool.github.io/pull/111#issuecomment-460982888)
    -   prep for a meeting with a browser vendor
    -   some prototyping around[redirect opt-out per website](https://github.com/ipfs-shipyard/ipfs-companion/issues/633) 
-   Blocked:
    -   No, but If I am blocking anyone ping me, I have a small backlog after FOSDEM that I need to turn into inbox zero
-   Next:
    -   (ipfs-companion) Finish PR with redirect opt-out per site
    -   (ipfs-companion/brave) check if js-ipfs with hapi 18 improves things with old polyfils for chrome.sockets.\* APIs
    -   (ipfs-companion)[Start adding uploads to MFS](https://github.com/ipfs-shipyard/ipfs-companion/issues/415) 

  


@fsdiogo

-   Done:
    -   Added loading animation when fetching files
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/949>
    -   Refactored the \`Add to IPFS\` dropdown
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/951>
    -   Updated the selected actions component UI
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/952>
    -   \[WIP] Refactoring the FilesList component to use \`react-virtualized\` so we can list a huge amount of entries without lag
-   Blocked:
    -   N/A
-   Next:
    -   Ship Web UI 2.4.0
    -   OKRs

  


@olizilla

-   Done:
    -   Pushing the ipfs-webui 2.4.0 forwards
    -   Solved the multiaddr conversion error / mixed content error on webui.ipfs.io
        -   <https://github.com/ipfs-shipyard/ipfs-webui/issues/925> 
    -   Reworked webui analytics to respect navigator.doNotTrack and add a call to action where you have doNotTrack enabled
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/930#issuecomment-459309214>
    -   Pairing on IPLD issues
-   Next:
    -   Release ipfs-webui 2.4.0
        -   <https://github.com/ipfs-shipyard/ipfs-webui/issues/927> 
    -   Tracking down what’s wrong with the ipld-explorer and getting it shipped
        -   <https://github.com/ipfs-shipyard/ipld-explorer/pull/47> 
    -   Adding a create-react-app example to js-ipfs so we dont break it again
        -   <https://github.com/ipfs/js-ipfs/tree/master/examples>  
          


@terichadbourne

-   Done:
    -   FOSDEM ‘19 \\o/
    -   Updated resources and documentation for ProtoSchool chapter leaders
        -   https&#x3A;//github.com/ProtoSchool/organizing/pull/32
-   Next:
    -   Continuing work on creating a ProtoSchool tutorial on the File API (suggestions welcome)
        -   Issue:<https://github.com/ProtoSchool/protoschool.github.io/issues/91#issuecomment-456457377> 
        -   WIP PR:<https://github.com/ProtoSchool/protoschool.github.io/pull/111> 
    -   Community Team Hack Week 2/11-2/15
        -   Decide whether to continue with Vue for ProtoSchool or migrate to VuePress
            -   Deposit all the feels at:<https://github.com/ProtoSchool/protoschool.github.io/issues/141> 

  


@alanshaw

-   Done:
    -   Fix for swallowed errors<https://github.com/ipfs/js-ipfs/pull/1860> 
    -   Progress on CIDv1 base32 default. Track PRs here:<https://github.com/ipfs/js-ipfs/issues/1440#issuecomment-461049347> 
    -   Finished Hapi 18 refactor<https://github.com/ipfs/js-ipfs/pull/1844>
    -   Polished<https://github.com/alanshaw/iim> 
-   Blocked:
    -   n/a
-   Next:
    -   Continue CIDv1 base32 by default - now tracking PRs here<https://github.com/ipfs/js-ipfs/issues/1440#issuecomment-461049347> 
    -   DHT PR is ready for merge!

  


@hugomrdias

-   Done:
    -   FOSDEM
    -   Travis CI work
    -   Lost my backpack so no laptop until next Monday
-   Blocked:
    -   N/A
-   Next:
    -   Finish travis PRs
    -   ipfs&lt;>infra week in london
    -   Probably continue bundle size PR because jacob is working hard on mplex and seems to be working

**Discussion Highlights**

_Discussion highlights and additional notes._

-   FOSEDM ‘19
-   Translations
    -   synchronizing translations[between Github and Transifex](https://github.com/ipfs/i18n/issues/5) may get easier in near future
    -   new i18n solution from Mozilla named Fluent is worth observing:<https://projectfluent.org/> <https://arewefluentyet.com/> 
    -   <https://www.localizationlab.org/>
        -   collaborative localization and user feedback for open source projects, improving language-specific edge cases and things that are lost in translation
-   Web UI
    -   Files screen improvements
        -   visual indicator when operation takes too long
        -   reworked Add menu
    -   Progress report on gathering metrics
-   Touched upon relative paths and static site generators
-   Cidv1 by default in js-ipfs - Track PRs here:<https://github.com/ipfs/js-ipfs/issues/1440#issuecomment-461049347>
-   David dropped in all hyped about new CI setup and Hugo modestly confirmed it is better than the old one :-))
-   Oli shared ipfs design resource<https://ipfs.io/ipfs/QmcSKzW6SSS2ygfbXHJHtNnDtJd4pHvVHDQUwhiM5FuWkX/>
