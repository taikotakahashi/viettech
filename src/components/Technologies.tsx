import type { ComponentType, CSSProperties } from 'react'
import { techCategories } from '../data/siteData'
import { useTheme } from '../context/ThemeContext'
import { SectionLabel, Container } from './ui/Shared'
import { FadeIn } from './ui/Animate'
import { FaAws } from 'react-icons/fa6'
import { TbBrandAzure, TbBrandOpenai } from 'react-icons/tb'
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiTypescript,
  SiNodedotjs,
  SiDotnet,
  SiOpenjdk,
  SiPython,
  SiLaravel,
  SiFlutter,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiJenkins,
  SiSwift,
  SiKotlin,
  SiTensorflow,
  SiPytorch,
  SiLangchain,
  SiEthereum,
  SiSolidity,
  SiWeb3Dotjs,
  SiBitcoin,
  SiJest,
  SiCypress,
  SiVitest,
  SiSelenium,
  SiGraphql,
  SiPostman,
  SiSwagger,
  SiFastapi,
  SiApachekafka,
  SiRabbitmq,
  SiSocketdotio,
  SiNatsdotio,
  SiWordpress,
  SiShopify,
  SiStrapi,
  SiContentful,
} from 'react-icons/si'

const techIconMap: Record<string, ComponentType<{ className?: string; style?: CSSProperties }>> = {
  React: SiReact,
  'Next.js': SiNextdotjs,
  'Vue.js': SiVuedotjs,
  Angular: SiAngular,
  TypeScript: SiTypescript,
  'Node.js': SiNodedotjs,
  '.NET': SiDotnet,
  Java: SiOpenjdk,
  Python: SiPython,
  'PHP Laravel': SiLaravel,
  Flutter: SiFlutter,
  'React Native': SiReact,
  Swift: SiSwift,
  Kotlin: SiKotlin,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  AWS: FaAws,
  Azure: TbBrandAzure,
  'Google Cloud': SiGooglecloud,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  'GitHub Actions': SiGithubactions,
  Jenkins: SiJenkins,
  OpenAI: TbBrandOpenai,
  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  LangChain: SiLangchain,
  Ethereum: SiEthereum,
  Solidity: SiSolidity,
  'Web3.js': SiWeb3Dotjs,
  Bitcoin: SiBitcoin,
  Jest: SiJest,
  Cypress: SiCypress,
  Vitest: SiVitest,
  Selenium: SiSelenium,
  GraphQL: SiGraphql,
  Postman: SiPostman,
  Swagger: SiSwagger,
  FastAPI: SiFastapi,
  Kafka: SiApachekafka,
  RabbitMQ: SiRabbitmq,
  'Socket.io': SiSocketdotio,
  NATS: SiNatsdotio,
  WordPress: SiWordpress,
  Shopify: SiShopify,
  Strapi: SiStrapi,
  Contentful: SiContentful,
}

const techColorMap: Record<string, string> = {
  React: '#61DAFB',
  'Next.js': 'var(--color-heading)',
  'Vue.js': '#4FC08D',
  Angular: '#DD0031',
  TypeScript: '#3178C6',
  'Node.js': '#339933',
  '.NET': '#512BD4',
  Java: '#ED8B00',
  Python: '#3776AB',
  'PHP Laravel': '#FF2D20',
  Flutter: '#02569B',
  'React Native': '#61DAFB',
  Swift: '#F05138',
  Kotlin: '#7F52FF',
  PostgreSQL: '#4169E1',
  MySQL: '#4479A1',
  MongoDB: '#47A248',
  Redis: '#DC382D',
  AWS: '#FF9900',
  Azure: '#0078D4',
  'Google Cloud': '#4285F4',
  Docker: '#2496ED',
  Kubernetes: '#326CE5',
  'GitHub Actions': '#2088FF',
  Jenkins: '#D24939',
  OpenAI: '#10A37F',
  TensorFlow: '#FF6F00',
  PyTorch: '#EE4C2C',
  LangChain: '#1C3C3C',
  Ethereum: '#627EEA',
  Solidity: '#363636',
  'Web3.js': '#F16822',
  Bitcoin: '#F7931A',
  Jest: '#C21325',
  Cypress: '#69D3A7',
  Vitest: '#6E9F18',
  Selenium: '#43B02A',
  GraphQL: '#E10098',
  Postman: '#FF6C37',
  Swagger: '#85EA2D',
  FastAPI: '#009688',
  Kafka: '#E65100',
  RabbitMQ: '#FF6600',
  'Socket.io': '#00D26A',
  NATS: '#27AAE1',
  WordPress: '#21759B',
  Shopify: '#96BF48',
  Strapi: '#4945FF',
  Contentful: '#2478CC',
}

const techDarkColorMap: Partial<Record<string, string>> = {
  LangChain: '#7EC8C8',
  Solidity: '#B3B3B3',
  Flutter: '#4DA3FF',
  WordPress: '#3B9BDA',
  MySQL: '#6CB4E0',
  Jenkins: '#FF6B6B',
  Kafka: '#FF8A50',
}

function getTechColor(tech: string, theme: 'light' | 'dark') {
  if (theme === 'dark' && techDarkColorMap[tech]) {
    return techDarkColorMap[tech]!
  }
  return techColorMap[tech]
}

type TechCategory = (typeof techCategories)[number]

function TechCategoryBlock({ category }: { category: TechCategory }) {
  const { theme } = useTheme()

  return (
    <div className="text-left">
      <h3 className="mb-2.5 text-sm font-bold text-heading min-[375px]:mb-3 sm:mb-4 sm:text-base">
        {category.title}
      </h3>
      <ul className="space-y-2 min-[375px]:space-y-2.5">
        {category.items.map((tech) => {
          const Icon = techIconMap[tech]
          return (
            <li key={tech} className="flex items-center gap-2.5">
              {Icon && (
                <Icon
                  className="h-4 w-4 shrink-0"
                  style={{ color: getTechColor(tech, theme) }}
                />
              )}
              <span className="text-xs text-body sm:text-sm">{tech}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function Technologies() {
  return (
    <section id="technologies" className="section-pad bg-page">
      <Container>
        <FadeIn>
          <SectionLabel>Technologies We Use</SectionLabel>
        </FadeIn>

        <div className="mt-2 grid grid-cols-2 gap-5 min-[375px]:grid-cols-2 min-[375px]:gap-6 min-[768px]:grid-cols-3 min-[768px]:gap-8 lg:grid-cols-6 lg:gap-6 lg:gap-y-8">
          {techCategories.map((category, i) => (
            <FadeIn key={category.title} delay={100 + (i % 6) * 60} className="h-full">
              <div className="hover-lift h-full rounded-xl border border-border bg-card p-4 sm:p-5">
                <TechCategoryBlock category={category} />
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
