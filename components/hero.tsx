'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, MessageCircle, ShieldCheck, Leaf, Headphones } from 'lucide-react'
import { media, whatsappLink } from '@/lib/media'

const trust = [
  {
    icon: Leaf,
    title: 'Eco Friendly',
    desc: 'Safe for your environment',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    desc: 'Professional & reliable',
  },
  {
    icon: Headphones,
    title: 'Great Support',
    desc: "We're here to help",
  },
]

export function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setScrollY(window.scrollY))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  // Subtle scroll-driven motion (disabled feel for reduced motion via clamps)
  const fade = Math.max(0, 1 - scrollY / 500)
  const lift = Math.min(scrollY * 0.25, 120)
  const videoScale = 1 + Math.min(scrollY / 4000, 0.08)

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background video with poster fallback */}
      <div className="absolute inset-0" style={{ transform: `scale(${videoScale})` }}>
        {media.heroVideo ? (
          <video
            ref={videoRef}
            className="size-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={media.heroPoster}
          >
            <source src={media.heroVideo} type="video/mp4" />
          </video>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={media.heroPoster || '/placeholder.svg'}
            alt="Aerial view of a lush green environment"
            className="size-full object-cover"
          />
        )}
      </div>

      {/* Sophisticated environmental gradient overlay */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, oklch(0.27 0.05 158 / 0.72) 0%, oklch(0.3 0.05 158 / 0.28) 38%, oklch(0.27 0.05 158 / 0.30) 70%, oklch(0.2 0.04 158 / 0.82) 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 15% 30%, oklch(0.44 0.09 156 / 0.35) 0%, transparent 55%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-28 pt-28 md:px-8">
        <div
          className="max-w-3xl"
          style={{ opacity: fade, transform: `translateY(${lift}px)` }}
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
            Eco-Friendly · Professional · Reliable
          </p>

          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Keeping the Environment{' '}
            <span className="brand-gradient-text">Clean, Safe &amp; Sustainable</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
            Professional septic tank cleaning and environmental services you can trust.
            Responsible disposal, modern equipment, and a team that treats your property
            like its own.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-primary to-emerald px-7 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 hover:brightness-110"
            >
              <MessageCircle className="size-5 transition-transform duration-300 group-hover:scale-110" />
              Request Service via WhatsApp
            </a>
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
            >
              Explore Our Services
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Floating trust indicators */}
        <div
          className="mt-14 grid max-w-4xl gap-3 sm:grid-cols-3"
          style={{ opacity: fade }}
        >
          {trust.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 shadow-lg shadow-black/10 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/15 text-lime">
                <item.icon className="size-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold text-white">{item.title}</span>
                <span className="block text-xs text-white/70">{item.desc}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade into the page background for continuity */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background"
      />
    </section>
  )
}
