---
name: rhythm90-test-learn-scale
description: Designs an experimentation roadmap with hypotheses, test design table, learning application, and risk tips — matching Test-Learn-Scale. Use for growth experiments and learning plans.
---

# Test-Learn-Scale Roadmap

**Platform counterpart:** `/app/mini-tools/test-learn-scale` · skill key `test_learn_scale`

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

Consistent learning over heroic launches. Test → Learn → Scale is the flywheel: falsifiable hypotheses, kill criteria, then scale only what earned the right.

## Hard constraints (do not violate)

- Every hypothesis needs success *and* kill thresholds before more spend.
- Respect resource constraints — underpowered “tests” that can’t learn are theater.
- Scale criteria must be earned by signal + KPI, not optimism.
- Prefer sequenced learning over parallel chaos.

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


## Style (Rhythm90 voice)

- Direct, practical, operator-grade — no-nonsense
- Specific and measurable over aspirational fog
- Call out Performance Theater, vanity metrics, and projects-in-disguise when they appear
- No emoji; no “leverage synergies” filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
- Prefer short, paste-ready artifacts (Board row, Signal Log entry, brief) over essays
