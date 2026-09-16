import { Code, FlaskConical, Handshake, LineChart, Settings, Users, Workflow, FileCheck } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { AppleCardCompact, AppleCardFeature } from "@/components/ui/apple-card";
import AnimatedSection from "@/components/AnimatedSection";

const phases = [
  {
    icon: LineChart,
    title: "1. Paid Assessment",
    description: "We benchmark your current environment against Reno, CUBIC, and BBR baselines to quantify hidden capacity in existing silicon.",
    features: ["Throughput, latency, jitter, recovery metrics", "CPU overhead and path utilization analysis", "Benchmark report vs. customer baseline"],
  },
  {
    icon: FlaskConical,
    title: "2. Proof of Concept",
    description: "Non-production, limited-scope pilot with defined success metrics before any fleet expansion. Risk is controlled by design.",
    features: ["Controlled-scope deployment", "Pre-defined success metrics", "Auto-fallback safety model"],
  },
  {
    icon: Workflow,
    title: "3. Co-Development",
    description: "Custom tuning and integration of Racer / Racer Silver / Racer Gold for your workload, fleet, and operational constraints.",
    features: ["Workload-specific algorithm tuning", "Integration docs and runbooks", "Joint engineering with your SRE/Platform team"],
  },
  {
    icon: FileCheck,
    title: "4. Annual License",
    description: "License the measurable improvement. Annual fees tier by hardware fleet size and quantified efficiency gains.",
    features: ["Tiered by fleet size", "Priced against measured gains", "Strategic vertical rights available"],
  },
];

const valueDrivers = [
  {
    icon: Settings,
    title: "Avoided CapEx",
    description: "If utilization improves, customers defer infrastructure expansion. Measured as capacity delay and avoided servers / NICs / cloud instances.",
  },
  {
    icon: LineChart,
    title: "Revenue Reliability",
    description: "Better performance reduces outages, lag, churn, and SLA penalties. Measured via SLA improvement, error reduction, and user QoE.",
  },
  {
    icon: Workflow,
    title: "Operational Efficiency",
    description: "Less packet waste and faster recovery reduce load on systems and teams. Measured by retransmit reduction and incident frequency.",
  },
  {
    icon: Code,
    title: "GPU / Compute Efficiency",
    description: "AI infrastructure loses money when expensive compute waits on data movement. Measured via GPU idle time, job completion, and inference latency.",
  },
  {
    icon: Handshake,
    title: "Competitive Differentiation",
    description: "Better infrastructure behavior becomes a product advantage — performance benchmarks, customer retention, and enterprise sales proof.",
  },
];

const engagement = [
  { category: "Paid Performance Assessment", items: "Benchmark current vs. proprietary algorithms with full report." },
  { category: "Proof of Concept (PoC)", items: "Non-production validation with defined metrics and success criteria." },
  { category: "Annual Licensing", items: "Tiered by hardware fleet size and quantified efficiency gains." },
  { category: "Strategic Vertical Rights", items: "Exclusive licensing options for high-value verticals." },
  { category: "Co-Development", items: "Joint engineering for custom workloads and integrations." },
  { category: "Integration & Support", items: "Drop-in for Linux, no application rewrites, auto-fallback safety." },
];

const CustomDev = () => {
  return (
    <ServicePageLayout
      title="Custom Development & Co-Engineering"
      subtitle="Built With You, Licensed To You"
      metaTitle="Custom Network Algorithm Engineering & Co-Development | TechPivot"
      metaDescription="Co-engineer custom congestion control and network optimization algorithms tuned to your workloads, delivered as a proof-led, licensed engagement. Start a pilot."
      keywords="custom algorithm development, network optimization engineering, co-engineering services, custom congestion control, performance engineering services, kernel engineering services, licensed algorithm development"
      description="Beyond the off-the-shelf Symbiote Racer™ platform, TechPivot and BluejaySol Labs™ co-develop custom algorithmic integrations tuned to your infrastructure, workloads, and operational constraints — delivered as a proof-led engagement and licensed against measurable gains."
      icon={<Code className="w-8 h-8 text-primary" />}
      showVectorMesh={true}
    >
      {/* Engagement Phases */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">A Proof-Led Engagement</h2>
            <p className="text-lg text-muted-foreground">
              Every engagement follows the same controlled-proof structure — benchmark, pilot, integrate, license.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-6">
            {phases.map((p, i) => (
              <AnimatedSection key={p.title} animation="fadeUp" delay={i * 100}>
                <AppleCardFeature icon={p.icon} title={p.title} description={p.description} features={p.features} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ROI & Value Model */}
      <section className="py-20 lg:py-28 bg-muted animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">ROI & Value Model</h2>
            <p className="text-lg text-muted-foreground">
              Our value model is based on avoided CapEx, improved utilization, reduced operational waste, and improved customer experience.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueDrivers.map((v, i) => (
              <AnimatedSection key={v.title} animation="fadeUp" delay={i * 80}>
                <AppleCardCompact icon={v.icon} title={v.title} description={v.description} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How We Engage</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Monetized via paid assessments, PoCs, and annual licensing — scaled by customer size and total value delivered.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {engagement.map((e, i) => (
              <AnimatedSection key={e.category} animation="fadeUp" delay={i * 80}>
                <AppleCardCompact icon={Users} title={e.category} description={e.items} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default CustomDev;
