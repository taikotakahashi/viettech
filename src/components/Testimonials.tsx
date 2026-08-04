import { useState, useEffect } from 'react'
import { testimonials } from '../data/siteData'
import { useDragCarousel } from '../hooks/useDragCarousel'
import { SectionLabel, Container, PaginationDots } from './ui/Shared'
import { FadeIn } from './ui/Animate'

function getVisibleCount() {
  if (typeof window === 'undefined') return 1
  return window.innerWidth >= 850 ? 2 : 1
}

export function Testimonials() {
  const [count, setCount] = useState(getVisibleCount)

  useEffect(() => {
    const onResize = () => setCount(getVisibleCount())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const { active, setActive, maxSlide, containerRef, trackStyle, slideStyle, dragHandlers } =
    useDragCarousel({
      itemCount: testimonials.length,
      visibleCount: count,
    })

  return (
    <section id="testimonials" className="section-pad bg-page">
      <Container>
        <div className="min-w-0">
          <FadeIn>
            <SectionLabel>What Our Clients Say</SectionLabel>
          </FadeIn>

          <FadeIn delay={100}>
          <div
            ref={containerRef}
            className="w-full min-w-0 overflow-hidden select-none"
            {...dragHandlers}
          >
            <div className="flex items-stretch" style={trackStyle}>
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="flex min-w-0 shrink-0 px-1.5"
                  style={slideStyle}
                >
                  <div className="hover-lift flex w-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm min-[375px]:p-6 sm:p-6 min-[850px]:p-5 lg:p-5">
                    <div className="flex flex-col gap-4 min-[850px]:gap-3 lg:flex-row lg:items-start lg:gap-5">
                      <div className="flex shrink-0 items-center gap-3 min-[850px]:w-full min-[850px]:flex-col min-[850px]:items-center min-[850px]:gap-2 min-[850px]:text-center lg:w-20 lg:self-start">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="h-11 w-11 rounded-full object-cover min-[375px]:h-12 min-[375px]:w-12 sm:h-14 sm:w-14 min-[850px]:h-16 min-[850px]:w-16 lg:h-14 lg:w-14"
                          draggable={false}
                        />
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-heading sm:text-base min-[850px]:text-sm">
                            {item.name}
                          </p>
                          <p className="text-xs text-body sm:text-sm min-[850px]:text-[11px] min-[850px]:leading-snug">
                            {item.title}
                          </p>
                        </div>
                      </div>

                      <div className="flex min-w-0 flex-1 flex-col min-[850px]:w-full min-[850px]:border-t min-[850px]:border-border min-[850px]:pt-3 lg:border-t-0 lg:border-l lg:pl-5 lg:pt-0">
                        <p className="text-sm leading-relaxed wrap-break-word text-body italic min-[375px]:text-[15px] sm:text-base min-[850px]:text-sm lg:text-sm lg:leading-relaxed">
                          {item.quote}
                        </p>
                        {'date' in item && item.date ? (
                          <p className="mt-3 text-right text-[11px] text-muted sm:text-xs min-[850px]:mt-3 lg:mt-4">
                            {item.date}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </FadeIn>

          <div className="mt-5 sm:mt-6">
            <PaginationDots total={maxSlide + 1} active={active} onChange={setActive} />
          </div>
        </div>
      </Container>
    </section>
  )
}
