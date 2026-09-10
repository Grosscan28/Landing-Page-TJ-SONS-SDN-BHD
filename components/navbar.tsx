'use client'

import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { media, whatsappLink } from '@/lib/media'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Coverage', href: '#coverage' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)

    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={cn(
          'mx-auto flex h-14 max-w-7xl items-center justify-between rounded-2xl border px-3 transition-all duration-300 sm:h-16 sm:px-5',
          scrolled
            ? 'border-primary/15 bg-white/85 text-foreground shadow-[0_12px_40px_rgba(10,65,130,0.10)] backdrop-blur-xl'
            : 'border-white/20 bg-slate-950/20 text-white shadow-[0_10px_35px_rgba(0,0,0,0.12)] backdrop-blur-xl'
        )}
      >
        {/* Company Logo */}
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display text-sm font-semibold tracking-tight sm:text-base"
        >
          <img
            src={media.companyLogo}
            alt="TJ & SONS HOLDINGS SDN BHD"
            className="h-9 w-auto object-contain sm:h-10"
          />

          <span className="hidden sm:inline">
            TJ & SONS HOLDINGS SDN BHD
          </span>

          <span className="sm:hidden">
            TJ & SONS
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                scrolled
                  ? 'text-foreground/70'
                  : 'text-white/90'
              )}
            >
              {link.label}
            </a>
          ))}

          {/* Request Service */}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-primary/30"
          >
            <MessageCircle className="size-4 transition-transform duration-200 group-hover:scale-110" />
            Request Service
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'grid size-10 place-items-center rounded-xl transition-colors md:hidden',
            scrolled
              ? 'text-foreground hover:bg-muted'
              : 'text-white hover:bg-white/10'
          )}
        >
          {open ? (
            <X className="size-6" />
          ) : (
            <Menu className="size-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-primary/10 bg-white/95 shadow-xl backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden',
          open
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0'
        )}
      >
        <div className="flex flex-col gap-1 p-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary/5 hover:text-primary"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Request Service */}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            <MessageCircle className="size-4" />
            Request Service via WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
