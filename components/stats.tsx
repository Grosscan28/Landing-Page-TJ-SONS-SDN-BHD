'use client'

import { Reveal } from '@/components/reveal'
import { CountUp } from '@/components/count-up'
import { media } from '@/lib/media'

const stats = [
  { end: 250, suffix: '+', label: 'Estates Serviced' },
  { end: 10000, suffix: '+', label: 'Septic Tanks Cleaned' },
  { end: 10, suffix: '+', label: 'Years of Experience' },
  { end: 100, suffix: '%', label: 'Eco-Friendly Commitment' },
]

export function Stats() {
  const logos = [...media.vendorLogos, ...media.vendorLogos]

  return (
    <section className="relative overflow-hidden bg-[#071a33] py-24 md:py-28">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(38,110,255,0.24),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(36,190,205,0.16),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">The Proof</p>
          <h2 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Experience you can see in every project
          </h2>
        </Reveal>

        <div className="grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100} className="border-white/10 text-center lg:border-l lg:first:border-l-0">
              <p className="font-display text-4xl font-semibold text-white sm:text-5xl">
                <CountUp end={stat.end} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm font-medium text-white/60">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-20 overflow-hidden">
          <p className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Trusted by leading companies</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max items-center gap-12 motion-safe:animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
              {logos.map((src, i) => (
                <div key={`${src}-${i}`} className="flex h-16 w-40 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-5 backdrop-blur-sm">
                  <img src={src} alt="Vendor company logo" className="max-h-11 max-w-[130px] w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
