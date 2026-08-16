# Rhythm90 Skills

Public [Claude](https://claude.ai) / [Cursor](https://cursor.com) **Agent Skills** that encode the Rhythm90 marketing operating system and its tools.

These are the same conceptual tools that power [rhythm90.io](https://rhythm90.io) — Plays, Signals, Rituals, Media Mapper, and the mini-tool library — packaged so any agent can run them from a chat without the SaaS UI.

## Skills included

| Skill | Use when |
|-------|----------|
| `rhythm90-operating-system` | Learning or running the Rhythm90 OS |
| `rhythm90-play-builder` | Turning an idea into a testable Play |
| `rhythm90-signal-lab` | Interpreting observations into Signals |
| `rhythm90-ritual-guide` | Kickoff / Pulse Check / Review & Renew |
| `rhythm90-media-mapper` | Media strategy + test design |
| `rhythm90-plain-english-translator` | De-jargon marketing copy |
| `rhythm90-get-to-by` | Get/To/By strategy statements |
| `rhythm90-creative-tension-finder` | Creative tensions / campaign sparks |
| `rhythm90-persona-generator` | Personas + Ask Mode |
| `rhythm90-journey-builder` | Customer journey maps |
| `rhythm90-test-learn-scale` | Experimentation roadmaps |
| `rhythm90-agile-sprint-planner` | Sprint / war-room plans |
| `rhythm90-connected-media-matrix` | Moment-based media plans |
| `rhythm90-synthetic-focus-group` | 5-persona focus group + Ask Mode |
| `rhythm90-five-cs` | 5 C's situation analysis |
| `rhythm90-creative-platform-generator` | Extensible creative platforms |
| `rhythm90-hypothesis-builder` | Sharp testable hypotheses |

Full machine-readable list: [`skills/catalog.json`](skills/catalog.json).

## Install in Cursor

1. Clone this repo (or copy the `skills/` folder).
2. Copy the skill folders you want into your project:

```bash
mkdir -p .cursor/skills
cp -R path/to/rhythm90-skills/skills/rhythm90-* .cursor/skills/
```

3. Or install for all projects:

```bash
mkdir -p ~/.cursor/skills
cp -R path/to/rhythm90-skills/skills/rhythm90-* ~/.cursor/skills/
```

4. In Cursor chat, invoke a skill by name (e.g. "use the rhythm90-play-builder skill") or rely on description matching when auto-invocation is enabled.

## Install for Claude

1. Clone this repository.
2. In Claude (claude.ai or Claude Code), add/upload the skill folders under `skills/` following Anthropic’s Agent Skills docs — each folder is a skill with a `SKILL.md`.
3. Start a chat and ask for a Play, Signal interpretation, ritual agenda, etc.

## Skill format

Each skill is a directory:

```
skills/rhythm90-play-builder/
└── SKILL.md
```

`SKILL.md` uses YAML frontmatter (`name`, `description`) plus instructions for inputs, outputs, and Rhythm90 principles.

## Regenerating

```bash
node generate-skills.cjs
```

## License

MIT — see [LICENSE](LICENSE).

## About Rhythm90

Rhythm90 is a quarterly operating system for modern marketing teams: define Plays, capture Signals, run sharp Rituals, and learn every 90 days. Learn more at [rhythm90.io](https://rhythm90.io) or read the book via [Dive Into Rhythm90](https://rhythm90.io/dive-into-rhythm90).
