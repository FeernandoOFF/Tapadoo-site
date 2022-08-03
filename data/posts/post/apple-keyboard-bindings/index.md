---
title: "Apple Keyboard bindings"
date: "2010-10-06"
---

Got an **Apple Keyboard™**? Disgruntled with the way the PageUp/PageDown/Home/End buttons only move the screen and not the cursor? Well, gruntle no more with this handy tip! _(Windows users can feel smug in the knowledge that their keyboards have always had this functionality\*.)_

In ~/Library/, create a directory called KeyBindings. In this directory, create a file called DefaultKeyBinding.dict, and enter the following bit of crunchy magic goodness:

{
"UF729" = ("moveToBeginningOfDocument:","setMark:"); 
"UF72B" = ("moveToEndOfDocument:","setMark:");
"UF72C" = ("pageUp:","setMark:"); 
"UF72D" = ("pageDown:","setMark:");
}

Restart any Cocoa application that that uses Cocoa Text System, and the new keybinding will take effect in that application, as if by magic!

**CAVEAT:** XCode overrides the default text keyboard bindings, so you'll need to update the keyboard bindings manually.

Goto Preferences / KeyBindings / Text Key Bindings, and update the following actions with the relevant keystrokes:

> Mode to Beginning of Document: ↖  
> Mode to End of Document: ↘  
> Page Down: ↡  
> Page Up: ↟

Now, you have a wonderful keyboard with really actually usable and useful navigation keys!

_\* Shame about the rest of the Windows user experience, haha._
