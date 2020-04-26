---
title: "Conventional Comments"
---

Comments like this are unhelpful...
{{< comment author="caterpillar" >}}
This is not worded correctly.
{{< /comment >}}

By simply prefixing the comment with a label, the intention is clear and the tone dramatically changes.
{{< comment author="caterpillar" >}}
**suggestion:** This is not worded correctly.
{{< /comment >}}
{{< comment author="caterpillar" >}}
**nitpick (non-blocking):** This is not worded correctly.
{{< /comment >}}

Labels also prompt the reviewer to give more **actionable** comments.
{{< comment author="caterpillar" >}}
**suggestion:** This is not worded correctly.

Can we change this to match the wording of the marketing page?
{{< /comment >}}

Labeling comments saves **hours** of undercommunication and misunderstandings. They are also parseable by machines!

## More examples

{{< comment author="alice" >}}
**suggestion:** Let's avoid using this specific function...

If we reference much of a function marked "Deprecated", it is almost certain to disagree with us, sooner or later.
{{< /comment >}}

{{< comment author="7ofspades" >}}
**issue (non-blocking):** These buttons should be red, but let's handle this in a follow-up.
{{< /comment >}}

## Format

Adhering to a consistent format improves reader's expectations and machine readability.
Here's the format we propose:

```
<label> [decoration]: <subject>

[discussion]
```

- *label* - This is a single label that signifies what kind of comment is being left.
- *subject* - This is the main message of the comment.
- *decoration (optional)* - This is an extra decorating label for the comment.
- *discussion (optional)* - This contains supporting statements, context, reasoning, and anything else to help communicate the "why" and "next steps" for resolving the comment.

## Labels

Feel free to use whatever labels work for your organization, but we strongly suggest using:

| Label | Description |
|-------|-------------|
| **praise:** |     |
| **nitpick:** |    |

- It's important that this list is constrained. 

I'll expand on this later, but at the moment, we strongly suggest using:

- **nitpick:**
- **suggestion:**
- **issue:**
- **thought:**
- **question:**

And most importantly

- **praise:**

## Prior art

- [Conventional Commits](https://www.conventionalcommits.org)
