---
title: Show the seconds that answer
summary: When an AI answers with a clip, give the shopper the context to open it, keep watching and check that those seconds really say what the AI claims.
themes: [multimodal, shopping]
stages: [answer, check]
example: Multimodal Alexa, clip answers
where: Amazon shopping assistant
added: 2026-10-10
order: 5
sources: [article-d]
related: [ask-answer-check-decide, say-i-dont-know, index-by-question]
---

## What users needed

A clip on its own did not convince anyone. Shoppers needed to know where the seconds came from, who was speaking, and what was said just before and after, before they would act on them. Their trust depended less on the cut being right than on being able to check it themselves.

## The problem

A shopper asks a question. Somewhere in a very large video library there are seven seconds that answer it. The AI can find them. But a seven-second clip with no surroundings is a claim, not an answer: why should the shopper believe these are the right seven seconds, from the right video, about the right product?

## The pattern

Return the clip as part of the answer, and return the means to check it with it. The shopper can see where the seconds came from, open the surrounding video, keep watching past the cut, and compare what the creator actually said with what the AI said they said.

The hardest design problem here is not getting the cut right. It is the chain of evidence. An answer the shopper can trace back to its source is one they can trust; an answer they cannot trace is one they have to take on faith, and shoppers do not spend money on faith.

## What makes it hard

Every piece of context competes with the answer for attention. Show too little and the clip is an unsupported assertion. Show too much and the shopper is back to watching a thirty-minute review. The context has to be there, quiet, and one step away.

## When it fails

If the shopper cannot open the source, a wrong clip looks exactly like a right one. They find out at home, with the product in their hands. The AI loses credit not just for this answer but for the next hundred.

## The accessibility dividend

A clip with a stated source and a text summary of what it shows is an answer that works with the sound off, the picture off, or the video not loaded at all.

## In my work

The multimodal version of Alexa, Amazon's AI shopping assistant, can answer a shopper's question with the most relevant seconds from existing videos. I designed how those clips are presented and how a shopper gets from a clip back to the context it came from.
