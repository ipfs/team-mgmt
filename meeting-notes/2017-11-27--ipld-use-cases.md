# IPLD Use Cases Call

## Participants

- @diasdavid
- @b5
- @jonnycrunch

## Agenda

- Deep Dive into QRI work on Data Importers (csv to json), Selectors and Transformations using SQL and Abstract Formats for Data Validation (@b5)
	  - https://github.com/qri-io/dataset
- Update on IPID and json-ld
- List current Use Cases
- Identify next steps

## Notes

Since there were only 3 of us, we spent more time talking than taking notes from the session. It was a very active brainstorm session.

Links referenced during the call:
- QRI Data Importers, Selectors and Transformations package https://github.com/qri-io/dataset
- Linked-Data Key https://github.com/ipfs/specs/issues/58

We identified 4 next steps:

- [ ] Convert the CSV Importer from QRI (CSV -> JSON) to an IPLD CSV Importer (CSV -> Graph (dagcbor) using the DAG API (@b5)
- [ ] Run one of the already built SQL queries on top of the IPLD graph
- [ ] Create an experimental `ipfs.dag.query` for js-ipld (@diasdavid)
- [ ] Follow up on the usecase of IPLD for DID. List out the benefits that IPFS and IPLD can bring to DID and how using HTTP is a potential attack vector for systems using DID. (@jonnycrunch)

Recording of the call: <soon™>
