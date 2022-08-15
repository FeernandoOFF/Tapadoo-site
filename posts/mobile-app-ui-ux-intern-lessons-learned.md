---
postImage: https://2upm2b1wdft320vzjj34rpga-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/Untitled_Artwork-2.jpg.webp
title: "From college to the real world: 12 lessons learned working as a mobile app UI/UX intern"
date: "2019-05-13"
categories: 
  - "ux"
tags: 
  - "android"
  - "apple"
  - "ios"
  - "material-design"
  - "pngs"
  - "vector-files"
---

I started working at Tapadoo fresh out of college as a UI/UX intern. I had some previous work experience in graphic design but was new to the professional world of UI and UX.

The theory I had learned in college held true, but a lot of the technical stuff, especially when it came to working with developers was entirely new to me.

Looking back, the main things I learned range from the seemingly obvious to being completely different to what I had expected.

#### **Developers:** 

#### **1: Android and iOS have separate design systems, which are both very different to one another.**

These differences vary from the subtle to the substantial. From the way app icons are displayed to the fact that iOS doesn’t have default checkboxes. The two have very different ecosystems and preferred ways of going about things. For a more in-depth explanation, one of our developers wrote a really useful [blog post](https://tapadoo.wpengine.com/ios-and-android-design-differences-and-why-they-matter/) explaining the key differences. Apple’s [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) and Google’s [Material Design](https://material.io/design/) are both two useful resources to keep on hand.

#### **2: The project doesn’t end once the final designs have been created.**

It's up to developers to bring these designs to life. The appearance and functionality of the app is very much in their hands. This means working closely with developers and iterations of testing the app to ensure it's created the way it was designed. It also means exporting assets and design guides correctly so that developers have everything they need.

#### **3: How to export assets for developers.**

Originally I thought that this seemed straight forward enough, just export every image as a PNG and it’ll be fine. But it's a little bit more complicated than that. As mentioned above, Android and iOS both have their preferred way of doing things. 

#### **Vector files**

If you're working with icons or logos, basically anything that isn’t a photograph and doesn’t have a huge amount of varying gradients, then for Android you can export it as an SVG and for iOS you can export it as a PDF. These are both vector file formats which means they are scalable. When possible it's preferable to use these.

#### PNGs

However, when it's not possible, PNGs are the next best option. PNGs are raster file formats. This means they can’t scale without losing their resolution. This is a problem, as Android has over 18,000 distinct devices, all of which have varying screen sizes and screen densities.  iOS has 18 different models so far that also have different sizes. Different sizes of PNGs need to be created so a developer can choose which one is best suited for what device.

Working with pngs means working with density, this is the sharpness of your phone or tablet’s display. iOS devices measure density in PPI (pixels per inch) and Android in DPI (dots per inch). The more pixels or dots you fit in one square inch on a screen, the higher the density and resolution of the screen.

For Android, PNGs are typically exported in five different sizes:

- mdpi = 1.0x
- hdpi = 1.5x
- xhdpi = 2.0x
- xxhdpi = 3.0x
- xxxhdpi = 4.0x

iOS is slightly simpler with only three preset sizes: 

- 1x 
- 2x
- 3x 

These Android and iOS presets are already set up in Sketch, Illustrator and XD. This means the software does most of the heavy lifting. 

The easiest and most straight forward way to design for iOS is at 1x. This is because iOS developers use points as their default measurement in the original iPhones pixels and points were the same. For example 320 x 480 points were the same as 320 x 480 pixels, this meant that the pixel density was always 1x.

However this changed with the introduction of retina screens. In the iPhone 4, 320 x 480 points are now equal to 640 x 960 pixels. This means it uses a pixel density of 2x, 1 point = 2pixels. Since the introduction of 3x designers predominantly design in 1x as this means exporting assets at different densities is easier and more accurate. It will also essentially future proof any designs to new resolutions. If 5x is introduced all a designer needs to do is add another export scale.

All of this can be applied to Android as they use a measurement that is almost identical to points. This unit is called a “density independent pixel”. As such for Android the best density to design in is mdpi.

#### **4: Just because you dream it doesn’t mean you can achieve it.**

From a development standpoint there are very real constraints that need to be taken into consideration. You can design a beautiful on-boarding experience but if it doesn’t consider the API calls that need to be taken throughout, then it won’t work in the real world.

#### **Clients** 

#### **5: The utility of a product and what features it has are typically designed by clients.**

In college, we spent a lot of our time finding an area that had a problem and coming up with ideas on how to solve this. This meant basically coming up with a product from scratch. The clients we work with typically find the problem area themselves and come to us with a solution that’s already been defined. We then help to shape this into an app.

#### **6: Stakeholders**

Working with companies means that there are other stakeholders involved. Stakeholders range from CEOs to project managers to marketers and each has different priorities. As such, it can be difficult to focus solely on the intended user. However, it's up to the designer to navigate between what is best for the user and the wants of the stakeholders. Our lead UI/UX, Orla Fagan, wrote a great [post](https://tapadoo.wpengine.com/focused-engagement-through-ux-design-strategy/) on how our role as UI/UX experts means we must always champion the customer and then help businesses define their strategy around this.

#### **7: Approval is needed.**

Each stage of the design process needs to be approved by the client. From wireframes to high fidelity mockups. Clients are a part of the process throughout. As such, their feedback needs to be taken onboard and designs need to be reiterated until clients are happy and give the go ahead to continue to the next stage. 

#### **Best practices:** 

#### **8: Sketch.** 

Our tool of choice is Sketch. It was created specifically for UI/UX unlike other software such as Illustrator and Photoshop. It's an important software to become comfortable working in. It offers a wide variety of plugins that can help speed up your workflow. 

#### **9: Organise your files.**

This is basic housekeeping that is easy to forget but can make a world of difference. Name and number your art boards properly. When exported this will let developers know which screen is which. This is essential, especially when working on large project where there are a lot of different screens which can easily get mixed up if they’re not clear.

It’s also equally important to give each asset a name that describes what it is. This helps developers know what an icon is without having to open it.

Another useful thing is to organise art boards by flows. This helps both you and the developer by breaking projects down into more manageable groupings. Developers also typically develop flow by flow, so it makes sense for screens to be laid out this way. 

#### **10: Include designs for error states & notification states.**

Both are essential when creating a finalised product. Error states are needed if or when something goes wrong. For example, if an app is unable to connect to wifi or retrieve data from a server. Without these error screen's a user can be left with a blank screen not knowing what happened or what to do. Notification states are also important to notify users on whats happening; if an action was successful or unsuccessful or if there is a new feature available.

#### **11: Include designs for transitions.**

It's important to consider what happens as one screen moves to the next. When somebody uses an app it’s not stationary.  When a user taps a button an overlay can be applied or alternatively an entirely new screen can slide up from the bottom. Little things like this really affect the UX and overall flow of an app. It's important to think through what happens with each screen change and to create a guide for developers to follow.

#### **12: Practice makes perfect.** 

Throughout an internship you’re continuously learning. Either you're developing new skills or improving old ones. Although it might be hard to wrap your head around things at certain times, you get better as you go and soon enough it’ll become like second nature. If you’re currently a UI/UX intern or about to start a UI/UX internship, remember its a journey, so enjoy it and try not to worry too much!

Beth Alexander

UI/UX Designer at Tapadoo
