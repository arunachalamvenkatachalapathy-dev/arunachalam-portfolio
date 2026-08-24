import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-32 pb-12">
      
      <div className="max-w-5xl flex-1 flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-[6rem] lg:text-[7.5rem] font-display font-bold tracking-tight leading-none text-text-primary mb-8"
        >
          ESG Data Engineer <br className="hidden md:block"/>
          & Strategist.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-3xl font-medium text-text-secondary max-w-3xl leading-relaxed tracking-tight mb-12"
        >
          Arunachalam V. specializes in automating GHG accounting, BRSR compliance, and building <strong className="text-text-primary font-semibold">AI agents for ESG data acquisition.</strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="https://drive.google.com/drive/folders/1n600zacanICWFEQ1oX5XYOUyJLMSyvjc?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-primary">
            View Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-16 flex items-center gap-4 text-text-muted text-sm font-medium uppercase tracking-widest"
      >
        <ArrowDown size={16} className="animate-bounce" />
        <span>Scroll to explore</span>
      </motion.div>

    </section>
  )
}
