## Standup meeting - 2019-01-15

### Updates since last time

##### @hsanjuan

Last week:

* Reviews and merge for `status --filter`
* Start datastore-based state component
* Related to the above: Revamp state serialization management in go-libp2p-raft (https://github.com/libp2p/go-libp2p-raft/pull/50)
* Run the "fix the gateways meeting"
* Fix the http-api-docs generator and push new Go HTTP API documentation to docs.ipfs.io
* Fix tests in expvar branch
* Review expvar PR
* Merge go-libp2-gorpc
* `?stream-channels=false` in REST API
* Re-do the proxy header thing so that it works
* Gx and bubble `rs/cors` newer version to go-ipfs
  * Fix tests because CORS handling slightly changed in go-ipfs-cmds and go-ipfs
* Handle CORS and OPTIONS in rest API
* Small fixes in sharness
* Small fixes in `config`
* Documentation for 0.8.0 and changelog and blogpost
* 0.8.0-rc1 release and deployment

This week:

* Release stable
* Work on CRDT paper
* Work on dsstore (datastore state)
* Review expvar




##### @lanzafame

Last week:

- got most PR comments addressed on metrics/tracing, may have hit a roadblock with dedupping protobuf gx package today
- some reviews
- finished gorpc tracing pr

This week:

- add rm-vanity-imports to gx-go
- meeting with eefahy about cluster/infra related stuff
- metrics/tracing
- research kubernetes operators
- redeploy k8s ipfs-cluster with new kustomize bootstrapless deployment

#### @mhz

Last week: 

This week:


#### @kishansagathiya

Last week:

Reviews-
- Fix #632: Add --no-stream to ipfs-cluster-ctl
- Fix #382 (again): A better strategy for handling proxy headers
- config: Fix confusing errors
- sharness: Fix test typo causing an empty grep
- Sharness: update configuration files used in sharness
- Documentation changes for 0.8.0

Ongoing Work:
- WIP PR for Support PinPath, UnpinPath (resolve before pinning)
- Started working on an api.Client which supports load balancing among multiple cluster peers

More details and links at https://github.com/kishansagathiya?tab=overview&from=2019-01-08&to=2019-01-15

This week:
- Finish WIP PR for Support PinPath, UnpinPath (resolve before pinning) https://github.com/ipfs/ipfs-cluster/pull/634
- Ability to Add/Pin file only to certain nodes among one cluster https://github.com/ipfs/ipfs-cluster/issues/646

### Questions, announcements and comments

* Next release will be championed by Adrian and has tracing

### Other business

---
## Standup meeting - 2019-01-08

### Updates since last time

##### @hsanjuan

Last weeks:

- 35c3, not much relevant to us
- StatusAll filter reviews
- "stream-channels" option for /add
- Collaborative RFC update https://github.com/ipfs/ipfs-cluster/pull/467
- Make EXWM usable
- Merge ipfs-cluster-ctl with HTTPs

This week:

- RELEASE
  - With status filters
  - With stream-channels
  - With tracing??
- go-datastore based storage for the cluster state
- start working on new consensus layer


##### @lanzafame

Last week:

- painted two rooms, planned kitchen reno
- fix https on ELB for k8s cluster

This week:

- planning of informer/allocator/failure detection revamp
- finishing gorpc pr
- finishing stats/tracing pr
- speak to Erin about TLS went missing on the ELB


#### @mhz

Last week: 

This week:

- Finishing prep for ESIP workshop next week (discovery workshop with Earth science data managers to validate hypotheses around where content addressing and p2p tech is exciting/useulf for them)
- Register for Code4Pib in February to do a similar workshop with librarian data managers
- Working with Victor on Cube -- MHz product stuff/website content ideas
- (Lots of interviews)



#### @kishansagathiya

Last week:

Added tests for /monitor/metrics/{metrics_type} https://github.com/ipfs/ipfs-cluster/pull/622

Status filters for `ipfs-cluster-ctl status` https://github.com/ipfs/ipfs-cluster/issues/445
Support PinPath, UnpinPath (resolve before pinning) https://github.com/ipfs/ipfs-cluster/issues/450

reviews
Feat/632: support stream-channels query parameter when adding https://github.com/ipfs/ipfs-cluster/pull/633


This week:


### Questions, announcements and comments

* How do you...?
* What is...?

### Other business

---

---
## Standup meeting - 2018-12-18

### Updates since last time

##### @hsanjuan

Last week:

* Reproducible Builds Summit
* 


This week:

* Fix headers in the ipfs proxy
* Bubble up manet and fix ctl with https issues
* Paperwork and OKRs
* Merge tracing?
* Release rc?


##### @lanzafame

Last week:

* finished moving from helm to kustomize (github.com/lanzafame/ipfs-cluster-k8s)
* wrote a significant portion of the deploying ipfs-cluster to kubernetes guide
* prepared for potential partner deployment
* interviewed for infra team

This week:

* finish k8s deploy guide
* OKRs
* metrics/tracing

#### @mhz

Last week: 

* capacity planning with IPFS re: PM and design roles
* planning, planning, planning, sigh
* Website PR YAY
* Design hiring

This week:

* Continue improvements on Cluster website
		* Responsive code
    * Content -- how to get product map from Mural to website
* DDS OKRs
* Design hiring
* Figure out what's going on with Cube
* I've cut myself off Instagram, hehe


#### @kishansagathiya

Last week:
Mostly onboarding, but also
Remove `proxy_` and `Proxy` from proxy config (https://github.com/ipfs/ipfs-cluster/pull/617)

This week:
Added tests for /monitor/metrics/{metrics_type} (https://github.com/ipfs/ipfs-cluster/pull/622)
Was also trying to come up with some easy way to manually try cluster, but then found https://github.com/ipfs/ipfs-cluster/blob/master/docker-compose.yml (which is cool and serves the purpose)

### Questions, announcements and comments


* How do you...?
* What is...?


### Other business

* OKRs


---

## Standup meeting - 2018-12-12

### Updates since last time

##### @hsanjuan

Last week:

This week:


##### @lanzafame

Last week:

* convert kubernetes deployment from helm to kustomize


This week:

* continue documenting k8s deployment
* rebase and address feedback on metrics/tracing pr
* interview for infrastructure team


#### @mhz

Last week: 

This week:


#### @kishansagathiya

Last week:

This week:

* Getting onboarded


### Questions, announcements and comments

* How do you...?
* What is...?

### Other business

---
## Standup meeting - 2018-12-04

### Updates since last time

##### @hsanjuan

Last week:

- CRDTs
- multiaddr-net got merged but bubbling will be horrible
- Reviewed tracing stuff

This week:

- CRDTs


##### @lanzafame

Last week:

- Docker compose secrets issue, I hacked it into cluster but then thought I should only add it to docker which turned out to be harder than it sounds
- Restructuring k8s deployment stuff to be easier to configure for new deployments, also so it is easier to follow in a documentation sense

This week:

- Continue with k8s cleanup/docs
- Respond to metrics/tracing review comments


#### @mhz

Last week: 

This week:


### Questions, announcements and comments

* How do you...?
* What is...?

### Other business

---
