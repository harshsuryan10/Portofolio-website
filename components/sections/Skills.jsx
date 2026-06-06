'use client'

import { FaReact, FaNode, FaJava, FaPython, FaGit, FaDocker } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiMysql } from 'react-icons/si'
import { BiCodeAlt } from 'react-icons/bi'

const skillCategories = [
  {
    category: 'Frontend',
    icon: FaReact,
    skills: ['React', 'HTML5', 'CSS3', 'TailwindCSS', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Backend',
    icon: FaNode,
    skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'PHP', 'REST APIs'],
  },
  {
    category: 'Languages',
    icon: BiCodeAlt,
    skills: ['JavaScript', 'Java', 'C++', 'Python', 'PHP', 'SQL'],
  },
  {
    category: 'Tools & Platforms',
    icon: FaGit,
    skills: ['Git/GitHub', 'VS Code', 'Vercel', 'Netlify', 'Firebase', 'Docker'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of tools and technologies I&apos;ve mastered throughout my development journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="group p-6 rounded-xl border border-border bg-card hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 h-full hover:-translate-y-2">
                <div className="flex flex-col items-center mb-4">
                  <category.icon className="w-12 h-12 text-accent mb-3 group-hover:animate-float" />
                  <h3 className="text-xl font-bold text-foreground text-center group-hover:text-accent transition-colors">
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-accent/10 transition-colors group-hover:translate-x-1 transition-transform"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="text-foreground font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 rounded-xl bg-secondary/50 border border-border animate-fadeInUp" style={{ animationDelay: '400ms' }}>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">3+</div>
              <p className="text-muted-foreground">Years of Learning</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">5+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-muted-foreground">Dedication & Quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
