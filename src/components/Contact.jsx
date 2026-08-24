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
    value: 'linkedin.com/in/arunachalamenv',
    href: 'https://linkedin.com/in/arunachalamenv',
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
    <section id="contact" className="section-pad border-t border-surface-border dark:border-dark-border" aria-label="Contact">
      <div className="section-wrapper">
        <p className="section-label reveal">Contact</p>
        <h2 className="section-heading reveal">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: message */}
          <div className="reveal">
            <p className="text-charcoal-soft dark:text-gray-300 text-base leading-[1.8] mb-6">
              I am actively looking for ESG, sustainability reporting, and environmental data roles. Whether you have an opportunity, want to discuss a project, or just want to connect — I would love to hear from you.
            </p>
            <p className="text-charcoal-soft dark:text-gray-300 text-base leading-[1.8]">
              Reach out via email or connect on LinkedIn — I typically respond within 24 hours.
            </p>

            {/* Availability indicator */}
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-teal-700/10 dark:bg-teal-500/15 border border-teal-700/20 dark:border-teal-500/20">
              <span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 animate-pulse" aria-hidden="true" />
              <span className="text-sm font-medium text-teal-800 dark:text-teal-300">
                Open to opportunities
              </span>
            </div>
          </div>

          {/* Right: contact links */}
          <div className="space-y-3 reveal-stagger">
            {contactLinks.map(({ icon: Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 rounded-xl
                  border border-surface-border dark:border-dark-border
                  bg-surface-card dark:bg-dark-card
                  hover:border-teal-700/40 dark:hover:border-teal-500/40
                  hover:bg-surface dark:hover:bg-dark-bg
                  transition-all duration-200 group
                  focus:outline-none focus:ring-2 focus:ring-teal-500"
                aria-label={`${label}: ${value}`}
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-teal-700/10 dark:bg-teal-500/15 flex items-center justify-center
                  group-hover:bg-teal-700/20 dark:group-hover:bg-teal-500/25 transition-colors duration-200">
                  <Icon size={17} className="text-teal-700 dark:text-teal-400" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-charcoal-muted dark:text-gray-500 mb-0.5">{label}</p>
                  <p className="text-sm font-medium text-charcoal dark:text-gray-200 truncate group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors duration-150">
                    {value}
                  </p>
                </div>
                <Send size={14} className="ml-auto text-charcoal-muted dark:text-gray-600 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors duration-150 flex-shrink-0" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
