import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'ESG Data Automation Agents',
    category: 'AI & Data Engineering',
    description: 'Built custom AI agents to automate data acquisition and content creation for ESG reporting, drastically reducing manual data collection hours while ensuring audit-ready accuracy.',
    link: null, // Keep null or add link if available
  },
  {
    title: 'NetZeroCalc AI',
    category: 'Carbon Footprint App',
    description: 'An advanced sustainability intelligence application that automates the mapping of a Bill of Materials (BOM) to Life Cycle Inventory (LCI) data to quantify Scope 3 emissions.',
    link: 'https://arunachalamvenkatachalapathy-dev.github.io/netzerocalc-ai/',
  },
  {
    title: 'Paravanar Governance Board',
    category: 'Research & Framework',
    description: 'Scholarly framework proposing tripartite governance for restoring a contaminated watershed. Modelled an Advanced Constructed Wetland.',
    link: 'https://arunachalamvenkatachalapathy-dev.github.io/paravanar/',
  },
  {
    title: 'Environmental Risk of NLCIL',
    category: 'Dissertation',
    description: 'Applied the SPR framework to assess heavy metal contamination risks. Translated findings into ESG-relevant insights for materiality screening.',
    link: null,
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto border-t border-surface-border">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-text-primary">
          Selected Projects.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="minimal-card flex flex-col h-full group"
          >
            <div className="flex justify-between items-start mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                {p.category}
              </span>
              {p.link && (
                <ArrowUpRight className="text-text-muted group-hover:text-text-primary transition-colors" size={20} />
              )}
            </div>

            <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
              {p.title}
            </h3>
            
            <p className="text-base text-text-secondary leading-relaxed mb-8 flex-1">
              {p.description}
            </p>

            {p.link && (
              <a 
                href={p.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-auto text-sm font-semibold text-text-primary hover:underline underline-offset-4"
              >
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </div>

    </section>
  )
}
