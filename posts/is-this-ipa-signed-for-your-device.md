---
title: "Is this ipa signed for your device?"
date: "2011-04-18"
categories: 
  - "development"
---

Its a common issue for iPhone app developers. You sign the build and put it on the web server. You download and it work on your own devices. You send the link to the client and the respond that it doesn't work for them.

There's a number of places where you could have made a mistake. You developer cert could have been incorrect. You may have added their UDID to the portal, but forgot to add it to the provisioning certificate. You may have added it, but not used the correct profile when making the build. You may have done all this right, but not put the correct binary on the webserver

..and so on. We've all been there.

So, how can you tell if an ipa is actually signed for a client's UDID. Well you could download/extract/find the provisioning file, etc.

Or you could use a handy command line script we've thrown together and put on github which does all this for you.

Hope you find it useful [https://github.com/dermdaly/listdevs](https://github.com/dermdaly/listdevs)
