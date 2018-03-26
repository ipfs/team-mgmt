# ⒿⓈ⚡️  js-ipfs Core Dev Team Weekly 2018-03-26

- **Lead:** David Dias (@diasdavid)
- **Notetaker:** Volker Mische (@vmx)
- **Attendees:**
  - @dryajov
  - @vmx
  - @zcstarr
  - @jacobheun
  - @fsdiogo
  - @hugomrdias
  - @Mr0grog
  - @victorbjelkholm
  - @achingbrain
  - @diasdavid
- **Recording:** _add link to recording once it's online_

## Agenda

- Ask everyone to put their name into the list of attendees
- Round of updates
  - What have you accomplished since the last Weekly?
  - Were there any blockers? If so, which ones? Is it still blocked? Why?
  - What is the next important thing you should focus on?
- Ask for general questions. Could be things like:
  - I'm stuck with something, I don't know who to ask. Who knows who to ask?
  - Who can help me with xyz?
- Plan this week
  - Select issues to work on
- Review remaining issues if there is time left

## Notes

### Round of updates
 
@diasdavid
 - Done:
   - Advance the libp2p config PR https://github.com/libp2p/js-libp2p/pull/166#issuecomment-374450746
   - Review PRs, M and Release
 - Blocked:
   - Administrative and end of the quarter
 - Next:
   - Create clear structure to identify module captains and enable others to level up to be come.
   - Finish the libp2p config PR
   - OKRs for Q2 (work on a PR first)

@vmx
 - Done:
   - FOSSGIS conference, OSGeo Codesprint: Lot's of exciting discussions around Noise and IPFS, stay tuned
 - Blocked: N/A
 - Next:
   - OKRs (past and future)
   - DAG API for cli and HTTP api
   - Get js-ipfs CI reliably passing
   		- We have a issue to track this? (@victor)

@fsdiogo
 - Done:
  - [PR](https://github.com/ipfs/js-ipfs/pull/1273) fixing linter error
  - Published a [module](https://github.com/moxystudio/js-class-is) to be used in fixing this [issue](https://github.com/ipfs/js-ipfs/issues/938) in multiple repos
 - Next:
  - Apply the module in the repos and submit PRs
 - Blocked: N/A

@achingbrain
 - Done:
   - Onboarding
   - Merged initial version of stream slicing
 - Blocked: N/A
 - Next:
   - Finish stream slice feature for unixfs
   - Merge readablestream/videostream example

@dryajov
 - Done:
 	 - detect running node: https://github.com/ipfs/js-ipfsd-ctl/pull/221
   - add ability to use go and js env exec: https://github.com/ipfs/js-ipfsd-ctl/pull/219
   - use default daemon addrs: https://github.com/ipfs/js-ipfsd-ctl/pull/220
 - Blocked:
 	- N/A
 - Next:
  - refactor libp2p-mplex using pull streams: https://github.com/libp2p/js-libp2p-mplex/issues/73
 
@Mr0grog
	- Done: N/A
  - Blocked: N/A
	- Next:
  	- Docs for IPFS constructor (didn't have time for this last week; @david implemented an interim bit of explanation)
 
@zcstarr
 - Done:
 	- add hash algo options to js-ipld put
	 	- https://github.com/ipld/js-ipld/issues/82
	-	fix/add ipv6 ipv4 validations to multiaddr format
		-	https://github.com/multiformats/js-multiaddr/pull/60 
 - Blocked:
 - Next:
 	- add hash algo options to js-ipld put
 	- take a look at another ipld issue 

@jacobheun
 - Done:
  - Improved "cat"
  - Updated multiplex dependency
 - Blocken: N/A
 - Next:
   - Something with vertical slices


### General Questions

 - How do I put items I'm currently working on into the done/blocked/next scheme?
   - The scheme is for the current point in time. So those things will be in "done" and "next" at the same time
 - How to verify that PRs work if they have other dependencies?
    - Add the information about the dependencies into the PR and the reviewers will test it locally

 
### Other notes

 - @diasdavid proposes having a daemon pool for the tests, so tests run faster
 - Please use the Waffle Board as intended. See the first meeting notes for more information on that
   - Introducing a new label for being blocked
   - "In progress" meansyou are actively working on an issue and are not blocked
  - OKRs: @diasdavid will open an PR which will be used to discuss them
