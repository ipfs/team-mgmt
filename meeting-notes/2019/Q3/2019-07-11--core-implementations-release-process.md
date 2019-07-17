# IPFS Release Process Meeting

## Context:
We have had challenging releases in Q2. As 

## Notes
Doc: https://docs.google.com/document/d/16xW0SM6hiH2-GAi1-OXENkqfSm5zGQIu_ysxQ_YcVFM/edit#

### What we mean by “better testing”
* Goal: truly validate at scale that a planned release/RC is going to perform well for our users from an end to end perspective
* End to end benchmarks running in CI
* What happens if you upgrade half the network - how does this new release behave
* What are the stress tests we need before we cut the release
* Even better if run on PRs, but at least needs to be a button click pre release


### Release process
* Think tests should always be green and CI should always be passing
* Want to attach good communication process - use as marketing opportunity
* Styles of release process
   * Train vs cycle
   * Currently on a release cycle - freeze, cut an RC, and continue
   * Rust - whenever they cut a release they fork the next release off
      * Multiple release cycles where things are baking before they’re released
   * When you want to cut a release, you don’t need to have to start the new fork for the next release
   * Historically we tried a release train but found sometimes they were too buggy to fix twice - once in the fork and once in master
   * Currently we keep master as the stable thing that will be released - people have gotten annoyed when master is blocked by bug fixes/PRs needed for a release
* Js-ipfs uses semver to identify specific versions of dependencies
   * Don’t freeze master of other js repositories - don’t bundle up as a distributable binary
   * Have patched an older version of a module without a new feature and release that in js
   * If we’re in RC and we need to patch the bug - we could restart the release process and go through the stages again
   * We want time to stabilize things, not randomly introduce new features, and ensure 
   * Currently 0.4.22 is a purely patch release that pulls in branches for the hotfixes
   * Currently we use minor releases to indicate breaking changes - can’t have a patch patch release
   * Just a few people keeping the story cohesive and do air traffic control
      * Option - could make all projects release at the same time?
      * Option - could treat libp2p as an external project
         * Could say if we make a change we start the entire release process over again
   * Release candidate stage 1, stage 2 - need to have multiple phases of tests? → lets do this softly with a soft freeze
   * Instead of IPFS to pull libp2p, want libp2p to push us in terms of patches and quality
   * Run go-ipfs CI in libp2p to ensure getting early visibility
* Communication as part of release process
   * Have a release issue where list out the list of things expected for the release
   * Sometime strike things, but are able to plan ahead
   * Want to have text for the release notes merged as part of PRs (and then can move forward)
   * Involve the community in the release process - want to bring more of that to go
* Want to put out a blog post with those set of changes
   * Communicate to contributors
   * Communicate to users that heard and making changes
   * Training release for 4.22? Communication, checklist, testing, etc?
      * Problem has not been the process itself, it’s been following the process
      * Let’s put the checklist in the issue and check the things (have more manual things we’re adding - so more exciting to check stuff - and proactive communication/validation builds trust)
   * Need to add the things that need to happen to the release process - and that takes onboarding, leveling up, and expertise
      * Going to take time to learn the stack traces and learn what things *should* look like
      * Need to make this more documented and less tribal knowledge and high expertise
      * Let’s have alan shadow Steven through the process to learn - and actually record the pieces of learning and put them out to the community and communicate them proactively


* Action Items (AIs):
   * Steven - Iterate on release process PR to the PR (https://github.com/ipfs/go-ipfs/pull/6482/files)
   * David - Make a PR to go-libp2p and talk through it (meeting with Raul ++)
      * https://github.com/libp2p/go-libp2p/issues/628
   * Molly - comment on the release PR with these notes
   * Steven - make a release issue w/ features + checklist for this patch release (0.4.22)
   * Steven - update contributing guidelines for how describing features as PRs go along with text for release notes
   * Alan and Steven - meet and record walkthroughs of the release process checklist
   * Alan - pick up some release cat herding around release notes for 0.4.22 release
   * Molly - start a stub for release blog post explaining the changes we're making to release process going forward

