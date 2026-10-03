import { motion } from 'framer-motion'

const achievements = [
  {
    title: 'Selected postgraduate thesis | STC Season 6',
    org: 'Re-Imagining Urban Rivers · NIUA + National Mission for Clean Ganga',
    body: 'National Student Thesis Competition, partnered by the Ministry of Housing and Urban Affairs and the Ministry of Jal Shakti. Selected for the ₹50,000 research scholarship for a Paravanar watershed restoration proposal in Tamil Nadu, connecting industrial water pollution, nature-based treatment and community-led river governance.',
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
