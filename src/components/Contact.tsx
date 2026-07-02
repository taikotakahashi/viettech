import { useState, type FormEvent } from 'react'
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { contactInfo } from '../data/siteData'
import { Container, SectionLabel } from './ui/Shared'
import { FadeIn } from './ui/Animate'

// FormSubmit activation ID — delivers to pelixphilip@gmail.com
const FORMSUBMIT_ID = '10a276ca9f76970adb7565f4a6c69e57'

const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`
const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(contactInfo.address)}&output=embed`

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  company: string
  message: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  message: '',
}

const contactDetails = [
  {
    icon: Mail,
    label: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    isLucide: true,
  },
  {
    icon: Phone,
    label: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/\D/g, '')}`,
    isLucide: true,
  },
  {
    icon: FaWhatsapp,
    label: contactInfo.whatsapp,
    href: `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`,
    isLucide: false,
  },
  {
    icon: MapPin,
    label: contactInfo.address,
    href: googleMapsUrl,
    isLucide: true,
  },
  {
    icon: Clock,
    label: contactInfo.hours,
    isLucide: true,
  },
]

async function sendContactMessage(data: FormData) {
  const response = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      company: data.company || 'Not provided',
      message: data.message,
      _replyto: data.email,
      _subject: `New contact from ${data.name}`,
      _template: 'table',
      _captcha: 'false',
    }),
  })

  const result = await response.json()
  const message = typeof result.message === 'string' ? result.message : ''

  if (message.toLowerCase().includes('activation')) {
    throw new Error(
      'The contact form is still being activated. Please check pelixphilip@gmail.com for the FormSubmit activation email and click the link.',
    )
  }

  if (!response.ok || result.success === false || result.success === 'false') {
    throw new Error(message || 'Failed to send message. Please try again.')
  }
}

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-page">
      <Container>
        <FadeIn>
          <SectionLabel>Get In Touch</SectionLabel>
          <div className="mt-4 flex flex-col gap-8 sm:gap-10 lg:mt-6 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
            <ContactInfo />
            <div className="min-w-0 lg:flex-1">
              <ContactForm />
            </div>
          </div>
        </FadeIn>

        <ContactMap />
      </Container>
    </section>
  )
}

function ContactMap() {
  return (
    <FadeIn delay={150}>
      <div className="mt-10 sm:mt-12 lg:mt-14">
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm sm:rounded-2xl">
          <iframe
            title={`Map showing ${contactInfo.address}`}
            src={googleMapsEmbedUrl}
            className="block h-[240px] w-full border-0 sm:h-[320px] lg:h-[380px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-center text-xs text-muted sm:text-sm">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            View in Google Maps
          </a>
        </p>
      </div>
    </FadeIn>
  )
}

function ContactInfo() {
  return (
    <div className="min-w-0 lg:w-[42%] lg:max-w-md lg:shrink-0 xl:w-[38%]">
      <h2 className="text-2xl font-bold leading-tight text-heading sm:text-3xl ">
        {contactInfo.heading}
      </h2>
      <ul className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
        {contactDetails.map(({ icon: Icon, label, href, isLucide }) => {
          const iconClassName =
            'mt-0.5 h-5 w-5 shrink-0 text-accent sm:h-[22px] sm:w-[22px]'
          const icon = isLucide ? (
            <Icon className={iconClassName} strokeWidth={1.5} />
          ) : (
            <Icon className={iconClassName} />
          )

          return (
            <li key={label}>
              {href ? (
                <a
                  href={href}
                  className="group flex items-start gap-3.5 sm:gap-4"
                  {...(href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {icon}
                  <span className="text-sm leading-relaxed text-heading transition-colors group-hover:text-accent sm:text-[15px]">
                    {label}
                  </span>
                </a>
              ) : (
                <div className="flex items-start gap-3.5 sm:gap-4">
                  {icon}
                  <span className="text-sm leading-relaxed text-heading sm:text-[15px]">
                    {label}
                  </span>
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (status === 'error') {
      setStatus('idle')
      setErrorMessage('')
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      setErrorMessage('Please fill in your name, email, and message.')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(formData.email.trim())) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address.')
      return
    }

    setStatus('sending')
    setErrorMessage('')

    try {
      await sendContactMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim(),
        message: formData.message.trim(),
      })
      setFormData(initialFormData)
      setStatus('success')
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      )
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      {status === 'success' && (
        <p className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-heading">
          Your message has been sent successfully. We&apos;ll get back to you soon.
        </p>
      )}

      {status === 'error' && errorMessage && (
        <p className="rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400">
          {errorMessage}
        </p>
      )}

      <div className="grid gap-4 min-[425px]:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={(e) => updateField('name', e.target.value)}
          className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-heading outline-none transition-colors placeholder:text-muted focus:border-accent"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-heading outline-none transition-colors placeholder:text-muted focus:border-accent"
        />
      </div>
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        value={formData.company}
        onChange={(e) => updateField('company', e.target.value)}
        className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-heading outline-none transition-colors placeholder:text-muted focus:border-accent"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        required
        value={formData.message}
        onChange={(e) => updateField('message', e.target.value)}
        className="w-full resize-none rounded-lg border border-border bg-input px-4 py-3 text-sm text-heading outline-none transition-colors placeholder:text-muted focus:border-accent"
      />
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-smooth inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-[13px] font-semibold text-heading hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none min-[375px]:px-5 min-[375px]:py-3 min-[375px]:text-sm sm:px-6 sm:py-3.5 sm:text-[15px]"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
          <Send size={16} />
        </button>
      </div>
    </form>
  )
}
