# IPFS Project Management Process

**Status: work in progress, not even a full draft yet**

## Introduction

The captains of each of the IPFS projects ([go-ipfs](https://github.com/ipfs/go-ipfs), [js-ipfs](https://github.com/ipfs/js-ipfs), [IPLD](https://github.com/ipld), [orbit](https://github.com/haadcode/orbit), etc.) have agreed to use this model so that we can provide consistency across all of these closely related code bases, specs and products.

This _model_ (terms, roles, patterns) is intentionally separated from the _mechanics_ of project management process so that people have room to vary the mechanics based on their needs or habits.  For example, in most of our projects _goals_ will be tracked as github issues but we intentionally used the word "goals" instead of "issues" in this document because we want to be clear that we’re emphasizing the _conceptual model_ as our point of consistency across IPFS projects while allowing people to vary the mechanics they use to express that information. Likewise, this model specifies that all projects have _milestones_ but does not require everyone to use Github milestones because that specific mechanism is well suited to some projects but not others -- you're agreeing to have milestones, but it's up to you to decide how to track them.

## Table on Contents
- [Overview: Cadence, Units of Work and Structures](#overview-cadence-units-of-work-and-structures)
- [Projects](#projects)
- [Roles](#roles)
  - [Product Owners](#product-owners)
  - [Project Leads](#project-leads)
  - [Project Managers](#project-managers)
- [How it Fits Together](#how-it-fits-together)
  - [Overview](#overview)
  - [Goals](#goals)
  - [Backlog](#backlog)
  - [Milestones](#milestones)
  - [Project Roadmap](#project-roadmap)
  - [Organization Roadmap](#organization-roadmap)
- [Workflow](#flow)
  - [Pipelines](#pipelines)
    - [Stages](#stages)
    - [Flow](#flow)
    - [Example](#example)
  - [Weekly Updates](#weekly-updates)
  - [Roadmap Updates](#roadmap-updates)
- [Implementation Guideline](#implementation-guideline)

## Defining Terms: Cadence, Units of Work and Organizing Structures

### Cadence
**The IPFS project management process has the following cadence**:

Weekly Updates
- once a week
- discuss last week's progress
- discuss the plans for next week

Roadmap Updates
- every 3 months
- identify, discuss and plan the next steps for the organization as a whole

### Units of Work
**The IPFS project management process defines the following units of work**:

📚 Projects
- have a backlog (list of goals)
- have a roadmap (list of milestones and goals)
- have a project leader who maintains the project roadmap (goals and milestones, and when they should happen)
- may contain other projects

📄 Goals
- an individual actionable unit of work
- may have other Goals as dependencies
- may have parts or sub-goals
- may have parts or sub-goals big enough to merit own Goals

📘 Milestones
- measurable unit of progress
- contains a list of goals, ordered by priority
- usually but not always sequentially ordered
- have either an estimated date of delivery or deadline

### Organizing Structures
**Every project has a Roadmap and a Status Board. These provide you with two different views on the project.**:

🗺 Roadmaps
- are attached to a project
- have a list of milestones, ordered by estimated completion date or dependencies

📊 Status Boards

### Other Terms

Backlogs
- are attached to a project
- have a list of all unfinished goals for a project, ordered by priority

Pipelines
- have a set of stages through which goals move (the steps between "not done" and "done")
- show what has been completed, what's being worked on at the moment and what will be worked on next

## 📚 Projects
TODO

## Roles
TODO

#### Project Leads
TODO
- the leaders and drivers of the projects
- the goto person of a project, the one with all the details as well as the big picture
- responsible of managing the plan and work for a project
- one can own multiple projects

#### Product Owners
TODO
- possibly drop this?

#### Project Managers
TODO
- possibly drop this?

#### Program Manager
Maintains the Organizational Roadmap

#### The Sprint Master

Ideally, there should be a sprint master who knows every participant's tasks and projects intimately, helps moderate work loads, checks in when a task has been taking long than expected, sets the sprint goals, and adds any urgent or incoming business to the sprint. Realistically, this is done by the discussion leads and the team as a whole. The sprint administrator was created to minimize the sprint master's admin, and to help the discussion leads.

#### The Discussion Leads

Each discussion has a lead, and each lead is responsible for preparing for that talk before hand. There is a [sprint-issue-template](sprint-issue-template.md) available for discussion leads to add into an Etherpad for their sprint; the admin should have already filled out the Etherpad with the template, and linked to your Etherpad in the sprint issue. After the discussions, the lead should add the notes directly into the current sprint issue.

#### Sprint Administrator

The sprint administrator (normally [@RichardLitt](//github.com/RichardLitt)) is responsible for the sprint process every week.

***TODO: Link to a document with the specific tasks***

## How it Fits Together

### Overview
The project information across the organization is tracked with the structure described in this section. At the highest level, we have an Organization Roadmap, which lists all projects and their milestones. Each project contains a set of milestone and milestones contain one or more goals. Goals are the basic unit of work and they describe everything from bugs and new features to general tasks. Goals are collected and tracked in a Backlog.

```
Organization        |   Project 1           Project 2          ...
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
    ...             |       Goal 5      
                    |
  Projects          |  
    Project 1       |   Backlog             Backlog
    Project 2       |     Goal 1              Goal A
    ...             |     Goal 2              Goal B
                    |     Goal 3              Goal C
                    |     Goal 4              Goal D
                    |     Goal 5
```
*Goals are collected in project's backlog. Milestones bundle goals together. A roadmap consists of milestones. Organization's roadmap collects al milestones from all projects together.*

### 📄 Goals
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
- Sections (optional)

While the backlog is usually one big list of goals, it may sometimes become convoluted. In this case, the backlog can contain sections: ***Future Work*** and ***Ready***. The future work section lists goals that will probably not be worked on anytime soon, or are not ready to be worked on yet, whereas the ready section contains the goals that are ready to be worked on or "approved". If sectioned, together they are called "the backlog" while *Future Work* and *Ready* are referenced only in their specific meaning to describe the intent inside the backlog. The sectioning is up to decision of the project lead.

***TODO: decide if we want to limit sectioning to those two or is this something that the projects can decide for themselves?***

### 📘 Milestones
A milestone is batch of goals that together achieve a significant, measurable improvement to the product or project. Each project has a set of milestones. A milestone is completed when all goals associated with it have been completed. Milestones are tracked in the project roadmap by the project lead.

A milestone has the following information:
- Name
  - Example 1: "Release go-ipfs v0.5.0"
  - Example 2: "Working prototype of Pubsub implementation in go-ipfs"
  - Example 3.1: "go-ipfs and js-ipfs implementations can interoperate"
  - Example 3.2: "go-ipfs and js-ipfs clients use the same network"
- Description
- List of goals attached to it
- Progress indicator
- Estimated completion date (where applicable)
- List of dependencies and related material (where applicable)

The Project Lead keeps current milestones up to date on weekly-basis. New milestones should be generated and old milestones updated before the quarterly planning meeting. Prepare new milestones in good time before quarterly planning.

Milestones help make Roadmaps achievable, and they give the team and users a clear sense of progress. There's no hard and fast way to decide what a Milestone's boundaries are. It is up to the project leader to select what Goals constitute a Milestone and what Milestones constitute a Roadmap. Sometimes it will be clear how to break down a Roadmap into manageable pieces. Sometimes it will be clear which goals to bundle in a Milestone. The important thing is to make manageable groups (not too big) that provide a significant enough sense of progress through the Roadmap.

TODO: a clear example

### Project Roadmap
The milestones are tracked in project's roadmap. The project lead owns the roadmap and is responsible for generating, updating and tracking the milestones. To make sure the roadmap is up to date, the project lead should go through the current milestones on weekly basis.

The Roadmap Document contains the following information:
- List of current milestones
  - Sequentally ordered, eg. by expected due date or dependency on other milestones (where applicable)
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

## Workflow

### Pipelines
The IPFS Project Management Process uses Pipelines to process goals towards a release. Pipelines are a simple way to describe the workflow of a project and move Goals between the different stages in their lifecycle.

#### Stages
Pipelines are sequential stages through which a Goal goes during its lifetime. The different stages are broken down per the workflow of each project. On high level the stages can be described as: `Not Done ──> In Progress ──> Done`. Different projects might have different stages in their development pipeline and it is up to the project lead to identify and define the stages her project uses.

***Proposal: Unify "Future Work", "Backlog" and "Done" stages for all projects, let project leads define stages of the "Development" phase.***

#### Flow
Goals move from pipeline's entry stage towards the completion stage and a Goal can be only in one stage at a time. Usually goals move one way, in sequential order, but sometimes goals can move back between the stages (eg. `In Progress ──> Review ──> In Progress`). Sometimes a goal can't progress due to something preventing it to move to the next stage. To ensure surfacing blockers, each pipeline should have a ***"Blocked"*** stage where blocked goals are moved as soon as they occur.

#### Example

***An example pipeline could have the following stages:***

```
  ╭─────────────────────────────────── Pipeline ──────────────────────────────────────╮
  │────── 1. ────│──── 2. ───│─── 3. ──│────── 4. ─────│─── 5. ───│──── 6. ───│── 7. ─│
  │ Stages                                                                            │

                                                ╭────────────╮
──> Future Work ──> Backlog ──> Ready ──> In Progress ──> Review ──> Release ──> Done ──>
         │             │          │             │            │
         ╰─────────────╯          │             │            │
                                  ╰───────── Blocked ────────╯
    Phases
  │───────── Backlog ────────│──────────── In Progress ───────────│──── Complete ─────│
  ╰───────────────────────────────────────────────────────────────────────────────────╯
```

1. Future Work - the goal is identified and being fleshed out. It is not ready to be carried out at this moment.
2. Backlog - the goal is well defined but not planned to be carried out at this moment.
3. Ready - the goal is planned to be carried out, waiting to be worked on.
4. In Progress - the goal is actively being worked on, this moment.
5. Review - the development of the goal is done, but a review needs to happen before it can be included in a release.
6. Release - the goal is waiting to be inckuded in a an official release.
7. Done - the goal is completed. No further action is necessary.

* Blocked - the goal cannot proceed as something is preventing it to move down the pipeline.

### Weekly updates
To review and discuss progress of each project and the organization as a whole, we hold weekly update meetings.

TODO: describe our weekly process. don't call it a "Sprint" anymore(?)

### Roadmap updates
To review and discuss progress of each project and the organization as a whole, we hold quarterly roadmap update meetings.

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

## Implementation Guidelines
TODO

- automation
  - Generating milestone documentation: https://github.com/ipfs/pm/pull/131#discussion_r73778673
- github
- waffle
