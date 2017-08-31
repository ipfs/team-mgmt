## Mediachain

#### Lead: @jbenet
#### Notetaker: @RichardLitt

#### Participants

- @jbenet
- @RichardLitt
- @Arkadiy
- @diasDavid
- @flyingzumwalt
- @em-ly
- @yusef

## Agenda
large dataset providing: chatty provide on add, direct improvements, workarounds (add w/o provide, alt. routing schemes)
dataset add w/o copy: (re: ipfs/go-ipfs#875)
IPLD status/work needed


**You have 30 minutes for this agenda**, 5 minutes before the meeting ends, consider moving the remaining items to a github discussion thread so that all the other sprint meetings can start in time.

## Notes

Regarding chatty DHT provide on add:
Long term: 
    - Content Routing system: Imagine one that listens for requests, instead of the other way around
    - ProvideSet, similar to the pinset. Hasn't been prioritized. 
      - pinning is "I am going to keep this thing around."
      - providing is "I am going to provide this thing, by announcing it to the network and serving to those who ask for it"
      - There are some edge cases; I want to pin, want to provide, don't want everyone to know, and so on. These interfaces will be fleshed out overtime.
Short term:
- @whyrusleeping is writing a flag for add that will not provide, and 
  - Always going to be slower than running a node daemon
- Adding a value to set a provide timeout of zero, which means that you can set go-ipfs in the mode which won't announce content to the DHT, but will still use the DHT for peer routing. You will need to figure out who has what elsewise; this could be (before Pubsub) if you have a small network (>100 nodes), you can directly connect them (mesh). 
- @mediachain: We were already planning to build our own overlay
- If you have this, then Bitswap will just work. The hard part is making sure that you're directly connected to the provider. 
- @mediachain: You still have to be able to dial that peer connectly. @juan: Yes, today. We're working on this. 
- @mediachain: A way to get around this now is to have fully connectable peers, or supernodes. @jbenet: yes.
- @jbenet: So, what do you do if you have large datasets? You don't want all peers to be servers (if 10TB network, eg). So that means you'll want supernodes that can respond to a lot of requests. Can be decentralized and have distributed ownership. 
- @m: Resource for setting up a full mesh overlay? 
- @j depends on how deep that rabbit hole goes. If you want to set up your own network, you can do this by isolating the network with trad netowrking systems (allowing specific IP addresses). We're adding a fx for adding a key to the transports in libp2p, that re-encrypts eveyrthing that goes out of a transport with that key, which basically enables a private network. 
- @m We talked about this months ago, way to early for us. I think what we probably want in the long term is nodes that can particpate in normal IPFS, but also be special nodes. 
- @j Yeah, you want some way of accessing the separate network, but not all nodes. 
- @m Yep. You'll need some way to say "I'm a mediachain node..."
- @j You can do this with libp2p, where you can annouce what protocols youa re running. Rightnow you have to recompile with another service that you add. Possible, there are services for this, but not the easiest. We're thinking of API commands where you open a stream through the API, and you reigster your protocol handle through that. So the IPFS node would advertise that it is this protocol, and then stream it out to you. 
- @m Awesome. I think we know where we're going. Setting the keys seems like a good intermediate solution, pubsub long term. Sounds good. 
- @y: Got my head around it. Would it be possible to dump the whole provideset outofband, and share it among the in group?
- @j yes. This provideset would just be IPFS objects. So, you could just send a hash of your provideset, and advertise that. 
- @j there are privacy questions there, of course, and we haven't done this full yet (cf the pinset, and issues with encryption being needed first (or just optionally)). Most cases you don't care of the pinset is public. 
- @m So the pinset is an equivalent of `ipfs ls`; would there be something for provideset? 
- @j Yes. At the end of the day, they're just an index. This becomes a really easy way to stream out the indices and stream them around. 
- @j would be great to know the use case desires for this! For instance, "oh, I'm providing a whole pinset, but this subtree I don't want to provide". When that happens, I'll ping you. 

@j I want to make sure that those are addressed for you right now. @why is working on this for you. 
@m So: what is the most concrete shipping?
@j Once @why ships that. So, when you add, you just add --local.  That will just add stuff to the DHT. Then, when you're ready, you'll just run `ipfs dht provide`, which could be hashsets or individual files. The whole point of providers is that peers who want data from each other can find each other. 
@m Ok, that makes sense. Our things that will need to be locatable through the provider records immediately are bigger index objects, and individual rcords. I'm not sure about assets (like thumbnails) or raw metadata, which should be addressable directly, but I'm not sure. But between this, and the ability to cut ourselves off from the greater network, this sounds good 
@j Yeah. And you should be able to use IPDB to do this privately in a small network. 
@why: You could just change the multistream name at the top-level, and that would totally isolate you. Hacky, but, yeah. 

@j A lot of this is us dealing with edge cases, and levelling up to deal with them. 

### Add w/o copy #875

- @j We're working on figuring out how to merge this into go-ipfs. We may want to wait until we have IPLD work done, where we can reference raw blocks of data. His PR simplifies a lot if we do that first. 
- @j believe that @kevina's solution works, though. But it's not core! So it may be a bit iffy. And he has broken compat on it a couple of times now (due to us changing). Use it as a
- @m Ok, we'll shove that until we have IPLD working. 
- @j Yes, we want this, just will take a bit of time. 

@m Have you tried dropping [rocks](http://rocksdb.org/) instead of level?
@j Yeah. We haven't moved on with it because: The datastore stuff should be super modular. The other part is leveldb so far has been good enough for most use cases, and we want to move off of it. Where we want to end up is that the repo and how IPFS stores stuff in the filesystem is different than the go-ipfs node. WHat it cares about isn't the index; what we're storing now is some graph in IPLD later. We want to have certian access, speeds, may put some subset of your repo in the fs, or in rocksDB, whatever. We're basically working on how to store the repo. That can just be an IPLD datastructure, too..
@why I've put IPFS into postgres, and it was weird. 
@why I have some code locally that makes it locally, as a data store, which will make it more interop with SQL and s3, but will take a day to shape up and put in. 

### IPLD

- @m need help? 
- @j Yes. Nicola wants to do an update on this today. go-ipfs has a few more things to do to get ready. We're working through this process. There might be places where CR or modules would be good. We just need to do some work to figure out which modules are self-contained enough. 
- @yusef: I have some time, trying to get my head around the go-way. If there's a bug you can point me at. 
- @j one blocker is a big IPLD PR from @mildred that we need to review.

- @y what about the go-ipld repo?
- @j yeah, there's a lot of stuff there we don't want in the final project...
- @y I'll spend some time with that. @j awesome. 
- @j @mildred did a ton of work, so you can parse IPLD in a streaming fashion. This makes it a lot  faster. That is really cool. Awesome. 
- @m One thing we can take a stab at is to do that; sounds very large in scope, so maybe we should take something smaller on. But I am down to see the roadmap. 

### Actionables

- [ ] @jbenet and @whyrusleeping: It's time to implement that key thing that we've needed for a while. 
- [ ] @whyrusleeping: Write an example in a gist on how to change the top-level name of multistream.
- [ ] @whyrusleeping: Lay out the roadmap for go-ipfs support for IPLD landing
- [ ] @whyrusleeping @jbenet: Go through and see about that PR from @mildred this week, or next week if inevitable
- [ ] @jbenet: Next week we'll let you know about the provider stuff
- [ ] @mediachain: I'll keep half an eye on 


##### After sprint meeting is finished, create the respective action items on the Github sprint issue




























