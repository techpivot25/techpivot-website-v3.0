export interface JobPosting {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
}

export const openPositions: JobPosting[] = [
  {
    slug: "senior-full-stack-developer",
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / Chandigarh",
    type: "Full-time",
    summary:
      "We're looking for a Senior Full Stack Developer to design, build, and ship production features across our client platforms — from database schema through to polished UI. You'll work closely with product and design on real, live systems used by enterprise customers daily.",
    responsibilities: [
      "Design and build full-stack features across React/TypeScript frontends and Node.js or similar backends",
      "Own features end-to-end: data modeling, API design, UI implementation, and deployment",
      "Review code, mentor junior engineers, and help set technical direction for the team",
      "Work directly with product and design to translate requirements into shipped features",
      "Debug and resolve production issues, including performance and scaling problems",
    ],
    requirements: [
      "5+ years building production web applications",
      "Strong proficiency in React, TypeScript, and modern frontend tooling",
      "Experience designing and building REST or GraphQL APIs",
      "Comfortable with relational databases and writing efficient queries",
      "Clear written communication for a remote-first, distributed team",
    ],
    niceToHave: [
      "Experience with multi-tenant SaaS architecture",
      "Familiarity with CI/CD pipelines and cloud deployment (AWS, GCP, or similar)",
    ],
  },
  {
    slug: "ai-ml-engineer",
    title: "AI/ML Engineer",
    department: "AI Research",
    location: "Remote / Chandigarh",
    type: "Full-time",
    summary:
      "Join our AI Research team building agentic AI systems and generative AI solutions for enterprise clients. You'll work on everything from LLM fine-tuning and RAG pipelines to production-grade agent orchestration.",
    responsibilities: [
      "Design, train, and evaluate machine learning models for client-facing AI products",
      "Build and optimize RAG pipelines and retrieval systems for enterprise knowledge bases",
      "Develop and deploy autonomous AI agents for workflow automation",
      "Collaborate with engineering to productionize research prototypes",
      "Stay current with the fast-moving AI/ML landscape and evaluate new techniques for client use cases",
    ],
    requirements: [
      "3+ years of hands-on ML/AI engineering experience",
      "Strong Python skills and experience with PyTorch or TensorFlow",
      "Practical experience with LLMs — prompting, fine-tuning, or RAG architectures",
      "Understanding of ML deployment and serving infrastructure",
      "Ability to explain technical tradeoffs to non-technical stakeholders",
    ],
    niceToHave: [
      "Experience with agent frameworks (LangChain, LlamaIndex, or similar)",
      "Published research or open-source contributions in NLP/ML",
    ],
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    summary:
      "We're hiring a Product Designer to shape the user experience across our client platforms — from enterprise SaaS dashboards to consumer-facing booking and marketplace apps. You'll own design from early concept through to shipped, polished interfaces.",
    responsibilities: [
      "Design end-to-end user flows for web and mobile products across multiple client industries",
      "Create wireframes, prototypes, and high-fidelity UI designs in Figma",
      "Partner with engineering to ensure designs are implemented accurately and performantly",
      "Conduct or synthesize user research to inform design decisions",
      "Maintain and evolve design systems across projects",
    ],
    requirements: [
      "3+ years of product design experience, with a portfolio showing shipped work",
      "Strong proficiency in Figma and modern design workflows",
      "Experience designing for both web and mobile platforms",
      "Understanding of accessibility and responsive design principles",
      "Comfortable presenting and defending design decisions to stakeholders",
    ],
    niceToHave: [
      "Experience designing for multi-tenant SaaS or marketplace products",
      "Basic familiarity with HTML/CSS to bridge design and engineering",
    ],
  },
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / Chandigarh",
    type: "Full-time",
    summary:
      "We're looking for a DevOps Engineer to own infrastructure, deployment pipelines, and reliability across our client platforms. You'll help our engineering teams ship faster and more safely, and keep production systems fast, secure, and available.",
    responsibilities: [
      "Design and maintain CI/CD pipelines across multiple client projects",
      "Manage cloud infrastructure (AWS/GCP/Azure) using infrastructure-as-code",
      "Monitor production systems and respond to incidents, with a focus on prevention",
      "Implement security best practices across infrastructure and deployment pipelines",
      "Optimize infrastructure cost and performance as client platforms scale",
    ],
    requirements: [
      "3+ years of DevOps/SRE experience in production environments",
      "Strong experience with at least one major cloud provider (AWS, GCP, or Azure)",
      "Proficiency with infrastructure-as-code tools (Terraform, CloudFormation, or similar)",
      "Experience with containerization (Docker) and orchestration (Kubernetes or similar)",
      "Solid understanding of networking, security, and monitoring/observability practices",
    ],
    niceToHave: [
      "Experience supporting multiple client environments simultaneously",
      "Familiarity with database administration and backup/recovery practices",
    ],
  },
  {
    slug: "business-development-manager",
    title: "Business Development Manager",
    department: "Sales",
    location: "Remote / India",
    type: "Full-time",
    summary:
      "We're hiring a Business Development Manager to grow TechPivot's client base across our core service areas — AI, SaaS development, and custom software. You'll own the full sales cycle, from prospecting through to closed deals.",
    responsibilities: [
      "Identify and qualify new business opportunities across target industries",
      "Build and manage a pipeline of enterprise prospects from outreach through close",
      "Understand client needs and position TechPivot's services (Agentic AI, SaaS, custom software, etc.) as the right fit",
      "Collaborate with technical teams to shape proposals and scope engagements",
      "Represent TechPivot at industry events and build long-term client relationships",
    ],
    requirements: [
      "3+ years of B2B sales or business development experience, ideally in technology/software services",
      "Track record of meeting or exceeding sales targets",
      "Strong communication and relationship-building skills",
      "Comfortable discussing technical concepts with both technical and non-technical stakeholders",
      "Self-directed and effective working remotely",
    ],
    niceToHave: [
      "Experience selling AI, SaaS, or custom software development services",
      "Existing network within target industries (enterprise, defense, government)",
    ],
  },
];

export const getJobBySlug = (slug: string): JobPosting | undefined =>
  openPositions.find((job) => job.slug === slug);
