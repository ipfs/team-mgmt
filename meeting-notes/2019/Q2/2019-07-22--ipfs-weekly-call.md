## IPFS All Hands Call July 22nd, 2019



*   **Moderator:** @jimpick
*   **Notetaker:** @jimpick
*   **Attendees:**
    *   _@ericronne_
    *   _@vmx_
    *   _@lidel_
    *   

**Moderator checklist**



*   Ensure that there is a notetaker
*   Start recording
*   Ask attendees to add their names to meeting notes
*   Call for additional agenda items

**Agenda**

**Presentation: [wab.ca](https://wab.ac/) and **wabac.js

**Speaker: **Ilya Kreymer - [https://github.com/ikreymer](https://github.com/ikreymer)

**Notes**



*   Ilya runs webrecorder.io
*   Hosted web service that records traffic for archiving as the user browsers around
*   Part of a grant funded non-profit called Rhizome
*   Wab.ac is completely client side player for WARC files using service workers
*   Any WARC file can be played back completely in the browser
*   Can play wab.ac inside Internet Archive Wayback machine
*   Also support .har files (built into the browser) - create in Chrome devtools

**Questions**



*   Who is funding? Webrecorder.io grant from Mellon Foundation - files hosted on WebRecorder.io (2 year grant)
*   Data can be stored anywhere and rendered completely in the browser
*   Challenges public vs. private? Webrecorder.io is private by default. Possible for somebody to archive private social media 
*   Client side archiving is not possible yet in a browser without an extension
*   Ibnesayeed: WARCreate is another tool for creating WARC files … missing piece is discovery. Opportunity to integrate IPFS for discovery. - Think it would be ideal to integrate with a separate discovery layer. Integration with js-ipfs would make a lot of sense.
*   Ibnesayeed was in D.C. at the Web Packaging workshop … pages could run as the original domain.
*   All the position papers from the ESCAPE workshop: [https://www.iab.org/activities/workshops/escape-workshop/](https://www.iab.org/activities/workshops/escape-workshop/) 
*   Signed exchanges are good for verification and trust
*   Marcin: If anyone wants to follow, I am gathering notes about different ways of Mirroring  Web to IPFS: [https://github.com/ipfs/in-web-browsers/issues/94](https://github.com/ipfs/in-web-browsers/issues/94)  (started as ideas for our browser extension)
