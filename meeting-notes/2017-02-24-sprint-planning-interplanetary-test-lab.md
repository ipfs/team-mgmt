InterPlanetary Test Lab Planning Call
=====

[Video recording of the call](https://drive.google.com/open?id=0B7snS36pEV4HTFAtVGJIRVgzOWM)

Participants
- @victorbjelkholm (notetaker)
- @whyrusleeping
- @sidharder
- @kubuxu
- @lgierth

## Goal

- Jenkins works reliably for standard go-ipfs CI

- Infrastructure + code in place for large scale network tests
    - need to be able to run tests on many machines

- Kubernetes deployed and able to run tests based on commits
    - Jenkins able to build docker images for go-ipfs on every commit
    - Per commit builds pushed somewhere accessible (and garbage collected?)

Actionables:
    1. Jenkins working as day to day go-ipfs CI
    2. System to build docker images for each commit
    3. Make it easy to trigger run of kubernetes tests given a commit hash
    4. Use google cloud as initial deployment pool for kubernetes nodes
