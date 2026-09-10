'use client'

import { MapPin, ArrowUpRight } from 'lucide-react'

export function Coverage() {
  return (
    <section id="coverage" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <MapPin className="size-3.5" /> Service Coverage
          </p>
          <h2 className="max-w-xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Serving Sabah today. Expanding across Malaysia tomorrow.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
            Our current service coverage is focused in Sabah, Malaysia. As TJ & SONS grows,
            additional service areas can be activated here without changing the experience.
          </p>

          <div className="mt-8 rounded-3xl border border-primary/10 bg-card p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Currently available
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-foreground">Sabah</h3>
                <p className="mt-1 text-sm text-muted-foreground">Malaysia</p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                <span className="size-1.5 rounded-full bg-primary" /> Available
              </span>
            </div>
            <div className="mt-5 h-px bg-border" />
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">More locations</span>
              <span className="inline-flex items-center gap-1 font-medium text-foreground">
                Coming soon <ArrowUpRight className="size-4" />
              </span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-border/70 bg-[#eef7f5] p-5 shadow-sm sm:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(20,150,145,0.13),transparent_55%)]" />
          <div className="relative flex h-full min-h-[380px] items-center justify-center">
            <img
              src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Sabah_in_Malaysia.svg"
              alt="Map showing Sabah in Malaysia"
              className="max-h-[360px] w-full object-contain drop-shadow-xl"
            />
            <div className="absolute bottom-4 left-4 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md sm:bottom-7 sm:left-7">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="size-2.5 rounded-full bg-primary shadow-[0_0_0_5px_rgba(20,150,145,0.12)]" />
                Sabah
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground">Current service area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
