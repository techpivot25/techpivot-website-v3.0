import { Mail, Phone, MapPin, ArrowUpRight, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoLight from "@/assets/logo-light.png";

const Footer = () => {
  const { t } = useTranslation();
  const offerings = [
    { label: t("header.nav.agenticAI"), href: "/services/agentic-ai" },
    { label: t("header.nav.generativeAI"), href: "/services/generative-ai" },
    { label: t("header.nav.saas"), href: "/services/saas-platform" },
    { label: t("header.nav.cloud"), href: "/services/cloud-security" },
    { label: t("header.nav.customSoftware"), href: "/services/custom-software" },
    { label: t("header.nav.iot"), href: "/services/iot" },
    { label: t("header.nav.consultancy"), href: "/services/consultancy" },
  ];

  const products = [
    { label: t("header.nav.concept"), href: "/products/concept" },
    { label: t("header.nav.solution"), href: "/products/solution" },
    { label: t("header.nav.customDev"), href: "/products/custom-dev" },
  ];

  const capabilities = [
    { label: "Algorithmic Infrastructure Optimization", href: "/capabilities/algorithmic-infrastructure-optimization" },
    { label: "Custom Algorithm Development", href: "/capabilities/custom-algorithm-development" },
    { label: "Cybersecurity Advisory Services", href: "/capabilities/cybersecurity-advisory-services" },
    { label: "Sales & Business Development", href: "/capabilities/sales-business-development" },
  ];

  // ✅ UPDATED: Added Portfolio to insights array
  const insights = [
    { label: t("header.nav.story"), href: "/about" },
    { label: t("header.nav.leadership"), href: "/leadership" },
    { label: t("header.nav.blogs"), href: "/blogs" },
    { label: "Portfolio", href: "/portfolio" },  // ← NEW: Portfolio link
    { label: t("header.nav.career"), href: "/careers" },
    { label: t("header.nav.contact"), href: "/contact" },
  ];

  const social = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/techpivot-technologies/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/Techpivot.Technologies/", label: "X" },
    { icon: Instagram, href: "https://www.instagram.com/Techpivot.Technologies/", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/techpivot.technologies/", label: "Facebook" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Large background text */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span 
          className="text-[84px] md:text-[140px] lg:text-[210px] xl:text-[280px] font-bold tracking-tighter whitespace-nowrap opacity-[0.04]"
          style={{ color: 'hsl(var(--secondary-foreground))' }}
        >
          TechPivot
        </span>
      </div>
      
      <div className="container px-6 lg:px-12 py-16 lg:py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img src={logoLight} alt="TechPivot Logo" className="w-[200px] h-[70px]" loading="lazy" />
            </Link>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed mb-6">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-3">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={item.label}
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Offerings */}
          <div>
            <h4 className="font-bold text-sm mb-6 text-secondary-foreground">{t("footer.offerings")}</h4>
            <ul className="space-y-3">
              {offerings.map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.href} 
                    className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-sm mb-6 text-secondary-foreground">{t("footer.products")}</h4>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.href} 
                    className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capability */}
          <div>
            <h4 className="font-bold text-sm mb-6 text-secondary-foreground">Capability</h4>
            <ul className="space-y-3">
              {capabilities.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insights & Community */}
          <div>
            <h4 className="font-bold text-sm mb-6 text-secondary-foreground">{t("footer.insights")}</h4>
            <ul className="space-y-3">
              {insights.map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.href} 
                    className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-6 text-secondary-foreground">{t("footer.getInTouch")}</h4>
            <ul className="space-y-4 text-sm text-secondary-foreground/60">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail size={14} className="text-primary" />
                </div>
                <a href="mailto:info@techpivot.in" className="hover:text-primary transition-colors">
                  info@techpivot.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone size={14} className="text-primary" />
                </div>
                <span>+91 7838379095</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-primary" />
                </div>
                <span>Chandigarh, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/50">
          <p>{t("footer.rights")}</p>
          <div className="flex gap-6">
            <Link to="/faq" className="hover:text-primary transition-colors">{t("footer.faq")}</Link>
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">{t("footer.privacy")}</Link>
            <Link to="/terms-and-conditions" className="hover:text-primary transition-colors">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
