/* Generates a list of repositories and puts it in .config.json
 *
 *  GITHUB_AUTH_TOKEN environment variable needs to be set to run this command
 *
 */

if (!process.env.GITHUB_AUTH_TOKEN) {
  console.log('Error: GITHUB_AUTH_TOKEN environment variable needs to be set to run this command')
  process.exit(1)
}
const GH_TOKEN = process.env.GITHUB_AUTH_TOKEN

const fetch = require('node-fetch')
const fs = require('fs')
const perPage = 100
const organizations = [
  'ipfs',
  'libp2p',
  'ipld',
  'multiformats',
  'ipfs-shipyard'
]

const fetchResults = (org, total = [], page = 1) => new Promise((resolve, reject) => {
  console.log(`total fetched so far for ${org}`, total.length)
  console.log('on page', page)
  fetch(`https://api.github.com/orgs/${org}/repos?per_page=${perPage}&page=${page}`, {
    headers: {
      'Authorization': `Token ${GH_TOKEN}`
    }
  })
    .then(res => res.json())
    .then((res) => {
      total = total.concat(res.filter(r => !r.archived))
      console.log('fetched', res.length)
      if (res.length !== perPage) {
        resolve(total)
      } else {
        fetchResults(org, total, page + 1).then(resolve)
      }
    }).catch(reject)
})

let current = 0
let allRepos = []

const done = () => {
  console.log('Total number of repositories', allRepos.length)
  const config = require('./config.json')
  config[0].repositories = allRepos.map(r => r.full_name)
  fs.writeFileSync(
    './config.json',
    JSON.stringify(config, null, 2)
  )
}

organizations.forEach((org) => {
  fetchResults(org).then((res) => {
    console.log(`total received from ${org}`, res.length)
    allRepos = allRepos.concat(res)
    current = current + 1
    if (current === organizations.length) {
      done()
    }
  })
})
