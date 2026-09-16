import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EnterpriseSection from "@/components/EnterpriseSection";
import ProductConceptScroller from "@/components/ProductConceptScroller";
import SolutionsOverview from "@/components/SolutionsOverview";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import About from "@/components/About";

import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>TechPivot Technologies | AI, SaaS & Custom Software Development</title>
        <meta name="description" content="TechPivot builds AI agents, SaaS platforms, mobile apps, custom software and cloud solutions for global enterprises. Book a free consultation today." />
        <meta name="keywords" content="software development company India, AI development company, agentic AI services, generative AI solutions, SaaS development company, custom software development, mobile app development, cloud and cybersecurity services, IT staff augmentation, digital transformation consulting" />
        <link rel="canonical" href="https://techpivot.in/" />
        <meta property="og:title" content="TechPivot Technologies | AI, SaaS & Custom Software Development" />
        <meta property="og:description" content="TechPivot builds AI agents, SaaS platforms, mobile apps, custom software and cloud solutions for global enterprises. Book a free consultation today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techpivot.in/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TechPivot Technologies | AI, SaaS & Custom Software Development" />
        <meta name="twitter:description" content="TechPivot builds AI agents, SaaS platforms, mobile apps, custom software and cloud solutions for global enterprises. Book a free consultation today." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <EnterpriseSection />
          <ProductConceptScroller />
          <SolutionsOverview />
          <Services />
          <CaseStudies />
          {/* <Testimonials /> */}
          {/* <Partners /> */}
          <About />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
