import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Cpu, GitBranch, SlidersHorizontal, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// ------- Animated counter hook -------
const useCounter = (target: number, duration = 1800, start = false) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return value;
};

// ------- Pillar data -------
const pillars = [
  {
    icon: SlidersHorizontal,
    eyebrow: "Fine-Tuning",
    title: "Model Fine-Tuning & Alignment",
    description:
      "Specialized fine-tuning on domain-specific datasets — Finance, Healthcare, Legal — to ensure accuracy and reduce hallucinations.",
    accent: "text-[#00b8d9]",
    iconBg: "bg-[#00b8d9]/10",
    href: "/services/ai-models",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Security",
    title: "Enterprise-Grade Security",
    description:
      "Implementation of private VPCs, data encryption at rest and in transit, and RBAC (Role-Based Access Control) to ensure IP protection.",
    accent: "text-[#00b8d9]",
    iconBg: "bg-[#00b8d9]/10",
    href: "/services/cloud-security",
  },
  {
    icon: Cpu,
    eyebrow: "Performance",
    title: "GPU-Optimized Performance",
    description:
      "Utilizing vLLM, TensorRT, and quantization techniques to reduce latency by up to 70% and lower inference costs.",
    accent: "text-[#00b8d9]",
    iconBg: "bg-[#00b8d9]/10",
    href: "/services/infrastructure",
  },
  {
    icon: GitBranch,
    eyebrow: "Deployment",
    title: "Vendor-Agnostic Deployment",
    description:
      "Deploy on-premise, in your cloud (AWS/Azure/GCP), or in a hybrid environment — giving you full sovereignty over your data.",
    accent: "text-[#00b8d9]",
    iconBg: "bg-[#00b8d9]/10",
    href: "/services/cloud-security",
  },
];

// ------- Trust stat data -------
const trustStats = [
  {
    prefix: "<",
    value: 100,
    suffix: "ms",
    display: null as string | null,
    label: "Average Inference Latency",
  },
  {
    prefix: "",
    value: 0,
    suffix: "",
    display: "Zero" as string | null,
    label: "Data Retained — nothing leaves your VPC",
  },
  {
    prefix: "",
    value: 100,
    suffix: "%",
    display: null as string | null,
    label: "Open-Source Model Flexibility",
  },
];

// ------- Stat card -------
const StatCard = ({
  stat,
  startCount,
  index,
}: {
  stat: (typeof trustStats)[0];
  startCount: boolean;
  index: number;
}) => {
  const counted = useCounter(stat.value, 1600, startCount);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="flex flex-col items-center text-center px-6 py-10 rounded-2xl border border-white/[0.08] bg-[#0d1f2d]/60 backdrop-blur-sm"
    >
      <p className="text-5xl md:text-6xl font-bold text-white tabular-nums tracking-tight">
        {stat.display ? (
          stat.display
        ) : (
          <>
            {stat.prefix}
            {startCount ? counted : 0}
            {stat.suffix}
          </>
        )}
      </p>
      <p className="mt-4 text-sm text-slate-400 max-w-[200px] leading-snug">
        {stat.label}
      </p>
    </motion.div>
  );
};

// ------- Main section -------
const EnterpriseSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-[#060f17] py-24 md:py-32 overflow-hidden">

      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#00b8d9]/8 blur-[140px]" />
      </div>

      <div className="container px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight"
          >
            Where Open-Source Agility Meets{" "}
            <span className="text-[#00b8d9]">Enterprise Fortitude.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-6 text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl"
          >
            Why choose a generic SaaS when you can own a tailor-made AI
            ecosystem? We don't just deploy models — we engineer them to fit
            your data, your security protocols, and your business logic.
          </motion.p>
        </div>

        {/* Row 1 — 4 pillar cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={pillar.href}
                  className="group flex flex-col h-full rounded-2xl border border-white/[0.08] bg-[#0d1f2d]/80 p-6 hover:border-[#00b8d9]/40 hover:bg-[#0d1f2d] transition-all duration-300"
                >
                  {/* Icon box */}
                  <div className={`w-11 h-11 rounded-xl ${pillar.iconBg} border border-white/[0.08] flex items-center justify-center mb-5`}>
                    <Icon className={`w-5 h-5 ${pillar.accent}`} strokeWidth={1.8} />
                  </div>

                  {/* Eyebrow */}
                  <p className={`text-xs font-semibold uppercase tracking-widest ${pillar.accent} mb-2`}>
                    {pillar.eyebrow}
                  </p>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Body */}
                  <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-5">
                    {pillar.description}
                  </p>

                  {/* Learn more */}
                  <span className={`inline-flex items-center text-sm font-semibold ${pillar.accent} mt-auto`}>
                    Learn more
                    <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Row 2 — 3 trust stat counters */}
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {trustStats.map((stat, i) => (
            <StatCard
              key={stat.label}
              stat={stat}
              startCount={statsInView}
              index={i}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default EnterpriseSection;
