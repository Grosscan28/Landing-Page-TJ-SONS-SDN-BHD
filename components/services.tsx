'use client'

import { ArrowUpRight, Droplets, Recycle, Truck, Building2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: Droplets,
    title: 'Septic Tank Cleaning',
    desc: 'Thorough desludging and cleaning using modern vacuum equipment for homes and estates.',
    detail: 'Fast and odor-controlled on completion.',
  },
  {
    icon: Recycle,
    title: 'Eco Waste Disposal',
    desc: 'Responsible treatment and disposal of waste at licensed processing facilities.',
    detail: 'Zero illegal dumping — every load is properly documented.',
  },
  {
    icon: Truck,
    title: 'Emergency Response',
    desc: 'Rapid on-call service for overflows and blockages, day or night.',
    detail: 'Priority dispatch with a typical arrival within hours.',
  },
  {
    icon: Building2,
    title: 'Estate & Commercial',
    desc: 'Scheduled maintenance contracts for estates, factories and institutions.',
    detail: 'Custom plans with reporting and compliance certificates.',
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-20 bg-secondary/40 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald">
            What We Do
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Complete environmental services under one roof
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            We provide reliable and sustainable sewerage management services that meet the needs of our customers and protect public health and the environment at a reasonable price.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 90}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                {/* Hover wash */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald/0 to-emerald/0 transition-colors duration-300 group-hover:from-emerald/[0.06] group-hover:to-lime/[0.05]" />

                <span className="relative grid size-14 place-items-center rounded-2xl bg-secondary text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-6 transition-transform duration-300 group-hover:-rotate-6" />
                </span>

                <h3 className="relative mt-6 font-display text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>

                {/* Revealed detail on hover */}
                <div className="relative grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover:grid-rows-[1fr]">
                  <p className="overflow-hidden text-sm leading-relaxed text-emerald opacity-0 transition-opacity duration-300 group-hover:pt-3 group-hover:opacity-100">
                    {service.detail}
                  </p>
                </div>

                <span className="relative mt-auto flex items-center gap-1.5 pt-6 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
