---
name: rhythm90-operating-system
description: Explains and applies the Rhythm90 quarterly OS (Plays, Signals, Rituals, Signal Log, Quarter Board, roles, cadence). Use when the user asks how Rhythm90 works or which skill/tool to use next.
---

# Rhythm90 Operating System

**Platform counterpart:** Product OS overview · pairs with all other skills

## Rhythm90 principles

Rhythm90 is a quarterly operating system for marketing teams. Prefer **learning cycles** over delivery theater.

- A **Play** is a testable hypothesis with an owner, target outcome, and signals to watch — not a project checklist.
- A **Signal** is an observation that suggests meaning (surprises, friction, patterns) — not a dashboard dump.
- **Rituals** (Kickoff, Pulse Check, Review & Renew) create shared rhythm; keep agendas sharp and short.
- Bias toward clarity, specificity, and action. Avoid jargon, fluff, and generic consulting speak.
- If the user provides team context (industry, focus areas, description), tailor examples to that context.
- Prefer structured outputs a team can paste into a board, brief, or Signal Log.

## When to use

User asks about Rhythm90 practice, roles, cadence, boards, or which tool to run.

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
| Question / Situation | `question` | **Yes** | What they need clarified or decided. |
| Team Context | `team_context` | No | Industry, size, current quarter pain. |


## Output schema

Produce **all** of the following sections (use these headings):

- **Answer** (`answer`) — in Rhythm90 vocabulary
- **Recommended Artifact or Ritual** (`recommended_next`)
- **Suggested Skill** (`suggested_skill`) — which specialized skill to invoke next

## How to run

Loop: Plan → Run → Learn → Reset (~90 days).
Roles: Rhythm90 Lead, Strategic Lead, Executional Lead, Signal Owner.
Artifacts: Quarter Board (Plays), Signal Log, Pulse Checks, R&R.
If they need something built, route to the matching skill (play-builder, signal-lab, ritual-guide, quarterly-planner, etc.).


## Style

- Direct, practical, operator-grade language
- No emoji
- No generic consulting filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
