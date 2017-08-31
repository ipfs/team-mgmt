## Apps on IPFS

#### Lead: @haadcode
#### Notetaker: @flyingzumwalt

#### Participants

- __Names__

## Agenda
<!-- Ensure notetaker is present before you begin -->
- Call for additional agenda items (moderator)
<!-- Add items here -->
- Orbit update
    - Look at [Orbit Waffle Board](https://waffle.io/haadcode/orbit) and go through what has happened and what will happen 

## What has happened

The last week has been focused on trying to get js-ipfs ecosystem working on go-ipfs 0.4.5

0.4.5-pre1 is working pretty nicely

We have a version of the new release but there's some dependency massaging to do

Biggest thing: configuring the ipfs daemon on startup. Contributed by @theobad. Awesome!

## Going forward

* Continuing work getting js-ipfs ecosystem working on go-ipfs 0.4.5
* pubsub

## Discussion

### PubSub
Q: _When can we have pubsub shipped in js-ipfs_? Can we do that early this week? Is that possible?

A: @gavinmcdermott has been working on it. @haadcode will be tag-teaming on it this week.  @haadcode thinks it might be realistic to hope that we will ship it this week.

@diasdavid: A good test will be to have js-ipfs loading in browserand in electron while also running a go-ipfs daemon -- in theory messages should propagate across all of these via floodsub without a formal implementation of relay.

### Observations about using Waffle

@jbenet: this has been very useful for me. It lets me see what's getting done and also lets me see where I can help. It's nice seeing things progress acros the board throughout the week.

Observations
1. In order for it to work We all need to use it
2. Grooming the board is a group activity -- shouldn't be one person's job
3. Having a "blocked" column is really powerful, but only if people understand what it's representing and _want_ it
4. When stuff is missing from boards, this isn't a failure of the process. It's a win -- it shows us that people are doing work that hasn't been visible to others. 

<!-- After each call, it is the responsibility of the notetaker to save the last
version of the notes in a file in ipfs/pm/meeting-notes, by opening a branch and
submitting a PR. -->
