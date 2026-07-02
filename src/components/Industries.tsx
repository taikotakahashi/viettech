import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Truck,
  Factory,
  Building2,
  MoreHorizontal,
} from 'lucide-react'
import { industries } from '../data/siteData'
import { SectionLabel, Container } from './ui/Shared'
import { FadeIn } from './ui/Animate'

const industryIcons = [
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Truck,
  Factory,
  Building2,
  MoreHorizontal,
]

export function Industries() {
  return (
    <section className="section-pad bg-surface">
      <Container>
        <FadeIn>
          <SectionLabel>Industries We Empower</SectionLabel>
        </FadeIn>

        <div className="grid grid-cols-4 gap-3 min-[375px]:gap-4 min-[425px]:gap-5 sm:gap-6 lg:grid-cols-8 lg:gap-4">
          {industries.map((industry, i) => {
            const Icon = industryIcons[i]
            return (
              <FadeIn key={industry} delay={i * 60}>
              <div className="hover-lift flex flex-col items-center gap-1.5 rounded-xl p-2 text-center min-[375px]:gap-2">
                <div className="flex h-9 w-9 items-center justify-center min-[375px]:h-10 min-[375px]:w-10 sm:h-12 sm:w-12">
                  <Icon
                    className="h-5 w-5 text-accent min-[375px]:h-6 min-[375px]:w-6 sm:h-7 sm:w-7"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="text-[9px] leading-tight text-body min-[375px]:text-[10px] sm:text-xs">
                  {industry}
                </span>
              </div>
              </FadeIn>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
