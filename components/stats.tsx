'use client'

import { CountUp } from '@/components/count-up'
import { Reveal } from '@/components/reveal'

const stats = [
  { end: 250, suffix: '+', label: 'Estates Serviced' },
  { end: 10000, suffix: '+', label: 'Septic Tanks Cleaned' },
  { end: 10, suffix: '+', label: 'Years of Experience' },
  { end: 100, suffix: '%', label: 'Eco-Friendly Commitment' },
]

export function Stats() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      {/* Deep forest gradient band */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(120deg, oklch(0.27 0.05 158) 0%, oklch(0.44 0.09 156) 55%, oklch(0.34 0.07 160) 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(90% 120% at 85% 10%, oklch(0.82 0.19 130 / 0.16) 0%, transparent 55%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-lime">
            The Proof
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Numbers that reflect our commitment
          </h2>
        </Reveal>

        <div className="grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 100}
              className="border-white/15 text-center lg:border-l lg:first:border-l-0"
            >
              <p className="font-display text-4xl font-semibold text-white sm:text-5xl">
                <CountUp end={stat.end} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm font-medium text-white/75">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
