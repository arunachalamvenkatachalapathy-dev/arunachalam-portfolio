import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Droplets, Calculator, FileSearch } from 'lucide-react'

const projects = [
  {
    icon: FileSearch,
    title: 'Environmental Risk & ESG Analysis of NLCIL',
    subtitle: 'M.E. Dissertation',
    description: 'Applied the Source–Pathway–Receptor (SPR) framework to assess heavy metal contamination risks. Translated findings into ESG-relevant insights supporting materiality screening and Just Transition considerations.',
    tags: ['ESG Risk', 'GRI 12', 'BRSR', 'SPR Framework'],
    link: null,
    badge: 'Dissertation',
  },
  {
    icon: Droplets,
    title: 'Paravanar Tripartite Governance Board',
    subtitle: 'Watershed Restoration Framework',
    description: 'Scholarly framework proposing tripartite governance for restoring the mercury/selenium-contaminated Paravanar watershed. Modelled a 10-ha Advanced Constructed Wetland.',
    tags: ['Blockchain', 'IoT', 'Constructed Wetland', 'NIUA'],
    link: 'https://arunachalamvenkatachalapathy-dev.github.io/paravanar/',
    badge: '₹50,000 Grant',
  },
  {
    icon: Calculator,
    title: 'NetZeroCalc',
    subtitle: 'BOM-to-LCI Carbon Footprint Mapper',
    description: 'A live tool that maps a Bill of Materials (BOM) to Life Cycle Inventory (LCI) data to calculate product-level carbon footprints, supporting emissions and carbon-credit style analysis.',
    tags: ['LCA', 'Carbon Footprint', 'BOM', 'LCI'],
    link: 'https://arunachalamvenkatachalapathy-dev.github.io/e-credits/',
    badge: 'Live Tool',
  },
]

function SpotlightCard({ children }) {
  const divRef = useRef(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => setOpacity(1)
  const handleMouseLeave = () => setOpacity(0)

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-surface border border-surface-border p-8 transition-colors duration-300 hover:border-accent/30 group"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0,220,130,.1), transparent 40%)`,
        }}
      />
      {children}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="section-wrapper max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16 text-center">
          Featured <span className="text-gradient-accent">Work.</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
              >
                <SpotlightCard>
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-surface-border flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500">
                      <Icon className="text-accent" size={24} />
                    </div>
                    {p.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                        {p.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-display font-semibold text-white mb-1 relative z-10">{p.title}</h3>
                  <p className="text-sm font-medium text-accent mb-4 relative z-10">{p.subtitle}</p>
                  
                  <p className="text-sm text-text-muted leading-relaxed mb-8 flex-1 relative z-10">
                    {p.description}
                  </p>

                  <div className="mt-auto relative z-10">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map((tag) => (
                        <span key={tag} className="text-[11px] font-medium text-text-secondary bg-background px-2.5 py-1 rounded-md border border-surface-border">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent transition-colors group/btn"
                      >
                        View Project
                        <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    ) : (
                      <span className="text-xs text-text-muted italic">Conference Paper</span>
                    )}
                  </div>
                </SpotlightCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
