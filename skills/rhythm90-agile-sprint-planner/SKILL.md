---
name: rhythm90-agile-sprint-planner
description: Outlines a marketing sprint/war-room plan (objective, roster, cadence, rituals, deliverables, DoD) from challenge, time horizon, and team roles — matching Agile Sprint Planner.
---

# Agile Sprint / War-Room Planner

**Platform counterpart:** `/app/mini-tools/agile-sprint-planner` · skill key `agile_sprint_planner`

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

Sprints and war rooms should protect focus and cadence — not recreate delivery theater with more standups. Mid-sprint checkpoints should feel like Pulse Checks: surprises, blockers, signals.

## Hard constraints (do not violate)

- Named owners; no floating work.
- Definition of Done includes learning capture (Signal Log), not only shipped assets.
- Cut status-tour rituals; prioritize decisions and unblocking.
- Time horizon is sacred — scope to what can be learned and shipped inside it.

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


## Style (Rhythm90 voice)

- Direct, practical, operator-grade — no-nonsense
- Specific and measurable over aspirational fog
- Call out Performance Theater, vanity metrics, and projects-in-disguise when they appear
- No emoji; no “leverage synergies” filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
- Prefer short, paste-ready artifacts (Board row, Signal Log entry, brief) over essays
