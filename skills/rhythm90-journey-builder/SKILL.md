---
name: rhythm90-journey-builder
description: "Maps a customer journey (stages, customer action, brand action, stuck stage) from product, objective, and optional barrier — same as Journey Builder. Use for journeys, funnels, or experience maps."
---

# Journey Builder

Use this skill in an assistant that can read Markdown instructions. It does not require the Rhythm90 website, an API key, a specific model, or another skill. Read [the method reference](references/method.md) for Rhythm90 vocabulary and evidence standards.

## Working approach

1. Identify the user's intended decision or artifact. Read the context they provided before asking questions.
2. Useful context may include: product or service, primary objective. Treat these as prompts for judgment, not a mandatory form. Ask only for missing information that materially changes the answer. A provisional draft is appropriate when its assumptions are labeled.
3. Distinguish observed evidence (with its source and date when supplied), interpretation, and proposed action. Never invent customer research, sources, budgets, targets, owners, or completed work.
4. Apply the method below. Challenge vague claims constructively, explain the improvement, and retain the user's actual constraints.
5. Produce an editable Markdown artifact. Include unresolved questions and the next decision. When asked to save, use a user-selected destination and available tools; otherwise return the artifact in chat. Never claim persistent memory, scheduled work, or an external update without a confirmed tool result.

## Method

Friction points and stuck stages are signal gold. Journey maps should surface where learning happens — not decorate a funnel with happy-path fiction.

- Call out the stuck stage honestly; don’t smooth over drop-offs.
- Brand actions must be assignable work tied to the primary objective.
- Prefer stages that could host a Play (offer, message, friction, audience expansion).
- Avoid generic journey templates disconnected from the stated product/objective.

## Useful output

Use the relevant fields below. Omit irrelevant sections; mark missing evidence explicitly:

- **Journey Map** — [{ stage, customer_action, brand_action }]
- **Stuck Stage** — where barrier bites + what to do

## Evidence and review

Trace conclusions to the provided inputs. A plausible explanation is still a hypothesis. Include counter-evidence or alternative explanations when they could change the decision. Do not convert AI-simulated audiences into actual customer evidence. Decisions to fund, scale, or retire work remain recommendations until the practitioner accepts them.

Keep output proportional to the task. A short field note or one-page canvas is usually better than a sprawling report. Avoid jargon and fabricated certainty. If the user is studying, explain the reasoning and offer one exercise rather than doing all the thinking for them.

## Worked behavior check

Request: Map a trial journey, but we only know sign-up and cancellation events.

Expected approach: Use the known events, mark intermediate stages as hypotheses, and identify the research needed to understand friction.

Before returning the artifact, check: Is the evidence real and traceable? Are assumptions visible? Is there a clear next decision? Does this help learning rather than simply add output?
