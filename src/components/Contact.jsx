import { motion } from 'framer-motion'
import { Mail, Phone, Send } from 'lucide-react'
import { LinkedInIcon, GitHubIcon } from './Icons'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'arunachalamv.env@gmail.com',
    href: 'mailto:arunachalamv.env@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 63830 34230',
    href: 'tel:+916383034230',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/arunachalamvenv',
    href: 'https://www.linkedin.com/in/arunachalamvenv/',
    external: true,
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: 'arunachalamvenkatachalapathy-dev',
    href: 'https://github.com/arunachalamvenkatachalapathy-dev',
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="section-wrapper max-w-5xl">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Let's <span className="text-gradient-accent">Connect.</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              I am actively looking for ESG, sustainability reporting, and environmental data roles. Whether you have an opportunity or just want to discuss a project — I'd love to hear from you.
            </p>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl glass-card border-accent/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-sm font-semibold text-white tracking-wide">
                Currently open for roles
              </span>
            </div>
          </motion.div>

          {/* Right: links */}
          <div className="flex flex-col gap-4">
            {contactLinks.map((link, i) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-6 p-6 rounded-2xl glass-card group hover:-translate-y-1"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface-border flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-text-muted mb-1 font-medium tracking-wide uppercase">{link.label}</p>
                    <p className="text-base font-medium text-white truncate group-hover:text-accent transition-colors">
                      {link.value}
                    </p>
                  </div>
                  <Send size={18} className="text-surface-border group-hover:text-accent transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
