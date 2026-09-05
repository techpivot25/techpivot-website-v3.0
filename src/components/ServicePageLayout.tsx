import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VectorMeshBackground from "@/components/VectorMeshBackground";
import GeometricBlocksBackground from "@/components/GeometricBlocksBackground";
import SaaSIconsBackground from "@/components/SaaSIconsBackground";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  backgroundImage?: string;
  showVectorMesh?: boolean;
  showGeometricBlocks?: boolean;
  showSaaSIcons?: boolean;
}

const ServicePageLayout = ({
  title,
  subtitle,
  description,
  metaTitle,
  metaDescription,
  keywords,
  children,
  icon,
  backgroundImage,
  showVectorMesh = false,
  showGeometricBlocks = false,
  showSaaSIcons = false,
}: ServicePageLayoutProps) => {
  const { pathname } = useLocation();
  const pageTitle = metaTitle ?? `${title} | TechPivot Technologies`;
  const pageDescription = (metaDescription ?? description).replace(/\s+/g, " ").trim().slice(0, 158);
  const canonicalUrl = `https://techpivot.in${pathname}`;
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | null = null;
    
    // Defer animation setup to avoid forced reflows during initial render
    const timeoutId = setTimeout(() => {
      ctx = gsap.context(() => {
        // Set initial state without triggering reflow
        gsap.set(".hero-content", { opacity: 0, y: 60 });
        
        // Animate after a frame to avoid forced reflow
        gsap.to(".hero-content", { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out",
          delay: 0.1
        });

        const sections = gsap.utils.toArray<HTMLElement>(".animate-section");
        if (sections.length > 0) {
          // Set initial state for sections
          gsap.set(sections, { opacity: 0, y: 50 });
          
          // Create individual ScrollTriggers with optimized settings
          sections.forEach((section) => {
            ScrollTrigger.create({
              trigger: section,
              start: "top 80%",
              onEnter: () => {
                gsap.to(section, {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power2.out",
                });
              },
              onLeaveBack: () => {
                gsap.set(section, { opacity: 0, y: 50 });
              },
            });
          });
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (ctx) ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {keywords && <meta name="keywords" content={keywords} />}
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section - Linnify style */}
        <section
          ref={heroRef}
          className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-surface-dark overflow-hidden"
        >
          {/* Background Image */}
          {backgroundImage && (
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
          )}

          {/* Vector Mesh Background */}
          {showVectorMesh && <VectorMeshBackground />}

          {/* Geometric Blocks Background */}
          {showGeometricBlocks && <GeometricBlocksBackground />}

          {/* SaaS Icons Background */}
          {showSaaSIcons && <SaaSIconsBackground />}
          
          {/* Geometric decorations */}
          <div className="absolute -top-20 -right-20 w-80 h-80 border border-surface-dark-foreground/10 rounded-full" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-primary/20 rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/40 rounded-full" />

          <div className="container px-6 lg:px-12 relative z-10">
            <div className="hero-content">

              {/* Back link */}
              <Link
                to="/#services"
                className="inline-flex items-center gap-2 text-surface-dark-foreground/60 hover:text-surface-dark-foreground transition-colors mb-10 group text-sm uppercase tracking-wide"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Services
              </Link>

              {/* Two-column hero grid */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-center min-h-[320px]">

                {/* Left — eyebrow + title fills the column */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl border border-surface-dark-foreground/20 bg-surface-dark-foreground/5 flex items-center justify-center shrink-0">
                      {icon}
                    </div>
                    <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                      {subtitle}
                    </span>
                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold text-surface-dark-foreground tracking-tight leading-[1.1]">
                    {title}
                  </h1>
                </div>

                {/* Right — description + CTAs */}
                <div className="flex flex-col justify-center border-l border-surface-dark-foreground/10 lg:pl-16">
                  <p className="text-base md:text-lg text-surface-dark-foreground/70 leading-relaxed whitespace-pre-line mb-10">
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group" asChild>
                      <Link to="/contact">
                        Talk To Expert
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-surface-dark-foreground/30 text-surface-dark-foreground hover:bg-surface-dark-foreground/10" asChild>
                      <Link to="/technologies">
                        View Technologies
                      </Link>
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <div ref={contentRef}>{children}</div>

        <Footer />
      </div>
    </>
  );
};

export default ServicePageLayout;