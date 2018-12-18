# GUI & In Web Browsers Weekly Sync 2018-11-14

- **Lead:** @olizilla
- **Notetaker:** @lidel
- **Attendees:**
    - @hacdias
    - @alanshaw
    - @lidel
    - @terichadbourne
    - @olizilla
    - @fsdiogo

## Goals

- [Web Browsers WG](https://github.com/ipfs/in-web-browsers)
    - Browser developers are addressing requirements of the distributed web
    - Ensure smooth experience for web developers in browser contexts
    - Browser extension exposes IPFS features in a robust and intuitive form
- [GUI WG](https://github.com/ipfs/ipfs-gui)
    - Core IPFS features are intuitive and accessible to all
    - Everyone is empowered to make great new IPFS user interfaces
    - The GUIs push forward understanding and adoption of IPFS

## Agenda

### Before the Sync

- Write down your updates
    - What have you accomplished since the last Weekly?
    - Were there any blockers? If so, which ones? Is it still blocked? Why?
    - What is the next important thing you should focus on?
- Read updates of others
    - Any there any questions, requests to communicate?


### Regular

- Ask everyone to put their name into the list of attendees
- Go over everyone's updates and ask if there are any questions or things to discuss
- Everyone can demo something!
- Ask for general questions. Could be things like:
  - I'm stuck with something, I don't know who to ask. Who knows who to ask?
  - Who can help me with xyz?

### Added Agenda Items

- Make a final call on meeting notes move – [in-web-browsers/issues/130](https://github.com/ipfs/in-web-browsers/issues/130)
- Everyone with OKR: please do Q4 mid-point scoring - details in [ipfs/team-mgmt/issues/755](https://github.com/ipfs/team-mgmt/issues/755)
- FUN FACT FROM ALAN - base64 encoded CIDs are not URL or path compatible
- How about an ipfs-apps team https://github.com/ipfs/team-mgmt/issues/752

## Notes

### Team Updates

- @lidel
    -  Done:
        - Shipped [ipfs-companion v2.6.0](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.6.0)
        - [Web Browsers WG Roadmap v1 Draft for 2019](https://docs.google.com/document/d/1-_8W2AKsgmKuBewS4cy2pX_XOfrmFQIWiOscg9w4QU8/#heading=h.3o5e0g37o69l)
        - Bugfix release for Chrome ([ipfs-companion/pull/616](https://github.com/ipfs-shipyard/ipfs-companion/pull/616))
        - Created first iteration of In Web Browsers Roadmap for 2019 ([8 min screencast](https://ipfs.io/ipfs/QmfT8HFvJrPaF8RMDJjtXyyYV4vU7mfqBKxnuunP1G3Zjj/ipfs-in-web-browsers-roadmap-2019-v1.webm))
        - Workplan for cleaning up and hardening HTTP headers (API+Gateway) - [in-web-browsers/issues/132](https://github.com/ipfs/in-web-browsers/issues/132)
        - QA for ipfs-desktop on Linux - [ipfs-desktop/pull/662](https://github.com/ipfs-shipyard/ipfs-desktop/pull/662#issuecomment-437514334)
        - Started PR with window.ipfs 2.0, so far just basic scaffolding - [ipfs-companion/pull/619](https://github.com/ipfs-shipyard/ipfs-companion/pull/619), 
    - Blocked:
        - WIP: Enable SXG Origin Trial on HTTP Gateway - [infrastructure/issues/453](https://github.com/ipfs/infrastructure/issues/453)
    - Next:
        - window.ipfs 2.0 (spec draft for "api provider" API, upgrade path)
        - Write SXG-on-IPFS blog post so people can try and play with it (if origin trial lands and works as expected)

- @alanshaw
    - Done:
        - [JS IPFS roadmapping](https://docs.google.com/document/d/1APWUM9_r2eB4EGyG0Mepys22xa4ubPUstXEQMq-226M)
        - Fixed over eager preloading issue [#1693](https://github.com/ipfs/js-ipfs/pull/1693)
        - IPLD `loadFormat` [#178](https://github.com/ipld/js-ipld/pull/178)
        - Released JS IPFS v0.33.1
    - Blocked:
    - Next:
        - Review & merge files API changes from @diasdavid [#1671](https://github.com/ipfs/js-ipfs/pull/1671)
        - Review & merge object API changes from @achingbrain [#1702](https://github.com/ipfs/js-ipfs/pull/1702)
        - Review & merge IPNS routing logic from @vasco-santos [#1701](https://github.com/ipfs/js-ipfs/pull/1701)
        - Complete work on `--cid-base` option (now rebased and TODOs identified)

- @fsdiogo
    - Done:
        - Shipped the language selector
            - https://github.com/ipfs-shipyard/ipfs-webui/pull/866
        - Squashed some bugs
            - https://github.com/ipfs-shipyard/ipfs-webui/pull/881
            - https://github.com/ipfs-shipyard/ipfs-webui/pull/877
        - Fixed storybook
            - https://github.com/ipfs-shipyard/ipfs-webui/pull/862
        - Fixed the ipfs-redux-bundle connection test
            - https://github.com/ipfs-shipyard/ipfs-redux-bundle/pull/18
            - https://github.com/ipfs/js-ipfs/pull/1703
        - Use an instance of js-ipfs as fallback instead of the public gateway
            - https://github.com/ipfs-shipyard/ipfs-share-files/issues/43
    - Next:
        - Share Files working without public gateway
            - https://github.com/ipfs-shipyard/ipfs-share-files/issues/43

- @hacdfias
  - Done:
    - Add desktop settings to WebUI's settings (https://github.com/ipfs-shipyard/ipfs-webui/pull/883)
    - (ALMOST DONE) Finish 'The PR'
  - Next:
    - Continue working on Desktop's new version

- @olizilla
    - Done: 
        - Web UI v2.2 - https://github.com/ipfs-shipyard/ipfs-webui/releases
        - GUI Roadmap - https://docs.google.com/document/d/1fzn9ZwVI95e2emw3fbpGFYPudEv0jooapLvwVVSDlAw/edit#heading=h.3o5e0g37o69l
        - js-ipfs-api PR for unverifiable peer swarms - https://github.com/ipfs/js-ipfs-api/issues/885
        - lab-day: https://github.com/protocol/website-lab-day/pull/1#issuecomment-438203232
    - Next: 
        - I'm going to https://www.designsystemslondon.com/
        - I'm getting IPFS Desktop v1 shipped.

### Discussion Highlights

- We will be experimenting with [Signed HTTP Exchanges and WebPackage](https://github.com/ipfs/in-web-browsers/issues/121) on our public gateway by [participating in Chrome's Origin Trial](https://github.com/ipfs/infrastructure/issues/453)
    - SXG will land in 2019 because Google wants solve AMP misattribution problem ASAP. We are looking into it from DWeb perspective, as IPFS is perfect distribution platform for immutable data and provides viable alternative to centralized CDNs. 
      - This effort got briefly mentioned during Chrome Dev Summit 2018 as "folks working on decentralized web at Protocol Labs" ([~24:35](https://github.com/ipfs/in-web-browsers/issues/121#issuecomment-438649387))
- Working towards Share App to work for users without ipfs-companion installed - [ipfs-share-files/issues/43](https://github.com/ipfs-shipyard/ipfs-share-files/issues/43)
    - How to safely enable js-ipfs fallback and remove load from public gateways?
    - Key issue are file size limits (we need to research what is the storage cap in browsers and solve UX around it)
- ipfs-desktop 1.0 revamp is will land in master this week - final touches: [ipfs-desktop/pull/662](https://github.com/ipfs-shipyard/ipfs-desktop/pull/662)
- Herding cats around API changes across the stack
    - Alan did a lot of PR reviews to ensure we don't have regresions in GUI/Browser, especially around CIDs
- https://proto.school revamp coming soon. 
    - Teri and Mikeal want to land it by the end of December
    - We should coordinate points of overlap (API changes, best practices etc)
- New Web UI [v2.2](https://github.com/ipfs-shipyard/ipfs-webui/releases/tag/v2.2.0) is mobile-friendly, supports manual language selector and solves Peer screen issue due to QUIC multiaddrs
- First draft of Roadmaps for 2019 landed (see link in Action Items)
- FUN FACT FROM ALAN:
    - not all multibase encodings are safe for use in paths and URIs! :-)
        - e.g. `mAXASIIpT3/gOX/CEwjyboSt5TcaYTaVeqplvOkZ8vEB9N6AK`
        - OH NOES `/ipfs/mAXASIIpT3/gOX/CEwjyboSt5TcaYTaVeqplvOkZ8vEB9N6AK`
    - CIDs encoded in multibase with "/" character (eg base64) break path-addressing 
    - Good example/illustration why [base32 is the "safe default"](https://github.com/ipfs/ipfs/issues/337)
- Should we consolidate GUIs and App Maintenance under a single ipfs-apps team? (see action item)

### Action Items

- @all: do Q4 mid-point scoring - details in [ipfs/team-mgmt/issues/755](https://github.com/ipfs/team-mgmt/issues/755)
    - [in-web-browsers 2018 Q4 OKRs](https://docs.google.com/spreadsheets/d/139lROP7-Ee4M4S7A_IO4iIgSgugYm7dct620LYnalII/edit#gid=755202447)
    - [ipfs-gui 2018 Q4 OKRs](https://docs.google.com/spreadsheets/d/139lROP7-Ee4M4S7A_IO4iIgSgugYm7dct620LYnalII/edit#gid=1841105909)
- @all: [review roadmaps of other WGs](https://docs.google.com/document/d/13_4_23Jrth7HBZ1QD6ezJaLRYCHN32xJLA5c0z3IOkc/#heading=h.pdhoow4qfg0i) and provide comments/suggestions
- @all: How about an ipfs-apps team? - comment @ [ipfs/team-mgmt/issues/752](https://github.com/ipfs/team-mgmt/issues/752)
- @lidel: Set up recurring zoom call + add it to calendar/meeting notes/issue
