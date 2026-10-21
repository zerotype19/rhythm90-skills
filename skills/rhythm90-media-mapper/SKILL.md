---
name: rhythm90-media-mapper
description: "Builds a structured media strategy (reach, channel journey, flighting, sufficiency, test design, narrative) from audience, budget, goals, and evidence. Use when planning media mix, flighting, or media tests."
---

# Rhythm90 Media Mapper

Use this skill in an assistant that can read Markdown instructions. It does not require the Rhythm90 website, an API key, a specific model, or another skill. Read [the method reference](references/method.md) for Rhythm90 vocabulary and evidence standards.

## Working approach

1. Identify the user's intended decision or artifact. Read the context they provided before asking questions.
2. Useful context may include: audience type, audience fidelity, business goal, primary kpi, timeframe, message type, creative formats, competitive activity, budget level, geographic scope, test type. Treat these as prompts for judgment, not a mandatory form. Ask only for missing information that materially changes the answer. A provisional draft is appropriate when its assumptions are labeled.
3. Distinguish observed evidence (with its source and date when supplied), interpretation, and proposed action. Never invent customer research, sources, budgets, targets, owners, or completed work.
4. Apply the method below. Challenge vague claims constructively, explain the improvement, and retain the user's actual constraints.
5. Produce an editable Markdown artifact. Include unresolved questions and the next decision. When asked to save, use a user-selected destination and available tools; otherwise return the artifact in chat. Never claim persistent memory, scheduled work, or an external update without a confirmed tool result.

## Method

Media is how the hypothesis meets the market — not a channel shopping list. Rhythm90 media thinking asks: Is the plan **sufficient** to learn and move the KPI, or is it a garden hose filling a stadium? Creative is the *vessel for the signal*; polish that hides the hypothesis is theater.

Prefer connected journeys and learning-ready tests over “spray and pray.” Cheaper clicks that trash quality are false wins (see Real Talk / retention signals).

- Assess investment sufficiency only when budget, costs, audience scale, and learning needs are known. Otherwise mark it undetermined and identify the required inputs.
- Align channels to message type + available creative formats — don’t invent formats they don’t have.
- Always include a test design and a **signal to log** (learning), not only a KPI.
- Flag cohesion failures (broad audience + tiny budget + national, video plan with no video assets, etc.).
- Strategic narrative must be copy-ready and one-page clear.

## Useful output

Use the relevant fields below. Omit irrelevant sections; mark missing evidence explicitly:

- **Reach Strategy** — audience approach and rationale; quantify reach or frequency only from supplied evidence or a transparent calculation
- **Channel Journey** — awareness / engagement / conversion channels + summary
- **Flighting Model** — model + rationale
- **Investment Sufficiency** — Sufficient | Borderline | Insufficient | Undetermined, with evidence and assumptions
- **Test Design** — type, kpi, signal_to_log
- **Strategic Narrative** — copy-ready
- **Cohesion Review** — concrete strengths, conflicts, and missing inputs; avoid an uncalibrated numerical score

## Evidence and review

Trace conclusions to the provided inputs. A plausible explanation is still a hypothesis. Include counter-evidence or alternative explanations when they could change the decision. Do not convert AI-simulated audiences into actual customer evidence. Decisions to fund, scale, or retire work remain recommendations until the practitioner accepts them.

Keep output proportional to the task. A short field note or one-page canvas is usually better than a sprawling report. Avoid jargon and fabricated certainty. If the user is studying, explain the reasoning and offer one exercise rather than doing all the thinking for them.

## Worked behavior check

Request: Recommend reach and frequency for a national launch. We have not set a budget.

Expected approach: Describe candidate channel roles, but leave numerical sufficiency undetermined. Ask for budget, costs, audience scale, and the learning objective before estimating reach.

Before returning the artifact, check: Is the evidence real and traceable? Are assumptions visible? Is there a clear next decision? Does this help learning rather than simply add output?
