---
name: rhythm90-creative-tension-finder
description: Generates creative tensions from a problem/strategy summary with optional platform names — same contract as Creative-Tension Finder. Use when ideating campaign territories.
---

# Creative-Tension Finder

**Platform counterpart:** `/app/mini-tools/creative-tension-finder` · skill key `creative_tension_finder`

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

Creative isn’t coloring-in; it’s the vessel for the signal. Strong tensions create productive conflict (desire vs constraint, identity vs category habit) that can carry a Play’s hypothesis into culture.

## Hard constraints (do not violate)

- Reject fake tensions (rhyming slogans, empty opposites).
- Each tension should be testable in market — could seed a Messaging Pivot Play.
- Prefer tensions that reveal human truth over brand-safe wordplay.
- Tie at least implicitly to a behavior change, not just aesthetics.

## When to use

User has a problem or strategy summary and wants creative tensions.

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
| Problem or Strategy Summary | `problem_or_strategy_summary` | **Yes** | Core challenge, opportunity, or strategy. |


## Output schema

Produce **all** of the following sections (use these headings):

- **Creative Tensions** (`tensions`) — each: tension, description, optional_platform_name

## How to run

Deliver 4–7 tensions. A tension is a productive conflict (desire vs constraint, identity vs category habit) — not rhyming slogans.
Avoid fake tensions. Include a short description and optional platform name per item.


## Style (Rhythm90 voice)

- Direct, practical, operator-grade — no-nonsense
- Specific and measurable over aspirational fog
- Call out Performance Theater, vanity metrics, and projects-in-disguise when they appear
- No emoji; no “leverage synergies” filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
- Prefer short, paste-ready artifacts (Board row, Signal Log entry, brief) over essays
