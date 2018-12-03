
## Standup meeting - 2018-10-30

### Updates since last time

##### @hsanjuan

Last week:

* Docker compose
* Finished Batching removal
* Twitter pinbot upgrade
* Fix metrics PR
* Chagngelog and doc upgrades for 0.7.0
* libp2p bubbbling and others
* Race conditions debugging
* 0.7.0-rc1

This week:


* Test 0.7.0
* Update pinbots
* Release stable
* CRDTs


##### @lanzafame

Last week:

- env var config discussion and PR
- get back into metrics/tracing PR
- extending benchmarks on go-libp2p-peerstore
- started work on ipfs-cluster iptb docker plugin
- reviewing tf code for eks infra

This week:

- start documenting metrics/tracing configuration
- bubble up latest release of opencensus before we merge metrics/tracing PR
- clean up helm charts
- document helm/kubernetes deployment 


#### @mhz

Last week: 

- meetings with all the people
  - tried to support David and Molly's IPFS roadmapping
  - Matt Z on decentralized data stewardship next steps

This week:

- finish roadmapping stuff
- plan protoyping process/team?? <- came out of chat with Matt Z
  - Pick up the ideas behind Cube?

- Notes for later
  - Could relate to Federation and colaborative pinsets
  - Come up with a way to define Cluster as a product
  - "We support tracking XYZ"
  - Document that defines the difference between IPFS, Cluster, and Filecoin
  - Trying to look long-term to IPFS Conf -- would like these use cases fleshed out -- sessions on IPFS Cluster for collaborative pinning; IPFS Cluster for dataset backup; IPFS Cluster for collaboration between organization (or whatever we call that)
  - Infra is going to have an automated deploy Cluster to AWS
  - At the same time, we have people coming to us asking to pin things. We could say 'sure, here's a TB'. We should have a policy about who we should pin/support. What things should we look into? Perhaps, is the project open source? Are they going to store data in a way we support? How much is it going to cost? Are they going to work with us in a way that we'll learn from? We should have this in a doc so we can refer to it when people ask.
  - Hector thinks we'll have all the major pieces together, but want to have the small pieces of the cases together, too. Want this by IPFS Conf -- Jun/Jul.
  - MHz question: how much will we need a pinning service to be a product? Hector: Cluster fulfills many of the needs of a pinning service. But it should not do both. MHz: not sure if we'll need that, too.


### Questions, announcements and comments

* How do you...?
* What is...?

### Other business


---


## Standup meeting - 2018-10-23

### Updates since last time

##### @hsanjuan

Last week:

- Headers for API
- libp2p upgrade 
- Tests with race (more failures and report)
- Fetch gx from ipfs
- mSorted out license and moved gorpgorpc to libp2p/ plus update projects table plus move to codecov
- Lots of work on the twitter pinbot
- Watch terraform EKS meeting mvideo
- Implement cluster unpin for sharding approach and tests, realize it's not good enough
- Remove batching from importers and add to go-ipfs change plus bubbles etc

This week:

- Start diving into CRDTs
- Pick-up cluster unpin sharding problem again
- Follow up on "remove batching from importers"
- Work on official Docker compose file
- Hopefully an rc release for Thu or Fri
- Bubble libp2p with latest yamux


##### @lanzafame

Last week:

- interview
- meet with @eefahy and @mburns regarding eks and long term infra needs for cluster and PL
- got eks terraform merged into cluster-infra repo
- ipfscluster.io domain has been purchased for as the endpoint for cluster deployments on eks
- reading a lot kubernetes and aws docs to make sure that my assumptions are correct regarding storage instances

This week:

- clean up helm charts for deployment on to eks
- finish writing up notes from XXX interview
- get back to the metrics PR, hopefully


#### @mhz

Last week: 

This week:


### Questions, announcements and comments

* How do you...?
* What is...?

### Other business


---
## Standup meeting - 2018-10-17

### Updates since last time

##### @hsanjuan

Last week:

- Lab Week

This week:

- PR reviews
- Attack some small but nice-to-have issues
- Start wrapping next release
- Interview prep
- Bubble libp2p
- Test -race again
- Sharding things
- Move gorpc to libp2p/ org


##### @lanzafame

Last week:

- Lab Week :D

This week:

- Fix terraform PR
- Deploy EKS with @eefahy's stamp of approval
- Deploy ipfs-cluster on top of EKS
- Schedule interview with Kishan
- Confirm I have pushed all the gxed packages for opencensus to the gxed org


#### @mhz

Last week: 

This week:


### Questions, announcements and comments

* How do you...?
* What is...?

### Other business

---
## Standup meeting - 2018-10-02

### Updates since last time

##### @hsanjuan

Last week:

* Prepping 0.6.0 release, lot's of small PRs and merges (thanks for quick reviewing). Tagged RC1
* Testing
* OKRs

This week:

* Stable release
* Deployment
* Upgrade some cluster tooling (pinbots)
* Review Adrian's PR on tracing
* Interview
* Possibly start fixing some sharding stuff
* Setup myself on AWS


##### @lanzafame

Last week:

* GXED OPENCENSUS!!!!!! 
* Tried several terraform deployment mechanisms of EKS to aws; comparing notes with @eefahy this week
* CR some IPLD specs stuff
* looking into ipld-shard for cluster
* Looking at configuration as a whole

This week:

* Clean up the configuration for the metrics/tracing branch
* Deploy third way of deploying EKS to AWS


#### @mhz

Last week: 
* OKRs
* Started getting pinged by David for Lab Week
* Connected with Shoah Found
* 

This week:
* Getting ready for Lab Week
  - Lightning talk for Decentralized Data Stewardship
  - Running (I hope not) a use case thing for IPFS with David
  - Summary of Cluster user research to date?
  - Unconferences regarding ^^?
* Schedule more user interviews for after Lab Week
* Fly on Friday to Scotland

### Questions, announcements and comments

* Re: design stuff for @mhz
* Re: pinning API/ pinning service for @mhz
  - This is what Juan brought up during OKRs
  - What would a pinning service look like as a product?
  - We know it would have enpoints -- but what should they be? What kind of auth methods should we support? 
  - Ideally we're able to provide a unified API for IPFS and Cluster
* Re: aws deployment for @lanzafame

### Other business

---

---
## Standup meeting - 2018-09-18

### Updates since last time

##### @hsanjuan

Last week:

This week:


##### @lanzafame

Last week:
- meetings
  - b5 with mhz (user journey)
  - Partner (discuss parners's architecture and deployment of a cluster for them)
- interview
- gx update go-dot
- drove myself up the wall attempting to gx opencensus ()
- started to update go-cid across ipfs-cluster and dependencies, but then reached my limit of dealing with gx for one week.
- made progress on the helm charts but ended up blocked by the gxifying

This week:
- Put metrics pr up with vendored opencensus 
- go-cid upgrade

#### @mhz

Last week: 
- Started drawing up basic user journeys.
  - b5 (Qri/enviro data)
- OKR org stuffs
- Met Raul with libp2p -- he is working on diagrams, explainers, etc
- Emails with Shoah

This week:
- Interviewed Kishan
- More user journeys.
  - jonnycrunch (genetics analysis)
  - Erin Fahey (libraries)
  - Kevin (EDGI)
  - Who else?
- Continue diagramming high-level cluster use cases. Goal: suggestions in PR re: collaborative and composite clusters
- Review Cluster user registry info, see if there are any trends yet
- Org stuff
- Emails with Shoah
 

### Questions, announcements and comments

* @hsanjuan: how did the aws/gcp accounts stuff go

- Still pending, probably only getting AWS

* @mhz starts her week on Monday like a normal person; @lanzafame starts his week post stand-up because reporting something as todo that is already done confuses his little brain

### Other business

---

---
## Standup meeting - 2018-09-11

### Updates since last time

##### @hsanjuan

Last week:

This week:

- Accounts from cluster: aws and google cloud (?)



##### @lanzafame

Last week:

- CR of some peerstore prs
- metrics/tracing is blocked on gxifying opencensus packages
- chats with @mhz about multiformats, ipld, libp2p, ipfs
- Partner wanting to get api keys to storage cluster
- learning kubernetes
- extending the helm charts to include jaeger and prometheus for metrics/tracing

This week:

- okr stuff
- gxifying opencensus
- finish helm charts


#### @mhz

Last week: 

- Dove into tutorials, ariticles, and videos on networking concepts
- Started working on diagramming high-level cluster use cases with Adrian. Whiteboard here: https://app.mural.co/invitation/room/1536221524931?code=a4d87edf08274f16a0e08788066a3a0a
   - This is related to being able to explain (from an end-user perspective) and have illustrations for collaborative clusters and composite clusters
- Cluster research plan -- thank you for feedback

This week:

- Start drawing up basic user journeys. Goal: present at Team Week
  - b5 (Qri/enviro data) --> mtg scheduled for tomorrow
  - jonnycrunch (genetics analysis)
  - Erin Fahey (libraries) --> playing the calendar game
- Continue diagramming high-level cluster use cases (you will start to see issues/PRs/docs/something for feedback)
- Started working on diagramming the 'IPFS network stack' with Adrian
  - I heard Mike G has done some of this for libp2p
- Question: can we move forward with testbed without a test suite? How far away are we from having a test suite? (to track the things that Hector suggested)
- If not waiting for test suite, start scheduling interviews/outreach
- OKR review/WG structure feedback so that all my work is in an OKR somewhere (per Matt Z)
  - He said he's going to suggest a new Decentralized Data Stewardship WG


### Questions, announcements and comments

* Q4 OKRs?
* Hiring seemse a little blocked. Womp womp.

### Other business

OKRs --
Hector
- Start on the path to getting rid of Raft. To do this, need to invest time into reading about CRDTs and what we've done so far (peer pad and co). Goal: have a few prototypes or pieces to have a distributed state that everyone agrees on that is not Raft-based.
- The rest are follow-ups from existing OKRs
   - fixing a few things on libp2p
   - hiring
   - sharding (but a little blocked on IPFS level, so we'll spend time at IPFS level on how to do pinning)  

MHz


Define large volumes data user journies

Present ^^ team week

recruit/interview participants

illustrate key IPFS/Cluster use cases (from end user perspective)

Adrian:

Kubernetes deployment
Tracing
Leaderless repinning
Accrual failure detector

---


---
## Standup meeting - 2018-09-04

### Updates since last time

##### @hsanjuan

Last week:

- Shipped Max

This week:

- No sleep

##### @lanzafame

Last week:

- I have a kubernetes cluster for test sharding
- gxifying opencensus packages
- worked on poc of accrual failure detection, got myself confused by scope of change, back on track now :)

This week:

- finish gxifying opencensus packages
- respond to the few issues that have popped up over the weekend, `<swedneck[m]> and <shguwu>` on irc, and aswinideas2it on GH
- pick up failure detection again

##### @mhz

Last week: 
  
- PR to take down team page
- Sent visual and content design job descriptions to hiring@ for next steps. They might be pausing hiring for a while.
- Moar org working group stuffs

This week:
  
- Start drawing up basic user journeys to add detail to over the quarter
  - b5
  - jonnycrunch
  - healthcare
- Different setups drawings?
- Reading for Data Together
- Finish ESIP meeting report, put in UX repo
- Cluster research plan
- Start scheduling interviews/outreach 
  
Soon:

- Review results from survey (and various emails with similar info about pin size etc)


### Questions, announcements and comments

* How do you...?
* What is...?

### Other business

---
## Standup meeting - 2018-08-28

### Updates since last time

##### @hsanjuan

Last week:

- 0.5.0-rc1
- = +deployment
- +minor changes
- +testing
- 0.5.0 release
- Finished refs -r --max-depth in ipfs world
- Wrote a draft post about cluster component architecture

This week:

- Illustrations for website
- Try to screen a candidate for cluster
- Start moving infra hosts to badger
- Talk to Erin about infra needs
- Cluster testing plan

##### @lanzafame

Last week:

- Ended up having some more kubernetes fun
- Made some minor changes to the accrual package
- Started to integrate the accrual into the metrics pkgda
- Did a fair amount of thinking/notes around the failure detection

This week:

- Clean up and push up the opencensus/tracing branch
- PR first pass of accrual failure detection

#### @mhz

Last week: 
- Finished draft job descriptions for more UX/content/visual designers (which means I wrote them and also talked to many people for feedback)
- Wrote draft language for new Join page that highlights our benefits, it's open for feedback
- Contacted @b5 to see about running Cluster with qri, he wrote back, will forward email
- Prepped Michelle B for Data Together mtg this week (case study, presentation)
- Org chart boo. David wanted to talk. It took a long time.
- Led a discussion witn Data Together on common pool resource management

This week:
- PR to take down team page (underway as I type, mwahahaha)
- Sending draft design job descriptions to hiring@ for next steps (not sure what those steps are)
- Finish ESIP meeting report, put in UX repo
- Start drawing up basic user journeys to add detail to over the quarter
- @daviddias suggested doing a broader user survey for all the people we know about building on IPFS
- Moar org working group stuffs I guess

Blocked:
- Cluster research plan (need feedback)
- Start scheduling interviews/outreach (until research plan is done)

### Questions, announcements and comments

* What is Golang Core Team? 

### Other business

---


---

## Standup meeting - 2018-08-20

### Updates since last time

##### @hsanjuan

Last week:

- Finalizing sharding merge
- Fixing "add" bugs and wrapping up
- Merging stateless tracker
- Merging test -race fixes
- Working on go-ipfs "refs -r"
- Prepared docs for 0.5.0
- Prepared changelog for 0.5.0

This week:

- Make a release candidate
- Deploy it

##### @lanzafame

Last week:

- CRs
- Kubernetes fun, minikube is horrible...
- Tracing is coming along very nicely, still a bit of work to go to get it cleaned up

This week:

- Having a chat with Lorenzo from Siderus about collaborabting on the Helm charts
- Finish setting up kubernetes based dev cluster
- Finish up metrics/tracing and put up PR
- Start implementing prototyping better failure detection 

#### @mhz

Last week: 

- Organized the IPFS UX repo
- First draft of Cluster testbed research plan -- need feedback: https://docs.google.com/document/d/1HIlzl0nVVGOlV0LLSb6oSeqxZLXRKJwnIt7bPSVnqr0/edit
- Transferred contacts to Cluster user registry
- Followed up with Michelle Brous on Data Together case study (involves @b5 and qri work)

This week:

- Hiring
  * first draft job descriptions for more UX/content/visual designers (in particular, get Rob to review content descriptions before he leaves at the end of the week)
  * PR to take down team page
  * Issue suggesting new language on join page
- Finalize Cluster research plan
- Start scheduling interviews/outreach
- Contact @b5 to see about running Cluster with qri
- Finish ESIP meeting report, put in UX repo
- Stretch goal: start drawing up basic user journeys to add detail to over the quarter


### Questions, announcements and comments

* Adrian - conference? https://www.himssasiapacconference.org/ehome/287692/733051/
* do we have a discussion group or email list? do we need one? 
  - ipfs-cluster@protocol.ai (internal)
  - we have discourse and repo

### Other business

---


## Standup meeting - 2018-08-14

### Updates since last time

##### @hsanjuan

Last week:

* Sharding branch, lots of progress and problems solved. Refactor to use a DAGService. Handling output. Ready to merge from my side I think.
* Upgraded go-ifps in storage cluster (and ubuntu)
* Fixed a panic in API client, support /dnsaddr, resulted in small refactor
* Renamed `gxc` to `gx2cluster` tool. Works with `--peer /dnsaddr/cluster.ipfs.io` thanks to fixes above.
* Moved cluster infra code to it's own repo. Added lanzafame to it.

This week:

* Re-visit refs -r with depth limit PR in go-ipfs
* Merging week:
  * DHT
  * Sharding
  * Stateless tracker
* 0.5.0-rc1 release
* Go over imported pinsets again and move on
* Document kubernetes/helm cluster deployment in the website
* Want to write a blog post about how we use RPC in cluster. Actually initiate a series of technical blogposts about internals.

https://docs.google.com/spreadsheets/d/19vjigg4locq4fO6JXyobS2yTx-k-fSzlFM5ngZDPDbQ/edit


##### @lanzafame

Last week:

* Review sharding branch lots.
* Opened opencensus pr for go-libp2p-gorpc
* started adding metrics to ipfs-cluster
* Got some opencensus traces coming out of cluster, really ugly and not super useful atm but only first pass
* Setup my linux server box, needed a format and distro install
* Got back to thinking about how best to do failure detection and how to minimize the footprint of all this 
	monitoring code

This week:

* Get opencensus tracing to be useful
* Sketch out what the adaptive alert triggering is going to look like

#### @mhz

Last week: Off

This week: 

* Move user research/use cases to IPFS user research repo. This is what needs to happen in that repo. I will get to at least step three this week.
  * We've got a README!
  * Created skeleton repo wiki to hold roadmaps, etc.
  * Added current understanding of problem statements to repo
  * Issues reflect ongoing and planned work
  * TODO: Migrate existing user research (or links to research) there so it can serve as index for that work
* Cluster testbed research plan
* Follow up with people met at conferences -- including Korean research group that's interested in testing cluster
* Hiring
  * first draft job descriptions for more UX/PM/designers
  * PR to take down team page
  * Issue suggesting new language on join page

### Questions, announcements and comments

* How do you...?

### Other business

---


---
## Standup meeting - 2018-08-07

### Updates since last time

##### @hsanjuan

Last week:

- depth limit go-merkledag PR + merging + bubbling
- refs -r with depth limit go-ipfs PR
- some interviews
- DHT PR documentation PR


This week:

* Prob re-visit refs -r with depth limit PR after feedback
* Sharding: handling progress output: mostly there
* Sharding: update metrics every few block puts : mostly there
* Upgrade go-ipfs in storage cluster
* Go again over the imported pinsets a check what's there and what fails
* Document kubernetes/helm cluster deployment in the website
* Talk to victor about building with newer hugo in Jenkins



##### @lanzafame

Last week:
* reviewing sharding PR

This week:
* reviewing sharding PR
* further investigation into an ipfs-shard type
* poc opencensus 


#### @mhz

Last week: 

This week:


### Questions, announcements and comments

* How do you...?
* What is...?

### Other business

---
## Standup meeting - 2018-08-01

### Updates since last time

##### @hsanjuan

Last week:

* Re-worded OKRs
* Reviewed Resolve (PinPath) PR
* Interviews
* Moved a ton of stuff
* Way forward with go-ipfs --max-depth
* Fixed website to work with newer hugo

This week:

* Depth limit for recursive tree transveral functions in go-ipfs
* Sharding
* Interviews
* Upgrade go-ipfs in storage cluster
* Go again over the imported pinsets a check what's there and what fails
* Document kubernetes/helm cluster deployment in the website
* Talk to victor about building with newer hugo in Jenkins
* Write docs for DHT	1

##### @lanzafame

Last week:
* wrote up enterpirse package management use case (https://github.com/ipfs/user-research/issues/1)
* spoke with frrist about opencensus, we are going to continue hashing through the best way forward
	in the context of pl projects in general
* new laptop is finally setup... wasted a day trying to dual-boot windows and arch on an encrypted partition.... long story short, no more windows :D
* read through some really interesting papers, yet to write up my notes
* checking out metrics in grafana

This week:
* sharding cr
* poc opencensus with go-ipfs
* thinking of useful metrics


#### @mhz

Last week: 

This week:

* Michelle is in dWeb

### Questions, announcements and comments

* How do you...?
* What is...?

### Other business

---
## Standup meeting - 2018-07-23

### Updates since last time

##### @hsanjuan

Last week:

* OKRs
* Sharding
  * Writing tests
  * Fixed a bunch of TODOs/FIXMEs
  * TODOs:
    * Finish adding tests (end-to-end)
    * Handle streaming output
    * Push updated metrics
    * Manual testing in real cluster

This week:

* Sharding
* Moving to new flat
* Re-work wording in OKRs

##### @lanzafame

Last week:

* flying
* jetlag

This week:

* get stateless tracker over the line
* write up enterprise use case for ipfs-cluster (mixing of private/public ipfs networks)
* meet with frrist re: opencensus vs opentracing
* continue researching monitoring
* setup new laptop when it arrives.... -_- stupid dhl...

#### @mhz

Last week: 

* ESIP Federation Summer Meeting
* Draw up a org diagram

This week:

* NO CONFERENCES YAAASSSSS
* User registry form up on website - sign up if you're using this
--name
--email
--description of what you're using cluster for/how you're using it
--number of peers
--number of pins/size of the pins
--total available storage/or storage per peer
--how many new pins do you make every day?
--what kind of OS
--how do you deploy cluster (manually, docker, other)
--anything else you'd like to tell us? anything you'd like to ask us?
* Add ESIP folks to...something, some registry
* Write summary of ESIP Federation Summer Meeting and next steps
* FOR REALS v1 cluster testbed protocol
* Prep for Dweb next week (last conference till Oct, yes yes yes)

### Questions, announcements and comments

* How do you...?
* What is...?

### Other business


---
## Standup meeting - 2018-07-02

### Updates since last time

##### @hsanjuan

Last week:

* Sharding rebase
* Started going through sharding and fixing
* Including upgrade to libp2p 6 and some improvements there
* Slack bot fixes and deployment
* OKRs + more paperwork
* Reviewed some code

This week:

* Sharding
* Presentations for dev week
* 


##### @lanzafame

Last week:

* OKR stuff
* Started researching failure detection and monitoring
* A few CRs
* Stateless tracker is now in a pretty good place 🤞
* Started thinking about what kinds of metrics to expose

This week:

* Get stateless tracker merged
* Continue with monitoring/metrics stuff
* Have a peek at the sharding branch
* Fly to Berlin on Saturday
* Don't miss any of my connecting flights


#### @mhz

Last week: 



This week:

* Flying to Berlin on Thursday
* Lots of dev meeting planning
* User registry links/up and running
* First draft testbed research plan
* Prep for Dweb

### Questions, announcements and comments

* How do you...?
* What is...?

### Other business



---
## Standup meeting - 2018-06-25

### Updates since last time

##### @hsanjuan

Last week:

* `--max-depth` support for go-ipfs `pin add` and `refs -r` (https://github.com/ipfs/go-ipfs/pull/5010). Needed feature in go-ipfs for sharding which I'm retaking
* Twitter pinbot fixes
* Rebased sharding on top of master (need to fix a bunch of broken stuff first (after conflicts and pintracker changes) before actually recovering the state on which it was)
* Review Lanzafame's changes to go-libp2p-gorpc and stateless pintracker

This week:

* Keep working on `--max-depth`: tests, small things (removing the direct-pin pinset?). Annoy ipfs devs to get reviews
* Finish rebase of sharding. Review all changes.
* Collect names of cluster users


##### @lanzafame

Last week:

* Implemented gorpc custom error functions
* went through monitoring revamp issue & mapped out high level functionality
* CRs
* speccing out pintracker status filter functionality for [#445](https://github.com/ipfs/ipfs-cluster/issues/445)

This week:

* address feedback on gorpc & stateless pintracker PR
* finish helping out with #445

#### @mhz

Last week:
- Worked with Kelani on finalizing the large volumes data research presentation
- Dev meeting planning: sessions

This week:
- Get cluster user research spreadsheet up! 
- Write testing protocol


### Questions, announcements and comments

* I'm only going to list things that are relevant to this team, but I will interpret broadly in case something piques your interest -- @mhz

### Other business

---

---
## Standup meeting - 2018-06-19

### Updates since last time

##### @hsanjuan

Last week:

* Interviews
* Pin tracker review
* Data migration
* Ping on repo/stat PR
* Collaborative cluster RFC
* Composite Clusters usecases

This week:

* Implement pin-to-depth functionality in go-ipfs (needed by sharding)


##### @lanzafame

Last week:

* Digging around gorpc thinking about the best way to implement the custom error for stateless pintracker PR
* Had a go at adding DNS lookups to go-multiaddr-net, which may or may not work out like I hoped
* Did another pass of @bigs go-libp2p-peerstore PR
* Had some interesting conversations with @pedro around the IPFS+healthcare issue
* Had some interesting conversations with sourcecred team
* Finished up blog post
* Started looking at monitoring but only briefly
* CR collab consensus RFC

This week:

* Gorpc custom error > unblock stateless PR
* start scoping out the monitor revamp

#### @mhz

Last week:
* That was a long time ago, I'll try to do better next week ;)

This week:
* Working with Kelani to finalize the report deck from large volumes user interviews (the full version of the thing she talked a bit about at the last all hands)
* Started a #t-product Slack channel for team leadership/product leadership stuffs. We'll see if people like it.
* Goal: get those cluster user interview spreadsheets where they need to be (self-signup and start filling in the internal one)
* Start planning remote workshop for next steps from Kelani's research
* Starting session planning for the BerlinIPFS/libp2p developers meetings

### Questions, announcements and comments



### Other business

---

---
## Standup meeting - 2018-06-12

### Updates since last time

##### @hsanjuan

Last week:

* Some work on race test
* Little time for anything else, only some follow ups

This week:

* I have interviews
* Review pintracker
* Will work on RFCs documents as I wanted last week
* I should be able to start looking at the sharding branch


##### @lanzafame

Last week:

* Worked out most of the kinks in the stateless tracker, just a sharness test that is failing only on Travis and CR to go
* Did a bit of support stuff
* Fleshed out the blog post draft, one more paragraph and then polish
* CR on @bigs peerstore using go-datastore PR
* Looked through some libp2p stuff

This week:

* Look into using github.com/hashicorp/go-plugin as a way of providing plug-n-play components that aren't all in the ipfs-cluster repo
* Dive in to monitoring
* Respond to stateless CR feedback
* Finish blog post


### Questions, announcements and comments

* How do you...?
* What is...?

### Other business

---
## Standup meeting - 2018-06-04

### Updates since last time

##### @hsanjuan

Last week:

* Docs for 0.4.0 and news entry
* Bubbling of go-multistream fixes to go-libp2p (and tagging)
* bubbling of go-libp2p to cluster stack
* Update floodsub with fix for ARM
* Release cluster 0.4.0
* Deploy to storage cluster
* Start import of pollux contents to the storage cluster and realize that archives.ipfs.io does not contain pins so cannot import anymore.
* Presentation for PL-team all hands
* Twitter pinbot
* Issue curation
* Create a bunch of easy issues so that people that want to collaborate have something to do


This week:

* Little time available
* Follow up on `repo stat` PR in go-ipfs, as no longer blocked by dep hell
* Fix -race test failures
* Ideally: finish draft RFC on consensus layer replacement 
* Ideally: finish composite clusters usecases doc



##### @lanzafame

Last week:

* Integrated new optracker into stateless tracker.
* Started using the shared state to determine remote pins in the stateless pintracker.
* Sick day on Friday.

This week:

* Messed around with gorpc trying to return a state.State, before realising that 1) can't return an interface across the rpc boundary, 2) that `Pins` does what I want to do anyway and that I didn't need a new rpc call.
* Finish the stateless tracker.
* Write pin tracker blog post.


### Questions, announcements and comments

* What other consensus options to do we have available to us?

### Other business

---

## Standup meeting - 2018-05-29

### Updates since last time

##### @hsanjuan

Last week:

* Fixing maptracker race issues
* Releasing 0.4.0 release candidates
* Deploying and testing 0.4.0
* 0.4.0 documentation for the website
* Bubble up go-multistream race condition fix to libp2p
* Test fix for ARM


This week:

* Release 0.4.0
* Deploy
* Finish/merge documentation
* News section blog post
* Presentation for PL all hands about cluster
* Maybe covert storage cluster datastores to badger
* Plunge into sharding


##### @lanzafame

Last week:

* review maptracker PR
* learn new optracker layout
* meet with `mhz`
* finish first full review of ipfs-cluster-website

This week:

* incorporate pintracker changes into stateless pintracker, going to open new PR for this
* invistigate the necessity of api.TrackerStatusRemote, I have an uninformed (naive) hunch of how to remove it

### Questions, announcements and comments

* How do you...?
* What is...?

### Other business

---

---
## Standup meeting - 2018-05-24

### Updates since last time

##### @hsanjuan

Last week:

* Off - only minimal user support and forum responses

This week:

* Keep debugging problems in 0.4.0-rc1
* Publish 0.4.0-rc2


##### @lanzafame

Last week:

* Lots of testing of pintracker, both the map and stateless implementations
* digging into some libp2p questions

This week:

* more testing and debugging of stateless pintracker implementation
* IPFSRequestTimeout fix
* Added some more to the ipfs/healthcare notes issue

* Test the concurrent calling of Track/Untrack/etc
* Meeting with Michelle Hertzfeld on Tuesday morning


### Questions, announcements and comments

* How do you...?
* What is...?

### Other business

---

