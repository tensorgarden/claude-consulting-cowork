export type WorkspaceStatus = "healthy" | "watch" | "blocked" | "launching";

export type IntegrationStatus = "connected" | "needs-review" | "failing" | "planned";

export type AutomationRisk = "low" | "medium" | "high";

export interface ClaudeCoworkClient {
  id: string;
  company: string;
  industry: string;
  stack: string[];
  engagement: "MCP setup" | "AI operating system" | "Workflow rescue" | "Fractional AI lead";
  status: WorkspaceStatus;
  monthlyVolume: number;
  hoursSaved: number;
  confidenceScore: number;
  owner: string;
  nextMilestone: string;
}

export interface IntegrationHealth {
  id: string;
  clientId: string;
  system: "Claude" | "QuickBooks Online" | "JobTread" | "Google Workspace" | "Slack" | "Airtable" | "HubSpot";
  purpose: string;
  status: IntegrationStatus;
  lastSyncMinutesAgo: number;
  errorBudgetUsed: number;
  guardedActions: string[];
}

export interface AutomationPlaybook {
  id: string;
  clientId: string;
  name: string;
  trigger: string;
  humanApproval: boolean;
  risk: AutomationRisk;
  successRate: number;
  averageMinutesSaved: number;
  reviewSlaHours: number;
  governanceEvidence: string;
}

export type ValidationReviewStatus = "ready" | "needs-source" | "blocked";
export type CitationVerification = "verified" | "needs-refresh" | "missing-source";
export type ClaimCheckStatus = "verified" | "needs-refresh" | "missing-source";
export type ApprovalTrailStatus = "captured" | "pending-review" | "escalated";
export type ApprovalTrailSystem = "Slack" | "JobTread" | "HubSpot" | "QuickBooks Online" | "Airtable" | "Google Workspace";

export interface ApprovalTrail {
  system: ApprovalTrailSystem;
  ticketId: string;
  status: ApprovalTrailStatus;
  blockedAction: string;
}

export type ConnectorTrustStatus = "verified" | "needs-review" | "blocked";
export type UntrustedContentAction = "quarantine-and-review" | "block-connector";

export interface ConnectorTrustReview {
  connector: ApprovalTrailSystem;
  status: ConnectorTrustStatus;
  reviewedBy: string;
  toolOutputControl: string;
  untrustedContentAction: UntrustedContentAction;
}

export interface WorkspaceAccessReview {
  id: string;
  clientId: string;
  dataScope: string[];
  connectorTrust: ConnectorTrustReview;
  allowedActions: string[];
  blockedActions: string[];
  owner: string;
  reviewedHoursAgo: number;
  accessExpiresInHours: number;
  leastPrivilegeRationale: string;
  risk: AutomationRisk;
}

export interface ClaimCheck {
  claim: string;
  sourceAnchor: string;
  status: ClaimCheckStatus;
  owner: string;
}

export interface ValidationReview {
  id: string;
  clientId: string;
  artifact: string;
  risk: AutomationRisk;
  reviewer: string;
  evidenceAnchors: string[];
  status: ValidationReviewStatus;
  dueInHours: number;
  decisionGuardrail: string;
  citationVerification: CitationVerification;
  sourceCheckedHoursAgo: number;
  sourceVerificationNote: string;
  claimChecks: ClaimCheck[];
  approvalTrail: ApprovalTrail;
}

export interface ConsultingActivity {
  id: string;
  clientId: string;
  timestamp: string;
  title: string;
  detail: string;
  type: "discovery" | "configuration" | "approval" | "handoff" | "alert";
}

export type ReadinessGateStatus = "passed" | "in_progress" | "blocked" | "not_started";

export type ReadinessGateCategory =
  | "data_quality"
  | "security"
  | "integration"
  | "governance"
  | "team_training"
  | "scope_discipline";

export interface ReadinessGate {
  id: string;
  clientId: string;
  category: ReadinessGateCategory;
  name: string;
  status: ReadinessGateStatus;
  detail: string;
  blockedBy?: string;
}

export interface HeroMetric {
  label: string;
  value: string;
  detail: string;
  tone: "emerald" | "sky" | "violet" | "amber" | "rose";
}
