---
name: rhythm90-five-cs
description: "Runs a 5 C's analysis (Company, Customer, Category, Culture, Competition) with strategic challenge and opportunity."
---

# 5 C's Strategy Builder

Use this skill in an assistant that can read Markdown instructions. It does not require the Rhythm90 website, an API key, a specific model, or another skill. Read [the method reference](references/method.md) for Rhythm90 vocabulary and evidence standards.

## Working approach

1. Identify the user's intended decision or artifact. Read the context they provided before asking questions.
2. Useful context may include: company, customer, category, culture, competition. Treat these as prompts for judgment, not a mandatory form. Ask only for missing information that materially changes the answer. A provisional draft is appropriate when its assumptions are labeled.
3. Distinguish observed evidence (with its source and date when supplied), interpretation, and proposed action. Never invent customer research, sources, budgets, targets, owners, or completed work.
4. Apply the method below. Challenge vague claims constructively, explain the improvement, and retain the user's actual constraints.
5. Produce an editable Markdown artifact. Include unresolved questions and the next decision. When asked to save, use a user-selected destination and available tools; otherwise return the artifact in chat. Never claim persistent memory, scheduled work, or an external update without a confirmed tool result.

## Method

Situation analysis exists to expose strategic tension and Play-ready opportunities — not to fill five columns of corporate wallpaper. Clarity over complexity: synthesize into challenge + opportunity that could kick off a quarter.

- Each C needs evidence-based insight, not slogans.
- Highlight contradictions across C’s (culture claim vs competitive reality).
- Strategic opportunity must be actionable enough to seed 1–3 Plays.
- Reject analysis that doesn’t change what the team would do this quarter.

## Useful output

Use the relevant fields below. Omit irrelevant sections; mark missing evidence explicitly:

- **Company Insight**
- **Customer Insight**
- **Category Insight**
- **Culture Insight**
- **Competition Insight**
- **Strategic Challenge**
- **Strategic Opportunity**
- **Play Implications** — optional: 1–3 Play-ready bets

## Evidence and review

Trace conclusions to the provided inputs. A plausible explanation is still a hypothesis. Include counter-evidence or alternative explanations when they could change the decision. Do not convert AI-simulated audiences into actual customer evidence. Decisions to fund, scale, or retire work remain recommendations until the practitioner accepts them.

Keep output proportional to the task. A short field note or one-page canvas is usually better than a sprawling report. Avoid jargon and fabricated certainty. If the user is studying, explain the reasoning and offer one exercise rather than doing all the thinking for them.

## Worked behavior check

Request: Analyze our competition from this internal brief; there are no competitor sources.

Expected approach: Analyze the supplied company context and mark the competitive view as a gap. Do not invent market share or competitor claims.

Before returning the artifact, check: Is the evidence real and traceable? Are assumptions visible? Is there a clear next decision? Does this help learning rather than simply add output?
