# IPFS All Hands Call February 11th

-   **Moderator:** @pkafei
-   **Notetaker:** @terichadbourne
-   **Attendees:**

    -   _attendee names…_
    -   _@meiqimichelle_
    -   _@alanshaw_
    -   _@Mr0grog_
    -   _@terichadbourne_
    -   _@vmx_
    -   _@jaycarpenter_
    -   _@jimpick_
    -   _@abhikchowdhury6_
    -   _@olizilla_
    -   _@jonnycrunch_

  


**Moderator checklist**

-   Ensure that there is a notetaker
-   Start recording
-   Call for additional agenda items

  


**Agenda**

**Topic:** Design and IPFS

**Presenter:** Michelle Hertzfeld

_General discussions, decisions, etc._

-   Notes from Michelle’s preso on design & IPFS:

    -   Michelle’s helping our design team get off the ground
    -   Design has many meanings

        -   we often think of visual, graphic, or web design
        -   In software, also includes UX, service, info architecture, info design, etc.

    -   Design process

        -   Lots of loops, iterative process to figure out what you should be doing and how you express it to others
        -   Learn
        -   Test
        -   Deliver
        -   Make
        -   And the type of design you’re doing at each stage in that process is different based on the need.

    -   Design & IPFS

        -   Build an open-source design research practice

            -   Focus on human behavior before/as we dive into code
            -   Create more value when you’ve done good research, and avoid unnecessary development that isn’t the most valuable to your goals
            -   Allow outside contributors to engage with our design work

        -   Identify where we can learn and test along complete user journeys

            -   How do you test at protocol layer when normal human-used apps are a ways off?

        -   Integrate user research techniques into code and docs

            -   Much of work doesn’t lead to a GUI, but user research is still needed to provide great API, CLI, docs, educational tools, etc.

    -   Example user discovery workshop

        -   Planning workshops with likely first adopters, such as scientific research community, incl ESIP
        -   Technology is very new, so you have to teach a bit first
        -   Discuss benefits and pain points
        -   Splitting into small groups + post-its + discussion
        -   Brainstorming potential applications of future technology
        -   Synthesizing user ideas - applied ethnography - find common themes - sort into positives and negatives
        -   Create a report (working on it)
        -   Gather insights from where people are confused
        -   Create a user journey map and compare to spots where people are unhappy

    -   Integrating human-centered design into your own work

        -   Shared links to[Pinboard](https://pinboard.in/u:mhz/t:basics/), Just Enough Research (Erika Hall), LeanUX (Jeff Gothelf

-   Discussion on Michelle’s preso:

    -   Q (@pkafei): What’s the best way to engage designers in open source? Are they less likely than developers to contribute?

        -   A (_@meiqimichelle_): Experienced designers look for reasons behind design approach. Need to provide them with the user research before they can help.

    -   Q (@jimpick): We build a lot of tools for devs - code, libraries, integrations, etc., and we usually don’t have a designer in the loop.

        -   A (@meiqimichelle): Getting more people to help out, and no reason not to use design process for things like APIs. Prioritize systems that make it easy to test your work. Get early adopters in first. In a typical pre-development space, you can spend 6-8 weeks discovering what people want, getting stakeholders involved, presenting to internal folks, etc.

    -   Q (@jonnycrunch): A lot of IPFS is command-line based. Naming is hard. Is there a good design process for getting people to agree on namespace?

        -   A (@meiqmichelle) Can do usability testing on words and what people understand them to mean. Write a sentence, show it, ask what they think it means or what will happen next. In a room, do it with stickies, remotely with a digital whiteboard and rearrange to find commonalities. A few methods that can be adapted to this need:

            -   KJ method:<https://methods.18f.gov/discover/kj-method/> 
            -   Affinity diagramming:<https://methods.18f.gov/decide/affinity-diagramming/> 
            -   Card sorting:<https://methods.18f.gov/validate/card-sorting/> 

    -   Q (@olizilla): How can people get involved with this conversation?

        -   A (@meiqmichelle): We should take the action of figuring this out.
        -   A (olizilla): Oli making an issue on IPFS GUI (<https://github.com/ipfs/ipfs-gui/issues/75>) which is closest to public venue - go there to comment and we’ll tell you when we have a better forum for public conversation https://github.com/ipfs/ipfs-gui/issues/75

    -   Q(@abhikchowdhury6): what kind of early users, beyond researchers have you identified?

        -   A (@meiqmichelle): The clear first layer are have devs who want to build apps. Who’s the next layer after that as we get closer to non-technical-specialist adoption? Folks who still have tolerance for command line but would prefer GUI. Data stewardship groups that have dev teams, for example (think big research institution libraries). Next layer up might be a local librarian.

    -   Q (chris waring): Do you think we’ll develop our own human interface guidelines to help bootstrap external app developers? I suspect this will make more sense once we have an IPFS app store

        -   A: Yes, there’s something there. I’m not sure what yet, but there’s an opportunity to provide more guidance on how to think about human experiences as well, like trust and sharing, so people feel comfortable using distributed web. And how to share any guidance in an approachable way so people can use it as they build apps.
