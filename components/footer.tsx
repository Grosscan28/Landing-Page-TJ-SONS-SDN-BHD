import { Leaf } from 'lucide-react'
import { contact } from '@/lib/media'

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer
      className="relative text-white/70"
      style={{ background: 'oklch(0.2 0.04 158)' }}
    >
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 font-display text-lg font-semibold text-white">
              <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Leaf className="size-5" />
              </span>
              {contact.companyName}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Keeping the environment clean, safe and sustainable through professional,
              eco-friendly septic and waste services.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-lime"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="text-sm text-white/60">
            <p>{contact.phoneDisplay}</p>
            <p className="mt-1">{contact.email}</p>
            <p className="mt-1">Sandakan, Sabar, Malaysia</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {contact.companyName}. All rights reserved.
          </p>
          <p>Eco-Friendly · Licensed &amp; Insured · Trusted Service</p>
        </div>
      </div>
    </footer>
  )
}
