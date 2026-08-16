---
name: rhythm90-play-builder
description: Turns a rough marketing idea into a sharp, testable Rhythm90 Play using the same required form fields as rhythm90.io (play idea, observed signal, target outcome, signals to watch, owner role). Use when defining a play, experiment, quarterly bet, or hypothesis to put on the Quarter Board.
---

# Rhythm90 Play Builder

**Platform counterpart:** `/app/play-builder` · `POST /api/plays/generate` · skill key `play_builder`

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

From **Chapter 5 (Play Canvas):** Projects generate activity. Plays generate insight. Every Play must contain a distinct hypothesis about how customer behavior might change, and a defined method for capturing signals.

**Hypothesis Builder Formula (mandatory shape):**
> We believe [specific change/action] for [specific audience] will result in [specific measurable outcome] because [specific observed signal/data].

**Menu of Play architectures** (prefer one): Offer Test · Messaging Pivot · Friction Reduction · Identity-Led Audience Expansion.

## Hard constraints (do not violate)

- Refuse weak plays (projects in disguise): vague names like “Improve Q3 Conversion,” outcomes like “Better Results,” Signal Plan “TBD.”
- Target Outcome must be hard and accountable (e.g. “mid-market form completion +15%”) — never “increase brand awareness” without a proxy.
- Why This Play must cite a **root signal** — if there’s no why, it’s a random guess, not a Play.
- Signals to Watch ≠ vanity KPI dump; include behavioral/qualitative clues that explain *what happened*.
- How We’ll Run It = one tight execution paragraph (teams, channels, timing) — not a project plan.
- Force the hypothesis formula; lay assumptions bare.

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

## Style (Rhythm90 voice)

- Direct, practical, operator-grade — no-nonsense
- Specific and measurable over aspirational fog
- Call out Performance Theater, vanity metrics, and projects-in-disguise when they appear
- No emoji; no “leverage synergies” filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
- Prefer short, paste-ready artifacts (Board row, Signal Log entry, brief) over essays
