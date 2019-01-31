# GUI & In Web Browsers Weekly Sync 2019-01-30

- **Recording:** https://youtu.be/ywau3JGKO68 or https://ipfs.io/ipfs/bafybeifcuqrcfvl5lqhj5hopk556wmx23fhqcksyfxxjxk7snkndgeqaha/
- **Moderator:** @lidel
- **Notetaker:** @fsdiogo
- **Attendees:**
    - _@lidel_
    - _@terichadbourne_
    - _@jimpick_
    - _@alanshaw_
    - _@fsdiogo_
    - _@hugomrdias_
    - _@hacdias_

**Moderator checklist**

- Ensure that there is a notetaker
- Start recording
- Call for additional agenda items

**Agenda**

- Team updates
- @alanshaw DEMO iim (ipfs install manager)

**Team Updates**

@alanshaw

- Done:
    - Worked on upgrade to hapi 18 <https://github.com/ipfs/js-ipfs/pull/1844>
        - `ipfs.add` response not buffered!
        - net removal of over 800 LOC
    - Fix to js.ipfs.io - still using old files API <https://github.com/ipfs/js.ipfs.io/pull/241>
    - Working on nvm/nave thinger
- Next:
    - Continue CID v1 base32 default work - step 2 here - <https://github.com/ipfs/js-ipfs/issues/1440#issuecomment-407343797>

@lidel (nobody expects the order change!)

- Done:
    - Brave
        - We now have a dedicated “ipfs” branch in Brave for integration work
        - Local brave build (stats with i7-4770S and spinning disk: debug ~4h, release ~6h)
        - Confirmed access to chrome.sockets API is possible, created HTTP server from webextension context, wrote down steps for local dev with unpacked extension - [ipfs-companion/issues/664#comment](https://github.com/ipfs-shipyard/ipfs-companion/issues/664#issuecomment-457711855)
    - Improving ipv6 support in Companion:
        - Bug:[Companion: localhost ipv6 address parsing adds extra brackets](https://github.com/ipfs-shipyard/ipfs-companion/issues/668)
            - Fix:[stream-http: Fix IPv6 hostname normalization](https://github.com/jhiesey/stream-http/pull/104)
        - Opened[js-ipfs: Broken terminal output with API and Gateway on ipv6](https://github.com/ipfs/js-ipfs/issues/1853)
        - Opened[js-ipfs: Support exposing API/Gateway on multiple multiaddrs](https://github.com/ipfs/js-ipfs/issues/1852)
    - In other news:[Firefox 65 shipped](https://hacks.mozilla.org/2019/01/firefox-65-webp-flexbox-inspector-new-tooling/)with support for[ReadableStreams](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_streams), allowing us to process data chunk by chunk as it arrives over the network.
    - Debugging slow firefox start
- Next:
    - Companion Beta release
    - FOSDEM!

@hacdias

- Done:
    - Fix operations when IPFS is not running.
        - <https://github.com/ipfs-shipyard/ipfs-desktop/pull/796>
    - More i18n strings.
        - <https://github.com/ipfs-shipyard/ipfs-desktop/pull/797>
    - Moved the ‘Quit’ option to the end to match other apps.
        - <https://github.com/ipfs-shipyard/ipfs-desktop/pull/802>
    - ‘Add to IPFS’ on Windows context-menu!!
        - <https://github.com/ipfs-shipyard/ipfs-desktop/pull/798>
    - Improve notifications (more colour and glamour)
        - <https://github.com/ipfs-shipyard/ipfs-desktop/pull/805>
    - Handle ipfs://, ipns:// and dweb: at OS-Level.
        - Works well on Windows.
        - Works correctly on macOS**if**IPFS Desktop is running.
        - <https://github.com/ipfs-shipyard/ipfs-desktop/pull/808>
    - Blindly coding: drag and drop files to macOS tray:
        - <https://github.com/ipfs-shipyard/ipfs-desktop/pull/810>
        - **Need someone to try it out please!**
- Next:
    - FOSDEM
    - OOO between the 5th and 15th

@fsdiogo

- Done:
    - Extract IPLD formats from ipld-explorer-components
        - <https://github.com/ipfs-shipyard/ipld-explorer-components/pull/14>
    - Support older style links \`{ “/“: Buffer }\` until IPLD formats are updated
        - <https://github.com/ipfs-shipyard/ipld-explorer-components/pull/15>
    - Update Web UI with latest IPLD api changes
        - <https://github.com/ipfs-shipyard/ipfs-webui/pull/948>
    - Update IPLD Explorer with latest IPLD api changes
        - <https://github.com/ipfs-shipyard/ipld-explorer/pull/47>
    - Shipped the implementations section of the[ ipfs.io](http://ipfs.io) website
        - <https://github.com/ipfs/website/pull/282>
        - <https://github.com/ipfs/website/pull/288>
- Next:
    - Release Web UI with IPLD changes
    - Release IPLD Explorer will changes
    - Web UI v2.4.0

@hugomrdias

- Done:
    - Sick and vacation
    - Catch up with PRs and emails
    - Pullstream-to-stream for Mplex
    - Started looking into proper-lockfile to fix sleep problems
- Blocked:
    - mplex
- Next:
    - FOSDEM
    - proper-lockfile to fix sleep problems

@terichadbourne

- Done:
    - Iterating on UX for new chapter setup for ProtoSchool
- Next:
    - Build ProtoSchool tutorial on File API
        - Would love feedback on my initial proposal for what to cover at: <https://github.com/ProtoSchool/protoschool.github.io/issues/91#issuecomment-456457377>
    - FOSDEM

**Discussion Highlights**

- @jimpick demoed js-ipfs in serverless
- @alanshaw demoed `iim` (ipfs-install-manager)
  - https://twitter.com/_alanshaw/status/1090754167512145920
  - related discussion: [js-ipfs#1563](https://github.com/ipfs/js-ipfs/issues/1563)

**Action Items**

- @all: take a look at <https://github.com/ProtoSchool/protoschool.github.io/issues/91#issuecomment-456457377> and give feedback
