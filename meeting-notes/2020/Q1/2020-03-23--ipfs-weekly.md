# IPFS All Hands Call Mar 23 2020

-   **Moderator:** @alanshaw
-   **Notetaker:** @willscott
-   **Attendees:**
    -   __@jaycarpenter__
    -   __@lidel__
    -   __@willscott__
    -   __Matt Ober__
    -   __@andrew__
    -   __@jessicaschilling__
-   **Video:** https://youtu.be/08zD9L3hBLg

**Agenda**

_General discussions, decisions, etc._

-   Connecting the Metaverse with IPFS - Jin[@dankvr](https://twitter.com/dankvr)

    -   <https://hackmd.io/@XR/motivation>

        -   We’re getting closer to living in a massive, persistent digital reality adjacent to our own. That digital reality is often owned by a single corporate entity. An open metaverse is a moral imperative.
        -   They’re starting off on trying to extend the web / internet. There are points of centralization there in both unity (for 3d rendering) and chrome for web.
        -   99.9% of “social VR” is currently built with a non-free engine.

    -   WebXR is positioned as an open answer to this problem space

        -   <https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API>   
            <https://www.w3.org/TR/webxr/>
        -   Can open portals to IPFS hosted worlds
        -   IPFS assets - images, models, etc, can be used within the spaces
        -   Demo: dragging an IPFS-backed asset out of the web UI into a VR world

            -   JanusXR:[https://janusxr.org/](https://janusvr.com/)

        -   Demo: spacialize a 2D conference presentation into a 3d world.

            -   [@jacobheun presenting on libp2p circuit relays](https://vimeo.com/312827390)

        -   Group: m3 (metaverse makers mixer)

            -   <https://github.com/M3-org/research#research>
            -   <https://github.com/M3-org/awesome-metaverse>
            -   33 people met a virtual reality modeled off of eth denver physical space

    -   Connecting metaverse & IPFS

        -   Virtual worlds currently try to do everything (api, avatar, world, storage, market), and create their own silos
        -   VR Chat is the largest social VR platform at the moment
        -   <https://exokit.org/> - Tools for virtual worlds in the browser. Works on all headsets.
        -   The imagination is different overlays for the different layers - an avatar layer, etc.
        -   Imagine AR goggles for the social layer on top of a virtual reality world
        -   You can see holograms of people that are chiming in from the browser into your VR world without modifying the client.
        -   They’ve got all the tech: WebXR, OpenXR, GLTF, Wasm, IPFS, ETH. but they haven’t completed ‘the webaverse’ yet.

            -   discussions occurring in mozilla hubs (<https://hubs.mozilla.com>)
            -   A japanese XR event coming up soon - to replace canceled conferences due to covid

                -   6 months ago they had an ‘expo’ with 600 exhibitors across 14 worlds. Provided templates. Mostly commerce for avatars and wearables.

                    -   Had 125,000 visitors

                -   “Virtual market 4” in one month. 1,400 exhibitors
                -   Jin will be hosting a virtual field trip.
                -   Don’t need VR, can visit in ‘desktop mode’
                -   These occur in ‘VR Chat’

            -   IPFS provides the data layer
            -   Already good enough to act as a shared whiteboard
            -   Consider: a virtual expo for the IPFS ecosystem
            -   Advantage: can teleport back to the conference world from 6 months ago.
            -   Currently many booths have QR codes for a backend payment processor. Jin wants to more seamlessly integrate eth for the web3 community.
            -   WebXR can be both the creation and distribution platform.


**Q&A, Help Wanted**

_Ask questions, get answers. Announce issues that need help, get people to help._

-   What is WebXR browser support like now?

    -   Oculus / other headsets out at the moment - you can visit a link and go into ‘VR mode’. It connects headsets to the browser. There should always be desktop support as well.

-   EXOkit - is that like VRChat?

    -   It’s a ‘meta’ layer - with exokit in any VR world, it’s like you have AR on in your virtual world. To go to a different world would be a different experience. Exokit is trying to treat everything as a holographic layer that can composite together.

-   Should we do a VR meetup?

    -   It takes a couple days of planning
    -   Meeting up in hubs is a good first step.
    -   If companies need booths, the model can be providing templates, and then offering services to customize - but that asset can then be re-used at other events.

-   Best way to contact Jin:

    -   Discord: jin#6455
    -   Twitter:[@dankvr](https://twitter.com/dankvr)
