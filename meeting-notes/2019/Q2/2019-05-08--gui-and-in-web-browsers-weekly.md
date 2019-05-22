# GUI & In Web Browsers Weekly Sync 2019-05-08
  
-   Recording: [bafybeifi66lzruzmlbev3xqas7fwjfptzcp7yycu6vxegycswptuuewhei](https://ipfs.io/ipfs/bafybeifi66lzruzmlbev3xqas7fwjfptzcp7yycu6vxegycswptuuewhei/) (mirror: <https://youtu.be/GE0Zhi0PLs4>)
-   Moderator: @olizilla
-   Notetaker: @autonome
-   Attendees:
    -   @autonome
    -   @olizilla
    -   @lidel
    -   @fsdiogo
    -   @terichadbourne
    -   @hugomrdias
    -   @cwaring
  
**Agenda**
_General discussions, decisions, etc._
-   **_**_{ add your items below}_**_**
-   @lidel, 10min, quick demos
    -   Brave: Embedded HTTP Gateway can load Wikipedia
    -   ENS & DNSLink interop demo
    -   Loading SXG (b3) from ipfs.io Gateway
-   @olizilla
    -   Better rituals!
    -   Text based ‚Äúwhat i did yesterday, any blockers, what i‚Äôm working on today‚Äù in irc, to let you team and curious contributors know what is being worked on and who to ask questions to.
    -   Set a topic for the weekly call in advance. Spend the time discussing issues rather than reporting status. This would let us invite relevant guest speakers, e.g we could talk about the UI component lib and invite bit.dev.
    -   Bonus feat. Our videos could then go on youtube with a topic name rather than a date stamp<https://www.youtube.com/results?search_query=IPFS+GUI+and+in+web+browsers>
-   &lt;your_name>, &lt;the thing>
-   Dealing with slow commands in ipfs...
-   Team Updates and Demos
**Team Updates**
@lidel
-   Done:
    -   js-ipfs
        -   PR:[Gateway Improvements: Streaming, Conditional and Range Requests](https://github.com/ipfs/js-ipfs/pull/1989) 
        -   wip PR: Added support for /ipns/ paths at HTTP Gateway<https://github.com/ipfs/js-ipfs/pull/2020> 
    -   Brave + ipfs-companion ([ipfs-companion/issues/716](https://github.com/ipfs-shipyard/ipfs-companion/issues/716))
        -   Some upstreams PRs
            -   <https://github.com/feross/chrome-net/pull/36> 
            -   <https://github.com/pinojs/hapi-pino/pull/76> 
            -   <https://github.com/hapijs/hapi/pull/3946> 
        -   Released ipfs-companion Beta with embedded Gateway Improvements around Conditional and Range requests:[v2.8.1.780](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.1.780) 
        -   Embedded HTTP Gateway can load Wikipedia
            -   Tracked down all remaining changes needed for Embedded HTTP Gateway to support /ipns/{fqdn} with sharding:  
                <https://github.com/ipfs-shipyard/ipfs-companion/pull/719> 
            -   Demo (/ipns/+DNSLink+HAMT)
                -   /ipns/tr.wikipedia-on-ipfs.org/wiki/Anasayfa.html
            -   Released new Beta with above changes:[v2.8.1.782](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.1.782) 
    -   Our Public Gateway (ipfs.io/ipfs/{cid})
        -   Added support for application/signed-exchange;v=b3 at ipfs.io/ipfs/\*.sxg solving issue raised by Jim ([here](https://github.com/ipfs/in-web-browsers/issues/121#issuecomment-487828624))
            -   tl;dr Anyone can load .sxg file ([Signed HTTP Exchange](https://github.com/ipfs/in-web-browsers/issues/121)) in Chrome 74+ and it will Just Work‚Ñ¢
    -   CIDv1
        -   PSA: we finalized discussion about making Base32 the default for all CIDv1 CIDs. Resolution:**do it!**\\o/  
            Tracked in:[go-ipfs/issues/6220](https://github.com/ipfs/go-ipfs/issues/6220) and[js-ipfs/issues/1995](https://github.com/ipfs/js-ipfs/issues/1995) 
    -   ENS
        -   Design discussions about interop between DNS-based delegated ENS resover and DNSLink support in go-ipfs 0.4.20
    -   Community
        -   Wrote some notes on running go-ipfs in Docker, and some workarounds for changing network topologies (eg. moving laptop)
<https://github.com/ipfs/community/issues/408#issuecomment-490032167> 
-   Blocked:
    -   PR:[Gateway Improvements: Streaming, Conditional and Range Requests](https://github.com/ipfs/js-ipfs/pull/1989)
    -   PR:[feat: load files/dirs from hamt shards #19](https://github.com/ipfs/js-ipfs-http-response/pull/19)
-   Next:
    -   Brave
        -   Improving content discovery
        -   chrome.sockets-based TCP transport (could also solve previous point)
        -   Discovery of IPFS nodes in local network  
            ([see recent updates around mDNS interop](https://github.com/ipfs/in-web-browsers/issues/45#issuecomment-490459698) )
    -     
  
  
@fsdiogo
-   Done:
    -   Updated navbar active item on Web UI
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/1022>
    -   Fixed code highlight not updating
        -   <https://github.com/ProtoSchool/protoschool.github.io/pull/206>
    -   Preserve user code when viewing solution
        -   <https://github.com/ProtoSchool/protoschool.github.io/pull/215>
    -   Fixed \`File Objects\` logging
        -   <https://github.com/ProtoSchool/protoschool.github.io/commit/45cec488d6b4ff81a26bafae080b71c65fd96ecd>
    -   Fixed e2e tests after changing the \`View Solution\` flow
        -   <https://github.com/ProtoSchool/protoschool.github.io/pull/212>
    -   Paired with Teri to enable markdown formatting in the user logging description
        -   <https://github.com/ProtoSchool/protoschool.github.io/pull/219>
  
@hacdias
-   Done:
    -   IPFS Desktop
        -   [IPFS CLI tools on PATH during runtime on all OSes](https://github.com/ipfs-shipyard/ipfs-desktop/pull/906)
        -   [Support macOS dark mode](https://github.com/ipfs-shipyard/ipfs-desktop/pull/918) (on native interfaces)
        -   [Improve dialogs UX](https://github.com/ipfs-shipyard/ipfs-desktop/pull/919)
        -   [Update to Electron 5](https://github.com/ipfs-shipyard/ipfs-desktop/pull/921)
    -   IPFS Web UI
        -   [Allow settings to be edited with the daemon offline](https://github.com/ipfs-shipyard/ipfs-webui/pull/1023)
        -   [Work with disabled bandwidth metrics](https://github.com/ipfs-shipyard/ipfs-webui/pull/1024)
        -   [Add IPFS on Path setting](https://github.com/ipfs-shipyard/ipfs-webui/pull/1016)
    -   Others
        -   Cleaned up Awesome IPFS, updated the dependencies, removed failing links, moved to Circle CI (found out that it wasn‚Äôt being deployed for lots of time, it was still waiting for Jenkins!)
        -   Updated the XKCD Archive:[/ipns/xkcd.hacdias.com](https://ipfs.io/ipns/xkcd.hacdias.com/) (automatically updated every day)
-   Blocked:
    -   {?}
-   Next:
    -   Desktop: NPM on IPFS
    -   Want feedback:
        -   <https://github.com/ipfs-shipyard/ipfs-webui/issues/1025>
        -   <https://github.com/ipfs-shipyard/ipfs-webui/issues/1026>
  
@alanshaw (not attending)
-   Done:
    -   Released[ipfs-http-client@30.1.4](https://github.com/ipfs/js-ipfs-http-client/releases/tag/v30.1.4) üö¢
    -   Proposed[new async await API](https://github.com/libp2p/interface-stream-muxer/pull/55) for libp2p stream muxer
    -   Finishing off[it-mplex](https://github.com/alanshaw/it-mplex) (JavaScript implementation of[ mplex](https://github.com/libp2p/specs/tree/master/mplex) using async iterators) which complies to the proposed stream muxer API
        -   Smaller (~250 LoC vs ~700 LoC in current impl)
        -   [About 20% faster than current impl](https://usercontent.irccloud-cdn.com/file/3dDEXbmV/Screenshot%202019-04-27%20at%2014.40.28.png)
-   Next:
    -   Landing DHT in JS IPFS
  
  
@terichadbourne
-   Done
    -   Worked with @ericronne to incorporate suggestions for improving wording for the Decentralized Data Structures tutorial
        -   <https://github.com/ProtoSchool/protoschool.github.io/pull/213>
    -   While pairing with @olizilla, revamped the lesson order proposed for the MFS tutorial
        -   <https://github.com/ProtoSchool/protoschool.github.io/issues/91#issuecomment-487084184> 
    -   Paired with @fsdiogo to enable markdown formatting in the user logging description
        -   <https://github.com/ProtoSchool/protoschool.github.io/pull/219>
-   In Progress
    -   MFS Tutorial has new lessons, with more to come
        -   <https://github.com/ProtoSchool/protoschool.github.io/pull/200> 
        -   Looking for volunteers to pair, especially on validation
        -   Need guidance on getting a sample .txt file onto the public gateway to be used for copying in lesson
-   Next
  
@olizilla
-   Done:
    -   Researching IPFS camp course ideas.
    -   First IPFS Contributor office hours
    -   ipfs-deploy PR to use http gateway of pinning service used rather than pointing everyone at ipfs.io
    -   1:1‚Äôs with all the gui team \\o/
    -   Pairing on MFS tutorial for proto.school
    -   End-to-end cypress tests for proto.school lessons.
-   Blocked:
    -   Need a release date from go-ipfs with the fix for ‚Äúcan‚Äôt add multiple files‚Äù. We like to release ipfs-desktop, but may have to release with an older version.
-   Next:
    -   Release 0.8 of IPFS Desktop
    -   DAG Visualiser for adding files to IPFS, that shows the effect of the options on the shape of the graph (trickle vs balance, chunk size, etc)
    -   Adding blockstore and pin data to the ipfs webui files root page.
    -   Q2 OKR
  
@autonome
-   Done:
    -   Not much in browser land!
    -   Wrangling vendors for IPFS camp participation
    -   Talked with some about regular IETF participation
    -   Lots of interesting collaboration activity - people like us!
-   Blocked:
    -   {?}
-   Next:
    -   IPFS Camp attendance,
    -     
@hugomrdias
-   Done:
    -   feat: add support for File DOM API to files-regular<https://github.com/ipfs/js-ipfs/pull/2013> 
    -   <https://github.com/ipfs/js-ipfs-http-client/pull/986>  : feat: add support for File DOM API to files-regular
    -   <https://github.com/ipfs/interface-js-ipfs-core/pull/461>  : feat: add tests for add data using File DOM api #461
    -   <https://github.com/hugomrdias/js-ipfs-utils>  : Package to aggregate shared logic and dependencies for the IPFS ecosystem
    -   add node 12 to CI in aegir
    -   <https://github.com/ipfs/aegir/pull/358> : feat: update deps and cleanup
    -   fix js-ipfs electron example
    -   <https://github.com/ipfs/aegir/pull/359> : feat: add support for electron in tests
    -   more fixes to "add support to ipns resolve /ipns/fqdn" PRs
    -   fix interface-core pubsub tests
    -   <https://github.com/ipfs/js-ipfsd-ctl/pull/332> : fix: updates deps and http for name resolve dns
-   Blocked
    -   Go-ipfs release
-   Next
    -   Ipns over dns
    -   Recursive ipfs dns, ipns resolve and ipfs name resolve
  
  
## Notes:
* Lidel, Brave Demo
* New beta IPFS Companion release!
* improvements in embedded http gateway
* DEMO: IPFS + Brave nightly!
* Use embedded node
* Fixed multiple issues loading wikipedia
* IPNS not impl in js-ipfs
* DNSLink tricky in js-ipfs
* Had to shard wikipedia, which sharding support wasn't great
* made a bunch of fixes
* Voltron'd it all together...
* And boom, wikipedia loads!
* Content discovery is fast if nearby node has it
* DEMO: ENS!
* talked about delegated ENS...
* and we already have DNSLink...
* run ipfs in docker w/ ENS...
* load localhost + eth.link
* re-used dnslink support to add support for ENS!
* experimental resolvers
* DEMO: Signed HTTP Exchanges!
* Chrome 74+
* Open sxg file from public gateway
* loaded!
* Chrome unpacks the sxg file
* sets proper origin + title, etc
* Stable chrome can load for approved origins
* archives expire after 7 days
* would be interesting to add to our http gateways
* (me) other browsers?
* sxg is contentious - AMP in sheep's clothing
* how can we influence the sec model
* can we tell that story?
* (chris) can we control loading experience?
* might need to educate users about what's happening
* things take a long time
* maybe we can redirect to loading screen or?
* worth digging further into
* this is a challenge everywhere
* how to show the benefit
* how to show the trade-offs - slow but decentralized!
* maybe be a value-add at first? eg backup to http
* demonstrating the value of the slowness
* ipfs commands are around transparency of access
* but those apis aren't great for knowing what's actually happening
* great from cli, but not from app developer
* designs from Agata for health meter
* but expensive and slowww to find that info out
* AGENDA ITEM: this call!
* historically was proj mgmt
* proposal: meaty agenda items for discussion
* and guest speakers
* "discussion on a topic"
* Oli doing 1:1s w/ everyone
* Chris said we're generating all these videos
* and content interesting but the YT presentation isn't great
* if one purpose of call is to keep community abreast
* then topic-oriented might be better
* 1. lead w/ agenda
* 2. dispense w/ the check-in
* 3. morning check-ins on matrix/irc
* Teri - super helpful to get feedback
* definitely still the place for that
* tl;dr: leading topic + bring yer demos and topics
* next week - npm integrated into desktop ipfs
* "alex is deep in dag protobuf sharding"
* cwaring - create more cadence for workshop zone
* topics and messy stuff
* combined w/ daily standup
* long term, have support channel on website -> discussion on the call
* maybe this call or community call, but channel
* guest speakers
* both in IPFS and out
* bring ppl into community
* Where to take notes? Gdocs?
* who is the call for?
* it's for us
* "please give me your opinion"
* and community to understand where our heads are at
* switched to google for stable url
* was extremely confusing to have different docs for different meetings
* stable url is extremely important
* all the pads + markdown sound like weird scary stuff
* not comfortable or welcoming for non-technical
* "stranger off the street"
* like to be able to refer back to previous week of notes
* without having to go to a folder on github
* friendly to someone not on the call before
* whole chunk of planet can't accss gdocs
* PSA: Marcin
* Go-core weekly, finalized decision to switch base rep of CID v1 to base32
* just changing default *representation*, not the default
* finally have one canonical representation across all clis, uis, webuis everywhere
* will land in 1-2 weeks
* DEMO: Oli and Alan ipfs file add path
* "it turns into chunks chunks chunks"
* visualizing the chunks of the dag
* dags are pretty in pink
* trickle dag tree
* optimized for seeking into video files
* who to visualize lifecycle of data
* eg announce, pin, delete
* CHRIS: standup text, where it go?
* will bubble up?
* should continue to put weekly notes in call doc
* for link crawling
* so plz continue as previously priorly done
* MARCIN: if ppl only watching
* ipfs weekly call!
* contributor office hours!
* arrival was late, but super useful
* Marcin wrote up notes on the questions asked
* join next week!
* is on community calendar!
* Title? contributor or anyone?
* deluge of people might not be great
* Chris is there a general one?
* is it onboarding or contributing?
* maybe we need a more general office hours
* Gatsby bookable pair programming
* so far nice to understand what people
* would be nice to understand the pipeline
* eg if not a bug, just mental model mismatch
* no next step
* discovery issue or something broken
* Gatsby is good benchmark for contributer engagement
* Community team thought about focus - users vs contributors
* wherever it happens
* currently is effort to support irc
* disqus is not great interface
* everyone spend a few mins answering
* disqus hack: mailing list mode
* just getting first msg in new topic
* good for quick scanning
* stack overflow
* where are people asking questions
* has anyone done that?
* ipfs/ipfs/
* ipfs/community/
*
