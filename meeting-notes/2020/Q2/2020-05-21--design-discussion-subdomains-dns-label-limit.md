# Design Discussion: Subdomain support for CIDs longer than 63 characters

## Context

Full explanation: https://github.com/ipfs/go-ipfs/issues/7318

**tl;dr**  

[RFC 1034](https://tools.ietf.org/html/rfc1034#page-7) states that "each node has a label, 
which is zero to 63 octets in length", this means CID in subdomain can't be longer than 63 characters.

If we split at 63rd character that will produce TLS error because it is impossible 
to have TLS cert for more than one wildcard level (`*.*.ipns.dweb.link`), as clarified in [RFC6125](https://tools.ietf.org/html/rfc6125#page-27)
and implemented by browser vendors.

DNS length limits were known, but we did not include inlined ed25519 in evaluation at a time, and this recent development changes the timeline, so we need to have a fixes for longer CIDs and TLS for IPNS websites.

The Goal of this meeting is to find the least invasive path forward.


## Participants

- @Stebalien
- @lidel
- @ribasushi
- @aschmahmann



## Options vs Tradeoffs

### Generic fix

Split after 63rd char: "Do it anyway" ?
add support, if not for ed25519, it will be useful for longer CIDs (they won't have TLS anyway) 


### IPNS/ed25519-specific fixes

Anything we can do to give IPNS websites created with ed25519 TLS without warnings?

| Fix    | TLS for IPNS | TLS for long CID  | touches libp2p | different text representation in subdomain than base32 |
| --- | --- | --- | --- | --- |
| custom multicodec for ed25519 keys | YES | NO | YES | NO |
| Allow PeerIDs as multihash in base32 (only in `*.ipns` subdomains) | YES | NO | NO | YES |
| PeerIDs as CIDv1 in base36 | YES | NO | YES | YES |
| "sha256 split in two" idea [missing notes, sorry!] | YES | ? | NO | YES |

## Notes

- changing the way we represent keys in libp2p is expensive and may introduce problems in the future
  - right now all key types represented as CIDs get `libp2p-key` codec
    - this makes it easy to add support for different key types in the future without the need for updating CID/multicodec-related libraries
  - if we introduce a custom multicodec for ed25519 this creates bad precedent of moving key type to multicodec layer: leaking abstractions and making it harder to support across implementations 
- leaking browser limitations down the stack is something we want to avoid, looking for a surgical fix that is compatible with CIDv1 specs

- base36 makes ed25519 fit in a single DNS label
  - missing from multibase - keeps need to register 
  - could be used only for IPNS
- AI: test 63 character domain on Cloudflare
    - OK: confirmed 63 works: https://abc012345678901234567890123456789012345678901234567890123456789.lidel.org/ 
      ("github pages" proxied via Cloudflare that gives automatic TLS cert)
- **Plan for enabling TLS for IPNS with ed25519 on subdomain gateways**
    - implement support for base36 in go and js (multibase support)
    - ship with go-ipfs 0.6 ad js-ipfs, giving us one release overlap
    -  in parallel implement splitting after 63rd char (for longer CIDs that are not ed25519 keys)    
    - switch to ed25519 keys in go-ipfs 0.7 by default
    - mvp: make subdomain gateway redirect upgrade ed25519 to base36


### Open questions

Things TBD, with provisional decisions for MVP:

- should we use base36:
  - only for ed25519? (yes for mvp)
  - only on subdomain gateways? (yes for mvp)
    - always, or only when libp2p-key can't fit in a single DNS label? (only ed25519 for mvp)
  - or maybe we should change the default text representation of ipns keys everywhere in IPFS?
  - .. should this get bubbled up to libp2p? 
    - if so, should we update https://github.com/libp2p/specs/blob/master/RFC/0001-text-peerid-cid.md ?
    - or should we phase out base32 completely, and not use it in any API/CLI UX going forward
    
### Side-discussions    
    
-  ot: dnslink – how to add security?
    -  (a) DNSSec - no-cigar: relies on root keys, hard to set up
    -  (b) sign dnslink record and add TXT record with CID of signature
        -  at some point in the future start redirecting to `.ipns-insecure.` if not signed
        
-  ot: solve "what is IPNS" problem
   - mostly renaming things in docs, to remove confusion in ecosystem
   - propose a split on next core impl. meeting:  
     - "IPNS" as a generic mutable namespace
     - pick a new name for libp2p-key based subset of "IPNS" ("signed records", "IPRS", etc)
     
-----

### Update from 2020-07-14

We decided to simplify our approach and merged [ED25519 support in subdomains](https://github.com/ipfs/go-ipfs/pull/7441)
  - works with TLS certs
  - defaults to base36 (instead of base32) in subdomains for all libp2p-keys
  - b36 fix will be attempted for all long CIDs if original base is too long
  - returns error if CID is still too long to be loaded via subdomain (this might be the case if you use custom hash functions eg. `sha-512`)
