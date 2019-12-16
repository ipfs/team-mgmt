# GUI and In Web Browsers 2019-12-11

A weekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790


## Participants

- @lidel
- @hugomrdias
- @jimpick

## Recording

- https://ipfs.io/ipfs/bafybeif7zosi4nxftnndydkoyt2lfa44nhusxcs5yqbwggklr3jr5t7ari/
- https://youtu.be/I8PD5X65wdE 

## Agenda

- Changes coming to ipfs-companion: 
    - [improved experience on DNSLink websites](https://github.com/ipfs-shipyard/ipfs-companion/pull/826)
        - we stopped DNSLink redirect as an experiment in one Beta release, see [here](https://github.com/ipfs/docs/issues/405#issuecomment-562789534) for a wider background 
    - [keeping DNSLink redirect to local gateway](https://github.com/ipfs-shipyard/ipfs-companion/pull/831)
        - decided keep old behavior as the default, but user can now disable redirect of DNSLink websites via Preferences
    - [disable integrations per website](https://github.com/ipfs-shipyard/ipfs-companion/pull/830) (feedback welcome!)
        - made it easier to enable/disable IPFS on a specific website
    - [Chrome Web Store Removal notification for IPFS Companion Beta](https://github.com/ipfs-shipyard/ipfs-companion/issues/832)
        - Google is "hardening" automated checks on their store, slowing down our release process
        - If you want to get the latest version, consider switching to Firefox
        - Chrome version is usually one or two weeks behind :(
- ipfsd-ctl 1.0.0 release 
    - The first "1.0.0" ever in the ipfs org js repos 🎉
    - https://www.npmjs.com/package/ipfsd-ctl
    - See detailed [Release Notes](https://github.com/ipfs/js-ipfsd-ctl/releases/tag/v1.0.0)
        - optimized flow for orchestration of multiple nodes
        - fixed use in browser contexts
            - a lot of previously skipped tests are now possible \o/
            - only scenario that does not work atm is two browser nodes
        - improved control of remote endpoints
        - simplified configuration and overrides
- PSA: no call on 25th and 1st   
    
## Highlights

> Details of past week's work are published in notes of [IPFS Core Implementations Weekly Sync](https://github.com/ipfs/team-mgmt/issues/992)   
> This section includes a subset of past week's work 

- Released
    - [ipfsd-ctl 1.0.0](https://github.com/ipfs/js-ipfsd-ctl/releases/tag/v1.0.0)
