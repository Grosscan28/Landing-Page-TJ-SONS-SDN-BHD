'use client'

import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { media, whatsappLink } from '@/lib/media'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#our-work' },
  { label: 'Coverage', href: '#coverage' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <nav
        className={cn(
          'mx-auto flex h-[62px] w-full max-w-7xl items-center justify-between rounded-full border px-3 transition-all duration-300 sm:px-5',
          scrolled
            ? 'border-slate-200/80 bg-white/92 shadow-[0_10px_35px_rgba(15,23,42,0.10)] backdrop-blur-xl'
            : 'border-white/25 bg-white/12 shadow-[0_8px_30px_rgba(0,0,0,0.10)] backdrop-blur-md'
        )}
      >
        <a href="#top" className="flex min-w-0 items-center gap-3 pl-1">
          <img
            src={media.companyLogo}
            alt="TJ & SONS HOLDINGS SDN BHD"
            className="h-9 w-auto shrink-0 object-contain sm:h-10"
          />
          <span
            className={cn(
              'hidden truncate text-[13px] font-semibold tracking-tight sm:block lg:text-sm',
              scrolled ? 'text-slate-900' : 'text-white'
            )}
          >
            TJ & SONS HOLDINGS SDN BHD
          </span>
          <span className={cn('text-sm font-semibold sm:hidden', scrolled ? 'text-slate-900' : 'text-white')}>
            TJ & SONS
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors',
                scrolled
                  ? 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                  : 'text-white/90 hover:bg-white/12 hover:text-white'
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <MessageCircle className="size-4" />
            Request Service
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'grid size-10 place-items-center rounded-full md:hidden',
            scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          'mx-auto mt-3 w-full max-w-7xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white/96 shadow-xl backdrop-blur-xl transition-all duration-300 md:hidden',
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 border-transparent opacity-0'
        )}
      >
        <div className="flex flex-col gap-1 p-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white"
          >
            <MessageCircle className="size-4" />
            Request Service via WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
