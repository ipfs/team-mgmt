# IPFS All Hands Call November 26th, 2018

-   **Moderator:** @pkafei
-   **Notetaker:** @lidel
-   **Attendees:**

    -   _@alanshaw_
    -   _@jonnycrunch_
    -   _@jaycarpenter_
    -   _@Mr0grog_
    -   _@aschmahmann_
    -   _@stebalien_
    -   _@MattOber1_
    -   _@lidel_
    -   _@jamiew_

  


**Moderator checklist**

-   Ensure that there is a notetaker
-   Start recording
-   Call for additional agenda items

  


**Agenda**

_General discussions, decisions, etc._

-   Announcement: libp2p seeking feedback on[draft roadmap doc](https://docs.google.com/document/d/1Rd4yNw1TNQBvfRrKeEMSTseb6fvPzS-C--obOn0nul8/edit#heading=h.bbb5kq80e8n)

    -   Mike Goelzer presented[libp2p roadmap v0.0.2](https://docs.google.com/document/d/1Rd4yNw1TNQBvfRrKeEMSTseb6fvPzS-C--obOn0nul8/edit#heading=h.bbb5kq80e8n)

        -   Current stage: aggregating ideas (no dates, priorities yet)
        -   Ask for everyone: if you depend on libp2p provide feedback via comments to the doc, if something is missing or is important for your WG add comment
        -   Next: identify 5 key milestones for 2019
        -   Your feedback: make comments in the roadmap doc, or reach out (<mailto:libp2p@libp2p.io> or #libp2p on Freenode)

  


**Main Talk**

-   **IPFS Live Streaming**_Our Networks 2018_ Case Study)  
    by Yurko, Elon and Benedict from Toronto Mesh

    -   Repository with all the details:<https://github.com/tomeshnet/ipfs-live-streaming> 
    -   Small conference ~100 people with limited AV budget
    -   2 months to set things up, decided to prototype streaming over IPFS that is:

        -   Scalable and cost-effective
        -   Can be reproduced every year

    -   Stack: HDMI capture, OpenVPN, NGINX with RTMP module, FFmpeg, IPFS, Video.js, Terraform
    -   HLS: HTTP Live Streaming

        -   Sequence of chunks described by a playlist
        -   Chunking live stream, putting chunks on IPFS

            -   Can be accessed over IPFS or via HTTP Gateway

        -   Playlist manifest changes every ~20seconds, which created challenges

            -   Turns out IPNS was not fast enough to propagate changes, pubsub had issues at the time so IPNS got removed from the scope of MVP
            -   Single Playlist hit limitations, switched to multiple playlists and additional recovery logic

        -   (live demo)<https://live.mesh.world/> (worked great!)
        -   Post-processed Our Networks 2018 videos are pinned on IPFS, played via same player[ https://ournetworks.ca/conference/recorded-talks/](https://ournetworks.ca/conference/recorded-talks/)

-   Two incredible bonus demos:

    -   Streaming from Raspberry Pi Camera to IPFS ([link](http://node2.e-mesh.net/ipfs-player/?url=https://ipfs.io/ipns/QmT9Yp9zMGxDHiFpeATYnbyMwJsihm5m42iGJFH3S5uWmt))

        -   <https://github.com/tomeshnet/prototype-cjdns-pi> 

    -   Radio Streaming over IPFS ([link](http://node2.e-mesh.net/ipfs-player/?url=https://ipfs.io/ipns/QmPgA3ozEpdBXK7oUSvPL1GU6t7vZja6KunAGbKEUaGoNi))

-   &lt;Applause>
-   **Q&A**

    -   _Q(@jonnycrunch):is there a threshold for running this?_

        -   A: In theory scalability should not be an issue at all, initial source mirrors that expose public gateway are also IPFS nodes, can spawn more of them + the rest is handled by IPFS itself

    -   Q(@daviddias): Would it be possible to transcode on the fly to multiple resolutions?

        -   A: Yes, different resolutions are supported by HLS, but you basically split your CDN and may need to duplicate big chunk of the pipeline for each format/resolution.

    -   If you have any questions you can ask the tomesh chat:

        -   <https://chat.tomesh.net/#/room/#tomesh:tomesh.net>

-   Thank you!
