import type { AutomationPlaybook, ClaudeCoworkClient, ConsultingActivity, HeroMetric, IntegrationHealth } from "./types";

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
  { id: "pb-001", clientId: "meridian-builders", name: "Bid intake cowork", trigger: "New project email with plans attached", humanApproval: true, risk: "medium", successRate: 93, averageMinutesSaved: 31 },
  { id: "pb-002", clientId: "shoreline-renovation", name: "Change order prep", trigger: "PM marks scope change in JobTread", humanApproval: true, risk: "high", successRate: 78, averageMinutesSaved: 44 },
  { id: "pb-003", clientId: "northstar-field", name: "Dispatch summary", trigger: "Technician closes work order", humanApproval: false, risk: "low", successRate: 96, averageMinutesSaved: 18 },
  { id: "pb-004", clientId: "oakline-homes", name: "Owner meeting brief", trigger: "Calendar event starts in 24 hours", humanApproval: false, risk: "low", successRate: 95, averageMinutesSaved: 22 },
  { id: "pb-005", clientId: "copper-canyon", name: "Bill reconciliation", trigger: "New vendor bill lands in inbox", humanApproval: true, risk: "high", successRate: 64, averageMinutesSaved: 39 },
  { id: "pb-006", clientId: "greenhouse-pro", name: "Closeout packet builder", trigger: "Project reaches substantial completion", humanApproval: true, risk: "medium", successRate: 91, averageMinutesSaved: 52 },
  { id: "pb-007", clientId: "summit-restoration", name: "Supplement timeline", trigger: "Carrier sends update", humanApproval: true, risk: "medium", successRate: 83, averageMinutesSaved: 27 },
  { id: "pb-008", clientId: "atlas-siteworks", name: "Proposal context pack", trigger: "Lead qualifies in HubSpot", humanApproval: true, risk: "medium", successRate: 88, averageMinutesSaved: 36 }
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
