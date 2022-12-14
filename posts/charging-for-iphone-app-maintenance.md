---
title: "Charging for iPhone App Maintenance"
date: "2009-05-14"
categories: 
  - "iphone"
  - "iphonedev"
tags: 
  - "contracts"
---

In an earlier [blog post](https://tapadoo.wpengine.com/2009/how-much-to-develop-an-iphone-application/), I spoke about how to charge for developing of an iPhone app. A comment was recently added by Finbarr which I think is an interesting question:

> One question though. How do you factor in the cost of maintenance? Since all updates to iPhone app’s are free, most clients might not want to pay the developer to do bug fixes since they shouldn’t be there in the first place. Or do you have any way to factor that into the initial contract with them?
> 
> /Finbarr

I was going to respond with another comment, but I think this is worthy of a post in itself. I think the answer is not iphone specific, rather a general point about software development; at what point is the project considered complete? How long are you expected to provide bug-fixes? and so on. Here's how to handle this: All software development is by its nature somewhat complicated. Users will use your software in ways you may not have thought about, and this can happen at any stage after you have shipped. Basically, bugs can happen long after you expect them, and are usually due to unforeseen circumstances. If we all accept this, then we have a way to handle it. Firstly, as part of the contract, keep time for an acceptance period. But ensure it is time bound. You can even allow for some of the payment to be held back until acceptance has been reached. Typically fixed price projects can be done on a basis like this:

1. 30% upon signing of the contract
2. 30% for an interim build; either some form of beta, or with a level of agreed functionality being present
3. 30% upon completion; i.e. delivery of release candidate
4. Final 10% upon acceptance

The acceptance period and criteria should be spelled out correctly. If needs be, get a solicitor, but something along the lines of

> After delivery of the release candidate to the client, the client will take a period of 3 weeks to carry out acceptance testing. During this time, and bugs encountered will be fixed by the developer. Bugs refer explicitly to the following types of issues:
> 
> 1. Fatal problems resulting in an application crash
> 2. Service affecting issues whereby the application is not working as defined
> 3. Security related issues
> 
> Bugs not covered by this are
> 
> 1. New features that were not part of the original agreement
> 2. Changes of a cosmetic feature

Of course you may need to flesh out the above and you should also define in this how the bugs should be reported (e.g. if you have a bug reporting tool), and responses to expect.

Once the work is considered finished, if your client wants the luxury of being able to contact you regarding future bug fixes, then they need an annual maintenance contract. This is typically a percentage of the original cost of the work, and payable in advance (though it is not unheard of to pay half-yearly or quarterly in advance). The maintenance fee basically allows to call on you, but should also put a limit on what that provides (in terms of hours) - Anything outside of this should have an agreed rate that you fix for the period of the maintenance contact. The maintenance contract should also be limited to severe problems and security issues (often we'd call these "service affecting" issues). You don't want to be doing feature enhancements under the maintenance contract

Now. Getting back to specifics of iPhone app development, I don't think it differs all that much. You can provide bug fixes for a well-defined period, and after this, the project is complete. If new features are required, it is a "new project". The only difference here is that you typically won't need a spec this time around, so should be able to price the feature enhancement quicker.

Any thoughts? Leave a comment.
