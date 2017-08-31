# Coffee Chat between [Lars Gierth](https://github.com/lgierth) and [David Dias](https://github.com/diasdavid)

> Past August 30, 2017, Lars and David got together to hangout, drink coffee and chat over a couple of issues we've been willing to.As a good habit to take notes to share with the rest of the community, here is the sum up created post meeting, following the same Meeting format we have for our IPFS meetings.

**Moderator:** n/a (1:1 convo)
**Notetake:** both took notes and curated them later

**Attendees**

- Lars Gierth (@lgierth)
- David Dias (@diasdvid)

## Agenda

- Illustrate how WebRTC Star works
- Resolve WebRTC Star multiaddrs situation
- Fix the Gateways vs Bootstrappers issue
- Review libp2p-websockets-star

## Notes

#### The inner works of WebRTC Star

We went through in length of how WebRTC works from signalling, SDP offers, handshake, the crypto challenge and NAT Traversal using STUN. Lars got the information he was looking for to understand how WebRTC Star works.

- [ ] [Create a full illustration and write down the same explanation](https://github.com/libp2p/js-libp2p-webrtc-star/issues/117) for the [js-libp2p-webrtc-star repo](https://github.com/libp2p/js-libp2p-webrtc-star).

#### WebRTC Star multiaddrs situation

We discussed https://github.com/libp2p/js-libp2p-webrtc-star/issues/110 in length and decided that:

- [ ] libp2p-webrtc-star should encapsulate another multiaddr (as described in the issue) and that means that a `/libp2p-webrtc-star/dns4/star-signal.cloud.ipfs.team/wss/ipfs/<your-peer-id>` should in fact be `/dns4/star-signal.cloud.ipfs.team/wss/libp2p-webrtc-star/ipfs/<your-peer-id>`. This requires
  - [ ] Updating js-mafmt
  - [ ] Bubble up all the changes through the dep tree
- [ ] Change libp2p-webrtc-star to p2p-webrtc-star (so that it matches the nomenclature also used by p2p-circuit)
- [ ] Apply the same name change and encapsulation change to libp2p-websockets-star

#### Gateways vs Boostrappers

One of the promises of js-ipfs is that content added in the browser is visible though the gateways. This promise was recently broken when the Bootstraper nodes became independent from the gateway as reported here https://github.com/ipfs/js-ipfs/issues/967#issuecomment-325732398.

Today there are only two gateways, chappy and scrappy.

- [ ] Solve the issue by adding the gateways multiaddrs to the bootstrapers list on https://github.com/ipfs/js-ipfs/tree/master/src/core/runtime

#### Review libp2p-websockets-star

We've reviewed libp2p-websockets-star and it looks like a good solution for anyone that is looking for a lightway P2R2P (2 hop routing) to use in the browser and connect js-ipfs nodes amongst themselves. 

- [ ] Core Review libp2p-websockets-star
- [ ] Work with @mkg20001 to ensure it is tested throughout the stack
- [ ] Deploy a Rendezvous point

#### (added topic) Delegated Routing

This is a long time coming and with the modularity in js-libp2p, really doable.

- [ ] Make the findproovs call publicly accessible throught the gateways

#### (added topic) Migrating the Rendezvous Points to use libp2p nodes instead of special services

After all the above is completed (priority) we will want to replace the rendezvous services by just a libp2p muxed protocol so that any IPFS node can be a Rendezvous Point. This will require some spec work, but achievable in a short amount of time.

#### Drink coffee

We had two amazing cappuccino and an egg omelete that was delicious, A+ would do again.
