# GUI & In Web Browsers Weekly Sync 2018-12-19

- **Moderator:** @olizilla
- **Notetaker:** @fsdiogo
- **Attendees:**
    - @fsdiogo
    - @lidel
    - @terichadbourne
    - @hugomrdias

**Moderator checklist**

- Ensure that there is a notetaker
- Start recording
- Call for additional agenda items

**Agenda**

_General discussions, decisions, etc._

- Start with Team Updates and Demos
- Draft of Q1 OKRs for both WGs
    - https://github.com/ipfs/team-mgmt/pull/808
- OOOs for the last week of December/first week of january (cancel sync call?)
- Self hosted analytics for apps - https://github.com/ipfs/ipfs-gui/issues/72
- IFPS HTTPx - https://github.com/ipfs/in-web-browsers/issues/13

**Team Updates**

- @lidel
    - Done:
        - Provided feedback to Google Chrome team and renewed SXG Origin Trial Token
        - Updated SXG Origin Trial Token on HTTP Gateway: [ipfs/infra/issues/465](https://github.com/ipfs/infra/issues/465)
        - PR with window.ipfs.enable(opts) aka Bulk Permission Prompt is ready for review - [ipfs-companion/pull/619](https://github.com/ipfs-shipyard/ipfs-companion/pull/619)
        - Created WIP PR which adds New Share Screen (ipfs-share-files) - [ipfs-companion/pull/642](https://github.com/ipfs-shipyard/ipfs-companion/pull/642)
        - Q4 scoring and retrospective
        - OKRs draft for 2019
            - [Async Retrospective](https://docs.google.com/document/d/1gWL9hJ3qsP_K2joVuORGBziQeCFBh8gbtIFMyT-9mqc/) for Q4
            - Q1 Web Browsers WG - https://github.com/ipfs/team-mgmt/pull/804
            - OKR Draft: [2019 Q1 IPFS OKRs for Web Browsers WG](https://docs.google.com/spreadsheets/d/1BtOfd7s9oYO5iKsIorCpsm4QuQoIsoZzSz7GItE-9ys/#gid=755202447)
    - Blocked:
        - N/A
    - Next:
        - Release Companion with new Web UI
        - Look at Snap issues with ipfs-desktop
        - Holidays!

- @olizilla
    - Done:
        - PRs on Web UI & IPLD Explorer components to fix layout issues on large screens
        - Fix keyboard control issue on FF
        - Wrestle with Desktop unclean repo startup issues
        - Interviews
        - OKR planning
    - Blocked:
        - We got blocked on unclean shutdown issues
    - Next:
        - Analytics for web ui and desktop
        - Signed binaries for desktop

- @fsdiogo
    - Done:
        - Dedupe CORS config from the Web UI
            - https://github.com/ipfs-shipyard/ipfs-webui/pull/907
        - Updated ipfs-redux-bundle to use ipfs-http-client and published new version
            - https://github.com/ipfs-shipyard/ipfs-redux-bundle/pull/23
        - Updated Web UI to work with ipfs-http-client
            - https://github.com/ipfs-shipyard/ipfs-webui/pull/913
        - Updated Web UI translations minimum percentage
            - https://github.com/ipfs-shipyard/ipfs-webui/pull/914
        - Released v2.3.0 of Web UI and PRed all the repos to update it
            - https://github.com/ipfs-shipyard/ipfs-webui/releases/tag/v2.3.0
        - Share Files fixes to integrate in Companion
            -  https://github.com/ipfs-shipyard/ipfs-share-files/pull/70
            - https://github.com/ipfs-shipyard/ipfs-share-files/pull/71
    - Blocked:
        - N/A
    - Next:
        - Help on shipping Desktop
        - Holidays next week

- @terichadbourne
    - Done-ish:
        - About to merge a PR that redesigns the ProtoSchool site to include more than just tutorials: https://github.com/ProtoSchool/protoschool.github.io/pull/103
        - Paired with Oli for help on some positioning issues with that update ^

**Notes**

- @olizilla and @lidel has gone through the OKRs for 2019-Q1 for GUI and IWB.

**Action Items**

- Check 2019 Q1 OKRs:
    - GUI: https://github.com/ipfs/team-mgmt/pull/808
    - IWB: https://github.com/ipfs/team-mgmt/pull/804
