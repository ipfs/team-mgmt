 # GUI and In Web Browsers 2020-04-01

A weekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790

# 2020-04-01

## Participants

- @autonome
- @jacobheun
- @vasco-santos
- @lidel
- @andrew
- @chafey
- @jessicaschilling 
- @hugomrdias 

## Recording

- https://ipfs.io/ipfs/bafybeif32c2xsyysbn5trysuhvtydexdijxilcdlmmjbhju6fn5uycliku
- https://youtu.be/b3Wx5VScWss 

## Agenda

- https://ethereum.eth.link || ipns://ethereum.eth
    - official Ethereum website is now hosted on IPFS + ENS 
- subdomains in ipfs-companion update
    - fighting some subresource quirks
    - gist: we want companion to detect IPFS resource (eg. image linked from a public gateway) on regular websites and redirect them to local gateway without breaking page load and without producing mixed-content warning
    - new ipfs-companion beta should land this week
- [Opera launched!](https://blog.ipfs.io/2020-03-30-ipfs-in-opera-for-android/)
    - > For the first time, a major web browser does not ask the user to specify which server the content should be fetched from. 
      > – https://twitter.com/dietrich/status/1244655656604512256
- Hugo's browser datastore changes https://github.com/ipfs/js-datastore-idb
    - goal is to replace the leveldb one and enable users to opt-in into persistent storage on the web
    - 37.32KB to 11.41KB
    - batch idb x 2.93 ops/sec ±6.89% (19 runs sampled)
    - batch level x 2.59 ops/sec ±7.02% (17 runs sampled)
    - Fastest is batch idb
    - next: tests, update js-ipfs
- protocol handler API grant update 
    - discussion started on the PR: https://github.com/ipfs/devgrants/pull/30
    - the grant may include solving smaller issues as initial Milestones, such as solving https://bugs.chromium.org/p/chromium/issues/detail?id=883274
- [libp2p Pubsub based peer discovery](https://github.com/libp2p/js-libp2p-pubsub-peer-discovery)
    - exciting development for IPFS on web pages, provides mdns-like mechanism for "local" discovery
    - right now everyone announces on the same namespace (when compared to mdns: puts everyone in a single "LAN")
    - next:
        - add support for namespacing so "locality" could be customized and mean same Origin, a group of websites etc
- Q2 OKRs for browser & connectivity - please add impact to descriptions
- Microgrant/bounty about metamask plugin for IPFS?
    - @lidel opened discussion in https://github.com/ipfs/devgrants/issues/35
- https://github.com/alanshaw/ipfs-browser-sandbox
    - Sandbox for demos, experimentation and fun times
    - Way to play with how IPFS/IPLD resources could be represented in web browser components
