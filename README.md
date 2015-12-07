# IPFS - Project Management

This is a repository for general ipfs project management.

#### Please don't open issues here unless you know what you're doing.

We are still tweaking how our sprints work, see https://github.com/ipfs/community/issues/28 for more information.

## Sprints

#### Table of Contents

- [Sprint Planning](#sprint-planning)
  - [Stage 1: Sprint Sync](#stage-1-sprint-cap-sync)
    - [The sprint master](#the-sprint-master)
  - [Stage 2: Sprint Discussions](#stage-2-sprint-discussions)
    - [The discussion leads](#the-discussion-leads)
    - [Sprint Discussion Schedule](#sprint-discussion-schedule)
  - [Stage 3: Sprint Allocation](#stage-3-sprint-allocation)
    - [The GitHub sprint master](#the-github-sprint-master)
- [Working Hours](#working-hours)
- [Active Contributors](#active-contributors)

#### About

IPFS is adopting a sprint cycle. Each sprint gives us a manageable amount of work per person, to be completed within the cycle. It adds a heartbeat to our development. We will seldom add or drop work mid-sprint, though exceptions may emerge. This means incoming PRs or new issues may not be addressed until the next sprint. We will try to make sure things don't get backlogged for long periods of time.

If you'd like to join a sprint, let `@jbenet` know how much time + and what you'd like to take on. It is recommended to take things off the backlog, and check in with the team at the daily "sprint checkin".

Each sprint lasts one week, and will be synthesized into an issue in this repo, as described in https://www.zenhub.io/blog/how-the-zenhub-team-uses-zenhub-boards-on-github/#keepingarecordofsprints

### Sprint Planning

Sprint Discuss is a set of semi-synchronous discussions with the following purposes:
- **retrospect** on the previous sprint. Discuss what got done, what stalled, why, what could go better next time, etc.
- **discuss** the next goals, problems, and solution approaches.
- **identify** tasks to do for the next sprint. Try to spell them out as much as possible.
- **allocate** work for the next sprint. Sign up to accomplish them.

The **Sprint Planning** meeting happens semi-synchronously. Some of it is synchronous, some of it is asynchronous. It has the following stages:

#### Stage 1: Sprint Sync

**When**: Monday at {9:00 PDT, 17:00 UTC, 18:00 CET}

**How**: This takes place semi-synchronously on the IRC channel #ipfs.

The sprint checkin is a quick sync-up to fine tune the sprint. It helps the sprint master know what's progressing, what's blocking people, and what adjustments need to be made. This sync is critical to ensure the success of the sprint as a whole. 

Before the sync (ideally), put your updates for the previous week in the previous week's issue. That way, it is easy to see what was intended to get done, and what gone done. After the previous sprint is over, add your blank to dos to the new sprint issue. If you cannot make it to a sprint checkin, leave your update and comments on the previous Sprint's issue (not on IRC, as it will get lost) before the sync happens.

Each participant gives an update on their assignment, what got done, what didn't, and discusses successes and failures. Participants, the sprint master, and whoever is interested should discuss ways of improving task definition, allocation, and implementation to increase future successes and avoid failures.

If you are a partipicant, the normal way of showing assignments is to copy and paste your list from the previous sprint, with `[x]`, `[ ]`,  and `[~]` indicating items done, undone, or in progress, respectively. Be sure to copy and paste in small chunks, or IRC may kick you out for flooding the channel. Lines of 5 seems to work well.

(This used to happen over a Google Hangout, but it wasted a lot of time to keep >10 people synchronized while people gave individual updates that not everyone was interested in. IRC has been working ok.)

##### The sprint master
- Prepares the sprint's etherpad and posts it to GitHub and IRC ahead of time. To open an Etherpad, go to https://etherpad-mozilla.org.
- Begins Sprint Planning with a roll-call to ping people on IRC. This list can be taken from the members of the previous sprint.
- Prompts everyone who participated in the previous sprint to update on their work.
- Closes up by making sure everyone who needs to has gone, and posts a link to the Etherpad again, opens the next issue for the coming sprint, and then pings reminders to people to add their items to the Etherpad over the course of the day so that a new issue can be copied over early on Tuesday morning.

#### Stage 2: Sprint Discussions

**When:** See the list below.

**How:** This takes place synchronously on Google Hangouts.

Our sprints cover many different subject areas, that interest distinct but overlapping groups of people. Everyone is welcome to participate on all of them -- hence they do not overlap in time -- though they are geared towards the main people handling those areas.

The sprint discussions give a high throughput (video call) environment to talk about status, next goals, problems, solution approcahes, and so on. They're mostly free form, but should endeavor to identify a set of tasks to do, even if those tasks won't all get done this sprint.

##### The discussion leads
Each discussion has a lead, and each lead is responsible for preparing for that talk before hand. There is a [sprint-issue-template](sprint-issue-template.md) available for discussion leads to add into an Etherpad for their sprint. Afterwards, notes should go into the current sprint issue.

##### Sprint Discussion Schedule

There are a few hangouts scheduled regularly:

Time (PDT - **UTC/Z** - CET) | Topic
:--------------------------: | :---:
10:30PDT **18:30Z** 19:30CET | Apps on IPFS
11:00PDT **19:00Z** 20:00CET | infrastructure
11:30PDT **19:30Z** 20:30CET | libp2p
12:00PDT **20:00Z** 21:00CET | js-ipfs
12:30PDT **20:30Z** 21:30CET | go-ipfs

And a few that are scheduled as needed:


Topic:           |
:--------------: |
Testing + CI     |
Protocol + Specs |
Bitswap          |
Data Structures  | 


You can add these meeting times to your Calendar app by adding our [community calendar](https://calendar.google.com/calendar/embed?src=ipfs.io_eal36ugu5e75s207gfjcu0ae84@group.calendar.google.com&ctz=America/New_York).

The Hangouts are generated anew for each session. Sprint leaders should use [https://hangouts.google.com/start](https://hangouts.google.com/start) to make a new Hangout, and will drop the link in the IRC channel. 

#### Stage 3: Sprint Allocation

**When**: Asynchronously, by {01:00Z}.

Everyone signs up for tasks in the GitHub sprint issue by writing and commenting with their lists of task, after the relevant discussions happen. People should talk on IRC or in the GitHub issue about sharing tasks or about other people's lists; the task lists are mutable.

All tasks are assumed to be commitments, unless it is tagged (inline) with `hope:`. For example: `> - [ ] hope: merge IPLD into go-ipfs`. This should allow some breathing room.

The sprint master should add a short backlog of relevant issues to take up. These can be taken by anybody. If you decide to take it on, please "sign yourself up for it" (move it from the backlog section to be under your name).

##### The GitHub sprint master
A GitHub sprint master should be responsible for the sprint process every week. This involves: making the new sprint issue, asking people to drop their updates in the old one, reminding people to drop their TODOs in the new one. This does not mean the IRC syncup, but rather the github setup and reminding people. This role should be different than the IRC sprint master, who basically moderates the Monday sync.

### Working Hours

To maximize feedback during a sprint, we've picked a set of "working hours" during which we can overlap. The hours are:

```
16:00-19:00 UTC  daily or
17:00-20:00 CET daily or
12:00-15:00 EST daily or
09:00-12:00 PDT  daily
```

### Active Contributors

This is a list of contributors who are active each sprint, and who agree that it's alright for the spring master to ask them to put their updates in the sprint issue. Only put your name here if you are OK with having the sprint master continually badger you to put your TODOs down. Some active contributors may wish to not do this, so that they don't feel pressure to complete tasks. This list really only helps the sprint master not feel bad about following up, and is is the single source of truth for this task. If you want to be known as a contributor but not be reminded weekly, [this list](https://github.com/ipfs/community#people) is the appropriate place to add your name.

* [@diasdavid](//github.com/diasdavid)
* [@jbenet](//github.com/jbenet)
* [@lgierth](//github.com/lgierth)
* [@mappum](//github.com/mappum)
* [@RichardLitt](//github.com/RichardLitt)
* [@whyrusleeping](//github.com/whyrusleeping)
* [@kyledrake](//github.com/kyledrake)
* [@VictorBjelkholm](//github.com/VictorBjelkholm)
* [@dignifiedquire](//github.com/dignifiedquire)

