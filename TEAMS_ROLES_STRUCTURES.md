# IPFS Project Teams, Roles & Structures

## Table of Contents

- [Description](#description)
- [Team Structures](#team-structures)
  - [One line definition](#one-line-definition)
  - [Expanded description](#expanded-description)
- [Team Roles](#team-roles)
  - [IPFS BDFL](#ipfs-bdfl)
  - [IPFS Project Lead](#ipfs-project-lead)
  - [IPFS Project Coordinator](#ipfs-project-coordinator)
  - [Working Group Captain](#working-group-captain)
  - [Working Group Technical Project Manager](#working-group-technical-project-manager)
- [Active Teams](#active-teams)
  - [**Working** Groups](#working-groups)
    - [**Project**](#project)
    - [**Community**](#community)
    - `Development and Maintenance of the Protocol:`
      - [**JavaScript Core Dev**](#javascript-ipfs-implementation)
      - [**Golang Core Dev**](#golang-ipfs-implementation)
      - [**IPFS GUI**](#ipfs-gui)
      - [**IPFS Cluster**](#ipfs-cluster)
      - [**IPFS Infrastructure**](#ipfs-infrastructure)
    - `Efforts to Support Specific Uses:`
      - [**Integration with Web Browsers**](#integration-with-web-browsers)
      - [**Dynamic Data and Capabilities**](#dynamic-data-and-capabilities)
      - [**Decentralized Data Stewardship**](#decentralized-data-stewardship)
      - [**Local Offline Collaboration**](#local-offline-collaboration-locol)
  - [**Research** Groups](#research-groups)

## Description

The IPFS Project is developed by multiple teams from multiple organizations and both intermittent and continuous invidividual contributors. A structure was developed (and continues to evolve) around Working & Research Groups, OKRs, and PM best practices that were designed to support the already large and growing group of people to coordinate among each other at a global scale.

This document presents the the existing teams that emerged and that led to the many of the sucesses within the IPFS project, their structure(namely: Working Groups & Research Groups) and a definition of roles existing in the IPFS org. At the end of this document, you will find pointers to Teams and Projects that have grown to become their own entities, namely: IPLD, libp2p and Multiformats.

## Team Structures

### One line definition

- **Working Group** - A cohesive team with measurable goals for each quarter. A Working Group needs to have a Captain, a set of people commited to it, and entry point repo and Objectives & Key Results defined per Quarter.
- **Research Group** - A set of people focused on exploring a specific vertical and output possible research surveys, tools, experiments, and other types of knowledge that can inform and help the work done by the Working Groups or spark the creation of new Working Groups all together.
- **Tiger Team** - A small, temporary group of people aimed at solving a specific problem or building a particular feature. A tiger team needs a DRI that drives the team's engagement and agenda, and a set of ad hoc communication channels to empower quick iteration amongst teammates.

### Expanded description

**Working Groups**

Working Groups are teams of people that are appointed to research, develop, and deploy work under the working groups' scope. This structure is designed to provide clarity and direction to the project, enabling individual contributors to focus their time and energy on the areas they are most interested.

Each Working Group is free to experiment with setting their own pace, tracking work, and defining priorities. The only requirements are that the Working Group exposes its focus through OKRs to the rest of the org (common interface), that it assigns a Captain, creates an entry point repo and has at least 2 full time contributors dedicated to it.

Each contributor shouldn't carry responsibilities accross multiple working groups. This is not forbidden by any means but it is greatly discouraged as it will prevent the contributor from achieving full focus.

**Research Groups**

A set of people focused on exploring a specific vertical and output possible research surveys, tools, experiments, and other types of knowledge that can inform and help the work done by the Working Groups or spark the creation of new Working Groups all together.

Some great examples from this structure are: research-pubsub which led to the implementation of PubSub by the IPFS/libp2p teams; and research-crdt which lead to the creation of the Dynamic Data & Capabilities Working Group which todays tackles many of the challenges of building DApps on the distributed web.

A Research Group doesn't require a Captain or OKRs to be formed and having individuals that subscribe to multiple Research Groups isn't considered harmful.

> A byproduct of both of these team structures achieves another important goal: making it easier for new users and contributors to subscribe to updates and get ramped up quickly to the current project focus.

**Tiger Teams**

Tiger teams are a small, temporary group of people usually formed to solve a specific problem or build a particularly complex feature. They frequently form when significant iteration/collaboration across team or project boundaries is required to achieve success. Once the objective is achieved, the tiger team dissolves back into their normal working groups.

Some great examples that would likely benefit from a tiger team include: a scoped collaboration between infra, go-ipfs, and Libp2p on a specific issue; a complex and envolved feature on the intersection of IPFS and IPLD; or a specific time-sensitive project involving members of the community, gui, and js-ipfs working groups.

A tiger team has a DRI (directly responsible individual) that drives the team's engagement and agenda. They are responsible for initiating communication channels and ensuring the group has a unified definition of success they drive toward efficiently. Tiger teams interface through a set of temporary ad hoc communication channels (such as an IRC channel, github project, mumble standup, weekly call, email list, slack etc) to empower quick iteration amongst teammates.

## Team Roles

The individual contributors to the IPFS Project and Org often find themselves wearing many hats while performing their day to day tasks or on the projects they are focused on. We enable this by design to make the IPFS Org very permeable and empower each team to find its perfect balance for the challenges they are facing.

### IPFS BDFL

> Benevolent Dictator for Life

Responsibilities include:
- Lead the IPFS Project at a long term Scale
- Represent the IPFS Project to the multitude of communities
- Take responsibility in setting the direction of the project
- Set the key priorities for the project

This role is currently taken by [**Juan Benet**](https://github.com/jbenet), original creator of the IPFS Project.

### IPFS Project Lead

> Captain of the Captains. Analogous to the Captain/Tech Lead in each Working Group.

Responsibilities include:
- Identify unique opportunities for growth and deploying of the Protocol
- Lead direction of the implementation of the protocol (e.g. get IPFS to 1.0.0)
- Lead, write and review specs and documentation
- Curate our participation in external events
- Curate our major internal events (i.e. IPFS Conf, IPFS Camp & Dev Meetings)
- Direct and participate in the design of technical aspects of the protocol
- Align teams to build solutions for IPFS technical challenges

This role is currently taken by [**David Dias**](https://github.com/daviddias/)

### IPFS Project Coordinator

> Master Overseer of Getting Things Done. Analogous to the Technical Project Manager / Project Manager in each Working Group.

Responsibilities include:
- Lead the quarterly planning process (OKRs) and respective retrospectives
- Lead PL IPFS Team and Project WG Meetings
- Design and implement clever systems for team productivity and feedback
- Create support systems and help team members grow in their roles
- Ensure that teams rely on a uniform structure with respective customizations as needed
- Create and maintain the platform for Resource allocation across teams and projects
- Ensure that there is a steady communication flow between teams and individual contributors

This role is currently taken by [**Molly Mackinlay**](https://github.com/momack2)

### Working Group Captain

The Working Group Captain is a champion for the Product and/or Focus Area. They take the lead on writing or guiding the conversation specs, documentation and other artifacts to support the team. The Captain is also the gatekeeper of the Working Group Roadmap and accumlator of the Working Group Knowledge, guiding the group to made good decisions.

Responsibilities include:
- A champion/tech lead for the focus area
- Guide and Gatekeeper of the Working Group Roadmap
- Decision disambiguator for the technical matters of the Working Group

### Working Group Technical Project Manager (TPM)

The Technical Project Manager (sometimes referenced as Project Manager, Program Manager, and cat herder) is a team enabler. They own the Quarterly Planning process including OKRs and Retrospectives. They ensure that the coordination strategy the WG selected is well executed (weekly syncs, taking notes, communicating needs to other WGs).

The Technical Project Manager should also have a role on contributing to the projects the Working Group is tackling and have an understanding of the technical challenges and needs from the team.

Some working groups have the same person playing both the Captain and Technical Project Manager role. This should be limited to situations where the Working Group is nascent or the team is small.

Responsibilities include:
- Team Catalist. Team Productivity and Fun optimizer.
- Coordinator for the Working Group
- Gatekeeper for OKRs
- High speed bridge for coordination with other Working Groups and Partners

## Active Teams

Here you can find the full list of active Teams inside the IPFS Org. In addition to the roles in each Team formation, we have as:

- `IPFS Project BDFL` - [**Juan Benet**](https://github.com/jbenet/)
- `IPFS Project Lead` - [**David Dias**](https://github.com/daviddias/)
- `IPFS Project Coordinator` - [**Molly Mackinlay**](https://github.com/momack2)

### Working Groups

- [**Project**](#project)
- [**Community**](#community)
- `Development and Maintenance of the Protocol:`
  - [**JavaScript Core Dev**](#javascript-ipfs-implementation)
  - [**Golang Core Dev**](#golang-ipfs-implementation)
  - [**IPFS GUI**](#ipfs-gui)
  - [**IPFS Cluster**](#ipfs-cluster)
  - [**IPFS Infrastructure**](#ipfs-infrastructure)
- `Efforts to Support Specific Uses:`
  - [**Integration with Web Browsers**](#integration-with-web-browsers)
  - [**Dynamic Data and Capabilities**](#dynamic-data-and-capabilities)
  - [**Decentralized Data Stewardship**](#decentralized-data-stewardship)
  - [**Local Offline Collaboration**](#local-offline-collaboration-locol)

#### Project

- **Coordination**: https://github.com/ipfs/project
- **Roadmap**: https://github.com/ipfs/roadmap/blob/master/WG_PROJECT.md
- **Working Group Mailing List**: project-wg@ipfs.io
- **[David Dias](https://github.com/daviddias): Captain / IPFS Project Lead**
- **[Molly Mackinlay](https://github.com/daviddias): TPM / IPFS Project Coordinator**
- WG Repos Badge - [![](https://github.com/ipfs/team-mgmt/blob/master/img/badges/project.svg)](https://github.com/ipfs/project)

The IPFS Project Working Group Community serves as the point of coordination for the IPFS Organization.

**Responsibilities include**:
- Maintain the IPFS Project Roadmap and Vision.
- Provide coaching to Working Groups to develop their own planning and goal-setting.
- Facilitate communication and alignment accross the organization.
- Research, develop and build new ways to help async teams coordinate at scale.
- Recognize needs of the project and develop solutions to meet them.

#### Community

- **Coordination**: https://github.com/ipfs/community
- **Roadmap**: https://github.com/ipfs/roadmap/blob/master/WG_COMMUNITY.md
- **Working Group Mailing List**: community-wg@ipfs.io
- **[Mikeal Rogers](https://github.com/mikeal): Captain, TPM**
- WG Repos Badge - Badge n/a yet

Community outreach working group. Coordinates the communities around events, blog posts and education.

- Editorial (Blogs, Documentation)
- Education (ProtoSchool, Demos)

**Responsibilities include**:
- Respond to requests for IPFS presence in conferences.
- Publish regular updates to the community (blog posts and newsletters).
- Create Tutorials and Workshops to teach concepts about IPFS and the Distributed Web in ProtoSchool.
- Ensure that public forums (discuss.ipfs.io, irc, github, etc) have adequate moderation and responsive support.
- Ensure that the code of conduct is followed and provide appropriate support or response when violations occur.
- Author and improve documention.

#### JavaScript IPFS implementation

- **Coordination**: https://github.com/ipfs/pm/blob/master/JS_CORE_DEV_MGMT.md
- **Roadmap**: https://github.com/ipfs/roadmap/blob/master/WG_JS_CORE.md
- **Working Group Mailing List**: js-ipfs-wg@ipfs.io
- **[Alan Shaw](https://github.com/alanshaw/): Captain**
- **`To be confirmed`: TPM**
- WG Repos Badge - [![](https://github.com/ipfs/team-mgmt/blob/master/img/badges/js-core.svg)](https://github.com/ipfs/js-ipfs)

Develop the JavaScript implementation of the IPFS Protocol, js-ipfs.

**Responsibilities include**:
- Create the browser implementation of the IPFS Protocol.
- Create a great onboarding experience for new contributors.
- Upgrade and build dev tools (i.e AEgir).
- Define process and help achieve high quality sustainable open source modules.
- Set the guidelines for writing, maintaining and managing the JS codebases, test suites, and contributions.

#### Golang IPFS implementation

- **Coordination**: https://github.com/ipfs/pm/blob/master/GOLANG_CORE_DEV_MGMT.md
- **Roadmap**: https://github.com/ipfs/roadmap/blob/master/WG_GO_CORE.md
- **Working Group Mailing List**: go-ipfs-wg@ipfs.io
- **[Steven Allen](https://github.com/stebalien): Captain**
- **[Erik Ingenito](https://github.com/eingenito): TPM**
- WG Repos Badge - [![](https://github.com/ipfs/team-mgmt/blob/master/img/badges/go-core.svg)](https://github.com/ipfs/go-ipfs)

Develop the Golang implementation of the IPFS Protocol, go-ipfs.

**Responsibilities include**:
- Create the server and reference implementation of the IPFS Protocol.
- Create a great onboarding experience for new contributors.
- Upgrade and build dev tools (i.e gx).
- Set the guidelines for writing, maintaining and managing the Go codebases, test suites, and contributions.

#### IPFS GUI

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

#### IPFS Cluster

- **Coordination**: https://github.com/ipfs/ipfs-cluster
- **Roadmap**: https://github.com/ipfs/roadmap/blob/master/WG_CLUSTER.md
- **Working Group Mailing List**: cluster-wg@ipfs.io
- **[Hector Sanjuan](https://github.com/hsanjuan): Captain, TPM**
- WG Repos Badge - Badge n/a yet

The IPFS Cluster Working Group is the team implementing IPFS Cluster.

**Responsibilities include**:
- Design and implement IPFS Cluster.
- Provide knowledge and APIs that organizations with large data sets can use.

#### IPFS Infrastructure

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

#### Integration with Web Browsers

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

#### Dynamic Data and Capabilities

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

#### Decentralized Data Stewardship

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

#### Local Offline Collaboration (Locol)

- **Coordination**: https://github.com/ipfs/local-offline-collab
- **Roadmap**: TBD
- **Working Group Mailing List**: locol-wg@ipfs.io
- **[Molly Mackinlay](https://github.com/momack2): Captain, TPM**
- WG Repos Badge - [![](https://github.com/ipfs/team-mgmt/blob/master/img/badges/locol.svg)](https://github.com/ipfs/local-offline-collab)


User research, collaborations, and features to make the knowledge and tools on the internet accessible and useful on partitioned, low-bandwidth, or intermittant networks.

**Responsibilities include**:

- Participate in communities like [Offline First](http://offlinefirst.org/)
- Conduct user research around offline and local-first use cases, communities, and best practices
- Support collaborations between IPFS and community members who are building tools for peer-to-peer sharing and collaboration in local/offline networks
- Research and prototype applications that utilize IPFS for local-first collaboration and resilient offline usage


### Research Groups

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
