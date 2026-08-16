---
name: rhythm90-quarterly-planner
description: Builds a quarterly Rhythm90 plan (objective, focus areas, plays, assumptions, signals, next steps) from the same multi-step planner inputs as rhythm90.io. Use when kicking off a quarter or resetting the Quarter Board.
---

# Rhythm90 Quarterly Planner

**Platform counterpart:** `/app/quarterly-planner` · `POST /api/planner/sessions` · skill key `quarterly_planner`

## Rhythm90 principles

Rhythm90 is a quarterly operating system for marketing teams. Prefer **learning cycles** over delivery theater.

- A **Play** is a testable hypothesis with an owner, target outcome, and signals to watch — not a project checklist.
- A **Signal** is an observation that suggests meaning (surprises, friction, patterns) — not a dashboard dump.
- **Rituals** (Kickoff, Pulse Check, Review & Renew) create shared rhythm; keep agendas sharp and short.
- Bias toward clarity, specificity, and action. Avoid jargon, fluff, and generic consulting speak.
- If the user provides team context (industry, focus areas, description), tailor examples to that context.
- Prefer structured outputs a team can paste into a board, brief, or Signal Log.

## When to use

User is planning a quarter: challenge, learning goals, signals, roles, carryover.

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
| Biggest Challenge This Quarter | `big_challenge` | **Yes** | Hint: "E.g., improve customer retention by 20%" |
| Learning Goals | `learning_goals` | **Yes** | Aim for ≤3. Options: Customer retention · Experience friction · Growth channels · Team alignment · Data & analytics · Product-market fit · Operational efficiency · Brand awareness · Revenue optimization · User engagement · Market expansion · Process improvement · Technology adoption · Competitive analysis · Other (specify) |
| Business Context | `business_context` | No | — |
| Known Plays Already Planned | `known_plays` | No | — |
| Signals to Watch | `signals_to_watch` | **Yes** | Options: Funnel drop-offs · Click-throughs / engagement · Support / field feedback · Revenue metrics · User behavior · Market trends · Competitor activity · Team performance · Customer feedback · Operational metrics · Other (specify) |
| Anticipated Blockers | `blockers` | No | — |
| Roles | `roles` | No | rhythm90Lead, strategicLeads[], executionalLeads[], signalOwner |
| Carryover Learnings | `carryover_learnings` | No | — |
| Cross-Functional Needs | `cross_functional_needs` | No | — |


## Output schema

Produce **all** of the following sections (use these headings):

- **Objective** (`objective`)
- **Carryover Learnings** (`carryover_learnings`)
- **Key Focus Areas** (`key_focus_areas`) — list
- **Plays to Implement** (`plays_to_implement`) — each: title, description, leads, expected_outcome
- **Key Assumptions** (`key_assumptions`)
- **Cross-Functional Needs** (`cross_functional_needs`)
- **Signals to Watch** (`signals_to_watch`) — list
- **Next Steps** (`next_steps`) — list

## How to run

1. Required backend trio: big_challenge, learning_goals, signals_to_watch — never skip.
2. Plays should be hypothesis-shaped bets, not project lists.
3. Keep the plan executable for one quarter; resist boiling the ocean.
4. Next Steps should sequence Kickoff → early Pulse → mid-quarter learning.


## Style

- Direct, practical, operator-grade language
- No emoji
- No generic consulting filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
