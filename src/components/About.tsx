import { ASSETS } from '../assets'
import { partnerLogos } from '../data/siteData'
import { LogoMarquee } from './LogoMarquee'
import { SectionLabel, Container } from './ui/Shared'
import { FadeIn } from './ui/Animate'

export function About() {
  return (
    <section id="about" className="section-pad bg-page">
      <Container>
        <FadeIn>
        <div className="grid items-center gap-8 min-[768px]:grid-cols-2 min-[768px]:gap-10 lg:gap-16">
          <div className="order-1 min-[768px]:order-none">
            <SectionLabel>About Us</SectionLabel>
            <h2 className="text-[1.375rem] leading-tight font-bold text-heading min-[375px]:text-2xl sm:text-3xl lg:text-[2.5rem]">
              Your Technology Partner for Long-Term Growth
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-body sm:mt-5 sm:text-[15px] lg:text-base">
              At Software Company, Inc., we believe technology should be a catalyst for
              business growth. Our team of experienced engineers and designers work
              closely with you to understand your vision and deliver solutions that
              drive real results.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-body sm:mt-4 sm:text-[15px] lg:text-base">
              From startups to enterprise organizations, we&apos;ve helped companies
              across 12+ countries build software products that scale. We don&apos;t
              just write code — we become your long-term technology partner.
            </p>
          </div>
          <div className="order-2 overflow-hidden rounded-xl lg:rounded-2xl">
            <img
              src={ASSETS.about}
              alt="Modern office workspace"
              className="aspect-[4/3] w-full object-cover min-[768px]:aspect-auto min-[768px]:h-full"
              loading="lazy"
            />
          </div>
        </div>
        </FadeIn>

        <FadeIn delay={150}>
        <div className="mt-10 sm:mt-14 lg:mt-20">
          <p className="mb-5 text-center text-[10px] font-medium tracking-[0.12em] text-muted uppercase sm:mb-8 sm:text-xs">
            Trusted by startups and businesses around the world
          </p>

          <div className="hidden min-[1051px]:flex min-[1051px]:flex-wrap min-[1051px]:items-center min-[1051px]:justify-center min-[1051px]:gap-10 xl:gap-14">
            {partnerLogos.map((partner) => (
              <div
                key={partner.name}
                className="partner-logo-shell flex items-center justify-center"
                title={partner.name}
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="h-7 w-auto max-w-[100px] object-contain"
                />
              </div>
            ))}
          </div>

          <div className="max-[1050px]:block min-[1051px]:hidden">
            <LogoMarquee logos={partnerLogos} />
          </div>
        </div>
        </FadeIn>
      </Container>
    </section>
  )
}
