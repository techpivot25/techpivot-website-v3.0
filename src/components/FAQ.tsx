import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What services does TechPivot offer?",
    answer: "We offer a comprehensive suite of digital services including custom software development, AI & machine learning solutions, mobile app development, cloud infrastructure, SaaS platform development, and IT staff augmentation. Our team specializes in building scalable, enterprise-grade solutions tailored to your business needs."
  },
  {
    question: "What is Algorithmic Infrastructure Optimization?",
    answer: "Algorithmic Infrastructure Optimization is advanced mathematics applied at the kernel and transport layer to make software run significantly faster on existing hardware, without rewriting application code. It turns infrastructure you already own into a higher-efficiency system — validated against industry-standard benchmarks."
  },
  {
    question: "Does TechPivot work with defense and government clients?",
    answer: "Yes. Our Advanced Defense & Intelligence Solutions capability supports defense, government, and intelligence partners with mission-critical software, secure data systems, and algorithmic decision support built for high-security environments."
  },
  {
    question: "Can TechPivot build a custom algorithm for our specific problem?",
    answer: "Yes. Our Custom Algorithm Development capability designs novel mathematical models and algorithms from first principles when off-the-shelf tooling can't meet a partner's accuracy, throughput, or convergence requirements."
  },
  {
    question: "Does TechPivot offer cybersecurity advisory services?",
    answer: "Yes. We provide security architecture review, compliance readiness support, and cloud/infrastructure hardening advisory to help organizations assess and improve their security posture."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. A simple MVP can take 4-8 weeks, while enterprise solutions may require 3-6 months. During our discovery phase, we provide detailed timelines and milestones to ensure transparency throughout the development process."
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile methodology with iterative development cycles. Our process includes discovery & planning, UI/UX design, development sprints, quality assurance, deployment, and ongoing support. You'll have regular check-ins and access to project updates throughout."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Absolutely. We offer comprehensive maintenance and support packages including bug fixes, security updates, performance optimization, and feature enhancements. Our team ensures your application runs smoothly and evolves with your business needs."
  },
  {
    question: "What technologies do you work with?",
    answer: "Our tech stack includes React, React Native, Node.js, Python, AWS, Google Cloud, Azure, PostgreSQL, MongoDB, and more. We select the best technologies based on your project requirements, scalability needs, and long-term maintenance considerations."
  },
  {
    question: "How do you ensure project quality?",
    answer: "Quality is embedded in our process. We implement code reviews, automated testing, CI/CD pipelines, and rigorous QA protocols. Our projects undergo multiple testing phases including unit, integration, and user acceptance testing before deployment."
  },
  {
    question: "Can you work with our existing team?",
    answer: "Yes, we offer flexible engagement models. Whether you need a dedicated team, staff augmentation, or project-based collaboration, we seamlessly integrate with your existing workflows, tools, and communication channels."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve diverse industries including healthcare, fintech, e-commerce, logistics, education, and enterprise. Our cross-industry experience allows us to bring best practices and innovative solutions to every project."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fadeUp" className="max-w-3xl mb-16 -mt-[50px]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Frequently Asked
            <br />
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about working with us. Can't find the answer you're looking for? Reach out to our team.
          </p>
        </AnimatedSection>

        {/* Accordion */}
        <AnimatedSection animation="fadeUp" delay={100} className="max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-border/50 py-2"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-semibold text-foreground hover:text-primary hover:no-underline transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fadeUp" delay={200} className="mt-16 pt-16 border-t border-border/50 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Still have questions?</h3>
              <p className="text-muted-foreground">Our team is here to help you get started.</p>
            </div>
            <Button variant="primary" size="lg" className="group" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;
