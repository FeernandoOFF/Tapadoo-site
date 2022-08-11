---
title: "Simple Rules for managing Push Tokens"
date: "2019-08-26"
---

Sometimes, we develop an app for customers where they are implementing their own back-end services. The issue of handling push tokens regularly comes up. Often, the business logic may seem difficult to manage all the scenarios, but it really isn't that difficult. Let's take a typical example. In most cases, your service will want to associate a push token with a user on your service. Imagine your app is a shop, and you want to be able to send a push notification when a product ships.

Firstly a little background on how push works. Essentially there a couple of aspects to push:

1. Push is decided by a user permission. The first time an app wishes to use push, the operating system will kick in and ask the user's permission. If the user doesn't want to receive push, they can say no. This is the end of it. You won't get any tokens. This is fine. You're meant to respect the user's wishes. In this case the user is saying "Don't tell me when my product ships, I'll come back and check myself"
2. If permission is granted, the app will request a push token from the network (i.e. from Apple or Google depending on iOS or Android).
3. The token will be given by the network. It represents a unique device _and an app_. I.e. any push sent to this token will be delivered to this device and this app on the device only.
4. Typically, your app code will hand this token to the server to be associated with the logged in user to the service (i.e. "which user is logged into this online shop? this is now their token which you can use to let them know when their next purchase ships")
5. When the business conditions are fulfilled, the server will initiate the push. So, for example, your back end fulfilment service may have a process. Imagine when a package is accepted by your shipping partner, you look up the order, from which you look up the user, from which you take the token, and send a push to say "your order has shipped".

Still with me? Great. In order to handle the business logic for this on the server side, we encapsulate this in a couple of simple rules. Let's take you through them.

**Rule 1: A token can only be owned by 1 user and 1 user only.**

This one is simple. When the app gives the token to the server it should be associated with 1 user on your service. Imagine I have an account on your server, and I get a token. I give it to your server. When my product shipped, I should be the only person informed of this.

How could it occur that a token is on more than 1 user? Well, it shouldn't. But imagine I have the app installed. I log out. I give the phone as a hand-me-down to my daughter. She logs into her account, and gives what might be the same token to your server. The token should not be associated with my account and her account. It's up to you to notice that a token is already associated with 1 user, and you should remove it from me, and "give" it to her.

Here's some crude pseudocode

`update user set token = nil where token = '<given token>'`  
`update user set token = '<given token>' where user_id = <logged in user id>`

**Rule 2: A user may have more than one token**

Why can users have more than one token? That's simple too. Imagine I own an iPhone and an iPad, and I'm logged into your shop on each. Frankly, I want to shop with whichever device is nearest my hand.

Now, when my product ships, it makes sense to send a push to both. Either device may be nearby. So, allow for multiple tokens per user.

## Putting this together

This is quite simple, but there's a couple of gotchas:

1. Typically, in the app it may request the token and attempt a login to your service. Both of these are asynchronous events. Your app code should wait for both of these to finish before sending the token to the server. Remember, you are typically trying to associate a token to a user.
2. There may be a good case for de-associating a token from a user. If your app has a logout capability, it should inform the server that the token should be de-associated from the user. If we consider the above example, I should not receive a message about my shipped parcel if I have subsequently logged out of the app. So, you may need to supply an API for this specific use case.
3. Your push provider (or if you're going direct to Apple/Google) will have a capability to inform your server of _stale tokens_. A stale token is a token the network knows is no longer going to work. For example: A user may have uninstalled your app without logout. If you attempt to send them a push, it will fail, and the token will be marked as stale (essentially: The Operating System on the handset will have informed the network of this fact). How you find out about stale tokens varies depending on who you use, but the simple rule here is: **remove stale tokens. They are of no use to you.**

If you follow these simple rules, your push capability will work as you expect.
