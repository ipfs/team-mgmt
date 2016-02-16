# IPFS - Project Management

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io)
[![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](http://ipfs.io/)
[![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs)

This is a repository for general ipfs project management.

#### Please don't open issues here unless you know what you're doing.

We are still tweaking how our sprints work, see https://github.com/ipfs/community/issues/28 for more information.

## Sprints

#### Table of Contents

- [If You Are New](#if-you-are-new)
- [Sprint Planning](#sprint-planning)
  - [Stage 1: Sprint Sync](#stage-1-sprint-cap-sync)
  - [Stage 2: Sprint Discussions](#stage-2-sprint-discussions)
    - [Sprint Discussion Schedule](#sprint-discussion-schedule)
  - [Stage 3: Sprint Allocation](#stage-3-sprint-allocation)
- [Working Hours](#working-hours)
- [Roles](#roles)
  - [The sprint master](#the-sprint-master)
  - [The discussion leads](#the-discussion-leads)
  - [The sprint administrator](#the-github-administrator)
  - [Active Contributors](#active-contributors)

#### About

IPFS has a sprint cycle, a heartbeat to our development. Each sprint gives us a manageable amount of work per person, to be completed within the cycle. We seldom add or drop work mid-sprint, though exceptions do emerge. This means incoming PRs or new issues should not be addressed until the next sprint. We try to make sure things don't get backlogged for long periods of time.

If you'd like to join a sprint, let [@jbenet](//github.com/jbenet) know how much time and what you'd like to take on. It is recommended to take things off the backlog. Check in with the team about it at the weekly sync.

Each sprint lasts one week, and is synthesized into an issue in this repository. This process is based off of Zenhub's, described [here](https://www.zenhub.io/blog/how-the-zenhub-team-uses-zenhub-boards-on-github/#keepingarecordofsprints).

#### If You Are New

Hi! Welcome to the really cool board where we figure out how we can best work together as a team to achieve awesome goals. There's a lot of information on this page. Here is all you really need to know if you want to join in:

  - First, Monday is a big day for us. However, **the most important bit is the sync**. It only takes around an hour, and happens on IRC. It's where we tell the team what we're doing; if you contribute, it's a great place for you to mention what you've done, too.  
  - **You do not need to go to all of the video hang outs.** They are long. Only go to ones you want to go to; also, we summarize them in the sprint issue afterwards, if you're short on time.  
  - If you want to, telling us what you plan to do or what you've done each week in the sync is **super cool**. But no pressure!  
  - If you have questions, ask [RichardLitt](//github.com/RichardLitt) on IRC, or email him. He'll help you out.  

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

The sprint checkin is a quick sync-up to fine tune the sprint. It helps the sprint master and the team know what's progressing, what's blocking people, and what adjustments need to be made. This sync is critical to ensure the success of the sprint as a whole.

Before the sync (ideally), put your updates for the previous week in the previous week's issue. That way, it is easy to see what was intended to get done, and what gone done. After the previous sprint is over, add your blank To Dos to the new sprint issue. If you cannot make it to a sprint sync, leave your update and comments on the previous Sprint's issue (not on IRC, as it will get lost) before the sync happens.

Each participant gives an update on their assignment, what got done, what didn't, and discusses successes and failures. Participants, the sprint master, and whoever is interested should discuss ways of improving task definition, allocation, and implementation to increase future successes and avoid failures.

If you are a partipicant, the normal way of showing assignments is to copy and paste your list from the previous sprint, with `[x]`, `[ ]`,  and `[~]` indicating items done, undone, or in progress, respectively. Be sure to copy and paste in small chunks, or IRC may kick you out for flooding the channel. Lines of 5 seems to work well.

The first to update their lists on the sprint issue are the first to go, and so on. The administrator makes sure everyone knows who is up next.

(This used to happen over a Google Hangout, but it wasted a lot of time to keep >10 people synchronized while people gave individual updates that not everyone was interested in. IRC has been working ok.)

#### Stage 2: Sprint Discussions

**When:** See the list below.

**How:** This takes place synchronously on Google Hangouts.

Our sprints cover many different subject areas, that interest distinct but overlapping groups of people. Everyone is welcome to participate on all of them -- hence they do not overlap in time -- though they are geared towards the main people handling those areas.

The sprint discussions give a high throughput (video call) environment to talk about status, next goals, problems, solution approcahes, and so on. They're mostly free form, but should endeavor to identify a set of tasks to do, even if those tasks won't all get done this sprint.

If you are interested in watching, but do not plan on participating, please use the stream link provided by the discussion lead and watch on YouTube. Some participants may be on low bandwidth connections, and quality is generally better with less participants.

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

The Hangouts are generated anew for each session. The admin should use the [hangouts guide](hangouts.md) to set these up before the session.

#### Stage 3: Sprint Allocation

**When**: Asynchronously, by {01:00Z}.

Everyone signs up for tasks in the GitHub sprint issue by writing and commenting with their lists of task, after the relevant discussions happen. People should talk on IRC or in the GitHub issue about sharing tasks or about other people's lists; the task lists are mutable.

All tasks are assumed to be commitments, unless it is tagged (inline) with `hope:`. For example: `> - [ ] hope: merge IPLD into go-ipfs`. This should allow some breathing room.

The sprint master should add a short backlog of relevant issues to take up. These can be taken by anybody. If you decide to take it on, please "sign yourself up for it" by adding it to your To Do list in your own comment.

### Working Hours

To maximize feedback during a sprint, we've picked a set of "working hours" during which we can overlap. The hours are:

```
16:00-19:00 UTC  daily or
17:00-20:00 CET daily or
12:00-15:00 EST daily or
09:00-12:00 PDT  daily
```

### Roles

#### The Sprint Master

Ideally, there should be a sprint master who knows every participant's tasks and projects intimately, helps moderate work loads, checks in when a task has been taking long than expected, sets the sprint goals, and adds any urgent or incoming business to the sprint. Realistically, this is done by the discussion leads and the team as a whole. The sprint administrator was created to minimize the sprint master's admin, and to help the discussion leads.

##### The Discussion Leads

Each discussion has a lead, and each lead is responsible for preparing for that talk before hand. There is a [sprint-issue-template](sprint-issue-template.md) available for discussion leads to add into an Etherpad for their sprint; the admin should have already filled out the Etherpad with the template, and linked to your Etherpad in the sprint issue. After the discussions, the lead should add the notes directly into the current sprint issue.

#### Sprint Administrator

The sprint administrator (normally [@RichardLitt](//github.com/RichardLitt)) is responsible for the sprint process every week.

** GitHub tasks**

- Opens a new issue for the sprint on GitHub, and posts a link to it on IRC ahead of time. To open an Etherpad, go to https://etherpad-mozilla.org.
- Opens an etherpad for each discussion and copies in the [sprint-issue-template](sprint-issue-template.md) to each etherpad, making sure that the etherpad URL matches the discussion link in the new sprint issue.
- Pings each of the discussion leads to remind them to prepare for their talks the next day, preferably by writing an agenda
- Asks people to drop their updates in the old sprint issue before the sync
- Reminds people to drop their TODOs in the new sprint issue after the discussions.

** Sync tasks**

- Begins each sprint sync with a roll-call by pinging active contributors (listed below) on IRC.
- Prompts everyone who participated in the previous sprint to update on their work. The best way to choose who goes first is to go off of a first-post-first-sync method, where all participants add their updates to the old PM issue, and the first to do so generally syncs first in the IRC channel.
- Closes up by making sure everyone who needs to has gone.

** Discussion tasks**

- Sets up the videos and moderates them, using the process outlined in [hangouts.md](hangouts.md).

#### Active Contributors

This is a list of contributors who are active each sprint, and who agree that it's alright for the administrator to ask them to put their updates in the sprint issue. Only put your name here if you are OK with having the admin continually badger you to put your TODOs down. Some active contributors may wish to not do this, so that they don't feel pressure to complete tasks. This list really only helps the admin not feel bad about following up, and is is the single source of truth for this task. If you want to be known as a contributor but not be reminded weekly, [this list](https://github.com/ipfs/community#people) is the appropriate place to add your name.

GitHub | Name | Twitter | IRC
:--: | :----: | :-: | :-----:
[@diasdavid](//github.com/diasdavid) | David Dias | [@daviddias](//twitter.com/daviddias) | daviddias
[@dignifiedquire](//github.com/dignifiedquire) | Friedel Ziegelmayer | [@dignifiedquire](//twitter.com/dignifiedquire) | dignifiedquire
[@jbenet](//github.com/jbenet) | Juan Benet | [@juanbenet](//twitter.com/juanbenet) | jbenet
[@KyleDrake](//github.com/kyledrake) | Kyle Drake | [@kyledrake](//twitter.com/kyledrake) | kyledrake
[@lgierth](//github.com/lgierth) | Lars Gierth |  | lgierth
[@mappum](//github.com/mappum) | Matt Bell | [@mappum](//twitter.com/mappum) | mappum
[@noffle](//github.com/noffle) | Stephen Whitmore | [@noffle](//twitter.com/noffle) | noffle
[@RichardLitt](//github.com/RichardLitt) | Richard Littauer | [@richlitt](//twitter.com/richlitt) | richardlitt
[@whyrusleeping](//github.com/whyrusleeping) | Jeromy Johnson | [@whyrusleeping](//twitter.com/whyrusleeping) | whyrusleeping
