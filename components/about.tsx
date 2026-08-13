'use client'

import { CheckCircle2 } from 'lucide-react'
import { media } from '@/lib/media'
import { Reveal } from '@/components/reveal'

const points = [
  'Modern vacuum equipment and trained specialists',
  'Fully licensed, insured and compliant disposal',
  'Transparent pricing with no hidden surprises',
]

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Editorial image composition */}
        <Reveal className="relative">
          <div className="group relative overflow-hidden rounded-3xl shadow-xl shadow-primary/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={media.aboutMain || '/placeholder.svg'}
              alt="Verdant service team beside their equipment"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:aspect-[4/3] lg:aspect-[4/5]"
            />
          </div>

          {/* Overlapping secondary image */}
          <div className="absolute -bottom-8 -right-4 hidden w-48 overflow-hidden rounded-2xl border-4 border-background shadow-xl sm:block lg:w-56">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={media.aboutSecondary || '/placeholder.svg'}
              alt="Fresh green sprout held in hands"
              className="aspect-square w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
            />
          </div>

          {/* Floating experience badge */}
          <div className="absolute -left-4 top-8 rounded-2xl bg-primary px-5 py-4 text-primary-foreground shadow-lg">
            <p className="font-display text-3xl font-semibold leading-none">10+</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-primary-foreground/80">
              Years
            </p>
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal delay={120}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald">
            Who We Are
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            A dedicated environmental partner for cleaner communities
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            For over a decade we have helped estates, businesses and households manage
            waste responsibly. Our mission is simple: deliver reliable service while
            protecting the land, water and air that we all share.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald" />
                <span className="text-foreground/90">{point}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
          >
            Get in touch with our team
          </a>
        </Reveal>
      </div>
    </section>
  )
}
