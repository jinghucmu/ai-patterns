---
title: Show the plan before it acts
summary: When a person asks an AI to change their work in natural language, show what it intends to change as a plan the person can apply, inspect or decline, and keep the current version until they decide.
themes: [agentic]
stages: [answer, check, decide, do]
example: AI video creation for sellers
where: Amazon Seller Central
added: 2026-11-03
order: 17
related: [start-from-what-it-already-knows, say-what-it-will-make, make-mistakes-easy-to-catch]
---

## What users needed

Sellers liked asking for changes in plain words: make it shorter, warmer, more about the fabric. What they did not like was what happened next. The whole video changed, including parts they had been happy with, and they could not tell what the request had touched. After one or two of those, they stopped asking and went back to editing by hand, which was slower but theirs.

## The problem

A natural-language instruction is short and the change it implies can be large. "Make it shorter" might cut the ending, speed up every scene or drop a product feature. When the AI simply does it, the person gets a new version with no record of what changed, no way to keep the parts they liked and no way to learn what their words mean to the system. Control, which the instruction was supposed to give them, is exactly what they lose.

## The pattern

Between the instruction and the change, put a plan. The AI answers a request to change the work with a short, concrete statement of what it intends to do: which parts it will change, how, and what will stay. For a video, that is the shots in order with their new lengths; for a document, the sections it will rewrite; for a dataset, the rows it will touch. The person can apply the plan, look at the detail behind it (the actual prompt or rule the plan expands to), or keep the current version. Nothing changes until they choose, and the previous version stays available after they do.

The instruction stays conversational. The commitment becomes explicit.

## What makes it hard

The plan has to be shorter than the change it describes, or reading it costs more than redoing the work. It has to be written in the person's terms (scenes, sections, rows) rather than the system's (tokens, parameters). And applying the plan must do what the plan said; a plan that is approved and then exceeded is worse than no plan, because the person has now signed off on something they did not get.

## When it fails

If every small request produces a plan to approve, the pattern becomes friction and people turn it off or stop asking. Trivial, reversible changes can be applied at once with a visible undo; the plan is for changes that are large, hard to reverse or ambiguous. If the plan is vague ("I will improve the pacing"), it gives the person nothing to decide on. And if the previous version is not kept, "keep current" is a promise the product cannot honour.

## The accessibility dividend

A plan is text. Someone who cannot watch the two versions side by side can still read what will change and decide, which is more than most editing tools give them.

## In my work

In the AI video creation tool for Amazon sellers, a seller can ask the assistant for a shorter, warmer video. The assistant returns a plan broken down by time: what each segment will show and how long it will run. Three actions sit under it: apply this plan, show the revised prompt, keep the current version. The existing draft is untouched until the seller applies the plan, and the request, the plan and the decision are all visible in the same thread, so the seller learns how their words become changes.
