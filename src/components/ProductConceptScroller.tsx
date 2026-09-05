import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, Lightbulb, Rocket, Code2, Cpu, Gauge, Layers, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: Lightbulb,
    eyebrow: "The Concept",
    title: "Algorithms Before Hardware",
    description:
      "Extract measurable performance from infrastructure you already own. Licensed optimization at the network control layer no app rewrite, no new servers.",
    to: "/products/concept",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: TrendingUp,
    eyebrow: "Outcome",
    title: "More From Existing CapEx",
    description:
      "Telecom, satellite and data-center owners unlock hidden capacity in current silicon — milliseconds and utilization that translate to revenue.",
    to: "/products/concept",
    accent: "from-accent/15 to-transparent",
  },
  {
    icon: Cpu,
    eyebrow: "Tech Stack",
    title: "Kernel · eBPF · QUIC",
    description:
      "Built on Linux kernel internals, eBPF, Netfilter, QUIC and modern congestion-control APIs. Benchmarked with iperf3, netperf, Prometheus and Grafana.",
    to: "/technologies",
    accent: "from-secondary/30 to-transparent",
  },
  {
    icon: Rocket,
    eyebrow: "The Product",
    title: " Racer™",
    description:
      "A family of congestion-control algorithms Racer, Racer Silver, Racer Gold that beat BBR on live paths with kernel-level integration and auto-fallback safety.",
    to: "/products/solution",
    accent: "from-accent/30 to-accent/5",
  },
  {
    icon: Code2,
    eyebrow: "Custom Dev",
    title: "Tuned For Your Stack",
    description:
      "Bespoke kernel, eBPF and transport-layer engineering benchmarked against Reno, CUBIC and BBR on your traffic, integrated below the application layer.",
    to: "/products/custom-dev",
    accent: "from-secondary/40 to-secondary/10",
  },
  {
    icon: Gauge,
    eyebrow: "Proof",
    title: "Benchmark Led Pilot",
    description:
      "Performance assessment\n→ controlled pilot → benchmark report\n→ annual license. Pay for measurable gains, not promises.",
    to: "/products/concept",
    accent: "from-primary/15 to-transparent",
  },
  {
    icon: Layers,
    eyebrow: "Integration",
    title: "Below The App Layer",
    description:
      "No application code changes, no API contract breaks, no compliance risk. Drop-in for Linux environments.",
    to: "/products/custom-dev",
    accent: "from-primary/10 to-transparent",
  },
];

const ProductConceptScroller = () => {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section className="relative pt-4 pb-12 bg-background">
      <div className="container px-6 lg:px-12">
        <div className="flex items-end justify-between mb-6 gap-4">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              {t("scroller.eyebrow")}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              {t("scroller.title")}
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl text-sm md:text-base">
              {t("scroller.subtitle")}
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              aria-label="Scroll left"
              onClick={() => scrollBy(-1)}
              className="w-10 h-10 rounded-full border border-border bg-card hover:bg-muted transition-colors flex items-center justify-center"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scrollBy(1)}
              className="w-10 h-10 rounded-full border border-border bg-primary text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 lg:-mx-12 lg:px-12 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="snap-start shrink-0 w-[300px] md:w-[340px]"
              >
                <Link
                  to={c.to}
                  className="group block h-full rounded-3xl border border-border bg-gradient-to-br from-primary/10 to-transparent p-6 hover:shadow-elevated hover:ring-2 hover:ring-primary/40 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-2xl bg-background/80 backdrop-blur flex items-center justify-center mb-5 border border-border">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                    {c.eyebrow}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 whitespace-pre-line">
                    {c.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-primary">
                    {t("scroller.learnMore")}
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

export default ProductConceptScroller;
