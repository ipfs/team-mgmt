 # GUI and In Web Browsers 2020-05-19

A biweekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790

## Participants
- @dietrich
- @andrew
- @lidel 
- @gozala 
- @vasco-santos
- @rafaelramalho 
- @jessicaschilling

## Recording

- [ipfs://bafybeif4tkizpkuqphif2z7ii3dxm24zicau2jh7lz7pydas54lszbnes4](https://dweb.link/ipfs/bafybeif4tkizpkuqphif2z7ii3dxm24zicau2jh7lz7pydas54lszbnes4)
- https://youtu.be/Ww1f62x-yx8 

## Agenda

- Shipped: Countly metrics dashboard for IPFS Desktop and Web UI - ask Jessica if you aren't on the email distro (sends every Wednesday)
- Shipped: Tweaks to the [install section of the IPFS website](https://ipfs.io/#install) to better differentiate what folks should download for their own needs
- PSA: design meeting on [subdomain support for CIDs longer than 63](https://github.com/ipfs/go-ipfs/issues/7318)
  - this Thursday at 4PM UTC – ping @lidel if you want to join
- PSA: bunch of dweb URI schemes approved by IANA:
    - https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml
    - wip: adding new safelisted schemes for registerProtocolHandler(): https://github.com/mozilla/standards-positions/issues/339
- Almost shipped: PeerStore initial Endeavour is completelly done and merged in `js-libp2p` 0.28 branch @vasco-santos
    - [libp2p/js-libp2p#582](https://github.com/libp2p/js-libp2p/issues/582) 
    - [libp2p/js-libp2p/tree/0.28.x/src/peer-store](https://github.com/libp2p/js-libp2p/tree/0.28.x/src/peer-store)
    - AddressBook, KeyBook, ProtoBook and (as a bonus) MetadataBook, including data persistence for all of them
- PSA: libp2p-rendezvous work will start @vasco-santos
    - context:
        - https://github.com/libp2p/specs/blob/master/rendezvous/README.md
        - https://github.com/libp2p/specs/blob/master/relay/README.md 
    - [libp2p/js-libp2p-rendezvous](https://github.com/libp2p/js-libp2p-rendezvous)
    - Sunset star servers [libp2p/js-libp2p#385](https://github.com/libp2p/js-libp2p/issues/385)
- Shipped [ipfs-desktop v0.11.3](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.11.3) with go-ipfs 0.5.1
- WebUI: File upload feedback is almost finished https://github.com/ipfs-shipyard/ipfs-webui/pull/1495
- Ipfs-desktop update issues. Will look deeper into this @rafaelramalho.
- Shipped in next release: Companion prefs are responsive and open in their own tab
    - May also be able to get improved welcome page in there, depending on docs migration date and release date
- (@gozala) Looked into large file upload related problem in browsers. Web platform is capable of streaming uploading, js-ipfs can be adjusted to make use of that https://github.com/ipfs/js-ipfs/issues/3029
    - Might be good idea to explain when totaly size < file
- (@gozala) Proposed changes for node sharing across browsing contexts https://hackmd.io/QYzm5P3bRQ6f85MJ4qsGWg
    - Posted to discussion group
    - Community will be asked for feedback in weekly newsletter.
    - Will be meeting 3box & Textile to get feedback
- (@gozala) Made preliminary analysis of JS-IPFS config options. If we share nodes we'll need to share config so I'd like to make a case that js-ipfs in browser should just come with best config possible for environment
    - https://github.com/ipfs/js-ipfs/issues/3042
    - Need feedback.
    - Will be checking-in with users.
- @andrew
    - webui analytics
        - record go-ipfs/js-ipfs version?
        - large amounts of IPFS_INIT_FAILED errors reported
        - Add event in Web UI for`ADD_VIA_DESKTOP`
        - Add events in both Desktop and Web UI for pinning activities
- (side-discussion) on decoupling webui from desktop, opening in the browser instead of electron
  (https://github.com/ipfs-shipyard/ipfs-webui/issues/938)
    - we want to use arbitrary webui version blessed by desktop, but dont want toopen any security holes
    - Q: how to remove the friction of setting CORS?
        - should desktop pass api multiaddr to webui in URL? 
        - would it be enough if desktop added CORS rule for subdomain URL whitelisting specific CID + restarted the deamon to apply config changes? 
    - Q: opt-in rolling releases.. should we whitelist `webui.ipfs.io.ipns.localhost:port` ? (https://github.com/ipfs-shipyard/ipfs-webui/issues/1032)

## Highlights

> Details of past week's work are published in notes of [IPFS Core Implementations Weekly Sync](https://github.com/ipfs/team-mgmt/issues/992). This section includes a subset  work, such as releases and announcements.

- [ipfs-desktop v0.11.3](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.11.3) (with go-ipfs 0.5.1)
- [ipfs-companion v2.11.0.918](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.11.0.918)
