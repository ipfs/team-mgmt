# IPFS Project Management Process

## Purpose of this Document

The [Project Leads](#project-leads) of each of the IPFS projects ([go-ipfs](https://github.com/ipfs/go-ipfs), [js-ipfs](https://github.com/ipfs/js-ipfs), [IPLD](https://github.com/ipld), [orbit](https://github.com/haadcode/orbit), etc.) have agreed to use this model so that we can provide consistency across all of these closely related code bases, specs and products.

This _model_ (terms, roles, patterns) is intentionally separated from the _mechanics_ of project management process so that people have room to vary the mechanics based on their needs or habits.  For example, in most of our projects _Goals_ will be tracked as github issues but we intentionally used the word "Goals" instead of "Issues" in this document because we want to be clear that we’re emphasizing the _conceptual model_ as our point of consistency across IPFS projects while allowing people to vary the mechanics they use to express that information. Likewise, this model specifies that all projects have _Milestones_ but does not require everyone to use Github milestones because that specific mechanism is well suited to some projects but not others -- you're agreeing to have milestones, but it's up to you to decide how to track them.

**This will always be a work in progress.** We constantly adapt, improve, and reimagine our work process in response to new information.  This document is meant to be a reference point and a way of recording concepts or conventions as they arise. If something is missing or inaccurate, please point it out. If we could be doing things in a better way, please speak up. _Pull Requests Welcome._

## Table of Contents

- [Overview](#overview)
- [Artifacts](#artifacts)
- [Worklow](#workflow)
- [Roles](#roles)
- [Cadence](#cadence)

## Overview

Read this overview to get a sense of how all these terms fit together as a functioning model. Each term appears as a link that you can follow get a fuller definition of the term and an explanation of its use.

### The Pieces/Artifacts

We arrange our work into 📚 [**Projects**](#projects). Each project has a continuously-evolving set of 📄 [**Goals**](#goals) which are usually tracked as Github Issues.

In order to provide a clear timeline for each project, we associate Goals with 📘 [**Milestones**](#milestones) which have either estimated dates of delivery or deadlines.  Those Milestones are collected into a 🗺 [**Project Roadmap**](#project-roadmaps), which is where you go to answer questions about the trajectory, priorities, and timing of the project.

In order to provide a clear view of the current state of work, every project has a 📊 [**Status Board**](#status-boards) which shows where the Project's Goals lie in the [**Pipeline**](#pipelines-&-statuses) or flow from inception through to completion. The Status Board is where you go to answer questions about what is being worked on now, what is ready to be worked on, etc.

We also pull all of the Project Roadmaps together into a consolidated [**Organization Roadmap**](#organization-roadmap).  

### The Worklow

Projects are free to define their own [Pipeline](#pipelines-and-stages) to describe how that the project's Goals progress from inception to completion but they all have some notion of a [**Backlog**](#definition-of-backlog), as well as notions of [**Ready**](#definition-of-ready), [**In Progress**](#definition-of-in-progress), and [**Done**](#definition-of-done). They also have a way of representing when a Goal is [**Blocked**](#when-goals-are-blocked)

### The Roles

Each Project has a [**Project Lead**](#project-lead) who is responsible for the project's Roadmap and who tends to the Goals and Milestones.  The [**Program Manager**](#program-manager) is responsible for pulling all this info together into the Organization Roadmap.

We're playing with the roles of [**Product Owner**](#product-owner) and [**Project Manager**](#project-manager) but have not found a stable definition for those roles.

A [**Sprint Administrator**](#sprint-administrator) maintains the pulse of weekly updates, calls, etc. and ensures that the records of these discussions are publicly available.

### The Cadence

We conduct public [**Weekly Updates**](#weekly-updates) where each project's contributors and Project Lead check in with the Roadmap, Milestones, Status Board, and relevant Goals.  These updates provide the basis for Weekly [**Sprints**](#sprints).

On a quarterly basis (roughly every 3 months) we conduct [**Roadmap Updates**](#roadmap-updates) where we review the past quarter's Milestones and establish a schedule for the Milestones that will occur in the coming months.

## Artifacts

### 📚 Projects

_TODO: WTF is a Project? is a Project defined by its audience?_

A **Project** is...

_We **do not** use a one-to-one mapping between Projects and code bases._ Projects frequently include multiple code bases stored in multiple git repositories and they often have a unifying code base that ties them all together.

Every project has a Project Lead, a Project Roadmap and a Status Board.

### 📘 Milestones

A **Milestone** _groups together a set of goals that will achieve a significant, measurable improvement to the product or project._

Milestones are the bridge between the [Status Board](#status-boards) and the [Roadmap](#roadmaps). The Roadmap focuses on the projected timeline while the the Status Board focuses on the current state of work in the Pipeline. Those contexts are each views onto the same pile of Goals. Milestones bridge these two contexts by gathering together related Goals and associating them with either an Estimated Date of Delivery or a Deadline so that we can situate those Goals within the Roadmap's timeline.

A Milestone is completed when all goals associated with it have been completed.

**Attributes of a Milestone:**

A Milestone has the following information:
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

The Project Lead keeps current Milestones up to date on a weekly-basis. New Milestones should be generated and old Milestones should be updated before the quarterly Roadmap Update.

Milestones help make Roadmaps achievable, and they give the team and users a clear sense of progress. There's no hard and fast way to decide what a Milestone's boundaries are. It is up to the project leader to select what Goals constitute a Milestone and what Milestones constitute a Roadmap. Sometimes it will be clear how to break down a Roadmap into manageable pieces. Sometimes it will be clear which goals to bundle in a Milestone. The important thing is to make manageable groups (not too big) that provide a significant enough sense of progress through the Roadmap.

TODO: a clear example

### 📄 Goals

At the heart of each Project are the Goals. They are the basic unit of work. A **Goal** is _an individual actionable unit of work that adds value to a release_. This includes issues reported by users, feature requests, bugs, Pull-Requests, general tasks such as refactoring, documentation or research. Goals may have parts or sub-tasks and they may have other Goals as dependencies.

All of a Project's contributors work together to define, refine, collect, maintain and track Goals in the Pipeline but responsibility for this maintenance ultimately falls to the Project Lead and the Project Manager.

**Attributes of a Goal:**

A Goal description includes the following:
- Name / Summary
  - Describes what the goal is on high level
  - Example 1: "Reduce the size of the go-ipfs executable by 30%"
  - Example 2: "API Documentation for js-ipfs includes all public API methods"
- Description
  - What the problem is and how to achieve this goal
  - Should tell you how you will know that the problem has been solved or the goal has been achieved
  - Describe the type of this goal: is it a bug? a new feature? something else?
- Status
  - The status tells us which [stage](#pipelines-and-stages) the Goal has reached within the project's [workflow](#workflow).
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

The Roadmap Document contains the following information:
- List of current milestones
  - Sequentally ordered, eg. by expected due date or dependency on other milestones (where applicable)
  - Next upcoming milestone at the top
- Current status of the project, ie. milestone progress
- List of previous milestones

The Roadmap can optionally be rendered as a high-level overview of a Project's Milestones, omitting the list of specific Goals within those Milestones. However, if the Goals are omitted from the Roadmap, it must contain links to a detailed break down of the Goals.

### Examples

Some examples of Project Roadmaps:
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

## Workflow

### Pipelines & Stages

**Pipelines** are a simple way to describe the workflow of a project and move Goals between the different stages in their lifecycle.

Pipelines are sequential **Stages** through which a Goal goes during its lifetime. When we talk about a Goal's **status** we are usually referring to its _current stage in the pipeline_.

### General Flow

Goals move from pipeline's entry stage towards the completion stage and a Goal can be only in one stage at a time.
The different stages or statuses within a Pipeline are broken down per the workflow of each project. On high level the stages always have a general flow: `Not Done ──> In Progress ──> Done`.

 Usually goals move one way, in sequential order, but sometimes goals can move back between the stages (eg. `In Progress ──> Review ──> In Progress`). Sometimes a goal can't progress due to something preventing it to move to the next stage. To ensure surfacing blockers, each pipeline should have a ***"Blocked"*** stage where blocked goals are moved as soon as they occur.

### Conventions about Pipeline Stages

Project Leads are free to define their own pipeline and break it up into stages that suit their particular project. By convention we usually have stages called Backlog, Ready and Done. We also often have a stage called "Inbox".

In order to minimize confusion, we try to be consistent about our usage of these terms.

#### The Inbox

The "Inbox" status is where new Goals land in the pipeline. _When a Goal is in the **Inbox** that means the Project maintainers have not reviewed or categorized the Goal yet._

Not all projects have an Inbox. This stage is useful in the pipelines of projects that have large, active communities of users and contributors because it clearly distinguishes between "this has been reported but not reviewed yet" and "we've seen this but we're not planning to work on it yet".

#### Definition of Backlog

_When a Goal is in the **Backlog** that means it is not planned to be carried out at this moment._

If a projects has both a Backlog and an Inbox, that means Goals in the Backlog are well defined but not planned to be carried out at this moment.  By contrast, some projects do not have an Inbox -- their Backlog includes Goals that have not been reviewed _and_ goals that have been reviewed but are not planned to be carried out yet.

#### Definition of Ready

_When a Goal is **Ready** that means the goal is planned to be carried out. It's waiting for someone to start working on it._

Some teams will apply a stringent set of requirements for marking a Goal as "Ready". This usually revolves around requiring that Goals must be defined in a way that is _clear_, _testable_  and _feasible_ before you ask people to work on them.  

This idea of applying a stringent _Definition of Ready_ gets a lot of attention in the context of Scrum Methodology. There are many useful articles discussing the Definition of Ready, such as these by [Roman Pichler](http://www.romanpichler.com/blog/the-definition-of-ready/), [Scrum Blog Inc.](https://www.scruminc.com/definition-of-ready/), [Innolution](http://www.innolution.com/blog/definition-of-ready) and [System Agility](https://systemagility.com/2011/05/17/definition-of-ready/)

#### Definition of In Progress

_When a Goal is **In Progress**, that means the goal is actively being worked on. Goals that are In Progress will almost always have one or more assignees._

#### Definition of Done

_When a Goal is **Done**, that means the Goal is completed. No further action is necessary._

Note: Goals that have been rejected by the maintainers, for example features that the maintainers decided not to implement or bugs that they could not reproduce, might show up as "done" in a pipeline because no further action is necessary -- the Goal has been addressed.

#### When Goals are Blocked

_We say a Goal is **Blocked** when the goal cannot proceed because something is preventing it from moving down the pipeline._

### Example

This is the Pipeline/Workflow we use for the [go-ipfs](https://github.com/ipfs/go-ipfs) Project. It uses the conventions described above and adds a status for *refining*, which means that the goal has been reviewed by the maintainers but it is not ready to be worked on (ie. the description needs clarification, etc.).  

You can see the go-ipfs pipeline in use as a waffle board at https://waffle.io/ipfs/go-ipfs

```
  ╭─────────────────────────────────── Pipeline ──────────────────────────────────────╮
  │────── 1. ────│──── 2. ───│─── 3. ──│────── 4. ─────│─── 5. ───│──── 6. ───│── 7. ─│
  │ Stages                                                                            │

                                               ╭────────────╮
     ──> Inbox ──> Refining ──> Backlog ──> Ready ──> In Progress ──> Done ──>
                    │             │            │            │
                    ╰─────────────╯            │            │
                                            Blocked ────────╯
  ╰───────────────────────────────────────────────────────────────────────────────────╯
```

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
