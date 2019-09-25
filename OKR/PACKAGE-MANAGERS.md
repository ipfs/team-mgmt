# Package Manager OKRs

We frame our ongoing work using a process based on quarterly Objectives and Key Results (OKRs). Objectives reflect outcomes that are challenging, but realistic. Results are tangible and measurable.

## 2019 Q4

### Objective: Users can quickly add, update, and transfer large package repositories using IPFS.

* Update: Package _maintainers_ care about how much time it takes to import/update a new package into a package repository. They won't use IPFS if it slows them down (too much).
* Add: Package _maintainers_ won't touch IPFS if it takes several days to import the package repository.
* Fetch: Package manager _users_ won't use IPFS to download their packages if it's slower and/or consumes significantly more bandwidth than HTTP.

TODO: We could phrase this as something like "ipfs is a viable transport for package managers."

#### Key Results

By order of priority,

* P0: Update - IPFS can quickly update a large package repository.
* P1: Fetch - IPFS can quickly and efficiently fetch packages from a large package repository.
* P2: Add -  IPFS can quickly add a large package repository.

**Rational**

Exploration in Q2 demonstrated that we could improve add performance by a factor of 2 (at least) but that factor disappeared on HDDs. While there's still some experimentation to be done, it's not clear that we can improve go-ipfs performance to a point where an _entire_ large package repository can be re-added whenever it changes.

While package repositories are large, they tend not to change _all_ that much on a daily basis. We can side-step the add performance issues by ensuring that package maintainers can easily and efficiently _update_ package repositories stored in IPFS.

Finally, while we've been focusing on how to ensure IPFS meets the needs of package _maintainers_, we've neglected the end user. It's unlikely that a package manager would choose to _exclusively_ use IPFS and end-users won't put up with IPFS unless it's at least as fast as HTTP and reasonably efficient. This came up when one of our partners found that using IPFS to distribute docker images within a fast datacenter network was no faster than going directly to docker-hub.

**Not Included**

* IPNS: To build a fully decentralized package manager, IPNS is a must. However, to get in the door with existing package managers, IPFS just needs to be a viable _transport_.
* Performant GC: Package maintainers often keep old packages around (TODO: check this) so GC isn't all that important. Package manager _users_ can throw away their local repo when it grows too large (i.e., treat it like a cache).
* Pinning Usability (named pins, etc.): While a pain-point and embarrassing UX issue, pinning and pin management is not a show-stopper for package managers.

##### P0: Update (P0)

IPFS can quickly update a large package repository.

TODO: "quickly" should be defined in terms of normal package update procedures used by package maintainers for some package manager. This could be:

* Updating from one snapshot to the next.
* Mounting the repository locally and having the package maintenance tools operate on it directly.

##### P1: Fetch

IPFS can quickly and efficiently fetch packages from a large package repository.

TODO: define "quickly and efficiently" in terms of beating HTTP.

TODO: consider breaking this into two KRs? In the past, we had one for efficiency and one for throughput.

##### P2: Add

IPFS can quickly add a large package repository.

TODO: "quickly" should be defined in terms of adding some well-known package repo or test dataset.

TODO: We may want to break this into "can quickly add a repository of large packages" and "can quickly add a large repository of small packages". Again, we need to look at known package repositories.

#### Initiatives

##### P0: Mount

**KR**: Update
**Owner:** @djdv

Allows us to easily add/remove packages from an existing file-system based package repository using normal unix tools.

Bonus: Allows package maintainers to directly manage package repositories inside IPFS without having to keep two copies of the repo.

##### P0: UnixFSv1.5 (metadata)

**KR**: Update
**Owner:** @achingbrain

Allows us to use tools like rsync to keep a package repository up-to-date without re-adding the entire repo.

Bonus: Allows us to support package repositories that require timestamps and modes.

##### P1: Bitswap

**KR**: Fetch
**Owner:** @dirkmc

Improve bitswap performance and reduce bandwidth overhead.

##### P1: DAG Traversal

**KR**: Fetch
**Owner:** @dirkmc (?)

Improve block prefetching when downloading a file so we can actually saturate bitswap.

##### P2: Add/MFS

**KR**: Add
**Owner:** @aschmahmann (?)

`ipfs add` needs to be fast. Given our exploration during Q3, it looks like we'll need to improve the performance of go-mfs to achieve this.

##### P3: Datastore Performance

**KR**: Add
**Owner:** @stebalien

We should make badger the default datastore unless we run into any final stumbling blocks.

* Cluster has been using badger for a while and their only complaint is memory usage.
  * We may need to dynamically/automatically tune badger's up-front memory usage.
* We still have a few remaining issues to fix:
  * Make sure GC actually garbage collects: https://github.com/ipfs/go-ds-badger/issues/54
  * Investigate Windows crash/recovery issue reported by @djdv.
  * Implement periodic datastore-level garbage collection: https://github.com/ipfs/go-ds-badger/issues/51

#### Alternatives

These are some alternative initiatives that _could_ have addressed the KRs.

* Add/Update: A stand-alone IPFS "dropbox" tool. We could write an entirely new tool that simply makes a directory available to the IPFS network using the filestore. Files would be automatically added/removed from IPFS as they're added/removed from the directory.
  * Pro: Many users would love this kind of tool.
  * Con: Could be a _lot_ of work.
  * Con: We want mount support and metadata _anyways_.
* Update: Out-of-band metadata: Instead of storing timestamps in files to enable rsync, we could store them out-of-band.
  * Pro: Better deduplication.
  * Con: Out-of-band data can confuse users (it won't be replicated along with the files).
  * Con: We need to store some metadata (modes, etc.) anyways.
  * Con: Some package managers expect files to have accurate timestamps (TODO: check this).
  * Meh: We're planning on storing metadata in directories, not files. Directories are likely to be unique.
* Update: A special-purpose rsync tool: We could add a special-purpose `ipfs rsync` command to sync a directory in IPFS with a directory outside of IPFS.
  * Pro: Pretty simple to implement.
  * Con: Unlike mount, the files would need to live in IPFS and outside IPFS.
  * Con: To make this work without timestamps inside IPFS, we'd need the user to pass some kind of "add if modified since" date. That's pretty poor UX.

### Objective: Engage with the package manager community to demonstrate how IPFS meets their needs.

While simply working towards our goal to integrate IPFS and package managers will help drive improvements to the protocol and core implementations, the end goal is to actually _integrate_ IPFS and package managers. To that end, we can't stop at improving the core implementations; we need to demonstrate those improvements to the community.

#### Key Results

The key results for this objective mirror the top three key results in the previous objective.

##### P1: Update Performance

Communicate update performance improvements to the community.

##### P1: Communicate fetch performance improvements

Communicate fetch performance improvements to the community.

##### P3: Communicate add performance improvements

Communicate add performance improvements to the community.

#### Initiatives

In each of these initiatives, we plan to pair with a user/community member.

##### Demo: OpenSuse + Mount

**Owner:** @djdv

Ship a demo of managing an RPM (YaST) repository directly via a mounted IPFS filesystem.

##### Blog: Docker over IPFS

**Owner:** @dirkmc (and friends)

Ship a blog post about speeding up CI by using go-ipfs to distribute docker images.

(docker _is_ a package manager, or close enough)

##### Demo: Demonstrate performance improvements adding NPM to IPFS

**Owner** @aschmahmann/@achingbrain

Ship a demo of adding NPM to IPFS.

TODO: I'd like to find a better way to demonstrate improved add performance.

### Objective: IPFS ships a release.

All this work is useless unless IPFS can ship a release. This will likely mean re-prioritizing as necessary to:

1. Help test-infra build out the testground test network.
2. Help test-infra build test cases for go-ipfs.
3. Help fix the DHT (shipping a go-ipfs 0.5.0 release that _doesn't_ fix the DHT is not an option).

#### Key Results

IPFS has shipped 0.5.0 release.

#### Initiatives

Unfortunately, we're not yet at a place where we can fully plan out _how_ this team can help with this project but we can make a decent start:

Roadmap:

1. Testground is up and running and can test a >10K node DHT.
2. Proposed DHT fixes are tested against various network scenarios and we are confident they will significantly improve the state of the network.
3. We cut a release.

##### P0: Fix the DHT

@aschmahmann will likely be pulled into working on DHT fixes during the second half of the quarter (once we can actually start _testing_ DHT fixes).

##### P0: Test Infra Hack Week

If necessary, @stebalien, @raulk, and @daviddias (and possibly others) will meet up for a synchronous, distraction-free hack week some time between now and lab week to "ship the thing".

#### Alternatives

There are no alternatives. We:

1. Will not ship a release until we've fixed the DHT.
2. We need to ship a release this quarter.

## 2019 Q3

- [Package Manager 2019 Q3 OKRs](https://docs.google.com/spreadsheets/d/1AiNUL7vK5Jp8aa839UaMaI_AlBU5r6Bor-A40179I2A/edit#gid=1685270127)

## 2019 Q2

- [Package Manager 2019 Q2 OKRs](https://docs.google.com/spreadsheets/d/1YSeyWqXh3ImanRrTkYQHHkCofiORn68bYqM_KTLBlsA/edit#gid=1685270127)
