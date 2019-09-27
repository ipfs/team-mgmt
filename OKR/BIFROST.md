# 🌈 IPFS Bifrost

_The bridge to a content-addressed future._

We support and improve the http-to-ipfs gateway. We run IPFS in production.

## 2019 Q4 - Objectives and Key Results

_What is the main thing?_

- Provide actionable insights to IPFS developers
- Provide a great service to the community

**DRAFT** - the following are to be confirmed...

- WIP: [bifrost 2019 Q4 planning document](https://hackmd.io/wHaeFVpLRRm-BK0z04FbZw)
- TBD: [bifrost 2019 Q4 speedsheet](https://docs.google.com/spreadsheets/d/1VeyiLvBdX_PrP394kU_lwkQZxfNwqMVX1f7K4ursSPM/edit#gid=1439867466)

### IPFS infrastructure informs and improves core ipfs development

- **P0** -  Traffic is mirrored to staging gateway running latest go-ipfs.
- **P0** -  All devs have access to ipfs logs from production and staging infrastructure.
- **P1** -  Nightly and on-demand pprof profiles from all nodes are published to a shared repo.
- **P2** -  Bifrost team identify 3 performance issues with go-ipfs.

### IPFS infrastructure is stable and scales to meet demand

- **P0** -  2 preload/delegate nodes are provisioned, monitored and documented
  - companion is in brave now, so we need to ready for increased usage from js-ipfs
- **P1** -  Ansible tower manages our deployments
  - Running ansible from CI gets us so far, but will cause friction as preload/bootstrappers are brought into the bifrost-infra
- **P1** -  4 new DNS Bootstrap nodes are provisioned, monitored, and documented.
- **P2** -  8 Solarnet Bootstrap nodes are rebuilt and monitored or decommissioned.
- **P2** -  IPFS Cluster ansible code is merged to bifrost-infra and monitoring is consistent with the gateways.

### Our metrics are reliable

- **P1** -  We have separate metrics for our websites and gateway traffic
- **P1** -  PromQL for Gateway Service Level Indicators (SLIs) dashboard is version controlled and reviewed by 4 people
  - We have too many grafana dashbords, and some report the same stats differently. PromQL is complex; we need to audit and reduce the number of dashboard, to have clear signals from our systems. 
- **P1** -  We fix the netdata sync errors (causing erroneous metrics spikes)

### Our alerts are actionable

- **P1** -  Service Level Objectives thresholds (SLOs) are researched, agreed and alerted on.
- **P1** -  A alert run-book is published with initial triage steps
- **P2** -  A currently responsible human rota is defined

### Users know what to expect from the ipfs.io services

- **P0** -  Gateway usage policy is published
- **P2** -  Gateway get a timeout page which explains what happened and offers next steps.
- **P2** -  We write the section on gateways (local vs ipfs.io) for the ipfs docs.
### 2020 goals

Plenty of things that we would like to do are out of scope for this quarter, but we will be working towards them

- average response time for content not on the gateways is < 30s
- average response time for content on the gateways is < 300ms
- create a community hub for "people running IPFS in production" and share learnings
- open source our infra code _carefully_, and reboot ipfs/infra
- extract our websites from our gatway
- seperate domains for project websites and ipfs.io gateway
- public metrics dashboard


## 2019 Q3

- [bifrost 2019 Q3 OKRs](https://docs.google.com/spreadsheets/d/1AiNUL7vK5Jp8aa839UaMaI_AlBU5r6Bor-A40179I2A/edit#gid=1439867466)
