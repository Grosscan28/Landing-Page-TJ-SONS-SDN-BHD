'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { media } from '@/lib/media'
import { Reveal } from '@/components/reveal'

export function Gallery() {
  const [index, setIndex] = useState(0)
  const total = media.workPhotos.length

  const goPrev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1))
  const goNext = () => setIndex((i) => (i === total - 1 ? 0 : i + 1))

  return (
    <section id="our-work" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald">
            Our Work
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            See the difference we make on the ground
          </h2>
        </Reveal>

        <Reveal className="relative overflow-hidden rounded-3xl bg-muted shadow-xl shadow-primary/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
               src={media.workPhotos[index] || '/placeholder.svg'}
                alt={`Completed job photo ${index + 1}`}
                className="max-h-[520px] w-full object-contain transition-opacity duration-300"
            />

          {/* Left arrow */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-primary shadow-lg transition-all duration-200 hover:scale-110 hover:bg-white"
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* Right arrow */}
          <button
            type="button"
            onClick={goNext}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-primary shadow-lg transition-all duration-200 hover:scale-110 hover:bg-white"
          >
            <ChevronRight className="size-5" />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {media.workPhotos.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={`size-2 rounded-full transition-all duration-200 ${
                  i === index ? 'w-6 bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}