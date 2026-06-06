'use client'

import { useState } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { FcStackOfPhotos } from 'react-icons/fc'

const projectsData = [
  {
    id: 1,
    title: 'Project Management System',
    description:
      'A comprehensive web application built with MERN stack for managing projects, tasks, tickets, and timesheets. Features role-based access control, real-time updates, and productivity tracking.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    image: 'project-1',
    github: 'https://github.com/harshsuryan10',
    link: '#',
  },
  {
    id: 2,
    title: 'Online Birth Certificate Management System',
    description:
      'A user-friendly web-based system for streamlining birth certificate applications. Includes application tracking, status updates, and digital certificate generation for enhanced accessibility.',
    technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'JavaScript'],
    image: 'project-2',
    github: 'https://github.com/harshsuryan10/OnlineBirtheCertificateManagement.git',
    link: '#',
  },
  {
    id: 3,
    title: 'Parallax Website',
    description:
      'An immersive parallax website built with HTML and CSS featuring layered backgrounds moving at different speeds. Creates dynamic 3D effects and engaging user experience with smooth scrolling.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: 'project-3',
    github: 'https://github.com/harshsuryan10/Parallax-website.git',
    link: 'https://parallax-website-harshsuryan10.netlify.app/',
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my latest work and technical expertise across various technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="group relative overflow-hidden rounded-xl border border-border bg-card hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-accent/20 to-primary/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                      {project.id === 1 ? '📊' : project.id === 2 ? '📋' : '🌐'}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-2xl">#{project.id.toString().padStart(2, '0')}</span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full hover:bg-accent/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 text-sm hover:scale-105"
                    >
                      <FiGithub className="w-4 h-4" />
                      Code
                    </a>
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300 text-sm"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
