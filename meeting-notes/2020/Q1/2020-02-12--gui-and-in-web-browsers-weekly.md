 # GUI and In Web Browsers 2020-02-12

A weekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790

## Participants

- @lidel
- @vasco-santos
- @jacobheun
- @andrew
- @hugomrdias

## Recording

- https://youtu.be/g0kRe0R7H48 
- https://ipfs.io/ipfs/bafybeid5jcqj6efkop4qzfj7himkele5h3w3kqtpkxaa6osxhx2ygemnfm/

## Agenda


- @jacobheun: dns over https resolvers for /dnsaddr/ multiaddrs
    - [js-ipfs - DNS over HTTPS](https://github.com/ipfs/js-ipfs/issues/2212)
    - [js-multiaddr resolution issue](https://github.com/multiformats/js-multiaddr/issues/94)
- @lidel: quick overview what async refactor means for ipfs-companion, ipfs-webui and ipfs-desktop
    - [js-ipfs 0.41](https://github.com/ipfs/js-ipfs/issues/2656) and [js-ipfs-http-client v42.0.0](https://github.com/ipfs/js-ipfs-http-client/releases/tag/v42.0.0) bring [breaking changes to programmatic JS API](https://blog.ipfs.io/2020-02-01-async-await-refactor/)
    - webui needs to switch first, then the rest
- @hugomrdias: a sneak-peek of playwrigth-based test runner
    - new test runner based on https://github.com/microsoft/playwright/
    - much simpler and less flaky than karma-based one
    - supports new contexts such as incognito and webextensions
    - coming soon, need to figure out how to save disk space for runtime deps
- PSA: IPFS team week next week
    - no call next week, we get back on 26th
