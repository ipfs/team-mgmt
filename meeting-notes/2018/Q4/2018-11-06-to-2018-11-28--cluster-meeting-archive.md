## Standup meeting - 2018-11-28

### Updates since last time

##### @hsanjuan

Last week:

- Document about Cube
- Explored CRDT idea
  - It turns out it's what Orbit and Peerpad have been doing
- Starting writing everything I have seen around in our ecosystem as a research paper
- https://github.com/multiformats/go-multiaddr-net/pull/49
  - I was working to fix the https hostname issue in ctl

This week:

- Finish this and take it to the dynamic capabilities WG -pedro &co
- Review tracing
- Keep up with the proxy thing if there are news



##### @lanzafame

Last week:

* got metrics/monitoring PR up finally
* spent 3 days thinking/writing notes about Cube/Cluster


This week:

* clean up k8s stuff and write docs

#### @mhz

Last week: 

This week:


### Questions, announcements and comments

* How do you...?
* What is...?

### Other business

---
## Standup meeting - 2018-11-20

### Updates since last time

##### @hsanjuan

Last week:

* Roadmap
* Reading papers on CRDTs
* A couple of conference days



This week:

* More CRDTs - Expect to have an initial approach to iterate on, write RFC.
* Need to explore an idea with CRDTs (a hunch)
* Merge the proxy extraction
* Fix the header stuff
* I don't know if there as something else I really wanted to do for next release?
  * Ah yes, fix cluster-ctl
* Think about Cube

##### @lanzafame

Last week:

* wrote the OC gorpc plugin
* integrated OC plugin into gorpc itself
* add context.Contexts to exported ipfs cluster components

This week:

* finish up metrics/tracing, I nearly have everything going through from ctl to daemon
* get back to infra related stuff 


#### @mhz

Last week: 

- Took a day off for my birthday, yaaaay
- Roadmaps
- Cube proposal
- Design team stuffs -- esp hiring -- Visual Design Lead job posted!

This week:

- 50% 000 for American Thanksgiving and some dr appts
- Roadmapping/OKRing...and next, Financial Planning?!
- Cluster website/product/illustrations -- also will be next week


### Questions, announcements and comments

* How do you...?
* What is...?

### Other business

---

---
## Standup meeting - 2018-11-13

### Updates since last time

##### @hsanjuan

Last week:

- Roadmap stuff
- Took some days off
- A little bit crdts

This week:

- crdts
- mid-quarter-okr-evaluation
- 


##### @lanzafame

Last week:

- deployed ipfs-cluster to k8s
- dealt with cert/tls issues
- started adding stats handlers to go-libp2p-gorpc
- started developing opencensus plugin for go-libp2p-gorpc

This week:

- finish go-libp2p-gorpc stats stuff
- chatting to @Stebalien about multiaddr-{net,dns} and tls
- clean up ipfs-cluster-k8s terraform/helm
- write k8s deployment docs

#### @mhz

Last week: 

- Mostly Roadmapping :-/
- Finished DDS v1 WG Roadmap (yesterday)
- But also! Started and finished (yesterday) write-up re: a product team for DIY pinning service
- Continued refining Cluster product map with Adrian (in Mural)
- Did mid-q OKR scores in the spreadsheet (yesterday)

This week:

- Continue with Roadmapping -- I think the next thing is comparing all the write-ups?
- I've reserved time with Agata to iterate on Cluster illustrations and website. Basically, I want to start to move the concepts we've been working on in Mural to the public website.


### Questions, announcements and comments

* How do you...?
* What is...?

### Other business

---


---
## Standup meeting - 2018-11-06

### Updates since last time

##### @hsanjuan

Last week:

* 0.7.0 Release
* Infra upgrades to new release (also go)
* Doc/website upgrades
* Go-ipfs roadmap meeting
* Cluster mural meeting with @mhz
* Print a dozen CRDTs papers with interesting titles
* Start going through and reading



This week:

* Roadmap stuff
* CRDT
* Review proxy extraction



##### @lanzafame

Last week:

- deploying k8s to AWS and all the little debugging things that went all with that.
- PRs to fix stuff in the k8s deployment repo
- lots of reading about AWS and k8s and load balancers and IAM roles and terraform
- mural (cluster use case) discussion with @mhz
- testing out the new IPFS webui and providing feedback

This week:

- finish up setup of k8s cluster deployment
- chat with @eefahy about some deployment decisions
- finish up metrics and tracing docs and PR


#### @mhz

Last week: 

- Product diagramming with Ardrian and Hector
- Many meetings - incl. IPFS Product WG roadmapping stuff, and distributed data stewardship product chats with Matt

This week:

- Review Cluster roadmap
- Write DDS roadmap -- proposal for everyone else to review
- Review IPFS Project WG roadmap
- Summarize Cluster product Mural into 'proposal'
- If there's time, keep hiring for more designers on IPFS moving (this will help Cluster get more user research and illustration in the long run)


### Questions, announcements and comments

* How do you...?
* What is...?

### Other business

---
