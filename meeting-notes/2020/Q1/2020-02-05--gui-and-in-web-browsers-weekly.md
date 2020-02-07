# 2020-02-05

## Participants

- @lidel
- @autonome
- @vasco-santos
- @jacobheun
- @andrew

## Recording

- https://ipfs.io/ipfs/bafybeifhtwecjyazfkzcsodyl6ice34kcaxoquysgqtxvwd72ajlgindeq
- https://youtu.be/_PcOWp-l7QM 

## Agenda

- ipfs-desktop
    - [v0.10.3](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.10.3) shipped 🚢
    - whats next?
        - v0.10.4 needs to [notarize installer to remove warning on macOS Catalina](https://github.com/ipfs-shipyard/ipfs-desktop/issues/1211)
        - ipfs-webui: [regression related to folder uploads](https://github.com/ipfs-shipyard/ipfs-desktop/issues/1287#issuecomment-580368657)
        - E2E tests, are they in CI yet, and include Electron or not? 
          - they are in webui/go-ipfs, however puppeteer has no API for folder uploads, so we can catch regressions for single files only
          - e2e in ipfs-desktop is separate thing, it is testing Desktop UI (confirming window is visible after clicking menu item etc)
        - Who is doing this work? (-dietrich)
          - ad-hoc until we have dedicated person responsible for Electron dev
- Registering URI & URN
    - summary and discussion at https://github.com/jonnycrunch/ipfs-uri-scheme/issues/1
- Review of [Q1 OKR drafts for Browsers & Connectivity](https://docs.google.com/spreadsheets/d/1vOSCIufWfU2CpG63rOTGVQ6tWNYcbnYvR2k_kN84jQU/edit?pli=1#gid=1562851442)
- SIG: Browsers and Connectivity - "Maximize the availability and connectivity of IPFS on the web"
- Igalia - project draft for protocol handler
    - we will probably use targeted [devgrants](https://github.com/ipfs/devgrants/) for this
    - AI: @lidel will sketch grant draft in spare time

## Highlights

> Details of past week's work are published in notes of [IPFS Core Implementations Weekly Sync](https://github.com/ipfs/team-mgmt/issues/992)   
> This section includes a subset of past week's work 

- Released
    - ipfs-desktop [v0.10.3](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.10.3)


