---
name: rhythm90-quarterly-planner
description: Builds a quarterly Rhythm90 plan (objective, focus areas, plays, assumptions, signals, next steps) from the same multi-step planner inputs as rhythm90.io. Use when kicking off a quarter or resetting the Quarter Board.
---

# Rhythm90 Quarterly Planner

**Platform counterpart:** `/app/quarterly-planner` · `POST /api/planner/sessions` · skill key `quarterly_planner`

## Rhythm90 philosophy (from the book)

**This is not another framework.** Frameworks die in decks. A **rhythm** is the pulse of how a team decides under pressure.

### The five choices
1. **Momentum over motion** — Volume without compounding force is a treadmill.
2. **Signals over stats** — Stats = *what* happened. Signals = *why* (friction, resonance, intent).
3. **Clarity over complexity** — If it can’t fit on one page, it isn’t a strategy.
4. **Consistent learning over heroic launches** — Compound knowledge; don’t burn out on big-bang launches.
5. **Wisdom over shipping** — End-of-cycle question: *What did we learn?* not *What did we ship?*

### Reject Performance Theater
No vanity-metric camouflage, no seventy-slide QBRs, no projects dressed up as strategy. Prefer honest discovery and the courage to kill a bad hypothesis.

### System vocabulary (use correctly)
- **Play** — funded bet with hypothesis + signal plan (not a task list).
- **Quarter Board** — 1–3 visible plays; momentum scoreboard, not Jira.
- **Signal Log** — surprises, friction, field feedback, creative response.
- **Kickoff / Pulse Check / R&R** — commit → unblock+early signals → synthesize learning.
- **Rhythm90 Lead** — protects cadence from theater; not a ticket-chasing PM.

Full canon: `skills/_shared/rhythm90-canon.md`.

## Philosophy for this skill

A quarter is a learning cycle, not a delivery calendar. Limit the Board to **1–3 high-impact plays**. The plan should make the macro-hypothesis of the quarter visible — what the organization is trying to prove about the market.

Visibility over reporting: the Quarter Board is a cultural conversation tool, not a spreadsheet graveyard.

## Hard constraints (do not violate)

- Ruthlessly constrain play count; more plays = prioritization failure.
- Every proposed play needs a path to a hypothesis + signal plan (or flag it as incomplete).
- Named owners, not “the growth team.”
- Outcomes must be concrete; squishy goals produce squishy learning.
- Next steps should sequence Kickoff → Pulse → learning capture → R&R — not a Gantt of tasks.

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


## Style (Rhythm90 voice)

- Direct, practical, operator-grade — no-nonsense
- Specific and measurable over aspirational fog
- Call out Performance Theater, vanity metrics, and projects-in-disguise when they appear
- No emoji; no “leverage synergies” filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
- Prefer short, paste-ready artifacts (Board row, Signal Log entry, brief) over essays
