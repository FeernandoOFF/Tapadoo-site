---
title: "A Bugs Life"
date: "2014-05-09"
categories: 
  - "life-at-tapadoo"
---

It's been a fairly quiet week for me here at Tapadoo in comparison to Úll week last week! If you haven't read Kevin's summary of the conference yet, I recommend you [take a peep](https://tapadoo.wpengine.com/2014/the-ull-experience/ "The Úll Experience")!

It was quite difficult to come home to our small flat after living the luxury at Úll. I had gotten used to waking up to the sound of birds outside Lyrath house, but unfortunately I'm back to having the Dart less than a metre from my bedroom window as an alarm clock!

[![house](images/house.jpg)](https://tapadoo.wpengine.com/wp-content/uploads/2014/05/house.jpg)

No really. It's that close.

But we didn't waste too much time on Thursday, we dove head first back into some bugs. I managed to fix most of the bugs that were assigned to me (with a bit of help from the crew), but there was one bug that bested me. Everything I tried either had no effect at all or just broke the app more! So I pushed the bug up the chain of command to Dermot for some "boss-coding"!

The goal was to have a list of input fields that the user would fill out and when they hit the submit button, the textfields would be validated and the textfield that failed validation would be given focus after displaying an error message. This sounded quite straightforward, but caused me all sorts of problems!

The problem was that this was working less than 50% of the time. In iOS to focus a `UITextField`, you call the `becomeFirstResponder` method. Since we were displaying a `UIAlertView` to show the error message, we were calling `becomeFirstResponder` too soon for it to have any affect. The alert view had to be dismissed first. Dermot proved this by delaying the call to `becomeFirstResponder` by a short amount of time, which he later cleaned up by using `UIAlertView`'s `didDismissWithButtonIndex` delegate method to make sure the alert view was finished with before focusing the textfield.

This was now working, but only if the textfield, which was housed in a `UITableView`, was visible. This meant in the alert view's delegate method we also had to manually scroll the table view back to show the textfield, then wait for the animation to finish and finally call `becomeFirstResponder`!

So thankfully that bug is fixed now, and the others were fairly straight forward. We've started round 2 of the "Great Tapadoo Bake-Off" ([#gtbo](https://twitter.com/search?q=%23gtbo)) this week, with a mount watering [Guinness Chocolate Cake](http://instagram.com/p/nsNl_MSZSe/) from [Sasha](https://twitter.com/sashaw). Up next to the plate (heh) is yours truly, and if you read my summary of my first attempt, you're going to want to tune in again next week for the result of attempt two! Hopefully I can deliver on the right day this time!
