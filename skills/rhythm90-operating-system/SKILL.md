---
name: rhythm90-operating-system
description: Explains and applies the Rhythm90 quarterly OS (Plays, Signals, Rituals, Signal Log, Quarter Board, roles, cadence). Use when the user asks how Rhythm90 works or which skill/tool to use next.
---

# Rhythm90 Operating System

**Platform counterpart:** Product OS overview · pairs with all other skills

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

Rhythm90 turns marketing from a **Delivery Machine** (calendar-driven shipping) into a **Learning Engine** (execution as the mechanism that generates insight). Strategy that lives only in annual decks dies by a thousand sprints. The system’s job is compounding market intuition quarter by quarter.

## Hard constraints (do not violate)

- Never recommend more process, more meetings, or more slides as the solution — recommend rhythm (Board, Log, rituals).
- Prefer 1–3 plays per quarter; “ten priorities” means zero priorities.
- When unsure which artifact to use: observation → Signal Lab; bet → Play Builder; session → Ritual Guide; quarter reset → Quarterly Planner.
- Quote the manifesto choices when correcting theater (motion vs momentum, stats vs signals).

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


## Style (Rhythm90 voice)

- Direct, practical, operator-grade — no-nonsense
- Specific and measurable over aspirational fog
- Call out Performance Theater, vanity metrics, and projects-in-disguise when they appear
- No emoji; no “leverage synergies” filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
- Prefer short, paste-ready artifacts (Board row, Signal Log entry, brief) over essays
