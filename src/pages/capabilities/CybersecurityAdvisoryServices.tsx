import { ShieldCheck, Search, FileCheck, RefreshCw, ClipboardCheck, Eye } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { AppleCardCompact } from "@/components/ui/apple-card";
import AnimatedSection from "@/components/AnimatedSection";
import heroBgCloudSecurity from "@/assets/hero-bg-cloud-security.jpg";

const advisoryServices = [
  { icon: Search, title: "Security Architecture Review", description: "Hands-on technical assessment of your systems, infrastructure, and data flows to identify real risk." },
  { icon: FileCheck, title: "Compliance & Audit Readiness", description: "Advisory support aligned to industry frameworks so you walk into audits prepared, not scrambling." },
  { icon: RefreshCw, title: "Cloud & Infrastructure Hardening", description: "Practical, prioritized hardening recommendations for cloud and on-premise environments alike." },
];

const ongoingSupport = [
  { icon: Eye, title: "Continuous Risk Monitoring", description: "Ongoing guidance as your infrastructure, team, and threat landscape evolve." },
  { icon: ClipboardCheck, title: "Business-Aligned Advisory", description: "Recommendations weighed against your actual risk tolerance and budget, not generic checklists." },
  { icon: ShieldCheck, title: "Incident Preparedness", description: "Practical playbooks and readiness reviews so your team knows what to do before an incident happens." },
];

const CybersecurityAdvisoryServices = () => {
  return (
    <ServicePageLayout
      title="Cybersecurity Advisory Services"
      subtitle="Capability 04"
      metaTitle="Cybersecurity Advisory Services | TechPivot Technologies"
      metaDescription="Security architecture review, compliance readiness, and infrastructure hardening advisory. Pragmatic, business-aligned cybersecurity guidance for organizations of every size."
      keywords="cybersecurity advisory services, security architecture review, compliance readiness consulting, cloud security hardening, risk assessment services, security posture assessment, cybersecurity consulting firm, infrastructure hardening"
      description="We help organizations assess, harden, and continuously improve their security posture — combining hands-on technical review with pragmatic, business-aligned advisory."
      icon={<ShieldCheck className="w-8 h-8 text-primary" />}
      backgroundImage={heroBgCloudSecurity}
    >
      {/* Advisory Services */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Assess, Harden, Improve
            </h2>
            <p className="text-lg text-muted-foreground">
              A practical advisory approach that starts with where your security posture actually
              stands today.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-6">
            {advisoryServices.map((item, index) => (
              <AnimatedSection key={item.title} animation="fadeUp" delay={index * 100}>
                <AppleCardCompact icon={item.icon} title={item.title} description={item.description} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Support */}
      <section className="py-20 lg:py-28 bg-secondary/30 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Security Is Not a One-Time Project
            </h2>
            <p className="text-lg text-muted-foreground">
              Ongoing advisory support that keeps pace with your infrastructure and the threat landscape.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-6">
            {ongoingSupport.map((item, index) => (
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
              Pragmatic Security, Not Checkbox Security
            </h2>
            <p className="text-lg text-muted-foreground">
              We advise on what actually reduces risk for your organization — grounded in technical
              review, not generic templates — so your security investment goes where it matters most.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default CybersecurityAdvisoryServices;
