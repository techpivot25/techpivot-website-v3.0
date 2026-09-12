import { Helmet } from "react-helmet-async";
import { useState, useMemo } from "react";
import {
  ArrowUpRight,
  Building2,
  CalendarClock,
  GraduationCap,
  HeartPulse,
  Layers,
  ShoppingBag,
  Users,
  Plane,
  Dumbbell,
  RefreshCw,
  Home,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AppleCardCompact } from "@/components/ui/apple-card";
import AnimatedSection from "@/components/AnimatedSection";

interface PortfolioProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  industry: string;
  region?: string;
  tags: string[];
  highlights: string[];
  url?: string;
  image: string;
  icon: typeof Building2;
}

const portfolioProjects: PortfolioProject[] = [
  {
    id: "bookandlink",
    title: "Bookandlink",
    tagline: "Enterprise Property Management & Hospitality Platform",
    description:
      "A unified platform for property managers and hospitality operators to manage listings, reservations, housekeeping, and guest communication from a single dashboard.",
    category: "Property & Hospitality",
    industry: "Real Estate / Hospitality",
    tags: ["Property Management", "Channel Sync", "Multi-Property Ops"],
    highlights: [
      "Centralized booking calendar across multiple properties and channels",
      "Automated guest messaging and staff task workflows",
      "Role-based access for owners, managers, and on-site staff",
    ],
    url: "https://bookandlink.com",
    image: "/images/portfolio/bookandlink.jpg",
    icon: Building2,
  },
  {
    id: "favotrip",
    title: "Favotrip",
    tagline: "Enterprise Travel Booking Platform",
    description:
      "A UK-based travel booking platform covering flights, stays, and package deals, built to handle high-volume search and checkout traffic with reliable supplier integrations.",
    category: "Travel & Booking",
    industry: "Travel",
    region: "United Kingdom",
    tags: ["Travel Tech", "Supplier Integrations", "Dynamic Pricing"],
    highlights: [
      "Aggregated inventory from multiple travel suppliers in real time",
      "Optimized search-to-checkout flow for conversion",
      "Built for peak-season traffic without performance degradation",
    ],
    url: "https://favotrip.co.uk",
    image: "/images/portfolio/favotrip.jpg",
    icon: Plane,
  },
  {
    id: "syncmanager",
    title: "SyncManager",
    tagline: "Real-Time Inventory, Pricing & Order Sync Engine",
    description:
      "A synchronization engine that keeps inventory, pricing, and order data consistent across multiple sales channels and back-office systems in real time.",
    category: "Commerce Infrastructure",
    industry: "Retail / E-commerce",
    tags: ["Real-Time Sync", "Inventory Engine", "Multi-Channel"],
    highlights: [
      "Sub-second propagation of stock and price changes across channels",
      "Conflict resolution logic for concurrent updates",
      "Built to scale with high SKU counts and order volume",
    ],
    image: "/images/portfolio/syncmanager.jpg",
    icon: RefreshCw,
  },
  {
    id: "omnimart",
    title: "OmniMart",
    tagline: "B2B Multi-Seller Marketplace & Delivery Platform",
    description:
      "A B2B marketplace connecting multiple sellers with business buyers, with integrated logistics and delivery coordination baked into the ordering flow.",
    category: "Marketplace",
    industry: "B2B Commerce",
    tags: ["Multi-Vendor", "B2B Marketplace", "Logistics"],
    highlights: [
      "Seller onboarding, catalog, and order management in one platform",
      "Delivery routing and fulfillment tracking for buyers",
      "Commission and payout handling across sellers",
    ],
    url: "https://omnimart.com",
    image: "/images/portfolio/omnimart.jpg",
    icon: ShoppingBag,
  },
  {
    id: "edusuite",
    title: "EduSuite",
    tagline: "Cloud-Based School Management SaaS Platform",
    description:
      "A multi-tenant SaaS platform for schools to manage admissions, attendance, timetables, fees, and communication between staff, students, and parents.",
    category: "Education SaaS",
    industry: "Education",
    tags: ["SaaS", "Multi-Tenant", "School Administration"],
    highlights: [
      "Single platform for admissions, attendance, fees, and grading",
      "Parent and staff portals with role-specific views",
      "Built for independent schools and multi-branch institutions",
    ],
    image: "/images/portfolio/edusuite.jpg",
    icon: GraduationCap,
  },
  {
    id: "hrspace",
    title: "HR SPACE",
    tagline: "Multi-Tenant HR Platform",
    description:
      "An HR platform serving multiple organizations from one deployment, covering employee records, leave, payroll inputs, and performance workflows.",
    category: "HR & Workforce",
    industry: "Human Resources",
    tags: ["Multi-Tenant SaaS", "HRIS", "Workforce Management"],
    highlights: [
      "Isolated tenant data with shared platform infrastructure",
      "Configurable leave, attendance, and approval workflows",
      "Self-service portals for employees and managers",
    ],
    image: "/images/portfolio/hrspace.jpg",
    icon: Users,
  },
  {
    id: "plistbooking",
    title: "Plistbooking",
    tagline: "Listings & Reservations Booking Platform",
    description:
      "A booking platform for listing-based inventory, handling availability, pricing rules, and reservation management for hosts and operators.",
    category: "Property & Hospitality",
    industry: "Hospitality",
    tags: ["Booking Engine", "Availability Management", "Reservations"],
    highlights: [
      "Real-time availability calendar with rate rules",
      "Streamlined reservation flow from search to confirmation",
      "Operator dashboard for managing listings at scale",
    ],
    url: "https://plistbooking.com",
    image: "/images/portfolio/plistbooking.jpg",
    icon: CalendarClock,
  },
  {
    id: "doctorgo",
    title: "DoctorGo",
    tagline: "On-Demand Healthcare & Telemedicine App",
    description:
      "A patient-facing app connecting people with doctors for consultations, appointment booking, and follow-up care, designed for speed and clarity in urgent moments.",
    category: "Healthcare",
    industry: "Healthcare",
    tags: ["Telemedicine", "Appointment Booking", "Patient App"],
    highlights: [
      "Simple appointment discovery and booking flow",
      "Doctor availability and consultation management",
      "Built with patient trust and clarity as the design priority",
    ],
    url: "https://doctorgoapp.com",
    image: "/images/portfolio/doctorgo.jpg",
    icon: HeartPulse,
  },
  {
    id: "pushupchallenge",
    title: "The Pushup Challenge",
    tagline: "Fitness Fundraising & Community Platform",
    description:
      "A community fitness platform for Australia's Pushup Challenge, supporting team sign-ups, daily progress tracking, and fundraising for mental health awareness.",
    category: "Fitness & Community",
    industry: "Health & Wellness",
    region: "Australia",
    tags: ["Community Platform", "Fundraising", "Progress Tracking"],
    highlights: [
      "Team and individual sign-up with daily activity logging",
      "Fundraising tools tied to participant progress",
      "Built to handle a seasonal surge of nationwide participants",
    ],
    url: "https://www.thepushupchallenge.com.au",
    image: "/images/portfolio/pushupchallenge.jpg",
    icon: Dumbbell,
  },
  {
    id: "octorate",
    title: "Octorate",
    tagline: "Hotel Channel Manager & Property Management System",
    description:
      "Platform engineering work on a channel manager and PMS used by accommodation providers to sync rates and availability across OTAs and manage day-to-day operations.",
    category: "Property & Hospitality",
    industry: "Hospitality Technology",
    tags: ["Channel Manager", "PMS", "OTA Integrations"],
    highlights: [
      "Two-way sync of rates and availability across major OTAs",
      "Front-desk and booking operations in one system",
      "Reliability engineering for a system hotels depend on daily",
    ],
    url: "https://www.octorate.com",
    image: "/images/portfolio/octorate.jpg",
    icon: Layers,
  },
  {
    id: "homehero",
    title: "HomeHero",
    tagline: "On-Demand Home Services Platform",
    description:
      "A platform connecting Australian homeowners with vetted local tradespeople for booking, quoting, and managing home service jobs end to end.",
    category: "Marketplace",
    industry: "Home Services",
    region: "Australia",
    tags: ["Services Marketplace", "Job Booking", "Two-Sided Platform"],
    highlights: [
      "Job posting, quoting, and booking flow for homeowners",
      "Tradesperson-side job management and scheduling",
      "Trust and verification built into the matching flow",
    ],
    image: "/images/portfolio/homehero.jpg",
    icon: Home,
  },
];

const successPatterns = [
  {
    icon: Layers,
    title: "Platform Thinking",
    description:
      "We build for multi-tenant scale from day one — new customers, properties, or sellers onboard without re-architecture.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Where It Matters",
    description:
      "Inventory, pricing, and availability sync in real time across channels, so nothing goes out of date between systems.",
  },
  {
    icon: Users,
    title: "Built Around Real Users",
    description:
      "Booking flows, dashboards, and portals are designed around how patients, guests, tradespeople, and staff actually work.",
  },
  {
    icon: Building2,
    title: "Enterprise-Ready Architecture",
    description:
      "Role-based access, tenant isolation, and audit-ready data handling are part of the foundation, not an afterthought.",
  },
  {
    icon: CalendarClock,
    title: "Handles Peak Load",
    description:
      "Seasonal traffic spikes, high-volume checkouts, and nationwide sign-up surges are load-tested before launch, not after.",
  },
  {
    icon: ArrowUpRight,
    title: "Shipped, Not Just Designed",
    description:
      "Every project on this page is live and running — used daily by real operators, customers, and staff across industries.",
  },
];

type CategoryType = "All" | string;

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(new Set(portfolioProjects.map((p) => p.category))),
    ],
    [],
  );

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? portfolioProjects
        : portfolioProjects.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  return (
    <>
      <Helmet>
        <title>Portfolio | TechPivot Technologies</title>
        <meta
          name="description"
          content="Explore platforms TechPivot has built and shipped — travel booking, property management, marketplaces, HR, education, and healthcare — live and running for real operators today."
        />
        <meta
          name="keywords"
          content="platform development portfolio, SaaS case studies, booking engine development, marketplace development, multi-tenant platform engineering"
        />
        <link rel="canonical" href="https://techpivot.in/portfolio" />
        <meta
          property="og:title"
          content="Portfolio | TechPivot Technologies"
        />
        <meta
          property="og:description"
          content="Platforms we've built and shipped across travel, hospitality, healthcare, HR, education, and commerce."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techpivot.in/portfolio" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="py-20 lg:py-28 animate-section">
            <div className="container px-6 lg:px-12">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Platforms we've built, live and in use today
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-muted-foreground mb-8">
                  Booking engines. Marketplaces. HR and education SaaS. Real
                  products, real operators.
                </p>
                <div className="text-lg text-muted-foreground leading-relaxed text-left space-y-5">
                  <p>
                    Every project below is a real system running in production —
                    used daily by hotel operators, patients, tradespeople,
                    students, and HR teams across multiple countries. We work
                    across the stack: booking and reservation engines,
                    multi-tenant SaaS, two-sided marketplaces, and the sync
                    infrastructure that keeps it all consistent.
                  </p>
                  <p>
                    Browse by category below, or reach out and we'll walk you
                    through the ones closest to what you're building.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Success Patterns */}
          <section className="py-20 lg:py-28 bg-muted animate-section">
            <div className="container px-6 lg:px-12">
              <AnimatedSection
                animation="fadeUp"
                className="text-center mb-16 max-w-3xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  What runs through every build
                </h2>
                <p className="text-lg text-muted-foreground">
                  The same engineering discipline shows up whether we're
                  building a marketplace or a school management system.
                </p>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {successPatterns.map((pattern, i) => (
                  <AnimatedSection
                    key={pattern.title}
                    animation="fadeUp"
                    delay={i * 100}
                  >
                    <AppleCardCompact
                      icon={pattern.icon}
                      title={pattern.title}
                      description={pattern.description}
                    />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio Filter & Grid */}
          <section className="py-20 lg:py-28 animate-section">
            <div className="container px-6 lg:px-12">
              <AnimatedSection
                animation="fadeUp"
                className="text-center mb-16 max-w-3xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Projects
                </h2>
                <p className="text-lg text-muted-foreground">
                  Filter by category to see the platforms closest to what you're
                  building.
                </p>
              </AnimatedSection>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80 border border-border"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Portfolio Grid */}
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {filteredProjects.map((project, i) => {
                  const Icon = project.icon;
                  return (
                    <AnimatedSection
                      key={project.id}
                      animation="fadeUp"
                      delay={i * 100}
                    >
                      <div className="h-full flex flex-col rounded-2xl bg-secondary/10 border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                        {/* Screenshot */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                          <img
                            src={project.image}
                            alt={`${project.title} — ${project.tagline}`}
                            loading="lazy"
                            className="w-full h-full object-cover object-top"
                            onError={(e) => {
                              // Fallback if a screenshot hasn't been added yet for this project
                              (
                                e.currentTarget as HTMLImageElement
                              ).style.display = "none";
                              const fallback = e.currentTarget
                                .nextElementSibling as HTMLElement | null;
                              if (fallback) fallback.style.display = "flex";
                            }}
                          />
                          <div
                            className="absolute inset-0 hidden items-center justify-center bg-muted"
                            style={{ display: "none" }}
                          >
                            <Icon className="w-10 h-10 text-muted-foreground/40" />
                          </div>
                        </div>

                        <div className="flex flex-col flex-1 p-6">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start gap-4">
                              <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <span className="text-xs font-bold text-primary uppercase tracking-wide">
                                  {project.industry}
                                  {project.region ? ` · ${project.region}` : ""}
                                </span>
                                <h3 className="text-xl font-bold text-foreground mt-1">
                                  {project.title}
                                </h3>
                                <p className="text-sm font-medium text-muted-foreground mt-0.5">
                                  {project.tagline}
                                </p>
                              </div>
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-6">
                            {project.description}
                          </p>

                          {/* Highlights */}
                          <ul className="space-y-2.5 mb-6">
                            {project.highlights.map((highlight) => (
                              <li
                                key={highlight}
                                className="flex items-start gap-2.5 text-sm text-muted-foreground"
                              >
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full border border-border"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* CTA */}
                          <div className="mt-auto">
                            {project.url ? (
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                              >
                                Visit Live Site
                                <ArrowUpRight className="w-4 h-4" />
                              </a>
                            ) : (
                              <button className="w-full px-6 py-3 bg-muted text-foreground font-semibold rounded-lg border border-border hover:bg-muted/80 transition-colors">
                                Ask Us About This Project
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Ideal Customers */}
          <section className="py-20 lg:py-28 bg-secondary/15 animate-section">
            <div className="container px-6 lg:px-12 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who we build for
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founders and operators in travel, hospitality, healthcare,
                education, HR, and commerce who need a platform that works the
                way their business actually runs — multi-tenant from the start,
                resilient under real traffic, and simple enough for the people
                using it every day.
              </p>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="py-20 lg:py-28 animate-section">
            <div className="container px-6 lg:px-12">
              <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Have a platform in mind?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Tell us what you're building and we'll show you which of these
                  projects is the closest reference point.
                </p>
                <button className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors">
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
