## IPFS Interfaces 2016-08-22

#### Lead: @jbenet
#### Notetaker: @em-ly

#### Participants

- @jbenet 


## Agenda

**You have 30 minutes for this agenda**, 5 minutes before the meeting ends, consider moving the remaining items to a github discussion thread so that all the other sprint meetings can start in time.

Objective of call: discuss the interfaces that we're creating.
- Language independent, very generally, anyone can access
- Being extremely clear on the function calls and the structure of the data.
- Take into account the various (programming) language backgrounds of the contributors that are active in the IPFS community.

Some examples:
- https://github.com/libp2p/interface-transport
- https://github.com/libp2p/interface-peer-routing
- https://github.com/libp2p/interface-record-store
- https://github.com/libp2p?utf8=%E2%9C%93&query=interface
- https://github.com/ipfs/interface-ipfs-core

Action items:
 - Finding commonalities among projects to standardize moving forward
 - It would be valuable to put together a readme about this.

## Notes

Interface Transport review - https://github.com/libp2p/interface-transport
:)
- gives use cases
- listing of modules
- API section (best part)
- How to create something
- How to create with different languages (js, go, etc)
- Toggle to give examples in the language that you're working on.
- Different approaches we want to take:
- toggle for language
- have one file for each language, but with the same sections and pieces
:(
- Table of contents is very javascript language focused
Note on Javascript: not a good native language to base communication on because it's a very unique language that isn't super receptive to people coming with different backgrounds. Go might be a good one, but by no means the best option for us. 
"lost in a sea of javascript"

Go might be the best option right now to do it, but we should scope what that looks like first before committing.

https://github.com/libp2p/interface-transport/blob/master/tests/base-test.js

 - Using [Fascal? Rasco? Hasco?] Haskell :D https://www.haskell.org/
Might turn people off who aren't super familiar with the language
Go is a lot more intuitive and easier for people to join in on.

 - @jbenet did an exercise in creating an exhaustive list for IPFS, might be helpful to do for libp2p

 - It's easier now to modify the interface languages now than later.
 - looking at it now let's us see everything that's on the table

Follow up:
#1 Discussion: Picking a language to describe these
#2 Discussion: Show implementation and use cases in other languages


Action items:
    - [ ] @jbenet is going to go through and write the libp2p modules
    - [ ] moving forward with identifying the pieces for Go to start there
    - find a way to test the DHC







