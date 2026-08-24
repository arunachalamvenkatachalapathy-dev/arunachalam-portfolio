import { motion } from 'framer-motion'
import { LinkedInIcon, GitHubIcon } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto border-t border-surface-border">
      
      <div className="grid md:grid-cols-2 gap-16 md:gap-24">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-text-primary mb-6">
            Get in touch.
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed max-w-md">
            I am actively open for roles in ESG data automation, sustainability reporting, and environmental engineering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col space-y-8"
        >
          <div>
            <span className="block text-sm font-semibold uppercase tracking-widest text-text-muted mb-2">Email</span>
            <a href="mailto:arunachalamv.env@gmail.com" className="text-2xl font-medium text-text-primary hover:text-text-muted transition-colors">
              arunachalamv.env@gmail.com
            </a>
          </div>

          <div>
            <span className="block text-sm font-semibold uppercase tracking-widest text-text-muted mb-2">Phone</span>
            <a href="tel:+916383034230" className="text-xl font-medium text-text-primary hover:text-text-muted transition-colors">
              +91 63830 34230
            </a>
          </div>

          <div>
            <span className="block text-sm font-semibold uppercase tracking-widest text-text-muted mb-4">Social</span>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/arunachalamvenv/" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-text-muted transition-colors">
                <LinkedInIcon size={28} />
              </a>
              <a href="https://github.com/arunachalamvenkatachalapathy-dev" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-text-muted transition-colors">
                <GitHubIcon size={28} />
              </a>
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  )
}
