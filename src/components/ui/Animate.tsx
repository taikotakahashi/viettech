import type { ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'
import { useCountUp } from '../../hooks/useCountUp'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function FadeIn({ children, className = '', delay = 0 }: FadeInProps) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function parseStatValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/)
  if (!match) return { number: 0, suffix: value }
  return { number: Number.parseInt(match[1], 10), suffix: match[2] }
}

interface CountUpProps {
  value: string
  className?: string
}

export function CountUp({ value, className = '' }: CountUpProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.3 })
  const { number, suffix } = parseStatValue(value)
  const count = useCountUp(number, inView)

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  )
}
