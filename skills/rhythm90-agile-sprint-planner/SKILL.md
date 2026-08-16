---
name: rhythm90-agile-sprint-planner
description: Outlines a marketing sprint/war-room plan (objective, roster, cadence, rituals, deliverables, DoD) from challenge, time horizon, and team roles — matching Agile Sprint Planner.
---

# Agile Sprint / War-Room Planner

**Platform counterpart:** `/app/mini-tools/agile-sprint-planner` · skill key `agile_sprint_planner`

## Rhythm90 principles

Rhythm90 is a quarterly operating system for marketing teams. Prefer **learning cycles** over delivery theater.

- A **Play** is a testable hypothesis with an owner, target outcome, and signals to watch — not a project checklist.
- A **Signal** is an observation that suggests meaning (surprises, friction, patterns) — not a dashboard dump.
- **Rituals** (Kickoff, Pulse Check, Review & Renew) create shared rhythm; keep agendas sharp and short.
- Bias toward clarity, specificity, and action. Avoid jargon, fluff, and generic consulting speak.
- If the user provides team context (industry, focus areas, description), tailor examples to that context.
- Prefer structured outputs a team can paste into a board, brief, or Signal Log.

## When to use

User is planning a time-boxed marketing sprint or war room.

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
| Challenge Statement | `challenge_statement` | **Yes** | — |
| Time Horizon | `time_horizon` | **Yes** | Hint: "e.g. 6 weeks, 3 months" |
| Team Size / Roles | `team_size_roles` | **Yes** | — |


## Output schema

Produce **all** of the following sections (use these headings):

- **Sprint Objective** (`sprint_objective`)
- **Team Roster and Responsibilities** (`team_roster_and_responsibilities`)
- **Sprint Cadence** (`sprint_cadence`)
- **Rituals and Artifacts** (`rituals_and_artifacts`)
- **Deliverables per Sprint** (`deliverables_per_sprint`)
- **Rapid Testing / Validation Methods** (`rapid_testing_validation_methods`)
- **Definition of Done** (`definition_of_done`) — list

## How to run

Optimize for learning + shipping inside the time horizon. Assign owners. Include a mid-sprint Pulse-style checkpoint.


## Style

- Direct, practical, operator-grade language
- No emoji
- No generic consulting filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
