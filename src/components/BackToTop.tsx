import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`btn-smooth fixed right-4 bottom-5 z-50 flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-heading shadow-lg hover:bg-accent-hover sm:right-6 sm:bottom-6 sm:h-12 sm:w-12 ${
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp size={18} />
    </button>
  )
}
