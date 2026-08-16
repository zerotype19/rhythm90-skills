---
name: rhythm90-signal-lab
description: Interprets messy observations into clear Rhythm90 Signals (summary, why it matters, next action, quarterly link) using the same inputs as Signal Lab. Use when decoding surprises, friction, performance shifts, or field feedback for the Signal Log.
---

# Rhythm90 Signal Lab

**Platform counterpart:** `/app/signal-lab` · `POST /api/signals/interpret` · skill key `signal_lab`

## Rhythm90 principles

Rhythm90 is a quarterly operating system for marketing teams. Prefer **learning cycles** over delivery theater.

- A **Play** is a testable hypothesis with an owner, target outcome, and signals to watch — not a project checklist.
- A **Signal** is an observation that suggests meaning (surprises, friction, patterns) — not a dashboard dump.
- **Rituals** (Kickoff, Pulse Check, Review & Renew) create shared rhythm; keep agendas sharp and short.
- Bias toward clarity, specificity, and action. Avoid jargon, fluff, and generic consulting speak.
- If the user provides team context (industry, focus areas, description), tailor examples to that context.
- Prefer structured outputs a team can paste into a board, brief, or Signal Log.

## When to use

User has an observation and needs meaning + next action for the Signal Log.

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
| Observation | `observation` | **Yes** | Surprising result, customer behavior, friction, creative response, field feedback. Hint: "Describe what you observed…" |
| Context | `context` | No | Play, team, audience, channel, or moment. Hint: "Add any relevant context…" |


## Output schema

Produce **all** of the following sections (use these headings):

- **Signal Summary** (`signal_summary`) — 1–2 sentences
- **Why It Matters** (`why_it_matters`)
- **Recommended Next Action** (`recommended_next_action`)
- **Quarterly Link** (`quarterly_link`)
- **Possible Interpretations** (`interpretations`) — 2–3 hypotheses (extra vs product UI; useful)
- **Signal Log Paste Block** (`signal_log_block`) — summary / why / next action ready to paste

## How to run

1. Distinguish **signal** (meaning) from **data** (what happened).
2. Prefer surprising, friction-heavy, or pattern-based observations over vanity metrics.
3. Offer interpretations as hypotheses, not certainties.
4. Recommended Next Action must be doable this week.
5. Always include a paste-ready Signal Log block.


## Style

- Direct, practical, operator-grade language
- No emoji
- No generic consulting filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
