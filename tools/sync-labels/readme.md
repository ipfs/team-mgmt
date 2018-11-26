## Tool for syncing labels

Syncs:

- libp2p
- ipld
- ipfs
- multiformats
- ipfs-shipyard

# Usage

- Have a (GitHub auth token setup)[https://github.com/settings/tokens/new] with
  `repo` access
- `npm install` in this directory
- If you want to run on other organizations, change the array at line 16 in
  `generate-repository-list.js` before running the next step
- ` GITHUB_AUTH_TOKEN=changeme` note the space before the command to not put the
  command in your shell history and change `changeme` to the token from the first step
- `npm start` in the same terminal as the previous step
