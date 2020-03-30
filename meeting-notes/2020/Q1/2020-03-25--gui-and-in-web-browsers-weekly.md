 # GUI and In Web Browsers 2020-03-25

A weekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790

## Participants

- @jessicaschilling
- @vasco-santos
- @lidel 
- @hacdias
- @hugomrdias 
- @chafey

## Recording

- https://ipfs.io/ipfs/bafybeidjhqh675iqoulhhz7yowhaxes4iwabv4qo6hmpqnf4nfiwc2xqlu/
- https://youtu.be/OGMkAZkW3EE 

## Notes

- @lidel: [Preview: subdomain gateways in ipfs-companion](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.10.0.893)
    - will docs of path gateways be marked as deprecated/unsafe feature?
    - existing non-PL public gateways - do they need to do anything to upgrade besides upgrade to 0.5?
    - anything needed for ipfs.io after upgrade to 0.5? do we do weird stuff there?
    - any more localhost issues/bugs in browsers affecting us here?
    - will you be writing a blog post explaining all of this?
- @autonome: [Q2 OKR review](https://hackmd.io/V85LV8k-TtSE4l9ex8-obQ?both)
- @autonome: Opera update
- @autonome: Igalia comments on [protocol handler grant PR](https://github.com/ipfs/devgrants/pull/30)
- Any update on Brave local discovery?
    - work should start in the middle of April
- @chafey: Simple vue app I created for editing IPLD Schemas [IPLD Schema Editor](https://chafey.github.io/ipld-schema-app/)
    - @lidel: would be cool to see something like that in IPLD Explorer at some point
- [Safari changes to storage, pushing folks towards storage access requests](https://twitter.com/cvanw/status/1242828419252883461) - how will affect people running js-ipfs in http web pages?
    - some notes about adding support for permanent storage: https://github.com/ipfs/js-ipfs/issues/2937
    - still, if Safari decides to ignore "permanent" flag, it does not help much
    - supecting that over time, js-ipfs running on a page will become more and more ephemeral (both repo and peerid)
    - we started thinking about different states js-ipfs running on a web page could be
        - a way of deduplicating nodes across tabs/origin
        - ephemeral by default
        - capable of detecting nodes with more permanent storage (eg. ipfs-desktop) and asking those to persist data / identity
        - planning to explore those problem spaces later this year

## Highlights

> Details of past week's work are published in notes of [IPFS Core Implementations Weekly Sync](https://github.com/ipfs/team-mgmt/issues/992). This section includes a subset of past week's work.

- Released
    - ipfs-companion [v2.10.0.893 (beta)](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.10.0.893)
