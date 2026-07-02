import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/siteData'
import { ASSETS } from '../assets'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-dark-navy/95 shadow-lg backdrop-blur-md'
            : 'bg-dark-navy/40 backdrop-blur-sm max-lg:bg-dark-navy/90'
        }`}
      >
        <div className="container-site flex h-14 items-center justify-between gap-3 sm:h-16 lg:h-[72px]">
          <a href="#home" className="flex shrink-0 items-center gap-2">
            <img
              src={ASSETS.logo}
              alt="White Devs, Inc."
              className="h-7 w-auto max-w-[120px] object-contain sm:h-8 sm:max-w-[140px] lg:h-9 site-logo"
            />
          </a>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] font-medium tracking-wide text-white/90 uppercase transition-colors hover:text-accent xl:text-[13px]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              className="rounded-lg bg-accent px-3 py-1.5 text-[11px] font-semibold text-heading transition-all hover:-translate-y-0.5 hover:bg-accent-hover sm:px-4 sm:py-2 sm:text-xs lg:px-5 lg:py-2.5 lg:text-sm"
            >
              Let&apos;s Talk
            </a>
            <ThemeToggle />
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-9 w-9 items-center justify-center text-white lg:hidden"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 top-14 z-40 overflow-y-auto bg-dark-navy/98 backdrop-blur-lg sm:top-16 lg:hidden">
          <nav className="container-site flex flex-col gap-1 py-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/5 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
