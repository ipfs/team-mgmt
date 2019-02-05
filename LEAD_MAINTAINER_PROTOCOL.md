## Repo Lead Maintainer Protocol

> This section is a formalization of the proposal and discussion around the [Module Lead Maintainers - Sharing the Responsibility over the IPFS module base](https://github.com/ipfs/pm/issues/600) proposal, originally desined for the JS Ecosystem within the IPFS Project.

## Motivation

We develop the IPFS Project as an Asynchronous and Distributed Organization. In order to operate at a global scale, written documentation, curation and improving its discoverability needs be at the core of our competencies. Having clear and lean docs that are well maintained can avoid a misdirection or misinformation, saving hours in productivity and making our contributors happier.

To plant the idea of how important this written communiaction is, here is an thought example: Imagine that you spend 30 minutes refactoring a README of a repo, fixing broken links, making sure that the information is accurate and so on and in the end, what you achieve is that the next person will be able to save 1 minute of their time searching for the info they need. You might think "whoa, I just spend 30 minutes for an individual to save 1? Maybe this was not worth it at all". This thinking is incorrect, because within a project of 3500+ contributors, you are saving time for thousands. Some of those people might not have ever found the information if not for your work (or may have left the repo confused), which magnifies your contribution even more.

In addition to this, having a clear Repo Lead Maintainer Protocol for Software Projects yields other values results, such as reduced release time, code reviews and faster response to issues.

## Description

A Repo Lead Maintainer is a contributor that has shown extraordinary ability to contribute to the project and willingness to make the project better by taking the responsibility of stewarding one of the repos forward. This repo can be code, documentation, specifications, research discussion, etc.

With this structure, we expect to achieve the following goals:

- Recognize extraordinary contributions and empower contributors to take an even more important role in the project.
- Keep issues and information organized.
- Reduce PR review time and Time To Release.
- Increase the overall quality of the project.
- Help users know who to reach out to for help.
- Have a clear protocol to pass on the baton.

The current Lead Maintainers should be identified in a `Repo Lead Maintainer` section in the README.md of the repo and a maintainer.json file at the root of the repo with the following format:

```JavaScript
{
  "repoLeadMaintainer": {
    "name": "<Repo Lead Maintainer Name>",
    "email": "<Repo Lead Maintainer Email Address>",
    "username": "<Github Username>"
  },
  "workingGroup": {
    "name": "<Name of the Working Group that owns this Repo>",
    "entryPoint": "<Url to the coordination entry point for the Working Group>"
  }
}
```

**Repo Lead Maintainer responsibilities:**

- Respect and follow the [IPFS Code of Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md).
- Have a complete understanding of the module purpose, its specification (if any) and how the module is used by other parts of the project.
- Review and merge PRs.
- Respond in a timely manner to Github issues and curate them to ensure that duplicates are coalesced, issues are labeled with difficulty and priority, and also tag any issue that is open for new contributors with the `help wanted` label.
- Release new versions of the module/package (if a code Repo).

**Repo Lead Maintainer expected attitude:**

- Be proactive in increasing the quality of the module. This goes from improving documentation, tests, codebase and more.
- Show a great level of rigor and polish in the code that they ship.
- Help others in understanding how the module works (or repo) and why it exists.
- Apply the established Contributing Guidelines to the project and help others do too

**How to become a Repo Lead Maintainer:**

Currently, there is no formal test or request form to do so. Repo Lead Maintainers will be invited and nominated by one of the IPFS Tech Leads and/or Working Group Captains once the expected behaviour and rigor is observed. A Repo Lead Maintainer can nominate the next Repo Lead Maintainer to the IPFS Tech Lead and/or Working Group Captain.

**In practice:**

- Create a maintainer.json and update the README.md to have a `Repo Lead Maintainer` section.
- Protect the master branch and only grant permissions for merge to the Lead Maintainer and respective Working Group members.
- If a software project, grant publish permission to the Lead Maintainer and Tech Lead (or another Tech Lead if it’s the same person), only.
- Ensure that the repo also has the Working Group respective badge on the README for easy one click jump to entrypoint.

## Repo Lead Maintainers for IPFS Repos

```
TODO - Create table using package-table
```
