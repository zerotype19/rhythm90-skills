#!/usr/bin/env node
/**
 * Generates robust Claude/Cursor Agent Skills for every Rhythm90 tool.
 * Field specs mirror the rhythm90.io forms / API body keys.
 * Run: node generate-skills.cjs
 */
const fs = require('fs');
const path = require('path');
const { canonInline, bySkill } = require('./philosophy.cjs');
const ROOT = __dirname;

const INTAKE = `## Intake protocol (critical)

These skills replace product forms. Do **not** invent missing required fields.

1. Collect **Required** inputs before generating. Ask in one concise message (bulleted list).
2. For fields with **Options**, only accept listed values (or ask them to pick).
3. Accept partial free-text if the user dumps context in prose — then map it to the field schema and confirm gaps.
4. Optional fields: proceed without them; note assumptions briefly.
5. After generating, offer one follow-up: refine, save-as-play/signal framing, or run a related skill.`;

const STYLE = `## Style (Rhythm90 voice)

- Direct, practical, operator-grade — no-nonsense
- Specific and measurable over aspirational fog
- Call out Performance Theater, vanity metrics, and projects-in-disguise when they appear
- No emoji; no “leverage synergies” filler
- Use markdown headings matching the Output schema field names
- Prefer tables when comparing options or listing stages
- Prefer short, paste-ready artifacts (Board row, Signal Log entry, brief) over essays`;

function fieldBlock(fields) {
  const lines = ['| Field | API key | Required | Notes |', '|---|---|---|---|'];
  for (const f of fields) {
    const notes = [];
    if (f.help) notes.push(f.help);
    if (f.options) notes.push('Options: ' + f.options.join(' · '));
    if (f.placeholder) notes.push('Hint: "' + f.placeholder.replace(/"/g, "'") + '"');
    lines.push(
      `| ${f.label} | \`${f.key}\` | ${f.required ? '**Yes**' : 'No'} | ${notes.join(' ') || '—'} |`
    );
  }
  return lines.join('\n');
}

function outputBlock(outputs) {
  return outputs.map((o) => `- **${o.name}** (\`${o.key}\`)${o.note ? ` — ${o.note}` : ''}`).join('\n');
}

function render(skill) {
  const ph = bySkill[skill.name] || {};
  const philosophy = ph.philosophy
    ? `## Philosophy for this skill\n\n${ph.philosophy}\n`
    : '';
  const constraints = ph.constraints
    ? `## Hard constraints (do not violate)\n\n${ph.constraints}\n`
    : '';

  return `---
name: ${skill.name}
description: ${skill.description}
---

# ${skill.title}

${skill.platform ? `**Platform counterpart:** ${skill.platform}\n` : ''}
${canonInline}

${philosophy}
${constraints}
## When to use

${skill.when}

${INTAKE}

## Inputs (match the product form)

${fieldBlock(skill.fields)}

${skill.extraIntake ? `\n### Additional intake notes\n\n${skill.extraIntake}\n` : ''}
## Output schema

Produce **all** of the following sections (use these headings):

${outputBlock(skill.outputs)}

## How to run

${skill.instructions}

${skill.example ? `## Example (abbreviated)\n\n${skill.example}\n` : ''}
${STYLE}
`;
}

const skills = [
  {
    name: 'rhythm90-play-builder',
    title: 'Rhythm90 Play Builder',
    platform: '`/app/play-builder` · `POST /api/plays/generate` · skill key `play_builder`',
    description:
      'Turns a rough marketing idea into a sharp, testable Rhythm90 Play using the same required form fields as rhythm90.io (play idea, observed signal, target outcome, signals to watch, owner role). Use when defining a play, experiment, quarterly bet, or hypothesis to put on the Quarter Board.',
    when: 'User wants a Play for the Quarter Board, or to convert a Signal into a testable bet.',
    fields: [
      {
        label: 'Play Idea',
        key: 'play_idea',
        required: true,
        help: 'Core idea or challenge.',
        placeholder: 'Describe the change, experiment, or idea you want to test or explore.',
      },
      {
        label: 'Why This Play? (Observed Signal)',
        key: 'observed_signal',
        required: true,
        help: 'UI label is “Why This Play?”; API key is observed_signal.',
        placeholder: 'What feedback, data, or observation makes this worth testing?',
      },
      {
        label: 'Target Outcome',
        key: 'target_outcome',
        required: true,
        help: 'Measurable goal (e.g. +15% bundling rate).',
        placeholder: "What's the measurable goal or improvement you're aiming for?",
      },
      {
        label: 'Signals to Watch',
        key: 'signals_to_watch',
        required: true,
        help: 'Quantitative and qualitative leading indicators.',
        placeholder: 'What clues or indicators will tell you if it’s working?',
      },
      {
        label: 'Owner Role',
        key: 'owner_role',
        required: true,
        options: ['Rhythm90 Lead', 'Strategic Lead', 'Executional Lead', 'Signal Owner', 'Other (specify)'],
      },
      {
        label: 'Additional Notes',
        key: 'additional_context',
        required: false,
        placeholder: 'Add any helpful background or details.',
      },
    ],
    outputs: [
      { name: 'Play Name', key: 'play_name' },
      { name: 'Play Hypothesis', key: 'hypothesis', note: 'We believe… will result in… because…' },
      { name: 'Owner Role', key: 'owner_role' },
      { name: 'Target Outcome / What Success Looks Like', key: 'what_success_looks_like' },
      { name: 'Why This Play', key: 'why_this_play' },
      { name: 'How We’ll Run It', key: 'how_to_run_summary' },
      { name: 'Signals to Watch', key: 'signals_to_watch', note: 'bullet list' },
      { name: 'Assumptions / Risks', key: 'assumptions_risks' },
      { name: 'Cross-Functional Impact', key: 'cross_functional_impact' },
      { name: 'Quarterly Link', key: 'quarterly_link' },
      { name: 'Testing Suggestions', key: 'testing_suggestions', note: '2–3 Pulse Check–ready tests' },
    ],
    instructions: `1. Stress-test specificity: audience, action, outcome, and because-clause must be concrete.
2. Reject vague outcomes like “more awareness” unless tied to a measurable proxy — ask to sharpen.
3. Hypothesis format: **We believe [action] for [audience/context] will result in [outcome] because [reasoning].**
4. How We’ll Run It should be practical steps a team can execute this quarter, not a strategy essay.
5. End with Testing Suggestions suitable for the next Pulse Check.`,
    example: `**Input:** Ungate technical whitepapers for developers; signal = form friction killing trust; outcome = +15% inbound demos; watch dwell time + demo requests; owner = Strategic Lead.

**Hypothesis:** We believe removing gated forms on technical whitepapers for developers will increase inbound demo requests ~15% because friction currently signals “we don’t trust you” and suppresses qualified interest.`,
  },
  {
    name: 'rhythm90-signal-lab',
    title: 'Rhythm90 Signal Lab',
    platform: '`/app/signal-lab` · `POST /api/signals/interpret` · skill key `signal_lab`',
    description:
      'Interprets messy observations into clear Rhythm90 Signals (summary, why it matters, next action, quarterly link) using the same inputs as Signal Lab. Use when decoding surprises, friction, performance shifts, or field feedback for the Signal Log.',
    when: 'User has an observation and needs meaning + next action for the Signal Log.',
    fields: [
      {
        label: 'Observation',
        key: 'observation',
        required: true,
        help: 'Surprising result, customer behavior, friction, creative response, field feedback.',
        placeholder: 'Describe what you observed…',
      },
      {
        label: 'Context',
        key: 'context',
        required: false,
        help: 'Play, team, audience, channel, or moment.',
        placeholder: 'Add any relevant context…',
      },
    ],
    outputs: [
      { name: 'Signal Summary', key: 'signal_summary', note: '1–2 sentences' },
      { name: 'Why It Matters', key: 'why_it_matters' },
      { name: 'Recommended Next Action', key: 'recommended_next_action' },
      { name: 'Quarterly Link', key: 'quarterly_link' },
      { name: 'Possible Interpretations', key: 'interpretations', note: '2–3 hypotheses (extra vs product UI; useful)' },
      { name: 'Signal Log Paste Block', key: 'signal_log_block', note: 'summary / why / next action ready to paste' },
    ],
    instructions: `1. Distinguish **signal** (meaning) from **data** (what happened).
2. Prefer surprising, friction-heavy, or pattern-based observations over vanity metrics.
3. Offer interpretations as hypotheses, not certainties.
4. Recommended Next Action must be doable this week.
5. Always include a paste-ready Signal Log block.`,
  },
  {
    name: 'rhythm90-ritual-guide',
    title: 'Rhythm90 Ritual Guide',
    platform: '`/app/ritual-guide` · `POST /api/rituals/prompts` · skill key `ritual_guide`',
    description:
      'Designs Kickoff, Pulse Check, or Review & Renew agendas and facilitation prompts using the same ritual form fields as rhythm90.io. Use when planning or facilitating a Rhythm90 team session.',
    when: 'User needs a ritual agenda, checklist, or facilitation script.',
    fields: [
      {
        label: 'Ritual Type',
        key: 'ritual_type',
        required: true,
        options: ['kickoff (Kickoff)', 'pulse_check (Pulse Check)', 'rr (Review & Renew / R&R)'],
      },
      {
        label: 'Team Type',
        key: 'team_type',
        required: true,
        placeholder: 'e.g., B2B SaaS, DTC, Agency, Product team…',
      },
      {
        label: 'Top Challenges',
        key: 'top_challenges',
        required: true,
        help: '1–3 main challenges.',
        placeholder: 'What are the main challenges the team is facing?',
      },
      {
        label: 'Focus Areas',
        key: 'focus_areas',
        required: true,
        placeholder: 'What areas should the team focus on this session?',
      },
      {
        label: 'Additional Context',
        key: 'additional_context',
        required: false,
      },
    ],
    outputs: [
      { name: 'Ritual Type', key: 'ritual_type' },
      { name: 'Main Goal', key: 'main_goal' },
      { name: 'Checklist', key: 'checklist', note: 'ordered list / timed agenda' },
      { name: 'Success Tips', key: 'success_tips' },
      { name: 'Assumption Check', key: 'assumption_check' },
      { name: 'Quarterly Link', key: 'quarterly_link' },
      { name: 'Facilitation Questions', key: 'facilitation_questions', note: 'sharp prompts for the lead' },
    ],
    instructions: `Match the ritual purpose:
- **Kickoff:** choose Plays, align hypotheses, Signal Plan, owners.
- **Pulse Check:** what’s live / stuck, early signals, unblock — keep it short (anti-status-update).
- **R&R:** learnings, retire/pause plays, carry forward insights.
Every agenda item should connect to Plays or Signals, not project theater.`,
  },
  {
    name: 'rhythm90-media-mapper',
    title: 'Rhythm90 Media Mapper',
    platform: '`/app/media-mapper` · `POST /api/media-mapper` · skill key `media_mapper`',
    description:
      'Builds a structured media strategy (reach, channel journey, flighting, sufficiency, test design, narrative) from the same multi-select Media Mapper form as rhythm90.io. Use when planning media mix, flighting, or media tests.',
    when: 'User needs a media strategy grounded in audience, KPI, creative, budget, and learning goals.',
    fields: [
      { label: 'Audience Type', key: 'audience_type', required: true, options: ['New', 'Existing', 'Lapsed'] },
      {
        label: 'Audience Fidelity',
        key: 'audience_fidelity',
        required: true,
        options: ['Broad Demo', 'Modeled Segment', '1P Matched'],
      },
      {
        label: 'Business Goal',
        key: 'business_goal',
        required: true,
        options: ['Awareness', 'Demand', 'Loyalty', 'Product Launch'],
      },
      {
        label: 'Primary KPI',
        key: 'primary_kpi',
        required: true,
        options: ['ROAS', 'Leads', 'CAC', 'Sales', 'LTV'],
      },
      {
        label: 'Timeframe',
        key: 'timeframe',
        required: true,
        options: ['This Quarter', 'Next 30 Days', 'Long-Term'],
      },
      {
        label: 'Message Type',
        key: 'message_type',
        required: true,
        options: ['Brand Story', 'Product Feature', 'Promotional Offer', 'Testimonial'],
      },
      {
        label: 'Available Creative Formats',
        key: 'creative_formats',
        required: true,
        help: 'Multi-select; at least one.',
        options: ['15s Video', 'Static Display', 'Audio', 'Interactive', 'Long-form Video'],
      },
      {
        label: 'Competitive Activity Level',
        key: 'competitive_activity',
        required: true,
        options: ['Low', 'Moderate', 'High'],
      },
      {
        label: 'Budget Level',
        key: 'budget_level',
        required: true,
        options: ['Small', 'Medium', 'Large'],
      },
      {
        label: 'Geographic Scope',
        key: 'geographic_scope',
        required: true,
        options: ['National', 'Regional', 'Local'],
      },
      {
        label: 'Blocked Channels',
        key: 'blocked_channels',
        required: false,
        options: ['Social', 'CTV', 'Audio', 'Display', 'CRM', 'Search'],
      },
      {
        label: 'Test Type',
        key: 'test_type',
        required: true,
        options: ['Holdout', 'Matched Market', 'Sequential', 'None'],
      },
      {
        label: 'Learning Focus',
        key: 'learning_focus',
        required: false,
        help: 'Max ~300 chars.',
        placeholder: 'What do you want to learn?',
      },
    ],
    outputs: [
      {
        name: 'Reach Strategy',
        key: 'reach_strategy',
        note: 'effective_frequency, recommended_reach %, note',
      },
      {
        name: 'Channel Journey',
        key: 'channel_journey',
        note: 'awareness / engagement / conversion channels + summary',
      },
      { name: 'Flighting Model', key: 'flighting_model', note: 'model + rationale' },
      {
        name: 'Investment Sufficiency',
        key: 'sufficiency_check',
        note: 'Sufficient | Borderline | Insufficient + analogy + warnings',
      },
      { name: 'Test Design', key: 'test_design', note: 'type, kpi, signal_to_log' },
      { name: 'Strategic Narrative', key: 'strategic_narrative', note: 'copy-ready' },
      { name: 'Strategy Cohesion Score', key: 'strategy_cohesion_score', note: '0–100 with brief why' },
    ],
    instructions: `1. Be honest about underpowered plans — call Sufficiency accurately.
2. Align channels to message type and available creative formats.
3. Always include a learning-ready test and a clear signal to log.
4. Strategic Narrative should be pasteable into a brief.
5. If inputs conflict (e.g. broad audience + small budget + national), list cohesion warnings explicitly.`,
  },
  {
    name: 'rhythm90-quarterly-planner',
    title: 'Rhythm90 Quarterly Planner',
    platform: '`/app/quarterly-planner` · `POST /api/planner/sessions` · skill key `quarterly_planner`',
    description:
      'Builds a quarterly Rhythm90 plan (objective, focus areas, plays, assumptions, signals, next steps) from the same multi-step planner inputs as rhythm90.io. Use when kicking off a quarter or resetting the Quarter Board.',
    when: 'User is planning a quarter: challenge, learning goals, signals, roles, carryover.',
    fields: [
      {
        label: 'Biggest Challenge This Quarter',
        key: 'big_challenge',
        required: true,
        placeholder: 'E.g., improve customer retention by 20%',
      },
      {
        label: 'Learning Goals',
        key: 'learning_goals',
        required: true,
        help: 'Aim for ≤3.',
        options: [
          'Customer retention',
          'Experience friction',
          'Growth channels',
          'Team alignment',
          'Data & analytics',
          'Product-market fit',
          'Operational efficiency',
          'Brand awareness',
          'Revenue optimization',
          'User engagement',
          'Market expansion',
          'Process improvement',
          'Technology adoption',
          'Competitive analysis',
          'Other (specify)',
        ],
      },
      { label: 'Business Context', key: 'business_context', required: false },
      { label: 'Known Plays Already Planned', key: 'known_plays', required: false },
      {
        label: 'Signals to Watch',
        key: 'signals_to_watch',
        required: true,
        options: [
          'Funnel drop-offs',
          'Click-throughs / engagement',
          'Support / field feedback',
          'Revenue metrics',
          'User behavior',
          'Market trends',
          'Competitor activity',
          'Team performance',
          'Customer feedback',
          'Operational metrics',
          'Other (specify)',
        ],
      },
      { label: 'Anticipated Blockers', key: 'blockers', required: false },
      {
        label: 'Roles',
        key: 'roles',
        required: false,
        help: 'rhythm90Lead, strategicLeads[], executionalLeads[], signalOwner',
      },
      { label: 'Carryover Learnings', key: 'carryover_learnings', required: false },
      { label: 'Cross-Functional Needs', key: 'cross_functional_needs', required: false },
    ],
    outputs: [
      { name: 'Objective', key: 'objective' },
      { name: 'Carryover Learnings', key: 'carryover_learnings' },
      { name: 'Key Focus Areas', key: 'key_focus_areas', note: 'list' },
      {
        name: 'Plays to Implement',
        key: 'plays_to_implement',
        note: 'each: title, description, leads, expected_outcome',
      },
      { name: 'Key Assumptions', key: 'key_assumptions' },
      { name: 'Cross-Functional Needs', key: 'cross_functional_needs' },
      { name: 'Signals to Watch', key: 'signals_to_watch', note: 'list' },
      { name: 'Next Steps', key: 'next_steps', note: 'list' },
    ],
    instructions: `1. Required backend trio: big_challenge, learning_goals, signals_to_watch — never skip.
2. Plays should be hypothesis-shaped bets, not project lists.
3. Keep the plan executable for one quarter; resist boiling the ocean.
4. Next Steps should sequence Kickoff → early Pulse → mid-quarter learning.`,
  },
  {
    name: 'rhythm90-plain-english-translator',
    title: 'Plain-English Translator',
    platform: '`/app/mini-tools/plain-english-translator` · skill key `plain_english_translator`',
    description:
      'Rewrites marketing copy into clear human language with a side-by-side jargon table and glossary — same input/output as the Plain-English Translator mini-tool. Use when copy is corporate, vague, or jargon-heavy.',
    when: 'User pastes marketing copy that needs de-jargonizing.',
    fields: [
      {
        label: 'Marketing Copy',
        key: 'original_text',
        required: true,
        placeholder: 'Paste your marketing copy here…',
      },
    ],
    outputs: [
      { name: 'Plain-English Rewrite', key: 'plain_english_rewrite' },
      {
        name: 'Side-by-Side Table',
        key: 'side_by_side_table',
        note: 'rows: what_it_says | what_it_really_means',
      },
      { name: 'Jargon Glossary', key: 'jargon_glossary', note: 'list of terms' },
    ],
    instructions: `1. Preserve intent and factual claims; remove fog.
2. Prefer concrete nouns and verbs; cut buzzwords.
3. Table should call out the worst offenders, not every word.`,
  },
  {
    name: 'rhythm90-get-to-by',
    title: 'Get/To/By Generator',
    platform: '`/app/mini-tools/get-to-by-generator` · skill key `get_to_by_generator`',
    description:
      'Crafts Get/To/By strategy statements from audience, insight, and brand role — matching the Get/To/By Generator form. Use when writing strategy statements or creative briefs.',
    when: 'User needs a Get/To/By statement.',
    fields: [
      {
        label: 'Audience Description',
        key: 'audience_description',
        required: true,
        help: 'Behavioral audience, not just demo.',
        placeholder: 'e.g. millennial males researching first home insurance',
      },
      {
        label: 'Behavioral or Emotional Insight',
        key: 'behavioral_or_emotional_insight',
        required: true,
        placeholder: 'What are they thinking, feeling, or struggling with?',
      },
      {
        label: 'Brand / Product Role',
        key: 'brand_product_role',
        required: true,
        placeholder: 'What role does the brand/product play?',
      },
    ],
    outputs: [
      { name: 'Get', key: 'get' },
      { name: 'To', key: 'to' },
      { name: 'By', key: 'by' },
      { name: 'Complete Statement', key: 'complete_statement', note: 'Get X to Y by Z' },
      { name: 'Variants', key: 'variants', note: 'optional safer / sharper versions' },
    ],
    instructions: `Format: **Get** [audience] **to** [behavior/belief change] **by** [brand role / mechanism].
Insight must feel specific to this audience — no universal platitudes.`,
  },
  {
    name: 'rhythm90-creative-tension-finder',
    title: 'Creative-Tension Finder',
    platform: '`/app/mini-tools/creative-tension-finder` · skill key `creative_tension_finder`',
    description:
      'Generates creative tensions from a problem/strategy summary with optional platform names — same contract as Creative-Tension Finder. Use when ideating campaign territories.',
    when: 'User has a problem or strategy summary and wants creative tensions.',
    fields: [
      {
        label: 'Problem or Strategy Summary',
        key: 'problem_or_strategy_summary',
        required: true,
        help: 'Core challenge, opportunity, or strategy.',
      },
    ],
    outputs: [
      {
        name: 'Creative Tensions',
        key: 'tensions',
        note: 'each: tension, description, optional_platform_name',
      },
    ],
    instructions: `Deliver 4–7 tensions. A tension is a productive conflict (desire vs constraint, identity vs category habit) — not rhyming slogans.
Avoid fake tensions. Include a short description and optional platform name per item.`,
  },
  {
    name: 'rhythm90-persona-generator',
    title: 'Persona Generator + Ask Mode',
    platform:
      '`/app/mini-tools/persona-generator` · generate + `POST .../persona-ask` · skill key `persona_generator`',
    description:
      'Builds a detailed persona sheet from an audience seed and supports Ask Mode Q&A in character — matching Persona Generator. Use when creating personas or interviewing a synthetic customer.',
    when: 'User wants a persona profile and/or to ask that persona questions.',
    fields: [
      {
        label: 'Audience Seed',
        key: 'audience_seed',
        required: true,
        placeholder: 'e.g. urban young adults evaluating B2B SaaS for the first time',
      },
      {
        label: 'Ask Mode Question',
        key: 'question',
        required: false,
        help: 'Required only when running Ask Mode after a persona exists.',
        placeholder: 'Ask the persona a question…',
      },
    ],
    extraIntake:
      'Mode A — Generate: require `audience_seed`. Mode B — Ask: require an existing persona sheet (from this chat or pasted) + `question`.',
    outputs: [
      {
        name: 'Persona Sheet',
        key: 'persona_sheet',
        note: 'name, age, location, occupation, income, interests, demographics, behavior, mindset, needs',
      },
      { name: 'Wants', key: 'wants', note: '[{ category, description }]' },
      { name: 'Barriers', key: 'barriers', note: '[{ category, description }]' },
      { name: 'Motivators', key: 'motivators', note: '[{ category, description }]' },
      { name: 'Ask Mode Message', key: 'ask_mode_message', note: 'how to interview them' },
      { name: 'Ask Answer', key: 'answer', note: 'Ask Mode only; first person; include persona_name' },
    ],
    instructions: `1. Build a vivid but non-stereotyped persona grounded in the seed.
2. Separate wants, barriers, and motivators clearly.
3. Ask Mode: answer in first person as the persona; stay consistent; flag uncertainty.`,
  },
  {
    name: 'rhythm90-journey-builder',
    title: 'Journey Builder',
    platform: '`/app/mini-tools/journey-builder` · skill key `journey_builder`',
    description:
      'Maps a customer journey (stages, customer action, brand action, stuck stage) from product, objective, and optional barrier — same as Journey Builder. Use for journeys, funnels, or experience maps.',
    when: 'User needs a step-by-step journey map.',
    fields: [
      { label: 'Product or Service', key: 'product_or_service', required: true },
      { label: 'Primary Objective', key: 'primary_objective', required: true },
      { label: 'Key Barrier', key: 'key_barrier', required: false },
    ],
    outputs: [
      {
        name: 'Journey Map',
        key: 'journey_map',
        note: '[{ stage, customer_action, brand_action }]',
      },
      { name: 'Stuck Stage', key: 'stuck_stage', note: 'where barrier bites + what to do' },
    ],
    instructions: `Typically 5–7 stages. Tie every stage to the primary objective. Action tips must be assignable work.`,
  },
  {
    name: 'rhythm90-test-learn-scale',
    title: 'Test-Learn-Scale Roadmap',
    platform: '`/app/mini-tools/test-learn-scale` · skill key `test_learn_scale`',
    description:
      'Designs an experimentation roadmap with hypotheses, test design table, learning application, and risk tips — matching Test-Learn-Scale. Use for growth experiments and learning plans.',
    when: 'User needs a Test → Learn → Scale plan.',
    fields: [
      { label: 'Campaign or Product Context', key: 'campaign_or_product_context', required: true },
      { label: 'Resources or Constraints', key: 'resources_or_constraints', required: false },
    ],
    outputs: [
      { name: 'Core Hypotheses', key: 'core_hypotheses', note: 'string list' },
      {
        name: 'Test Design Table',
        key: 'test_design_table',
        note: '[{ hypothesis, tactic, target_sample, primary_kpi, success_threshold, timeframe }]',
      },
      { name: 'Learning Application', key: 'learning_application' },
      { name: 'Risk Mitigation Tips', key: 'risk_mitigation_tips', note: 'list' },
    ],
    instructions: `Hypotheses must be falsifiable. Define kill/scale thresholds before recommending more spend. Respect constraints.`,
  },
  {
    name: 'rhythm90-agile-sprint-planner',
    title: 'Agile Sprint / War-Room Planner',
    platform: '`/app/mini-tools/agile-sprint-planner` · skill key `agile_sprint_planner`',
    description:
      'Outlines a marketing sprint/war-room plan (objective, roster, cadence, rituals, deliverables, DoD) from challenge, time horizon, and team roles — matching Agile Sprint Planner.',
    when: 'User is planning a time-boxed marketing sprint or war room.',
    fields: [
      { label: 'Challenge Statement', key: 'challenge_statement', required: true },
      { label: 'Time Horizon', key: 'time_horizon', required: true, placeholder: 'e.g. 6 weeks, 3 months' },
      { label: 'Team Size / Roles', key: 'team_size_roles', required: true },
    ],
    outputs: [
      { name: 'Sprint Objective', key: 'sprint_objective' },
      { name: 'Team Roster and Responsibilities', key: 'team_roster_and_responsibilities' },
      { name: 'Sprint Cadence', key: 'sprint_cadence' },
      { name: 'Rituals and Artifacts', key: 'rituals_and_artifacts' },
      { name: 'Deliverables per Sprint', key: 'deliverables_per_sprint' },
      { name: 'Rapid Testing / Validation Methods', key: 'rapid_testing_validation_methods' },
      { name: 'Definition of Done', key: 'definition_of_done', note: 'list' },
    ],
    instructions: `Optimize for learning + shipping inside the time horizon. Assign owners. Include a mid-sprint Pulse-style checkpoint.`,
  },
  {
    name: 'rhythm90-connected-media-matrix',
    title: 'Connected-Media Moment Matrix',
    platform: '`/app/mini-tools/connected-media-matrix` · skill key `connected_media_matrix`',
    description:
      'Creates a moment-based connected media matrix from audience snapshot, conversion action, and optional triggers — matching Connected-Media Moment Matrix.',
    when: 'User needs a moment × channel × message × KPI plan.',
    fields: [
      { label: 'Audience Snapshot', key: 'audience_snapshot', required: true },
      { label: 'Primary Conversion Action', key: 'primary_conversion_action', required: true },
      { label: 'Seasonal or Contextual Triggers', key: 'seasonal_or_contextual_triggers', required: false },
    ],
    outputs: [
      {
        name: 'Moment Matrix',
        key: 'moment_matrix',
        note: '[{ moment_or_trigger, audience_mindset, channel_format_ranked, creative_or_offer_cue, primary_kpi, measurement_approach }]',
      },
    ],
    instructions: `Anchor every moment to the conversion action. Prefer a few high-quality connected moments. Note where creative must change by channel.`,
  },
  {
    name: 'rhythm90-synthetic-focus-group',
    title: 'Synthetic Focus Group',
    platform:
      '`/app/mini-tools/synthetic-focus-group` · generate + focus-group-ask · skill key `synthetic_focus_group`',
    description:
      'Creates a five-persona synthetic focus group and supports Ask Mode group Q&A — matching Synthetic Focus Group. Use to stress-test messaging, offers, or creative.',
    when: 'User wants multiple synthetic viewpoints, then optional group Q&A.',
    fields: [
      { label: 'Topic or Category', key: 'topic_or_category', required: true },
      { label: 'Audience Seed Info', key: 'audience_seed_info', required: true },
      { label: 'Must Include Segments', key: 'must_include_segments', required: false },
      {
        label: 'Ask Mode Question',
        key: 'question',
        required: false,
        help: 'Required for Ask Mode after lineup exists.',
      },
    ],
    extraIntake:
      'Mode A — Generate lineup (5 personas). Mode B — Ask the group or a named persona; require lineup in context + question.',
    outputs: [
      {
        name: 'Persona Lineup',
        key: 'persona_lineup',
        note: '5× { name, age, location, bio, motivations, pain_points, triggers, media_habits }',
      },
      { name: 'Ask Mode Message', key: 'ask_mode_message' },
      {
        name: 'Ask Answer',
        key: 'answer',
        note: 'Ask Mode: multi-voice + synthesis; include focus_group_size, persona_names',
      },
    ],
    instructions: `Personas must disagree usefully (include a skeptic). Ask Mode: label speakers; close with a short synthesis.`,
  },
  {
    name: 'rhythm90-five-cs',
    title: "5 C's Strategy Builder",
    platform: "`/app/mini-tools/five-cs-strategy-builder` · skill key `five_cs_strategy_builder`",
    description:
      "Runs a 5 C's analysis (Company, Customer, Category, Culture, Competition) with strategic challenge and opportunity — matching 5 C's Strategy Builder.",
    when: 'User needs situation analysis across the five C inputs.',
    fields: [
      { label: 'Company', key: 'company', required: true },
      { label: 'Customer', key: 'customer', required: true },
      { label: 'Category', key: 'category', required: true },
      { label: 'Culture', key: 'culture', required: true },
      { label: 'Competition', key: 'competition', required: true },
    ],
    outputs: [
      { name: 'Company Insight', key: 'company_insight' },
      { name: 'Customer Insight', key: 'customer_insight' },
      { name: 'Category Insight', key: 'category_insight' },
      { name: 'Culture Insight', key: 'culture_insight' },
      { name: 'Competition Insight', key: 'competition_insight' },
      { name: 'Strategic Challenge', key: 'strategic_challenge' },
      { name: 'Strategic Opportunity', key: 'strategic_opportunity' },
      { name: 'Play Implications', key: 'play_implications', note: 'optional: 1–3 Play-ready bets' },
    ],
    instructions: `Treat each C as evidence, then synthesize. Highlight contradictions. End with Play-ready opportunity language.`,
  },
  {
    name: 'rhythm90-creative-platform-generator',
    title: 'Creative-Platform Generator',
    platform: '`/app/mini-tools/creative-platform-generator` · skill key `creative_platform_generator`',
    description:
      'Generates 3–5 extensible creative platforms from audience, creative tension, and business objective — matching Creative-Platform Generator.',
    when: 'User needs campaign-able brand/creative platforms.',
    fields: [
      { label: 'Target Audience Overview', key: 'target_audience', required: true },
      { label: 'Creative Tension', key: 'creative_tension', required: true },
      { label: 'Business / Brand Objective', key: 'business_objective', required: true },
    ],
    outputs: [
      {
        name: 'Platforms',
        key: 'platforms',
        note: '[{ platform_name, core_idea, activation_starters[], proof_of_fit }]',
      },
      { name: 'Recommended Lead Platform', key: 'recommended_lead', note: 'which + why' },
    ],
    instructions: `Platforms must extend across media, CRM, content, and sales — not one-off ads. Tie each to the tension and objective.`,
  },
  {
    name: 'rhythm90-hypothesis-builder',
    title: 'Hypothesis Builder',
    platform: '`/app/mini-tools/hypothesis-builder` · skill key `hypothesis_builder`',
    description:
      'Crafts 1–3 sharp testable hypotheses from audience, problem, key signal, and desired outcome — matching Hypothesis Builder. Use before building a full Play.',
    when: 'User needs falsifiable hypotheses grounded in a signal.',
    fields: [
      { label: 'Target Audience Snapshot', key: 'target_audience', required: true },
      { label: 'Core Problem or Opportunity', key: 'core_problem', required: true },
      { label: 'Key Signal or Observation', key: 'key_signal', required: true },
      { label: 'Desired Outcome', key: 'desired_outcome', required: true },
    ],
    outputs: [
      {
        name: 'Hypotheses',
        key: 'hypotheses',
        note: '[{ hypothesis_statement, assumptions_to_watch[], signal_to_track[], quarterly_fit_check }]',
      },
    ],
    instructions: `1–3 hypotheses only. Each must be falsifiable and tied to the key signal. Include minimal assumptions and signals to track. Offer to escalate the best one into Play Builder.`,
  },
  {
    name: 'rhythm90-operating-system',
    title: 'Rhythm90 Operating System',
    platform: 'Product OS overview · pairs with all other skills',
    description:
      'Explains and applies the Rhythm90 quarterly OS (Plays, Signals, Rituals, Signal Log, Quarter Board, roles, cadence). Use when the user asks how Rhythm90 works or which skill/tool to use next.',
    when: 'User asks about Rhythm90 practice, roles, cadence, boards, or which tool to run.',
    fields: [
      {
        label: 'Question / Situation',
        key: 'question',
        required: true,
        help: 'What they need clarified or decided.',
      },
      {
        label: 'Team Context',
        key: 'team_context',
        required: false,
        help: 'Industry, size, current quarter pain.',
      },
    ],
    outputs: [
      { name: 'Answer', key: 'answer', note: 'in Rhythm90 vocabulary' },
      { name: 'Recommended Artifact or Ritual', key: 'recommended_next' },
      { name: 'Suggested Skill', key: 'suggested_skill', note: 'which specialized skill to invoke next' },
    ],
    instructions: `Loop: Plan → Run → Learn → Reset (~90 days).
Roles: Rhythm90 Lead, Strategic Lead, Executional Lead, Signal Owner.
Artifacts: Quarter Board (Plays), Signal Log, Pulse Checks, R&R.
If they need something built, route to the matching skill (play-builder, signal-lab, ritual-guide, quarterly-planner, etc.).`,
  },
];

for (const skill of skills) {
  const dir = path.join(ROOT, 'skills', skill.name);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'SKILL.md'), render(skill), 'utf8');
}

fs.writeFileSync(
  path.join(ROOT, 'skills', 'catalog.json'),
  JSON.stringify(
    skills.map((s) => ({
      name: s.name,
      title: s.title,
      description: s.description,
      required_fields: s.fields.filter((f) => f.required).map((f) => f.key),
      optional_fields: s.fields.filter((f) => !f.required).map((f) => f.key),
    })),
    null,
    2
  ),
  'utf8'
);

console.log(`Wrote ${skills.length} robust skills to skills/`);
