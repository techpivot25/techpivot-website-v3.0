import { useRef } from "react";
import { Link } from "react-router-dom";
import { Bot, Sparkles, Cloud, Shield, Boxes, Cpu, Lightbulb, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";



const services = [
  { 
    icon: Bot, 
    title: "Agentic AI", 
    subtitle: "Autonomous Intelligence",
    description: "Autonomous systems that perceive, reason, plan, and execute complex tasks.", 
    href: "/services/agentic-ai",
    color: "bg-primary"
  },
  { 
    icon: Sparkles, 
    title: "Generative AI", 
    subtitle: "Creative Solutions",
    description: "Advanced tools for content generation and design automation.", 
    href: "/services/generative-ai",
    color: "bg-accent"
  },
  { 
    icon: Cloud, 
    title: "SaaS Platform", 
    subtitle: "Cloud Native",
    description: "Secure, cloud-native applications with robust APIs.", 
    href: "/services/saas-platform",
    color: "bg-primary"
  },
  { 
    icon: Shield, 
    title: "Cloud & Security", 
    subtitle: "Enterprise Grade",
    description: "Scalable cloud architectures with enterprise security.", 
    href: "/services/cloud-security",
    color: "bg-accent"
  },
  { 
    icon: Boxes, 
    title: "Custom Software", 
    subtitle: "Tailored Solutions",
    description: "Tailored software solutions built around your unique business.", 
    href: "/services/custom-software",
    color: "bg-accent"
  },
  { 
    icon: Cpu, 
    title: "IoT Solutions", 
    subtitle: "Connected Devices",
    description: "Connected device ecosystems with intelligent automation.", 
    href: "/services/iot",
    color: "bg-primary"
  },
  { 
    icon: Lightbulb, 
    title: "Consultancy", 
    subtitle: "Strategic Guidance",
    description: "Strategic technology consulting for digital transformation.", 
    href: "/services/consultancy",
    color: "bg-accent"
  },
];

const Services = () => {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container px-6 lg:px-12">
        <div className="flex items-end justify-between mb-6 gap-4">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              {t("services.eyebrow")}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              {t("services.title")}
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl text-sm md:text-base">
              {t("services.subtitle")}
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button aria-label="Scroll left" onClick={() => scrollBy(-1)} className="w-10 h-10 rounded-full border border-border bg-card hover:bg-muted transition-colors flex items-center justify-center">
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
            <button aria-label="Scroll right" onClick={() => scrollBy(1)} className="w-10 h-10 rounded-full border border-border bg-primary text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 lg:-mx-12 lg:px-12 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service, i) => {
            const isPrimary = service.color === "bg-primary";
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="snap-start shrink-0 w-[300px] md:w-[340px]"
              >
                <Link
                  to={service.href}
                  className="group block h-full rounded-3xl border border-border bg-card p-6 hover:shadow-elevated hover:ring-2 hover:ring-primary/40 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${isPrimary ? "bg-primary/10" : "bg-accent/15"}`}>
                    <Icon className={`w-6 h-6 ${isPrimary ? "text-primary" : "text-accent-foreground"}`} strokeWidth={1.5} />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                    {service.subtitle}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-primary">
                    {t("services.learnMore")}
                    <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
