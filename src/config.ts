// Site configuration
export const SITE_TITLE = 'Gaber Youssef | AI Strategy & Implementation Partner';
export const SITE_DESCRIPTION = 'I help companies turn AI strategy into production systems, with experience across consumer goods, healthcare, financial services, and high-growth startups.';
export const GENERATE_SLUG_FROM_TITLE = true;
export const TRANSITION_API = true;

// Personal info
export const PERSONAL = {
  name: 'Gaber Youssef',
  title: 'Principal AI Architect (Hands-on)',
  tagline: 'Your Fractional Head of AI',
  email: 'contact@gaberyoussef.dev',
  callUrl: 'mailto:contact@gaberyoussef.dev?subject=Arrange%20a%20strategy%20call',
  linkedIn: 'https://linkedin.com/in/gaberyoussef',
  upwork: 'https://www.upwork.com/freelancers/gyoussef',
};

// Experience data - OUTCOME FOCUSED
export const EXPERIENCES = [
  {
    role: 'Lead AI Architect',
    company: 'PiperX',
    caseStudyUrl: '/work/piperx/',
    companyUrl: 'https://piperx.ai',
    period: '2024 - Present',
    outcome: 'Reduced analysis time from weeks to hours',
    story: 'Created an AI platform that automates complex data analysis for enterprise teams across consumer goods, financial services, and healthcare.',
    metric: '10x',
    metricLabel: 'faster insights',
  },
  {
    role: 'Head of AI',
    company: 'FX1 Sports',
    caseStudyUrl: '/work/fx1/',
    companyUrl: 'https://fx1.io',
    period: '2023 - 2024',
    outcome: 'From idea to $350K in Google startup support',
    story: 'Took the founder\'s concept and built the AI product that got FX1 selected for Google\'s Start-up Program with $350K in startup support — and fast-tracked into their elite "potential unicorn" cohort.',
    metric: '$350K',
    metricLabel: 'Google startup support',
  },
  {
    role: 'Senior AI Engineer',
    company: 'Rosalyn.ai',
    caseStudyUrl: '/work/rosalyn/',
    companyUrl: 'https://www.rosalyn.ai',
    period: '2021 - 2023',
    outcome: 'Scaled to 10K+ concurrent users',
    story: 'Engineered the AI backbone for an exam proctoring platform used by major universities and certification bodies worldwide.',
    metric: '10K+',
    metricLabel: 'users at scale',
  },
];

// Services - CLIENT BENEFIT FOCUSED
export const SERVICES = [
  {
    title: 'Strategic Partnership',
    subtitle: 'Fractional Head of AI',
    icon: 'partnership',
    description: 'I become your AI leader on retainer. Together, we\'ll define your AI roadmap, build the right team, and execute with precision.',
    benefits: [
      'AI strategy aligned to business goals',
      'Hiring & team building guidance',
      'Direct access — no middle layers',
      'Flexible commitment that scales',
    ],
    ideal: 'Series A+ startups building AI-first products',
  },
  {
    title: 'Full Build',
    subtitle: 'From Idea to Production',
    icon: 'build',
    description: 'Hand me your AI challenge. I\'ll architect, build, and deliver a production-ready solution — then hand you the keys with full documentation.',
    benefits: [
      'End-to-end delivery',
      'Production-grade quality',
      'Complete knowledge transfer',
      'Ongoing support available',
    ],
    ideal: 'Companies with a clear AI use case ready to execute',
  },
  {
    title: 'AI Audit',
    subtitle: 'Optimize What You Have',
    icon: 'audit',
    description: 'Hitting a wall? I\'ll review your existing AI systems, identify bottlenecks, and give you a clear path to scale — with cost savings along the way.',
    benefits: [
      'Performance optimization',
      'Cost reduction strategies',
      'Scalability roadmap',
      'Quick wins identified',
    ],
    ideal: 'Teams spending too much on AI with diminishing returns',
  },
];

// Results/Social proof
export const RESULTS = [
  { metric: '$2M+', label: 'Client value delivered', sublabel: 'in AI projects' },
  { metric: '15+', label: 'Production AI systems', sublabel: 'shipped & scaling' },
  { metric: '8+', label: 'Years in AI', sublabel: 'before ChatGPT made it cool' },
];

// Review excerpts and ratings checked against the public Upwork work history, 6 September 2026.
// Links open completed work history, with a contract text fragment where supported.
const upworkReviewUrl = (project: string) =>
  `${PERSONAL.upwork}#jobs_completed_desktop:~:text=${encodeURIComponent(project)}`;

export const TESTIMONIALS = [
  {
    quote: "I can't say enough about his skills, attitude, kindness, and willingness to do the work.",
    author: 'Trent Allan',
    company: 'COO & Co-Founder, FX1 Sports',
    project: 'Pose estimation & deepsort project',
    year: '2024',
    rating: '5.0',
    source: upworkReviewUrl('Pose estimation & deepsort project'),
  },
  {
    quote: "He brings insight, best practices, and great communication to the table.",
    author: 'Richard Lusk',
    company: 'Founder, Richard Lusk Company',
    project: 'Looking for Machine Learning Engineer to build a Reverse Image Search Tool',
    year: '2021',
    rating: '5.0',
    source: upworkReviewUrl('Looking for Machine Learning Engineer to build a Reverse Image Search Tool'),
  },
  {
    quote: 'Gaber is an exceptional professional with deep expertise in Computer Vision and AI.',
    author: 'Sports analytics client',
    company: 'Pickleball / table tennis project',
    project: 'AI/Computer Vision Developer Needed to Build MVP for Sports Analytics (Pickleball/Table Tennis)',
    year: '2025',
    rating: '5.0',
    source: upworkReviewUrl('AI/Computer Vision Developer Needed to Build MVP for Sports Analytics (Pickleball/Table Tennis)'),
  },
];

// What I help with (not "tech stack")
export const EXPERTISE = [
  {
    title: 'Multimodal AI Agents',
    description: 'Combine language models and computer vision in workflows that interpret documents, images, and video, then coordinate tools and specialist agents.',
    icon: 'automation',
  },
  {
    title: 'Computer Vision',
    description: 'Video analytics with object tracking, pose estimation, and action recognition — turning footage into performance insights, monitoring, and searchable information.',
    icon: 'vision',
  },
  {
    title: 'AI Strategy',
    description: 'Cutting through the hype to identify where AI creates real value for your specific business and competitive landscape.',
    icon: 'strategy',
  },
  {
    title: 'Production Scale',
    description: 'Bring AI into production with persistent memory, retrieval, telemetry, and cloud infrastructure that supports real workflows and ongoing operations.',
    icon: 'scale',
  },
];

// Industry descriptions preserve confidentiality across engagements.
export const CLIENT_INDUSTRIES = [
  'Consumer goods',
  'Healthcare',
  'Financial services',
  'Strategic communications & public affairs',
  'Sports technology & analytics',
  'Education technology & assessment',
  'B2B media & content marketing',
];

// Credentials - brief, trust-building
export const CREDENTIALS = [
  { label: 'MSc Artificial Intelligence', detail: 'University of Bath' },
  { label: 'Expert-Vetted', detail: 'Top 1% on Upwork' },
];

// Portfolio descriptions reviewed on Upwork on 6 September 2026.
export const SELECTED_BUILDS = [
  {
    title: 'Visual workflows into working AI agents',
    category: 'PiperX · Workflow platform',
    description: 'Led the architecture and hands-on build of PiperX’s intelligence layer. The engine turns visual graphs into runnable multi-agent workflows, with guardrails, agent coordination, and tool access through a custom MCP server and catalog.',
    technologies: ['Multi-agent orchestration', 'MCP', 'Python'],
    source: 'https://www.upwork.com/freelancers/gyoussef?p=2072046233172054016',
  },
  {
    title: 'One video, multiple content formats',
    category: 'Content production',
    description: 'Built a LangGraph supervisor that routes requests to specialist agents for podcasts, clips, images, video, and written content. Live progress updates, downloadable assets, and organization-scoped sessions connect the AI workflow to the product experience.',
    technologies: ['LangGraph', 'Gemini', 'PostgreSQL'],
    source: 'https://www.upwork.com/freelancers/gyoussef?p=2072058438256955392',
  },
  {
    title: 'From match footage to performance insights',
    category: 'Sports analytics',
    description: 'Built a pickleball video analytics pipeline that tracks players, paddles, and the ball, classifies strokes, and generates ball-speed estimates and court heatmaps. Combined object detection, pose estimation, and calibrated court geometry.',
    technologies: ['PyTorch', 'OpenCV', 'YOLO'],
    source: 'https://www.upwork.com/freelancers/gyoussef?p=2072265012422270976',
  },
];
