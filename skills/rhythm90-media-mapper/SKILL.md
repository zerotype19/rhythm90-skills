---
name: rhythm90-media-mapper
description: Builds a structured media strategy (reach, channel journey, flighting, sufficiency, test design, narrative) from the same multi-select Media Mapper form as rhythm90.io. Use when planning media mix, flighting, or media tests.
---

# Rhythm90 Media Mapper

**Platform counterpart:** `/app/media-mapper` · `POST /api/media-mapper` · skill key `media_mapper`

## Rhythm90 principles

Rhythm90 is a quarterly operating system for marketing teams. Prefer **learning cycles** over delivery theater.

- A **Play** is a testable hypothesis with an owner, target outcome, and signals to watch — not a project checklist.
- A **Signal** is an observation that suggests meaning (surprises, friction, patterns) — not a dashboard dump.
- **Rituals** (Kickoff, Pulse Check, Review & Renew) create shared rhythm; keep agendas sharp and short.
- Bias toward clarity, specificity, and action. Avoid jargon, fluff, and generic consulting speak.
- If the user provides team context (industry, focus areas, description), tailor examples to that context.
- Prefer structured outputs a team can paste into a board, brief, or Signal Log.

## When to use

User needs a media strategy grounded in audience, KPI, creative, budget, and learning goals.

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
| Audience Type | `audience_type` | **Yes** | Options: New · Existing · Lapsed |
| Audience Fidelity | `audience_fidelity` | **Yes** | Options: Broad Demo · Modeled Segment · 1P Matched |
| Business Goal | `business_goal` | **Yes** | Options: Awareness · Demand · Loyalty · Product Launch |
| Primary KPI | `primary_kpi` | **Yes** | Options: ROAS · Leads · CAC · Sales · LTV |
| Timeframe | `timeframe` | **Yes** | Options: This Quarter · Next 30 Days · Long-Term |
| Message Type | `message_type` | **Yes** | Options: Brand Story · Product Feature · Promotional Offer · Testimonial |
| Available Creative Formats | `creative_formats` | **Yes** | Multi-select; at least one. Options: 15s Video · Static Display · Audio · Interactive · Long-form Video |
| Competitive Activity Level | `competitive_activity` | **Yes** | Options: Low · Moderate · High |
| Budget Level | `budget_level` | **Yes** | Options: Small · Medium · Large |
| Geographic Scope | `geographic_scope` | **Yes** | Options: National · Regional · Local |
| Blocked Channels | `blocked_channels` | No | Options: Social · CTV · Audio · Display · CRM · Search |
| Test Type | `test_type` | **Yes** | Options: Holdout · Matched Market · Sequential · None |
| Learning Focus | `learning_focus` | No | Max ~300 chars. Hint: "What do you want to learn?" |


## Output schema

Produce **all** of the following sections (use these headings):

- **Reach Strategy** (`reach_strategy`) — effective_frequency, recommended_reach %, note
- **Channel Journey** (`channel_journey`) — awareness / engagement / conversion channels + summary
- **Flighting Model** (`flighting_model`) — model + rationale
- **Investment Sufficiency** (`sufficiency_check`) — Sufficient | Borderline | Insufficient + analogy + warnings
- **Test Design** (`test_design`) — type, kpi, signal_to_log
- **Strategic Narrative** (`strategic_narrative`) — copy-ready
- **Strategy Cohesion Score** (`strategy_cohesion_score`) — 0–100 with brief why

## How to run

1. Be honest about underpowered plans — call Sufficiency accurately.
2. Align channels to message type and available creative formats.
3. Always include a learning-ready test and a clear signal to log.
4. Strategic Narrative should be pasteable into a brief.
5. If inputs conflict (e.g. broad audience + small budget + national), list cohesion warnings explicitly.


## Style

- Direct, practical, operator-grade language
- No emoji
- No generic consulting filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
