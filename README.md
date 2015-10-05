# IPFS - Project Management

This is a repository for general ipfs project management.

#### Please don't open issues here unless you know what you're doing.

We are still tweaking how our sprints work, see https://github.com/ipfs/community/issues/28 for more information.

## Sprints

IPFS is adopting a sprint cycle. Each sprint gives us a manageable amount of work per person, to be completed within the cycle. It adds a heartbeat to our development. We will seldom add or drop work mid-sprint, though exceptions may emerge. This means incoming PRs or new issues may not be addressed until the next sprint. We will try to make sure things don't get backlogged for long periods of time.

If you'd like to join a sprint, let `@jbenet` know how much time + and what you'd like to take on. It is recommended to take things off the backlog, and check in with the team at the daily "sprint checkin".

- Sprint Duration: 1 week
- Sprint Checkin and Planning: Mondays at `17:00-22:00Z` via +hangout (link posted on IRC)

Each sprint will be synthesized into an issue in this repo, as described in https://www.zenhub.io/blog/how-the-zenhub-team-uses-zenhub-boards-on-github/#keepingarecordofsprints

### Sprint Planning

Sprint Discuss is a set of semi-synchronous discussions with the following purposes:
- **retrospect** on the previous sprint. Discuss what got done, what stalled, why, what could go better next time, etc.
- **discuss** the next goals, problems, and solution approaches.
- **identify** tasks to do for the next sprint. Try to spell them out as much as possible.
- **allocate** work for the next sprint. Sign up to accomplish them.

The **Sprint Planning** meeting happens semi-synchronously. Some of it is synchronous, some of it is asynchronous. It has the following stages:

#### Stage 1: Sprint Cap

##### Starts at {10:00 PT, 17:00 UTC, 19:00 CEST}

**How: This takes place semi-synchronously on IRC.** (This used to happen over a Google Hangout, but it wasted a lot of time to keep >10 people synchronized while people gave individual updates that not everyone was interested in. IRC has been working ok.)

The sprint master:
- prepares the sprint's etherpad and posts it to github + IRC ahead of time.
- begins Sprint Planning with a roll-call to ping people on IRC.
- prompts everyone who participated in the previous sprint to update:

Each participant gives an update on their assignment, what got done, what didn't, and discusses successes and failures. Participant, sprint master, and whoever is interested should discuss ways of improving task definition, allocation, and implementation to increase future successes and avoid failures.

#### Stage 2: Sprint Discussions

**How: This takes place synchronously on Google Hangouts.**

Our sprints cover many different subject areas, that interest distinct but overlapping groups of people. Everyone is welcome to participate on all of them -- hence they do not overlap in time -- though they are geared towards the main people handling those areas.

The sprint discussions give a high throughput (video call) environment to talk about status, next goals, problems, solution approcahes, and so on. They're mostly free form, but should endeavor to identify a set of tasks to do, even if those tasks won't all get done this sprint.

##### Sprint Discussion Schedule

The schedule is fairly static:

Time (PDT - **UTC/Z** - CEST) | Topic | +Hangout
:------------------------: | :---: | :------:
11:30PDT **18:30Z** 20:30CEST | Apps on IPFS, electron | [Video Room](https://plus.google.com/hangouts/_/grdn26fpdroghn5wa56mhpxz34a)
12:00PDT **19:00Z** 21:00CEST | infrastructure | [Video Room](https://plus.google.com/hangouts/_/g6irrqkylecjoo2k7e7wzkkkgua)
12:30PDT **19:30Z** 21:30CEST | node-ipfs | [Video Room](https://plus.google.com/hangouts/_/gyafa4mpgz7g6jntijoxshfe3ma)
13:00PDT **20:00Z** 22:00CEST | go-ipfs | [Video Room](https://plus.google.com/hangouts/_/g4hc3dnpdvwsklyfd2sxhkwbgqa)
13:30PDT **20:30Z** 22:30CEST | testing + ci | [Video Room](https://plus.google.com/hangouts/_/gwn656w2cihn7lekdarfzhaquea)
14:00PDT **21:00Z** 23:00CEST | protocol + specs | [Video Room](https://plus.google.com/hangouts/_/gxvjk6v6xrc64hcs44phm4c2qaa)
14:30PDT **21:30Z** 23:30CEST | bitswap ml | [Video Room](https://plus.google.com/hangouts/_/grcpjefkp4fv4zqz3xe4ty3mbea)

- Data Structures -- [Video Room](https://plus.google.com/hangouts/_/g7slan3ecrylra7robofp53p6ia)

#### Stage 3: Sprint Allocation

How: Asynchronously, by **01:00Z**.

Everyone signs up for tasks on the sprint etherpad asynchronously, after the relevant discussions happen. At the "end of the day", the etherpad is committed to an issue in this repository.

The sprint master should add a short backlog of relevant issues to take up.These can be taken by anybody. If you decide to take it on, please "sign yourself up for it" (move it from the backlog section to be under your name).

### Sprint Checkin (Sync)

The sprint checkin is a quick sync-up (on IRC) to fine tune the sprint. It helps the sprint master know what's progressing, what's blocking people, and what adjustments need to be made. This sync is critical to ensure the success of the sprint as a whole. If you cannot make it to a sprint checkin, leave your update + comments on IRC (or the issue?) before the sync happens.

Each person must answer (kanban style):

- What obstacles are impeding my progress?
- (looking at the sprint assignments) What has progressed?

All answers will go on the issue.

### Working Hours

To maximize feedback during a sprint, we've picked a set of "working hours" during which we can overlap. The hours are:

```
16:00-19:00 UTC  daily or
18:00-21:00 CEST daily or
09:00-12:00 PDT  daily
```
