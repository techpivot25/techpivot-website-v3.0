import { Helmet } from "react-helmet-async";
import { useState, useMemo } from "react";
import { Shield, Lock, TrendingUp, Database, Zap, BarChart3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import { AppleCardCompact, AppleCardFeature } from "@/components/ui/apple-card";
import AnimatedSection from "@/components/AnimatedSection";

interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  impact: string;
  industry: string;
  year: number;
}

const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "Financial Services LLM Deployment",
    description: "Secure custom LLM for regulatory compliance and risk analysis",
    category: "Enterprise AI Security",
    tags: ["LLM Security", "Data Privacy", "Compliance"],
    metrics: [
      { label: "Processing Time", value: "60% faster" },
      { label: "Data Isolation", value: "100% private" },
      { label: "Compliance", value: "SOC 2 Type II" },
    ],
    challenge:
      "Financial institution needed custom LLM for sensitive transaction analysis without exposing data to third-party APIs",
    solution:
      "Deployed open-source LLM on private infrastructure with fine-tuning on proprietary regulatory datasets and end-to-end encryption",
    impact:
      "Enabled real-time fraud detection with zero external data leakage while maintaining full regulatory audit trails",
    industry: "Finance",
    year: 2024,
  },
  {
    id: "2",
    title: "Healthcare Data Privacy Framework",
    description: "HIPAA-compliant custom AI model for patient data analysis",
    category: "Privacy-First AI",
    tags: ["HIPAA Compliance", "Healthcare AI", "Data Governance"],
    metrics: [
      { label: "HIPAA Compliance", value: "100%" },
      { label: "Model Accuracy", value: "94.2%" },
      { label: "Data Incidents", value: "Zero" },
    ],
    challenge:
      "Healthcare provider required AI model for clinical decision support without exposing patient PII to cloud services",
    solution:
      "Built custom LLM with de-identification pipeline, on-premises deployment, and encrypted data handling at rest and in transit",
    impact:
      "Improved clinical outcomes by 23% while achieving zero data compliance violations across 18-month period",
    industry: "Healthcare",
    year: 2024,
  },
  {
    id: "3",
    title: "Enterprise Search & Retrieval",
    description: "Private vector database with semantic search for internal knowledge",
    category: "Custom Enterprise Solutions",
    tags: ["RAG", "Vector Database", "Knowledge Management"],
    metrics: [
      { label: "Search Relevance", value: "96.7%" },
      { label: "Query Latency", value: "<200ms" },
      { label: "Data Privacy", value: "100% on-prem" },
    ],
    challenge:
      "Global corporation needed semantic search over proprietary documents without exposing to third-party LLM providers",
    solution:
      "Deployed open-source embedding model + vector database with custom fine-tuning on domain terminology and RAG architecture",
    impact:
      "Reduced knowledge discovery time by 70% while maintaining complete data sovereignty",
    industry: "Enterprise",
    year: 2023,
  },
  {
    id: "4",
    title: "Regulatory Compliance AI",
    description: "Custom LLM for real-time compliance monitoring and reporting",
    category: "Compliance & Governance",
    tags: ["Regulatory AI", "Compliance Monitoring", "Audit Trail"],
    metrics: [
      { label: "Violations Detected", value: "98%" },
      { label: "False Positives", value: "<2%" },
      { label: "Audit Coverage", value: "100%" },
    ],
    challenge:
      "Insurance company needed real-time compliance checking for policy documents without reliance on external APIs",
    solution:
      "Trained open-source LLM on regulatory frameworks with automated audit logging and encrypted storage of all decisions",
    impact:
      "Prevented $2.3M in potential fines while reducing compliance review time by 65%",
    industry: "Insurance",
    year: 2023,
  },
  {
    id: "5",
    title: "Secure Multi-Tenant LLM Platform",
    description: "Isolated custom LLM environments for SaaS enterprise clients",
    category: "Enterprise SaaS",
    tags: ["Multi-Tenant", "Data Isolation", "Custom Models"],
    metrics: [
      { label: "Tenant Isolation", value: "Air-gapped" },
      { label: "Uptime", value: "99.99%" },
      { label: "Customers", value: "42+" },
    ],
    challenge:
      "SaaS provider needed to offer custom LLM capabilities without mixing customer data or exposing proprietary models",
    solution:
      "Built containerized deployment platform with per-tenant LLM instances, encrypted data boundaries, and granular access controls",
    impact:
      "Enabled new $500K+ revenue stream with zero cross-tenant security incidents",
    industry: "SaaS",
    year: 2023,
  },
  {
    id: "6",
    title: "Custom AI Agent for Legal Research",
    description: "Proprietary AI model for case law analysis and legal discovery",
    category: "Industry-Specific AI",
    tags: ["Legal AI", "Custom Training", "Data Security"],
    metrics: [
      { label: "Research Saved", value: "40 hrs/mo" },
      { label: "Case Relevance", value: "99.1%" },
      { label: "Model Ownership", value: "100%" },
    ],
    challenge:
      "Law firm needed AI for confidential case analysis without exposing sensitive legal data to commercial LLM services",
    solution:
      "Fine-tuned open-source LLM on firm's case database with on-premises deployment and encrypted client data handling",
    impact:
      "Accelerated case preparation and enabled premium legal AI service offering to clients",
    industry: "Legal",
    year: 2024,
  },
];

const successPatterns = [
  {
    icon: Shield,
    title: "Data Security First",
    description:
      "Every deployment isolates proprietary data. Zero exposure to third-party APIs. End-to-end encryption by default.",
  },
  {
    icon: Lock,
    title: "Compliance Built-In",
    description:
      "Custom models trained on regulatory frameworks. Full audit trails. Documented governance for every decision.",
  },
  {
    icon: Database,
    title: "Model Ownership",
    description:
      "Your data. Your model. No vendor lock-in. Open-source foundation with proprietary fine-tuning and deployment rights.",
  },
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description:
      "Performance gains quantified before deployment. Latency, throughput, accuracy — all benchmarked against baselines.",
  },
  {
    icon: Zap,
    title: "Zero Downtime Integration",
    description:
      "Deployment below the application layer. No API rewrites. No compliance nightmares. Drop-in replacement.",
  },
  {
    icon: BarChart3,
    title: "Enterprise Grade",
    description:
      "SOC 2, HIPAA, PCI-DSS ready. Multi-tenant isolation. Containerized deployment. Built for Fortune 500 scale.",
  },
];

type CategoryType =
  | "All"
  | "Enterprise AI Security"
  | "Privacy-First AI"
  | "Custom Enterprise Solutions"
  | "Compliance & Governance"
  | "Enterprise SaaS"
  | "Industry-Specific AI";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(new Set(portfolioProjects.map((p) => p.category))),
    ],
    []
  );

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? portfolioProjects
        : portfolioProjects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <Helmet>
        <title>Portfolio | TechPivot Technologies</title>
        <meta
          name="description"
          content="Explore TechPivot's enterprise LLM security solutions. Custom AI deployments for finance, healthcare, compliance, and more. Private models. Your data. Secure."
        />
        <meta
          name="keywords"
          content="enterprise AI projects, LLM security case studies, custom model deployment, data privacy solutions, compliance AI, secure LLM implementation"
        />
        <link rel="canonical" href="https://techpivot.in/portfolio" />
        <meta property="og:title" content="Portfolio | TechPivot Technologies" />
        <meta
          property="og:description"
          content="Enterprise LLM security solutions and custom AI deployments"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techpivot.in/portfolio" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="py-20 lg:py-28 animate-section">
            <div className="container px-6 lg:px-12">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Enterprise LLM Security in Action
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-muted-foreground mb-8">
                  Custom Models. Your Data. Secure Deployment.
                </p>
                <div className="text-lg text-muted-foreground leading-relaxed text-left space-y-5">
                  <p>
                    TechPivot transforms open-source LLMs into secure, custom
                    enterprise solutions. Our approach is{" "}
                    <strong>"security-first deployment"</strong> — we isolate
                    your data, maintain model ownership, ensure compliance, and
                    deliver measurable business impact without vendor lock-in.
                  </p>
                  <p>
                    Explore how industry leaders in finance, healthcare,
                    insurance, and SaaS have deployed custom AI models that
                    protect proprietary data while accelerating innovation.
                  </p>
                </div>

                {/* The Promise */}
                <div className="mt-10 p-8 rounded-2xl bg-primary/5 border border-primary/20 text-left">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    The Promise
                  </h3>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-0.5">✦</span>
                      <span>
                        <strong className="text-foreground">
                          Zero Vendor Lock-In:
                        </strong>{" "}
                        Open-source foundation with proprietary fine-tuning. You
                        own your model.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-0.5">✦</span>
                      <span>
                        <strong className="text-foreground">
                          Zero Data Exposure:
                        </strong>{" "}
                        On-premises or air-gapped deployment. Your data never
                        leaves your infrastructure.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-0.5">✦</span>
                      <span>
                        <strong className="text-foreground">
                          Zero Compliance Risk:
                        </strong>{" "}
                        SOC 2, HIPAA, PCI-DSS ready. Full audit trails and
                        regulatory documentation.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Success Patterns */}
          <section className="py-20 lg:py-28 bg-muted animate-section">
            <div className="container px-6 lg:px-12">
              <AnimatedSection
                animation="fadeUp"
                className="text-center mb-16 max-w-3xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  What Success Looks Like
                </h2>
                <p className="text-lg text-muted-foreground">
                  Six patterns that define every successful enterprise LLM
                  deployment we've delivered.
                </p>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {successPatterns.map((pattern, i) => (
                  <AnimatedSection
                    key={pattern.title}
                    animation="fadeUp"
                    delay={i * 100}
                  >
                    <AppleCardCompact
                      icon={pattern.icon}
                      title={pattern.title}
                      description={pattern.description}
                    />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio Filter & Grid */}
          <section className="py-20 lg:py-28 animate-section">
            <div className="container px-6 lg:px-12">
              <AnimatedSection
                animation="fadeUp"
                className="text-center mb-16 max-w-3xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Case Studies
                </h2>
                <p className="text-lg text-muted-foreground">
                  Filter by category to explore deployments across industries
                  and use cases.
                </p>
              </AnimatedSection>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {(categories as CategoryType[]).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80 border border-border"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Portfolio Grid */}
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {filteredProjects.map((project, i) => (
                  <AnimatedSection
                    key={project.id}
                    animation="fadeUp"
                    delay={i * 100}
                  >
                    <div className="p-6 rounded-2xl bg-secondary/10 border border-border hover:border-primary/50 transition-all duration-300">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="text-xs font-bold text-primary uppercase tracking-wide">
                            {project.industry}
                          </span>
                          <h3 className="text-2xl font-bold text-foreground mt-2">
                            {project.title}
                          </h3>
                        </div>
                        <span className="text-sm font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full whitespace-nowrap">
                          {project.year}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-6">
                        {project.description}
                      </p>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-border mb-6">
                        {project.metrics.map((metric) => (
                          <div key={metric.label} className="text-center">
                            <div className="text-lg font-bold text-primary">
                              {metric.value}
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Challenge & Impact */}
                      <div className="space-y-4 mb-6">
                        <div>
                          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2">
                            Challenge
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {project.challenge}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2">
                            Impact
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {project.impact}
                          </p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <button className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                        View Full Case Study
                      </button>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Ideal Customers */}
          <section className="py-20 lg:py-28 bg-secondary/15 animate-section">
            <div className="container px-6 lg:px-12 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ideal Customers
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Enterprise organizations in finance, healthcare, insurance,
                legal, and SaaS with heavy infrastructure investments, fixed
                CapEx cycles, and strict data governance requirements. Where
                data privacy, model ownership, and regulatory compliance are
                non-negotiable.
              </p>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="py-20 lg:py-28 animate-section">
            <div className="container px-6 lg:px-12">
              <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Transform Your Data into a Competitive Advantage?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Let's discuss how a custom, secure LLM can unlock the full
                  value of your proprietary data.
                </p>
                <button className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors">
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
