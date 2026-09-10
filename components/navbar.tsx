'use client'

import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { whatsappLink } from '@/lib/media'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
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
    <header className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-300', scrolled ? 'border-b border-border/60 bg-background/88 text-foreground shadow-sm backdrop-blur-md' : 'border-b border-transparent bg-transparent')}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#top" className={cn('flex items-center gap-2 font-display text-lg font-semibold tracking-tight transition-colors', scrolled ? 'text-foreground' : 'text-white')}>
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-sm font-black text-primary-foreground">TJ</span>
          <span className="hidden sm:inline">TJ & SONS HOLDINGS SDN BHD</span>
          <span className="sm:hidden">TJ & SONS</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={cn('text-sm font-medium transition-colors hover:opacity-70', scrolled ? 'text-foreground/80' : 'text-white/90')}>
              {link.label}
            </a>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg hover:shadow-primary/25">
            <MessageCircle className="size-4 transition-transform duration-200 group-hover:scale-110" />
            Request Service
          </a>
        </div>

        <button type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((v) => !v)} className={cn('grid size-10 place-items-center rounded-lg transition-colors md:hidden', scrolled ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10')}>
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <div className={cn('overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden', open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')}>
        <div className="flex flex-col gap-1 px-5 py-4">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted">
              {link.label}
            </a>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
            <MessageCircle className="size-4" />
            Request Service via WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
