const experiences = [
  {
    role: 'ESG Technical Intern',
    company: 'EnviroWealth Services Pvt. Ltd.',
    location: 'Remote',
    duration: 'Nov 2025 – Mar 2026',
    bullets: [
      'Contributed to AI-enabled BRSR reporting workflows and Scope 1, 2, and selected Scope 3 GHG inventories, aligned with GHG Protocol and ISO 14064 principles.',
      'Designed a value chain data collection template capturing supplier GHG emissions, water usage, waste, employee count, safety incidents, and governance indicators for BRSR Principle 6 compliance.',
      'Created a 5-tab BRSR Core reporting template calculating GHG emissions, energy consumption (GJ), water withdrawal/discharge, waste metrics, safety indicators (LTIFR), and gender diversity percentages per SEBI mandatory disclosure requirements.',
      'Compiled an emission factor reference database from CEA CO₂ Baseline 2024, India GHG Program, IPCC 2006, and DEFRA 2023.',
    ],
    tags: ['BRSR', 'GHG Protocol', 'ISO 14064', 'Scope 1–3', 'AI-Enabled Reporting'],
  },
  {
    role: 'Environmental Engineering Intern',
    company: 'Tamil Nadu Water Supply and Drainage Board (TWAD)',
    location: '16 MLD Facility',
    duration: 'Jun 2025 – Jul 2025',
    bullets: [
      'Conducted process, hydraulic, and energy audits for a 16 MLD wastewater treatment plant.',
      'Analyzed operational and electromechanical data to identify efficiency gaps.',
      'Developed recommendations resulting in ~7% improvement in energy efficiency, directly relevant to Scope 2 emissions reduction.',
      'Gained exposure to public-sector infrastructure performance monitoring and compliance practices.',
    ],
    tags: ['Energy Audit', 'WTP Operations', 'Scope 2', 'Process Optimization'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-pad border-t border-surface-border dark:border-dark-border" aria-label="Experience">
      <div className="section-wrapper">
        <p className="section-label reveal">Experience</p>
        <h2 className="section-heading reveal">Work History</h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[5px] top-4 bottom-0 w-px bg-surface-border dark:bg-dark-border"
            aria-hidden="true"
          />

          <div className="space-y-12 pl-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative reveal">
                {/* Timeline dot */}
                <div
                  className="timeline-item absolute -left-8"
                  aria-hidden="true"
                />

                {/* Card */}
                <div className="card">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-base font-semibold text-charcoal dark:text-white mb-0.5">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-teal-700 dark:text-teal-400 font-medium">
                        {exp.company}
                        <span className="text-charcoal-muted dark:text-gray-500 font-normal">
                          {' '}· {exp.location}
                        </span>
                      </p>
                    </div>
                    <span className="flex-shrink-0 text-xs font-medium px-2.5 py-1 rounded-full bg-surface-card dark:bg-dark-bg border border-surface-border dark:border-dark-border text-charcoal-muted dark:text-gray-400">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5" role="list">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-charcoal-soft dark:text-gray-300 leading-relaxed">
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-teal-700/50 dark:bg-teal-500/50" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="skill-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
