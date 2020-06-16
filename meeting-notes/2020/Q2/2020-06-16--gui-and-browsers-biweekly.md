 # GUI and In Web Browsers 2020-06-16

A biweekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790

## Participants

- @jessicaschilling 
- @lidel 
- @vasco-santos
- @gozala
- @hugomrdias
- @rafaelramalho 
- @autonome
- @achingbrain

## Recording

- https://youtu.be/7SjLw3EVo94 

## Agenda

- Nominate notetaker  :^)
  - thank you @jessicaschilling!
- PSAs (@lidel, ~5min) 
    - we are a WG again ¯\_(ツ)_/¯
        - More structure?
        - Updates to come
    - [Brave working on embedding go-ipfs](https://github.com/brave/brave-browser/issues/10220)
        - It must be official, it's in GitHub (see link above)
    - Latest version of IPFS Companion allows users to [opt-in for the latest ipfs-webui](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.13.1)
        - A toggle in the prefs screen
        - Enable only if you trust your DNS resolver and know how to set up the required CORS headers
- Next steps for pinning API integration (@lidel)
    - Add support for third-party services like Pinata, etc, including UI
    - We've identified the problem of state: right now webUI is a single-page application that you point at the remote API, that API represents a node
    - So apart from language choice and Countly metrics there's no state extant for listing a user's pinning services of choice, or all available pinning services that exist
    - That should go in go-ipfs somewhere, so go-ipfs itself can start leveraging that information (like if you pin from the cmd line, it could pin remotely as well, shiny!)
    - Working on a document of a sketch of API stuff we need from the UI side; watch this space
    - Rafael's working on the settings page mockup: no functionality to show yet, but progress
- Update on sharing IPFS node across browsing contexts (tabs) on same origin (@Gozala)
    - `ipfs.dag` API tests are passing (except some that were disabled that deal with argument normalization)
    - `ipfs.add` API test are passing, except few that depend on `ipfs.object` API (for testing) and ones that depend on `ipfs.files`.
    - Bunch of libraries had being changed to support `Uint8Array` in place of (`Buffer`) which this depends on, but they are slowly propagating through the dependency tree.
    - Having issues with CI 
    - Feeling like fighting the browser environment rather than playing with it
    - Links to notes?
        - https://github.com/multiformats/js-cid/issues/111
        - https://github.com/multiformats/js-cid/issues/109#issuecomment-641640712
        - https://github.com/ipfs/js-ipfs/pull/3081
- [Ranger's Dweb browser project](https://twitter.com/RangerMauve/status/1272718919007178754)
    - New "toy" browser he's working on, goal is to add "all of the protocols"
    - Let's keep an eye out for issues from him
- Secure Data Storage WG (W3C+DIF)
    - Were calling this effort "encrypted data vaults", now Secure Data Storage
    - Meeting weekly ([last week notes](https://hackmd.io/AbCwz9kPT4iythz0dmtCoA?both))
    - [Spec](https://identity.foundation/secure-data-store/)
    - Mainly language, application stack, layer norms at this point ... note that intent is to be content addressable (is IPFS the normative default layer for that?)
    - [IPFS showing up more](https://github.com/decentralized-identity/secure-data-store/issues/74), initially was very HTTP-centric but MS, JohnnyCrunch and others consistently ask "how would this work with IPFS" so the group is orienting around network protocol agnostic approach due to it.
    - would love to have more presence/participation

## Highlights

> This section includes releases and selected announcements.

- ipfs-companion [v2.13.0](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.13.0) & [v2.13.1](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.13.1) (Stable)
- Results for IPFS GUI usage + Companion uninstall are collated/graphed and verbatim responses aggregated/graphed [here](https://docs.google.com/document/d/1V5sDSxMqhhplpcB8u8CffiGWHUvw-t4p_sn5vigdR90/edit?usp=sharing), with summary/recommendations to come in the same document in the next day or two
    - TLDR: better beginner-friendly material, better support for pinning, better support for clusters (mainly the use case of an individual with a handful of machines in their home, or a home/work split)
- [Important acessibility fixes for ipfs-webui :rocket:](https://github.com/ipfs-shipyard/ipfs-webui/pull/1512) Reported by VA user.
    - No visible changes for non-screen-reader users
- Can now opt-in to bleeding-edge webui by changing its toggle in the prefs
