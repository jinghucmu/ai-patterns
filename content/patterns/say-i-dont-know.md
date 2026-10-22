---
title: Say "I don't know"
summary: Decide, as a design matter, when the AI should answer with confidence and when it should admit it has nothing, because trust lives on the line between the two.
themes: [multimodal, shopping]
stages: [answer]
example: Multimodal Alexa, generated video answers
where: Amazon shopping assistant
added: 2026-10-10
order: 6
sources: [article-d]
related: [show-the-seconds-that-answer, ask-answer-check-decide, make-mistakes-easy-to-catch]
---

## What users needed

Shoppers were quick to forgive an assistant that said it could not help and slow to forgive one that answered confidently and was wrong. A fluent answer with nothing behind it cost more trust than silence. But an assistant that refused too often was abandoned just as quickly, so what people needed was an honest line between the two.

## The problem

Sometimes the library has no clip that answers the question. A generative model can produce a new video segment to help the shopper decide. That is powerful, and it is also the moment where an AI shopping assistant can do the most damage: a confident, fluent answer with nothing behind it.

## The pattern

Treat the boundary between "answer" and "I don't know" as something the design owns, not something the model decides on its own. Define the situations where the AI should confidently generate, the situations where it should fall back to existing evidence, and the situations where the right answer is to say it cannot help, and make each of those three outcomes look different to the shopper.

The thin line between confident and humble is where almost all of a shopper's trust lives.

## What makes it hard

Models are built to produce an answer. Designing a good "I don't know" means designing a moment that feels like a dead end and making it useful anyway: what the shopper can ask instead, what the AI does know, where else to look. It also means resisting the pressure to generate something because the capability exists.

## When it fails

A generated answer that is wrong is worse than no answer, because it is persuasive. A refusal that is too frequent or too blunt teaches the shopper the assistant is useless. The design has to find the narrow path between those two, and it has to keep finding it as the model changes.

## In my work

The multimodal version of Alexa can generate a video answer when existing videos cannot answer a shopper's question. I designed when it should do that, when it should not, and how the two cases differ on screen.
