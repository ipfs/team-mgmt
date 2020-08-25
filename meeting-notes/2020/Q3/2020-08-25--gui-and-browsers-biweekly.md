# IPFS GUI and Browsers 2020-08-25

A biweekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790

## Participants

- @jessicaschilling 
- @rafaelramalho19 
- @lidel 
- @dchoi27
- Ricardo Malagon

## Recording

- https://youtu.be/wJGYFTswQrk

## Notes

- `ipfs://` and `ipns://` URIs are now registerable via [navigator.registerProtocolHandler](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/registerProtocolHandler) in Chromium, along with a number of other boats we want to float in the transition to a truly user-centered web
    -  https://www.chromestatus.com/feature/4776602869170176
    -  retweet: https://twitter.com/dietrich/status/1296244237390905344
    -  part of [ipfs/devgrants/protocol-handler-api-for-browser-extensions.md](https://github.com/ipfs/devgrants/blob/master/targeted-grants/protocol-handler-api-for-browser-extensions.md)
- pinning services api spec v0.0.5 ([docs](https://ipfs.github.io/pinning-services-api-spec/))
- improved dir listing scheduled to ship with go-ipfs 0.7 ([PR](https://github.com/ipfs/go-ipfs/pull/7536))
- [CLI Tutor Mode](https://github.com/ipfs-shipyard/ipfs-webui/issues/1421) nearly ready to ship - great community contributor work!
- Freezing the scope for [webui v2.11](https://github.com/ipfs-shipyard/ipfs-webui/milestone/2), ETA within the next two weeks.
- We started weekly triage/grooming of the [last week of incoming issues](https://app.zenhub.com/workspaces/-ipfs-app-family-ux-5e7a3123e969e659cdebb5e6/board?repos=24483721,111841602,32695583,40225364,104770273,36580101,142181521,142161410,116711586,119716282,38799513,147528357,148369983)
- No releases yet: bunch of work in the final stage waiting for review/merge/ship, stay tunned!
