/** @jsxRuntime classic */
import React from 'react'
import { MessageCircle } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { CompanyVideo } from '@/components/company-video'
import { Services } from '@/components/services'
import { WhyUs } from '@/components/why-us'
import { Process } from '@/components/process'
import { Stats } from '@/components/stats'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { whatsappLink } from '@/lib/media'

export default function Page() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CompanyVideo />
        <Services />
        <WhyUs />
        <Process />
        <Stats />
        <Contact />
      </main>
      <Footer />

      {/* Floating WhatsApp shortcut */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Request service via WhatsApp"
        className="group fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-gradient-to-br from-primary to-emerald text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40"
      >
        <MessageCircle className="size-6 transition-transform duration-300 group-hover:scale-110" />
      </a>
    </React.Fragment>
  )
}
