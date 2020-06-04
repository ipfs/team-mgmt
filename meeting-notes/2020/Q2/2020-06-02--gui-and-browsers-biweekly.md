 # GUI and In Web Browsers 2020-06-02

A biweekly discussion and show & tell around IPFS GUIs and Web Browsers

* Details: https://github.com/ipfs/team-mgmt/issues/790

## Participants

- @vasco-santos
- @andrew
- @jacobheun
- @gozala
- @rafaelramalho
- @jessicaschilling 
- @hugomrdias 

## Recording

 - https://youtu.be/9xaIlChnO7s 
 
 
## Agenda

- Third-party pinning integration in Desktop/Web UI is being kicked off (or at least stubbing out the UX): 
    - High-fidelity screens are [here](https://www.figma.com/file/MMpxyvNREVFecxbw3ZVzK2/WebUI-Desktop-Pinning-Hi-Fi-Screens-Settings?node-id=0%3A1) and [here](https://www.figma.com/file/4cYoTNbjnnV7I7qeOEhjg8/WebUI-Desktop-Pinning-Hi-Fi-Screens-Files?node-id=0%3A1)
    - GitHub epic is [here](https://github.com/ipfs-shipyard/ipfs-companion/issues/888)
- "How do you use IPFS GUI tools" survey garnered [56 responses](https://docs.google.com/forms/d/1YWVELaXHtXxSfaNd8ZcvxtnEOqurTxJdodlAl2qwyMc/edit#responses)
    - Companion extremely popular; Desktop a bit more of an "often or never" duality; Web UI peaks at "sometimes/often"; CLI fairly universally used 
    - This aligns with most respondents saying they're using IPFS for learning/hacking, BUT interesting to note that motivation nearly ties for first with publishing websites/articles/etc ("sharing files" took third place)
    - Best-loved features: Visual indicators for network traffic and bandwidth, right-click actions, drag-and-drop
    - TLDR: Many people use these tools for many very different reasons! May be best to proceed with this to create a handful of funnels/journeys based on stakeholder type: no clear "winner" here
- [Subdomain support for CIDs longer than 63](https://github.com/ipfs/go-ipfs/issues/7318)
    - **Note:** we are still exploring and evaluating proposals, we may decide there is a better (less invasive to the CID representation) way to do this, expect updates in following weeks
    - PR with a proposal to [split long CIDs into labels of max 63 characters](https://github.com/ipfs/go-ipfs/pull/7358)      
    - Proposal: [Switch to base36 by default in all text output?](https://github.com/ipfs/go-ipfs/issues/7357) (vs only for IPNS)
        - `bafy..` (b32) vs `k2..` (b36
- Libp2p upcoming work
    - libp2p@0.29 [libp2p/js-libp2p#654](https://github.com/libp2p/js-libp2p/issues/654)
    - libp2p@0.30 [libp2p/js-libp2p#655](https://github.com/libp2p/js-libp2p/issues/655)

## Highlights

> Details of past week's work are published in notes of [IPFS Core Implementations Weekly Sync](https://github.com/ipfs/team-mgmt/issues/992). This section includes a subset  work, such as releases and announcements.

- ipfs-companion 
    - [v2.11.0.923](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.11.0.923) (Beta)
    - [v2.12.0](https://github.com/ipfs-shipyard/ipfs-companion/releases/tag/v2.12.0) (Stable)
- ipfs-webui [v2.9.0](https://github.com/ipfs-shipyard/ipfs-webui/releases/tag/v2.9.0)
