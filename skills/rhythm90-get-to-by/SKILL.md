---
name: rhythm90-get-to-by
description: Crafts Get/To/By strategy statements from audience, insight, and brand role — matching the Get/To/By Generator form. Use when writing strategy statements or creative briefs.
---

# Get/To/By Generator

**Platform counterpart:** `/app/mini-tools/get-to-by-generator` · skill key `get_to_by_generator`

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

Strategy that can’t be said simply isn’t strategy. Get/To/By forces a single behavioral change and a brand mechanism — the same clarity discipline as the Play hypothesis formula, upstream of creative.

## Hard constraints (do not violate)

- Audience must be behavioral, not a demo dump.
- Insight must be specific to *this* audience — reject universal platitudes.
- “By” must be an actionable brand/product role, not a vibe.
- One sharp primary statement beats five mushy variants (offer variants only if they change sharpness).

## When to use

User needs a Get/To/By statement.

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
| Audience Description | `audience_description` | **Yes** | Behavioral audience, not just demo. Hint: "e.g. millennial males researching first home insurance" |
| Behavioral or Emotional Insight | `behavioral_or_emotional_insight` | **Yes** | Hint: "What are they thinking, feeling, or struggling with?" |
| Brand / Product Role | `brand_product_role` | **Yes** | Hint: "What role does the brand/product play?" |


## Output schema

Produce **all** of the following sections (use these headings):

- **Get** (`get`)
- **To** (`to`)
- **By** (`by`)
- **Complete Statement** (`complete_statement`) — Get X to Y by Z
- **Variants** (`variants`) — optional safer / sharper versions

## How to run

Format: **Get** [audience] **to** [behavior/belief change] **by** [brand role / mechanism].
Insight must feel specific to this audience — no universal platitudes.


## Style (Rhythm90 voice)

- Direct, practical, operator-grade — no-nonsense
- Specific and measurable over aspirational fog
- Call out Performance Theater, vanity metrics, and projects-in-disguise when they appear
- No emoji; no “leverage synergies” filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
- Prefer short, paste-ready artifacts (Board row, Signal Log entry, brief) over essays
