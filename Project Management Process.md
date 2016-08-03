# IPFS Project Management Process

**Status: work in progress, not even a full draft yet**

Answer these questions:
- What steps are there
- How often things are done
- Who is responsible for what part
- What are the expectations and outputs of each step
- How information is displayed
- How status is signaled
- How information moves
- Who does what and when

## Projects
TODO

## Roles
TODO
### Product Owners
### Project Leads
### Project Managers

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
  - TODO: what is a good name for a goal?
- Description
  - What the problem is and how this goal solves it
- Type
  - Describe the type of this goal: is it a bug? a new feature? something else?
- Status
  - What is the current status of this goal. Is it to-be-reviewed? In progress? Blocked? Done?
- Priority (optional, priority can be defined in the backlog)
- Any additional information that helps to reach this goal (optional)

TODO: a clear example

### Backlog
TODO

What:
- Collection of project's goals
- List all goals, tasks, efforts, bugs, new features, etc. for the project.
- Prioritize items top-to-bottom, items to be worked on next at the top.
- Each item should signal its status, type and other important meta information.

Who: Project Leads

How often: Keep up to date on daily-basis

Output: Backlog

### Milestones
A milestone is a group of project's goals. Each project has a set of milestones. A milestone is completed when all goals associated with it have been completed. Milestones are tracked in the project roadmap by the project lead.

A milestone has the following information:
- Name
  - TODO: describe what is a good name, give an example
- Due date
- List of goals attached to it
- Progress indicator

The Project Lead keeps current milestones up to date on weekly-basis. New milestones should be generated and old milestones updated before the quarterly planning meeting. Prepare new milestones in good time before quarterly planning.

TODO: a clear example

### Project Roadmap
The milestones are tracked in project's roadmap. The project lead owns the roadmap and is responsible for generating, updating and tracking the milestones. To make sure the roadmap is up to date, the project lead should go through the current milestones on weekly basis.

The Roadmap Document contains the following information:
- List of current milestones
  - Ordered by expected due date, next upcoming milestone at the top
- Current status of the project, ie. milestone progress
- List of previous, recent milestones (< 6 months)
- List of links to very old milestones (> 6 months)

The roadmap can be a high-level overview of milestones and project's progress, so details suchs as list of goals per milestone can be omitted. However, if omitted, the roadmap should contain links to the detailed information.

TODO: a clear example

### Organization Roadmap
An overview of all projects across the organization is tracked in organization's roadmap. This is similar to a project roadmap, but collects all milestones from all projects into one place.

Organization roadmap contains the following information:
- List of all projects
- List of all current milestones and their progress in each project
- List of links to old milestones

The organization roadmap is owned by project management and project managers are responsible for generating and keeping the roadmap up to date. The roadmap should be updated in the quarterly planning meeting as old milestones are reviewed and the project leads commit to new milestones.

TODO: a clear example

## Flow

### Quarterly Planning
TODO

What:
- Identify project’s / company’s needs and main efforts.
- Commit to efforts and goals.
- Produce a high level overview of a roadmap.

Who: Product Owners, Project Leads, Project Managers
How often: Every 3 months
Output: Organization Roadmap (responsible: PM)

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

## Implementation
TODO
