import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const skills = [
  'GHG Accounting (Scope 1, 2 & 3)',
  'BRSR & ESG Disclosures',
  'AI Agents for ESG Data Automation',
  'Life Cycle Assessment (LCA)',
  'Environmental Data Modeling',
  'Advanced Excel & SQL',
  'Python (Data Pipelines)',
  'Power BI & QGIS'
]

export default function About() {
  return (
    <section id="about" className="py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto border-t border-surface-border">
      <div className="grid md:grid-cols-12 gap-12 md:gap-24">
        
        {/* Left Col: Header */}
        <div className="md:col-span-5">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight text-text-primary"
          >
            Bridging Environmental Science and Data Architecture.
          </motion.h2>
        </div>

        {/* Right Col: Content */}
        <div className="md:col-span-7 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-2xl text-text-secondary leading-relaxed font-medium space-y-6"
          >
            <p>
              I am an M.E. Environmental Engineer specializing in corporate GHG accounting, regulatory compliance, and scalable ESG data systems.
            </p>
            <p>
              Beyond traditional accounting, I build <strong className="text-text-primary">AI-driven automation workflows</strong> to streamline ESG data acquisition, ensuring audit-ready transparency from the supply chain to the boardroom.
            </p>
          </motion.div>

          {/* Skills Minimal List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-6">Core Competencies</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {skills.map((skill, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-base font-medium text-text-primary">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
