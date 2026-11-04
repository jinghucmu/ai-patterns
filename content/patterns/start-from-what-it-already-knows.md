---
title: Start from what it already knows
summary: When the system already holds most of what a task needs, open with a complete, editable first version instead of an empty prompt, and say where each default came from.
themes: [agentic]
stages: [ask, answer, do]
example: AI video creation for sellers
where: Amazon Seller Central
added: 2026-11-03
order: 15
related: [suggest-the-work-worth-doing, show-the-plan-before-it-acts, say-what-it-will-make]
---

## What users needed

The sellers we studied were small businesses with no video team, no budget for one and no time to learn a tool. What they told us, in different words, was the same thing: everything the tool asked them for, the platform already had. The product photos, the listing text, the colour variants, the sales history were all on file. Typing it again into a prompt box felt like being asked to introduce themselves to a colleague they had worked with for years.

## The problem

A blank prompt treats the person as the only source of information. For a general-purpose chat tool that is honest, because the tool knows nothing. Inside a product that already holds the person's data, it is a waste of the one thing the product has over a chat window. The person has to remember, find, copy and describe what the system could have supplied, and the quality of the result is capped by how well they describe it. Most people describe it badly, get a poor result and conclude that the AI is not for them.

## The pattern

Open the task with a first version already filled in: the subject, the source material, the direction, the settings, the wording. Every field is editable and nothing has been committed. Next to the defaults, say in one or two plain sentences where they came from and why: this product because its traffic is high and its conversion is low; these images because they are the listing's own; this length because short videos perform better in this category. The person can press go, or change any field first.

The first version is not a suggestion the person has to evaluate from scratch. It is the work, done to a draft, waiting for a decision.

## What makes it hard

The defaults have to be good enough that most people accept most of them, or the pre-filling becomes a form the person has to clear. They also have to be honest: a reason that is written after the fact, rather than from the data the system actually used, is the first thing a sharp user notices. And the person must be able to see at a glance what is pre-filled and what is empty, so they do not miss a field that matters to them.

## When it fails

If a default is wrong and the person does not notice, the wrong thing gets made with their name on it; the design must make the defaults as easy to check as they are to accept. If the stored context is stale, the pre-filled version is confidently out of date, so the source of each default should carry its date where that matters. And if the system pre-fills more than it can explain, people stop reading the explanations and start distrusting the fills.

## The accessibility dividend

A pre-filled form is a short form. A person working with a screen reader or a keyboard reads a handful of labelled values and changes one, instead of composing a paragraph in a free-text box with no structure.

## In my work

In the AI video creation tool for Amazon sellers, a seller arrives at the creation page from a recommended product and finds the product, its listing images and videos, the colour range, the video type, the prompt and the generation settings already set. A short note from the assistant says why that product and why that direction. The seller can generate at once or edit anything first. Uploading new material is possible but never required; the tool starts from what the platform already holds.
