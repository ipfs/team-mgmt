## Apps on IPFS

#### Lead: @haadcode
#### Notetaker: @keks

#### Participants

- @keks
- @dignifiedquire
- @haadcode
- @em-ly
- @diasdavid
- @VictorBjelkholm
- @jbenet
- Paul from pinbits.io

## Agenda

- Who volunteers to take notes?
- Updates
    - Orbit: not much has happened, so this will be quick
- pinbits.io

**You have 30 minutes for this agenda**, 5 minutes before the meeting ends, consider moving the remaining items to a github discussion thread so that all the other sprint meetings can start in time.

## Notes

- Orbit
    - not much happened
    - review a PR for config screen, almost done, maybe merge this week
- What needs to happen for loading from https https://github.com/ipfs/js-ipfs/issues/614
- Improving init https://github.com/ipfs/js-ipfs/issues/556
    - *(notetaker's comment: That was a bit too quick for me, sorry)*
    - that's what haad has been working on
    - https://github.com/haadcode/ipfs-daemon 
    - https://ipfs.io/ipfs/QmYgyxZHSVR5pQt4dLDD8u5xuzrj97QCAVM28vmmh3iRes/
    - API: we need an explicit start command
    - we probably don't need the low-level stuff in the ipfs-daemon controller
    - discussion goes on in js-ipfs#556
- Paul built https://pinbits.io, a pinning server
    - its going to be an ipfs pinning service
    - no guarantees, everythings beta
    - people list pins and others can do that for a bounty
    - pins are limited in time
    - there is something similar:
        - there are three or four similar services
        - competition is good
        - they're also not quite production ready yet
    - issues during building this:
        - pinning just blocks until its done
        - S3 backend for ipfs block storage would be neat
        - -> please post a list somewhere!
- When can we have orbit on the browser? A rough timescale
    - roughly a week after floodsub is in
    - depends on when that happens
    - PR: https://github.com/ipfs/js-ipfs/pull/610
    - status of PR unclear
    - let's say we work in that next week
    - -> maybe rough timescale 2-3 weeks
- Interop
    - limited interop between go-ipfs and js-ipfs due to SPDY
    - there is floodsub interop
    - -> orbit interop is not quite there

##### After sprint meeting is finished, create the respective action items on the Github sprint issue
