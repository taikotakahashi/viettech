import { useState, useEffect } from 'react'
import { projects } from '../data/siteData'
import { useDragCarousel } from '../hooks/useDragCarousel'
import { SectionLabel, Container, PaginationDots } from './ui/Shared'
import { FadeIn } from './ui/Animate'

function getVisibleCount() {
  if (typeof window === 'undefined') return 1
  if (window.innerWidth >= 1024) return 3
  if (window.innerWidth >= 425) return 2
  return 1
}

export function FeaturedProjects() {
  const [count, setCount] = useState(getVisibleCount)

  useEffect(() => {
    const onResize = () => setCount(getVisibleCount())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const { active, setActive, maxSlide, containerRef, trackStyle, slideStyle, dragHandlers, isDragging } =
    useDragCarousel({
      itemCount: projects.length,
      visibleCount: count,
      autoPlayInterval: 5000,
    })

  return (
    <section id="portfolio" className="section-pad bg-page">
      <Container>
        <FadeIn>
          <SectionLabel>Featured Projects</SectionLabel>
        </FadeIn>

        <FadeIn delay={100}>
        <div
          ref={containerRef}
          className="w-full min-w-0 overflow-hidden select-none"
          {...dragHandlers}
        >
          <div className="flex" style={trackStyle}>
            {projects.map((project) => (
              <div key={project.title} className="min-w-0 shrink-0 px-1.5" style={slideStyle}>
                <div
                  className={`hover-lift h-full overflow-hidden rounded-xl border border-border bg-card ${
                    isDragging ? 'pointer-events-none' : ''
                  }`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`aspect-[3/2] w-full object-cover ${
                        isDragging ? '' : 'transition-transform duration-300 hover:scale-[1.03]'
                      }`}
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="text-[15px] font-bold text-heading min-[375px]:text-base sm:text-lg">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-body sm:text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </FadeIn>

        <div className="mt-6 sm:mt-8">
          <PaginationDots total={maxSlide + 1} active={active} onChange={setActive} />
        </div>
      </Container>
    </section>
  )
}
