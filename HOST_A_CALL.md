# Host a Call

[**IPFS Call Moderating Video Tutorial**](https://drive.google.com/file/d/14glOxDfJTa1hyWso8vyhnoGjbZc1s2LL/view). This video tutorial describes how to add new moderators to a call, how to configure livestreaming and recording for an existing call, how to create a new call with livestreaming capabilities, and how to work with the IPFS YouTube account to configure videos and bless other managers. I recommend 1.5x speed!

## The Setup - Preparation for the Call

- Make sure that the call is posted to Github before hand. Take inspiration from [#647](https://github.com/ipfs/pm/issues/647) as an example of issue for the IPFS All Hands, you can also find this template on the [Templates Folder](https://github.com/ipfs/pm/tree/master/templates).
- Ideally, this should be done 4 days or more in advance, so people can add items before the meeting begins. At that time, also login to the appropriate zoom call and make sure you have permission to record and see the option to livestream (if not, email it@protocol.ai and/or ensure someone with record/livestream permission for your call can start the recording/livestream)
- A few minutes prior to the meeting's start time:
  - Post a notice on IRC (#ipfs & #ipfs-dev) and Twitter (@ipfsbot).
  - A second notice should be sent out at the meeting's start time as well. Something along the lines of "IPFS all-hands call is about to start (16UTC) \<link to github issue\>"
- Read the guide on Moderating the IPFS Call at https://github.com/ipfs/pm#moderators-and-notetakers

## The Act - During the call

- Be on Zoom promptly at the start time.
- Identify a notetaker. The bot that that does this is down as of June 2018, but you can call for volunteers and nudge people who haven’t taken notes recently.
- Moderate the call: keep time and stack, and facilitate discussion as needed.

## The Follow up - Right after the call finishes.

- Close the previous week’s sprint issue.
- Upload the recording to YouTube or find the livestream recording, change the title, and add it to the appropriate playlist.
- Ensure that the Notetaker handles the PR to add the notes to the [Meeting Notes folder](https://github.com/ipfs/pm/tree/master/meeting-notes)

## Specifics to each call

### IPFS All Hands

**Who is Responsible**
- The host stays the same for each month.
- On the last week of each month, identify a host for the following month.
- If the host can’t make it some week, they are responsible for delegating to someone and making sure they have permissions at least a day ahead.

**Host Responsibilities** - On Wednesday of the preceding week:
- Make sure that [node-github-issue-bot](https://github.com/ipfs/node-github-issue-bot) has created the next sprint issue. It should use templates from [here](https://github.com/ipfs/node-github-issue-bot/tree/master/templates). If it breaks, look at [the README in ipfs/infrastructure](https://github.com/ipfs/infrastructure/tree/master/sprintbot). If not, create it yourself.
- Manually fill out the Notes link with [the templates](https://github.com/ipfs/pm/tree/master/templates). To not do this manually, follow [this issue](https://github.com/ipfs/node-github-issue-bot/issues/8).

**Permissions** - The 1Password “IPFS Calls” vault contains credentials for:
- Zoom to host & record call
  - Zoom #1 is used for the IPFS All Hands Call
  - Zoom #2 is used for the JS Core Dev Weekly Sync
  - Zoom #3 is used for the Golang Core Dev Weekly Sync
- YouTube to upload recordings
- Twitter to announce meetings

If you are a new moderator or need to add other hosts, you can get access to the 1Password folder by emailing it@protocol.ai

**Moderating notes:**
- 1. Record.
  - Ask that someone records the call.
- 2. Welcome
  - Welcome Attendees & state the date. ("Hello, and welcome to the IPFS all hands call for ...")
- 3. Introductions
  - Is there anyone new to the project or the call?
  - This gives the Notetaker time to add Agenda & Demo Items.
- 4. Agenda & Demo items.
  - Announce the Item and presenter name.
    - If an individual is presenting many items, switch it up and give them a breather.
      - i.e. don't make one person talk for 3 straight bullet points ( unless they want to :] ).
  - Prompt for questions at the end of each item.
    - The Moderator or the Presenter may call on people with hands raised.
- 5. Announcements
  - For anything not covered in the Agenda or Demo items - Get your word out!
- 6. Questions
  - For anything not covered in the Agenda or Demo items - Ask away!
- 7. Conclude the call & thank the Attendees ("This concludes the IPFS all hands call for ..., thanks everyone, see you next week!")


### Core Dev Calls

Tracked on their respective issues:
- [JS Core Dev](https://github.com/ipfs/pm/issues/650)
- [Go Core Dev](https://github.com/ipfs/pm/issues/674)

If you are hosting and need access to the vault, send an email to it@protocol.ai.

## Other notes on calls

### Rescheduling calls

Occasionally, call times change; normally this is due to events where the main developers can't make the sync. When you change the times:

- Announce one day before
- Post in IRC the day before, and day of
- Post in the old Call issue
- Post in the new Call issue the new call times
- Update the date for the new Call issue to reflect new starting point
- Update the title of the old Call issue to reflect new ending point
- Move the calendar times on the Community calendar
- Notify all endeavor leads // core contributors by message

### Daylight Savings

Daylight Savings happens twice a year. It is very annoying.

When it happens, make sure to update the call times in the Call Issue carefully. Here are some time zones to keep in mind:

- Z / UTC: Doesn't change.
- EST (Winter), EDT (Summer): New York
- GMT (Winter), BST (Summer): London
- CET (Winter), CEST (Summer): Berlin
- PCT (Winter), PDT (Summer): San Francisco

I mention these because invariably I would type "GMT to EST" to check the time zone, when I meant EDT. Know when they happen, and outsource as much of the time zone information as you can to webapps and tools.

## FAQ

- **What do I do if the Livestream doesn't show up on the IPFS Youtube Channel?** It is important that the live stream privacy setting under "basic info" be set to "public", otherwise the livestream won't show up on the IPFS channel or on our link https://www.youtube.com/c/IPFS-dweb/live. If you see the livestream coming through the live dashboard but not on our channel, that's probably the issue. We still check the box to "Automatically make archive unlisted once the stream has ended" so that we can rename and update the recording after the call.
- **Do I need a special account to be the host?** No, all you need is to ask to have your personal email address added to the list of hosts so that you have recording and livestreaming capabilities. Do this by asking one of the current hosts or sending an email to it@protocol.ai
- **Who currently has delegated hosting ability per call (and can therefore can record/livestream if needed)?**
  - IPFS All Hands Call: david@protocol.ai, matt@protocol.ai, erik@carbonfive.com, victor@protocol.ai, molly@protocol.ai
  - JS Core Dev Weekly Sync: jake@andyet.net, alan.shaw@protocol.ai, david@protocol.ai, molly@protocol.ai
  - Golang Core Dev Weekly Sync: dd@protocol.ai, david@protocol.ai, erik@carbonfive.com, molly@protocol.ai

  Anyone with access to the 1pass can add new delegated hosts to calls by signing into the zoom web interface as Zoom #1, #2, or #3.
- **Why don't we use Zoom Webinars?** See our decision thread at https://github.com/ipfs/pm/issues/571. Instead, we have enabled and use the 3rd party livestreaming capability to stream to YouTube at https://www.youtube.com/c/IPFS-dweb/live. Hosts will find this option next to "record" in the "..." options at the bottom of a call. A Zoom account needs to explicitly enable the "livestreaming" capability (in meeting settings) and set up the handshake between a specific meeting and a YouTube channel to livestream to (at the bottom of the meeting details page through the link that says "configure").
- **How do I save call chats?** Chats are not saved by default. In order to keep a record of your chats after the call ends, go into _Meeting Settings/In Meeting (Basic)_ and then turn on _Auto saving chats_. https://support.zoom.us/hc/en-us/articles/115004792763-Saving-In-Meeting-Chat
