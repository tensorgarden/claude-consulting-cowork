import { describe, expect, it } from "vitest";
import { activities, averageConfidence, clients, failingIntegrationCount, healthyClientCount, heroMetrics, integrations, playbooks } from "../src/lib/demo-data";

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
