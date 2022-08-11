---
title: "Relax: iOS 11 Will Probably not break your app."
date: "2017-03-15"
---

A number of our clients have been in touch with us today. They are afraid that their app is about to stop working. And it's all because of [this article](https://www.siliconrepublic.com/gear/ios-11-app-pocalypse). I mean, look at the url for it "ios-11-app-pocalypse".  People do love a "sky is falling down" story, especially when it includes Apple.

I wrote to Silicon Republic and thanked them. Sincerely. It gave me a chance to explain to our clients that all is ok, but it is still prudent for us to re-compile their apps against the iOS 11 SDK when it becomes available, but the reality is not near as bad as the headline would suggest.  Allow me to explain:

Let's start with the figure. Close to 200,000 apps will be affected! Well, reports for June last year suggested around 2 million apps in the App Store, So, we're talking about 1/10th may be affected.  OK. It's not insignificant, but it is small.

OK. What about the "when will this happen". Well, If the last 8 years of iOS is anything to go by: iOS 11 will go beta in June 2017, and will be made generally available (as a public beta) around September 2017.  So you have until then to get your house in order (_if in fact it is even out of order_)

Next, let's look at the problem. The problem is apps built for 32bit only processors will stop working. In technical terms this is apps built for armv7 architecture (or armv7s). Armv7s was last supported in XCode version 5, which incidentally, also supported arm64, the 64 bit instruction set. To put this in context, the current production version of XCode is XCode 8.

## A brief history lesson: Enter the "Fat Binary"

Sometime around 2005, Apple switched from making their computers using IBM's PowerPC architecture, to using Intel chips. But they had to deal with a transitionary period, so they introduced the concept of "fat binaries" to MacOS.  Applications built for MacOS built "fat binaries". In reality, this is a container than has more than one architecture in it. So, the binary for, say Pages included both a PowerPC variant and an Intel variant. The operating system had the intelligence to choose which executable to run, and ran the relevant variant. (In the parlance of the time, the Intel version would run the intel "slice").

As hardware for the iPhone got better, the same problem arose: The processor was getting more powerful, and having new instructions, yet developers needed to ship Apps that could work on say an iPhone 4 (arm v7, 32 bit) and an iPhone 6 (arm64, 64 bit), so Apple chose to re-use the fat binary concept.  When you build an app for iPhone, it typically builds multiple slices into a fat binary. Even better, Apple does some magic on the server side such that when you download an app from the app store, you in fact get a single-slice binary for your phone's architecture.

So, getting back to today. Since XCode 5, we've been able to produce 64bit code, and this was most likely, switched on by default.

Now, looking at the typical timeframe for Apple released:

- XCode 5 was shipped to developers as a beta in June 2013
- It went gold around September 2013

So. If your app hasn't been submitted to the app store since September 2013, then there's a chance it will be removed from the store come the launch of iOS 11 in September 2017.

Here's the thing: If your app hasn't been updated since September 2013, it is probably abandonware anyway and it is probably right that it should be pulled.

But there is an important takeaway here: Uptake on new iOS versions is very high. Within weeks of launch, more than 80% of your users will be on the latest version, so if you provide an app, you need to keep up.  A lot of our customers take out annual support agreements, and we work on their app during the beta cycle. For those who don't we've told them this:

> iOS 11 will drop at WWDC in June.  There’ll be a 12 week Beta Cycle during which we’ll have access to pre-release development tools and SDKs. Sometimes, new versions of the operating system will introduce breaking changes, and updates will be required.  It would be prudent to have us set aside time during the beta window to compile and test the app against the new operating system.  We may or may not need to carry out code changes, but won’t know until we try.  We could find that there are no breaking changes, and we don’t even need to update the app in the store.  We won’t know until the SDK is made available (and, in fact, in our experience the SDK does change during the beta cycle: They typically do 6 betas, two weeks apart).

So no. There isn't an app-pocalypse. The sky isn't falling down. But we shouldn't be complacent either.
