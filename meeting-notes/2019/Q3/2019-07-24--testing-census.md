* Benchmarks of js-ipfs up again!
    * Benchmarks.ipfs.team on grafana
    * Green apples exist, red dont, na don’t apply
    * Adding a test is a js file
    * Tests run on this repo, if successful will start running against nightly
    * Controller runs the benchmarks and sticks them on ipfs and such
    * Http trigger endpoint - cronjob triggers this nightly but could also be used by CI or other to run benchmarks for a particular commit
        * Takes an API key
    * All benchmark data relatively level - no observed performance hit
    * Either doing ok, or don’t have right tests
    * Ex - Mplex slightly better than spdy
    * Adding a file go vs js - can toggle size
    * Can also tell swagger endpoint to run clinic
* Js-ipfs benchmark Q&A
    * Running this within network testing pipeline could trigger this api, and spawn this job and input into unified metrics database (in addition to here)
    * Cells with stats in grafana?
    * Could add a button here to trigger these tests - make it more interactive
    * Want more control in our own UI to display relative info in a comparative fashion (maybe that allows you to drill down in grafana)
    * Grafana good for time series, not for compare against baseline we choose
    * Add depends on the back end database we have available - what we can model on the front end
    * Are we going to use this database (dashboard for js-ipfs) or try to build additional ones?
    * Meta objective: every group should have an MVP with ZERO dependencies on other groups - the stage 2 or 3 can dovetail and merge with a shared vision - however the first step that will block development should be separable from everyone else’s work
    * Doesn’t give nice overall view - but can be tweaked
        * Nice thing this doesn’t have is go-nightly or something like that to use in tests
* Test infra - want specific test cases being run to extract metrics of interest
    * Want to see greens, yellow, and reds to make it clear where we should put attention to
    * Want it to be that any community engineer can see health on various go and js commits against other implementations
    * Jim been experimenting with scientific notebooks - which are also useful to publish and link from a dashboard
* Alan will put a baseline of work into js benchmarks to make it useful for go, and then go from there
    * Run go benchmarks
    * And then extract more info like time runs
    * Could run this inside testlab potentially
* Looking at work for this next quarter
    * Low hanging fruit in terms of test cases - ex bitswap performance between 3 peers
    * Note - there is some randomness / lossy-ness in our test runs (aka need to run multiple times and randomize)
    * By EOWeek contribute to this doc and make this a north star
* What does everybody actually need?
    * Molly - project operations and package mangers need benchmarks they can use for their specific testing / feedback loops (and need to be able to start running this prior to test infra work completing
        * Gateway team wants to be responsible for spinning up nightly mirrors and similar 
        * Testing pipeline that will hopefully be an orchestrator and aggregator
        * Using, adapting, and adopting benchmarks using js test suite to cover all the things we want
        * Alan get go tests running, steven add go tests
        * Kubernetes repo also has a whole series of go tests written in yaml-based dsl
        * Package manager tests will likely be shell scripts to import real world data
            * Current benchmark format looks good for v1 is good, also ability to run locally so can do it on branch
