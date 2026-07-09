import type { AutomationPlaybook, ClaudeCoworkClient, ConsultingActivity, HeroMetric, IntegrationHealth, ReadinessGate, ValidationReview, WorkspaceAccessReview } from "./types";

export const clients: ClaudeCoworkClient[] = [
  {
    id: "meridian-builders",
    company: "Meridian Builders Group",
    industry: "Residential construction",
    stack: ["Claude", "MCP", "QuickBooks Online", "JobTread", "Google Workspace"],
    engagement: "MCP setup",
    status: "healthy",
    monthlyVolume: 840,
    hoursSaved: 126,
    confidenceScore: 94,
    owner: "Dana Kim",
    nextMilestone: "Expand estimate intake cowork to change orders"
  },
  {
    id: "shoreline-renovation",
    company: "Shoreline Renovation Co.",
    industry: "Design build contractor",
    stack: ["Claude", "JobTread", "Slack", "QuickBooks Online"],
    engagement: "Workflow rescue",
    status: "watch",
    monthlyVolume: 510,
    hoursSaved: 73,
    confidenceScore: 82,
    owner: "Marcus Lee",
    nextMilestone: "Normalize cost code mappings before invoice automation"
  },
  {
    id: "northstar-field",
    company: "Northstar Field Services",
    industry: "Commercial maintenance",
    stack: ["Claude", "MCP", "Airtable", "QuickBooks Online", "HubSpot"],
    engagement: "AI operating system",
    status: "launching",
    monthlyVolume: 680,
    hoursSaved: 91,
    confidenceScore: 88,
    owner: "Priya Rao",
    nextMilestone: "Run supervised dispatch summaries for two weeks"
  },
  {
    id: "oakline-homes",
    company: "Oakline Custom Homes",
    industry: "Luxury home builder",
    stack: ["Claude", "JobTread", "Google Workspace", "QuickBooks Online"],
    engagement: "Fractional AI lead",
    status: "healthy",
    monthlyVolume: 430,
    hoursSaved: 68,
    confidenceScore: 91,
    owner: "Elliot Park",
    nextMilestone: "Train PMs on Claude cowork meeting briefs"
  },
  {
    id: "copper-canyon",
    company: "Copper Canyon Mechanical",
    industry: "Mechanical contracting",
    stack: ["Claude", "MCP", "Slack", "QuickBooks Online"],
    engagement: "MCP setup",
    status: "blocked",
    monthlyVolume: 290,
    hoursSaved: 34,
    confidenceScore: 67,
    owner: "Ava Mitchell",
    nextMilestone: "Resolve sandbox account permission gap"
  },
  {
    id: "greenhouse-pro",
    company: "Greenhouse Pro Installers",
    industry: "Specialty construction",
    stack: ["Claude", "JobTread", "Airtable", "Google Workspace"],
    engagement: "AI operating system",
    status: "healthy",
    monthlyVolume: 760,
    hoursSaved: 112,
    confidenceScore: 96,
    owner: "Noah Brooks",
    nextMilestone: "Promote closeout packet generator to team pilot"
  },
  {
    id: "summit-restoration",
    company: "Summit Restoration Partners",
    industry: "Insurance restoration",
    stack: ["Claude", "MCP", "HubSpot", "QuickBooks Online", "Slack"],
    engagement: "Workflow rescue",
    status: "watch",
    monthlyVolume: 615,
    hoursSaved: 85,
    confidenceScore: 79,
    owner: "Mina Alvarez",
    nextMilestone: "Add human review gate for supplement emails"
  },
  {
    id: "atlas-siteworks",
    company: "Atlas Siteworks Studio",
    industry: "Landscape construction",
    stack: ["Claude", "JobTread", "QuickBooks Online", "Google Workspace"],
    engagement: "Fractional AI lead",
    status: "launching",
    monthlyVolume: 350,
    hoursSaved: 47,
    confidenceScore: 84,
    owner: "Theo Grant",
    nextMilestone: "Connect proposal packet templates to Claude workspace"
  }
];

export const integrations: IntegrationHealth[] = [
  { id: "int-001", clientId: "meridian-builders", system: "Claude", purpose: "MCP cowork for estimate intake", status: "connected", lastSyncMinutesAgo: 7, errorBudgetUsed: 8, guardedActions: ["Vendor creation", "Customer email send"] },
  { id: "int-002", clientId: "meridian-builders", system: "QuickBooks Online", purpose: "Invoice draft and payment lookup", status: "connected", lastSyncMinutesAgo: 12, errorBudgetUsed: 11, guardedActions: ["Invoice approval"] },
  { id: "int-003", clientId: "shoreline-renovation", system: "JobTread", purpose: "Change order context retrieval", status: "needs-review", lastSyncMinutesAgo: 34, errorBudgetUsed: 29, guardedActions: ["Change order publish"] },
  { id: "int-004", clientId: "northstar-field", system: "Airtable", purpose: "Dispatch board enrichment", status: "connected", lastSyncMinutesAgo: 5, errorBudgetUsed: 5, guardedActions: ["Schedule updates"] },
  { id: "int-005", clientId: "oakline-homes", system: "Google Workspace", purpose: "Meeting notes and owner brief generation", status: "connected", lastSyncMinutesAgo: 18, errorBudgetUsed: 14, guardedActions: ["External sharing"] },
  { id: "int-006", clientId: "copper-canyon", system: "QuickBooks Online", purpose: "Bill and purchase order reconciliation", status: "failing", lastSyncMinutesAgo: 420, errorBudgetUsed: 73, guardedActions: ["Bill creation", "Payment scheduling"] },
  { id: "int-007", clientId: "greenhouse-pro", system: "JobTread", purpose: "Closeout packet source of truth", status: "connected", lastSyncMinutesAgo: 9, errorBudgetUsed: 9, guardedActions: ["Document finalization"] },
  { id: "int-008", clientId: "summit-restoration", system: "HubSpot", purpose: "Claim communication timeline", status: "needs-review", lastSyncMinutesAgo: 88, errorBudgetUsed: 41, guardedActions: ["Client message send"] },
  { id: "int-009", clientId: "atlas-siteworks", system: "Claude", purpose: "Proposal cowork workspace", status: "planned", lastSyncMinutesAgo: 0, errorBudgetUsed: 0, guardedActions: ["Proposal export"] },
  { id: "int-010", clientId: "northstar-field", system: "Slack", purpose: "Human approval alerts", status: "connected", lastSyncMinutesAgo: 3, errorBudgetUsed: 4, guardedActions: ["Approval escalation"] }
];

export const playbooks: AutomationPlaybook[] = [
  { id: "pb-001", clientId: "meridian-builders", name: "Bid intake cowork", trigger: "New project email with plans attached", humanApproval: true, risk: "medium", successRate: 93, averageMinutesSaved: 31, reviewSlaHours: 8, governanceEvidence: "Estimator approval log captures source plans, extracted assumptions, and reviewer sign-off before vendor actions." },
  { id: "pb-002", clientId: "shoreline-renovation", name: "Change order prep", trigger: "PM marks scope change in JobTread", humanApproval: true, risk: "high", successRate: 78, averageMinutesSaved: 44, reviewSlaHours: 4, governanceEvidence: "Change-order draft keeps source scope notes, cost-code diff, and PM sign-off before JobTread publishing." },
  { id: "pb-003", clientId: "northstar-field", name: "Dispatch summary", trigger: "Technician closes work order", humanApproval: false, risk: "low", successRate: 96, averageMinutesSaved: 18, reviewSlaHours: 24, governanceEvidence: "Supervisor spot-check queue stores source work order ids and citation links for weekly QA sampling." },
  { id: "pb-004", clientId: "oakline-homes", name: "Owner meeting brief", trigger: "Calendar event starts in 24 hours", humanApproval: false, risk: "low", successRate: 95, averageMinutesSaved: 22, reviewSlaHours: 24, governanceEvidence: "PM spot-check notes verify source agenda, attendees, and project documents before owner distribution templates change." },
  { id: "pb-005", clientId: "copper-canyon", name: "Bill reconciliation", trigger: "New vendor bill lands in inbox", humanApproval: true, risk: "high", successRate: 64, averageMinutesSaved: 39, reviewSlaHours: 2, governanceEvidence: "Accounting reviewer sees vendor bill source, sandbox permission result, and blocked payment scope before reconciliation." },
  { id: "pb-006", clientId: "greenhouse-pro", name: "Closeout packet builder", trigger: "Project reaches substantial completion", humanApproval: true, risk: "medium", successRate: 91, averageMinutesSaved: 52, reviewSlaHours: 8, governanceEvidence: "Closeout review packet preserves warranty docs, as-built photos, punch items, and PM finalization approval." },
  { id: "pb-007", clientId: "summit-restoration", name: "Supplement timeline", trigger: "Carrier sends update", humanApproval: true, risk: "medium", successRate: 83, averageMinutesSaved: 27, reviewSlaHours: 4, governanceEvidence: "Claim supplement timeline records carrier update source, dollar terms, and adjuster approval before external email." },
  { id: "pb-008", clientId: "atlas-siteworks", name: "Proposal context pack", trigger: "Lead qualifies in HubSpot", humanApproval: true, risk: "medium", successRate: 88, averageMinutesSaved: 36, reviewSlaHours: 8, governanceEvidence: "Proposal context pack lists HubSpot source fields, exclusions, and PM approval before client export." }
];

export const validationReviews: ValidationReview[] = [
  {
    id: "vr-001",
    clientId: "shoreline-renovation",
    artifact: "Change-order margin memo",
    risk: "high",
    reviewer: "Marcus Lee",
    evidenceAnchors: ["JobTread scope change CO-214", "QuickBooks cost-code variance report", "PM site photo packet"],
    status: "ready",
    dueInHours: 4,
    decisionGuardrail: "Do not publish the JobTread change order until the PM confirms source-cost deltas and margin assumptions.",
    citationVerification: "verified",
    sourceCheckedHoursAgo: 2,
    sourceVerificationNote: "Cost and scope citations checked against current JobTread and QuickBooks source records before the client-facing memo.",
    claimChecks: [
      {
        claim: "Margin memo uses the current cost-code variance before JobTread publishing.",
        sourceAnchor: "QuickBooks cost-code variance report",
        status: "verified",
        owner: "Marcus Lee"
      },
      {
        claim: "Scope change is supported by CO-214 and the PM site photo packet.",
        sourceAnchor: "JobTread scope change CO-214",
        status: "verified",
        owner: "Marcus Lee"
      }
    ],
    approvalTrail: {
      system: "JobTread",
      ticketId: "JT-CO-214-APPROVAL",
      status: "captured",
      blockedAction: "Change order publish"
    }
  },
  {
    id: "vr-002",
    clientId: "northstar-field",
    artifact: "Dispatch summary pilot packet",
    risk: "medium",
    reviewer: "Priya Rao",
    evidenceAnchors: ["Airtable work order record", "Supervisor spot-check notes"],
    status: "needs-source",
    dueInHours: 8,
    decisionGuardrail: "Hold unsupervised dispatch promotion until missing technician notes are attached to the review packet.",
    citationVerification: "needs-refresh",
    sourceCheckedHoursAgo: 18,
    sourceVerificationNote: "Technician-note citations are stale, so the supervisor must refresh source evidence before unsupervised rollout.",
    claimChecks: [
      {
        claim: "Supervisor spot checks confirm the dispatch packet is safe for pilot review.",
        sourceAnchor: "Supervisor spot-check notes",
        status: "verified",
        owner: "Priya Rao"
      },
      {
        claim: "Technician notes are current enough for unsupervised dispatch promotion.",
        sourceAnchor: "Airtable work order record",
        status: "needs-refresh",
        owner: "Priya Rao"
      }
    ],
    approvalTrail: {
      system: "Slack",
      ticketId: "SLACK-DISPATCH-PILOT-17",
      status: "pending-review",
      blockedAction: "Unsupervised dispatch promotion"
    }
  },
  {
    id: "vr-003",
    clientId: "summit-restoration",
    artifact: "Carrier supplement email draft",
    risk: "high",
    reviewer: "Mina Alvarez",
    evidenceAnchors: ["Carrier update email", "HubSpot claim timeline", "Adjuster estimate summary"],
    status: "ready",
    dueInHours: 3,
    decisionGuardrail: "No external email send until adjuster approves dollar terms, coverage language, and source citations.",
    citationVerification: "verified",
    sourceCheckedHoursAgo: 1,
    sourceVerificationNote: "Carrier coverage terms and estimate figures were checked against same-day source citations before external email send.",
    claimChecks: [
      {
        claim: "Carrier coverage language matches the latest update email before external send.",
        sourceAnchor: "Carrier update email",
        status: "verified",
        owner: "Mina Alvarez"
      },
      {
        claim: "Dollar terms match the adjuster estimate summary and HubSpot claim timeline.",
        sourceAnchor: "Adjuster estimate summary",
        status: "verified",
        owner: "Mina Alvarez"
      }
    ],
    approvalTrail: {
      system: "HubSpot",
      ticketId: "HS-CLAIM-778-APPROVAL",
      status: "captured",
      blockedAction: "External carrier email send"
    }
  }
];

export const workspaceAccessReviews: WorkspaceAccessReview[] = [
  {
    id: "war-001",
    clientId: "shoreline-renovation",
    dataScope: ["JobTread scope changes", "QuickBooks cost-code variance report", "Google Drive site photo packet"],
    allowedActions: ["Draft change-order margin memo", "Summarize source-cost deltas"],
    blockedActions: ["Publish JobTread change order", "Send client price update"],
    owner: "Marcus Lee",
    reviewedHoursAgo: 6,
    risk: "high"
  },
  {
    id: "war-002",
    clientId: "copper-canyon",
    dataScope: ["Vendor bill inbox", "QuickBooks sandbox permission logs", "Slack accounting approval thread"],
    allowedActions: ["Classify bill anomalies", "Prepare reconciliation checklist"],
    blockedActions: ["Create QuickBooks bill", "Schedule vendor payment"],
    owner: "Ava Mitchell",
    reviewedHoursAgo: 2,
    risk: "high"
  },
  {
    id: "war-003",
    clientId: "northstar-field",
    dataScope: ["Airtable dispatch board", "Technician work-order notes", "HubSpot service timeline"],
    allowedActions: ["Draft dispatch summary", "Prepare supervisor review note"],
    blockedActions: ["Update technician schedule", "Send client ETA"],
    owner: "Priya Rao",
    reviewedHoursAgo: 18,
    risk: "medium"
  }
];

export const activities: ConsultingActivity[] = [
  { id: "act-001", clientId: "meridian-builders", timestamp: "2026-02-14T09:30:00Z", title: "MCP permissions approved", detail: "Estimator approved read-only JobTread context plus guarded QuickBooks invoice draft access.", type: "approval" },
  { id: "act-002", clientId: "shoreline-renovation", timestamp: "2026-02-14T10:15:00Z", title: "Cost code drift detected", detail: "Claude cowork flagged mismatched cost codes before change order automation went live.", type: "alert" },
  { id: "act-003", clientId: "northstar-field", timestamp: "2026-02-14T11:05:00Z", title: "Dispatch pilot launched", detail: "Three supervisors received generated work order summaries with citation links.", type: "handoff" },
  { id: "act-004", clientId: "oakline-homes", timestamp: "2026-02-14T12:40:00Z", title: "Training workspace configured", detail: "PM team received role-specific Claude instructions, prompt library, and escalation rules.", type: "configuration" },
  { id: "act-005", clientId: "copper-canyon", timestamp: "2026-02-14T13:20:00Z", title: "Sandbox blocker documented", detail: "QuickBooks sandbox lacks purchasing module access, so financial actions remain disabled.", type: "alert" },
  { id: "act-006", clientId: "greenhouse-pro", timestamp: "2026-02-14T14:10:00Z", title: "Closeout packet workflow mapped", detail: "As-built photos, warranty docs, punch items, and JobTread records now resolve into one review queue.", type: "discovery" },
  { id: "act-007", clientId: "summit-restoration", timestamp: "2026-02-14T15:00:00Z", title: "Claim email guardrail added", detail: "External claim updates now require human approval when dollar amounts or legal terms appear.", type: "configuration" },
  { id: "act-008", clientId: "atlas-siteworks", timestamp: "2026-02-14T16:25:00Z", title: "Proposal cowork kickoff", detail: "Landscape proposal context template created for intake, scope, exclusions, and follow-up tasks.", type: "discovery" }
];

export const readinessGates: ReadinessGate[] = [
  // --- meridian-builders (healthy) ---
  { id: "rg-001", clientId: "meridian-builders", category: "data_quality", name: "Cost code normalization", status: "passed", detail: "All cost codes mapped to QuickBooks chart of accounts with confirmed format." },
  { id: "rg-002", clientId: "meridian-builders", category: "security", name: "Financial action guardrails", status: "passed", detail: "Invoice creation and vendor setup gated behind human approval." },
  { id: "rg-003", clientId: "meridian-builders", category: "integration", name: "JobTread MCP read access", status: "passed", detail: "Read-only context retrieval validated with estimator sign-off." },
  { id: "rg-004", clientId: "meridian-builders", category: "governance", name: "Approval escalation path", status: "passed", detail: "PM → ops director escalation documented for blocked actions." },
  { id: "rg-005", clientId: "meridian-builders", category: "team_training", name: "Estimator cowork onboarding", status: "passed", detail: "Three estimators completed prompt library and escalation rules session." },
  { id: "rg-006", clientId: "meridian-builders", category: "scope_discipline", name: "Written exclusion list", status: "passed", detail: "Out-of-scope: vendor negotiation, lien waiver generation, certified payroll." },

  // --- shoreline-renovation (watch) ---
  { id: "rg-007", clientId: "shoreline-renovation", category: "data_quality", name: "Cost code drift remediation", status: "in_progress", detail: "Mismatched cost codes flagged by Claude cowork; normalization in progress." },
  { id: "rg-008", clientId: "shoreline-renovation", category: "security", name: "Change order publish gate", status: "passed", detail: "Change order publishing requires PM approval before JobTread write." },
  { id: "rg-009", clientId: "shoreline-renovation", category: "integration", name: "JobTread change-order context", status: "passed", detail: "Scope-change data flows into cowork workspace for prep." },
  { id: "rg-010", clientId: "shoreline-renovation", category: "governance", name: "Invoice automation approval chain", status: "in_progress", detail: "Draft approval path defined but not yet tested with accounting sign-off." },
  { id: "rg-011", clientId: "shoreline-renovation", category: "team_training", name: "PM cowork training", status: "passed", detail: "Two PMs completed change-order cowork walkthrough." },
  { id: "rg-012", clientId: "shoreline-renovation", category: "scope_discipline", name: "Invoice automation scope boundary", status: "passed", detail: "Out-of-scope: payment scheduling, lien release, subcontractor compliance." },

  // --- northstar-field (launching) ---
  { id: "rg-013", clientId: "northstar-field", category: "data_quality", name: "Dispatch board field audit", status: "in_progress", detail: "Completeness audit on Airtable dispatch records; 12% missing required fields." },
  { id: "rg-014", clientId: "northstar-field", category: "security", name: "HubSpot message send gate", status: "passed", detail: "External client messages gated behind human approval." },
  { id: "rg-015", clientId: "northstar-field", category: "integration", name: "Airtable dispatch enrichment", status: "passed", detail: "Read-write connection validated with supervisor confirmation." },
  { id: "rg-016", clientId: "northstar-field", category: "governance", name: "Supervised dispatch trial", status: "in_progress", detail: "Two-week supervised run with citation links before unsupervised promotion." },
  { id: "rg-017", clientId: "northstar-field", category: "team_training", name: "Supervisor cowork onboarding", status: "in_progress", detail: "Three supervisors scheduled; one session completed." },
  { id: "rg-018", clientId: "northstar-field", category: "scope_discipline", name: "Dispatch scope boundary", status: "passed", detail: "Out-of-scope: technician scheduling, parts ordering, overtime approval." },

  // --- oakline-homes (healthy) ---
  { id: "rg-019", clientId: "oakline-homes", category: "data_quality", name: "Meeting calendar hygiene", status: "passed", detail: "Calendar events have project tags and attendees for brief generation." },
  { id: "rg-020", clientId: "oakline-homes", category: "security", name: "External sharing gate", status: "passed", detail: "Google Workspace external sharing requires PM review." },
  { id: "rg-021", clientId: "oakline-homes", category: "integration", name: "Google Workspace cowork", status: "passed", detail: "Meeting notes and owner briefs generated from calendar and docs." },
  { id: "rg-022", clientId: "oakline-homes", category: "governance", name: "Owner brief review cadence", status: "passed", detail: "Weekly brief review with PM before client distribution." },
  { id: "rg-023", clientId: "oakline-homes", category: "team_training", name: "PM meeting brief training", status: "passed", detail: "All PMs completed Claude cowork meeting brief walkthrough." },
  { id: "rg-024", clientId: "oakline-homes", category: "scope_discipline", name: "Meeting brief scope boundary", status: "passed", detail: "Out-of-scope: design decisions, contract amendments, pricing recommendations." },

  // --- copper-canyon (blocked) ---
  { id: "rg-025", clientId: "copper-canyon", category: "data_quality", name: "Bill categorization audit", status: "not_started", detail: "Vendor bill categories need normalization before reconciliation automation.", blockedBy: "Awaiting accounting team availability" },
  { id: "rg-026", clientId: "copper-canyon", category: "security", name: "Sandbox account permissions", status: "blocked", detail: "QuickBooks sandbox lacks purchasing module access; financial write actions disabled.", blockedBy: "QuickBooks admin permission gap — ticket open with client IT" },
  { id: "rg-027", clientId: "copper-canyon", category: "integration", name: "Slack approval alerts", status: "passed", detail: "Approval notifications flowing to project channel." },
  { id: "rg-028", clientId: "copper-canyon", category: "governance", name: "Bill approval chain", status: "in_progress", detail: "Draft approval chain documented but blocked on sandbox resolution." },
  { id: "rg-029", clientId: "copper-canyon", category: "team_training", name: "Accounting cowork onboarding", status: "not_started", detail: "On hold until sandbox permissions resolved.", blockedBy: "Depends on security gate rg-026" },
  { id: "rg-030", clientId: "copper-canyon", category: "scope_discipline", name: "Bill reconciliation scope boundary", status: "passed", detail: "Out-of-scope: payment execution, vendor negotiation, tax classification." },

  // --- greenhouse-pro (healthy) ---
  { id: "rg-031", clientId: "greenhouse-pro", category: "data_quality", name: "Closeout document completeness", status: "passed", detail: "Warranty docs, as-built photos, and punch items validated for packet generation." },
  { id: "rg-032", clientId: "greenhouse-pro", category: "security", name: "Document finalization gate", status: "passed", detail: "Closeout packet finalization requires PM sign-off." },
  { id: "rg-033", clientId: "greenhouse-pro", category: "integration", name: "JobTread closeout source", status: "passed", detail: "JobTread records resolve into single review queue." },
  { id: "rg-034", clientId: "greenhouse-pro", category: "governance", name: "Team pilot review cadence", status: "passed", detail: "Biweekly review of generated packets before promotion to standard workflow." },
  { id: "rg-035", clientId: "greenhouse-pro", category: "team_training", name: "Team pilot onboarding", status: "passed", detail: "Closeout packet generator promoted to team pilot with training complete." },
  { id: "rg-036", clientId: "greenhouse-pro", category: "scope_discipline", name: "Closeout scope boundary", status: "passed", detail: "Out-of-scope: warranty claim processing, lien waiver tracking, owner walkthrough scheduling." },

  // --- summit-restoration (watch) ---
  { id: "rg-037", clientId: "summit-restoration", category: "data_quality", name: "Claim timeline data audit", status: "passed", detail: "HubSpot claim communication timeline validated for supplement automation." },
  { id: "rg-038", clientId: "summit-restoration", category: "security", name: "Supplement email guardrail", status: "passed", detail: "External claim updates with dollar amounts or legal terms require human approval." },
  { id: "rg-039", clientId: "summit-restoration", category: "integration", name: "HubSpot claim timeline", status: "in_progress", detail: "Carrier update sync lag under investigation; 88-minute drift flagged." },
  { id: "rg-040", clientId: "summit-restoration", category: "governance", name: "Supplement approval chain", status: "passed", detail: "Adjuster → PM escalation path documented and tested." },
  { id: "rg-041", clientId: "summit-restoration", category: "team_training", name: "Adjuster cowork training", status: "in_progress", detail: "Two adjusters trained; third session scheduled." },
  { id: "rg-042", clientId: "summit-restoration", category: "scope_discipline", name: "Supplement scope boundary", status: "passed", detail: "Out-of-scope: coverage determination, estimate negotiation, carrier dispute." },

  // --- atlas-siteworks (launching) ---
  { id: "rg-043", clientId: "atlas-siteworks", category: "data_quality", name: "Proposal template audit", status: "in_progress", detail: "Landscape proposal templates being validated for intake, scope, and exclusions fields." },
  { id: "rg-044", clientId: "atlas-siteworks", category: "security", name: "Proposal export gate", status: "passed", detail: "Proposal export to client requires PM approval." },
  { id: "rg-045", clientId: "atlas-siteworks", category: "integration", name: "HubSpot lead qualification", status: "in_progress", detail: "Lead qualification trigger mapped; proposal context pack generation being tested." },
  { id: "rg-046", clientId: "atlas-siteworks", category: "governance", name: "Proposal review cadence", status: "not_started", detail: "Weekly review cadence not yet established with PM team." },
  { id: "rg-047", clientId: "atlas-siteworks", category: "team_training", name: "PM proposal cowork onboarding", status: "not_started", detail: "Training session scheduled for next week." },
  { id: "rg-048", clientId: "atlas-siteworks", category: "scope_discipline", name: "Proposal scope boundary", status: "passed", detail: "Out-of-scope: pricing strategy, design decisions, material takeoffs." },
];

export const heroMetrics: HeroMetric[] = [
  { label: "Managed AI workspaces", value: String(clients.length), detail: "Claude cowork systems across construction operations", tone: "sky" },
  { label: "Monthly workflow volume", value: clients.reduce((sum, client) => sum + client.monthlyVolume, 0).toLocaleString(), detail: "Emails, records, briefs, drafts, and approvals", tone: "violet" },
  { label: "Hours saved", value: clients.reduce((sum, client) => sum + client.hoursSaved, 0).toLocaleString(), detail: "Estimated monthly operations time reclaimed", tone: "emerald" },
  { label: "Guarded integrations", value: String(integrations.length), detail: "Claude, QuickBooks, JobTread, Slack, and CRM connections", tone: "amber" },
  { label: "Human-gated playbooks", value: String(playbooks.filter((playbook) => playbook.humanApproval).length), detail: "Approval gates for financial and external actions", tone: "rose" }
];

export const averageConfidence = Math.round(clients.reduce((sum, client) => sum + client.confidenceScore, 0) / clients.length);
export const healthyClientCount = clients.filter((client) => client.status === "healthy").length;
export const failingIntegrationCount = integrations.filter((integration) => integration.status === "failing").length;
