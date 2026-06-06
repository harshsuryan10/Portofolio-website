'use client'

import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'
export default function Home() {
  return (
    <main className="bg-gradient-to-b from-background via-background to-background">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}
