'use client'

import { Leaf, Clock4, BadgeCheck, ThumbsUp } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const reasons = [
  {
    icon: Leaf,
    title: 'Eco-First Approach',
    desc: 'Every job is designed to minimise environmental impact and protect local ecosystems.',
  },
  {
    icon: BadgeCheck,
    title: 'Certified & Compliant',
    desc: 'Fully licensed operators and documented disposal at approved facilities.',
  },
  {
    icon: Clock4,
    title: 'On-Time, Every Time',
    desc: 'Punctual scheduling and rapid emergency response you can rely on.',
  },
  {
    icon: ThumbsUp,
    title: 'Trusted by Communities',
    desc: 'Hundreds of estates and businesses count on us year after year.',
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="relative scroll-mt-20 bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald">
              Why Choose Us
            </p>
            <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              Reliability you can feel good about
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              We combine modern equipment with a genuine commitment to sustainability, so
              you get a spotless result without compromising the environment.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 90}>
                <div className="group h-full rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                  <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <reason.icon className="size-6 transition-transform duration-300 group-hover:-rotate-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
