---
postImage: https://cdn-bhcgp.nitrocdn.com/lQsUIlYWTGkhjqgYKmLJkHSBczAwGDPM/assets/static/optimized/rev-f8d7f54/wp-content/uploads/2018/10/hal-gatewood-484498-unsplash.jpg.webp
title: "Native App Development or Cross Platform?"
date: "2018-10-22"
categories: 
  - "development"
tags: 
  - "android"
  - "apps"
  - "cross-platform"
  - "design"
  - "development"
  - "ios"
  - "product"
---

# **Native App Development**

At Tapadoo, we commit to delivering only the best mobile apps. That’s why we are sanctimonious advocates of native app development for iOS and Android. We believe this is the best approach for product design and development. 

You could say we are intuitive about these things. As early as 2011, our founder [Dermot](https://www.linkedin.com/in/dermdaly/), was skeptical about HTML5 for rendering user interface elements on mobile. He was right! You can read his original blog post [here](https://tapadoo.wpengine.com/2011/no-html5-is-not-the-answer/).

We read recently how Airbnb and Udacity dropped React Native in favour of native app development. Both Airbnb and Udacity’s engineering departments released posts on why they reverted to native app development. I’d highly recommend a read of both; [React Native at Airbnb](https://medium.com/airbnb-engineering/react-native-at-airbnb-f95aa460be1c) & [React Native at Udacity](https://engineering.udacity.com/react-native-a-retrospective-from-the-mobile-engineering-team-at-udacity-89975d6a8102). This confirmed our belief in native app development even more.

## **An opportunity to try new things**

That said, we are always up for a challenge. So when the opportunity came along to develop a cross platform app using React Native, we jumped at the chance.

We had the pleasure of working with a large multinational car manufacturer on an app for their marketing campaign.

The app has had over 50,000 downloads since we delivered the product. We’ve learnt some things from the process that we’d like to share with you.

## **Cross platform development**

Native app development is where you write a specific codebase for Android or iOS. Whereas, cross platform development only involves writing a single codebase which can be deployed on both platforms.

### **Why choose cross platform?**

Maintaining a single codebase lowers code duplication, and in theory, reduces iteration cycles.

Cross platform frameworks like React Native, Xamarin, Flutter and Ionic endeavour to accomplish this. Write once, test on both platforms, and deploy.

Sounds too good to be true, right?

In some cases it is.

### **Who uses cross platform frameworks?**

[Facebook, Instagram, Pinterest, Skype and Tesla](https://facebook.github.io/react-native/showcase.html) all used React Native to produce their flagship apps. Facebook created ReactJS in 2011, a widely used web development framework. In 2013 React Native began at an internal hackaton. It built on ReactJS and was open sourced on Github in 2015.

Google's Flutter is gaining ground in the cross platform world. It’s used by [Alibaba, and their own AdWords app](https://flutter.io/showcase/). While it’s still in alpha, some promising work is surfacing. I recommend checking out the beautiful [Reflectly app.](http://reflect.ly/)

## **Why is native app development better?**

The development world is far from ideal. Developing for any platform comes with a host of potential issues. Unknowns exist around every corner. 

Once you deploy a non-native development tool, you position yourself even further away from the operating system. This may be a compromise some products can live with but it's not a decision that should be taken lightly.

Apps are becoming more complex. They are leveraging the latest hardware and technologies to increase immersion. Every year operating systems are revised and updated. iOS 12 has recently been released and Android P will be available soon. There are a host of new features and APIs with these updates. Apps need to utilise the latest operating systems features in order to succeed.

Cross platform frameworks are in a perpetual game of cat and mouse to keep up.

### _Performance_

Often cited as a major drawback of any cross platform framework. React Native suffers poor performance at times, such as frame dropping. Poor performance will compromise the user experience significantly.

Developers often blame the performance issues on the framework, when it is actually often improper use of the APIs.

But with the lack of documentation and continuously changing APIs within React Native, it's no wonder that it can lead to substandard app design.

### _Third party dependency_

You relinquish granular control to a third party when you utilise a cross development platform. This can lead to instability and penalise maintainability. 

One of our core principles at Tapadoo is delivering stable mobile applications. Maintaining a low to zero crash rate is what we strive for.

We include analytics and crash reporting within our apps. This allows us to maintain low crash rates and provides valuable data on app usage. To include these SDKs in React Native, we needed an additional dependency to allow invocation via the shared codebase.

We have been able to achieve a crash free rate of above 98% on our cross platform project. However, a significant number of crashes are occurring from within the React Native SDK. We've continuously had to update to the latest version of React Native to combat this. This hasn't always improved the crash rate but it has increased maintenance effort.

### _Platform specific styling_

Both Android and iOS maintain individual style guidelines. Android's material design is largely based on the physical world, with views having elevations and cast shadows. The iOS human interface guidelines lean towards flat design. Both give each platform a distinct but familiar user experience.

Cross platform user interface components often feel unnatural. They do not conform to either standard as default.

Platform specific styles can and should be added where possible to ensure an experience in keeping with operating system norms.

### _Developer support_

Not all development environments are created equally, but some are above the curve. It is these types of environments that help developers do their job efficiently.

A colossal amount of work has been undertaken to build tools to help developers wade through the trenches. Both iOS and Android have well established tools, designed with ease of use in mind. Tools developers use everyday but often take for granted. Tools like layout previews, debugger breakpoints, code injection and documentation lookup, which are in-built to Android Studio and Xcode.

There are often multiple tools for developing with a cross platform framework, but their standards leave much to be desired. For React Native, some promising IDEs do exist, such as [Deco](https://www.decoide.org/), [Nuclide](https://nuclide.io/) and [Visual Studio Code](https://code.visualstudio.com/).

## **Where is cross platform useful?**

There are certainly use cases for cross platform development. Cross platform can potentially reduce development time for prototyping or producing a minimal viable product. Provided an experienced developer is undertaking the task.

## **Hybrid apps**

The React Native app we built utilised sensor and location data. This was a challenge for pure React Native. It meant we had to implement some native code on both Android and iOS to fulfil these requirements.

We now have a hybrid codebase. Cross platform, mixed with native code. Between 5% to 10% of the codebase is native. User interface code is shared, with minor exceptions to platform specific styling. The reuse of code was kept high. This is a massive benefit and the core motivation for choosing a cross platform framework.

## **Conclusion**

After this experience, our view remains. It is more challenging to achieve a quality product using a cross platform framework.  Quality, maintainability, user experience, and the ability to innovate, all deteriorate. No matter how fast these frameworks mature, it's hard to see them contend with native app development.

Should you go cross platform?

Maybe.

This is a decision that will likely stay with you for the lifecycle of your product. There are merits, which are especially attractive from a business perspective. But the core technology you're building may suffer in the long term. 

As a company who are responsible for producing high quality apps, native is the right strategy. We pride ourselves on pushing the boundaries of app development, anything that limits this, is out of the equation.

Unsure yourself? 

We are experts in mobile app development, and are always free for a chat.

If you'd like to chat to us about your app development project you can contact us [here](https://tapadoo.wpengine.com/contact/).

Kevin Murphy

Senior Android Developer

Photo by [Hal Gatewood](https://unsplash.com/photos/WcYeiHMexR0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/phones?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
