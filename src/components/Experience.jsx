import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'ESG Technical Intern',
    company: 'EnviroWealth Services Pvt. Ltd.',
    duration: 'Nov 2025 – Mar 2026',
    bullets: [
      'Contributed to AI-enabled BRSR reporting workflows and Scope 1, 2, and selected Scope 3 GHG inventories.',
      'Designed a value chain data collection template capturing supplier GHG emissions, water usage, waste, employee count, safety incidents, and governance indicators.',
      'Created a 5-tab BRSR Core reporting template calculating environmental metrics per SEBI mandatory disclosure requirements.',
    ],
  },
  {
    role: 'Environmental Engineering Intern',
    company: 'Tamil Nadu Water Supply and Drainage Board (TWAD)',
    duration: 'Jun 2025 – Jul 2025',
    bullets: [
      'Conducted process, hydraulic, and energy audits for a 16 MLD wastewater treatment plant.',
      'Analyzed operational data to identify efficiency gaps, resulting in ~7% improvement in energy efficiency.',
      'Gained exposure to public-sector infrastructure performance monitoring and compliance.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto border-t border-surface-border">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-text-primary">
          Experience.
        </h2>
      </motion.div>

      <div className="space-y-16">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="grid md:grid-cols-12 gap-8 md:gap-24 items-start"
          >
            {/* Timeline / Duration */}
            <div className="md:col-span-3 text-sm font-semibold uppercase tracking-widest text-text-muted mt-1">
              {exp.duration}
            </div>

            {/* Content */}
            <div className="md:col-span-9">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-2">
                {exp.role}
              </h3>
              <p className="text-lg font-medium text-text-secondary mb-8">
                {exp.company}
              </p>
              <ul className="space-y-4">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="text-base text-text-secondary leading-relaxed">
                    — {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}
