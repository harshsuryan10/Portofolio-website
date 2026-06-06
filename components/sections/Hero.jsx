'use client'

import { useEffect, useState } from 'react'
import { FaReact, FaNode, FaDatabase } from 'react-icons/fa'
import { SiTypescript, SiMongodb } from 'react-icons/si'

const roles = ['Full Stack Developer']

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-full flex items-center justify-center px-4 pt-10 pb-10">
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-1 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-4 animate-slideInLeft">
          <div className="inline-block">
            <span className="text-sm font-semibold text-accent bg-secondary px-4 py-2 rounded-full">
              Welcome to my portfolio
            </span>
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Hi, I&apos;m <span className="text-accent">Harsh Suryan</span>
            </h1>
          </div>

          <div className="h-10 md:h-12">
            <p className="text-xl md:text-2xl font-semibold text-primary">
              I am a <span className="text-accent">{roles[0]}</span>
            </p>
          </div>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">
            I&apos;m a passionate Full Stack Developer specializing in the MERN stack with expertise in React, Node.js, and modern web technologies. I create responsive, performant, and user-friendly web applications. Currently interning at Aarogya Aadhar, developing full-stack web solutions.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex gap-6 pt-4">
            <a
              href="https://linkedin.com/in/harshsuryan10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.427-.659 1.191-1.597 2.897-1.597 2.117 0 3.704 1.385 3.704 4.362v5.588zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.956.77-1.704 1.963-1.704 1.192 0 1.915.748 1.937 1.704 0 .946-.745 1.704-1.985 1.704zm1.946 11.596h-3.88V9.724h3.88v10.727zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z" />
              </svg>
            </a>
            <a
              href="https://github.com/harshsuryan10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="mailto:harsh.suryan10@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
