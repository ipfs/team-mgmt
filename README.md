# IPFS Team Planning, Management & Coordination threads

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](https://protocol.ai)
[![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](https://ipfs.io/)
[![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs)

**tl:dr:** We have a **weekly call** on Mondays. The time, date and other info for each week's call is announced in [an issue in this repository](https://github.com/ipfs/pm/issues). Propose agenda items for the call by commenting on the issue!

## Repo Index

- [Related Projects](#related-projects)
- [How We Work Together](#how-we-work-together)
- [Teams](TEAM_STRUCTURES.md)
- [Asynchronous Communitication](#asynchronous-communication)
  - [Project & Working Groups Roadmaps](#project--working-groups-roadmaps)
  - [OKR (Objectives & Key Results)](#okrs)
  - [Kanban](#kanban)
  - [Repo Activity](#repo-activity)
- [Synchronous Communication](#synchronous-communication)
  - [Weekly All Hands](#-ipfs-weekly-call--formerly-known-as-ipfs-all-hands-call)
  - [Working Groups Weekly/BiWeekly Syncs](#working-groups-weeklybiweekly-syncs)
  - [Calendar](#calendar)
  - [IRC](#IRC)
  - [Working Hours](#working-hours)
  - [Timezone: UTC](#timezone-utc)
- [Tools](#tools)
  - [Coordination Toolkit](TEAM_COORDINATION_TOOLKIT.md)
  - [How to create a Roadmap](ROADMAP_HOW_TO.md)
  - [Resources for Distributed Teams](DISTRIBUTED_TEAMS.md)
  - [Zoom](#zoom)
- [Contribute](#contribute)
- [License](#license)

## Related Projects

IPFS leverages several related projects which have their own planning:

- [IPLD](https://github.com/ipld/team-mgmt)
- [libp2p](https://github.com/libp2p/team-mgmt)

## How We Work Together

We use a loose agile approach. We deliberately designed a Org wide process that is very flexible, enabling each team to design an internal coordination strategy that suits their project needs, while keeping a baseline for team wide coordination around Roadmapping and [OKRs](OKR).

You can find a list of [`Distributed Teams` resources on tools, decision making, process and more](DISTRIBUTED_TEAMS.md), that we have been gathering, reviewing, discussing and experimenting.

## Asynchronous Communication

As an organization that operates at a planetary scale with multiple people from different timezones and schedules, we value tremendously the benefits of Asynchronous Communication. The art of writting things down for future selfs or future contributors is one of the key reasons that enables [so many contributors](https://github.com/ipfs/contributors-hex-grid#big-grid) to participate in the large endeavour of Distributing the Web with the IPFS Project.

Some golden recommendations:
- Prefer to open an issue vs. sending a DM
- If you find documentation missing, treat it as a bug. Once you get your answer, contribute it so that it benefits others
- Use synchronous time wisely (only if needed), convert any output into an artifact that can be used by others (avoid Tribal Knowledge)

### Project & Working Groups Roadmaps

The IPFS Project & Working Groups Roadmaps serve as the north star for our quarterly planning process and org alignment. You can read these at https://github.com/ipfs/roadmap

### OKRs

Learn how the [IPFS Org uses OKRs to track quarterly process here](OKR).

### Kanban

We use a Kanban style of tracking accross our multiple repos using the [Waffle Board](https://waffle.io) tool.

Here is a list of the Kanbans that are currently active:

- __Working Groups__
  - _Development and Maintenance_
    - [JS Core](https://waffle.io/ipfs/js-ipfs)
    - [Go Core](https://waffle.io/ipfs/go-ipfs)
    - [GUI](https://waffle.io/ipfs/ipfs-gui)
    - [Cluster](https://waffle.io/ipfs/ipfs-cluster)
    - [Infrastructure](https://waffle.io/ipfs/infra)
  - _Efforts to Support Specific Uses_
    - [In Web Browsers](https://waffle.io/ipfs/in-web-browsers)
    - [Dynamic Data & Capabilities](https://waffle.io/ipfs/dynamic-data-and-capabilities)
    - Decentralized Data Stewardship (n/a)
    - Local Offline Collaboration (n/a)
  - Community (n/a)
  - [Project](https://waffle.io/ipfs/project)
- __Kanbans specific to Projects__
  - [Identity Manager](https://waffle.io/ipfs-shipyard/pm-idm)
  - [Discussify](https://waffle.io/ipfs-shipyard/pm-discussify)
  - [Aegir](https://waffle.io/ipfs/aegir)
  - [Archives](https://waffle.io/ipfs/archives)
  - [IPFS Blog](https://waffle.io/ipfs/blog)
- [Kanban with every repo](https://waffle.io/ipfs/ipfs) (caution, it takes a bit to load)

### Repo Activity

[![Throughput Graph](https://graphs.waffle.io/ipfs/ipfs/throughput.svg)](https://waffle.io/ipfs/ipfs/metrics/throughput)

Processing all the IPFS activity can be a daunting task, there is simply too much happening (which is great!). To make it simpler (and bareable), we recommend trying using the Waffle Boards directly or [Octobox](https://octobox.io/).

## Synchronous Communication

Synchronous Communication is phenomenal to transfer memes rapidly, clarify any outstanding questions, deep dive into hard topics together, get to know each other better and develop trust. The main pain point with Synchronous Communication is that if you were not present, you might miss out on important information that is relevant to you and your project. To overcome this limitation, **a core competency of the IPFS Org a a whole is to be stellar at taking notes and creating artifacts that represent any decision/announcement made during those synchronous conversations**. The corollary being: if it ain't written down and broadcasted, it didn't happen.

### 🙌🏽 IPFS Weekly Call 📞 (formerly known as IPFS All Hands Call)

- **When:** Every Monday, 5pm UTC. See [calendar](https://calendar.google.com/calendar/embed?src=ipfs.io_eal36ugu5e75s207gfjcu0ae84@group.calendar.google.com).
- **How:** This takes place synchronously using [Zoom](#zoom).
- **Length:** 30 minutes.
- **Format:** [IPFS_WEEKLY_CALL_FORMAT](IPFS_WEEKLY_CALL_FORMAT.md)

This is a regular and reliable call where everyone who's working on any repository under the IPFS umbrella checks in and has a chance to either call attention to particular items, to make announcements, or to seek discussion of a topic. It's also a way for casual followers to get a high-level update on the pulse of the IPFS projects without having to follow all of the sprint calls. Newcomers are very welcome.

If you are interested in participating, please join us on [Zoom](#zoom).

You can find recordings of the on the [Youtube playlist, IPFS All Hands 🙌🏽 📞](https://www.youtube.com/watch?v=hmAniA6g9D0&list=PLuhRWgmPaHtSGRSHdU9dbsukHKlihZZAe)

This call and other IPFS Community calls are tracked on the [IPFS Community Calendar](https://github.com/ipfs/community#calendar)

If you are hosting a call for the first time or interested in learning how to do it, consult the [HOST_A_CALL](HOST_A_CALL.md) guide.

### Working Groups Weekly/BiWeekly Syncs

- [`JS Core Dev`](https://github.com/ipfs/team-mgmt/issues/650)
- [`Go Core Dev`](https://github.com/ipfs/team-mgmt/issues/674)
- [`Dynamic Data & Capabilities`](https://github.com/ipfs/dynamic-data-and-capabilities/blob/master/README.md#bi-weekly-sync)
- [`Project WG`](https://github.com/ipfs/project#ipfs-project-working-group)
- [`IPLD BiWeekly`](https://github.com/ipfs/team-mgmt/issues/720)

### Calendar

You can consult all IPFS related calls and events on the [IPFS Community Calendar](https://calendar.google.com/calendar/embed?src=ipfs.io_eal36ugu5e75s207gfjcu0ae84@group.calendar.google.com&ctz=UTC) you can watch for events and sync to.

### IRC

We hangout on IRC for lots of Dev Chat. You can find us on Freenode on the following channels:

- #ipfs
- #ipfs-dev
- #ipfs-cluster
- #ipfs-gui
- #ipfs-in-web-browsers
- #ipfs-project
- #ipfs-infrastructure
- #ipfs-pinbot
- #gx
- #libp2p
- #ipld

You can also access these channels through the [Matrix IRC Bridge](https://riot.im/app/#/group/+ipfs:matrix.org)

### Working Hours

As the IPFS team is all over the world, we've picked a set of "working hours" during which we can overlap. The hours are:

```
16:00-19:00 Z/UTC daily or
18:00-21:00 CEST daily or
12:00-15:00 EST daily or
09:00-12:00 PDT daily
```

We aim to be available during these hours. Your mileage may vary.

## Timezone: `UTC`

All of our times are set according to the **UTC** timezone (or should be). This is much easier than adjusting times manually to accommodate different time zones, for a distributed team. If our calendar's location is set to Reykjavík, Iceland, it is because Iceland is always on UTC time. It is recommended that you know your timezone's difference from UTC for ease of scheduling. Sites like http://everytimezone.com can help with this..

## Tools

Tools living in their own documents:
- [Coordination Toolkit](TEAM_COORDINATION_TOOLKIT.md)
- [How to create a Roadmap](ROADMAP_HOW_TO.md)
- [Resources for Distributed Teams](DISTRIBUTED_TEAMS.md)

### Zoom

We use [Zoom](http://zoom.us/) for our community calls. This allows us to stream directly to YouTube (currently under maintenance), and to have calls with more than 25 users. Zoom may require a download before you are able to join. If you click on a Zoom link to a meeting room, it will automatically suggest the software to download. Please let us know if you have any issues with Zoom.

**Note:** Screen Sharing in Zoom under X11 requires compositor. Users of minimalist tilling window managers (i3, awesome, dwm)  will share a "black screen" by default. The fix is to use third-party compositor, eg. [Compton](https://github.com/chjj/compton).

## Contribute

Feel free to join in. All welcome. Open an [issue](https://github.com/ipfs/pm/issues)!

This repository and all of our sprint calls fall under the IPFS [Code of Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md).

[![](https://cdn.rawgit.com/jbenet/contribute-ipfs-gif/master/img/contribute.gif)](https://github.com/ipfs/community/blob/master/contributing.md)

## License

[CC-BY-SA](LICENSE)
