## IPFS All Hands Call July 29th, 2019



*   **Moderator:** jimpick
*   **Notetaker:** $NOTETAKER
*   **Attendees:**
    *   _attendee names…_
    *   _@alanshaw_
    *   _@jaycarpenter_
    *   _@vmx_
    *    _@MattOber1_
    *   _@yiannisbot_


**Moderator checklist**



*   Ensure that there is a notetaker
*   Start recording
*   Ask attendees to add their names to meeting notes
*   Call for additional agenda items

**Presentation: [Supporting Web Archiving via Web Packaging](https://www.slideshare.net/ibnesayeed/supporting-web-archiving-via-web-packaging)**

**Speaker: Sawood Alam @ibnesayeed**

**Notes**



*   From Old Dominion University
*   Web Packaging … not currently suitable for archiving
*   Web Packaging will “bundle” a bunch of web requests and deliver them to a web browser in a single signed exchange
*   Signing is different from encryption
*   Signing is more suitable for non-private communication
*   WARC is a format for storing request/responses for archiving
*   Largest crawling tool is Heritrix from Internet Archive - misses a lot of resources (doesn’t recognize JavaScript) - other tools archive more, but are slower
*   Server side rewriting … archives need to be modified to be played back on different origins
*   Proxy based rewriting is another approach where it appears transparent to the user (eg. oldweb.today)
*   Archives are often displayed in ways in which they never existed
*   It would be great is browsers natively supported “Memento Timegate”
*   Proposals: TimeGate/Named Cache for Loading
*   Fixity - no way to prove non-repudiation (eg. Internet Archive was accused of modifying an archive)
*   Signed Exchanges only last for 7 days
*   Temporal validations: verify that a signature was valid in the past
*   Would also like native Memento support in web browsers

**Demos**

_Show your work!_

**Q&A, Help Wanted**

_Ask questions, get answers. Announce issues that need help, get people to help._
