 # IPFS GUI and Browsers 2020-07-28

A biweekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790

## Participants

- @jessicaschilling
- @lidel 
- @gozala
- @rafaelramalho 

## Recording

- https://youtu.be/wTPxRI2JFOk 

## Agenda

- pinning services update
    - updated API spec.
    - added more context to the pinning life cycle
    - added transversion of query structures
    - easier to learn by exploration
    - started gathering feedback from implementers. 2 pull requests from them to:
        - Add timestamps for when the pinning request was added. Good for finding pins that were recent, makes pagination more deterministic and easier to find entries.
        - Simplify access token spec. 
- directory listing improvements from [go-ipfs/pull/7536](https://github.com/ipfs/go-ipfs/pull/7536)
    - breadcrumbs are now clickable
    - column with cids added
    - filesizes are now in the header
    - More details in "highlights" below
- ipfs.add perf improvements
    - switching webui to the latest http-client
        - [x] Alex landed patch to [fix buffering in js-ipfs](https://github.com/ipfs/js-ipfs/pull/3184)
        - [ ] [Ripping out ipfs-redux-bundle so we can update http-client as necessary](https://github.com/ipfs-shipyard/ipfs-webui/pull/1563)
        - [ ] Will be working on actually updating to new IPFS (breaking API changes)
        - [ ] Then updating pull request to use new http-client. (currently uses the fetch api with no progress events)
        - [ ] [Progress updates need to be added to the http-client / api-utils](https://github.com/ipfs/js-ipfs-utils/issues/52)
        - [ ] After that we can integrate progressbar.
- secio deprecation in go-ipfs ~0.7 and impact on js-ipfs in Brave
- ok to merge navbar rework in webui/desktop? [PR 1550](https://github.com/ipfs-shipyard/ipfs-webui/pull/1550) will unblock welcome page work in [issue 1463](https://github.com/ipfs-shipyard/ipfs-webui/issues/1463)
    - it's ok to merge, looks great!
    - In an ideal world we would make a burger menu on mobile
- Pinning settings page almost complete
    - [x] Modal for adding new integration/custom
    - [ ] Edit integration
        - private api key is not stored, so it's not possible to retrieve it. We'll add a random private api key on edit (like "***********") and if the user edits it, it should be updated. Every field is updated depending on changes.
    - [ ] Delete integration

## Highlights

> This section includes releases and selected announcements.

- ipfs-companion [v2.14.0.959](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.14.0.959)
- New [ipfs loading animation with the logo](https://codepen.io/rafaelramalho19/pen/yLewRgm)
- Updates to dir-index-html 
    - Single source of truth (human-friendly) with build script to minify/inline it for giving to go-ipfs ([release](https://github.com/ipfs/dir-index-html/releases/tag/v1.2.0)) 
    - UI improvements ([release](https://github.com/ipfs/dir-index-html/releases/tag/v1.1.0)) thanks to contributor/bounty hunter neatonk! CID column, displays current directory size in header, path components in table headers to links
