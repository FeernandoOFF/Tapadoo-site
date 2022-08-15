---
postImage: https://2upm2b1wdft320vzjj34rpga-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/apple-black-and-white-black-and-white-169573.jpg.webp
title: "Swift JSON Date Formatting"
date: "2019-07-29"
categories: 
  - "development"
tags: 
  - "ios"
  - "swift"
---

Confused by fractional components appearing in your JSON when using unix timestamps?

See the custom formatters below for a way to get back to integers if that's what you need for your API

JSON is the de facto way of sending and receiving data from APIs these days. And for iOS developers, Swift has made things easier in recent years with the introduction of Codable. Codable is a way to quickly encode and decode objects to and from JSON. The defaults are pretty good, and the options like key decoding strategy to auto convert from snake case to camel case has been a blessing.

However, one place where the defaults seem oddly incorrect is Date properties. The default JSON date format output is not very helpful. Take the following playground for example.

```
import UIKit

/////////////////////////////////////////////////////////////

let event = Event(name: "Test Event", widgetCount: 10, timestamp: Date())
print(event)
printJson(event)

/////////////////////////////////////////////////////////////

struct Event: Codable {

    let name: String
    let widgetCount: Int
    let timestamp: Date

}

extension Event: CustomDebugStringConvertible {
    var debugDescription: String {
        return "[\(timestamp)] \(name)"
    }
}


func printJson<T: Encodable>(_ obj: T) throws {
    let enc = JSONEncoder()
    enc.outputFormatting = [.prettyPrinted , .sortedKeys]

    let jsonData = try enc.encode(obj)
    let jsonString = String(data: jsonData, encoding: .utf8)

    print(jsonString!)
}
```

The output is the following, a debug print out and the json print out:

```
[2019-04-24 16:06:09 +0000] Test Event
{
  "name" : "Test Event",
  "timestamp" : 577814769.81546402,
  "widgetCount" : 10
}
```

The JSON date format for a `Date` got the value of `577814769.81546402`. This almost looks like a unix epoch timestamp, but if you put it into an online converter it'll come out as 04/23/1988 @ 4:06pm.

It's not a unix timestamp. It's actually using a different reference date - 2001 instead of 1970. This might be fine for Foundations internals, CoreData, etc. But in all my years of communicating with APIs of varying degrees, I've never once seen a Remote API Spec that used that as a reference date.

## Changing The Default Format

If you need to use a different format for only a single property, you may need to implement a custom `encode(to encoder: Encoder)` function, or use an intermediary model object. But ideally you are using the same JSON date format across all date properties in which case changing the format of the Date in the JSON is easy enough. `JSONEncoder` has a `dateEncodingStrategy` which [supports several formats](https://developer.apple.com/documentation/foundation/jsonencoder/dateencodingstrategy)

JSONEncoder can be configured like so:

```
let enc = JSONEncoder()
    enc.outputFormatting = [.prettyPrinted , .sortedKeys]

    //Like this
    enc.dateEncodingStrategy = .iso8601

    //OR this
    enc.dateEncodingStrategy = .secondsSince1970

    //or this (but not really)
    let sillyFormatter = DateFormatter()
    sillyFormatter.locale = Locale(identifier: "en_US_POSIX")
    sillyFormatter.dateFormat = "EEEE, MMM d, yyyy 'at' HH:mm"
    enc.dateEncodingStrategy = .formatted(sillyFormatter)
```

and would now give an output like so:

```
// Or
{
  "name" : "Test Event",
  "timestamp" : "2019-04-25T11:07:19Z",
  "widgetCount" : 10
}

// Or
{
  "name" : "Test Event",
  "timestamp" : 1556190419.3267961,
  "widgetCount" : 10
}

// Or
{
  "name" : "Test Event",
  "timestamp" : "Thursday, Apr 25, 2019 at 11:55",
  "widgetCount" : 10
}
```

The first example, iso8601 is pretty common (and what you should probably use if you control both client and server).

The second example is a unix epoch timestamp.

The 3rd example is a bit silly - it's extremely unlikely that an API server would be expecting dates formatted like this. But if you did need to customise the date string, that's the easiest way to do it.

## Custom Formats

But focusing on the second example, the unix timestamp. A value of `1556190419.3267961` is a little unusual to me personally, as I’m not used to seeing the fractional component. To me, unix time stamps are integers. And some API designers out there seem to think the same. While some APIs do use this format, slacks API for example return timestamps like this - but some APIs may not like this.

If you have control over the API or can suggest changes ideally use this decimal format, it's more accurate. But if the API is out of your control, you may need to ensure it's an integer and not a decimal in your request, you can use a custom formatter like so:

```
    let enc = JSONEncoder()
    enc.outputFormatting = [.prettyPrinted , .sortedKeys]

    enc.dateEncodingStrategy = .custom({ date, encoder in
        let seconds = Int(date.timeIntervalSince1970)
        var singleValueEnc = encoder.singleValueContainer()
        try singleValueEnc.encode(seconds)
    })
```

which gives us:

```
{
  "name" : "Test Event",
  "timestamp" : 1556205171,
  "widgetCount" : 10
}
```

Now our integer assuming API won't be complaining.

This custom encoder approach would allow us to also represent dates as a completely different structure if needs be, without having to have our Event struct and all other model classes in our application being written using something other than the Date class:

```
func encodeDateAsObject(_ date: Date, _ encoder: Encoder) throws {

    enum DateParts: CodingKey {
        case year,month,day,hour,minute,second
    }

    var container = encoder.container(keyedBy: DateParts.self)

    var cal = Calendar(identifier: .gregorian)
    cal.locale = Locale(identifier: "en_US_POSIX")
    cal.timeZone = TimeZone(identifier: "UTC")!

    let dateComponents = cal.dateComponents([.year,.month,.day,.hour,.minute,.second], from: date)

    try container.encode(dateComponents.year!, forKey: DateParts.year)
    try container.encode(dateComponents.month!, forKey: DateParts.month)
    try container.encode(dateComponents.day!, forKey: DateParts.day)
    try container.encode(dateComponents.hour!, forKey: DateParts.hour)
    try container.encode(dateComponents.minute!, forKey: DateParts.minute)
    try container.encode(dateComponents.second!, forKey: DateParts.second)
}

// and then

    let enc = JSONEncoder()
    enc.outputFormatting = [.prettyPrinted , .sortedKeys]
    enc.dateEncodingStrategy = .custom(encodeDateAsObject)
```

This results in the following output being used for our API, while our `Event` struct continues to keep its property defined as `timestamp: Date` :

```
{
  "name" : "Test Event",
  "timestamp" : {
    "day" : 25,
    "hour" : 15,
    "minute" : 22,
    "month" : 4,
    "second" : 48,
    "year" : 2019
  },
  "widgetCount" : 10
}
```

## Default Locale Issues

As an aside, it's worth noting the use of `en_US_POSIX` as a locale for the formatter in the examples above. There's a good chance the API server is expecting timestamps to be in UTC time rather than a specific local time, and also expects 24hr time, Gregorian calendar, etc.

If the locale is left as a default, behaviour might not be as expected depending on device settings. The lack of a fixed, server-specific locale when encoding data for APIs or decoding data from APIs is a common cause of issues we've encountered in the past. And if you are developing code in a location like Ireland where most people use 24hr clocks and are in UTC time zone for half the year it's very easy to slip by unnoticed.

Apple have a tech note specifically about this: [https://developer.apple.com/library/archive/qa/qa1480/\_index.html](https://developer.apple.com/library/archive/qa/qa1480/_index.html)

This applies only to formats for communication between machines like a phone and a remote API server. For displaying dates to the user, you are usually best served by using the users default locale.

## Other Resources

For other resources on date formatting & Swift codables, see:

- https://nsdateformatter.com/
- https://developer.apple.com/documentation/foundation/archives\_and\_serialization/encoding\_and\_decoding\_custom\_types
- https://www.swiftbysundell.com/basics/codable
- https://developer.apple.com/library/archive/qa/qa1480/\_index.html

Jason Connery
