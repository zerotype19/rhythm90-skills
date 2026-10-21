---
name: rhythm90-quarterly-planner
description: "Builds a quarterly Rhythm90 plan (objective, focus areas, plays, assumptions, signals, next steps) from business context and learning goals. Use when kicking off a quarter or resetting the Quarter Board."
---

# Rhythm90 Quarterly Planner

Use this skill in an assistant that can read Markdown instructions. It does not require the Rhythm90 website, an API key, a specific model, or another skill. Read [the method reference](references/method.md) for Rhythm90 vocabulary and evidence standards.

## Working approach

1. Identify the user's intended decision or artifact. Read the context they provided before asking questions.
2. Useful context may include: big challenge, learning goals, signals to watch. Treat these as prompts for judgment, not a mandatory form. Ask only for missing information that materially changes the answer. A provisional draft is appropriate when its assumptions are labeled.
3. Distinguish observed evidence (with its source and date when supplied), interpretation, and proposed action. Never invent customer research, sources, budgets, targets, owners, or completed work.
4. Apply the method below. Challenge vague claims constructively, explain the improvement, and retain the user's actual constraints.
5. Produce an editable Markdown artifact. Include unresolved questions and the next decision. When asked to save, use a user-selected destination and available tools; otherwise return the artifact in chat. Never claim persistent memory, scheduled work, or an external update without a confirmed tool result.

## Method

A quarter is a learning cycle, not a delivery calendar. Limit the Board to **1–3 high-impact plays**. The plan should make the macro-hypothesis of the quarter visible — what the organization needs to understand about the market.

Visibility over reporting: the Quarter Board is a cultural conversation tool, not a spreadsheet graveyard.

- Start with one to three Plays as a focus discipline. Check actual capacity and shared dependencies; one complex Play may be enough. Preserve an explicit user decision to use a different scope and explain the capacity implications.
- Every proposed play needs a path to a hypothesis + signal plan (or flag it as incomplete).
- Named owners, not “the growth team.”
- Outcomes must be concrete; squishy goals produce squishy learning.
- Next steps should sequence Kickoff → Pulse → learning capture → R&R. Distinguish delivery dates from evidence-maturity windows.
- Flag launch readiness, tracking gaps, and outcomes still maturing separately. Give every Play a next decision and review condition.
- If urgent work is added, make the displaced work or extra capacity explicit.

## Useful output

Use the relevant fields below. Omit irrelevant sections; mark missing evidence explicitly:

- **Objective**
- **Carryover Learnings**
- **Key Focus Areas** — list
- **Plays to Implement** — each: title, description, leads, expected_outcome
- **Key Assumptions**
- **Cross-Functional Needs**
- **Signals to Watch** — list
- **Next Steps** — list

## Evidence and review

Trace conclusions to the provided inputs. A plausible explanation is still a hypothesis. Include counter-evidence or alternative explanations when they could change the decision. Do not convert AI-simulated audiences into actual customer evidence. Decisions to fund, scale, or retire work remain recommendations until the practitioner accepts them.

Keep output proportional to the task. A short field note or one-page canvas is usually better than a sprawling report. Avoid jargon and fabricated certainty. If the user is studying, explain the reasoning and offer one exercise rather than doing all the thinking for them.

## Worked behavior check

Request: Plan the quarter from these six campaign requests.

Expected approach: Identify the learning question and distinguish strategic bets from delivery tasks. Recommend at most three candidate Plays; leave unsupported metrics and ownership open.

Before returning the artifact, check: Is the evidence real and traceable? Are assumptions visible? Is there a clear next decision? Does this help learning rather than simply add output?
