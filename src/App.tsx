import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Eagerly load the Index page for fast initial render
import Index from "./pages/Index";

// ✅ ADD THIS LINE - Import Portfolio
import Portfolio from "./pages/Portfolio";

// Lazy load all other pages to reduce initial bundle size
const Contact = lazy(() => import("./pages/Contact"));
const Technologies = lazy(() => import("./pages/Technologies"));
const Capabilities = lazy(() => import("./pages/Capabilities"));
const AdvancedDefenseIntelligence = lazy(() => import("./pages/capabilities/AdvancedDefenseIntelligence"));
const AlgorithmicInfrastructureOptimization = lazy(() => import("./pages/capabilities/AlgorithmicInfrastructureOptimization"));
const CustomAlgorithmDevelopment = lazy(() => import("./pages/capabilities/CustomAlgorithmDevelopment"));
const CybersecurityAdvisoryServices = lazy(() => import("./pages/capabilities/CybersecurityAdvisoryServices"));
const SalesBusinessDevelopment = lazy(() => import("./pages/capabilities/SalesBusinessDevelopment"));
const Careers = lazy(() => import("./pages/Careers"));
const About = lazy(() => import("./pages/About"));
const Leadership = lazy(() => import("./pages/Leadership"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AdminAnalytics = lazy(() => import("./pages/admin/AdminAnalytics"));
const BlogEditor = lazy(() => import("./pages/admin/BlogEditor"));
const ResetPassword = lazy(() => import("./pages/admin/ResetPassword"));
const AgenticAI = lazy(() => import("./pages/services/AgenticAI"));
const GenerativeAI = lazy(() => import("./pages/services/GenerativeAI"));
const SaaSPlatform = lazy(() => import("./pages/services/SaaSPlatform"));
const WebDevelopment = lazy(() => import("./pages/services/WebDevelopment"));
const MobileApp = lazy(() => import("./pages/services/MobileApp"));
const CloudSecurity = lazy(() => import("./pages/services/CloudSecurity"));
const CustomSoftware = lazy(() => import("./pages/services/CustomSoftware"));
const StaffAugmentation = lazy(() => import("./pages/services/StaffAugmentation"));
const IoT = lazy(() => import("./pages/services/IoT"));
const Consultancy = lazy(() => import("./pages/services/Consultancy"));
const FAQPage = lazy(() => import("./pages/FAQ"));
const ProductConcept = lazy(() => import("./pages/products/Concept"));
const ProductSolution = lazy(() => import("./pages/products/Solution"));
const ProductCustomDev = lazy(() => import("./pages/products/CustomDev"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AnimationsDemo = lazy(() => import("./pages/AnimationsDemo"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopOnNavigate from "./components/ScrollToTopOnNavigate";
import ChatBot from "./components/ChatBot";

const queryClient = new QueryClient();

// Routes (no page transition animation)
const AppRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<div className="min-h-screen" />}>
          <Routes location={location}>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/analytics" element={<AdminAnalytics />} />
            <Route path="/admin/blog/:id" element={<BlogEditor />} />
            <Route path="/admin/reset-password" element={<ResetPassword />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/capabilities/advanced-defense-intelligence" element={<AdvancedDefenseIntelligence />} />
            <Route path="/capabilities/algorithmic-infrastructure-optimization" element={<AlgorithmicInfrastructureOptimization />} />
            <Route path="/capabilities/custom-algorithm-development" element={<CustomAlgorithmDevelopment />} />
            <Route path="/capabilities/cybersecurity-advisory-services" element={<CybersecurityAdvisoryServices />} />
            <Route path="/capabilities/sales-business-development" element={<SalesBusinessDevelopment />} />
            <Route path="/services/agentic-ai" element={<AgenticAI />} />
            <Route path="/services/generative-ai" element={<GenerativeAI />} />
            <Route path="/services/saas-platform" element={<SaaSPlatform />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-app" element={<MobileApp />} />
            <Route path="/services/cloud-security" element={<CloudSecurity />} />
            <Route path="/services/custom-software" element={<CustomSoftware />} />
            <Route path="/services/staff-augmentation" element={<StaffAugmentation />} />
            <Route path="/services/iot" element={<IoT />} />
            <Route path="/services/consultancy" element={<Consultancy />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/products/concept" element={<ProductConcept />} />
            <Route path="/products/solution" element={<ProductSolution />} />
            <Route path="/products/custom-dev" element={<ProductCustomDev />} />
            <Route path="/animations" element={<AnimationsDemo />} />
            <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTopOnNavigate />
          <AppRoutes />
          <WhatsAppButton />
          <ScrollToTop />
          <ChatBot />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
