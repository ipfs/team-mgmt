# 🚀 IPFS Core Implementations Weekly Sync 🛰 October 26 2020

- **Lead:** @achingbrain
- **Notetaker:** @lidel
- **Attendees:**
  - @vasco-santos
  - @lidel
  - @jacobheun
  - @petar
- **Recording:**
  - https://youtu.be/5kw0YuvBkqU

## Agenda

- Ensure a notetaker exists!
  - The notetaker should:
    - Add bullet points of what is said to each section of this file
    - Wait a day or two for people to add their async updates
    - PR this file into https://github.com/ipfs/team-mgmt
- Ask everyone to put their name into the list of attendees
- Initiatives
- Blockers (from the async status update)
- General questions. Could be things like:
  - I'm stuck with something, I don't know who to ask. Who knows who to ask?
  - Who can help me with xyz?
- Plan for this week
  - Select issues to work on
- Review remaining parking lot topics if there is time left

### High Priority Initiatives

These are the high priority initiatives the team is currently working on.

#### Upcoming/Shipped Releases

- ipfs-desktop [v0.13.2](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.13.2) (shipped with go-ipfs 0.7.0)
- js-ipfs 0.51 shipping soon
  - Types and secio removal
- go-ipfs 0.8 RC
  - Didnt get much done last week with Filecoin Liftoff
  - On the home stretch
- ip-get probably landing this week

#### Pinning Services
@jacobheun / @aschmahmann / @lidel

- go-ipfs looking good, on track for 0.8
- pinning client CI resolved, blocked on pinning mock server
  - when land, will provide useful examples
- discussions around `ipfs pin remote` and `ipfs pin local` (future)
  - PS API change proposal: [feat: fast name search by default](https://github.com/ipfs/pinning-services-api-spec/pull/66)

#### Secio Removal
@jacobheun / @aschmahmann

- js-ipfs 0.51 will removal support for secio
- Q: when we turn it off for 24h? 
  - A: not date yet, we will sync up this week

#### [js improves discoverability and connectivity](https://github.com/libp2p/js-libp2p/issues/703)
@vasco-santos

- Auto relay
  - [Custom announce filter](https://github.com/libp2p/js-libp2p/pull/783) function PR almost ready to review
    - Needs tests

- Rendezvous
  - Create Rendezvous example
  - Need review on the [Discovery API](https://github.com/libp2p/js-libp2p/issues/768) usage + rendezvous implementation PR

### Other Initiatives
> This is the backlog of initiatives that are either on-hold or low-priority.

#### [Improving webui file add](https://github.com/ipfs/js-ipfs/issues/3029)
@gozala

- Had been on backburner after TS, will try to get it inn this week.

#### [Typescript integration for IPFS](https://github.com/ipfs/js-ipfs/issues/2945)

- [PR has landed](https://github.com/ipfs/js-ipfs/pull/3281), but more is coming in followups.

#### Badger 2 support

- Mostly waiting on Badger folks
  - If it's ready by the 0.8RC we can land it otherwise we'll push to 0.9

#### dnsaddr resolving in JS
@vasco-santos

- PRs for `js-multiaddrs`, `js-mafmt` and `js-libp2p` ready for review
  - Needs to test @mburns PR for the examples with the above changes

### Design Review Proposals
> You want to propose something for design reviews

### Blockers/Asks

### Questions

### Parking Lot
> Anything you would like to discuss that doesn't fit into any of the other categories.

- @gozala: I would like to define (TS) interfaces for the IPFS components like Repo, Bitswap etc.. so our implementations are valiadet against them and that other could implement and validate comliance against. Any opinions 💔/💚 ?
  - Alex: good place to start may be datastore


### Week Update (for async review)
> Only post updates that are relevant 
to the IPFS Core Implementations Work. We know you do a ton more things but for this call, the focus are the implementations ❤️ 🌟 

@name
- Done:
  - What have you accomplished since the last Weekly?
- Blocked:
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
- Next:
  - What is the next important thing you should focus on.


@lidel

- Done:
  - pinning services
    - spec: [feat: fast name search by default](https://github.com/ipfs/pinning-services-api-spec/pull/66)
  - go-ipfs
      - [fix(gw): preserve query on website redirect](https://github.com/ipfs/go-ipfs/pull/7727)
      - npm-go-ipfs: [feat: cache and verify downloaded archive](https://github.com/ipfs/npm-go-ipfs/pull/32)
      - go-ipfs: [fix: webui on ipv6 localhost](https://github.com/ipfs/go-ipfs/pull/7731)
  - ipfs-desktop
      - bugfixes for [v0.13.1](https://github.com/ipfs-shipyard/ipfs-desktop/milestone/6)
      - shipped [v0.13.2](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.13.2)
      - [automated publishing to Chocolatey](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1697)
      - [disabled autoupdate on unsupported platforms](https://github.com/ipfs-shipyard/ipfs-desktop/pull/1698)
- Next:
   - pinnning services api tag, new companion beta

@vasco-santos
- Done:
  - OOO
- Blocked: N/A
- Next:
  - Finish auto relay
    - Custom announce filter function
  - Finish dnsaddr resolution support
  - Continue Rendezvous + Discovery API
