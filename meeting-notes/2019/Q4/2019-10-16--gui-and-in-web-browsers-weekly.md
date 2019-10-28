# GUI and In Web Browsers 2019-10-16

A weekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790

## Participants

- @lidel
- @dietrich
- @hacdias

## Recording

- https://ipfs.io/ipfs/bafybeiawg2rlmyfivi23wacsnit2aegleyd2asjmln2lgtd6brrev63g4u
- https://youtu.be/pFs4il5XvVQ


## Agenda / Notes

- demo: [precached webui in Brave](https://github.com/ipfs-shipyard/ipfs-companion/pull/782)
    - will land in Chrome Web Store soon (Firefox requires [reproducible Web UI](https://github.com/ipfs-shipyard/ipfs-webui/issues/959))
- ipfs geoip: update dataset [#63](https://github.com/ipfs/ipfs-geoip/issues/63)
    - seems that format changed, we may need to revisit how we represent this dataset (DAG/MFS)
- testing matrix
    - https://github.com/ipfs-shipyard/ipfs-webui/issues/1164
    - status - what is next, 10 weeks left!
- distributed wikipedia
    - 25th anniversary coming up!
    - dev grants? community meeting? wikipedia fridays?
    - priority: [issues related to snapshot generation](https://github.com/ipfs/distributed-wikipedia-mirror/issues?q=is%3Aissue+sort%3Aupdated-desc+label%3Asnapshots+is%3Aopen), then [update tr.wikipedia-on-ipfs.org](https://github.com/ipfs/distributed-wikipedia-mirror/issues/60)
- cohosting
    - [Michelle's notes on pinning entry points](https://gist.github.com/meiqimichelle/879a9b7ba89f441880dac656a43d2c61) 
        - [Notes on the relationship between pinning and MFS](https://gist.github.com/meiqimichelle/1e4601b4418bf4f46007f4777aff395d)
    - Should we use companion or not?
        - [Lazy cohosting](https://github.com/ipfs-shipyard/cohosting/issues/6) sounds like a safe default for IPFS Companion
        - Language around some contepts needs to be improved ([tracked here](https://github.com/ipfs-shipyard/ipfs-companion/projects/6))
- IPFS Desktop's CPU/GPU usage ([#1196](https://github.com/ipfs-shipyard/ipfs-desktop/issues/1196))
    - probably unnecessary canvas render when Web UI is hidden (update: [PR](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1198))


## Team Updates

> Details of past week's work is are published in notes of [IPFS Core Implementations Weekly Sync](https://github.com/ipfs/team-mgmt/issues/992)

- @hacdias: busier than expected with uni
