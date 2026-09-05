import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Users, Award, Shield } from "lucide-react";
import { AppleCardCompact } from "@/components/ui/apple-card";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly pushing boundaries and exploring new technological frontiers"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with clients to understand and exceed their expectations"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering the highest quality solutions with attention to detail"
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Building trust through transparent and ethical business practices"
  }
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About TechPivot | AI & Software Development Company</title>
        <meta name="description" content="TechPivot Technologies builds AI-powered software and platforms from autonomous agents to full-stack products — engineered with algorithmic precision for enterprises across the US, India, Middle East, and UK." />
        <meta name="keywords" content="about TechPivot, AI software company, algorithmic engineering, agentic AI development, custom software company India, global AI services, enterprise software US India UK Middle East" />
        <link rel="canonical" href="https://techpivot.in/about" />
        <meta property="og:title" content="About TechPivot | AI Engineering with Algorithmic Precision" />
        <meta property="og:description" content="TechPivot Technologies builds AI-powered software and platforms engineered with algorithmic precision for enterprises across the US, India, Middle East, and UK." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techpivot.in/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About TechPivot | AI Engineering with Algorithmic Precision" />
        <meta name="twitter:description" content="TechPivot Technologies builds AI-powered software and platforms engineered with algorithmic precision for enterprises across the US, India, Middle East, and UK." />
      </Helmet>
      
      <Header />
      
      <main className="bg-slate-950 text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-surface-dark text-surface-dark-foreground relative overflow-hidden">
          {/* Geometric decorations */}
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
                ABOUT US
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                AI Engineering with Algorithmic Precision
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-surface-dark-foreground/70"
              >
                We are a collective of AI researchers, distributed systems engineers, and cybersecurity veterans. Headquartered globally, we operate as an extension of your engineering team, removing the complexity of AI adoption.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 lg:py-28 bg-slate-950">
          <div className="container px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Vision */}
              <AnimatedSection animation="fadeUp">
                <motion.div 
                  className="h-full p-8 bg-slate-900 rounded-2xl transition-all duration-500"
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)"
                  }}
                >
                  <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">
                    Our Vision
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white">
                    Global Leader in AI-Powered Engineering
                  </h2>
                  <p className="text-slate-400 leading-relaxed">
                    To be the global partner of choice for enterprise AI, recognized for engineering software with mathematical rigor and a security-first mindset delivering faster, cheaper, and more precise applications that transform bleeding-edge research into reliable, revenue-generating technology.
                  </p>
                </motion.div>
              </AnimatedSection>

              {/* Mission */}
              <AnimatedSection animation="fadeUp" delay={100}>
                <motion.div 
                  className="h-full p-8 bg-slate-900 rounded-2xl transition-all duration-500"
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)"
                  }}
                >
                  <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">
                    Our Mission
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white">
                    Engineering Software That Actually Performs
                  </h2>
                  <p className="text-slate-400 leading-relaxed">
                    To deliver sovereign, secure, and sustainable AI platforms that solve real business problems with algorithmic precision breaking enterprise dependence on closed-source black boxes and driving measurable, long-term outcomes.
                  </p>
                </motion.div>
              </AnimatedSection>
            </div>

            {/* Why We're Different */}
            <div className="mt-12 p-8 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">Why TechPivot is Different</h3>
              <p className="text-slate-400 leading-relaxed">
                Unlike typical software agencies, our engineering is backed by open-source algorithmic optimization frameworks — applied and tuned by our specialists to your specific infrastructure. This means our products don't just work — they perform measurably better, scale at lower cost, and ship faster than what conventional development delivers.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">AI-First</div>
                  <div className="text-sm text-slate-400">Every product built with AI at the core, not bolted on after</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">Algorithmic</div>
                  <div className="text-sm text-slate-400">Mathematical precision applied to infrastructure and performance</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">Global</div>
                  <div className="text-sm text-slate-400">Delivering for enterprises across US, India, Middle East & UK</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 lg:py-28 bg-slate-900/50">
          <div className="container px-6 lg:px-12">
            <AnimatedSection animation="fadeUp" className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Our Core Values.
              </h2>
              <p className="text-xl text-slate-400 mt-2">
                The principles that guide everything we do.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <AnimatedSection key={value.title} animation="fadeUp" delay={index * 100}>
                  <AppleCardCompact
                    icon={value.icon}
                    title={value.title}
                    description={value.description}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 lg:py-28 bg-slate-950">
          <div className="container px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fadeUp">
                <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-white">
                  From Vision to Reality
                </h2>
                
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                  <p>
                    Founded with a vision to bridge world-class AI engineering with algorithmic infrastructure expertise, TechPivot Technologies has grown into a trusted global partner for enterprises seeking measurable technology outcomes. Our journey began with a simple conviction: that software should be engineered with mathematical precision — not just built and shipped.
                  </p>
                  <p>
                    Today, we stand at the forefront of technological advancement, specializing in Artificial Intelligence, Blockchain solutions, and Metaverse development. Our team of expert developers, designers, and strategists work tirelessly to transform complex challenges into elegant solutions.
                  </p>
                  <p>
                    We have successfully delivered projects across various industries, helping organizations streamline operations, enhance customer experiences, and unlock new revenue streams. Our commitment to innovation and excellence has made us a preferred technology partner for businesses worldwide.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-surface-dark text-surface-dark-foreground">
          <div className="container px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection animation="fadeUp">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                  Ready to Work Together?
                </h2>
                <p className="text-xl text-surface-dark-foreground/70 mb-8">
                  Let's discuss how we can help transform your business with our cutting-edge solutions.
                </p>
                <Button 
                  size="lg" 
                  className="px-8 py-6 text-base font-semibold group"
                  asChild
                >
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default About;
