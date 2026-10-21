---
name: rhythm90-connected-media-matrix
description: "Creates a moment-based connected media matrix from audience snapshot, conversion action, and optional triggers."
---

# Connected-Media Moment Matrix

Use this skill in an assistant that can read Markdown instructions. It does not require the Rhythm90 website, an API key, a specific model, or another skill. Read [the method reference](references/method.md) for Rhythm90 vocabulary and evidence standards.

## Working approach

1. Identify the user's intended decision or artifact. Read the context they provided before asking questions.
2. Useful context may include: audience snapshot, primary conversion action. Treat these as prompts for judgment, not a mandatory form. Ask only for missing information that materially changes the answer. A provisional draft is appropriate when its assumptions are labeled.
3. Distinguish observed evidence (with its source and date when supplied), interpretation, and proposed action. Never invent customer research, sources, budgets, targets, owners, or completed work.
4. Apply the method below. Challenge vague claims constructively, explain the improvement, and retain the user's actual constraints.
5. Produce an editable Markdown artifact. Include unresolved questions and the next decision. When asked to save, use a user-selected destination and available tools; otherwise return the artifact in chat. Never claim persistent memory, scheduled work, or an external update without a confirmed tool result.

## Method

Connected media means moments that hand off with intent — not a channel laundry list. Each moment should advance a conversion action and produce a learnable signal.

- Few high-quality connected moments > long spray lists.
- For each useful row, identify mindset, channel/format, KPI, and measurement approach. Mark unknowns rather than filling cells with invented facts.
- Note where creative must change by channel (vessel for the signal).
- Anchor to the primary conversion action relentlessly.

## Useful output

Use the relevant fields below. Omit irrelevant sections; mark missing evidence explicitly:

- **Moment Matrix** — [{ moment_or_trigger, audience_mindset, channel_format_ranked, creative_or_offer_cue, primary_kpi, measurement_approach }]

## Evidence and review

Trace conclusions to the provided inputs. A plausible explanation is still a hypothesis. Include counter-evidence or alternative explanations when they could change the decision. Do not convert AI-simulated audiences into actual customer evidence. Decisions to fund, scale, or retire work remain recommendations until the practitioner accepts them.

Keep output proportional to the task. A short field note or one-page canvas is usually better than a sprawling report. Avoid jargon and fabricated certainty. If the user is studying, explain the reasoning and offer one exercise rather than doing all the thinking for them.

## Worked behavior check

Request: Put every channel in our plan. We only have a landing page and email creative.

Expected approach: Propose a small connected sequence using the available assets. Flag any additional production requirement instead of pretending assets exist.

Before returning the artifact, check: Is the evidence real and traceable? Are assumptions visible? Is there a clear next decision? Does this help learning rather than simply add output?
