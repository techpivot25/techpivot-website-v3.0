import { Lightbulb, Cpu, TrendingDown, ShieldAlert, Layers, Gauge } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { AppleCardCompact, AppleCardFeature } from "@/components/ui/apple-card";
import AnimatedSection from "@/components/AnimatedSection";
import { color } from "framer-motion";

const painPoints = [
  {
    icon: TrendingDown,
    title: "Infrastructure Waste",
    description: "Servers, GPUs, storage, and networks sit under-utilized when transport behavior or congestion recovery is inefficient. Algorithmic improvement increases value from existing assets before CAPEX expansion.",
  },
  {
    icon: ShieldAlert,
    title: "Application Rewrite Risk",
    description: "Large enterprises avoid changes that can break APIs, contracts, compliance, and customer workflows. We position integration below the application layer — no application code changes needed.",
  },
  {
    icon: Layers,
    title: "Default Algorithm Limits",
    description: "Production systems rely on generic network defaults that were never tuned for their exact workloads. Symbiote Racer™ is tested as a specialized control strategy against standard baselines.",
  },
  {
    icon: Gauge,
    title: "Latency & Jitter",
    description: "Real-time systems lose value when latency spikes, jitter increases, or recovery becomes unstable. Our benchmarking quantifies stability, recovery time, and packet waste.",
  },
  {
    icon: Cpu,
    title: "CAPEX Pressure",
    description: "Buying more hardware often hides inefficiency instead of solving it. The thesis is simple algorithms before hardware: optimize first, then expand second.",
  },
];

const qa = [
  { title: "What do we have?", description: "Proprietary algorithms led by Racer™, optimizing network control against Reno, CUBIC, and BBR baselines." },
  { title: "What does the customer buy?", description: "A proof-led package: performance assessment, pilot, integration docs, benchmark report, and annual license." },
  { title: "Why should they care?", description: "Gains without new servers, NICs, application rewrites, or vendor replacement. Unlocks hidden asset value." },
  { title: "How is risk controlled?", description: "Non-production/limited-scope testing. Defined metrics vs. customer baseline before any fleet expansion." },
];

const Concept = () => {
  return (
    <ServicePageLayout
      title="The Concept"
      subtitle="Algorithms Before Hardware"
      metaTitle="TCP/IP Congestion Control Optimization | The Concept | TechPivot"
      metaDescription="Extract more throughput from existing infrastructure with kernel-level congestion control algorithms. No hardware upgrades, no app rewrites. See the concept."
      keywords="network performance optimization, TCP congestion control, kernel level optimization, bandwidth optimization software, network throughput improvement, data centre optimization, infrastructure cost reduction, BBR CUBIC alternative"
      description={`TechPivot helps infrastructure-heavy companies extract measurable performance from systems they already own by licensing proprietary optimization algorithms that operate at the root/network control layer. Same infrastructure. No app rewrite. Licensed, measurable gains.\n\nWe start with your data. We analyze your infrastructure, data maturity, and business objectives. We conduct a "Proof of Concept" (PoC) using your actual data (securely) to validate the ROI of AI in your specific context.\n\nDeliverable: Data Strategy Report & Technical Feasibility Matrix.`}
      icon={<Lightbulb className="w-8 h-8 text-primary" />}
      showVectorMesh={true}
    >
      {/* Our Promise */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">The Controlled Proof</h2>
            <p className="text-xl md:text-2xl font-semibold text-muted-foreground mb-8">
              Algorithms Before Hardware. Results Before Contracts.
            </p>
            <div className="text-lg text-muted-foreground leading-relaxed text-left space-y-5">
              <p>
                Most consultancies sell you hardware, cloud migrations, or application rewrites. We sell <strong>"performance physics"</strong>. TechPivot is an algorithmic infrastructure firm that optimizes what you already own, delivering measurable gains without breaking your existing systems.
              </p>
              <p>
                Our approach is the <strong>"Controlled Proof."</strong>
              </p>
              <p>
                We don't ask for a blank check. Instead, we isolate a representative segment of your production environment and benchmark your current hardware against its theoretical capacity. We look beyond the surface to identify where milliseconds, network congestion, and default scheduling baselines are draining your revenue.
              </p>
              <p>
                Using proprietary logic (including frameworks like <strong>Symbiote Racer™</strong>) integrated at the root/control layer, we quantify the performance delta before you commit.
              </p>
            </div>

            {/* The Promise */}
            <div className="mt-10 p-8 rounded-2xl bg-primary/5 border border-primary/20 text-left">
              <h3 className="text-xl font-bold text-foreground mb-4">The Promise</h3>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">✦</span>
                  <span><strong className="text-foreground">Zero CAPEX:</strong> No new hardware required.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">✦</span>
                  <span><strong className="text-foreground">Zero Application Rewrites:</strong> We operate below the application layer — no broken APIs, no compliance nightmares.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">✦</span>
                  <span><strong className="text-foreground">Zero Risk:</strong> We only license the improvement if we achieve the specific metric we promised.</span>
                </li>
              </ul>
            </div>

            {/* Deliverables */}

<h2> <br></br></h2>            <div className="mt-8 p-8 rounded-2xl bg-secondary/10 border border-border text-left">
              <h3 className="text-xl font-bold text-foreground mb-4">Our Deliverables</h3>
              <p className="text-muted-foreground mb-5">
                Upon completion of the Concept phase, we provide a comprehensive roadmap for the next phase:
              </p>
              <ol className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg leading-snug">1.</span>
                  <span>
                    <strong className="text-foreground">Infrastructure Waste & Latency Report:</strong> A granular benchmark of current GPU utilization, network congestion, jitter, and recovery instability versus theoretical hardware capacity.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg leading-snug">2.</span>
                  <span>
                    <strong className="text-foreground">AI/Data Feasibility Matrix:</strong> An assessment of your business objectives and data maturity, mapped specifically to the optimized capacity identified in our audit.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg leading-snug">3.</span>
                  <span>
                    <strong className="text-foreground">The Performance Guarantee:</strong> A detailed proposal promising a specific, quantifiable metric (e.g., "Reducing inference latency by 40%" or "Increasing network throughput by 25%") that we will deliver before you sign a long-term license.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Problem */}
      <section className="py-20 lg:py-28 bg-muted animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Problem Statement</h2>
            <p className="text-lg text-muted-foreground">
              Our strongest customers operate environments where milliseconds, network utilization, system efficiency, or recovery behavior directly affect revenue, reliability and customer experience.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((p, i) => (
              <AnimatedSection key={p.title} animation="fadeUp" delay={i * 100}>
                <AppleCardCompact icon={p.icon} title={p.title} description={p.description} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Q&A */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Strategic Approach</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Benchmark-led entry starting with a performance audit to uncover hidden capacity in existing silicon.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {qa.map((item, i) => (
              <AnimatedSection key={item.title} animation="fadeUp" delay={i * 100}>
                <AppleCardCompact title={item.title} description={item.description} />
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-12 max-w-4xl mx-auto p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center">
            <p className="text-base md:text-lg text-foreground">
              <strong>Licensing & Value:</strong> Annual fees are tiered based on hardware fleet size and quantified efficiency gains (e.g., % of power saved or throughput gained). High-value verticals allow for exclusive strategic rights.
            </p>
          </div>
        </div>
      </section>

      {/* Ideal Customers */}
      <section className="py-20 lg:py-28 bg-secondary/15 animate-section">
        <div className="container px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ideal Customers</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Heavy infrastructure owners Telecom, Satellite, and Data Centers with legacy hardware and fixed CapEx cycles, where milliseconds and utilization translate directly into revenue.
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default Concept;
