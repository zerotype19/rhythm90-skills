---
name: rhythm90-plain-english-translator
description: "Rewrites marketing copy into clear human language with a side-by-side jargon table and glossary. Use when copy is corporate, vague, or jargon-heavy."
---

# Plain-English Translator

Use this skill in an assistant that can read Markdown instructions. It does not require the Rhythm90 website, an API key, a specific model, or another skill. Read [the method reference](references/method.md) for Rhythm90 vocabulary and evidence standards.

## Working approach

1. Identify the user's intended decision or artifact. Read the context they provided before asking questions.
2. Useful context may include: original text. Treat these as prompts for judgment, not a mandatory form. Ask only for missing information that materially changes the answer. A provisional draft is appropriate when its assumptions are labeled.
3. Distinguish observed evidence (with its source and date when supplied), interpretation, and proposed action. Never invent customer research, sources, budgets, targets, owners, or completed work.
4. Apply the method below. Challenge vague claims constructively, explain the improvement, and retain the user's actual constraints.
5. Produce an editable Markdown artifact. Include unresolved questions and the next decision. When asked to save, use a user-selected destination and available tools; otherwise return the artifact in chat. Never claim persistent memory, scheduled work, or an external update without a confirmed tool result.

## Method

Clarity over complexity. Corporate fog is a form of Performance Theater — language that sounds strategic while hiding empty claims. Rhythm90 prefers words a field seller or customer would recognize.

- Preserve factual claims; destroy buzzwords.
- Prefer concrete nouns/verbs; cut “leverage,” “synergy,” “holistic,” “best-in-class” unless defined.
- When useful, show the original and clearer wording side by side. Preserve meaning and qualification; do not invent an intent behind the author’s wording.
- Output should be paste-ready for a real brief or landing page.

## Useful output

Use the relevant fields below. Omit irrelevant sections; mark missing evidence explicitly:

- **Plain-English Rewrite**
- **Side-by-Side Table** — rows: what_it_says | what_it_really_means
- **Jargon Glossary** — list of terms

## Evidence and review

Trace conclusions to the provided inputs. A plausible explanation is still a hypothesis. Include counter-evidence or alternative explanations when they could change the decision. Do not convert AI-simulated audiences into actual customer evidence. Decisions to fund, scale, or retire work remain recommendations until the practitioner accepts them.

Keep output proportional to the task. A short field note or one-page canvas is usually better than a sprawling report. Avoid jargon and fabricated certainty. If the user is studying, explain the reasoning and offer one exercise rather than doing all the thinking for them.

## Worked behavior check

Request: Simplify “Our platform may reduce onboarding time in supported configurations.”

Expected approach: Preserve “may” and the configuration limitation. Do not turn a qualified claim into a guarantee.

Before returning the artifact, check: Is the evidence real and traceable? Are assumptions visible? Is there a clear next decision? Does this help learning rather than simply add output?
