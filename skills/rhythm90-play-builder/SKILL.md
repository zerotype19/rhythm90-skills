---
name: rhythm90-play-builder
description: Turns a rough marketing idea into a sharp, testable Rhythm90 Play using the same required form fields as rhythm90.io (play idea, observed signal, target outcome, signals to watch, owner role). Use when defining a play, experiment, quarterly bet, or hypothesis to put on the Quarter Board.
---

# Rhythm90 Play Builder

**Platform counterpart:** `/app/play-builder` · `POST /api/plays/generate` · skill key `play_builder`

## Rhythm90 principles

Rhythm90 is a quarterly operating system for marketing teams. Prefer **learning cycles** over delivery theater.

- A **Play** is a testable hypothesis with an owner, target outcome, and signals to watch — not a project checklist.
- A **Signal** is an observation that suggests meaning (surprises, friction, patterns) — not a dashboard dump.
- **Rituals** (Kickoff, Pulse Check, Review & Renew) create shared rhythm; keep agendas sharp and short.
- Bias toward clarity, specificity, and action. Avoid jargon, fluff, and generic consulting speak.
- If the user provides team context (industry, focus areas, description), tailor examples to that context.
- Prefer structured outputs a team can paste into a board, brief, or Signal Log.

## When to use

User wants a Play for the Quarter Board, or to convert a Signal into a testable bet.

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
| Play Idea | `play_idea` | **Yes** | Core idea or challenge. Hint: "Describe the change, experiment, or idea you want to test or explore." |
| Why This Play? (Observed Signal) | `observed_signal` | **Yes** | UI label is “Why This Play?”; API key is observed_signal. Hint: "What feedback, data, or observation makes this worth testing?" |
| Target Outcome | `target_outcome` | **Yes** | Measurable goal (e.g. +15% bundling rate). Hint: "What's the measurable goal or improvement you're aiming for?" |
| Signals to Watch | `signals_to_watch` | **Yes** | Quantitative and qualitative leading indicators. Hint: "What clues or indicators will tell you if it’s working?" |
| Owner Role | `owner_role` | **Yes** | Options: Rhythm90 Lead · Strategic Lead · Executional Lead · Signal Owner · Other (specify) |
| Additional Notes | `additional_context` | No | Hint: "Add any helpful background or details." |


## Output schema

Produce **all** of the following sections (use these headings):

- **Play Name** (`play_name`)
- **Play Hypothesis** (`hypothesis`) — We believe… will result in… because…
- **Owner Role** (`owner_role`)
- **Target Outcome / What Success Looks Like** (`what_success_looks_like`)
- **Why This Play** (`why_this_play`)
- **How We’ll Run It** (`how_to_run_summary`)
- **Signals to Watch** (`signals_to_watch`) — bullet list
- **Assumptions / Risks** (`assumptions_risks`)
- **Cross-Functional Impact** (`cross_functional_impact`)
- **Quarterly Link** (`quarterly_link`)
- **Testing Suggestions** (`testing_suggestions`) — 2–3 Pulse Check–ready tests

## How to run

1. Stress-test specificity: audience, action, outcome, and because-clause must be concrete.
2. Reject vague outcomes like “more awareness” unless tied to a measurable proxy — ask to sharpen.
3. Hypothesis format: **We believe [action] for [audience/context] will result in [outcome] because [reasoning].**
4. How We’ll Run It should be practical steps a team can execute this quarter, not a strategy essay.
5. End with Testing Suggestions suitable for the next Pulse Check.

## Example (abbreviated)

**Input:** Ungate technical whitepapers for developers; signal = form friction killing trust; outcome = +15% inbound demos; watch dwell time + demo requests; owner = Strategic Lead.

**Hypothesis:** We believe removing gated forms on technical whitepapers for developers will increase inbound demo requests ~15% because friction currently signals “we don’t trust you” and suppresses qualified interest.

## Style

- Direct, practical, operator-grade language
- No emoji
- No generic consulting filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
