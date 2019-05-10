const fs = require('fs')
const path = require('path')

const config = {
  repositories: require('../out/repos.json'),
  milestones: [],
  labels: require('../labels.json'),
  options: {}
}

fs.writeFileSync(path.resolve('out/config.json'), JSON.stringify(config, null, 2))
