 # IPFS GUI and Browsers 2020-08-11

A biweekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790


## Participants

- @jessicaschilling 
- @lidel 
- @rafaelramalho 
- @gozala

## Recording

- https://youtu.be/i_KaVD-7o4M 

## Notes

- pinning services api spec
  - https://ipfs.github.io/pinning-services-api-spec/
  - stable and ready for implementation, no changes planned apart from [disambiguating *.providers fields](https://github.com/ipfs/pinning-services-api-spec/issues/41#issuecomment-671846744)
- webui: new welcome/connectivity error pages
    - Do we include better detection and refresh on loss of connection in [PR #1577](https://github.com/ipfs-shipyard/ipfs-webui/pull/1577)?
        - Would be good to have in v2.11 but not totally critical
    - Welcome screen: change to "Welcome to the future of the internet! You are now a valuable part of the distributed web."
- Upcoming in webui v2.11 https://github.com/ipfs-shipyard/ipfs-webui/milestone/2
  - new JS API
  - welcome/connectivity pages revamp
  - ipfs.add perf improvements
  - bunch of bugfixes related to accessing non-localhost API/gateway
- I next two weeks: releases of webui, desktop, companion

## Highlights

> This section includes releases and selected announcements.

- is-ipfs [v2.0.0](https://github.com/ipfs-shipyard/is-ipfs/releases/tag/v2.0.0) no longer depends on Node's Buffer
- deprecations!
    - ipfs-redux-bundle → [ipfs-provider](https://www.npmjs.com/package/ipfs-provider)
    - NPM: go-ipfs-dep → [go-ipfs](https://www.npmjs.com/package/go-ipfs)
