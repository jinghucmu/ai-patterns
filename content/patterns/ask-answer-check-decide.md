---
title: Ask, answer, check, decide
summary: Design the whole chain from a person's question to their decision as one flow. Break any link and trust in the AI is hollowed out.
themes: [multimodal]
stages: [ask, answer, check, decide]
example: Multimodal Alexa
where: Amazon's AI shopping assistant
added: 2026-10-10
order: 1
sources: [article-d]
related: [show-the-evidence, say-i-dont-know, make-mistakes-easy-to-catch]
---

## What users needed

People did not ask for a better answer card or a bigger button. They judged the assistant by one thing: whether a single question got them to a decision they felt sure about. Where any step of that journey broke, they did not complain; they stopped asking the assistant and went back to doing it the old way.

## The problem

It is tempting to design an AI feature one screen at a time: the input box, the answer card, the action button. But a person does not experience screens. They experience a single question and whether it got them to a decision they feel good about, whether that decision is a purchase, a diagnosis to discuss with a doctor, a claim to file, or a paragraph to keep.

## The pattern

Design the flow end to end:

1. **Ask.** The person puts a question, in their own words or by pointing at something.
2. **Answer.** The AI returns something: a passage, a segment, a marker, a generated explanation, a recommendation.
3. **Check.** The person examines the evidence behind the answer and decides whether to believe it.
4. **Decide.** The person acts: proceeds, keeps looking, or tells the AI it was wrong.

Every pattern on this site serves one or more of these four stages, and each pattern page shows which. The chain is the thing being designed; the individual components are how.

## What makes it hard

The stages belong to different teams, different models and different parts of the interface, so nobody owns the whole chain unless the designer does. The questions that matter are not about button size and placement. They are: in which moments should the AI answer confidently and in which should it say it does not know; when it answers, how is the evidence shown so the person can build trust; when it is wrong, how does the person notice with the least friction and correct it; and when an answer crosses text, images, audio, clips and buttons, how should that information flow.

None of those can be solved with a prompt. They need empathy for the people using the product, a feel for the constraints of the business, a hold on the design system as a whole, and someone willing to stand watch on the user's behalf.

## When it fails

Any one broken link hollows out the rest. A perfect answer that cannot be checked, or a checkable answer with no way to act on it, or an action with no way to say "that was wrong", each leaves the person less willing to ask next time.

## In my work

This is the chain I was really designing when I worked on the multimodal version of Alexa, Amazon's AI shopping assistant. There the question is about a product, the answer is often a clip from a video, and the decision is a purchase. The clip answers, the generated answers and the correction paths are the links in the chain.
