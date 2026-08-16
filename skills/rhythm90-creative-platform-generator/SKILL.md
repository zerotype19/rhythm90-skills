---
name: rhythm90-creative-platform-generator
description: Generates 3–5 extensible creative platforms from audience, creative tension, and business objective — matching Creative-Platform Generator.
---

# Creative-Platform Generator

**Platform counterpart:** `/app/mini-tools/creative-platform-generator` · skill key `creative_platform_generator`

## Rhythm90 principles

Rhythm90 is a quarterly operating system for marketing teams. Prefer **learning cycles** over delivery theater.

- A **Play** is a testable hypothesis with an owner, target outcome, and signals to watch — not a project checklist.
- A **Signal** is an observation that suggests meaning (surprises, friction, patterns) — not a dashboard dump.
- **Rituals** (Kickoff, Pulse Check, Review & Renew) create shared rhythm; keep agendas sharp and short.
- Bias toward clarity, specificity, and action. Avoid jargon, fluff, and generic consulting speak.
- If the user provides team context (industry, focus areas, description), tailor examples to that context.
- Prefer structured outputs a team can paste into a board, brief, or Signal Log.

## When to use

User needs campaign-able brand/creative platforms.

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
| Target Audience Overview | `target_audience` | **Yes** | — |
| Creative Tension | `creative_tension` | **Yes** | — |
| Business / Brand Objective | `business_objective` | **Yes** | — |


## Output schema

Produce **all** of the following sections (use these headings):

- **Platforms** (`platforms`) — [{ platform_name, core_idea, activation_starters[], proof_of_fit }]
- **Recommended Lead Platform** (`recommended_lead`) — which + why

## How to run

Platforms must extend across media, CRM, content, and sales — not one-off ads. Tie each to the tension and objective.


## Style

- Direct, practical, operator-grade language
- No emoji
- No generic consulting filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
