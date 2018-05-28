# ⒿⓈ⚡️  js-ipfs Core Dev Team Weekly May 28, 2018

- **Lead:** David Dias (@diasdavid)
- **Notetaker:**
- **Attendees:**
  - @dryajov
  - @fsdiogo
  - @vasco-santos
  - @hugomrdias
  - @vmx
  - @travisperson
  - @gpestana
- **Recording:** _add link to recording once it's online_

## Agenda

- Ask everyone to put their name into the list of attendees
- Round of updates
  - What have you accomplished since the last Weekly?
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
  - What is the next important thing you should focus on?
- Ask for general questions. Could be things like:
  - I'm stuck with something, I don't know who to ask. Who knows who to ask?
  - Who can help me with xyz?
- Plan this week
  - Select issues to work on
- Review remaining issues if there is time left

## Notes

@daviddias 
 -	Next release (0.29) by Wednesday if everything goes well
  
@vmx
 - Next up finish the Flow Typing
 - Conferences and some other things coming up the next two weeks - might not be always available
 - Priority is to focus on GraphSync
  
@dryajov
 - Drop notes about NAT traversal using upnp and pmp on issue created.

@fsdiogo
 - Suggestion: isolate possible error cases and create script to automate testing, instead of just manually trying all options. This way it is easier to test things out in the future. (context?) 

@hugomrdias
 - Connection management repo maintainer?
 - Setting up test bed for big files testing might be ready in next 1/1.5 weeks
 - It would be cool to have the visuals (context?) more available to developers.
 
@mkg20001
 - It would be useful to see more demos - even if it ends up beign similar to previous ones.
 - Discuss with @diasdavid about more issues to work on!

### Week Update

@diasdavid
  - Done:
   	- Back to PR & M review extravaganza 
    - Last preparations for js-ipfs 0.29 (testing, highlights, testing other projects)
  - Blocked:
    - n/a
  - Next:
  	- Release 0.29 by Wednesday
    - Enable the DHT by default (let the testing begin!)
    - Update the DHT PR https://github.com/ipfs/js-ipfs/pull/856
    - Finish up the libp2p config revamp PR https://github.com/libp2p/js-libp2p/pull/166

@vmx
 - Done:
   - Flow typing
   - Add custom codecs to js-multicodec
 - Blocked: No
 - Next:
   - GraphSync
   - Flow typing
   - 2 weeks limited availability
   
@alanshaw (not attending)
 - Done:
   - All PRs for 0.29 are now merged, release imminent!
   - Reviewed [bitswap PRs](https://github.com/ipfs/js-ipfs/pull/1349)
   - Looked into issue with big.js using esmodules breaking our build, [submitted a PR](https://github.com/ipfs/js-ipfs/pull/1364) so other modules don't also break us
   - Found an [issue with the ping tests](https://github.com/ipfs/js-ipfs/pull/1342/commits/1c8eccf6e068301e30d02c2d4a58bbe0f901b75f) - pings can take less than 1ms to pong - tests were assuming they would take at least 1ms
   - Resolved a few issues
     - [Java IPFS API client calls wrong HTTP endpoint](https://github.com/ipfs/js-ipfs/issues/1362)
     - [`ipfs-pubsub-room` unsubscribes pubsub handlers after IPFS node is stopped](https://github.com/ipfs/js-ipfs/issues/1330)
     - [Not all routes are available when using gateway.ipfs.io with `js-ipfs-api`](https://github.com/ipfs/js-ipfs-api/issues/779)
   - [Submitted a PR for passing your own IPFS API constructor to `js-ipfsd-ctl`](https://github.com/ipfs/js-ipfsd-ctl/pull/261) - it means that we eventually won't have to wait for PRs for upgrading `js-ipfs-api` to be merged in `js-ipfsd-ctl` for the tests in `js-ipfs` to pass
 - Blocked:
   - `null`
 - Next:
   - Release 0.29
   - Currently reviewing [pin PR](https://github.com/ipfs/js-ipfs/pull/1045)
   - Review/merge Node.js 10 PR


@dryajov
 - Done:
   - Initial implementation of nat traversal using upnp and pmp here - https://github.com/dryajov/js-libp2p-nat-mngr
 - Blocked:
   - N/A
 - Next:
   - create a 'dialme' protocol to take full advantage of nat mapping
   - integrate nat mapping with libp2p

@vasco-santos
 - Done:
   - Released js-ipfs-http-response initial version
     - https://github.com/ipfs/js-ipfs-http-response
   - Released service-worker-gateway initial version
     - https://github.com/ipfs-shipyard/service-worker-gateway
   - PR integrating service-worker-gateway into js.ipfs.io
     - https://github.com/ipfs/js.ipfs.io/pull/3
   - PR deploy for js.ipfs.io
     - https://github.com/ipfs/js.ipfs.io/pull/4
 - Blocked:
   - N/A
 - Next:
   - Have js.ipfs.io with service worker live
   - Service worker gateway stats page (In Progress)
     - Release new version
   - Integrate js-ipfs-http-response into js-ipfs
   - js-ipfsd-ctl Issues and PRs

@fsdiogo
- Done:
  - Lisbon Hack Week
  - Finished Files Exchange Example
    - [https://github.com/ipfs/js-ipfs/pull/1343](https://github.com/ipfs/js-ipfs/pull/1343)
- Blocked:
  - N/A
- Next:
  - Improve js-ipfs error handling

@hugomrdias
 - Done:
   - Lisbon Hack Week
   - aegir babel, webpack, karma improvements
   - aegir flow support
 - Blocked:
 - Next:
   - build test bed for big files testing

@mkg20001
 - Done:
   - Removed bug-feature self-dialing in js-libp2p-switch: https://github.com/libp2p/js-libp2p-switch/pull/256
   - Fixed some typos in js-libp2p-circuit: https://github.com/libp2p/js-libp2p-circuit/pull/25 https://github.com/libp2p/js-libp2p-circuit/pull/24
   - nodetrust: Remote DNS feature
 - Blocked: N/A
 - Next:
   - nodetrust: Add tests


### Questions

- (from last week) Why not release `1.0.0` of our modules? (@diasdavid to clarify)
  - https://github.com/jbenet/random-ideas/issues/35
  
R: Modules may be feature compliant but since IPFS is still alpha, it's better to not release 1.0.0+ modules to avoid confusion.
  
- ws-star: Shouldn't it be dead half a year ago? Should it be still maintained? (@mkg20001)

R: ws-star is still useful in certain scnarios and it is still being used. There must be some migration plan in place in the future before total discontinuation.

- public gateways: use something like https://sentry.io to track errors more efficently? (@mkg20001)

R: Infra repo documentation should have more information on what tools are being used at the moment. Suggestions/discussion open issue on repo

### Other notes

- The number of issues on `Inbox` -- https://waffle.io/ipfs/js-waffle -- are pilling up. Lead Maintainers, please label the issues accordingly. (@diasdavid)

Suggestion: Everyone would take 10m or so per day to curate their issues, to reach waffle-zero :)

<!-- After each call, the notetaker submits a PR to ipfs/pm to store the notes on the meeting-notes folder -->

