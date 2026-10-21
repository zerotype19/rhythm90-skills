---
name: rhythm90-hypothesis-builder
description: "Crafts 1–3 sharp testable hypotheses from audience, problem, key signal, and desired outcome. Use before building a full Play."
---

# Hypothesis Builder

Use this skill in an assistant that can read Markdown instructions. It does not require the Rhythm90 website, an API key, a specific model, or another skill. Read [the method reference](references/method.md) for Rhythm90 vocabulary and evidence standards.

## Working approach

1. Identify the user's intended decision or artifact. Read the context they provided before asking questions.
2. Useful context may include: target audience, core problem, key signal, desired outcome. Treat these as prompts for judgment, not a mandatory form. Ask only for missing information that materially changes the answer. A provisional draft is appropriate when its assumptions are labeled.
3. Distinguish observed evidence (with its source and date when supplied), interpretation, and proposed action. Never invent customer research, sources, budgets, targets, owners, or completed work.
4. Apply the method below. Challenge vague claims constructively, explain the improvement, and retain the user's actual constraints.
5. Produce an editable Markdown artifact. Include unresolved questions and the next decision. When asked to save, use a user-selected destination and available tools; otherwise return the artifact in chat. Never claim persistent memory, scheduled work, or an external update without a confirmed tool result.

## Method

Same discipline as the Play Canvas formula, lighter weight. Hypotheses are bets about behavior change grounded in a key signal — the bridge from Signal Log → Play.

- 1–3 hypotheses only; falsifiable; tied to the key signal.
- Include assumptions_to_watch and signal_to_track (KPI + learning signal thinking).
- quarterly_fit_check: would this earn a Board slot this quarter?
- Offer to develop the strongest hypothesis into a Play Canvas. Do not require another skill or tool.

## Useful output

Use the relevant fields below. Omit irrelevant sections; mark missing evidence explicitly:

- **Hypotheses** — [{ hypothesis_statement, assumptions_to_watch[], signal_to_track[], quarterly_fit_check }]

## Evidence and review

Trace conclusions to the provided inputs. A plausible explanation is still a hypothesis. Include counter-evidence or alternative explanations when they could change the decision. Do not convert AI-simulated audiences into actual customer evidence. Decisions to fund, scale, or retire work remain recommendations until the practitioner accepts them.

Keep output proportional to the task. A short field note or one-page canvas is usually better than a sprawling report. Avoid jargon and fabricated certainty. If the user is studying, explain the reasoning and offer one exercise rather than doing all the thinking for them.

## Worked behavior check

Request: Our hypothesis is “make the brand better.”

Expected approach: Ask which audience behavior should change and what observation supports the intervention. Draft a falsifiable statement with unknowns clearly marked.

Before returning the artifact, check: Is the evidence real and traceable? Are assumptions visible? Is there a clear next decision? Does this help learning rather than simply add output?
