 GUI and In Web Browsers 2020-01-29

A weekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790

## Participants

- @hacdias
- @dietrich
- @jacobheun
- @andrew
- @lidel
- @hugomrdias

## Recording

- https://ipfs.io/ipfs/bafybeiau4f6tt5kplmh6r4cy5loesf5hvo2d6mfksff2gd7ngowkgezfuq
- https://youtu.be/gqxqTwD05ZM 

## Agenda

- async await refactor lands in JS IPFS/LIBP2P ecosystem
  what does it mean for use in web browsers? [@lidel] 
    - background: https://blog.ipfs.io/2020-02-01-async-await-refactor/
    - js-libp2p 0.27 (released)
        - [API changes in the release issue](https://github.com/libp2p/js-libp2p/issues/487)
        - Q: any regressions or transports that no loner work?
    - js-ipfs 0.41 (soon to be released)
      - [API changes in the release issue](https://github.com/ipfs/js-ipfs/issues/2656)
      - [Migration guide by Alan](https://gist.github.com/alanshaw/04b2ddc35a6fff25c040c011ac6acf26)
      - performance: [after vs before](https://user-images.githubusercontent.com/152863/73194116-93f21c80-4123-11ea-9e75-0435c70f2513.png)
  - js-ipfs-http-client 42.0.0-pre.0 (released)
      - [significant bundle size reduction](https://user-images.githubusercontent.com/152863/73194114-92285900-4123-11ea-9903-f6ed12a57ab2.png)
  - next: switch ipfs-webui, ipfs-companion, ipfs-desktop to new libs
- Q1 OKRs for browsers, connectivity and webui/desktop
    - prepare some before IPFS Team Week
        - OKR for webui / desktop / companion / oth maint.
- guiding principles for browser integrations
    - subdomain gateways raised good questions about "architectural lock-in"
        - what does that level of change mean for project's future?
        - are we locking ourself out of some uses?
        - how we make changes? how we make decisions how browser integration works? what are the criteria?
        - (AI) writing down those "guiding principles" could be a good topic for a workshop during Team Week.
- localhost nuances
    - Firefox
        - https://bugzilla.mozilla.org/show_bug.cgi?id=1220810#c23
        - https://bugzilla.mozilla.org/show_bug.cgi?id=1433933#c6
    - (AIs)
        -  spec localhost use 
        - potential workshops for team week: 
            - brainstorm how ipfs would look like in browser if browsers were created today (without legacy origin/trust model)
            - open problem: ux of naming things (IPNS, DNSLink, DNS vs  CID, IP)
- ipfs devgrants
    - Devgrants program is online: https://github.com/ipfs/devgrants/
    - looking for ideas for small projects <1k $ or bigger ones
        - create RFP or MICROGRANT proposal for work you want to see done
        - OR propose your own project as Open Devgrant
- visualization of connection topology
    - MS using js-ipfs for identity/blockchain solution
    - interesting topology (js-ipfs has no DHT), for now rely on adding persistent peers as bootstrappers
    - need for more clear visualization of routing / connectivity available for go-ipfs vs js-ipfs  (could be a dev grant)
    - (AI) add libp2p network visualization links 

