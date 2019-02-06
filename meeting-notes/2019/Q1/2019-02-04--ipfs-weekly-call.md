# IPFS All Hands Call February 4th, 2019

-   **Moderator:**@pkafei
-   **Notetaker:** @jacobheun
-   **Attendees:**

    -   _@alanshaw_
    -   _@jimpick_

_@abhikchowdhury6_

_@jonnycrunch_

_@jaycarpenter_

_@ChrisMatthieu_

  


-   _@skybondsor_
-   _@aschmahmann_
-   _@kishansagathiya_
-   _@terceranexus6_
-   _@nukemandan_
-   _attendee names..._

  


**Moderator checklist**

-   Ensure that there is a notetaker
-   Start recording
-   Call for additional agenda items

  


**Agenda**

**Topic:** The Decentralized Internet and Privacy

**Presenter:** Paula de la Hoz

-   Student, Security, Renaissance Hacker!
-   The presentation will be uploaded later on IPFS

**Q**: You’re a journalist correct? What are the implications of IPFS to journalism.

**A**: IPFS is a potential solution to help prevent losing stories from people in countries where the originals are removed, such as a computer being confiscated

  


**Demos**

_@alanshaw - iim - IPFS Install Manager_[_https://github.com/alanshaw/iim_](https://github.com/alanshaw/iim)

-   Not quite a package manager, but a way to manage the version and implementation (go, js) you have installed
-   Requires nodejs, you can install via npm: \`npm i -g iim\`
-   1 core command, \`use\`, which lets you install and set your default ipfs
-   \`iim use go\` installs the latest version of ipfs go and initializes it
-   \`iim use go 0.4.17\` to install a specific version of go ipfs
-   Once installed you can run your ipfs commands like normal, such as the daemon: \`ipfs daemon\`
-   You can also specify a range, such as \`iim use js 0.33\` to get the most recent patch version of js-ipfs@0.33
-   Once a specific version is installed if you run \`iim use\` again for that version, it won’t install again
-   If you have issues not having access to create a link to the ipfs command you can use \`sudo iim link\` and it will create the symlink without performing the ipfs install again
-   It would be cool if you could use this with another language like python.

    -   If you can put it on npm you can use it. iim currently only uses npm for installation

  


**Q:** How do you verify the authenticity of the binary? Are you validating the signed binary from github?

**A**: Not sure how the go library is managing the binary, the repo would be a good place to look for that. Once the binary is uploaded to npm verification is done through npm. https&#x3A;//www.npmjs.com/package/go-ipfs-dep
