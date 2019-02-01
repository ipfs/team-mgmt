# Go IPFS Core Team OKRs

We frame our ongoing work using a process based on quarterly Objectives and Key Results (OKRs). Objectives reflect outcomes that are challenging, but realistic. Results are tangible and measurable.

## 2019 Q1

### Data transfer is fast and efficient
* It takes less than 48 hours to transfer 1TB dataset over Fast Ethernet (100Mbps)
* Bitswap refactor + improvements reduce number of duplicate blocks downloaded by 75%
* Transfers of sparsely provided data are roughly as efficient as fully provided content
* Awesome go-ipfs benchmark test suite exists comparing ipfs performance and transfer size relative to bittorrent
* Implement GraphSync to make accessing files in large directories log(n) faster

### Adding and providing large data sets works efficiently
* Create Provider Strategies system that is solely responsible for providing
* Implement provider strategy such that a user can add (and provide) npm or tr-wikipedia without turning off providing and without significantly impacting finding content
* Providing does not negatively impact go-ipfs's performance when fetching content.

### Datastore works efficiently for large data sets
* Complete development of benchmarks to test speed and reliability across a wide range of datastore sizes 
* A new datastore implementation, suitable for very large data volumes, is adopted as default in go-ipfs
 
### go-ipfs becomes a well maintained project
* Every non-trivial PR is first reviewed by someone other than @Stebalien.
* A work-tracking process is adopted that allows the team to easily track the highest priority unclaimed issues, see the status of in progress work, and know which PRs need review, easily.
* Every file with a non-trivial change gets fully documented. (!)

### go-ipfs is easy to integrate with
* Extract CoreAPI interface from go-ipfs
* Implement CoreAPI HTTP API
* A new flexible and performant RPC API is designed
* base32 is supported and enabled by default
* Refactored IPFS constructor
 
### Optimize developer velocity
* go-ipfs developers are no longer adversly affected by gx

### Complete outstanding endeavours that are still high priorities
* New fuse mount implementation replaces the existing one
* Add mutable methods (r+w) to the new mount implementation and get it building+tested on all supported platforms

## 2018 Q4

- [go-ipfs 2018 Q4 OKRs](https://docs.google.com/spreadsheets/d/139lROP7-Ee4M4S7A_IO4iIgSgugYm7dct620LYnalII/edit#gid=1720716278)
- [Open Planning Thread](https://github.com/ipfs/go-ipfs/pull/5474)
- [Previous Quarter Retrospective](https://docs.google.com/document/d/15m28CgV8aksgHsS_MlQKJhTP0LtgYobIkOIuSXew4WE/edit#heading=h.7bczaod8nf6g)

## 2018 Q3

- [go-ipfs 2018 Q3 OKRs](https://docs.google.com/spreadsheets/d/19vjigg4locq4fO6JXyobS2yTx-k-fSzlFM5ngZDPDbQ/edit#gid=274358435)
- [Planning document](https://docs.google.com/document/d/1U8OI5vSdUrgf1rZp_CGRQhQapB7MHkFwp4lTaCwdjJk/edit?pli=1#heading=h.f01yws78tokn)

## 2018 Q2

- [go-ipfs 2018 Q2 OKRs](https://docs.google.com/spreadsheets/d/1xIhKROxFlsY9M9on37D5rkbSsm4YtjRQvG2unHScApA/edit#gid=1720716278)

## 2018 Q1

- [go-ipfs 2018 Q1 OKRs](https://docs.google.com/spreadsheets/d/1clB-W489rJpbOEs2Q7Q2Jf1WMXHQxXgccBcUJS9QTiI/edit#gid=0)
