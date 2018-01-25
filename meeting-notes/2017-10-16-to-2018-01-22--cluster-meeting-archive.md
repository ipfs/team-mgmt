## Standup meeting - 2017-01-22

### Updates since last time

##### @hsanjuan

Last week:

* Reviews
* Finalize replication factor PR and docs
* New approach to Jenkins by binding in random ports for the tests
* Write changelog and captain's log entry for next release
* Testing
* PR to go-datastore to start discussion about Disk Usage reporting
* Pre-release testing of cluster

This week:

* Keep on go-datastore and efficient repo/size implementation
* Finish testing migrations
* Release
* PL stuff

##### @zenground0

Last week: * Connectivity graph
           * attempted to reproduce first of Issue #297 state errors

This week: * get conn graph merged
           * fix second of issue #297 state errors 
              * write peers from the config to new raft snapshot
              * experiment with different default indexes (see if 2 causes other problems)
           * No digest flag
           * with remaining time cluster sharding prep

### Questions, announcements and comments

* wyatt -> hector:
  * Is it common for bootstrapping to fail on a libp2p error?  This consistently happens on the AWS cluster I built for debugging.  However once I add peers manually the cluster connects just fine.
  
  * Is it normal for multiple addresses of a single peer to be written to the config peers field?  This automatically happens on my AWS cluster too:
 
 "peers": [
      "/ip4/127.0.0.1/tcp/9096/ipfs/QmNpTdR8jqQmGPG7UAZTL2HNkzVqpks24Aq9amWA7Br3Qe",
      "/ip4/172.31.62.48/tcp/9096/ipfs/QmNpTdR8jqQmGPG7UAZTL2HNkzVqpks24Aq9amWA7Br3Qe",
      "/ip4/52.90.5.143/tcp/9096/ipfs/QmcqmbFcT6cMuKZkyPEahxiXKkbHeFzHpAwgTDiSBVYTCB",
      "/ip4/172.31.60.163/tcp/9096/ipfs/QmcqmbFcT6cMuKZkyPEahxiXKkbHeFzHpAwgTDiSBVYTCB",
      "/ip4/127.0.0.1/tcp/9096/ipfs/QmcqmbFcT6cMuKZkyPEahxiXKkbHeFzHpAwgTDiSBVYTCB"
    ],

  * Do we want cleanup command to wipe peers or leave them in raft snapshot metadata?  I'm leaning towards leaving them in (different from current) but could imagine wanting to wipe peerstate too.  Maybe a --hard` or --wipe-peers` flag for `state cleanup`?
  
  * The sharding RFC has not gotten any comments.  Is there a point where we plow ahead without input?  Any ideas on how to get people to read it?
  
  * What do you think about trying to get a meeting with juan soon?  There are a few key things he can give us feedback on right now: OKRs, sharding RFC, composite use cases, the envisioned role of ipld selectors in cluster.   It will probably be hard to get the time we need, but I think it's probably worth trying. 
### Other business


---
## Standup meeting - 2018-01-15

### Updates since last time

##### @hsanjuan

Last week:

* RFC sharding review
* Snapshots PR and testing
* Jenkins jenkins jenkns
* Replication factor PR

This week:

* Code reviews
* Finish replication factor PR
* Tag new release


##### @zenground0

Last week:
  * Sharding RFC completed and posted in ipfs/notes
  * Harden sharness PR to boost inter-test isolation
  * Connectivity graph up to testing -- ready for CR @hsanjuan

This week:
  * sharding feedback reception
  * Connectivity graph testing
  * no digest flag (Issue #286)
  * With remaining time, begin sharding work that probably won't be affected by feedback: 
    - factoring out dex to its own repo
    - bringing ipfs cmd-kit files to cluster client

##### @FrankPetrilli

Last week:
  * https://github.com/ipfs/kubernetes-ipfs/pull/40 (Docs)
  * https://github.com/ipfs/kubernetes-ipfs/pull/39 (Trigger Server)
  
This week:
  * Incorporated changes to docs from ZenGround0 (thank you!)
  * Incorporating comments on trigger server from hsanjuan
    * Going to try and lib-ify kubernetes-ipfs so it can be called directly from the trigger server.

### Questions, announcements and comments

* @zenground0 -> @hsanjuan.  Thinking about sharding implementation it seems like a lot of work is going to be needed before any of it will be useful.  I'm thinking we might want a long outstanding unmerged branch that we make PRs to, rather than merging a bunch of incomplete things to master.  Then when things are working well (maybe at a halfway point or maybe when everything is finished), we can merge the whole thing to master.  What are your thoughts on this approach?

### Other business


## Standup meeting - 2018-01-08

### Updates since last time

##### @hsanjuan
Last week:

* Protocol Labs stuff
* OKRs
* First approach to fixing slow repo/size function in go-ipfs

This week:

* Sharding RFC review
* Possibly keep working around go-ipfs on a faster repo/size implementation
* 

##### @zenground0
Since last update:
  * New use cases added to PR 
  * Review of composite use case PR
  * A few iterations of sharding RFC
    * POC of multipart HTTP streaming
  * Made `make docker` simple test and added to ci
  * Updated the mapstate migrate_from function for simpler development of new state formats maintaining compatibility

This week:
  * Next round of RFC adjustments
    * hopefully publish to ipfs/notes this week for more feedback
  * Investigate new sharness failures
  * Connectivity graph
  * Any CR as needed
  * Brainstorming other things to work on
    * Could improve testing: harden sharness, https tests
    * Address codeclimate issues, question: where can I find the report of cc issues?
    * metrics
    * fun things: ipfs alerts, ipfs with consul
    @hsanjuan ^^ Any suggestions as to what you most want to see happen from this list, or anything I am missing are appreciated.

##### @FrankPetrilli

Last week:

  - Updated all Kubernetes kube-system pods to v1.8.5
  - Updated all Kubelets to v1.8.5
  - Fixed kube-dns issue (no DNS resolution inside pods)
    - Seems to have crashed during the update and needed a manual restart, something to look for in the future.
  - Created HTTP POST method for test trigger (see trigger-server.go)
    - Long-running request returns all data to the user at finish
  - Closed some issues
  
This week:

  - Make test trigger fit its purpose better
  - Documentation
  

---
## Standup meeting - 2018-01-01

### Updates since last time

##### @hsanjuan

Last week:

This week:

##### @zenground0

Last week:

This week:

##### @FrankPetrilli

Last week:

This week:


### Questions, announcements and comments

* How do you...?
* What is...?

Frank --> Hector
* https://github.com/ipfs/ipfs-cluster/issues/244

### Other business

---
## Standup meeting - 2017-12-18

### Updates since last time

##### @hsanjuan

Last week:
* Sharding RFC review
* A lot of fruitless time spent on jenkins builds
* A couple of small PRs

This week:
* Will be a bit lightweight for me
* Will try to write about composite clusters
* Might work on some easy/medium difficulty features/bugs


##### @zenground0

Last week:
* sharding RFC
* added use cases 
This week:
* any remaining work on sharding RFC
* adding more use case sketches to PR #215
* help with remaining Q4 KRs
  * travis --> jenkins
  * metrics, I can run state size sweep and specify a few others.  Anything else I should be doing here?
  * any bugs that need addressing, Issues #195 (docker zombie), #275 (snapshot not applied), #273 (code quality).  Anything else I should take?


##### @FrankPetrilli

Last week:

* Some timeouts were resolved by updating to Hector's changes in code
* Application still fails in weird ways sometimes.
* Created ugly version of automated test runner
  * Takes a POST and runs the tests, writes output to file.
  * Adding add to IPFS and post link somewhere during "this week"


This week:


* Cleaning up the way cluster init works
  * Cluster init is currently an ugly process to get cluster in state we want to see
  * I'll be working on enforcing cluster state before tests and making it easier to deploy a cluster
* Expect remote test trigger by Q4 as anticipated
* Think we're ready to close the following:
  * https://github.com/ipfs/ipfs-cluster/issues/243
  * Resolving problems with test running and automating I expect to be done within Q4 expectations
  * Documentation within expectations is a stretch goal - likely achievable.


### Questions, announcements and comments

Wyatt --> Hector
1. OKR questions
  A: ipld selectors turned out to be less important for implementing basic sharding than we thought at lab week.  Should I think more about using ipld selectors long term and try to write something up this week?  Should we count this KR in grading as it no longer seems necessary in order to support "Cluster facilitates the handling of large datasets"?
  B: What is the status with jenkins?  Does jenkins support custom scripts yet?  Anything I can do to help?
  C: I want to add the cluster gateway pinning service to the use case document, which repos are best to look through to see your work on this?

2. Sharding question: after addressing any remaining feedback from you, do you think it is worth posting the RFC in ipfs notes and asking for feedback from more of community?  Is ipfs notes the right place?


---
## Standup meeting - 2017-12-11

### Updates since last time

##### @hsanjuan

Last week:

* api client
* use it in cluster-ctl and pinbot
* deploy all that
* fix issues

This week:

* input for sharding RFP
* attempt to get jenkins builds working
* maybe some low hanging fruit from ready list
* maybe flesh out the composite clusters doc

##### @zenground0

Last week:

* cluster-service locking file
* api client review
* elopio's use case added to usecase document in PR #215
* sharding RFC started

This week:

* sharding RFC will probably take most of my time this week
* if time, there are a few things I would like to get to
  * state import/export/cleanup
  * more use cases added to #215
  * dockerfile test
  * connectivity graph
  * documentation issues (error codes, helpful error messages)

##### @FrankPetrilli

Last week:

* Ran different cluster image, seemed to have more success
* Joined new cluster hosts to cluster
  * All in DigitalOcean
* Started troubleshooting problems with cluster tests

This week:

* Resolving problems Hector found here: https://github.com/ipfs/ipfs-cluster/issues/244#issuecomment-349493536
* Fixing timeouts
* Adding automation to running


### Questions, announcements and comments

* v0.3.1 tagged and released

### Other business


---
## Standup meeting - 2017-12-04

### Updates since last time

##### @hsanjuan

* Gateway-cluster pin importing
* Pinbot-related features
* Pinbot-upgrade and deploy

This week:

* api client
* finish pinbot with api client integration
* 0.3.1 release
* testing

##### @zenground0

* Finished state upgrade
* pibot pr looks good
* Did some more ipfs related things:
  * ipfs code reading
  * Automated golang dependecy graph generation (https://github.com/ZenGround0/ipfs-system-map/blob/master/graph-gen.py)
* organized thoughts around ipfs-cluster's upcoming file-chunking

This week:
* more ipfs docs mapping / code reading
* rough draft chunking rfc
* add to use case documentation
* check that cluster is not running when doing a state upgrade
* state export
* continue with connectivity graph

k8s IP for ref: root@138.197.213.212

##### @FrankPetrilli

- Ran primary image from IPFS repo
  - Lots of problems with items not actually pinning.
- Ran Hector's beta versions
  - Same exact problems
  - See https://github.com/ipfs/ipfs-cluster/issues/244#issuecomment-348602102
- Installed onto cluster nodes provided this morning

```
ipfs-cluster-1329609802-b40bq               1/1       Running   0          13m       10.244.3.3     kubernetes-testing-02
ipfs-cluster-1329609802-kh6hz               1/1       Running   0          13m       10.244.1.176   kube.infra.xytel.net
ipfs-cluster-1329609802-n473h               1/1       Running   0          13m       10.244.1.178   kube.infra.xytel.net
ipfs-cluster-1329609802-tw275               1/1       Running   0          13m       10.244.2.3     kubernetes-testing-03
ipfs-cluster-1329609802-wgt29               1/1       Running   0          13m       10.244.4.3     kubernetes-testing-01
ipfs-cluster-bootstrapper-370468057-n2p4c   1/1       Running   0          13m       10.244.1.177   kube.infra.xytel.net

```
```
QmNpHZPPVRRgVbgdtebiZL13whHeC51jiZ4ayLrCwWz4mA | Sees 5 other peers
  > Addresses:
    - /ip4/10.244.1.176/tcp/9096/ipfs/QmNpHZPPVRRgVbgdtebiZL13whHeC51jiZ4ayLrCwWz4mA
    - /ip4/127.0.0.1/tcp/9096/ipfs/QmNpHZPPVRRgVbgdtebiZL13whHeC51jiZ4ayLrCwWz4mA
  > IPFS: QmZSCqUZCp6rykjyGcYtRycs9KKsPAhWyx82dC2GTWtAiZ
    - /ip4/10.244.1.176/tcp/4001/ipfs/QmZSCqUZCp6rykjyGcYtRycs9KKsPAhWyx82dC2GTWtAiZ
    - /ip4/127.0.0.1/tcp/4001/ipfs/QmZSCqUZCp6rykjyGcYtRycs9KKsPAhWyx82dC2GTWtAiZ
    - /ip6/::1/tcp/4001/ipfs/QmZSCqUZCp6rykjyGcYtRycs9KKsPAhWyx82dC2GTWtAiZ
QmT6PF165gdZmkVvad7pbafd4LVtToU9bqPQAYr4n3qAuk | Sees 5 other peers
  > Addresses:
    - /ip4/10.244.3.3/tcp/9096/ipfs/QmT6PF165gdZmkVvad7pbafd4LVtToU9bqPQAYr4n3qAuk
    - /ip4/127.0.0.1/tcp/9096/ipfs/QmT6PF165gdZmkVvad7pbafd4LVtToU9bqPQAYr4n3qAuk
  > IPFS: QmaS9PvpQZN9D2fqgVFJxsp78317ctkxhiK85ZCFGHU7sP
    - /ip4/10.244.3.3/tcp/4001/ipfs/QmaS9PvpQZN9D2fqgVFJxsp78317ctkxhiK85ZCFGHU7sP
    - /ip4/127.0.0.1/tcp/4001/ipfs/QmaS9PvpQZN9D2fqgVFJxsp78317ctkxhiK85ZCFGHU7sP
    - /ip4/159.203.172.245/tcp/4001/ipfs/QmaS9PvpQZN9D2fqgVFJxsp78317ctkxhiK85ZCFGHU7sP
    - /ip6/::1/tcp/4001/ipfs/QmaS9PvpQZN9D2fqgVFJxsp78317ctkxhiK85ZCFGHU7sP
QmUb5U7WChcrmcz7Eov8dME1W65CMGSW1bU2pEGJ9zk2ua | Sees 5 other peers
  > Addresses:
    - /ip4/10.244.1.177/tcp/9096/ipfs/QmUb5U7WChcrmcz7Eov8dME1W65CMGSW1bU2pEGJ9zk2ua
    - /ip4/127.0.0.1/tcp/9096/ipfs/QmUb5U7WChcrmcz7Eov8dME1W65CMGSW1bU2pEGJ9zk2ua
  > IPFS: QmQiVcC3HYYtc2hk12c75UKetNcZhV9CaHtbHoEVFArLcD
    - /ip4/10.244.1.177/tcp/4001/ipfs/QmQiVcC3HYYtc2hk12c75UKetNcZhV9CaHtbHoEVFArLcD
    - /ip4/127.0.0.1/tcp/4001/ipfs/QmQiVcC3HYYtc2hk12c75UKetNcZhV9CaHtbHoEVFArLcD
    - /ip6/::1/tcp/4001/ipfs/QmQiVcC3HYYtc2hk12c75UKetNcZhV9CaHtbHoEVFArLcD
QmXJapK6nW3ypZLrzrSb1P9vZeE7dbMGAjN67DkDyTL8fh | Sees 5 other peers
  > Addresses:
    - /ip4/10.244.4.3/tcp/9096/ipfs/QmXJapK6nW3ypZLrzrSb1P9vZeE7dbMGAjN67DkDyTL8fh
    - /ip4/127.0.0.1/tcp/9096/ipfs/QmXJapK6nW3ypZLrzrSb1P9vZeE7dbMGAjN67DkDyTL8fh
  > IPFS: QmaYxkpdHk3caXuGz5WZQzPyaACKe9k9Q3cThorNvf9hRP
    - /ip4/10.244.4.3/tcp/4001/ipfs/QmaYxkpdHk3caXuGz5WZQzPyaACKe9k9Q3cThorNvf9hRP
    - /ip4/127.0.0.1/tcp/4001/ipfs/QmaYxkpdHk3caXuGz5WZQzPyaACKe9k9Q3cThorNvf9hRP
    - /ip4/159.203.125.11/tcp/4001/ipfs/QmaYxkpdHk3caXuGz5WZQzPyaACKe9k9Q3cThorNvf9hRP
    - /ip6/::1/tcp/4001/ipfs/QmaYxkpdHk3caXuGz5WZQzPyaACKe9k9Q3cThorNvf9hRP
QmXfTkP3poWCLAyWiPBwLmfheHnJdyTGHh94T7AdyibaRK | Sees 5 other peers
  > Addresses:
    - /ip4/10.244.1.178/tcp/9096/ipfs/QmXfTkP3poWCLAyWiPBwLmfheHnJdyTGHh94T7AdyibaRK
    - /ip4/127.0.0.1/tcp/9096/ipfs/QmXfTkP3poWCLAyWiPBwLmfheHnJdyTGHh94T7AdyibaRK
  > IPFS: QmSuurz4W3D4oiaAymWMRwbRfzFre1d2JPZE3jtBoKaNQ5
    - /ip4/10.244.1.178/tcp/4001/ipfs/QmSuurz4W3D4oiaAymWMRwbRfzFre1d2JPZE3jtBoKaNQ5
    - /ip4/127.0.0.1/tcp/4001/ipfs/QmSuurz4W3D4oiaAymWMRwbRfzFre1d2JPZE3jtBoKaNQ5
    - /ip6/::1/tcp/4001/ipfs/QmSuurz4W3D4oiaAymWMRwbRfzFre1d2JPZE3jtBoKaNQ5
QmfUQQcVz4j4p1KUSBhzHDcJqrjndUvfQ1uzcX4ze3RHRY | Sees 5 other peers
  > Addresses:
    - /ip4/10.244.2.3/tcp/9096/ipfs/QmfUQQcVz4j4p1KUSBhzHDcJqrjndUvfQ1uzcX4ze3RHRY
    - /ip4/127.0.0.1/tcp/9096/ipfs/QmfUQQcVz4j4p1KUSBhzHDcJqrjndUvfQ1uzcX4ze3RHRY
  > IPFS: QmcKPPFXdvUdpE9wm3Wh8hzoWSmSnTh7y8JaXjZaVJRim5
    - /ip4/10.244.2.3/tcp/4001/ipfs/QmcKPPFXdvUdpE9wm3Wh8hzoWSmSnTh7y8JaXjZaVJRim5
    - /ip4/127.0.0.1/tcp/4001/ipfs/QmcKPPFXdvUdpE9wm3Wh8hzoWSmSnTh7y8JaXjZaVJRim5
    - /ip4/138.197.3.74/tcp/4001/ipfs/QmcKPPFXdvUdpE9wm3Wh8hzoWSmSnTh7y8JaXjZaVJRim5
    - /ip6/::1/tcp/4001/ipfs/QmcKPPFXdvUdpE9wm3Wh8hzoWSmSnTh7y8JaXjZaVJRim5

```
### Questions, announcements and comments

### Other business

---
## Standup meeting - 2017-11-27

### Updates since last time

##### @hsanjuan

* Got an ipfs/infrastructure branch which I have used to deploy cluster to 10 infra nodes (the ones pinbots uses)
* Got a pinbot branch in cluster with some changes and fixes
* Still have not ingested the pinbot pinset, probably tomorrow

This week:

* Continue preparing cluster for pinbot
* Inject pinbot pinset, make PRs
* Catch up with Wyatt and help finishing the state upgrade PR

##### @zenground0
* state upgrade PR is mostly polished (shutdown-on-remove might need to change?) and ready
* blocking on a sharness test that passes locally but fails on Travis

This week:
* finishing touches on state upgrade
* Dedicate time to planning out chunking in cluster
* Review Hector's infrastructure/pinbot PRs

##### @frankpetrilli

#243 Deploy Kubernetes Cluster with several nodes

There is an existing Kubernetes cluster with several nodes. To add more nodes, I'll need resources, as I have already dedicated all the spare resources I'm willing to donate.

I've discussed this with you in the past, Hector, requesting blank virtual machines be handed off so I may configure them, but I never received a response.

#244 Make the necessary changes to allow running ipfs-cluster tests in kubernetes-ipfs real cluster

The ipfs-cluster tests run on the real cluster, but fail on some particular tests. I'd like some time with either Hector or ZenGround0 to go over the tests and why they may be failing due to not knowing the internals of ipfs-cluster

Making this automatable and remote-triggerable will be an easy enough task - I envision an HTTP POST with a parameter indicating where to send the results on completion.

#245 Work on kubernetes-ipfs documentation, modularization, issues and improvements 

DSL features are documented in https://github.com/ipfs/kubernetes-ipfs/blob/master/readme.md

Regarding running the tests, is this pointed towards public users who are running their own Minikube/Kubernetes, or internal users who want to run tests against the production cluster?

Modularizing the codebase is something I can target for mid-December, as I work to make it automated.

#246 Integrate kubernetes testing in current ipfs-cluster pipeline

With the existing configuration of the Kubernetes cluster, it is already able to be used for ipfs-cluster testing.

Making this a more user-friendly interface comes as part of the automation we are discussing in #244.






### Questions, announcements and comments

* Wyatt to Hector: (also on github) should I modify the default shutdown-on-remove flag to be true in this PR?  I have seen random errors on travis with shutdown-on-remove=false, maybe this is related.  However when switching to shutdown-on-remove=true I also see random errors and hangs, sometimes on the same test (TestClustersPeerRemove).


### Other business

---
## Standup meeting - 2017-11-20

### Updates since last time

##### @hsanjuan

* Couple of small issues (proxy add / rotating backups)
* More travis tests bugfixes
* Prepare 0.3.0
* Release 0.3.0
* work with @elopio on snap builds

* This week: deploy cluster on ipfs gateways, update pinbot. This prob requires a few changes to cluster, but not many big things.

##### @zenground0

* migration PR
  * upgrade only touches raft snapshots, backups unused (snapshot on shutdown)
  * mapstate does its own (un)marshal
  * changed state serialization slightly: version encoded in first byte
  to make it possible to decode any version serialization intelligently
  * state interface "Restore" function changed behavior to make things work with unmarshal not returning a reader
  * libp2p-raft bug blocking completion (see PR #30)
  * libp2p-raft fixes currently break the transport test when restoring a snapshot.  Looks like restoration doesn't propagate out of the decode state function in the case the state does not do its own unmarshaling.
  
  - @hsanjuan Please check out changes on #220 in ipfs-cluster if you get a chance, I am happy with everything exepct for libp2p-raft dependency PR blocker
 
* some code review for release

* This week: I only have two days this week, I don't expect to do much beyond completing this PR / any code review that pops up


##### @FrankPetrilli


### Questions, announcements and comments

* zenground0: Out this week Wednesday through Sunday.  Happy Thanksgiving!
* zenground0 to hsanjuan: any ideas on resolving libp2p-raft blocker?

### Other business

---
## Standup meeting - 2017-11-13

### Updates since last time

##### @hsanjuan

* Cleared up much of the peerset handling. Remove commit duplicity when changing the peerset. Fixed randomly failing tests.
* Worked on docs
* Code reviews for migrate feature
* User support and a couple of small fixes (better proxy /add)
* https://github.com/ipfs/ipfs-cluster/pull/233 rotating raft state backups

##### @zenground0
* migrate, migrate, migrate!
* Next up: finish migrate, code review of peerset PR, IPFS docs (https://github.com/ipfs/docs/issues/26), issue #195 (docker go-ipfs zombie process)

##### @FrankPetrilli
* Labels on nodes
* Label selectors
* Multitenant resource sharing

### Questions, announcements and comments

* We should release the new Raft+Peerset fixes this week.
* @elopio contributed https://github.com/ipfs/ipfs-cluster/pull/228

### Other business

* Discussion on the backup/migrate approach
  * @hsanjuan: if you haven't read yet check out my last comment
* Need to do OKR mid-quarter estimations after standup

---

## Standup meeting - 2017-11-6

### Updates since last time

##### Wyatt
* Update & Backup State PR
  * Still trouble shooting a few bugs
  * Want to add state translation that is less burdensome for developers changing state, have an idea how to do this

* This week:
  * Finish this PR!
  * Bugs and code review as needed
  * IPFS-map documentation
  * Use case docs

##### Frank

* Node is at `root@138.197.213.212`
* Path is `~/go/src/github.com/ipfs/kubernetes-ipfs`
* Join is https://github.com/ipfs/ipfs-cluster/issues/190


### Questions, announcements and comments

* Wyatt for Frank: I am looking to better understand the setup you've built and so I have a question or two.  These are pretty basic, just a couple sanity checks and points of curiousity:
   - My understanding is that this is the following flow we will use for testing on the cluster
        1. We ssh into a machine 
        2. We run a script to deploy and setup ipfs-cluster on the kubernetes machine.  This script will be something similar to (or maybe exactly the same as) runner.sh in the ipfs-cluster repo
        3. Once the ipfs-cluster is set up we can run tests using kubernetes-ipfs from the machine we've sshed into
   Is this how you have things set up?  
      - A: Pretty mch :)
  - Is the machine we ssh into the kubernetes master?  Is it specific to ipfs-cluster testing or would everyone running deployments use the same machine?
      -A Yes.  No.
  - Is running two deployments at once in the kubernetes cluster tricky to get right?  i.e. will ipfs-cluster tests need to be run synchronously?
      -A: no, k8s is built to be multi-tenant.  Sufficient to modify "app" line in deployment 
  
* Wyatt for Frank: Sorry for the delay on the ssh key.  Did you send me the instructions for using the kubernetes-cluster for ipfs-cluster tests?  Could you post them to the #collab-cluster slack channel?

### Other business

---

## Standup meeting - 2017-10-30

##### @hsanjuan

* Raft v1.0.0
* Testing
* Found out really bad bugs affecting read/write of the configuration
* Had to do a maintenance release because things just didn't work
* Probably will do another one to make extra sure things are stable before Raft
* Testing with new Raft version:
  * Realize that a node that leaves will never be allowed to rejoin unless cleaned up
  * Looking at consul code and docs and getting some ideas about how it's supposed to work
  * Been improving code and fixing small things on the raft PR (still ongoing)
  

##### @zenground0

* Code review of libp2p-raft, and new raft updates 
* Spent time with ipfs and friends repos and documentation, started ipfs system map:
    -  https://github.com/ZenGround0/ipfs-system-map
* Read through old cluster docs and issues, started compiling a use case document: 
     - WIP: https://github.com/ipfs/ipfs-cluster/blob/doc/add-use-cases/docs/motivation-and-use-cases.md   
     - Feedback very welcome 
* This week: 
     - Upgrading and backups issue:
        - https://github.com/ipfs/ipfs-cluster/issues/51
     - Finish first draft of use cases, next week ask @flyingzumwalt for review
     - Code review as needed
     - Continue system map documentation time permitting
     
##### @FrankPetrilli
* complete:
  * kubernetes-ipfs inter-node communication finally working
  * first test run
    * increasing delays
* coming:
  * adding nodes with worse conditions
  * tag planning
  * instantiation script


### Questions, announcements and comments
@zenground0 to @hsanjuan
1. I have been thinking a little more about implementing more advanced replication strategies.  It is clear to me why importers are important, it is less clear why ipld selectors will be important in general.  Could you explain at a high level the role ipld selectors will have in implementing, for example, RAID 0 (striping)?

2. For Issue #51 what does an ipfs-cluster upgrade look like from the user's perspective?  Does every node need to see the exact same raft state and hence the same raft state version?  Does this mean that all cluster peers must be upgraded at once?
     
     
### Other business
        

---


## Standup meeting - 2017-10-23

### Updates since last time

##### @hsanjuan

* Merged the new configuration format. Thanks wyatt for review
* Fixed the docker containers
* Updated libp2p-raft to raft/1.0.0 and dropped much code
* This week: 0.2.0 release, cluster+new raft, Writing some issues for milestones. Maybe start looking at pinbot

##### @zenground0

* Reviewed the new config format changes
* Massaged Tests to get tests working for new release
  * Found uncaught bug from recent PR (Issue 182)
* Added documentation and overdue polish to kubernetes-ipfs ipfs-cluster 
* Put some more thought into conn-graph PR.  A few questions in QAC
* Spent some time with ipfs codebase and documentation, found dweb primer 
* Reviewed a few other PRs and helped test and debug dockerfile issues leading up to release

* This week: Big review of libp2p-raft especially new changes, spend more time with ipfs and specifically importers, pinning and ipld, try to submit some ipfs documentation (dweb primer lessons) to solidify understanding, get conn graph PR in, review use case suggestions so far and compile into a document and keep track of confusing points and questions

### Questions, announcements and comments

* Design of connectivity graph questions
  - We expect ipfs daemons in the cluster to be "connected", does this mean they are Swarm Peers?
  - Is it acceptable design to have one ipfs-cluster-ctl subcommand hit two ipfs-cluster api endpoints?  At first I added a new complex endpoint to transfer all of the info needed to make a graph, but now I am thinking that hitting two endpoints (the existing /peers and a new /cluster-daemon-peers) will be simpler.
* PR #175, @hsanjuan could you review? I know there is more to do with swagger documentation but it seems like this could be merged in as a start.  Let me know if I should add more detail and/or add an api endpoint serving docs before it is worth merging in.


### Other business

---

---
## Standup meeting - 2017-10-16

### Updates since last time

##### @hsanjuan

* Worked on project management
  * Milestones for KRs
  * Issue labelling
  * Cleanups
  
* Worked on new configuration format: https://github.com/ipfs/ipfs-cluster/issues/162
  * It took me way longer than expected and it's going to take a bit more
  * 

* Need to work on Raft v2 next
  * Merged to master in hashicorp
  * No idea how hard migrating will be. Hopefully not much.
  * Need to study well new endpoints. Lots of good things.

* Need to go over docs too

* Basic auth PR merged



### Questions, announcements and comments

* Frank will help with kubernetes
* Ways of working summary update:
  * Standups on Mondays after IPFS - Content collaborately prepared in advance
  * Waffle gives general overview of things
  * All work has an issue, all issues have a milestone + priority label etc

* Are kubernetes-ipfs cluster tests working/passing ATM? (hsanjuan)
* We should be able to prepare a release after Config is merged. Needs everything green and I need to manually test too (everyone should) (hsanjuan)


### Other business

---