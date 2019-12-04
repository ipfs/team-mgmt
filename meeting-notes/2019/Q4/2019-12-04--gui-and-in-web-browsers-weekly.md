# GUI and In Web Browsers 2019-12-04

A weekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790


## Participants

- @lidel
- @autonome
- @jimpick
- @hacdias
- @ericronne

## Recording

- [ipfs://bafybeifoktvuvxw7lfp5r5vu3qd6gvytbung6zwwyufh7xdxcpsskddlk4](https://ipfs.io/ipfs/bafybeifoktvuvxw7lfp5r5vu3qd6gvytbung6zwwyufh7xdxcpsskddlk4/)
- https://youtu.be/WCxOFf4aMIc 

## Agenda

- Demo: import files to MFS by default
    - released initial version in [v2.9.0.867](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.9.0.867)
        - no pinning, importing files to MFS instead
        - opening webui by default
    - feedback needed!
        - msg @lidel on irc or [fill issue](https://github.com/ipfs-shipyard/ipfs-companion/issues/new)
        -  [how to improve sharing flow from IPFS Companion](https://github.com/ipfs-shipyard/ipfs-webui/issues/1349)
- Hac, what is your news for us?
    - moving to [ipfs/testground project](https://github.com/ipfs/testground#testground)! 🎉😭
- E2E test status ([ipfs-webui/issues/1164](https://github.com/ipfs-shipyard/ipfs-webui/issues/1164))
    - wip with Cypres
    - need addtl orchestration
    - so experimenting w/ puppeteer + ctl
    - should be easier w/ Cypres for maintenance
    - need to finish to know for sure
    - one smoketest per screen
- Native protocol test page
    - https://github.com/ipfs/in-web-browsers/pull/154
    - testing dweb browsers that implement native protocol support
    - mixed content (http links in ipfs pages, vice versa)
- IETF meetings
- FOSDEM + work week?
- Testground Connectivity Test Plan: https://github.com/ipfs/testground/issues/96

## Highlights

> Details of past week's work are published in notes of [IPFS Core Implementations Weekly Sync](https://github.com/ipfs/team-mgmt/issues/992)   
> This section includes a subset of past week's work 

- Released
    - ipfs-companion [v2.9.0.867](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.9.0.867)
    - ipfs-webui [v2.7.2](https://github.com/ipfs-shipyard/ipfs-webui/releases/tag/v2.7.2)
