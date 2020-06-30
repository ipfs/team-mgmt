 # IPFS GUI and Browsers 2020-06-30

A biweekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790

## Participants

- @lidel
- @jessicaschilling 
- @olizilla
- @gozala
- @vascosantos

## Recording

- https://youtu.be/N1Pfc-AVrvI

## Agenda

- Nominate notetaker  : olizilla!!!

- [IPFS Web/GUI 2020 Q3 OKRs](https://docs.google.com/spreadsheets/d/1KVe3JCsfB-l47-DE5gvk7bT0Yly_EAPrHCi-8kCthy4/edit#gid=2125992746)
    - focus on user interfaces for pinning services and defining and delivering the api changes needed (responsibilty shared with core impls)

- [wip] [Pinning Service API Spec](https://github.com/ipfs/pinning-services-api-spec) 
    - ETA between 6th and 13th of July to finalize the spec
    - looking for feedback: feel free to fill issues in [ipfs/pinning-services-api-spec](https://github.com/ipfs/pinning-services-api-spec) repo
    - [Pinning service features survey](https://ipfscommunity.typeform.com/to/qQLALuQW): will get the word out today on Twitter, Reddit, HN
        - May keep out of the newsletter if possible: we have several other surveys in flight
    - looking to make the api surface as small as possible that we can all agree on
    - probably dont want to require specific auth mechanisms
    - For additional context, [Epic with GUI work for integrating PinnignServices into WebUI](https://github.com/ipfs/ipfs-gui/issues/91)
    - Q: What happens if the network fails while pinning to a remote?
        - it will happen in go-ipfs, but is a good question, needs follow up with Jake
    - Q: seems more complex than we would need for a first pass
        - it is a exploration of what is the most complex scenario, can we support that, so we dont box ourselves in / so we know what we may need to support and dont cause ourselves issues with mvp feature set
    - Q: are there opportunities to rethink the ui/ux in the future? What is the process?
        - We should track the feedback. if we want to do something substantially different we need to define that now.
        - icon design changes is fine.
        - what is a substantive change?
        - e.g how google shows who has access to a thing

- [Improving File Add](https://github.com/ipfs/js-ipfs/issues/3029)
    - Will have desing review meeting
    - Have patch for webui (but having trouble with bundler right now)
    - Have also beginnings of patch for js-ipfs
    - gozala proposed a desing review with core-impls... we could do everything in browser or we could tweak the http-api changes. The patch assumes we wont do
    - js-ipfs does a bunch of normalizations... which means we need to buffer, and we loose perf optimisations.
        - i have a patch for that but it is large.
        - i have a smaller change which but gets us less improvement.
        - bundler is not picking up the dep. eyes plz!


## Highlights

> This section includes releases and selected announcements.

- ipfs-webui [v2.10.0](https://github.com/ipfs-shipyard/ipfs-webui/releases/tag/v2.10.0) & [v2.10.1](https://github.com/ipfs-shipyard/ipfs-webui/releases/tag/v2.10.1)
- ipfs-companion [v2.13.1](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.13.1)
