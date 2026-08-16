---
name: rhythm90-five-cs
description: Runs a 5 C's analysis (Company, Customer, Category, Culture, Competition) with strategic challenge and opportunity — matching 5 C's Strategy Builder.
---

# 5 C's Strategy Builder

**Platform counterpart:** `/app/mini-tools/five-cs-strategy-builder` · skill key `five_cs_strategy_builder`

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

Situation analysis exists to expose strategic tension and Play-ready opportunities — not to fill five columns of corporate wallpaper. Clarity over complexity: synthesize into challenge + opportunity that could kick off a quarter.

## Hard constraints (do not violate)

- Each C needs evidence-based insight, not slogans.
- Highlight contradictions across C’s (culture claim vs competitive reality).
- Strategic opportunity must be actionable enough to seed 1–3 Plays.
- Reject analysis that doesn’t change what the team would do this quarter.

## When to use

User needs situation analysis across the five C inputs.

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
| Company | `company` | **Yes** | — |
| Customer | `customer` | **Yes** | — |
| Category | `category` | **Yes** | — |
| Culture | `culture` | **Yes** | — |
| Competition | `competition` | **Yes** | — |


## Output schema

Produce **all** of the following sections (use these headings):

- **Company Insight** (`company_insight`)
- **Customer Insight** (`customer_insight`)
- **Category Insight** (`category_insight`)
- **Culture Insight** (`culture_insight`)
- **Competition Insight** (`competition_insight`)
- **Strategic Challenge** (`strategic_challenge`)
- **Strategic Opportunity** (`strategic_opportunity`)
- **Play Implications** (`play_implications`) — optional: 1–3 Play-ready bets

## How to run

Treat each C as evidence, then synthesize. Highlight contradictions. End with Play-ready opportunity language.


## Style (Rhythm90 voice)

- Direct, practical, operator-grade — no-nonsense
- Specific and measurable over aspirational fog
- Call out Performance Theater, vanity metrics, and projects-in-disguise when they appear
- No emoji; no “leverage synergies” filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
- Prefer short, paste-ready artifacts (Board row, Signal Log entry, brief) over essays
