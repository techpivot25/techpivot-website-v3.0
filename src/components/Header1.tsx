import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight, Bot, Sparkles, Cloud, Shield, Code, Cpu, Lightbulb, Rocket, BookOpen, Mail, Briefcase, Users, FileText, ShieldAlert, FlaskConical, ShieldCheck, TrendingUp } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";
import { useTheme } from "next-themes";
import LanguageThemeToggle from "./LanguageThemeToggle";

const Header = () => {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isVisionOpen, setIsVisionOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false);
  const location = useLocation();
  const rafRef = useRef<number | null>(null);

  const services = [
    { label: t("header.nav.agenticAI"), href: "/services/agentic-ai", icon: Bot },
    { label: t("header.nav.generativeAI"), href: "/services/generative-ai", icon: Sparkles },
    { label: t("header.nav.saas"), href: "/services/saas-platform", icon: Cloud },
    { label: t("header.nav.cloud"), href: "/services/cloud-security", icon: Shield },
    { label: t("header.nav.customSoftware"), href: "/services/custom-software", icon: Code },
    { label: t("header.nav.iot"), href: "/services/iot", icon: Cpu },
    { label: t("header.nav.consultancy"), href: "/services/consultancy", icon: Lightbulb },
  ];
  const products = [
    { label: t("header.nav.concept"), href: "/products/concept", icon: Lightbulb },
    { label: t("header.nav.solution"), href: "/products/solution", icon: Rocket },
    { label: t("header.nav.customDev"), href: "/products/custom-dev", icon: Code },
  ];
  const vision = [
    { label: t("header.nav.story"), href: "/about", icon: FileText },
    { label: t("header.nav.leadership"), href: "/leadership", icon: Users },
  ];
  const insights = [
    { label: t("header.nav.blogs"), href: "/blogs", icon: BookOpen },
    { label: t("header.nav.contact"), href: "/contact", icon: Mail },
    { label: t("header.nav.career"), href: "/careers", icon: Briefcase },
  ];
  const capabilities = [
    { label: "Algorithmic Infrastructure Optimization", href: "/capabilities/algorithmic-infrastructure-optimization", icon: Cpu },
    { label: "Custom Algorithm Development", href: "/capabilities/custom-algorithm-development", icon: FlaskConical },
    { label: "Cybersecurity Advisory Services", href: "/capabilities/cybersecurity-advisory-services", icon: ShieldCheck },
    { label: "Sales & Business Development", href: "/capabilities/sales-business-development", icon: TrendingUp },
  ];

  const handleScroll = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => setIsScrolled(window.scrollY > 20));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsProductsOpen(false);
    setIsVisionOpen(false);
    setIsInsightsOpen(false);
    setIsCapabilitiesOpen(false);
  }, [location]);

  const renderDropdownItems = (items: typeof vision) => (
    <div className="bg-background border border-border rounded-2xl shadow-elevated p-2">
      {items.map((p) => {
        const Icon = p.icon;
        return (
          <Link
            key={p.href}
            to={p.href}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary/5 transition-colors group"
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Icon className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
              {p.label}
            </span>
          </Link>
        );
      })}
    </div>
  );

  const logoSrc = resolvedTheme === "dark" ? logoLight : logoDark;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-soft" : "bg-background"}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src={logoSrc}
              alt="TechPivot Logo"
              className="w-[200px] h-[70px]"
              width={200}
              height={70}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <div className="relative" onMouseEnter={() => setIsVisionOpen(true)} onMouseLeave={() => setIsVisionOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium transition-colors py-2 text-muted-foreground hover:text-foreground">
                {t("header.nav.vision")} <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isVisionOpen ? "rotate-180" : ""}`} />
              </button>
              {isVisionOpen && <div className="absolute left-1/2 -translate-x-1/2 top-full w-[260px] h-3" />}
              {isVisionOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-[100] animate-fade-in min-w-[260px]">
                  {renderDropdownItems(vision)}
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium transition-colors py-2 text-muted-foreground hover:text-foreground">
                {t("header.nav.offerings")} <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {isServicesOpen && <div className="absolute left-1/2 -translate-x-1/2 top-full w-[200px] h-6" />}
              {isServicesOpen && (
                <div className="fixed left-0 right-0 top-20 z-[100] animate-fade-in">
                  <div className="bg-background border-b border-border shadow-elevated">
                    <div className="container mx-auto px-6 lg:px-12 py-6">
                      <div className="flex items-center justify-center gap-2 lg:gap-4 overflow-x-auto">
                        {services.map((s) => {
                          const IconComponent = s.icon;
                          return (
                            <Link key={s.href} to={s.href} className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-primary/5 transition-all duration-200 group min-w-[80px] flex-shrink-0 cursor-pointer" onClick={() => setIsServicesOpen(false)}>
                              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                <IconComponent className="w-5 h-5 text-primary" />
                              </div>
                              <span className="text-[13px] font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center whitespace-nowrap">
                                {s.label}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setIsProductsOpen(true)} onMouseLeave={() => setIsProductsOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium transition-colors py-2 text-muted-foreground hover:text-foreground">
                {t("header.nav.product")} <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? "rotate-180" : ""}`} />
              </button>
              {isProductsOpen && <div className="absolute left-1/2 -translate-x-1/2 top-full w-[200px] h-3" />}
              {isProductsOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-[100] animate-fade-in min-w-[200px]">
                  {renderDropdownItems(products)}
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setIsCapabilitiesOpen(true)} onMouseLeave={() => setIsCapabilitiesOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium transition-colors py-2 text-muted-foreground hover:text-foreground">
                Capabilities <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCapabilitiesOpen ? "rotate-180" : ""}`} />
              </button>
              {isCapabilitiesOpen && <div className="absolute left-1/2 -translate-x-1/2 top-full w-[320px] h-3" />}
              {isCapabilitiesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-[100] animate-fade-in min-w-[320px]">
                  {renderDropdownItems(capabilities)}
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setIsInsightsOpen(true)} onMouseLeave={() => setIsInsightsOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium transition-colors py-2 text-muted-foreground hover:text-foreground">
                {t("header.nav.insights")} <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isInsightsOpen ? "rotate-180" : ""}`} />
              </button>
              {isInsightsOpen && <div className="absolute left-1/2 -translate-x-1/2 top-full w-[240px] h-3" />}
              {isInsightsOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-[100] animate-fade-in min-w-[240px]">
                  {renderDropdownItems(insights)}
                </div>
              )}
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button size="lg" variant="primary" className="group" asChild>
              <Link to="/contact">
                {t("header.cta")}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <LanguageThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-1">
            <LanguageThemeToggle />
            <button className="p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in bg-background">
            <nav className="flex flex-col gap-2">
              <div className="py-2">
                <button onClick={() => setIsVisionOpen(!isVisionOpen)} className="flex items-center justify-between w-full text-base font-medium text-foreground">
                  {t("header.nav.vision")} <ChevronDown className={`w-4 h-4 transition-transform ${isVisionOpen ? "rotate-180" : ""}`} />
                </button>
                {isVisionOpen && (
                  <div className="mt-2 p-2 space-y-0 rounded-2xl bg-muted">
                    {vision.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link key={s.href} to={s.href} className="flex items-center gap-2 py-1.5 px-2 text-sm text-muted-foreground hover:text-foreground hover:bg-background rounded-xl transition-colors">
                          <Icon className="w-3.5 h-3.5 text-primary" />{s.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="py-2">
                <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="flex items-center justify-between w-full text-base font-medium text-foreground">
                  {t("header.nav.offerings")} <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {isServicesOpen && (
                  <div className="mt-2 p-2 space-y-0 rounded-2xl bg-muted">
                    {services.map((s) => {
                      const IconComponent = s.icon;
                      return (
                        <Link key={s.href} to={s.href} className="flex items-center gap-2 py-1.5 px-2 text-sm text-muted-foreground hover:text-foreground hover:bg-background rounded-xl transition-colors">
                          <IconComponent className="w-3.5 h-3.5 text-primary" />{s.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="py-2">
                <button onClick={() => setIsProductsOpen(!isProductsOpen)} className="flex items-center justify-between w-full text-base font-medium text-foreground">
                  {t("header.nav.product")} <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
                </button>
                {isProductsOpen && (
                  <div className="mt-2 p-2 space-y-0 rounded-2xl bg-muted">
                    {products.map((p) => {
                      const Icon = p.icon;
                      return (
                        <Link key={p.href} to={p.href} className="flex items-center gap-2 py-1.5 px-2 text-sm text-muted-foreground hover:text-foreground hover:bg-background rounded-xl transition-colors">
                          <Icon className="w-3.5 h-3.5 text-primary" />{p.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="py-2">
                <button onClick={() => setIsCapabilitiesOpen(!isCapabilitiesOpen)} className="flex items-center justify-between w-full text-base font-medium text-foreground">
                  Capabilities <ChevronDown className={`w-4 h-4 transition-transform ${isCapabilitiesOpen ? "rotate-180" : ""}`} />
                </button>
                {isCapabilitiesOpen && (
                  <div className="mt-2 p-2 space-y-0 rounded-2xl bg-muted">
                    {capabilities.map((c) => {
                      const Icon = c.icon;
                      return (
                        <Link key={c.href} to={c.href} className="flex items-center gap-2 py-1.5 px-2 text-sm text-muted-foreground hover:text-foreground hover:bg-background rounded-xl transition-colors">
                          <Icon className="w-3.5 h-3.5 text-primary" />{c.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="py-2">
                <button onClick={() => setIsInsightsOpen(!isInsightsOpen)} className="flex items-center justify-between w-full text-base font-medium text-foreground">
                  {t("header.nav.insights")} <ChevronDown className={`w-4 h-4 transition-transform ${isInsightsOpen ? "rotate-180" : ""}`} />
                </button>
                {isInsightsOpen && (
                  <div className="mt-2 p-2 space-y-0 rounded-2xl bg-muted">
                    {insights.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link key={s.href} to={s.href} className="flex items-center gap-2 py-1.5 px-2 text-sm text-muted-foreground hover:text-foreground hover:bg-background rounded-xl transition-colors">
                          <Icon className="w-3.5 h-3.5 text-primary" />{s.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
              <Button className="mt-4 w-full" size="lg" variant="primary" asChild>
                <Link to="/contact">{t("header.cta")}</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
