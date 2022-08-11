---
title: "What every programmer should know about phone numbers"
date: "2017-03-08"
---

I regularly see mistakes in how phone number are formatted, or called out to people, particularly when we start to reference phone numbers outside of our country. People incorrectly call out international access codes, country codes and the like. And in fact, it isn't that hard.  So here's a post to try to put the basics in one place.

1. A phone number typically is made up of:
    1. A _country code_
    2. An _area code_
    3. The _subscriber number_
2. If you are in the same area, all you need to do is dial the actual number.
3. If you are in the same country, then you need to dial
    1. The _area access code_
    2. The _area code_
    3. The _subscriber number_
4. If you are in different countries, then you need to dial:
    1. The i_nternational access code_
    2. The _country code_
    3. The _area code_
    4. The _subscriber_ number. **Note**: When dialling internationally, you _always_ drop the _area access code_.

So.. Sounds simple, right? However there's a couple of other rules to keep in mind, however we need to explain the italicised terms above to complete the picture, then we'll explain everything with some examples.

A _country code_ is a code unique to each country. It is the code that essentially says "this number is in country X". Country codes are unique per country (kinda!) and is constant, everywhere.

An _area code_ used to suggest a geographic area where a number terminates. However, with cell numbers this makes less and less sense.  More on this later.

The _subscriber number_ will get to your phone (assuming the caller has done everything correct!)

The _area access code_ is a number you dial to essentially tell the nearest exchange that you want to dial outside of your own area. This depends on the country. It is often a single 0. I'm not aware of it being anything but this, but in theory it can be.  Maybe someone who reads this will let me know, and I'll update this post.

The _international access code_ is a number you dial to essentially tell the exchange that you want to dial outside of your own country. **It is worth remembering that different countries have different international access codes**.

So let's start with some local-ish examples.

The Dublin Area Code is "1" (but, nearly always referred to as the "01" area.  This is in fact the _area access code_ "0" plus the area code). Similarly, Cork's Area Code is "21", but always referred to as "021"

The area access code **_in Ireland_** is "0"

So imagine we have a person in Cork (Let's call him Conor), and their number is 1234567, we have another person in Cork (Let's call him Kev) 1234568, and a person in Dublin with a number of 7654321, we'll call her Rita.

If Conor is calling Kev from his phone, he dials just the subscriber number: 1234568. (We're applying point 2 in our initial list above). See note 3 below for more on this.

If Conor wishes to call Rita, he dials the area access code + her area code + her subscriber number. 017654321. (That is applying point 3 in our list above). Spacing this out for clarity it is 0 1 7654321. This is pretty much always shown as 01 7654321.

Similarly, if Rita wishes to call Conor, she'll dial 0 21 1234567.

Next, moving on to an international scenario. Imagine we have another person who is in Australia.  We'll call her Sheila. Sheila lives in Perth.  Australia's Country Code is "61", and Perth's Area code is "8". Sheila's number is 2233445

If Rita Wants to call Sheila, She'll dial: country access code + Australia Country Code + Area Code + Subscriber number. She'll dial 006182233445. We're applying point 4 above. Spacing it out it looks like: 00 61 8 2233445. **Eagle eyed readers will not there is no use of an area access code here. Remember. When dialling internationally, you drop that**.

If Sheila wants to call Rita, she'll dial 0011 353 1 7654321.  Wait.  Why doesn't that begin "00".  That's because Australia's _international access code_ is not "00" it is "0011". (That's why I bolded that above!)

However, we all use cellular phones these days, so the concept of "area code" seems silly. So, the terminology has changed somewhat. All of the rules still hold, but bear with me.  In international cellular terms, every person's number is a MSISDN.  This is a "Mobile Station International Subscriber Directory Number" and is made up of:

- A country code (as above).
- A _mobile destination code (MDC)_ (similar to area code)
- A Subscriber number.

There are obvious hangups from the old area code concept, but it ensures everything still works.  It used to mean at a time the MDC would typically indicate the network, but this has changed.  In Ireland for example the MDC for Vodafone was 87, Three's was 83, but this no longer holds. This is because people like to keep their numbers, and this was seen as an impediment to fair competition, so number portability was introduced.  To some extent, it can make the MDC feel redundant, but essentially it widens the addressable space for the number of numbers needed.

GSM did hand us one really useful concept though: The plus "+" character at the start of a number means "international access code" anywhere in the world, making it easier for you to dial internationally, no matter where you are ,without knowing the international access code.  Let me explain with an example:

If Rita in Ireland, and she was calling Sheila from her cell, she'd dial 00 61 8 2233445.  If Rita roams to Australia, she still has to make an international call to get Sheila, however 00 61 8 2233445 would not work, as the international access code in Australia is not "00", it is "0011" (remember?).  However conveniently, Rita can in fact call Sheila anywhere by dialling "+6182233445". Thanks GSM. We like this.

So let's talk formatting.

I like this format: +Country Code-Area Code-Subscriber Number.

Some people like: +Country Code-(area access code) Area Code-Subscriber Number.  This format gives an indication to people within your country how to call you, but it is subtle, and it leads to a common mistake listed later.

Here's our protagonists in both formats:

Conor:+353-21-1234567 or +353-(0)21-1234567

Kev: +353-21-1234568 or +353-(0)21-1234568

Rita: +353-1-7654321 or +353-(0)1-7654321

Sheila: +61-8-2233445 or +61-(0)8-2233445

Common Mistakes:

The most common mistakes I see are

1. People including their own access code when telling someone abroad how to call them.  For example, I often hear people saying "yes, to call me dial zero zero three five three....", or displaying their number in their signatures as "00353-...".  This is wrong because...yes! Different countries have different international access codes.
2. People including their area access code when calling out their international number.  For example saying "plus three five three zero one....", when they should have said "plus three five three one". This is why I have a personal preference for the first format mentioned above. It avoids this error.  I mean: within a country everyone instinctively knows the area access code. In fact, they think it forms part of the area code.
3. People including both their area code where their fixed line is and their mobile destination code when calling out their mobile number.  This is just a habit of having fixed lines for a long time, and mixing up all of the rules above.  This is when, they are from Dublin (area code 1), and have a 87 mobile number, but saying "plus three five three, one, eight seven".  This is wrong, and the number won't get to you.

Other notes:

1. Emergency numbers:  These vary country to country too: Ireland's emergency number is 999. The USA's is famously 911, Australia's is 000.  Again, the GSM consortium came good on this too.  Did you know if you dial 112 from any GSM device, it calls the local emergency number?  Thanks again GSM!
2. Sometime in history, the United States and Canada decided to share the same international code.  It is "1". I presume that this means a call from New York to Toronto is treated as a long-distance, rather than an international.  Then again, I'm sure the accountants got on that. But bear in mind: International Code "1" means "USA or Canada".
3. A couple of people pointed out to me on twitter: In the USA, you pretty much always use the area code. Even if you are calling someone in the same area code, you need to use it; this means in fact you use the area access code + area code +  subscriber number. I'd go as far as to say, this will probably work in most jurisdictions, but it is usually not necessary.

I hope this helps someone out there understand this stuff better.  If you want to provide feedback, drop us a note, and we'll make changes if necessary.

 

Image Credit: [User Markus P. on Flickr](https://www.flickr.com/photos/mpotify/)
