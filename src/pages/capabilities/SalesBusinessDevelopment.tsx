import { TrendingUp, Handshake, Target, Users2, LineChart, Megaphone } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { AppleCardCompact } from "@/components/ui/apple-card";
import AnimatedSection from "@/components/AnimatedSection";
import heroBgConsultancy from "@/assets/hero-bg-consultancy.jpg";

const goToMarket = [
  { icon: Target, title: "Go-to-Market Strategy", description: "Positioning and market entry planning for complex, technical offerings that don't sell themselves." },
  { icon: Handshake, title: "Partnership & Channel Development", description: "Building the relationships and channel structures that turn deep technology into distribution." },
  { icon: Users2, title: "Enterprise & Government Relationships", description: "Long-cycle relationship building for enterprise, government, and defense buying environments." },
];

const growthSupport = [
  { icon: LineChart, title: "Revenue-Focused Execution", description: "Sales motions built around measurable pipeline and revenue outcomes, not vanity metrics." },
  { icon: Megaphone, title: "Technical Positioning", description: "Messaging grounded in real technical differentiation, not generic marketing claims." },
  { icon: TrendingUp, title: "Scalable Growth Motion", description: "Repeatable go-to-market processes designed to scale as your team and pipeline grow." },
];

const SalesBusinessDevelopment = () => {
  return (
    <ServicePageLayout
      title="Sales & Business Development"
      subtitle="Capability 05"
      metaTitle="Sales & Business Development Services | TechPivot Technologies"
      metaDescription="Go-to-market strategy, enterprise relationship building, and partnership development for technical organizations turning deep capability into revenue."
      keywords="sales and business development services, go to market strategy, enterprise sales consulting, technology partnership development, channel development services, government sales strategy, revenue growth consulting, technical positioning strategy"
      description="Beyond engineering, we help partners take deep technology to market — building the relationships, positioning, and go-to-market motion needed to turn capability into revenue."
      icon={<TrendingUp className="w-8 h-8 text-primary" />}
      backgroundImage={heroBgConsultancy}
    >
      {/* Go-to-Market */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Turning Capability Into Revenue
            </h2>
            <p className="text-lg text-muted-foreground">
              Deep technology needs a deliberate go-to-market motion. We help build it.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-6">
            {goToMarket.map((item, index) => (
              <AnimatedSection key={item.title} animation="fadeUp" delay={index * 100}>
                <AppleCardCompact icon={item.icon} title={item.title} description={item.description} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Support */}
      <section className="py-20 lg:py-28 bg-secondary/30 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Sustainable Growth
            </h2>
            <p className="text-lg text-muted-foreground">
              Sales and business development support that scales alongside your technical roadmap.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-6">
            {growthSupport.map((item, index) => (
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
              Technical Depth, Commercial Execution
            </h2>
            <p className="text-lg text-muted-foreground">
              Great technology doesn't sell itself. We pair technical credibility with disciplined
              sales execution — so the value you've engineered actually reaches the customers who need it.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default SalesBusinessDevelopment;
