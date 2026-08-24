import { motion } from 'framer-motion'
import { FileText, Mail } from 'lucide-react'
import { LinkedInIcon, GitHubIcon } from './Icons'

const BASE = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Premium glowing background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-hero-glow rounded-full blur-[100px] opacity-40 mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="section-wrapper relative z-10 w-full text-center flex flex-col items-center">
        
        {/* Animated tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-accent/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Available for Opportunities</span>
        </motion.div>

        {/* Massive Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-display font-extrabold tracking-tighter leading-[0.9] mb-6 text-white"
        >
          Arunachalam <span className="text-gradient-accent">V.</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl font-medium text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          ESG & Sustainability Professional building audit-ready <span className="text-white">GHG inventories</span> and strategic climate disclosures.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a href={`${BASE}resume.pdf`} target="_blank" rel="noopener noreferrer" className="btn-primary group">
            <FileText size={18} />
            <span>View Resume</span>
          </a>
          <a href="#contact" className="btn-secondary group">
            <Mail size={18} className="text-text-muted group-hover:text-accent transition-colors" />
            <span>Contact Me</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center gap-6"
        >
          <a
            href="https://www.linkedin.com/in/arunachalamvenv/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent hover:-translate-y-1 transition-all duration-300"
          >
            <LinkedInIcon size={24} />
          </a>
          <a
            href="https://github.com/arunachalamvenkatachalapathy-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent hover:-translate-y-1 transition-all duration-300"
          >
            <GitHubIcon size={24} />
          </a>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted">Scroll</span>
        <div className="w-[1px] h-12 bg-surface-border overflow-hidden">
          <div className="w-full h-full bg-accent transform origin-top animate-[scrolldown_2s_ease-in-out_infinite]" />
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes scrolldown {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  )
}
