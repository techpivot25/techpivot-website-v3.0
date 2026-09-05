import { Cpu, Zap, Gauge, Leaf, Network, TrendingUp } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { AppleCardCompact } from "@/components/ui/apple-card";
import AnimatedSection from "@/components/AnimatedSection";

const coreGains = [
  { icon: Zap, title: "Algorithmic Acceleration", description: "Re-architecting core algorithms for order-of-magnitude gains in throughput, accuracy, or convergence time." },
  { icon: Network, title: "Kernel & Transport-Layer Tuning", description: "Optimization at the layers where performance is actually won, without touching application code." },
  { icon: Leaf, title: "Energy Efficiency Engineering", description: "Cutting the energy footprint of compute-intensive systems at the algorithmic level, not just the hardware level." },
];

const howItWorks = [
  { icon: Gauge, title: "Benchmarked Against Standards", description: "Every optimization is measured against industry-standard baselines like Reno, CUBIC, and BBR." },
  { icon: Cpu, title: "Zero Application Disruption", description: "Gains are delivered without rewriting a single line of your existing application code." },
  { icon: TrendingUp, title: "Infrastructure You Already Own", description: "We make the hardware you've already invested in perform significantly better — not force a replacement." },
];

const AlgorithmicInfrastructureOptimization = () => {
  return (
    <ServicePageLayout
      title="Algorithmic Infrastructure Optimization"
      subtitle="Capability 02"
      metaTitle="Algorithmic Infrastructure Optimization | TechPivot Technologies"
      metaDescription="Advanced mathematics that makes software run significantly faster on less hardware. Kernel and transport-layer optimization delivering measurable performance gains without code rewrites."
      keywords="algorithmic infrastructure optimization, infrastructure performance optimization, kernel level optimization, transport layer optimization, network throughput optimization, congestion control algorithms, compute efficiency engineering, hardware performance tuning"
      description="Advanced mathematics that makes software run significantly faster on less hardware — turning the infrastructure you already own into a high-efficiency powerhouse."
      icon={<Cpu className="w-8 h-8 text-primary" />}
      showVectorMesh={true}
    >
      {/* Core Gains */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Algorithms Before Hardware
            </h2>
            <p className="text-lg text-muted-foreground">
              Our optimization work is engineered to integrate at the kernel and transport layer,
              proving measurable gains without touching your application code.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-6">
            {coreGains.map((item, index) => (
              <AnimatedSection key={item.title} animation="fadeUp" delay={index * 100}>
                <AppleCardCompact icon={item.icon} title={item.title} description={item.description} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-secondary/30 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How the Optimization Process Works
            </h2>
            <p className="text-lg text-muted-foreground">
              A rigorous, benchmark-driven approach to unlocking performance that's already latent
              in your infrastructure.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-6">
            {howItWorks.map((item, index) => (
              <AnimatedSection key={item.title} animation="fadeUp" delay={index * 100}>
                <AppleCardCompact icon={item.icon} title={item.title} description={item.description} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning statement */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12 max-w-3xl mx-auto text-center">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Unlocking Performance
            </h2>
            <p className="text-lg text-muted-foreground">
              Advanced mathematics that makes software run significantly faster on less hardware —
              turning the infrastructure you already own into a high-efficiency powerhouse.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default AlgorithmicInfrastructureOptimization;
