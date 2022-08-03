---
title: "Regular problem with XML to JSON Converters"
date: "2011-02-22"
categories: 
  - "development"
  - "iphone"
  - "iphonedev"
---

Here at tapadoo, we've done a number of apps which communicate with back end data servers. Typically this means a RESTful API with JSON or XML payloads. There's one issue we've come across on a number of projects, where we're dealing with an existing Web API which is presenting the payloads in JSON. The problem is where arrays are incorrectly serialized in certain cases. Specifically we've seen:

- When an array has more than 1 entry, it is serialized correctly
- When the array has only 1 entry, it is serialized not as an array, but as a single dictionary.

**Firstly, lets explain why this has occurred** If you consider the following XML:

<team>
    <employee>
      <name>Joe</name>
      <surname>Bloggs</surname>
  </employee>
  <employee>
    <name>Jane</name>
    <surname>Doe</surname>
  </employee>
</team>

A typical XML to JSON converter will convert this as follows:

{
  team:{
    employee:\[
      {
        name:'Joe',
        surname:'Bloggs'
      },
      {
        name:'Jane',
        surname:'Doe'
      }
    \]
  }
}

I.e It is converted to a Dictionary, with a key called 'team' whose value is a Dictionary, with a key called 'employee' which is an array of Dictionaries (with keys of 'name' and 'surname').

Great. However if the XML was a team with a single entry:

<team>
    <employee>
      <name>Joe</name>
      <surname>Bloggs</surname>
  </employee>
</team>

The XML to JSON converter has no context on Employee. It has now way of knowing that this is potentially a repeating group (especially if it has no XSD to consult), so it converts the XML to the following JSON:

{
  team:{
    employee:{
      name:'Joe',
      surname:'Bloggs'
    }
  }
}

So, this is now a Dictionary, with a key called 'team' whose value is a dictionary with a key called 'employee' whose value is a Dictionary.

The problem here is when we go to parse, we expect the value of 'employee' to be an array (which it isn't), and this can lead to problems in the code.

And..due to Objective-C loose approach to type, the following code will run: `NSArray *array = [teamDict objectForKey:@"employee"];`

In those cases where there team has a number of employees, the above code works fine, and the pointer, array stores an array. In those cases where a team as a single employee, the above code runs, however the pointer, array will actually point to a NSDictionary. So the following code (for example) `int numEntries = [array count];` Will sometimes work, and sometimes lead to a runtime error, which on iPhone will manifest itself as a crash.

**So how do we fix this?** Well, if you have control over the server side, the simple question is to fix it in the first place. Note: This is a common problem with JAXB, a popular java XML binding mechanism often used in REST services written in Java. We've come across some examples on how to work around it [here](http://forums.netbeans.org/post-68036.html) and [here](http://jersey.576304.n2.nabble.com/Single-Element-Arrays-and-JSON-td5532105.html).

If you have no control over this, you may be able to handle this in your Objective-C code. Here's some sample code we've started to use; It checks the data type at runtime, and if necessary, converts it to a single element array

+(NSArray \*) getArrayFromJSONDictionary:(NSDictionary \*)parent 
               forKey:(NSString \*)key {
  id obj = \[parent objectForKey:key\];
  if(\[obj isKindOfClass:\[NSArray class\]\]) {
    return obj;
  }
  if(\[obj isEqual:\[NSNull null\]\]) {
    NSLog(@"Warning: object for key %@ is null", key);
    // Return an empty array
    return \[\[\[NSArray alloc\] init\] autorelease\];
  }
  NSLog(@"Warning object for key %@ is of type %@",
        key, \[\[obj class\] description\]);
  NSArray \*ret = \[NSArray arrayWithObject:obj\];
  return ret;
}
