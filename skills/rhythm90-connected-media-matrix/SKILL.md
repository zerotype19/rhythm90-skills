---
name: rhythm90-connected-media-matrix
description: Creates a moment-based connected media matrix from audience snapshot, conversion action, and optional triggers — matching Connected-Media Moment Matrix.
---

# Connected-Media Moment Matrix

**Platform counterpart:** `/app/mini-tools/connected-media-matrix` · skill key `connected_media_matrix`

## Rhythm90 principles

Rhythm90 is a quarterly operating system for marketing teams. Prefer **learning cycles** over delivery theater.

- A **Play** is a testable hypothesis with an owner, target outcome, and signals to watch — not a project checklist.
- A **Signal** is an observation that suggests meaning (surprises, friction, patterns) — not a dashboard dump.
- **Rituals** (Kickoff, Pulse Check, Review & Renew) create shared rhythm; keep agendas sharp and short.
- Bias toward clarity, specificity, and action. Avoid jargon, fluff, and generic consulting speak.
- If the user provides team context (industry, focus areas, description), tailor examples to that context.
- Prefer structured outputs a team can paste into a board, brief, or Signal Log.

## When to use

User needs a moment × channel × message × KPI plan.

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
| Audience Snapshot | `audience_snapshot` | **Yes** | — |
| Primary Conversion Action | `primary_conversion_action` | **Yes** | — |
| Seasonal or Contextual Triggers | `seasonal_or_contextual_triggers` | No | — |


## Output schema

Produce **all** of the following sections (use these headings):

- **Moment Matrix** (`moment_matrix`) — [{ moment_or_trigger, audience_mindset, channel_format_ranked, creative_or_offer_cue, primary_kpi, measurement_approach }]

## How to run

Anchor every moment to the conversion action. Prefer a few high-quality connected moments. Note where creative must change by channel.


## Style

- Direct, practical, operator-grade language
- No emoji
- No generic consulting filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
