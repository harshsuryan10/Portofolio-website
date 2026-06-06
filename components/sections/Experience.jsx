'use client'

import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

// 1. Calculate duration for individual experiences (handles years & months)
const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  // Adjust if the end day is earlier in the month than the start day
  if (end.getDate() < start.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }

  if (years === 0 && months === 0) return 'Less than 1 month';

  const yearStr = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '';
  const monthStr = months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : '';

  return [yearStr, monthStr].filter(Boolean).join(' ');
};

// 2. Calculate TOTAL experience across all jobs combined
const calculateTotalExperience = (experiencesList) => {
  let totalMonths = 0;

  experiencesList.forEach((exp) => {
    const start = new Date(exp.startDate);
    const end = exp.endDate ? new Date(exp.endDate) : new Date();

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }
    if (end.getDate() < start.getDate()) {
      months--;
    }

    totalMonths += (years * 12) + Math.max(0, months);
  });

  const totalYears = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  const yearStr = totalYears > 0 ? `${totalYears} yr${totalYears > 1 ? 's' : ''}` : '';
  const monthStr = remainingMonths > 0 ? `${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}` : '';

  return [yearStr, monthStr].filter(Boolean).join(' ') || 'Fresher';
};

const experiences = [
  {
    id: 1,
    position: 'Full Stack Developer',
    company: 'Aarogya Aadhar',
    location: 'Pune',
    startDate: '2025-06-25',
    endDate: null,
    description:
      'Developing and maintaining full-stack web applications using React for front-end and Node.js for back-end. Collaborating with UI/UX designers and backend engineers to deliver responsive and scalable applications.',
    highlights: [
      'Building responsive web applications with React.js',
      'Developing backend services with Node.js and Express',
      'Troubleshooting and resolving issues across the full stack',
      'Collaborating with cross-functional teams',
    ],
  },
  {
    id: 2,
    position: 'Web Developer (Intern)',
    company: 'New Waves Technology',
    location: 'Bangalore',
    startDate: '2025-03-23',
    endDate: '2025-06-23',
    description:
      'Completed a Project Management System using MERN stack. Managed multiple projects with 100% client satisfaction while building responsive web designs.',
    highlights: [
      'Completed Project Management System for enterprise use',
      'Managed 5+ projects in web design with React',
      'Achieved 100% client satisfaction rating',
      'Troubleshot and fixed website issues',
    ],
  },
];

const education = [
  {
    id: 1,
    degree: 'B.Tech - Computer Science and Engineering',
    institution: 'University Visvesvaraya College of Engineering, Bangalore',
    year: '2024',
    cgpa: 'CGPA: 8.19',
  },
  {
    id: 2,
    degree: 'PU College',
    institution: 'Sai Spoorthi PU College, Bidar',
    year: '2020',
    cgpa: 'Score: 83.67%',
  },
];

export default function Experience() {
  const totalExperienceString = calculateTotalExperience(experiences);

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience & Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {/* Added total experience to the heading subtitle here */}
            My professional journey of <span className="font-semibold text-accent">{totalExperienceString}</span> and academic background
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3 animate-fadeInUp">
              <FaBriefcase className="w-8 h-8 text-accent" />
              Professional Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative p-6 rounded-xl border border-border bg-card hover:border-accent hover:shadow-xl hover:shadow-accent/10 transition-all duration-300">
                    <div className="absolute left-6 top-6 w-3 h-3 rounded-full bg-accent"></div>

                    <div className="ml-6">
                      <h4 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {exp.position}
                      </h4>
                      <p className="text-accent font-semibold mt-1">{exp.company}</p>
                      
                      {/* Formatted Date string to show "Present" for current jobs */}
                      <p className="text-sm text-muted-foreground mt-1">
                        {exp.location} • {new Date(exp.startDate).getFullYear()} - {exp.endDate ? new Date(exp.endDate).getFullYear() : 'Present'}
                      </p>
                      
                      {/* Uses the new calculation logic */}
                      <p className="text-xs text-accent font-semibold mt-2 bg-accent/10 px-2 py-1 inline-block rounded">
                        {calculateDuration(exp.startDate, exp.endDate)}
                      </p>
                      
                      <p className="text-muted-foreground mt-3 text-sm">{exp.description}</p>

                      <ul className="mt-4 space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-accent mt-1">▸</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3 animate-fadeInUp">
              <FaGraduationCap className="w-8 h-8 text-accent" />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${(index + experiences.length) * 100}ms` }}
                >
                  <div className="relative p-6 rounded-xl border border-border bg-card hover:border-accent hover:shadow-xl hover:shadow-accent/10 transition-all duration-300">
                    <div className="absolute left-6 top-6 w-3 h-3 rounded-full bg-accent"></div>

                    <div className="ml-6">
                      <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                      <p className="text-accent font-semibold mt-1">{edu.institution}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-muted-foreground">{edu.year}</span>
                        <span className="text-sm font-semibold text-accent">{edu.cgpa}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}