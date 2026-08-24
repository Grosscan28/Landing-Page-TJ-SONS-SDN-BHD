'use client'

import { MessageCircle, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { contact, whatsappLink } from '@/lib/media'
import { Reveal } from '@/components/reveal'

const details = [
  { icon: Phone, label: 'Call us', value: contact.phoneDisplay, href: `tel:${contact.phoneDisplay[0].replace(/\s/g, '')}` },
  { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { icon: MapPin, label: 'Location', value: contact.office },
]

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-xl shadow-primary/5 md:p-14">
            <div
              aria-hidden
              className="absolute -right-16 -top-16 size-72 rounded-full opacity-70 blur-2xl"
              style={{ background: 'radial-gradient(circle, oklch(0.82 0.19 130 / 0.18), transparent 70%)' }}
            />

            <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald">
                  Get In Touch
                </p>
                <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                  Ready for a cleaner, safer property?
                </h2>
                <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
                  Message us on WhatsApp for the fastest response, or reach out through any
                  of the channels below. Our team is ready to help.
                </p>

                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-primary to-emerald px-7 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 hover:brightness-110"
                >
                  <MessageCircle className="size-5 transition-transform duration-300 group-hover:scale-110" />
                  Request Service via WhatsApp
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              <div className="flex flex-col justify-center gap-3">
                {details.map((detail) => {
                  const content = (
                    <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
                      <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                        <detail.icon className="size-5" />
                      </span>
                      <span>
                        <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {detail.label}
                        </span>
                        <span className="block font-medium text-foreground">
                           {Array.isArray(detail.value) ? (
                              detail.value.map((line) => <span key={line} className="block">{line}</span>)
                                 ) : (
                                    detail.value
                                   )}
                              </span>
                      </span>
                    </div>
                  )
                  return detail.href ? (
                    <a key={detail.label} href={detail.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={detail.label}>{content}</div>
                  )
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
