import { Briefcase, Users, UserCog, Shield } from 'lucide-react'
import { resultStats } from '../data/siteData'
import { SectionLabel, Container } from './ui/Shared'
import { CountUp, FadeIn } from './ui/Animate'

const resultIcons = [Briefcase, Users, UserCog, Shield]

export function Results() {
  return (
    <section className="section-pad bg-surface">
      <Container>
        <FadeIn>
          <SectionLabel>Delivering Results That Matter</SectionLabel>
        </FadeIn>

        <div className="grid grid-cols-2 gap-5 min-[375px]:gap-6 sm:gap-8 min-[768px]:grid-cols-4 lg:gap-10">
          {resultStats.map((stat, i) => {
            const Icon = resultIcons[i]
            return (
              <FadeIn key={stat.label} delay={i * 100}>
                <div className="text-center min-[768px]:text-left">
                  <Icon
                    className="mx-auto h-6 w-6 text-accent min-[375px]:h-7 min-[375px]:w-7 sm:h-8 sm:w-8 min-[768px]:mx-0"
                    strokeWidth={1.5}
                  />
                  <p className="mt-2 text-xl font-bold text-heading min-[375px]:mt-3 min-[375px]:text-2xl sm:text-3xl lg:text-4xl">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="mt-0.5 text-[11px] text-body min-[375px]:text-xs sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
