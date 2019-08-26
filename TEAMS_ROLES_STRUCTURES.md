# IPFS Project Teams, Roles & Structures

## Table of Contents

- [Description](#description)
- [Team Structures](#team-structures)
  - [One line definition](#one-line-definition)
  - [Expanded description](#expanded-description)
- [Team Roles](#team-roles)
  - [IPFS BDFL](#ipfs-bdfl)
  - [IPFS Project Lead](#ipfs-project-lead)
  - [IPFS Project Co-Lead](#ipfs-project-co-lead)
  - [Working Group Captain](#working-group-captain)
  - [Working Group Technical Project Manager](#working-group-technical-project-manager-tpm)
- [Active Teams](#active-teams)
  - [Working Groups](#working-groups)
    - [Project Operations](#project-operations)
    - [Testing Infra](#testing-infra)
    - [IPFS as a Service](#ipfs-as-a-service)
    - [Package Managers](#package-managers)
    - [Docs & Developer UX](#docs--developer-ux)
  - [Special Interest Groups](#special-interest-groups)
      - [Integration with Web Browsers](#integration-with-web-browsers)
      - [IPFS GUI](#ipfs-guiux)
      - [Local Offline Collaboration](#local-offline-collaboration-locol)
  - [Tiger Teams](#tiger-teams)

## Description

The IPFS Project is developed by multiple teams from multiple organizations and both intermittent and continuous invidividual contributors. A structure was developed (and continues to evolve) around Working & Special Interest Groups, OKRs, and PM best practices that were designed to support the already large and growing group of people to coordinate among each other at a global scale.

This document presents the the existing teams that emerged and that led to the many of the sucesses within the IPFS project, their structure(namely: Working Groups & Special Interest Groups) and a definition of roles existing in the IPFS org. At the end of this document, you will find pointers to Teams and Projects that have grown to become their own entities, namely: [IPLD](http://ipld.io), [libp2p](https://libp2p.io) and [Multiformats](https://multiformats.io/).

## Team Structures

### One line definition

- **Working Group** - A cohesive team with measurable goals for each quarter. A Working Group needs to have a Captain, a set of people commited to it, and entry point repo and Objectives & Key Results defined per Quarter.
- **Special Interest Group** - A set of people focused on exploring a specific vertical or interconnection between projects. A Special Interest Group is a super-set for both Research Groups focused on investigating a particular interest area, and more product-oriented groups focused on understanding and building tools for a specific vertical.
- **Tiger Team** - A small, temporary group of people aimed at solving a specific problem or building a particular feature. A tiger team needs a DRI that drives the team's engagement and agenda, and a set of ad hoc communication channels to empower quick iteration amongst teammates.

### Expanded description

**Working Groups**

Working Groups are teams of people that are appointed to research, develop, and deploy work under the working groups' scope. This structure is designed to provide clarity and direction to the project, enabling individual contributors to focus their time and energy on the areas they are most interested.

Each Working Group is free to experiment with setting their own pace and tracking work. The only requirements are that each Working Group:
- Derives its priorities from the Project level priorities
- Exposes its focus through OKRs to the rest of the community (common interface)
- Has a Captain & a Technical Project Manager assigned
- Creates an entry point repo
- Has at least 2 full time contributors dedicated to it.

Each contributor shouldn't carry responsibilities across multiple working groups - instead spending at least 80% of their IPFS time focused on a specific working group. It is not *forbidden* by any means to split time, but it is greatly discouraged as it will prevent the contributor from achieving solid focus.


**Special Interest Groups**

Special Interest Groups are set of people focused on exploring a specific vertical or interconnection between projects. This is a super-set for both Research Groups focused on investigating a particular interest area, and more product-oriented groups focused on understanding and building tools for a specific vertical.

SIGs have many possible outputs including research surveys, tools, experiments, RFPs, talks, demos, guides, and other types of knowledge that can inform and help the work done by the Working Groups or spark the creation of new Working Groups. They frequently gather a community of interest around their vertical which they convene on a regular cadence for meetings and discussion.

Unlike a Working Group, a Special Interest Group doesn't require a Captain or OKRs to be formed, and having individuals that subscribe to multiple SIGs (or both a Working Group and a SIG) isn't considered harmful.

Some great examples of past SIGs are: research-pubsub which led to the implementation of PubSub by the IPFS/libp2p teams; and research-crdt which lead to the creation of the Dynamic Data & Capabilities Group.

> A byproduct of both of these team structures achieves another important goal: making it easier for new users and contributors to subscribe to updates and get ramped up quickly to the current project focus.

**Tiger Teams**

Tiger teams are a small, temporary group of people usually formed to solve a specific problem or build a particularly complex feature. They frequently form when significant iteration/collaboration across team or project boundaries is required to achieve success. Once the objective is achieved, the tiger team dissolves back into their normal working groups.

Some great examples that would likely benefit from a tiger team include: a scoped collaboration between infra, go-ipfs, and Libp2p on a specific issue; a complex and envolved feature on the intersection of IPFS and IPLD; or a specific time-sensitive project involving members of the community, gui, and js-ipfs working groups.

A tiger team has a DRI (directly responsible individual) that drives the team's engagement and agenda. They are responsible for initiating communication channels and ensuring the group has a unified definition of success they drive toward efficiently. Tiger teams interface through a set of temporary ad hoc communication channels (such as an IRC channel, github project, mumble standup, weekly call, email list, slack etc) to empower quick iteration amongst teammates.

## Team Roles

The individual contributors to the IPFS Project and Org often find themselves wearing many hats while performing their day to day tasks in the projects they are focused on. We enable this _by design_ to make the IPFS Org very permeable and empower each team to find its perfect balance for the challenges they are facing.


### IPFS BDFL

> Benevolent Dictator for Life

Responsibilities include:
- Lead the IPFS Project at a long term time-scale (many years)
- Represent the IPFS Project in key settings
- Take responsibility in setting the direction of the project
- Set the key long-term priorities for the project (inform long term roadmap, OKRs)
- Support Project Leads with issues that affect the project at a major scale
- Ultimately responsible for the survival and functioning of the project
- Ultimate backstop for decisions that Project Leads are not comfortable making
- Shield Project Lead and team from external pressures

This role is currently taken by [**Juan Benet**](https://github.com/jbenet), original creator of the IPFS Project.

### IPFS Project Lead

> Captain of the Captains. Analogous to the Captain/Tech Lead in each Working Group.

Responsibilities include:
- Identify unique opportunities for growth and deployment of the Protocol
- Set the project-wide plan and priorities at quarterly and yearly scale (roadmap, OKRs)
- Handle project-level communications with stakeholders
- Manages communication and execution of the plan to ensure progress happens efficiently
- Ensure WG plans are aligned with project-wide priorities (inform their OKRs, Roadmaps, and relevant other plans)
- Backstop for WG execution, impact, and escalated decision making (support captains, take part in key initiatives that require Project Lead support)
- Approve protocol-level changes

This role is currently taken by [**Molly Mackinlay**](https://github.com/momack2)

### IPFS Project Co-Lead

> Master Overseer of Getting Things Done. Analogous to the Technical Project Manager / Project Manager in each Working Group.

This role is currently **AVAILABLE**

### Working Group Captain

The Working Group Captain is a champion for the Product and/or Focus Area. They take the lead on writing or guiding the conversation specs, documentation and other artifacts to support the team. The Captain is also the gatekeeper of the Working Group Roadmap and accumulator of the Working Group Knowledge, guiding the group to make good decisions and execute effectively.

Responsibilities include:
- A champion/tech lead for the focus area
- Creator and communicator of the overall technical vision and direction for the WG
- Owner and custodian of the WG Charter, Plan, and Impact
- Sets WG quarterly OKRs and priorities, informed by project-level OKRs and roadmap
- Facilitates execution of the plan by keeping tabs on progress, supporting group members as necessary, and ensuring progress is unblocked and on track
- Final decision maker for the Working Group - making, delegating, or escalating decisions as necessary
- Responsible for (or delegates) the project management work of the WG
- High speed bridge for coordination with other Working Groups and Partners
- See Good Tech Lead / Bad Tech Lead

### Working Group Technical Project Manager (TPM)

The Technical Project Manager (sometimes referenced as Project Manager, Program Manager, and cat herder) is a team enabler. They support the Quarterly Planning process including running the OKR process and Retrospectives. They ensure that the coordination strategy the WG selected is well executed (weekly syncs, taking notes, communicating needs to other WGs) and drives team success and impact.

The Technical Project Manager should also have a role in contributing to the projects the Working Group is tackling and have an understanding of the technical challenges and needs from the team.

Some working groups have the same person playing both the Captain and Technical Project Manager role. This should be limited to situations where the Working Group is nascent or the team is small.

Responsibilities include:
- Team Catalyst. Team productivity and fun optimizer.
- Coordinator for the Working Group
- Ensure OKRs are set, prioritized, and tracked by the team

# Active Teams

Here you can find the full list of active Teams inside the IPFS Org. 

**Working Groups**
- [**Project Operations**](#project-operations)
- [**Testing Infra**](#testing-infra)
- [**IPFS as a Service**](#ipfs-as-a-service)
- [**Package Managers**](#package-managers)
- [**Docs & Developer UX**](#docs--developer-ux)

**Special Interest Groups**
- [**Integration with Web Browsers**](#integration-with-web-browsers)
- [**IPFS GUI**](#ipfs-guiux)
- [**Local Offline Collaboration**](#local-offline-collaboration-locol)

In addition to the roles in each Team formation, we have these project leads:
- `IPFS Project BDFL` - [**Juan Benet**](https://github.com/jbenet/)
- `IPFS Project Lead` -  [**Molly Mackinlay**](https://github.com/momack2)
- `IPFS Project Co-Lead` - **AVAILABLE**

## Working Groups

### Project Operations

- **Coordination**: https://github.com/ipfs/project-operations
- **[Molly Mackinlay](https://github.com/momack2): TPM / IPFS Project Lead**
- **[Github Team](https://github.com/orgs/ipfs/teams/wg-project/members)**

Ship core go and js implementations with reliable rigor, systematize community communications and collaborations, and spin up IPFS research to meet future project needs.

**Responsibilities include**:
- Core Implementations (including [js-ipfs](https://github.com/ipfs/js-ipfs) and [go-ipfs](https://github.com/ipfs/go-ipfs))
- Project communications and community support
- Collaborations (including [with web browsers](https://github.com/ipfs/in-web-browsers))
- Maintenance of lower-priority systems/tools
- Research

### Testing Infra

- **Coordination**: TBD
- **[Raul Kripalani](https://github.com/raulk): Captain**

The IPFS Testing Infra team builds testing tooling to validate scalability and reliability of the core IPFS implementations, with easy onboarding for core developers to use in CI and one-off testing.

**Responsibilities include**:
- Build large-scale testing infrastructure
- Create dashboards and CI hooks to make testing infra more useful/usable
- Support core implementation developers in creating/running real world test scenarios

### IPFS as a Service

- **Coordination**: TBD
- **[Hector Sanjuan](https://github.com/hsanjuan): Captain**

Improve performance and stability of gateways and pinning, and provide public observability of services.

**Responsibilities include**:
- Manage and maintain the IPFS HTTP Gateway
- Manage and maintain the IPFS Bootstrapper nodes
- Manage and maintain the IPFS pinning service, pinbot
- Monitor services and hosts used by the IPFS dev teams
- Provide wisdom to other users that want to host IPFS nodes

### Package Managers

- **Coordination**: https://github.com/ipfs/package-managers
- **[Steven Allen](https://github.com/stebalien) / [Michelle Hertzfeld](https://github.com/meiqimichelle): Captain**
- **[Github Team](https://github.com/orgs/ipfs/teams/package-managers/members)**

User research, collaborations, and performance improvements of import and update of large filesystems to support file-system-based package managers.

**Responsibilities include**:

- Participate in communities like [package.community](http://package.community/)
- Conduct user research around package manager use cases, communities, and best practices
- Support collaborations between IPFS and community members who are building, maintaining and using package managers
- Research and prototype adding IPFS support to package manager clients and mirroring registries onto IPFS
- Improve the core IPFS implementations to support package manager usage needs

### Docs & Developer UX

- **Coordination**: https://github.com/ipfs/docs
- **[Jessica Schilling](https://github.com/jessicaschilling): Captain**
- **[Github Team](https://github.com/orgs/ipfs/teams/docs/members)**

Overhaul our documentation platform and content based on audits, research and community needs assessment to make IPFS more accessible to developer users.

**Responsibilities include**:

- Support [ProtoSchool](https://proto.school) to improve broader understanding of the dweb
- Understand and support IPFS developer usability needs
- Evaluate and improve IPFS documentation accuracy, usability, and accessibility


## Special Interest Groups

### Integration with Web Browsers

- **Coordination**: https://github.com/ipfs/in-web-browsers
- **Roadmap**: https://github.com/ipfs/roadmap/blob/master/WG_INTEGRATION_IN_WEB_BROWSERS.md
- **[Marcin Rataj](https://github.com/lidel): Captain, TPM**
- **[Github Team](https://github.com/orgs/ipfs/teams/wg-web-browsers/members)**

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

### IPFS GUI/UX

- **Coordination**: https://github.com/ipfs/ipfs-gui
- **[Github Team](https://github.com/orgs/ipfs/teams/wg-gui-ux)**

Making IPFS GUIs simple, accessible, reusable, and beautiful.

**Responsibilities include**:
- Fight complexity at every step.
- IPFS must be usable and comprehensible for everyone.
- Publish and promote this work. Make doing the right thing the easiest thing.
- Demonstrate the nature of the system with effortless, coherent, and compelling interfaces.


### Local Offline Collaboration (Locol)
 - **Coordination**: https://github.com/ipfs/local-offline-collab

User research, collaborations, and features to make the knowledge and tools on the internet accessible and useful on partitioned, low-bandwidth, or intermittant networks.

**Responsibilities include**:

- Participate in communities like [Offline First](http://offlinefirst.org/)
- Conduct user research around offline and local-first use cases, communities, and best practices
- Support collaborations between IPFS and community members who are building tools for peer-to-peer sharing and collaboration in local/offline networks
- Research and prototype applications that utilize IPFS for local-first collaboration and resilient offline usage


The list of historical special interest groups is:
- https://github.com/ipfs/dynamic-data-and-capabilities
- https://github.com/ipfs/decentralized-data-stewardship
- https://github.com/ipfs/research-CRDT
- https://github.com/ipfs/research-blockchain-data
- https://github.com/ipfs/research-bitswap
- https://github.com/ipfs/research-p2p-video
- https://github.com/libp2p/research-pubsub
- https://github.com/libp2p/research-dht

## Tiger Teams
_Note: communication channels for tiger teams might be private to active contributors - feel free to request access with an explanation if you'd like to participate or ping the DRI directly on IRC/Slack)_

The list of current tiger teams is:
- **N/A**

The list of past tiger teams is:
- [GraphSync Tiger Team](https://docs.google.com/document/d/18JFIF9rOsBA8OMdxMFVCoMugWf79ynanhSvfA42lHc8/edit#heading=h.8btdtvvsls2) (DRI: @momack2)
  - Aiming to make go-ipfs and IPLD better support syncing deep graphs
- [IPFS Gateway Tiger Team](https://docs.google.com/document/d/1VUfTNtW1Q4fTNpISyYaRp5QnbReizMpLvw5dp7e1eqs/edit#heading=h.qstqu9bvhqwz) (DRI: @scout)
  - Diagnose and fix problems with the gateway

## Projects that have evolved into their own entities

- [IPFS Cluster](https://github.com/ipfs/ipfs-cluster)
  - [Roadmap](https://cluster.ipfs.io/roadmap/)
  - [Captain](https://github.com/hsanjuan)
- [libp2p](http://github.com/libp2p/libp2p)
  - [OKRs](https://docs.google.com/spreadsheets/d/1HTXfgR5FyPTFhsTkFPRThkeMvHvCgJOaAs7BSl_vQ_0/edit)
  - [PM/Captain](https://github.com/mgoelzer)
- [IPLD](https://github.com/ipld/ipld/)
  - [OKRs](https://docs.google.com/spreadsheets/d/1Lfd91hi3nFlLRS1r-FHvK2ip2Ll6ukraufCgepw43bw/edit)
- [multiformats](https://github.com/multiformats/multiformats)
