---
name: rhythm90-play-builder
description: "Turns a rough marketing idea into a sharp, testable Rhythm90 Play. Use when defining a play, experiment, quarterly bet, or hypothesis to put on the Quarter Board."
---

# Rhythm90 Play Builder

Use this skill in an assistant that can read Markdown instructions. It does not require the Rhythm90 website, an API key, a specific model, or another skill. Read [the method reference](references/method.md) for Rhythm90 vocabulary and evidence standards.

## Working approach

1. Identify the user's intended decision or artifact. Read the context they provided before asking questions.
2. Useful context may include: play idea, observed signal, target outcome, signals to watch, owner role. Treat these as prompts for judgment, not a mandatory form. Ask only for missing information that materially changes the answer. A provisional draft is appropriate when its assumptions are labeled.
3. Distinguish observed evidence (with its source and date when supplied), interpretation, and proposed action. Never invent customer research, sources, budgets, targets, owners, or completed work.
4. Apply the method below. Challenge vague claims constructively, explain the improvement, and retain the user's actual constraints.
5. Produce an editable Markdown artifact. Include unresolved questions and the next decision. When asked to save, use a user-selected destination and available tools; otherwise return the artifact in chat. Never claim persistent memory, scheduled work, or an external update without a confirmed tool result.

## Method

From **Chapter 5 (Play Canvas):** Projects generate activity. Plays generate insight. Every Play must contain a distinct hypothesis about how customer behavior might change, and a defined method for capturing signals.

**Useful hypothesis shape:**
> We believe [specific change/action] for [specific audience] will result in [specific measurable outcome] because [specific observed signal/data].

**Menu of Play architectures** (prefer one): Offer Test · Messaging Pivot · Friction Reduction · Identity-Led Audience Expansion.

- Flag weak plays (projects in disguise) and help improve them: vague names like “Improve Q3 Conversion,” outcomes like “Better Results,” Signal Plan “TBD.”
- Define the outcome, denominator, baseline, and observation window. Use an approved target when supplied; otherwise propose a measure and leave the target unresolved. Explain the limits of any proxy.
- Ground a Play in a root observation. If there is no evidence yet, label the draft exploratory and propose discovery before commitment.
- Signals to Watch ≠ vanity KPI dump; include behavioral/qualitative clues that explain *what happened*.
- How We’ll Run It = one tight execution paragraph (teams, channels, timing) — not a project plan.
- Use the hypothesis formula when it fits the task; lay assumptions bare.
- Before a controlled test, specify the comparison, eligible population, measurement checks, guardrails, and analysis plan. Assess feasibility from the actual traffic, baseline, and decision needs; do not invent a sample size or expected lift.
- When the evidence is early, choose discovery that can answer a narrower question. Qualitative findings can expose confusion without establishing a population-wide effect.

## Useful output

Use the relevant fields below. Omit irrelevant sections; mark missing evidence explicitly:

- **Play Name**
- **Play Hypothesis** — We believe… will result in… because…
- **Owner Role**
- **Target Outcome / What Success Looks Like**
- **Why This Play**
- **How We’ll Run It**
- **Signals to Watch** — bullet list
- **Assumptions / Risks**
- **Cross-Functional Impact**
- **Quarterly Link**
- **Evidence Plan** — comparison, outcome definition, observation window, guardrails, and agreed review conditions

## Evidence and review

Trace conclusions to the provided inputs. A plausible explanation is still a hypothesis. Include counter-evidence or alternative explanations when they could change the decision. Do not convert AI-simulated audiences into actual customer evidence. Decisions to fund, scale, or retire work remain recommendations until the practitioner accepts them.

Keep output proportional to the task. A short field note or one-page canvas is usually better than a sprawling report. Avoid jargon and fabricated certainty. If the user is studying, explain the reasoning and offer one exercise rather than doing all the thinking for them.

## Worked behavior check

Request: Turn “launch a new landing page” into a Play. We have no research yet.

Expected approach: Treat the page as a proposed intervention, not evidence. Ask what observation prompted it; if none exists, label it exploratory and propose a small discovery step. Do not manufacture a root signal or target.

Before returning the artifact, check: Is the evidence real and traceable? Are assumptions visible? Is there a clear next decision? Does this help learning rather than simply add output?
