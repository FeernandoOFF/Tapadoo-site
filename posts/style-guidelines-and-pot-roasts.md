---
title: "Style guidelines and pot roasts"
date: "2010-01-02"
categories: 
  - "development"
---

In many companies I've worked I've engaged in the usual "style wars". It goes like this.

1. A senior developer decides that for the new project, the entire team should use a single style. This will mean that the code is consistent across the project and make it easier for developers to work on each other's code. It also means there will be a level of consistency on commenting etc.
2. A sub-group is put together to decide the guidelines.
3. The guidelines are issued
4. The team fight over them
5. A manager steps in and tells them to use the ones laid down.
6. There's huffing and puffing but eventually everyone uses it.

Well, that's been my experience anyway. But, its always the fight that interesting. People fighting over where its a newline before an curly brace or not, hungarian notation or not, tabs versus spaces always makes me think that people are missing the point somewhat. The point is about consistency. The arguments are usually about some people consider more whitespace more readable, whilst others think that the more code on the page, gives you a better understanding of what the code does, without having to always page up and down.

So...when you have a few years under your belt, you realise this, and you sit back, enjoy the fireworks knowing that the manager will step in, put an end to the arguing, and we'll get our consistency mojo.

But....every now and then I do feel that some rules are just stoopid. I was reading the excellent [google style guidelines for Objective-C](http://google-styleguide.googlecode.com/svn/trunk/objcguide.xml) tonight and saw _my_ personal pet peeve stupid styleguide rule:

> Each line of text in your code should be at most 80 characters long.

Why? **Why?** Why not 79 characters? Why not 81? Why not more? I know why. Before we had GUIs, your typical PC, or VAX Terminal, etc had a width of 80 characters. Printers too. Typically printed 80 characters per line. But c'mon. We've not used text terminals for years, and a typical monitor can show much wider than 80 characters. And...we never print code anymore; If we did, the printer can handle more than 80 characters wide anyway.

I think its silly to have a style guide that was relevant in 1990, but has no relevance to the real world apart from "that's how gran did it".

There's an excellent couple of books by a guy called Steve Maguire. One is called "Writing Solid Code" and another is called "Debugging the development process". They are more relevant to writing C code, but the sentiments in them are excellent, and I still think all developers should at least read "Writing Solid Code". There's a great anecdote in "Debugging the development process" that as I remember it, is about Steve's wife and her pot roast. It went like this (I hope Steve doesn't mind me quoting it):

> "A boy asked his mother how come she cuts off the edges of a pot roast when putting it into the pot. Mother told him that that's how her mother taught her to do. So, boy went to his grandmother and he got the same answer. Then he went to his grand-grandmother and ask her the same question. The answer was: Well, back then my pot was to small and the meat didn't fit inside."

80 Characters per line when writing code: Pot roast rules for developers.

* * *

You're reading the tapadoo blog. Did you know that as well as publishing our own applications, we offer iPhone development services and consultancy? If you have an idea, project or something you think we can help you with, please get in touch through [our contact page](https://tapadoo.wpengine.com/contact/).
