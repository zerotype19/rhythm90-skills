---
name: rhythm90-test-learn-scale
description: "Designs an experimentation roadmap with hypotheses, test design table, learning application, and risk tips. Use for growth experiments and learning plans."
---

# Test-Learn-Scale Roadmap

Use this skill in an assistant that can read Markdown instructions. It does not require the Rhythm90 website, an API key, a specific model, or another skill. Read [the method reference](references/method.md) for Rhythm90 vocabulary and evidence standards.

## Working approach

1. Identify the user's intended decision or artifact. Read the context they provided before asking questions.
2. Useful context may include: campaign or product context. Treat these as prompts for judgment, not a mandatory form. Ask only for missing information that materially changes the answer. A provisional draft is appropriate when its assumptions are labeled.
3. Distinguish observed evidence (with its source and date when supplied), interpretation, and proposed action. Never invent customer research, sources, budgets, targets, owners, or completed work.
4. Apply the method below. Challenge vague claims constructively, explain the improvement, and retain the user's actual constraints.
5. Produce an editable Markdown artifact. Include unresolved questions and the next decision. When asked to save, use a user-selected destination and available tools; otherwise return the artifact in chat. Never claim persistent memory, scheduled work, or an external update without a confirmed tool result.

## Method

Build a roadmap around the decision the evidence must support. Distinguish discovery, a controlled test, and an observational comparison; match the conclusion to the design.

- Before a controlled test, define the hypothesis, primary outcome and denominator, guardrails, comparison, eligible population, observation window, and analysis plan.
- Assess feasibility from baseline rates, traffic, meaningful effect size, and available time. Ask for missing inputs rather than inventing a target sample. Qualitative research may answer a narrower question when a quantitative test is infeasible.
- Agree success, stop, and review conditions before inspecting results. Avoid declaring a winner from repeated informal peeking; use the chosen analysis plan. Operational failures and harm guardrails may require earlier intervention.
- Distinguish inconclusive evidence from evidence that an effect is absent. Record uncertainty and competing explanations, especially in before-and-after comparisons.
- Before scaling, check economics, customer quality, and whether the observed audience and conditions transfer. Propose a bounded next step when they may not.

## Useful output

Use the relevant fields below. Omit irrelevant sections; mark missing evidence explicitly:

- **Core Hypotheses** — string list
- **Evidence Plan** — hypothesis, design, comparison, outcome definition, guardrails, feasibility inputs, observation window, and decision rule; mark unknowns explicitly
- **Learning Application**
- **Risk Mitigation Tips** — list

## Evidence and review

Trace conclusions to the provided inputs. A plausible explanation is still a hypothesis. Include counter-evidence or alternative explanations when they could change the decision. Do not convert AI-simulated audiences into actual customer evidence. Decisions to fund, scale, or retire work remain recommendations until the practitioner accepts them.

Keep output proportional to the task. A short field note or one-page canvas is usually better than a sprawling report. Avoid jargon and fabricated certainty. If the user is studying, explain the reasoning and offer one exercise rather than doing all the thinking for them.

## Worked behavior check

Request: We got three clicks. Should we scale nationally?

Expected approach: Explain that this evidence does not establish a scalable effect. Ask for the test context, exposure, outcomes, and uncertainty; propose the next learning step rather than inventing a sample-size threshold.

Before returning the artifact, check: Is the evidence real and traceable? Are assumptions visible? Is there a clear next decision? Does this help learning rather than simply add output?
