---
title: "On cross platform toolkits"
date: "2011-02-13"
categories: 
  - "business"
  - "ipad"
  - "iphone"
  - "iphonedev"
---

With the recent [Nokia-Microsoft announcement](http://www.microsoft.com/presspass/press/2011/feb11/02-11partnership.mspx), the smartphone race just got a shot in the arm. There will now be 3 main players in the smartphone and apps market. They are of course:

1. iOS Running on iPhone, iPod Touch, iPad and most likely AppleTV
2. Android, running on handsets from Samsung, HTC, Sony Ericsson, Motorola (and many others), and a plethora of Tablets
3. Windows Phone 7 - Running on handsets from Nokia, Samsung, LG, Dell and many others

If you're a brand manager, and you are considering a mobile strategy, you probably want to ensure that your mobile strategy has the widest reach possible, so will probably want your apps on all of the above. This is possible, but costly.

Allow me to get technical for a moment. iOS is developed in Objective-C, using a Mac, with Tools supplied by Apple. Android is based on a Java Eco System, and Windows Phone 7 is based on a .NET ecosystem.

This may be gobbedlygook to you, but what this means is they are very different, and very little crossover occurs. An app written for iPhone essentially needs to be re-written (at similar levels of effort an cost) for Android, and again for Windows Phone 7.

And at this point we usually get asked a fairly obvious and sensible question

> Isn't there some sort of tool that can publish on multiple platforms?

Here's the definitive answer to this:

> NO. There isn't

But, this needs elaboration. There are plenty of toolkits out there that claim to offer this. Be careful. If you want to use these you can but the results always end up the same.

I'm cynical about these toolkits for very good reason. This is pretty much the third time around for this kind of thing for me. In the early 90's there were a slew of toolkits that offered compatibility across X/Windows, Microsoft Windows and Mac OS. In the early 2000s the Eclipse people gave us _SWT_ the "Standard Widget Toolkit", and in fact, there a few others such as QT or wxWindows I can name.

The one thing that always stood out when they were used was

> You could spot them a mile off

Applications written using SWT looked like an SWT application, not a Windows application when running on Windows, and a Mac Application when running on Mac.

These cross platform toolkits always ignored one thing

> When you attempt to provide something that runs on many platforms, the **best you can hope for** is **"least common denominator"**

So the end result? Consistency - Yes. But consistently bad. Applications written using cross platform toolkits work consistently bad on all platforms. So you end up with a rubbish application on Windows, rubbish application on X/Windows and, you guessed it, a rubbish application on Mac (or.. a rubbish application on iOS, Android and WP7)

I think this can only get worse on Mobile. The devices are so specific, with a broad range of capabilities. Trying to cross them is just folly. In addition to this, the "good taste" barrier has leapt upwards since the introduction of the iPhone. Imagine giving an "android 2.0" experience in an iPhone app, or attempting the "iPhone experience" on Android - Neither user will thank you.

And let me get back to the Brands. If you're a brand manager, your job is to enhance the brand. If you put out something which gives a poor experience on any mobile device you've done worse than not releasing - you've in fact tarnished the brand. Now if you do that across many mobile platforms, the damage will be multiplied.

So do yourself a favour; If you want quality, and a native experience for your end users there's only one way to go. Get it developed natively, and avoid the short term savings a cross platform toolkit claims to get you.

* * *

You're reading the tapadoo blog. Did you know that as well as publishing our own applications, we offer iPhone development services and consultancy? If you have an idea, project or something you think we can help you with, please get in touch through [our contact page](https://tapadoo.wpengine.com/contact/).
