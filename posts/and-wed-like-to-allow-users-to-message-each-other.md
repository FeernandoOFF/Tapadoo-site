---
postImage: https://cdn-bhcgp.nitrocdn.com/lQsUIlYWTGkhjqgYKmLJkHSBczAwGDPM/assets/static/optimized/rev-f8d7f54/wp-content/uploads/2019/09/sendMessagesBlogPostFinal-02.png.webp
title: "\"...and we'd like to allow users to message each other\""
date: "2019-11-11"
categories: 
  - "development"
---

Here's a common request we find in an early stage client conversation:

"..and we'd like to allow users to message each other"

If ever there was a statement that hides complexity it's this one.

Messaging sounds simple right?

User A send a Message to User B. User B reads the message. Piece of cake.

Implementation? Straight forward. You have a users table, and a messages table, with a foreign key to show who was the sender and who was the recipient. You can store messages in there. Send a push to the User B when you insert into this table. Simple!

In fact, it's often done as example code - Here's [firebase's](https://codelabs.developers.google.com/codelabs/firebase-android/#0), [free code camps's](https://www.freecodecamp.org/news/building-a-chat-application-with-mean-stack-637254d1136d/), [getstream's](https://getstream.io/chat/react-chat/tutorial/) and [Ray Wenderlich's](https://www.raywenderlich.com/5359-firebase-tutorial-real-time-chat). To name but a few.

But here's the thing, when people think of messaging, their frame of reference is iMessage, WhatsApp or the plethora of other chat apps out there. And though you might not notice it, these are chock full of features. Features that people expect.

![App Messaging. Illustration of hands typing a message on a smartphone](images/sendMessagesBlogPostFinal-01-1.png)

When I see "we'd like to allow users to message each other", here's 10 questions that reel off, each leading to further features:

- Do you want to know if the message is successfully delivered?
- Do you want to know if the message has been read?
- Would you like to send photos?
- When the recipient receives a photo, should tapping on it go full screen?
- What about videos?
- Do you want group chat?
- So, we'll need the concept of chat admins, add/edit/remove people from the chat?
- Probably group chat titles?
- Do you want to show unread counts?
- Will users need avatars?

This list could go on, but typically all of the above is just expected.

This is before you get into the _responsibility_ of running a messaging system. Your server better be robust. It better be scalable.

How are you going to handle harassment? (If you provide a message service someone **will** be abusive to someone else on it). Now we better consider a block/report feature. (And you're going to need a process for dealing with someone who has reported something).

The chats may need to be encrypted; you shouldn't have access. If you do, you may need to prepare your business processes for dealing with enquiries from law-enforcement.

And after all of this, be prepared for people to leave your messaging system quickly. If you app isn't primarily a messaging app, once a real connection is made through your service, people will naturally migrate to where they do the bulk of their messaging - Whastapp/iMessage.

So, before considering messaging as a feature, you may want to consider what messaging actually entails.
