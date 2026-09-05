import { Rocket, Zap, ShieldCheck, GitBranch, Activity, Trophy, Award } from "lucide-react";
import { motion } from "framer-motion";
import ServicePageLayout from "@/components/ServicePageLayout";
import { AppleCardCompact, AppleCardFeature } from "@/components/ui/apple-card";
import AnimatedSection from "@/components/AnimatedSection";
import { LazyImage } from "@/components/ui/lazy-image";
import kernelTransportImg from "@/assets/stack-kernel-transport.jpg";
import congestionControlImg from "@/assets/stack-congestion-control.jpg";
import benchmarkingImg from "@/assets/stack-benchmarking-telemetry.jpg";
import cloudEdgeImg from "@/assets/stack-cloud-edge.jpg";

const racerStack = [
  {
    id: 1,
    title: "Kernel & Transport",
    description: "Kernel-resident integration points where Symbiote Racer™ algorithms operate — no application changes required.",
    image: kernelTransportImg,
  },
  {
    id: 2,
    title: "Congestion Control Baselines",
    description: "Standards we measure against to prove live-path gains for Racer, Racer Silver, and Racer Gold.",
    image: congestionControlImg,
  },
  {
    id: 3,
    title: "Telemetry",
    description: "Telemetry instrumentation for throughput, P50/P95/P99 latency, jitter, retransmits, and recovery time.",
    image: benchmarkingImg,
  },
  {
    id: 4,
    title: "Cloud & Edge Infrastructure",
    description: "Deployment targets where customers run Symbiote Racer™ pilots and production rollouts.",
    image: cloudEdgeImg,
  },
];

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
      title="Racer™ v1.0"
      subtitle="The Solution"
      metaTitle="Racer™ Platform | Adaptive TCP Congestion Control for Linux | TechPivot"
      metaDescription="Racer™ is an adaptive kernel-resident TCP congestion control platform for Linux that outperforms CUBIC and BBR with drop-in integration and safe fallback."
      keywords="adaptive congestion control, Linux TCP optimization, kernel congestion control algorithm, BBR vs CUBIC, TCP performance tuning, network latency reduction, throughput optimization platform, Racer platform"
      description={"Adaptive Kernel-Resident TCP/IP Congestion Platform\n\nTo prove bottom-line network value, Racer directly outpaces kernel-resident defaults on production streams:\nAdaptive kernel-level congestion control for Linux. A family of three proprietary algorithms Racer, Racer Silver, and Racer Gold that race in parallel on the live path so the highest performer always wins. Drop-in integration, no application changes, automatic safety fallback."}
      icon={<Rocket className="w-8 h-8 text-primary" />}
      showVectorMesh={true}
    >
      {/* From Blueprint to Kernel-Level Execution */}
      <section className="relative py-20 lg:py-28 overflow-hidden animate-section">

        {/* Vector Background Animation */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Flowing data-stream gradient */}
              <linearGradient id="streamGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="streamGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </linearGradient>
              {/* Kernel layer radial glow */}
              <radialGradient id="kernelGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Radial background glow centred on content */}
            <ellipse cx="50%" cy="45%" rx="55%" ry="40%" fill="url(#kernelGlow)" />

            {/* Horizontal kernel-layer data streams */}
            <line x1="-10%" y1="22%" x2="110%" y2="22%" stroke="url(#streamGrad1)" strokeWidth="1">
              <animateTransform attributeName="transform" type="translate" from="-120% 0" to="120% 0" dur="7s" repeatCount="indefinite" />
            </line>
            <line x1="-10%" y1="38%" x2="110%" y2="38%" stroke="url(#streamGrad2)" strokeWidth="0.8">
              <animateTransform attributeName="transform" type="translate" from="-120% 0" to="120% 0" dur="11s" begin="-3s" repeatCount="indefinite" />
            </line>
            <line x1="-10%" y1="61%" x2="110%" y2="61%" stroke="url(#streamGrad1)" strokeWidth="1">
              <animateTransform attributeName="transform" type="translate" from="-120% 0" to="120% 0" dur="9s" begin="-5s" repeatCount="indefinite" />
            </line>
            <line x1="-10%" y1="78%" x2="110%" y2="78%" stroke="url(#streamGrad2)" strokeWidth="0.6">
              <animateTransform attributeName="transform" type="translate" from="-120% 0" to="120% 0" dur="14s" begin="-7s" repeatCount="indefinite" />
            </line>

            {/* Layer separation dashed lines — visualises "below the application layer" */}
            <line x1="5%" y1="50%" x2="95%" y2="50%" stroke="hsl(var(--primary))" strokeOpacity="0.07" strokeWidth="1" strokeDasharray="6 10" />
            <line x1="5%" y1="52%" x2="95%" y2="52%" stroke="hsl(var(--primary))" strokeOpacity="0.04" strokeWidth="1" strokeDasharray="6 10" />

            {/* Pulse nodes — represent active kernel control points */}
            {[18, 38, 58, 78].map((cx, idx) => (
              <g key={idx}>
                <circle cx={`${cx}%`} cy="50%" r="3" fill="hsl(var(--primary))" fillOpacity="0.5">
                  <animate attributeName="r" values="3;7;3" dur={`${3 + idx}s`} repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.5;0.1;0.5" dur={`${3 + idx}s`} repeatCount="indefinite" />
                </circle>
                <circle cx={`${cx}%`} cy="50%" r="1.5" fill="hsl(var(--primary))" fillOpacity="0.9" />
              </g>
            ))}

            {/* Diagonal grid lines — kernel mesh feel */}
            <line x1="0%" y1="0%" x2="30%" y2="100%" stroke="hsl(var(--primary))" strokeOpacity="0.03" strokeWidth="1" />
            <line x1="35%" y1="0%" x2="65%" y2="100%" stroke="hsl(var(--primary))" strokeOpacity="0.03" strokeWidth="1" />
            <line x1="70%" y1="0%" x2="100%" y2="100%" stroke="hsl(var(--primary))" strokeOpacity="0.03" strokeWidth="1" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Solution</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              From Blueprint to Kernel-Level Execution
            </h2>
            <p className="text-lg font-medium text-muted-foreground mb-6">
              Live traffic performance, kernel-native integration, and a safety model built for production.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Once you accept the "Controlled Proof" results, we move from blueprint to full-scale engineering execution. We deploy our proprietary algorithmic enhancements across your entire target environment, ensuring zero disruption to your existing customer workflows.
            </p>
          </AnimatedSection>

          {/* Here is exactly what we build */}
          <AnimatedSection animation="fadeUp" delay={100} className="max-w-4xl mx-auto mb-10">
            <p className="text-base font-semibold text-foreground mb-6 text-center tracking-wide uppercase text-sm">
              Here is exactly what we build
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Block 1 */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3 mb-1">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/15 text-primary font-bold text-sm">1</span>
                  <h3 className="text-lg font-bold text-foreground">Infrastructure Optimization</h3>
                </div>
                <p className="text-xs font-mono uppercase tracking-widest text-primary mb-1">The Root Layer</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We integrate custom control logic directly at the root/network control layer — specialized transport behavior and advanced congestion recovery algorithms that eliminate jitter and maximize data flow. We don't just tune the surface; we rewrite the traffic rules your hardware follows.
                </p>
              </div>
              {/* Block 2 */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3 mb-1">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/15 text-primary font-bold text-sm">2</span>
                  <h3 className="text-lg font-bold text-foreground">AI Workload Fine-Tuning</h3>
                </div>
                <p className="text-xs font-mono uppercase tracking-widest text-primary mb-1">LLM Layer</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We containerize and fine-tune your chosen open-source LLM (Llama, Mistral, etc.) to run efficiently on your newly optimized hardware. We ensure your models extract maximum token throughput without requiring costly GPU upgrades.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Frictionless Promise */}
          <AnimatedSection animation="fadeUp" delay={150} className="max-w-4xl mx-auto mb-10">
            <div className="rounded-2xl border border-primary/30 bg-background p-7">
              <h3 className="text-lg font-bold text-foreground mb-3">The Frictionless Promise</h3>
              <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">Zero Architecture Friction</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every enhancement is positioned safely beneath your application layer. This means <strong className="text-foreground">absolutely zero application code changes</strong> are necessary to unlock these gains — no broken APIs, no refactoring sprints, and no compliance nightmares. Your developers won't even know we are there, except for the sudden performance spike.
              </p>
            </div>
          </AnimatedSection>

          {/* Final Deliverable */}
          <AnimatedSection animation="fadeUp" delay={200} className="max-w-4xl mx-auto mb-16">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-7 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Final Deliverable</p>
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                An <strong className="text-foreground">Optimized Production Sandbox</strong> with fully integrated middleware, ready for live-traffic validation. This isn't a lab experiment; it's a hardened, kernel-tuned environment primed for your next growth phase.
              </p>
            </div>
          </AnimatedSection>

          {/* Achievement cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((a, i) => (
              <AnimatedSection key={a.title} animation="fadeUp" delay={i * 100}>
                <AppleCardCompact icon={a.icon} title={a.title} description={a.description} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* The Stack Behind Racer™ */}
      <section className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden animate-section">
        <div className="container px-6 lg:px-12 relative z-10">
          <AnimatedSection animation="fadeUp" className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white lg:text-5xl">
                The Stack Behind Racer™
              </h2>
              <p className="text-slate-400 mt-2 text-base font-thin">
                Algorithms before hardware. Our technology stack is engineered to integrate at the kernel and transport layer proving measurable gains against Reno, CUBIC, and BBR without touching a single line of application code.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {racerStack.map((study, index) => (
              <AnimatedSection key={study.id} animation="fadeUp" delay={index * 100}>
                <motion.div
                  className="group relative bg-slate-900 border border-white/[0.08] rounded-3xl overflow-hidden h-full flex flex-col"
                  whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.12)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-44 lg:h-52 overflow-hidden">
                    <LazyImage
                      src={study.image}
                      alt={study.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      wrapperClassName="w-full h-full"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-base font-bold text-white tracking-tight mb-2 group-hover:text-[#00b8d9] transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-grow">
                      {study.description}
                    </p>
                  </div>
                </motion.div>
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

          {/* Header */}
          <AnimatedSection animation="fadeUp" className="mb-14 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Proof Standard</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Metrics That Must<br className="hidden md:block" /> Be Measured
                </h2>
              </div>
              <p className="text-base md:text-lg text-muted-foreground max-w-sm leading-relaxed">
                Customers will not accept broad claims. The proof must show what was measured, how it was measured, and what changed vs baseline.
              </p>
            </div>
          </AnimatedSection>

          {/* Metrics rows */}
          <div className="max-w-4xl mx-auto divide-y divide-border">
            {metrics.map((m, i) => (
              <AnimatedSection key={m.category} animation="fadeUp" delay={i * 60}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 py-6">
                  {/* Index + category */}
                  <div className="flex items-start gap-4 sm:w-64 shrink-0">
                    <span className="text-xs font-mono text-primary/50 mt-1 w-5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-base md:text-lg font-semibold text-foreground leading-snug">
                        {m.category}
                      </span>
                    </div>
                  </div>
                  {/* Description */}
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed sm:pl-0 pl-9">
                    {m.items}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>
racer
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
