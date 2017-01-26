IPFS Cross-Sprint Sync January 23rd
===

**Moderator:** @flyingzumwalt
**Notetaker:** @diasdavid
**Attendees** 

## Agenda

* Brief Update from [data.gov Sprint](https://github.com/ipfs/pm/issues/342) - https://github.com/ipfs/archives/issues/87
    * What you've been doing
    * What's working
    * What's not working
    * Things to consider for future sprints
* Brief Update from [Browser Accesses Go-IPFS Content Sprint](https://github.com/ipfs/pm/issues/310)
    * What you've been doing
    * What's working
    * What's not working
    * Things to consider for future sprints

# Notes

- Keep in mind: you'll be able to push forward until roughly wednesday.
    - From thursday on it's end-of-sprint wrapup
    - You're doing good for the future of that code if you don't leave things in limbo
    - Scrum "showcase" on mondays after the respective sprint
    - Sprints should do syncs on Thursdays, and prep the next sprint on Thursdays 

# Sprintino Updates
- No sprintinos last week
- sprinting solo is hard -- not having an accountability buddy leads to thrashing
- Ideally Sprintinos should get as much careful planning as Sprints
- Possibly have cross-sprintino accountability buddies
- (Daily) Check ins for folks not assigned to sprints 
- During planning, we should identify who isn't assigned to a Sprint and pair them.

# Brief Update from [data.gov Sprint](https://github.com/ipfs/pm/issues/342)

- Landing point for the data.gov endeavour https://github.com/ipfs/archives/issues/87
- The actual size for the data in need to be saved is way smaller than what it was initially communicated -> less resources needed

## What you've been doing

- 1st week was focused on:
  - setting testing infra
  - write down the use cases as stories so that we understand what we are optimizing for

## What's working

- daily standups
  - 10 to 15 minutes
  - helps setting the pace of the sprint (and developing that habit)
  - blockers are identified faster
- waffle board

## What's not working

- sprints do not account for learning time of tools

## Things to consider for future sprints

- Identify a week in advance what are going to be the parts touched during the sprint, so that participants get to prepare for it
- How are people getting information about how much is or was or should be done in the next few days // sprint? 
    - Matt: We've been using the Waffleboard
    - We've been using the "ready" pile, and assigning other people to it to (not only IPFS core). 
    - Backlog is a backlog, not a ready for this sprint - just not being focused on.


# Brief Update from [Browser Accesses go-ipfs Content Sprint](https://github.com/ipfs/pm/issues/310)
- What you've been doing
    - objective: being able to cat files in the browser that have been added on go-ipfs
    - major blocker at the moment: multiplexing interop
        - spdystream is excellent in js, not so excellent in go
        - upgrading go-multiplex
    - no success yet transferring files >1MB between js and go
    - unclear yet if multiplexing is the last blocker
    - have now /dns4 & /dns6 & /wss support in multiaddr
    - demos and tutorial
    - need config option for "announced addresses": https://github.com/ipfs/go-ipfs/issues/3613
    - circuit-relay prespec is WIP
- what's working
    - daily async "standup" in the pm issues
    - weekly video syncs on thursdays
    - team being focused on the same thing is enormously helpful
- what's not working
    - some expectations/goals were not communicated very well
        - unclear consensus about examples/demos
        - noticed this only 5 days into the sprint, where it was too late to get back to the original plan
        - why did we not notice this in the thursday sync?
        - more thorough product design in the beginning might be helpful/important
        - stories weren't properly prepared for the "ready" state
        - we need a retrospective on the sprints, *before* the prep for the next sprints
        - knowledge transfer: we already have a bunch of half-working examples and demos
            - what's broken? what works? what are the weird hotfixes?

## Things to consider for future sprints
