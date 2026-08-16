---
name: rhythm90-persona-generator
description: Builds a detailed persona sheet from an audience seed and supports Ask Mode Q&A in character — matching Persona Generator. Use when creating personas or interviewing a synthetic customer.
---

# Persona Generator + Ask Mode

**Platform counterpart:** `/app/mini-tools/persona-generator` · generate + `POST .../persona-ask` · skill key `persona_generator`

## Rhythm90 principles

Rhythm90 is a quarterly operating system for marketing teams. Prefer **learning cycles** over delivery theater.

- A **Play** is a testable hypothesis with an owner, target outcome, and signals to watch — not a project checklist.
- A **Signal** is an observation that suggests meaning (surprises, friction, patterns) — not a dashboard dump.
- **Rituals** (Kickoff, Pulse Check, Review & Renew) create shared rhythm; keep agendas sharp and short.
- Bias toward clarity, specificity, and action. Avoid jargon, fluff, and generic consulting speak.
- If the user provides team context (industry, focus areas, description), tailor examples to that context.
- Prefer structured outputs a team can paste into a board, brief, or Signal Log.

## When to use

User wants a persona profile and/or to ask that persona questions.

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
| Audience Seed | `audience_seed` | **Yes** | Hint: "e.g. urban young adults evaluating B2B SaaS for the first time" |
| Ask Mode Question | `question` | No | Required only when running Ask Mode after a persona exists. Hint: "Ask the persona a question…" |


### Additional intake notes

Mode A — Generate: require `audience_seed`. Mode B — Ask: require an existing persona sheet (from this chat or pasted) + `question`.

## Output schema

Produce **all** of the following sections (use these headings):

- **Persona Sheet** (`persona_sheet`) — name, age, location, occupation, income, interests, demographics, behavior, mindset, needs
- **Wants** (`wants`) — [{ category, description }]
- **Barriers** (`barriers`) — [{ category, description }]
- **Motivators** (`motivators`) — [{ category, description }]
- **Ask Mode Message** (`ask_mode_message`) — how to interview them
- **Ask Answer** (`answer`) — Ask Mode only; first person; include persona_name

## How to run

1. Build a vivid but non-stereotyped persona grounded in the seed.
2. Separate wants, barriers, and motivators clearly.
3. Ask Mode: answer in first person as the persona; stay consistent; flag uncertainty.


## Style

- Direct, practical, operator-grade language
- No emoji
- No generic consulting filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
