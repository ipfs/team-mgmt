# GUI & In Web Browsers Weekly Sync 2019-02-20

-   Recording: https://youtu.be/-fwS5K8P8kw || [/ipfs/bafybeifuhktws64gbegvq7e4myu47wkxujq3bpqv7h5hm6limcohjpmqma](https://ipfs.io/ipfs/bafybeifuhktws64gbegvq7e4myu47wkxujq3bpqv7h5hm6limcohjpmqma/)
-   Moderator: @olizilla
-   Notetaker: @lidel
-   Attendees:
    -   _@jimpick_
    -   _@fsdiogo_
    -   _@lidel_
    -   _@olizilla_
    -   _@cwaring_
    -   _@hugomrdias_

**Preflight checklist**

-   Call for additional **agenda** items!
-   Ensure that there is a **notetaker**!
-   **Start  recording! :^)**

**Agenda**

_General discussions, decisions, etc._

-   Start with Team Updates and Demos
-   lidel 5min, review poll results and decide if it makes sense to change call time:<https://github.com/ipfs/team-mgmt/issues/790#issuecomment-464389427>
-   lidel has a demo!

**Team Updates**

@lidel
-   Done:
    -   Ipfs-companion
        -   [Switched CI to Travis and fixed security issue in Docker-based build](https://github.com/ipfs-shipyard/ipfs-companion/pull/685)
        -   [Another idea how to avoid window.ipfs injection on every page](https://github.com/ipfs-shipyard/ipfs-companion/issues/589#issuecomment-465347605) 
        -   [Published Privacy Policy](https://github.com/ipfs-shipyard/ipfs-companion/pull/686)
            -   latest version:<https://github.com/ipfs-shipyard/ipfs-companion/blob/master/docs/privacy-policy.md> 
        -   [PR with per-site redirect opt-out](https://github.com/ipfs-shipyard/ipfs-companion/pull/687) (demo)
            -   ****looking for feedback, mainly about the UX (see UI in the PR)****
-   Blocked:
    -   (i18n)<https://github.com/ipfs/i18n/issues/5>   
        (one of org Admins needs to enable new Github Integration)
-   Next:
    -   Finalize PR with per-site redirect opt-out
    -   Cut a new Beta
    -   Create & park a PR with thin window.ipfs
    
@hacdias
-   Done:
    -   Added some configuration defaults for IPFS Desktop[\[issue\]](https://github.com/ipfs-shipyard/ipfs-desktop/issues/665)
        -   Enable GC[(PR)](https://github.com/ipfs-shipyard/ipfs-desktop/pull/826)
        -   Min/max connections, mDNS and NAT port mapping[(PR)](https://github.com/ipfs-shipyard/ipfs-desktop/pull/828)
    -   We’ve got new language contributions[(PR)](https://github.com/ipfs-shipyard/ipfs-desktop/pull/829)
    -   Fixed the startup tests[(PR)](https://github.com/ipfs-shipyard/ipfs-desktop/pull/827)
    -   Fixed the remaining Devtron warnings[(PR)](https://github.com/ipfs-shipyard/ipfs-desktop/pull/825)
    -   Drag’n’drop files on macOS tray finally working and merged[(PR)](https://github.com/ipfs-shipyard/ipfs-desktop/pull/810)
    -   Ipfs-fuse now works on Windows with Dokany[(PR)](https://github.com/tableflip/ipfs-fuse/pull/6)
    -   v0.7.0-rc.1 release of IPFS Desktop[(Release Link)](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.7.0-rc.1)
    -   Added Desktop and IPFS version indicators to context menu[(PR)](https://github.com/ipfs-shipyard/ipfs-desktop/pull/833)


@fsdiogo
-   Done:
    -   Refactoring the \`FilesList\` component to use \`react-virtualized\`
        -   <https://github.com/ipfs-shipyard/ipfs-webui/pull/957>
-   Next:
    -   SHIP THIS PR!
 
@hugomrdias
-   Done:
    -   add travis and clean up ipfs-multipart https&#x3A;//github.com/ipfs/js-ipfs-multipart/pull/8
    -   add travis and clean up multihashing-async<https://github.com/multiformats/js-multihashing-async/pull/38>
    -   More travis fixing in ipld repos
    -   Bundle size support in aegir<https://github.com/ipfs/aegir/pull/335>
    -   Add bundle size check to ci in ipfds-ctl<https://github.com/ipfs/js-ipfsd-ctl/pull/323>
-   Blocked:

    -   move to travis.com tracking #329<https://github.com/ipfs/aegir/issues/329>
    -   adding package-lock.json #330<https://github.com/ipfs/aegir/issues/330>
-   Next:
    -   Add bundle size checks to ipfs and libp2p
    -   Add docs how to add bundle size check to a repo
    -   Integration benchmarks into CI

@jimpick
-   Done:
    -   “Pinner Bot” for Peerdium Lunet demo
    -   Coffee with Gozala in Portland!
 
**Discussion Highlights**

_Discussion highlights and additional notes._


-   Privacy Policy for IPFS Companion is at <https://github.com/ipfs-shipyard/ipfs-companion/blob/master/docs/privacy-policy.md> 
-   Looking for feedback about [demoed UI for per-site redirect opt-out in ipfs-companion](https://github.com/ipfs-shipyard/ipfs-companion/pull/687) 
-   Web UI file list getting faster (WIP)
-   IPFS Desktop 0.7.0-rc.1 sets lower connection limits to avoid killing consumer routers
-   (demo) [peerdium fork](https://github.com/jimpick/peerdium)+[lunet](https://github.com/Gozala/lunet/) - a nice demo of p2p app with transparent pinning in the background
-   Travis CI: atm Windows builds can’t have secrets defined as env vars (blocks bundlesize check)
-   Looking for feedback about [adding package-lock.json to our repos](https://github.com/ipfs/aegir/issues/330) 
-   [The poll about moving Weekly call to another time](https://github.com/ipfs/team-mgmt/issues/790#issuecomment-464389427) had no clear winner, so the next week’s will take place at the same time.
-   Discussion about [replacing a hot path in JavaScript app with WebAssembly](https://developers.google.com/web/updates/2019/02/hotpath-with-wasm) 
