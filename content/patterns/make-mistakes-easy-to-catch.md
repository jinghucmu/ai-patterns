---
title: Make mistakes easy to catch
summary: Assume the AI will be wrong some of the time, and design so the shopper notices quickly and can push back with almost no effort.
themes: [multimodal, shopping, accessibility]
stages: [check, decide]
example: Product Jumplinks, Topic Jumplinks
where: Amazon video shopping
added: 2026-10-10
order: 7
sources: [article-d]
related: [index-by-product, ask-answer-check-decide, say-i-dont-know]
---

## What users needed

Shoppers did not report errors. A form, a feedback link or a settings page was never used; a wrong segment or a wrong marker was simply blamed on the product and remembered. What they needed was to be able to see a mistake at a glance and to push back right there, without leaving what they were doing.

## The problem

Every AI feature on this site mis-fires sometimes: a segment that starts in the wrong place, a marker on the wrong product, a topic that lands on the wrong seconds. The question is not whether that happens but what the shopper experiences when it does. If a wrong result looks exactly like a right one, the shopper finds out too late and blames the product.

## The pattern

Design the error path with the same care as the happy path. Make the AI's output legible enough that a wrong result looks wrong: show what the AI thinks a segment is about next to what the video is actually showing, so the mismatch is visible at a glance. Then give the shopper an easy, in-place way to say so, and let that correction do something.

Graceful failure is a feature of the design, not of the model.

## What makes it hard

Error reporting is usually designed as a form, far from the moment of the error, and nobody fills it in. The correction has to live where the mistake is noticed, cost one gesture, and not interrupt what the shopper was doing. It also has to be honest about what happens next: a correction that disappears into nothing trains people to stop correcting.

## When it fails

A hidden mistake is a trust failure that compounds. A correction path that is heavy or far away is a mistake the shopper carries alone. The worst version is a confident presentation of a wrong result with no visible way to disagree.

## The accessibility dividend

A result that is legible enough to be checked is a result that can be described in text, which is also what a screen reader needs. Error paths that work with one gesture tend to work with one key.

## In my work

Product Jumplinks and Topic Jumplinks both build an automatic table of contents from a real, messy edit, so both are designed to fail gracefully: the shopper can see when a segment does not match and can push back easily. I designed those paths alongside the indexes themselves.
