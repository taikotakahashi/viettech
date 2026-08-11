import { ASSETS } from '../assets'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Contact', href: '#contact' },
]

export const heroStats = [
  { value: '25+', label: 'Professional Developers' },
  { value: '150+', label: 'Projects Delivered' },
  { value: '12+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
]

export const resultStats = [
  { value: '150+', label: 'Completed Projects' },
  { value: '25', label: 'Professional Developers' },
  { value: '10+', label: 'Years Combined Experience' },
  { value: '98%', label: 'Client Retention' },
]

export const services = [
  {
    title: 'Custom Software Development',
    description:
      'Tailored solutions built to solve your unique business challenges and scale with your growth.',
  },
  {
    title: 'Web Application Development',
    description:
      'Modern, responsive web applications using the latest frameworks and best practices.',
  },
  {
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile apps that deliver exceptional user experiences.',
  },
  {
    title: 'SaaS Product Development',
    description:
      'End-to-end SaaS product development from MVP to enterprise-grade platforms.',
  },
  {
    title: 'AI & Automation',
    description:
      'Intelligent automation and AI-powered solutions to streamline your operations.',
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Cloud infrastructure, CI/CD pipelines, and DevOps practices for reliable delivery.',
  },
]

export const projects = [
  {
    title: 'Idelic: AI-enabled safety intelligence for large-scale fleet operations',
    description:
      'AgileEngine introduced critical data and architecture solutions to a leading fleet safety platform trusted by Dot Foods and Dollar General. The platform enables commercial trucking enterprises to unify data from dozens of sources, predict accidents with 90% accuracy, and mitigate operational risk. The fleets leveraging this technology have successfully reduced accidents by an average of 20% within 12 months.',
    image: ASSETS.projects[0],
  },
  {
    title: 'TechStyle: UI architecture, DevOps, and custom e-commerce tools Comment end',
    description:
      'An omnichannel retail company with 5 million subscribers, TechStyle Fashion Group is renowned for its collaborations with A-list celebrities like Rihanna and Kate Hudson. What really sets TechStyle apart, though, is its end-to-end technology platform that, which enables the rapid creation of online brands based on market data. Our experts modernized this platform, making it much more scalable and versatile.',
    image: ASSETS.projects[1],
  },
  {
    title: 'AI/ML-powered predictive maintenance for tens of thousands of EVs',
    description:
      'AgileEngine creates custom AI and data solutions for an AI startup launched in collaboration with a top-5 luxury car brand featured on the Fortune Global 500 list. The main focus of this collaboration is an ML-as-a-service platform streamlining electric vehicles manufacturing and maintenance. Our team helped ensure that the core AI/ML systems underlying the platform can reliably predict vehicle failures with unparalleled accuracy.',
    image: ASSETS.projects[2],
  },
  {
    title: 'Starz: ML and data solutions for a premium TV network',
    description:
      'A premium US television network reaching 28 million American households works with AgileEngine on business-critical data systems and experimental AI features. Our Data Studio experts modernized the company’s data pipelines, introducing automation and standardization to core data engineering workflows. Thanks to our AI team, the company was able to rapidly develop proof-of-concept AI-driven MarTech while saving engineering costs.',
    image: ASSETS.projects[3],
  },
  {
    title: 'AgriTech platform featured by the World Economic Forum',
    description:
      'An AgriTech platform featured by the World Economic Forum engages AgileEngine across a wide range of web and mobile applications. The solutions developed by our team transform farming with IoT, AI, and data functionality like satellite imagery, soil analysis, and resources management.',
    image: ASSETS.projects[4],
  },
]

export const processSteps = [
  {
    number: 1,
    title: 'Discovery',
    description: 'Understanding your goals, users, and technical requirements.',
  },
  {
    number: 2,
    title: 'Planning',
    description: 'Defining scope, architecture, and project roadmap.',
  },
  {
    number: 3,
    title: 'Design',
    description: 'Creating intuitive UI/UX designs and interactive prototypes.',
  },
  {
    number: 4,
    title: 'Development',
    description: 'Building your product with agile sprints and regular demos.',
  },
  {
    number: 5,
    title: 'Quality Assurance',
    description: 'Rigorous testing to ensure performance, security, and reliability.',
  },
  {
    number: 6,
    title: 'Deployment & Support',
    description: 'Launching your product and providing ongoing maintenance.',
  },
]

export const techCategories = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript'],
  },
  {
    title: 'Backend',
    items: ['Node.js', '.NET', 'Java', 'Python', 'PHP Laravel'],
  },
  {
    title: 'Mobile',
    items: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
  },
  {
    title: 'Database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Cloud',
    items: ['AWS', 'Azure', 'Google Cloud'],
  },
  {
    title: 'DevOps',
    items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins'],
  },
  {
    title: 'AI',
    items: ['OpenAI', 'TensorFlow', 'PyTorch', 'LangChain'],
  },
  {
    title: 'Blockchain',
    items: ['Ethereum', 'Solidity', 'Web3.js', 'Bitcoin'],
  },
  {
    title: 'Testing',
    items: ['Jest', 'Cypress', 'Vitest', 'Selenium'],
  },
  {
    title: 'APIs',
    items: ['GraphQL', 'Postman', 'Swagger', 'FastAPI'],
  },
  {
    title: 'Messaging',
    items: ['Kafka', 'RabbitMQ', 'Socket.io', 'NATS'],
  },
  {
    title: 'CMS',
    items: ['WordPress', 'Shopify', 'Strapi', 'Contentful'],
  },
]

export const industries = [
  'Healthcare',
  'FinTech',
  'E-Commerce',
  'Education',
  'Logistics',
  'Manufacturing',
  'Real Estate',
  'And More',
]

export const testimonials = [
  {
    quote:
      'Software Company transformed our vision into a powerful platform that exceeded our expectations. From the first discovery call, they asked the right questions, clarified edge cases, and proposed a clean roadmap we could actually follow. Communication was consistent, timelines were transparent, and the final delivery matched the spec with performance improvements we didn’t even ask for. We’d happily work with them again.',
    name: 'Michael Anderson',
    title: 'CEO, Digital Solutions Inc.',
    avatar: ASSETS.testimonials[0],
    date: 'March 12, 2026',
  },
  {
    quote:
      'The quality of code and attention to detail is outstanding. They didn’t just “build features”—they improved our architecture, added sensible testing, and helped our internal team level up with clear documentation and handover sessions. When we hit a release deadline, they coordinated seamlessly across time zones and kept everything stable in production. They became a true extension of our team.',
    name: 'Veronica Moyano',
    title: 'CEO, TechStart Inc.',
    avatar: ASSETS.testimonials[1],
    date: 'January 28, 2026',
  },
  {
    quote:
      'From discovery to deployment, the process was seamless. The team delivered polished UI, reliable integrations, and a release plan that reduced risk for launch day. They were proactive about performance, accessibility, and edge cases, and they handled feedback quickly without losing quality. Our mobile app launched ahead of schedule and user feedback has been consistently positive.',
    name: 'David Chen',
    title: 'Founder, AppVenture',
    avatar: ASSETS.testimonials[2],
    date: 'November 6, 2025',
  },
]

export const team = [
  {
    name: 'John Smith',
    title: 'CEO & Founder',
    bio: '15+ years leading software teams and delivering enterprise solutions.',
    image: ASSETS.team[0],
  },
  {
    name: 'Sarah Johnson',
    title: 'Project Manager',
    bio: 'Expert in agile methodologies and cross-functional team leadership.',
    image: ASSETS.team[1],
  },
  {
    name: 'David Lee',
    title: 'Lead Software Architect',
    bio: 'Architecting scalable systems for startups and Fortune 500 companies.',
    image: ASSETS.team[2],
  },
  {
    name: 'Emily Brown',
    title: 'UI/UX Design Lead',
    bio: 'Creating beautiful, user-centered designs that drive engagement.',
    image: ASSETS.team[3],
  },
]

export const contactInfo = {
  heading: "We're Here to Help You",
  email: 'pelixphilip@gmail.com',
  phone: '+1 (508) 348-9846',
  whatsapp: '+1 (508) 348-9846',
  address: '120 Broadway, New York, NY 10271, United States',
  hours: 'Mon - Fri: 9:00 AM - 6:00 PM',
}

export const footerLinks = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  services: [
    { label: 'Web Development', href: '#services' },
    { label: 'Mobile Apps', href: '#services' },
    { label: 'SaaS Products', href: '#services' },
    { label: 'AI & Automation', href: '#services' },
  ],
  resources: [
    { label: 'Case Studies', href: '#portfolio' },
    { label: 'Blog', href: '#blog' },
    { label: 'Documentation', href: '#' },
    { label: 'Support', href: '#' },
  ],
}

export const partnerLogos = [
  { name: 'AWS', image: ASSETS.clients[0] },
  { name: 'Microsoft', image: ASSETS.clients[1] },
  { name: 'Google Cloud', image: ASSETS.clients[2] },
  { name: 'Stripe', image: ASSETS.clients[3] },
  { name: 'Shopify', image: ASSETS.clients[4] },
  { name: 'Docker', image: ASSETS.clients[5] },
  { name: 'GitHub', image: ASSETS.clients[6] },
  { name: 'OpenAI', image: ASSETS.clients[7] },
]
