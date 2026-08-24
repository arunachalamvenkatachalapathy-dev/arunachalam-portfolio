import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const experiences = [
  {
    role: 'ESG Technical Intern',
    company: 'EnviroWealth Services Pvt. Ltd.',
    location: 'Remote',
    duration: 'Nov 2025 – Mar 2026',
    bullets: [
      'Contributed to AI-enabled BRSR reporting workflows and Scope 1, 2, and selected Scope 3 GHG inventories, aligned with GHG Protocol and ISO 14064 principles.',
      'Designed a value chain data collection template capturing supplier GHG emissions, water usage, waste, employee count, safety incidents, and governance indicators for BRSR Principle 6 compliance.',
      'Created a 5-tab BRSR Core reporting template calculating GHG emissions, energy consumption, water withdrawal/discharge, waste metrics, and safety indicators per SEBI mandatory disclosure requirements.',
      'Compiled an emission factor reference database from CEA CO₂ Baseline 2024, India GHG Program, IPCC 2006, and DEFRA 2023.',
    ],
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
  },
]

export default function Experience() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  // Height of the glowing timeline line based on scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience" className="py-32 relative" ref={containerRef}>
      <div className="section-wrapper max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-20 text-center">
          Professional <span className="text-gradient-accent">Experience.</span>
        </h2>

        <div className="relative pl-8 md:pl-0">
          
          {/* Animated Timeline Line */}
          <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-[2px] bg-surface-border md:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-accent to-emerald-300 shadow-[0_0_15px_rgba(0,220,130,0.5)]"
            />
          </div>

          <div className="space-y-24">
            {experiences.map((exp, i) => {
              const isEven = i % 2 === 0
              return (
                <div key={i} className={`relative flex md:justify-between items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[-29px] md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-accent md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(0,220,130,0.4)]" />

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-5/12" />

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    className="w-full md:w-5/12 glass-card p-6 md:p-8"
                  >
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-surface-border text-xs font-semibold text-text-secondary mb-4">
                        {exp.duration}
                      </span>
                      <h3 className="text-xl font-display font-semibold text-white mb-1">{exp.role}</h3>
                      <p className="text-sm font-medium text-accent">{exp.company} <span className="text-text-muted">· {exp.location}</span></p>
                    </div>

                    <ul className="space-y-3">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                          <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent/50" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
