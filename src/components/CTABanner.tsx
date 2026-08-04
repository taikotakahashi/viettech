import { Rocket } from 'lucide-react'
import { ASSETS } from '../assets'
import { ArrowButton, Container } from './ui/Shared'
import { FadeIn } from './ui/Animate'

export function CTABanner() {
  return (
    <section className="bg-page py-8 sm:py-10 lg:py-14">
      <Container>
        <FadeIn>
        <div className="hover-lift relative overflow-hidden rounded-2xl bg-dark-navy p-5 sm:p-7 lg:p-10">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url('${ASSETS.ctaBg}')` }}
          />
          <div className="absolute inset-0 bg-dark-navy/80" />
          <div className="relative flex flex-col items-center gap-4 text-center sm:gap-5 min-[768px]:flex-row min-[768px]:items-center min-[768px]:gap-6 min-[768px]:text-left lg:gap-8">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-accent/40 sm:h-16 sm:w-16 lg:h-20 lg:w-20">
              <Rocket className="h-7 w-7 text-accent sm:h-8 sm:w-8 lg:h-9 lg:w-9" strokeWidth={1.5} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-base font-bold text-white min-[375px]:text-lg sm:text-xl lg:text-2xl">
                Ready to Build Your Next Digital Product?
              </h3>
              <p className="mt-1.5 text-xs text-white/70 min-[375px]:text-sm sm:mt-2 sm:text-[15px]">
                Let&apos;s discuss your project and explore how we can help you
                achieve your goals.
              </p>
            </div>
            <ArrowButton className="w-full shrink-0 min-[768px]:w-auto">
              Book a Free Consultation
            </ArrowButton>
          </div>
        </div>
        </FadeIn>
      </Container>
    </section>
  )
}
