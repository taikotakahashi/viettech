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
    title: 'Healthcare Platform',
    description:
      'A comprehensive patient management system for healthcare providers.',
    image: ASSETS.projects[0],
  },
  {
    title: 'E-Commerce Marketplace',
    description:
      'A multi-vendor marketplace with real-time inventory and payment processing.',
    image: ASSETS.projects[1],
  },
  {
    title: 'FinTech Dashboard',
    description:
      'Real-time financial analytics dashboard with advanced reporting tools.',
    image: ASSETS.projects[2],
  },
  {
    title: 'Logistics Tracker',
    description:
      'Fleet management and route optimization platform for logistics companies.',
    image: ASSETS.projects[3],
  },
  {
    title: 'EdTech Learning Hub',
    description:
      'Interactive online learning platform with video courses and assessments.',
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
    name: 'Sarah Mitchell',
    title: 'CTO, TechStart Inc.',
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
  phone: '+1 (234) 567-890',
  whatsapp: '+1 (234) 567-890',
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
