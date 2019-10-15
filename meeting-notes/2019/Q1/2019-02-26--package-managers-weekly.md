# 📦 Package Managers Weekly Sync

## February 26, 2019

- **Lead:** @andrew
- **Notetaker:** @momack2
- **Attendees:**
  - @andrew
  - @name
  - @momack2
  - @jimpick (late)

- **Recording:** Maybe?

## Agenda

- Ask everyone to put their name into the list of attendees
- Round of updates
  - What have you accomplished since the last Weekly?
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
  - What is the next important thing you should focus on?
- Ask for general questions. Could be things like:
  - I'm stuck with something, I don't know who to ask. Who knows who to ask?
  - Who can help me with xyz?
- Plan this week
  - Select issues to work on
- Review remaining issues if there is time left

## Updates


@andrew
- Done:
  - Package Manager Glossary: https://github.com/protocol/package-managers/pull/9
  - Package Manager documentation: https://github.com/protocol/package-managers/pull/10
- Blocked:
  - N/A
- Next:
  - Announce publically that I'm working with Protocol labs
  - write script for pm maintainer interviews
  - research figures for bandwidth, storage for various registries

@name
- Done:
- Blocked:
- Next:


### Notes

- @achingbrain away until March 3rd
- Entered in notes from pre-existing conversations into github files - spreadsheet was getting too squished and comparison isn't going to be a top priority
- Next going to start feeling in details about storage and bandwidth
- then reach out to different maintainers of different package managers to get a sense of what they'd benefit from and loads they'd expect to see
  - write up a set of Qs for this sort of interviews
- most information quite public - isn't a huge amount that seems sensitive/confidential
  - 3 companies that _might_ take exception to the work we're doing: maven, sumatype, artifactory - enterprise package hosting
    - some are even open source themselves - so maybe over-exaggerating
  - making this more public could be more of a lighthouse to draw people to the community
  - glossary itself super useful!
  - AI: Andrew and Alex discuss whether to move this repo to the github.com/ipfs repo
    - would need a readme that explains what we're doing and really basic research roadmap
- what is going to be the driver across other workstreams? Benchmarks, case studies, bandwidth needs, etc
- lots of package managers work the same at a very basic level
  - the effort to upload things seems to work well, but then sharing this across the DHT is where things seem to run into issues
  - aka - thousands of concurrent people sharing the same thing
  - fork in the road: test one implementation to see if IPFS stacks up, or improve bottom line to raise all ships
  - issue - large datasets problem - putting it in IPFS without tinkering with DHT/providers, doesn't scale - DDOS as a service! =] =] =]
  - ex - reasoning about which things to provide that are valueable - just provide roots? just provide package roots?
  - lets write up the scalability issue and take it off the plate of all the research
  - if you don't have anything local, you'll (almost) always be slower than a centralized registry - let's focus on the ways we can be faster and more efficient
    - keep you up to date with the packages you want
  - we should also look at Docker and how it's different from other package managers
  - we should document the reproducible builds movement and whether it's relevant to various package managers
  - can start to cross out some people that *wouldn't* be a good fit for gaining integration
    - package manager maintainers are quite resistant to the way that package managers *work* - turning the world upside down is very resistent to change
    - thinking of ways to do this more seamlessly or with less buy-in/impact on the package managers
    - lets start spinning up the issues that we **KNOW** are going to be an area and keep adding to it!






