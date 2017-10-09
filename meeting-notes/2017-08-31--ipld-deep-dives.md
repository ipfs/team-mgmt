# IPLD Deep Dives August 31

**Moderator:** @diasdavid

**Notetaker:** @jon-choi

**Attendees** 
* @stebalien
* @Kubuxu
* @Magik6k
* @diasdavid
* @jon-choi


## Agenda

<!-- Ensure notetaker is present before you begin -->
- Start recording
- Call for additional agenda items (moderator)
- IPLD Interface Spec (@stebalien)
- Sharded Maps on IPLD, HAMT, CHAMT (@Kubuxu)
- IPLD Selectors/Transforms + UnixFS binary blobs (@stebalien)

<!-- After each call, it is the responsibility of the notetaker to save the last
version of the notes in a file in ipfs/pm/meeting-notes, by opening a branch and
submitting a PR. -->

## Notes

* IPLD Interface Spec
  * intro: go-ipld interface considerations @stebalien
    * block: cid & raw data
    * nodes are blocks (go-ipld)
      * would like to add a method for unmarshal into a struct
    * `dagNode`
      * don't have consistent format?
        * No, they don't.
      * for statically typed languages such as go, we'll want a consistent interface at this level.
      * also, go doesn't have json "objects" so the "best" api for go will probably look different than the "best" api for javascript.
  * discussion:
    * context compared to js-ipld @diasdavid
      * requirements stemmed from web dev usability for ipfs
      * serialize / deserialize 
    * not convinced this is the best way forward (@diasdavid accurate?)
    * javascript does not have interfaces, which is why we have separate interface tests
      * that said, having consistent naming convention helps 
    * in go, there are 2-3 levels:
      * block level: data + CID, doesn't understand ipld
      * node level: serialized but traversable data + CID, understands IPLD, immutable.
      * object level: fully deserialized, no CID, mutable (doesn't exist in a generic form at the moment but this level will allow us to easily edit DAGs).
    * current implementation let's you generate the cid at will
    * @diasdavid unclear if this suggestion has to change the interface given what happens in js-ipld already. this might get very complex very quickly and make it error prone (?)
    * @kubuxu – this suggestion feels similar to the go-ipfs MFS (files API) mechanism
      * @stebalien: it was inspired by it
    * when should the trees be serialized? before and after cid is paired?
    * @diasdavid: happy to work through specific examples with @stebalien to assess this proposal
    * @stebalien: can take go-ipld on this direction and iterate each implementation on each other.
      * @diasdavid: doesn't have to work the same way, but it should have the same principles
* Sharded Maps on IPLD, HAMT, CHAMT
  * sharded maps / arrays are very important
    * esp given large maps and arrays
    * current plan: another layer on top of ipld resolver?
      * @diasdavid: yes, a lot of the 
    * this is where the ideas of transforms come in @stebalien
      * we'd want this for eth as well (trie)
    * @kubuxu: so implementation of this layer will take a while since the two layers below are still finalized
    * @diasdavid: we haven't had the bandwidth to, but we'd love someone to take a deeper dive into this.
      * dependencies: resolve layer maybe ~70% set
  * @kubuxu: should we test as an external library
    * @diasdavid: absolutely. that'd be great
  * reserved keys: we should have these, but not clear how many and what they look like
    * what happens in which layers? (please enumerate @stebalien, @kubuxu, @diasdavid)
  * self-describing
* IPLD Selectors/Transforms + UnixFS binary blobs
  * wasm considerations
  * @diasdavid & @stebalien
  * we need to loop in @nicola and @wanderer
* TODO
  * PR for interface merged
  	* decide on repo organization
    
    
