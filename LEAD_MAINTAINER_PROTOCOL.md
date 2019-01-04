## Tech Leads and Lead Maintainers

> This section is a formalization of the proposal and discussion around the [Module Lead Maintainers - Sharing the Responsibility over the IPFS module base](https://github.com/ipfs/pm/issues/600) proposal.

**Currently, this Protocol is only being executed by the JS ecosystem of the IPFS Project.**

We have two types of leads in the JavaScript project ecosystems, the Tech Lead and the Module Lead Maintainer. A brief description of both roles is:

- A Tech Lead directs the development of an entire ecosystem of modules (i.e js-ipfs, js-libp2p, js-ipld and js-multiformats), it has a complete understanding of the stack, the IPFS project, its goals and participates actively in the ROADMAP planning.
- A Lead Maintainer is a contributor that has shown extraordinary ability to contribute to the project and willingness to make the project better by taking the responsibility of stewarding one of its modules forward.

With this structure, we expect to achieve the following goals:

- Recognize extraordinary contributions and empower contributors to take an even more important role in the project.
- Reduce PR review time and Time To Release.
- Increase the overall quality of the project.
- Help users know who to reach out to for help.
- Have a clear protocol to pass on the baton.

The current Tech Leads are:

- [David Dias](https://github.com/daviddias/) for js-ipfs, js-libp2p js-multiformats ecosystems.
- [Volker Mische](https://github.com/vmx) for the js-ipld ecosystem.

The current Lead Maintainers can be identified either by the `leadMaintainer` field in the package.json of the module and/or the section `Lead Maintainer` in the README.md of the module.

**Lead Maintainer responsibilities:**

- Respect and follow the [IPFS Code of Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md).
- Have a complete understanding of the module purpose, its specification (if any) and how the module is used by other parts of the project.
- Review and merge PRs.
- Respond in a timely manner to Github issues and curate them to ensure that duplicates are coalesced, issues are labeled with difficulty and priority, and also tag any issue that is open for new contributors with the `help wanted` label.
- Publish new versions of the module to npm.

**Lead Maintainer expected attitude:**

- Be proactive in increasing the quality of the module. This goes from improving documentation, tests, codebase and more.
- Show a great level of rigor and polish in the code that they ship.
- Help others in understanding how the module works and why it exists.
- Apply the established Contributing Guidelines to the project and help others do too

**How to become a Lead Maintainer:**

Currently, there is no formal test or request form to do so. Lead Maintainers will be invited and nominated by the Tech Lead once the expected behaviour and rigor is observed. A Lead Maintainer can nominate the next Lead Maintainer to the Tech Lead 

**In practice:**

- Update each package.json and README.md to have a `leadMaintainer` field.
- Update packages table on each entry module (e.g https://github.com/ipfs/js-ipfs#packages) to also list the maintainer for each.
- Protect the master branch and only grant permissions for merge to the Maintainer and the Tech Lead, only.
- Grant publish permission to the Maintainer and Tech Lead (or another Tech Lead if it’s the same person), only.
