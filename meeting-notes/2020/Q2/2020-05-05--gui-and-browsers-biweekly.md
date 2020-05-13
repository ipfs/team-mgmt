 # GUI and In Web Browsers 2020-05-05

A biweekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790


## Participants

- @autonome
- @vasco-santos
- @jessicaschilling 
- @gozala 
- @hacdias
- @lidel 
- @rafaelramalho

## Recording

- https://ipfs.io/ipfs/bafybeiej73sh3gv6nt2r3llj7m2bbjjqkaqpvshdsasptqvwrcmjrmehy4
- https://youtu.be/V9t6W4hC27Q 

## Agenda

- Welcome Irakli! 
  - joining the team to look into problems around [IPFS node reuse and resource sharing on the web](https://github.com/ipfs/in-web-browsers/issues/158)
- User research proposal: Value of standalone Electron window for UI in Desktop ... or is the bigger value the desktop menu bar controls?
    - Start with forum discussion?
    - Anyone have ideas for other venues for surveying (maybe quick Google form to go out in the IPFS Weekly)?
    - Progressive question stance: start with why they use Desktop before getting into the "what if" seeding
    - Prompt for "what would you like in Desktop" open-ended question but keep it an afterthought - don't want to turn this into a features request discussion
    - If Weekly + forum + maybe docs beta test stable don't give us a diverse enough perspective, could prompt with a snackbar on first launch of an upcoming version of Desktop itself
    - Next steps: draft questionnaire, share with team
    - Note: if we decide to move to WebUI only, there will be some technical (specifically release) considerations to address
- Libp2p PeerStore persistence PR (AddressBook + ProtoBook) is merged
- Igalia documents signed, work officially kicking off
- Local discovery in Brave kicked off, [follow along](https://github.com/ipfs/devgrants/issues/21)
  - mdns in go-ipfs uses the old spec
  - js-ipfs implements both old spec and the new one from https://github.com/libp2p/specs/blob/master/discovery/mdns.md
  - we hope to submit a patch against Brave this week
- Unstoppable Domains PR for Companion, [PR here](https://github.com/ipfs-shipyard/ipfs-companion/pull/875)
- Desktop [migration/upgrade bug](https://github.com/ipfs-shipyard/ipfs-desktop/issues/1487) does not seem to be reproducible with release packages
- Directory index GUI upgrade (maybe)
    - first triage pass
    - pr up for responsive view
    - and refactor for removing dead css
    - Blocked on acceptance of accessible teal color shipped with most recent ipfs-css: see https://github.com/ipfs-shipyard/ipfs-webui/issues/1379#issuecomment-582457581
    - We have not been specifically directed to regress Desktop or WebUI to remove accessible teal, but dir-index-html PR rejected on aesthetic grounds
    - Note that if we must refactor Desktop/WebUI to use non-accessible teal, this means removing its use in anything typographic, which will take some time and substantially impact the look of Desktop/WebUI; accepting the less saturated teal (which has already shipped) is recommended
- Not browser, but mobile: https://github.com/gopikrishnanrmg/IPFS_Mobile_Test
- Alan's made some nice changes to browser sandbox: https://github.com/alanshaw/ipfs-browser-sandbox

## Highlights

> Details of past week's work are published in notes of [IPFS Core Implementations Weekly Sync](https://github.com/ipfs/team-mgmt/issues/992). This section includes a subset  work, such as releases and announcements.

- [is-ipfs v1.0.3](https://github.com/ipfs-shipyard/is-ipfs/releases/tag/v1.0.3) works without Node globals
- [ipfs-provider v1.0.0](https://github.com/ipfs-shipyard/ipfs-provider/releases/tag/v1.0.0) now has prebuilt browser bundles
- [ipfs-webui v2.8.0](https://github.com/ipfs-shipyard/ipfs-webui/releases/tag/v2.8.0) with Peers screen updates
