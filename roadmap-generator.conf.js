'use strict'

module.exports = {
  // Name of the organization or project this roadmap is generated for
  organization: 'IPFS Project Management',

  // Include open and closed milestones where due date is after milestonesStartDate
  milestonesStartDate: '2016-08-01T00:00:00Z', // ISO formatted timestamp

  // Include open and closed milestones where due date is before milestonesEndDate
  milestonesEndDate: '2016-11-01T00:00:00Z', // ISO formatted timestamp

  // Github repository to open open a Pull Request with the generated roadmap
  targetRepo: "ipfs/pm",

  // List of projects that this roadmap covers
  projects: [
    {
      name: "IPFS PM",
      repos: [
        "ipfs/ipfs",
        "ipfs/pm"
      ]
    },
    {
      name: "IPFS Community",
      repos: [
        "ipfs/community",
      ]
    },
    {
      name: "IPFS Website, Blog, Newsletter, etc.",
      repos: [
        "ipfs/blog",
        "ipfs/newsletter",
        "ipfs/website"
      ]
    }
  ]
}
