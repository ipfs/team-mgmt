# ⚡️ⒿⓈ Core Dev Team Weekly Sync 🙌🏽 (Mid Quarter Review) August 13, 2018

- **Lead:** David Dias
- **Notetaker:**
- **Attendees:**
  - _@travisperson_
  - _@mkg20001_
  - _@achingbrain_
  - _@jacobheun_
  - _attendee names..._
- **Recording:** https://youtu.be/yBzkjM1jJV8

## Agenda

- Ask everyone to put their name into the list of attendees
- Ask for a Notetaker
- Mid Quarter OKR Review Day

## Notes

** npm on ipfs **
* Follow up with infra team on getting a machine/container setup so that we can run npm on ipfs.
	* Potentially run a local node pointing at an s3 bucket for block storage
  * Concerns around reliability of the deploy rather than running locally

** iptb **
* Hoping to decrease the scope of the current PR to allow the existing (core) changes to move forward, then focus on plugins later
  * Lots of code changed so the PR has been dragging along, overall it's going well.
  * @daviddias showing demos of your work can help get things pushed forward sometimes. 
  * There is one! Link forthcoming!
  
** libp2p **
* Focus on higher priority items while we start discussions with the go team on the items that need cross cutting discussions (api for the libp2p daemons as an example)

#### Waffle Review

![](https://ipfs.io/ipfs/QmTFG5mH3ADirgoD5WopSNRBFcwoYbLmbAaeEdsiaPEg2M)


@vmx
 - Done:
   - https://github.com/vmx/dagbuilder
   - FOSS4G Conference talk preparations
 - Blocked: nope
 - Next:
   - GraphSync
   - FOSS4G Conference talk preparations


#### js-ipfs
https://docs.google.com/spreadsheets/d/19vjigg4locq4fO6JXyobS2yTx-k-fSzlFM5ngZDPDbQ/edit#gid=274358435

**@alanshaw (not attending)**

- **A Daemon runs for 10 days without a crash**
  - Done
    - Improper validation of inputs can crash the daemon. It's unlikely to have fixed every problem, but it's a start [#1506](https://github.com/ipfs/js-ipfs/pull/1506) and [#232](https://github.com/libp2p/js-libp2p/pull/232)
  - Todo
    - Setup a public facing js-ipfs daemon and see how long it lasts. Hook it up to an error reporter and address the errors that cause crashes
    - Identify, test, and fix more of the causes of crashes. I have so far:
      - Improper input validation
      - `throw new Error` instead of `callback(new Error)`
      - Double piping aka "Already piped" - [yes still an issue](https://github.com/ipfs/js-ipfs/issues/1446#issuecomment-411402398)
- **js-ipfs fully support uses base32 CIDv1 by default**
  - Done
    - I'm following the activity from @kevina wrt this work for go-ipfs
    - No further progress other than baby steps towards goal [#1441](https://github.com/ipfs/js-ipfs/pull/1441)
  - Todo
    - Step 1 - allow CID base as option, dual check in blockstore/bitswap for requested CIDs (after adding interop tests for CID retrieval)
    - Step 2 - change default to base32 CIDv1
    - See https://github.com/ipfs/js-ipfs/issues/1440#issuecomment-407343797
- **Cut CI testing time in js-ipfs and js-ipfs-api by 50% (2x)**
  - Done
    - Proposed a new pipeline that would mean tests complete faster [#73](https://github.com/ipfs/testing/issues/73). Sadly this is **BLOCKED** on a Jenkins issue
  - Todo
    - Helping @mkg20001 to land re-usable private keys [#1485](https://github.com/ipfs/js-ipfs/pull/1485)
    - Identify and resolve more bottlenecks that are causing the tests to take so long



Following dweb summit I've been spending some time implementing a MDNS discovery and TCP transport that uses **libdweb**:

* https://github.com/alanshaw/js-libp2p-webext-mdns
* https://github.com/alanshaw/js-libp2p-webext-tcp

These can be used with the embedded js-ipfs node that runs in IPFS companion to give it basically the same powers as js-ipfs running in Node.js. Obviously this includes local network discovery of JS or Go nodes but also p2p communication without websockets. This would be so AWESOME.

I think it's important that these libp2p modules exist for IPFS and I think that IPFS (the organisation) using, testing and approving libdweb will hopefully make it a little more likely to be accepted into Firefox and then maybe adopted by Chrome and others.



#### js-libp2p
https://docs.google.com/spreadsheets/d/1HTXfgR5FyPTFhsTkFPRThkeMvHvCgJOaAs7BSl_vQ_0/edit#gid=1241853194

@vasco.santos (Not Attending)

- Done: 
  - service-worker-gateway: stats page with repo size friendly
    - https://github.com/ipfs-shipyard/service-worker-gateway/pull/26
  - js-ipns: add public key support
    - https://github.com/ipfs/js-ipns/pull/4
  - js.ipfs.io
    - several PRs tested and reviewed
  - js-ipfs
    - IPNS Working locally ready \o/ 
      - https://github.com/ipfs/js-ipfs/pull/1400
    - js-ipfs repo interop
      - https://github.com/ipfs/js-ipfs/pull/1496
  - js-ipfs-repo
    - Fix interoperability with go
      - https://github.com/ipfs/js-ipfs-repo/pull/173
  - interop
    - Repo (should be working with the new version of js-ipfs)
      - https://github.com/ipfs/interop/pull/29
    - IPNS (should be working with the new version of js-ipfs)
      - https://github.com/ipfs/interop/pull/26

- Blocked: 
  - N/A

- Next:
  - on holidays in this week and in the next one
    - come back on the 27th
    - possibly unreachable on the Internet until the 20th
    - for contacting it is preferred Slack


#### js-ipld
https://docs.google.com/spreadsheets/d/1Lfd91hi3nFlLRS1r-FHvK2ip2Ll6ukraufCgepw43bw/edit#gid=221584476


#### List everyone's remaining availability

7 Weeks left - 35 days total (assuming a 5 day work week)

Actual availability (discard holidays, confs planned and any scheduled event that will block you from focusing on the OKRs work)


| Name   | Actual (days) | 60% |
|--------|---------------|-----|
| David  | 20            | 12  |
| Alan   | 29            | 17  |
| Hugo   |               |     |
| Alex   | 28            | 16  |
| Travis | 35            | 21  |
| Jacob  | 34            | 20  |
| Vasco  | 25            | 15  |
| Volker | 22            | 13  |


<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->
