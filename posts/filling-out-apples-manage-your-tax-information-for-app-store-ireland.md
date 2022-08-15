---
postImage: https://cdn-bhcgp.nitrocdn.com/lQsUIlYWTGkhjqgYKmLJkHSBczAwGDPM/assets/static/optimized/rev-f8d7f54/wp-content/uploads/2019/04/tapadoo_background_linkedin.png.webp
title: "Filling out Apple's \"Manage your tax information\" for App Store - Ireland"
date: "2009-03-27"
categories: 
  - "iphone"
  - "iphonedev"
tags: 
  - "adccontact"
  - "apple"
  - "tax-information"
---

If my app ever gets approved, I've a plan for a "pro" edition which will have more features, and a small price attached to using these features. So, I needed to fill out a number of forms on itunesconnect. These forms are:

1. Contact info
2. Banking info
3. Tax info

I found the tax info one slightly confusing, so at a recent iPhone dev meetup, I spoke to other developers about how they completed it. I've now done it, and felt a blog entry may be useful to other developers.

The contact info form is very straightforward. Particularly if you are doing this as an individual, you can assign yourself to all roles (yes: this means you are "Senior Management", "Finance", "Technical", "Legal" and "Promotions" contact).

The bank info form is relatively straightforward too, but note you will need your "International Bank Account Number" known as an _IBAN_ and your bank's _swift code_ which is a code which the bank has relating to international money transfers. Getting these is a simple call to your bank. (I called AIB's 24 hour banking; they did a few extra security questions, but that's understandable).

The tax info one is the one I found confusing. You need to fill this in because if you don't, apple with withhold 30% of your revenues for tax purposes. Ireland has an international treaty with the US, so once this is filled in, apple will be able to release all income to you. Of course how you handle your tax affairs on this revenue is up to yourself.

Here's what you need to to:

1. Obtain an Employer Identification Number from the US Inland Revenue Service. The number to call is 215-516-6999. They will give you one over the phone.The reason you want an EIN is "Nonresident alien required to obtain EIN to claim tax treaty benefit" A quick check on t'internet tells me that this is in Pennsylvania, so [check for their local time](http://www.phone-area-code.info/index.php?search=215). Note: I initially tried to get an ITIN (which is like an EIN for an individual), but they will not do this over the phone, as it requires documentation and identification. Instead, try for an EIN. Tell them you have a sole proprietorship and they will ask you a few questions, and then give it over the phone.
2. No you are ready to fill out the Tax info form:
    1. For "Beneficial owner" choose "Individual"
    2. For "Permanent Residence Address" choose your home address
    3. Check the mailing address is same as residential address
    4. For US Taxpayer identification number fill in the number you just got from the IRS. Check "EIN" too.
    5. For foreign tax identification number it states if any! Apple's instructions say leave it blank.
    6. For reference number(s) - Leave this blank too.
    7. For the next section, 9 (Certification), I only checked the first two.
    8. For section 10, fill it in such that it reads as "The beneficial owner is claiming the provisions of Article **12** of the treaty identified on line 9a above to claim a **0**% rate of withholding on (specify type of income):**Royalties**
    9. For "reasons the owner meets the terms of the treaty article" put the following text: "**Resident of Ireland receiving income in compliance with terms of US treaty agreement**"
    10. For Part III you can ignore this.
    11. You must click the Certification in Part IV

That should be it.
