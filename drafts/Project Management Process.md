# IPFS Project Management Process

## Purpose of this Document

The [Project Leads](#project-leads) of each of the IPFS projects ([go-ipfs](https://github.com/ipfs/go-ipfs), [js-ipfs](https://github.com/ipfs/js-ipfs), [IPLD](https://github.com/ipld), [orbit](https://github.com/haadcode/orbit), etc.) have agreed to use this model so that we can provide consistency across all of these closely related code bases, specs and products.

This _model_ (terms, roles, patterns) is intentionally separated from the _mechanics_ of project management process so that people have room to vary the mechanics based on their needs or habits.  For example, in most of our projects _goals_ will be tracked as github issues but we intentionally used the word "goals" instead of "issues" in this document because we want to be clear that we’re emphasizing the _conceptual model_ as our point of consistency across IPFS projects while allowing people to vary the mechanics they use to express that information. Likewise, this model specifies that all projects have _milestones_ but does not require everyone to use Github milestones because that specific mechanism is well suited to some projects but not others -- you're agreeing to have milestones, but it's up to you to decide how to track them.

## Table of Contents

- [Overview](#overview)
- [Artifacts](#artifacts)
- [Flow](#flow)
- [Roles](#roles)
- [Cadence](#cadence)

## Overview

Read this overview to get a sense of how all these terms fit together as a functioning model.

### The Pieces/Artifacts

We arrange our work into [**Projects**](#projects). Each project has a continuously-evolving set of [**Goals**](#goals) which are usually tracked as Github Issues.

In order to provide a clear timeline for each project, we associate Goals with [**Milestones**](#milestones) which have either estimated dates of delivery or deadlines.  Those Milestones are collected into a [**Project Roadmap**](#project-roadmaps), which is where you go to answer questions about the trajectory, priorities, and timing of the project.

In order to provide a clear view of the current state of work, every project has a [**Status Board**](#status-boards) which shows where the Project's Goals lie in the [**Pipeline**](#pipelines-&-statuses) or flow from inception through to being "done". This is where you go to answer questions about what is being worked on now, what is ready to be worked on, etc.

We also pull all of the Project Roadmaps together into a consolidated [**Organization Roadmap**](#organization-roadmap).  

### The Flow

The exact structure of our Pipelines vary project-by-project, but they all have some notion of a [**Backlog**](#backlog-in-progress-and-done), as well as notions of [**Ready**](#definition-of-ready), [**In Progress**](#backlog-in-progress-and-done), and [**Done**](#backlog-in-progress-and-done).

### The Roles

Each Project has a [**Project Lead**](#project-lead) who is responsible for the project's Roadmap and who tends to the Goals and Milestones.  The [**Program Manager**](#program-manager) is responsible for pulling all this info together into the Organization Roadmap.

We're playing with the roles of [**Product Owner**](#product-owner) and [**Project Manager**](#project-manager) but have not found a stable definition for those roles.

A [**Sprint Administrator**](#sprint-administrator) maintains weekly the pulse of updates, calls, etc.

### The Cadence

We conduct public [**Weekly Updates**](#weekly-updates) where each project's contributors and Project Lead check in with the Roadmap, Milestones, Status Board, and relevant Goals.  These updates provide the basis for Weekly [**Sprints**](#sprints).

On a quarterly basis (roughly every 3 months) we conduct [**Roadmap Updates**](#roadmap-updates) where we review the past quarter's Milestones and schedule Milestones for the coming months.

## Artifacts

### 📚 Projects

_TODO: WTF is a Project?_

A **Project** is...

Every project has a Project Lead, a Project Roadmap and a Status Board.

### 📘 Milestones

A **Milestone** is _a batch of goals that together achieve a significant, measurable improvement to the product or project._

**Attributes of a Milestone:**
- measurable unit of progress
- contains a list of goals, ordered by priority
- usually but not always sequentially ordered
- have either an estimated date of delivery or deadline

Each project has a set of milestones. A milestone is completed when all goals associated with it have been completed. Milestones are tracked in the project roadmap by the project lead.

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

### 📄 Goals

At the heart of each project are the goals. They are the basic unit of work. A **Goal** can be _anything that adds value to a release_. This includes issues reported by users, feature requests, bugs, Pull-Requests, general tasks such as refactoring, documentation or research.

**Attributes of a Goal:**
- an individual actionable unit of work
- may have other Goals as dependencies
- may have parts or sub-goals
- may have parts or sub-goals big enough to merit own Goals

Goals are collected, maintained and tracked in the backlog by the project lead.

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

### 🗺 Project Roadmaps

A **Project Roadmap** lists a Project's Milestones and Goals according to the Milestones' estimated dates of delivery and/or deadlines so you can answer questions like

* What is our trajectory?
* What are our priorities?
* When are things likely to be done?

**Attributes of a Project Roadmap**:
- have a list of milestones, ordered by estimated completion date or dependencies

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

We are also playing with generating Project Roadmaps using the [roadmap-generator](https://github.com/haadcode/roadmap-generator) tool.

### 📊 Status Boards

A **Status Board** displays a Project's Goals according to their status within the Project's Pipeline.  This gives you a working view of the Project's Goals so you can answer questions like

* What's being worked on now?
* What's ready to be worked on now?
* What's been completed recently?

### Organization Roadmap

An **Organization Roadmap** is an overview of all projects across the organization. This is similar to a Project Roadmap, but collects all milestones from all projects into one place.

**Attributes of an Organization Roadmap:**
- List of all projects
- List of all current milestones and their progress in each project
- List of links to old milestones

The organization roadmap is owned by project management and project managers are responsible for generating and keeping the roadmap up to date. The roadmap should be updated in the quarterly planning meeting as old milestones are reviewed and the project leads commit to new milestones.

TODO: a clear example

## Flow

### Pipelines & Statuses

**Pipelines** are a simple way to describe the workflow of a project and move Goals between the different stages in their lifecycle.

Pipelines are sequential stages through which a Goal goes during its lifetime. We refer to a Goal's current stage in the pipeline as its **Status**

Goals move from pipeline's entry stage towards the completion stage and a Goal can be only in one stage at a time. Usually goals move one way, in sequential order, but sometimes goals can move back between the stages (eg. `In Progress ──> Review ──> In Progress`). Sometimes a goal can't progress due to something preventing it to move to the next stage. To ensure surfacing blockers, each pipeline should have a ***"Blocked"*** stage where blocked goals are moved as soon as they occur.

### Backlog, In Progress and Done

The different stages or statuses within a Pipeline are broken down per the workflow of each project. On high level the stages can be described as: `Not Done ──> In Progress ──> Done`. Different projects might have different stages in their development pipeline and it is up to the project lead to identify and define the stages her project uses.

### Definition of Ready

_TODO: Address Definition of Ready (see https://github.com/ipfs/pm/issues/169)_


#### Example

*TODO: Update this to reflect discussion in https://github.com/ipfs/pm/issues/165*

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

## Roles

### Project Lead

The Project Lead maintains the Project Roadmap and is responsible for generating, updating and tracking the milestones. To make sure the Roadmap is up to date, the Project Lead should go through the current Milestones on weekly basis.

### Product Owner

TODO. See https://github.com/ipfs/pm/issues/164

### Project Manager

TODO. See https://github.com/ipfs/pm/issues/164

### Program Manager

TODO. See https://github.com/ipfs/pm/issues/164

### Sprint Administrator

TODO. See https://github.com/ipfs/pm/issues/164

## Cadence

### Weekly Updates

We conduct public [**Weekly Updates**](#weekly-updates) where each project's contributors and Project Lead check in with the Roadmap, Milestones, Status Board, and relevant Goals.

### Sprints

The notion of a **Sprint** comes from Agile Methodology. In our projects we use a very loose notion of a sprint.  It generally refers to all of the work that happens between two Weekly Updates.

### Roadmap Updates

On a quarterly basis (roughly every 3 months) we conduct [**Roadmap Updates**](#roadmap-updates) where we review the past quarter's Milestones and schedule Milestones for the coming months.
