---
title: "Sharing NSUserDefaults between your app and a Today Extension on iOS 8"
date: "2014-06-12"
categories: 
  - "development"
---

Today extensions are the new iOS 8 feature that allows you to put widgets on the Notification Screen. This post will show you how you can share data through `NSUserDefaults`.

This is a simple, but probably common use case. Your main app has a set of "things" it displays, and the user may want to display some of these "things" on the Notification screen, so the app allows you to specify this. It's not unusual to store this meta-data in `NSUserDefaults`.

At WWDC we've been told that Today Extensions run in a separate process, so have their own sandbox. By default, there's no mechanism for sharing. Of course the engineers at Apple have considered this, so here are the details.

Sharing of data is achieved through a new concept called "App Groups". App Groups are allowed to share some data, including files, but it is worth noting that file access needs to be marshalled to avoid concurrent writes and so forth. This can be achieved through `NSFileCoordination`, but CoreData and `NSUserDefaults` handle this out of the box.

To read from the same set of `NSUserDefaults`:

1. In your main app, select your project in the project navigator.
2. Select your main app target and choose the capabilities tab.
3. Switch on App Groups (this will communicate with the developer portal, as it is generating a set of entitlements, and relevant App Id and so forth).
4. Create a new container. According to the help, it must start with "group.", so give it a name like "group.com.mycompany.myapp".
5. Select your Today Extension target and repeat this process of switching on app groups. Don't create a new one, rather select this newly created group to signify that the Today Extension is a member of the group.
6. When reading or writing your `NSUserDefaults` in either your app or your extension, don't access `[NSUserDefaults standardUserDefaults]`. Instead use `[[NSUserDefaults alloc] initWithSuiteName:@"group.com.mycompany.myapp"]` Note: You must use the name of your group in as the suite name.

Now both your extension and your app will be accessing the same set of `NSUserDefaults`, so can share data.

Other tips: If you've abstracted reading/writing of `NSUserDefaults` to a class, you can extract this into a Framework that both your app and Extension link to. Building Frameworks for Cocoa Touch is now pretty simple in XCode 6/iOS 8.

Don't forget??this still involves two separate processes. For example, my original abstracted class used a singleton pattern and cached some of the data in memory. This of course won't work; two processes means two completely separate singletons which were blissfullly unaware when a process updated the file. I just had to alter properties to read from NSUserDefaults every time, rather than using an in-memory copy.
