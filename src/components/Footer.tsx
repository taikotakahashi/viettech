import type { CSSProperties } from 'react'
import type { IconType } from 'react-icons'
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaDiscord,
} from 'react-icons/fa6'
import { footerLinks } from '../data/siteData'
import { Container } from './ui/Shared'
import { ASSETS } from '../assets'

type SocialLink = {
  Icon: IconType
  href: string
  label: string
  color: string
  gradient?: string
}

const socialLinks: SocialLink[] = [
  { Icon: FaLinkedin, href: '#', label: 'LinkedIn', color: '#0A66C2' },
  { Icon: FaGithub, href: '#', label: 'GitHub', color: '#f0f6fc' },
  { Icon: FaTwitter, href: '#', label: 'Twitter', color: '#1D9BF0' },
  {
    Icon: FaInstagram,
    href: '#',
    label: 'Instagram',
    color: '#E4405F',
    gradient:
      'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
  },
  { Icon: FaTelegram, href: '#', label: 'Telegram', color: '#26A5E4' },
  { Icon: FaDiscord, href: '#', label: 'Discord', color: '#5865F2' },
]

export function Footer() {
  return (
    <footer className="bg-dark-navy pt-8 pb-6 text-white sm:pt-10 lg:pt-16">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-12 md:gap-x-8 md:gap-y-6 lg:gap-x-6 lg:gap-y-8">
          <div className="col-span-2 md:col-span-12 lg:col-span-3">
            <a href="#home" className="flex shrink-0 items-center gap-2">
            <img
              src={ASSETS.logo}
              alt="White Devs, Inc."
              className="h-7 w-auto max-w-[120px] object-contain sm:h-8 sm:max-w-[140px] lg:h-9 site-logo"
            />
          </a>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/60 sm:mt-3">
              Building innovative software solutions that accelerate business
              growth for companies worldwide.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2.5 sm:mt-4 sm:gap-3">
              {socialLinks.map(({ Icon, href, label, color, gradient }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`footer-social-link flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-[background-color,transform] hover:scale-105 ${
                    gradient ? 'footer-social-link--gradient text-white' : ''
                  }`}
                  style={
                    gradient
                      ? ({ '--social-gradient': gradient } as CSSProperties)
                      : ({ '--social-color': color } as CSSProperties)
                  }
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-x-6 gap-y-8 min-[500px]:grid-cols-3 md:contents">
            <div className="md:col-span-4 lg:col-span-2">
              <h4 className="mb-2 text-sm font-bold text-white sm:mb-3">Company</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-white/60 transition-colors hover:text-accent sm:text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 lg:col-span-2">
              <h4 className="mb-2 text-sm font-bold text-white sm:mb-3">Services</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-white/60 transition-colors hover:text-accent sm:text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 lg:col-span-2">
              <h4 className="mb-2 text-sm font-bold text-white sm:mb-3">Resources</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-white/60 transition-colors hover:text-accent sm:text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-2 md:col-span-12 lg:col-span-3">
            <h4 className="mb-2 text-sm font-bold text-white sm:mb-3">
              Subscribe to Our Newsletter
            </h4>
            <p className="mb-2 max-w-md text-[13px] text-white/60 sm:mb-3 sm:text-sm">
              Get the latest insights on software development and technology trends.
            </p>
            <form
              className="flex w-full max-w-md"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 rounded-l-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-accent sm:px-4"
              />
              <button
                type="submit"
                className="shrink-0 rounded-r-lg bg-accent px-3.5 text-heading transition-colors hover:bg-accent-hover sm:px-4"
                aria-label="Subscribe"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 12L12 4M12 4H6M12 4V10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 sm:mt-8 sm:pt-5">
          <p className="text-center text-[11px] text-white/50 sm:text-left sm:text-sm">
            &copy; {new Date().getFullYear()} Software Company, Inc. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
