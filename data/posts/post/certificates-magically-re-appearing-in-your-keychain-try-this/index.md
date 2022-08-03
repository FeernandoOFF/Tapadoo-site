---
title: "Certificates Magically Re-appearing in your keychain? Try this"
date: "2012-06-29"
categories: 
  - "development"
  - "iphone"
  - "iphonedev"
---

We've had this ongoing issue on our Continuous Integration server which had us scratching our heads. It went like this:

1. We create a certificate for our CI "Developer"
2. We add him to the provisioning certificate
3. The build is fine
4. Some time later, we update the provisioning profile, and install this - We remove the old certificate from the key chain
5. Each subsequent build, the old certificate magically re-appears in the key chain, and the code-signing fails as there are multiple matched certificates in the keychain

If you've seen this; here's what I think is happening, and here's how you work around it.

The certificate is embedded in the provisioning certificate. During the code signing process, a check is made to see if this is in the keychain; if it isn't, the code signing process adds it to the keychain. Because the keychain has a matching private key, the certificate is now valid again, but cannot be used, as you now have 2 keys with the same identity in the keychain.

We tried deleting the older certificate time and time again, but the build process always brought it back. So frustrating. Also; there's radars about this ([example](http://openradar.appspot.com/9173280), and there's [questions on StackOverflow about it](http://stackoverflow.com/questions/5932522/codesign-error-certificate-identity-appearing-twice).

But here's a little tip that helps; Note the certificate is put back into the keychain, but codesign will only work with a certificate where the private key is also in the keychain. The problem arises when the re-inserted certificate has its private key in the keychain.

So, next time this happens

1. Locate the older, duplicate certificate
2. Expand it
3. Delete it's private key

Now, even if you remove the certificate also, and even if your build re-instates the certificate, the private key will not be in the keychain, and so this older, duplicate certificate will not be used to sign your binary.

Yay. Go us.
