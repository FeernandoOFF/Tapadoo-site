# Tapadoo Site

This site is based on the [figma designs ](<https://www.figma.com/file/iRMtFZO0FTO1UjduelfEAm/tapadoo-(Copy)?node-id=0%3A1>)

## Change content

I've created JSON file where almost all the content is divided by sections. By changing this file and rebuilding the site you'll see the changes on the site

```
site-data.json
```

## Blog

The blog is created on build time and it gets his data from `md files` stored in the `posts/` folder

### Featured post

In the `site-data` file `blog:featured` you can set the `fileName` this has to match the file within the `posts/` folder also you can set a extract to show why is the post important to read

### Blog post template

```
---
postImage: https://2upm2b1wdft320vzjj34rpga-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/A_B-Testing-Tools.png.webp
title: '3 Best Mobile App A/B Testing Tools'
date: '2020-09-07'
categories:
  - 'marketing'
---

## Text

blogpost text....

#### Links
![](image.png)

[link](https://google.com)

### Lists
 - this
 - is
 - a list

```

## Publishing changes

If you make changes either in the page content or you add a new blog post. You only have to make sure to trigger the github action (make a commit into main)
