import { motion } from 'framer-motion'
import { Award, BadgeCheck } from 'lucide-react'

const achievements = [
  {
    icon: Award,
    title: 'Selected Post-Graduate Researcher',
    org: '"Re-Imagining Urban Rivers" Season 6',
    body: 'National Institute of Urban Affairs (NIUA) & River Cities Alliance, Government of India',
    detail: 'Awarded a ₹50,000 competitive research grant with national-level mentorship support — Jal Shakti Ministry funded.',
  },
]

const certifications = [
  { name: 'Sustainable Finance', issuer: 'UN CC:e-Learn' },
  { name: 'CSRD Fundamentals', issuer: 'Online Certification' },
  { name: 'GIS for Climate Change', issuer: 'Esri' },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="section-wrapper max-w-5xl">
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Key Achievement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-white mb-8">
              Key <span className="text-gradient-accent">Recognition.</span>
            </h2>
            {achievements.map((a) => {
              const Icon = a.icon
              return (
                <div key={a.title} className="glass-card p-8 border-l-4 border-l-accent !rounded-l-none relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                    <Icon size={120} />
                  </div>
                  <div className="flex gap-4 items-start mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-white mb-1">{a.title}</h3>
                      <p className="text-sm font-medium text-accent">{a.org}</p>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary mb-4 leading-relaxed relative z-10">{a.body}</p>
                  <p className="text-sm text-white font-medium leading-relaxed bg-surface-hover p-4 rounded-xl border border-surface-border relative z-10">
                    {a.detail}
                  </p>
                </div>
              )
            })}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-display font-bold text-white mb-8">
              Certifications.
            </h2>
            <div className="flex flex-col gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-4 p-5 glass-card group"
                >
                  <div className="w-10 h-10 rounded-full bg-surface-border flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <BadgeCheck className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-white">{cert.name}</h4>
                    <p className="text-sm text-text-muted">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
