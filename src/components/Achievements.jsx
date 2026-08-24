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
  {
    name: 'Sustainable Finance',
    issuer: 'UN CC:e-Learn',
  },
  {
    name: 'CSRD Fundamentals',
    issuer: 'Online Certification',
  },
  {
    name: 'GIS for Climate Change',
    issuer: 'Esri',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad border-t border-surface-border dark:border-dark-border" aria-label="Achievements and certifications">
      <div className="section-wrapper">
        <p className="section-label reveal">Recognition</p>
        <h2 className="section-heading reveal">Achievements & Certifications</h2>

        <div className="grid md:grid-cols-2 gap-8 reveal">
          {/* Key Achievement */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-charcoal-muted dark:text-gray-500 mb-4">
              Key Achievement
            </h3>
            {achievements.map((a) => {
              const Icon = a.icon
              return (
                <div key={a.title} className="card border-l-4 border-teal-700 dark:border-teal-500 !rounded-l-none">
                  <div className="flex gap-3 items-start mb-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-teal-700/10 dark:bg-teal-500/15 flex items-center justify-center">
                      <Icon size={18} className="text-teal-700 dark:text-teal-400" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal dark:text-white text-sm leading-snug mb-0.5">
                        {a.title}
                      </h4>
                      <p className="text-xs text-teal-700 dark:text-teal-400 font-medium">{a.org}</p>
                    </div>
                  </div>
                  <p className="text-xs text-charcoal-muted dark:text-gray-500 mb-2 leading-relaxed">{a.body}</p>
                  <p className="text-sm text-charcoal-soft dark:text-gray-300 leading-relaxed font-medium">
                    {a.detail}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-charcoal-muted dark:text-gray-500 mb-4">
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-3 p-4 rounded-xl border border-surface-border dark:border-dark-border bg-surface-card dark:bg-dark-card
                    hover:border-teal-700/30 dark:hover:border-teal-500/30 transition-colors duration-200"
                >
                  <BadgeCheck
                    size={18}
                    className="text-teal-700 dark:text-teal-400 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-medium text-charcoal dark:text-white">{cert.name}</p>
                    <p className="text-xs text-charcoal-muted dark:text-gray-500">{cert.issuer}</p>
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
