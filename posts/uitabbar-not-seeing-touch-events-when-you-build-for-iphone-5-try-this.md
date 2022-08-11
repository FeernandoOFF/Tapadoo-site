---
title: "UITabBar Not Seeing Touch Events when you build for iPhone 5? - Try This"
date: "2012-10-09"
categories: 
  - "development"
---

I've just spent an hour or so chasing a bug which had my head scratching. Hope this helps anyone else who encounters this.

The symptoms were as follows:

1. I had a straightforward UITabBar based app
2. When testing on 3.5" screen, it worked fine
3. When testing on 4" screen, the tab bar would not respond at all

I tried looking at the view hierarchy, and there was no case of a view overlapping; user interaction was enabled in all the wrong place. Eventually, I tracked it down to the main window; When I switched on "clip subviews" for this window, I realised that the tab bar wasn't even drawn. This was the clue.

What was wrong?

Simply put, the project was originally created with a version of XCode 2 years ago. The main window was created in MainWindow.xib, and this had a fixed size (which, for some reason XCode wouldn't allow me alter), and the autoresize mask couldn't be altered either.

There was no creation of the window in the App delegate (this all occurred prior when MainWindow.xib was loaded, prior to the app delegate being called).

The fix was simple enough. In the first line of the delegate's didFinishLaunchingWithOptions I added the following `window.frame = [UIScreen mainScreen].bounds;`

Hope this helps someone.

_Update_ [Nevan King](http://nevan.net) was in touch to highlight a more elegant solution. [Anthony Prato's post](http://anthonyprato.com/2012/09/20/iphone-5-problem-with-touches-at-the-bottom-of-the-screen/), is better again.

That'll teach me to use google before I waste an hour.
