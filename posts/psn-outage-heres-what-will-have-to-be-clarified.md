---
title: "PSN Outage - Here's what will have to be clarified"
date: "2011-04-27"
---

So PSN had an outage, and it is possible that all credit card details have been compromised. Sony have stated that credit card details, without CVV numbers may have been breached.

I've worked on a PCI compliant secure credit card store in the past, so I've some experience, and there's a number of unanswered questions.

In a PCI compliant secure credit card store, you do not store credit card numbers in the clear - you must encrypt them. Encryption is easy (or rather, by standing on the shoulders of giants, it is) - Pretty much any platform offers you robust encryption libraries. The hard part is securing the key(s) used to encrypt/decrypt the data.

In the system I worked on, we used a dedicated _hardware security module_ (HSM). This was a piece of hardware that was military grade - it never allowed the keys to leave the system, and had all sorts of physical tamper-proof capabilities. Basically it worked like this:

1. The user supplies their credit card details
2. The software asks the HSM to encrypt the data on its behalf
3. The encrypted data gets stored
4. When the system needs to use a credit card (i.e. take a payment), it supplies the encrypted data to the HSM and asks it to decrypt it
5. The decrypted data is used to make the payment, and never stored

The security lies in the fact that the keys are secured, and cannot be obtained. If the database is compromised, the data is useless without a key; assuming you've used a large enough key, you'll need a supercomputer to find it by brute force.

Sony have stated that all accounts have been compromised. This suggests a database dump as opposed to some ongoing "trace" to retrieve credit cards in the clear as they are being used. So here's the questions I have

1. Was a database dump stolen?
2. Were the credit cards in the stolen data encrypted or in the clear?
3. If they were in the clear, why?
4. If they weren't in the clear, has the key been compromised? If so, how?
5. The same questions apply to users' passwords

Of course, here's another possibility: The credit card data was encrypted and the key wasn't compromised; Sony did everything right, but are using full disclosure to tell the worst case scenario. After all, a criminal with the resources to breach a major corporation may well have a supercomputer at their disposal.

Answering the above questions could put a lot of minds at rest.
