---
name: rhythm90-synthetic-focus-group
description: Creates a five-persona synthetic focus group and supports Ask Mode group Q&A — matching Synthetic Focus Group. Use to stress-test messaging, offers, or creative.
---

# Synthetic Focus Group

**Platform counterpart:** `/app/mini-tools/synthetic-focus-group` · generate + focus-group-ask · skill key `synthetic_focus_group`

## Rhythm90 principles

Rhythm90 is a quarterly operating system for marketing teams. Prefer **learning cycles** over delivery theater.

- A **Play** is a testable hypothesis with an owner, target outcome, and signals to watch — not a project checklist.
- A **Signal** is an observation that suggests meaning (surprises, friction, patterns) — not a dashboard dump.
- **Rituals** (Kickoff, Pulse Check, Review & Renew) create shared rhythm; keep agendas sharp and short.
- Bias toward clarity, specificity, and action. Avoid jargon, fluff, and generic consulting speak.
- If the user provides team context (industry, focus areas, description), tailor examples to that context.
- Prefer structured outputs a team can paste into a board, brief, or Signal Log.

## When to use

User wants multiple synthetic viewpoints, then optional group Q&A.

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
| Topic or Category | `topic_or_category` | **Yes** | — |
| Audience Seed Info | `audience_seed_info` | **Yes** | — |
| Must Include Segments | `must_include_segments` | No | — |
| Ask Mode Question | `question` | No | Required for Ask Mode after lineup exists. |


### Additional intake notes

Mode A — Generate lineup (5 personas). Mode B — Ask the group or a named persona; require lineup in context + question.

## Output schema

Produce **all** of the following sections (use these headings):

- **Persona Lineup** (`persona_lineup`) — 5× { name, age, location, bio, motivations, pain_points, triggers, media_habits }
- **Ask Mode Message** (`ask_mode_message`)
- **Ask Answer** (`answer`) — Ask Mode: multi-voice + synthesis; include focus_group_size, persona_names

## How to run

Personas must disagree usefully (include a skeptic). Ask Mode: label speakers; close with a short synthesis.


## Style

- Direct, practical, operator-grade language
- No emoji
- No generic consulting filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
