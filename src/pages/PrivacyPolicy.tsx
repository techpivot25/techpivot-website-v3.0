import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const PrivacyPolicy = () => {
  const lastUpdated = "August 21, 2026";

  return (
    <>
      <Helmet>
        <title>Privacy Policy | TechPivot Technologies</title>
        <meta
          name="description"
          content="Read TechPivot Technologies & Consulting's Privacy Policy to understand how we collect, use, and protect your personal information."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://techpivot.in/privacy-policy" />
      </Helmet>

      <Header />

      <main>
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-surface-dark text-surface-dark-foreground">
          <div className="container px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">
                Legal
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
              <p className="text-surface-dark-foreground/70">Last updated: {lastUpdated}</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container px-6 lg:px-12">
            <AnimatedSection animation="fadeUp" className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary">
              <p>
                TechPivot Technologies &amp; Consulting ("TechPivot," "we," "us," or "our") respects your
                privacy and is committed to protecting the personal information you share with us. This
                Privacy Policy explains what information we collect, how we use it, and the choices you
                have regarding your information when you visit techpivot.in (the "Site") or interact with
                our services.
              </p>

              <h2>1. Information We Collect</h2>
              <p>We may collect the following categories of information:</p>
              <ul>
                <li>
                  <strong>Information you provide directly</strong> — such as your name, email address,
                  phone number, company name, project details, and any files you upload when you submit a
                  contact form, request a consultation, book a call, or chat with our AI assistant.
                </li>
                <li>
                  <strong>Automatically collected information</strong> — such as IP address, approximate
                  location (country/region/city), browser type, device type, pages visited, referring
                  website or campaign source (for example, a LinkedIn or WhatsApp link), and timestamps of
                  your visit, collected through standard web analytics and cookies.
                </li>
                <li>
                  <strong>Communications</strong> — records of correspondence if you contact us via email,
                  our contact form, or our chatbot, including the content of your messages.
                </li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to inquiries and provide the services you request;</li>
                <li>Schedule and manage consultations booked through our calendar tools;</li>
                <li>Operate, maintain, and improve our website, chatbot, and blog content;</li>
                <li>Understand how visitors use our Site (e.g., which blog posts or services are most viewed, and from which regions or referral sources) so we can improve our content and offerings;</li>
                <li>Send you information you have requested, such as follow-ups on a submitted inquiry;</li>
                <li>Comply with legal obligations and protect against fraudulent or unauthorized activity.</li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>

              <h2>3. Cookies and Similar Technologies</h2>
              <p>
                Our Site may use cookies and similar technologies to remember your preferences (such as
                light/dark theme or language), analyze site traffic, and understand engagement with our
                content. You can control cookies through your browser settings; disabling cookies may
                affect certain features of the Site.
              </p>

              <h2>4. Third-Party Services</h2>
              <p>
                We use trusted third-party service providers to operate parts of our Site and business,
                including but not limited to:
              </p>
              <ul>
                <li>Cloud infrastructure and database hosting for storing form submissions and blog content;</li>
                <li>Email delivery services to send and receive inquiries submitted through our contact form;</li>
                <li>Calendar and scheduling tools (such as Cal.com) to manage consultation bookings;</li>
                <li>AI service providers that power our website chatbot;</li>
                <li>Analytics and IP-geolocation services used to understand aggregate visitor trends.</li>
              </ul>
              <p>
                These providers process data on our behalf and are contractually or contextually limited in
                how they may use your information.
              </p>

              <h2>5. Data Retention</h2>
              <p>
                We retain personal information for as long as necessary to fulfill the purposes described
                in this Policy, respond to your inquiries, maintain business records, and comply with legal
                obligations. You may request deletion of your information at any time as described in
                Section 7 below.
              </p>

              <h2>6. Data Security</h2>
              <p>
                We implement reasonable technical and organizational measures designed to protect your
                information from unauthorized access, disclosure, alteration, or destruction. However, no
                method of transmission over the internet or electronic storage is completely secure, and we
                cannot guarantee absolute security.
              </p>

              <h2>7. Your Rights and Choices</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul>
                <li>Request access to the personal information we hold about you;</li>
                <li>Request correction of inaccurate or incomplete information;</li>
                <li>Request deletion of your personal information;</li>
                <li>Object to or restrict certain processing of your information;</li>
                <li>Withdraw consent where processing is based on consent.</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the details in Section 10 below.
              </p>

              <h2>8. Children's Privacy</h2>
              <p>
                Our Site and services are not directed to individuals under the age of 18, and we do not
                knowingly collect personal information from children.
              </p>

              <h2>9. International Data Transfers</h2>
              <p>
                As we operate globally, your information may be transferred to and processed in countries
                other than your own, including India and other jurisdictions where our service providers
                operate. We take steps to ensure appropriate safeguards are in place for such transfers.
              </p>

              <h2>10. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or how we handle your personal information,
                please contact us at{" "}
                <a href="mailto:info@techpivot.in">info@techpivot.in</a> or through our{" "}
                <a href="/contact">Contact page</a>.
              </p>

              <h2>11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or
                for legal, operational, or regulatory reasons. We will post the updated policy on this page
                with a revised "Last updated" date.
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
