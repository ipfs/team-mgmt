# IPFS All Hands Call Mar 16 2020

-   **Moderator:** @alanshaw
-   **Notetaker:** @jessicaschilling
-   **Attendees:**
    -   __@jessicaschilling__
    -   __@jaycarpenter__
    -   __@willscott__
    -   __Matt Ober__
    -   __@chafey__
    -   __@obensource__
    -   __@lidel__
    -   __@blockchainbrett__
-   **Video:** https://youtu.be/XCsNQFxIqvQ

**Agenda**

-   Terminal.co on how to build and deploy ipfs-hosted apps using Terminal!
-   Brett Shear (COO/co-founder), Harrison Hines presenting, Janison Sivarajah
-   Terminal is a modern web dev tool to deploy sites and apps onto IPFS
-   Version 1 release is about hosting the app and pointing domains
-   Deploying the app happens in a few quick steps:

    -   Connect your GitHub account
    -   You can configure whatever repos you want
    -   Third step: set your build settings. It reads your package.json already for settings you have there

        -   Also option for advanced deployment settings, including Docker images (that’s unusual even in the non-IPFS world!)

    -   More documentation on all of this in Terminal’s docs
    -   Click “deploy”, you’re done. There’s a monitoring screen so you can watch it all happen
    -   Sample site takes about 2-3 mins to deploy. Looking at the logs and it’s standard stuff: yarn/npm commands, etc

-   Very performant! Why? They do a few things:

    -   They run their own nodes
    -   They’re using Pinata, Temporal for additional redundancy
    -   They upload the files to the same gateway they point the requests to, so a very low propagation time
    -   As soon as done deploying, make a request to that domain to cache the files to a CDN: currently using something standard but they’ll have their own IPFS-based CDN soon in a major release

-   SSL cert automatically issued through Let’s Encrypt
-   Now it’s time to set up your domain

    -   Purchase one via Terminal.co UI
    -   Or add one you already have
    -   Then change your CNAME or ANAME records (based on if it’s a domain or a subdomain)
    -   “Add a custom domain to your site” workflow is very similar to Netlify, UI-wise
    -   If you buy the domain through Terminal it sets up the DNS for you automatically

-   Next steps will be the IPFS-based CDN and “other really cool stuff”
-   QUESTION TIME!

    -   Are ENS domains coming soon?

        -   Yep, they hope to make it a seamless experience

    -   Who’s your domain registrar?

        -   GoDaddy, but also looking at some more decentralized domain services out there (in addition to .ens etc)

    -   Can I import a site from somewhere on IPFS, like “I have this hash, can you host this for me?”

        -   They’ll be creating a CLI soon - right now it’s just the GitHub interface - and that’ll have more granular commands for uploading and deploying via a hash
        -   Also Gitlab support soon

    -   Is DNSLink set up for default domains automatically?

        -   Yes. And updated every time a build happens.

    -   How’s the SSL setup?

        -   They’re using Cloudflare as the default domain, wildcards point there
        -   For custom domains, there’s an HA proxy that every time you add a custom domain, they verify the domain, add a certificate, and use CertBot to automatically generate Let’s Encrypt SSL certificates

    -   When is estimated launch?

        -   The product is live now, so anyone who requests early access … onboarding a dozen or so a day
        -   Public opening probably in the next few weeks, or in conjunction with the next version (which includes the IPFS CDN etc); still deciding
        -   But if you’re on this call, sign up for early access … in a few days or a week max

    -   Re GitHub integration: would it be possible to to grant access to an entire account, not just a specific repo? Is this an API limitation?

        -   You can grant an entire account, or specific repos within an account. Its up to the user.

    -   Why did you choose IPFS?

        -   Been in the web3 space for a while, working a lot on ethereum and dapps and it just started a rabbit hole down “what’s a dapp? Does a dapp require smart contracts?” and thinking about how web3 might actually happen for real people. What pieces of the web stack are going to need to be distributed or decentralized in order to make that happen? IPFS was a good backbone for a web3 - no token, so it’s easy to natively integrate into the web - and most things people need to do with websites can be built with IPFS as a backbone. Plus impressed with the IPFS team and community. Didn’t think there was enough being built with IPFS and wanted to help make that happen!

    -   How do I learn more?

        -   [Slack channel](https://join.slack.com/t/terminal-public/shared_invite/enQtOTM1MjQ3NTExMDU3LTNkYjU1ZGJhZGUyYjgwN2I3OThjY2U5OThlMGY2MGY0OGYxMDI1OWIwMTMwYzViZGY4ZGU0NDA0YmY4ZjVhOTg)
        -   Direct email
        -   You can do all that from the “community” link on terminal.co
