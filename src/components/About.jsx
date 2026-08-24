import { Leaf, BarChart2, ClipboardList } from 'lucide-react'

const highlights = [
  {
    icon: Leaf,
    label: 'GHG Accounting',
    desc: 'Scope 1, 2 & 3 inventories aligned to GHG Protocol & ISO 14064',
  },
  {
    icon: ClipboardList,
    label: 'BRSR Reporting',
    desc: 'SEBI BRSR & BRSR Core disclosures, ESG KPI mapping & gap analysis',
  },
  {
    icon: BarChart2,
    label: 'Data-Driven ESG',
    desc: 'Audit-ready emission models, LCA, and evidence-backed sustainability insights',
  },
]

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-surface-border dark:border-dark-border" aria-label="About">
      <div className="section-wrapper">
        <p className="section-label reveal">About</p>
        <h2 className="section-heading reveal">Who I Am</h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Bio text */}
          <div className="space-y-5 reveal">
            <p className="text-charcoal-soft dark:text-gray-300 text-base leading-[1.8]">
              I am an <strong className="font-semibold text-charcoal dark:text-white">M.E. Environmental Engineer</strong> and ESG Technical Intern specializing in corporate GHG accounting (Scope 1–3) and SEBI BRSR reporting.
            </p>
            <p className="text-charcoal-soft dark:text-gray-300 text-base leading-[1.8]">
              I build <strong className="font-semibold text-charcoal dark:text-white">audit-ready emission models</strong> and translate complex environmental risk data into strategic, high-value ESG insights — bridging the gap between on-the-ground engineering data and boardroom-level disclosure requirements.
            </p>
            <p className="text-charcoal-soft dark:text-gray-300 text-base leading-[1.8]">
              My work sits at the intersection of <span className="text-teal-700 dark:text-teal-400 font-medium">environmental science, data analytics, and sustainability governance</span> — fields I believe are critical for meaningful corporate climate action.
            </p>

            {/* Quick facts */}
            <div className="pt-2 grid grid-cols-2 gap-4">
              {[
                { label: 'Focus Area', value: 'ESG & GHG Accounting' },
                { label: 'Education', value: 'M.E. Environmental Engg.' },
                { label: 'CGPA', value: '9.0 / 10' },
                { label: 'Status', value: 'Open to Opportunities' },
              ].map((fact) => (
                <div key={fact.label} className="border-l-2 border-teal-700/30 dark:border-teal-500/30 pl-3">
                  <p className="text-xs text-charcoal-muted dark:text-gray-500 mb-0.5">{fact.label}</p>
                  <p className="text-sm font-medium text-charcoal dark:text-gray-200">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid gap-4 reveal-stagger">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="card flex gap-4 items-start">
                <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-teal-700/10 dark:bg-teal-500/15 flex items-center justify-center">
                  <Icon size={18} className="text-teal-700 dark:text-teal-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal dark:text-white text-sm mb-1">{label}</h3>
                  <p className="text-charcoal-muted dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
