 # IPFS GUI and Browsers 2020-09-08

A biweekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790


## Participants

- @jessicaschilling 
- @andrew
- @gozala 
- @lidel

## Recording

- https://youtu.be/7MlPNllrjso 

## Agenda

- [Chrome 86 safelists Distributed Web Schemes for registerProtocolHandler()](https://blog.chromium.org/2020/09/chrome-86-improved-focus-highlighting.html)
    - sidenote: [arewedistributedyet.com](https://arewedistributedyet.com) is outdated + it is hosted on a separate github org: we should switch to Fleek to reduce infra burden
- upcoming releases
    - ipfs-webui v2.11 ([milestone](https://github.com/ipfs-shipyard/ipfs-webui/milestone/2)) - **will ship as new version of Desktop concurrent with go-ipfs 0.7**
        - [upload of big files](https://github.com/ipfs-shipyard/ipfs-webui/pull/1534/files)
        - [breadcrumbs](https://github.com/ipfs-shipyard/ipfs-webui/pull/1599)
        - [improved support for remote apis](https://github.com/ipfs-shipyard/ipfs-webui/pull/1613)
        - Various back-end fixes (namely consolidation of i18n keys)
    - ipfs-desktop with go-ipfs 0.7.0
    - ipfs-companion with post-SECIO js-ipfs
- pinning services - quick update on the [API](https://ipfs.github.io/pinning-services-api-spec/)
- JS epic of  [replacing node Buffers with Uint8Arrays](https://github.com/ipfs/js-ipfs/issues/3220) landing in libs in following weeks
