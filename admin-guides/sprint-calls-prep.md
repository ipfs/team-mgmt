# Prep for Weekly Calls

## Who is Responsible

- The host stays the same for each month.
- On the last week of each month, identify a host for the following month.
- If the host can’t make it some week, they are responsible for delegating to someone and making sure they have permissions at least a day ahead.

## Host Responsibilities

On Wednesday of the preceding week:
- Make sure that [node-github-issue-bot](https://github.com/ipfs/node-github-issue-bot) has created the next sprint issue. It should use templates from [here](https://github.com/ipfs/node-github-issue-bot/tree/master/templates). If it breaks, look at [the README in ipfs/infrastructure](https://github.com/ipfs/infrastructure/tree/master/sprintbot).
- Manually fill out the Notes link with [the templates](https://github.com/ipfs/pm/tree/master/templates). To not do this manually, follow [this issue](https://github.com/ipfs/node-github-issue-bot/issues/8).

#### Before the Call

1. Make sure agenda is posted beforehand in GitHub using the current format (see #647 for an example). Ideally, this should be a day or more early so people can add items before the meeting. (Also consider proposed changes in #636.)
1. Post a notice just prior to and at the meeting time on IRC (#ipfs & #ipfs-dev) and Twitter (@ipfsbot).

#### During the Call

1. Be on Zoom promptly at the start time.
1. Identify a notetaker. The bot that does this is down as of June 2018, but you can call for volunteers and nudge people who haven’t taken notes recently.
1. Moderate the call: keep time and stack, and facilitate discussion as needed.

#### After the Call

1. Close the previous week’s sprint issue.
1. Upload the recording to YouTube.
1. Make sure that the Notetaker PRed the notes to `ipfs/pm/meeting_notes`.

## Permissions

The 1Password “IPFS Calls” vault contains credentials for:
- Zoom to host & record call
- YouTube to upload recordings
- Twitter to announce meetings

If you are hosting and need access, ping @flyingzumwalt or @mishmosh.
