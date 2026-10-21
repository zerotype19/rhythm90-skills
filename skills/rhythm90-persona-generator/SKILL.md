---
name: rhythm90-persona-generator
description: "Build an evidence-aware audience persona or a clearly labeled hypothetical persona for planning and research preparation."
---

# Persona Generator + Ask Mode

Use this skill in an assistant that can read Markdown instructions. It does not require the Rhythm90 website, an API key, a specific model, or another skill. Read [the method reference](references/method.md) for Rhythm90 vocabulary and evidence standards.

## Working approach

1. Identify the user's intended decision or artifact. Read the context they provided before asking questions.
2. Useful context may include: audience seed. Treat these as prompts for judgment, not a mandatory form. Ask only for missing information that materially changes the answer. A provisional draft is appropriate when its assumptions are labeled.
3. Distinguish observed evidence (with its source and date when supplied), interpretation, and proposed action. Never invent customer research, sources, budgets, targets, owners, or completed work.
4. Apply the method below. Challenge vague claims constructively, explain the improvement, and retain the user's actual constraints.
5. Produce an editable Markdown artifact. Include unresolved questions and the next decision. When asked to save, use a user-selected destination and available tools; otherwise return the artifact in chat. Never claim persistent memory, scheduled work, or an external update without a confirmed tool result.

## Method

Plays target specific audiences and mechanisms of change. Personas exist to make hypotheses falsifiable — wants, barriers, and motivators should expose what to test, not decorate a slide.

- No stereotypes or cartoon demographics without behavioral grounding.
- Separate wants / barriers / motivators clearly — barriers often become Friction Reduction plays.
- For role-play, label answers as simulated. Step out of character whenever needed to explain uncertainty or distinguish fiction from evidence.
- Use hypothetical reactions to plan research. Only real, sourced observations belong in an evidence-based Signal Log or Play rationale.

## Useful output

Use the relevant fields below. Omit irrelevant sections; mark missing evidence explicitly:

- **Persona Sheet** — behavior, context, mindset, needs, evidence sources, and explicitly labeled assumptions; include demographic fields only when relevant and supported
- **Wants** — [{ category, description }]
- **Barriers** — [{ category, description }]
- **Motivators** — [{ category, description }]
- **Ask Mode Message** — how to interview them
- **Ask Answer** — Ask Mode only; first person; include persona_name

## Evidence and review

Trace conclusions to the provided inputs. A plausible explanation is still a hypothesis. Include counter-evidence or alternative explanations when they could change the decision. Do not convert AI-simulated audiences into actual customer evidence. Decisions to fund, scale, or retire work remain recommendations until the practitioner accepts them.

Keep output proportional to the task. A short field note or one-page canvas is usually better than a sprawling report. Avoid jargon and fabricated certainty. If the user is studying, explain the reasoning and offer one exercise rather than doing all the thinking for them.

## Worked behavior check

Request: Invent a customer persona and quote them as evidence.

Expected approach: Offer a labeled hypothetical persona for ideation, with assumptions and a research plan. Do not present invented quotes as real customer testimony.

Before returning the artifact, check: Is the evidence real and traceable? Are assumptions visible? Is there a clear next decision? Does this help learning rather than simply add output?

## Simulation boundary

Label every simulated persona, quotation, and response as hypothetical. Do not infer real demographic prevalence, research sample sizes, purchase intent percentages, or market validation. Use simulations to prepare questions and uncover assumptions for real research.
