# GUI and In Web Browsers 2019-10-23

A weekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790

## Participants

- @dietrich
- @hacdias
- @terichadbourne
- @lidel

## Recording

- https://ipfs.io/ipfs/bafybeieikh3nzcsujcf32q6nx3j7q6y4lqzfshtahtslcttson5ncyyh7i/
- https://youtu.be/Qr1FAGd290Y 

## Agenda + Notes

- ipfs-companion: [improving resillience](https://github.com/ipfs-shipyard/ipfs-companion/projects/7)
  - Tracking work related to recovery from network failures (HTTP, DNS), networks with limited or no uplink and censorship.
  - Soon, IPFS Companion will be able to recover from dead gateways (HTTP timeout or dead DNS name) and restore DNSLink websites via public gateway even if the HTTP server is down
- ipfs-geoip: ipv6 and current format
  - new format has much more fields
  - we want to support ipv6 out of the box
  - update plan is discussed in https://github.com/ipfs/ipfs-geoip/issues/68
- Performance and CPU consumption of webui, is there anything left or did @hacdias fix everything? (🎉🎉🎉)
  - Status page is good!
  - Peers page has a PR which will improve things a lot: https://github.com/ipfs-shipyard/ipfs-webui/pull/1262
- The (Test) Matrix, where are we now
  - webui test suite is custom (react-specific)
  - the rest of JS IPFS ecosystem uses [aegir](https://github.com/ipfs/aegir)
    -  we should try reusing aegir, it solved a lot of problems related to running tests in browsers and electron
- Ask from Teri: do you know of resources that could help in learning non-MFS Files API (`add`, `cat`, `get` etc)?
  Specifically, something other than `docs.ipfs.io` and [IPFS Camp Course](https://www.youtube.com/watch?v=Z5zNPwMDYGg)?
  - Please drop references and suggestions in [PR with ProtoSchool tutorial](https://github.com/ProtoSchool/protoschool.github.io/pull/303)
- Wikipedia, let's do some issue gardening
    - Need snapshot generation testing
      - first step is to update Turkish version (`tr.wikipedia-on-ipfs.org`)
        - tracked in https://github.com/ipfs/distributed-wikipedia-mirror/issues/60
        -  it is small enough (~4GB) to be easy to iterate on (English is ~650GB)
    - caveats:
      - [we need to provide rel=canonical  for search engines because latest snapshots do not have it yet](https://github.com/ipfs/distributed-wikipedia-mirror/issues/65)
      - would be good to not using custom zim tool, the fork we use is pretty old and [produces errors with latest ZIM snapshots](https://github.com/ipfs/distributed-wikipedia-mirror/issues/60#issuecomment-546905445)
      - our custom steps need lots of work (#21, #35)
- Chrome OS socket API patches that whitelist ipfs-companion access to `chrome.sockets` 
    - General framework for whitelisting started in: https://github.com/brave/brave-core/pull/106
    - Grant access to chrome.sockets APIs for IPFS companion: https://github.com/brave/brave-core/pull/2050
    - Override manifest on the fly when Companion is installed from Chrome web Store: https://github.com/brave/brave-core/pull/2702
- ipfs-cohost: implementing support for "lazy" and "full" cohosting spec in https://github.com/ipfs-shipyard/ipfs-cohost/pull/5
- Awesome IPFS (https://github.com/ipfs/awesome-ipfs)
  - lacking owner
  - help with PR reviews needed
    - should write up a set of criteria to help with PR triage

## Team Updates

> Details of past week's work is are published in notes of [IPFS Core Implementations Weekly Sync](https://github.com/ipfs/team-mgmt/issues/992)
