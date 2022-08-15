---
postImage: https://cdn-bhcgp.nitrocdn.com/lQsUIlYWTGkhjqgYKmLJkHSBczAwGDPM/assets/static/optimized/rev-f8d7f54/wp-content/uploads/2019/10/androidOTPblogPost-01.png.webp
title: "Fetching a one-time password for an app on Android"
date: "2020-01-20"
categories: 
  - "development"
tags: 
  - "sms-retriever-api"
  - "sms-user-consent-api"
  - "sms-verification"
---

Are you looking to implement a one-time password (OTP) functionality in an Android app?

Android Developers have shared a handy new way to do this.

By using the SMS User Consent API you can prompt your users to share a single SMS message containing a one-time password. This means your app can now do SMS verification without asking for permission to read every single SMS message.

The API shows the user a prompt asking them if they want to share a single SMS message with your app. If the user accepts, the message will be shared with your app.

The new SMS User Consent API is making it a lot simpler. By using the API it prompts the user for permission to read that one text with the one-time password code. Once the user gives consent the app will have access to the entire message body to automatically [complete SMS verification](https://developers.google.com/identity/sms-retriever/user-consent/overview).

A previous way of doing this was to have a backend implementation in-between to authenticate the message and get the code, but this new way gives you temporary access to the user's messages. It then forwards that message to the app and lets you parse it manually.

You can also use the SMS retriever API for the same user flow. It creates a better user experience as the user won't be prompted. You just have to modify the SMS message to allow it to be automatically forwarded to your Android app.

Check out the video below from [Android Developers](https://medium.com/androiddevelopers/automatic-sms-verification-with-sms-user-consent-da8c16135e25) on how to start using the API.

https://www.youtube.com/watch?v=\_-Hs6DdcZyY
