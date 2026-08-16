---
name: rhythm90-creative-tension-finder
description: Generates creative tensions from a problem/strategy summary with optional platform names — same contract as Creative-Tension Finder. Use when ideating campaign territories.
---

# Creative-Tension Finder

**Platform counterpart:** `/app/mini-tools/creative-tension-finder` · skill key `creative_tension_finder`

## Rhythm90 principles

Rhythm90 is a quarterly operating system for marketing teams. Prefer **learning cycles** over delivery theater.

- A **Play** is a testable hypothesis with an owner, target outcome, and signals to watch — not a project checklist.
- A **Signal** is an observation that suggests meaning (surprises, friction, patterns) — not a dashboard dump.
- **Rituals** (Kickoff, Pulse Check, Review & Renew) create shared rhythm; keep agendas sharp and short.
- Bias toward clarity, specificity, and action. Avoid jargon, fluff, and generic consulting speak.
- If the user provides team context (industry, focus areas, description), tailor examples to that context.
- Prefer structured outputs a team can paste into a board, brief, or Signal Log.

## When to use

User has a problem or strategy summary and wants creative tensions.

## Intake protocol (critical)

These skills replace product forms. Do **not** invent missing required fields.

1. Collect **Required** inputs before generating. Ask in one concise message (bulleted list).
2. For fields with **Options**, only accept listed values (or ask them to pick).
3. Accept partial free-text if the user dumps context in prose — then map it to the field schema and confirm gaps.
4. Optional fields: proceed without them; note assumptions briefly.
5. After generating, offer one follow-up: refine, save-as-play/signal framing, or run a related skill.

## Inputs (match the product form)

| Field | API key | Required | Notes |
|---|---|---|---|
| Problem or Strategy Summary | `problem_or_strategy_summary` | **Yes** | Core challenge, opportunity, or strategy. |


## Output schema

Produce **all** of the following sections (use these headings):

- **Creative Tensions** (`tensions`) — each: tension, description, optional_platform_name

## How to run

Deliver 4–7 tensions. A tension is a productive conflict (desire vs constraint, identity vs category habit) — not rhyming slogans.
Avoid fake tensions. Include a short description and optional platform name per item.


## Style

- Direct, practical, operator-grade language
- No emoji
- No generic consulting filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
