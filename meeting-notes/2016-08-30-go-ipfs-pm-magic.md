go-ipfs PM planning

Attendees:
    @whyrusleeping
    @em-ly
    @flyingzumwalt
    
Agenda:
     - Review PM document
     - Review current go-ipfs roadmap
     - Assess taking what we have and putting it into the PM structure
     - Identify steps for implementation
    - discuss issues on go-ipfs being solely actionable things, all others should get moved to notes or support or whatever

Notes:
    
    The Draft PM Document: https://github.com/ipfs/pm/blob/master/drafts/Project%20Management%20Process.md

    Existing roadmap resources for go-ipfs:
    https://docs.google.com/spreadsheets/d/1sQSkjTgft84qGs9bru6Qvegtd3dz3ROgQmLQBFMDstU/edit#gid=1197279931
        https://github.com/ipfs/go-ipfs/milestones
        captain's log: https://github.com/ipfs/go-ipfs/issues/2247
        waffle board: https://waffle.io/ipfs/go-ipfs
    
        
PM Doc Notes:
- Project description missing
     - order items (project, goals, milestones) by size (projects, milestones, goals)
     - "Goals are collected, maintained and tracked in the backlog by the project lead."
     - "backlog" and "project lead" are vague terms
- Waffle = backlog is our = future work (based off of the PM doc)
- Pipeline: An example pipeline ... don't agree with future work feeding into backlog
 - [ ] @flyingzumwalt Look up examples of status where a goal is "ideation" - not "new" and not "ready" 
  - some terms: "needs refinement", "ideation", "grooming"
  -The Definition of Ready from [Roman Pichler](http://www.romanpichler.com/blog/the-definition-of-ready/), [Scrum Blog Inc.](https://www.scruminc.com/definition-of-ready/), [Innolution](http://www.innolution.com/blog/definition-of-ready), [System Agility](https://systemagility.com/2011/05/17/definition-of-ready/)
  - Writeup: [Product Backlog Refinement](https://rthewitt.com/2013/06/16/product-backlog-refinement/) (scrum) -- Refinement, Estimation, Prioritisation, Ready, Communication, Ideation


Add a column in the backlog called "New" -- this is the column that waffle calls backlog by default.
 - can we add a script that automatically tags issues to show up in this column?

New - Future Work - Ready
New - where all new issues comes through and need to be sorted
Future Work - a holding place for work that needs to be done that has been reviewed/vetted by maintainers
Ready - things that should be worked on

Recommendation from @why: default to recommending a distinction between "New" and "Future Work"

Milestones denote priority and timing/urgency
Important distinction: 
    - Waffle boards show what's in process, what's being worked on
    - Milestones show us all the work linked (goals), and the priority of them being done.

NOTE: GH Milestones let you order Issues within the milestone, which gives you implicit priority
- not sure if it crosses over to Waffle.io or if Waffle has it own set of priorities.

Next week's call:
- Center all hands call Milestones list
 - Maybe the notes just list a ton of issues that was discussed and that's it
 - Maybe it captures the miscellaneous comments that come up
 - If it's not a comment that would be committed to an issue, does it need to be written down in the meeting notes?
Waffle board is not ready, before we do that:
- need to create new column between ready and new"

Next call:
    - Talking about roles (Project Lead/Captain, Project Manager, Product Owner), distinction between responsibilities and roles


Applying to go-ipfs
- Renaming things in the waffle.io board
- Indicate deadlines in the title for Milestones that are further in the pipeline
- The roadmapping process during the quarterly meeting is when you decide on dates
- Milestones that are things that are ongoing but dont have a due date and are just ongoing (should imply low priority
- Milestones for the current quarter should all have due dates
- Milestones in future quarters should have existence but no firm dates.


Discussion Roles 
Project Lead vs Project Captain
 - Captain started because @diasdavid started a "Captain's Log"
 - Currently not mentioned in the PM doc at all

Project Manager



Product Owner
 - Defines what value the product is creating
 - Example: Juan being the product owner for IPFS and Filecoin


 - Gained an understanding of the term "Captain"
 - The role that (expensive) context switching 
 
## Defining Roles in go-ipfs
Project Lead - @whyrusleeping
Project Manager - @em-ly
Product Owner - @jbenet

Product Owner transitioning from @jbenet to @whyrusleeping
 > Transitioning Jeromy taking control of the roadmap and the milestones and then following through on that roadmap.
 > 






