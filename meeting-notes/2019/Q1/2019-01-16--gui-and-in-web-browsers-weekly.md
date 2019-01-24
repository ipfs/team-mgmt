# GUI & In Web Browsers Weekly Sync 2019-01-16

-   **Moderator:** @olizilla
-   **Notetaker:** @daviddias et al
-   **Attendees:**
    -   _@terichadbourne_
    -   _@lidel_
    -   _@hugomrdias_
    -   _@alanshaw_
    -   _@fsdiogo_
    -   _@olizilla_
    -   _@_daviddias_
-   **Recording:** <https://www.youtube.com/watch?v=poLAtvrechc>;<https://ipfs.io/ipfs/bafybeibeeuinnvtud26rt3oazgtulgbmoesrupeoi3zlgiggjig6tj5mci> 

  


**Moderator checklist**

-   Ensure that there is a notetaker
-   Start recording
-   Call for additional agenda items

  


**Agenda**

_General discussions, decisions, etc._

-   Start with Team Updates and Demos
-   IPFS GUI team day in Porto has created some good lists of shared goals:
    -   The most exciting things ipfs-gui should build & Healthy habits
    -   <https://hackmd.io/8Q2L1GX-Sy2UdC0i1GhkLw?edit>
-   Alan has a secret to share 🤫

  


**Team Updates**

@lidel
-   Done:
    -   Released ipfs-companion beta with Web UI and proxy improvements:[v2.6.3.12650](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.6.3.12650) 
    -   Enable bundled Web UI for embedded js-ipfs - PR[ipfs-companion/pull/656](https://github.com/ipfs-shipyard/ipfs-companion/pull/656) 
    -   Fixes related to Files API changes - PR[ipfs-companion/pull/657](https://github.com/ipfs-shipyard/ipfs-companion/pull/657) 
    -   Asks for libp2p team 2019 Roadmap -[ipfs/roadmap/issues/18#comment](https://github.com/ipfs/roadmap/issues/18#issuecomment-454003719) 
    -   Following up on @Gozala’s work on PPWA: -[in-web-browsers/issues/137#comment](https://github.com/ipfs/in-web-browsers/issues/137#issuecomment-454181896) 
    -   Proposal to expose Gateway when running in browser contexts:[js-ipfs/issues/1820](https://github.com/ipfs/js-ipfs/issues/1820) 
-   Blocked:
    -   Waiting for js-ipfs and ipfs-webui releases
-   Next:
    -   Release companion to stable channel
    -   Spelunking trip into Brave build

  
  
  
  
  
  


@olizilla
-   Done:
    -   The IPFS GUI Team day in Porto (LIVE LIVE LIVE!)
    -   Fix adding files and directories via file-input and drag-n-drop<https://github.com/ipfs-shipyard/ipfs-webui/pull/931#issuecomment-454076913>
        -   Planned widget with info about repo/Storage stats in the future, initial notes:<https://github.com/ipfs-shipyard/ipfs-webui/issues/629#issuecomment-448945030> 
    -   Paired with Teri on design and implementation for mobile nav for proto.school
    -   Paired with Portia on tachyons dapp list website
    -   Working with Chris Waring on work-plan to get him on-boarded to ipfs-gui team
    -   Supporting candidate to work on ipfs in package-managers endeavour
    -   Interview candidate for Visual Design Lead role
-   Next:
    -   Opt in analytics for webui / desktop<https://github.com/ipfs-shipyard/ipfs-webui/pull/930>
    -   Release ipfs-desktop with macos cert for lovely install and auto-update experience.
    -   Refine OKRs and Roadmap based on feedback and the IPFS GUI team day doc.
        -   <https://hackmd.io/8Q2L1GX-Sy2UdC0i1GhkLw?edit> 

  


@alanshaw
-   Done:
    -   Did a holiday last week 🏂
    -   IPLD \`inMemory\` is going away<https://github.com/ipld/js-ipld/pull/188> use \`ipld-in-memory\` module instead
    -   Working on JS IPFS 0.34 release (VERY likely tomorrow morning). 0.34.0-rc.1 was released yesterday
-   Next:
    -   Release JS IPFS 0.34 🚢🚢🚢
        -   <https://github.com/ipfs/js-ipfs/issues/1721> 
    -   JS IPFS OKR finalising
    -   Catch up properly with benchmarking progress
        -   <https://benchmarks.ipfs.team/>
        -   <https://github.com/ipfs/benchmarks#documentation-index> 
    -   Start work on CID v1 base32 by DEFAULT

  


@hacdias
-   Done:
    -   Had an exam
    -   (Synced Desktop Translations) - we have a new chinese variation.
        -   <https://github.com/ipfs-shipyard/ipfs-desktop/pull/793>
    -   Fixed the IPv6 URLs in Web UI:
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/934>
        -   <https://github.com/tableflip/multiaddr-to-uri/pull/3>
    -   Investigated about context menus on WIndows:
        -   <https://github.com/ipfs-shipyard/ipfs-desktop/issues/678>
        -   Started implementing it on Windows.
-   Next week:
    -   One more exam, and the last one.
    -   Desktop bug fixing.
    -   Extract remaining english phrases from IPFS Desktop into the translation file
    -   Finish context menu on Windows
    -   🧙‍♂️

  


@fsdiogo
-   Done:
    -   Open ContextMenu with right-click
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/929>
        -   <https://github.com/tableflip/react-dropdown/pull/4>
    -   Add folders and files (@olizilla took the lead)
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/931>
    -   Add file operations to file preview
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/936>
    -   Released Web UI v2.3.3
        -   <https://github.com/ipfs-shipyard/ipfs-webui/releases/tag/v2.3.3>
-   Next:
    -   Push for the v2.4.0 release
        -   <https://github.com/ipfs-shipyard/ipfs-webui/issues/927>

  


@terichadbourne
-   Done:
    -   Launched ProtoSchool!
        -   Video of launch preso at:<https://youtu.be/G5aiLkHZ7CM> 
    -   Implemented ProtoSchool mobile nav thanks to a pair programming session with @olizilla<https://github.com/ProtoSchool/protoschool.github.io/pull/123> 
-   Blocked:
    -   I don’t understand IPLD Explorer enough to address this ProtoSchool issue about a perpetual spinner when you try to view your lesson submission there.<https://github.com/ProtoSchool/protoschool.github.io/issues/125> Any volunteers to help me learn?
-   Next :
    -   Build a ProtoSchool tutorial on the file API.
        -   Issue:<https://github.com/ProtoSchool/protoschool.github.io/issues/91>
        -   WIP PR where @mikeal has added the ability to work with files in browser:<https://github.com/ProtoSchool/protoschool.github.io/pull/111> 
 


@hugomrdias
-   Done:
    -   Multihashing-async async/await PR done
        -   https&#x3A;//github.com/multiformats/js-multihashing-async/pull/37
    -   Nearform CI sync and integration
    -   Gitlab and travis CIs updating
    -   Bundle size PRs
-   Next
    -   Finish benchmarks integration into the ipfs CI prototypes
    -   Finish bundle size
    -   Make browser datastore without leveljs (async/await)

**Discussion Highlights**

_Discussion highlights and additional notes._

-   Oli will help Teri understand the IPLD Explorer issue w/ ProtoSchool<https://github.com/ProtoSchool/protoschool.github.io/issues/125>
-   Oli shared some brainstorming from the GUI working group which is meeting in person this week:
    -   Projects to prioritize:
        -   &lt;Missing stuff here>
        -   IPFS Explorer (level above the MFS root)
        -   Hosting websites on IPFS
        -   Create-ipfs-app
        -   Bi-directional file share?
    -   Healthy habits
        -   Encourage mores OS contributors
            -   Teri mentioned there’s an issue open in ProtoSchool to add “next steps” sections after each tutorial that would link out to opportunities to learn more or contribute. May be a place to surface your projects or requests for help. See<https://github.com/ProtoSchool/protoschool.github.io/issues/129> 
        -   Meet at end of each quarter to retrospect and plan OKRs
        -   Create the component library
        -   Pairing with others to find out what they need and teach our component library / style guide
    -   Possibles
        -   Edit txt and md files in webui?
