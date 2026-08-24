import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const education = [
  {
    degree: 'M.E. Environmental Engineering',
    institution: 'Alagappa Chettiar Government College of Engineering & Technology',
    location: 'Karaikudi, Tamil Nadu',
    year: '2026 (Expected)',
    cgpa: '9.0 / 10',
    highlight: 'Dissertation: Environmental Risk & ESG Analysis of NLCIL',
  },
  {
    degree: 'B.E. Civil Engineering',
    institution: 'Government College of Engineering',
    location: 'Tirunelveli, Tamil Nadu',
    year: '2022',
    cgpa: '7.8 / 10',
    highlight: null,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="section-wrapper max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16 text-center">
          Academic <span className="text-gradient-accent">Background.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-border flex items-center justify-center mb-6">
                <GraduationCap className="text-accent" size={24} />
              </div>

              <h3 className="text-xl font-display font-semibold text-white mb-2">{edu.degree}</h3>
              <p className="text-sm font-medium text-accent mb-4">{edu.institution}</p>
              
              <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted mb-6">
                <span>{edu.location}</span>
                <span className="w-1 h-1 rounded-full bg-surface-border" />
                <span>{edu.year}</span>
              </div>

              <div className="mt-auto">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-surface-hover border border-surface-border mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">CGPA: <span className="text-white">{edu.cgpa}</span></span>
                </div>
                {edu.highlight && (
                  <p className="text-sm text-text-secondary leading-relaxed p-4 rounded-xl bg-accent/5 border border-accent/10">
                    <strong className="text-accent">Highlight:</strong> {edu.highlight}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
