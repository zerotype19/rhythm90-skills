---
name: rhythm90-get-to-by
description: Crafts Get/To/By strategy statements from audience, insight, and brand role — matching the Get/To/By Generator form. Use when writing strategy statements or creative briefs.
---

# Get/To/By Generator

**Platform counterpart:** `/app/mini-tools/get-to-by-generator` · skill key `get_to_by_generator`

## Rhythm90 principles

Rhythm90 is a quarterly operating system for marketing teams. Prefer **learning cycles** over delivery theater.

- A **Play** is a testable hypothesis with an owner, target outcome, and signals to watch — not a project checklist.
- A **Signal** is an observation that suggests meaning (surprises, friction, patterns) — not a dashboard dump.
- **Rituals** (Kickoff, Pulse Check, Review & Renew) create shared rhythm; keep agendas sharp and short.
- Bias toward clarity, specificity, and action. Avoid jargon, fluff, and generic consulting speak.
- If the user provides team context (industry, focus areas, description), tailor examples to that context.
- Prefer structured outputs a team can paste into a board, brief, or Signal Log.

## When to use

User needs a Get/To/By statement.

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
| Audience Description | `audience_description` | **Yes** | Behavioral audience, not just demo. Hint: "e.g. millennial males researching first home insurance" |
| Behavioral or Emotional Insight | `behavioral_or_emotional_insight` | **Yes** | Hint: "What are they thinking, feeling, or struggling with?" |
| Brand / Product Role | `brand_product_role` | **Yes** | Hint: "What role does the brand/product play?" |


## Output schema

Produce **all** of the following sections (use these headings):

- **Get** (`get`)
- **To** (`to`)
- **By** (`by`)
- **Complete Statement** (`complete_statement`) — Get X to Y by Z
- **Variants** (`variants`) — optional safer / sharper versions

## How to run

Format: **Get** [audience] **to** [behavior/belief change] **by** [brand role / mechanism].
Insight must feel specific to this audience — no universal platitudes.


## Style

- Direct, practical, operator-grade language
- No emoji
- No generic consulting filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
