# GUI and In Web Browsers 2019-09-04

A weekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790


## Participants

- @autonome
- @lidel
- @hacdias
- @hugomrdias
- @alanshaw
- @ericronne

## Recording

- [ipfs://bafybeigxei24uhaodjoex3bo4ekuycmi366cae6fqevkv6kt3f7v5lisqq](https://ipfs.io/ipfs/bafybeigxei24uhaodjoex3bo4ekuycmi366cae6fqevkv6kt3f7v5lisqq/)
- https://youtu.be/zI35MV9k2PE

## Agenda

- Progress on TCP transport and local DNS Discovery in Brave  
  https://github.com/ipfs-shipyard/ipfs-companion/issues/716
- Proposal: drop-in config to override things like content-type at HTTP Gateway  
  https://github.com/ipfs/in-web-browsers/issues/152
- How to debug issue with relative paths https://github.com/ipfs-shipyard/ipfs-deploy/issues/86
- Developer workflow issues? Where to file? Where to track? Docs + DevEx group? Here? Core?
  - _update:_ use `design-ux` label in `ipfs/docs` or fill an issue to add other repo to be tracked via this label
- In Web Browsers team meet on-site Sept 23-28
  - add browser related wishes/questions: https://github.com/ipfs/in-web-browsers/issues 

## Notes

* embedded node in brave
* tcp socket transport
* mdns
* can discover local subnet go node
* no dht yet
* using all cpu, so perf issue somewhere
* could use delegated routing until dht
* but that opens up more issues
* next step is figure out how to announce
* then impl dht
* alan: how are discovery and transport built?
* sep module? fork? can share link?
* same modules as used in node!
* magic! polyfill node apis in brave
* needed for hapi too
* polyfill net module
* unsure if can make it discoverable itself
* can connect to others, but not sure if others can connect
* not sure where addresses are added
* would like to reuse same codebase
* dietrich: write docs/post about technical architecture
* alan: could do polyfill to make look like libdweb?
* would work in same chrome browsers
* problem is libdweb approach wouldn't work
* have some plyfills but not others
* how browser handles is different also
* talked w/ brave about this
* future would be protocol handler
* polyfill to node is lot of work
* 3rd api - wraps libdweb and chrome.sockets?
* better to polyfill to libdweb, or use limited node polyfills
* `---`
* http content type from gateway
* how to let people specify or override content type
* right now, we mime sniff
* and use magical bytecodes to assert type
* relies on 3rd party lib
* and file extension - could change or be missing
* option: embed content type w/ the data?
* reqs changes at low level, and also DAG
* changes final CID
* problematic for exisitng files
* 2nd option: special dir or config file
* drop in, eg .htaccess .gitattributes
* then gateway would check for it
* and disable content sniffing
* who creates the file types?
* web site publisher?
* is there a tool that creates it?
* or scoped to gateway?
* that's reading, but how writes it?
* does ipfs create that file?
* it's an override - by default we still content sniff
* if someday unixfs has metadata, will use that
* should add headers to disable sniffing too on browser
* not something to be used all the time
* specific for gateways
* or shoudl we fix at protocol level
* proposed change in unixfsv2
* meta will always be there

## Async Updates

> Note: copy selected GUI/Browsers updates originally published in [IPFS Core Implementations Weekly Sync](https://github.com/ipfs/team-mgmt/issues/992)

Make sure to read [2019-09-02--core-implementations-weekly.md](https://github.com/ipfs/team-mgmt/blob/master/meeting-notes/2019/Q3/2019-09-02--core-implementations-weekly.md#week-update-for-async-review) too!

### @hacdias

- Done:
    - (ipfs-desktop) fixed startup error on macOS on the newest beta caused by trying to modify a file within the installation path of the application itself, which is, in itself, a silly idea. [PR.](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1079)
    - (ipfs-desktop & ipfs-webui) increased draggable area of the window so it's easier to move the window around on IPFS Desktop. [Web UI PR](https://github.com/ipfs-shipyard/ipfs-webui/pull/1138), [Desktop PR](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1071).
    - (ipfs-desktop) fixed issue when releasing through Travis. There was a breaking change on Electron Builder which wasn't released as a major version. [PR](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1069).
    - (ipfs-desktop) separated e2e from unit tests. [PR](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1070).
    - (ipfs-desktop) refactored remaining code that used `require`s into `import`s. [PR](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1072).
    - went through some IPFS Desktop and Awesome IPFS issues and PRs and reviewed them.
- Blocked:
    - (ipfs-desktop & ipfs-webui) add desktop-related analytics. [Desktop PR](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1068), [Web UI PR](https://github.com/ipfs-shipyard/ipfs-webui/pull/1136)
- Next:
    - Release Web UI 2.5.1... and Desktop 0.9.0...
    - Start a draft on Awesome IPFS Policy: https://github.com/ipfs/awesome-ipfs/issues/150

### @lidel

 - Done:
   - ipfs.io: [robots.txt discussion](https://github.com/ipfs/website/pull/330)
   - interface-js-ipfs-core: [fix: tests of addFromURL in browsers](https://github.com/ipfs/interface-js-ipfs-core/pull/514)
   - mwoffliner: [Add canonical link header](https://github.com/openzim/mwoffliner/pull/963) (for [ipfs/distributed-wikipedia-mirror](https://github.com/ipfs/distributed-wikipedia-mirror))
   - got working TCP transport with embedded js-ipfs in Brave ([sneak peek](https://ipfs.io/ipfs/QmQczWn9zcqCF1UueFvjRniSdUUv7LzU5ZUqS4FzvmHJrM))
 - Blocked:
   - libp2p/specs PR needs final review/merge: [RFC 0001: Text Peer Ids as CIDs](https://github.com/libp2p/specs/pull/209)
 - Next:
   - update PRs with open specs with received feedback
   - continue work on TCP transport and DNS discovery
