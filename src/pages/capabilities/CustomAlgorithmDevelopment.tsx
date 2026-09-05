import { FlaskConical, Sigma, TestTube2, Layers, Microscope, GitBranch } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { AppleCardCompact } from "@/components/ui/apple-card";
import AnimatedSection from "@/components/AnimatedSection";

const designProcess = [
  { icon: Sigma, title: "First-Principles Modeling", description: "Novel mathematical models and formal frameworks built from the ground up around your specific problem." },
  { icon: Layers, title: "Hardware-Aware Co-Design", description: "Designing algorithms alongside the hardware they run on, so performance gains come from the architecture itself." },
  { icon: TestTube2, title: "Simulation & Validation", description: "Every improvement is stress-tested against real-world behavior before a single line reaches production." },
];

const whyCustom = [
  { icon: Microscope, title: "Beyond Off-the-Shelf", description: "When existing libraries and frameworks hit a ceiling, we build the algorithm your problem actually needs." },
  { icon: GitBranch, title: "Iterative Partnership", description: "Close collaboration with your in-house engineering teams throughout design, testing, and rollout." },
  { icon: FlaskConical, title: "Provable Results", description: "Formal validation and benchmarking, not just empirical tuning — so gains are measurable and defensible." },
];

const CustomAlgorithmDevelopment = () => {
  return (
    <ServicePageLayout
      title="Custom Algorithm Development"
      subtitle="Capability 03"
      metaTitle="Custom Algorithm Development | TechPivot Technologies"
      metaDescription="Novel mathematical models and simulation frameworks built from first principles for problems that off-the-shelf algorithms can't solve. Hardware-aware, validated, production-ready."
      keywords="custom algorithm development, mathematical framework design, algorithm engineering services, simulation and validation, formal modeling, hardware aware algorithm design, applied mathematics consulting, bespoke algorithm design"
      description="When an off-the-shelf approach won't cut it, we design novel algorithms and mathematical models from first principles — built around your exact constraints, data, and performance targets."
      icon={<FlaskConical className="w-8 h-8 text-primary" />}
      showGeometricBlocks={true}
    >
      {/* Design Process */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built From First Principles
            </h2>
            <p className="text-lg text-muted-foreground">
              A disciplined design process that starts with your problem, not a pre-built library.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-6">
            {designProcess.map((item, index) => (
              <AnimatedSection key={item.title} animation="fadeUp" delay={index * 100}>
                <AppleCardCompact icon={item.icon} title={item.title} description={item.description} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Custom */}
      <section className="py-20 lg:py-28 bg-secondary/30 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Partners Choose Custom Development
            </h2>
            <p className="text-lg text-muted-foreground">
              When accuracy, throughput, or convergence targets exceed what generic tooling can deliver.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-6">
            {whyCustom.map((item, index) => (
              <AnimatedSection key={item.title} animation="fadeUp" delay={index * 100}>
                <AppleCardCompact icon={item.icon} title={item.title} description={item.description} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12 max-w-3xl mx-auto text-center">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Problem, Solved From the Ground Up
            </h2>
            <p className="text-lg text-muted-foreground">
              We don't force your problem into someone else's framework. We build the mathematics,
              simulate it against real conditions, and hand over an algorithm engineered specifically
              for what you're trying to achieve.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default CustomAlgorithmDevelopment;
