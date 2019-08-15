
# GUI and In Web Browsers 2019-08-14

A weekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790
* Recording: [/ipfs/bafybeihroplzc5z52nq4cxxrz5ztjjtarmyd5sfihtagboslbsitaawuuq](https://ipfs.io/ipfs/bafybeihroplzc5z52nq4cxxrz5ztjjtarmyd5sfihtagboslbsitaawuuq/) || https://youtu.be/-IYtHTvpWZU

Participants:

- @olizilla
- @autonome
- @ericronne
- @cwaring
- @lidel
- @hacdias


## Agenda

- Update on [embedded JS-IPFS in Brave](https://github.com/ipfs-shipyard/ipfs-companion/issues/716)
    - Delegated Content & Peer Routing in [v2.8.4](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.4)
    - Related: any cons to [enabling preload on all MFS commands that accept IPFS paths?](https://github.com/ipfs/js-ipfs/issues/2335)
- Released [Desktop 0.9.0-beta.1](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.9.0-beta.1) aka rc.1
    - Please install and let me know if you find any bug that must be fixed. Will release 0.9.0 in the next few days.
- Changing language around some features (in ipfs-companion)
    -  ["redirects"](https://github.com/ipfs-shipyard/ipfs-companion/issues/741)
    -  ["pinning"](https://github.com/ipfs-shipyard/ipfs-companion/issues/742)
- Should go-ipfs and js-ipfs have webui check on release checklists instead of webui PRing against them?
- PSA: ongoing discussion on `/tls/http` vs `/https`: https://github.com/multiformats/multiaddr/issues/63#issuecomment-521535243
- Icons: ship 0.9.0 macOS with [new icons](https://github.com/ipfs-shipyard/ipfs-desktop/issues/956) and windows/linux old icons (?) **or** wait
- Do we have an issue tracking differences between js-ipfs and go-ipfs? (eg for server)
    

## Notes

- we added PR against GO/JS/Companion to release Checklist of webui
- would not hurt to move/add it to release checklists of GO/JS/Companion instead
- putting pause on new icons and co-hosting feature in ipfs-desktop 
- co-hosting needs a shared UI and language Companion and Desktop: https://github.com/ipfs-shipyard/ipfs-desktop/issues/1034
- discussion: js-ipfs as a viable alternative to go-ipfs? https://github.com/ipfs/js-ipfs/issues/1563
  - Let's understand who is using js-ipfs!  https://github.com/ipfs/js-ipfs/issues/2359

## Async Updates


### @lidel

- Done:
    - AFK: vacation and move to a new SSD
    - js-ipfs: [limit concurrent HTTP requests in browser](https://github.com/ipfs/js-ipfs/pull/2304)
        - Fixed electron tests and CI on https://github.com/ipfs/js-ipfs/pull/2304
    - [Confirmed ENSlinks (`.eth` names) will be supported in go-ipfs v0.5.0](https://github.com/ipfs/go-ipfs/pull/6448#issuecomment-521163961)
    - Reviewed spec draft for [IPNS-over-PubSub as an Independent Transport](https://github.com/ipfs/specs/pull/218)
    - Debugging [webui issues with DAGs that are not unixfs](https://github.com/ipfs-shipyard/ipfs-webui/issues/1095)
    - Released ipfs-companion [v2.8.3.810](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.3.810) and  [v2.8.4](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.8.4) (with delegated routing enabled for embedded js-ipfs in Brave)
- Next:
    - Land [js-ipfs/pull/2304](https://github.com/ipfs/js-ipfs/pull/2304)
    - `.eth` support in js-ipfs
    - Figure out if preload of CIDs requested via embedded js-ipfs in Brave (https://github.com/ipfs/js-ipfs/issues/2335)

### @hacdias

- Done:
    - IPFS Desktop
        - [fix: only quit after stopping daemon.](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1022)
        - [feat(dogfood): co-host websites](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1023)
        - [fix: do not open Web UI when clicking dock icon and Web UI isn't opened](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1024)
        - [feat: cmr+r to restart ipfs](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1025)
        - [feat: go-ipfs 0.4.22](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1031)
        - [chore: add snapcraft (Travis update broke the build)](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1032)
        - [Released 0.9.0-beta.1](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.9.0-beta.1) aka rc.1
            - Please install and let me know if you find any bug that must be fixed. Will release 0.9.0 in the next few days.
    - IPFS Web UI
        - Update Dependencies ([#1090](https://github.com/ipfs-shipyard/ipfs-webui/pull/1090), [#1091](https://github.com/ipfs-shipyard/ipfs-webui/pull/1091), [#1092](https://github.com/ipfs-shipyard/ipfs-webui/pull/1092), [#1096](https://github.com/ipfs-shipyard/ipfs-webui/pull/1096), [#1098](https://github.com/ipfs-shipyard/ipfs-webui/pull/1098), [#1099](https://github.com/ipfs-shipyard/ipfs-webui/pull/1099), [#1105](https://github.com/ipfs-shipyard/ipfs-webui/pull/1105))
        - Enabled dependabot
    - Others
        - [Updated IPLD Explorer Components Deps](https://github.com/ipfs-shipyard/ipld-explorer-components/pull/22)
            - Thanks to @vmx for helping me out with the new IPLD api.
        - Enabled Dependabot on ipld-explorer-components too.
- Next:
    - Update `ipld-explorer` dependencies and enable dependabot.
    - Start writing unit tests for IPFS Desktop.
    - Fix https://github.com/ipfs-shipyard/ipfs-webui/issues/1095.
    - Release Desktop 0.9.0-

