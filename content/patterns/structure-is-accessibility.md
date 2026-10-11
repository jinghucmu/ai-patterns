---
title: Structure is accessibility
summary: The structure AI adds to a video so it can be asked is the same structure that makes it work without sound, without pictures or without a mouse. Build it as the foundation, not a patch.
themes: [multimodal, accessibility]
stages: [ask, answer, check, decide]
example: Video Hotspots, Product Jumplinks, Topic Jumplinks, multimodal Alexa
where: Amazon video shopping
added: 2026-10-10
order: 8
sources: [article-d]
related: [index-by-product, index-by-question, tap-what-you-see]
---

## The problem

Most people do not connect AI video shopping with accessibility. Video is the least accessible medium a store has: a black box of pixels and sound that a screen reader cannot read, a keyboard cannot navigate and a slow connection cannot load. Accessibility work on video usually arrives after launch, as captions and a fix list.

## The pattern

Notice what every AI video feature is doing underneath. Markers in the frame, a product index, a topic index and clip answers are all the same operation: they take information that was hidden inside a video and make it structured, readable and askable.

Once a video has structure, it is naturally friendlier to screen readers, to silent viewing, to keyboard navigation, to low-bandwidth connections, to older users and to people with cognitive differences. So design the structure first, as the foundation of the product, and let both the AI features and the accessibility fall out of it.

## What makes it hard

Nobody argues against this; they just schedule it later. The structure has to be a requirement of the AI feature itself, something the feature cannot ship without, or it becomes the accessibility team's problem after the fact. It also has to be real structure, exposed to assistive technology, not visual structure painted onto the player.

## When it fails

A product index that is only a row of thumbnails, a marker that is only a graphic, a clip with no text behind it: each one is an AI feature that quietly rebuilt the black box it was meant to open.

## In my work

I like designing for as many senses as possible: operating a video with the keyboard alone, making sense of one with no sound, or making sense of one with no picture. Designing from a new angle is a fresh way of living. When we open our thinking with that kind of inclusiveness, we find something simple: the best accessibility design is the best design for everyone. In the video shopping work on this site, that was where we started.
