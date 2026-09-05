import { ShieldAlert, Radar, Lock, Database, Satellite, Users } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { AppleCardCompact } from "@/components/ui/apple-card";
import AnimatedSection from "@/components/AnimatedSection";

const missionCapabilities = [
  { icon: Radar, title: "Real-Time Situational Awareness", description: "Data fusion and decision-support systems that turn fragmented feeds into a single, actionable operational picture." },
  { icon: Lock, title: "Classified-Ready Architecture", description: "Hardened, air-gapped, and access-controlled systems engineered to defense and government security standards." },
  { icon: Database, title: "Secure Data Systems", description: "Encrypted, auditable data pipelines built to survive hostile network conditions and rigorous compliance review." },
];

const engagementModel = [
  { icon: Users, title: "Embedded Engineering Teams", description: "Our engineers work alongside agency and prime-contractor teams rather than at arm's length." },
  { icon: Satellite, title: "Mission-Critical Reliability", description: "Systems designed for continuous operation where downtime is not an acceptable outcome." },
  { icon: ShieldAlert, title: "Defense-Grade Software", description: "Rigorous testing, formal validation, and secure coding practices applied to every deliverable." },
];

const AdvancedDefenseIntelligence = () => {
  return (
    <ServicePageLayout
      title="Advanced Defense & Intelligence Solutions"
      subtitle="Capability 01"
      metaTitle="Advanced Defense & Intelligence Solutions | TechPivot Technologies"
      metaDescription="Mission-critical software, secure data systems, and algorithmic decision support for defense, government, and intelligence partners operating in high-security environments."
      keywords="defense technology solutions, intelligence software systems, secure government software, mission-critical systems, defense data fusion, classified system architecture, defense contractor engineering, situational awareness systems"
      description="We support defense, government, and intelligence partners with mission-critical software, secure data systems, and algorithmic decision support built for high-stakes, high-security environments."
      icon={<ShieldAlert className="w-8 h-8 text-primary" />}
      showGeometricBlocks={true}
    >
      {/* Mission Capabilities */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mission-Critical Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Purpose-built systems for environments where accuracy, security, and reliability
              are non-negotiable.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-6">
            {missionCapabilities.map((item, index) => (
              <AnimatedSection key={item.title} animation="fadeUp" delay={index * 100}>
                <AppleCardCompact icon={item.icon} title={item.title} description={item.description} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-20 lg:py-28 bg-secondary/30 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Work With Defense & Government Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              Close collaboration, security-first engineering, and a track record of delivering
              under strict operational constraints.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-6">
            {engagementModel.map((item, index) => (
              <AnimatedSection key={item.title} animation="fadeUp" delay={index * 100}>
                <AppleCardCompact icon={item.icon} title={item.title} description={item.description} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12 max-w-3xl mx-auto text-center">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Security and Reliability, By Design
            </h2>
            <p className="text-lg text-muted-foreground">
              Every engagement in this space starts from the assumption that failure is not an option.
              We build systems that are secure by default, validated before deployment, and maintained
              with the same discipline they were built with — so our partners can focus on the mission,
              not the infrastructure underneath it.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default AdvancedDefenseIntelligence;
