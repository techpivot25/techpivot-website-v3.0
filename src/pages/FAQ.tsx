import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What services does TechPivot offer?", "acceptedAnswer": { "@type": "Answer", "text": "We offer a comprehensive suite of digital services including custom software development, AI & machine learning solutions, mobile app development, cloud infrastructure, SaaS platform development, and IT staff augmentation." } },
    { "@type": "Question", "name": "What is Algorithmic Infrastructure Optimization?", "acceptedAnswer": { "@type": "Answer", "text": "Algorithmic Infrastructure Optimization is advanced mathematics applied at the kernel and transport layer to make software run significantly faster on existing hardware, without rewriting application code. It turns infrastructure you already own into a higher-efficiency system." } },
    { "@type": "Question", "name": "Does TechPivot work with defense and government clients?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our Advanced Defense & Intelligence Solutions capability supports defense, government, and intelligence partners with mission-critical software, secure data systems, and algorithmic decision support built for high-security environments." } },
    { "@type": "Question", "name": "Can TechPivot build a custom algorithm for our specific problem?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our Custom Algorithm Development capability designs novel mathematical models and algorithms from first principles when off-the-shelf tooling can't meet a partner's accuracy, throughput, or convergence requirements." } },
    { "@type": "Question", "name": "Does TechPivot offer cybersecurity advisory services?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We provide security architecture review, compliance readiness support, and cloud/infrastructure hardening advisory to help organizations assess and improve their security posture." } },
    { "@type": "Question", "name": "How long does a typical project take?", "acceptedAnswer": { "@type": "Answer", "text": "Project timelines vary based on complexity and scope. A simple MVP can take 4-8 weeks, while enterprise solutions may require 3-6 months." } },
    { "@type": "Question", "name": "What is your development process?", "acceptedAnswer": { "@type": "Answer", "text": "We follow an agile methodology with iterative development cycles including discovery & planning, UI/UX design, development sprints, quality assurance, deployment, and ongoing support." } },
    { "@type": "Question", "name": "Do you provide post-launch support?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer comprehensive maintenance and support packages including bug fixes, security updates, performance optimization, and feature enhancements." } },
    { "@type": "Question", "name": "What technologies do you work with?", "acceptedAnswer": { "@type": "Answer", "text": "Our tech stack includes React, React Native, Node.js, Python, AWS, Google Cloud, Azure, PostgreSQL, MongoDB, and more." } },
    { "@type": "Question", "name": "How do you ensure project quality?", "acceptedAnswer": { "@type": "Answer", "text": "We implement code reviews, automated testing, CI/CD pipelines, and rigorous QA protocols including unit, integration, and user acceptance testing." } },
    { "@type": "Question", "name": "Can you work with our existing team?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer flexible engagement models including dedicated teams, staff augmentation, and project-based collaboration." } },
    { "@type": "Question", "name": "What industries do you serve?", "acceptedAnswer": { "@type": "Answer", "text": "We serve diverse industries including healthcare, fintech, e-commerce, logistics, education, and enterprise." } }
  ]
};

const FAQPage = () => {
  return (
    <>
      <Helmet>
        <title>FAQ | TechPivot Software & AI Development Services</title>
        <meta name="description" content="Answers to common questions about TechPivot's services, engagement models, pricing, development process, technology stack, timelines and post-launch support." />
        <meta name="keywords" content="software development FAQ, IT services questions, software development process, engagement models, software development cost, AI development FAQ, project timelines" />
        <link rel="canonical" href="https://techpivot.in/faq" />
        <meta property="og:title" content="FAQ | TechPivot Software & AI Development Services" />
        <meta property="og:description" content="Answers to common questions about TechPivot's services, engagement models, pricing, development process, technology stack, timelines and post-launch support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techpivot.in/faq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ | TechPivot Software & AI Development Services" />
        <meta name="twitter:description" content="Answers to common questions about TechPivot's services, engagement models, pricing, development process, technology stack, timelines and post-launch support." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FAQPage;
