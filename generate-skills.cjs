#!/usr/bin/env node
/**
 * Generates Claude/Cursor Agent Skills for every Rhythm90 tool.
 * Run: node generate-skills.cjs
 */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

const SHARED_PRINCIPLES = `
## Rhythm90 principles (always apply)

Rhythm90 is a quarterly operating system for marketing teams. Prefer **learning cycles** over delivery theater.

- A **Play** is a testable hypothesis with an owner, target outcome, and signals to watch — not a project checklist.
- A **Signal** is an observation that suggests meaning (surprises, friction, patterns) — not a dashboard dump.
- **Rituals** (Kickoff, Pulse Check, Review & Renew) create shared rhythm; keep agendas sharp and short.
- Bias toward clarity, specificity, and action. Avoid jargon, fluff, and generic consulting speak.
- When team context is available (industry, focus areas, description), tailor examples to that context.
- Prefer structured outputs (headings, bullets, tables) that a team can paste into a board or brief.
`.trim();

const skills = [
  {
    name: 'rhythm90-play-builder',
    title: 'Rhythm90 Play Builder',
    description:
      'Turns a rough marketing idea into a sharp, testable Rhythm90 Play (hypothesis, how to run it, signals, owner, success). Use when the user wants to define a play, hypothesis, experiment, or quarterly bet.',
    inputs: [
      'Play idea — the change, experiment, or idea to test',
      'Why this play / observed signal — evidence that makes it worth testing',
      'Target outcome — measurable goal',
      'Signals to watch — leading indicators',
      'Owner role — who drives it (Rhythm90 Lead, Strategic Lead, Executional Lead, Signal Owner, etc.)',
      'Additional context (optional)',
    ],
    outputs: [
      'Play name',
      'Play hypothesis (We believe… will result in… because…)',
      'How to run it (practical steps)',
      'Signals to watch (list)',
      'Owner role',
      'What success looks like',
      'Why this play',
      'Assumptions / risks',
      'Cross-functional impact',
      'Quarterly link (how it ties to the quarter)',
    ],
    instructions: `
1. Ask for any missing required inputs before generating.
2. Stress-test specificity: audience, action, outcome, and because-clause must be concrete.
3. Reject vague outcomes like "more awareness" unless tied to a measurable proxy.
4. Produce the structured play fields listed under Output.
5. End with 2–3 sharp testing suggestions the team could run in the next Pulse Check.
`.trim(),
  },
  {
    name: 'rhythm90-signal-lab',
    title: 'Rhythm90 Signal Lab',
    description:
      'Interprets messy observations or data into clear Rhythm90 Signals (what it might mean, why it matters, next action). Use when the user has a surprise, friction point, performance shift, or field feedback to decode.',
    inputs: [
      'Observation — what was noticed (data, quote, behavior, anomaly)',
      'Context (optional) — channel, segment, campaign, timeframe',
    ],
    outputs: [
      'Signal summary (1–2 sentences)',
      'Why it matters',
      'Possible interpretations (2–3)',
      'Recommended next action',
      'Suggested Play link (optional play idea this could seed)',
      'What to log in the Signal Log',
    ],
    instructions: `
1. Distinguish **signal** (meaning) from **data** (what happened).
2. Prefer surprising, friction-heavy, or pattern-based observations over vanity metrics.
3. Offer interpretations as hypotheses, not certainties.
4. Recommend one concrete next action the team can take this week.
5. Format so it can be pasted into a Signal Log (summary / why / next action).
`.trim(),
  },
  {
    name: 'rhythm90-ritual-guide',
    title: 'Rhythm90 Ritual Guide',
    description:
      'Designs agendas and facilitation prompts for Kickoff, Pulse Check, or Review & Renew rituals. Use when planning or running a Rhythm90 team session.',
    inputs: [
      'Ritual type — kickoff | pulse_check | rr (Review & Renew)',
      'Team type (optional)',
      'Top challenges (optional)',
      'Focus areas (optional)',
      'Additional context (optional)',
    ],
    outputs: [
      'Session purpose (1 sentence)',
      'Timed agenda',
      'Facilitation questions',
      'Artifacts to bring / update (board, signal log, plays)',
      'Exit criteria (what “done” looks like)',
      'Common failure modes to avoid',
    ],
    instructions: `
1. Match the ritual:
   - **Kickoff**: choose Plays, align hypotheses, Signal Plan, owners.
   - **Pulse Check**: what’s live / stuck, early signals, unblock — keep it short.
   - **Review & Renew**: learnings, retire/pause plays, carry forward insights.
2. Keep agendas time-boxed and anti-status-update.
3. Tie every section back to Plays and Signals, not project theater.
`.trim(),
  },
  {
    name: 'rhythm90-media-mapper',
    title: 'Rhythm90 Media Mapper',
    description:
      'Builds a practical media strategy from audience, KPI, creative, budget, and learning goals (reach, channel journey, flighting, test plan, narrative). Use when planning media mix or media tests.',
    inputs: [
      'Audience type & fidelity',
      'Business goal & primary KPI',
      'Timeframe',
      'Message type & creative formats',
      'Competitive activity level',
      'Budget level & geographic scope',
      'Blocked channels (optional)',
      'Test type & learning focus',
    ],
    outputs: [
      'Reach strategy (effective frequency + min reach % + why)',
      'Channel journey (awareness / engagement / conversion)',
      'Flighting model + rationale',
      'Investment sufficiency (Sufficient / Borderline / Insufficient) + analogy',
      'Cohesion warnings',
      'Test plan + signal to watch',
      'Copy-ready strategic narrative',
    ],
    instructions: `
1. Match media weight to goal and budget honesty — call out underpowered plans.
2. Align channels to message type and available creative formats.
3. Always include a learning-ready test and a clear signal to watch.
4. End with a concise narrative a strategist could paste into a brief.
`.trim(),
  },
  {
    name: 'rhythm90-plain-english-translator',
    title: 'Plain-English Translator',
    description:
      'Rewrites marketing copy into clear human language with a side-by-side jargon table and glossary. Use when copy is corporate, vague, or jargon-heavy.',
    inputs: ['Original text / copy block'],
    outputs: [
      'Plain-English rewrite',
      'Side-by-side table (what it says → what it really means)',
      'Jargon glossary',
    ],
    instructions: `
1. Preserve intent and claims; remove fog.
2. Prefer concrete nouns and verbs; cut buzzwords.
3. Return structured sections matching Output.
`.trim(),
  },
  {
    name: 'rhythm90-get-to-by',
    title: 'Get/To/By Generator',
    description:
      'Crafts sharp Get/To/By strategy statements from audience, insight, and brand role. Use when defining strategy statements or creative briefs.',
    inputs: [
      'Audience description',
      'Behavioral or emotional insight',
      'Brand / product role',
    ],
    outputs: [
      'Get/To/By statement(s)',
      'Rationale',
      'Variants (optional stretch / safer versions)',
    ],
    instructions: `
1. Format: **Get** [audience] **to** [behavior/belief change] **by** [brand role / mechanism].
2. Make the insight feel specific to this audience, not universal platitudes.
3. Offer 2–3 variants with different sharpness levels if helpful.
`.trim(),
  },
  {
    name: 'rhythm90-creative-tension-finder',
    title: 'Creative-Tension Finder',
    description:
      'Generates creative tensions from a problem or strategy summary to spark campaign ideas. Use when ideating platforms, campaigns, or provocative territories.',
    inputs: ['Problem or strategy summary'],
    outputs: [
      'List of creative tensions (title + tension statement + why it works)',
      'Suggested campaign seeds per tension',
    ],
    instructions: `
1. A creative tension is a productive conflict (e.g. desire vs constraint, identity vs category habit).
2. Avoid fake tensions that are just rhyming slogans.
3. Deliver 4–7 tensions with brief rationale and a campaign seed each.
`.trim(),
  },
  {
    name: 'rhythm90-persona-generator',
    title: 'Persona Generator + Ask Mode',
    description:
      'Builds a detailed audience persona from a seed description and supports live Q&A in character. Use when creating personas or interviewing a synthetic customer.',
    inputs: [
      'Audience seed (who they are, context, job-to-be-done)',
      'For Ask Mode: follow-up question to the persona',
    ],
    outputs: [
      'Persona profile (name, role, goals, barriers, motivators, media habits, voice)',
      'Key wants / barriers / motivators',
      'How to message them',
      'Ask Mode: first-person answers staying in character',
    ],
    instructions: `
1. Build a vivid but non-stereotyped persona grounded in the seed.
2. Separate wants, barriers, and motivators clearly.
3. In Ask Mode, answer as the persona (first person), stay consistent, and flag uncertainty.
`.trim(),
  },
  {
    name: 'rhythm90-journey-builder',
    title: 'Journey Builder',
    description:
      'Maps a step-by-step customer journey with jobs, emotions, friction, and action tips. Use when designing journeys, funnels, or experience maps.',
    inputs: [
      'Product or service',
      'Primary objective',
      'Key barrier (optional)',
    ],
    outputs: [
      'Journey stages',
      'Per stage: customer job, emotion, friction, opportunity, action tip',
      'Priority moments that most affect the objective',
    ],
    instructions: `
1. Keep stages practical (typically 5–7).
2. Tie every stage to the primary objective and optional key barrier.
3. Action tips must be specific enough to assign as work.
`.trim(),
  },
  {
    name: 'rhythm90-test-learn-scale',
    title: 'Test-Learn-Scale Roadmap',
    description:
      'Designs an experimentation plan with hypotheses, KPIs, and scale criteria. Use when planning tests, growth experiments, or learning roadmaps.',
    inputs: [
      'Campaign or product context',
      'Resources or constraints (optional)',
    ],
    outputs: [
      'Test phases (Test → Learn → Scale)',
      'Hypotheses per phase',
      'KPIs / kill criteria / scale criteria',
      'Sequencing and resource notes',
    ],
    instructions: `
1. Make hypotheses falsifiable.
2. Define kill and scale criteria before recommending more spend.
3. Respect stated resource constraints.
`.trim(),
  },
  {
    name: 'rhythm90-agile-sprint-planner',
    title: 'Agile Sprint / War-Room Planner',
    description:
      'Outlines an agile sprint or war-room plan for a marketing challenge. Use when planning a sprint, war room, or time-boxed marketing push.',
    inputs: [
      'Challenge statement',
      'Time horizon',
      'Team size / roles',
    ],
    outputs: [
      'Sprint goal',
      'Workstreams and owners',
      'Daily / checkpoint cadence',
      'Deliverables and definition of done',
      'Risks and unblock plan',
    ],
    instructions: `
1. Optimize for learning + shipping inside the time horizon.
2. Assign clear owners; avoid floating work.
3. Include a mid-sprint Pulse-style checkpoint.
`.trim(),
  },
  {
    name: 'rhythm90-connected-media-matrix',
    title: 'Connected-Media Moment Matrix',
    description:
      'Creates a moment-based connected media plan from audience snapshot and conversion action. Use when planning moments, always-on vs burst, or connected media.',
    inputs: [
      'Audience snapshot',
      'Primary conversion action',
      'Seasonal or contextual triggers (optional)',
    ],
    outputs: [
      'Moment matrix (moment → channel → message → KPI)',
      'Sequencing / flighting notes',
      'Connected handoffs between channels',
    ],
    instructions: `
1. Anchor every moment to the conversion action.
2. Prefer a few high-quality connected moments over a long laundry list.
3. Call out where creative must change by channel.
`.trim(),
  },
  {
    name: 'rhythm90-synthetic-focus-group',
    title: 'Synthetic Focus Group',
    description:
      'Creates a five-persona synthetic focus group and supports Ask Mode group Q&A. Use when stress-testing messaging, offers, or creative with multiple viewpoints.',
    inputs: [
      'Topic or category',
      'Audience seed info',
      'Must-include segments (optional)',
      'For Ask Mode: question for the group',
    ],
    outputs: [
      'Five distinct personas with viewpoints',
      'Group synthesis: agreements, tensions, surprises',
      'Ask Mode: multi-voice answers + moderator summary',
    ],
    instructions: `
1. Personas must disagree in useful ways (not clones).
2. Include at least one skeptical voice.
3. In Ask Mode, label each speaker and close with a short synthesis.
`.trim(),
  },
  {
    name: 'rhythm90-five-cs',
    title: "5 C's Strategy Builder",
    description:
      "Runs a 5 C's analysis (Company, Customer, Category, Culture, Competition) to surface strategic challenges and opportunities. Use when doing situation analysis or strategy diagnosis.",
    inputs: [
      'Company',
      'Customer',
      'Category',
      'Culture',
      'Competition',
    ],
    outputs: [
      'Synthesis per C',
      'Strategic tensions',
      'Priority opportunities',
      'Implications for Plays this quarter',
    ],
    instructions: `
1. Treat each C as evidence, then synthesize across them.
2. Highlight contradictions (e.g. culture claim vs competitive reality).
3. End with Play-ready opportunity statements.
`.trim(),
  },
  {
    name: 'rhythm90-creative-platform-generator',
    title: 'Creative-Platform Generator',
    description:
      'Generates 3–5 campaign-able creative platforms that extend across touchpoints. Use when developing brand platforms, campaign territories, or big ideas.',
    inputs: [
      'Target audience',
      'Creative tension',
      'Business objective',
    ],
    outputs: [
      '3–5 platforms (name, idea, tension expression, proof, touchpoint extensions)',
      'Recommended lead platform + why',
    ],
    instructions: `
1. Platforms must be extensible across media, CRM, content, and sales — not one-off ads.
2. Tie each platform to the creative tension and business objective.
3. Include a simple proof or reason-to-believe.
`.trim(),
  },
  {
    name: 'rhythm90-hypothesis-builder',
    title: 'Hypothesis Builder',
    description:
      'Crafts 1–3 sharp, testable marketing hypotheses grounded in audience, problem, signal, and desired outcome. Use when forming bets before building a full Play.',
    inputs: [
      'Target audience',
      'Core problem',
      'Key signal',
      'Desired outcome',
    ],
    outputs: [
      '1–3 hypotheses in We believe… format',
      'What would falsify each',
      'Minimal test to run',
      'Suggested owner role',
    ],
    instructions: `
1. Hypotheses must be falsifiable and tied to the key signal.
2. Prefer fewer sharp hypotheses over many weak ones.
3. Offer a minimal test for each (not a full campaign).
`.trim(),
  },
  {
    name: 'rhythm90-operating-system',
    title: 'Rhythm90 Operating System',
    description:
      'Explains and applies the Rhythm90 quarterly OS: Plays, Signals, Rituals, Signal Log, Quarter Board, Review & Renew. Use when the user asks how Rhythm90 works or how to run the system.',
    inputs: [
      'User question about Rhythm90 practice, roles, cadence, or boards',
      'Optional: current team situation',
    ],
    outputs: [
      'Clear answer in Rhythm90 vocabulary',
      'Recommended ritual / artifact / next step',
      'Pointers to the right specialized skill when a tool is better',
    ],
    instructions: `
1. Teach the loop: Plan → Run → Learn → Reset every ~90 days.
2. Roles often include Rhythm90 Lead, Strategic Lead, Executional Lead, Signal Owner.
3. Artifacts: Quarter Board (Plays), Signal Log, Pulse Checks, R&R.
4. If the user needs a specific artifact built, route them to the matching skill (play-builder, signal-lab, ritual-guide, etc.).
5. Stay practical — give the next meeting agenda or board update, not theory alone.
`.trim(),
  },
];

function renderSkill(skill) {
  const body = `---
name: ${skill.name}
description: ${skill.description}
---

# ${skill.title}

${SHARED_PRINCIPLES}

## When to use

${skill.description}

## Required inputs

Ask the user for anything missing:

${skill.inputs.map((i) => `- ${i}`).join('\n')}

## Output

Produce:

${skill.outputs.map((o) => `- ${o}`).join('\n')}

## Instructions

${skill.instructions}

## Style

- Direct, practical, operator-grade language
- No emoji
- No generic "leverage synergies" consulting filler
- Prefer tables or labeled sections when comparing options
`;

  return body;
}

function writeSkill(skill) {
  const dir = path.join(ROOT, 'skills', skill.name);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'SKILL.md'), renderSkill(skill), 'utf8');
}

for (const skill of skills) {
  writeSkill(skill);
}

fs.writeFileSync(
  path.join(ROOT, 'skills', 'catalog.json'),
  JSON.stringify(
    skills.map((s) => ({ name: s.name, title: s.title, description: s.description })),
    null,
    2
  ),
  'utf8'
);

console.log(`Wrote ${skills.length} skills to skills/`);
