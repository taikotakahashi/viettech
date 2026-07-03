import { Users, Rocket, Globe, ShieldCheck } from 'lucide-react'
import { ASSETS } from '../assets'
import { heroStats } from '../data/siteData'
import { ArrowButton, Container } from './ui/Shared'
import { CountUp } from './ui/Animate'

const statIcons = [Users, Rocket, Globe, ShieldCheck]

function StatsBar({ className = '' }: { className?: string }) {
  return (
    <div
      className={`rounded-xl border border-white/10 bg-light-navy/0 p-4 backdrop-blur-md sm:rounded-2xl sm:p-5 min-[768px]:px-4 min-[768px]:py-4 lg:p-6 ${className}`}
    >
      <div className="hero-stats-grid relative grid grid-cols-2 gap-x-3 gap-y-5 min-[768px]:grid-cols-4 min-[768px]:gap-x-0 min-[768px]:gap-y-0 lg:gap-0">
        {heroStats.map((stat, i) => {
          const Icon = statIcons[i]
          return (
            <div
              key={stat.label}
              className="relative flex items-center gap-2.5 px-2 py-1 sm:gap-3 min-[768px]:flex-col min-[768px]:gap-1.5 min-[768px]:px-2 min-[768px]:py-0 min-[768px]:text-center lg:flex-row lg:justify-center lg:gap-3 lg:px-5 lg:text-left"
            >
              <Icon
                className="h-5 w-5 shrink-0 text-accent sm:h-6 sm:w-6"
                strokeWidth={1.5}
              />
              <div className="min-w-0">
                <p className="text-lg font-bold text-white sm:text-xl min-[768px]:text-xl lg:text-2xl xl:text-3xl">
                  <CountUp value={stat.value} />
                </p>
                <p className="text-[10px] leading-tight text-white/70 sm:text-[11px] min-[768px]:text-[10px] lg:text-xs">
                  {stat.label}
                </p>
              </div>
            </div>
          )
        })}

        <span
          aria-hidden="true"
          className="hero-stats-divider hero-stats-divider--v-mobile pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 min-[768px]:hidden"
        />
        <span
          aria-hidden="true"
          className="hero-stats-divider hero-stats-divider--h-mobile pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 min-[768px]:hidden"
        />
        <span
          aria-hidden="true"
          className="hero-stats-divider hero-stats-divider--v-desktop pointer-events-none absolute top-1/2 left-[25%] z-10 hidden -translate-x-1/2 -translate-y-1/2 min-[768px]:block"
        />
        <span
          aria-hidden="true"
          className="hero-stats-divider hero-stats-divider--v-desktop pointer-events-none absolute top-1/2 left-[50%] z-10 hidden -translate-x-1/2 -translate-y-1/2 min-[768px]:block"
        />
        <span
          aria-hidden="true"
          className="hero-stats-divider hero-stats-divider--v-desktop pointer-events-none absolute top-1/2 left-[75%] z-10 hidden -translate-x-1/2 -translate-y-1/2 min-[768px]:block"
        />
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-dark"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={ASSETS.heroBg}
        aria-hidden="true"
      >
        <source src={ASSETS.heroVideo} type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-dark/85 via-dark/70 to-dark/90" />

      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-center pt-[4.5rem] pb-8 sm:pt-20 sm:pb-10 min-[768px]:justify-center min-[768px]:gap-10 lg:justify-between lg:gap-0 lg:pt-24 lg:pb-25">
        <div className="max-w-3xl py-6 sm:py-8 min-[768px]:max-w-lg min-[768px]:py-0 lg:max-w-2xl lg:py-25">
          <h1 className="animate-hero text-[1.625rem] leading-[1.15] font-extrabold text-white min-[375px]:text-[1.875rem] min-[425px]:text-[2.125rem] sm:text-4xl min-[768px]:text-[2.5rem] min-[768px]:leading-[1.2] lg:text-5xl xl:text-[3.5rem] xl:leading-[1.1]">
            Building Innovative Software That{' '}
            <span className="text-accent">Accelerates Your Business</span>
          </h1>
          <p className="animate-hero-delay-1 mt-4 max-w-xl text-[13px] leading-relaxed text-white/80 min-[375px]:text-sm sm:mt-5 sm:text-base min-[768px]:mt-5 min-[768px]:max-w-lg min-[768px]:text-[15px] lg:mt-6 lg:max-w-xl lg:text-lg">
            We are a team of 25+ professional engineers specializing in custom
            software, web and mobile applications, SaaS products, and AI-powered
            solutions that help businesses grow faster.
          </p>
          <div className="animate-hero-delay-2 mt-6 flex flex-col gap-3 min-[425px]:flex-row min-[425px]:flex-wrap min-[425px]:items-center sm:mt-8 sm:gap-4 min-[768px]:mt-7">
            <ArrowButton className="w-full min-[425px]:w-auto">
              Start Your Project
            </ArrowButton>
            <ArrowButton
              variant="outline-dark"
              className="w-full !px-5 min-[425px]:w-auto"
            >
              Schedule a Free Consultation
            </ArrowButton>
          </div>
        </div>

        <div className="w-full lg:hidden">
          <StatsBar />
        </div>

        <div className="hidden w-full lg:block">
          <StatsBar />
        </div>
      </Container>
    </section>
  )
}
