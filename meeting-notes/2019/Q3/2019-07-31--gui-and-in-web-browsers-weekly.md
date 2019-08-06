GUI and In Web Browsers 2019-07-31
===

A weekly discussion and show & tell around IPFS _GUIs_ and _Web Browsers_

Details: https://github.com/ipfs/team-mgmt/issues/790  
Recording: [https://www.youtube.com/watch?v=WsHKNr9X9eg](https://www.youtube.com/watch?v=WsHKNr9X9eg) || [`/ipfs/bafybeibv7qadap3x3iujtf433bhxavwnhm7usbr4srnkfyfifdihdhf73m`](https://ipfs.io/ipfs/bafybeibv7qadap3x3iujtf433bhxavwnhm7usbr4srnkfyfifdihdhf73m)

## Participants

- @lidel
- @terichadbourne
- @justmaier
- @autonome
- @ericronne
- @cwaring
- @hugomrdias

## Agenda

- `foo://{fqdn-with-dnslink}` as the URL for "ipfs websites" 
   (details/discussion: [ipfs/in-web-browsers/pull/150](https://github.com/ipfs/in-web-browsers/pull/150))
- UI indicators for "connected", "connecting" and "off" states ([ipfs-desktop/issues/956](https://github.com/ipfs-shipyard/ipfs-desktop/issues/956)
- Test matrix for webui, desktop, companion. How can we understand what's tested, what's not, what should be, and against which versions: https://hackmd.io/8N-UeohiTFGO9pLhs62J-g?both
- WebUI - Peers page performance when large number of peers [ipfs-shipyard/ipfs-webui/issues/1072](https://github.com/ipfs-shipyard/ipfs-webui/issues/1072)
    - State: Updating every time an IP is resolve
    - Map: Rendering 1 dot per location
    - Map/Table: Rendering every time state changes
    - Using RxJS/Transducing?
- Docs Task Force: [goal-based quiz](https://github.com/ipfs/docs/issues/205)
- @hugomrdias demo [connect-deps](https://github.com/hugomrdias/connect-deps)
- {add topic}


## Notes

ipfs://name

* default url in location bar when opening ipfs website
* there's a PR! long discussion!
* should ipfs+domain name be canonical represenation?
* or redirect?
* which way to redirect?
* breaks mental model of assumed mental model
* of immutability
* people might think it's mutable, but it's no longer
* ipns also has problems
* can have it be a mutable pointer
* to keys, any content path, etc
* "understanding in the community"
* dnslink on ipfs:// and for now redirects to ipns
* FOR NOW
* solves short term need
* can always change how the redirect behaves
* once companion supports it, will just work
* only 3rd party doing ipfs:// now are ENS
* used in content hash spec
* https://eips.ethereum.org/EIPS/eip-1577
* need to talk about who is impacted by the change in specifics
* ens pointing at ipfs, text rep is ipfs://
* they also support ipns
* how to present to users, over long term
* human readable names that are dns backed
* ACTION: dietrich will see if there's any ux research published around schemes
* chrome hides the protocol
* so should we care at all

UI indicators

* using ipfs favicon eveywhere
* blue cube = connected
* gray one  = not conneted
* browsers switching to monchromatic
* need new way
* have some mocks
* protruding circles
* animatable
* these icons appear all over the place!
* err on the side of simplicity
* try and follow OS design guidelines
* appl is b&w
* firefox also goes b&w: https://design.firefox.com/icons/viewer/#
* color as supporting communicator, not sole
* boxes need space
* add a hairline box so it doesn't poof
* ipfs companion - node takes a while to spin up
* so is nice for animatable option

test matrix

* https://hackmd.io/8N-UeohiTFGO9pLhs62J-g?view

peer count ui

* gets slow at 100
* rerenders are costly
* a few choices
* only rerender unkown
* but can't sort by it
* or use rxjs or reducer/transducer
* debounce for not rerendering
* what's the trend for handling this in webui
* nothing doing it now
* what's refresh rate now?
* unknown, but probably too often
* at start, but slows as peer discvoery rate reduces
* after it comes down, what is rate?
* issue is per peer re-render at beginning
* sometimes we throttle via queuing
* is in place now for locations
* but the render phase is the problem
* try debouncing
* eric will bring snacks and shout nice things 😊


e-ron: Docs Task Force: goal-based quiz
* why i am visiting
* what do i want to get
* we get a better idea of what people want
* channeling those people to relevant content we have
* whether in docs, protoschool, elsewhere
* where do all these links go
* click to disparate places
* with no visual uniformity
* eg Media only exists on top nav of blog
* currently have [try it][watch demo]
* (my connection died)
* accordions
* lion's share
* way to lead people to where they want to go but cannot find
* metrics to measure whether it's working or not
* prioritze dev use case
* dist.ipfs.io
* Chief Cognitive Load
* how to make it not beginners so much as handy utility for everyone
* coming asap, next month or so

@hugomrdias demo connect-deps
* local pulls aren't same module set as CI
* causes all kinds of problems
* does npm pack, gets zip,installs directly into local dir
* same as npm install w/ new dep
* gives correct dep tree
* reset and get clean repo
* 

## Async Updates

_Post async updates here, as long related to GUI or Web Browsers_

### @lidel

Done:
- feat(brave): delegated peers and content routing  ([ipfs-companion/pull/739](https://github.com/ipfs-shipyard/ipfs-companion/pull/739)
  - backport fixes for older js-ipfs/js-libp2p:
      - [js-libp2p-delegated-content-routing/pull/17](https://github.com/libp2p/js-libp2p-delegated-content-routing/pull/17)
      - [js-libp2p-delegated-peer-routing/pull/13](https://github.com/libp2p/js-libp2p-delegated-peer-routing/pull/13)
Next:
- finish [http request optimizations in js-ipfs](https://github.com/ipfs/js-ipfs/pull/2304)
