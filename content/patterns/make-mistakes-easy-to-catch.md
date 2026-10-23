---
title: Make mistakes easy to catch
summary: Assume the AI will be wrong some of the time, and design so the person notices quickly and can push back with almost no effort.
themes: [multimodal, accessibility]
stages: [check, decide]
example: Product Jumplinks, Topic Jumplinks, multimodal Alexa
where: Amazon video shopping
added: 2026-10-10
order: 13
sources: [article-d]
related: [index-by-what-it-covers, answer-with-a-few-not-one, each-choice-narrows-the-next]
shots:
  - file: alexa-helpful-not-helpful.png
    alt: "A full-screen video with Helpful and Not helpful buttons at the top, Not helpful selected."
    caption: "Two buttons on the thing itself, while the person is still looking at it."
  - file: alexa-feedback-sheet.png
    alt: "A sheet over the video titled \"Please help us improve! Why is this video not helpful?\", with checkboxes such as \"Did not answer my question\", \"Missing important details\" and \"Incorrect starting point in the video\", and Cancel and Submit buttons."
    caption: "One more tap says what kind of wrong it was. The options are the failures the design knows it can have."
---

## What users needed

People did not report errors. A form, a feedback link or a settings page was never used; a wrong segment or a wrong marker was simply blamed on the product and remembered. What they needed was to be able to see a mistake at a glance and to push back right there, without leaving what they were doing.

## The problem

Every AI feature on this site mis-fires sometimes: a segment that starts in the wrong place, a marker on the wrong thing, a topic that lands on the wrong passage. The question is not whether that happens but what the person experiences when it does. If a wrong result looks exactly like a right one, the person finds out too late and blames the product.

## The pattern

Design the error path with the same care as the happy path. Make the AI's output legible enough that a wrong result looks wrong: show what the AI thinks a segment is about next to what the content is actually showing, so the mismatch is visible at a glance. Then give the person an easy, in-place way to say so, and let that correction do something.

Tie the correction to the exact piece that was wrong, not to the whole answer. "Not helpful" on one excerpt teaches the system something; "not helpful" on a page of them teaches it nothing. When the person is willing to say more, offer the kinds of wrong the design knows it can produce (did not answer the question, missing details, started in the wrong place) as choices, so the correction is specific enough to act on.

Graceful failure is a feature of the design, not of the model.

## What makes it hard

Error reporting is usually designed as a form, far from the moment of the error, and nobody fills it in. The correction has to live where the mistake is noticed, cost one gesture, and not interrupt what the person was doing. It also has to be honest about what happens next: a correction that disappears into nothing trains people to stop correcting.

## When it fails

A hidden mistake is a trust failure that compounds. A correction path that is heavy or far away is a mistake the person carries alone. The worst version is a confident presentation of a wrong result with no visible way to disagree.

## The accessibility dividend

A result that is legible enough to be checked is a result that can be described in text, which is also what a screen reader needs. Error paths that work with one gesture tend to work with one key.

## In my work

Product Jumplinks and Topic Jumplinks both build an automatic table of contents from a real, messy edit, so both are designed to fail gracefully: the person can see when a segment does not match and can push back easily. In the multimodal version of Alexa, each video answer carries its own Helpful and Not helpful buttons, shown while the video plays, and a short sheet of reasons for the people who want to say why. The signal is tied to the exact video, not the whole answer, which is what the model needs to learn from it, and shoppers can see that the product is listening.
