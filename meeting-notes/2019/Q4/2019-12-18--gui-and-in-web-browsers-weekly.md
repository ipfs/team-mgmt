# GUI and In Web Browsers 2019-12-18

A weekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790

## Participants

- @lidel
- @dietrich
- @hugomrdias

## Recording

- [ipfs://bafybeigm3jso2ysl2kvuedqi3fegzqfvg6ffyel5lfjkdxb6gfxttrorpm](https://ipfs.io/ipfs/bafybeigm3jso2ysl2kvuedqi3fegzqfvg6ffyel5lfjkdxb6gfxttrorpm/)
- https://youtu.be/kZbCxgTwWrI 

## Agenda

- [IPFS Companion v2.10.0](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.10.0)
- maintenance of [ipfs/public-gateway-checker](https://github.com/ipfs/public-gateway-checker/)
    - see also awesome ipfs
    - maybe a community waffle/zen board?
    - the list of repos we want to make sure are supported
    - start a call?
- [webui e2e tests against go-ipfs and js-ipfs](https://github.com/ipfs-shipyard/ipfs-webui/pull/1353)
    - done: running against specific releases of go-ipfs and js-ipfs
    - next: running against arbitrary API endpoint, ensiring proper binary is used, merging and PR against js-ipfs/go-ipfs
- Opera build. What are final fixes?
    - need Origin isolation between root CIDs (content roots)
    - We want `window.location.origin` on `ipfs://{cid}` pages to be unique per CID
        - In practice, if they use HTTP gateway, they need to switch to [subdomain gateway](https://docs.ipfs.io/guides/guides/addressing/#subdomain-gateway)
        - Ideally, it would be set to `ipfs://{cid}`
- Browser Design Guidelines moved to recommendations phase
    - historical trust model around TLS+DNS vs DWeb, IPFS
        - what is the replacement?
        - in dweb, the trust comes from user who shared us the link
    - need new language for communicating new concepts
        - integrity
        - immutability
- Awesome ipfs triage
    
## Highlights

> Details of past week's work are published in notes of [IPFS Core Implementations Weekly Sync](https://github.com/ipfs/team-mgmt/issues/992)   
> This section includes a subset of past week's work 

- Released
    - [IPFS Companion v2.10.0](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.10.0)
