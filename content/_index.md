Conventional Comments is a system of written communication so that the author's intent is clearly understood by human & mechanical readers.

{{< comment author="alice" >}}
**suggestion:** Let's avoid using this specific function...

If we reference much of a function marked "Deprecated", it is almost certain to disagree with us, sooner or later.
{{< /comment >}}

{{< comment author="7ofspades" >}}
**issue (non-blocking):** These buttons should be red, but let's handle this in a follow-up.
{{< /comment >}}

## But why?

Imagine **@mhare** is leaving a code review comment on **@alice**'s recent changes.

{{< comment author="alice" >}}
Can you word this differently?
{{< /comment >}}

Simply prefixing a label completely changes the tone and the intent is much clearer!

{{< comment author="alice" >}}
**nitpick:** Can you word this differently?
{{< /comment >}}

{{< comment author="alice" >}}
**question (non-blocking):** Can you word this differently?
{{< /comment >}}

By labeling and constraining our comments, we are also prompted to leave better comments.

## Oh, so you're just adding a label to your comments?

That's a big part of it. The official over-engineered specs are:

```
<type> [decoration]: <subject>

[discussion]
```

## So what labels do you use?

I'll expand on this later, but at the moment, we strongly suggest using:

- **nitpick:**
- **suggestion:**
- **issue:**
- **thought:**
- **question:**

And most importantly

- **praise:**
