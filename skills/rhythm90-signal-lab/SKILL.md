---
name: rhythm90-signal-lab
description: "Interprets messy observations into clear Rhythm90 Signals (summary, why it matters, next action, quarterly link). Use when decoding surprises, friction, performance shifts, or field feedback for the Signal Log."
---

# Rhythm90 Signal Lab

Use this skill in an assistant that can read Markdown instructions. It does not require the Rhythm90 website, an API key, a specific model, or another skill. Read [the method reference](references/method.md) for Rhythm90 vocabulary and evidence standards.

## Working approach

1. Identify the user's intended decision or artifact. Read the context they provided before asking questions.
2. Useful context may include: observation. Treat these as prompts for judgment, not a mandatory form. Ask only for missing information that materially changes the answer. A provisional draft is appropriate when its assumptions are labeled.
3. Distinguish observed evidence (with its source and date when supplied), interpretation, and proposed action. Never invent customer research, sources, budgets, targets, owners, or completed work.
4. Apply the method below. Challenge vague claims constructively, explain the improvement, and retain the user's actual constraints.
5. Produce an editable Markdown artifact. Include unresolved questions and the next decision. When asked to save, use a user-selected destination and available tools; otherwise return the artifact in chat. Never claim persistent memory, scheduled work, or an external update without a confirmed tool result.

## Method

From **Chapter 7 (Signal Log):** Teams notice anomalies constantly; the environment erases them. Dashboards track *what*; signals suggest *what it might mean*. KPIs describe operational results; Signals can inform learning when examined against evidence.

**Six signal types:** Performance Shifts · Customer Behavior · Creative Response · Unexpected Outcomes · Field Feedback · Friction Points.

**Quality bar:** Specific · Surprising · Actionable · Explained (readable weeks later at R&R).

- Never treat a raw KPI restatement as a finished signal (“CTR was 2.1%”) — push to meaning and next action.
- Prefer anomalies that challenge assumptions over confirmations of the obvious.
- Log shape: What we observed → What it might mean → What we should do (30-second plain language).
- Call out when something is just data, not a signal.
- Next action should be something the team can do *this week* (test, ask sales, fix friction) — not “monitor dashboards.”

## Useful output

Use the relevant fields below. Omit irrelevant sections; mark missing evidence explicitly:

- **Signal Summary** — 1–2 sentences
- **Why It Matters**
- **Recommended Next Action**
- **Quarterly Link**
- **Possible Interpretations** — plausible alternative hypotheses, clearly labeled
- **Signal Log Paste Block** — summary / why / next action ready to paste

## Evidence and review

Trace conclusions to the provided inputs. A plausible explanation is still a hypothesis. Include counter-evidence or alternative explanations when they could change the decision. Do not convert AI-simulated audiences into actual customer evidence. Decisions to fund, scale, or retire work remain recommendations until the practitioner accepts them.

Keep output proportional to the task. A short field note or one-page canvas is usually better than a sprawling report. Avoid jargon and fabricated certainty. If the user is studying, explain the reasoning and offer one exercise rather than doing all the thinking for them.

## Worked behavior check

Request: CTR rose 20%. Tell me why customers love the offer.

Expected approach: Record the metric with its period and source. Explain that it does not establish customer preference or cause. Consider audience mix and placement changes; ask for downstream behavior or customer feedback.

Before returning the artifact, check: Is the evidence real and traceable? Are assumptions visible? Is there a clear next decision? Does this help learning rather than simply add output?
