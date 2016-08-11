# IPFS Project Management Process

**Status: work in progress, not even a full draft yet**

## Introduction
TODO: describe the purpose of this document

- this is an opt-in process, nobody in the community is *required* to use this process

## Table on Contents
- [TL;DR](#tldr)
- [Projects](#projects)
- [Roles](#roles)
  - [Product Owners](#product-owners)
  - [Project Leads](#project-leads)
  - [Project Managers](#project-managers)
- [Structure](#structure)
  - [Overview](#overview)
  - [Goals](#goals)
  - [Backlog](#backlog)
  - [Milestones](#milestones)
  - [Project Roadmap](#project-roadmap)
  - [Organization Roadmap](#organization-roadmap)
- [Flow](#flow)
  - [Quarterly Planning](#quarterly-planning)
  - [Software Development Pipeline](#software-development-pipeline)
    - [Kanban Pipeline](#kanban-pipeline)
- [Implementation](#implementation)

## TL;DR

The IPFS project management process has the following **cadence**:

Roadmap Updates
- every 3 months
- identify, discuss and plan the next steps for the organization as a whole

"Sprint" Updates
- once a week (2 weeks?)
- discuss last week's progress
- discuss plan for the next week

The IPFS project management process breaks down to the following **units of work**:

Projects 
- may contain other projects
- have a project leader who "roadmaps" (decides what are goals and milestones, and when they should happen)
- have a roadmap (list of milestones and goals)
- have a backlog (list of goals)

Milestones 
- measurable unit of progress
- contains a list of goals, ordered by priority
- usually but not always sequentially ordered
- may have a deadline

Goals
- an individual actionable unit of work
- may have other Goals as dependencies
- may have parts or sub-goals
- may have parts or sub-goals big enough to merit own Goals

The IPFS project management process tracks the work with the following **tools**:

Roadmaps
- attached to a project
- has a list of milestones, ordered by completion time

Pipelines
- are stages through which goals move, the steps between "not done" and "done"
- guide the software development process

## Projects
TODO

## Roles
TODO

#### Project Leads
TODO

#### Product Owners
TODO

#### Project Managers
TODO

#### The Sprint Master

Ideally, there should be a sprint master who knows every participant's tasks and projects intimately, helps moderate work loads, checks in when a task has been taking long than expected, sets the sprint goals, and adds any urgent or incoming business to the sprint. Realistically, this is done by the discussion leads and the team as a whole. The sprint administrator was created to minimize the sprint master's admin, and to help the discussion leads.

#### The Discussion Leads

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

## Structure

### Overview
The project information across the organization is tracked with the structure described in this chapter. At the highest level, we have an Organization Roadmap, which lists all projects and their milestones. Each project contains a set of milestone and milestones contain one or more goals. Goals are the basic unit of work and they describe everything from bugs and new features to general tasks. Goals are collected and tracked in a Backlog.

```
Organization        |   Project 1           Project 2
                    |  
Roadmap             |   Roadmap             Roadmap  
                    |  
  Milestones        |     Milestone 1         Milestone A
    Milestone 1     |       Goal 1              Goal A
    Milestone 2     |       Goal 2            Milestone B
    Milestone 3     |       Goal 3              Goal B
    Milestone A     |     Milestone 2           Goal C
    Milestone B     |       Goal 4              Goal D
    Milestone C     |     Milestone 3      
                    |       Goal 5      
  Projects          |  
    Project 1       |   Backlog             Backlog
    Project 2       |     Goal 1              Goal A
    Project 3       |     Goal 2              Goal B
                    |     Goal 3              Goal C
                    |     Goal 4              Goal D
                    |     Goal 5
```

### Goals
At the heart of each project are the goals. They are the basic unit of work. Goals can be anything that ***adds value to a release***. This includes issues reported by users, feature requests, bugs, Pull-Requests, general tasks such as refactoring, documentation or research. Goals are collected, maintained and tracked in the backlog by the project lead.

A goal description includes the following:
- Name / Summary
  - Describes what the goal is on high level
  - Example 1: "Reduce the size of the go-ipfs executable"
  - Example 2: "js-ipfs should have API Documentation"
- Description
  - What the problem is and how to achieve this goal
  - Should tell you how you will know that the problem has been solved or the goal has been achieved
  - Describe the type of this goal: is it a bug? a new feature? something else?
- Status
  - The status should signal the goal's status towards completion
  - What is the current state of this goal? Is it to-be-reviewed? In progress? Blocked? Done?
  - A goal can be in only one state at a time
- Dependencies (where applicable)
  - Links to other goals that must happen before or concurrently with this one
- Any additional information that helps to reach this goal (optional)

TODO: a clear example

### Backlog
Backlog is the collection of all goals in a project. It should be as comprehensive as possible, including everything that needs to happen or should happen in a particular project. The backlog indicates priority by order: the items that have the highest priority are at the top of the list. The backlog is owned and maintained by the project lead. As part of daily work, the backlog gets updated and a general grooming should happen on weekly basis.

A backlog has the following information:
- All goals of a project
- Priority of goals in sorted order

While the backlog is usually one big list of goals, it may sometimes become convoluted. In this case, the backlog list can be split in two: ***Backlog*** and ***Future Work***. The future work section lists goals that will probably not be worked on anytime soon, or are not ready to be worked on yet, whereas the ready section contains the goals that are ready to be worked on or "approved". If split, together they are called "the backlog" while *Future Work* is referenced only in its specific meaning. The split and maintenance of both lists are done by the project lead.

### Milestones
A milestone is batch of goals that together achieve a significant improvement to the product or project. Each project has a set of milestones. A milestone is completed when all goals associated with it have been completed. Milestones are tracked in the project roadmap by the project lead.

A milestone has the following information:
- Name
  - Example 1: "Release go-ipfs v0.5.0"
  - Example 2: "Working prototype of Pubsub implementation in go-ipfs"
  - Example 3.1: "go-ipfs and js-ipfs implementations can interoperate"
  - Example 3.2: "go-ipfs and js-ipfs clients use the same network"
- Description
- List of goals attached to it
- Progress indicator
- Deadline (where applicable)
- List of dependencies and related material (where applicable)

The Project Lead keeps current milestones up to date on weekly-basis. New milestones should be generated and old milestones updated before the quarterly planning meeting. Prepare new milestones in good time before quarterly planning.

Milestones help make Roadmaps achievable, and they give the team and users a clear sense of progress. There's no hard and fast way to decide what a Milestone's boundaries are. It is up to the project leader to select what Goals constitute a Milestone and what Milestones constitute a Roadmap. Sometimes it will be clear how to break down a Roadmap into manageable pieces. Sometimes it will be clear which goals to bundle in a Milestone. The important thing is to make manageable groups (not too big) that provide a significant enough sense of progress through the Roadmap.

TODO: a clear example

### Project Roadmap
The milestones are tracked in project's roadmap. The project lead owns the roadmap and is responsible for generating, updating and tracking the milestones. To make sure the roadmap is up to date, the project lead should go through the current milestones on weekly basis.

The Roadmap Document contains the following information:
- List of current milestones
  - Sequentally ordered, eg. by expected due date (where applicable)
  - Next upcoming milestone at the top
- Current status of the project, ie. milestone progress
- List of previous milestones

The roadmap can be a high-level overview of milestones and project's progress, so details such as list of goals per milestone can be omitted. However, if omitted, the roadmap must contain links to the detailed break down.

Examples:
- [js-ipfs roadmap](https://github.com/ipfs/js-ipfs/blob/master/ROADMAP.md#ipfs-javascript-implementation-roadmap)
- [Orbit roadmap](https://github.com/haadcode/orbit/blob/master/ROADMAP.md#orbit---roadmap)

### Organization Roadmap
An overview of all projects across the organization is tracked in organization's roadmap. This is similar to a project roadmap, but collects all milestones from all projects into one place.

Organization roadmap contains the following information:
- List of all projects
- List of all current milestones and their progress in each project
- List of links to old milestones

The organization roadmap is owned by project management and project managers are responsible for generating and keeping the roadmap up to date. The roadmap should be updated in the quarterly planning meeting as old milestones are reviewed and the project leads commit to new milestones.

TODO: a clear example

## Flow

### Software Development Pipeline
TODO

- From Backlog to Release
    - Workflow steps
    - Releasing new versions
    - Keeping the backlog up to date
- Keeping everyone updated
    - Tracking status and current work
    - Using a signaling board (Kanban)
    - Working towards milestones
    - "Sprint" meetings

#### Roadmap updates
TODO

What:
- Event to update and plan the organization's / project's roadmaps.
- Identify projects' / organizations' needs and main efforts.
- Commit to efforts and goals.
- Produce a high level overview of a roadmap.

Who: Product Owners, Project Leads, Project Managers
How often: Every 3 months
Output: Organization Roadmap (responsible: PM)

This could be also a constant process instead of doing all that work tied to quarterly event. If the work was constant, we could still have an update event to go through the updated/new roadmap(s).

#### Weekly updates
TODO: describe our weekly process. don't call it a "Sprint" anymore(?)

#### Kanban Pipeline

##### Stages
The Kanban pipeline is divided into sequential stages. Goals move from pipeline's entry stage towards the completion stage. 

If at any point the goal is bloecked and can't be worked on, the goal moves to the "Blocked" stage.

1. Future Work - the goal is identified and being fleshed out. It is not ready to be carried out at this 
2. Backlog - the goal is well defined and ready to be carried out, but not being actively worked on.
3. In Progress - the goal is actively being worked on, this moment.
4. Blocked - the goal cannot proceed as another goal must be Done first.
5. Done - the goal is completed. No further action is necessary.

An example pipeline could look something like this:

```
Future Work ──> Backlog ──> Ready ──> In Progress ──> Review ──> Done ──> Released
     │             │          │             │             │ 
     ╰─────────────╯          │             │             │
                              ╰───────── Blocked ─────────╯

│──────── Backlog ───────│──────────── Development ───────────│────── Release ─────│
  
╰────────────────────────────────────── Pipelines ─────────────────────────────────╯
```

## Implementation
TODO

- automation
  - Generating milestone documentation: https://github.com/ipfs/pm/pull/131#discussion_r73778673
- github
- waffle
