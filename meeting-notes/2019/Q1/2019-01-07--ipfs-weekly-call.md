# IPFS All Hands Call January 7th, 2019

-   **Moderator:** @pkafei
-   **Notetaker:** @olizilla
-   **Attendees:**

    -   _@AddYourNameHere_
    -   _@prfnv_
    -   _@jacobheun_
    -   _@eefahy_
    -   _@olizilla_
    -   _@daviddias_
    -   _@momack2_
    -   _@jaycarpenter_
    -   _@vmx_
    -   _@lidel_
    -   _@arkadiy_
    -   _@hugomrdias_
    -   _@jamiew_
    -   _@nukemandan_
    -   _@terichadbourne_
    -   _@mgoelzer_

**Video:**  
https://youtu.be/9sWKOaBHHOM  

**Main Topic:** Actyx: A case study of how one company uses IPFS in their stack.

**Presenter:** Rüdiger Klaehn

-   Rüdiger Klaehn of Actyx - previously 10 years experience in space industry
-   Actyx

    -   startup founded in 2016
    -    based in Europe, fully distributed.
    -    Digitilsation of manufacturing process
    -   \*not\* building robots
    -   Coordinating all the things that happen in the factory
    -   Use tech to keep human labour competitive with automation
    -   Humans are underrated

-   Actyx OS

    -   OS for Factories
    -   Allow non dist systems engineers to write partition tolerant, distributed apps for factory workflow coordination (empower domina experts)
    -   Using IPFS as the networking stack
    -   Actyx app and “Shop floor board” screen on a super robust android tablet
    -   Actyx hardware in factory hardware din rails (fancy raspberry-pi running go-ipfs are running in industrial hardware, today!)
    -   Small / med factories still using paper based wall charts (the old shop floor board… paper always works, so people need some convincing to move on)
    -   Actyx is live in 7 factories, across 250 devices.

-   Why IPFS?

    -   Content addressed storage helps prove that nothing was tampered with or corrupted, important for industrial use-case
    -   Want to replace paper… need a partition tolerant, resilient solution, hence IPFS.
    -   Using IPFS for storage and distribution of events and deployment of large assets like instruction videos for work steps.
    -   Also using it for app dev, via a private swarm, and as an artifact repository for apps
    -   Using private swarms to keep each customer's data separate from each other.
    -   No longer using IPNS due to issues encountered

-   Devices

    -   Linux based industrial PCs
    -   Android tablets and Barcode scanners (kinda rad, you can scan barcodes from 20m away)
    -   Deploying to Linux VMs on cloud.

-   When talking to customers, they see the direct value of having an offline first app “workers can use barcode scanners when even where the wifi fails” and the robustness of having the app run on site, rather than from a remote / cloud service.


**Agenda**

_General discussions, decisions, etc._

-   _(daviddias)_[An humble attempt to describe all the IPFS Org Planning/Tracking in one picture](https://github.com/ipfs/team-mgmt/pull/820)
-   _(daviddias)_[Proposal: Let's promote the Lead Maintainer to be Org wide](https://github.com/ipfs/team-mgmt/pull/822)
-   _(daviddias)_[Proposal: Create Working Group badges and identify repo ownership with them](https://github.com/ipfs/team-mgmt/pull/824)
-   _(daviddias)_[Please review and finalize your Q1 2019 OKRs](https://github.com/ipfs/team-mgmt/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aopen+OKRs+-+2019)
-   (terichadbourne) There’s now a[weekly sync](https://github.com/ipfs/community/issues/384) for the IPFS Community Working Group. Join us Thursdays at 4:30 UTC if you’re interested.
