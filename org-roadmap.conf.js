'use strict'

module.exports = {
  // Name of the organization or project this roadmap is generated for
  organization: 'IPFS',

  // Include open and closed milestones where due date is after milestonesStartDate
  milestonesStartDate: '2016-08-01T00:00:00Z', // ISO formatted timestamp

  // Include open and closed milestones where due date is before milestonesEndDate
  milestonesEndDate: '2016-11-01T00:00:00Z', // ISO formatted timestamp

  // Github repository to open open a Pull Request with the generated roadmap
  targetRepo: "ipfs/pm",

  // List of projects that this roadmap covers
  projects: [
    {
      name: "IPFS - Consolidated",
      repos: [
        "ipfs/ipfs",
        "ipfs/pm",
        "ipfs/community",
        "ipfs/blog",
        "ipfs/newsletter",
        "ipfs/website",
        "ipfs/go-ipfs",
        "ipfs/js-ipfs",
        "ipfs/js-ipfs-api",
        "ipfs/interface-ipfs-core",
        "haadcode/orbit",
        "haadcode/orbit-db",
        "haadcode/orbit-db-store",
        "haadcode/orbit-db-kvstore",
        "haadcode/orbit-db-eventstore",
        "haadcode/orbit-db-feedstore",
        "haadcode/orbit-db-counterstore",
        "haadcode/orbit-crypto",
        "haadcode/ipfs-log",
        "haadcode/ipfs-post",
        "haadcode/crdts",
      ],
    }
  ]
}
