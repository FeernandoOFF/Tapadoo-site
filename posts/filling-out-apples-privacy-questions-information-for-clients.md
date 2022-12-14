---
postImage: https://cdn-bhcgp.nitrocdn.com/lQsUIlYWTGkhjqgYKmLJkHSBczAwGDPM/assets/static/optimized/rev-f8d7f54/wp-content/uploads/2021/02/matthew-henry-fPxOowbR6ls-unsplash-scaled.jpg.webp
title: "Filling out Apple's Privacy Questions - Information for Clients"
date: "2021-02-12"
---

Photo Credit: [Matt Henry](https://www.instagram.com/matt_henry_photo/) on [Unsplash](https://unsplash.com/@matthewhenry)

Apple have been doubling down on privacy in recent years. In its latest move, Apple are requiring all new apps and all app updates in the App Store to include information on how user's information is used in the app. The idea is to give the end user more transparency about how an app is utilising your data, to help them be more informed about whether they want to use an app.

As part of our service to our clients, we look after the App Store listing. It's just another thing we do.

Filling out the privacy questionnaire feels different. It feels like the app owner is making a declaration to their end-users. And as a result, we think this is something the client should handle themselves. Here's how the thinking goes:

From a client's perspective: _"I rarely use App Store Connect - you've done this for us. We use it so rarely, each time we try to use it it has changed from before, and we find it hard to use. Besides - you wrote the app, you know what data we are using - can't you just fill it in?"_

All of the above are valid points. Let's break it down a little. App Store connect can be difficult to find your way around. Whilst it is a modern web based console, there are some nuances when using it. For this reason, its not the most friendly to the casual user. If you only have to use App Store Connect (say) twice a year, there's a good chance you'll struggle to remember it well. Of course, with us, we have many clients and use App Store Connect regularly, so we're going to be more familiar with it that them.

Up to now, we did all of this for our clients. Of course, it does often meaning getting sign-off on some aspects of the listing. Keywords, Description, details and so on are all part of the App's "shopfront", and rightly, people who are responsible for branding and marketing will typically want final say. We usually use a process of sending them a word document with the details we want from them, and our own "plain speaking" explanation of where each of the items will show up.

"_You wrote the app, you know what data we are using_". Well. Yes. And No. Sometimes, when we work with a client, we've developed a full back-end for them, and we've written the APIs which are used to read and write the data. Other times, the client has written the back end, and we've implemented an API which they've specified. Yes. By reading the code, we'll know what data is captured, and which APIs use this data. However, this is typically where our understanding may end.

Let's take a fictional app, which we'll call "Shoe Store". Imagine it allows the user browse and purchase shoes. For the best experience, a user can have an account on the system, to allow quicker checkout in the future. From working on this app, we'll know the app collects:

- Basic personal details: email address, phone number, shipping address.
- Some financial details: credit card number, expiry, cvv
- history of orders, including size, style, colour, date of purchase and cost.
- history of searches

So, we can say "here's the data the app uses", but do we know _how_ it is used? For example, your shoe company may have started small. The data is used to fulfill orders. It's all it's used for, because, you're small and busy.

What happens if you expand a little? One day, you decide "let's do a 1 day sale on women's black boots", your tech folk run a query on your database for everyone who bought black boots over a year ago, and you do an e-mail blast to them. Now, you're using your personally identifiable data for marketing and advertising. We don't have to be involved - we won't know how you are ultimately using your data which is why it is difficult for us to fill this in on your behalf.

Next, we need to consider other features you want in the app, and if this affects the privacy declarations. It is very common for us to be asked to include Firebase Crashlytics (which is very useful for finding in-the-wild problems). It's also common for clients to want us to include Firebase Analytics (which can be used to help see how your customers are using your app, but also what devices are commonly used etc.).

Most customers are happy enough with "out of the box" features of these toolkits. But some clients may say (for example) "_if a crash occurs, will we be able to find out which of our users experienced that crash?_". The answer to this is yes, we can configure that; Crashlytics allows the use of "custom keys", where we can add arbitrary data to any crashlytics session, We may have added the userid (as they are known in your system) to crash sessions. Now, your userids are stored with crash reports. This makes it easy to track down a user who has had a problem, and see if it is unique to something in their account.

Crashlytics is somewhat of a "black box". It's an SDK we include into the source, and it does most of its magic under the hood. So we can't say for sure what happens to that data. It gets sent to Google, for sure (Crashlytics is a google product). Do they aggregate _across_ apps? (I'd say they do, but I can't tell for sure). Let's speculate that after a release of iOS, google can probably say "we saw a rise in crashes related to feature X in iOS after the release of iOS 14.3". If they can, then they are aggregating across apps. It's a bit of a "side effect" of using Crashlytics; It doesn't feel harmful from a privacy perspective, but it is a roundabout way of saying "data generated on your customer's device using your app is being used for data science/marketing/other purposes". (All of the above is the same if we replace "Crashlytics" with "Firebase Analytics" \[1\]

In these cases, all we can really do is explain:

1. What third party SDKs are in use.
2. What data we supply to those third party SDKs.

After that, you may want to consult the privacy policies and data usage policies for these products; you'll have to make your own decisions as to how you declare your use of these.

### Where is this all going?

Apple have continued to double down on privacy over the years. We expect this starts with self-declaration to allow users make more informed choices as to if they wish to use an app or not. However, we expect that in future, Apple may well do static analysis regarding privacy to ensure the declarations match what's in the code. For example, If you submit a binary to Apple, and state "I don't use advertising identifiers", this code is scanned for the use of their advertising identifier API, and if it is present, the app is automatically rejected. A logical extension of this over time is after filling out your Privacy questionnaire, your binary is found to be linked to the Crashlytics SDK, and the declaration doesn't match, you may see a rejection. This is not the case yet, but seems like a logical next step.

None of us have a crystal ball when it comes to Apple. Our friends in Steamclock in Canada have written an interesting take on where they see it going. We recommend reading [Allen Pike's take](https://steamclock.com/blog/2021/02/apple-tracking-analytics-sdks/).

In addition, in Ireland, the Data Protection Commissioner has been cracking down on sites that aren't correctly informing people on their use of cookies; This is also privacy related. We think it is only a matter of time before Apps come under their spotlight.

### Isn't this all a bit of overkill?

We don't think so. Your marketing department may see it differently. We recommend Apple's great white paper on "[A day in the life of your data](https://www.apple.com/privacy/docs/A_Day_in_the_Life_of_Your_Data.pdf)" which explains why privacy is important.

### OK, I understand we have to do it, but we still need your help

Yes. We've done a number of these with clients recently. We're here to help. When it is time to fill in these forms, we'll do the preliminary work to ascertain what data the app is using (via a code review), and we'll also list what Third Party SDKs are in use. You may want to do a similar exercise in your API and see how it is using data. Then, we'll work though this with you in a conference call to advise as best we can based on our understanding of the app code. Ultimately, of course, filling out this declaration is your responsibility.

### Further Reading

It is interesting how two large players in the App Store have handled this new privacy declaration. Facebook, who are well known to use your data for all sorts of reasons, just came clean, and produced a huge list of your data and how they use it:

https://twitter.com/tomwarren/status/1339174301564604418

Google, on the other hand seem to be [taking their time to update their iOS Apps](https://www.theverge.com/2021/1/26/22250648/google-apple-app-store-privacy-label), previously updated very regularly.

Footnote: \[1\]: We're not singling out Google's Tools here - The same applies to Flurry Analytics, and other third party analytics, crash reporting tools, or advertising toolkits.
