 # GUI and In Web Browsers 2020-02-26

A weekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790

## Participants

- @lidel
- @autonome
- @andrew
- @jacobheun
- @hacdias

## Recording

- https://ipfs.io/ipfs/bafybeigi4jfvlvylw3fdplq5gd4xtykwwyve62op2h5njxvj62efp7h3zm
- https://youtu.be/c7Kb1mjhbcY

## Agenda

- IPFS Team Week takeaways
    - The Future of browsers integrations (Companion and beyond)
        - ipfs-companion
            - redirect to local IPFS node
            - incentivise installation of ipfs-desktop
            - drive browser integrations
    - When do we switch to CIDv1?
        - soft target: go-ipfs 0.6.x
    - DHT in js-ipfs
        - paused until DHT is fixed and stabilizes in go-ipfs
- ws-stardust update
    - PR in review [js-libp2p-stardust/pull/14](https://github.com/libp2p/js-libp2p-stardust/pull/14)
- Targeted Grant (Draft): Native Protocol Handler API for Browser Extensions
    - Published draft: https://github.com/ipfs/devgrants/pull/30
- Unstoppable [demo browser](https://github.com/unstoppabledomains/unstoppable-demo-browser)
- Browser Design Guidelines - need to do final pass, and put blog post together
- Opera - on track for release, but some changes still need to be made. In the final stretch.
- Browsers & Connectivity meetup - currently thinking about timing with IETF 108, Madrid in July
- Hugo testing - should we transition anything to that? Is anything in the [testing matrix](https://hackmd.io/8N-UeohiTFGO9pLhs62J-g) now doable that it exists?
    - most of projects will switch to it from karma runner when [aegir](https://github.com/ipfs/aegir) makes the switch
    - ipfs-companion is waiting for Firefox support ([ipfs-companion/pull/846](https://github.com/ipfs-shipyard/ipfs-companion/pull/846)), we will leverage it for [Manifest V3 work](https://github.com/ipfs-shipyard/ipfs-companion/issues/666) too 


## Highlights

> Details of past week's work are published in notes of [IPFS Core Implementations Weekly Sync](https://github.com/ipfs/team-mgmt/issues/992)   
> This section includes a subset of past week's work 

- Released
    - ipfs companion [v2.10.0.889](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.10.0.889) addressing [Chrome Web Store review](https://github.com/ipfs-shipyard/ipfs-companion/issues/808#issuecomment-590313139)
    - [ipfs-desktop 0.10.3 at Chocolatey](https://chocolatey.org/packages/ipfs-desktop) 

