## IPFS Weekly Call Sep 23rd, 2019



*   **Moderator:** @achingbrain
*   **Notetaker:** Inline in agenda
*   **Attendees:**
    *   Olizilla
    *   @JayCarpenter
    *   @vmx
    *   

**Moderator checklist**



*   Ensure that there is a notetaker
*   Start recording
*   Ask attendees to add their names to meeting notes
*   Call for additional agenda items

**Agenda**

_General discussions, decisions, etc., add your name: your shout-out here!_



*   **Add your announcement here**
*   DevCon Meetups in Osaka (OCT 7th)  and Tokyo (OCT 12th)
    *   Osaka: [https://ipfs-japan.eventbrite.com](https://ipfs-japan.eventbrite.com/)
    *   Tokyo: [https://neutrino.connpass.com/event/148341/](https://neutrino.connpass.com/event/148341/)
*   Talk: Pete van Hardenberg from Ink & Switch tells us about the things they are building to solve problems faced by creative professionals in the fields of art, science, thinking and self-improvement. [https://www.inkandswitch.com/](https://www.inkandswitch.com/)
    *   Industrial research lab
    *   Computers are failing creators
    *   We have moved to a consumptive mode of usage
    *   The MBP no longer has a esc key
    *   Ipad promised a creative environment - now used as a netflix device
    *   Organised around attention metaphor. Devs try to get you to spend more time
    *   Exploring from a tech and philosphical perspective
    *   Offline first is reasonable
    *   Local first is better

        Who owns your data


        Surveillence paranoia is reasobable but


        Do you have the data local?


        Do you get to decide what happens to it


        “What an incredible jouney”’s happen to my data… services close down


        local -first software

1. Is it fast?
    1. People radically undervalue perf in software
    2. Makes a huge difference in the experience
2. Does it support all your devices?
    3. Is your data trapped on your phone or a pc?
3. Does it work offline?
4. Does it support collaboration?
    4. Software is broken by default if i cant collaborate
5. Will it live a long time
    5. Can you trust this software with your most important project
6. Is it private?
7. Do you control your data?
    6. If someone else can delete it, it’s not yours
    7. Thing on your computer should be yours… no one should be able to revoke access to data on your machine

Browsers are not local first

A PWA you use doesnt’ really mean it’s always going to be there.

Browsers are no good at p2p networking

Doesnt work on planes

Daemons are not viable



*   They are adoption poision (hard to get people to install them)
*   They are user-experience hostile
*   Now you have 2 things, and one of them is mysterious
*   How do we get to “OS has it”

Electron is the stopgap, and a great platform for building cross-platform software

Pixelpusher - early project - experiment in taking the principles to life



*   Pixel art editor in react
*   Bolted a crdt distribution on to it based on automerge
*   Includes a history, that can be forked and merged of pixel art boards
*   Becuase we have a causally ordered CRDT unerneath we can merge

Pushpin is cards on a canvas	



*   What does collaboration look like in a user friendly way
*   How do you track identity and presence

Capstone ( a google app, ink based canvas, access to networking stack)



*   Ultimately less successful
*   Google is not actively investing in google apps
*   Using node things in the google app world was fraugt with bugs

Farm



*   CRDT doc paried with code for a webcomponent written in ELM that was also a CRDT
*   You could share links to the code + data and the recipient would get exactly what you’d see

Been at it for 3 years.. These things work



*   Standalone software
    *   It’s amazing to work on “just” the software
    *   As a web dev, your working on multiple layers and then you deploy it
    *   With software, “works on your machine” is all there is!
*   CRDTs
    *   collab on data just works really well
    *   Automerge json like CRDT implementation
*   Conflict resolution
    *   Dealing with people creating problems
    *   Humans seem to have strong innate collaboration intuition and often avoid these problems organically
*   Functional-reactive programming
    *   Pure ui that are a function of data

These suck



*   NAT traversal
*   Mobile support is hard
    *   You have to fundamentally understand radios and battery
*   A business model for devs
    *   Positive externalities of ICOs is not sustaibable
    *   If you attract those folks, you will not get the best work
    *   Every generation of SW needs to find a viable business model
    *   The best designers were alienated by the open-source norms
*   Running things at 60+fps is hard
*   Privacy

NAT traversal



*   You are at a coffee shop with you collaborator
*   Mdns and loopback nat traversal are all blocked
*   There is no way for us to connect
*   Its also business, airbnbs
*   You can run a STUN/TURN service.. But it runs at the benevolence of an org

We build on DAT.



*   Address of the content is a public key of the content

IPFS



*   Pinning is the wrong frame to think about data on
*   Apart from video, we should pin everything by default

UX challenges



*   Variable and relative connectivity with a collaborator
*   Syncronisation instead of centralization
*   Attention not permission.
