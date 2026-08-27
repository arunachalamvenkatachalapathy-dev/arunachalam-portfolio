import { ExternalLink, FileSearch, Droplets, Calculator } from 'lucide-react'

const projects = [
  {
    icon: FileSearch,
    title: 'Environmental Risk & ESG Analysis of NLCIL',
    subtitle: 'M.E. Dissertation',
    description:
      'Applied the Source–Pathway–Receptor (SPR) framework to assess heavy metal contamination risks in the Neyveli industrial region. Translated findings into ESG-relevant insights supporting materiality screening, climate risk understanding, and Just Transition considerations.',
    bullets: [
      'SPR framework for heavy metal contamination risk assessment',
      'BRSR-aligned ESG KPI mapping & gap analysis, benchmarked to GRI 12 (Coal Sector)',
      'Presented at National AICTE-Sponsored Conference on Green Solutions for Energy, Environment & Sustainability',
    ],
    tags: ['ESG Risk', 'GRI 12', 'BRSR', 'Heavy Metals', 'SPR Framework', 'Coal Sector'],
    link: null,
    linkLabel: null,
    badge: 'Dissertation · Conference Paper',
  },
  {
    icon: Droplets,
    title: 'Paravanar Tripartite Governance Board',
    subtitle: 'Watershed Restoration & Evidence Framework',
    description:
      'Independent scholarly framework (NIUA–NMCG "Re-imagining Urban Rivers" Season 6) proposing tripartite governance for restoring the mercury/selenium-contaminated Paravanar watershed in Cuddalore District, Tamil Nadu.',
    bullets: [
      'Blockchain-based evidence ledger (SHA-256, NFC-tagged) across 6 IoT sentinel stations',
      '10-ha Advanced Constructed Wetland modelled with ~95% mercury removal efficiency',
      'Dual-pathway financing: ₹125.66 Cr CAPEX vs. ₹20.74 Cr/yr environmental debt',
    ],
    tags: ['Watershed Restoration', 'Blockchain', 'IoT', 'Constructed Wetland', 'NIUA', 'NMCG'],
    link: 'https://arunachalamvenkatachalapathy-dev.github.io/paravanar/',
    linkLabel: 'View Live Site',
    badge: 'NIUA Research Grant · ₹50,000',
  },
  {
    icon: Calculator,
    title: 'NetZeroCalc AI',
    subtitle: 'Automated BOM-to-LCI Carbon Mapper',
    description:
      'An advanced sustainability intelligence application that automates the mapping of complex Bill of Materials (BOM) to Life Cycle Inventory (LCI) databases. Engineered to accelerate product-level greenhouse gas (GHG) accounting and carbon reporting workflows.',
    bullets: [
      'Automates BOM-to-LCI mapping to quantify Scope 3 supply chain emissions',
      'Enables granular product-level GHG impact assessment and mitigation planning',
      'Generates scalable, compliance-ready carbon credit analysis and reporting',
    ],
    tags: ['Carbon Accounting', 'LCA', 'Scope 3', 'BOM Mapping', 'ESG Tech'],
    link: 'https://arunachalamvenkatachalapathy-dev.github.io/netzerocalc-ai/',
    linkLabel: 'View Live Application',
    badge: 'Production Application',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-pad border-t border-surface-border dark:border-dark-border" aria-label="Projects and research">
      <div className="section-wrapper">
        <p className="section-label reveal">Projects & Research</p>
        <h2 className="section-heading reveal">Selected Work</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 reveal-stagger">
          {projects.map((p) => {
            const Icon = p.icon
            return (
              <article
                key={p.title}
                className="card flex flex-col h-full group"
              >
                {/* Icon + badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-700/10 dark:bg-teal-500/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-teal-700 dark:text-teal-400" aria-hidden="true" />
                  </div>
                  {p.badge && (
                    <span className="text-xs font-medium text-charcoal-muted dark:text-gray-500 bg-surface dark:bg-dark-bg border border-surface-border dark:border-dark-border rounded-full px-2.5 py-0.5 text-right leading-relaxed max-w-[130px]">
                      {p.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-charcoal dark:text-white text-sm mb-0.5 leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs text-teal-700 dark:text-teal-400 font-medium mb-3">{p.subtitle}</p>

                {/* Description */}
                <p className="text-charcoal-muted dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {p.description}
                </p>

                {/* Key bullets */}
                <ul className="space-y-1.5 mb-4 flex-1" role="list">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-xs text-charcoal-soft dark:text-gray-300 leading-relaxed">
                      <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-teal-700/50 dark:bg-teal-400/50" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((tag) => (
                    <span key={tag} className="skill-tag text-[11px]">{tag}</span>
                  ))}
                </div>

                {/* CTA */}
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 dark:text-teal-400
                      hover:text-teal-800 dark:hover:text-teal-300 transition-colors duration-150
                      focus:outline-none focus:underline"
                    aria-label={`${p.linkLabel} — ${p.title}`}
                  >
                    {p.linkLabel}
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="mt-auto text-xs text-charcoal-muted dark:text-gray-500 italic">
                    Conference presentation · No public link
                  </span>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
