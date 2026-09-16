import { Rocket, Zap, ShieldCheck, GitBranch, Activity, Trophy, Award } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { AppleCardCompact, AppleCardFeature } from "@/components/ui/apple-card";
import AnimatedSection from "@/components/AnimatedSection";

const achievements = [
  {
    icon: Zap,
    title: "Live Traffic Path Performance - Beats BBR",
    description: "A family of three algorithms Racer, Racer Silver, and Racer Gold that outperform BBR on production traffic.",
  },
  {
    icon: GitBranch,
    title: "Kernel Integration - Drop-in for Linux",
    description: "Runs alongside the kernel-resident standards with no application changes or service restarts.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Model - Auto-Fallback",
    description: "Health-monitored execution with automatic rollback to a kernel-resident algorithm on instability.",
  },
];

const tiers = [
  {
    badge: "Recommended",
    tier: "Tier 1",
    name: "Racer Copper",
    icon: ShieldCheck,
    accent: "copper",
    bullets: [
      { text: "Optimizes hardware packet management layer metrics.", highlight: false },
      { text: "Outperforms BBR on 50% to 60% of live traffic paths.", highlight: true },
      { text: "Outperforms CUBIC 95% of the time.", highlight: false },
    ],
    target: "Entry-level packet management optimization for stable networks.",
  },
  {
    badge: "Balanced Standard",
    tier: "Tier 2",
    name: "Racer Silver",
    icon: Award,
    accent: "silver",
    bullets: [
      { text: "Advanced scheduling over volatile congestion stacks.", highlight: false },
      { text: "Outperforms BBR up to 80+% of the time on live traffic paths.", highlight: true },
      { text: "Outperforms CUBIC 99% of the time.", highlight: false },
    ],
    target: "Fluctuating distributed traffic architectures.",
  },
  {
    badge: "Custom",
    tier: "Tier 3 Max",
    name: "Racer Gold",
    icon: Trophy,
    accent: "gold",
    bullets: [
      { text: "Improves 8 to 20 sub-layer execution stacks.", highlight: false },
      { text: "Outperforms BBR on live traffic paths.", highlight: true },
      { text: "Outperforms CUBIC 99% of the time.", highlight: false },
    ],
    target: "Mission critical cloud clusters & AI hardware fabrics.",
  },
];

const accentMap: Record<string, { text: string; border: string; dot: string; bullet: string }> = {
  copper: { text: "text-orange-400", border: "border-orange-400/40", dot: "bg-orange-400", bullet: "text-orange-300" },
  silver: { text: "text-sky-300", border: "border-sky-300/40", dot: "bg-sky-300", bullet: "text-sky-300" },
  gold: { text: "text-yellow-400", border: "border-yellow-400/40", dot: "bg-yellow-400", bullet: "text-yellow-300" },
};

const metrics = [
  { category: "Throughput Stability", items: "Mean, median, p95, variance, and stability index." },
  { category: "Latency", items: "p50, p95, p99 and tail latency under stress." },
  { category: "Jitter", items: "Standard deviation and p95 jitter." },
  { category: "Recovery Time", items: "Time-to-recover after a defined event." },
  { category: "Retransmits / Packet Waste", items: "Rate before/after and normalized waste index." },
  { category: "CPU Overhead", items: "CPU percent, cycles, memory footprint and overhead delta." },
  { category: "Path Utilization", items: "Delivered throughput divided by available/estimated path capacity." },
];

const baselines = [
  { category: "RFC 5681 — Reno", items: "Classic loss-based control; standards baseline." },
  { category: "RFC 8312 — CUBIC", items: "Default Linux congestion control algorithm." },
  { category: "BBR", items: "Modern model-based control; strongest public benchmark." },
  { category: "RFC 9743", items: "New congestion control deployment guidance." },
];

const Solution = () => {
  return (
    <ServicePageLayout
      title="Racer™ Platform v1.0"
      subtitle="The Solution"
      metaTitle="Racer™ Platform | Adaptive TCP Congestion Control for Linux | TechPivot"
      metaDescription="Racer™ is an adaptive kernel-resident TCP congestion control platform for Linux that outperforms CUBIC and BBR with drop-in integration and safe fallback."
      keywords="adaptive congestion control, Linux TCP optimization, kernel congestion control algorithm, BBR vs CUBIC, TCP performance tuning, network latency reduction, throughput optimization platform, Racer platform"
      description={"Adaptive Kernel-Resident TCP/IP Congestion Platform\n\nTo prove bottom-line network value, Racer directly outpaces kernel-resident defaults on production streams:\nAdaptive kernel-level congestion control for Linux. A family of three proprietary algorithms Racer, Racer Silver, and Racer Gold that race in parallel on the live path so the highest performer always wins. Drop-in integration, no application changes, automatic safety fallback."}
      icon={<Rocket className="w-8 h-8 text-primary" />}
      showVectorMesh={true}
    >
      {/* What We've Achieved */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">From Blueprint to Kernel-Level Execution</h2>
            <h3>Live traffic performance, kernel-native integration, and a safety model built for production.</h3>{"\n\n"}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto whitespace-pre-line">
              Once you accept the "Controlled Proof" results, we move from blueprint to full-scale engineering execution. We deploy our proprietary algorithmic enhancements across your entire target environment, ensuring zero disruption to your existing customer workflows{"\n\n"}
              We help infrastructure-heavy companies extract measurable performance from systems you already own by licensing proprietary optimization algorithms that work at the root/network control layer.{"\n\n"}
              # Zero Architecture Friction: By positioning our logic below the application layer, absolutely no application code changes are necessary to unlock these gains.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((a, i) => (
              <AnimatedSection key={a.title} animation="fadeUp" delay={i * 100}>
                <AppleCardCompact icon={a.icon} title={a.title} description={a.description} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Available Product Tiers & Capabilities */}
      <section className="py-20 lg:py-28 bg-[#0a1426] animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-mono tracking-[0.2em] uppercase text-slate-300">
              Available Product Tiers & Capabilities
            </h2>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-6">
            {tiers.map((t, i) => {
              const a = accentMap[t.accent];
              const Icon = t.icon;
              return (
                <AnimatedSection key={t.name} animation="fadeUp" delay={i * 100}>
                  <div className="relative rounded-2xl border border-white/10 bg-[#0f1d35] p-6 h-full flex flex-col">
                    <div className="mb-5">
                      <span className="inline-block px-3 py-1 rounded-md bg-primary text-primary-foreground text-[11px] font-mono font-semibold uppercase tracking-wider">
                        {t.badge}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-5">
                      <span className={`px-3 py-1 rounded-md border ${a.border} ${a.text} font-mono text-sm`}>
                        {t.tier}
                      </span>
                      <Icon className={`w-5 h-5 ${a.text}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-5">{t.name}</h3>
                    <ul className="space-y-3 mb-8 flex-1">
                      {t.bullets.map((b, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${a.dot}`} />
                          <span className={b.highlight ? `${a.bullet} font-semibold` : "text-slate-200"}>
                            {b.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-slate-400 italic font-mono text-sm pt-4 border-t border-white/10">
                      <span className="font-semibold not-italic">Target:</span> {t.target}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metrics That Must Be Measured */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Metrics That Must Be Measured</h2>
            <p className="text-lg text-muted-foreground">
              Customers will not accept broad claims. The proof must show what was measured, how it was measured, and what changed vs baseline.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((m, i) => (
              <AnimatedSection key={m.category} animation="fadeUp" delay={i * 80}>
                <AppleCardCompact icon={Activity} title={m.category} description={m.items} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Product & Delivery */}
      <section className="py-20 lg:py-28 bg-muted animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Product & Delivery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How customers receive the algorithms and the standards they are measured against.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            <AppleCardFeature
              icon={Rocket}
              title="Racer™ Product"
              description="One product, one stable API, three algorithms."
              features={[
                "Bundled Racer licensed with Racer",
                "Proprietary Racer Silver licensed separately",
                "Proprietary Racer Gold licensed separately",
                "Stable API — all three algorithms exposed via one contract",
              ]}
            />
            <AppleCardFeature
              icon={ShieldCheck}
              title="Standards Baseline"
              description="Measured against the algorithms your infrastructure runs today."
              features={baselines.map((b) => `${b.category} — ${b.items}`)}
            />
          </div>
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-surface-dark text-surface-dark-foreground text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">The Bottom Line</p>
            <p className="text-xl md:text-2xl font-medium leading-snug">
              Your existing hardware becomes a self-optimizing asset, maximizing profit for every second it is in use.
            </p>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default Solution;
