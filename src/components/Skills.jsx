const skillGroups = [
  {
    category: 'ESG & Sustainability Reporting',
    color: 'teal',
    skills: [
      'SEBI BRSR & BRSR Core',
      'GRI Standards',
      'CSRD (Working Knowledge)',
      'Double Materiality',
      'ESG KPI Mapping',
      'ESG Gap Analysis',
      'ESG Assurance Fundamentals',
    ],
  },
  {
    category: 'Climate & Carbon Accounting',
    color: 'teal',
    skills: [
      'GHG Protocol (Scope 1, 2, 3)',
      'ISO 14064 (Principles)',
      'Corporate Carbon Inventories',
      'Activity Data Structuring',
      'Emission Factor Application',
      'Life Cycle Assessment (LCA)',
    ],
  },
  {
    category: 'Data & Analytics',
    color: 'teal',
    skills: [
      'Advanced Excel (VLOOKUP, Pivot Tables)',
      'Multi-Sheet Emission Models',
      'SQL',
      'Power BI',
      'Python',
      'QGIS',
      'OpenLCA',
      'Emission Factor Databases (CEA, IPCC, DEFRA)',
    ],
  },
  {
    category: 'Environmental Engineering',
    color: 'teal',
    skills: [
      'Wastewater Treatment Systems',
      'Energy Audits',
      'ZLD Systems',
      'FGD Systems',
      'Environmental Risk Assessment',
      'Phytoremediation',
      'Source–Pathway–Receptor (SPR) Framework',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-surface-border dark:border-dark-border" aria-label="Skills">
      <div className="section-wrapper">
        <p className="section-label reveal">Skills</p>
        <h2 className="section-heading reveal">Expertise</h2>

        <div className="grid sm:grid-cols-2 gap-5 reveal-stagger">
          {skillGroups.map((group) => (
            <div key={group.category} className="card">
              {/* Category header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-5 rounded-full bg-teal-700 dark:bg-teal-500" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-charcoal dark:text-white">
                  {group.category}
                </h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
