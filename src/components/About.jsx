import { motion } from 'framer-motion'
import { Leaf, BarChart2, ClipboardList, Database, Factory, Globe } from 'lucide-react'

const bentoItems = [
  {
    title: 'GHG Accounting',
    desc: 'Scope 1, 2 & 3 inventories aligned to GHG Protocol & ISO 14064.',
    icon: Leaf,
    className: 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-surface to-surface-hover',
  },
  {
    title: 'BRSR Reporting',
    desc: 'SEBI BRSR & BRSR Core disclosures, ESG KPI mapping & gap analysis.',
    icon: ClipboardList,
    className: 'md:col-span-1 md:row-span-2',
  },
  {
    title: 'Data-Driven ESG',
    desc: 'Audit-ready emission models, LCA, and evidence-backed insights.',
    icon: BarChart2,
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Environmental Eng.',
    desc: 'Wastewater Treatment, ZLD, and Energy Audits.',
    icon: Factory,
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Tech Stack',
    desc: 'Advanced Excel, SQL, Power BI, QGIS, OpenLCA.',
    icon: Database,
    className: 'md:col-span-1 md:row-span-1',
  },
]

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="section-wrapper max-w-6xl">
        
        <div className="flex flex-col md:flex-row gap-16 mb-20">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Bridging the gap between <br className="hidden md:block"/>
              <span className="text-gradient-accent">Data and Climate Action.</span>
            </h2>
          </div>
          <div className="flex-1 space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>
              I am an <strong className="text-white font-semibold">M.E. Environmental Engineer</strong> and ESG professional specializing in corporate GHG accounting and BRSR reporting.
            </p>
            <p>
              My work sits at the intersection of environmental science, data analytics, and sustainability governance. I build audit-ready emission models and translate complex environmental risk data into strategic boardroom insights.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
          {bentoItems.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-card p-8 flex flex-col justify-between group ${item.className}`}
              >
                <div className="w-12 h-12 rounded-xl bg-surface-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500">
                  <Icon className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-display">{item.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
