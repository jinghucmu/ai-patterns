---
title: Index by what it covers
summary: Turn a long piece of content into a table of contents organized by the things in it, so a person can jump to the one they care about and skip the rest.
themes: [multimodal, accessibility]
stages: [ask]
example: Product Jumplinks
where: Amazon video shopping
added: 2026-10-10
order: 3
sources: [article-d]
related: [index-by-question, act-where-it-appears, make-mistakes-easy-to-catch]
---

## What users needed

People rarely came to a long piece of content wanting all of it. They arrived with one or two things already in mind and needed to get to those, fast. Dragging through the whole thing to find them was the single most common frustration, and the usual outcome was not to go through it all but to leave.

## The problem

A thirty-minute recording covers six things. The person is only interested in two of them. The scrubber, the scroll bar and the page count do not know where any of the six begins or ends, so the person drags back and forth hoping to land on the right one, or gives up and goes through all thirty minutes. The same is true of a long report, a recorded meeting or a lecture.

## The pattern

Let AI split the content into one segment per thing it covers and show that list as the content's table of contents. The person taps the item they care about and lands at the point where it starts. The rest is still there, but nobody has to sit through it.

## What makes it hard

Recognizing what is being covered is the easy part. The hard part is the real rhythm of how people make things: a speaker hops between subjects, comes back to compare two of them, drops in an unrelated aside, then returns to the first subject for a final verdict. A clean table of contents has to be built on top of that mess.

So the design question is not "how do we segment correctly" but "what happens when we don't". An automatically generated table of contents has to fail gracefully. The person should notice a wrong segment quickly, and should have an easy way to push back. That part is its own pattern: [Make mistakes easy to catch](../make-mistakes-easy-to-catch/).

## When it fails

A segment that starts in the wrong place sends the person to the wrong thing. If there is no obvious way to see that it is wrong, they assume the content never covered what they wanted and leave. The index gets blamed for a gap it created.

## The accessibility dividend

An index is a text outline of the content. Someone using a screen reader can hear the six items and choose one before anything plays. Someone on a slow connection can decide what to load. See [Structure is accessibility](../structure-is-accessibility/).

## In my work

Product Jumplinks give Amazon shopping videos a product-by-product table of contents: a thirty-minute comparison of six products becomes six places to jump to. I designed the index and how it behaves when the AI's segmentation does not match the video.
