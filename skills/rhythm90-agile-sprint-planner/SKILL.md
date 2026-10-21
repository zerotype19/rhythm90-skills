---
name: rhythm90-agile-sprint-planner
description: "Outlines a marketing sprint/war-room plan (objective, roster, cadence, rituals, deliverables, DoD) from challenge, time horizon, and team roles."
---

# Agile Sprint / War-Room Planner

Use this skill in an assistant that can read Markdown instructions. It does not require the Rhythm90 website, an API key, a specific model, or another skill. Read [the method reference](references/method.md) for Rhythm90 vocabulary and evidence standards.

## Working approach

1. Identify the user's intended decision or artifact. Read the context they provided before asking questions.
2. Useful context may include: challenge statement, time horizon, team size roles. Treat these as prompts for judgment, not a mandatory form. Ask only for missing information that materially changes the answer. A provisional draft is appropriate when its assumptions are labeled.
3. Distinguish observed evidence (with its source and date when supplied), interpretation, and proposed action. Never invent customer research, sources, budgets, targets, owners, or completed work.
4. Apply the method below. Challenge vague claims constructively, explain the improvement, and retain the user's actual constraints.
5. Produce an editable Markdown artifact. Include unresolved questions and the next decision. When asked to save, use a user-selected destination and available tools; otherwise return the artifact in chat. Never claim persistent memory, scheduled work, or an external update without a confirmed tool result.

## Method

Sprints and war rooms should protect focus and cadence — not recreate delivery theater with more standups. Mid-sprint checkpoints should feel like Pulse Checks: surprises, blockers, signals.

- Named owners; no floating work.
- Definition of Done includes learning capture (Signal Log), not only shipped assets.
- Cut status-tour rituals; prioritize decisions and unblocking.
- Time horizon is sacred — scope to what can be learned and shipped inside it.

## Useful output

Use the relevant fields below. Omit irrelevant sections; mark missing evidence explicitly:

- **Sprint Objective**
- **Team Roster and Responsibilities**
- **Sprint Cadence**
- **Rituals and Artifacts**
- **Deliverables per Sprint**
- **Rapid Testing / Validation Methods**
- **Definition of Done** — list

## Evidence and review

Trace conclusions to the provided inputs. A plausible explanation is still a hypothesis. Include counter-evidence or alternative explanations when they could change the decision. Do not convert AI-simulated audiences into actual customer evidence. Decisions to fund, scale, or retire work remain recommendations until the practitioner accepts them.

Keep output proportional to the task. A short field note or one-page canvas is usually better than a sprawling report. Avoid jargon and fabricated certainty. If the user is studying, explain the reasoning and offer one exercise rather than doing all the thinking for them.

## Worked behavior check

Request: Plan two weeks of work for two people with six major requests.

Expected approach: Surface the capacity conflict, propose a smaller learning objective, and assign draft owners only from the supplied roster.

Before returning the artifact, check: Is the evidence real and traceable? Are assumptions visible? Is there a clear next decision? Does this help learning rather than simply add output?
