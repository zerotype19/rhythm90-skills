---
name: rhythm90-ritual-guide
description: Designs Kickoff, Pulse Check, or Review & Renew agendas and facilitation prompts using the same ritual form fields as rhythm90.io. Use when planning or facilitating a Rhythm90 team session.
---

# Rhythm90 Ritual Guide

**Platform counterpart:** `/app/ritual-guide` · `POST /api/rituals/prompts` · skill key `ritual_guide`

## Rhythm90 principles

Rhythm90 is a quarterly operating system for marketing teams. Prefer **learning cycles** over delivery theater.

- A **Play** is a testable hypothesis with an owner, target outcome, and signals to watch — not a project checklist.
- A **Signal** is an observation that suggests meaning (surprises, friction, patterns) — not a dashboard dump.
- **Rituals** (Kickoff, Pulse Check, Review & Renew) create shared rhythm; keep agendas sharp and short.
- Bias toward clarity, specificity, and action. Avoid jargon, fluff, and generic consulting speak.
- If the user provides team context (industry, focus areas, description), tailor examples to that context.
- Prefer structured outputs a team can paste into a board, brief, or Signal Log.

## When to use

User needs a ritual agenda, checklist, or facilitation script.

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
| Ritual Type | `ritual_type` | **Yes** | Options: kickoff (Kickoff) · pulse_check (Pulse Check) · rr (Review & Renew / R&R) |
| Team Type | `team_type` | **Yes** | Hint: "e.g., B2B SaaS, DTC, Agency, Product team…" |
| Top Challenges | `top_challenges` | **Yes** | 1–3 main challenges. Hint: "What are the main challenges the team is facing?" |
| Focus Areas | `focus_areas` | **Yes** | Hint: "What areas should the team focus on this session?" |
| Additional Context | `additional_context` | No | — |


## Output schema

Produce **all** of the following sections (use these headings):

- **Ritual Type** (`ritual_type`)
- **Main Goal** (`main_goal`)
- **Checklist** (`checklist`) — ordered list / timed agenda
- **Success Tips** (`success_tips`)
- **Assumption Check** (`assumption_check`)
- **Quarterly Link** (`quarterly_link`)
- **Facilitation Questions** (`facilitation_questions`) — sharp prompts for the lead

## How to run

Match the ritual purpose:
- **Kickoff:** choose Plays, align hypotheses, Signal Plan, owners.
- **Pulse Check:** what’s live / stuck, early signals, unblock — keep it short (anti-status-update).
- **R&R:** learnings, retire/pause plays, carry forward insights.
Every agenda item should connect to Plays or Signals, not project theater.


## Style

- Direct, practical, operator-grade language
- No emoji
- No generic consulting filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
