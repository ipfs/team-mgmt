# IPFS Project Team Structures - Working Groups & Research Groups

## Table of Contents

- [Description](#description)
  - [One line definition](#one-line-definition)
  - [Expanded description](#expanded-description)
- [Existing **Working** Groups](#existing-working-groups)
  - **Development and Maintenance:**
    - [JavaScript Core Dev](#javascript-ipfs-implementation)
    - [Golang Core Dev](#golang-ipfs-implementation)
    - [IPFS GUI](#ipfs-gui)
    - [IPFS Cluster](#ipfs-cluster)
    - [IPFS Infrastructure](#ipfs-infrastructure)
  - **Efforts to Support Specific Uses:**
    - [Integration with Web Browsers](#integration-with-web-browsers)
    - [Dynamic Data and Capabilities](#dynamic-data-and-capabilities)
    - [Decentralized Data Stewardship](#decentralized-data-stewardship)
    - [Local Offline Collaboration](#local-offline-collaboration-locol)
  - [**Project**](#project)
  - [**Community**](#community)
- [Existing **Research** Groups](#existing-research-groups)

## Description

The IPFS Project is developed by multiple teams from multiple organizations and both intermittent and continuous invidividual contributors. A structure was developed (and continues to evolve) around Working & Research Groups, OKRs, and PM best practices that were designed to support the already large and growing group of people to coordinate among each other at a global scale.

This document captures the Team Structures that emerged and that led to the many of the sucesses within the IPFS project, namely: Working Groups & Research Groups. At the end of this document, you will find pointers to Teams and Projects that have grown to become their own entities, namely: IPLD, libp2p and Multiformats.

#### One line definition

- **Working Group** - A cohesive team with measurable goals for each quarter. A Working Group needs to have a Captain, a set of people commited to it, and entry point repo and Objectives & Key Results defined per Quarter.
- **Research Group** - A set of people focused on exploring a specific vertical and output possible research surveys, tools, experiments, and other types of knowledge that can inform and help the work done by the Working Groups or spark the creation of new Working Groups all together.

#### Expanded description

**Working Groups**

Working Groups are teams of people that are appointed to research, develop, and deploy work under the working groups' scope. This structure is designed to provide clarity and direction to the project, enabling individual contributors to focus their time and energy on the areas they are most interested.

Each Working Group is free to experiment with setting their own pace, tracking work, and defining priorities. The only requirements are that the Working Group exposes its focus through OKRs to the rest of the org (common interface), that it assigns a Captain, creates an entry point repo and has at least 2 full time contributors dedicated to it.

Each contributor shouldn't carry responsibilities accross multiple working groups. This is not forbidden by any means but it is greatly discouraged as it will prevent the contributor from achieving full focus.

**Research Groups**

A set of people focused on exploring a specific vertical and output possible research surveys, tools, experiments, and other types of knowledge that can inform and help the work done by the Working Groups or spark the creation of new Working Groups all together.

Some great examples from this structure are: research-pubsub which led to the implementation of PubSub by the IPFS/libp2p teams; and research-crdt which lead to the creation of the Dynamic Data & Capabilities Working Group which todays tackles many of the challenges of building DApps on the distributed web.

A Research Group doesn't require a Captain or OKRs to be formed and having individuals that subscribe to multiple Research Groups isn't considered harmful.

A byproduct of both of these team structures achieves another important goal: making it easier for new users and contributors to subscribe to updates and get ramped up quickly to the current project focus.

## Existing Working Groups

- **Development and Maintenance:**
  - [JavaScript Core Dev](#javascript-ipfs-implementation)
  - [Golang Core Dev](#golang-ipfs-implementation)
  - [IPFS GUI](#ipfs-gui)
  - [IPFS Cluster](#ipfs-cluster)
  - [IPFS Infrastructure](#ipfs-infrastructure)
- **Efforts to Support Specific Uses:**
  - [Integration with Web Browsers](#integration-with-web-browsers)
  - [Dynamic Data and Capabilities](#dynamic-data-and-capabilities)
  - [Decentralized Data Stewardship](#decentralized-data-stewardship)
  - [Local Offline Collaboration](#local-offline-collaboration-locol)
- [**Project**](#project)
- [**Community**](#community)

### JavaScript IPFS implementation

- **Coordination**: https://github.com/ipfs/pm/blob/master/JS_CORE_DEV_MGMT.md
- **Roadmap**: https://github.com/ipfs/roadmap/blob/master/WG_JS_CORE.md
- **Working Group Mailing List**: js-ipfs-wg@ipfs.io
- **[Alan Shaw](https://github.com/alanshaw/): Captain**
- **`To be confirmed`: TPM**
- WG Repos Badge - [![](https://img.shields.io/badge/WG-JS%20CORE-%23ffd600.svg?style=flat-square)](https://github.com/ipfs/js-ipfs)

Develop the JavaScript implementation of the IPFS Protocol, js-ipfs.

**Responsibilities include**:
- Create the browser implementation of the IPFS Protocol.
- Create a great onboarding experience for new contributors.
- Upgrade and build dev tools (i.e AEgir).
- Define process and help achieve high quality sustainable open source modules.
- Set the guidelines for writing, maintaining and managing the JS codebases, test suites, and contributions.

### Golang IPFS implementation

- **Coordination**: https://github.com/ipfs/pm/blob/master/GOLANG_CORE_DEV_MGMT.md
- **Roadmap**: https://github.com/ipfs/roadmap/blob/master/WG_GO_CORE.md
- **Working Group Mailing List**: go-ipfs-wg@ipfs.io
- **[Steven Allen](https://github.com/stebalien): Captain**
- **[Erik Ingenito](https://github.com/eingenito): TPM**
- WG Repos Badge - [![](https://img.shields.io/badge/WG-GO%20CORE-%23375eab.svg?style=flat-square)](https://github.com/ipfs/go-ipfs)

Develop the Golang implementation of the IPFS Protocol, go-ipfs.

**Responsibilities include**:
- Create the server and reference implementation of the IPFS Protocol.
- Create a great onboarding experience for new contributors.
- Upgrade and build dev tools (i.e gx).
- Set the guidelines for writing, maintaining and managing the Go codebases, test suites, and contributions.

### IPFS GUI

- **Coordination**: https://github.com/ipfs/ipfs-gui
- **Roadmap**: https://github.com/ipfs/roadmap/blob/master/WG_GUI.md
- **Working Group Mailing List**: gui-wg@ipfs.io
- **[Oli Evans](https://github.com/olizilla): Captain, TPM**
- WG Repos Badge - Badge n/a yet

Making IPFS GUIs simple, accessible, reusable, and beautiful.

**Responsibilities include**:
- Fight complexity at every step.
- IPFS must be usable and comprehensible for everyone.
- Publish and promote this work. Make doing the right thing the easiest thing.
- Demonstrate the nature of the system with effortless, coherent, and compelling interfaces.

### IPFS Cluster

- **Coordination**: https://github.com/ipfs/ipfs-cluster
- **Roadmap**: https://github.com/ipfs/roadmap/blob/master/WG_CLUSTER.md
- **Working Group Mailing List**: cluster-wg@ipfs.io
- **[Hector Sanjuan](https://github.com/hsanjuan): Captain, TPM**
- WG Repos Badge - Badge n/a yet

The IPFS Cluster Working Group is the team implementing IPFS Cluster.

**Responsibilities include**:
- Design and implement IPFS Cluster.
- Provide knowledge and APIs that organizations with large data sets can use.

### IPFS Infrastructure

- **Coordination**: http://github.com/ipfs/infra
- **Roadmap**: https://github.com/ipfs/roadmap/blob/master/WG_INFRASTRUCTURE.md
- **Working Group Mailing List**: infra-wg@ipfs.io
- **[Erin Fahy](https://github.com/eefahy): Captain, TPM**
- WG Repos Badge - Badge n/a yet

Tools and systems for the IPFS community.

**Responsibilities include**:
- Manage and maintain the IPFS HTTP Gateway.
- Manage and maintain the IPFS Bootstrapper nodes.
- Manage and maintain the IPFS pinning service, pinbot.
- Monitor services and hosts used by the IPFS dev teams.
- Provide wisdom to other users that want to host IPFS nodes.
- Enable dev teams to run reliable, efficient tests and manage continuous deployment.
- Configure automation for defined development policies like release cycles and code quality reporting.

### Integration with Web Browsers

- **Coordination**: https://github.com/ipfs/in-web-browsers
- **Roadmap**: https://github.com/ipfs/roadmap/blob/master/WG_INTEGRATION_IN_WEB_BROWSERS.md
- **Working Group Mailing List**: wb-wg@ipfs.io
- **[Marcin Rataj](https://github.com/lidel): Captain, TPM**
- WG Repos Badge - Badge n/a yet

The Integration with Web Browsers Working Group designs and implements browser integrations, web extensions, service workers and any other strategy that contributes to IPFS being integrated with the web today.

**Responsibilities include**:
- Browser integrations (Firefox, Chrome, Brave and others).
- IPFS Web Extension.
- IPFS Service Worker.
- IPFS Web Worker.
- Collaborate with with browser vendors.
- Identify blockers and design constraints of each integration, figuring out new ways to go around those limitations.
- Increase the adoption of the distributed web by making it easy for users to access it.
- Define specifications for address schemes and advocate for those schemes to be adopted.

### Dynamic Data and Capabilities

- **Coordination**: http://github.com/ipfs/dynamic-data-and-capabilities
- **Roadmap**: https://github.com/ipfs/roadmap/blob/master/WG_DYNAMIC_DATA_AND_CAPABILITIES.md
- **Working Group Mailing List**: ddc-wg@ipfs.io
- **[Pedro Teixeira](https://github.com/pgte): Captain, TPM**
- WG Repos Badge - Badge n/a yet

Research and development of building blocks that enable collaborative applications, providing solutions for security, identity, access control, concurrency, synchronization, offline, and near-real-time collaboration. This WG was born out of the results created by the [CRDT Research Group](http://github.com/ipfs/research-crdt).

**Responsibilities include**:

- Research and implement CRDTs on top of IPFS, creating building blocks that can be used by other applications.
- Research Cryptographic ACLs (Capabilities Systems) and create building blocks to implement them.
- Apply this research and implementation to products like PeerPad, validating the solutions and defining new problems to be solved.

### Decentralized Data Stewardship

- **Coordination**: https://github.com/ipfs/decentralized-data-stewardship
- **Roadmap**: https://github.com/ipfs/roadmap/blob/master/WG_DECENTRALIZED_DATA_STEWARDSHIP.md
- **Working Group Mailing List**: dds-wg@ipfs.io
- **[Michelle Hertzfeld](https://github.com/meiqimichelle): Captain, TPM**
- WG Repos Badge - Badge n/a yet

User research, collaborations, and products that support holding data together on decentralized networks.

**Responsibilities include**:

- Participate in groups such as [Data Together](https://datatogether.org/)
- Conduct [user research around managing large volumes of data](https://github.com/ipfs/user-research/tree/master/large-volumes) on IPFS
- Support collaborations between IPFS and community members who need to manage large volumes of data
- Research and prototype policy layers for just and inclusive data stewardship on decentralized networks

### Local Offline Collaboration (Locol)

- **Coordination**: https://github.com/ipfs/local-offline-collab
- **Roadmap**: TBD
- **Working Group Mailing List**: locol-wg@ipfs.io
- **[Molly Mackinlay](https://github.com/momack2): Captain, TPM**
- WG Repos Badge - [![](https://img.shields.io/badge/WG-Locol-%2340e0d0.svg?style=flat-square)](https://github.com/ipfs/local-offline-collab)


User research, collaborations, and features to make the knowledge and tools on the internet accessible and useful on partitioned, low-bandwidth, or intermittant networks.

**Responsibilities include**:

- Participate in communities like [Offline First](http://offlinefirst.org/)
- Conduct user research around offline and local-first use cases, communities, and best practices
- Support collaborations between IPFS and community members who are building tools for peer-to-peer sharing and collaboration in local/offline networks
- Research and prototype applications that utilize IPFS for local-first collaboration and resilient offline usage

### Project

- **Coordination**: https://github.com/ipfs/project
- **Roadmap**: https://github.com/ipfs/roadmap/blob/master/WG_PROJECT.md
- **Working Group Mailing List**: project-wg@ipfs.io
- **[David Dias](https://github.com/diasdavid): Captain, TPM**
- WG Repos Badge - [![](https://img.shields.io/badge/WG-Project-%233399ff.svg?style=flat-square)](https://github.com/ipfs/project)

The IPFS Project Working Group Community serves as the point of coordination for the IPFS Organization.

**Responsibilities include**:
- Maintain the IPFS Project Roadmap and Vision.
- Provide coaching to Working Groups to develop their own planning and goal-setting.
- Facilitate communication and alignment accross the organization.
- Research, develop and build new ways to help async teams coordinate at scale.
- Recognize needs of the project and develop solutions to meet them.

### Community

- **Coordination**: https://github.com/ipfs/community
- **Roadmap**: https://github.com/ipfs/roadmap/blob/master/WG_COMMUNITY.md
- **Working Group Mailing List**: community-wg@ipfs.io
- **[Mikeal Rogers](https://github.com/mikeal): Captain, TPM**
- WG Repos Badge - Badge n/a yet

Community outreach working group. Coordinates the communities around events, blog posts
documentation, automation and education.

- Evangelism (Events, Social Media)
- Editorial (Blogs, Documentation)
- Education (ProtoSchool, Demos)
- Automation (Probots, etc)

**Responsibilities include**:
- Help community members organize meetups for their own communities.
- Respond to requests for IPFS presence in conferences.
- Facilitate community content for social media channels.
- Publish regular updates to the community (blog posts and newsletters).
- Create Tutorials and Workshops to teach concepts about IPFS and the Distributed Web in ProtoSchool.
- Ensure that public forums (discuss.ipfs.io, irc, github, etc) have adequate moderation and responsive support.
- Ensure that the code of conduct is followed and provide appropriate support or response when violations occur.
- Author and improve documention.

## Existing Research Groups

The list of existing research groups is:
- https://github.com/ipfs/research-CRDT
- https://github.com/ipfs/research-blockchain-data
- https://github.com/ipfs/research-bitswap
- https://github.com/ipfs/research-p2p-video
- https://github.com/libp2p/research-pubsub
- https://github.com/libp2p/research-dht

## Projects that have evolved into their own entities

- [libp2p](http://github.com/libp2p/libp2p)
  - [OKRs](https://docs.google.com/spreadsheets/d/1HTXfgR5FyPTFhsTkFPRThkeMvHvCgJOaAs7BSl_vQ_0/edit)
  - [PM/Captain](https://github.com/mgoelzer)
- [IPLD](https://github.com/ipld/ipld/)
  - [OKRs](https://docs.google.com/spreadsheets/d/1Lfd91hi3nFlLRS1r-FHvK2ip2Ll6ukraufCgepw43bw/edit)
- [multiformats](https://github.com/multiformats/multiformats)
