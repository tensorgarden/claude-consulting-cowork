import { activities, averageConfidence, clients, failingIntegrationCount, healthyClientCount, heroMetrics, integrations, playbooks, readinessGates, validationReviews } from "@/lib/demo-data";
import type { AutomationRisk, IntegrationStatus, WorkspaceStatus } from "@/lib/types";

function Badge({ children, tone = "slate" }: { children: React.ReactNode; tone?: "emerald" | "amber" | "rose" | "sky" | "violet" | "slate" }) {
  const tones = {
    emerald: "border-emerald-400/40 bg-emerald-400/10 text-emerald-200",
    amber: "border-amber-400/40 bg-amber-400/10 text-amber-200",
    rose: "border-rose-400/40 bg-rose-400/10 text-rose-200",
    sky: "border-sky-400/40 bg-sky-400/10 text-sky-200",
    violet: "border-violet-400/40 bg-violet-400/10 text-violet-200",
    slate: "border-slate-500/40 bg-slate-500/10 text-slate-200"
  };
  return <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone]}`}>{children}</span>;
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 ${className}`}>{children}</section>;
}

function ProgressBar({ value, tone = "emerald" }: { value: number; tone?: "emerald" | "amber" | "rose" | "sky" | "violet" }) {
  const colors = {
    emerald: "bg-emerald-400",
    amber: "bg-amber-400",
    rose: "bg-rose-400",
    sky: "bg-sky-400",
    violet: "bg-violet-400"
  };
  return (
    <div className="h-2 rounded-full bg-slate-800">
      <div className={`h-2 rounded-full ${colors[tone]}`} style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
}

function StatusDot({ status }: { status: WorkspaceStatus | IntegrationStatus | AutomationRisk }) {
  const color = status === "healthy" || status === "connected" || status === "low" ? "bg-emerald-400" : status === "watch" || status === "needs-review" || status === "medium" || status === "launching" || status === "planned" ? "bg-amber-400" : "bg-rose-400";
  return <span className={`inline-block h-2.5 w-2.5 rounded-full ${color}`} />;
}

function StatCard({ label, value, detail, tone }: { label: string; value: string; detail: string; tone: "emerald" | "sky" | "violet" | "amber" | "rose" }) {
  const gradients = {
    emerald: "from-emerald-500/30 to-slate-950",
    sky: "from-sky-500/30 to-slate-950",
    violet: "from-violet-500/30 to-slate-950",
    amber: "from-amber-500/30 to-slate-950",
    rose: "from-rose-500/30 to-slate-950"
  };
  return (
    <div className={`rounded-3xl border border-white/10 bg-gradient-to-br ${gradients[tone]} p-5`}>
      <p className="text-sm text-slate-300">{label}</p>
      <p className="mt-3 text-4xl font-black tracking-tight text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p>
    </div>
  );
}

const statusTone: Record<WorkspaceStatus, "emerald" | "amber" | "rose" | "sky"> = {
  healthy: "emerald",
  watch: "amber",
  blocked: "rose",
  launching: "sky"
};

const integrationTone: Record<IntegrationStatus, "emerald" | "amber" | "rose" | "violet"> = {
  connected: "emerald",
  "needs-review": "amber",
  failing: "rose",
  planned: "violet"
};

export default function Home() {
  const totalHoursSaved = clients.reduce((sum, client) => sum + client.hoursSaved, 0);
  const humanGatedRate = Math.round((playbooks.filter((playbook) => playbook.humanApproval).length / playbooks.length) * 100);
  const avgPlaybookSuccess = Math.round(playbooks.reduce((sum, playbook) => sum + playbook.successRate, 0) / playbooks.length);
  const readinessByClient = new Map(
    clients.map((client) => {
      const gates = readinessGates.filter((gate) => gate.clientId === client.id);
      const passed = gates.filter((gate) => gate.status === "passed").length;
      const blocked = gates.filter((gate) => gate.status === "blocked").length;
      const unresolved = gates.length - passed;

      return [client.id, { blocked, passed, total: gates.length, unresolved }];
    })
  );

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8 lg:px-10">
        <header className="overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.24),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.22),_transparent_32%),#020617] p-8 shadow-2xl shadow-black/30">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Badge tone="sky">Tensor Garden portfolio demo</Badge>
              <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">Claude cowork command center for AI systems integrators</h1>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                A fictional consulting dashboard for standing up Claude workspaces, MCP tools, QuickBooks Online automations, and JobTread operating workflows with explicit human approval gates.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300">
              <p className="font-semibold text-white">Live readiness snapshot</p>
              <p className="mt-3">{healthyClientCount} healthy clients</p>
              <p>{averageConfidence}% average confidence</p>
              <p>{failingIntegrationCount} integration needing urgent repair</p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {heroMetrics.map((metric) => <StatCard key={metric.label} {...metric} />)}
          </div>
        </header>

        <div className="grid gap-8 xl:grid-cols-[1.5fr_1fr]">
          <Card>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Client workspace table</p>
                <h2 className="mt-2 text-2xl font-bold text-white">Claude cowork engagements</h2>
              </div>
              <Badge tone="emerald">{totalHoursSaved} monthly hours saved</Badge>
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[1050px] border-separate border-spacing-y-3 text-left text-sm">
                <thead className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  <tr>
                    <th className="px-4 py-2">Client</th>
                    <th className="px-4 py-2">Engagement</th>
                    <th className="px-4 py-2">Stack</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Confidence</th>
                    <th className="px-4 py-2">Readiness gates</th>
                    <th className="px-4 py-2">Next milestone</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((client) => {
                    const readiness = readinessByClient.get(client.id) ?? { blocked: 0, passed: 0, total: 0, unresolved: 0 };
                    const readinessTone = readiness.blocked > 0 ? "rose" : readiness.unresolved > 0 ? "amber" : "emerald";
                    const readinessDetail = readiness.blocked > 0 ? `${readiness.blocked} blocked` : readiness.unresolved > 0 ? `${readiness.unresolved} in review` : "Production ready";

                    return (
                      <tr key={client.id} className="rounded-2xl bg-slate-900/70 text-slate-200">
                        <td className="rounded-l-2xl px-4 py-4">
                          <p className="font-semibold text-white">{client.company}</p>
                          <p className="text-xs text-slate-400">{client.industry} · {client.owner}</p>
                        </td>
                        <td className="px-4 py-4">{client.engagement}</td>
                        <td className="px-4 py-4">
                          <div className="flex flex-wrap gap-2">{client.stack.slice(0, 3).map((item) => <Badge key={item}>{item}</Badge>)}</div>
                        </td>
                        <td className="px-4 py-4"><Badge tone={statusTone[client.status]}><span className="mr-2"><StatusDot status={client.status} /></span>{client.status}</Badge></td>
                        <td className="px-4 py-4"><div className="w-32"><ProgressBar value={client.confidenceScore} tone={client.confidenceScore > 90 ? "emerald" : "amber"} /></div><p className="mt-1 text-xs text-slate-400">{client.confidenceScore}%</p></td>
                        <td className="px-4 py-4">
                          <div className="w-36">
                            <ProgressBar value={readiness.total > 0 ? (readiness.passed / readiness.total) * 100 : 0} tone={readinessTone} />
                          </div>
                          <p className="mt-1 text-xs text-slate-400">{readiness.passed}/{readiness.total} gates passed · {readinessDetail}</p>
                        </td>
                        <td className="rounded-r-2xl px-4 py-4 text-slate-300">{client.nextMilestone}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>

          <Card>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">Operating analytics</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Safety and throughput</h2>
            <div className="mt-6 space-y-6">
              <div>
                <div className="flex justify-between text-sm"><span>Average workspace confidence</span><span>{averageConfidence}%</span></div>
                <ProgressBar value={averageConfidence} tone="emerald" />
              </div>
              <div>
                <div className="flex justify-between text-sm"><span>Human-gated playbooks</span><span>{humanGatedRate}%</span></div>
                <ProgressBar value={humanGatedRate} tone="amber" />
              </div>
              <div>
                <div className="flex justify-between text-sm"><span>Automation success rate</span><span>{avgPlaybookSuccess}%</span></div>
                <ProgressBar value={avgPlaybookSuccess} tone="sky" />
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm leading-6 text-slate-300">
                This demo treats Claude as a supervised coworker. Financial writes, external messages, and final client documents remain gated by named humans.
              </div>
            </div>
          </Card>
        </div>

        <Card>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Validation evidence</p>
              <h2 className="mt-2 text-2xl font-bold text-white">Human review queue for Claude outputs</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
                Enterprise Claude rollouts need proof that high-impact outputs are checked against source evidence before client-facing actions move forward.
              </p>
            </div>
            <Badge tone="amber">{validationReviews.filter((review) => review.risk === "high").length} high-risk reviews</Badge>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {validationReviews.map((review) => (
              <div key={review.id} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-white">{review.artifact}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">{review.status.replace("-", " ")} · due in {review.dueInHours}h</p>
                  </div>
                  <StatusDot status={review.risk} />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{review.decisionGuardrail}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Evidence anchors</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {review.evidenceAnchors.map((anchor) => (
                    <li key={anchor} className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2">{anchor}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge tone={review.risk === "high" ? "rose" : "amber"}>{review.risk} risk</Badge>
                  <Badge tone="sky">Reviewer: {review.reviewer}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Integration health</p>
            <h2 className="mt-2 text-2xl font-bold text-white">MCP, QuickBooks, JobTread, and team systems</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {integrations.map((integration) => (
                <div key={integration.id} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-white">{integration.system}</h3>
                    <Badge tone={integrationTone[integration.status]}><span className="mr-2"><StatusDot status={integration.status} /></span>{integration.status}</Badge>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{integration.purpose}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                    <span>Sync {integration.lastSyncMinutesAgo} min ago</span>
                    <span>Error budget {integration.errorBudgetUsed}%</span>
                  </div>
                  <div className="mt-3"><ProgressBar value={100 - integration.errorBudgetUsed} tone={integration.errorBudgetUsed > 60 ? "rose" : "emerald"} /></div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">Activity</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Consulting log</h2>
            <div className="mt-6 space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="border-l border-slate-700 pl-4">
                  <p className="text-sm font-semibold text-white">{activity.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">{activity.type}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{activity.detail}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-300">Automation playbooks</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Reusable cowork routines with approvals</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {playbooks.map((playbook) => (
              <div key={playbook.id} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-white">{playbook.name}</h3>
                  <StatusDot status={playbook.risk} />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{playbook.trigger}</p>
                <p className="mt-3 rounded-xl border border-white/10 bg-slate-950/60 p-3 text-xs leading-5 text-slate-300">
                  <span className="font-semibold text-white">Review SLA {playbook.reviewSlaHours}h:</span> {playbook.governanceEvidence}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge tone={playbook.humanApproval ? "amber" : "emerald"}>{playbook.humanApproval ? "Human approval" : "Auto draft"}</Badge>
                  <Badge tone={playbook.risk === "high" ? "rose" : playbook.risk === "medium" ? "amber" : "emerald"}>{playbook.risk} risk</Badge>
                </div>
                <div className="mt-4"><ProgressBar value={playbook.successRate} tone={playbook.successRate > 90 ? "emerald" : "amber"} /></div>
                <p className="mt-2 text-xs text-slate-400">{playbook.successRate}% success · {playbook.averageMinutesSaved} minutes saved</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </main>
  );
}
