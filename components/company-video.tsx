'use client'

import { useEffect, useState } from 'react'
import { Play, X, Clock, Sparkles } from 'lucide-react'
import { media, companyProfile } from '@/lib/media'
import { Reveal } from '@/components/reveal'

export function CompanyVideo() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald">
            Company Profile
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            See how we work, from call to clean
          </h2>
        </Reveal>

        <Reveal>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Play company profile video"
            className="group relative block w-full overflow-hidden rounded-3xl shadow-xl shadow-primary/10"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={media.companyProfileThumb || '/placeholder.svg'}
              alt="Verdant company facility"
              className="aspect-video w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, oklch(0.2 0.04 158 / 0.25) 0%, oklch(0.2 0.04 158 / 0.55) 100%)',
              }}
            />

            {/* Play button */}
            <span className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-primary shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white md:size-24">
              <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
              <Play className="relative size-8 translate-x-0.5 fill-current md:size-9" />
            </span>

            {/* Duration */}
            <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              <Clock className="size-3.5" />
              {companyProfile.videoDuration}
            </span>

            {/* Floating info card */}
            <span className="absolute bottom-4 left-4 hidden max-w-xs items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 text-left backdrop-blur-md sm:flex">
              <Sparkles className="mt-0.5 size-5 shrink-0 text-lime" />
              <span className="text-sm leading-snug text-white">
                A behind-the-scenes look at our eco-conscious process and the team that
                makes it happen.
              </span>
            </span>
          </button>
        </Reveal>
      </div>

      {/* Modal / lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Company profile video"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute -top-12 right-0 grid size-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="size-5" />
            </button>

            <div className="rounded-2xl bg-black shadow-2xl">
              {media.companyProfileVideo ? (
                <video
                  className="aspect-video w-full"
                  controls
                  autoPlay
                  playsInline
                  poster={media.companyProfileThumb}
                >
                  <source src={media.companyProfileVideo} type="video/mp4" />
                </video>
              ) : (
                <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 text-center text-white/70">
                  <Play className="size-10" />
                  <p className="max-w-sm text-sm">
                    Add your company profile video in{' '}
                    <code className="rounded bg-white/10 px-1.5 py-0.5 text-white">
                      lib/media.ts
                    </code>{' '}
                    to play it here.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
