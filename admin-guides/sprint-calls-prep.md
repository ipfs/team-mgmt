# Prep for Sprint Calls

## Who does this Prep

Ideally, the lead of each call, or a specific person.

## Steps to Take

**Advanced preparation**

On Wednesday of the preceding week:
- Make sure that [node-github-issue-bot](https://github.com/ipfs/node-github-issue-bot) has created the next sprint issue. It should use templates from here [](https://github.com/ipfs/node-github-issue-bot/tree/master/templates). If it breaks, look at [the README in ipfs/infrastructure](https://github.com/ipfs/infrastructure/tree/master/sprintbot).
- Manually fill out the Notes link with [the templates](https://github.com/ipfs/pm/tree/master/templates). To not do this manually, follow [this issue](https://github.com/ipfs/node-github-issue-bot/issues/8).

By Friday of the preceding week:
- Adjust the calendar times to match the Sprint issue. To not manually do this, follow [this issue](https://github.com/ipfs/node-github-issue-bot/issues/4).

**Before the Call**
1. Launch a Zoom call and share the URL with [@dignifiedquire](https://github.com/dignifiedquire) or [@kubuxu](https://github.com/Kubuxu).
1. Announce the call in IRC using `sprinthelper: announce`. To do this, manually copy over the name of the call, the number of the issue, the notes URL, the zoom call URL, and the Stream URL (which should be gotten from dig or Kuba). To automate this, close [this issue](https://github.com/ipfs/sprint-helper/issues/17).

**After the Call**

1. Close the previous week's sprint issue.
1. Make sure that the Notetaker PRed the notes to `ipfs/pm/meeting_notes`.
