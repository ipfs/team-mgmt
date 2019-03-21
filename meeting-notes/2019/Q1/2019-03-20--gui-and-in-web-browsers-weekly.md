# GUI & In Web Browsers Weekly Sync 2019-03-20

-   Recording: <https://youtu.be/JacNGrZjz8s> \|\| [/ipfs/bafybeiccu5l2rygik27ksaowlhlg2prapunxxkn2dz4hj5ynvtkiwyixqe](https://ipfs.io/ipfs/bafybeiccu5l2rygik27ksaowlhlg2prapunxxkn2dz4hj5ynvtkiwyixqe) 
-   Moderator: @olizilla
-   Notetaker: (we forgot to pick one! – @lidel )
-   Attendees:
    -   @alanshaw
    -   @olizilla
    -   @ericronne
    -   @hugomrdias
    -   @fsdiogo
    -   @lidel
    -   @autonome
    -   @terichadbourne
    -   @fsdiogo

  


**Preflight checklist**

-   Call for additional**agenda** items!
-   Ensure that there is a**notetaker**! (well… )
-   Start**recording**! :^)


**Agenda**

_General discussions, decisions, etc._

-   Team Updates and Demos
-   Lisbon hack’n’plan


**Team Updates**

  
@lidel

-   Done:
    -   (js-ipfs)
        -    [Refactor: decouple HTTP Server from cli/commands/daemon](https://github.com/ipfs/js-ipfs/pull/1950)
    -   (ipfs-companion)
        -   Released some Betas:[v2.7.5.757](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.7.5.757),[v2.7.5.760](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.7.5.760) and[v2.7.5.762](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.7.5.762)
    -   (ipfs-companion+Brave)
        -   [ Allow IPFS Companion Beta to have chrome.sockets.\*](https://github.com/brave/brave-core/pull/1988)
        -   **[**Embedded js-ipfs with self-hosted HTTP API and Gateway!**](https://github.com/ipfs-shipyard/ipfs-companion/issues/664#issuecomment-474625852)**
-   Next:
    -   Release Stable companion
    -   Lisbon hacn’n’plan
    -   Continue work on Brave integration (if time allows)

  
  


@hacdias

-   Done:
    -   (ipfs-desktop) Added to Brew cask (brew cask install ipfs)
    -   (ipfs-desktop) Contacted Chocolatey Maintainer (no answer yet)
    -   (ipfs-desktop) [made a prettier DMG](https://github.com/ipfs-shipyard/ipfs-desktop/pull/876)
    -   (ipfs-desktop) [merged ‘just a menubar’](https://github.com/ipfs-shipyard/ipfs-desktop/pull/866)
    -   (ipfs-desktop) [released 0.7.0, 0.7.1 and 0.7.2!](https://github.com/ipfs-shipyard/ipfs-desktop/releases) (0.7.3 coming soon too!)
        -   Go there and try!!!!
-   Blocked:
    -   {?}
-   Next:
    -   {?}

  
  


@alanshaw

-   Done:
    -   Released go-ipfs-dep @0.4.19
    -   Released ipfs-http-client @30.1.0
        -   <https://twitter.com/_alanshaw/status/1106500694452985856> 
    -   Reviewed and merged listen on multi API and Gateways addresses PR <https://github.com/ipfs/js-ipfs/pull/1903> 
    -   Fix for cat deeply nested file <https://github.com/ipfs/js-ipfs/pull/1920> 
    -   Helped debug and opened PR for duplicate variable declaration instream-to-pull-stream <https://github.com/pull-stream/stream-to-pull-stream/pull/16> 
    -   Merged PR for DAG HTTP API <https://github.com/ipfs/js-ipfs/pull/1930> 
-   Blocked:
    -   Waiting on libp2p release then it's 0.35 release 🚆 time!
-   Next:
    -   0.35 release
    -   Continue work on async iterators endeavour

  
  


@fsdiogo

-   Done:
    -   Vacations 🏝
    -   Added IPFS Desktop to [ipfs.io](http://ipfs.io)
        -   <https://github.com/ipfs/website/pull/298>
    -   Web UI help system
        -   Updated the tours
        -   Added tooltip
        -   Plugged i18n to the tours
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/983>
-   Next:
    -   Finish help system
    -   GUI team week

  


@hugomrdias

-   Done:
    -   vue support research
    -   multihashing-async async/await PR merged
    -   iso-stream-http released
    -   http-client bundle size PR merged and released
    -   ipfs-repo bundle PR
        -   <https://github.com/ipfs/js-ipfs-repo/pull/186> updated
    -   fix js-libp2p-kad-dht bundle size
    -   fix libp2p/js-libp2p-websocket-star-multi bundle size
        -   <https://github.com/libp2p/js-libp2p-websocket-star-multi/pull/4>
    -   fix unixfs-importer
        -   <https://github.com/ipfs/js-ipfs-unixfs-importer/pull/23>
    -   review new fix for proper-lockfile in system with low precision mtime
    -   js-ipfs bundle size PR
-   Blocked
-   Next
    -   Vue support
    -   Async iterators
    -   Review <https://github.com/ipfs/js-ipfs/pull/1950>

  


@olizilla

-   Done:
    -   set up an ipfs cluster <https://github.com/hsanjuan/ansible-ipfs-cluster/compare/master...tableflip:example-with-secrets> 
    -   Update cluster ansible docs <https://github.com/hsanjuan/ansible-ipfs-cluster/pull/6> 
    -   Make ipfs desktop easy to install and show download stats <https://github.com/ipfs-shipyard/ipfs-desktop#install>
    -   Make desktop auto update work
    -   Fix file upload bug in webui
-   Blocked:
    -   {?}
-   Next:
    -   {?}

  


@ericronne

-   Done:
    -   No noteworthy IPFS GUI work! <img src="https://user-images.githubusercontent.com/157609/54728562-f03cf500-4b7e-11e9-9b72-b394fecd5b1a.png" height=24 width=24 />
-   Blocked:
    -   {?}
-   Next:
    -   {?}

  


@terichadbourne

-   Done:
    -   Lots of Offline Camp planning and website updates. Anyone excited about Offline First should sign up here to ensure they’re notified when we announce the event!<https://offlinecamp.typeform.com/to/V8aSWJ> 
-   Currently:
    -   Making great progress on a roadmap for ProtoSchool in preparation for it becoming a top-level project.
        -   Please help by suggesting new tutorials or features that would help your team accomplish its educational goals. Deposit all the IPFS-related feels at:<https://github.com/ipfs/roadmap/issues/25> 
        -   What’s the best way to ensure we capture any relevant ideas that come out of your team meeting later this month?

  


**Other Highlights**

- Thanks to @hugomrdias [js-ipfs-http-client is 33% smaller](https://twitter.com/_alanshaw/status/1106500694452985856) now!
- Dietrich (@autonome) [joins PL to help with IPFS](https://twitter.com/dietrich/status/1107752855245447168), welcome to the first call!
- We will meet next week in Lisbon for Q1 retro, Q2 planning and general sync,  
expect more afk time than usual
