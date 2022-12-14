---
postImage: https://cdn-bhcgp.nitrocdn.com/lQsUIlYWTGkhjqgYKmLJkHSBczAwGDPM/assets/static/optimized/rev-f8d7f54/wp-content/uploads/2018/07/tapadoo_background_linkedin.png.webp
title: "\"Apple ID does not have permission to access iTunes Connect\""
date: "2009-03-16"
categories: 
  - "iphonedev"
---

So...you've written your iPhone application, you've gone through the process of getting the certificates, and provisioning profile set up, you've zipped it up, and you're ready to submit it to the app store.

You go to log into iTunes connect and you are greeted with this message:

> Apple ID does not have permission to access iTunes Connect

Here's what appears to be the problem, and (i hope) the solution.

The problem is the your iPhone Developer enrollment does not have either a state or a valid postal code in it. I live in Ireland, so we don't use states and our use of postal codes is arbitrary at best, non existent in reality.

There's (at least) 4 places where your account has been set up, so it is worth checking all of them. I believe that changing the state to 'n/a' is acceptable, but I'm not so sure as to what is needed for your postal code. It would appear that it expects less than 6 characters, with a mixture of letters and numbers. What I do know is that the one I enrolled with is "5" (which _is_ my postal code) is not acceptable.

The places where one can view/edit their Apple ID accounts are:

1. Your ADC membership
2. Your iPhone developer membership
3. myinfo.apple.com
4. Within iTunes itself.

All of this may be moot though. It appears that the profile that matters is your iPhone developer profile, which goes through an approval process. This is something that the people in Developer support cannot alter, as it has been through said approval process. I tried working with them on this (they can "push" an updated profile, but could not physically change it). Each of my changes above did not show up on their system, so they could not push it.

I did see a [post on an apple forum](http://discussions.apple.com/thread.jspa?messageID=7982928) for someone in the UK who got it sorted in minutes, but this was not my experience.

In my attempts to get this sorted, I too called Apple Developer support in the UK. I used the number at [this page](http://developer.apple.com/contact/phone.html)

One last tidbit: The UK number is a freephone number which cannot be dialled from outside the UK. Bah. The only international number diallable appears to be the US. However...Skype can be used to call toll free numbers, so I was able to put my call in to the UK using Skype.

They have told me that it must be escalated to the itunes team, and this could take "days" to get fixed. I'll post an update when it gets sorted.
