import {
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Bot,
  Server,
  ChevronRight,
} from 'lucide-react'
import { services } from '../data/siteData'
import { SectionLabel, Container } from './ui/Shared'
import { FadeIn } from './ui/Animate'

const serviceIcons = [Code2, Globe, Smartphone, Cloud, Bot, Server]

export function Services() {
  return (
    <section id="services" className="section-pad bg-page">
      <Container>
        <FadeIn>
          <SectionLabel>Our Software Development Services</SectionLabel>
        </FadeIn>

        <div className="divide-y divide-border border-y border-border">
          {services.map((service, i) => {
            const Icon = serviceIcons[i]
            return (
              <FadeIn key={service.title} delay={i * 75}>
              <div
                className="group flex cursor-pointer items-start gap-3 py-4 transition-colors hover:bg-surface min-[375px]:gap-4 min-[375px]:py-5 sm:items-center sm:gap-5 sm:py-6 lg:gap-6 lg:py-7"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center sm:h-10 sm:w-10 lg:h-12 lg:w-12">
                  <Icon
                    className="h-6 w-6 text-accent transition-transform group-hover:scale-110 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[15px] font-bold text-heading min-[375px]:text-base sm:text-lg lg:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-body sm:text-sm">
                    {service.description}
                  </p>
                </div>
                <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-all group-hover:translate-x-1 group-hover:text-accent sm:mt-0 sm:h-5 sm:w-5" />
              </div>
              </FadeIn>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
