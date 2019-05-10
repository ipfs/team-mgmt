# IPFS Weekly Call March 18th, 2019

-   **Moderator:** @pkafei
-   **Notetaker:** @olizilla
-   **Video:** https://youtu.be/5LcLMIUeuds
-   **Attendees:**

    -   @alanshaw
    -   @jacobheun
    -   @Mr0grog
    -   @jaycarpenter
    -   @stebalien
    -   @jonnycrunch
    -   @terichadbourne
    -   @pkafei
    -   @olizilla
    -   Andrew Nesbitt
    -   @cwaring
    -   Hannah Howard
    -   @jimpick
    -   @mikeal
    -   @lidel
    -   Matt Ober

  
**Moderator checklist**

-   Ensure that there is a notetaker
-   Start recording
-   Call for additional agenda items

  
**Agenda**

Presenter: Mikeal Rogers

Topic: Github Ecosystem Metrics

Notes:

Gharchive: github puts out metadata every hour for all interactions with repos. Its a lot of data

We might want to see a dependency graph for go-ipfs, across all our repos.

Big Query makes it possible but a large data set might cost $15 a go.

“S3 select” lets you do sql queries over this data.

We have a lambda function called filterMonth, to pair down the data to just the month in question. Then filterDay, then pluck. filterMonth takes a cbor object that represents the filter logic. You get a bunch of files for every hour of every day for that month that matches your filter. A month of data can be ~700 lambda fn calls. In 10 seconds we get a month of data. Trying to do a year a time hits lamda and s3 write limits.

The cbor object as filter lets us query really large numbers of repos. We identify the repos for an ecosystem (make the focused cbor blob of data) , then we filter the data (in parallel on lamba) then we process the metrics.. Like find unique people, activity over time, growth per quarter. Etc.

With this system, we can create metrics for our ecosystem, and we can use it to examine other ecosystems… to determine package managers of note, dockerfiles per project… etc.

  
Q&A:

From a high level a bunch of decentralization projects like IPFS, DAT are showing similar growth curves. It looks like the movement is growing in general.

We’re figuring out the best ways of looking at the data. Warn against just reciting top level numbers as this is an estimate.

  

