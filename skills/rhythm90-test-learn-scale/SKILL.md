---
name: rhythm90-test-learn-scale
description: Designs an experimentation roadmap with hypotheses, test design table, learning application, and risk tips — matching Test-Learn-Scale. Use for growth experiments and learning plans.
---

# Test-Learn-Scale Roadmap

**Platform counterpart:** `/app/mini-tools/test-learn-scale` · skill key `test_learn_scale`

## Rhythm90 principles

Rhythm90 is a quarterly operating system for marketing teams. Prefer **learning cycles** over delivery theater.

- A **Play** is a testable hypothesis with an owner, target outcome, and signals to watch — not a project checklist.
- A **Signal** is an observation that suggests meaning (surprises, friction, patterns) — not a dashboard dump.
- **Rituals** (Kickoff, Pulse Check, Review & Renew) create shared rhythm; keep agendas sharp and short.
- Bias toward clarity, specificity, and action. Avoid jargon, fluff, and generic consulting speak.
- If the user provides team context (industry, focus areas, description), tailor examples to that context.
- Prefer structured outputs a team can paste into a board, brief, or Signal Log.

## When to use

User needs a Test → Learn → Scale plan.

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
| Campaign or Product Context | `campaign_or_product_context` | **Yes** | — |
| Resources or Constraints | `resources_or_constraints` | No | — |


## Output schema

Produce **all** of the following sections (use these headings):

- **Core Hypotheses** (`core_hypotheses`) — string list
- **Test Design Table** (`test_design_table`) — [{ hypothesis, tactic, target_sample, primary_kpi, success_threshold, timeframe }]
- **Learning Application** (`learning_application`)
- **Risk Mitigation Tips** (`risk_mitigation_tips`) — list

## How to run

Hypotheses must be falsifiable. Define kill/scale thresholds before recommending more spend. Respect constraints.


## Style

- Direct, practical, operator-grade language
- No emoji
- No generic consulting filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
