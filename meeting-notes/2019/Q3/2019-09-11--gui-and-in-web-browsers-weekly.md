# GUI and In Web Browsers 2019-09-11

A weekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790


## Participants

- @terichadbourne
- @lidel
- @autonome

## Recording

- [ipfs://bafybeib26xf6nqf5vrlyl6h6baxrtbqg7lp6etniubezaegmpa4oeumj3a](https://ipfs.io/ipfs/bafybeib26xf6nqf5vrlyl6h6baxrtbqg7lp6etniubezaegmpa4oeumj3a)
- https://youtu.be/eybOnaWpuRA

## Agenda

- @lidel: Revisiting [Distributed Wikipedia](https://github.com/ipfs/distributed-wikipedia-mirror)
- Q4 OKRs
    - testing matrix
    - cohosting
    - wikipedia
    - ?

## Notes

- wikipedia
    - mostly unowned from a few years ago
    - archive is out of date, 2017
    - how to generate snapshots
    - uses zim format
    - public snapshots from kiwix
    - added a thin layer when unpack zim
    - put on ipfs
    - with small change to fix links, etc
    - add a footer
    - have a config file for the snapshots we mirror
    - first need is to update snapshots
    - is semi-manual
    - issues for updating english, turkish
    - takes some time
    - update templates, test process
    - update scripts that modify page content
    - main one is to ensure canonical link
    - so we don't pollute search results
    - do english manually
    - then figure out how to automate
    - 1. detect new snapshots
    - 2. automatically build and pin
    - 3. open PR for review
    - 4. we merge, update dns link
    - ORRRR use zim files directly
    - kiwix already has js client
    - worth looking at
    - if can create snapshot and put on ipfs
    - then use js reader on ipfs
    - and even use offline
    - ipfs capable zim reader
    - then only need web browser
    - fetch specific parts of zim file
    - cache ranges of zim file
    - how can we support bigger initiative
    - can we give them grant, or work together
    - they're already hosting on http and bittorrent
    - we just need to add to ipfs then
    - add next to bittorrent
    - static js reader
    - sholuld we make this okr?
    - good test of ipfs
    - lidel uses this as testcase
    - if wikipedia works, most stuff works
- okrs
    - brave q3 okrs should land in time
    - what are next steps?
    - most painful in js-ipfs is lack of dht
    - but that's libp2p land
    - peer and content discovery
    - sunsetting websocket-star
    - what if we dedicated quarter to that?
    - what other ways we can do this in browsers?
    - make a new libp2p discover module?
    - prior things like web-rtc
    - web-bluetooth?
    - audio?!
    - dns?
    - is that the biggest thing?
    - people want to add/get
    - common roadblocks are gateway, or websocket-only
    - 
- ...

## Async Updates

> Note: selected GUI/Browsers updates originally published in [IPFS Core Implementations Weekly Sync](https://github.com/ipfs/team-mgmt/issues/992)


@lidel
- Done:
  - ipfs/js-ipfs: [fix: limit concurrent HTTP requests in browser](https://github.com/ipfs/js-ipfs/pull/2304) 
  - Embedded js-ipfs in Brave: 
    - fixed build under regular Chrome and Firefox: [chrome-dgram/pull/16](https://github.com/feross/chrome-dgram/pull/16)
    - wip: [TCP client in Brave](https://github.com/ipfs-shipyard/ipfs-companion/pull/754)
      - got working TCP transport (as a client) 
      - got working DNS discovery and confirmed interop with go-ipfs (as a client)
  - Discussion on [Content Type set by HTTP Gateway](https://github.com/ipfs/in-web-browsers/issues/152)
  - onboarding myself to ipfs/distributed-wikipedia-mirror project, [issue grooming](https://github.com/ipfs/distributed-wikipedia-mirror/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) + plan to update snapshots ([researching automation](https://github.com/ipfs/distributed-wikipedia-mirror/issues/58) +  [prioritizing English one](https://github.com/ipfs/distributed-wikipedia-mirror/issues/61))
- Blocked:
  - https://github.com/libp2p/specs/pull/209
- Next:
  - Review, merge PRs, release new ipfs-companion to beta
  - Understand DHT situation and impact on preload/delegate node infrastructure
  - release [TCP client in Brave](https://github.com/ipfs-shipyard/ipfs-companion/pull/754) to Beta
      - announce own multiaddr + accept incoming TCP connections in Brave
      - adress known issues
  - distributed-wikipedia-mirror: take a stab at [snapshot creation process](https://github.com/ipfs/distributed-wikipedia-mirror/issues/61)   using a small subset of pages (eg. https://ftp.fau.de/kiwix/wp1/enwiki_2019-08/projects/Cats)
