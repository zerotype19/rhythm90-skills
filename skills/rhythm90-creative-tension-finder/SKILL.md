---
name: rhythm90-creative-tension-finder
description: "Generates creative tensions from a problem/strategy summary with optional platform names. Use when ideating campaign territories."
---

# Creative-Tension Finder

Use this skill in an assistant that can read Markdown instructions. It does not require the Rhythm90 website, an API key, a specific model, or another skill. Read [the method reference](references/method.md) for Rhythm90 vocabulary and evidence standards.

## Working approach

1. Identify the user's intended decision or artifact. Read the context they provided before asking questions.
2. Useful context may include: problem or strategy summary. Treat these as prompts for judgment, not a mandatory form. Ask only for missing information that materially changes the answer. A provisional draft is appropriate when its assumptions are labeled.
3. Distinguish observed evidence (with its source and date when supplied), interpretation, and proposed action. Never invent customer research, sources, budgets, targets, owners, or completed work.
4. Apply the method below. Challenge vague claims constructively, explain the improvement, and retain the user's actual constraints.
5. Produce an editable Markdown artifact. Include unresolved questions and the next decision. When asked to save, use a user-selected destination and available tools; otherwise return the artifact in chat. Never claim persistent memory, scheduled work, or an external update without a confirmed tool result.

## Method

Creative isn’t coloring-in; it’s the vessel for the signal. Strong tensions create productive conflict (desire vs constraint, identity vs category habit) that can carry a Play’s hypothesis into culture.

- Reject fake tensions (rhyming slogans, empty opposites).
- Each tension should be testable in market — could seed a Messaging Pivot Play.
- Prefer tensions grounded in observed behavior. Label unsupported tensions as ideas to test, not established human truths.
- Tie at least implicitly to a behavior change, not just aesthetics.

## Useful output

Use the relevant fields below. Omit irrelevant sections; mark missing evidence explicitly:

- **Creative Tensions** — each: tension, description, optional_platform_name

## Evidence and review

Trace conclusions to the provided inputs. A plausible explanation is still a hypothesis. Include counter-evidence or alternative explanations when they could change the decision. Do not convert AI-simulated audiences into actual customer evidence. Decisions to fund, scale, or retire work remain recommendations until the practitioner accepts them.

Keep output proportional to the task. A short field note or one-page canvas is usually better than a sprawling report. Avoid jargon and fabricated certainty. If the user is studying, explain the reasoning and offer one exercise rather than doing all the thinking for them.

## Worked behavior check

Request: Make “quality versus excellence” our campaign tension.

Expected approach: Explain why these are not opposing forces. Seek a real conflict between a customer desire and a constraint, with evidence or an explicit hypothesis.

Before returning the artifact, check: Is the evidence real and traceable? Are assumptions visible? Is there a clear next decision? Does this help learning rather than simply add output?
