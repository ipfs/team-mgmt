## Standup meeting - 2018-05-15

### Updates since last time

##### @hsanjuan

Last week:

* Pubsub monitoring
* PR to go-ipfs using the DiskUsage() method to calculate repo/stat 
* Open some issues
* Start migration from biham. Cancel migration from biham.
* Fix bug in Pintracker (TestClustersPin)
* Work around interviewing and preparing interviews
* Tagged and deployed 0.4.0-rc1 + changelog

This week:

* Reviews
* Start thinking about cluster session for dev summit
* Start working on documentation for 0.4.0


##### @lanzafame

Last week:
* CRs including gossipsub & RFC prs
* Got through implementing most of the stateless pin tracker

This week:
* Finish stateless pin tracker
* Fix IPFSRequestTimeout issue #421 
* Write up Pintracker blog post
* CRs

### Questions, announcements and comments

* How do you...?
* What is...?

### Other business

---


---
## Standup meeting - 2018-05-08

### Updates since last time

##### @hsanjuan

Last week: 

* Finish consensus extract PR
* Pintracker hands-on
* Pubsub monitoring-related refactorings
* Some sharding review
* Some feedback in issues and looking more into opentracing

This week:

* Finish pubsub monitoring
* Re-take efficient repo-stat in go-ipfs (use new go-datastores)
* Come up with code challenges for applicants

##### @zenground0

Last week:

This week:

##### @lanzafame

Last week:

* PinTracker revamp was merged :D
* Began reviewing ipfs-cluster website
* CRs

This week:

* Pintracker blog post 
* Implement new stateless pin tracker component
* continue ipfs-cluster website review
* Have a look into gossipsub PR
* CRs

### Questions, announcements and comments

* How do you...?
* What is...?

### Other business

---

---


## Standup meeting - 2018-04-30

### Updates since last time

##### @hsanjuan

Last week:

* Emancipate consensus component (PR)
* Website style revamp
* Finish adding website content
* CRs

This week:

* Meetings + interviews
* Monitoring component with pubsub
* CRs

##### @zenground0

Last week:

* ipfscluster_test tests of Cluster.AddFile()
* sharness tests
* CR response: refactor add logic into a subpackage and call from api and cluster independently to avoid sending pointers over RPC.  Address comments on PR 386 (ready for another round of review)
* Bug fix: disallow cluster from pinning the same cid both sharded and unsharded as it leads to problems with removal


This week:
* pass CR on the front-end test PR
* Test: have an ipfscluster_test checking that cluster checks for bad repins of different pin types
* Test: More ipfscluster_test tests for pin operations on new pintypes
* Fix: if the pintracker is finished this week I will work on a fix PR so that all pin types are repinned correctly.  Initial approach will be to give pininfos a value indicating if they should be pinned recursively
* Fix: I want to submit a PR to only be merged once ipfs support for pinning recursively to a certain depth exists.  This way we can flip a switch and immediately make use of that functionality.

* Test: Sharder component test revamp.  Mostly I want to cleanup and refactor sharder component tests.  I could also look into sorting cids within shards and writing new tests for the component, but the latter two are low priority.
* Test: refactor importer tests to remove duplication. low priority
* Fix: turn the add --quiet and --silent flags into --only-hashes and make this work


##### @lanzafame

Last week:

* Implement the OperationTracker in MapPinTracker
* Write tests for the OperationTracker
* Write tests for proxying fix (this was painful...)
* Got lots of sleep :D 
* CRs

This week:

* get PinTracker revamp tests passing (I may have to look at hsanjuan's suggestion of using sync.Map as variability of the current implementation is concerning)
* Start musing about removing the status map from the MapPinTracker
* Continue getting lots of sleep
* CRs


### Questions, announcements and comments

Questions:
* zg0 -> hsanjuan: "Jenkins this commit cannot be built": https://ci.ipfs.team/blue/organizations/jenkins/IPFS%2Fipfs-cluster/detail/PR-386/8/pipeline any ideas?

* zg0 -> hsanjuan: Will the sharding branch only be merged after the ipfs recursive pinning to a depth support is added?

* zg0 -> hsanjuan: Am I meeting with Adrian today?  I've lost track of whose turn it is to standup.

* zg0 -> hsanjuan: What's the ETA on the pintracker branch?  I'd like to wait for it to merge before addressing the repinning-non-recursive-pintypes bug.

* zg0 -> hsanjuan: Should we have a global quiet & silent flag? More generally a verbosity flag for all commands?
-- only hashes, no silent

Comments:
* zg0 -> hsanjuan: Some of these things probably won't be finished by the end of the week.  Although my time is going to be much more constrained from there on I plan to help out in my spare time until the sharding branch is merged, e.g. I'll close out any remaining open PRs, help debug further issues that pop up and can do the rebase when the time comes for merging.




### Other business

---

---
## Standup meeting - 2018-04-23

### Updates since last time

##### @hsanjuan

Last week:

* Minimal Code reviews, answers on issues, creation of issues etc
* Vacation

This week:

* I have PL interviews scheduled, so preparing and doing them
* Keep moving documentation to new website
* Implement some of the design proposals from Agata for the website
* Review code
* Extract consensus component out of main component
* Re-center myself

##### @zenground0

Last week:

  * check progress at bottom of issue #309 https://github.com/ipfs/ipfs-cluster/issues/309
  * Refactored Add into Cluster component
  * Simplified API handling given that response streaming is no longer a goal (at this point in time anyway)
  * 2 api tests (client and server)
  * initial ipfs-cluster-ctl add sharness test
  * Fixed bugs (panicing ls -a, missing some hashes in printout) and refined specification of cluster-ctl add: we wrap files by default, not doing progress flag because no streaming response
  * test directory is generated on command and code + data is refactored so it is accessed through the test subpackage now so it can be reused easily
  

This week: finish "frontend" work, i.e. testing and refactoring on parts of file add pipeline before sharder component and new pin types and some light "backend" refactoring.
	* TestAddFile Local and Sharded in ipfscluster_test.
  	- requires rethinking block put, block get ipfs mock functionality 
  * It looks like there is a race condition in ipfs importing so that ordering is not guaranteed in a shard :(. I want to sort cids so that this is only a problem if there is a reordering across shard boundaries.  Unclear if there is a more general way
  * Refactor Sharder tests to remove code duplication 
  * Refactor Importer tests to remove duplication too 
  * sharness for `ipfs-cluster-ctl add --shard` and `pin ls -a`
  * ipfs-cluster-ctl `--quiet` and `--silent` flags work similarly to ipfs
  * Any further "frontend" tests that @hsanjuan suggests I include
  
Next week: finishing sharding polish
	* consider further sharder component unit tests
  * more ipfscluster_test or cluster_test tests that test edge cases of pinning and unpinning different pintypes
  * want to take a look at errors introduced by mismatch between new pintypes and status tracker types (no specification that pin type is recursive in state)
  * NICE TO HAVE: write out `ipfs pin -r=1` all the way to completion and put in an open PR so that when the functionality gets built on ipfs we can do minor tweaks and merge 


##### @lanzafame

Last week:

* Implement the OperationTracker in MapPinTracker
* Write tests for the OperationTracker
* Fix proxying of ipfs api when arg is in the url path

This week:

* work out correct delay amounts to get PinTracker tests passing on Windows(Jenkins)
* Write tests for proxying fix
* Start musing about removing the status map from the MapPinTracker


### Questions, announcements and comments

* from @zenground0 to @hsanjuan:
	I would love to get your feedback in PRs about what I am not testing that I should be testing.  If you have advice about other edge cases I should hit or see me missing big areas that should be tested in my PRs or in the description of my work plan for the next 2 weeks I would be VERY grateful to get your input so I can leave sharding in as nice a state as possible.
  
  The same goes for ipfs-cluster-ctl add and pin ls -a UX features.  I would like to leave the CLI interface as pleasant as possible and if you don't agree with UX decisions, for example wrapping all sets of files passed to `ipfs-cluster-ctl add`, I want to hear about it.
  
  THANKS!
  
  
*
  
### Other business

---



---
## Standup meeting - 2018-04-17

### Updates since last time

##### @hsanjuan

Last week:

This week:

##### @zenground0

Last week:

This week:

##### @lanzafame

Last week:

* Spent a lot (too much) time understanding the different interactions between the PinTracker, the cluster state and the local IPFS node

This week:

* Implement the OperationTracker in MapPinTracker
* Write tests for the OperationTracker

### Questions, announcements and comments

* @hsanjuan has kubernetes-ipfs been handed over?


### Other business
---
---
## Standup meeting - 2018-03-04

### Updates since last time

##### @hsanjuan

Last week:

* Code reviews (sharding)
* 0.3.5rc1 and 0.3.5 release
* Fixes
* Website
* Pinbot and storage cluster upgrade + configuration
* Some work on faster tests

This week:

* Website/docs
* Module extractions from go-ipfs

##### @zenground0

Last week:

This week:

* PTO

##### @lanzafame

Last week:

* go-fs-lock upgrade
* --wait flag finished and merged
* double ctrl-c to force quit is now triple ctrl-c and RFM
* attended my first PL ALl-Hands
* Kept expanding ipfs-cluster healthcare use case document

This week:

* [Pintracker](https://github.com/ipfs/ipfs-cluster/issues/308)

### Questions, announcements and comments

* How do you...?
* What is...?

### Other business

---

---
## Standup meeting - 2018-03-26

### Updates since last time

##### @hsanjuan

Last week:

* Code reviews (PinTypes, --wait)
* OKRs
* Fix pinbot
* IPFS() to Rest/client
* Meetup with data science people
* Draft on replacing consensus layer with pubsub

This week:

* Kubernetes-ipfs stuff
* OKRs
* Test cluster for new release (might cut an rc)
* Captain's log/changelog and 0.3.5 release
* Some ground work on consensus (separating from Cluster component since the host is now created outside)
* Code reviews
* ...

##### @zenground0

Last week:

* Lots of Code Review
* some OKR planning
* next round of state format changes for sharding
* PR integrating previous changes for a complete sharding prototype

This week:
* OKR planning + OKR scoring
* Respond to review of state format and integration PRs, ideally these merged to feat/sharding branch this week
* Do CR as needed
* Prep a few slides for labweek presentation on ipfs-cluster sharding feature
* Run manual sharding tests on cloud cluster to look for obvious issues.  Ideally I'll do a sweep of increasingly large files and compare ingestion time with raw ipfs add, but likely won't get to this.


##### @lanzafame

Last week:
* Finished [#348](https://github.com/ipfs/ipfs-cluster/pull/348). Except found an issue when rewriting tests,
	after losing them to a git rebase snarfoo :/. 
* Dug into multiformats, IPLD, starting implementing multibase in [Julia](julialang.org) as a learning exercise.
* Double Ctrl-C quit PR [#358](https://github.com/ipfs/ipfs-cluster/pull/358)

This week:
* Continue digging into multiformats/IPLD.
* Start piecing apart [Pintracker/local operation revamp](https://github.com/ipfs/ipfs-cluster/issues/308).
* Write up healthcare use case/requirements for ipfs-cluster.

### Questions, announcements and comments

* Announcement: Wyatt on vacation next week March 31 - April 6th
* Question: Am I meeting with Adrian today? Yes :D
* Need review before release https://github.com/ipfs/ipfs-cluster/pull/356

### Other business

---
## Standup meeting - 2018-03-19

### Updates since last time

##### @hsanjuan

Last week:

* Improve error messages when bad secret
* Bump libp2p deps across stack
* libp2p-http for Rest API
* Start with faster tests
* Some user support
* Some roadmap work
* Pin format review

This week:

* Finish faster tests
* Have Rest-api-client provide a go-ipfs http API client pointing to the proxy endpoint
* Fix pinbot
* Merge --wait for ipfs-cluster-ctl/rest client
* Better error messages when bootstrapping fails
* Address CR comments on things
* I'll be out Thu+Fri
* Should release next week (mon/tue depending how testing goes)

##### @zenground0

Last week: 
- Merged sharding component PR + pinning mod PRs
- rebased sharding branch on past month of changes (v1-sharding)
- state format design discussion
- state format WIP PR ready for init review 

This week:
- get state format PR ready to merge
	- correct (un)pinning, intuitive display, migration/tests
- CR for libp2p API PR, test delay removal PR, + others that come my way
- upcoming OKR scoring + planning.  
  - By end of week have estimates for all KR scores I'm responsible for. 
  - contribute to sketch of next quarter's KRs
- PR merging together the untested but feature-complete prototype
	- use new state format pinning types and pin-update commands
  - sharder must stay aware of latest hash for metapin to contain root
  - make use of nonrecursive pins
  - make use of specifying peer during pin

##### @lanzafame

Last week:
  * Started working on `--wait` flag [#348](https://github.com/ipfs/ipfs-cluster/pull/348), getting my head around the different components and types in `api/rest`
  * Had a _fun_ time getting a multi-node cluster running :D 
  * Worked on [#347](https://github.com/ipfs/ipfs-cluster/issues/347), which has been super useful for my understanding, thanks @hsanjuan

This week:
  * Getting up to speed on libp2p concepts.
  * Finishing [#348](https://github.com/ipfs/ipfs-cluster/pull/348).
  * Start looking into the pintracker and getting my bearings.
  * Continue picking up #difficult:easy issues. 

### Questions, announcements and comments

* @hsanjuan I've got some initial OKR proposals in a google doc.  Take a look and let me know what you think.  As you are out thursday and friday we will need to have this written up by wednesday (I think they are due in a week for review)

### Other business

---
---
## Standup meeting - 2018-03-12

### Updates since last time

##### @hsanjuan

Last week:

* Merged the flatfs disk usage PR (yaii!!!)
* Merging blocked in go-ipfs due to release
* go-libp2p-gorpc -> add contexts
* "refs -r" support in cluster
* CRs, creating issues
* Update go-libp2p-http (will re-use for rest/api)

This week:

* Better error messages when starting up
* Talk to rest/api over libp2p
* Make tests faster
* Contextualize RPCs in cluster
* Tests + CRs

##### @zenground0

Last week:
* Respond to sharding component feedback
* Include new unit test on sharding component
* Non-recursive pins and priority allocation PRs

This week:
* figure out test failure on sharding component PR and get this merged
* get non-recursive / priority alloc PRs merged
* update state format for clean handling of sharded pins
* Big rebase on feat/sharding to master + final integration of pinning features, state format, and sharding component for complete (untested) prototype
* k8s-ipfs tests 
* live cluster sweep of file size / time, comparing to go-ipfs ingestion

### Questions, announcements and comments

* How do you...?
* What is...?

### Other business
---
---
## Standup meeting - 2018-03-05

### Updates since last time

##### @hsanjuan

Last week:

* Bubble go-datastore changes (PR in ipfs)
* go-ds-flatfs DiskUsage() improvements, benchmarking, tests
* Sharding review

This week:

* Add contexts to gorpc
* Keep pushing for my open PRs in go-ipfs and go-ds-flatfs
* TBD


##### @zenground0

Last week:
	* tasks in last week's first bullet
  * unit tests

This week:
	* polish current PR
  	- change trickle flag to layout + flag descriptions
    - beautify shard node splitting for readability
    - try http 2 on server for streamed response, polish response printing
    - Rpc api type consolidation
    - 1 more unit test
    - check functionality in live cluster
  * non-recursive pinning + pinning on one node PRs
  * live cluster test development + trial runs
  * state format changes to accomodate sharded file repr, response priting upgrade to print sharded files well

### Questions, announcements and comments

* hsanjuan: From https://github.com/ipfs/ipfs-cluster/issues/309 there are lots of tests that don't make sense as unit tests in the `Live Cluster Tests` section.  I've been thinking of building out my own shellscript + digital ocean testing deployment for these scenarios to keep things flexible to start.  Using k8s-ipfs right now would be a pain (runner script isn't going to cut it as now I'm looking to run tests on containers with different volume storage parameters so probably will need to deploy different configs across different tests) but maybe I'm being shortsighted.  Should I be dogfooding that tool and deploying these tests from within k8s-ipfs from the start so that we can push k8s-ipfs forward as a tool too?  Eventually we will potentially want these tests running automatically on PR and so figuring out how to do them on k8s-ipfs is probably going to need to happen in the long run.

### Other business

---

## Meeting notes
---
## Standup meeting - 2018-mm-dd

### Updates since last time

##### @hsanjuan

Last week:

This week:

##### @zenground0

Last week:
	* Began addressing sharder component comments
  	- parallel sharding sessions
    - better RPC calls + several small fixes
  * Beginning of unit tests
  	- test for correct ipfs block puts
    - test that clusterDAG nodes are correct

This week:
	* Work on fleshing out sharding implementation.  A lot of ideas in issue #309 right now.  More than 1 weeks worth so no shortage of work:
  	- shard nodes will split themselves into a tree in the case too many links put shard nodes over the ipfs block size limit
    - calculation of threshold will include the size of serialized dagNodes for more accurate adherence to limits
    - users get back an informative output after a call to `ipfs-cluster-ctl add`.  To start we'll make this a single call after sharding is finished.  In final product this should do live streaming of updates
    - cluster supports non-recursive pinning so we can pin the shard root without double pinning shard nodes 
    - `ipfs-cluster-ctl add` supports the same or nearly the same set of richly expressive flags as `ipfs add` (--trickle, --chunker etc), along with cluster specific things like repl factor.  This will require work on cluster's importer interface, the rest api and the sharder
    - Figure out an acceptable error handling policy for our current rough draft and write better error messages
 
	* More unit tests
  	- force a shard node to split with tons of tiny node additions
    - force two shards by adding in lots of data
  * Set stage for live cluster tests
  	- decide on platform (k8s-ipfs, digital ocean + shell scripts etc)
    - write the basic (ipfs-cluster-ctl add of small files)
    - probably no time for it this week but will be great to run a preliminary sweep across several file sizes (within reason, say up to 10GB) and record time to shard.  Could also compare this with time to add and ingest into a single ipfs repo.
    - definitely not this week but will want to run across different shard sizes, input flags.  Test runs that limit free space in ipfs repos so that allocations are very tight.  Tests that are designed to fail so we can inspect failure state and error messages and figure out how recovery painpoints and overall how we can improve user UX and a better approach to safety
    
    
  

### Questions, announcements and comments

* hsanjuan: From https://github.com/ipfs/ipfs-cluster/issues/309 there are lots of tests that don't make sense as unit tests in the `Live Cluster Tests` section.  I've been thinking of building out my own shellscript + digital ocean testing deployment for these scenarios to keep things flexible to start.  Using k8s-ipfs right now would be a pain (runner script isn't going to cut it as now I'm looking to run tests on containers with different volume storage parameters so probably will need to deploy different configs across different tests) but maybe I'm being shortsighted.  Should I be dogfooding that tool and deploying these tests from within k8s-ipfs from the start so that we can push k8s-ipfs forward as a tool too?  Eventually we will potentially want these tests running automatically on PR and so figuring out how to do them on k8s-ipfs is probably going to need to happen in the long run.

### Other business

---

---
## Standup meeting - 2018-02-19

### Updates since last time

##### @hsanjuan

Last week:

* Solved most of the importers-export-web hell. Extracted a lot of things. Stuck in some tests deps.
* Send some logo stuff to agatha
* PRs to go-ds-badger and go-ds-flatfs for DiskUsage()

This week:

* Get my datastore PRs merged and bubble up to go-ipfs
* Figure out what to do about dep cycle with whyrusleeping
* Deploy new ipfs-cluster in new boxes, bring pinbot along, import pinset from gateways
* CRs, testing sharding?
* Out friday and next monday

##### @zenground0

Last week:
	* CR fixes and merged 316 and 318 to sharding branch
  * Sharding component rough draft written
  	* still debugging
   

This week:
	* Get sharding component prototype working
  * Respond to CR
  * Sharding testing
  	* Think up test scenarios
    	* To start nodes will collaborate to add a file
      * Next their repo sizes will be constrained so the file will only fit among them in shards
    * Set up a test cluster
    * Automate as much as possible
    * Run tests
    

### Questions, announcements and comments

* How do you...?
* What is...?

### Other business

---

## Standup meeting - 2018-02-12

### Updates since last time

##### @hsanjuan

Last week:

* Gonna try to release today
* go-ipfs go-linting
* go-ipfs module extractions (in prep for importers extractions)
  * Turns out more complicated than anticipated
* DiskUsage PR to go-ds-leveldb
* Some CRs

This week:

* More extractions
* More go-linting in go-ipfs as I go
* More DiskUsage PRs to datastore implementations
* Need to kickstart the logo design stuff


##### @zenground0

Last week:
	* PR 316 -- local add to ipfs daemon 
  * PR 318 -- added old dex repo to importers folder in cluster, now cluster depends on go-ipfs instead of dex (no adder yet)
  * PR 317 -- skeleton of cluster sharding componenet + lots of comments with thoughts about challenges of building
  * Small fixes: got PR 315 + PR 307 merged
  
This week:
	* Polish what I have: 
  	- respond to CR on 3 PRs, can add more unit tests, can implement cluster specific adder
    - discuss comments in PR 317 so we have ideas on moving forward
    
  * Figure out what to do next.  Could use your input Hector.  Some ideas:
  	- Work on cluster sharding component prototype, delaying any things we haven't decided on by using the simplest choice (getAssignment() always returns a constant number of bytes, unixfs for cluster-DAG, ignore safety concerns)
    - Start building a test cluster with limited ipfs repo sizes / disk sizes where we can test cluster sharding in the presence of tight constraints
    - Help with the ipfs dependency extraction effort (is there any way I can help?)
    - Work on non-sharding stuff
    		- take a look at getting kubernetes tests triggered on github PR
        - start metrics document rough draft / brainstorm

### Questions, announcements and comments

* to hsanjuan: Is there anything that I can do that would help make your life easier with importers extraction or logo design?  

### Other business

* OKRs
	- Score and presentation prep
	- @mishmosh mentioned that we should bring up places where we haven't been able to do work because other parts of PL have blocked us.  We should bring up the lack of review on the sharding RFC as this is blocking one of my KRs
  
* Would you like to have a meeting with Juan next week?

Meeting notes will be cleaned up after a few meetings and added as archives to the ipfs/pm repo under the meeting-notes directory
---
## Standup meeting - 2018-02-05

### Updates since last time

##### @hsanjuan

Last week:

* Read through importers

This week:

##### @zenground0

Last week:
	* dex repo created and functionality built up to "ImportToChannel"
  * cluster-ctl now has an `add` command causing files to stream across rest api (https://github.com/ipfs/ipfs-cluster/pull/310)
  * go-dot has ci and fmt enabled
  * PR to remove small merge-induced failures of conn-graph tests
  * (This morning) lots of gx update PRs in cluster deps to allow dex import to go through without failure

This week:
	* make changes to mapstate unmarshal after convo with hsanjuan finishes as part of "3 small features" PR
  * Address code review on dex module + ipfs-cluster-ctl add's file streaming + gx dep updates.  Test ipfs-cluster-ctl add with dex and debug until passing (currently seeing failure running add on dir now that dex is added).  
  * Get dex travis to build properly (assuming we keep this repo, see discussion in Q&A&C)
  * Insert blocks into ipfs from rest api
  	* one at a time, transmit blocks over RPC to new IPFSHttp endpoint using block/dag put

  * If time: start planning cluster sharding component
  	* strategy for transferring blocks output from importer?
    * cluster graph ipld format?
    * rough draft of how allocation will work.

### Questions, announcements and comments

* do we even need a dex repo?  looks like you would like (all?) current dex code relocated to cluster repo.  i don't disagree either. what I have now exposes a clean interface but isn't doing any real importing of files.  existing go-ipfs code is already compatible with what we need.

might make managing deps easier, any other reasons to separate it out?  Even with a separate dex repo we will either end up importing go-ipfs anyway in dex, or bring in go-ipfs modules (like mfs) that are used for non-importing purposes.

* Let's decide on whether we want a separate "dex" module, a working definition of its scope, and a title we can agree on at least between ourselves 

-- GO-IPLD-IMPORTER

### Other business

---

---
## Standup meeting - 2018-01-29

### Updates since last time

##### @hsanjuan

Last week:

This week:

##### @zenground0

Last week: 
	* investigated migration issues
  * submitted small fix for imported state to propagate to clean peers
  * submitted PR to address 3 fixes/feat requests that came to light while debugging
  		* PR 307 ready for some review

This week:
	* Sharding #1 -- enable multipart streaming across the cluster rest api
  	* Alone making a receiver is pretty simple
    * Challenge #1, fit it up so that outcoming datastructures fit up with dex library for importing unixfs files
    * Challenge #2, enable cluster-ctl to go from files on fs to a multipart http request so that we can work with a concrete push client.
    	* ipfs does this already
      	* [from fs to files](https://github.com/ipfs/go-ipfs-cmds/blob/master/cli/parse.go#L255)
        * [from files to http req](https://github.com/ipfs/go-ipfs-cmds/blob/master/http/client.go#L142)
      * while ipfs does this already we likely don't want the entire go-ipfs-cmds request interface coming into cluster, I'll need to find a compromise between bringing in functionality we want and not repeating too much existing code.  go-ipfs-cmdkit `files` looks like a reasonable abstraction to bring in.
  * Sharding #2 -- refactor and regroup dex functionality from go-ipfs to fit seamlessly into cluster's `add` flow
  	* sharding #1 will probably take most of the week (and beyond!) but figuring out some of this might be necessary to address sharding #1 challenge #1
    * want to refactor (study a bit more to make sure this is necessary too) go-ipfs coreunix_add to make it ammenable to streaming files.
    * want to look for dependencies we can live without.  We'll need dagbuilders, probably mfs.  Anything else?
    * would like to include tar importing into dex
  * Conn graph tests are causing jenkins failures but Travis passes.  Hypothesis: tests were written before listening on port 0 and its requirements were instated.  I should make these tests compatible.

### Questions, announcements and comments

* How do you...?
* What is...?

### Other business

---
