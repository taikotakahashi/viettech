import {
  Search,
  ClipboardList,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
} from 'lucide-react'
import { processSteps } from '../data/siteData'
import { SectionLabel, Container } from './ui/Shared'
import { FadeIn } from './ui/Animate'

const processIcons = [Search, ClipboardList, Palette, Code2, ShieldCheck, Rocket]

export function Process() {
  return (
    <section id="process" className="section-pad bg-page">
      <Container>
        <FadeIn>
          <SectionLabel>Our Development Process</SectionLabel>
        </FadeIn>

        <div className="grid grid-cols-2 gap-4 min-[375px]:gap-5 min-[425px]:gap-6 min-[768px]:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {processSteps.map((step, i) => {
            const Icon = processIcons[i]
            return (
              <FadeIn key={step.number} delay={i * 80}>
              <div className="hover-lift relative rounded-xl p-2 text-center lg:text-left">
                {i < processSteps.length - 1 && (
                  <div className="absolute top-8 left-[calc(50%-1.25rem)] hidden h-px w-[calc(100%-3.5rem)] border-t border-dashed border-border lg:block" />
                )}
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border-2 border-accent/30 min-[375px]:h-12 min-[375px]:w-12 lg:mx-0">
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </div>
                <p className="mt-2 text-xs font-bold text-accent min-[375px]:mt-3">
                  {step.number}
                </p>
                <h3 className="mt-0.5 text-[13px] font-bold text-heading min-[375px]:text-sm sm:text-base">
                  {step.title}
                </h3>
                <p className="mt-1 text-[10px] leading-relaxed text-body min-[375px]:text-[11px] sm:text-xs">
                  {step.description}
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
