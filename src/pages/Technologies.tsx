import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Zap,
  FlaskConical,
  Cpu,
  Leaf,
  ShieldCheck,
  Globe,
  type LucideIcon,
} from "lucide-react";

const capabilities: {
  title: string;
  icon: LucideIcon;
  description: string;
}[] = [
  {
    title: "Algorithmic Acceleration",
    icon: Zap,
    description:
      "Re-architecting core algorithms for order-of-magnitude gains in throughput, accuracy, or convergence time.",
  },
  {
    title: "Mathematical Framework Design",
    icon: FlaskConical,
    description:
      "Novel formal models and simulation frameworks tailored to a partner's specific problem, from first principles.",
  },
  {
    title: "Hardware-Aware Co-Design",
    icon: Cpu,
    description:
      "Designing algorithms alongside the hardware they run on, so gains come from the architecture itself.",
  },
  {
    title: "Energy Efficiency Engineering",
    icon: Leaf,
    description:
      "Cutting the energy footprint of compute-intensive systems at the algorithmic level.",
  },
  {
    title: "Simulation & Validation",
    icon: ShieldCheck,
    description:
      "Stress-testing every improvement against real-world behavior before a partner sees production code.",
  },
  {
    title: "Cross-Industry Application",
    icon: Globe,
    description:
      "The same methodology, applied wherever an inefficient algorithm sits at the core of a system.",
  },
];

const Technologies = () => (
  <>
    <Helmet>
      <title>Capabilities | Algorithmic Infrastructure Optimization | TechPivot</title>
      <meta name="description" content="Advanced mathematics that makes software run significantly faster on less hardware — turning the infrastructure you already own into a high-efficiency powerhouse." />
      <meta name="keywords" content="algorithmic acceleration, mathematical framework design, hardware co-design, energy efficiency engineering, simulation validation, cross-industry optimization" />
      <link rel="canonical" href="https://techpivot.in/technologies" />
      <meta property="og:title" content="Capabilities | Algorithmic Infrastructure Optimization | TechPivot" />
      <meta property="og:description" content="Advanced mathematics that makes software run significantly faster on less hardware — turning the infrastructure you already own into a high-efficiency powerhouse." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://techpivot.in/technologies" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Capabilities | Algorithmic Infrastructure Optimization | TechPivot" />
      <meta name="twitter:description" content="Advanced mathematics that makes software run significantly faster on less hardware — turning the infrastructure you already own into a high-efficiency powerhouse." />
    </Helmet>

    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-surface-dark relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 border border-surface-dark-foreground/10 rounded-full" />
        <div className="absolute bottom-10 left-10 w-32 h-32 border border-primary/20 rounded-full" />

        <div className="container px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">
              Capabilities
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-surface-dark-foreground tracking-tight mb-6">
              Algorithmic Infrastructure Optimization
            </h1>
            <p className="text-xl text-surface-dark-foreground/70">
              Unlocking Performance: Algorithmic Infrastructure Optimization — Advanced mathematics that makes software run significantly faster on less hardware, turning the infrastructure you already own into a high-efficiency powerhouse.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 lg:py-28">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="mb-12 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The work is always the same problem, applied to a different system.
            </h2>
            <p className="text-lg text-muted-foreground">
              Wherever an algorithm sits at the core of a product, a platform, or an industrial process, it can usually be made faster, cheaper, or more precise than its current implementation allows. Six capabilities, one underlying discipline.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, index) => (
              <AnimatedSection key={cap.title} animation="fadeUp" delay={index * 100}>
                <div className="group h-full">
                  <div className="relative h-full bg-[#f5f5f7] dark:bg-card rounded-2xl p-6 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <cap.icon className="w-6 h-6 text-primary" />
                        <h3 className="text-xl font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors">
                          {cap.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </>
);

export default Technologies;
