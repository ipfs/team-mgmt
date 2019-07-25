GUI and In Web Browsers 2019-07-17
===

> A weekly discussion and show & tell around IPFS _GUIs_ and _Web Browsers_
>
> Details: https://github.com/ipfs/team-mgmt/issues/790

- Recording: https://youtu.be/9TCd402K7Oc
- Participants
  - @lidel
  - @olizilla
  - @autonome
  - @hugomrdias
  - @terichadbourne
  - @hacdias
  - @JustMaier
  - @ericronne

## Agenda

- Seamless experience around port `8080` or `5001` being taken
- How to handle Subdomain Gateway on `localhost`
- Removing special cases and hacks around Web UI
- Surfacing [ProtoSchool](https://proto.school/) on ipfs.io and js.ipfs.io
  (suggestions welcome here: https://github.com/ProtoSchool/protoschool.github.io/issues/260)
- We need a KR around Desktop + GUI for Q3, eg " We keep shipping it, fixing highest priority stuff but not low priority stuff, decreasing the maintenance cost where possible"
    - "Desktop and WebUI remain functional, have a lower maintenance overhad, and are updated to meet high priority needs"
    - (eg: we're not regressing them as we ship new stuff this quarter)
- Brief intro to peer identicons :sparkles:

## Notes

### Seamless experience around port `8080` or `5001` being taken

- Port 8080 is a popular port. it's frustrating for devs who use it for, say tomcat.
- Desktop should just work.
- ACTION: register IPFS ports with iana
- ACTION: tell the user that the default port is taken, and pick a random port if it can't bind to the regular one.

### How to handle Subdomain Gateway on `localhost`

- it seems like "cid-in-path" gateways should be deprecated
- redirecting from cid in path to cid in domain seems like all win, as long we make it work on localhost
  - Mainstream OSes will resolve `foo.localhost` to `120.0.0.1` or `::1` making this seamless, for everyone else we can provide [http proxy](https://github.com/ipfs/go-ipfs/issues/5982)
  - we can redirect path-one to subdomain, or make them explicitly separate Origins by redirecting `localhost` (without subdomains) to `127.0.0.1`
- base32 cidv1 progress https://github.com/ipfs/ipfs/issues/337

### Removing special cases and hacks around Web UI

- go-ipfs introduces some extra checks when the user adds additional CORS headers, which causes us issues when trying to define additional blessed CIDs
- Loading Web UI in Companion: 
  Companion to stop removing origin header (it had good reason to, but now it's causing problems of its own.)
  https://github.com/ipfs-shipyard/ipfs-companion/issues/736
- go-ipfs should allow loading /ipns/webui.ipfs.io via API port (for people who want to opt-in to latest version)

### Peer Identicons

- [Issue/Discussion](https://github.com/ipfs-shipyard/ipfs-webui/issues/935)
- [PR](https://github.com/ipfs-shipyard/ipfs-webui/pull/1069)


Sneak peek:
> [![](https://i.imgur.com/MsYTI8u.png)](https://github.com/ipfs-shipyard/ipfs-webui/issues/935)




## Team updates

### @lidel

Working on [embedded js-ipfs in Brave](https://github.com/ipfs-shipyard/ipfs-companion/issues/716)

- Done: 
    - Opened discussion for improving UX of IPFS in Brave's Address Bar: https://github.com/brave/brave-browser/issues/5218
      > ![](https://user-images.githubusercontent.com/157609/61064603-64d3c200-a402-11e9-8e53-9de625053011.png)
      > ![](https://user-images.githubusercontent.com/157609/61067102-1aa10f80-a407-11e9-837d-4ec80caf4a71.png)
    - fix(gateway): disable compression https://github.com/ipfs/js-ipfs/pull/2245
    - Looked into Delegated Routing for embedded JS IPFS in Brave
      - fix: allow setting `Addresses.Delegates` https://github.com/ipfs/js-ipfs/pull/2253
      - debugged request flood due to delegated routing https://github.com/libp2p/js-libp2p-delegated-content-routing/issues/12
    - debugged some shutdown race conditions
      - proposal to make `.stop()` calls idempotent https://github.com/ipfs/js-ipfs/issues/2257
    - Sync with @Stebalien on _Subdomain Gateways_ ([in-web-browsers/issues/89](https://github.com/ipfs/in-web-browsers/issues/89), [go-ipfs/issues/6498](https://github.com/ipfs/go-ipfs/issues/6498))
      - [Notes with open problems](https://github.com/ipfs/go-ipfs/issues/6498#issuecomment-511478982)
      - PR review to [simplify configuration of Gateway features](https://github.com/ipfs/go-ipfs/pull/6096#issuecomment-511994883)
- Next:
   - Release New Companion (Beta)
   - Optimize Delegated Content Routing in js-ipfs so it can be used in browser context

### @hacdias

- Done:
    - Updated js-multicodec and released v0.5.4
        - https://github.com/multiformats/js-multicodec/releases/tag/v0.5.4
    - Deprecate archives.ipfs.io and move all the archives to Awesome IPFS 
        - https://github.com/ipfs/archives/pull/200
        - https://github.com/ipfs/awesome-ipfs/pull/260
    - Make Awesome IPFS a bit wider and use CSS columns for better looking columns and 'cards' and add Services section.
        - https://github.com/ipfs/awesome-ipfs/pull/264
        - https://github.com/ipfs/awesome-ipfs/pull/265
        - ![](https://i.imgur.com/l1H5WUY.png)
    - IPFS Desktop
        - 'Download Hash' feature now supports any IP(F)(N)S paths
            - https://github.com/ipfs-shipyard/ipfs-desktop/pull/980
        - Improved some notification messages
            - https://github.com/ipfs-shipyard/ipfs-desktop/pull/979
        - Fix failure on macOS when the user doesn't have permission to write to /usr/local/bin.
            - https://github.com/ipfs-shipyard/ipfs-desktop/pull/969
        - Add `Cmd+Q` to the accelerators on macOS so when the menubar is opened, we can use that to close IPFS Desktop.
            - https://github.com/ipfs-shipyard/ipfs-desktop/pull/976
        - Added the features 'Take Screenshot' and 'Download Hash' to the menubar itself so users can use them even if they don't have the global shortcuts enabled.
            - https://github.com/ipfs-shipyard/ipfs-desktop/pull/977
            - https://github.com/ipfs-shipyard/ipfs-desktop/pull/981
            - ![](https://i.imgur.com/EBeLwy2.png)
        - Updated the settings page for IPFS Desktop
            - https://github.com/ipfs-shipyard/ipfs-webui/pull/1066
            - https://github.com/ipfs-shipyard/ipfs-webui/pull/1065
            - ![](https://i.imgur.com/krK44nR.png)
    - Gave a complete revamp to the next releases's issue. Please see this beauty: https://github.com/ipfs-shipyard/ipfs-desktop/issues/951

- Next:
    - Finish and merge 'Files in the Wild'
        - https://github.com/ipfs-shipyard/ipfs-webui/pull/1027
    - Handle case where default ports are busy.
        - https://github.com/ipfs-shipyard/ipfs-desktop/issues/912
    - Solve CI issues (HELP PLEASE! Gateway is timing out.)
        - https://github.com/ipfs-shipyard/ipfs-desktop/issues/973
    - New Tray Icon for IPFS Desktop
        - https://github.com/ipfs-shipyard/ipfs-desktop/issues/956
