---
title: Help inside the work, not beside it
summary: Put the assistant inside the task, with the task's state in front of it, so it explains, adjusts and recovers in context. Never make the person leave their work, or redo what they could do faster themselves, to use the AI.
themes: [agentic]
stages: [ask, answer, decide, do]
example: AI video creation for sellers
where: Amazon Seller Central
added: 2026-11-03
order: 20
related: [start-from-what-it-already-knows, show-the-plan-before-it-acts, give-feedback-they-can-act-on, close-the-loop-on-results]
---

## What users needed

Sellers did not want a chat window. Several of them had one, in other tools, and described the same experience: it did not know which product they were on, it answered in paragraphs when they wanted a button, and getting it to do something meant describing the thing on their screen to it. What they wanted was help that already knew where they were and what they were doing, that showed up when they were stuck and stayed out of the way when they were not.

## The problem

The common shape of AI help is a chat panel beside the product. It is easy to build because it is separate from everything. For the person, that separation is the cost: the assistant does not see the draft, the error or the numbers they are looking at, so every exchange starts with the person explaining their own screen. Worse, a tool can start routing ordinary actions through the assistant, so that a change that was one click becomes a sentence, a wait and a paragraph. Help that makes the fast things slow is not help.

## The pattern

Make the assistant a participant in the task rather than a window next to it. It has the task's state: the item, the draft, the settings, the result, the error. It speaks at the moments where the work has a question in it, in the form the moment calls for: a one-line reason beside a default, a short plan with actions under it, a named conflict with a fix, a comparison of results with a next step. It does not need to be asked to explain a default or point at a problem, and it does not insert itself where the person has a direct control that works.

The rule for the direct controls is simple. Anything the person can do faster with a click or a keystroke stays a click or a keystroke. The assistant takes the work that is slow, repetitive or needs judgment the person does not have, and leaves the rest alone.

## What makes it hard

The assistant has to know the state of the task reliably, including what the person has changed by hand, or its advice is about a draft that no longer exists. Its moments have to be chosen: too many and it is an interruption, too few and it is a chat panel again. And it must never act on the work without a visible decision from the person; an assistant inside the task has the access to publish, overwrite or delete, and the design must make sure that access is used only through confirmation.

## When it fails

If the assistant and the controls disagree about the state, the person stops trusting both. If the assistant replaces direct controls instead of adding to them, experienced people, who were the fastest users of the product, become the slowest, and they leave. If it talks when nothing has changed, it is noise. The test is whether a person who never opens the assistant can still do everything they could before; if not, the AI has taken something away.

## The accessibility dividend

Help that arrives as a labelled action at the point of the problem is help a screen reader can announce and a keyboard can reach. A free-form chat is the hardest kind of interface to use without sight, because nothing in it has a fixed place.

## In my work

In the AI video creation tool for Amazon sellers, the assistant appears across the whole task. On arrival it explains the recommended opportunity with the seller's own numbers in a small chart. On the creation page it explains the defaults and turns a plain-language request into a plan with actions. On the preview it gives feedback tied to specific moments in the video and offers to regenerate while keeping the current version. When an input conflicts with the listing it names the conflict and offers the fix. After publishing it compares the results and suggests what to make next. At every step the seller's direct controls remain, and nothing is published, overwritten or discarded without the seller's confirmation.
