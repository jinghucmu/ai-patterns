---
title: Index by product
summary: Turn a long video into a table of contents organized by the products in it, so a shopper can jump to the one they care about and skip the rest.
themes: [multimodal, shopping, accessibility]
stages: [ask]
example: Product Jumplinks
where: Amazon video shopping
added: 2026-10-10
order: 3
sources: [article-d]
related: [index-by-question, tap-what-you-see, make-mistakes-easy-to-catch]
---

## What users needed

Shoppers rarely came to a comparison video wanting all of it. They arrived with one or two products already in mind and needed to get to those, fast. Dragging the scrubber to find them was the single most common frustration, and the usual outcome was not to watch the whole video but to leave.

## The problem

A thirty-minute "cat bed showdown" compares six beds. The shopper is only deciding between two of them. The scrubber does not know where any bed begins or ends, so the shopper drags it back and forth hoping to land on the right one, or gives up and watches all thirty minutes.

## The pattern

Let AI split the video into one segment per product and show that list as the video's table of contents. The shopper taps the bed they care about and lands at the point where the creator starts talking about it. The other twenty-five minutes are still there, but nobody has to sit through them.

## What makes it hard

Recognizing which product is on screen is the easy part. The hard part is the real rhythm of how people edit: a creator hops between products, comes back to compare two of them side by side, drops in an unrelated aside, then returns to the first product for a final verdict. A clean table of contents has to be built on top of that mess.

So the design question is not "how do we segment correctly" but "what happens when we don't". An automatically generated table of contents has to fail gracefully. The shopper should notice a wrong segment quickly, and should have an easy way to push back. That part is its own pattern: [Make mistakes easy to catch](../make-mistakes-easy-to-catch/).

## When it fails

A segment that starts in the wrong place sends the shopper to the wrong bed. If there is no obvious way to see that it is wrong, they assume the creator never covered what they wanted and leave. The index gets blamed for a gap it created.

## The accessibility dividend

A product index is a text outline of a video. Someone using a screen reader can hear the six beds and choose one before any video plays. Someone on a slow connection can decide what to load. See [Structure is accessibility](../structure-is-accessibility/).

## In my work

Product Jumplinks give Amazon shopping videos a product-by-product table of contents. I designed the index and how it behaves when the AI's segmentation does not match the video.
