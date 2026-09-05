import { CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import flagIndia from "@/assets/flag-india.png";
import flagUSA from "@/assets/flag-usa.png";
import flagCanada from "@/assets/flag-canada.png";
import heroAI from "@/assets/hero-ai-network.jpg";
import heroWorkspace from "@/assets/hero-workspace.jpg";

interface CountUpStatProps {
  endValue: number;
  suffix: string;
  label: string;
  delay: number;
}

const CountUpStat = ({ endValue, suffix, label, delay }: CountUpStatProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !hasStarted) setHasStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const duration = 2000;
    let startTime: number;
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * endValue));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, endValue]);

  return (
    <div
      ref={ref}
      className="text-center px-6 py-8 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-white/[0.02] backdrop-blur-sm transition-all duration-300 ease-out animate-fade-up hover:-translate-y-1 hover:border-primary/50 cursor-default group"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-4xl md:text-5xl font-bold mb-2 tabular-nums transition-transform duration-300 group-hover:scale-105 text-primary">
        {count}{suffix}
      </div>
      <div className="text-xs text-muted-foreground dark:text-white/60 uppercase tracking-[0.15em]">{label}</div>
    </div>
  );
};

const About = () => {
  const { t } = useTranslation();

  const highlights = [
    t("about.benefit1"),
    t("about.benefit2"),
    t("about.benefit3"),
    t("about.benefit4"),
  ];

  const locations = [
    { name: "Chandigarh, India", address: "Sector 17-D, Chandigarh 160017", flag: flagIndia },
    { name: "Canada", address: "400 Jones Rd, Stoney Creek, ON, L8E 5P4", flag: flagCanada },
    { name: "USA", address: "1711 Woodbine Drive, Brandon, Florida 33510", flag: flagUSA },
  ];

  const stats = [
    { endValue: 50, suffix: "+", label: t("about.stats.projects") },
    { endValue: 98, suffix: "%", label: t("about.stats.satisfaction") },
    { endValue: 50, suffix: "+", label: t("about.stats.engineers") },
    { endValue: 24, suffix: "/7", label: t("about.stats.support") },
  ];

  return (
    <section
      id="about"
      className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-purple-50 text-foreground dark:text-white dark:bg-none"
      style={{}}
    >
      <div className="absolute inset-0 hidden dark:block" style={{ background: "linear-gradient(135deg, rgb(14, 18, 27) 0%, rgb(33, 23, 54) 50%, rgb(64, 28, 52) 100%)" }} />
      <div className="absolute -top-32 -right-32 w-64 h-64 border border-slate-200/60 dark:border-white/5 rounded-full" />
      <div className="absolute bottom-20 left-10 w-28 h-28 border border-slate-200/60 dark:border-white/5 rounded-full" />

      <div className="container px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="block text-xs font-semibold uppercase tracking-[0.25em] mb-4 text-primary">
            {t("about.eyebrow")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-foreground dark:text-white">
            {t("about.titleA")}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-sky-400">
              {t("about.titleB")}
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground dark:text-white/60">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <CountUpStat key={stat.label} endValue={stat.endValue} suffix={stat.suffix} label={stat.label} delay={index * 0.1} />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-foreground dark:text-white">{t("about.keyBenefits")}</h3>
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center gap-3 px-5 py-4 border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-white/[0.02] rounded-xl transition-all duration-300 ease-out animate-fade-up hover:border-primary/50 hover:-translate-y-0.5 cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-foreground/85 dark:text-white/85">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg group bg-gradient-to-r from-primary to-sky-400"
            >
              {t("about.workWithUs")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-white/[0.02] rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-primary/40 dark:hover:border-white/20">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2 text-foreground dark:text-white">
              <MapPin className="w-4 h-4 text-primary" />
              {t("about.globalPresence")}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {locations.map((location, index) => (
                <div
                  key={location.name}
                  className="p-4 border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] rounded-xl transition-all duration-300 ease-out animate-fade-up hover:border-primary/40 hover:-translate-y-0.5 cursor-default"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <img src={location.flag} alt="" className="w-5 h-3.5 rounded-sm object-cover" />
                    <span className="font-semibold text-sm text-foreground dark:text-white">{location.name}</span>
                  </div>
                  <div className="text-xs text-muted-foreground dark:text-white/55 ml-7 leading-relaxed">{location.address}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
