---
name: rhythm90-five-cs
description: Runs a 5 C's analysis (Company, Customer, Category, Culture, Competition) with strategic challenge and opportunity — matching 5 C's Strategy Builder.
---

# 5 C's Strategy Builder

**Platform counterpart:** `/app/mini-tools/five-cs-strategy-builder` · skill key `five_cs_strategy_builder`

## Rhythm90 principles

Rhythm90 is a quarterly operating system for marketing teams. Prefer **learning cycles** over delivery theater.

- A **Play** is a testable hypothesis with an owner, target outcome, and signals to watch — not a project checklist.
- A **Signal** is an observation that suggests meaning (surprises, friction, patterns) — not a dashboard dump.
- **Rituals** (Kickoff, Pulse Check, Review & Renew) create shared rhythm; keep agendas sharp and short.
- Bias toward clarity, specificity, and action. Avoid jargon, fluff, and generic consulting speak.
- If the user provides team context (industry, focus areas, description), tailor examples to that context.
- Prefer structured outputs a team can paste into a board, brief, or Signal Log.

## When to use

User needs situation analysis across the five C inputs.

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
| Company | `company` | **Yes** | — |
| Customer | `customer` | **Yes** | — |
| Category | `category` | **Yes** | — |
| Culture | `culture` | **Yes** | — |
| Competition | `competition` | **Yes** | — |


## Output schema

Produce **all** of the following sections (use these headings):

- **Company Insight** (`company_insight`)
- **Customer Insight** (`customer_insight`)
- **Category Insight** (`category_insight`)
- **Culture Insight** (`culture_insight`)
- **Competition Insight** (`competition_insight`)
- **Strategic Challenge** (`strategic_challenge`)
- **Strategic Opportunity** (`strategic_opportunity`)
- **Play Implications** (`play_implications`) — optional: 1–3 Play-ready bets

## How to run

Treat each C as evidence, then synthesize. Highlight contradictions. End with Play-ready opportunity language.


## Style

- Direct, practical, operator-grade language
- No emoji
- No generic consulting filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
