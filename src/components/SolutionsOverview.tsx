import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, HeadphonesIcon, Code2, Database } from "lucide-react";
import { Link } from "react-router-dom";

// ------- Animated SVG vector — circuit/neural net -------
const CircuitVector = () => (
  <svg
    viewBox="0 0 600 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    aria-hidden="true"
  >
    {/* Horizontal rails */}
    <motion.line x1="0" y1="100" x2="600" y2="100" stroke="rgba(0,184,217,0.12)" strokeWidth="1" />
    <motion.line x1="0" y1="200" x2="600" y2="200" stroke="rgba(0,184,217,0.12)" strokeWidth="1" />
    <motion.line x1="0" y1="300" x2="600" y2="300" stroke="rgba(0,184,217,0.12)" strokeWidth="1" />

    {/* Vertical rails */}
    <line x1="150" y1="0" x2="150" y2="400" stroke="rgba(0,184,217,0.08)" strokeWidth="1" />
    <line x1="300" y1="0" x2="300" y2="400" stroke="rgba(0,184,217,0.08)" strokeWidth="1" />
    <line x1="450" y1="0" x2="450" y2="400" stroke="rgba(0,184,217,0.08)" strokeWidth="1" />

    {/* Neural paths */}
    <motion.path
      d="M 60 200 Q 150 120 240 160 Q 330 200 420 140 Q 510 80 570 100"
      stroke="rgba(0,184,217,0.5)"
      strokeWidth="1.5"
      fill="none"
      strokeDasharray="8 5"
      animate={{ strokeDashoffset: [0, -52] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    />
    <motion.path
      d="M 60 280 Q 160 300 250 240 Q 340 180 440 260 Q 510 310 570 290"
      stroke="rgba(139,92,246,0.4)"
      strokeWidth="1.5"
      fill="none"
      strokeDasharray="8 5"
      animate={{ strokeDashoffset: [0, -52] }}
      transition={{ duration: 4, delay: 0.8, repeat: Infinity, ease: "linear" }}
    />
    <motion.path
      d="M 60 130 Q 180 90 280 130 Q 380 170 480 110 Q 530 85 570 200"
      stroke="rgba(0,184,217,0.25)"
      strokeWidth="1"
      fill="none"
      strokeDasharray="5 6"
      animate={{ strokeDashoffset: [0, -44] }}
      transition={{ duration: 5, delay: 1.5, repeat: Infinity, ease: "linear" }}
    />

    {/* Node circles — intersections */}
    {[
      { cx: 60,  cy: 200, r: 5,  color: "rgba(0,184,217,0.9)",   delay: 0   },
      { cx: 240, cy: 160, r: 6,  color: "rgba(0,184,217,0.9)",   delay: 0.3 },
      { cx: 420, cy: 140, r: 5,  color: "rgba(0,184,217,0.9)",   delay: 0.6 },
      { cx: 570, cy: 100, r: 4,  color: "rgba(0,184,217,0.9)",   delay: 0.9 },
      { cx: 60,  cy: 280, r: 5,  color: "rgba(139,92,246,0.9)",  delay: 0.4 },
      { cx: 250, cy: 240, r: 6,  color: "rgba(139,92,246,0.9)",  delay: 0.7 },
      { cx: 440, cy: 260, r: 5,  color: "rgba(139,92,246,0.9)",  delay: 1.0 },
      { cx: 570, cy: 290, r: 4,  color: "rgba(139,92,246,0.9)",  delay: 1.3 },
      { cx: 300, cy: 200, r: 8,  color: "rgba(0,184,217,0.7)",   delay: 0.5 },
    ].map((node, i) => (
      <motion.circle
        key={i}
        cx={node.cx}
        cy={node.cy}
        r={node.r}
        fill={node.color}
        animate={{ opacity: [0.5, 1, 0.5], r: [node.r, node.r + 2, node.r] }}
        transition={{ duration: 2.5, delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}

    {/* Crosshair on center node */}
    <line x1="292" y1="200" x2="308" y2="200" stroke="rgba(0,184,217,0.6)" strokeWidth="1" />
    <line x1="300" y1="192" x2="300" y2="208" stroke="rgba(0,184,217,0.6)" strokeWidth="1" />

    {/* Corner bracket decorations */}
    <path d="M 20 20 L 20 50 L 50 50" stroke="rgba(0,184,217,0.3)" strokeWidth="1.5" fill="none" />
    <path d="M 580 20 L 580 50 L 550 50" stroke="rgba(0,184,217,0.3)" strokeWidth="1.5" fill="none" />
    <path d="M 20 380 L 20 350 L 50 350" stroke="rgba(0,184,217,0.3)" strokeWidth="1.5" fill="none" />
    <path d="M 580 380 L 580 350 L 550 350" stroke="rgba(0,184,217,0.3)" strokeWidth="1.5" fill="none" />
  </svg>
);

// ------- Solution cards -------
const solutions = [
  {
    icon: Code2,
    title: "Private Coding Co-Pilot",
    description:
      "A self-hosted AI pair programmer trained on your internal codebase, coding standards, and architecture — never sending a line of your IP to an external server.",
    accent: "text-[#00b8d9]",
    iconBg: "bg-[#00b8d9]/10",
    border: "border-[#00b8d9]/20",
    href: "/services/agentic-ai",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Service Agent",
    description:
      "An LLM fine-tuned on your product catalog, support history, and brand voice — resolving queries with accuracy that generic models can't match.",
    accent: "text-violet-400",
    iconBg: "bg-violet-500/10",
    border: "border-violet-500/20",
    href: "/services/agentic-ai",
  },
  {
    icon: Database,
    title: "Enterprise Data Intelligence",
    description:
      "Connect your private data warehouse to a secure LLM layer. Ask questions in plain language, get auditable answers — no data ever leaves your VPC.",
    accent: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    href: "/services/saas-platform",
  },
  {
    icon: BrainCircuit,
    title: "Domain-Specific Research Agent",
    description:
      "Autonomous agents that read, synthesize, and surface insights from your internal documents, patents, and research — at a speed no human team can match.",
    accent: "text-amber-400",
    iconBg: "bg-amber-500/10",
    border: "border-amber-500/20",
    href: "/services/agentic-ai",
  },
];

// ------- Main section -------
const SolutionsOverview = () => (
  <section className="relative bg-[#060f17] py-24 md:py-32 overflow-hidden">

    {/* Vector background */}
    <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
      <CircuitVector />
    </div>

    {/* Radial fade so vector doesn't fight text */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background" aria-hidden="true" />

    <div className="container px-6 lg:px-12 relative z-10">

      {/* Two-column header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight">
            Engineering Intelligence,{" "}
            <span className="text-[#00b8d9]">Deployed at Scale.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <p className="text-base md:text-lg text-slate-400 leading-relaxed">
            We bridge the gap between raw AI research and business impact.
            Whether you need a private coding co-pilot or a customer service
            agent that understands your unique products, we build the
            infrastructure to make it work.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center mt-6 text-sm font-semibold text-[#00b8d9] hover:opacity-80 transition-opacity group"
          >
            Explore all solutions
            <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Solution cards — 2×2 grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {solutions.map((sol, i) => {
          const Icon = sol.icon;
          return (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={sol.href}
                className={`group flex flex-col h-full rounded-2xl border ${sol.border} bg-white/[0.03] backdrop-blur-sm p-7 hover:bg-white/[0.05] transition-all duration-300`}
              >
                <div className={`w-11 h-11 rounded-xl ${sol.iconBg} border ${sol.border} flex items-center justify-center mb-5`}>
                  <Icon className={`w-5 h-5 ${sol.accent}`} strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                  {sol.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-5">
                  {sol.description}
                </p>
                <span className={`inline-flex items-center text-sm font-semibold ${sol.accent}`}>
                  Learn more
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

export default SolutionsOverview;
