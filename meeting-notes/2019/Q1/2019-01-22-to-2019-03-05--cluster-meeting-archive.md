## Standup meeting - 2019-03-05

### Updates since last time

##### @hsanjuan

Last week:

- Removing the `*Serial` types turned into a horrible thing 
- Fixing website, doing a bunch of smaller PRs, changelogs, documentation
- Rebase and make tests work with the CRDT branch
- Push out 0.10.0-rc1 along pinbots etc

This week:

- Leave CRDT stuff in a place where the first iteration can be merged.
- Stable release

##### @lanzafame

Last week:

- redeploy k8s & ipfs-cluster on top
- refactor k8s/eks terraform
- meeting with frrist & scout re: logging and tracing across ecosystem
- code reviews

This week:

- do the things I wanted to do last week


#### @mhz

Last week:

- Hiring (onboard visual designer, yay -- Eric Ronne)
- A few days off, change time zones --> Melbourne

This week:

- Hiring
	- Final interviews for UX research role for Cluster/DDS/Cube
  - Offer stage for UX/PM role for IPFS generally, will focus on package managers at first
  - Contacting references for a UX research role for Filecoin
- Write up report on ESIP + Code4Lib
- Agenda/planning for summit
- Chatting with b5 with Adrian re: qri progress


#### @kishansagathiya

Last week:
- Finished going through the CRDTs paper
- Finished going through rpc endpoints for their performance impact
- Some PR Reviews (ipfsproxy: use PinPath to match IPFS behaviour,  Changelog for 0.10.0)
- Hide `extract_headers_path`, `extract_headers_ttl`

This week:
- Come up with the most constrained permission set for followers, Try it out, run cluster using that, raise a PR
- Review the CRDTs work


### Questions, announcements and comments

* Should we push the time back for standup if folks are usually late?
* Want to do some team summit planning now or tomorrow?
* Thanks for starting the daily Slack standup -- it's been super helpful for me, even though I sometimes miss my report -- I'll keep working on being more consistent there (mhz)

### Other business

* Hector wants to be OOO next week
 


---
---
## Standup meeting - 2019-02-26

### Updates since last time

##### @hsanjuan

Last week:

- Merge things for 0.10.0
- CRDTs: figure out state import/upgrade with two different consensus layers etc
- Start removing *Serial types.

This week:

- Teamweek agenda
- either gx bubbling or waiting for go.mod and enabling go.mod
- CRDT paper/review of things
- Ideally 0.10.0 RC1. Docs and changelogs


##### @lanzafame

Last week:

- CR go-ds-crdt
- Allocator/Informer/Monitoring revamp document
- minor tracing fixes

This week:

- start implementing accural failure detection
- help Kubuxu with go mod migration in ipfs org
- some more tracing/metrics improvements
- solidify a plan for the allocator/informer revamp


#### @mhz

Last week: 

This week:


#### @kishansagathiya

Last week:
- Finished allocation PR https://github.com/ipfs/ipfs-cluster/pull/647
- RPC Authorization for Cluster (Ongoing)
- Merkle-CRDT Paper (ongoing)

This week:
- RPC Authorization for Cluster 
- Merkle-CRDT Paper
- Review go-ds-crdt https://github.com/ipfs/go-ds-crdt/pull/1

### Questions, announcements and comments

* How do you...?
* What is...?

### Other business

---
---
## Standup meeting - 2019-02-19

### Updates since last time

##### @hsanjuan

Last week:

This week:


##### @lanzafame

Last week:

This week:


#### @mhz

Last week: 

This week:


#### @kishansagathiya

Last week:
- Addressed reviews for RPC PR and PinPath PR https://github.com/libp2p/go-libp2p-gorpc/pull/38 https://github.com/ipfs/ipfs-cluster/pull/634
- Worked on RPC Authorization for Cluster (https://github.com/ipfs/ipfs-cluster/issues/666)


This week:
- RPC Authorization for Cluster 
- Finish User Allocations PR https://github.com/ipfs/ipfs-cluster/pull/647 (After PinPath PR gets merged)
- The CRDT Paper

### Questions, announcements and comments

* How do you...?
* What is...?

### Other business

---
---
## Standup meeting - 2019-02-12

### Updates since last time

##### @hsanjuan

Last week:

- Lots of progress on CRDT
- Reviews for Kishan
- Reviews for Adrian
- User support
- CRDT paper


This week:

- Tests for CRDT module and start writing down foreseeable problems and innefficiencies
- Put more time into team summit planning
- 0.9.0 release


##### @lanzafame

Last week:

* Wrote metrics/tracing local deployment guide for cluster website
* Investigated solutions to a shortcoming in the way we deployed EKS with terraform
* fix ci on go-mod prs
* finished release notes
* RPC permission feedback
* PRed fix for #658 and addressed feedback: https://github.com/ipfs/ipfs-cluster/pull/659

This week:

* Do 0.9.0 release candidate


#### @mhz

Last week: 

This week:


#### @kishansagathiya

Last week:
- Raised a PR for Permissioned RPC endpoints https://github.com/libp2p/go-libp2p-gorpc/pull/38
- Addressed reviews on PinPath PR https://github.com/ipfs/ipfs-cluster/pull/634

This week:
- Test modified RPC library with cluster
- Authorization for REST API https://github.com/ipfs/ipfs-cluster/issues/621
- Go through CRDT Paper

### Questions, announcements and comments

* How do you...?
* What is...?

### Other business

- Team summit




---
---
## Standup meeting - 2019-02-05

### Updates since last time

##### @hsanjuan

Last week:

- Review pinPath several times
- Package managers call with Matt, Eric, Mhz
- Build filecoin client and submit a PR
- Address feedback for feat/datastore and libp2p-raft (waiting for OK)
- Start CRDT-consensus component implementation

This week:

- Continue CRDT consensus component implementation
- Finish PinPath PR
- Guide Adrian through release process



##### @lanzafame

Last week:

- Metrics/Tracing merged :tada: (thanks Hector)
- Begin implementing accural failure detection into monitoring component
- Reviewed initial cube poc implementation
- Continued on with some work on the go-mod migration

This week:

- Do a release of ipfs-cluster (https://cluster.ipfs.io/documentation/developer/release/)
- reviews open PRs for any that need tracing/context.Context additions 
- spin up testing infra
- Write docs on metrics/tracing for cluster website
- Put initial accural failure detection PR up
- Dig through email backlog


#### @mhz

Last week: 

This week:


#### @kishansagathiya

Last week:
- Started work on Authorization for RPC (Going through docs, older release notes, collaberative pinsets related RFCs)
- Support PinPath, UnpinPath (resolve before pinning)
- Filecoin: Was able to fully try out filecoin. with mining, connect to swarm etc, went through docs regarding how it works, specs for storage and retrival markets,

This week:
- Come up with specific use case of rpc authN/authZ for cluster and RFC
- Start on authN/authZ for REST APIs
- Finally PinPath PR merged, including https://github.com/ipfs/ipfs-cluster/issues/657
- Filecoin: ?


### Questions, announcements and comments

* Hector:
  * I want to propose a daily async standup (via slack or irc)

### Other business

---
---
## Standup meeting - 2019-01-29

### Updates since last time

##### @hsanjuan

Last week:

- Reviews
- Process feedback on CRDTs
- Mostly finish datastore state component and migration to it (need to polish godocs)

This week:

- Start new consensus module
- Deeper look to gx problems in feat/expvar
- Filecoin friday?
- Reviews


##### @lanzafame

Last week:
- Embarked on the endeavour to migrate ipfs/libp2p to go modules
- Attempted to hack around the opencensus import issues
- Reading/thinking about different cluster connectors
- Tried my hand at writing a dht node thing that works like cluster but uses findprovs instead of pin ls
- Tried to running cube, currently not working due to unpublished forked dep, @victor is aware and working on this

This week:

- See if I can bubble up go modules across the ipfs/libp2p ecosystem, only an 'issue' for packages tagged >=v2
- 


#### @mhz

Last week: 

This week:


#### @kishansagathiya

Last week:
- Support PinPath, UnpinPath (resolve before pinning) https://github.com/ipfs/ipfs-cluster/pull/634
- Getting started with filecoin (installation, tried to run some mining commands but troubleshooting required)

This week:
- Finish https://github.com/ipfs/ipfs-cluster/pull/647(API: Allow user to set peer allocations for pinning)
- Start on permissioned RPC and HTTP APIs

### Questions, announcements and comments

* How do you...?
* What is...?



### Other business
---
---
## Standup meeting - 2019-01-22

### Updates since last time

##### @hsanjuan

Last week:

* Some progress in datastore state branch
* Remove snaps
* Met with Samuli regarding CRDTs
* Reviews

This week:

* Not much, possibly continue with datastore branch and review PRs


##### @lanzafame

Last week:

- address metrics/tracing PR feedback
- help out the gateway tiger team by adding tracing to go-ipfs
- meet with @eefahy re cluster k8s costings

This week:

- repackage opencensus with gx, still not fully working on travis or jenkins
- see if there is some way to move to go mod faster so I don't have to waste time gxing opencensus again
- spec out monitoring revamp

#### @mhz

Last week: 

This week:


#### @kishansagathiya

Last week:
- Support PinPath, UnpinPath (resolve before pinning) https://github.com/ipfs/ipfs-cluster/pull/634
- Pin file only to certain nodes https://github.com/ipfs/ipfs-cluster/pull/647

More details at https://github.com/kishansagathiya?from=2019-01-15&to=2019-01-22&org=ipfs&year_list=1

This week:
- Respond to the feedback given for #634 and #647,
- Go through libp2p rpc library and come up with a plan on how to do permission with rpc

### Questions, announcements and comments

* 20% time
* What is...?

### Other business

---
