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

## Examples

{{< comment author="alice" >}}
**suggestion:** Let's avoid using this specific function...

If we reference much of a function marked "Deprecated", it is almost certain to disagree with us, sooner or later.
{{< /comment >}}

{{< comment author="7ofspades" >}}
**issue (non-blocking):** These buttons should be red, but let's handle this in a follow-up.
{{< /comment >}}

## Target audience

This is intended for giving any kind of review/feedback, such as:

- [Code review](https://en.wikipedia.org/wiki/Code_review)
- [Peer review](https://en.wikipedia.org/wiki/Peer_review)
- [Revising](https://en.wikipedia.org/wiki/Revision_(writing)) and [editing](https://en.wikipedia.org/wiki/Editing)
- [RFC](https://en.wikipedia.org/wiki/Request_for_Comments)

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

We strongly suggest using the following labels:

|                 |             |
|-----------------|-------------|
| **praise:**     | Praises highlight something positive. Try to leave at least one of these comments per review. |
| **nitpick:**    | Nitpicks are small, trivial, but necessary changes. Distinguishing nitpick comments significantly helps direct the reader's attention to comments requiring more involvement. |
| **suggestion:** | Suggestions are specific requests to improve the subject under review. It is assumed that we all want to do what's best, so these comments are never dismissed as "mere suggestions", but are taken seriously. |
| **issue:**      | Issues represent user-facing problems. If possible, it's great to follow this kind of comment with a **suggestion**. |
| **question:**   | Questions are appropriate if you have a potential concern but are not quite sure if it's relevant or not. Asking the author for clarification or investigation can lead to a quick resolution. |
| **thought:**    | Thoughts represent an idea that popped up from reviewing. These comments are non-blocking by nature, but they are extremely valuable and can lead to more focused initiatives and mentoring opportunities. |
| **chore:**      | Chores are simple tasks that must be done before the subject can be "officially" accepted. These comments usually highlight that some manual process is missing. Try to leave a link to the process so that the reader knows how to resolve the chore. |

Feel free to diverge from this specific list of labels if it seems appropriate.

## Review Best Practices

These will be expanded later, but for now, here are some best practices for writing helpful review feedback:

- Mentoring pays off exponentially
- Leave actionable comments
- Combine similar comments
- Replace "you" with "we"

## Want to help make this better?

Check out the [GitLab project](https://gitlab.com/conventionalcomments/conventionalcomments.gitlab.io) for this site. 
Issues and Merge Requests are welcome!

## Prior art

- [Conventional Commits](https://www.conventionalcommits.org)
- [Google Engineering Practices](https://github.com/google/eng-practices/blob/57c895ad4b09c8941288c04e44a08797b76b4d4d/review/reviewer/standard.md#mentoring)
