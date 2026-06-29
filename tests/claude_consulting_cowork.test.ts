import { describe, expect, it } from "vitest";
import { activities, averageConfidence, clients, failingIntegrationCount, healthyClientCount, heroMetrics, integrations, playbooks, readinessGates, validationReviews } from "../src/lib/demo-data";

describe("claude consulting cowork demo data", () => {
  it("contains eight fictional consulting clients", () => {
    expect(clients).toHaveLength(8);
    expect(clients.every((client) => client.company.length > 6)).toBe(true);
  });

  it("models the requested Claude, MCP, QuickBooks, and JobTread stack", () => {
    const stack = clients.flatMap((client) => client.stack);
    expect(stack).toContain("Claude");
    expect(stack).toContain("MCP");
    expect(stack).toContain("QuickBooks Online");
    expect(stack).toContain("JobTread");
  });

  it("keeps client ids unique", () => {
    expect(new Set(clients.map((client) => client.id)).size).toBe(clients.length);
  });

  it("uses realistic confidence scores", () => {
    expect(clients.every((client) => client.confidenceScore >= 60 && client.confidenceScore <= 100)).toBe(true);
  });

  it("calculates average confidence from client data", () => {
    const computed = Math.round(clients.reduce((sum, client) => sum + client.confidenceScore, 0) / clients.length);
    expect(averageConfidence).toBe(computed);
  });

  it("tracks at least ten guarded integrations", () => {
    expect(integrations.length).toBeGreaterThanOrEqual(10);
    expect(integrations.every((integration) => integration.guardedActions.length > 0)).toBe(true);
  });

  it("references only known clients from integrations", () => {
    const clientIds = new Set(clients.map((client) => client.id));
    expect(integrations.every((integration) => clientIds.has(integration.clientId))).toBe(true);
  });

  it("has a failing integration for urgent remediation storytelling", () => {
    expect(failingIntegrationCount).toBe(1);
    expect(integrations.some((integration) => integration.status === "failing")).toBe(true);
  });

  it("contains human-gated playbooks for risky actions", () => {
    expect(playbooks.length).toBeGreaterThanOrEqual(8);
    expect(playbooks.filter((playbook) => playbook.humanApproval).length).toBeGreaterThan(4);
    expect(playbooks.filter((playbook) => playbook.risk === "high").every((playbook) => playbook.humanApproval)).toBe(true);
  });

  it("keeps playbook success rates in safe ranges", () => {
    expect(playbooks.every((playbook) => playbook.successRate >= 60 && playbook.successRate <= 100)).toBe(true);
  });

  it("surfaces governance evidence and review SLAs for every playbook", () => {
    expect(playbooks.every((playbook) => playbook.governanceEvidence.length > 20)).toBe(true);
    expect(playbooks.every((playbook) => playbook.reviewSlaHours > 0 && playbook.reviewSlaHours <= 24)).toBe(true);
  });

  it("keeps high-risk playbooks on same-day review SLAs", () => {
    const highRiskPlaybooks = playbooks.filter((playbook) => playbook.risk === "high");
    expect(highRiskPlaybooks.every((playbook) => playbook.humanApproval && playbook.reviewSlaHours <= 4)).toBe(true);
  });

  it("provides a consulting activity stream", () => {
    expect(activities).toHaveLength(8);
    expect(activities.some((activity) => activity.type === "alert")).toBe(true);
    expect(activities.some((activity) => activity.type === "configuration")).toBe(true);
  });

  it("builds five hero metrics for the dashboard", () => {
    expect(heroMetrics).toHaveLength(5);
    expect(heroMetrics.map((metric) => metric.label)).toContain("Human-gated playbooks");
  });

  it("counts healthy clients from the source collection", () => {
    expect(healthyClientCount).toBe(clients.filter((client) => client.status === "healthy").length);
  });
});

describe("validation reviews", () => {
  it("tracks evidence-backed validation reviews for Claude outputs", () => {
    const clientIds = new Set(clients.map((client) => client.id));
    expect(validationReviews.length).toBeGreaterThanOrEqual(3);
    expect(validationReviews.every((review) => clientIds.has(review.clientId))).toBe(true);
    expect(validationReviews.every((review) => review.evidenceAnchors.length >= 2)).toBe(true);
  });

  it("keeps high-risk validation reviews human-owned and time-bound", () => {
    const highRiskReviews = validationReviews.filter((review) => review.risk === "high");
    expect(highRiskReviews.length).toBeGreaterThan(0);
    expect(highRiskReviews.every((review) => review.reviewer.length > 3)).toBe(true);
    expect(highRiskReviews.every((review) => review.dueInHours <= 4)).toBe(true);
    expect(highRiskReviews.every((review) => review.decisionGuardrail.length > 20)).toBe(true);
  });

  it("keeps client-facing Claude outputs tied to fresh citation checks", () => {
    const highRiskReviews = validationReviews.filter((review) => review.risk === "high");
    expect(highRiskReviews.every((review) => review.citationVerification === "verified")).toBe(true);
    expect(highRiskReviews.every((review) => review.sourceCheckedHoursAgo <= review.dueInHours)).toBe(true);
    expect(validationReviews.every((review) => review.sourceVerificationNote.toLowerCase().includes("source"))).toBe(true);
  });

  it("keeps stale or incomplete citation packets out of ready status", () => {
    const incompleteReviews = validationReviews.filter((review) => review.citationVerification !== "verified");
    expect(incompleteReviews.length).toBeGreaterThan(0);
    expect(incompleteReviews.every((review) => review.status !== "ready")).toBe(true);
    expect(incompleteReviews.every((review) => review.sourceCheckedHoursAgo > review.dueInHours)).toBe(true);
  });
});

describe("readiness gates", () => {
  it("assigns six readiness categories per client", () => {
    const clientIds = new Set(clients.map((c) => c.id));
    const categories = new Set(readinessGates.map((g) => g.category));
    expect(categories.size).toBe(6);
    for (const clientId of clientIds) {
      expect(readinessGates.filter((g) => g.clientId === clientId)).toHaveLength(6);
    }
  });

  it("references only known clients", () => {
    const clientIds = new Set(clients.map((c) => c.id));
    expect(readinessGates.every((g) => clientIds.has(g.clientId))).toBe(true);
  });

  it("has unique gate ids", () => {
    expect(new Set(readinessGates.map((g) => g.id)).size).toBe(readinessGates.length);
  });

  it("has all gates passed for healthy clients", () => {
    const healthyClientIds = clients
      .filter((c) => c.status === "healthy")
      .map((c) => c.id);
    for (const clientId of healthyClientIds) {
      const gates = readinessGates.filter((g) => g.clientId === clientId);
      expect(gates.every((g) => g.status === "passed")).toBe(true);
    }
  });

  it("includes blocked gates for the blocked client", () => {
    const blockedClientIds = clients
      .filter((c) => c.status === "blocked")
      .map((c) => c.id);
    expect(blockedClientIds.length).toBeGreaterThan(0);
    for (const clientId of blockedClientIds) {
      const gates = readinessGates.filter((g) => g.clientId === clientId);
      expect(gates.some((g) => g.status === "blocked")).toBe(true);
    }
  });

  it("explains why every blocked gate is stuck", () => {
    const blockedGates = readinessGates.filter((g) => g.status === "blocked");
    expect(blockedGates.length).toBeGreaterThan(0);
    expect(blockedGates.every((g) => g.blockedBy && g.blockedBy.length > 0)).toBe(true);
  });

  it("uses valid status and category values", () => {
    const validStatuses = ["passed", "in_progress", "blocked", "not_started"];
    const validCategories = ["data_quality", "security", "integration", "governance", "team_training", "scope_discipline"];
    expect(readinessGates.every((g) => validStatuses.includes(g.status))).toBe(true);
    expect(readinessGates.every((g) => validCategories.includes(g.category))).toBe(true);
  });
});
