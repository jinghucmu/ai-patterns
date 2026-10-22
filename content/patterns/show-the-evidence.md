---
title: Show the evidence behind the answer
summary: When an AI answers from a source, return the source with the answer, so the person can open it, read on, and check that it really says what the AI claims.
themes: [multimodal]
stages: [answer, check]
example: Multimodal Alexa, clip answers
where: Amazon's AI shopping assistant
added: 2026-10-10
order: 5
sources: [article-d]
related: [ask-answer-check-decide, say-i-dont-know, index-by-question]
---

## What users needed

An answer on its own did not convince anyone. People needed to know where it came from, who was speaking, and what was said just before and after, before they would act on it. Their trust depended less on the answer being right than on being able to check it themselves.

## The problem

A person asks a question. Somewhere in a very large body of material there is a passage, a page or seven seconds of a recording that answers it. The AI can find it. But an excerpt with no surroundings is a claim, not an answer: why should the person believe this is the right excerpt, from the right source, about the right thing?

## The pattern

Return the excerpt as part of the answer, and return the means to check it with it. The person can see where it came from, open the surrounding source, keep reading or watching past the cut, and compare what the source actually says with what the AI said it says.

The hardest design problem here is not getting the excerpt right. It is the chain of evidence. An answer the person can trace back to its source is one they can trust; an answer they cannot trace is one they have to take on faith, and people do not make decisions that matter on faith.

## What makes it hard

Every piece of context competes with the answer for attention. Show too little and the excerpt is an unsupported assertion. Show too much and the person is back to going through the whole source. The context has to be there, quiet, and one step away.

## When it fails

If the person cannot open the source, a wrong excerpt looks exactly like a right one. They find out later, after they have acted on it. The AI loses credit not just for this answer but for the next hundred.

## The accessibility dividend

An excerpt with a stated source and a text summary of what it shows is an answer that works with the sound off, the picture off, or the media not loaded at all.

## In my work

The multimodal version of Alexa, Amazon's AI shopping assistant, can answer a question with the most relevant seconds from existing videos. The answer comes with the whole video, jumped to those seconds, so the person has the full context and can scrub back if the jump landed in the wrong place. I designed how those clips are presented and how a person gets from a clip back to the context it came from.
