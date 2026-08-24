import { GraduationCap } from 'lucide-react'

const education = [
  {
    degree: 'M.E. Environmental Engineering',
    institution: 'Alagappa Chettiar Government College of Engineering & Technology',
    location: 'Karaikudi, Tamil Nadu',
    year: '2026 (Expected)',
    cgpa: '9.0 / 10',
    highlight: 'Dissertation: Environmental Risk & ESG Analysis of NLCIL — AICTE Conference Presenter',
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
    <section id="education" className="section-pad border-t border-surface-border dark:border-dark-border" aria-label="Education">
      <div className="section-wrapper">
        <p className="section-label reveal">Education</p>
        <h2 className="section-heading reveal">Academic Background</h2>

        <div className="grid md:grid-cols-2 gap-5 reveal-stagger">
          {education.map((edu) => (
            <div key={edu.degree} className="card flex gap-4 items-start">
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-700/10 dark:bg-teal-500/15 flex items-center justify-center mt-0.5">
                <GraduationCap size={20} className="text-teal-700 dark:text-teal-400" aria-hidden="true" />
              </div>

              <div>
                <h3 className="font-semibold text-charcoal dark:text-white text-sm mb-0.5 leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-sm text-teal-700 dark:text-teal-400 font-medium mb-0.5">
                  {edu.institution}
                </p>
                <p className="text-xs text-charcoal-muted dark:text-gray-500 mb-3">
                  {edu.location} · {edu.year}
                </p>

                {/* CGPA badge */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-700/10 dark:bg-teal-500/15 text-teal-800 dark:text-teal-300">
                    CGPA: {edu.cgpa}
                  </span>
                  {edu.highlight && (
                    <p className="text-xs text-charcoal-muted dark:text-gray-500 leading-relaxed">
                      {edu.highlight}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
