import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroBg from "@/assets/hero-bg.jpg";

// Animated text with word-by-word reveal
const AnimatedHeadingLine = ({
  children,
  delay = 0,
  className = "",
}: {
  children: string;
  delay?: number;
  className?: string;
}) => {
  const words = children.split(" ");
  return (
    <motion.span className={`block whitespace-nowrap ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden mr-[0.2em]">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: delay + wordIndex * 0.1, ease: [0.33, 1, 0.68, 1] }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

// Animated bar chart bar
const Bar = ({ height, delay, color }: { height: number; delay: number; color: string }) => (
  <motion.div
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1 }}
    transition={{ duration: 0.8, delay, ease: "easeOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
    style={{ height, backgroundColor: color, transformOrigin: "bottom" }}
    className="w-5 rounded-t-sm"
  />
);

// Floating node dot
const Node = ({ x, y, size, delay }: { x: string; y: string; size: number; delay: number }) => (
  <motion.div
    style={{ left: x, top: y, width: size, height: size }}
    className="absolute rounded-full bg-blue-400/80"
    animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
    transition={{ duration: 2.5, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

// Animated line (SVG path)
const PulseLine = ({ d, delay }: { d: string; delay: number }) => (
  <motion.path
    d={d}
    stroke="rgba(96,165,250,0.5)"
    strokeWidth="1.5"
    fill="none"
    strokeDasharray="6 4"
    animate={{ strokeDashoffset: [0, -40] }}
    transition={{ duration: 1.5, delay, repeat: Infinity, ease: "linear" }}
  />
);

// The animated hero visual replacing the image
const HeroAnimation = () => (
  <div className="relative w-full h-[300px] md:h-[400px] lg:h-[480px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 shadow-elevated select-none">

    {/* Grid background */}
    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(96,165,250,0.5)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>

    {/* Glowing orb center-left */}
    <motion.div
      className="absolute w-48 h-48 rounded-full"
      style={{ left: "10%", top: "20%", background: "radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)" }}
      animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute w-40 h-40 rounded-full"
      style={{ right: "8%", bottom: "10%", background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)" }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* SVG network lines */}
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <PulseLine d="M 80 120 Q 180 80 260 160" delay={0} />
      <PulseLine d="M 260 160 Q 340 220 420 140" delay={0.4} />
      <PulseLine d="M 420 140 Q 500 80 560 180" delay={0.8} />
      <PulseLine d="M 140 280 Q 240 240 320 300" delay={0.2} />
      <PulseLine d="M 320 300 Q 420 340 500 260" delay={0.6} />
    </svg>

    {/* Network nodes */}
    <Node x="72px" y="112px" size={10} delay={0} />
    <Node x="252px" y="152px" size={8} delay={0.5} />
    <Node x="412px" y="132px" size={12} delay={1} />
    <Node x="552px" y="172px" size={8} delay={1.5} />
    <Node x="132px" y="272px" size={9} delay={0.3} />
    <Node x="312px" y="292px" size={11} delay={0.8} />
    <Node x="492px" y="252px" size={8} delay={1.2} />

    {/* Dashboard card 1 — Bar chart */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 w-44"
    >
      <p className="text-blue-200 text-[10px] font-semibold uppercase tracking-widest mb-3">Performance</p>
      <div className="flex items-end gap-1.5 h-16">
        <Bar height={32} delay={0.6} color="rgba(96,165,250,0.9)" />
        <Bar height={48} delay={0.7} color="rgba(96,165,250,0.9)" />
        <Bar height={40} delay={0.8} color="rgba(96,165,250,0.9)" />
        <Bar height={56} delay={0.9} color="rgba(139,92,246,0.9)" />
        <Bar height={36} delay={1.0} color="rgba(96,165,250,0.9)" />
        <Bar height={60} delay={1.1} color="rgba(139,92,246,0.9)" />
      </div>
      <motion.p
        className="text-white text-xs font-bold mt-2"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        +34% <span className="text-blue-300 font-normal">this month</span>
      </motion.p>
    </motion.div>

    {/* Dashboard card 2 — Donut ring */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 w-36"
    >
      <p className="text-blue-200 text-[10px] font-semibold uppercase tracking-widest mb-3">Efficiency</p>
      <div className="flex items-center justify-center">
        <svg width="72" height="72" viewBox="0 0 72 72">
          <circle cx="36" cy="36" r="28" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
          <motion.circle
            cx="36" cy="36" r="28"
            fill="none"
            stroke="rgba(96,165,250,0.9)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="175.9"
            initial={{ strokeDashoffset: 175.9 }}
            animate={{ strokeDashoffset: 35 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
            transform="rotate(-90 36 36)"
          />
          <text x="36" y="40" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">82%</text>
        </svg>
      </div>
    </motion.div>

    {/* Dashboard card 3 — Live line chart */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 w-52"
    >
      <p className="text-blue-200 text-[10px] font-semibold uppercase tracking-widest mb-2">Throughput</p>
      <svg width="100%" height="50" viewBox="0 0 180 50">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(96,165,250,0.4)" />
            <stop offset="100%" stopColor="rgba(96,165,250,0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 0 40 C 20 35, 40 20, 60 25 S 100 10, 120 15 S 160 5, 180 8"
          fill="none"
          stroke="rgba(96,165,250,0.9)"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
        />
        <motion.path
          d="M 0 40 C 20 35, 40 20, 60 25 S 100 10, 120 15 S 160 5, 180 8 L 180 50 L 0 50 Z"
          fill="url(#lineGrad)"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </svg>
      <div className="flex items-center gap-2 mt-1">
        <motion.div
          className="w-2 h-2 rounded-full bg-green-400"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <span className="text-green-300 text-[10px] font-medium">Live · 2.4 GB/s</span>
      </div>
    </motion.div>

    {/* Dashboard card 4 — KPI pills */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
      className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 w-40 space-y-2"
    >
      <p className="text-blue-200 text-[10px] font-semibold uppercase tracking-widest mb-1">AI Metrics</p>
      {[
        { label: "Accuracy", val: "99.2%", color: "bg-blue-400" },
        { label: "Latency", val: "12ms", color: "bg-purple-400" },
        { label: "Uptime", val: "99.9%", color: "bg-green-400" },
      ].map(({ label, val, color }, i) => (
        <motion.div
          key={label}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2 + i * 0.15 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-1.5">
            <div className={`w-2 h-2 rounded-full ${color}`} />
            <span className="text-white/70 text-[10px]">{label}</span>
          </div>
          <span className="text-white text-[11px] font-bold">{val}</span>
        </motion.div>
      ))}
    </motion.div>

    {/* Center floating badge */}
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-5 py-2"
      animate={{ y: [-4, 4, -4] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="text-blue-200 text-xs font-semibold tracking-wide">⚡ Algorithmic AI Engine</span>
    </motion.div>
  </div>
);

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative pt-32 pb-28 bg-background overflow-hidden min-h-[102vh] flex items-center">
      {/* Vector/network background — shows in dark mode only via CSS */}
      <div
        className="absolute inset-0 z-0 hero-vector-bg"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="container px-6 lg:px-12 relative z-10 w-full">
        <div style={{maxWidth: '620px'}}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.18] text-foreground [&>span]:mb-2">
              <AnimatedHeadingLine delay={0.05}>{t("hero.title1")}</AnimatedHeadingLine>
              <AnimatedHeadingLine delay={0.15} className="text-[#00b8d9]">{t("hero.title2")}</AnimatedHeadingLine>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-base md:text-lg text-primary font-medium tracking-wide"
            >
              {t("hero.tagline")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button size="lg" variant="primary" className="rounded-full px-8 py-6 text-base font-semibold group" asChild>
                <Link to="/contact">
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
