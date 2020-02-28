# What is this?

Conventional Comments is a method of writing comments so that the intent is clearly understood by human & mechanical readers.

# Okay... Can you show me some examples?

{{< comment author="alice" >}}
**suggestion:** Let's avoid using this specific function...

If we reference much of a function marked "Deprecated", it is almost certain to disagree with us, sooner or later.
{{< /comment >}}

{{< comment author="7ofspades" >}}
**issue (non-blocking):** These buttons should be red, but let's handle this in a follow-up.
{{< /comment >}}

# Oh, so you're just adding a label to your comments?

That's a big part of it. The official over-engineered specs are:

```
<type> [decoration]: <subject>

[discussion]
```

# So what labels do you use?

I'll expand on this later, but at the moment, we strongly suggest using:

- **nitpick:**
- **suggestion:**
- **issue:**
- **thought:**
- **question:**

And most importantly

- **praise:**
