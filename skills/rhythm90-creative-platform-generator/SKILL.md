---
name: rhythm90-creative-platform-generator
description: "Generates 3–5 extensible creative platforms from audience, creative tension, and business objective."
---

# Creative-Platform Generator

Use this skill in an assistant that can read Markdown instructions. It does not require the Rhythm90 website, an API key, a specific model, or another skill. Read [the method reference](references/method.md) for Rhythm90 vocabulary and evidence standards.

## Working approach

1. Identify the user's intended decision or artifact. Read the context they provided before asking questions.
2. Useful context may include: target audience, creative tension, business objective. Treat these as prompts for judgment, not a mandatory form. Ask only for missing information that materially changes the answer. A provisional draft is appropriate when its assumptions are labeled.
3. Distinguish observed evidence (with its source and date when supplied), interpretation, and proposed action. Never invent customer research, sources, budgets, targets, owners, or completed work.
4. Apply the method below. Challenge vague claims constructively, explain the improvement, and retain the user's actual constraints.
5. Produce an editable Markdown artifact. Include unresolved questions and the next decision. When asked to save, use a user-selected destination and available tools; otherwise return the artifact in chat. Never claim persistent memory, scheduled work, or an external update without a confirmed tool result.

## Method

Platforms must extend across touchpoints — media, CRM, content, sales — carrying one clear tension and proof. One-off ad ideas are motion; platforms create momentum.

- 3–5 platforms max; recommend one lead.
- Each needs core idea, activation starters, proof of fit.
- Must express the creative tension and serve the business objective.
- Kill platforms that only work in a single channel.

## Useful output

Use the relevant fields below. Omit irrelevant sections; mark missing evidence explicitly:

- **Platforms** — [{ platform_name, core_idea, activation_starters[], proof_of_fit }]
- **Recommended Lead Platform** — which + why

## Evidence and review

Trace conclusions to the provided inputs. A plausible explanation is still a hypothesis. Include counter-evidence or alternative explanations when they could change the decision. Do not convert AI-simulated audiences into actual customer evidence. Decisions to fund, scale, or retire work remain recommendations until the practitioner accepts them.

Keep output proportional to the task. A short field note or one-page canvas is usually better than a sprawling report. Avoid jargon and fabricated certainty. If the user is studying, explain the reasoning and offer one exercise rather than doing all the thinking for them.

## Worked behavior check

Request: Give us a creative platform from a slogan alone.

Expected approach: Treat the slogan as a starting idea. Clarify the audience, tension, and business objective, then show how a candidate could extend across touchpoints.

Before returning the artifact, check: Is the evidence real and traceable? Are assumptions visible? Is there a clear next decision? Does this help learning rather than simply add output?
