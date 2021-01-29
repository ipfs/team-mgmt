# IPFS GUI and Browsers 2021-01-19

A biweekly(-ish) discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790


## Participants

- @gozala
- @lidel
- @jessicaschilling

## Recording

- https://youtu.be/tZIrxD-xOQ4

## Agenda

- Quick DEMOS!
    - DNSLink names on `https://` public gateways subdomains
      - go-ipfs 0.8.0-rc2 will ship with "Option C" from [ipfs/in-web-browsers#169](https://github.com/ipfs/in-web-browsers/issues/169)
      - already running on `dweb.link`
      - enables people to use any subdomain gateway as a shareable mirror of their DNSLink website
    - Native `ipfs://` and `ipns://` in Brave v1.19.x
      - [reading materials](https://github.com/ipfs/in-web-browsers/issues/64#issuecomment-763016248) (blog posts, press)
      - here we quickly show how to switch to IPFS node Provided by Brave if you are already using IPFS Companion
- PSA: **This meeting is being moved forward an hour in the future! 16:30 UTC from here on out.**

## Highlights

> This section includes releases and selected announcements.

- New Companion release! [v2.17.1](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.17.1)
    - fix: support inlined DNSLink and context actions for URIs ([#961](https://github.com/ipfs-shipyard/ipfs-companion/pull/961))
    - fix: support DNSLink with dnslink=/ipns/{libp2p-key} ([#959](https://github.com/ipfs-shipyard/ipfs-companion/pull/959)) (thanks @Ktl-XV!)
    - fix: redirect to native URIs in Brave ([#960](https://github.com/ipfs-shipyard/ipfs-companion/pull/960))
- Brave v1.19 shipped with support for ipfs:// URI and ability to run local node ([details](https://github.com/ipfs/in-web-browsers/issues/64#issuecomment-763016248))

## Async Updates

> This section includes async updates from team members.

- Pinning work continues - hopefully will have something to demo next time!
