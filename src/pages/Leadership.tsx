import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import praveenImg from "@/assets/praveen-bhatia.jpg";
import shawnImg from "@/assets/shawn-james.jpg";
import robertImg from "@/assets/robert-sanchez.jpg";
import manishImg from "@/assets/manish-jain.jpg";

const leaders = [
  {
    name: "Praveen Bhatia",
    role: "Founder & CEO",
    bio: "Two decades of leading business transformation and industry-standard project management. Helping organizations scale through high-impact automation and custom, reliable technology. Empowering modern enterprises with next-generation Agentic AI and autonomous intelligence workflows.",
    linkedin: "https://www.linkedin.com/in/bhatiapraveen/",
    photo: praveenImg,
  },
  {
    name: "Shawn (W) James",
    role: "Chief Technology Officer",
    bio: "Senior Technology Leader and Strategic Advisor with over 25 years of experience building the digital backbone for global leaders in SaaS, Telecommunications, & E-commerce. Specialize in transforming complex technical environments into streamlined, high-availability assets.",
    linkedin: "https://www.linkedin.com/in/shawn-w-james/",
    photo: shawnImg,
  },
  {
    name: "Robert W. Sanchez",
    role: "VP, Legal & Compliance",
    bio: "Robert W. Sanchez is a licensed attorney and media innovation executive. He provides comprehensive legal counsel to startups, small businesses, and estate planning clients. As the founder of StoriDots, he built an audio storytelling platform for physical installations.",
    linkedin: "https://www.linkedin.com/in/robertwsanchez/",
    photo: robertImg,
  },
];

const boardMembers = [
  {
    name: "MANISHH JAIIN",
    role: "Board Member & VP Sales",
    bio: "Enterprise Sales Leader and IT Infrastructure Specialist with 22+ years of experience driving networking, optical connectivity, and data center business. Building CXO relationships, accelerating revenue growth, leading strategic market expansion, and delivering customer-centric technology solutions.",
    linkedin: "https://www.linkedin.com/in/manishjain08/",
    photo: manishImg,
  },
];

const MemberCard = ({ leader, index }: { leader: typeof leaders[0]; index: number }) => (
  <AnimatedSection key={leader.name} animation="fadeUp" delay={index * 100} className="h-full">
    <motion.div
      className="h-full flex flex-col p-6 bg-[#f5f5f7] dark:bg-card border border-border rounded-2xl transition-all duration-500"
      whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
    >
      <div className="w-24 h-24 rounded-xl overflow-hidden mb-4 bg-primary/10 flex items-center justify-center flex-shrink-0">
        {leader.photo ? (
          <img
            src={leader.photo}
            alt={leader.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <span className="text-4xl font-bold text-primary">
            {leader.name.split(" ").map((n) => n[0]).join("")}
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold text-foreground">{leader.name}</h3>
      <p className="text-sm font-medium text-primary mb-3">{leader.role}</p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-justify">{leader.bio}</p>
      <div className="mt-auto pt-2">
        <a
          href={leader.linkedin || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-background/70 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
          aria-label={`${leader.name} on LinkedIn`}
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  </AnimatedSection>
);

const Leadership = () => {
  return (
    <>
      <Helmet>
        <title>Leadership Team | TechPivot Technologies</title>
        <meta name="description" content="Meet the leadership team behind TechPivot — technology, sales and delivery leaders driving AI, software and infrastructure transformation for global clients." />
        <meta name="keywords" content="TechPivot leadership, management team, technology leadership, software company founders, executive team, enterprise technology leaders" />
        <link rel="canonical" href="https://techpivot.in/leadership" />
        <meta property="og:title" content="Leadership Team | TechPivot Technologies" />
        <meta property="og:description" content="Meet the leadership team behind TechPivot — technology, sales and delivery leaders driving AI, software and infrastructure transformation for global clients." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techpivot.in/leadership" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Leadership Team | TechPivot Technologies" />
        <meta name="twitter:description" content="Meet the leadership team behind TechPivot — technology, sales and delivery leaders driving AI, software and infrastructure transformation for global clients." />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-surface-dark text-surface-dark-foreground relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 border border-surface-dark-foreground/10 rounded-full" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-primary/20 rounded-full" />
          <div className="container px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block"
              >
                LEADERSHIP TEAM
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                The People Behind TechPivot
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-surface-dark-foreground/70"
              >
                A team of engineers, strategists and operators guiding our mission to deliver ambitious AI initiatives.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 lg:py-28">
          <div className="container px-6 lg:px-12">
            <AnimatedSection animation="fadeUp" className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Executive Leadership</h2>
              <p className="text-muted-foreground mt-3 text-lg">The executives driving TechPivot's vision and growth.</p>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {leaders.map((leader, index) => (
                <MemberCard key={leader.name} leader={leader} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Board Members */}
        <section className="py-20 lg:py-28 bg-muted/40">
          <div className="container px-6 lg:px-12">
            <AnimatedSection animation="fadeUp" className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Advisory Board</h2>
              <p className="text-muted-foreground mt-3 text-lg">Experienced advisors and board members shaping our strategic direction.</p>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-sm lg:max-w-none">
              {boardMembers.map((member, index) => (
                <MemberCard key={member.name} leader={member} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Leadership;
