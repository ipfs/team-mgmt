# GUI & In Web Browsers Weekly Sync 2019-01-02

-   **Moderator & Notetaker:** _&lt;none, it was a casual post-holiday call with surprisingly good attendance :)>_
-   **Attendees:**

    -   _@terichadbourne_
    -   _@lidel_
    -   _@jimpick_
    -   _@olizilla_
    -   _@hacdias_

  


**Moderator checklist**

-   Ensure that there is a notetaker
-   Start recording
-   Call for additional agenda items

  


**Agenda**

_General discussions, decisions, etc._

-   Start with Team Updates and Demos

  


**Team Updates**

@lidel

-   Done:
    -   Holidays :-)
    -   Discussions around accessing API of remote IPFS node - [in-web-browsers/issues/137](https://github.com/ipfs/in-web-browsers/issues/137) 
        -   @Gozala shared some relevant ideas in  
            [Progressive peer-to-peer web applications (PPWA)](https://via.hypothes.is/https://gozala.hashbase.io/posts/Native%20talk.html)  and tested initial assumptions in [in-web-browsers/issues/137#comment-450530548](https://github.com/ipfs/in-web-browsers/issues/137#issuecomment-450530548) 
    -   Switched Companion to modern Clipboard API, PDF and SVG work again - [ipfs-companion/pull/649](https://github.com/ipfs-shipyard/ipfs-companion/pull/649)
    -   Added a warning about mixed-content when gateway URL is not a Secure Context - [ipfs-companion/pull/650](https://github.com/ipfs-shipyard/ipfs-companion/pull/650) 
    -   Started discussion about the future of DNSLink cache - [ipfs-companion/pull/646](https://github.com/ipfs-shipyard/ipfs-companion/pull/646#issuecomment-450879014)  + [go-ipfs/issues/5884](https://github.com/ipfs/go-ipfs/issues/5884) 
-   Next:
    -   Finalize OKRs
    -   tackle holiday backlog
    -   release Companion

  


@hacdias

-   Done:
    -   Fixed issue where we were calling methods that only exist on macOS: <https://github.com/ipfs-shipyard/ipfs-desktop/pull/761>
    -   Fixed the links not opening in external windows: <https://github.com/ipfs-shipyard/ipfs-desktop/pull/769>
    -   Updated to Electron 4: <https://github.com/ipfs-shipyard/ipfs-desktop/pull/769>
    -   Fixed the black screenshot issue: <https://github.com/ipfs-shipyard/ipfs-desktop/pull/769>
    -   Improved the screenshots experience: there will be now a notification telling the user a screenshot was taken and if they click on it, Web UI will open on that screenshots. If the user has a multi-monitor setup, the screenshots will be in a directory.
        -   <https://github.com/ipfs-shipyard/ipfs-desktop/pull/759>
        -   <https://github.com/ipfs-shipyard/ipfs-desktop/pull/775>
-   Blocked:
    -   Waiting for macOS guys on this PR: <https://github.com/ipfs-shipyard/ipfs-desktop/pull/770>
-   Next:
    -   Go through Desktop’s issue list and see what can be closed and fixed.
    -   Prioritize native OS integrations: <https://github.com/ipfs-shipyard/ipfs-desktop/issues/679>
    -   Work on that ^^
    -   🧙‍♂️

@alanshaw
-   Done:
    -   JS IPFS 0.34 release dance 💃
    -   Holidays
-   Blocked:
    -   JS IPFS 0.34 release blocked on stack overflow issues with latest libp2p
-   Next:
    -   Cool stuff coming to a JS IPFS near you:
        -   Way smaller bundle is coming <https://github.com/ipfs/js-ipfs/pull/1795> minified+gzip >50% smaller!
        -   DHT is coming! <https://github.com/ipfs/js-ipfs/pull/856> APPROVED - blocked on test failures
        -   Fast `ipfs.add` is coming <https://github.com/ipfs/js-ipfs-unixfs-importer/pull/10> 
            -  > In real-world use, this changed the time it takes to \`jsipfs add\` a 260MB file to a fresh repo from 13.7s to 1.95s. By comparison\`go-ipfs\` takes 1.58s to add the same file to a fresh repo.
    -   Work on benchmarks for <https://benchmarks.ipfs.team>

@terichadbourne

-   Done:
    -   \[Live] Restructured ProtoSchool website to include community info <https://github.com/ProtoSchool/protoschool.github.io/pull/103>
    -   \[Merge pending review] Added a text-based tutorial on underlying concepts <https://github.com/ProtoSchool/protoschool.github.io/pull/59>
-   Next:
    -   Seek volunteers to lead chapters so there’s more content at launch
    -   Get feedback internally and make most urgent tweaks before mid-month public launch

@olizilla

-   Done:
    -   Holiday
    -   WIP Release plans for ipfs-gui <https://hackmd.io/FoaDLco6QSmaQ8RfiXE_fQ#>
    -   Requested Apple Developer Program enrollment
-   Next:
    -   Fix ipfs-geoip for new ipfs object api (currently fixing tests, and reviewing api)
    -   Create project plan for ipfs-gui team for Q1
    -   Create release issues for desktop, webui, share.
    -   Define Companion UI roadmap with lidel
    -   Pin down scope of ipfs http api exploration

 

**Discussion Highlights**

_Discussion highlights and additional notes._

-   Oli gave an overview of his GUI plans: <https://hackmd.io/FoaDLco6QSmaQ8RfiXE_fQ#> 
-   Jim gave an update about visiting Google Chrome Team in Tokyo and giving a demo: loading Signed HTTP Exchange from IPFS gateway using Service Worker -[in-web-browsers/issues/121](https://github.com/ipfs/in-web-browsers/issues/121#issuecomment-444769959)
-   Teri is looking for feedback before revamped ProtoSchool goes live
