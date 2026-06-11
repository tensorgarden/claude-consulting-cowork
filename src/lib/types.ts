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
}

export interface ConsultingActivity {
  id: string;
  clientId: string;
  timestamp: string;
  title: string;
  detail: string;
  type: "discovery" | "configuration" | "approval" | "handoff" | "alert";
}

export interface HeroMetric {
  label: string;
  value: string;
  detail: string;
  tone: "emerald" | "sky" | "violet" | "amber" | "rose";
}
