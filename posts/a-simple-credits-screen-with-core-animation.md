---
title: "A simple credits screen with Core Animation"
date: "2009-10-01"
categories: 
  - "iphone"
  - "iphonedev"
---

Whilst working on my latest iPhone project (not yet announced), I wanted to do up a useful credits screen. This project had more than just myself involved and I wanted to ensure everyone got a mention.

I was also conscious of the exposure my apps were getting through [apps.ie](http://apps.ie), so wanted to do something that would link back too. So..I've put together a simple credits screen which uses Core Animation to show the individual credits. This post explains the code, and how it works. There's a gotcha or two in there as well.

**How does it look?****Data Structure** For the purposes of a credit, I wanted to be able to store

- The person's name
- What they did
- Their twitter id
- The web site
- An avatar

That's easy - I wrote a class called AppCredit, which is a pure data structure. It doesn't do anything beyond store the above details.

**The View On The Data** So, how would I visualise the data structure ? I had an idea of how this should look, so I created a CreditsView (in fact a view controller XIB), which layed out the information in a way that I thought looked nice:

![asinglecredit](images/asinglecredit.png "asinglecredit")

I wanted the twitter name and the web address to be tappable, to take you away to the relevant website. To achieve this, I overlayed the labels with custom buttons (essentially invisible buttons). I wired up their touchDown (so we can highlight), and their touchUpInside so we can actually open the relevant URL. We also followed good UI principals, in that we have an alert box pop up to warn that the user is about to leave the application. All of this is handled in the class CreditsView, along with the relevant nib file CreditView.xib

**So where's the animation?** Well, I wanted that the entire view just described would fade in and out repeatedly, for each of the credits, so I wanted them showing as part of a larger container. This is the CreditsViewController. The CreditsViewController is the UIViewController for the overall credits page. It consists of

1. A large label to show your application name
2. An area for the animated credits
3. A scroll area to store a brief description of your application
4. A "bottom third" with a description of apps.ie, along with another "invisible button" to take you there

In addition, in the sample code, I added a toolbar, with a "Done" button to be able to dismiss the credits screen. For the purposes of this example, I worked of XCode's standard "Utility application" template, and replaced the flipside view with my CreditsViewController. This meant adding some way to dismiss the credits view (In my actual app, it shows on a separate tab, so does not need a dismiss capability). The Done button is wired up the sample as the XCode sample, and should be obvious.

**Supplying the data for the credits view** I adopted a delegate approach to this. So theres a CreditsViewDelegate protocol, which we assign to the CreditsViewController. Once you implement this, and assign it to your CreditsViewController.delegate, it will ask the delegate for the necessary data as it needs it.

**The actual animation** The actual animation is quite simple. In a nutshell, it animates the first credit, when this is complete it animates the next one...and so on. When all have been animated, it just starts again. Here's the detail

1. When the CreditsViewController is loaded, it also loads up a CreditsView from the nib file
2. As it is about to appear, it asks its delegate for the necessary data, and fills in the labels
3. Once it has appeared, it starts to animate the CreditsView. It does this using the following code

\-(void) animateNextCredit
{
  // Use animation to fade it in
  CABasicAnimation \*animation = 
      \[CABasicAnimation animationWithKeyPath:@"opacity"\];
  animation.fromValue = \[NSNumber numberWithFloat:0\];
  animation.toValue = \[NSNumber numberWithFloat:1\];
  animation.repeatCount = 0;
  animation.duration = 2;
  animation.autoreverses = YES;
  animation.delegate = self;
  // Ok...Start showing our credits
  \[self getCredits\];
  if(credits != nil) {
    AppCredit \*credit = \[credits objectAtIndex:currentCredit\];
    \[creditsView setAppCredit:credit\];
    \[self.view addSubview:creditsView.view\];
  }
  currentCredit++;
  if(currentCredit == \[credits count\]) {
    currentCredit = 0;
  }
  \[creditsView.view.layer 
       addAnimation:animation forKey:@"credits"\];
}

Basically all that is happening here is we are telling the CreditsView (i.e. the small pane) to vary its opacity from 0 to 1 and back again, over 2 seconds. We set up self as the delegate to the animation, which means a method called animationDidStart will get called when we start, and animationDidStop when the animation completes. So..when animationDidStop gets called, we know we can move on to the next animation:

\- (void)animationDidStop:(CAAnimation \*)theAnimation 
       finished:(BOOL)flag
{
  creditsView.view.layer.opacity = 0;
  if(flag) {
    // This means that animation ran to completion.
    //  I.e. Was not interrupted
    // e.g. by removeAllAnimations
    // Cool - time to start another
    \[self animateNextCredit\];
  }
}

**Gotchas** There were a few problems I encountered when writing this code. Firstly, when the animation completed, there was an annoying flicker just before the second one started. This was caused because I had set the opacity to 1 in the CreditsView - Once the animation completed, the CreditsView was refreshed briefly back to full opacity. The fix was to set the opacity to 0. Once complete (i.e. faded out), if it were shown, it would be shown with full opacity, and therefore invisible. However, this led to a second problem. With the opacity set to 0, the CreditsView was essentially hidden, and so did not respond to taps. I couldn't jump off to my twitter url, etc. I could see my view (because it was being animated from 0 to 1, but I could not interact with it).

This is caused by the fact that the actual state of the view and the displaying of it are independent; I could see it animating, but its opacity value was actually 0. When its opacity is 0 it is considered hidden, and therefore won't respond to user input. To get around this, I experimented with very low values of opacity which would still respond to input, and found this to be around 0.02. So putting both of the above together: In animationDidStart, I set the opacity to 0.02. In animationDidEnd, I set the opacity to 0 (to avoid flicker). This all seems to work well. The next issue I found was another part of my app was slow after I ran my credits screen. I guessed that the animations were never cancelled. This was easy to fix, In my viewWillDisappear method, I just had to cancel my animations:

\[creditsView.view.layer removeAllAnimations\];

Note however that this will result in your animationDidStop method being called (which was where we started the next one, right?). But we can tell if we completed or were interrupted by the second parameter sent to animationDidStop, so this was easy to ensure we didn't re-start. That's what the if(flag) bit above is all about.

**Improvements** So how could I improve the code? There's a couple of obvious points:

1. In the credits view, I could extend UILabels and make them respond to input. This would negate the need for invisible UIButtons. Thanks to [@stroughtonsmith](http://www.steventroughtonsmith.com/) for that one. (Oh and for helping me with other gotchas).
2. I've done no internationalisation. Again, should be straightforward

So that's it. You can [get the code](http://files.me.com/dermdaly/6ndw0p) It looks better than the video on the simulator, and better still on the iPhone or iPod touch.

The code also uses a technique for doing a gradient background, as [outlined by Matt Gallagher](http://cocoawithlove.com/2009/08/adding-shadow-effects-to-uitableview.html) in his excellent "Cocoa With Love" blog. There's two source files from that blog post in the code, unchanged.

If you're an Irish Developer, you may consider using this as a basis for your upcoming projects, so it will link back to [apps.ie](http://apps.ie). If you've come from elsewhere, welcome!

Feel free to use this code as you wish. If you've any comments, questions, or improvements, I'm happy to hear about them. Use the comment section below to leave feedback.

* * *

You're reading the tapadoo blog. Did you know that as well as publishing our own applications, we offer iPhone development services and consultancy? If you have an idea, project or something you think we can help you with, please get in touch through [our contact page](https://tapadoo.wpengine.com/contact/).
