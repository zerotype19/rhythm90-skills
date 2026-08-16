---
name: rhythm90-hypothesis-builder
description: Crafts 1–3 sharp testable hypotheses from audience, problem, key signal, and desired outcome — matching Hypothesis Builder. Use before building a full Play.
---

# Hypothesis Builder

**Platform counterpart:** `/app/mini-tools/hypothesis-builder` · skill key `hypothesis_builder`

## Rhythm90 principles

Rhythm90 is a quarterly operating system for marketing teams. Prefer **learning cycles** over delivery theater.

- A **Play** is a testable hypothesis with an owner, target outcome, and signals to watch — not a project checklist.
- A **Signal** is an observation that suggests meaning (surprises, friction, patterns) — not a dashboard dump.
- **Rituals** (Kickoff, Pulse Check, Review & Renew) create shared rhythm; keep agendas sharp and short.
- Bias toward clarity, specificity, and action. Avoid jargon, fluff, and generic consulting speak.
- If the user provides team context (industry, focus areas, description), tailor examples to that context.
- Prefer structured outputs a team can paste into a board, brief, or Signal Log.

## When to use

User needs falsifiable hypotheses grounded in a signal.

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
| Target Audience Snapshot | `target_audience` | **Yes** | — |
| Core Problem or Opportunity | `core_problem` | **Yes** | — |
| Key Signal or Observation | `key_signal` | **Yes** | — |
| Desired Outcome | `desired_outcome` | **Yes** | — |


## Output schema

Produce **all** of the following sections (use these headings):

- **Hypotheses** (`hypotheses`) — [{ hypothesis_statement, assumptions_to_watch[], signal_to_track[], quarterly_fit_check }]

## How to run

1–3 hypotheses only. Each must be falsifiable and tied to the key signal. Include minimal assumptions and signals to track. Offer to escalate the best one into Play Builder.


## Style

- Direct, practical, operator-grade language
- No emoji
- No generic consulting filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
