import { Helmet } from "react-helmet-async";
import { useParams, Link, Navigate } from "react-router-dom";
import { useState, useRef } from "react";
import { ArrowLeft, Briefcase, MapPin, Clock, Upload, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { getJobBySlug } from "@/data/jobs";

interface FormErrors {
  name?: string;
  email?: string;
  resume?: string;
}

const JobDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const job = slug ? getJobBySlug(slug) : undefined;

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", coverNote: "" });
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(",")[1]);
      };
      reader.onerror = reject;
    });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (formData.name.trim().length > 100) {
      newErrors.name = "Name must be less than 100 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!resume) {
      newErrors.resume = "Please attach your resume";
    } else if (resume.size > 10 * 1024 * 1024) {
      newErrors.resume = "Resume must be under 10MB";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
      if (errors.resume) setErrors({ ...errors, resume: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      const fileContent = resume ? await fileToBase64(resume) : null;

      const { error } = await supabase.functions.invoke("send-job-application", {
        body: {
          jobTitle: job.title,
          jobSlug: job.slug,
          department: job.department,
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          coverNote: formData.coverNote.trim(),
          fileName: resume?.name || null,
          fileContent,
          fileType: resume?.type || null,
        },
      });

      if (error) {
        console.error("Error submitting application:", error);
        toast.error("Failed to submit your application. Please try again later.");
        return;
      }

      setSubmitted(true);
      toast.success("Application submitted! Check your email for confirmation.");
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const canonicalUrl = `https://techpivot.in/careers/${job.slug}`;
  const pageTitle = `${job.title} | Careers at TechPivot`;
  const pageDescription = `${job.summary.slice(0, 150)}${job.summary.length > 150 ? "…" : ""}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`${job.title} jobs, ${job.department} careers, TechPivot careers, ${job.location} jobs`} />
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

        <main>
          <section className="pt-32 pb-14 md:pt-36 md:pb-20 lg:pt-40 lg:pb-28">
            <div className="container px-6 lg:px-12 max-w-5xl mx-auto">
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all openings
              </Link>

              <AnimatedSection animation="fadeUp">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  {job.title}
                </h1>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Briefcase className="w-4 h-4" />
                    {job.department}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-lg text-xs font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {job.type}
                  </span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  {job.summary}
                </p>
              </AnimatedSection>

              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                {/* Job description */}
                <AnimatedSection animation="fadeUp" delay={100}>
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-xl font-bold text-foreground mb-4">What you'll do</h2>
                      <ul className="space-y-2.5">
                        {job.responsibilities.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-muted-foreground">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-foreground mb-4">What you'll need</h2>
                      <ul className="space-y-2.5">
                        {job.requirements.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-muted-foreground">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {job.niceToHave && job.niceToHave.length > 0 && (
                      <div>
                        <h2 className="text-xl font-bold text-foreground mb-4">Nice to have</h2>
                        <ul className="space-y-2.5">
                          {job.niceToHave.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-muted-foreground">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </AnimatedSection>

                {/* Application form */}
                <AnimatedSection animation="fadeUp" delay={200}>
                  <div id="apply" className="p-6 md:p-8 rounded-2xl bg-secondary/10 border border-border">
                    {submitted ? (
                      <div className="text-center py-10">
                        <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-foreground mb-2">Application received</h3>
                        <p className="text-muted-foreground">
                          Thanks for applying to {job.title}. We've sent a confirmation to your email —
                          our team will review your application and reach out if there's a fit.
                        </p>
                      </div>
                    ) : (
                      <>
                        <h2 className="text-xl font-bold text-foreground mb-6">Apply for this role</h2>
                        <form onSubmit={handleSubmit} className="space-y-5">
                          <div>
                            <Input
                              placeholder="Full name"
                              value={formData.name}
                              onChange={(e) => {
                                setFormData({ ...formData, name: e.target.value });
                                if (errors.name) setErrors({ ...errors, name: undefined });
                              }}
                              className={`border-border bg-card ${errors.name ? "border-destructive" : ""}`}
                              disabled={isSubmitting}
                            />
                            {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                          </div>

                          <div>
                            <Input
                              type="email"
                              placeholder="Email address"
                              value={formData.email}
                              onChange={(e) => {
                                setFormData({ ...formData, email: e.target.value });
                                if (errors.email) setErrors({ ...errors, email: undefined });
                              }}
                              className={`border-border bg-card ${errors.email ? "border-destructive" : ""}`}
                              disabled={isSubmitting}
                            />
                            {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                          </div>

                          <div>
                            <Input
                              type="tel"
                              placeholder="Phone number (optional)"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="border-border bg-card"
                              disabled={isSubmitting}
                            />
                          </div>

                          <div>
                            <Textarea
                              placeholder="Anything you'd like us to know (optional)"
                              rows={4}
                              value={formData.coverNote}
                              onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                              className="border-border bg-card resize-none"
                              disabled={isSubmitting}
                            />
                          </div>

                          <div>
                            <input
                              type="file"
                              ref={fileInputRef}
                              onChange={handleFileChange}
                              className="hidden"
                              accept=".pdf,.doc,.docx"
                            />
                            <div
                              onClick={() => fileInputRef.current?.click()}
                              className={`h-12 border border-dashed rounded-md bg-card flex items-center justify-center gap-2 cursor-pointer hover:border-primary/50 transition-colors ${
                                errors.resume ? "border-destructive" : "border-border"
                              }`}
                            >
                              <Upload className="w-4 h-4 text-muted-foreground" />
                              <span className="text-muted-foreground text-sm">
                                {resume ? resume.name : "Upload Resume (PDF or Word, required)"}
                              </span>
                            </div>
                            {errors.resume && <p className="text-sm text-destructive mt-1">{errors.resume}</p>}
                          </div>

                          <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
                            {isSubmitting ? (
                              <>
                                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                                Submitting...
                              </>
                            ) : (
                              "Submit Application"
                            )}
                          </Button>
                        </form>
                      </>
                    )}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default JobDetail;
