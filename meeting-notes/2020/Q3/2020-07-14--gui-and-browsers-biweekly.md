 # IPFS GUI and Browsers 2020-07-14

A biweekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790


## Participants

- @gozala
- @jessicaschilling
- @rafaelramalho
- @lidel

## Recording

- https://youtu.be/snSKVsroS8U 

## Agenda

- Pinning Services Extravaganza (@lidel)
    - Pinning Service API docs:  https://ipfs.github.io/pinning-services-api-spec/
        - Simple API: pin object lifecycle (creating, modifying, removing)
        - Tackled problems related to service fetching new data from peers behind NATs and other restrictive network topologies by adding provider hints
        - Removed a bunch of fields, replaced them with a meta dictionary where vendors can add their own parameters; these could be specific to their functionality but ideally more generic
        - This spec defines the minimum that MUST be implemented by a pinning service (except those meta parameters)
        - You can filter by status, pass multiple CIDs
        - Pagination is built in (about 1k of results)
        - User can add multiple pins in a single request, change providers, even change CID (could be useful in future if Web UI adds policies for "every pin in MFS" since CIDs will be constantly changing)
    - Finalizing API spec: https://github.com/ipfs/pinning-services-api-spec/issues/21
        - Still in flight but nearly finalized (don't expect any massive changes, at least)
        - YAML file is the source of truth: simple API spec preceded by introductory info (this is what's prettified in the github.io link above)
    - Next steps: give pinning services green light to start implementing
        - Making some time to anticipate any glitches that occur as folks do this
        - If you're reading this and you run a pinning service, you should keep an eye on this repo
    - Discussion: adding new pinning service from Web UI without need to input private key
        - Holding on this for now but bookmarking for future implementation
        - Want to see the degree to which the community wants this
    - Discussion: de-scope stats (files, file sizes) in prefs screen per pinning service
        - Same thing: bookmarking for future implementation, want to see how possible this is vis-a-vis different pinning services' pricing strategies etc
- subdomain gateways
    - merged [ED25519 support in subdomains](https://github.com/ipfs/go-ipfs/pull/7441)
        -  works with TLS certs
        - defaults to base36 (instead of base32) in subdomains for all libp2p-keys
        - returns error if CID is too long to be loaded via subdomain (this might be the case if you use some hash functions)
    - merged [feat: support X-Forwarded-Host header](https://github.com/ipfs/go-ipfs/pull/7468) enables subdomain gateway redirect to different hostnames 
        - Useful if someone has a public gateway they were using mainly for websites but now wants to add origin isolation for users (gives a clear migration path)

- [Multipart FormData encoder](https://github.com/ipfs/js-ipfs/pull/3151) (improving performance of `ipfs.add` in browser contexts)
    - Had design review meeting with core implementations team where we made decision on implementation strategy (fully browser-native vs "somewhat" browser native, went with latter)
    - js-ipfs pull request is waiting for review
        - Implements the above decision
        - Ended up being a pretty complex piece of work
        - Might need to ...?
    - Once above lands will update [webui pull](https://github.com/ipfs-shipyard/ipfs-webui/pull/1534) to use it
        - Open question: upload progress indicator, but nothing is listening to these actions. What to do?
            - May be related to Rafael's recent enhancements to Files page (will discuss offline)

- IPFS desktop update problems
    - A few issues filed last week re problems with Desktop updates
        - Mainly Windows users who installed globally for all users as an admin; this seems to be an electron-builder bug
    - Fixed problem, but please remember only works for new version onwards
    - But release is imminent
    - Proposal: after pinning service spike, need to devote some time to making this more bulletproof
    - Electron-builder is not particularly reliable/robust; let's also talk about moving away from this tool as part of overall release process tweaks (less github, more IPFS)

- IPFS Pinning on Settings page
    - Stubbed out UI without functionality
    - Still some accessibility issues with table, but close
    - Waiting for API finalization

## Highlights

> This section includes releases and selected announcements.

- [ipfs-desktop v0.12.1](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.12.1)
- ipfs-companion - [revamped pop-up menu and preferences](https://github.com/ipfs-shipyard/ipfs-companion/pull/907) shipped in [v2.14.0](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.14.0) 
    - In both Chrome and Firefox stable channel stores
    - Streamlined UI will hopefully free up vertically space for additional link options for DNSLink sites (see on-hold [PR](https://github.com/ipfs-shipyard/ipfs-companion/pull/745))
    - Something's wonky in Chrome in our user numbers (was 30k, then 0, then 6k) but this is a bigger problem than just us - in any case, our user base is still growing as anticipated
- [Audius case study](https://docs.ipfs.io/concepts/case-study-audius/#how-audius-uses-ipfs)
    - More to come: OpenBazaar, Fleek, Iotex in works
