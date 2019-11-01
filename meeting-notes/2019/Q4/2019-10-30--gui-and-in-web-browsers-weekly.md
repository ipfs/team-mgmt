# GUI and In Web Browsers 2019-10-30

A weekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790

## Participants

- @dietrich
- @hacdias
- @lidel

## Recording

- [ipfs://bafybeiabommw3g6fhukaffuypvrpsrbbawrzduem4yvrt6da3cn4gtfidy](https://ipfs.io/ipfs/bafybeiabommw3g6fhukaffuypvrpsrbbawrzduem4yvrt6da3cn4gtfidy/)
- https://youtu.be/K59VBNvFG7k

## Notes

- @lidel: [Should Companion recover from missing local gateway?](https://github.com/ipfs-shipyard/ipfs-companion/issues/806)
  - (after short brainstorming) probably. privacy-wise, fallback to the public gateway at `ipfs.io` won't leak more than is broadcasted by a local IPFS node 
- @lidel: [in-depth review on Chrome Web Store](https://github.com/ipfs-shipyard/ipfs-companion/issues/808)
  - tl;dr In preparation for [Manifest v3](https://github.com/ipfs-shipyard/ipfs-companion/issues/666) Google artificially slows down publishing of extensions that request access to certain powerful APIs that we need for detection of IPFS resources on the web
- @hacdias: [release ipfs-cohost 2.0.0 or address any issues (which?) first?](https://github.com/ipfs-shipyard/ipfs-cohost/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc)
  - (after short brainstorming) decided to release 2.0 as-is, with js-ipfs as dependency, version without a bundled node will be 3.0
- @autonome: Browser vendor design guidelines
  - we will produce a document and set of mockups to make it easier for browser vendors to reason about how native IPFS could look like
  - ensures users have similar experience across vendors (similar iconography, concepts, names, concerns and controls)
- @autonome: Brave v1.0 plan
  - it may take up to 6 months for DHT in js-ipfs to be production ready
  - we want to align Brave annoucements with overall browser work
  - first step is gateway-based support
  - tweak scope of v1 to be gateway-based (asking for ipfs-desktop) + embedded js-ipfs as an explicit opt-in "experiment"
  - focus on performance and ux polish
  - sync with Brave on Friday
- @autonome: weekly team status
  - let's add a section with "highlights" worth broadcasting to other working groups
- @autonome: volkernotes for this meeting?
  - shipped: https://github.com/ipfs/team-mgmt/pull/1054
- @hacdias: Awesome IPFS Policy?
    - https://github.com/ipfs/awesome-ipfs/issues/150
    - We will work on this next week!
- @hacdias: What to do regarding [automatic upgrades of ipfs-desktop triggering RCE warnings](https://github.com/ipfs-shipyard/ipfs-desktop/issues/1189)
    - We created a [plan to address concerns](https://github.com/ipfs-shipyard/ipfs-desktop/issues/1189#issuecomment-548121442)


## Highlights

> Details of past week's work are published in notes of [IPFS Core Implementations Weekly Sync](https://github.com/ipfs/team-mgmt/issues/992)  
> This section includes a subset of past week's work 

- Released ipfs-companion [v2.8.6.847 (Beta)](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.6.847)
- Released ipfs-webui [v2.6.0](https://github.com/ipfs-shipyard/ipfs-webui/releases/tag/v2.6.0)

