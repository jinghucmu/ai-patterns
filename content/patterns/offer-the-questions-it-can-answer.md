---
title: Offer the questions it can answer
summary: Start from the evidence the AI actually has, generate the questions that evidence answers well, and offer those, instead of inviting any question and failing on the ones it cannot answer.
themes: [multimodal]
stages: [ask]
example: Multimodal Alexa
where: Amazon's AI shopping assistant
added: 2026-10-22
order: 4
sources: [article-d]
related: [say-i-dont-know, answer-with-a-few-not-one, index-by-question]
shots:
  - file: alexa-suggested-questions.png
    alt: "A product page for a sofa with a row of suggested question chips along the bottom, such as \"Show me similar products\" and \"How soft is this sofa?\", one of them highlighted."
    caption: "The questions on offer are the ones the available videos answer well. A person can still type their own."
  - file: alexa-evidence-first.png
    alt: "A diagram contrasting two approaches. Question-first, labelled traditional: existing questions go to an AI model, which returns video answers, with an unhappy face. Evidence-first: high-quality videos go to the AI model, which generates questions, with a happy face and the note \"higher precision, less compute\"."
    caption: "Two ways to connect questions and evidence. Starting from the evidence raises precision and costs less."
---

## What users needed

People did not know what they could ask. Faced with an open question box, they either asked nothing or asked something the system could not answer well and judged it on that. What they needed was a short set of questions they would plausibly have, each of which led to a good answer.

## The problem

The natural design for an AI assistant is an open box: ask anything. But the system can only answer well where it has evidence, and its precision on arbitrary questions is limited; even a strong model gets a real share of them wrong. Every question that lands outside the evidence produces either a wrong answer or a refusal, and the person remembers the failure, not the nine successes around it.

## The pattern

Reverse the direction. Start from the evidence the system holds (the documents, the recordings, the records that are known to be good), have the AI generate the questions that evidence answers well, and offer those to the person at the moment they are likely to have them. The open box stays for anyone who wants it, but most people reach a good answer by choosing a question the system is ready for.

This is cheaper as well as better: answering a generated question against evidence already matched to it takes far less work than searching everything for an arbitrary one.

## What makes it hard

The generated questions have to be the person's questions, in their words, not a description of the evidence. They have to be few, and they have to change with context, so the set on a given screen is the set that matters there. And the open box must not disappear; the offered questions are a floor, not a cage.

## When it fails

Questions written from the system's point of view ("What does this video show?") are ignored. Too many chips become a menu nobody reads. If the offered questions are only the easy ones, the person learns that the real answers are elsewhere, and if the open box is hidden, they feel steered.

## The accessibility dividend

A set of offered questions is a list a screen reader can read out, and a question is far easier to choose from a list than to compose. For people who type slowly or who find open prompts hard to start, it is often the only way in.

## In my work

In the multimodal version of Alexa, Amazon's AI shopping assistant, the first design took any question and searched for a video that answered it. I changed the direction: the system starts from the high-quality videos available for a product, generates the questions those videos answer well, and offers them on the product page. Shoppers get a higher share of right answers, and the system does less work to produce them.
