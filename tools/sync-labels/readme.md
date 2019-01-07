# Tool for syncing labels accross repos

## Data files

- `labels.json` - Labels to be added.
- `orgs.json` - Orgs to fetch repos from
- `/out` - Automatically generated files
  - `repos.json` - Repos available in the orgs. You don't need to touch this file unless you need to skip a repo and you can do so by deleting the respective row.
  - `config.json` - Config used by the github-sync-labels-milestones tool

## Usage

```
npm install # Install respective dependencies
# Create a (GitHub auth token setup)[https://github.com/settings/tokens/new] with `repo` access
# Check/update the orgs list on orgs.json file

 GITHUB_AUTH_TOKEN=changeme # Note the space before the command. It is there to avoid leaking your token into shell history. Replace <changeme> for the Github Token

npm start # In the same terminal as the previous step
```

## Known Issues

If the labels already exist, it returns an error:

```
{"message":"Validation Failed","errors":[{"resource":"Label","code":"already_exists","field":"name"}],"documentation_url":"https://developer.github.com/v3/issues/labels/#create-a-label"}
```
Issue logged at https://github.com/Xiphe/github-sync-labels-milestones/issues/10

To overcome this, you can delete from the repos.json the repos that already have the labels.

Future work: Fix github-sync-labels-milestones to check if the labels already exist and replace if that's the case.
