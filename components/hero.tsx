'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, MessageCircle, ShieldCheck, Leaf, Headphones } from 'lucide-react'
import { media, whatsappLink } from '@/lib/media'

const trust = [
  { icon: Leaf, title: 'Eco Friendly', desc: 'Safe for your environment' },
  { icon: ShieldCheck, title: 'Licensed & Insured', desc: 'Professional & reliable' },
  { icon: Headphones, title: 'Great Support', desc: "We're here to help" },
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

  const fade = Math.max(0, 1 - scrollY / 500)
  const lift = Math.min(scrollY * 0.18, 80)
  const imageScale = 1 + Math.min(scrollY / 5000, 0.045)

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-[#062f31]">
      <div className="absolute inset-0" style={{ transform: `scale(${imageScale})` }}>
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
            alt="TJ & SONS team and service trucks"
            className="size-full object-cover object-center"
          />
        )}
      </div>

      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,31,34,0.78)_0%,rgba(2,31,34,0.48)_42%,rgba(2,31,34,0.18)_78%,rgba(2,31,34,0.3)_100%)]" />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,20,22,0.58)_0%,transparent_32%,rgba(0,20,22,0.1)_62%,rgba(0,20,22,0.78)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-28 pt-28 md:px-8">
        <div className="max-w-3xl" style={{ opacity: fade, transform: `translateY(${lift}px)` }}>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
            Professional · Reliable · Responsible
          </p>
          <p className="mb-3 font-display text-lg font-semibold italic text-[#57d0c4] sm:text-xl">
            "You Dump, We Pump"
          </p>

          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.03] text-white sm:text-5xl lg:text-7xl">
            Professional Environmental Services,
            <span className="block text-[#67ddd0]">Built to Keep You Moving.</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
            Septic tank cleaning and environmental services backed by professional equipment,
            experienced crews, and dependable service across Sabah.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#159d95] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#11b1a6] hover:shadow-xl"
            >
              <MessageCircle className="size-5 transition-transform duration-300 group-hover:scale-110" />
              Request Service via WhatsApp
            </a>
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/8 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
            >
              Explore Our Services
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid max-w-4xl gap-3 sm:grid-cols-3" style={{ opacity: fade }}>
          {trust.map((item) => (
            <div key={item.title} className="flex items-center gap-3 rounded-2xl border border-white/15 bg-black/15 p-4 shadow-lg shadow-black/10 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/12 text-[#67ddd0]">
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

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </section>
  )
}
