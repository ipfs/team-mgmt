# GUI & In Web Browsers Weekly Sync 2019-03-06

-   Recording: [/ipfs/bafybeihymg3paq2yqqki653mnvuf7gyyephcoq2gzsgfcfdtmy4sybx4yq](https://ipfs.io/ipfs/bafybeihymg3paq2yqqki653mnvuf7gyyephcoq2gzsgfcfdtmy4sybx4yq) || https://youtu.be/mZiwIkjDNkI
-   Moderator: @olizilla
-   Notetaker: @jimpick
-   Attendees:
    -   @jimpick
    -   @lidel
    -   @olizilla
    -   @fsdiogo
    -   @terichadbourne
    -   @hugomrdias
    -   @alanshaw
    -   @cwaring
 


**Preflight checklist**

-   Call for additional **agenda** items!
-   Ensure that there is a **notetaker**!
-   Start **recording**! :^)
 


**Agenda**

_General discussions, decisions, etc._

-   Start with Team Updates and Demos
-   Weekly Call Time Re-evaluation: look at [the doodle results](https://github.com/ipfs/team-mgmt/issues/790#issuecomment-464389427), and see if we can pick another time at which the usual participants are able to join  


**Team Updates**

@lidel
-   Done:
    -   (i18n) confirmed Hugo’s i18n.json files are compatible with Transifex
    -   (cidv1b32) [posted some updates](https://github.com/ipfs/ipfs/issues/337#issuecomment-469051261)
        -   [Started discussion about The ".dweb" Special-Use Domain Name](https://github.com/arewedistributedyet/arewedistributedyet/issues/34)
        -   Added “Bird's-eye view" to <https://github.com/ipfs/ipfs/issues/337#issue-340637664> 
    -   (is-ipfs) released [v0.6.0](https://github.com/ipfs/is-ipfs/releases/tag/v0.6.0) (supports basic multiaddr checks)
    -   (ipfs-companion)
        -   [released v2.7.5.748 (Beta)](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.7.5.748) with revamped redirect controls
        -   [Discussion on New UI for IPFS Companion](https://github.com/ipfs-shipyard/ipfs-companion/issues/689)       
-   Blocked:
    -   Started refactoring of DNSLink code (from sync to async), but Chrome does not support async listeners in webRequest API. May require bigger refactor of dnslink logic.
-   Next:
    -   (ipfs-companion)
        -   Ship new beta and stable
        -   Get back to debugging js-ipfs in Brave

@hacdias
-   Done:
    -   (ipfs-desktop) [added .deb, .snap and .rpm package support](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.7.0-rc.3)
    -   (npm-go-ipfs-dep) moved from Jenkins to Travis
    -   (protoschool) added a Lisbon chapter ([PR](https://github.com/ProtoSchool/protoschool.github.io/pull/167))
    -   (ipfs-or-gateway) a tool to download an hash from IPFS, falling back to an HTTP Gateway ([repository](https://github.com/hacdias/ipfs-or-gateway))
    -   (npm-go-ipfs-dep) reworked to fetch the versions, platforms and architectures available from dist.ipfs.io or any other compatible provided URL ([PR](https://github.com/ipfs/npm-go-ipfs-dep/pull/30))
        -   Not released yet. Will be released as a pre-release first.
-   Blocked _(awaiting feedback)_:
    -   (ipfs-webui) connect to other peers ([PR](https://github.com/ipfs-shipyard/ipfs-webui/pull/969))
-   Next _(and wip)_:
    -   (ipfs-desktop) Better node status visualization and more robustness ([issue](https://github.com/ipfs-shipyard/ipfs-desktop/issues/857))
    -   (ipfs-desktop) support for Chocolatey ([PR](https://github.com/ipfs-shipyard/ipfs-desktop/pull/853))
    -   (ipfs-desktop) investigate more package managers
    -   (ipfs-webui) use pdf.js to preview PDFs ([issue](https://github.com/ipfs-shipyard/ipfs-desktop/issues/785))

@olizilla

-   Done:
    -   Fix protoschool ipfs init errors<https://github.com/ProtoSchool/protoschool.github.io/pull/168> 
    -   CI for ipfs docs ci<https://github.com/ipfs/docs/pull/151>
        -   need tags on go-ipfs-api<https://github.com/ipfs/go-ipfs-api/issues/169> 
    -   CI for ipfs website<https://github.com/ipfs/website/pull/294> 
    -   CI for ipld website<https://github.com/ipld/website/pull/56> 
    -   CI for filecoin.io<https://github.com/filecoin-project/website/pull/94> 
    -   DNS for camp.ipfs.io
    -   review and merge docs PRs<https://github.com/ipfs/docs/pull/137> 
    -   proposed and mocked up UI improvements for IPFS Companion<https://github.com/ipfs-shipyard/ipfs-companion/issues/689#issuecomment-469644245> 
-   Blocked:
    -   {?}
-   Next:
    -   Nu-analytics based on feedback
    -   More CI for ipld, multiformats, dist.ipfs.io
    -   Decide on direction for user help for webui
    -   Kick of the gui team react component library
    -   Propose new Peers page features and design.
    -   IPFS desktop release.

  
  


@fsdiogo

-   Done:
    -   Drop react refs for selecting files
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/982>
    -   Web UI help system
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/983>
-   Next:
    -   Help system

  


@terichadbourne
-   Still:
    -   Continuing work on creating a ProtoSchool tutorial on the File API (suggestions welcome)
        -   Issue:<https://github.com/ProtoSchool/protoschool.github.io/issues/91#issuecomment-456457377> 
        -   WIP PR:<https://github.com/ProtoSchool/protoschool.github.io/pull/111> 
-   Help Needed:
    -   ProtoSchool roadmap is in progress! I need suggestions from various project teams as to what ProtoSchool content would support their goals. Please deposit all the IPFS-related feels at:<https://github.com/ipfs/roadmap/issues/25> 

@hugomrdias
-   Done:
    -   feat: upgrade to stream 3 #66
        -   <https://github.com/rvagg/bl/pull/66>
    -   tar-stream bundle size
    -   concat-stream bundle size
    -   debugging libp2p windows ci job
    -   debug a es module/cjs issue with
        -   <https://github.com/dignifiedquire/borc/issues/41>
    -   async iterators priority list
        -   <https://github.com/ipfs/js-ipfs/issues/1670>
    -   fix: use the same timeout for mocha and karma-mocha #338
        -   <https://github.com/ipfs/aegir/pull/338>
    -   released aegir with the karma-mocha timeout fix
    -   new companion prototype
        -   <https://github.com/ipfs-shipyard/ipfs-companion/issues/689#issuecomment-469637081>
    -   Proper-lockfile sleep issue fixing
-   Blocked:
    -   Oli and hacdias can you pls look at
        -   <https://github.com/ipfs/js-ipfs/issues/1897>
-   Next
    -   merge http-client bundle size PR
    -   finish js-ipfs bundle size PR
    -   multihashing-async async/await PR
    -   async iterators
    -   Finish proper-lockfile PR

  


@alanshaw
-   Done:
    -   Preload in JS IPFS works again!<https://github.com/ipfs/go-bitswap/issues/68> 
    -   Working on getting JS IPFS 0.35 released<https://github.com/ipfs/js-ipfs/issues/1826> 
    -   PRs for exporting types and utils statically<https://github.com/ipfs/js-ipfs-http-client/pull/951> and<https://github.com/ipfs/js-ipfs/pull/1908>
    -   Many interviews
-   Next:
    -   Debugging for 100% CPU
    -   Testing the DHT
    -   Work towards async iterators endeavour<https://github.com/ipfs/js-ipfs/issues/1670> 
    -   Work towards CIDv1 & base32 encoded by default<https://github.com/ipfs/js-ipfs/issues/1440> 

 


**Discussion Highlights**

_Discussion highlights and additional notes._

- Weekly Call Time Re-evaluation: call time stays the same for now (alternatives turn out to be equally bad)
-   Alan: more manual testing
-   Alan: Vue.js + js-ipfs issue <https://github.com/ipfs/js-ipfs/issues/1875>
   - **Help wanted**
-   Oli: ipfs-dns-deploy <https://github.com/ipfs-shipyard/ipfs-dns-deploy/issues/2>
-   Diogo gave a demo showing UI tour help system integrated in webui
    -   Discussion about how to toggle / access help
-   Chris:
    -   Thinking of ways to capture user input. Chat widget? (eg. Intercom)
    -   Shared react component library <https://github.com/ipfs/ipfs-gui/issues/76>
    -   IPFS Camp website released
