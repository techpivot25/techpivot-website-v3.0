import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Cpu,
  FlaskConical,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

interface CapabilitySection {
  id: string;
  href: string;
  eyebrow: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  points: string[];
}

const capabilitySections: CapabilitySection[] = [
  {
    id: "algorithmic-infrastructure-optimization",
    href: "/capabilities/algorithmic-infrastructure-optimization",
    eyebrow: "Capability 01",
    title: "Algorithmic Infrastructure Optimization",
    icon: Cpu,
    summary:
      "Advanced mathematics that makes software run significantly faster on less hardware — turning the infrastructure our partners already own into a high-efficiency powerhouse, without rewriting the application layer.",
    points: [
      "Kernel- and transport-layer optimization for measurable throughput gains",
      "Algorithmic acceleration validated against industry-standard baselines",
      "Energy-efficiency engineering to reduce compute footprint and cost",
      "Zero disruption to existing application code during rollout",
    ],
  },
  {
    id: "custom-algorithm-development",
    href: "/capabilities/custom-algorithm-development",
    eyebrow: "Capability 03",
    title: "Custom Algorithm Development",
    icon: FlaskConical,
    summary:
      "When an off-the-shelf approach won't cut it, we design novel algorithms and mathematical models from first principles — built around a partner's exact constraints, data, and performance targets.",
    points: [
      "Bespoke mathematical modeling for domain-specific problems",
      "Simulation and formal validation before a single line reaches production",
      "Hardware-aware design so gains come from the architecture itself",
      "Iterative development in close partnership with in-house engineering teams",
    ],
  },
  {
    id: "cybersecurity-advisory-services",
    href: "/capabilities/cybersecurity-advisory-services",
    eyebrow: "Capability 04",
    title: "Cybersecurity Advisory Services",
    icon: ShieldCheck,
    summary:
      "We help organizations assess, harden, and continuously improve their security posture — combining hands-on technical review with pragmatic, business-aligned advisory.",
    points: [
      "Security architecture review and risk assessment",
      "Cloud and infrastructure hardening aligned to industry frameworks",
      "Advisory support for compliance and audit readiness",
      "Ongoing guidance as threats and infrastructure evolve",
    ],
  },
  {
    id: "sales-business-development",
    href: "/capabilities/sales-business-development",
    eyebrow: "Capability 05",
    title: "Sales & Business Development",
    icon: TrendingUp,
    summary:
      "Beyond engineering, we help partners take deep technology to market — building the relationships, positioning, and go-to-market motion needed to turn capability into revenue.",
    points: [
      "Enterprise and government relationship building",
      "Go-to-market strategy for complex, technical offerings",
      "Partnership and channel development",
      "Customer-centric positioning grounded in real technical differentiation",
    ],
  },
];

const CapabilityBlock = ({ section, index }: { section: CapabilitySection; index: number }) => {
  const isEven = index % 2 === 0;
  return (
    <section
      id={section.id}
      className={`py-20 lg:py-28 scroll-mt-24 ${isEven ? "" : "bg-[#f5f5f7] dark:bg-card"}`}
    >
      <div className="container px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <AnimatedSection animation="fadeUp" className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <section.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                {section.eyebrow}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4">
              {section.title}
            </h2>
            <Link
              to={section.href}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
            >
              Learn more <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={100} className="lg:col-span-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {section.summary}
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {section.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm text-foreground bg-background/60 dark:bg-background/30 rounded-xl p-4 border border-border"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

const Capabilities = () => {
  return (
    <>
      <Helmet>
        <title>Capabilities | TechPivot Technologies</title>
        <meta
          name="description"
          content="Explore TechPivot's core capabilities: Advanced Defense & Intelligence Solutions, Algorithmic Infrastructure Optimization, Custom Algorithm Development, Cybersecurity Advisory Services, and Sales & Business Development."
        />
        <meta
          name="keywords"
          content="defense intelligence solutions, algorithmic infrastructure optimization, custom algorithm development, cybersecurity advisory, sales business development, TechPivot capabilities"
        />
        <link rel="canonical" href="https://techpivot.in/capabilities" />
        <meta property="og:title" content="Capabilities | TechPivot Technologies" />
        <meta
          property="og:description"
          content="Explore TechPivot's core capabilities: Advanced Defense & Intelligence Solutions, Algorithmic Infrastructure Optimization, Custom Algorithm Development, Cybersecurity Advisory Services, and Sales & Business Development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techpivot.in/capabilities" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Capabilities | TechPivot Technologies" />
        <meta
          name="twitter:description"
          content="Explore TechPivot's core capabilities: Advanced Defense & Intelligence Solutions, Algorithmic Infrastructure Optimization, Custom Algorithm Development, Cybersecurity Advisory Services, and Sales & Business Development."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-surface-dark text-surface-dark-foreground relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 border border-surface-dark-foreground/10 rounded-full" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-primary/20 rounded-full" />
          <div className="container px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block"
              >
                CAPABILITIES
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                Deep Technical Capabilities
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-surface-dark-foreground/70 mb-4"
              >
                These are the technical disciplines that make TechPivot's engineering measurably different from a conventional software agency.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-base text-surface-dark-foreground/50"
              >
                Our algorithmic methods are built on open-source mathematical frameworks — the differentiation is in how deeply we apply, tune, and optimize them for each client's specific infrastructure and problem space.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button size="lg" variant="primary" className="rounded-full px-8 py-6 text-base font-semibold group" asChild>
                  <Link to="/contact">
                    Talk to Our Team
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Capability sections */}
        {capabilitySections.map((section, index) => (
          <CapabilityBlock key={section.id} section={section} index={index} />
        ))}

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-surface-dark text-surface-dark-foreground text-center">
          <div className="container px-6 lg:px-12">
            <AnimatedSection animation="fadeUp">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Have a capability gap we should talk about?
              </h2>
              <p className="text-lg text-surface-dark-foreground/70 mb-8 max-w-2xl mx-auto">
                Tell us about the problem — we'll tell you which of these capabilities fits, and what it would take to solve it.
              </p>
              <Button size="lg" variant="primary" className="rounded-full px-8 py-6 text-base font-semibold group" asChild>
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Capabilities;
