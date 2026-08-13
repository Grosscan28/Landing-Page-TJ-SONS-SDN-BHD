'use client'

import { useEffect, useRef, useState } from 'react'
import { Phone, CalendarCheck, Truck, Recycle, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

const steps = [
  { icon: Phone, title: 'Contact Us', desc: 'Reach out via WhatsApp or phone and tell us what you need.' },
  { icon: CalendarCheck, title: 'Schedule', desc: 'We confirm a time that works and prepare the right equipment.' },
  { icon: Truck, title: 'Service', desc: 'Our team arrives on time and works cleanly and efficiently.' },
  { icon: Recycle, title: 'Proper Disposal', desc: 'Waste is transported and treated at licensed facilities.' },
  { icon: CheckCircle2, title: 'Complete', desc: 'We leave the site clean and share your service documentation.' },
]

export function Process() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState(-1)

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll('[data-step]')
    if (!items) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.step)
            setActive((prev) => Math.max(prev, idx))
          }
        })
      },
      { threshold: 0.6 },
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const progress = active < 0 ? 0 : ((active + 1) / steps.length) * 100

  return (
    <section id="process" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald">
            How It Works
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            A simple, transparent process
          </h2>
        </Reveal>

        <div ref={containerRef} className="relative">
          {/* Desktop connecting track */}
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-border lg:block">
            <div
              className="h-full bg-gradient-to-r from-primary to-emerald transition-[width] duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <ol className="grid gap-8 lg:grid-cols-5 lg:gap-4">
            {steps.map((step, i) => {
              const isActive = i <= active
              return (
                <li key={step.title} data-step={i} className="relative flex gap-5 lg:block">
                  {/* Node */}
                  <div className="relative z-10 shrink-0">
                    <div
                      className={cn(
                        'grid size-16 place-items-center rounded-2xl border-2 bg-background transition-all duration-500',
                        isActive
                          ? 'border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                          : 'border-border text-muted-foreground',
                      )}
                    >
                      <step.icon className="size-6" />
                    </div>
                    {/* Mobile vertical connector */}
                    {i < steps.length - 1 && (
                      <div className="absolute left-1/2 top-16 h-full w-0.5 -translate-x-1/2 bg-border lg:hidden">
                        <div
                          className={cn(
                            'w-full bg-primary transition-[height] duration-500',
                            isActive ? 'h-full' : 'h-0',
                          )}
                        />
                      </div>
                    )}
                  </div>

                  <div className="pb-6 lg:pb-0 lg:pt-6">
                    <span
                      className={cn(
                        'font-display text-sm font-semibold tracking-widest transition-colors duration-500',
                        isActive ? 'text-emerald' : 'text-muted-foreground/60',
                      )}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground lg:pr-4">
                      {step.desc}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
