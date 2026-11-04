---
title: Catch it before it costs
summary: Check the inputs for the problems that would fail the work later, say exactly what conflicts with what, and offer the fix as an action, so the person recovers in one step instead of resubmitting.
themes: [agentic, accessibility]
stages: [check, decide, do]
example: AI video creation for sellers
where: Amazon Seller Central
added: 2026-11-03
order: 19
related: [do-the-repeats-keep-the-rules, make-mistakes-easy-to-catch, say-i-dont-know]
---

## What users needed

The sellers' worst experience was not a bad video. It was a video that took time to make, was submitted, and came back days later rejected for a reason they could have fixed in a minute if anyone had told them at the start. A claim in a caption did not match the listing; an uploaded image showed something the product page did not. The rejection notice named a policy, not the problem, and the seller started over.

## The problem

Most systems check the work after it is done, because that is where the checks are easy to build. For the person, that is the most expensive moment to find out: the effort is spent, the wait has been waited, and the message that arrives is written for the system's reviewers rather than for them. Each late failure also teaches the person that the tool is a gamble, and people do not keep playing games they lose.

## The pattern

Move the checks to the front, where the inputs are. When the AI can tell that an input will fail later, say so before the work starts: which input, what it conflicts with, and why that matters. Then offer the fix as an action the person can take in place, with the system's own data as the first option: use the listing's image instead; change the claim to match the record; drop this item from the set. The person resolves the conflict in one step and continues. If they cannot, the tool explains what would have to change, rather than letting the work go forward to a certain rejection.

The check is not a gate that says no. It is the part of the work the AI can do first.

## What makes it hard

The check has to be specific. "This may violate policy" is a late rejection delivered early. The system has to point at the two things that disagree and show both. The fix has to be real and immediate; a check that only diagnoses hands the person a problem instead of a solution. And the checks must be rare enough to be taken seriously: a tool that flags everything is a tool whose flags are ignored.

## When it fails

A front check is not a guarantee. The model can still produce something that the later review rejects, and the design must not imply otherwise; what it promises is that the known problems are caught early, not that there will be none. If the suggested fix is wrong (the listing is the thing that is out of date), the person needs a way to say so without being blocked. And if the check runs only on some inputs, the person learns the wrong lesson about which ones are safe.

## The accessibility dividend

A conflict stated as "this says 500, the record says 300" is readable by anyone and by anything. An error that can only be seen by comparing two images is not. Stating the conflict in words, with the fix as a labelled action, makes the recovery usable without sight and without a mouse.

## In my work

In the AI video creation tool for Amazon sellers, if a seller adds material that disagrees with the product listing (a weight limit in an uploaded image that the listing does not support, for instance), the assistant names the two values that conflict, stops the generation from going ahead with the bad input, and offers to use the listing's own image in its place. The seller fixes it where they are and continues. The aim of the design is to move the quality and policy checks to the inputs and the generation, so that fewer finished videos come back rejected, while keeping human review of the output.
