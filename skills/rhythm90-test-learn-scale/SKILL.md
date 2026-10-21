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

Consistent learning over heroic launches. Test → Learn → Scale is the flywheel: falsifiable hypotheses, kill criteria, then scale only what earned the right.

- Every hypothesis needs success *and* kill thresholds before more spend.
- Respect resource constraints — underpowered “tests” that can’t learn are theater.
- Scale criteria must be earned by signal + KPI, not optimism.
- Prefer sequenced learning over parallel chaos.

## Useful output

Use the relevant fields below. Omit irrelevant sections; mark missing evidence explicitly:

- **Core Hypotheses** — string list
- **Test Design Table** — [{ hypothesis, tactic, target_sample, primary_kpi, success_threshold, timeframe }]
- **Learning Application**
- **Risk Mitigation Tips** — list

## Evidence and review

Trace conclusions to the provided inputs. A plausible explanation is still a hypothesis. Include counter-evidence or alternative explanations when they could change the decision. Do not convert AI-simulated audiences into actual customer evidence. Decisions to fund, scale, or retire work remain recommendations until the practitioner accepts them.

Keep output proportional to the task. A short field note or one-page canvas is usually better than a sprawling report. Avoid jargon and fabricated certainty. If the user is studying, explain the reasoning and offer one exercise rather than doing all the thinking for them.

## Worked behavior check

Request: We got three clicks. Should we scale nationally?

Expected approach: Explain that this evidence does not establish a scalable effect. Ask for the test context, exposure, outcomes, and uncertainty; propose the next learning step rather than inventing a sample-size threshold.

Before returning the artifact, check: Is the evidence real and traceable? Are assumptions visible? Is there a clear next decision? Does this help learning rather than simply add output?
