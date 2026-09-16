import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const TermsAndConditions = () => {
  const lastUpdated = "August 21, 2026";

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | TechPivot Technologies</title>
        <meta
          name="description"
          content="Read the Terms and Conditions governing your use of TechPivot Technologies & Consulting's website and services."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://techpivot.in/terms-and-conditions" />
      </Helmet>

      <Header />

      <main>
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-surface-dark text-surface-dark-foreground">
          <div className="container px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">
                Legal
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Terms &amp; Conditions</h1>
              <p className="text-surface-dark-foreground/70">Last updated: {lastUpdated}</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container px-6 lg:px-12">
            <AnimatedSection animation="fadeUp" className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary">
              <p>
                These Terms &amp; Conditions ("Terms") govern your access to and use of the website located
                at techpivot.in (the "Site") and any services offered by TechPivot Technologies &amp;
                Consulting ("TechPivot," "we," "us," or "our"). By accessing or using the Site, you agree to
                be bound by these Terms. If you do not agree, please do not use the Site.
              </p>

              <h2>1. Use of the Site</h2>
              <p>
                You may use the Site only for lawful purposes and in accordance with these Terms. You agree
                not to:
              </p>
              <ul>
                <li>Use the Site in any way that violates applicable local, national, or international law;</li>
                <li>Attempt to gain unauthorized access to any part of the Site, our systems, or related networks;</li>
                <li>Interfere with or disrupt the operation of the Site or servers/networks connected to it;</li>
                <li>Use automated means (bots, scrapers) to access the Site without our prior written consent;</li>
                <li>Submit false, misleading, or fraudulent information through any form on the Site.</li>
              </ul>

              <h2>2. Intellectual Property</h2>
              <p>
                All content on the Site — including text, graphics, logos, icons, images, videos, and
                software — is the property of TechPivot or its licensors and is protected by applicable
                intellectual property laws. Except as expressly permitted, you may not reproduce, distribute,
                modify, or create derivative works from any content on the Site without our prior written
                consent.
              </p>

              <h2>3. Services and Proposals</h2>
              <p>
                Descriptions of our services on the Site are provided for general informational purposes.
                Any specific engagement, scope of work, pricing, or deliverables will be governed by a
                separate written agreement or statement of work signed by both parties, which will take
                precedence over any general description found on the Site.
              </p>

              <h2>4. Consultation Booking and Contact Forms</h2>
              <p>
                When you submit a contact form, book a consultation through our calendar tool, or interact
                with our chatbot, you agree to provide accurate and complete information. Submitting an
                inquiry does not create a contractual obligation on either party until a separate agreement
                is executed.
              </p>

              <h2>5. Third-Party Links and Services</h2>
              <p>
                The Site may contain links to third-party websites or make use of third-party tools
                (including scheduling and communication tools) that are not owned or controlled by
                TechPivot. We are not responsible for the content, privacy policies, or practices of any
                third-party websites or services.
              </p>

              <h2>6. Disclaimer of Warranties</h2>
              <p>
                The Site and its content are provided "as is" and "as available" without warranties of any
                kind, either express or implied, including but not limited to implied warranties of
                merchantability, fitness for a particular purpose, or non-infringement. We do not warrant
                that the Site will be uninterrupted, error-free, or free of harmful components.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, TechPivot shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages arising out of or related to your
                use of, or inability to use, the Site, even if we have been advised of the possibility of
                such damages.
              </p>

              <h2>8. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless TechPivot, its officers, employees, and agents from
                any claims, damages, liabilities, and expenses arising out of your violation of these Terms
                or your misuse of the Site.
              </p>

              <h2>9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India, without
                regard to its conflict of law principles. Any disputes arising under these Terms shall be
                subject to the exclusive jurisdiction of the courts located in India.
              </p>

              <h2>10. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. Any changes will be posted on this page with a
                revised "Last updated" date. Your continued use of the Site after changes are posted
                constitutes your acceptance of the revised Terms.
              </p>

              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at{" "}
                <a href="mailto:info@techpivot.in">info@techpivot.in</a> or through our{" "}
                <a href="/contact">Contact page</a>.
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TermsAndConditions;
