## Examples

{{< comment author="alice" >}}
**suggestion:** Let's avoid using this specific function...

If we reference much of a function marked "Deprecated", it is almost certain to disagree with us, sooner or later.
{{< /comment >}}

{{< comment author="7ofspades" >}}
**issue (non-blocking):** These buttons should be red, but let's handle this in a follow-up.
{{< /comment >}}

## Oh, so you're just adding a label to your comments?

That's a big part of it. The official over-engineered specs are:

```
<type> [decoration]: <subject>

[discussion]
```

## The effect

Imagine **@mhare** is leaving a code review comment on **@alice**'s recent changes.

{{< comment author="mhare" >}}
Can you word this differently?
{{< /comment >}}

Simply prefixing a label completely changes the tone and the intent is much clearer!

{{< comment author="mhare" >}}
**nitpick:** Can you word this differently?
{{< /comment >}}

{{< comment author="mhare" >}}
**question (non-blocking):** Can you word this differently?
{{< /comment >}}

By labeling and constraining our comments, we are also prompted to leave better comments.


## Suggested labels

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
