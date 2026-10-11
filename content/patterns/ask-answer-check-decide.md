---
title: Ask, answer, check, decide
summary: Design the whole chain from a shopper's question to their decision as one flow. Break any link and trust in the assistant is hollowed out.
themes: [multimodal, shopping]
stages: [ask, answer, check, decide]
example: Multimodal Alexa
where: Amazon shopping assistant
added: 2026-10-10
order: 1
sources: [article-d]
related: [show-the-seconds-that-answer, say-i-dont-know, make-mistakes-easy-to-catch]
---

## The problem

It is tempting to design an AI assistant one screen at a time: the input box, the answer card, the product button. But a shopper does not experience screens. They experience a single question and whether it got them to a purchase they feel good about.

## The pattern

Design the flow end to end:

1. **Ask.** The shopper puts a question, in their own words or by pointing at something.
2. **Answer.** The AI returns something: a clip, a set of segments, a generated explanation, a product.
3. **Check.** The shopper examines the evidence behind the answer and decides whether to believe it.
4. **Decide.** The shopper acts: buys, keeps looking, or tells the AI it was wrong.

Every pattern on this site serves one or more of these four stages, and each pattern page shows which. The chain is the thing being designed; the individual components are how.

## What makes it hard

The stages belong to different teams, different models and different parts of the interface, so nobody owns the whole chain unless the designer does. The questions that matter are not about button size and placement. They are: in which moments should the AI answer confidently and in which should it say it does not know; when it answers, how is the evidence shown so the shopper can build trust; when it is wrong, how does the shopper notice with the least friction and correct it; and when an answer crosses text, images, video clips and buttons, how should that information flow.

None of those can be solved with a prompt. They need empathy for real shoppers, a feel for business constraints, a hold on the design system as a whole, and someone willing to stand watch on the shopper's behalf.

## When it fails

Any one broken link hollows out the rest. A perfect clip that cannot be checked, or a checkable clip with no way to act on it, or an action with no way to say "that was wrong", each leaves the shopper less willing to ask next time.

## In my work

This is the chain I was really designing when I worked on the multimodal version of Alexa, Amazon's AI shopping assistant. The clip answers, the generated answers and the correction paths are the links in it.
