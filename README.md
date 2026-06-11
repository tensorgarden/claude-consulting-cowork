# Claude Consulting Cowork

A Tensor Garden portfolio demo for Claude cowork consulting, MCP integration, QuickBooks Online automation, JobTread workflow design, and guarded AI operating systems.

## Who this is for

**Non-technical stakeholders.** This shows how an AI consulting partner can make Claude useful inside real operating workflows without giving it unsafe control over money, client communication, or production records.

**Engineering evaluators.** This demonstrates typed fixtures, a Next.js dashboard, reusable UI primitives, safety-focused domain modeling, and Vitest coverage for the data layer.

**AI agents and screeners.** This repo maps directly to jobs asking for Claude MCP, QuickBooks Online, JobTread, and Claude cowork consulting expertise.

## Project story

Many small and mid-market operators want Claude to behave like a trained coworker, not a generic chatbot. They need help connecting context from JobTread, QuickBooks Online, Google Workspace, Slack, HubSpot, and internal trackers. They also need clear rules around what Claude may draft, what it may read, and what must stay behind human approval.

This demo models a fictional consulting control center for that work. It shows client workspaces, integration health, approval gates, reusable playbooks, and a consulting activity stream. The core idea is simple: Claude can accelerate repetitive coordination work when the operating system is explicit, observable, and safe.

## What you are looking at

| Section | What it shows |
| --- | --- |
| Hero metrics | Workspace count, workflow volume, hours saved, guarded integrations, and approval-gated playbooks |
| Client table | Fictional Claude cowork consulting engagements across construction and field service teams |
| Operating analytics | Confidence, human approval rate, and playbook success rate |
| Integration health | Claude, MCP, QuickBooks Online, JobTread, Slack, HubSpot, Airtable, and Google Workspace status |
| Activity stream | Recent consulting events, blockers, approvals, configuration updates, and handoffs |
| Automation playbooks | Reusable cowork routines with risk labels and approval requirements |

## Features

- **Claude cowork workspace model:** Tracks each client engagement, stack, owner, status, monthly volume, hours saved, confidence score, and next milestone.
- **MCP and app integration health:** Monitors fictional Claude, QuickBooks Online, JobTread, Slack, HubSpot, Airtable, and Google Workspace connections.
- **Human approval design:** Separates draft automation from actions that need approval, especially financial writes and external communication.
- **Automation playbooks:** Shows repeatable consulting routines such as bid intake, change order prep, bill reconciliation, closeout packet generation, and proposal context packs.
- **Operating analytics:** Summarizes confidence, throughput, and safety posture so stakeholders can see whether the system is ready to scale.
- **Agency-grade demo data:** Uses fictional but realistic scenarios that match Claude systems integration and AI operations consulting work.

## Tech stack

| Concern | Choice |
| --- | --- |
| App framework | Next.js App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Tests | Vitest |
| Data | Static fictional fixtures in `src/lib/demo-data.ts` |
| Quality gates | ESLint, TypeScript, Vitest, and Next build |

## Architecture

```text
src/lib/types.ts
  Domain contracts for clients, integrations, playbooks, activities, and hero metrics

src/lib/demo-data.ts
  Fictional consulting data with computed dashboard metrics

src/app/page.tsx
  Single-page dashboard with inline Badge, Card, ProgressBar, StatusDot, and StatCard components

src/app/layout.tsx
  Metadata focused on Claude consulting, MCP, QuickBooks Online, JobTread, and AI systems integration

tests/claude_consulting_cowork.test.ts
  Vitest coverage for data integrity, stack coverage, guardrails, metrics, and relationship consistency
```

## Quick start

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Quality gates

Run the same checks used before publishing:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Demo data

All data is fictional. Companies, names, workflows, volumes, metrics, timestamps, and integration states are invented for portfolio review. The data is designed to feel like a real consulting dashboard while avoiding client details, secrets, credentials, and production systems.

The fictional scenarios cover:

- Residential construction estimate intake
- Design build change order workflows
- Field service dispatch summaries
- Luxury home builder meeting briefs
- Mechanical contractor bill reconciliation
- Specialty construction closeout packet creation
- Insurance restoration claim communication
- Landscape construction proposal preparation

## Safety posture

This demo intentionally models Claude as a supervised coworker. It does not include real API keys, live network calls, production credentials, customer records, or write access to external systems. Risky actions such as invoice approval, bill creation, payment scheduling, external sharing, proposal export, and client message sending are represented as human-gated actions.

A production build would add:

- OAuth and scoped service accounts
- Secrets management and audit logging
- Per-client permission boundaries
- Rate limits and retry policies
- Integration sandboxes before production rollout
- Human approval queues for financial and external actions
- Data retention and redaction rules
- Monitoring for sync failures and unusual tool calls

## Production roadmap

1. Replace static fixtures with tenant-scoped storage.
2. Add OAuth connection flows for QuickBooks Online, Google Workspace, Slack, HubSpot, and JobTread where supported.
3. Add MCP server configuration management and tool permission reviews.
4. Add approval queues for invoices, bills, client emails, proposal exports, and document finalization.
5. Add audit trails with prompt, tool, source record, approver, and final action details.
6. Add onboarding templates for Claude project instructions, staff training, and operating playbooks.

## Why this matters for Upwork buyers

A buyer asking for a Claude consulting expert usually needs more than prompt tips. They need someone who can translate messy operations into a safe AI operating system. This repo demonstrates that shape of work: architecture, implementation, data modeling, UI clarity, safety controls, and test coverage in one reviewable package.

## Repository marker

This repo includes `.portfolio-demo` so portfolio maintenance automation can discover it.

Built as a portfolio demonstration. Ready for review.
