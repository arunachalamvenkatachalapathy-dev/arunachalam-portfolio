import { motion } from 'framer-motion'

const achievements = [
  {
    title: 'Selected Post-Graduate Researcher',
    org: '"Re-Imagining Urban Rivers" Season 6',
    body: 'National Institute of Urban Affairs (NIUA) & River Cities Alliance, Government of India. Awarded a ₹50,000 competitive research grant with national-level mentorship support.',
  },
]

const certifications = [
  'Sustainable Finance (UN CC:e-Learn)',
  'CSRD Fundamentals',
  'GIS for Climate Change (Esri)',
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-surface-border">
      
      <div className="grid md:grid-cols-2 gap-16 md:gap-24">
        
        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-8">
            Recognition
          </h2>
          {achievements.map((a) => (
            <div key={a.title} className="mb-12">
              <h3 className="text-xl md:text-2xl font-display font-bold text-text-primary mb-2">{a.title}</h3>
              <p className="text-base font-medium text-text-primary mb-4">{a.org}</p>
              <p className="text-base text-text-secondary leading-relaxed">{a.body}</p>
            </div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-8">
            Certifications
          </h2>
          <ul className="space-y-6">
            {certifications.map((cert) => (
              <li key={cert} className="text-xl font-medium text-text-primary">
                {cert}
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  )
}
