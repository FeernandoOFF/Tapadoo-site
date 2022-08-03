---
title: "EC2 instances and how to prevent unexpected bills"
date: "2019-02-11"
---

The benefits of [Cloud Computing](https://aws.amazon.com/what-is-cloud-computing/) and on-demand computing environments are pretty well known.

One such service is [EC2](https://aws.amazon.com/ec2/) from Amazon, which allows business subscribers to run application programs in the computing environment. The EC2 serves as an almost unlimited set of virtual machines.

This is a great service for just a few dollars a day. However, sometimes due to a simple oversight we can be burdened with large unexpected bills by forgetting to shut down a virtual server.

## Running an EC2 instance

As developers, we sometimes need to run an EC2 instance to run some temporary workloads. We do this because these workloads need more resources than what’s available on our developer machine. It’s generally for a process that needs a massive amount of RAM, like when testing data transformation for an in-memory database.

It’s amazing that we have such massive compute power on-demand for a few dollars a day. However, sometimes those few dollars a day, can become a headache at the end of the month.

We might need the big instance for four or five hours work. We complete the job, validate the results and congratulate ourselves on a job well done. But, we go home and forget to stop the instance.

This can result in the aforementioned unexpected bills.

## Preventing unexpected bills with EC2

What would be the simplest way to resolve this without investing too much time and effort into it?

Could we launch a self-stopping instance?

A search led us to [this Stack Overflow answer](https://stackoverflow.com/a/38186787/125629):

$ echo '#!/bin/sh' > per-boot.sh
$ echo 'echo "halt" | at now + 1 hour' >> per-boot.sh
$ echo 'echo per-boot: \`date\` >> /tmp/per-boot.txt' >> per-boot.sh
$ chmod +x per-boot.sh
$ sudo chown -R root per-boot.sh
$ sudo mv -viu per-boot.sh /var/lib/cloud/scripts/per-boot

This introduced us to [Cloud-Init](https://cloudinit.readthedocs.io/en/latest/) “the defacto multi-distribution package that handles early initialization of a cloud instance.”

An investigation into Cloud-Init and [EC2 User-Data](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html) led us to our solution.  Use the following as the instance User-Data before launching the instance:

#cloud-config
cloud\_final\_modules:
- \[scripts-user, always\]
runcmd:
- 'echo "per-boot start: \`date\`" >> /tmp/per-boot.txt'
- 'echo "sudo shutdown now" | at now + 1 hour'

The first `runcmd` runs every time the instance is booted and appends a timestamp to a simple log file. By inspecting this file, you'll be able to see how many times the instance has been started, and you can easily see the last time it started too.

The second `runcmd` schedules the `shutdown` command to run in one hours time. We’re using the [at command](https://www.computerhope.com/unix/uat.htm) to schedule the call. This is a very versatile command and gives you plenty of scope to tailor how long you want your instance to run.

We have tested this `User-Data` on Ubuntu 16.10 and Amazon Linux 2 images. For it to work on Debian 9 you will need to have the \`at\` command installed so an additional \`runcmd\` is needed:

\- 'apt-get install -y at'

Hopefully, this is straight-forward enough to save forgetful humans (like me) some money.

John Keyes

Server Side Developer
