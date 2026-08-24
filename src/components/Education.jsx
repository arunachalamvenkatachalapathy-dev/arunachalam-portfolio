import { motion } from 'framer-motion'

const education = [
  {
    degree: 'M.E. Environmental Engineering',
    institution: 'Alagappa Chettiar Government College of Engineering & Technology',
    year: '2026',
    cgpa: '9.0 / 10',
    highlight: 'Dissertation: Environmental Risk & ESG Analysis of NLCIL',
  },
  {
    degree: 'B.E. Civil Engineering',
    institution: 'Government College of Engineering, Tirunelveli',
    year: '2022',
    cgpa: '7.8 / 10',
    highlight: null,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto border-t border-surface-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-text-primary">
          Education.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <h3 className="text-2xl font-display font-bold text-text-primary mb-2">{edu.degree}</h3>
            <p className="text-lg font-medium text-text-secondary mb-6">{edu.institution}</p>
            
            <div className="flex items-center gap-4 text-sm font-semibold uppercase tracking-widest text-text-muted mb-6">
              <span>{edu.year}</span>
              <span>•</span>
              <span>CGPA: {edu.cgpa}</span>
            </div>

            {edu.highlight && (
              <p className="text-base text-text-secondary leading-relaxed bg-surface p-4 border border-surface-border rounded-xl">
                {edu.highlight}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
