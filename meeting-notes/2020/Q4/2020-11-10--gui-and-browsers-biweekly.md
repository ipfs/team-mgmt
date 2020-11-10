# IPFS GUI and Browsers 2020-11-10

A biweekly(-ish) discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790


## Participants

- @jessicaschilling
- @lidel
- @rafaelramalho19

## Recording

- https://youtu.be/cPo-bo2hbT0

## Notes

- Release train 🚂🚋🚋🚋🚋 
    - 🚋 ipfs-desktop [v0.13.2](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.13.2) with go-ipfs 0.7 and fixed Windows autoupdates
      - demo: native integration for quick import (Windows & macOS)
    - 🚋 ipfs-companion [v2.15.0](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.15.0) and betas: [v2.15.0.972](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.15.0.972), [v2.15.0.977](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.15.0.977)
    - 🚋 ipfs-geoip [v6.0.0](https://github.com/ipfs-shipyard/ipfs-geoip/releases/tag/v6.0.0) with [updated dataset (2020-10-13)](https://github.com/ipfs-shipyard/ipfs-geoip/pull/80)
- Pinning Services
    - API spec: [v0.1.2](https://github.com/ipfs/pinning-services-api-spec/releases/tag/v0.1.2)
    - wip: [client in go-ipfs](https://github.com/ipfs/go-ipfs/pull/7661) and [js-ipfs-http-client](https://github.com/ipfs/js-ipfs/pull/3293)
    - ipfs-webui: integration stage 1 landing this week
- Web Platform: localhost improvements
    - high level status update: https://github.com/ipfs/in-web-browsers/issues/109#issuecomment-717248720
    - hardcoding localhost names to the loopback address (Mozilla) is fixed in Firefox 84: 
      https://bugzilla.mozilla.org/show_bug.cgi?id=1220810,
      https://bugzilla.mozilla.org/show_bug.cgi?id=1673315,
      https://bugzilla.mozilla.org/show_bug.cgi?id=1673364,
      https://bugzilla.mozilla.org/show_bug.cgi?id=1346835,
      https://bugzilla.mozilla.org/show_bug.cgi?id=1488740
- Mid-Q4 OKR check-in
