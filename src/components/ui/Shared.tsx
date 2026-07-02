import type { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
  className?: string
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <p
      className={`mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent sm:text-xs ${className}`}
    >
      {children}
    </p>
  )
}

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className = '' }: ContainerProps) {
  return <div className={`container-site ${className}`}>{children}</div>
}

interface ArrowButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline-dark' | 'outline-light'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

export function ArrowButton({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
}: ArrowButtonProps) {
  const variants = {
    primary:
      'bg-accent text-heading hover:bg-accent-hover',
    'outline-dark':
      'border border-white/40 bg-transparent text-white hover:bg-white/10',
    'outline-light':
      'border border-border bg-transparent text-heading hover:bg-surface',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-smooth inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-[13px] font-semibold min-[375px]:px-5 min-[375px]:py-3 min-[375px]:text-sm sm:px-6 sm:py-3.5 sm:text-[15px] ${variants[variant]} ${className}`}
    >
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="shrink-0"
      >
        <path
          d="M4 12L12 4M12 4H6M12 4V10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

interface PaginationDotsProps {
  total: number
  active: number
  onChange: (index: number) => void
}

export function PaginationDots({ total, active, onChange }: PaginationDotsProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => onChange(i)}
          className={`h-2 rounded-full transition-all duration-300 ${
            i === active ? 'w-6 bg-accent' : 'w-2 bg-border hover:bg-muted dark:bg-white/20 dark:hover:bg-white/35'
          }`}
        />
      ))}
    </div>
  )
}
