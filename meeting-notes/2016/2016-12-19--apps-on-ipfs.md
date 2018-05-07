## Apps on IPFS

#### Lead: @VictorBjelkholm
#### Notetaker: @em-ly

#### Participants

- @VictorBjelkholm
- @hsanjuan
- @lars
- @kubuxu

## Agenda
<!-- Ensure notetaker is present before you begin -->
- Call for additional agenda items (moderator)
- ipfs-cluster
- ipfs pages and ssl
<!-- Add items here -->

## Notes

 - ipfs-cluster - dealing with how multiple members communicate and forward requests
     - Pin requests can now go to any member and they are forwarded to the leader
     - Pin status is collected from all members
     - Still need to improve the tests and other things but moving forward the beta feature set

 - lars working on setting up a little webapp that would allow
   people to generate certificates for their websites deployed via the
   gateways
- https://github.com/ipfs/infrastructure/issues/212


<!-- After each call, it is the responsibility of the notetaker to save the last
version of the notes in a file in ipfs/pm/meeting-notes, by opening a branch and
submitting a PR. -->
