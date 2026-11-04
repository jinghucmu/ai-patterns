---
title: Do the repeats, keep the rules
summary: When one piece of work has to exist in several near-identical versions, let the AI produce the set from the first version, holding everything constant except the one thing that differs, and show the person the coverage.
themes: [agentic]
stages: [do, check]
example: AI video creation for sellers
where: Amazon Seller Central
added: 2026-11-03
order: 18
related: [start-from-what-it-already-knows, catch-it-before-it-costs, act-where-it-appears]
---

## What users needed

A seller with a chair in five colours needed five videos, and every one of them was the same video with a different chair. Making the first one was work they were willing to do. Making the other four was the reason most of them had only one, or none. They also knew, from experience with earlier tools, what went wrong when a machine made the copies: the chair's shape drifted, the brand text changed, and a video that was almost right was a video they could not publish.

## The problem

Much real work is a set of variants: the same report for each region, the same message in each language, the same product in each colour. Producing the set by hand is repetition, which people avoid; producing it by generation is drift, which people cannot trust. Neither gives the person what they want, which is one careful decision that then holds across the whole set.

## The pattern

Let the person make and approve the first version. Then let the AI produce the rest of the set from it, changing only the dimension that differs and holding everything else fixed: the same structure, the same timing, the same words, the same sound. Show the set as one thing with a visible coverage count, so the person can see at once how many variants exist and which are missing, and can step through them from the same place.

The person's judgment goes into one version. The AI's work is to carry it, unchanged, into the others.

## What makes it hard

The system has to know which things are the same work and which only look like it. Two chairs that differ only in colour are a set; two that differ in size or material are not, and a tool that treats them as one will produce a confident wrong video. The invariants have to be real invariants: if the sound or the pacing shifts between variants, the person has to check each one and the saving is gone. And the coverage display must be honest about gaps, because a set that is three fifths complete looks complete if the missing two are not shown.

## When it fails

If the model changes the product's shape, text or details between variants, the set is worse than useless: it is a published error. The pattern depends on the generation being constrained, and the person must be able to inspect each variant before any of them goes out. If the dimension of difference is chosen wrongly, the person has to unpick a set instead of fixing one thing. And when the "same" work is not really the same, the person should be able to say so and get back to making one version at a time.

## In my work

In the AI video creation tool for Amazon sellers, when a seller generates a video for a product that comes in several colours, the tool recognizes the colour variants from the listing and generates a matching version for each: the same shots, the same pacing, the same length and sound, with only the product's colour changed. The preview shows the versions side by side with a coverage count, such as three of five colours, and the seller can switch between them before publishing. On the shopper's side the same set appears in the video player as colour options, so a shopper comparing colours switches videos without leaving the one they are watching.
