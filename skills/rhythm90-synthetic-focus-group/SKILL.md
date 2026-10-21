---
name: rhythm90-synthetic-focus-group
description: "Explore hypothetical audience reactions to a concept and turn them into questions for real research. Use for ideation and interview preparation, never as customer validation."
---

# Synthetic Focus Group

Use this skill in an assistant that can read Markdown instructions. It does not require the Rhythm90 website, an API key, a specific model, or another skill. Read [the method reference](references/method.md) for Rhythm90 vocabulary and evidence standards.

## Working approach

1. Identify the user's intended decision or artifact. Read the context they provided before asking questions.
2. Useful context may include: topic or category, audience seed info. Treat these as prompts for judgment, not a mandatory form. Ask only for missing information that materially changes the answer. A provisional draft is appropriate when its assumptions are labeled.
3. Distinguish observed evidence (with its source and date when supplied), interpretation, and proposed action. Never invent customer research, sources, budgets, targets, owners, or completed work.
4. Apply the method below. Challenge vague claims constructively, explain the improvement, and retain the user's actual constraints.
5. Produce an editable Markdown artifact. Include unresolved questions and the next decision. When asked to save, use a user-selected destination and available tools; otherwise return the artifact in chat. Never claim persistent memory, scheduled work, or an external update without a confirmed tool result.

## Method

Use synthetic voices to surface friction, disbelief, and unexpected outcomes *before* spend — the same curiosity the Signal Log rewards. Disagreement is a feature.

- Use a small set of distinct hypothetical viewpoints; include a skeptic when useful.
- No clone squad agreeing with the brief.
- Label simulated speakers and synthesize questions for real research. Do not log simulated feedback as an observed Signal.
- Prefer feedback that challenges the hypothesis, not cheerleading.

## Useful output

Use the relevant fields below. Omit irrelevant sections; mark missing evidence explicitly:

- **Persona Lineup** — hypothetical viewpoints with relevant behaviors, motivations, barriers, and assumptions; omit invented demographic detail that does not help the task
- **Ask Mode Message**
- **Ask Answer** — Ask Mode: multi-voice + synthesis; include focus_group_size, persona_names

## Evidence and review

Trace conclusions to the provided inputs. A plausible explanation is still a hypothesis. Include counter-evidence or alternative explanations when they could change the decision. Do not convert AI-simulated audiences into actual customer evidence. Decisions to fund, scale, or retire work remain recommendations until the practitioner accepts them.

Keep output proportional to the task. A short field note or one-page canvas is usually better than a sprawling report. Avoid jargon and fabricated certainty. If the user is studying, explain the reasoning and offer one exercise rather than doing all the thinking for them.

## Worked behavior check

Request: Have five synthetic buyers validate our new pricing.

Expected approach: Explain that simulated viewpoints cannot validate demand. Offer labeled hypothetical objections and interview questions for real buyers; do not invent research findings or purchase probabilities.

Before returning the artifact, check: Is the evidence real and traceable? Are assumptions visible? Is there a clear next decision? Does this help learning rather than simply add output?

## Simulation boundary

Label every simulated persona, quotation, and response as hypothetical. Do not infer real demographic prevalence, research sample sizes, purchase intent percentages, or market validation. Use simulations to prepare questions and uncover assumptions for real research.
